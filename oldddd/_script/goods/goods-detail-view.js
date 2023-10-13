(function($){
	var goodsDetail = {
		vCopyUrl : window.document.location.href
		, myMarriageMoveBuyYn : false // 패넷혼수이사여부
		, myMarriageMoveStat : {}     // 패넷혼수이사상태
		, myMarriageMoveCartCnt : 0   // 패넷혼수이사장바구니개수
		, spcExhbnYn : false		  // 패넷특별기획전여부
		, spcExhbnGoodsStat : {}	  // 패넷특별기획전상품 특별기획전구매상태
		, fnShareFacebook : function(){
			snsShare.facebook(this.vCopyUrl);
		}
		, fnShareKakao : function(){
			snsShare.kakaoTalk(window.document.location.href
// , $("meta[name='title']").attr("content")
				, ""
				, $("meta[itemprop='image']").attr("content")
				, $(".itm-info-detail").data("goodsNm"));
		}
		, fnChangeModel : function(mdlCode, goodsId, goodsTpCd, focusId, dropOption){
			var param = {
				goodsId : goodsId
				, goodsTpCd : goodsTpCd
				, adminYn : $(goodsMain.vGoodsWrapId).data("admin-yn")
				, adminPriceYn : $(goodsMain.vGoodsWrapId).data("admin-price-yn")
				, taskId : $(goodsMain.vGoodsWrapId).data("task-id")
				, taskDtlNo : $(goodsMain.vGoodsWrapId).data("task-dtl-no")
			};
			
			// 이미지
			goodsMain.fnGetHtml(".itm-pd-picture", "goodsImage", param);

			// 구매혜택
			if($("#compGoodsPurBenefit").length > 0){
				goodsMain.fnGetHtml("#compGoodsPurBenefit", "goodsPurBenefit", param, function(html){
					if($("#compGoodsPurBenefit").find('.target').html().trim() == '' ){
						$("#compGoodsPurBenefit"+"Li").hide();
						$("#compGoodsPurBenefit").hide();
					}else{
						$("#compGoodsPurBenefit"+"Li").show();
						$("#compGoodsPurBenefit").show();
					}
				});
			}

			// 설치 가이드
			goodsMain.fnGetHtml("#compGoodsInstallGuide", "goodsInstallGuide", param, function(html){
				if($("#compGoodsInstallGuide").find('.target').html()){
					$("#compGoodsInstallGuide"+"Li").hide();
					$("#compGoodsInstallGuide").hide();
				}else{
					$("#compGoodsInstallGuide"+"Li").show();
					$("#compGoodsInstallGuide").show();
				}
			});

			// 메뉴얼 초기화
			if($("#compGoodsManual").length > 0){
				$("#manualContents").hide();
				$("#manualContents").html('');
				$("#manualDropBtn").removeClass('open');
			}
			
			// 스펙 초기화
			$("#specContents").hide();
			$("#specContents").html('');
			$("#specDropBtn").removeClass('open');
			
			// 비교하기
			if($("#compGoodsCompare").length > 0){
				goodsMain.fnGetHtml("#compGoodsCompare", "goodsCompare", param);
			}

			// 상품평
			if($("#compGoodsComment").length > 0){
				goodsMain.fnGetHtml("#compGoodsComment", "goodsComment", param);
			}

			// 연관제품
			goodsMain.fnGetHtml("#compGoodsRelation", "goodsRelation", param, function(html){
				if($("#compGoodsRelation").find('.target').html()){
					$("#compGoodsRelation"+"Li").hide();
					$("#compGoodsRelation").hide();
				}else{
					$("#compGoodsRelation"+"Li").show();
					$("#compGoodsRelation").show();
				}
			});

			// seo 정보
			var options = {
				url : goodsMain.fnAjaxUrl("getSeoInfo")
				, type: 'POST'
				, data : param
				, done : function(data) {
					var seo = data.seoInfoVO;
					if(seo){
						if(seo.titleTag){
							$("title").text(seo.titleTag);
						}
						$("link[rel=canonical]").attr('href', seo.canonicalLink);
						$("meta[name=keywords]").attr('content', seo.searchKeyword);
						$("meta[name=description]").attr('content', seo.metaDescriptionTag);
						$("meta[name=date]").attr('content', seo.date);
						$("meta[name=twitter\\:card]").attr('content', seo.twitterCard);
						$("meta[name=twitter\\:site]").attr('content', seo.twitterSite);
						$("meta[name=twitter\\:creator]").attr('content', seo.twitterCreator);
						$("meta[name=twitter\\:url]").attr('content', seo.goodsUrl ? seo.goodsUrl : seo.canonicalLink);
						$("meta[name=twitter\\:title]").attr('content', seo.twitterTitle);
						$("meta[name=twitter\\:description]").attr('content', seo.twitterDescription);
						$("meta[name=twitter\\:image]").attr('content', seo.twitterImagePath);
						$("meta[property=og\\:url]").attr('content', seo.goodsUrl ? seo.goodsUrl : seo.canonicalLink);
						$("meta[property=og\\:image]").attr('content', seo.openGraphImage ? seo.openGraphImage : seo.twitterImagePath);
						$("meta[property=og\\:type]").attr('content', seo.facebookTp);
						$("meta[property=og\\:title]").attr('content', seo.facebookTitle);
						$("meta[property=og\\:description]").attr('content', seo.facebookDescription);
						$("meta[itemprop=name]").attr('content', seo.twitterSite);
						$("meta[itemprop=image]").attr('content', seo.twitterImagePath);
						$("meta[itemprop=url]").attr('content', seo.goodsUrl ? seo.goodsUrl : seo.canonicalLink);
						$("meta[itemprop=description]").attr('content', seo.metaDescriptionTag);
						$("meta[itemprop=keywords]").attr('content', seo.searchKeyword);
					}
				}
			};
			ajax.call(options);

			// detail
			goodsMain.fnGetHtml(".itm-information", "goodsDetail", param, function(html){
				// CTA 변경				
				goodsMain.fnCtaInit();				
				goodsMain.fnNodeMove();
				goodsMain.fnShowOrderMenu($('.itm-total-bottom', goodsMain.vGoodsWrapId));
				
				// 태깅 변경
				digitalData.product.model_code = $(".itm-info-detail", goodsMain.vGoodsWrapId).data("mdl-code");
				digitalData.product.model_name = $(".itm-info-detail", goodsMain.vGoodsWrapId).data("mdl-nm");
				
				// 탑재어플 정보 mdlCode
				if($(".ins-apps-btn").length > 0){
					$(".ins-apps-btn").data("mdl-code", mdlCode);
				}
				
				// location 변경
				// $(".locationDiv").find('span:last').text($(".itm-info-detail").data('goods-nm').replace(/(\r\n|\n|\r)/gm,
				// '').replace(/\<br\/?\>/gi, ''));
				var urlNm = $(".itm-info-detail", goodsMain.vGoodsWrapId).data("url-nm");
				var grpNm = $(".itm-info-detail", goodsMain.vGoodsWrapId).data("fmy-grp-nm");

				// request url 변경
				var locationUrl = "";
				if($(goodsMain.vGoodsWrapId).data("admin-yn") == 'Y'){
					var taskId = $(goodsMain.vGoodsWrapId).data("task-id");
					var taskDtlNo = $(goodsMain.vGoodsWrapId).data("task-dtl-no");
					locationUrl = $(goodsMain.vGoodsWrapId).data("ctpath") + "goods/preview/"+ param.goodsId +"/?adminYn=Y&taskId=" + taskId + "&taskDtlNo=" + taskDtlNo;
				}else{
					locationUrl = $(goodsMain.vGoodsWrapId).data("ctpath")+ urlNm + '/' + grpNm + '/' + mdlCode + '/';
				}
				
				// URL 변경
				$("input[name=returnUrl]", goodsMain.vMainWrapId).val(locationUrl);
				history.replaceState(null, null, locationUrl);
				
				// 옵션 변경시 멤버십 포인트롤 다시 조회 하도록 초기화
				if (goodsMembershipPointManager != undefined) {
					goodsMembershipPointManager.data = null;
				}
				// 특장점
				// 2021.03.22 옵션 변경 시 특장점 새로고침되도록 수정
				goodsMain.fnGetHtml("#compGoodsFeatures", "goodsFeatures", param);
				
				// 웹접근성 - 포커스 유지. 2021.01.14
				if (dropOption !== null && dropOption !== undefined && $.trim(dropOption).length > 0) {
					$(".itm-option-choice").find(".dropButton").removeClass("open");
					$(".itm-option-choice").find(".dropList").css("display", "none");
					$("#"+dropOption+" > .dropButton").addClass("open");
					$("#"+dropOption+" > .dropList").css("display", "block");
				}
				
				if (focusId !== null && focusId !== undefined && $.trim(focusId).length > 0) {
					$("#"+focusId).focus();
				}

			});
		}
		, fnGetCoupon : function(){
					
			var couponOptions = {
				prefix : $(goodsMain.vGoodsWrapId).data("ctpath")
        		, goodsId : $("input[name=goodsId]", goodsMain.vGoodsWrapId).val()
            };
			commonCpPop.setClosePopupCallback(this.fnCallbackCoupon);
            commonCpPop.downloadCouponPopup("popupLayer", couponOptions);
		}

		, fnGetStorePickUp : function(){
			var storePickUpOptions = {
					url : this.fnAjaxUrl("storePickupList")
					, type: 'POST'
					, dataType : "html"
					, done : function(data) {
						goodsMain.fnOpenLayer($("#popupLayer").addClass("layer-storepickup"), data);
					}
				};
			ajax.call(storePickUpOptions);
		}
		, fnCallbackCoupon : function(data){
			if (data.allDownYn === 'Y'){
				// 쿠폰다운로드 완료
          		$(".coupon-box>.btn-coupon", goodsMain.vGoodsWrapId).hide();
          		$(".coupon-box>.downCoupon", goodsMain.vGoodsWrapId).show();
			}
		}
		, fnTotalPrice : function(){
			let orgPrice = $('.pd-total-price:first', goodsMain.vGoodsWrapId).data("price"); // 혜택금액
			let qty = $("#countPrd").val(); // 상품수량
			let sumPrice = orgPrice * qty;
			let dcPrice = 0;
			var $optRegular = $('#optRegularDel', goodsMain.vGoodsWrapId);
            if($optRegular.length > 0 && $optRegular.prop('checked') === true){
            	// 정기배송
            	let dcRate = $optRegular.data("rate"); // 할인율
            	dcPrice = Math.round(sumPrice * (dcRate / 100));  // 정기상품 할인가
            	$('#ratePrice', goodsMain.vGoodsWrapId).text(format.num(dcPrice));
            }

			// 옵션 상품
			let optPrice = this.fnOptionPrice();

			let totalPrice = (sumPrice-dcPrice) + optPrice;
			if($("#membershipDropBtn").length > 0){
				setMembershipInfo();
			}
			
			
			
			// 구매수량별 총 혜택가 금액 추가 2020.12.21
			let rangeActive = 0;
			if ($("input[name=priceRange]").length > 0) {
				// Activ
					if($("#priceRange0").data("range-qty2") == 1 && qty >= $("#priceRange1").data("range-qty1") && qty <= $("#priceRange1").data("range-qty2")) {
						rangeActive = 1;
					}else if($("#priceRange0").data("range-qty2") == 1 && qty >= $("#priceRange2").data("range-qty1") && qty <= $("#priceRange2").data("range-qty2")) {
						rangeActive = 2;
					}else if($("#priceRange0").data("range-qty2") > 1 && qty >= $("#priceRange0").data("range-qty1") && qty <= $("#priceRange0").data("range-qty2")) {
						rangeActive = 1;
					}else if($("#priceRange0").data("range-qty2") > 1 && qty >= $("#priceRange1").data("range-qty1") && qty <= $("#priceRange1").data("range-qty2")) {
						rangeActive = 2;
					}
				if(rangeActive == 1){
					$("#dcQty1Vol").parent('div').addClass('active');
					$("#dcQty2Vol").parent('div').removeClass('active');
				}else if(rangeActive == 2){
					$("#dcQty2Vol").parent('div').addClass('active');
					$("#dcQty1Vol").parent('div').removeClass('active');
				}else{
					$("#dcQty2Vol").parent('div').removeClass('active');
					$("#dcQty1Vol").parent('div').removeClass('active');
				}
				
				// 혜택가 총 금액
				let rangeSumPrice = 0;
				let totalRangePrice = 0;
				for (var i = 0; i < $("input[name=priceRange]").length; i++) {
					var rangeQty1 = $("#priceRange"+i).data("range-qty1");
					var rangeQty2 = $("#priceRange"+i).data("range-qty2");
					
					if (qty >= rangeQty1 && qty <= rangeQty2) {
						var rangePrice = $("#priceRange"+i).data("range-price");
					}
					
					rangeSumPrice = rangePrice * qty;
					totalRangePrice = rangeSumPrice +  optPrice
					
					// 최대수량 체크
					let rangeLength = $("input[name=priceRange]").length-1; 
					var maxQty =  $("#priceRange"+rangeLength).data("range-qty2");
					
					if ( qty > maxQty) {
						goodsMain.fnMsgPop({
							content : "구매 가능한 수량이 초과되었습니다.<br/>대량구매를 원하시면<br/>견적문의를 통해 문의해 주세요."
							, yes : "견적문의"
							, yescls : "contact-view"
							, no : "취소"
							, close : "툴팁 닫기"
						})
						 $("#countPrd").val(maxQty);
						$(".count-prd", goodsMain.vGoodsWrapId).val(maxQty);
						return;
					}
				}
				$(".event-price").css("display","none");

				// 금액이 비정상인경우 안내메시지 표시
				if(isNaN(totalRangePrice)){
					let alertData = {
						title: ""
						, content : "주문금액과 결제금액이 일치하지 않습니다."
						, callback : function(){
							location.reload();
						}
						, btnText : "확인"
					};
					commonAlert(alertData);
					openLayer('commonAlert');
					return false;
				}else{
					$('.itm-total-bottom .pd-total-price', goodsMain.vGoodsWrapId).text(format.num(totalRangePrice));
				}
			}else {
				// 금액이 비정상인경우 안내메시지 표시
				if(isNaN(totalPrice)){
					let alertData = {
							title: ""
							, content : "주문금액과 결제금액이 일치하지 않습니다."
							, callback : function(){
								location.reload();
							}
							, btnText : "확인"
						};
						commonAlert(alertData);
						openLayer('commonAlert');
						return false;
				}else{
					$('.itm-total-bottom .pd-total-price', goodsMain.vGoodsWrapId).text(format.num(totalPrice));
				}
			}
			
			
		}
		, fnOptionPrice : function(){
			var optPrice = 0;
			$.each($(".option>.list-prd-optional>ul>li"), function(){
				let orgOptPrice = $(this).find(".box-itm-option").data("price");
				let optQty = $(this).find(".number").val(); // 옵션수량
				optPrice += orgOptPrice * optQty;
			});
			return optPrice;
		}
		, fnSecPrice : function(count){
			let secPrc = $("#secPrc", goodsMain.vGoodsWrapId);
			if (secPrc.length > 0){
				let dcQty = secPrc.data("dcqty");
				let dcQty2 = secPrc.data("dcqty2");

				if(count >= 1 && count <= dcQty){
					let price = secPrc.data("price");
					$('.pd-total-price:first', goodsMain.vGoodsWrapId).data("price", price);
					$('.pd-total-price:first', goodsMain.vGoodsWrapId).text(format.num(price));
					if(!$("#dcQty1Vol").parent('div').hasClass('active')){
						$("#dcQty2Vol").parent('div').removeClass('active');
						$("#dcQty1Vol").parent('div').addClass('active');
					}

				}else if(count > dcQty && count <= dcQty2){
					let price2 = secPrc.data("price2");
					$('.pd-total-price:first', goodsMain.vGoodsWrapId).data("price", price2);
					$('.pd-total-price:first', goodsMain.vGoodsWrapId).text(format.num(price2));
					if(!$("#dcQty2Vol").parent('div').hasClass('active')){
						$("#dcQty1Vol").parent('div').removeClass('active');
						$("#dcQty2Vol").parent('div').addClass('active');
					}
				}else{
					goodsMain.fnMsgPop({
						content : "구매 가능한 수량이 초과되었습니다.<br/>대량구매를 원하시면<br/>견적문의를 통해 문의해 주세요."
						, yes : "견적문의"
						, yescls : "contact-view"
						, no : "취소"
						, close : "툴팁 닫기"
					})

					let price2 = secPrc.data("price2");
					$('.pd-total-price:first', goodsMain.vGoodsWrapId).data("price", price2);
					$('.pd-total-price:first', goodsMain.vGoodsWrapId).text(format.num(price2));
					if(!$("#dcQty2Vol").parent('div').hasClass('active')){
						$("#dcQty1Vol").parent('div').removeClass('active');
						$("#dcQty2Vol").parent('div').addClass('active');
					}

					return false;
				}
			}

			return true;
		}
		, fnValidFreebie : function(){
			// 사은품 validate
			var freebie = $(".freebies .dropdownMenu", goodsMain.vGoodsWrapId).next('.list-prd-optional');

			for(var i=0; i<freebie.length; i++){
				if($(freebie[i]).prev(".dropdownMenu").length > 0 && $(freebie[i]).prev(".dropdownMenu").find('input:checked').next('label').data('key') != 'noChoice'){
					if($(freebie[i]).data('lmt-qty') >$(freebie[i]).find('li').length){
						let alertData = {
							title: ""
							, content : "사은품을 선택해 주세요."
							, callback : function(){
								var focusId = $("#commonAlert a").data('focus-id');
								if(focusId){
									$("#"+focusId).focus();
								}
							}
							,focusId : $(freebie[i]).siblings('.dropdownMenu').find('.choose-account').attr('id')
							, btnText : "확인"
						};
						commonAlert(alertData);
						openLayer('commonAlert');
						return false;
					}
				}
			}

			return true;
		}
		, fnReqData : function(){
			
			var reqData = $("#goodsCartForm").serializeJson();

			// 사은품
			var freebieArr = new Array();

			$.each($(".freebies .dropdownMenu", goodsMain.vGoodsWrapId), function(){
				if($(this).find('input:checked').next('label').data('key') == 'noChoice'){
					var prmt = $(this).find('.box-itm-option').eq(0);
					var str = prmt.data("goodsid") + ":" +prmt.data("prmtno") +":"+"0";
					freebieArr.push(str);
				}
			})

			$.each($(".freebies .dropdownMenu", goodsMain.vGoodsWrapId).siblings('.list-prd-optional').find('.box-itm-option'), function(){
				if($(this).data("goodsid")){
					var str = $(this).data("goodsid") + ":" + $(this).data("prmtno") +":" + $(this).data("freeno");
					freebieArr.push(str);
				}
			})
			reqData.frbInfo = freebieArr;

			// 옵션상품
			var goodsIds = new Array();
			var buyQtys = new Array();
			goodsIds.push(reqData.goodsIds);
			buyQtys.push(reqData.buyQtys);
			$.each($(".option .list-prd-optional", goodsMain.vGoodsWrapId).find('.box-itm-option'), function(){
				goodsIds.push($(this).data("option-id"));
				buyQtys.push($(this).find(".number").val());
			})

			// reqData.goodsIds = goodsIds;
			// reqData.buyQtys = buyQtys;
			
			if($("#goodsFnetCountLimitForm").find("input[name=goodsIds]").val() === null || $("#goodsFnetCountLimitForm").find("input[name=goodsIds]").val() === undefined || $("#goodsFnetCountLimitForm").find("input[name=goodsIds]").length == 0){
				reqData.goodsIds = goodsIds;
				reqData.buyQtys = buyQtys;
			}else{
				reqData.goodsIds = $("#goodsFnetCountLimitForm").find("input[name=goodsIds]").val();
				reqData.buyQtys = $("#goodsFnetCountLimitForm").find("input[name=buyQtys]").val();
				$("#goodsFnetCountLimitForm").remove();
			}
			
			if( $('#optRegularDel').is(':checked') ) {
				reqData.rglrDlvrYn = 'Y';
				reqData.rglrDlvrCycl = $('.itm-radiobtn-list input[name="itm-deliver-type"]:checked').data().key;
			}
		
			return reqData;
		}
		, fnValidMobile : function(mobileNum){
			console.log(mobileNum);
			var mobileCheck = false;
			if(mobileNum.length != 11 && mobileNum.length != 10){
				mobileCheck = true;
			}
			var frontNumList = new Array('010', '011', '017', '018', '019');
			var frontNum = mobileNum.substring(0, 3);
			if(frontNumList.indexOf(frontNum) === -1){
				mobileCheck = true;
			}
			if($(this).hasClass("btn-type1-disable")){
				mobileCheck = true;
			}
			return mobileCheck;
		}
		, fnValidMinCount : function(){

			var minQty = $("#countPrd").data('min-ord-qty');

			if(minQty && minQty > 1 && $("#countPrd ").val() < minQty){
				let alertData = {
					title: ""
					, content : "수량은 "+minQty+"개 이상 선택되어야 합니다."
					, callback : function(){
						$("#countPrd").focus();
					}
					, btnText : "확인"
				};
				commonAlert(alertData);
				openLayer('commonAlert');
				return false;
			}
			return true;
		}
		, fnInsertCart : function(reqData) {
			var stGbCd = $("input[name=stGbCd]", goodsMain.vGoodsWrapId).val();
			
			var options = {
				url : goodsMain.fnAjaxUrl("insertCart", "xhr/order/")
				, data : reqData
				, done : function(data){
					if(reqData.myMarriageMoveBuyYn && reqData.buyQtys.length > 1){// 혼수이사장바구니와
																					// 일반장바구니에
																					// 동시에
																					// 담았을
																					// 경우
						
						let $msgMixData = Object.assign({},$("#btnCart").data());
						console.log($("#btnCart").data());
						$msgMixData.content = "1개의 제품이 혼수/이사 제품에 해당되어<br> 혼수/이사로 장바구니로 이동됩니다.<br>($cnt$개의 제품은 일반장바구니를 확인하세요)";
						$msgMixData.content = $msgMixData.content.replace("$cnt$", reqData.buyQtys[1]);
						goodsMain.fnMsgPop($msgMixData);

						if (data.cartCnt !== 0) {
							$(".cart-inner-count").css("display", "block");
							$(".cart-inner-count").html(data.cartCnt);
						} else {
							$(".cart-inner-count").css("display", "none");
						}
						_satellite.track('add to cart');
					}else{
						if (($("input[name=stGbCd]").val() == '50' || $("input[name=stGbCd]").val() == '60') && $("input[id=disp2ClsfEnNm]").val() == 'soho') {
							var options2 = {
									url : goodsMain.fnAjaxUrl("loginCheck")
									, type: 'POST'
									, done : function(data2) {
										if(!data2.isLogin) {
											location.href=$(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+$(goodsMain.vGoodsWrapId).data("ctpath")+"cart/";
										} else {
											var $msgData = {};
											$.extend($msgData, $("#btnCart").data());
											$msgData.content = $msgData.content.replace("$cnt$", data.cartCnt);
											goodsMain.fnMsgPop($msgData);
					
											if (data.cartCnt !== 0) {
												$(".cart-inner-count").css("display", "block");
												$(".cart-inner-count").html(data.cartCnt);
											} else {
												$(".cart-inner-count").css("display", "none");
											}
										}
									}
								};
								ajax.call(options2);
						}else{
							var $msgData = {};
							$.extend($msgData, $("#btnCart").data());
							$msgData.content = $msgData.content.replace("$cnt$", data.cartCnt);
							goodsMain.fnMsgPop($msgData);
	
							if (data.cartCnt !== 0) {
								$(".cart-inner-count").css("display", "block");
								$(".cart-inner-count").html(data.cartCnt);
							} else {
								$(".cart-inner-count").css("display", "none");
							}
						}
						_satellite.track('add to cart');
					}
				}
			};

			// NetFunnel_Action B2C만 적용 start (20200902)
			if(stGbCd == '10'){
				options = $.extend({}, options, {netFunnelId : 'b2c_add_cart'});
			}
			// NetFunnel_Action B2C만 적용 end (20200902)
			ajax.call(options);
		}

		// 패밀리넷인 경우 수량제한
		, fnFamliyNetCountLimit: function(reqData, type) {
			$('#fnetOrderAgree').val('N');
			var msgOptions = {};
			var options = {
					url : goodsMain.fnAjaxUrl("limitcount", "xhr/order/check/")
					, data: reqData
					, done : function(data){
						var listBuyInfo = data.listOrderBuyLimitVO
						  , baseCount   = data.baseCount
						  , buyQty      = parseInt(reqData.buyQtys[0]);
						
						myMarriageMoveBuyYn =   (data.myMarriageMoveBuyYn == undefined || data.myMarriageMoveBuyYn == null)? false : data.myMarriageMoveBuyYn; 	 // 혼수이사가능여부
						myMarriageMoveStat =    (data.myMarriageMoveStat == undefined || data.myMarriageMoveStat == null)? {} : data.myMarriageMoveStat; 		 // 혼수이사
																																									// 상태
						myMarriageMoveCartCnt = (data.myMarriageMoveCartCnt == undefined || data.myMarriageMoveCartCnt == null)? 0 : data.myMarriageMoveCartCnt; // 혼수이사상품품목
																																									// 장바구니
																																									// 수량
						
						spcExhbnYn = 			(data.spcExhbnYn == undefined || data.spcExhbnYn == null)? false : data.spcExhbnYn; 	 						 // 특별기획전가능여부
						spcExhbnGoodsStat =		(data.spcExhbnGoodsStat == undefined || data.spcExhbnGoodsStat == null)? {} : data.spcExhbnGoodsStat; 			 // 특별기획전
																																									// 상품
																																									// 특별기획전구매
																																									// 상태
						
						orderGoodsQtyRestrictYn = data.orderGoodsQtyRestrictYn;
						orderGoodsQtyRestrictQty = data.orderGoodsQtyRestrictQty;

						if(Array.isArray(data.dispRestricts)){
							$('#dispRestrictsFrm').remove();
							var formHtml = '';
							formHtml += '<form action="" id="dispRestrictsFrm"  name="dispRestrictsFrm" method="post" >';
							for(var j=0 ; j<data.dispRestricts.length ; j++){
								formHtml += '<input name="dispClsfNo" value="'+data.dispRestricts[j].dispClsfNo+'">';
								formHtml += '<input name="qty_'+data.dispRestricts[j].dispClsfNo+'" value="'+data.dispRestricts[j].buyQty+'" >';
							}
							formHtml += '</form>'; 
							$('body').append(formHtml);
						}	
						
						$("#fnMultiPurchasePrivacyTermsPoint").find("strong").text(orderGoodsQtyRestrictQty + "대째");
						
						if( orderGoodsQtyRestrictYn != null ) {
							if( orderGoodsQtyRestrictYn == "Y" ) {
								
							// 패밀리넷 품목별 초과 구매 관련 신청 안내
								openLayer('fnOverpurchaseApplyGuidance');
								return;
							}else if( orderGoodsQtyRestrictYn == "N" ){
								// KDP-28060 [FNET] [상품] [FO] 구매수량 제한 팝업 수정 요청
								// if(data.stId != '2') {
									// 패밀리넷 동일 품목 다량 구매 관련 안내
									openLayer('fnMultiPurchaseGuidance');
									return;
								// }
							}
						}
						
						if ( buyQty >= baseCount ) {
							$('#popupFmailyAgree').find('#baseCount').text(baseCount);
							openLayer('popupFmailyAgree');
							return false;
						}
						
						for ( var i=0; i < listBuyInfo.length ; i++) {
// var goodsId = listBuyInfo[i].goodsId
							var orderCount = parseInt(listBuyInfo[i].count);
							 
							if ( orderCount >= baseCount || orderCount + buyQty >= baseCount) {
								$('#popupFmailyAgree').find('#baseCount').text(baseCount);
								openLayer('popupFmailyAgree');
								return false;
							}
						}
						
						$('#fnetOrderAgree').val('Y');
						
						if(spcExhbnYn){ // 패넷특별기획전가능
							reqData.spcExhbnYn = spcExhbnYn;
							if($("input[name=nowBuyYn]").val() == 'N'){
								goodsDetail.fnFamilyNetSpcExhbnCart(reqData);
								return false;
							}else if($("input[name=nowBuyYn]").val() != 'N'){
								goodsDetail.fnFamilyNetSpcExhbnNowBuy(reqData);
								return false;
							}
						}else if(myMarriageMoveBuyYn){ // 혼수이사가능
							reqData.myMarriageMoveBuyYn = myMarriageMoveBuyYn;
							if($("input[name=nowBuyYn]").val() == 'N'){
								goodsDetail.fnFamilyNetMyMarriageMoveCart(reqData, myMarriageMoveCartCnt);
								return false;
							}else if($("input[name=nowBuyYn]").val() != 'N'){
								goodsDetail.fnFamilyNetMyMarriageMoveNowBuy(reqData, myMarriageMoveCartCnt);
								return false;
							}
						}
						
						if ( $("input[name=nowBuyYn]").val() == 'N' ) {
							goodsDetail.fnShowCartMessage(reqData);
						} else {
							goodsDetail.fnCartNowBuy(reqData);
						}
						return true;
					}
				};
			ajax.call(options);
		}	
		// 패밀리넷인 경우 수량제한
		, b2b2cIBMCountLimit: function(reqData) {
			var msgOptions = {};
			var options = {
					url : goodsMain.fnAjaxUrl("limitcount", "xhr/order/check/b2b2c/ibm/")
					, data: reqData
					, done : function(data){
						var listBuyInfo = data.listOrderBuyLimitVO
						  , baseCount   = data.baseCount
						  , buyQty      = parseInt(reqData.buyQtys[0]);
	
						if ( buyQty > baseCount ) {
							let alertData = {
						        content : "구매 가능한 개수를 초과하였습니다."
						    };
							commonAlert(alertData);
							openLayer('commonAlert');
							return false;
						}
						
						for ( var i=0; i < listBuyInfo.length ; i++) {
// var goodsId = listBuyInfo[i].goodsId
							var orderCount = parseInt(listBuyInfo[i].count);
							 
							if ( orderCount > baseCount || orderCount + buyQty > baseCount) {
								let alertData = {
							        content : "구매 가능한 개수를 초과하였습니다."
							    };
								commonAlert(alertData);
								openLayer('commonAlert');
								return false;
							}
						}
						
						if ( $("input[name=nowBuyYn]").val() == 'N' ) {
							goodsDetail.fnShowCartMessage(reqData);
						} else {
							goodsDetail.fnCartNowBuy(reqData);
						}
						return true;
					}
				};
			ajax.call(options);
		}
		// 등외급몰 수량제한
		, fn2CountLimit: function(reqData) {
			var msgOptions = {};
			var options = {
					url : goodsMain.fnAjaxUrl("limitcount", "xhr/order/check/fn2/")
					, data: reqData
					, done : function(data){
						var limitInfo = data,
							buyQty    = parseInt(reqData.buyQtys[0]);
						
						for( var i=0; i<limitInfo.length; i++ ) {
							var baseCount = parseInt(limitInfo[i].baseCount);
							var buyCount  = parseInt(limitInfo[i].buyCount);
							
							if( buyQty > baseCount || buyCount > baseCount || buyCount + buyQty > baseCount) {
								let alertData = {
							        content : "구매 가능한 개수를 초과하였습니다."
							    };
								commonAlert(alertData);
								openLayer('commonAlert');
								return false;
							}
						}
	
						if ( $("input[name=nowBuyYn]").val() == 'N' ) {
							goodsDetail.fnShowCartMessage(reqData);
						} else {
							goodsDetail.fnCartNowBuy(reqData);
						}
						return true;
					}
				};
			ajax.call(options);
		}
		// b2b2c, b2b 추가
		, fnCartNowBuy: function(reqData) {

			if(($("input[name=stGbCd]").val() == '10' || $("input[name=stGbCd]").val() == '80' || $("input[name=stGbCd]").val() == '50') && $("#shop-storeYN").val() == 'Y' && $("#dlvrPckYn").val() == 'Y' && $("#dlvrGenYn").val() != 'Y') {
				var alertMsg = "매장픽업 상품은 매장을 선택 후 바로구매가 가능합니다.";
				
				if($("input[name=stGbCd]").val() == '10'){
					alertMsg = "매장픽업/빠른배송 상품은 매장을 선택 후 바로구매가 가능합니다.";
				}
				
				if($("#omsSendYn").val() != 'N') {
					alertMsg += "<br/>상품을 준비중입니다.";
				}
				
				
				if (reqData.pckStrNo === null || reqData.pckStrNo === undefined || $.trim(reqData.pckStrNo).length == 0) {
					var alertData = {
							 title: ""
							,content : alertMsg
							,callback : openPopDlvrPck
							,btnText : "확인"
						};
						commonAlert(alertData);
						openLayer('commonAlert');
						return false;
				}
			}
			
			$('#outCheck').val('Y');
			// 트레이드인 체크 후 바로구매 시 팝업
			if($("input[name=goodsOrdTpCd]").val() == 'TRD' /* $(frontConstants.TRADE_IN */) {

				var nowBuyOptions = {
					url : goodsMain.fnAjaxUrl("insertCart", "xhr/order/")
					, data : reqData
					, done : function(data){
						// 삼성닷컴 큐커식품관 비회원 로그인 구매 불가
						if(data.qookerNonMemYn != null && data.qookerNonMemYn != '' && data.qookerNonMemYn == 'Y'){
							let alertData = {
									content : data.exMsg
								};
							alertData.callback = function(){
								location.href = "/sec/member/indexLogin/?returnUrl=" + location.pathname;
							}
							commonAlert(alertData);
							openLayer('commonAlert');
							return;
					  } else {
						var options2 = {
							url : goodsMain.fnAjaxUrl("loginCheck")
							, type: 'POST'
							, done : function(data) {
								if(!data.isLogin) {
									let confirmData = {
										content : "로그인 후 바로구매 가능 합니다<br/>로그인 하시겠습니까?"
									    ,okBtnText : "확인"
									    ,cancelBtnText : "취소"
									};
									commonConfirm(confirmData);
									openLayer('commonConfirm');
									
									var isTrdLoginPopupClicked = false;
									
									$("#closeCommonConfirmBtn").hide();
									
									$("#commonConfirmOkBtn").on('click' , function(){
										if($("#pdAlertYn").val() == "Y"){
											var msgOptions = {};
											$.extend(msgOptions, { content : $("#pdAlertMsg").val(), yes : '확인' });
											goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
												var _ = $(this)
												  , layerClass = 'div.layer-pop';
												location.href=$(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+$(goodsMain.vGoodsWrapId).data("ctpath")+"order/";
											});
										}else{
											location.href=$(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+$(goodsMain.vGoodsWrapId).data("ctpath")+"order/";
										}
										return false;
									});
									
									$("#commonConfirmCancelBtn").on('click' , function(){
										return false;
									});
								} else {
									if($("#pdAlertYn").val() == "Y"){
										var msgOptions = {};
										$.extend(msgOptions, { content : $("#pdAlertMsg").val(), yes : '확인' });
										goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
											var _ = $(this)
											  , layerClass = 'div.layer-pop';
											
												location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "order/";
										});
									}else{
											location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "order/";
									}
								}
							}
						};
						ajax.call(options2);
						return false;
						}
					},
      				error : function(response, status, error) {
        				var alertData = {
          						title : "",
          						content : "오류가 발생하였습니다.",
          						callBack : "",
          						btnText : "확인"
        					};
        				commonAlert(alertData);
        				openLayer('commonAlert');
        				return false;
      				},
      				beforeSend : function(xhr) {
        				xhr.setRequestHeader("ajax", true);
      				},
      				complete : function() {
      				}
				};
				ajax.call(nowBuyOptions);
				
				return false;
			}
			
			// My 갤럭시 플랜 체크 후 바로구매 시 팝업
			if($("input[name=goodsOrdTpCd]").val() == 'GC' || $("input[name=goodsOrdTpCd]").val() == 'TRDGC') {
				var nowBuyOptions = {
					url : goodsMain.fnAjaxUrl("insertCart", "xhr/order/")
					, data : reqData
					, done : function(data){
						// 삼성닷컴 큐커식품관 비회원 로그인 구매 불가
						if(data.qookerNonMemYn != null && data.qookerNonMemYn != '' && data.qookerNonMemYn == 'Y'){
                			let alertData = {
									content : data.exMsg
                  				};
							alertData.callback = function(){
								location.href = "/sec/member/indexLogin/?returnUrl=" + location.pathname;
				        	}
                			commonAlert(alertData);
                			openLayer('commonAlert');
                			return;
					} else {
						var options2 = {
							url : goodsMain.fnAjaxUrl("galaxyClubCheck")
							, type: 'POST'
							, data : reqData
							, done : function(data) {
								if(!data.isLogin) {
									let confirmData = {
										content : "로그인 이후 바로구매 가능 합니다<br/>로그인 하시겠습니까?"
									    ,okBtnText : "확인"
									    ,cancelBtnText : "취소"
									};
									commonConfirm(confirmData);
									openLayer('commonConfirm');
									
									var isTrdLoginPopupClicked = false;
									
									$("#closeCommonConfirmBtn").hide();
									
									$("#commonConfirmOkBtn").on('click' , function(){
										if($("#pdAlertYn").val() == "Y"){
											var msgOptions = {};
											$.extend(msgOptions, { content : $("#pdAlertMsg").val(), yes : '확인' });
											goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
												var _ = $(this)
												  , layerClass = 'div.layer-pop';
												var returnUrl = $("input[name=returnUrl]").val();
												location.href=$(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+returnUrl;
											});
										}else{
											var returnUrl = $("input[name=returnUrl]").val();
											location.href=$(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+returnUrl;
										}
										return false;
									});
									
									$("#commonConfirmCancelBtn").on('click' , function(){
										return false;
									});
								} else {
									// 멤버십 가입 여부
									if(data.membershipNo != null){
										// 캠페인 가입 여부
										if(data.isGalaxyCmpnYn != null){
											if(data.isGalaxyCmpnYn == 'N' && data.prgrStatCd == null){
												// 주문화면
												location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "order/";
											}else if(data.isGalaxyCmpnYn == 'N' && data.prgrStatCd != null){
												if(data.prgrStatCd == '01'){// 가입상태:접수
													let confirmData = {
														content : "<span class='blue-color'>" + data.clubNm + "</span>에<br class='pc-ver'> 가입신청이 진행 중이므로<br class='pc-ver'> My 갤럭시 플랜 대상 제품을<br class='pc-ver'> 추가 구매할 수 없습니다."
													    ,cancelBtnText : "닫기"
													};
													commonConfirm(confirmData);
													openLayer('commonConfirm');
													
													$("#commonConfirmOkBtn").hide();
													
													$("#commonConfirmCancelBtn").on('click' , function(){
														return false;
													});
												}else if(data.prgrStatCd == '02'){// 가입상태:가입대기
													let confirmData = {
														content : "<span class='blue-color'>" + data.clubNm + "</span>에<br class='pc-ver'> 가입신청이 완료되었으므로<br class='pc-ver'> My 갤럭시 플랜 대상 제품을<br class='pc-ver'> 추가 구매할 수 없습니다."
													    ,cancelBtnText : "닫기"
													};
													commonConfirm(confirmData);
													openLayer('commonConfirm');
													
													$("#commonConfirmOkBtn").hide();
													
													$("#commonConfirmCancelBtn").on('click' , function(){
														return false;
													});
												}else if(data.prgrStatCd == '03'){// 가입상태:가입완료
													let confirmData = {
														content : "<span class='blue-color'>" + data.clubNm + "</span>에<br class='pc-ver'> 가입이 완료되었으므로<br class='pc-ver'> My 갤럭시 플랜 대상 제품을<br class='pc-ver'> 추가 구매할 수 없습니다."
													    ,cancelBtnText : "닫기"
													};
													commonConfirm(confirmData);
													openLayer('commonConfirm');
													
													$("#commonConfirmOkBtn").hide();
													
													$("#commonConfirmCancelBtn").on('click' , function(){
														return false;
													});
												}	
											}else{
												let confirmData = {
													content : "이미 <span class='blue-color'>" + data.clubNm + "</span>에<br class='pc-ver'> 포함되어 있는 제품을 구매하셨습니다.<br>"
															+ "동일 " + data.clubNm + "에<br class='pc-ver'> 포함되어 있는 제품은<br class='pc-ver'> 회원 1인당 1대만 구매 가능합니다."
													,cancelBtnText : "닫기"
												};
												commonConfirm(confirmData);
												openLayer('commonConfirm');
												
												$("#commonConfirmOkBtn").hide();
												
												$("#commonConfirmCancelBtn").on('click' , function(){
													return false;
												});
											}
										}
									}else{
										let confirmData = {
											content : "My 갤럭시 플랜 제품을 구매하시려면<br class='pc-ver'> 멤버십 회원으로 먼저 가입하셔야 합니다.<br>멤버십 회원으로 가입 하시겠습니까?"
										    ,okBtnText : "확인"
										    ,cancelBtnText : "취소"
										};
										commonConfirm(confirmData);
										openLayer('commonConfirm');
										
										$("#commonConfirmOkBtn").on('click' , function(){
											if($("#pdAlertYn").val() == "Y"){
												var msgOptions = {};
												$.extend(msgOptions, { content : $("#pdAlertMsg").val(), yes : '확인' });
												goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
													var _ = $(this)
													  , layerClass = 'div.layer-pop';
													location.href="/sec/membership/point/";
												});
											}else{
												location.href="/sec/membership/point/";
											}
											return false;
										});
										
										$("#commonConfirmCancelBtn").on('click' , function(){
											return false;
										});
									}
								}
							}
						};
						ajax.call(options2);
						return false;
						}
					},
    				error : function(response, status, error) {
      					var alertData = {
        						title : "",
        						content : "오류가 발생하였습니다.",
        						callBack : "",
        						btnText : "확인"
      						};
      					commonAlert(alertData);
      					openLayer('commonAlert');
      					return false;
    				},
    				beforeSend : function(xhr) {
      					xhr.setRequestHeader("ajax", true);
    				},
    				complete : function() {
    				}
				};
				ajax.call(nowBuyOptions);
				
				return false;
			}
			
			var nowBuyOptions = {
				url : goodsMain.fnAjaxUrl("insertCart", "xhr/order/")
				, data : reqData
				, done : function(data){
				  	// 삼성닷컴 큐커식품관 비회원 로그인 구매 불가
					if(data.qookerNonMemYn != null && data.qookerNonMemYn != '' && data.qookerNonMemYn == 'Y'){
						let alertData = {
                    			content : data.exMsg
                  			};
                		alertData.callback = function(){
							location.href = "/sec/member/indexLogin/?returnUrl=" + location.pathname;
                		}
                		commonAlert(alertData);
                		openLayer('commonAlert');
                		return;
      			} else {
					if ( (reqData.pckStrNo !== null && reqData.pckStrNo !== undefined && $.trim(reqData.pckStrNo).length > 0 ) || reqData.rglrDlvrYn != null || data.isHomefitnessPrivateGoodsYn == "Y" 
						|| (($("input[name=stGbCd]").val() == '50' || $("input[name=stGbCd]").val() == '60') && $("input[id=disp2ClsfEnNm]").val() == 'soho')) {
						var options2 = {
								url : goodsMain.fnAjaxUrl("loginCheck")
								, type: 'POST'
								, done : function(data) {
									if(!data.isLogin) {
										if($("#pdAlertYn").val() == "Y"){
											var msgOptions = {};
											$.extend(msgOptions, { content : $("#pdAlertMsg").val(), yes : '확인' });
											goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
												var _ = $(this)
												  , layerClass = 'div.layer-pop';
												location.href=$(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+$(goodsMain.vGoodsWrapId).data("ctpath")+"order/";
											});
										}else{
											location.href=$(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+$(goodsMain.vGoodsWrapId).data("ctpath")+"order/";
										}
										
									} else {
										if($("#pdAlertYn").val() == "Y"){
											var msgOptions = {};
											$.extend(msgOptions, { content : $("#pdAlertMsg").val(), yes : '확인' });
											goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
												var _ = $(this)
												  , layerClass = 'div.layer-pop';
												location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "order/";
											});
										}else{
											location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "order/";
										}
									}
								}
							};
							ajax.call(options2);
						
					} else {
						if($("#pdAlertYn").val() == "Y"){
							var msgOptions = {};
							$.extend(msgOptions, { content : $("#pdAlertMsg").val(), yes : '확인' });
							goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
								var _ = $(this)
								  , layerClass = 'div.layer-pop';
								location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "order/";
							});
						}else{
							location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "order/";
						}
					}
						_satellite.track('buy now');
					}
				},
    			error : function(response, status, error) {
      				var alertData = {
        					title : "",
        					content : "오류가 발생하였습니다.",
        					callBack : "",
        					btnText : "확인"
      					};
      				commonAlert(alertData);
      				openLayer('commonAlert');
      				return false;
    			},
    			beforeSend : function(xhr) {
      				xhr.setRequestHeader("ajax", true);
    			},
    			complete : function() {
    			}
			};
			
			var checkGoodsLimitOptions = {
				url : goodsMain.fnAjaxUrl("limit", "xhr/order/check/goods/")
			  , data : reqData
			  , done : function(data) {
					ajax.call(nowBuyOptions);
			  }
			  
			};
			
			ajax.call(checkGoodsLimitOptions);
		}
		
		, fnShowCartMessage: function(reqData) {
			var msgOptions = {};

			var options = {
					url : goodsMain.fnAjaxUrl("goodscnt", "xhr/order/")
					, data : reqData
					, done : function(data){
						var cartCnt = data.goodsCnt;

						if ( cartCnt > 0 ) {
							$.extend(msgOptions, { content : '이미 동일한 상품이 장바구니에 있습니다.</br>추가하시겠습니까?', yes : '취소', no : '확인' });

							goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
								var _ = $(this)
								  , layerClass = 'div.layer-pop';

								// 확인
								if (_.hasClass('btn-type1')) {
									goodsDetail.fnInsertCart(reqData);
								}
								goodsMain.fnCloseLayer(_.closest(layerClass));
							});

						} else {
							goodsDetail.fnInsertCart(reqData);
						}
					}
				};
				ajax.call(options);
			}
		// 패밀리넷 혼수이사 상품 장바구니에 담기
		,fnFamilyNetMyMarriageMoveCart : function(reqData, myMarriageMoveCartCnt){
			if(myMarriageMoveStat.accCteGoods != undefined && myMarriageMoveStat.accCteGoods != "" && myMarriageMoveStat.accCteGoods == "accCteGoods"){
				var msgOptions = {};
				$.extend(msgOptions, { content : "액세서리 상품으로 일반장바구니로 이동됩니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					reqData.myMarriageMoveBuyYn = false;
					goodsDetail.fnInsertCart(reqData);
					goodsMain.fnCloseLayer(_.closest(layerClass));
				});
			}else if(myMarriageMoveStat.ordered != undefined && myMarriageMoveStat.ordered != "" && myMarriageMoveStat.ordered == "ordered"){ //이미 카테고리에 해당되는 상품을 구매했을경우
				var msgOptions = {};
				$.extend(msgOptions, { content : "혼수/이사 혜택을 받은 구매이력이 확인되어 일반장바구니로 이동됩니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					reqData.myMarriageMoveBuyYn = false;
					goodsDetail.fnInsertCart(reqData);
				});
			}else if(myMarriageMoveCartCnt > 0){ // 이미 카테고리에 해당되는 상품이 혼수이사
													// 장바구니에 담겨있는 경우
				goodsMain.fnOpenLayer($("#popupFamilyWeddingCart"), $("#popupFamilyWeddingCartReal").html()).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					if (_.hasClass('btn-type1')) { // 담기
						reqData.myMarriageMoveBuyYn = false;
						goodsMain.fnCloseLayer(_.closest(layerClass));
						goodsDetail.fnInsertCart(reqData);
					}else{ // 이동
						goodsMain.fnCloseLayer(_.closest(layerClass));
						location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "cart";
					}
				});
			}else if(myMarriageMoveStat.lmtOver != undefined && myMarriageMoveStat.lmtOver != "" && myMarriageMoveStat.lmtOver == "lmtOver" && stGbCd == '30'){ // 패넷디플일경우 잔여한도보다 임직원가가 높을경우
				var msgOptions = {};
				$.extend(msgOptions, { content : "임직원가보다 잔여한도가 높으므로 일반장바구니로 이동됩니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					reqData.myMarriageMoveBuyYn = false;
					goodsMain.fnCloseLayer(_.closest(layerClass));
					goodsDetail.fnInsertCart(reqData);
				});
			}else if(Number(reqData.buyQtys[0]) > 1){ // 혼수이사 장바구니에 담을수 있지만
														// 수량이 2개 이상일 경우
				goodsDetail.fnFamilyNetDivideGoods(reqData); // 상품 나누기
				goodsDetail.fnInsertCart(reqData);
			}else{
				goodsDetail.fnInsertCart(reqData);
			}
		}
		// 패밀리넷 혼수이사 상품 바로구매
		,fnFamilyNetMyMarriageMoveNowBuy : function(reqData, myMarriageMoveCartCnt){
			let stGbCd = $("input[name=stGbCd]", goodsDetail.vWrapId).val();
	
			if(myMarriageMoveStat.accCteGoods != undefined && myMarriageMoveStat.accCteGoods != "" && myMarriageMoveStat.accCteGoods == "accCteGoods"){
				var msgOptions = {};
				$.extend(msgOptions, { content : "액세서리 상품으로 일반구매로 이동됩니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					reqData.myMarriageMoveBuyYn = false;
					goodsDetail.fnCartNowBuy(reqData);
					goodsMain.fnCloseLayer(_.closest(layerClass));
				});
			}else if(myMarriageMoveStat.ordered != undefined && myMarriageMoveStat.ordered != "" && myMarriageMoveStat.ordered == "ordered"){ //이미 카테고리에 해당되는 상품을 구매했을경우
				var msgOptions = {};
				$.extend(msgOptions, { content : "혼수/이사 혜택을 받은 구매이력이 확인되어 일반구매로 이동됩니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					reqData.myMarriageMoveBuyYn = false;
					goodsDetail.fnCartNowBuy(reqData);
				});
			}else if(myMarriageMoveCartCnt > 0){ // 이미 구매하려는 상품에 해당되는 카테고리상품이
													// 혼수이사장바구니에 담겨있을때
				goodsMain.fnOpenLayer($("#popupFamilyWeddingOrder"), $("#popupFamilyWeddingOrderReal").html()).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';

					if (_.hasClass('btn-type1')) { // 확인
						reqData.myMarriageMoveBuyYn = false;
						goodsDetail.fnCartNowBuy(reqData);
					}else{ // 취소
						goodsMain.fnCloseLayer(_.closest(layerClass));
						return false;
					}
				});
			}else if(myMarriageMoveStat.lmtOver != undefined && myMarriageMoveStat.lmtOver != "" && myMarriageMoveStat.lmtOver == "lmtOver" && stGbCd == '30'){ // 패넷디플일경우 잔여한도보다 임직원가가 높을경우
				var msgOptions = {};
				$.extend(msgOptions, { content : "임직원가보다 잔여한도가 높으므로 일반구매로 이동됩니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					reqData.myMarriageMoveBuyYn = false;
					goodsMain.fnCloseLayer(_.closest(layerClass));
					goodsDetail.fnCartNowBuy(reqData);
				});
			}else if(Number(reqData.buyQtys[0]) > 1){ // 혼수이사혜택을 받을수 있지만 구매수량이
														// 2개 이상일경우 1개만 혼수이사구매로
														// 이동
				var msgOptions = {};
				$.extend(msgOptions, { content : "2개 이상의 제품은 혼수/이사 바로구매가<br>불가하여 1개의 제품만 혼수/이사 바로구매<br>페이지로 이동합니다", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					reqData.buyQtys = [1];
					goodsDetail.fnCartNowBuy(reqData);
				});
			}else{
				goodsDetail.fnCartNowBuy(reqData);
			}
		}
		// 패밀리넷 특별기획전 상품 장바구니에 담기
		,fnFamilyNetSpcExhbnCart : function(reqData){
			let stGbCd = $("input[name=stGbCd]", goodsDetail.vWrapId).val();
			let spcExhbnGoodsStatLocal = spcExhbnGoodsStat[reqData.goodsIds[0]];
			
			if(spcExhbnGoodsStatLocal == undefined || spcExhbnGoodsStatLocal == null || spcExhbnGoodsStatLocal == ""){
				var msgOptions = {};
				$.extend(msgOptions, { content : "특별기획전 구매 중 오류가 발생하였습니다. 관리자에게 문의 바랍니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					goodsMain.fnCloseLayer(_.closest(layerClass));
				});
			}else if(spcExhbnGoodsStatLocal == "lmtOver" && stGbCd == '30'){ // 디플경우
																				// 잔여한도가
																				// 임직원가보다
																				// 높은경우
				/*
				 * var msgOptions = {}; $.extend(msgOptions, { content : "임직원가보다
				 * 잔여한도가 높으므로 일반장바구니로 이동됩니다.", yes : '확인' });
				 * goodsMain.fnOpenLayer($(".popup-msg"),
				 * $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click',
				 * function() { var _ = $(this) , layerClass = 'div.layer-pop';
				 * reqData.spcExhbnYn = false;
				 * goodsMain.fnCloseLayer(_.closest(layerClass));
				 * goodsDetail.fnInsertCart(reqData); });
				 */
				reqData.spcExhbnYn = false;
				goodsDetail.fnInsertCart(reqData);
			}else if(spcExhbnGoodsStatLocal == "cartFull"){ // 장바구니에 이미 담겨있거나 더
															// 담을수 없는경우
				var msgOptions = {};
				$.extend(msgOptions, { content : "이미 특별기획전으로 구매하려는 상품의 카테고리에 해당되는 상품이 장바구니에 담겨 있습니다.<br>특별기획전 장바구니에서 제품삭제 후 추가 가능합니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					goodsMain.fnCloseLayer(_.closest(layerClass));
				});
			}else if(spcExhbnGoodsStatLocal == "ordQtyOver"){ // 기준구매수량보다
																// 구매희망수량이 많은경우
				var msgOptions = {};
				$.extend(msgOptions, { content : "특별기획전 기준구매수량을 초과하였습니다.<br> 수량을 조정해 주세요.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					goodsMain.fnCloseLayer(_.closest(layerClass));
				});
			}else{ // 특별기획전 장바구니담기 가능
				goodsDetail.fnInsertCart(reqData);
			}
		}
		// 패밀리넷 특별기획전 상품 바로구매
		,fnFamilyNetSpcExhbnNowBuy : function(reqData){	
			let stGbCd = $("input[name=stGbCd]", goodsDetail.vWrapId).val();
			let spcExhbnGoodsStatLocal = spcExhbnGoodsStat[reqData.goodsIds[0]];
			
			if(spcExhbnGoodsStatLocal == undefined || spcExhbnGoodsStatLocal == null || spcExhbnGoodsStatLocal == ""){
				var msgOptions = {};
				$.extend(msgOptions, { content : "특별기획전 구매 중 오류가 발생하였습니다. 관리자에게 문의 바랍니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					goodsMain.fnCloseLayer(_.closest(layerClass));
				});
			}else if(spcExhbnGoodsStatLocal == "lmtOver" && stGbCd == '30'){ // 디플경우
																				// 잔여한도가
																				// 임직원가보다
																				// 높은경우
				/*
				 * var msgOptions = {}; $.extend(msgOptions, { content : "임직원가보다
				 * 잔여한도가 높으므로 일반구매로 이동됩니다.", yes : '확인' });
				 * goodsMain.fnOpenLayer($(".popup-msg"),
				 * $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click',
				 * function() { var _ = $(this) , layerClass = 'div.layer-pop';
				 * reqData.spcExhbnYn = false;
				 * goodsMain.fnCloseLayer(_.closest(layerClass));
				 * goodsDetail.fnCartNowBuy(reqData); });
				 */
				reqData.spcExhbnYn = false;
				goodsDetail.fnCartNowBuy(reqData);
			}else if(spcExhbnGoodsStatLocal == "cartFull"){ // 장바구니에 이미 담겨있거나 더
															// 담을수 없는경우
				var msgOptions = {};
				$.extend(msgOptions, { content : "이미 특별기획전으로 구매하려는 상품의 카테고리에 해당되는 상품이 장바구니에 담겨 있습니다.<br>특별기획전 장바구니에서 제품삭제 후 구매 가능합니다.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					goodsMain.fnCloseLayer(_.closest(layerClass));
				});
			}else if(spcExhbnGoodsStatLocal == "ordQtyOver"){ // 기준구매수량보다
																// 구매희망수량이 많은경우
				var msgOptions = {};
				$.extend(msgOptions, { content : "특별기획전 기준구매수량을 초과하였습니다.<br> 수량을 조정해 주세요.", yes : '확인' });
				goodsMain.fnOpenLayer($(".popup-msg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function() {
					var _ = $(this)
					  , layerClass = 'div.layer-pop';
					goodsMain.fnCloseLayer(_.closest(layerClass));
				});
			}else{ // 특별기획전 장바구니담기 가능
				goodsDetail.fnCartNowBuy(reqData);
			}
		}
		// 패밀리넷 혼수이상 상품 장바구니담기 상품분할, reqData변경
		,fnFamilyNetDivideGoods : function(reqData){
			let goodsIds = reqData.goodsIds;
			let buyQtys = reqData.buyQtys;
			let buyQtyArr = [];
			
			goodsIds.forEach(function(goodsId,idx){
				goodsIds.push(goodsId);
				let buyQty = Number(buyQtys.shift());
				buyQty -= 1;
				buyQtys.push(1);
				buyQtys.push(buyQty);
			});
			
			reqData.goodsIds = goodsIds;
			reqData.buyQtys = buyQtys;
		}
	};

	$(document).ready(function(){
		// 구매수량별 혜택가2020.12.21 추가
		if ($("input[name=priceRange]").length > 1) {
			let qty = $("#countPrd").val(); // 상품수량
			if ($("#priceRange0").data("range-qty2") == 1) {
				$(".volumeOf").css("display","block");
				$("#dcQty1Cnt span").text($("#priceRange1").data("range-qty1")+"~"+$("#priceRange1").data("range-qty2"));
				$("#dcQty1Vol span").text($("#priceRange1").data("range-price").toLocaleString());
				$("#dcQty2Cnt span").text($("#priceRange2").data("range-qty1")+"~"+$("#priceRange2").data("range-qty2"));
				$("#dcQty2Vol span").text($("#priceRange2").data("range-price").toLocaleString());
				$("#dcQty2Vol").parent('div').removeClass('active');
				$("#dcQty1Vol").parent('div').removeClass('active');
			}else if ($("#priceRange0").data("range-qty2") > 1) {
				$(".volumeOf").css("display","block");
				$("#dcQty1Cnt span").text($("#priceRange0").data("range-qty1")+"~"+$("#priceRange0").data("range-qty2"));
				$("#dcQty1Vol span").text($("#priceRange0").data("range-price").toLocaleString());
				$("#dcQty2Cnt span").text($("#priceRange1").data("range-qty1")+"~"+$("#priceRange1").data("range-qty2"));
				$("#dcQty2Vol span").text($("#priceRange1").data("range-price").toLocaleString());
			}else {
				$(".volumeOf").css("display","none");
			}
		}
		
		
		// 소셜공유, 가격 툴팁
		$('.social-box>.btn-sns-link, .btn-tooltop02', goodsMain.vGoodsWrapId).on('click', function (e){
			e.preventDefault();
			var width = 380;
			var isFixed = undefined;
			var $tooltip = {};
			var methodClass = "pd-tooltip";
			if ($(this).hasClass("price-tooltip")){
				$tooltip = $(this).data();
				$tooltip.content = $(this).siblings(".tooltip-content").html();
				width = $tooltip.width;
				if($(this).data('class') === 'benefits') {
					isFixed = 'fixed';
					methodClass = 'benefits';
					width = 500;
 				}
			}else {
				$tooltip = $(this).data();
				$tooltip.content = $(this).siblings(".tooltip-content").html();
			}
			var $divTooltip = $(".pd-tooltip");
			$divTooltip.html($("#tooltipTempl").render($tooltip));
			if ($(this).hasClass("btn-sns-link")){
				// 외부공유링크
				$divTooltip.find('a').off().on('click', function (){
					if ($(this).hasClass('pd-sns-kakao')){
						// 카카오 링크
						goodsDetail.fnShareKakao();
					}else if ($(this).hasClass('pd-sns-facebook')){
						// 페이스북 링크
						goodsDetail.fnShareFacebook();
					}
				});
			}
			tooltipCenterTop(this, methodClass, width, isFixed);
		});

		// 링크복사
	    var clipboard = new ClipboardJS('.pd-copylink', {
	        text: function() {
	            return goodsDetail.vCopyUrl;
	        }
	    });
		clipboard.on('success', function(e) {
			goodsMain.fnMsgPop({ content : _GOODS_DETAIL_SHARE_COPYLINK_SUCCESS_MSG });
			var vTimer = setTimeout((function(){
				$('#mask').trigger('click');
			}), 5000);

			$('#mask').off().on('click', function (){
				$(".popup-msg").hide();
				$(".popup-msg").empty();
				scrollLock('unlock');
				$("#mask").fadeOut("fast").remove();
				clearTimeout(vTimer);
				$(this).off();
		    });

			var alertData = {
					 title: ""
					,content : "링크가 복사되었습니다."
					,callback : ""
					,btnText : "확인"					
				};
				commonAlert(alertData);
				openLayer('commonAlert');				
				$(".social-box .btn-sns-link").attr("data-popup-target","commonAlert")
		});
		clipboard.on('error', function(e) {
			goodsMain.fnMsgPop({ content : _GOODS_DETAIL_SHARE_COPYLINK_FAIL_MSG });
		});

		// 찜하기
		$('.social-box>.btn-good', goodsMain.vGoodsWrapId).off().on('click', function (e){
			
			e.preventDefault();
			
			var $btnGoods = $(this);
			goodsMain.fnLoginCheck(function(isLogin){
				if(!isLogin){
					// 현재 @LoginCheck 사이트별 미작동으로 임시 로그인 화면 이동처리 (차후 삭제예정)
					var returnUrl = $("input[name=returnUrl]").val();
// var newURL = window.location.protocol + "//" + window.location.host + "/" +
// window.location.pathname;
					location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+returnUrl;
					return false;
				}else{
					var url = ""
					if ($btnGoods.hasClass('on')) {
						url = goodsMain.fnAjaxUrl("user/deleteWish");
					} else {
						url = goodsMain.fnAjaxUrl("user/insertWish");
					}
					var options = {
							url : url
							, data : {goodsId : $("[name=goodsId]").val()}
					, done : function(data){
						if(data.actGubun === 'add'){
							// 찜하기 추가
							$btnGoods.attr('title', '선택됨');
							$btnGoods.find("i").text("좋아요 선택");														
							$btnGoods.addClass("on");
							$('.bookmarkOn').show();
							$('.bookmarkOff').hide();
							$('.bookmarkOn').find('a').off().on('click', function (){
								// 전체보기
								location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "mypage/interest/indexMyHotList/";
							});
						}else if(data.actGubun === 'remove'){
							// 찜하기 삭제
							$btnGoods.removeAttr('title');
							$btnGoods.find("i").text("좋아요 미선택");							
							$btnGoods.removeClass("on");
							$('.bookmarkOff').show();
							$('.bookmarkOn').hide();
						}else if(data.actGubun === 'MYPAGE0001'){
							goodsMain.fnMsgPop('찜하기는 100개까지만 가능합니다.');
						}else{
							goodsMain.fnMsgPop('위시리스트 등록 또는 삭제에 실패하였습니다.');
						}
						var vTimer = setTimeout((function(){
							$('.bookmarkTooltip').fadeOut(300);
						}), 5000);

						$(document).click(function (e){
							if($btnGoods.has(e.target).length === 0){
								clearTimeout(vTimer);
								$('.bookmarkOn').fadeOut(300);
								$('.bookmarkOff').fadeOut(300);
								$(this).off();
							}
						});
					}
					};
					ajax.call(options);
				}
			})
		});

		// 쿠폰받기
		$('.coupon-box>.btn-coupon', goodsMain.vGoodsWrapId).on('click', function (e){
			
			e.preventDefault();
			var obj = $(this);
			goodsMain.fnLoginCheck(function(isLogin){
				if(!isLogin){
					goodsMain.fnMsgPop(obj.data());
					return;
				}
				goodsDetail.fnGetCoupon();
			})
			
		});

		// 상품평 보러가기
		$('.itm-rating>.itm-review-count', goodsMain.vGoodsWrapId).on('click', function (e){
			e.preventDefault();
			$('#itm-review-component').trigger('click');
		});
		
		// 상품평 쓰러가기
		$('.itm-rating>.itm-review-write', goodsMain.vGoodsWrapId).on('click', function (e){
			e.preventDefault();
			goodsMain.fnLoginCheck(function(isLogin){
				if(!isLogin){
					var $msgData = {
						content :"로그인 이후 상품평 작성 가능합니다.<br/>로그인 화면으로 이동하시겠습니까?"
						, yes : "확인"
						, yescls : "login-view"
						, no : "취소"
						, close : "툴팁 닫기"
					}
					goodsMain.fnMsgPop($msgData);
					return false;
				}
				
				var goodsId = $(goodsMain.vGoodsWrapId).data('goodsId');
				var options = {
					url : goodsMain.fnAjaxUrl("commentCheck")
					, data : {goodsId : goodsId}
					, type: 'POST'
					, done: function (data) {
						var contVO = data.contVO;
						if(contVO.writeYn == 'Y'){
							goodsMain.fnMsgPop('상품 당 1개까지만 작성 가능합니다.');
						}else{	
							$('#itm-review-component').trigger('click');
							$('#commentWrite').trigger('click');
						}
						
					}
				}
				ajax.call(options);
			})
		});

		// 프로모션 배너
        $(".promotionBtn", goodsMain.vGoodsWrapId).on('click', function (e){
        	e.preventDefault();
        	$('#itm-benefit-component').trigger('click');
        });

        // 빠른 배송 구매하기
        $("#productFastBuy").on("click", function (e){
        	e.preventDefault();
        	//빠른배송 여부
			var fastDlvrYn = $(this).data('fast-dlvr')
			var options = {
				url : goodsMain.fnAjaxUrl("storePickupList")
				, data : {fastDlvrYn : fastDlvrYn}
				, type: 'POST'
				, dataType : "html"
				, done : function(data) {
					goodsMain.fnOpenLayer($("#popupLayer").addClass("layer-storepickup"), data);
				}
			}
			ajax.call(options);
        });
        
		// 매장 픽업하기, 매장상담 예약하기, 대량구매 및 개인구매 요청 시 견적문의
        $(".sub-btn-box>li>a").on("click", function (e){
			e.preventDefault();
			if ($(this).hasClass('btn-pd-pick')){
				//빠른배송 여부
				var fastDlvrYn = $(this).data('fast-dlvr')
				
				// 매장픽업
				var options = {
					url : goodsMain.fnAjaxUrl("storePickupList")
					, data : {fastDlvrYn : fastDlvrYn}
					, type: 'POST'
					, dataType : "html"
					, done : function(data) {
						goodsMain.fnOpenLayer($("#popupLayer").addClass("layer-storepickup"), data);
					}
				}
				ajax.call(options);
			}else if ($(this).hasClass('btn-pd-reserve')){
				// 매장상담
				location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "customer/reservationstore/?inflPathCd=30";
			}else if ($(this).hasClass('btn-pd-contact')){
				// 견적문의
				// 견적문의 페이지로 넘어갈 때 PD에서 선택한 옵션이 반영되어 견적문의 페이지로 이동됨
				location.href =$(goodsMain.vGoodsWrapId).data("ctpath") + "support/contactus/sales-enquiries/?goodsId="+$("[name=goodsId]").val();
			}else if($(this).hasClass('btn-pd-find')){
				// 매장찾기
				location.href =$(goodsMain.vGoodsWrapId).data("ctpath") + "digitalplaza/storeMain/";

			}
		});

		$(".pickup-btn>li>a").on("click", function (e){
			e.preventDefault();
			if ($(this).hasClass('btn-pd-pick')){
				if($("input[name=stGbCd]").val() == '10' && $("input[name=winePickupGoodsYn]").val() != null && $("input[name=winePickupGoodsYn]").val() =='Y' ){
					// 와인 매장픽업
					var minQty = $("#countPrd").data('min-ord-qty');
					var maxQty = $("#countPrd").data("max-qty");

					if(minQty == undefined || minQty == null || minQty == ""){
						minQty = 1;
					}
					var options = {
						url : goodsMain.fnAjaxUrl("externalStorePickupList")
						, data : {
							minQty : minQty
							, maxQty : maxQty
						}
						, type: 'POST'
						, dataType : "html"
						, done : function(data) {
							goodsMain.fnOpenLayer($("#popupLayer").addClass("layer-storepickup"), data);
						}
					}
					ajax.call(options);
				} else {
					if ($("#thirdPartyYn").val() == 'Y') {
						goodsMain.fnMsgPop('오류가 발생하였습니다.<br>관리자에게 문의하시기 바랍니다.');
						return;
					}
					//빠른배송 여부
					var fastDlvrYn = $(this).data('fast-dlvr')

					// 매장픽업
					var options = {
						url : goodsMain.fnAjaxUrl("storePickupList")
						, data : {fastDlvrYn : fastDlvrYn}
						, type: 'POST'
						, dataType : "html"
						, done : function(data) {
							goodsMain.fnOpenLayer($("#popupLayer").addClass("layer-storepickup"), data);
						}
					}
					ajax.call(options);
				}
			}else if ($(this).hasClass('btn-pd-reserve')){
				// 매장상담
				location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "customer/reservationstore/?inflPathCd=30";
			}else if ($(this).hasClass('btn-pd-contact')){
				// 견적문의
				// 견적문의 페이지로 넘어갈 때 PD에서 선택한 옵션이 반영되어 견적문의 페이지로 이동됨
				location.href =$(goodsMain.vGoodsWrapId).data("ctpath") + "support/contactus/sales-enquiries/?goodsId="+$("[name=goodsId]").val();
			}else if($(this).hasClass('btn-pd-find')){
				// 매장찾기
				location.href =$(goodsMain.vGoodsWrapId).data("ctpath") + "digitalplaza/storeMain/";

			}
		});

		// 제품 옵션 변경
		$(".itm-information .dropOption", goodsMain.vGoodsWrapId).find('[type=radio]').on("change", function (e){
			e.preventDefault();
			goodsDetail.fnChangeModel($(this).data("mdl-code"), $(this).data("goods-id"), $("input[name=goodsTpCd]").val(), $(this).attr("id"), $(this).parents("div.dropOption").attr("id"));
		});

	    // Dropdown Menu
		$(".dropdownMenu>.choose-account", goodsMain.vGoodsWrapId).off().on("click", function(e){
			e.preventDefault();
			var $ul = $(this).siblings('ul');
			$(".dropdownMenu ul", goodsMain.vGoodsWrapId).not($ul).css("z-index", 2);
			$ul.css("z-index", 51);

			var docHeight = $(document).innerHeight();
	        if ($(this).parent().hasClass("active")){
	            $(this).parent().removeClass("active").removeClass("bottom");
	            $(this).focus();
	        } else {
	            $(this).parent().addClass("active");
	            if(docHeight < ($(this).next().outerHeight() + $(this).next().offset().top)){
	                $(this).parent().addClass("bottom");
	            }
	            $(this).siblings().find("input[type='radio']").eq(0).focus();
	        }
	    });

		// 사은품 선택
		$(".freebies .dropdownMenu>.account-types>li>label", goodsMain.vGoodsWrapId).off().on("click", function (e){
			e.preventDefault();

			var $dropdown = $(this).closest('.dropdownMenu');
			var $preCheck =  $dropdown.find('input:checked');
			var $prd =  $(this).closest('.dropdownMenu').siblings(".list-prd-optional");
			$(this).prev('input').prop('checked', true);
			$(this).closest('.dropdownMenu').removeClass("active");

			var $ul = $prd.find("ul");

			if($(this).siblings("[type=radio]").prop('disabled')){
				return;
			}

			var eleKey = $(this).data("key");
			var lmtQty = $(this).data("lmt-qty");
			if($ul.find("li").length >= lmtQty){
				let alertData = {
					title: ""
					, content : "이미 선택된 사은품이 있습니다. 선택한 사은품을 취소하고 다시 선택해 주세요."
					, callback : ""
					, btnText : "확인"
				};
				commonAlert(alertData);
				openLayer('commonAlert');
				return;
			}

// var $choose = $(this).parent().parent().siblings("button");

			if (eleKey !== "noChoice"){
				if($preCheck.next('label').data('key') == 'noChoice'){
					$dropdown.find('.choose-account').text('사은품을 선택하세요 (사은품 '+$prd.data('free-cnt')+'종 택'+$prd.data('lmt-qty')+' 선택)');
				}
				var $clone = $(this).find(".box-itm-option").clone(false);
				$clone = $("<li></li>").append($clone);
				$clone.find(".pd-dropdown-select").show();
				$ul.append($clone);
				$(".list-prd-optional").show();
				if($(this).data("rmn-qty") <= $ul.find('.'+eleKey).length){
					$(this).siblings("[type=radio]").prop('disabled', true);
				}

				// 사은품 옵션 삭제
				$ul.find(".delete").off().on('click', function (){
					e.preventDefault();
					var key = $(this).closest('.box-itm-option').data('freeno');
					var $targetUl = $(this).closest('ul');
					var $dropLabel = $targetUl.parent('.list-prd-optional').siblings('.dropdownMenu').find('label[data-key='+key+']');
					$(this).closest('li').remove();

					if($(".list-prd-optional ul li").length <= 0) {
						$(".list-prd-optional").hide();
					}

					if(key){
						if($dropLabel.data("rmn-qty") > $targetUl.find('.'+key).length){
							$dropLabel.siblings("[type=radio]").prop('disabled', false);
						}
					}
				});
				$ul.find(".count").off().on('click', function (){
					e.preventDefault();
		            var count = $(this).siblings(".number").val();
		            if($(this).hasClass("count-miner")){
		                if(parseInt($(this).siblings(".number").val()) > 1){
		                    count--;
		                }else goodsMain.fnMsgPop(_GOODS_DETAIL_CHECK_MIN_QTY_MSG);
		            } else {
		                if(parseInt($(this).siblings(".number").val()) < 99){
		                    count++;
		                }
		            }
		            $(this).siblings(".number").val(count);
				});
			}else{
				// 선택안함
				$ul.empty();
				$dropdown.find('.choose-account').text('선택안함');

				if($(".list-prd-optional ul li").length <= 0) {
					$(".list-prd-optional").hide();
				}

				$.each($dropdown.find('label'), function(){
					if(Number($(this).data("rmn-qty")) > 0){
						$(this).prev('input').prop('disabled', false);
					}
				})
			}
		});

		// 옵션 상품 선택
		$(".option .dropdownMenu>.account-types>li>label", goodsMain.vGoodsWrapId).off().on("click", function (e){
			e.preventDefault();

// var $dropdown = $(this).closest('.dropdownMenu');
// var $preCheck = $dropdown.find('input:checked');
			var $prd =  $(this).closest('.dropdownMenu').siblings(".list-prd-optional");
			$(this).prev('input').prop('checked', true);
			$(this).closest('.dropdownMenu').removeClass("active");

			var $ul = $prd.find("ul");

			if($(this).siblings("[type=radio]").prop('disabled')){
				return;
			}

			var $clone = $(this).find(".box-itm-option").clone(false);
			$clone = $("<li></li>").append($clone);
			$clone.find(".pd-dropdown-select").show();
			$clone.find(".pd-spinner").show();
			$ul.append($clone);
			$(this).siblings("[type=radio]").prop('disabled', true);

			$ul.find(".delete").off().on('click', function (){
				e.preventDefault();
				var key = $(this).closest('.box-itm-option').data('option-id');
				var $targetUl = $(this).closest('ul');
				var $dropLabel = $targetUl.parent('.list-prd-optional').siblings('.dropdownMenu').find('label[data-key='+key+']');
				$(this).closest('li').remove();
				if(key){
					$dropLabel.siblings("[type=radio]").prop('disabled', false);
				}

				goodsDetail.fnTotalPrice();
			});

			var previous;

			$ul.find(".count").off().on('click', function (){
				$('#fnetOrderAgree').val('N');
				$('#b2bIBMLimit').val('N');
			
				e.preventDefault();
				var maxCnt = parseInt($(this).closest('.box-itm-option').data('stock-qty'));
				
				// 패넷, 패넷 디플 수량 제한 2020-11-03
				var stGbCd = $("input[name=stGbCd]", goodsMain.vGoodsWrapId).val();
	            /*
				 * if(stGbCd == '20' || stGbCd == '30'){ if(maxCnt > 1){ maxCnt =
				 * 1; } }
				 */
	            
	            var count = $(this).siblings(".number").val();
	            if($(this).hasClass("count-miner")){
	                if(parseInt($(this).siblings(".number").val()) > 1){
	                    count--;
	                }else goodsMain.fnMsgPop(_GOODS_DETAIL_CHECK_MIN_QTY_MSG);
	            } else {
	            	if(count < maxCnt){
	            		count++;
	            	}else{
		            	let alertData = {
	    					title: ""
	    					, content : "구매 가능한 수량이 초과되었습니다."
	    					, callback : ""
	    					, btnText : "확인"
	    				};
	    				commonAlert(alertData);
	    				openLayer('commonAlert');
	    				$(this).val(previous);
	    				return;
	            	}
	            }

	            $(this).siblings(".number").val(count);
	            goodsDetail.fnTotalPrice();
			});

			$ul.find(".number").off().on('focus', function(){
				previous = $(this).val();
			}).on('change', function (){
				e.preventDefault();
				if($(this).val() <= 0){
					goodsMain.fnMsgPop(_GOODS_DETAIL_CHECK_MIN_QTY_MSG);
					$(this).val(previous);
					return;
				}
				
				var maxCnt = parseInt($(this).closest('.box-itm-option').data('stock-qty'));
				// 패넷, 패넷 디플 수량 제한 2020-11-03
				var stGbCd = $("input[name=stGbCd]", goodsMain.vGoodsWrapId).val();
	            /*
				 * if(stGbCd == '20' || stGbCd == '30'){ if(maxCnt > 1){ maxCnt =
				 * 1; } }
				 */
	            

				if(maxCnt < $(this).val()){
	            	let alertData = {
    					title: ""
    					, content : "구매 가능한 수량이 초과되었습니다."
    					, callback : ""
    					, btnText : "확인"
    				};
    				commonAlert(alertData);
    				openLayer('commonAlert');
    				$(this).val(previous);
    				return;
	            }

	            goodsDetail.fnTotalPrice();
			});
			goodsDetail.fnTotalPrice();
		});

		$("#restoreAlarm").hide();
		// 장바구니, 바로구매, 정기배송, 재입고알림
		$(".box-btn", goodsMain.vGoodsWrapId).find('button').on("click", function (e){
			e.preventDefault();

			var stGbCd = null;
			var envmtGbCd = $(".itm-info-detail", goodsMain.vGoodsWrapId).data("envmt-gb-cd");
			if($(this).is("#btnCart")){
				if($('input[name=option-trade-in]', goodsDetail.vWrapId).length >0){ 
					if(!$('input[name=option-trade-in]', goodsDetail.vWrapId).is(':checked')){
						$('html, body').stop().animate( { scrollTop: $('input[name=option-trade-in]', goodsDetail.vWrapId).offset().top - 80 }, 300);
						goodsMain.fnMsgPop('중고제품 추가보상 프로그램(트레이드인)<br>선택을 완료해주세요');
						return false;
					}						
				}
				
				if($('input[name=option-trade-ce]', goodsDetail.vWrapId).length >0){ 
					if(!$('input[name=option-trade-ce]', goodsDetail.vWrapId).is(':checked')){
						$('html, body').stop().animate( { scrollTop: $('input[name=option-trade-ce]', goodsDetail.vWrapId).offset().top - 80 }, 300);
						goodsMain.fnMsgPop('중고가전 추가보상 프로그램<br>선택을 완료해주세요');
						return false;
					}						
				}
				
				if($('input[name=option-galaxy-club]', goodsDetail.vWrapId).length >0){ 
					if(!$('input[name=option-galaxy-club]', goodsDetail.vWrapId).is(':checked')){
						$('html, body').stop().animate( { scrollTop: $('input[name=option-galaxy-club]', goodsDetail.vWrapId).offset().top - 80 }, 300);
						goodsMain.fnMsgPop('My 갤럭시 클럽 신청하기<br>선택을 완료해주세요');
						return false;
					}						
				}
				
				// 장바구니
				if(!goodsDetail.fnValidFreebie()){
					return;
				}

				if(!goodsDetail.fnValidMinCount()){
					return;
				}

				$("input[name=nowBuyYn]").val("N");

				stGbCd = $("input[name=stGbCd]", goodsDetail.vWrapId).val();
				if( stGbCd == '20' || stGbCd == '30' ){
					
					// 패밀리넷 동일 품목 다량/초과 구매 - 장바구니
					if( stGbCd == '20' ) {
						if( $('#fnMultiPurchaseGuidance').hasClass('btnDirectClicked') ) {
							$('#fnMultiPurchaseGuidance').removeClass('btnDirectClicked');
						}
						if( $('#fnOverpurchaseApplyGuidance').hasClass('btnDirectClicked') ) {
							$('#fnOverpurchaseApplyGuidance').removeClass('btnDirectClicked');
						}
						
						$('#fnMultiPurchaseGuidance').addClass('btnCartClicked');
						$('#fnOverpurchaseApplyGuidance').addClass('btnDirectClicked');
						
						goodsDetail.fnFamliyNetCountLimit(goodsDetail.fnReqData());
					} else {
						goodsDetail.fnFamliyNetCountLimit(goodsDetail.fnReqData());
						/*
						 * if ( $('#fnetOrderAgree').val() != 'Y') {
						 * goodsDetail.fnFamliyNetCountLimit(goodsDetail.fnReqData()); }
						 * else {
						 * goodsDetail.fnShowCartMessage(goodsDetail.fnReqData()); }
						 */
					}
				} else if ( stGbCd == '40' ) { 
					goodsDetail.fn2CountLimit(goodsDetail.fnReqData());
					
				} else if ( stId == '8' ) {
					goodsDetail.b2b2cIBMCountLimit(goodsDetail.fnReqData());
					
				} else if( stGbCd == '50' || stGbCd == '60' ) {
					goodsMain.fnLoginCheck(function(isLogin){
						if(!isLogin){
							if($("input[id=disp2ClsfEnNm]").val() == 'soho'){
								goodsDetail.fnShowCartMessage(goodsDetail.fnReqData());
							} else{
								var returnUrl = $("input[name=returnUrl]").val();
								location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+returnUrl;
								return;
							}
						} else {
							goodsDetail.fnShowCartMessage(goodsDetail.fnReqData());
						}
					});
				} else {
					goodsDetail.fnShowCartMessage(goodsDetail.fnReqData());
				}


			}else if ($(this).is("#btnDirect") || $(this).is("#btnRegular")){
				if($('input[name=option-trade-in]', goodsDetail.vWrapId).length >0){ 
					if(!$('input[name=option-trade-in]', goodsDetail.vWrapId).is(':checked')){
						$('html, body').stop().animate( { scrollTop: $('input[name=option-trade-in]', goodsDetail.vWrapId).offset().top - 80 }, 300);
						goodsMain.fnMsgPop('중고제품 추가보상 프로그램(트레이드인)<br>선택을 완료해주세요');
						return false;
					}						
				}
				
				if($('input[name=option-trade-ce]', goodsDetail.vWrapId).length >0){ 
					if(!$('input[name=option-trade-ce]', goodsDetail.vWrapId).is(':checked')){
						$('html, body').stop().animate( { scrollTop: $('input[name=option-trade-ce]', goodsDetail.vWrapId).offset().top - 80 }, 300);
						goodsMain.fnMsgPop('중고가전 추가보상 프로그램<br>선택을 완료해주세요');
						return false;
					}						
				}
				
				if($('input[name=option-galaxy-club]', goodsDetail.vWrapId).length >0){ 
					if(!$('input[name=option-galaxy-club]', goodsDetail.vWrapId).is(':checked')){
						$('html, body').stop().animate( { scrollTop: $('input[name=option-galaxy-club]', goodsDetail.vWrapId).offset().top - 80 }, 300);
						goodsMain.fnMsgPop('My 갤럭시 클럽 신청하기<br>선택을 완료해주세요');
						return false;
					}						
				}
				
				var stGbCd = $("input[name=stGbCd]", goodsMain.vGoodsWrapId).val();
			    var count = $("#countPrd").val();
			    
		        // 바로 구매 버튼 클릭 시 수량제한 메세지 출력
		    	if(stGbCd == '50' && count > 25 || stGbCd == '60' && count > 25){

		    		goodsMain.fnMsgPop({
						content : "최대주문 수량(25개)을 초과하였습니다"
						, no : "확인"
						, close : "툴팁 닫기"
					})
					
					return false;
		    	}
				
				// 소상공인몰 제품구매 확인
				if ((stGbCd == "50" && stId == "5") && $("#smallbPurchaseAgree").val() == "N") {
					openLayer('popupSmallbPurchase');
					return;
				}
				
				// 바로구매, 정기배송
				if(!goodsDetail.fnValidFreebie()){
					return;
				}

				if(!goodsDetail.fnValidMinCount()){
					return;
				}
				
				/* [홈트] 본인이 현재 동일 상품을 이용하고 있는지 체크(프라이빗 제외) */
				
				var clsMtdCd = $("#clsMtdCd").val();
								
				if(clsMtdCd == '30'){
					alert("이미 Basic 이용권을 이용 중입니다.");
					return;
				}else if(clsMtdCd == '20'){
					alert("이미 Premium 이용권을 이용 중입니다.");
					return;
				}

				$("input[name=nowBuyYn]").val("Y");

				var reqData = goodsDetail.fnReqData();

				// 정기배송 param
				if($(this).is("#btnRegular")){
					var rglrDlvrCycl = $(".box-regular-detail .itm-option-choice").find("[type=radio]:checked").data("key");
					reqData.rglrDlvrYn = 'Y';
					reqData.rglrDlvrCycl = rglrDlvrCycl+"0";

					_satellite.track('buy now');
				}
				
				if($("#netfunnelYn").val() == "Y" || $("#netfunnelYn").val() == "ALL"){
					NetFunnel_Action({action_id : $("#netfunnelStGrp").val() + '_checkout'},function(ev, ret){
						if( stGbCd == '20' || stGbCd == '30' ){ // 패밀리넷
							
							// 패밀리넷 동일 품목 다량/초과 구매 - 바로구매
							if( stGbCd == '20' ) {
								
								if( $('#fnMultiPurchaseGuidance').hasClass('btnCartClicked') ) {
									$('#fnMultiPurchaseGuidance').removeClass('btnCartClicked');
								}
								if( $('#fnOverpurchaseApplyGuidance').hasClass('btnCartClicked') ) {
									$('#fnOverpurchaseApplyGuidance').removeClass('btnCartClicked');
								}
								
								$('#fnMultiPurchaseGuidance').addClass('btnDirectClicked');
								$('#fnOverpurchaseApplyGuidance').addClass('btnDirectClicked');
								
								goodsDetail.fnFamliyNetCountLimit(reqData);
								
							} else {
								goodsDetail.fnFamliyNetCountLimit(goodsDetail.fnReqData());
								/*
								 * if ( $('#fnetOrderAgree').val() != 'Y') {
								 * goodsDetail.fnFamliyNetCountLimit(goodsDetail.fnReqData()); }
								 * else {
								 * goodsDetail.fnCartNowBuy(goodsDetail.fnReqData()); }
								 */
								
							}
						} else if ( stGbCd == '40' ) { 
							goodsDetail.fn2CountLimit(goodsDetail.fnReqData());
							
						} else if( stId == '8' ){
							goodsDetail.b2b2cIBMCountLimit(goodsDetail.fnReqData());
							
						} else if( stGbCd == '50' || stGbCd == '60' ) {
							goodsMain.fnLoginCheck(function(isLogin){
								if(!isLogin){
									if($("input[id=disp2ClsfEnNm]").val() == 'soho'){
										goodsDetail.fnCartNowBuy(goodsDetail.fnReqData());
									} else{
										var returnUrl = $("input[name=returnUrl]").val();
										location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+returnUrl;
										return;
									} 
								} else {
									if($("input[id=disp2ClsfEnNm]").val() == 'soho'){
										goodsMain.fnNtsBizCloseCheck(function(data){
											var result = data.result;

											if( result != null ){
												if(result.bSttCd === "01"){
													goodsDetail.fnCartNowBuy(goodsDetail.fnReqData());
												}else{
													goodsMain.fnMsgPop('삼성전자 소상공인몰은 현재 운영중인'+
																						'<br>사업자 고객님만 구매가 가능합니다.'+
																						'<br>휴폐업 사업자의 경우 구매가 불가합니다.'+
																						'<br><br>※ 문의 : 고객센터 1833-3394 .');
													return;
												}	
											}else{
												goodsMain.fnMsgPop('오류가 발생하였습니다.<br>관리자에게 문의하시기 바랍니다.');
												return;
											}
										});
									}else{
										goodsDetail.fnCartNowBuy(goodsDetail.fnReqData());
									}
								}
							});
						} else {
							goodsDetail.fnCartNowBuy(goodsDetail.fnReqData());
						}
					});
				}else{
					if( stGbCd == '20' || stGbCd == '30' ){ // 패밀리넷
						
						// 패밀리넷 동일 품목 다량/초과 구매 - 바로구매
						if( stGbCd == '20' ) {
							
							if( $('#fnMultiPurchaseGuidance').hasClass('btnCartClicked') ) {
								$('#fnMultiPurchaseGuidance').removeClass('btnCartClicked');
							}
							if( $('#fnOverpurchaseApplyGuidance').hasClass('btnCartClicked') ) {
								$('#fnOverpurchaseApplyGuidance').removeClass('btnCartClicked');
							}
							
							$('#fnMultiPurchaseGuidance').addClass('btnDirectClicked');
							$('#fnOverpurchaseApplyGuidance').addClass('btnDirectClicked');
							
							goodsDetail.fnFamliyNetCountLimit(reqData);
							
						} else {
							goodsDetail.fnFamliyNetCountLimit(goodsDetail.fnReqData());
							/*
							 * if ( $('#fnetOrderAgree').val() != 'Y') {
							 * goodsDetail.fnFamliyNetCountLimit(goodsDetail.fnReqData()); }
							 * else {
							 * goodsDetail.fnCartNowBuy(goodsDetail.fnReqData()); }
							 */
							
						}
					} else if ( stGbCd == '40' ) { 
						goodsDetail.fn2CountLimit(goodsDetail.fnReqData());
						
					} else if( stId == '8' ){
						goodsDetail.b2b2cIBMCountLimit(goodsDetail.fnReqData());
						
					} else if( stGbCd == '50' || stGbCd == '60' ) {
						goodsMain.fnLoginCheck(function(isLogin){
							if(!isLogin){
								if($("input[id=disp2ClsfEnNm]").val() == 'soho'){
									goodsDetail.fnCartNowBuy(goodsDetail.fnReqData());
								} else{
									var returnUrl = $("input[name=returnUrl]").val();
									location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+returnUrl;
									return;
								}
							} else {
								if($("input[id=disp2ClsfEnNm]").val() == 'soho'){
									goodsMain.fnNtsBizCloseCheck(function(data){
										var result = data.result;

										if( result != null ){
											if(result.bSttCd === "01"){
												goodsDetail.fnCartNowBuy(goodsDetail.fnReqData());
											}else{
												goodsMain.fnMsgPop('삼성전자 소상공인몰은 현재 운영중인'+
																					'<br>사업자 고객님만 구매가 가능합니다.'+
																					'<br>휴폐업 사업자의 경우 구매가 불가합니다.'+
																					'<br><br>※ 문의 : 고객센터 1833-3394 .');
												return;
											}	
										}else{
											goodsMain.fnMsgPop('오류가 발생하였습니다.<br>관리자에게 문의하시기 바랍니다.');
											return;
										}
									});
								}else{
									goodsDetail.fnCartNowBuy(goodsDetail.fnReqData());
								}
							}
						});
					} else {
						goodsDetail.fnCartNowBuy(goodsDetail.fnReqData());
					}
				}
				
			}else if($(this).is("#btnRestock")){
				// 비로그인 시 로그인화면으로
				goodsMain.fnLoginCheck(function(isLogin){
					if(!isLogin){
						var returnUrl = $("input[name=returnUrl]").val();
						location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+returnUrl;
						return;
					}
					var options = {
						url : goodsMain.fnAjaxUrl("insertRestockCheck", "xhr/mypage/interest/")
						, data : {goodsId : $("[name=goodsId]").val()}
						, done : function(data){
							if(data.result === 'N'){
								var options = {
									url : goodsMain.fnAjaxUrl("getMemberInfo")
									, done : function(data){
										$("#ntcSndTg").val(data.mbrInfo);

										if($("#ntcSndTg").data('type') == 'mobile' && $("#ntcSndTg").val().length < 10){
											$("#insertRestock").addClass("btn-type1-disable");
											$("#insertRestock").removeClass("btn-type1");
										}

										$("#btnRestock").hide();
										$("#restoreAlarm").show();
										$("#insertRestock").show();
									}
								}
								ajax.call(options);
							}else{
								if(data.result === 'Y'){
									let alertData = {
										title: ""
										, content : "<strong>재입고알림이 신청된 상품입니다.</strong><br/>신청하신 내역은 마이페이지 -> 관심목록 -> 재입고알림 페이지에서 확인 가능합니다."
										, callback : ""
										, btnText : "확인"
									};
									commonAlert(alertData);
									openLayer('commonAlert');

									$("#btnRestock").hide();
									$("#restoreAlarm").hide();
									$("#insertRestock").hide();
									$("#successRestock").show();
								} else if(data.result == 'LIMIT100') {
									let alertData = {
										title: ""
										, content : "<strong>재입고알림 신청은 100개까지 가능합니다.</strong><br/>신청하신 내역은 마이페이지 -> 관심목록 -> 재입고알림 페이지에서 확인 가능합니다."
										, callback : ""
										, btnText : "확인"
									};
									commonAlert(alertData);
									openLayer('commonAlert');

									$("#btnRestock").show();
									$("#restoreAlarm").hide();
									$("#insertRestock").hide();
									$("#successRestock").hide();
								}
							}
						}
					}
					ajax.call(options);
				});
			}else if($(this).is("#insertRestock")){
				var preOptions = {
					url : goodsMain.fnAjaxUrl("getSaleStatCd")
					, data : {
						goodsId : $("[name=goodsId]").val()
					}
					, done : function(data){
						if(data.saleStatCd == '12'){
							// 판매중일 때
							let alertData = {
								title: ""
								, content : "현재 재고가 존재하는 상품입니다."
								, callback : function(){
									location.reload();
								}
								, btnText : "확인"
							};
							commonAlert(alertData);
							openLayer('commonAlert'); 
							return false;
						}else if(data.saleStatCd != '12' && data.saleStatCd != '13'){
							let alertData = {
								title: ""
								, content : "재입고알림 신청이 불가능한 상품입니다."
								, callback : ""
								, btnText : "확인"
							};
							commonAlert(alertData);
							openLayer('commonAlert');
							return false;
						}else if($("#ntcSndTg")[0].type == 'number'){
							var mobileNum = $("#ntcSndTg").val();
							if(mobileNum.length == 0){
								let alertData = {
									title: ""
									, content : "휴대폰 번호를 입력해 주세요."
									, callback : ""
									, btnText : "확인"
								};
								commonAlert(alertData);
								openLayer('commonAlert');
								return false;
							}
							if(goodsDetail.fnValidMobile(mobileNum)){
								let alertData = {
										title: ""
										, content : "휴대폰 번호를 확인해 주세요."
										, callback :""
										, btnText : "확인"
									};
									commonAlert(alertData);
									openLayer('commonAlert');
									return false;
							}
						}
						var options = {
							url : goodsMain.fnAjaxUrl("insertRestock", "xhr/mypage/interest/")
							, data : {
								goodsId : $("[name=goodsId]").val()
								, ntcSndTg : $("#ntcSndTg").val()
							}
							, done : function(data){
								var content = ""
									if($("#ntcSndTg")[0].type == 'number'){
										content += "<strong>재입고알림 신청이 완료되었습니다.</strong><br/>입고 즉시, 입력하신 번호로 알림톡이 발송됩니다.";
									}else{
										content += "<strong>재입고알림 신청이 완료되었습니다.</strong><br/>입고 즉시, 이메일로 해당 내용이 발송됩니다.";
									}
								let alertData = {
									title: ""
									, content : content
									, callback : ""
									, btnText : "확인"
								};
								commonAlert(alertData);
								openLayer('commonAlert');
								$("#restoreAlarm").hide();
								$("#insertRestock").hide();
								$("#successRestock").show();
							}
						}
						ajax.call(options);
						return true;
					}
				}
				ajax.call(preOptions);

			}else if($(this).is("#successRestock")){
				let alertData = {
					title: ""
					, content : "<strong>재입고알림이 신청된 상품입니다.</strong><br/>신청하신 내역은 마이페이지 -> 관심목록 -> 재입고알림 페이지에서 확인 가능합니다."
					, callback : ""
					, btnText : "확인"
				};
				commonAlert(alertData);
				openLayer('commonAlert');
			}else if($(this).is("#btnCombine")){
				var mdlCode = $(".itm-info-detail", goodsMain.vGoodsWrapId).data("mdl-code");
				
				if($("input[name=goodsAddTpCd]").val() == '30'){
					// Chef Bespoke 둘다 선택된 경우 chef 우선
					location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "chefcollection/buy/?selModel="+mdlCode;
				}else if($("input[name=bspkGoodsYn]").val() == 'Y'){
					// bespoke
					var stGbCd = $("input[name=stGbCd]", goodsMain.vGoodsWrapId).val();
					if(stGbCd == '20' || stGbCd == '30'){
						// 패넷 bespoke url
						location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "bespoke/buy/fam/?id=bespoke-make&selModel="+mdlCode;
					}else if(stGbCd == '10'){
						location.href = $(goodsMain.vGoodsWrapId).data("ctpath") + "templateEvent/bespoke_buy/?id=bespoke-make&selModel="+mdlCode;
					}
				}
			}else if($(this).is("#btnCustomize")){
				var mdlCode = $(".itm-info-detail", goodsMain.vGoodsWrapId).data("mdl-code");
				var goodsId = $(".itm-info-detail", goodsMain.vGoodsWrapId).data("goods-id");				
				if(envmtGbCd == 'prd' || envmtGbCd == 'dev'){
					// https://samsung-customstudio.com/custom?sku=SKU코드&goods_id=상품코드					
					window.open(`https://samsung-customstudio.com/custom?sku=${mdlCode}&goods_id=${goodsId}`, "디자인하기"
							,"width=1440, height=880, directories=no, titlebar=no, location=no, status=no, menubar=no,scrollbars=no, resizable=no");
				}else{													
					window.open(`https://cs.dev4u.kr/custom?sku=${mdlCode}&goods_id=${goodsId}`, "디자인하기"
							,"width=1440, height=880, directories=no, titlebar=no, location=no, status=no, menubar=no,scrollbars=no, resizable=no");
				}								
			}
			
			return;
		});

		$("input[name=ntcSndTg]").on("keyup", function() {
			$(this).val($(this).val().replace(/[^0-9]/g,""));
			if($(this).val().length > 11){
				$(this).val($(this).val().substring( 0, 11 ));
				$(this).blur();
			}
			if($(this).val().length < 10){
				$("#insertRestock").addClass("btn-type1-disable");
				$("#insertRestock").removeClass("btn-type1");
			}else{
				$("#insertRestock").addClass("btn-type1");
				$("#insertRestock").removeClass("btn-type1-disable");
			}
		});

        // 수량 변경
		$(".goods-count > .count", goodsMain.vGoodsWrapId).off().on("click", function (e){
			$('#fnetOrderAgree').val('N');
			$('#b2bIBMLimit').val('N');
				
            e.preventDefault();
            var maxQty = $("#countPrd").data("max-qty");
            var stGbCd = $("input[name=stGbCd]", goodsMain.vGoodsWrapId).val();
            var mhdjTgYn = $('input[name=mhdjTgYn]').val();
			var isMuhanDojeonApplyDateInfo = $('#isMuhanDojeonApplyDateInfo').val();
            
            // 패넷, 패넷 디플 수량 제한 2020-11-03
            /*
			 * if(stGbCd == '20' || stGbCd == '30'){ if(maxQty > 1){ maxQty = 1; } }
			 */
            var count = $(this).siblings(".number").val();

            if($(this).hasClass("count-miner")){
                if(parseInt(count) > 1){
                    count--;
                }else goodsMain.fnMsgPop(_GOODS_DETAIL_CHECK_MIN_QTY_MSG);
            } else {
            	if(count < maxQty){
            		count++;
            	}else{
                    	if(stGbCd == '50' || stGbCd == '60'){
                    		goodsMain.fnMsgPop({
            					content : "구매 가능한 수량이 초과되었습니다.<br/>대량구매를 원하시면<br/>견적문의를 통해 문의해 주세요."
            					, yes : "견적문의"
            					, yescls : "contact-view"
            					, no : "취소"
            					, close : "툴팁 닫기"
            				})
                    	}else{
                    		if(stGbCd == '20' || stGbCd == '30'){
	                    		if(mhdjTgYn == "Y" && isMuhanDojeonApplyDateInfo == true ) {
	                    			let alertData = {
	                    					title: ""
	                    					, content : "특별기획전 상품은 1개만 구매 가능합니다."
	                    					, callback : ""
	                    					, btnText : "확인"
	                    				};
	                				commonAlert(alertData);
	                				openLayer('commonAlert');
	                    		} else {
	                    			let alertData = {
	                    					title: ""
	                    					, content : "구매 가능한 수량이 초과되었습니다."
	                    					, callback : ""
	                    					, btnText : "확인"
	                    				};
	                				commonAlert(alertData);
	                				openLayer('commonAlert');
	                    		}
                    		} else {
                    			let alertData = {
                    					title: ""
                    					, content : "구매 가능한 수량이 초과되었습니다."
                    					, callback : ""
                    					, btnText : "확인"
                    				};
                				commonAlert(alertData);
                				openLayer('commonAlert');
                    		}
                    	}

        				return false;
            	}
            }


            var isError = goodsDetail.fnSecPrice(count);
            if(!isError){
            	return false;
            }
            $(".count-prd", goodsMain.vGoodsWrapId).val(count);
            goodsDetail.fnTotalPrice();
            return true;
        });

		var pre;
		$(".goods-count > .count-prd", goodsMain.vGoodsWrapId).off().on('focus', function(){
			pre = $(this).val();
		}).on("change", function (e){
			$('#fnetOrderAgree').val('N');
			$('#b2bIBMLimit').val('N');
			
			e.preventDefault();
			var stGbCd = $("input[name=stGbCd]", goodsMain.vGoodsWrapId).val();
			var mhdjTgYn = $('input[name=mhdjTgYn]').val();
			var isMuhanDojeonApplyDateInfo = $('#isMuhanDojeonApplyDateInfo').val();
			
			// 패넷, 패넷 디플 수량 제한 2020-11-03
			var maxQty = $("#countPrd").data("max-qty");
			/*
			 * if(stGbCd == '20' || stGbCd == '30'){ if(maxQty > 1){ maxQty = 1; } }
			 */
			
			var count = $(this).val();
			if(count <= 0){
				goodsMain.fnMsgPop(_GOODS_DETAIL_CHECK_MIN_QTY_MSG);
				$(this).val(pre);
				return false;
			}
			
            if(maxQty && maxQty > 0 && count > maxQty){
            	if(stGbCd == '50' || stGbCd == '60'){
            		
            		goodsMain.fnMsgPop({
    					content : "구매 가능한 수량이 초과되었습니다.<br/>대량구매를 원하시면<br/>견적문의를 통해 문의해 주세요."
    					, yes : "견적문의"
    					, yescls : "contact-view"
    					, no : "취소"
    					, close : "툴팁 닫기"
    				})
            	}else{
            		if(stGbCd == '20' || stGbCd == '30'){
                		if(mhdjTgYn == "Y" && isMuhanDojeonApplyDateInfo == true ) {
                			let alertData = {
                					title: ""
                					, content : "특별기획전 상품은 1개만 구매 가능합니다."
                					, callback : ""
                					, btnText : "확인"
                				};
            				commonAlert(alertData);
            				openLayer('commonAlert');
                		} else {
                			let alertData = {
                					title: ""
                					, content : "구매 가능한 수량이 초과되었습니다."
                					, callback : ""
                					, btnText : "확인"
                				};
            				commonAlert(alertData);
            				openLayer('commonAlert');
                		}
            		} else {
            			let alertData = {
            					title: ""
            					, content : "구매 가능한 수량이 초과되었습니다."
            					, callback : ""
            					, btnText : "확인"
            				};
        				commonAlert(alertData);
        				openLayer('commonAlert');
            		}
            	}

				$(".count-prd", goodsMain.vGoodsWrapId).val(pre);
				return false;
            }
            $(".count-prd", goodsMain.vGoodsWrapId).val(count);
			var isError = goodsDetail.fnSecPrice($(this).val());
            if(!isError){
            	let secPrc = $("#secPrc", goodsMain.vGoodsWrapId);
    			let dcQty2 = secPrc.data("dcqty2");

            	$("#countPrd").val(dcQty2)
            	return false;
            }

			goodsDetail.fnTotalPrice();
			return true;
		});

        // slide down/up
        $('.dropDown-content', goodsMain.vGoodsWrapId).find('.dropButton').on('click', function(e){
        	e.preventDefault();
        	$(this).next('.dropcontent').slideUp('fast');
        	$(this).parent().find('.dropButton').removeClass('open');
        	if(!$(this).next().is(":visible")){
        		$(this).next().slideDown('fast');
        		$(this).addClass('open');
        	}
        });

        // 합계 금액 및 CTO
        var $bottom = $('.itm-total-bottom', goodsMain.vGoodsWrapId);
        $bottom.find('input:not(#chk-trade-in):not(#chk-galaxy-club)').on("change", function(e){
        	e.preventDefault();
        	// 정기배송_checking
        	goodsDetail.fnTotalPrice();
        	
            var chk = $(this).prop('checked');
            if(chk === true){
                $bottom.find('.desc').addClass('dropStyle');
                $bottom.find('.box-opt-regular').addClass('opened').addClass('lined');
                $bottom.find('.dropButton').addClass('act').addClass('open');
                $bottom.find('.dropButton').next().slideDown('fast');
                $('.itm-total-bottom .box-btn .box-cto').hide();
                $('.itm-total-bottom .box-btn .regular').show();
                $("#btnDirectSub").hide();
                $("#btnRegularSub").show();
            } else {
                $bottom.find('.desc').removeClass('dropStyle');
                $bottom.find('.box-opt-regular').removeClass('opened').removeClass('lined');
                $bottom.find('.dropButton').removeClass('act').removeClass('open');
                $bottom.find('.dropButton').next().slideUp('fast');
                $('.itm-total-bottom .box-btn .box-cto').show();
                $('.itm-total-bottom .box-btn .regular').hide();
                $("#btnDirectSub").show();
                $("#btnRegularSub").hide();
            }
        });
        
        $('input[name=option-galaxy-club], input[name=option-trade-in]').on("change", function(e){
        	e.preventDefault();
        	goodsDetail.fnTotalPrice();
        });
        
        $('.droptoggle .dropOption .dropButton', goodsMain.vGoodsWrapId).off().on("click", function (e){
        	e.preventDefault();
        	e.stopPropagation();
            $(this).parents('.droptoggle').find(".dropList").slideUp('fast');
            $(this).parents('.droptoggle').find(".dropButton").removeClass('open');
            if(!$(this).next().is(":visible")){
                $(this).next().slideDown('fast');
                $(this).addClass('open');
            }
        });// toggle

        // 사은품 - 더많은 혜택 보기
		$('.itm-freebies-option .go-benefit', goodsMain.vGoodsWrapId).on('click', function (e){
			e.preventDefault();
			$('#itm-benefit-component').trigger('click');
		});
		
		// 소상공인몰 제품구매 확인
		$('#smallbPurchaseAgreeBtn').on('click', function (e){
			$('#smallbPurchaseAgree').val("Y");
			closeLayer('popupSmallbPurchase');
			
			$('#btnDirect').trigger('click');
		});
		
		// 패밀리넷 동일 품목 다량구매 - 비동의
		$('#multiPurchaseCancelBtn').on('click', function (e) {
			
			console.log("비동의");
			
			if( $('#fnMultiPurchaseGuidance').hasClass('btnCartClicked') ) {
				$('#fnMultiPurchaseGuidance').removeClass('btnCartClicked');
			}
			
			if( $('#fnMultiPurchaseGuidance').hasClass('btnDirectClicked') ) {
				$('#fnMultiPurchaseGuidance').removeClass('btnDirectClicked');
			}
			
			closeLayer('fnMultiPurchaseGuidance');
			
		});
		
		// 패밀리넷 동일 품목 다량구매 - 동의 문구 입력 감지
		$('#agreeInput').on('propertychange change keyup paste input', function(e) {
			
			if( $('#agreeInput').val() == "" || $('#agreeInput').val() == null || $('#agreeInput').val() == undefined ) {
				$('#agreeInputErrorMsg').show();
			} else {
				$('#agreeInputErrorMsg').hide();
			}
		});
		
		// 패밀리넷 동일 품목 다량구매 - 동의
		$('#multiPurchaseAgreeBtn').on('click', function (e) {
			var reqData = goodsDetail.fnReqData();
	
			if( $('#agreeInput').val() == $('#agreeInput').attr("placeholder") ) {				
				if( $('#fnMultiPurchaseGuidance').hasClass('btnCartClicked') ) {
					if(spcExhbnYn){
						// 패넷 특별기획전 가능여부
						reqData.spcExhbnYn = spcExhbnYn;
						// 패넷 특별기획전 장바구니담기 전 체크
						goodsDetail.fnFamilyNetSpcExhbnCart(reqData);
					}else if(myMarriageMoveBuyYn){
						// 패넷혼수이사 가능여부
						reqData.myMarriageMoveBuyYn = myMarriageMoveBuyYn;
						// 패넷 혼수이사상품 장바구니담기 전 체크
						goodsDetail.fnFamilyNetMyMarriageMoveCart(reqData, myMarriageMoveCartCnt);
					}else{
						// 장바구니 담기
						goodsDetail.fnInsertCart(reqData);
					}
				} else if( $('#fnMultiPurchaseGuidance').hasClass('btnDirectClicked') ) {
					if(spcExhbnYn){
						// 패넷 특별기획전 가능여부
						reqData.spcExhbnYn = spcExhbnYn;
						// code 넣어야함
						goodsDetail.fnFamilyNetSpcExhbnNowBuy(reqData);
					}else if(myMarriageMoveBuyYn){
						// 패넷혼수이사 가능여부
						reqData.myMarriageMoveBuyYn = myMarriageMoveBuyYn;
						// 패넷 혼수이사상품 바로구매 전 체크
						goodsDetail.fnFamilyNetMyMarriageMoveNowBuy(reqData, myMarriageMoveCartCnt);
					}else{
						// 바로구매 이동
						goodsDetail.fnCartNowBuy(reqData);
					}
				}
				
			} else {
				
				if( $('#agreeInput').val() == "" || $('#agreeInput').val() == null || $('#agreeInput').val() == undefined ) {
					$('#agreeInputErrorMsg').show();
				} else {
					$('#agreeInputErrorMsg').hide();
					let alertData = {
	    					title: ""
	    					, content : "안내문구와 동일하게<br/> 본인입력 내용을 다시 입력 해주세요."
	    					, callback : function() { $('#agreeInput').focus() }
	    					, btnText : "확인"
	    				};
					commonAlert(alertData);
					openLayer('commonAlert');
				}
				
			}
			
		});
		
		$('#multiPurchasePopupClose').on('click', function(e) {
			if( $('#fnMultiPurchaseGuidance').hasClass('btnCartClicked') ) {
				$('#fnMultiPurchaseGuidance').removeClass('btnCartClicked');
			}
			
			if( $('#fnMultiPurchaseGuidance').hasClass('btnDirectClicked') ) {
				$('#fnMultiPurchaseGuidance').removeClass('btnDirectClicked');
			}
			
			closeLayer('fnMultiPurchaseGuidance');
		});
		
		// 패밀리넷 품목별 초과 구매 신청 - 취소
		$('#overpurchaseApplyCancelBtn').on('click', function (e){
			
			// addClass 제거
			if( $('#fnOverpurchaseApplyGuidance').hasClass('btnCartClicked') ) {
				$('#fnOverpurchaseApplyGuidance').removeClass('btnCartClicked');
			}
			
			if( $('#fnOverpurchaseApplyGuidance').hasClass('btnDirectClicked') ) {
				$('#fnOverpurchaseApplyGuidance').removeClass('btnDirectClicked');
			}
			
			closeLayer('fnOverpurchaseApplyGuidance');
			
		});
		
		// 패밀리넷 품목별 초과 구매 신청 - 바로가기
		$('#overpurchaseApplyDirectBtn').on('click', function (e){			
			$('#dispRestrictsFrm').attr('action','/mypage/indexExcessBuyApply/');
			$('#dispRestrictsFrm').submit();			
		});
		
		// 패밀리넷 품목별 초과 구매 신청 - 닫기
		$("#fnOverpurchasePopupClose").on('click', function (e){
			// addClass 제거
			if( $('#fnOverpurchaseApplyGuidance').hasClass('btnCartClicked') ) {
				$('#fnOverpurchaseApplyGuidance').removeClass('btnCartClicked');
			}
			
			if( $('#fnOverpurchaseApplyGuidance').hasClass('btnDirectClicked') ) {
				$('#fnOverpurchaseApplyGuidance').removeClass('btnDirectClicked');
			}
			
			closeLayer('fnOverpurchaseApplyGuidance');
		});
		if($('#ancId').val() == 'comment'){
			$('#itm-review-component').trigger('click');
		}
	});

})(jQuery);

function openPopDlvrPck() {
	if($("input[name=stGbCd]").val() == '10' && $("#shop-storeYN").val() == 'Y' && $("#dlvrPckYn").val() == 'Y' && $("#omsSendYn").val() == 'N' && $("#dlvrGenYn").val() != 'Y') {
		$('.sub-btn-box .btn-pd-pick').trigger('click');
	} else if($("input[name=stGbCd]").val() == '50' && $("#shop-storeYN").val() == 'Y' && $("#dlvrPckYn").val() == 'Y' && $("#omsSendYn").val() == 'N' && $("#dlvrGenYn").val() != 'Y') {
		$('.pickup-btn .btn-pd-pick').trigger('click');
	}
}


/* 웹 접근성용 포커스 */

$("a[data-scroll=compGoodsSpec]").keydown(
		function(e){
			if(e.keyCode == 13){
				$("#specDropBtn").focus();
			}						
		}		
)

$("a[data-scroll=compGoodsManual]").keydown(
		function(e){
			if(e.keyCode == 13){
				$("#manualDropBtn").focus();
			}						
		}		
)

$("a[data-scroll=compGoodsCompare]").keydown(
		function(e){
			if(e.keyCode == 13){
				$("#compareDropBtn").focus();
			}						
		}		
)

$("a[data-scroll=compGoodsComment]").keydown(
		function(e){
			if(e.keyCode == 13){
				$(".review-tab> a").first().focus();				
			}						
		}		
)

$("a[data-scroll=compGoodsNoticeInfo]").keydown(
		function(e){
			if(e.keyCode == 13){			
				$(".product-purchase-caus_tab> li > a").first().focus();
			}						
		}		
)

