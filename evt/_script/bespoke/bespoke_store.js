// 20200717 - 팝업 닫기클릭시 -> 옵션 유무 체크

var customizingRef = (function(d, w, $) {
	
	var customizingRef = customizingRef || {};
    var packageHeadTitle = '';
    var packageGroupCustomizing = function(pkgModelNo){
    	if(pkgModelNo == 'RWP70010TWW' || pkgModelNo == 'RA-A00AUUBA'){
    		customizingRef.packageAutoSumHeadTitle = '정수기 옵션#1';
    	}else if(pkgModelNo == 'RA-A00AUUAA'){
    		customizingRef.packageAutoSumHeadTitle = '정수기 옵션#2';
    	}else if(pkgModelNo == 'RA-KGDRQ42A'){
    		customizingRef.packageAutoSumHeadTitle = '곡물 디스펜서';
		//20220106 신모델 추가 S
    	}else if(pkgModelNo == 'RA-W18IAABB'){
    		customizingRef.packageAutoSumHeadTitle = '베버리지 박스';
		//20220106 신모델 추가 E
		//20220121 신모델 추가 S
    	}else if(pkgModelNo == 'RA-W24IAAWF' || pkgModelNo == 'RA-W24IAAWH'){
    		customizingRef.packageAutoSumHeadTitle = '와인랙 선택';
		//20220121 신모델 추가 E
    	}else{
    		customizingRef.packageAutoSumHeadTitle = 'BESPOKE 수납존';
    	}
    }

    var sMyEdition = '.my-edition',
    sSTEP01 = sMyEdition + '-making-model',
    sSTEP02 = sMyEdition + '-making-doors',
    sSTEP03 = sMyEdition + '-section',
    sTABLE = sMyEdition + '-model_table',
    sACTIVE = 'active',
    sBtn = 'button',
    sDATACOLOR = 'data-color',
    sTABBTN = sMyEdition + '_tab',
    sTABVIEW = sTABBTN + '-view',
    sDoor = sMyEdition + '-door',
    sSaveBtn = '.save_btn',
    sChoiceBtn = '.choice_btn',
    sREF = sDoor + '-selection div[data-type] .door_ref:visible',
         /* 190822 jasonpark 수정 및 추가 */
    //aDOORLENG4 = ['6door', '5door', '4door', '4door_kf','4door_chef', '5door_chef','basic_chef'], //20220121 인피니트 라인 추가
    aDOORLENG4 = ['6door', '5door', '4door', '4door_kf','4door_chef', '5door_chef','basic_chef', 'il_4door', 'il_5door', 'il_4door_kf'], //20220121 인피니트 라인 추가
    //aKIMCHI = ['4door_kimchi_486', '4door_kimchi_584', '4door_kimchi_420'], //20220121 인피니트 라인 추가
    aKIMCHI = ['4door_kimchi_486', '4door_kimchi_584', '4door_kimchi_420', 'il_4door_kimchi'], //20220121 인피니트 라인 추가
    /* // 190822 jasonpark 수정 및 추가 */
    aKIMCHIEXT = ['RQ58T94H1AP','RQ58T9491AP','RQ58T9481AP','RQ58T9471AP','RQ58T9461AP','RQ58T9451AP','RQ58T9441AP','RQ48T9401AP','RQ48T94Y1AP','RQ48T94C1AP','RQ48T94B2AP','RQ48T94B1AP','RQ48T94A1AP','RQ48T9421AP','RQ48T9411AP'],
    sModelTable = '.my-edition-kancode_table.active';
var modelTemp;
var paramId,
    paramSitecode;
     var img_host = location.host.split(".")[0];
     // var sImgPath = './images';
     var sImgPath = imgDomain + '/bespoke/images/v3';

    var paramConvert = function(paramVal) {
        if (paramVal === '') {
            paramVal = 'total';
        } else {
            paramVal = paramVal;
        }
        return paramVal;
    };

    /*검증용 스토어 로그인*/
	function bespokeLocalLogion(returnUrl){

		/*
		var form_chk = document.createElement("form");

		form_chk.setAttribute("method", "POST");
		form_chk.setAttribute("action", 'https://local.sec.samsung.com/comLocal/bespoke/logout.do');
		//form_chk.setAttribute("action", 'http://mylocal.sec.samsung.com/comLocal/bespoke/logout.do');

		var hiddenEncData = document.createElement("input");

		hiddenEncData.setAttribute("type", "hidden");
		hiddenEncData.setAttribute("name", "retUrl");
		hiddenEncData.setAttribute("value", returnUrl);

		form_chk.appendChild(hiddenEncData);

		document.body.appendChild(form_chk);
		form_chk.submit();
		*/
	}

	var filterdStock;
    var filterByParameter = function(value, init) {
        var get = {
            paramVal: function(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            },
            model: function(storeModel) {
                if (paramSitecode !== '') {
                    filterdStock = storeModel[0].stock;
                }
            }
        };
        paramSitecode = paramConvert(get.paramVal(value));
        paramId = get.paramVal('id');
        
        // 2021.05.06 CHO, sdp,sam만 360 컬러 노출 요청 --- 임시하드코딩
        var psc = paramSitecode.toLowerCase();
        if(psc != "sdp"){
        	if(psc != "sam"){
        		$('.nochef').remove();
        	}
        }
        
        
        //var json_host = location.host.split(".")[0];
        // $.getJSON('store_sec.json', get.model);
        // $.getJSON('data_sec.json', init);
        //$.getJSON('//local.sec.samsung.com/comLocal/bespoke/json/store_' + paramSitecode + '.json', get.model);
        //$.getJSON('//local.sec.samsung.com/comLocal/bespoke/json/data_' + paramSitecode + '.json', init);
        $(sMyEdition + '_btn_area').hide();
        $('.my-edition-model-pkg').hide();
        var searchParams = {
		        storeCd : paramSitecode
		        //,
		        //year : $("#selectYear").val()
  		  };
        
	        //임시 search Params
	        /*
        	var searchParams = {
				'storeCd': 'b2c'
			};
	        */
	        if(location.pathname.indexOf("360")>-1){
	        	searchParams.colorChip = "Y";
	        }else{
	        	searchParams.colorChip = "N";	        	
	        }
	        
  		  $.ajax({
  			  	url: "/sec/xhr/bespoke/productInfo",
  			  	//url: "//local.sec.samsung.com/comLocal/bespoke/productInfo.do",  jkjang 임시주석
  		  	    //url: "http://mylocal.sec.samsung.com/comLocal/bespoke/productInfo.do",
	  		    dataType: 'json',
	  		    type:'POST',
	  		    data: searchParams,
	  		    //jsonp: "callback",
	  		  	jsonpCallback: "jsonpcallback_bespoke",
	  		    success: function(result) {
	  		    	console.log('성공 - ', result);
	  		    	
	  		    /*	삼판 json 데이터 전송용
	  		    	$('#wrap').remove();
	  		    	const json = JSON.stringify(result);
	  		    	$('#jsondata').text(json);
				*/
	  		    	
	  		    	var data = new Array();
					data.push(result.data);
					data.push(result.sessionMap);
		  		    //jkjang Bespoke 로그인 임시 주석
		  		    if(data[1].isBespokeLogin !== 'undefined'  && data[1].isBespokeLogin == 'N'){
		                  bespokeLocalLogion(window.location.href);
	                }
                	//console.log(data[0]);
                	init(data[0]);
	  		    },
	  		    error: function(xhr) {
	  		      //console.log('실패 - ', xhr);
	  		    }
  		  });
    };

    var caseParam = {
        init: function() {
            var $kancodeTable = $('.my-edition-kancode_table');

            $kancodeTable.addClass(sACTIVE);
            switch (paramSitecode) {
                case 'na':
                case 'nb':
                    $kancodeTable.addClass('kan-active');
                    break;
                case 'fn':
                    $(sSaveBtn).text('구매하기');
                    break;
            }
        },
        buy: function(paramId) {
            $(document).off('click').on('click', sSaveBtn, function() {
                switch (document.referrer) {
                    case 'familynet.shop.samsung.com/familynet':
                        location.href = 'https://stgus.shop.samsung.com/familynet/cart/buynow'
                        break;
                    case 'familynet.shop.samsung.com/fn/multistore/epp/solpopmall':
                        location.href = 'https://stgus.shop.samsung.com/solpopmall/cart/buynow'
                        break;
                }
            });
        }
    };

    var toggleView = {
        noEdition: {
            selector: {
                sNoEdition: sSTEP03 + ' .my-edition-sect-box .no_edition'
            },
            show: function() {
                $(this.selector.sNoEdition).show();
            },
            hide: function() {
                $(this.selector.sNoEdition).hide();
            }
        },
        makeEdition: {
            selector: {
                sMakeEdition: '.make_edition'
            },
            show: function() {
                $(this.selector.sMakeEdition).show();
                toggleView.cancleData.removeActive();
            },
            hide: function() {
                $(this.selector.sMakeEdition).hide();
            }
        },
        trBg: {
            selector: {
                sHoverClass: 'hoverBg',
                sClickClass: 'clickBg',
                sTable: sSTEP01 + ' table',
                sModelTr: '.model_tr'
            },
            hover: {
                show: function($this) {
                    $this.parent('tr').find(toggleView.trBg.selector.sModelTr).addClass(toggleView.trBg.selector.sHoverClass);
                },
                hide: function() {
                    $(toggleView.trBg.selector.sTable).find(toggleView.trBg.selector.sModelTr).removeClass(toggleView.trBg.selector.sHoverClass);
                }
            },
            click: {
                show: function($this) {
                    $this.parents('tr').find(toggleView.trBg.selector.sModelTr).addClass(toggleView.trBg.selector.sClickClass);
                },
                hide: function() {
                    $(toggleView.trBg.selector.sTable).find(toggleView.trBg.selector.sModelTr).removeClass(toggleView.trBg.selector.sClickClass);
                }
            }
        },
        trBgPkg: {
        	selector: {
        		sHoverClass: 'hoverBg',
        		sClickClass: 'clickBg',
        		sTable: 'my-edition-model_table',
        		sModelTr: '.pkg_td'
        	},
        	hover: {
        		show: function($this) {
        			//$this.parent().parent().find('tr').find(toggleView.trBgPkg.selector.sModelTr).addClass(toggleView.trBgPkg.selector.sHoverClass);
        			$this.parent().parent().find('tr').eq($this.parent().index()).find(toggleView.trBgPkg.selector.sModelTr).addClass(toggleView.trBgPkg.selector.sHoverClass);
        		},
        		hide: function() {
        			$('.my-edition-option').find(toggleView.trBgPkg.selector.sModelTr).removeClass(toggleView.trBgPkg.selector.sHoverClass);
        		}
        	},
        	click: {
        		show: function($this) {
        			//$this.parent().parent().parent().find(toggleView.trBgPkg.selector.sModelTr).addClass(toggleView.trBgPkg.selector.sClickClass);
        			$this.parent().parent().find(toggleView.trBgPkg.selector.sModelTr).addClass(toggleView.trBgPkg.selector.sClickClass);
        		},
        		hide: function($this) {
        			//$this.closest('#pkg').find('td').removeClass(toggleView.trBgPkg.selector.sClickClass);
        			$this.parent().parent().parent().find('td').removeClass(toggleView.trBgPkg.selector.sClickClass);
        		}
        	}
        },
        colorTab: {
            selector: {
                sNoProduct: '.no_product',
                sCaution: '.caution',
                doorImg: '.type-door_img',
                colorBox: sMyEdition + '-color-box',
                desc: sTABBTN + '-desc'
            },
            init: function() {
                $(sSTEP02).find(this.selector.doorImg).show();
                $(sSTEP02).find(this.selector.colorBox).show();
                $(sSTEP02).find(this.selector.desc).show();
                $(sSTEP02).find(this.selector.sNoProduct).hide();
            },
            after: function() {
                $(sSTEP02).find(this.selector.sNoProduct).show();
                $(sSTEP02).find(this.selector.sCaution).hide();
                $(sSTEP02).find(this.selector.doorImg).hide();
                $(sSTEP02).find(this.selector.doorImg).hide();
                $(sSTEP02).find(this.selector.colorBox).hide();
                $(sSTEP02).find('div[data-type]').hide();
                $(sSTEP02).find('' + sDoor + '-txts').hide();
                $(sSaveBtn).removeClass(sACTIVE);
                toggleView.cancleData.removeActive();
            }
        },
        cancleData: {
            selector: {
                sCancleData: '.cancle_data'
            },
            addActive: function() {
                if (!$(this.selector.sCancleData).hasClass(sACTIVE)) {
                    $(this.selector.sCancleData).addClass(sACTIVE);
                }
            },
            removeActive: function() {
                if ($(this.selector.sCancleData).hasClass(sACTIVE)) {
                    $(this.selector.sCancleData).removeClass(sACTIVE);
                }
            }
        },
        doorText: function($el, arr) {

            $el.find('.txt_door').text(arr[1]);
            $el.find('.txt_model').text(arr[0]);
            //$el.find('.txt_vol').text(arr[2]);
            $el.find('.txt_vol').html("가로×높이×깊이 <br>  : "+arr[2].toString().replace(/,/gi,"×").replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" mm");
            if(arr[3].toString().lastIndexOf("/") == arr[3].toString().length-1){
            	$el.find('.txt_subject').text(arr[3].toString().slice(0, -1));
            }else{
            	$el.find('.txt_subject').text(arr[3].toString());
            }
        }
    };

    var changeClass = function($el, btn, parents) {
        if (parents === undefined) {
            $el.addClass(sACTIVE).parent().eq(0).siblings().find(btn).removeClass(sACTIVE);
         /* 20190902 */
          var _offestTop = $('.my-edition-making-model').offset().top;

          $('body,html').stop().animate({
            scrollTop: _offestTop
          }, 500);
          /* // 20190902 */

        } else {
            $el.addClass(sACTIVE).parents(parents).siblings().find(btn + ':not(' + sChoiceBtn + ')').removeClass(sACTIVE);
        }
    };
    //탭클릭시 초기화 함수 dhkim.
    var failSave = function(e) {

        var $REF = $(sSTEP02).find(sREF);
        $BTNSAVE = $(sSaveBtn);

        if( $BTNSAVE.hasClass(sACTIVE) ) {
            $BTNSAVE.removeClass(sACTIVE);
            $(sMyEdition + '_btn_area').hide();
            //$('.my-edition-model-pkg').hide();
        }

        $('.color_btn.active').removeClass(sACTIVE);
        changeClass($REF.find(sBtn).eq(0), sBtn);
        $(e.target).addClass(sACTIVE).parents('tr').siblings().find(sBtn).removeClass(sACTIVE);
        $REF.find(sBtn).removeAttr(sDATACOLOR).removeAttr('data-img').removeAttr('data-kan').text('');
        $REF.find(sBtn).css('background-image', '').text('');
        $REF.find(sBtn).css('background-color', '').text('');
        $(sModelTable).find('.door .model-code').text('');
        $(sModelTable).find('.door .kan-code').text('');
        $(sModelTable).find('.door .model-color').text('');
        $(sModelTable).find('.fixedRow').html('');
        $(sModelTable).find('.pkgRow').html('');
        $(sModelTable).find('.pkgFilterRow').html('');

        $("#pkgFilterMdl").val('');
    	//$("#pkgFilterCode").text('');
        $("[name=pkgFilterCode]").text('');
    	$("#pkgFilterKanCode").text('');
    };

    var tabInit_ = {};
    var init = function(data) {

        var filteredData;
        var gridTable = function() {

            filteredData = data;
            var aType = [];
            var selType = $('#selectType').val();
            var selYear = $('#selectYear').val();
            /*if('' == selType){
	             정렬 추가 (추후에 DB로 관리함)
	            var typeSort = {
	                    '6door' : 1,
	                    '5door' : 2,
	                    '4door' : 3,
	                    '4door_kf' : 4,
	                    '2door' : 5,
	                    '1door_refrigerator' : 6,
	                    '1door_freezer' : 7,
	                    '1door_slim' : 8,
	                    '4door_kimchi_584' : 9,
	                    '4door_kimchi_486' : 10,
	                    '3door_kimchi' : 11,
	                    '1door_kimchi' : 12
	                  };
	            정렬
	            data.sort(function(a,b){
	              return typeSort[a.dataType] - typeSort[b.dataType];
	            });
            }*/
            $.each(filteredData, function(i, item) {

            	if('' != selType && item.dataType !== selType) return true ;

                aType.push([]);
                if (item.product.length !== 0) {

                    var typeHTML =
                        '<tr class="type_top' + (function() {
                            if (item.product.length === 1) {
                                return ' type_bottom';
                            } else {
                                return '';
                            }
                        })() + '">' +
                        '<td scope="col" rowspan="@ROWSPAN@">' +
                        '<span class="type_img">' +

                        '<img src=\'' + sImgPath + '/frame/thumb_' +(function(){
                        	if (item.dataType.indexOf('1door') > -1 && item.dataType !== '1door_slim') {
                        		//20220106 신모델 추가 S
                        		if(item.dataType == '1door_wine'){
                        			return '1door_slim';
                        		}else if (item.dataType == 'il_1door_wine'){
                        			return item.dataType;
                        		} else {
                        		//20220106 신모델 추가 E
                        			return '1door';
                        		}//20220106 신모델 추가
                            } else {
                            	//20220121 인피니트 라인 추가 S
                            	if(item.dataType == 'il_4door' || item.dataType == 'il_4door_kf'){
                            		return '4door';
                            	} else if (item.dataType == 'il_5door'){
                            		return '5door';
                            	} else if (item.dataType == 'il_4door_kimchi'){
                            		return '4door_kimchi_486';
                    			} else {
                            	//20220121 인피니트 라인 추가 E
                    				return item.dataType;
                    			} //20220121 인피니트 라인 추가
                            }
                        })()+ '.png\'  alt="">' +
                          /* 190822 jasonpark 용량추가 */
                        /*'<p class="type_tit">' + item.type + '<br>'+ (item.volume.length > 0 ? '(' + item.volume + ')' : ' ') +'</p></td>' +*/
                        '<p class="type_tit">' + item.type +'</p></td>' +
                        /* // 190822 jasonpark 추가 */
                        (function() {

                        	if (item.subject.length > 0) {
                        		var subTag = "";
                        		var arr = item.subject[0].split('/');
                        		var arrIdx = 0;
                                if (arr.length > 1) {

                                	$.each(arr, function(i) {
                                		subTag +=arr[i];
                                		if(arrIdx < arr.length-1){
                                			subTag += "<br/>";
                                		}
                                		arrIdx++;
                                	});

                                    return '<td scope="col" class="product" rowspan="@ROWSPAN@">'+subTag+'</td>';
		                    	}else{
		                    		return '<td scope="col" class="product" rowspan="@ROWSPAN@">' + item.subject[0].replace("/","") + '</td>';
		                    	}
                        	}else{
                        		return '';
                        	}
                        })() +
                        '</span>' +
                        '</tr>';
                }

                aType[aType.length-1].push($(typeHTML).get(0));

                var optionTag = function(model){
                	var optArray = [];
                	var tag = '';
                	var optKey = Object.keys(model.convenience);
                	var optVal = Object.keys(model.convenience).map(function(i) { return model.convenience[i]; });

                	if(optKey.length > 0){
                		for( var i in optKey) {
                			if(optKey[i] == '도어개폐방향')
                				continue;
                			if(optVal[i] != "-" ){
                				tag = "&nbsp&nbsp<a href='javascript:callLayer(\""+optKey[i].replace(/\s/gi, '')+"|"+optVal[i]+"\");'>"+optKey[i]+"</a>";
                				optArray.push(tag);
                			}
                		}
                	}
                	return optArray;
                };


                var cnt =0;
                $.each(item.product, function(j, model) {


                	if('' != selYear && model.relYear !== selYear) return true ;
                	
                	if(!model.etc) model.etc = '';
                	
                	var replaceRelYear = model.relYear;
                	/*
                	if(aKIMCHIEXT.indexOf((model.modelName).toUpperCase()) > -1){
                		replaceRelYear = '2020'
                	}*/
                		
                	var tdHTML =
                        /* 190822 jasonpark 추가 */
                      '<td scope="col" class="model_tr"><span class="type_txt">' + model.etc+ '&nbsp</span></td>' +
                      '<td scope="col" class="model_tr convenience"><span class="type_txt">' + optionTag(model) + '&nbsp</span></td>' +
                      /* // 190822 jasonpark 추가 */
                        '<td scope="col" class="model_tr"><span class="type_txt">' + replaceRelYear + '</span></td>' +
                      '<td scope="col" class="model_tr"><span class="type_txt">' + model.energy.replace("-등급","-") + '</span></td>' +
                      '<td scope="col" class="model_tr"><a class="type_txt">' + model.modelName + '</a></td>' +
                      '<td scope="col" class="model_tr"><button class="choice_btn" type="button" data-model="' + model.modelName + '" data-type="' + item.dataType + '" data-department="' + model.department + '" data-kan="' + model.kanCd + '" data-year="' + model.relYear +'" data-colorCd="' + model.colorCd +'" data-subject="' + item.subject+'" data-liter="' + item.liter+'" data-pkgType="'+item.pkgType+'" data-doorDivYn="'+item.doorDivYn+'">선택</button></td>';

                  var modelHTML = (function() {
                      if (cnt + 1 === item.product.length) {
                          return '<tr class="type_bottom">' + tdHTML + '</tr>';
                      } else {
                          return '<tr>' + tdHTML + '</tr>';
                      }
                  })();

                    if (cnt === 0) {
                        $.each($(tdHTML), function(k, td) {
                            aType[aType.length-1][0].appendChild(td);
                        });
                    } else {
                        aType[aType.length-1].push($(modelHTML).get(0));
                    }
                    cnt++;
                });

                if(cnt == 0){
                	aType.pop();
                }else{
                	$(aType[aType.length-1][0]).find('td[rowspan="@ROWSPAN@"]').attr('rowspan',cnt);
                }

            });

            var appendHTML = function() {
                var $TYPECONTAINER = $(sSTEP01).find(sTABLE + ' tbody');

                $.each(aType, function(i, item) {
                    $TYPECONTAINER.append(aType[i]);
                });
            };

            appendHTML();
        };

        var tabInit = {
            selector: {
                $tabBtn: $(sTABBTN).find('>li a'),
                $tabView: $(sTABVIEW).find('>li')
            },
            btn: function(e) {
                this.selector.$tabBtn.removeClass(sACTIVE);
                this.selector.$tabBtn.eq(0).addClass(sACTIVE);
                failSave(e);
            },
            view: function() {
                this.selector.$tabView.hide();
                this.selector.$tabView.eq(0).show();
                toggleView.colorTab.init();
            },
            init: function(e) {
                this.btn(e);
                this.view();
            }
        };

        var choiceModelBtn = function() {
            var findData = function(e) {
                var modelData = {
                    model: $(this).attr('data-model').toLowerCase(),
                    type: $(this).attr('data-type'),
                    department: $(this).attr('data-department'),
                    kanCd: $(this).attr('data-kan'),
                    relYear: $(this).attr('data-year'),
                    colorCd: $(this).attr('data-colorCd'),
                    subject: $(this).attr('data-subject'),
                    liter: $(this).attr('data-liter'),
                    pkgType: $(this).attr('data-pkgType'),
                    doorDivYn : $(this).attr('data-doorDivYn')
                };

                modelTemp = modelData.model;
                modelData.typeName = data.filter(function(item) {
                    return modelData.type === item.dataType;
                })[0].type;
                modelData.volume = data.filter(function(item) {
                    return modelData.type === item.dataType;
                })[0].volume;

                if(modelData.pkgType == "T" || modelData.pkgType == "P"){
                	$('.my-edition-model-pkg').show();
                }else{
                	$('.my-edition-model-pkg').hide();
                }
                //init.choiceModelBtn.findData ....
                var gridColor = function() {

                    var event = {
                        selector: {
                            $TABBTN: $(sSTEP02).find(sTABBTN),
                            $TABVIEW: $(sSTEP02).find(sTABVIEW),
                            aMaterialBtn: [],
                            aFilteredMaterial: [],
                            aFilteredColor: []
                        },
                        filteringColor: function() {

                        	var $self = this.selector,
                                filterColor = filteredData.filter(function(i, item) {
                                	return i.dataType === modelData.type;
                                });

                        	var hasColorList = [];

                        	console.log(filterColor);
                            $.each(filterColor[0].option.list, function(year, item) {
                            	//if(year == modelData.relYear && hasColorList.length == 0){
                            		hasColorList.push(item);
                            	//}
                            });

                            console.log(hasColorList);
                            var colorTot = [];
                            var colorG = [];
                            var delIdxList = [];
                            var delIdx = {};

                            if(hasColorList[0]!= undefined){
                            	for (var k = 0; k < hasColorList.length; k++) {
                            		$.each(hasColorList[k], function(i, item) {

                                		if(item != null){
                                			colorG.push({});
                                			var dep1 = [];
                                			$.each(item.color, function(j, prod) {
                                				if(item.material == "코타 메탈" || item.material == "글램 글래스" || item.material == "새틴 글래스" || item.material == "페닉스" || item.material == "알루미늄" || item.material == "VCM" || item.material == "쉬머 글래스"){//20220106 신모델 추가
                                					dep1.push({});

                                					dep1[j].name = {
                                							"en" : prod.name.en,
                                							"kr" : prod.name.kr
                                					};
                                					dep1[j].clrChipUrl = prod.clrChipUrl;
                                					dep1[j].mixYn = prod.mixYn;
                                					dep1[j].clrGrpId = prod.clrGrpId;
                                					dep1[j].clrGrpNm = prod.clrGrpNm;
                                					colorTot.push(dep1[j]);

                                					if (delIdxList.length == 0) {
                                						delIdx = {};
                            							delIdx.odr = k;
                                						delIdx.idx = i;
                                						delIdxList.push(delIdx);
                                					} else {
                                						var existYn = false;
	                                					for (var kdx=0; kdx<delIdxList.length; kdx++) {
	                                						if (delIdxList[kdx].odr == k && delIdxList[kdx].idx == i) {
	                                							existYn = true;
	                                    						return;
	                                						}
	                                					}
	                                					
	                                					if (!existYn) {
                                							delIdx = {};
                                							delIdx.odr = k;
                                    						delIdx.idx = i;
                                    						delIdxList.push(delIdx);
	                                					}
	                                					existYn = false;
                                					}
                                				}
                                			});
                                			/*
                                			if (colorG[i]) {
                                				colorG[i].color = dep1;
                                			}
                                			*/
                                		}
                                	});
								}
                            	
                            	$.each(delIdxList, function(i, item) {
                            		delete hasColorList[item.odr][item.idx];
                            	});
                            	
                            	var totColorGroup = {
                                    "color": colorTot,
                                    "material": "글래스/메탈"
                                };

                            	if(colorTot.length > 0){
                            		//hasColorList[0].splice(0,delIdxList.length);
                            		hasColorList[0].push(totColorGroup);
                            		hasColorList[0].reverse();
                            	}

                            	var filtered = hasColorList[0].filter(function (el){
                            		return el != null;
                            	});
                            	$.each(filtered, function(i, item) {
                            		$self.aFilteredColor.push([]);
                            		var materialHTML =
                            			'<li data-id="tab_0' + (i + 1) + '">' +
                            			'<div class="my-edition-color-box">' +
                            			'<ul class="my-edition-color_list"></ul>' +
                            			'</div>' +
                            			'</li>';

                            		var materialBtn = '<li rel="tab_0' + (i + 1) + '" class="tab_0' + (i + 1) + ' ' + (function() {
                            			if (i === 0) {
                            				return 'active';
                            			} else {
                            				return '';
                            			}
                            		})() + '"><a href="">' + item.material + '</a></li>';
                            		
                            		
                            		// 2021.04.29 수정 CHO, Original Color 그룹별로 묶어서 뿌려주기.
                            		var grpColor = item.color;
                        			var colorHtml = '';
                        			// 태그 편의상....만듬
                        			var dTag = '<div class="colorchip_tit pc_only"><span class="cp_type">';
                        			var cdTag = '</span></div><div class="my-edition-color-box">';
                        			var uTag = '<ul class="my-edition-color_list">';
                        			var cuTag = '</ul></div>';
                        			var grp = 0;			// 그룹넘버
                        			var grpcnt = 0;			// 총 그룹 카운트
                        			
                        			// 초기화
                        			$('.colorchip_group').empty();
                        			
                        			for(var c = 0; c < grpColor.length; c++){
                        				// 그룹 바뀌는곳확인용
                        				var grpchange = grpColor[c].clrGrpId;
                        				var grpName = grpColor[c].clrGrpNm;
                        				// 컬러그룹이 다르면
                        				if(grp!=grpchange){
                        					grpcnt++;
                        					grp = grpchange;
                        					console.log(grp+"번그룹으로"+c+"번째 인덱스에서 그룹 변경");
                        					// 최초
                        					if(c==0){	
                        						colorHtml += dTag + grpName + cdTag + uTag;
                        						colorHtml += '<li><button type="button" class="color_btn" data-mixYn="'+grpColor[c].mixYn+'" data-color="' + grpColor[c].name.en + '" style="background: url('+grpColor[c].clrChipUrl+')no-repeat center top; background-size:contain;"><span>' + (function() {
                                    				var colorName = grpColor[c].name.kr;
                                    				if (colorName.indexOf(' ') > -1 && colorName.length > 5) {
                                    					var idx = colorName.indexOf(' '),
                                    					arr = colorName.split('');
                                    					arr[idx] = '<br>';
                                    					return arr.join('');
                                    				} else {
                                    					return colorName;
                                    				}
                                    			})() + '</span></button></li>';
                        					// 최초 이후 그룹 변경시
                        					}else if(c>0){
                        						colorHtml += cuTag + dTag + grpName + cdTag + uTag;;
                        						colorHtml += '<li><button type="button" class="color_btn" data-mixYn="'+grpColor[c].mixYn+'" data-color="' + grpColor[c].name.en + '" style="background: url('+grpColor[c].clrChipUrl+')no-repeat center top; background-size:contain;"><span>' + (function() {
                                    				var colorName = grpColor[c].name.kr;
                                    				if (colorName.indexOf(' ') > -1 && colorName.length > 5) {
                                    					var idx = colorName.indexOf(' '),
                                    					arr = colorName.split('');
                                    					arr[idx] = '<br>';
                                    					return arr.join('');
                                    				} else {
                                    					return colorName;
                                    				}
                                    			})() + '</span></button></li>';
                        						// 그룹 바뀌고 마지막일때
                        						if(c==grpColor.length-1){
                        							colorHtml += cuTag;
                        							// 색상 초기화 추가
                        							colorHtml += '<div class="new-colors-view" style="width:auto; padding-bottom:10px !important;">';
                        							colorHtml += '<a href="#" class="new-color-pop-open resetColor">색상 초기화</a>';
                        							colorHtml += '</div>';
                        						}
                        						
                        					}
                        				// 그룹이 같을시
                        				}else{
                        					colorHtml += '<li><button type="button" class="color_btn" data-mixYn="'+grpColor[c].mixYn+'" data-color="' + grpColor[c].name.en + '" style="background: url('+grpColor[c].clrChipUrl+')no-repeat center top; background-size:contain;"><span>' + (function() {
                                				var colorName = grpColor[c].name.kr;
                                				if (colorName.indexOf(' ') > -1 && colorName.length > 5) {
                                					var idx = colorName.indexOf(' '),
                                					arr = colorName.split('');
                                					arr[idx] = '<br>';
                                					return arr.join('');
                                				} else {
                                					return colorName;
                                				}
                                			})() + '</span></button></li>';
                    						// 종료시
                    						if(c==grpColor.length-1){
                    							colorHtml += cuTag + "</div>";
                    							// 색상 초기화 추가
                    							colorHtml += '<div class="new-colors-view" style="width:auto; padding-bottom:10px !important;">';
                    							colorHtml += '<a href="#" class="new-color-pop-open resetColor">색상 초기화</a>';
                    							colorHtml += '</div>';
                    						}
                    						
                        				}
                        			}
                        			$('.colorchip_group').append(colorHtml);
                        			/* 테스트용
                        			var grpColor = item.color;
                        			var colorHtml = '';
                        			var dTag = '<div>';
                        			var cdTag = '</div>';
                        			var grp = 0;			// 그룹넘버
                        			var grpcnt = 0;			// 총 그룹 카운트
                        			
                        			for(var c = 0; c < grpColor.length; c++){
                        				// 그룹 바뀌는곳확인용
                        				var grpchange = grpColor[c].clrGrpId;
                        				// 컬러그룹이 다르면
                        				if(grp!=grpchange){
                        					grpcnt++;
                        					grp = grpchange;
                        					console.log(grp+"번그룹으로"+c+"번째 인덱스에서 그룹 변경");
                        					// 최초
                        					if(c==0){	
                        						colorHtml += dTag;
                        						colorHtml += '<li><button type="button" class="color_btn" data-mixYn="'+grpColor[c].mixYn+'" data-color="' + grpColor[c].name.en + '" style="background: url('+grpColor[c].clrChipUrl+')no-repeat center top; background-size:contain;"><span>' + (function() {
                                    				var colorName = grpColor[c].name.kr;
                                    				if (colorName.indexOf(' ') > -1 && colorName.length > 5) {
                                    					var idx = colorName.indexOf(' '),
                                    					arr = colorName.split('');
                                    					arr[idx] = '<br>';
                                    					return arr.join('');
                                    				} else {
                                    					return colorName;
                                    				}
                                    			})() + '</span></button></li>';
                        					// 최초 이후 그룹 변경시
                        					}else if(c>0){
                        						colorHtml += cdTag + dTag;
                        						colorHtml += '<li><button type="button" class="color_btn" data-mixYn="'+grpColor[c].mixYn+'" data-color="' + grpColor[c].name.en + '" style="background: url('+grpColor[c].clrChipUrl+')no-repeat center top; background-size:contain;"><span>' + (function() {
                                    				var colorName = grpColor[c].name.kr;
                                    				if (colorName.indexOf(' ') > -1 && colorName.length > 5) {
                                    					var idx = colorName.indexOf(' '),
                                    					arr = colorName.split('');
                                    					arr[idx] = '<br>';
                                    					return arr.join('');
                                    				} else {
                                    					return colorName;
                                    				}
                                    			})() + '</span></button></li>';
                        						// 그룹 바뀌고 마지막일때
                        						if(c==grpColor.length-1){
                        							colorHtml += cdTag;
                        						}
                        						
                        					}
                        				// 그룹이 같을시
                        				}else{
                        					colorHtml += '<li><button type="button" class="color_btn" data-mixYn="'+grpColor[c].mixYn+'" data-color="' + grpColor[c].name.en + '" style="background: url('+grpColor[c].clrChipUrl+')no-repeat center top; background-size:contain;"><span>' + (function() {
                                				var colorName = grpColor[c].name.kr;
                                				if (colorName.indexOf(' ') > -1 && colorName.length > 5) {
                                					var idx = colorName.indexOf(' '),
                                					arr = colorName.split('');
                                					arr[idx] = '<br>';
                                					return arr.join('');
                                				} else {
                                					return colorName;
                                				}
                                			})() + '</span></button></li>';
                    						// 종료시
                    						if(c==grpColor.length-1){
                    							colorHtml += cdTag;
                    						}
                    						
                        				}
                        			}
                        			console.log(grpColor);
                        			console.log(colorHtml);
                        			for(var v=0; v<grpcnt+1; v++){
                        				$self.aFilteredColor[i].push($(colorHtml).get(v));
                        			}
                        			*/ 
                        			/* 원본소스
                        			 $.each(item.color, function(j, prod) {
                            			var colorHtml = '<li><button type="button" class="color_btn" data-mixYn="'+prod.mixYn+'" data-color="' + prod.name.en + '" style="background: url('+prod.clrChipUrl+')no-repeat center top; background-size:contain;"><span>' + (function() {
                            				 //[190522] 수정 
                            				var colorName = prod.name.kr;
                            				if (colorName.indexOf(' ') > -1 && colorName.length > 5) {
                            					var idx = colorName.indexOf(' '),
                            					arr = colorName.split('');

                            					arr[idx] = '<br>';
                            					return arr.join('');
                            				} else {
                            					return colorName;
                            				}
                            			})() + '</span></button></li>';

                            			$self.aFilteredColor[i].push($(colorHtml).get(0));
                            		});*/

                            		$self.aMaterialBtn.push(materialBtn);
                            		$self.aFilteredMaterial.push($(materialHTML).get(0));
                            	});
                            }
                        },
                        appendHtml: function() {
                            var $self = this.selector,
                                sColorList = sMyEdition + '-color_list';
                            $self.$TABVIEW.html('');
                            $.each($self.aFilteredColor, function(i, item) {
                                $self.$TABVIEW.append($self.aFilteredMaterial).find('li').eq(i).find(sColorList).append(item);
                            });

                            $self.$TABVIEW.find('li ' + sColorList).each(function(i) {
                                $(this).append($self.aFilteredColor[i]);
                            });

                            $self.$TABBTN.html('');
                            $.each($self.aMaterialBtn, function(i, item) {
                                $self.$TABBTN.append(item);
                            });
                        },
                        reStyle: function() {
                            var $el = this.selector.$TABBTN.find('li');
                            $el.css('width', 'calc(100% / ' + $el.length + ')');
                        },
                        init: function() {
                            this.filteringColor();
                            this.appendHtml();
                            this.reStyle();
                        }
                    };

                    var gridData = {
                        gridTypeImg: function() {
                            var stypeImg = sSTEP02 + ' ' + sDoor + '-selection';
                            var showFrame = function() {
                                $(stypeImg + ' div[data-type]').hide();
                                if (modelData.type.indexOf('1door') > -1 && modelData.type !== '1door_slim') {
                                	//20220106 신모델 추가 S
                                	if(modelData.type == '1door_wine'){
                                		$(stypeImg + ' div[data-type="1door_slim"]').show();
                                	}else{
                                	//20220106 신모델 추가 E
                                		$(stypeImg + ' div[data-type="1door"]').show();
                                	}//20220106 신모델 추가
                                }
                                // 20210121 인피니트 라인 추가S
                                else if(modelData.type == 'il_5door'){
                                	$(stypeImg + ' div[data-type="5door"]').show();
                                }
                                else if(modelData.type == 'il_4door' || modelData.type == 'il_4door_kf'){
                                	$(stypeImg + ' div[data-type="4door"]').show();
                                }
                                else if(modelData.type == 'il_4door_kimchi'){
                                	$(stypeImg + ' div[data-type="4door_kimchi_486"]').show();
                                }
                                // 20210121 인피니트 라인 추가E
                                else{
                                	$(stypeImg + ' div[data-type="' + modelData.type + '"]').show();
                                }
                            };

                            if(modelData.type.indexOf('family') > -1){
                            	$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/' + modelData.type + '_' + modelData.colorCd.replace("#","")+'.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                            }else if(modelData.type.indexOf('chef') > -1 ){
                            	$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/' + modelData.type + '_' + modelData.colorCd.replace("#","")+'.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                            }else{
                            	if (modelData.type.indexOf('1door') > -1 && modelData.type !== '1door_slim') {
                            		//20220106 신모델 추가 S
                            		if(modelData.type == '1door_wine'){
                            			$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/1door_slim.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                                	} else if (modelData.type == 'il_1door_refrigerator'){
                            			$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/il_1door_refrigerator'+ '_' + modelData.colorCd.replace("#","")+ '.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                            		} else if (modelData.type == 'il_1door_freezer'){
                            			$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/il_1door_freezer'+ '_' + modelData.colorCd.replace("#","")+ '.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                            		} else if (modelData.type == 'il_1door_kimchi'){
                            			$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/il_1door_kimchi'+ '_' + modelData.colorCd.replace("#","")+ '.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                            		} else if (modelData.type == 'il_1door_wine'){
                            			$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/il_1door_wine'+ '_' + modelData.colorCd.replace("#","")+ '.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                            		}
                            		else{
                                		//20220106 신모델 추가 E
                                		$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/1door.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                                	} //20220106 신모델 추가
                                }
                                // 20210121 인피니트 라인 추가S 20220125
                                else if(modelData.type == 'il_5door'){
                                	$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/5door' + '_' + modelData.colorCd.replace("#","")+ '.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                                }
                                else if(modelData.type == 'il_4door' || modelData.type == 'il_4door_kf'){
                                	$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/4door'+ '_' + modelData.colorCd.replace("#","")+ '.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                                }
                                else if(modelData.type == 'il_4door_kimchi'){
                                	$(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/4door_kimchi_486'+ '_' + modelData.colorCd.replace("#","")+'.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                                }
                                // 20210121 인피니트 라인 추가E
                            	else {
                                    $(stypeImg).find('img').attr('src', ''+ sImgPath + '/frame/' + modelData.type + '.png?$ORIGIN_PNG$').attr('alt', modelData.dataType);
                                }
                            }
                            showFrame();
                        },
                        gridTypeText: {
                            selector: {
                                stypeText: sSTEP02 + ' ' + sDoor + '-txts'
                            },
                            showFrame: function() {
                                $(this.selector.stypeText).css('display', 'inline-block');
                            },
                            pushText: function() {
                                var $el = $(this.selector.stypeText);
                                //toggleView.doorText($el, [modelData.model, modelData.typeName, modelData.volume]);
                                toggleView.doorText($el, [modelData.model, modelData.typeName, modelData.volume, modelData.subject, modelData.liter]);
                            },
                            init: function() {
                                this.showFrame();
                                this.pushText();
                            }
                        },
                        init: function() {
                            this.gridTypeImg();
                            this.gridTypeText.init();
                        }
                    };
                    event.init();
                    gridData.init();
                    tabInit.init(e);
                }; // gridColor end
                //init.choiceModelBtn.findData ....
                var choiceColorBtn = function() {
                    var $REF = $(sSTEP02).find(sREF);
                    var addActive = function() {
                        $REF.find(sBtn).off('click').on('click', function(e) {
                            if ($(this).hasClass(sACTIVE)) {
                                $(this).removeClass(sACTIVE);
                            } else {
                                changeClass($(this), sBtn);
                            }
                        });
                    };

                    var getDoorIdx = function(idx, type){
                        if (aDOORLENG4.indexOf(type) > -1 ) {
                            return (idx < 2)? 0:1;
                        }
                        // 190822 jasonpark 추가(0827) S
                        else if (aKIMCHI.indexOf(type) > -1) {
                            return (idx < 2) ? 0 : 1;
                            idx = 1;

                        } else if (type.indexOf("family") > -1) {
                           return (idx > 1) ?  1 : idx;
                        }
                        return idx;
                    };
                    var changeColor = function() {
                        var $COLORBTN = $(sSTEP02).find(sMyEdition + '-color-box ' + sBtn),
                            filteredPanel;

                        $COLORBTN.click(function() {

                            if ($REF.find(sBtn).hasClass(sACTIVE)) {

                            	$.each($REF.find(".door_btn").find(sBtn), function (z,item){

                            		if($(this).attr('data-mixYn') == 'N'){

                                		$(this).html('');
                            			$(this).attr('data-mixYn', '');
                            			$(this).attr('data-color', '');
                            			$(this).attr('data-img', '');
                            			$(this).attr('data-kan', '');
                            			$(this).css('background-image','');

                            			$.each($(sModelTable).find('tr.door'), function(i, item){

                                    		var target = $(this);

                                    		$.each($REF.find(".door_btn").find(sBtn), function (z,items){

                                    			if(i == z){
                                    				target.find('.model-code').text('');
                                    				target.find('.kan-code').text('');
                                    				target.find('.model-color').text('');
                                    			}
                                    		});
                                    	});
                            		}

                            	});

                                var colorAttr = $(this).attr(sDATACOLOR),
                                    colorText = $(this).text(),
                                    colorkanCode = $(this).attr('data-kan'),
                                	colorMixYn = $(this).attr('data-mixYn');
                                
                                $REF.find(sBtn + '.' + sACTIVE).attr(sDATACOLOR, colorAttr);
                                $REF.find(sBtn + '.' + sACTIVE).attr('data-kan', colorkanCode);
                                $REF.find(sBtn + '.' + sACTIVE).attr('data-mixYn', colorMixYn);
                                $REF.find(sBtn + '.' + sACTIVE).text(colorText);

                                var i = $REF.find(sBtn + '.' + sACTIVE).parent().index();
                                /*
                                data.filter(function(item) {

                                	$.each(item.panel, function(idx, val) {

                                		if(modelData.type === item.dataType && idx == modelData.relYear){
                                			filteredPanel = val;
                                		}
                                	});
                                });
                                */
                                
                                //패널 좌우구분 없을 경우.
                                if("N" == modelData.doorDivYn){
                                	i = getDoorIdx(i,modelData.type);
                                }
                                var doorIdx = $REF.find(sBtn + '.' + sACTIVE).parent().index() + 1;
                                
                                
                                //20200904 : EUWOOZIK
                                //console.log('TEST STEP IN : CLICK COLOR BTN ');
                                //console.log(modelData);
                                //console.log(doorIdx);
                                
                                if(aKIMCHIEXT.indexOf((modelData.model).toUpperCase()) > -1){
                                	var setRelYear = modelData.relYear;
                                	if(doorIdx < 3){
                                		setRelYear = '2020';
                                	}else{
                                		setRelYear = '2021';
                                	}
                                	data.filter(function(item) {
                                    	$.each(item.panel, function(idx, val) {
                                    		if(modelData.type === item.dataType){
                                    			filteredPanel = val;
                                    		}
                                    	});
                                    });
                                }else{
                                	data.filter(function(item) {
                                    	$.each(item.panel, function(idx, val) {
                                    		if(modelData.type === item.dataType){
                                    			filteredPanel = val;
                                    		}
                                    	});
                                    });
                                }
                                
                                if(colorMixYn== 'N'){
                            		$.each($REF.find(".door_btn").find(sBtn), function (z,item){

                            		var pInfo = $(this);
                            		pInfo.text(colorText);

                            		if("N" == modelData.doorDivYn){
                        				$.each(filteredPanel[getDoorIdx(z,modelData.type)], function (ii,zz){
                        					if(zz[colorAttr] !== undefined){
                            					panelCode = zz;
                            				}
                            			});

                        			}else{
                        				$.each(filteredPanel[z], function (ii,zz){
                            				if(zz[colorAttr] !== undefined){
                            					panelCode = zz;
                            				}
                            			});
                        			}

    									pInfo.attr('data-img', panelCode[colorAttr].panelCode);
    									pInfo.attr('data-mixYn', colorMixYn);
    									pInfo.attr('data-kan', panelCode[colorAttr].kanCd);
    									pInfo.css('background-image', 'url('+ sImgPath + '/door/' + (function() {
                                			if (aDOORLENG4.indexOf(modelData.type) > -1) {
                                				if ( (z+1) % 2 === 0) {
                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_right';
                                				} else {
                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_left';
                                				}
                                				/* 190822 jasonpark 추가 (0827)*/
                                			}else if (aKIMCHI.indexOf(modelData.type) > -1) {

                                				if ((z+1) === 1 ) {
                                					return panelCode[colorAttr].panelCode.toLowerCase()+ '_left';
                                				} else if ((z+1) === 2 ) {
                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_right';
                                				} else if ((z+1) === 3 ) {
                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_middle';
                                				} else if ((z+1) === 4 ) {
                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_bottom';
                                				} else {
                                					return panelCode[colorAttr].panelCode.toLowerCase();
                                				}
                                			} else if (modelData.type.indexOf('family') > -1) {

                                				if ((z+1) === 1 ) {
                                					return panelCode[colorAttr].panelCode.toLowerCase()+ '_left';
                                				} else if ((z+1) === 2 ) {
                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_left';
                                				} else  {
                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_right';
                                				}
                                			} else {

                                				return panelCode[colorAttr].panelCode.toLowerCase();
                                			}
                                		})() + '.png?$ORIGIN_PNG$)');

                            		});

                                }else{
                                	var cnt = filteredPanel[i].length;
                                	var n = 0;
                                	
                                	$.each(filteredPanel[i], function(k, panelCode) {
                                		
	                                    if (panelCode[colorAttr] !== undefined) {
	                                		$REF.find(sBtn + '.' + sACTIVE).attr('data-img', panelCode[colorAttr].panelCode);
	                                		$REF.find(sBtn + '.' + sACTIVE).attr('data-kan', panelCode[colorAttr].kanCd);
	                                		$REF.find(sBtn + '.' + sACTIVE).css('background-image', 'url('+ sImgPath + '/door/' + (function() {
	                                			if (aDOORLENG4.indexOf(modelData.type) > -1) {
	                                				if (doorIdx % 2 === 0) {
	                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_right';
	                                				} else {
	                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_left';
	                                				}
	                                				/* 190822 jasonpark 추가 (0827)*/
	                                			}else if (aKIMCHI.indexOf(modelData.type) > -1) {
	                                				if (doorIdx === 1 ) {
	                                					return panelCode[colorAttr].panelCode.toLowerCase()+ '_left';
	                                				} else if (doorIdx === 2 ) {
	                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_right';
	                                				} else if (doorIdx === 3 ) {
	                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_middle';
	                                				} else if (doorIdx === 4 ) {
	                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_bottom';
	                                				} else {
	                                					return panelCode[colorAttr].panelCode.toLowerCase();
	                                				}
	                                			} else if (modelData.type.indexOf('family') > -1) {
	                                				if (doorIdx === 1 ) {
	                                					return panelCode[colorAttr].panelCode.toLowerCase()+ '_left';
	                                				} else if (doorIdx === 2 ) {
	                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_left';
	                                				} else  {
	                                					return panelCode[colorAttr].panelCode.toLowerCase() + '_right';
	                                				}
	                                			} else {

	                                				return panelCode[colorAttr].panelCode.toLowerCase();
	                                			}
	                                		})() + '.png?$ORIGIN_PNG$)');
	                                		return false;
	                                    }
	                                    
	                                    n = n+1;
	                                });
                                	
                                	if(cnt == n) {
                                		var locText = '';
                                		var idx = 0;
                                		for(j=0; j<filteredPanel.length; j++) {
                                			$.each(filteredPanel[j], function(k, panelCode) {
                                				if (panelCode[colorAttr] !== undefined) {
                                					if(locText != '') {
                                						locText = locText + ", ";
                                					}
                                					locText = locText + getPositionText(panelCode[colorAttr].rowCode);
                                				}
                                			});
                                		}
                                		alert(colorText+"는 "+locText+" 전용 컬러입니다.\n다른 컬러를 골라 보세요!");
                                		return false;
                                	}
                                	
                                	
                                }

                            }
                            changeClass($(this), sBtn);

                            if($REF.find(sBtn + '.' + sACTIVE).attr('data-mixYn')== 'N'){

                            	$.each($(sModelTable).find('tr.door'), function(i, item){

                            		var target = $(this);

                            		$.each($REF.find(".door_btn").find(sBtn), function (z,items){

                            			if(i == z){
                            				target.find('.model-code').text(isEmpty($(this).attr('data-img')).toUpperCase());
                            				target.find('.kan-code').text(isEmpty($(this).attr('data-kan')));
                            				target.find('.model-color').text($(this).text());
                            			}
                            		});
                            	});

                            }else{

                            	var markCode = function() {
                            		var $REFBTN = $REF.find(sBtn + '.' + sACTIVE),
                            		doorIdx = $REFBTN.parent().index();

                            		if(doorIdx > -1){

                            			$(sModelTable).find('tr.door').eq(doorIdx).find('.model-code').text(isEmpty($REFBTN.attr('data-img')).toUpperCase());
                        				$(sModelTable).find('tr.door').eq(doorIdx).find('.kan-code').text(isEmpty($REFBTN.attr('data-kan')));
                        				$(sModelTable).find('tr.door').eq(doorIdx).find('.model-color').text($REFBTN.text());
                        				
                        				// 2021.05.26 CHO, 런던 L,R은 좌 우측만 하단테이블에 보이도록 수정
                        				if(($REFBTN.attr('data-color')=="london-L" && doorIdx % 2 == 1)||($REFBTN.attr('data-color')=="london-R" && doorIdx % 2 == 0)){
                        					alert("런던-L은 좌측 상칸, 런던-R은 우측 상칸에만 적용됩니다.");
                        					$(sModelTable).find('tr.door').eq(doorIdx).find('.kan-code').text('');
                        					$(sModelTable).find('tr.door').eq(doorIdx).find('.model-code').text('');
                        					$(sModelTable).find('tr.door').eq(doorIdx).find('.model-color').text('');
                        				}
                        				
                        				// 20210106 신모델추가 S
                        				if(($REFBTN.attr('data-color')=="langdebu-LU" && doorIdx % 2 == 1)||($REFBTN.attr('data-color')=="langdebu-RU" && doorIdx % 2 == 0)){
                        					alert("랑데부-좌상은 좌측 상칸, 랑데부-우상은 우측 상칸에만 적용됩니다.");
                        					$(sModelTable).find('tr.door').eq(doorIdx).find('.kan-code').text('');
                        					$(sModelTable).find('tr.door').eq(doorIdx).find('.model-code').text('');
                        					$(sModelTable).find('tr.door').eq(doorIdx).find('.model-color').text('');
                        				}
                        				if(($REFBTN.attr('data-color')=="langdebu-LB" && doorIdx % 2 == 1)||($REFBTN.attr('data-color')=="langdebu-RB" && doorIdx % 2 == 0)){
                        					alert("랑데부-좌하는 좌측 하칸, 랑데부-우하는 우측 하칸에만 적용됩니다.");
                        					$(sModelTable).find('tr.door').eq(doorIdx).find('.kan-code').text('');
                        					$(sModelTable).find('tr.door').eq(doorIdx).find('.model-code').text('');
                        					$(sModelTable).find('tr.door').eq(doorIdx).find('.model-color').text('');
                        				}
                        				// 20210106 신모델추가 E
                        					
                            		}
                            	};

                            	markCode();
                            }
                            
                            $('#alertCheck').val('Y');
                        });

                        var saveBtn = function() {
                            var $REF = $(sSTEP02).find(sREF);
                            $COLORBTN.click(function() {
                                // if( $REF.find(sBtn + ':visible').length === $REF.find(sBtn + '[' + sDATACOLOR + ']').length ) {
                                if ($REF.find(sBtn + ':visible').length === $REF.find(sBtn + '[data-img]').length) {
                                    $(sSTEP02).find(sSaveBtn).addClass(sACTIVE);
                                     //$(sMyEdition + '_btn_area').show();
                                     //$('.my-edition-model-pkg').show();
                                    
                                    $('.my-edition-kancode_table > tbody > tr.model > td').css('color','');
                                    $('.my-edition-kancode_table > tbody > tr.door > td').css('color','');
                                    $('.my-edition-kancode_table > tbody > tr.pkgRow > td').css('color','');
                                    $(sModelTable).find('.fixedRow.matchedRow').remove();
                                    
                                    var dataArray = parseParams();                            
                                    callFixed(dataArray[0],dataArray[1],'');
                                }
                            });
                        };

                        saveBtn();
                    };

                    addActive();
                    changeColor();
                }; //choiceColorBtn end
              //init.choiceModelBtn.findData ....
                var gridPakage = function(){
                	var $self = this.selector,
                    filterPakage = filteredData.filter(function(i, item) {
                    	return i.dataType === modelData.type;
                	});

                	// new Package Start

                	$("#pkgGrp").empty()
                	$("#pkgRowFilter").empty()
                	$("#pkgRowKattle").empty()
                	$(".pkgRow").remove();
                	$("#packgeSelectionDiv").hide();

					var pkgType = filterPakage[0].pkgType;

					if(typeof pkgType != "undefined" && pkgType != ""){
						$.each(filterPakage[0].product, function(i, product) {

	            			if(product.modelName == modelData.model.toUpperCase()){

	            				if(product.pakage != null){

	            					$.each(product.pakageGrp, function(pgIndex, pgItem) {
	            						$.each(product.pakage[pgItem], function(pIndex, pItem) {

	            							if(pIndex == 0){

	            								if(pItem.autoSumYn == 'N'){
	            									//$('#pakGroupList'+pgIndex).append($('<h4/>', { text: pgItem }));
	            									//$('#pkgGrp').append($('<h4/>', { text: pgItem }));
	            									packageGroupCustomizing(pItem.pkgMdl);
	            									$('#pkgGrp').append($('<h4/>', { text: customizingRef.packageAutoSumHeadTitle }));
	            								}else{
	            									packageGroupCustomizing(pItem.pkgMdl);
	            									//$('#pakGroupList'+pgIndex).append($('<h4/>', { text: customizingRef.packageAutoSumHeadTitle }));
	            									$('#pkgGrp').append($('<h4/>', { text: customizingRef.packageAutoSumHeadTitle }));
	            								}
	            								$('#pkgGrp').append($('<div/>', { id: 'pakGroupList'+pgIndex ,'class' : 'pkg' }));

	            								$('#pakGroupList'+pgIndex).append($('<table/>', {
	            									id: 'pakGroupListTb'+pgIndex,
	            									'class' : 'my-edition-model_table'
            									}));
	            								$('#pakGroupListTb'+pgIndex).append($('<caption/>', { text : '옵션선택 - '+pgItem }));
	            								$('#pakGroupListTb'+pgIndex).append($('<colgroup/>'));
	            								$('#pakGroupListTb'+pgIndex+' > colgroup').append($('<col/>', { 'width' : '25%' }));
	            								$('#pakGroupListTb'+pgIndex+' > colgroup').append($('<col/>', { 'width' : '*' }));
	            								$('#pakGroupListTb'+pgIndex+' > colgroup').append($('<col/>', { 'width' : '20%' }));
	            								$('#pakGroupListTb'+pgIndex+' > colgroup').append($('<col/>', { 'width' : '10%' }));

	            								// Thead는 일단 테스트용으로만 제작함
	            								/*
	            								$('#pakGroupListTb'+pgIndex).append($('<thead/>', { id : 'pakGroupListThead'+pgIndex }));
	            								$('#pakGroupListThead'+pgIndex).append($('<th/>',{ text : '제품명' }));
	            								$('#pakGroupListThead'+pgIndex).append($('<th/>',{ text : '제품구성' }));
	            								$('#pakGroupListThead'+pgIndex).append($('<th/>',{ text : '제품코드' }));
	            								$('#pakGroupListThead'+pgIndex).append($('<th/>',{ text : '선택' }));
	            								*/
	            								$('#pakGroupListTb'+pgIndex).append($('<tbody/>', { id : 'pakGroupListTBody'+pgIndex }));

	            								//DetailRow
	            								$('#selectedDoorAndPacInfo tbody').append($('<tr/>',{
	            									'class' : 'pkgRow'
	            								}));
	            								var selectedPacInfoTDTitle = 'BESPOKE 수납존';
	            								if(pItem.autoSumYn == 'Y' || pItem.pkgMdl == 'RA-KGDRQ42A' || pItem.pkgMdl == 'RA-W18IAABB' || pItem.pkgMdl == 'RA-W24IAAWF' || pItem.pkgMdl == 'RA-W24IAAWH'){ //20220121 인피니트라인 추가
	            									selectedPacInfoTDTitle = customizingRef.packageAutoSumHeadTitle;
	            								}

	            								$('#selectedDoorAndPacInfo tbody tr').last().append($('<td/>',{
	            									text : selectedPacInfoTDTitle
	            								}));

	            								$('#selectedDoorAndPacInfo tbody tr').last().append($('<td/>',{
	            									'class' : 'pkgCode',
	            									id : 'pkgCode'+pgIndex
	            								}));
	            								if (paramSitecode === 'na' || paramSitecode === 'nb') {
	            									$('#selectedDoorAndPacInfo tbody tr').last().append($('<td/>',{
		            									id : 'pkgKanCode'+pgIndex
		            								}));
	            								}
	            								$('#selectedDoorAndPacInfo tbody tr').last().append($('<td/>',{
	            									id : 'pkgName'+pgIndex
	            								}));
	            							}

	            							//Package Table Body Start
	            							$('#pakGroupListTBody'+pgIndex).append($('<tr/>',{ id : 'pakGroupListTBody'+pgIndex+'_row'+pIndex }));

	            							$('#pakGroupListTBody'+pgIndex+'_row'+pIndex).append($('<td/>', {
	            								'class' : 'pkg_td'
            								}));

	            							$('#pakGroupListTBody'+pgIndex+'_row'+pIndex+' td').eq(0).append($('<span/>', {
	            								'class' : 'type_txt'
	            								,text : pItem.pkgNm
	            							}));

	            							var optBody = '';
	            							$.each(pItem.pkgOptList, function(optIdx, opt) {
	            								if(opt.useYn == 'Y'){
	            									if(optBody.length == 0){
	            										optBody = $.trim(opt.optNm);
	            									}else{
	            										optBody += '/'+$.trim(opt.optNm);
	            									}
	            								}
	            							});

	            							$('#pakGroupListTBody'+pgIndex+'_row'+pIndex).append($('<td/>', {
	            								'class' : 'pkg_td'
	            							}));
	            							$('#pakGroupListTBody'+pgIndex+'_row'+pIndex+' td').eq(1).append($('<span/>', {
	            								'class' : 'type_txt'
	            								,text : optBody
	            							}));

	            							$('#pakGroupListTBody'+pgIndex+'_row'+pIndex).append($('<td/>', {
	            								'class' : 'pkg_td'
	            							}));
	            							$('#pakGroupListTBody'+pgIndex+'_row'+pIndex+' td').eq(2).append($('<span/>', {
	            								'class' : 'type_txt'
	            								,text : pItem.pkgMdl
	            							}));

	            							$('#pakGroupListTBody'+pgIndex+'_row'+pIndex).append($('<td/>', {
	            								'class' : 'pkg_td'
	            							}));
	            							if (paramSitecode === 'na' || paramSitecode === 'nb') {
			            							$('#pakGroupListTBody'+pgIndex+'_row'+pIndex+' td').eq(3).append($('<button/>', {
			            								'class' : 'choice_btn pkg'
			            								,text : '선택'
			            								,'data-pkgMdl' : pItem.pkgMdl
			            								,'data-pkgNm' : pItem.pkgNm
			            								,'data-kanCd' : pItem.kanCd
			            								,'data-pgCnt' : pgIndex
			            								,'data-parent-id' : 'pakGroupListTBody'+pgIndex
			            							}));

	            							}else{
		            								$('#pakGroupListTBody'+pgIndex+'_row'+pIndex+' td').eq(3).append($('<button/>', {
			            								'class' : 'choice_btn pkg'
			            								,text : '선택'
			            								,'data-pkgMdl' : pItem.pkgMdl
			            								,'data-pkgNm' : pItem.pkgNm
			            								,'data-pgCnt' : pgIndex
			            								,'data-parent-id' : 'pakGroupListTBody'+pgIndex
	
			            							}));
	            							}
		                				});
	            					});

	            					$("#packgeSelectionDiv").show();
	            				}
	            			}
						});
					}

					// new Package End
                };

                gridColor();
                choiceColorBtn();

                //init.choiceModelBtn.findData ....
                /* [190517] 추가 */
                var iframeOpen = function(SKUS) {
                    var matnrList = [];
                    //if(SKUS.panel != undefined){
	                    if($('#fixedMdl').val() != ''){
                            matnrList[0] = $('#fixedMdl').val();
                            //var selectedDepartment = $('#dataBody > tr.type_top > td.model_tr.clickBg > button.active').attr('data-department');
                            var selectedDepartment = $('#dataBody button.choice_btn.active').attr('data-department');
                            if(selectedDepartment == "C/C"){
                                $(".pkgCode").each(function (i,item){
                                    if($(this).text() != '' && $(this).text() != undefined){
                                        matnrList.push($(this).text());
                                    }
                                });
                            }
                        }else{
                        	console.log(SKUS);
                            matnrList[0] = SKUS.model;
                            for (i = 0; i < SKUS.panel.code.length; i++) {
                                matnrList[i + 1] = SKUS.panel.code[i];
                                console.log(matnrList[i+1]);
                            }

                            //페키지 제품 설정
                            $(".pkgCode").each(function (i,item){
                                if($(this).text() != '' && $(this).text() != undefined){
                                    matnrList.push($(this).text());
                                }
                            });
                        }

	                    //필터 제품 설정
	                    /*if($("#pkgFilterMdl").val() != "" && $("#pkgFilterMdl").val() != undefined ){
	                    	matnrList.push($("#pkgFilterMdl").val());
	                    }*/
                    /*}else{
                    	matnrList[0] = SKUS.fixedMdl;
                    }*/
                    /* [190522] 수정 */
                    function Request() {
                        var requestParam = "";
                        this.getParameter = function(param) {
                            var url = unescape(location.href);
                            var paramArr = (url.substring(url.indexOf("?") + 1, url.length)).split("&");
                            for (var i = 0; i < paramArr.length; i++) {
                                var temp = paramArr[i].split("=");
                                if (temp[0].toUpperCase() == param.toUpperCase()) {
                                    requestParam = paramArr[i].split("=")[1];
                                    break;
                                }
                            }
                            return requestParam;
                        }
                    };
                    /* //[190522] 수정 */

                    var params = {};
                    var request = new Request();
                    var timestamp = request.getParameter("timestamp");
                    var dpcode = request.getParameter("dpcode");
                    params.timestamp = timestamp;
                    params.dpcode = dpcode;
                    params.matnrList = encodeURIComponent(JSON.stringify(matnrList));
                    
                    var url = window.location.href;
                    if(url.indexOf("stg")>-1){
                    	/* test */
                    	url = "https://edu.dps2u.co.kr/dpsweb/bPrjSendList.do";
                    }else{
                    	/* 운영 */
                    	url = "https://www.dps2u.co.kr/dpsweb/bPrjSendList.do";
                    }
                    
                    $.ajax({
                        url: url, 
                        type: "POST",
                        data: params,
                        dataType: "json",
                        success: function(data) {
                            if (data.e_subrc == '0') {
                                if (window.UI) {
                                    window.UI.closePopup('close');
                                } else {
                                    window.close();
                                }
                            } else {
                                alert(data.e_msg);
                            }

                        },
                        error: function() {
                            alert("fale");
                        }
                    })
                };//iframeOpen end
                /* //[190517] 추가 */
              //init.choiceModelBtn.findData ....
                var saveSubmit = function(SKUS) {
                	//쉐프 컬랙션 파싱은 이구조가 고정. ->본체(1개)+패널(4개)+전용수납공간(1개)+W&i 설치킷(1개)
                	//위 사항에서 추가됨 ->본체(1개)+패널(4개)+전용수납공간(1개)+ 정수기 필터 KIT + 오토필 케틀(1개)
                	//console.log(SKUS);

                    //SDP
                    if (paramSitecode == 'sdp') {

                        /* [190521] 추가 */
                        iframeOpen(SKUS);
                        /* //[190521] 추가 */
                    }
                    //삼성판매
                    if (paramSitecode == 'sam') {

                    }
                    //하이마트
                    if (paramSitecode == 'nj') {


                        /* [190510] 삼성회신로직.txt 추가 */
                       var paramstr = "callback=himart"
                       var i;

                        //if(SKUS.panel != undefined){
                        if($('#fixedMdl').val() != ''){
                            
                            paramstr = paramstr + "&CNSL_REQ_NO=" + paramId;
                            paramstr = paramstr + "&MKR_PRD_CD=" + ($('#fixedMdl').val()).toUpperCase();
                            paramstr = paramstr + "&PRNT_SQNC=" + "0";
                            //var selectedDepartment = $('#dataBody > tr.type_top > td.model_tr.clickBg > button.active').attr('data-department');
                            var selectedDepartment = $('#dataBody button.choice_btn.active').attr('data-department');
                            if(selectedDepartment == "C/C"){
                                $(".pkgCode").each(function (i,item){
                                    if( $(this).text() != "" && $(this).text() != undefined){
                                        paramstr = paramstr + "&CNSL_REQ_NO=" + paramId;
                                        paramstr = paramstr + "&MKR_PRD_CD=" + ($(this).text()).toUpperCase();
                                        paramstr = paramstr + "&PRNT_SQNC=" + (1 + i);
                                    }
                                });   
                            }
                        }else{
                    	   for (i = 0; i < SKUS.panel.code.length; i++) {
                    		   if(i == 0){
                    			   paramstr = paramstr + "&CNSL_REQ_NO=" + paramId;
                    			   paramstr = paramstr + "&MKR_PRD_CD=" + SKUS.model.toUpperCase();
                    			   paramstr = paramstr + "&PRNT_SQNC=" + "0";
                    		   }
                    		   paramstr = paramstr + "&CNSL_REQ_NO=" + paramId;
                    		   paramstr = paramstr + "&MKR_PRD_CD=" +SKUS.panel.code[i].toUpperCase();
                    		   paramstr = paramstr + "&PRNT_SQNC=" + (i + 1);
                           }
                           
                            $(".pkgCode").each(function (i,item){
                                if( $(this).text() != "" && $(this).text() != undefined){
                                    paramstr = paramstr + "&CNSL_REQ_NO=" + paramId;
                                    paramstr = paramstr + "&MKR_PRD_CD=" + $(this).text();
                                    paramstr = paramstr + "&PRNT_SQNC=" + (SKUS.panel.code.length + 1 + i);
                                }
                            });
                        }
                    	   //페키지 제품 설정.
                    	   /*
                    	   $(".pkgCode").each(function (i,item){
                    		   if( $(this).text() != "" && $(this).text() != undefined){
                    			   paramstr = paramstr + "&CNSL_REQ_NO=" + paramId;
                    			   paramstr = paramstr + "&MKR_PRD_CD=" + $(this).text();
                    			   paramstr = paramstr + "&PRNT_SQNC=" + (SKUS.panel.code.length + 1 + i);
                    		   }
                    	   });

                    	   //필터 제품 설정
                    	   if($("#pkgFilterMdl").val() != "" && $("#pkgFilterMdl").val() != undefined){
                    		   paramstr = paramstr + "&CNSL_REQ_NO=" + paramId;
                    		   paramstr = paramstr + "&MKR_PRD_CD=" + $("#pkgFilterMdl").val();
                    		   paramstr = paramstr + "&PRNT_SQNC=" + (SKUS.panel.code.length + $(".pkgCode").length + 1);
                    	   }*/
                       /*
                       }else{
                    	   paramstr = paramstr + "&CNSL_REQ_NO=" + paramId;
            			   paramstr = paramstr + "&MKR_PRD_CD=" + SKUS.fixedMdl.toUpperCase();
            			   paramstr = paramstr + "&PRNT_SQNC=" + "0";
                       }
                       */

                       var option = {
                            url: "https://b2bi.himart.co.kr:17013/JsonpService.saveData.do", /* 운영 */
                            //url: "https://b2bidev.himart.co.kr:17013/JsonpService.saveData.do", /* test */
                            data: paramstr,
                            cache: false,
                            dataType: "jsonp",
                            contentType: "application/jsonp; charset=UTF-8;",
                            success: function(result) {
                                alert(result.ERR_MSG);
                            },
                            error: function(response, status, error) {
                                alert("저장중 오류가 발생하였습니다.");
                            },
                            beforeSend: function(xhr) {
                                xhr.setRequestHeader("ajax", true);
                            },
                            complete: function() {}
                        };
                        $.ajax(option);
                        /* //[190510] 삼성회신로직.txt 추가 */
                    }
                    //전자랜드
                    if (paramSitecode == 'nh') {


                        /* [190530] ss포탈 스크립트.txt 수정 */
                        var paramData = "callback=etlandCb";
                        //if(SKUS.panel != undefined){
                            if($('#fixedMdl').val() != ''){
                                paramData = paramData + "&mModel=" + ($('#fixedMdl').val()).toUpperCase();
                                //var selectedDepartment = $('#dataBody > tr.type_top > td.model_tr.clickBg > button.active').attr('data-department');
                                var selectedDepartment = $('#dataBody button.choice_btn.active').attr('data-department');
                                if(selectedDepartment == "C/C"){
                                    $(".pkgCode").each(function (i,item){
                                        if( $(this).text() != "" || $(this).text() != undefined){
                                            paramData = paramData + "&ifParamId=" + paramId;
                                            paramData = paramData + "&panelCode=" + $(this).text();
                                            paramData = paramData + "&ifIndex=" + (i);
                                        }
                                    });
                                }
                            }else{
                                paramData = paramData + "&mModel=" + SKUS.model;
                                for (var idx = 0; idx < SKUS.panel.code.length; idx++) {
                                    paramData = paramData + "&ifParamId=" + paramId;
                                    paramData = paramData + "&panelCode=" + SKUS.panel.code[idx].toUpperCase();
                                    paramData = paramData + "&ifIndex=" + idx;
                                }
                                //페키지 제품 설정
                                $(".pkgCode").each(function (i,item){
                                    if( $(this).text() != "" || $(this).text() != undefined){
                                        paramData = paramData + "&ifParamId=" + paramId;
                                        paramData = paramData + "&panelCode=" + $(this).text();
                                        paramData = paramData + "&ifIndex=" + (SKUS.panel.code.length + i);
                                    }
                                });
                            }

                        	//필터 제품 설정
                        	/*if( $("#pkgFilterMdl").val() != "" && $("#pkgFilterMdl").val() != undefined){
                        		paramData = paramData + "&ifParamId=" + paramId;
                        		paramData = paramData + "&panelCode=" + $("#pkgFilterMdl").val();
                        		paramData = paramData + "&ifIndex=" + (SKUS.panel.code.length + $(".pkgCode").length);
                        	}*/

                        /*}else{
                        	paramData = paramData + "&mModel=" + SKUS.fixedMdl;
                        }*/
                        $.ajax({
                            url: "https://elism.etland.co.kr/sal/cos/setSsIf.do", //개발url
                            data: {
                                paramData: paramData
                            },
                            cache: false,
                            type: "GET",
                            dataType: "jsonp",
                            jsonpCallback: "callback",
                            contentType: "application/jsonp; charset=UTF-8;",
                            beforeSend: function(xhr) {
                                //console.log("beforeSend!!!");
                                xhr.setRequestHeader("ajax", true);
                            },
                            success: function(result) {
                                //console.log("success : " + result.paramData);
                                window.opener.postMessage(result.paramData, "*");
                            },
                            error: function(response, status, error) {
                                //console.log("error : " + error);
                                alert("저장중 오류가 발생하였습니다.");
                            },
                            complete: function() {}
                        });
                        /* //[190530] ss포탈 스크립트.txt 수정 */
                    }

                    if (paramSitecode == 'qsec') {


                        /* [190530] ss포탈 스크립트.txt 수정 */
                        var paramData = "callback=etlandCb";
                        //if(SKUS.panel != undefined){
                            if($('#fixedMdl').val() != ''){
                                paramData = paramData + "&mModel=" + ($('#fixedMdl').val()).toUpperCase();
                                //var selectedDepartment = $('#dataBody > tr.type_top > td.model_tr.clickBg > button.active').attr('data-department');
                                var selectedDepartment = $('#dataBody button.choice_btn.active').attr('data-department');
                                if(selectedDepartment == "C/C"){
                                    $(".pkgCode").each(function (i,item){
                                        if( $(this).text() != "" || $(this).text() != undefined){
                                            paramData = paramData + "&ifParamId=" + paramId;
                                            paramData = paramData + "&panelCode=" + $(this).text();
                                            paramData = paramData + "&ifIndex=" + (i);
                                        }
                                    });
                                }
                            }else{
                                paramData = paramData + "&mModel=" + SKUS.model;
                                for (var idx = 0; idx < SKUS.panel.code.length; idx++) {
                                    paramData = paramData + "&ifParamId=" + paramId;
                                    paramData = paramData + "&panelCode=" + SKUS.panel.code[idx].toUpperCase();
                                    paramData = paramData + "&ifIndex=" + idx;
                                }
                                //페키지 제품 설정
                                $(".pkgCode").each(function (i,item){
                                    if( $(this).text() != "" || $(this).text() != undefined){
                                        paramData = paramData + "&ifParamId=" + paramId;
                                        paramData = paramData + "&panelCode=" + $(this).text();
                                        paramData = paramData + "&ifIndex=" + (SKUS.panel.code.length + i);
                                    }
                                });
                            }
							console.log("qsecLog" + paramData);

                    }
                    //이마트
                    if (paramSitecode == 'na') {

                    }
                    //홈플러스
                    if (paramSitecode == 'nb') {

                    }
                    //오픈마켓
                    if (paramSitecode == 'sop') {

                        /* [190521] 추가 */
                        iframeOpen(SKUS);
                        /* //[190521] 추가 */
                    }
                    //종합몰
                    if (paramSitecode == 'ml') {

                    }
                    //홈쇼핑
                    if (paramSitecode == 'mk') {

                    }
                    //B2B
                    if (paramSitecode == 'b2b') {
                          /* [190704] 추가 */
                        iframeOpen(SKUS);
                        /* //[190704] 추가 */

                    }
                    //패넷
                    if (paramSitecode == 'fn') {

                        caseParam.buy(paramId);
                    }
                    // 한총
                    if (paramSitecode == 'sec') {
                        //저장 변수명과 사용(문)법

                    }

                    // 2020-07-22 abc 패키지 코드 수정 
                    if (paramSitecode == 'abc') {
                        var pkgcdList = { code: [] };

                        $(".pkgCode").each(function(i, item) {
                            if ($(this).text() != "" || $(this).text() != undefined) {
                                pkgcdList.code.push($(this).text());
                            }
                        });
                        SKUS.pkgcode = pkgcdList;
                    }

                     // 2020-07-22 abc 패키지 코드 수정 

                    function sendJsonToKSPFrame() {
                        window.parent.postMessage(SKUS, "*"); //넘겨줄 JSON 값, origin정보(KSP 측 도메인. 하단 참조)
                    }

                    switch (paramSitecode) {
                        case "nh":
                        case "nj":
                        case "na":
                        case "nb":
                        case "ml":
                        case "abc":
                        case "mk":
                            sendJsonToKSPFrame();
                            break
                    }
                }// saveSubmit end
              //init.choiceModelBtn.findData ....
                /* [190510] na/nb일 경우 분기처리 추가 */
                var makeData = function(panelData) {
                    if (paramSitecode === 'na' || paramSitecode === 'nb') {
                        var panel = { code: [], color: [], kanCd: [] };
                    } else {
                        var panel = { code: [], color: [] };
                    }

                    $.each(panelData, function(i) {
                        panel.code.push(this.code);
                        panel.color.push(this.color);
                        if (paramSitecode === 'na' || paramSitecode === 'nb') {
                            panel.kanCd.push(this.kanCd);
                        }
                    })
                     // 2020-07-22 SKUS 수정

                      if (paramSitecode === 'na' || paramSitecode === 'nb') {
                          var option = { code: [], name: [], kanCd: [] };
                      } else {
                          var option = { code: [], name: [] };
                      }

                      $('#pkgGrp > div').each(function(i, item) {
                    	  if($(item).find('.choice_btn.pkg').hasClass('active')){
	                          option.code.push($(item).find('.choice_btn.pkg.active').attr('data-pkgmdl'));
	                          option.name.push($(item).find('.choice_btn.pkg.active').attr('data-pkgNm'));
	                          if (paramSitecode === 'na' || paramSitecode === 'nb') {
	                              option.kanCd.push($(item).find('.choice_btn.pkg.active').attr('data-kanCd'));
	                          }
                    	  }
                      });

                      var SKUS = { panel: panel, model: modelData.model, type: modelData.type, typeName: modelData.typeName, volume: modelData.volume, department: modelData.department, option: option };

                      // 2020-07-22 SKUS 수정

                    if (modelData.kanCd !== 'undefined') {
                        SKUS.kanCode = modelData.kanCd;
                    }

                    return SKUS;
                }; // makeData end
                /* //[190510] na/nb일 경우 분기처리 추가 */
              //init.choiceModelBtn.findData ....
                var parseParams = function(){
                	var array = [];

                	var $REF = $(sSTEP02).find(sREF);

                    var dataParams = "";
                    dataParams += modelTemp+":::1";

                    var panelData = [];
                    $REF.find(sBtn).each(function(i) {
                        panelData.push({});
                        var dataImg = $(this).attr('data-img'),
                            dataColorEn = $(this).attr(sDATACOLOR),
                            dataColor = $(this).text(),
                            datakan = $(this).attr('data-kan');

                        panelData[i].code = dataImg;
                        panelData[i].color = dataColor;
                        panelData[i].colorEn = dataColorEn;
                        panelData[i].kanCd = datakan;

                        dataParams += "&productCode="+dataImg+":::1";
                    });
                    // package 추가
                    //var selectedDepartment = $('#dataBody > tr.type_top > td.model_tr.clickBg > button.active').attr('data-department');
                    var selectedDepartment = $('#dataBody button.choice_btn.active').attr('data-department')
                       if(selectedDepartment != "C/C"){
                       $('#selectedDoorAndPacInfo tr.pkgRow .pkgCode').each(function(i,item) {
                    	   if( $(item).text() != "" && $(item).text() != undefined){
                    		   dataParams += "&productCode="+$(item).text()+":::1";
                    	   }
                       });
                   }   
                    // package 추가
                    array.push(dataParams);
                    array.push(panelData);

                    return array;
                };

                var saveValid = function() {
                	//저장하기 클릭시
                	$('.my-edition-making-doors .save_btn').off('click').on('click', function(e) {
                		//20220120 인피니트 라인 추가 S
                		var selectedType = $('#dataBody button.choice_btn.active').attr('data-type');
                        if(selectedType == "il_1door_wine"){
                        	alert("와인박스&스탠딩 와인랙(RA-W24IAAWB) 추가\n구매로 고급스러움을 더해보세요.")
                        }
                      //20220120 인피니트 라인 추가 S
                        var selectedModel = $('#dataBody button.choice_btn.active').attr('data-model');
                        if(selectedModel == "RQ42B99T1APG" || selectedModel == "RQ42B99T1APK"){
                        	alert("곡물 디스펜서(RA-KGDRQ42A) 추가 구매로 편리함을 더해보세요.")
                        }
                		e.preventDefault();
                        if ($(this).hasClass(sACTIVE)) {
                            //var dataArray = parseParams();                            
                            //callFixed(dataArray[0],dataArray[1],'SAVE');
                        	saveAction('SAVE');
                        }

                    });
                	//인쇄하기 클릭시
                	$('#btnScreenShot').off('click').on('click', function(e) {
                		e.preventDefault();
                        //var dataArray = parseParams();
                        //callFixed(dataArray[0],dataArray[1],'CAP');
                        saveAction('CAP');
                	});

                	//다운로드 클릭시
                	$('.my-edition-making-doors .download').off('click').on('click', function(e) {
                		e.preventDefault();
                		//var dataArray = parseParams();
                        //callFixed(dataArray[0],dataArray[1],'DOWN');
                		saveAction('DOWN');

                	});
                };//saveValid end
                
                var saveAction = function(mode){
                	
                	var dataArray = parseParams();
                    var panelData = dataArray[1];
                    
            		if(mode == 'SAVE'){

                        saveSubmit(makeData(panelData));
                        
                        toggleView.colorTab.after();
                        toggleView.trBg.click.hide();

                        $(sChoiceBtn + '.' + sACTIVE).removeClass(sACTIVE);
                        $(sModelTable).hide();
                        $(sMyEdition + '_btn_area').hide();
                        $('.my-edition-model-pkg').hide();
                        $("#pkgGrp").empty();

                        $('.my-edition-kancode_table > tbody > tr.model > td').css('color','');
                        $('.my-edition-kancode_table > tbody > tr.door > td').css('color','');
                        $('.my-edition-kancode_table > tbody > tr.pkgRow > td').css('color','');
                        
                        $("#pkgRowFilter").empty();
                        $("#pkgRowKattle").empty();
                        $("#packgeSelectionDiv").hide();

                        $(".pkgRow").empty();
                        $(".pkgFilterRow").empty();
                        $('.my-edition_tab > li').hide();
                        $('.bespoke-color-chip').hide();
                    }else{
                        if(mode == 'CAP'){
                            makeCaptureImg.capture();

                        }else{
                            makeCaptureImg.download();
                        }
                    }
                }

                //init.choiceModelBtn.findData ....
                var callFixed = function(dataParams,panelData,mode){

                	$(sModelTable).find('.fixedRow').html('');
                	//fixed mdl 초기화.
                    $("#fixedMdl").val('');
                    var searchParams = {
            		        'storeCd' : paramSitecode,
            		        'productCode' : dataParams
              		 };
                    var option = {
                    				url: '/sec/xhr/bespoke/fixedMatchAjax',
                    				dataType: "json",
                    				type: "POST",
                    				data: searchParams,
                    				//jsonp: "callback",
                    		        jsonpCallback: "jsonpcallback_bespoke",
                    				success: function(rtnjson) {
                    					//매칭제품이 있을 경우 'Y' 없으면 'N'을 리턴코드로 리턴하고 data 에서 매칭된 제품 정보를 꺼냄.
                    					//console.log('Matching YN : ' + data.result.code);
                    					
                    					$(sModelTable).find('.fixedRow.matchedRow').remove();
                    					
                    					if (rtnjson.fixedMatchResult.code == 'Y') {
                                            
                    						var fixedRow = '';
                    						if (paramSitecode === 'na' || paramSitecode === 'nb') {
                    							fixedRow = '<tr class="fixedRow matchedRow"><td>완제품</td><td id="fixedCode"></td><td>-</td><td>-</td></tr>';
                    						}else{
                    							fixedRow = '<tr class="fixedRow matchedRow"><td>완제품</td><td id="fixedCode"></td><td>-</td></tr>';
                    						}
                                            $('.my-edition-kancode_table:visible tbody').append(fixedRow);
                                            $("#fixedMdl").val(rtnjson.fixedMatchResult.data.fixedMdl);
                                            $("#fixedCode").text(rtnjson.fixedMatchResult.data.fixedMdl);
                                            
                                            //var selectedDepartment = $('#dataBody > tr.type_top > td.model_tr.clickBg > button.active').attr('data-department');
                                            var selectedDepartment = $('#dataBody button.choice_btn.active').attr('data-department');
                                            
                                            if(selectedDepartment != "C/C"){
                                                $('.my-edition-kancode_table:visible > tbody > tr.model > td').css('color','#999');
                                                $('.my-edition-kancode_table:visible > tbody > tr.door > td').css('color','#999');
                                                $('.my-edition-kancode_table:visible > tbody > tr.pkgRow > td').css('color','#999');
                                            }else{                                                
                                                $('.my-edition-kancode_table:visible > tbody > tr.model > td').css('color','#999');
                                                $('.my-edition-kancode_table:visible > tbody > tr.door > td').css('color','#999');
                                            }

                                            
                    						// 장바구니 페이지로 이동
            			                    //data.price와 data.bPrice가 존제함.
            			                    //회원가 price는 기본적으로 제공. 혜택가 bPrice는 없을 경우가 있음.
            			                    //bPrice가 존제하고 price보다 값이 작은 경우에만 혜택가를 노출.
                                            
                                            /*
                                            if(mode == 'SAVE'){    
                                            	$(".pd-popup.fixed").css('display','block');
                                                
                                            	$('#fixedBuy').off('click').on('click', function(e) {
                                            		e.preventDefault();                                                    
                                            		//var SKUS = { type: modelData.type, typeName: modelData.typeName, volume: modelData.volume, department: modelData.department, fixedMdl: $("#fixedMdl").val() };
                                            		//saveSubmit(SKUS);
                                            		saveSubmit(makeData(panelData));
                                            		//$(".pd-popup.fixed").css('display','none');

                                            		toggleView.colorTab.after();
                                                    toggleView.trBg.click.hide();

                                                    $(sChoiceBtn + '.' + sACTIVE).removeClass(sACTIVE);
                                                    $(sModelTable).hide();
                                                    $(sMyEdition + '_btn_area').hide();



                            						$("#pkgGrp").empty()
                            	                	$("#pkgRowFilter").empty()
                            	                	$("#pkgRowKattle").empty()
                            	                	$(".pkgRow").remove();
                            	                	$("#packgeSelectionDiv").hide();
                            	                	//$('.my-edition-making-doors').hide();
                                            	});

                                            	$(".js-pop-close").click(function(){
                                            		$(".pd-popup.fixed").css('display','none');
                                            	});
                                            }else{
                                            	if(mode == 'CAP'){
                                            		makeCaptureImg.capture();
                                            	}else{
                                            		makeCaptureImg.download();
                                            	}
                                            }*/
                                        }else{
                                        	$('.my-edition-kancode_table > tbody > tr.model > td').css('color','');
                                            $('.my-edition-kancode_table > tbody > tr.door > td').css('color','');
                                            $('.my-edition-kancode_table > tbody > tr.pkgRow > td').css('color','');
                                        }
                                       /*
                                       if(mode == 'SAVE'){

                                            saveSubmit(makeData(panelData));

                                            toggleView.colorTab.after();
                                            toggleView.trBg.click.hide();

                                            $(sChoiceBtn + '.' + sACTIVE).removeClass(sACTIVE);
                                            $(sModelTable).hide();
                                            $(sMyEdition + '_btn_area').hide();
                                            $('.my-edition-model-pkg').hide();
                                            $("#pkgGrp").empty();

                                            $('.my-edition-kancode_table > tbody > tr.model > td').css('color','');
                                            $('.my-edition-kancode_table > tbody > tr.door > td').css('color','');
                                            $('.my-edition-kancode_table > tbody > tr.pkgRow > td').css('color','');
                                            
                                            $("#pkgRowFilter").empty();
                                            $("#pkgRowKattle").empty();
                                            $("#packgeSelectionDiv").hide();

                                            $(".pkgRow").empty();
                                            $(".pkgFilterRow").empty();
                                            $('.my-edition_tab > li').hide();
                                        }else{
                                            if(mode == 'CAP'){
                                                makeCaptureImg.capture();

                                            }else{
                                                makeCaptureImg.download();
                                            }
                                        }
                                        */
                    					
                    					$(sMyEdition + '_btn_area').show();
                    				},
                				error: function(response, status, error) {
                					alert('오류');
                				},
                				beforeSend: function(xhr) {
                					xhr.setRequestHeader("ajax", true);
                				},
                				complete: function() {}
                    		};
                    $.ajax(option);

                };
              //init.choiceModelBtn.findData ....
                var showTable = {
                    selector: {
                        $table: $(sModelTable)
                    },
                    initTable: function() {
                        if (!$(sModelTable).is(':visible')) {
                            $(sModelTable).show();
                        }
                        this.selector.$table.find('tbody .door').remove();
                    },
                    markModelData: function() {
                        this.selector.$table.find('tr.model').find('.model-code').text(modelData.model.toUpperCase());
                        this.selector.$table.find('tr.model').find('.kan-code').text(isEmpty(modelData.kanCd));
                   },
                    /* [190510] 수정 */
                    makeDoorTable: function() {
                        var doorHTML = '<tr class="door">' +
                            '<td></td>' +
                            '<td class="model-code"></td>' +
                            (function() {
                                if (paramSitecode === 'na' || paramSitecode === 'nb') {
                                    return '<td class="kan-code"></td>'
                                } else {
                                    return '';
                                }
                            })() +
                          '<td class="model-color"></td>' +
                        '</tr>';
                        /* //[190510] 수정 */

                        var doorIdx;
                        var doorName;
                        var setDoorName = function(arr) {
                            $('.my-edition-kancode_table .door').each(function(i) {
                                $(this).find('td:first-child').text(arr[i]);
                            });
                        }

                        switch (modelData.type) {
                            case '3door':
                            case '3door_kimchi':
                            case '4door_family':
                                doorIdx = 3;
                                break;
                            case '2door':
                                doorIdx = 2;
                                break;
                            case '1door':
                            case '1door_refrigerator':
                            case '1door_freezer':
                            case '1door_kimchi':
                            case '1door_slim':
                            case '1door_wine': //20220106 신모델 추가 S
                            // 20220120 인피니트 라인 추가 S
                            case 'il_1door_refrigerator':
                            case 'il_1door_freezer':
                            case 'il_1door_kimchi':
                            case 'il_1door_wine': 
                           	// 20220120 인피니트 라인 추가 E
                                doorIdx = 1;
                                break;
                            default:
                                doorIdx = 4;
                        }
                        for (var i = 0; i < doorIdx; i++) {
                            $('.my-edition-kancode_table:visible tbody').append(doorHTML)
                        }
                        switch (modelData.type) {
                            case '3door':
                            case '3door_kimchi':
                                doorName = ['상칸', '중칸', '하칸'];
                                doorIdx = 3;
                                break;
                            case '2door':
                                doorName = ['상칸', '하칸'];
                                doorIdx = 2;
                                break;
                            case '1door':
                            case '1door_refrigerator':
                            case '1door_freezer':
                            case '1door_kimchi':
                            case '1door_slim':
                            case '1door_wine': //20220106 신모델 추가 S
                            // 20220120 인피니트 라인 추가 S
                            case 'il_1door_refrigerator':
                            case 'il_1door_freezer':
                            case 'il_1door_kimchi':
                            case 'il_1door_wine': 
                           	// 20220120 인피니트 라인 추가 E
                                doorName = ['도어'];
                                doorIdx = 1;
                                break;
                           /* 190822 jasonpark 추가 (0827)*/
                            case '4door_kimchi_486':
                            case '4door_kimchi_584':
                            case '4door_kimchi_420':
                            case 'il_4door_kimchi': // 20220121 인피니트 라인 추가
                                doorName = ['상칸좌', '상칸우', '중칸', '하칸'];
                                doorIdx = 4;
                                break;
                            case '4door_family':
                            	 doorName = ['상칸좌', '하칸좌', '하칸우'];
                                 doorIdx = 3;
                                 break;
                            default:
                                doorName = ['상칸좌', '상칸우', '하칸좌', '하칸우'];
                        }
                        setDoorName(doorName)
                    },
                    /* //[190510] 수정 */
                    init: function() {
                        this.initTable();
                        this.markModelData();
                        this.makeDoorTable();
                    }
                };

              //init.choiceModelBtn.findData ....
                var makeCaptureImg = {
                        capture : function(){
                        	$('.bespoke-color-chip.store').hide();
                            var $self = this;
                            var $btn = document.getElementById('btnScreenShot'),
                                onScreenShotClick = function(ev){
                                    makeCaptureImg.pdPopup.toggle.ctrClass.add_();
                                    
                                    $(".my-edition-door-selection").css("width","100%");
                                    $(".my-edition-door-selection .type-door_img").css("text-align","center");
                                    $(".my-edition-door-selection .door_ref").css("margin-right","auto");
                                    html2canvas(document.querySelector("#capture"),{useCORS: true}).then(function(canvas) {
                                    	$self.pdPopup.open(canvas);
                                        var canvas = document.getElementById("capturedImg");
                                        var img = canvas.toDataURL("image/png");
                                        $('.pd-popup').find('.content').html('<img src="'+img+'" />')
                                    });
                                }
                            //$btn.addEventListener('mousedown', onScreenShotClick);
                            onScreenShotClick();
                            $(document).on('click','.js-pop-close', $self.pdPopup.close);
                        },
                        download : function(){
                        	$('.bespoke-color-chip.store').hide();
                            var $self = this;
                            var saveAs = function(uri, filename) {

                                var link = document.createElement('a');
                                if (typeof link.download === 'string') {
                                    link.href = uri;
                                    link.download = filename;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    $('.bespoke-color-chip.store').show();
                                } else {
                                    window.open(uri);
                                    $('.bespoke-color-chip.store').show();
                                }
                            }
                            //var $btnDownload = document.getElementById('download');

                            //$btnDownload.addEventListener('mousedown', function(){
                            	var modelName = $('.txt_model').text();
                                makeCaptureImg.pdPopup.toggle.ctrClass.add_();
                                $(".my-edition-door-selection").css("width","100%");
                                $(".my-edition-door-selection .type-door_img").css("text-align","center");
                                $(".my-edition-door-selection .door_ref").css("margin-right","auto");
                                html2canvas(document.querySelector('#capture'),{useCORS: true}).then(function(canvas) {
                                    if (canvas.msToBlob) { //for IE
                                        var blob = canvas.msToBlob();
                                        window.navigator.msSaveBlob(blob, modelName  + '.png');
                                    } else {
                                        saveAs(canvas.toDataURL(), modelName  + '.png');
                                    }

                                }).then(makeCaptureImg.pdPopup.toggle.ctrClass.remove_);
                            //});
                        },
                        pdPopup : {
                            selector : {
                                popupName : '.pd-popup',
                                toggleClass : 'capturing'
                            },
                            toggle : {
                                ctrClass : {
                                    add_ : function(){
                                        $('.content_wrap').addClass(makeCaptureImg.pdPopup.selector.toggleClass);
                                        $(sMyEdition + '_btn_area').hide();
                                        $('.my-edition-model-pkg').hide();
                                    },
                                    remove_ : function(){
                                    	$('.content_wrap').removeClass(makeCaptureImg.pdPopup.selector.toggleClass);
                                        $(".my-edition-door-selection").css("width","50%");
                                        $(".my-edition-door-selection .type-door_img").css("text-align","right");
                                        $(".my-edition-door-selection .door_ref").css("margin","");
                                        $(sMyEdition + '_btn_area').show();
                                        // 20200717 start-팝업 닫기클릭시(옵션 유무 체크)
                                        if(  $.trim($('#pkgGrp').html()) == '' ){
                                            $('.my-edition-model-pkg').hide();
                                        }else{
                                            $('.my-edition-model-pkg').show();
                                        };
                                        // 20200717 end-팝업 닫기클릭시(옵션 유무 체크)

                                    }
                                }
                            },
                            open : function(captureImg){
                                var selector = makeCaptureImg.pdPopup.selector,
                                    canvasId = 'capturedImg';
                                $(selector.popupName).show().find('.content').html(captureImg);
                                $(selector.popupName).find('canvas').attr('id',canvasId);
                                $(".pd-popup.fixed").css('display','none');
                                window.print();
                            },
                            close : function(e){
                                e.preventDefault();
                                $('.bespoke-color-chip.store').show();
                                var selector = makeCaptureImg.pdPopup.selector;
                                $(selector.popupName).hide().find('.content').html('');
                                makeCaptureImg.pdPopup.toggle.ctrClass.remove_();
                            }
                        }
                };


				// 20200324 드래그앤 드롭 추가
                var __dragTarget = null,
                    __this = null,
                    __afterTouchTime = 0;

                $('.my-edition-color_list .color_btn').draggable_local({
                    revert: true,
                    placeholder: true,
                    droptarget: '.door_btn',
                    drop: function (event, droptarget) {
                        __dragTarget = $(droptarget);
                        /* reset 기능 변경 소스 start */
                        // __doorTarget = $(droptarget);
                        /* reset 기능 변경 소스 end */
                        __this = $(this);
                        var eventSetInterval = setInterval(function () {
                            if (__this !== null) {
                                clearInterval(eventSetInterval);
                                if (event.type === "mouseup" || event.type === "touchend") {
                                    __this.trigger("click");
                                    __this = null;
                                    __dragTarget = null;
                                }
                            }
                        });
                    }
                });

                $('.my-edition-color_list ' + 'button').on("touchstart", function(e){
                    __afterTouchTime = e.timeStamp;
                });

                $('.my-edition-color_list ' + 'button').on("touchend", function(e){
                	var __beforeTouchTime = e.timeStamp,
                        __resultTime = parseInt(__beforeTouchTime - __afterTouchTime);

                    if (__resultTime < 300) {
						//console.log("cli2ck 015");
                        $(e.currentTarget).trigger("click");
                    }
                });
                // 20200324 드래그앤 드롭 추가 e

                //컬러탭의 컬러 선택시
                $(document).on('click', '.my-edition-color_list ' + 'button', function() {
                    /* 20200324드래그앤 드롭 추가e s */
                    if (__dragTarget !== null) {
                    	__dragTarget.removeClass('dragging');
                        __dragTarget.find("button").addClass("active").parent().siblings().find("button").removeClass("active");
                    }
                    /* //20200324드래그앤 드롭 추가e */
                });
                
                // 2021.04.27 CHO, 360컬러 드래그
                $('.color-img').draggable_local({
                    revert: true,
                    placeholder: true,
                    droptarget: '.door_btn',
                    drop: function (event, droptarget) {
                        __dragTarget = $(droptarget);
                        __this = $(this);
                        var eventSetInterval = setInterval(function () {
                            if (__this !== null) {
                                clearInterval(eventSetInterval);
                                if (event.type === "mouseup" || event.type === "touchend") {
                                    __this.trigger("click");
                                    __this = null;
                                    __dragTarget = null;
                                }
                            }
                        });
                    }
                });
                
                $('.color-img' + 'div').on("touchstart", function(e){
                    __afterTouchTime = e.timeStamp;
                });
                
                $('.color-img' + 'div').on("touchend", function(e){
                    var __beforeTouchTime = e.timeStamp,
                        __resultTime = parseInt(__beforeTouchTime - __afterTouchTime);

                    if (__resultTime < 300) {
                        $(e.currentTarget).trigger("click");
                    }
                });
                
                $(document).on('click', '.color-img' + 'div', function() {
                    if (__dragTarget !== null) {
                        __dragTarget.find("div").addClass("active").parent().siblings().find("div").removeClass("active");
                    }
                });
               /*  
               // 2021.04.30 CHO, 호버 이벤트 ---IE에서 문제되서 제거
                $('.color-img').hover(function(){
                	// 선택 영역 표시
                	$('.colors').removeClass("selected");
                	$(this).parent().parent().addClass("selected");
                });
                */
                
                // 2021.04.29 CHO, 360 컬러칩 클릭이벤트
                $('.color-img').click(function(){
                	// 선택 영역 표시
                	$('.colors').removeClass("selected");
                	$(this).parent().parent().addClass("selected");
                	var $REF = $(sSTEP02).find(sREF);
                	var	rgbColor = $(this).css("background-color");
                		rgbColor = rgb2hex(rgbColor);
                		
                	// 패널 정보를 가져오기 위한 데이터 세팅(냉장고 정보, 상하좌우칸, 색상 등)
                    if ($REF.find(sBtn).hasClass(sACTIVE)) {
                    	var $REFBTN = $REF.find(sBtn + '.' + sACTIVE);
                    	var	doorIdx = $REFBTN.parent().index();
                    	var dataType = $('.choice_btn.active').attr("data-type");
                    	var label = $('.choice_btn.active').attr("data-department");
                    	var rowCd = "U";
                    	var colCd = "L";
                    	var panelTypeCd = "AS"; // 매장은 고정 코드값
                    	var orgYn = "N";
                    	
                    	if(aDOORLENG4.indexOf(dataType) > -1) {
                    		if(parseInt(doorIdx/2) == 1){
                    			rowCd = "B"
                    		}
                    		if(doorIdx % 2 == 1){
                    			colCd = "R";
                    		}
            			}else if(aKIMCHI.indexOf(dataType) > -1) {
            				if(doorIdx === 1 ) {
            					colCd = "R";
            				} else if (doorIdx === 2 ) {
            					rowCd = "M";
            					colCd = "M";
            				} else if (doorIdx === 3 ) {
            					rowCd = "B";
            					colCd = "B";
            				}
            			}else if(dataType.indexOf('family') > -1) {
            				colCd = "U";
            				if (doorIdx > 0) {
            					rowCd = "B";
            					colCd = "L";
            					if(doorIdx === 2){
            						colCd = "R";
            					}
            				}
            			}else if(dataType.indexOf('3door') > -1){
            				if(doorIdx === 0){
            					colCd = "U";
            				}else if(doorIdx === 1){
            					rowCd = "M";
            					colCd = "M";
            				}else{
            					rowCd = "B";
            					colCd = "B";
            				}
            			}else if(dataType.indexOf('2door') > -1){
            				if(doorIdx === 0){
            					colCd = "U";
            				}else{
            					rowCd = "B";
            					colCd = "B";
            				}
            			}else if(dataType.indexOf('1door') > -1){
            				colCd = "U"
            			}
                    	
                    	console.log("colCd=="+colCd+"rowCd"+rowCd);
                    	
                    	// 패널 조회 ajax
            		    $.ajax({
	            			url: "/sec/xhr/bespoke/getPanelInfo",
	          	  		    dataType: 'json',
	          	  		    type:'POST',
	          	  		    data:{
	          	  		    	rowCd : rowCd,
	          	  		    	colCd : colCd,
	          	  		    	label : label,
	          	  		    	dataType : dataType,
	          	  		    	rgbColor : rgbColor,
	          	  		    	panelTypeCd : panelTypeCd,
	          	  		    	orgYn : orgYn
	          	  		    },
	          	  		  	jsonpCallback: "jsonpcallback_bespoke",
	          	  		    success: function(data) {
	          	  		    	
	          	  		    	if(data != null && data != ""){
	          	  		    		var rgbName = data.result.rgbName;
	          	  		    		var panelMdl = data.result.panelMdl;
	          	  		    		var kanCode = data.result.kanCode;
	          	  		    		
	          	  		    		// 테이블 정보 입력
	          	  		    		$.each($(sModelTable).find('tr.door').eq(doorIdx), function(i, item){
	          	  		    			
	          	  		    			var target = $(this);
	          	  		    			
	          	  		    			$.each($REF.find(sBtn).eq(doorIdx), function (z,items){
	          	  		    				
	          	  		    				if(i == z){
	          	  		    					target.find('.model-code').text(panelMdl);
	          	  		    					target.find('.model-color').text(rgbName);
	          	  		    				}
	          	  		    				
	          	  		    			});
	          	  		    		});
	          	  		    		// 냉장고 360컬러 색상 변경 및 파라미터 전송을 위해 똑같게 세팅
	                        		if(doorIdx > -1){
	                        			$REF.find(sBtn).eq(doorIdx).css("background-color", rgbColor);
	                        			$REF.find(sBtn).eq(doorIdx).addClass("light");
	                        			$REF.find(sBtn).eq(doorIdx).attr("data-img", panelMdl);
	                        			$REF.find(sBtn).eq(doorIdx).attr("data-kan", kanCode);
	                        			$REF.find(sBtn).eq(doorIdx).attr(sDATACOLOR, rgbColor);
	                        			$REF.find(sBtn).eq(doorIdx).text(rgbName);
	                                }
	                        		// animate 이벤트
	          	  		    		changeClass($REF.find(sBtn).eq(doorIdx),sBtn);
	          	  		    		
	          	  		    		// 패널정보 모두 입력시 저장 / 인쇄 활성화
		          	  		    	var trLeng = $('.my-edition-kancode_table > tbody tr').length;
		          	  		    	var trtxt = 0;
		          	  		    	for(var k=1; k < trLeng; k++){
		          	  		    		var txt = $('.my-edition-kancode_table > tbody tr').eq(k).find('.model-color').text();
		          	  		    		if(txt!=""){
		          	  		    			trtxt++;
		          	  		    		}
		          	  		    	}
		          	  		    	// 모두 색상 설정이 되었을때 버튼 보이기
		          	  		    	if((trLeng-1) == trtxt){
		          	  		    		$(sMyEdition + '_btn_area').show();		 
		          	  		    		$(sSaveBtn).addClass(sACTIVE);		          	  		    		
		          	  		    	}
		          	  		    	// 색상 선택되었을시 탭 변경 알랏용
		          	  		    	if(trtxt>0){
		          	  		    		$('#alertCheck').val('Y');
		          	  		    	}else{
		          	  		    		$('#alertCheck').val('N');
		          	  		    	}
	          	  		    	}
	          	  		    },
	          	  		    error: function(xhr) {
	          	  		    	
	          	  		    }
            		    });
                    }
                });
                
                
                // 2021.05.06 CHO, 탭
                $('.bespoke-color-tab > li > a').click(function(e){
                	var liindex = $(this).parent().index();
                	$('#liindex').val(liindex);
                	e.preventDefault();
                	if($('#alertCheck').val()=="Y"){
                		// 팝업
                		$('#layer02').css("display","block");
                		$('#layer03').css("display","block");
                	}else{
		        		 refreshDoor();
                	}
            	});
                // 팝업 버튼
                $('.btn').on("click",function(e){
                	if($(this).attr("id") == "btnY"){
                		refreshDoor();
                	}
                	$('#layer02').css("display","none");
            		$('#layer03').css("display","none");
                });
                
                // 냉장고 초기화
                $('.resetColor').click(function(){
                	var $REF = $(sSTEP02).find(sREF);
                    $BTNSAVE = $(sSaveBtn);
                    if( $BTNSAVE.hasClass(sACTIVE) ) {
                        $BTNSAVE.removeClass(sACTIVE);
                        $(sMyEdition + '_btn_area').hide();
                        //$('.my-edition-model-pkg').hide();
                    }
                    $('.color_btn.active').removeClass(sACTIVE);
                    $(e.target).addClass(sACTIVE).parents('tr').siblings().find(sBtn).removeClass(sACTIVE);
                    $REF.find(sBtn).removeAttr(sDATACOLOR).removeAttr('data-img').removeAttr('data-kan').text('');
                    $REF.find(sBtn).css('background-image', '').text('');
                    $REF.find(sBtn).css('background-color', '').text('');
                    $(sModelTable).find('.door .model-code').text('');
                    $(sModelTable).find('.door .kan-code').text('');
                    $(sModelTable).find('.door .model-color').text('');
                    $(sModelTable).find('.fixedRow').html('');
                    $('.door_btn').removeClass("light");
                    // $(sModelTable).find('.pkgRow').html('');
                    // $(sModelTable).find('.pkgFilterRow').html('');

                    $("#pkgFilterMdl").val('');
                    $("[name=pkgFilterCode]").text('');
                	$("#pkgFilterKanCode").text('');
                	$('#alertCheck').val('N');
                });
                
                saveValid();
                showTable.init();
                toggleView.trBg.click.hide();
                toggleView.trBg.click.show($(this));

                toggleView.cancleData.addActive();
                //쉐프 컬랙션 패키지 정보 그리기.
                gridPakage();
                bgHover2();

                //패키지 첫항목을 기본으로 설정.
                //$('.my-edition-option .pkg tr').find('.first').parent().find('button').click();
                //필터는 기본적으로 설정되어야함.
                //$('.my-edition-option .filter').click();

                $('#pkgGrp .my-edition-model_table tbody').each(function(){ $(this).find('button').eq(0).trigger('click'); });
            };//findData end
            $(sSTEP01).find(sChoiceBtn).click(findData);
            return findData;
        };// choiceModelBtn end

        var bgHover = function() {
            $(sTABLE + ' .model_tr').hover(function() {
                toggleView.trBg.hover.show($(this));
            }, toggleView.trBg.hover.hide);
        };

        var bgHover2 = function() {

            $('.my-edition-model_table .pkg_td').hover(function() {
                toggleView.trBgPkg.hover.show($(this));
            }, toggleView.trBgPkg.hover.hide);
        };

        $.each(data, function(i, item) {
        	$('#selectType').append('<option value="'+item.dataType+'" >' +item.type+'</option>');
        });

        //filteringStore();
        gridTable();
        bgHover();
        bgHover2();
        choiceModelBtn();


    	$("#selectYear,#selectType").change(function(){
    		//alert($("#selectYear").val());
    		$(sSTEP01).find(sTABLE + ' tbody').empty();
            gridTable();
            bgHover();
            choiceModelBtn();
    	});
    };//init end

    var tabAct = function() {
        if ($(sTABBTN).length) {
            $(document).on('click', sTABBTN + ' >li a', function(e) {
                e.preventDefault();
                $(sTABBTN).find('>li').removeClass(sACTIVE);
                $(this).parent().addClass(sACTIVE);

                var tab = $(this).parent().attr("rel");
                if (!$(sTABBTN).hasClass('list')) {
                    $(sTABVIEW).find('>li').hide();
                    $(sTABVIEW).find('>li[data-id=' + tab + ']').show();
                }
                failSave(e);
            });
        }
    };




    customizingRef.init = function() {
        filterByParameter('sitecode', init);
        caseParam.init();
        tabAct();
        //makeCaptureImg.capture();
        //makeCaptureImg.download();
    };

    // 2021.04.27 CHO, 선택시, 셰프컬렉션(C/C)는 360컬러칩 hide
    $(document).on('click', '.choice_btn', function(e) {
    	e.preventDefault();
    	// 새로 추가된 탭 보이기
    	$('.nochef').show();
    	$('.bespoke-color-chip.store').show();
    	var Dep = $(this).attr('data-department');
    	if(Dep=="C/C"){
    		$('.nochef').hide();
    		$('.nochef').removeClass('on');
    		$('#alertCheck').val('N');
    		$('.bespoke-color-tab > li').eq(0).find('a').trigger('click');
    		return;
    	}
    	
    	var Id = $(this).closest("tr").attr("id");
    	if(Id!=""){
		if(Id.indexOf("pakGroupListTBody")>-1){
			$('.nochef').hide();
    		$('.nochef').removeClass('on');
    		$('#alertCheck').val('N');
    		$('.bespoke-color-tab > li').eq(0).find('a').trigger('click');
    		return;
    		}
    	}
    });
    
    $(document).on('click', '.my-edition-option .choice_btn.pkg', function(e) {
    	e.preventDefault();
    	if($(this).attr('data-pkgMdl') == 'RA-KGDRQ42A' || $(this).attr('data-pkgMdl') == 'RA-W18IAABB'){//20220106 신모델 추가 S
    		if($(this).hasClass('active')){
    			$(this).removeClass('active');
    			
            	toggleView.trBgPkg.click.hide($(this));
            	//toggleView.trBgPkg.click.show($(this));
            	
            	$(this).text('선택');
    			$("#pkgMdl").val('');
    	    	$("#pkgCode"+$(this).attr('data-pgCnt')).text('');
    	    	$("#pkgName"+$(this).attr('data-pgCnt')).text('');
    	    	$("#pkgKanCode"+$(this).attr('data-pgCnt')).text('');
    	    	
    		}else{
    			$(this).addClass('active');
    			
            	toggleView.trBgPkg.click.hide($(this));
            	toggleView.trBgPkg.click.show($(this));

            	$(this).text('선택해제');
    			$("#pkgMdl").val($(this).attr('data-pkgMdl'));
    	    	$("#pkgCode"+$(this).attr('data-pgCnt')).text($(this).attr('data-pkgMdl'));
    	    	$("#pkgName"+$(this).attr('data-pgCnt')).text($(this).attr('data-pkgNm'));
    	    	$("#pkgKanCode"+$(this).attr('data-pgCnt')).text($(this).attr('data-kanCd'));
    		}
    		
    		
    	}else{
    		var tagetParentId = $(this).attr('data-parent-id');
        	if(typeof tagetParentId == "undefined"){
        		$(this).closest('#pkg').find('.choice_btn').removeClass('active');
        	}else{
        		$('#'+tagetParentId+' button').removeClass('active');
        	}

        	toggleView.trBgPkg.click.hide($(this));
        	toggleView.trBgPkg.click.show($(this));

        	$(this).addClass('active');
        	
        	$("#pkgMdl").val($(this).attr('data-pkgMdl'));
        	$("#pkgCode"+$(this).attr('data-pgCnt')).text($(this).attr('data-pkgMdl'));
        	$("#pkgName"+$(this).attr('data-pgCnt')).text($(this).attr('data-pkgNm'));
        	$("#pkgKanCode"+$(this).attr('data-pgCnt')).text($(this).attr('data-kanCd'));
    	} 	

    });

    $(document).on('click', '.my-edition-option .choice_btn.filter', function(e) {
    	e.preventDefault();

    	var tagetParentId = $(this).attr('data-parent-id');
    	if(typeof tagetParentId == "undefined"){
    		$(this).closest('#pkg').find('.choice_btn').removeClass('active');
    	}else{
    		$('#'+tagetParentId+' button').removeClass('active');
    	}

    	//toggleView.trBgPkg.click.hide();
    	toggleView.trBgPkg.click.show($(this));

    	$('.my-edition-option .filter').removeClass('active');
    	$(this).addClass('active');

    	$("#pkgFilterMdl").val($(this).attr('data-pkgMdl'));
    	$("#pkgFilterCode"+$(this).attr('data-pkgMdl')).text($(this).attr('data-pkgMdl'));
    	$("#pkgFilterKanCode"+$(this).attr('data-pkgMdl')).text($(this).attr('data-kanCd'));
    });

    return customizingRef;
})(document, window, jQuery);

function callLayer(item){

	switch(item.split("|")[0]){
		case 'UV청정탈취':
			$(".my-edition-ly-dim").css('display','block');
			$(".case1").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case1 .feature_subtit").css('display','block');
				$(".case1 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case1 .feature_subtit").css('display','none');
			}
			break;

		case '빅아이스메이커':
			$(".my-edition-ly-dim").css('display','block');
			$(".case2").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case2 .feature_subtit").css('display','block');
				$(".case2 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case2 .feature_subtit").css('display','none');
			}
			break;

		case '이온살균청정기':
			$(".my-edition-ly-dim").css('display','block');
			$(".case3").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case3 .feature_subtit").css('display','block');
				$(".case3 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case3 .feature_subtit").css('display','none');
			}
			break;

		case '김치통(상칸)':
			$(".my-edition-ly-dim").css('display','block');
			$(".case4").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case4 .feature_subtit").css('display','block');
				$(".case4 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case4 .feature_subtit").css('display','none');
			}
			break;

		case '메탈쿨링시스템':
			$(".my-edition-ly-dim").css('display','block');
			$(".case5").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case5 .feature_subtit").css('display','block');
				$(".case5 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case5 .feature_subtit").css('display','none');
			}
			break;

		case '4단계맞춤보관실':
			$(".my-edition-ly-dim").css('display','block');
			$(".case6").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case6 .feature_subtit").css('display','block');
				$(".case6 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case6 .feature_subtit").css('display','none');
			}
			break;

		case '칸별3종수납세트':
			$(".my-edition-ly-dim").css('display','block');
			$(".case7").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case7 .feature_subtit").css('display','block');
				$(".case7 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case7 .feature_subtit").css('display','none');
			}
			break;
		case '웰컴오토도어':
			$(".my-edition-ly-dim").css('display','block');
			$(".case8").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case7 .feature_subtit").css('display','block');
				$(".case7 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case7 .feature_subtit").css('display','none');
			}
			break;
		case '오토필정수기':
			$(".my-edition-ly-dim").css('display','block');
			$(".case9").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case7 .feature_subtit").css('display','block');
				$(".case7 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case7 .feature_subtit").css('display','none');
			}
			break;
		case '베버리지센터':
			$(".my-edition-ly-dim").css('display','block');
			$(".case10").css('display','block');
			if(item.split("|")[1] !="" && item.split("|")[1] != undefined && item.split("|")[1] != "undefined" && item.split("|")[1] != "O"){
				$(".case10 .feature_subtit").css('display','block');
				$(".case10 .feature_subtit").find('span').text(item.split("|")[1]);
			}else{
				$(".case10 .feature_subtit").css('display','none');
			}
			break;
		default :
			break;
	}
	$(".my-edition-ly-popup .slide-wrap:visible").not('.slick-initialized').slick();
	$('.btn-close').on('click',function(){
		$(".my-edition-ly-dim").css('display','none');
		$(this).parents('.my-edition-ly-popup').css('display','none');
		//$(this).parents('.my-edition-ly-popup').find('.slide-wrap.slick-initialized').unslick();
		$(this).parents('.my-edition-ly-popup').find('.slide-wrap.slick-initialized').slick('unslick');
	});
}

function selectYear(){
	$("#selectYear").change(function(){
		//alert($("#selectYear").val());
		$(sMyEdition + '_btn_area').hide();
		$('.my-edition-model-pkg').hide();
		$("#dataBody").html('');
		customizingRef.init();
	});
}

function isEmpty(val){

    if(typeof val == "undefined" || val == null || val == "" || val == undefined || val == "undefined"){

        return "";
    }else{
    	return val ;
    }
}

function getPositionText(code){
	var txt = '';
	var cd = isEmpty(code);
	if(cd == 'U'){
		txt = '상칸';
	}else if(cd == 'M'){
		txt = '중칸';
	}else if(cd == 'B'){
		txt = '하칸';
	}else{
		txt = '';
	}
	return txt;
}

// RGB HEX값 변환
function rgb2hex(rgb) {
    if (rgb.search("rgb") == -1 ) {
         return rgb;
    } else {
         rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
         function hex(x) {
              return ("0" + parseInt(x).toString(16)).slice(-2);
         }
         return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
    }
}

// 냉장고 초기화 및 탭위치
function refreshDoor(){
     var index = $('#liindex').val();
     $('.bespoke-color-tab > li').removeClass('on');
     $('.bespoke-color-tab > li').eq(index).addClass('on');
     $('.bespoke-color').removeClass('on');
     $('.bespoke-color').eq(index).addClass('on');
     $('.door_btn').removeClass('light')
     $('.resetColor').trigger('click');
     $('#alertCheck').val('N');

}

$(document).ready(function() {

	customizingRef.init();
	$('.my-edition-model-pkg').hide();
	// 360 칼라
	$('.bespoke-color-chip.store').hide();
    //출시연도 선택시
    //selectYear();
	// 냉장고 비우기
});
//rf10t9965apg:::1&productCode=ra-f17dulqmf:::1&productCode=ra-f17durqmf:::1&productCode=ra-f17dblqmf:::1&productCode=ra-f17dbrqmf:::1&productCode=RA-F36CWSBA:::1&productCode=RWP70010TWW:::1&productCode=RA-A00AUUAA:::1
