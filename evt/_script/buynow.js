
/**
 * fnChkLogin : 로그인 유효성 검사
 * @param msg : 구매 / 선물하기 등
 * @param returnUrl : 주문 / 뒤로가기
 */
function fnChkLogin(msg, returnUrl) {
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
	var ret = false; 
	var options = {
		url : stContextPath+"/xhr/goods/loginCheck"
		, type: 'POST'
		, async : false
		, done : function(data) {
			if(!data.isLogin) {
				ret = false;
				let confirmData = {
					content : "로그인 후 " + msg + "가 가능합니다.<br/>로그인 하시겠습니까?"
				    ,okBtnText : "확인"
				    ,cancelBtnText : "취소"
				};
				commonConfirm(confirmData);
				openLayer('commonConfirm');
				
				$("#closeCommonConfirmBtn").hide();
				
				$("#commonConfirmOkBtn").on('click' , function(){
					location.href= stContextPath + "member/indexLogin/?returnUrl=" + returnUrl;
					return false;
				});
				
				$("#commonConfirmCancelBtn").on('click' , function(){
					return false;
				});
			} else {
				ret = true;
			}
		}
	};
	ajax.call(options);
	return ret;
}

/**
 * fnChkGalaxyClub : Galaxy Club 유효성 검사
 * @param reqData : 캠페인코드
 */
function fnChkGalaxyClub (reqData) {
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
	var ret = false; 
	var options = {			
		url : stContextPath+"xhr/goods/galaxyClubCheck"
		, type: 'POST'
		, data : reqData
		, async : false
		, done : function(data) {
			if(!data.isLogin) {
				let confirmData = {
					content : "로그인 이후 바로구매가 가능 합니다<br/>로그인 하시겠습니까?"
				    ,okBtnText : "확인"
				    ,cancelBtnText : "취소"
				};
				commonConfirm(confirmData);
				openLayer('commonConfirm');
				
				$("#closeCommonConfirmBtn").hide();
				
				$("#commonConfirmOkBtn").on('click' , function(){
					location.href= stContextPath + "member/indexLogin/?returnUrl=" + location.pathname;
					return false;
				});
				
				$("#commonConfirmCancelBtn").on('click' , function(){
					return false;
				});
			} else {
				var alertMsg = "";
				// 멤버십 가입 여부
				if(data.membershipNo != null){
					// 캠페인 가입 여부
					if(data.isGalaxyCmpnYn != null){
						if(data.isGalaxyCmpnYn == 'N' && data.prgrStatCd == null){
							// 주문화면
							location.href = stContextPath + "order/";
						}else if(data.isGalaxyCmpnYn == 'N' && data.prgrStatCd != null){
							if(data.prgrStatCd == '01'){// 가입상태:접수
								alertMsg = "<span class='blue-color'>" + data.clubNm + "</span>에<br class='pc-ver'> 가입신청이 진행 중이므로<br class='pc-ver'> My 갤럭시 클럽 대상 제품을<br class='pc-ver'> 추가 구매할 수 없습니다.";
							}else if(data.prgrStatCd == '02'){// 가입상태:가입대기
								alertMsg = "<span class='blue-color'>" + data.clubNm + "</span>에<br class='pc-ver'> 가입신청이 완료되었으므로<br class='pc-ver'> My 갤럭시 클럽 대상 제품을<br class='pc-ver'> 추가 구매할 수 없습니다.";
							}else if(data.prgrStatCd == '03'){// 가입상태:가입완료
								alertMsg = "<span class='blue-color'>" + data.clubNm + "</span>에<br class='pc-ver'> 가입이 완료되었으므로<br class='pc-ver'> My 갤럭시 클럽 대상 제품을<br class='pc-ver'> 추가 구매할 수 없습니다.";
							}	
						}else{
							alertMsg = "이미 <span class='blue-color'>" + data.clubNm + "</span>에<br class='pc-ver'> 포함되어 있는 제품을 구매하셨습니다.<br>"
							+ "동일 " + data.clubNm + "에<br class='pc-ver'> 포함되어 있는 제품은<br class='pc-ver'> 회원 1인당 1대만 구매 가능합니다.";
						}
						// pop alert msg
						if (alertMsg != "") {
							let confirmData = {
								content : alertMsg
							    ,cancelBtnText : "닫기"
							};
							commonConfirm(confirmData);
							openLayer('commonConfirm');
							
							$("#commonConfirmOkBtn").hide();
							
							$("#commonConfirmCancelBtn").on('click' , function(){
								return false;
							});
							return ret;
						}
					}
				}else{
					let confirmData = {
						content : "My 갤럭시 클럽 제품을 구매하시려면<br class='pc-ver'> 멤버십 회원으로 먼저 가입하셔야 합니다.<br>멤버십 회원으로 가입 하시겠습니까?"
					    ,okBtnText : "확인"
					    ,cancelBtnText : "취소"
					};
					commonConfirm(confirmData);
					openLayer('commonConfirm');
					
					$("#commonConfirmOkBtn").on('click' , function(){
						location.href=stContextPath+"membership/point/";
						return false;
					});
					
					$("#commonConfirmCancelBtn").on('click' , function(){
						return false;
					});
					return ret;
				}
				ret = true;
			}
			
		}
	};
	ajax.call(options);
	return ret;
}



/**
 * 바로구매(crawling)_단일건
 * @param mdlCode 모델코드
 */
function crawlingBuyDirect(mdlCode) {
	buyDirect(mdlCode, "_self");
};

/**
 * 바로구매(crawling)_단일건 - target 추가
 * @param mdlCode 모델코드
 * @param target 타겟
 */
function buyDirect(mdlCode, target) {
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
	
	if (mdlCode === null || mdlCode === undefined
			|| $.trim(mdlCode).length == 0) {
		var alertData = {
			title : "",
			content : "모델코드가 없습니다.",
			callBack : "",
			btnText : "확인"
		};
		commonAlert(alertData);
		openLayer('commonAlert');
		return false;
	}

	var goodsId;

	var option = {
		url : stContextPath+"/xhr/bespoke/goodsIdsAjax",
		dataType : "json",
		type : "POST",
		async : false,
		data : {
			bspkGrpKeys : mdlCode
		},
		success : function(result) {

			if (result.exCode !== null && result.exCode !== undefined) {
				var alertData = {
					title : "",
					content : "상품을 준비중입니다.",
					callBack : "",
					btnText : "확인"
				};
				commonAlert(alertData);
				openLayer('commonAlert');
				return false;
			} else {
				if (result.goodsIdList != null) {
					goodsId = result.goodsIdList[0];
				}
			}

		},
		error : function(response, status, error) {
			var alertData = {
				title : "",
				content : "오류",
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

	$.ajax(option);

	if (goodsId !== null && goodsId !== undefined) {
		var reqData = {
			goodsIds : goodsId,
			stGbCd : "${view.stGbCd}",
			stId : "${view.stId}",
			mbrNo : "${session.mbrNo}",
			nowBuyYn : "Y",
			buyQtys : 1,
			orderType : "ONCE",
		};

		var nowBuyOptions = {
			url : stContextPath+"/xhr/order/insertCart",
			dataType : "json",
			type : "POST",
			data : reqData,
			success : function(result) {

				if (result.exCode !== null && result.exCode !== undefined) {
					var alertData = {
						title : "",
						content : result.exMsg,
						callBack : "",
						btnText : "확인"
					};
					commonAlert(alertData);
					openLayer('commonAlert');
					return false;
				} else {
					var form = document.createElement('form');

					form.setAttribute('action', stContextPath+"order/");
					form.setAttribute('target', target);
					form.setAttribute('method', 'post');

					document.body.appendChild(form);
					form.submit();
				}

			},
			error : function(response, status, error) {
				var alertData = {
					title : "",
					content : "오류",
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
		$.ajax(nowBuyOptions);
	}
};

/**
 * 바로구매_복수건 (모델코드)
 * @param mdlList
 */
function fnBuyDirect(mdlList) {

	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
	
	console.log("mdlList 222222=====> " + JSON.stringify(mdlList));

	// @ Test 모델코드 리스트
	// @ ex: { mdlCode:상품모델코드, qty:수량, compNo:업체번호(@닷컴기준: [312:삼성전자한국총괄],[313:삼성판매주식회사],[0:없음]) }
	// var mdlList = [
	// { mdlCode:"SM-G986NZPAKOO", qty:2, compNo:312 },
	// { mdlCode:"SM-N976NZSEKOO", qty:4, compNo:313 },
	// { mdlCode: "RF85T98A2AP", qty:1, compNo:313, bespokeYn:"Y", pannelCode:"RA-F18DUU32|RA-F18DUU38|RA-F18DBB35|RA-F18DBB38" }
	// ];

	// @ 상품아이디 조회를 위한 모델코드 및 업체 리스트(String)
	// @ searchMdlParams: SM-G986NZPAKOO^SM-N976NZSEKOO^...
	// @ searchCompNoParams: 000^312^313...
	var searchMdlParams = "";
	var searchCompNoParams = "";

	// @ 수량 리스트
	var qtyList = new Array();

	// 트레이드인 리스트
	var tradeInList = new Array();
	// @ Validate Check
	if (0 < mdlList.length) {
		var mdlCodeI = "";
		var qtyI = 0;
		var compNoI = "";
		var content = "";
		var goodsOrdTpCd = "";
		var galaxyClubTpCd = "";
		var bespokeYnI = "";
		var bspkPannelCodeI = "";
		var bspkPannelCodeListI = "";

		for (var i = 0; i < mdlList.length; i++) {
			mdlCodeI = mdlList[i].mdlCode;
			qtyI = mdlList[i].qty;
			
			// 업체번호 체크
			if (mdlList[i].compNo === null || mdlList[i].compNo === undefined || $.trim(mdlList[i].compNo).length == 0) {
				compNoI = 0;
			}else{
				compNoI = mdlList[i].compNo;
			}
			
			// 비스포크여부 체크
			if (mdlList[i].bespokeYn === null || mdlList[i].bespokeYn === undefined ) {
				bespokeYnI = "N";
			} else {
				bespokeYnI = mdlList[i].bespokeYn;
			}

			// 모델코드 체크
			if (mdlCodeI === null || mdlCodeI === undefined || $.trim(mdlCodeI).length == 0) {
				if( bespokeYnI == "Y") {
					content = "모델이 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.";
				}else{
					content = "모델코드를 확인하여 주시기 바랍니다."
				}
			}
			
			// 수량 체크
			if (qtyI === null || qtyI === undefined || qtyI < 1) {
				content = "수량을 확인하여 주시기 바랍니다."
			}
			
			// 비스포크 패널 수량 체크
			if( bespokeYnI == "Y" ) {
				
				bspkPannelCodeI = mdlList[i].pannelCode;
				bspkPannelCodeListI = mdlList[i].pannelCode.split("|");
				
				var mdlOptions = {
					url: stContextPath+"/xhr/bespoke/bespokeModelType",
					dataType : 'json',
					type : 'POST',
					async : false,
					data : {
						mdlCode : mdlCodeI
					},
					success : function(result) {
						
						// 패널 수량 체크 - 1door, 2door, 3door, 4door (패밀리허브(21)는 패널 3개 선택으로, 3door type seq에 포함)
						var oneDoorTypeSeq = ["4", "5", "6", "8"];
						var twoDoorTypeSeq = ["3"];
						var threeDoorTypeSeq = ["7", "9", "21"];
						var pannelReqLength = 0;
						
						if(oneDoorTypeSeq.indexOf(result.typeSeq) > -1) {
							pannelReqLength = 1;
						} else if(twoDoorTypeSeq.indexOf(result.typeSeq) > -1) {
							pannelReqLength = 2;
						} else if(threeDoorTypeSeq.indexOf(result.typeSeq) > -1) {
							pannelReqLength = 3;
						} else {
							pannelReqLength = 4;
						}
						
						if(bspkPannelCodeListI == "" || bspkPannelCodeListI == undefined || bspkPannelCodeListI == null) {
							content = "컬러가 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.";
						} else if(bspkPannelCodeListI.length < pannelReqLength) {
							content = "모든 컬러가 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.";
						}
						
						// 모델코드 및 수량 이상 있을시 alert
						if (content !== "") {
							var alertData = {
								title : "",
								content : content,
								callBack : "",
								btnText : "확인"
							};
							commonAlert(alertData);
							openLayer('commonAlert');
							return false;
						} else {
							var bspkCodes = mdlCodeI + "|" + bspkPannelCodeI;
							buyfixedMatchAjax(bspkCodes, qtyI, 'buy', '');
						}
						return false;
					}
					, error: function() {
						var alertData = {
							title : "",
							content : "데이터 확인이 필요합니다.",
							callBack : "",
							btnText : "확인"
						};
						commonAlert(alertData);
						openLayer('commonAlert');
						return false;
					}
				}
				$.ajax(mdlOptions);
				
				return false;

			} else {
				mdlList[i].pannelCode = "";
				bspkPannelCodeI = mdlList[i].pannelCode;
				bspkPannelCodeListI = mdlList[i].pannelCode.split("|");
				
				// ---- 트레이드인 구매 관련 start;
				//트레이드인
				if(mdlList[i].tradeIn == "Y") {
					goodsOrdTpCd = "TRD";
				}else if(mdlList[i].ceTradeIn == "Y"){
					goodsOrdTpCd = "CETRD";
				}else{
					// 트레이드인 / 갤럭시 클럽 상품은 하나만 구매 가능하므로 파라메터 초기화 삭제
					//goodsOrdTpCd = "";
				}
				
				if(mdlList[i].galaxyClub == "Y") {
					goodsOrdTpCd += "GC";
					if (mdlList[i].galaxyClubTpCd === null || mdlList[i].galaxyClubTpCd === undefined || $.trim(mdlList[i].galaxyClubTpCd).length == 0) {
						content = "갤럭시 클럽 캠페인 코드를 확인하여 주시기 바랍니다.";
					} else {
						galaxyClubTpCd = mdlList[i].galaxyClubTpCd;
					}
				}
				
				// TradeIn, GalaxyClub 상품이 2개 이상일 경우 예외처리
				if (goodsOrdTpCd != "" && i > 0) {
					content = "트레이드인 / 갤럭시 클럽 상품은 한개만 구매 가능합니다.";
				}
				
				console.log("goodsOrdTpCd=====> " + goodsOrdTpCd);
				// ---- 트레이드인 구매 관련 end;

				// 모델코드 및 수량 이상 있을시 alert
				if (content !== "") {
					var alertData = {
						title : "",
						content : content,
						callBack : "",
						btnText : "확인"
					};
					commonAlert(alertData);
					openLayer('commonAlert');
					return false;
				} else {
					// 모델코드 정제
					if (i !== (mdlList.length - 1)) {
						searchMdlParams += mdlCodeI + "^";
						searchCompNoParams += compNoI + "^";
					} else {
						searchMdlParams += mdlCodeI;
						searchCompNoParams += compNoI;
					}
					// 수량 정제
					qtyList.push(qtyI);
					
					tradeInList.push(goodsOrdTpCd);
				}
			}
		}
	} else {
		var alertData = {
			title : "",
			content : "데이터 확인이 필요합니다.",
			callBack : "",
			btnText : "확인"
		};
		commonAlert(alertData);
		openLayer('commonAlert');
		return false;
	}
	
	// @ 상품아이디 리스트
	var goodsIdList = [];
	// @ 상품아이디 조회
	var option = {
		url : stContextPath+"/xhr/bespoke/goodsIdsAjax",
		dataType : "json",
		type : "POST",
		async : false,
		data : {
			bspkGrpKeys : searchMdlParams,
			compNos : searchCompNoParams
		},
		success : function(result) {

			if (result.exCode !== null && result.exCode !== undefined) {
				var alertData = {
					title : "goodsIdsAjax",
					content : result.exMsg,
					callBack : "",
					btnText : "확인"
				};
				commonAlert(alertData);
				openLayer('commonAlert');
				return false;
			} else {
				if (result.goodsIdList !== null) {
					goodsIdList = result.goodsIdList;
				}
			}

		},
		error : function(response, status, error) {
			var alertData = {
				title : "goodsIdsAjax.err",
				content : "오류",
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
	$.ajax(option);

	// @ Cart Insert
	if (goodsIdList !== null && goodsIdList !== undefined
			&& goodsIdList.length > 0) {
		
		// @ goodsIds, buyQtys의 배열값을 String으로 넘겨주지 않으면 컨트롤러에서 param이 null로 받아져서 String처리,
		var reqData = {
			goodsIds : String(goodsIdList),
			nowBuyYn : "Y",
			buyQtys : String(qtyList),
			orderType : "ONCE",
			goodsOrdTpCd : String(tradeInList),
			galaxyClubTpCd : galaxyClubTpCd
		};			

		var orderUrl = stContextPath + "order/";
		
		var nowBuyOptions = {
			url : stContextPath+"/xhr/order/insertCart",
			dataType : "json",
			type : "POST",
			data : reqData,
			success : function(result) {
				if (result.exCode !== null && result.exCode !== undefined) {
					var alertData = {
						title : "insertCart",
						content : result.exMsg,
						callBack : "",
						btnText : "확인"
					};
					commonAlert(alertData);
					openLayer('commonAlert');
					return false;
				} else {
					if(tradeInList.includes('CETRD') || tradeInList.includes('TRD')) { // TradeIn 체크
						if (fnChkLogin("바로구매", orderUrl)) { // 로그인 체크
							location.href= orderUrl;
						}
					} else if(tradeInList.includes('GC') || tradeInList.includes('TRDGC')) { // GalaxyClub 체크
						fnChkGalaxyClub(reqData);	// 로그인 체크 & 멤버십 체크
					} else {
						// @ 주문 페이지로..
						var form = document.createElement('form');
						form.setAttribute('action', orderUrl);
						form.setAttribute('target', "_self");
						form.setAttribute('method', 'post');
						document.body.appendChild(form);
						form.submit();
					}
				}
			},
			error : function(response, status, error) {
				var alertData = {
					title : "insertCart.err",
					content : "오류",
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
		$.ajax(nowBuyOptions);
	}

};

// bespoke buyAjax
var buyAjax = function (data) {
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
    var ids = '';

    var option1 = {
        url: stContextPath+"/xhr/bespoke/goodsIdsAjax",
        dataType: "json",
        type: "POST",
        async: false,
        data: {bspkGrpKeys : data},
        success: function (result) {

        	if(typeof(result.exCode) !== 'undefined') {
                var alertData ={
                    title : ""
                    , content : "상품을 준비중입니다."
                    , callBack : ""
                    , btnText : "확인"
                };
                commonAlert(alertData);
                openLayer('commonAlert');
                return false;
            } else {
                ids =  JSON.stringify(result.goodsIdList);
            }
        },
        error: function (response, status, error) {
            alert('오류');
            return false;
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("ajax", true);
        },
        complete: function () { }
    };
    $.ajax(option1);

    if(ids != '') {
        var option = {
            url: stContextPath+"/xhr/order/insertCart",
            dataType: "json",
            type: "POST",
            data: {
                nowBuyYn : 'Y',
                bspkGrpKeys : data,
                goodsIds : ids
            },
            success: function (result) {

            	if(typeof(result.exCode) !== 'undefined') {
                    var alertData ={
                        title : ""
                        , content : result.exMsg
                        , callBack : ""
                        , btnText : "확인"
                    };
                    commonAlert(alertData);
                    openLayer('commonAlert');
                    return false;
                } else {
                    var form = document.createElement('form');
                    form.setAttribute('action', stContextPath+"order/");
                    form.setAttribute('target', "_self");
                    form.setAttribute('method', 'post');

                    document.body.appendChild(form);
                    form.submit();
                }

            },
            error: function (response, status, error) {
                alert('오류');
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("ajax", true);
            },
            complete: function () { }
        };
        $.ajax(option);
    }

};


/**
 * 장바구니_복수건 (모델코드)
 * @param mdlList
 */

function fnCartDirect(mdlList, cartCallMethod) {
	
	// URL - stContextPath 적용
	var stContextPath = $("#viewStContextPath").val();
	console.log("mdlList=====> " + JSON.stringify(mdlList));

	// @ Test 모델코드 리스트
	// @ ex: { mdlCode:상품모델코드, qty:수량, compNo:업체번호(@닷컴기준: [312:삼성전자한국총괄],[313:삼성판매주식회사],[0:없음]), bespokeYn:비스포크여부, pannelCode:비스포크일때 패널코드 }
	// var mdlList = [
	// { mdlCode:"SM-G986NZPAKOO", qty:2, compNo:312 },
	// { mdlCode:"SM-N976NZSEKOO", qty:4, compNo:313 },
	// { mdlCode: "RF85T98A2AP", qty:1, compNo:313, bespokeYn:"Y", pannelCode:"RA-F18DUU32|RA-F18DUU38|RA-F18DBB35|RA-F18DBB38" }
	// ];
	
	// cartCallMethod : 장바구니 이동 여부 확인 파라미터
	// var cartCallMethod = "move" (default) 장바구니 이동
	//						"confirm" 동일한 상품 확인 / 장바구니 이동 팝업 띄우기

	// @ 상품아이디 조회를 위한 모델코드 및 업체 리스트(String)
	// @ searchMdlParams: SM-G986NZPAKOO^SM-N976NZSEKOO^...
	// @ searchCompNoParams: 000^312^313...
	var searchMdlParams = "";
	var searchCompNoParams = "";

	// @ 수량 리스트
	var qtyList = new Array();

		
	// @ Validate Check
	if (0 < mdlList.length) {
		var mdlCodeI = "";
		var qtyI = 0;
		var compNoI = "";
		var content = "";
		var bespokeYnI = "";
		var bspkPannelCodeI = "";
		var bspkPannelCodeListI = "";
		
		for (var i = 0; i < mdlList.length; i++) {
			mdlCodeI = mdlList[i].mdlCode;
			qtyI = mdlList[i].qty;

			// 업체번호 체크
			if (mdlList[i].compNo === null || mdlList[i].compNo === undefined || $.trim(mdlList[i].compNo).length == 0) {
				compNoI = 0;
			}else{
				compNoI = mdlList[i].compNo;
			}
			
			// 비스포크여부 체크
			if (mdlList[i].bespokeYn === null || mdlList[i].bespokeYn === undefined ) {
				bespokeYnI = "N";
			} else {
				bespokeYnI = mdlList[i].bespokeYn;
			}

			// 모델코드 체크
			if (mdlCodeI === null || mdlCodeI === undefined || $.trim(mdlCodeI).length == 0) {
				if( bespokeYnI == "Y") {
					content = "모델이 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.";
				}else{
					content = "모델코드를 확인하여 주시기 바랍니다."
				}
			}
			
			// 수량 체크
			if (qtyI === null || qtyI === undefined || qtyI < 1) {
				content = "수량을 확인하여 주시기 바랍니다."
			}
			
			// 비스포크 패널 수량 체크
			if( bespokeYnI == "Y" ) {
				bspkPannelCodeI = mdlList[i].pannelCode;
				bspkPannelCodeListI = mdlList[i].pannelCode.split("|");
				
				var mdlOptions = {
					url: stContextPath+"/xhr/bespoke/bespokeModelType",
					dataType : 'json',
					type : 'POST',
					async : false,
					data : {
						mdlCode : mdlCodeI
					},
					success : function(result) {
						
						// 패널 수량 체크 - 1door, 2door, 3door, 4door (패밀리허브(21)는 패널 3개 선택으로, 3door type seq에 포함)
						var oneDoorTypeSeq = ["4", "5", "6", "8"];
						var twoDoorTypeSeq = ["3"];
						var threeDoorTypeSeq = ["7", "9", "21"];
						var pannelReqLength = 0;
						
						if(oneDoorTypeSeq.indexOf(result.typeSeq) > -1) {
							pannelReqLength = 1;
						} else if(twoDoorTypeSeq.indexOf(result.typeSeq) > -1) {
							pannelReqLength = 2;
						} else if(threeDoorTypeSeq.indexOf(result.typeSeq) > -1) {
							pannelReqLength = 3;
						} else {
							pannelReqLength = 4;
						}
						
						if(bspkPannelCodeListI == "" || bspkPannelCodeListI == undefined || bspkPannelCodeListI == null) {
							content = "컬러가 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.";
						} else if(bspkPannelCodeListI.length < pannelReqLength) {
							content = "모든 컬러가 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.";
						}
						
						// 모델코드 및 수량 이상 있을시 alert
						if (content !== "") {
							var alertData = {
								title : "",
								content : content,
								callBack : "",
								btnText : "확인"
							};
							commonAlert(alertData);
							openLayer('commonAlert');
							return false;
						} else {
							var bspkCodes = mdlCodeI + "|" + bspkPannelCodeI;
							buyfixedMatchAjax(bspkCodes, qtyI, 'cart', cartCallMethod);
						}
						return false;
					}
					, error : function() {
						var alertData = {
							title : "",
							content : "데이터 확인이 필요합니다.",
							callBack : "",
							btnText : "확인"
						};
						commonAlert(alertData);
						openLayer('commonAlert');
						return false;
					}
				}
				$.ajax(mdlOptions);
				
				return false;
				
			} else  {
				
				mdlList[i].pannelCode = "";
				bspkPannelCodeI = mdlList[i].pannelCode;
				bspkPannelCodeListI = mdlList[i].pannelCode.split("|");
				
				// 모델코드 및 수량 이상 있을시 alert
				if (content !== "") {
					var alertData = {
						title : "",
						content : content,
						callBack : "",
						btnText : "확인"
					};
					commonAlert(alertData);
					openLayer('commonAlert');
					return false;
				} else {
					// 모델코드 정제
					if (i !== (mdlList.length - 1)) {
						searchMdlParams += mdlCodeI + "^";
						searchCompNoParams += compNoI + "^";
					} else {
						searchMdlParams += mdlCodeI;
						searchCompNoParams += compNoI;
					}
					// 수량 정제
					qtyList.push(qtyI);
				}
			}
			
		}
		
	} else {
		var alertData = {
			title : "",
			content : "데이터 확인이 필요합니다.",
			callBack : "",
			btnText : "확인"
		};
		commonAlert(alertData);
		openLayer('commonAlert');
		return false;
	}
	
	//일반상품 goodsId 조회
	getGoodsIds(searchMdlParams, searchCompNoParams, qtyList, cartCallMethod);
};

function getGoodsIds(searchMdlParams, searchCompNoParams, qtyList, cartCallMethod) {

	// @ 상품아이디 리스트
	var goodsIdList = [];
	
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
	
	// @ 상품아이디 조회
	var option = {
		url : stContextPath + "xhr/bespoke/goodsIdsAjax",
		dataType : "json",
		type : "POST",
		async : false,
		data : {
			bspkGrpKeys : searchMdlParams,
			compNos : searchCompNoParams
		},
		success : function(result) {
			if (result.exCode !== null && result.exCode !== undefined) {
				var alertData = {
					title : "",
					content : result.exMsg,
					callBack : "",
					btnText : "확인"
				};
				commonAlert(alertData);
				openLayer('commonAlert');
				return false;
			} else {
				if (result.goodsIdList !== null) {
					goodsIdList = result.goodsIdList;
				}
				//일반상품 장바구니 goodsCnt 조회
				goodsCntCart(goodsIdList, qtyList, cartCallMethod);
			}

		},
		error : function(response, status, error) {
			var alertData = {
				title : "",
				content : "오류",
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
	$.ajax(option);
	
}

function goodsCntCart(goodsIdList, qtyList, cartCallMethod) {
	// @ Cart Insert
	if (goodsIdList !== null && goodsIdList !== undefined
			&& goodsIdList.length > 0) {
		// @ goodsIds, buyQtys의 배열값을 String으로 넘겨주지 않으면 컨트롤러에서 param이 null로 받아져서 String처리,
		var reqData = {
			goodsIds : String(goodsIdList),
			stGbCd : "${view.stGbCd}",
			stId : "${view.stId}",
			mbrNo : "${session.mbrNo}",
			nowBuyYn : "N",
			buyQtys : String(qtyList),
			orderType : "ONCE",
		};
		
		// URL - stContextPath 적용 
		var stContextPath = $("#viewStContextPath").val();
		
		if (cartCallMethod == "confirm") {
			var options = {
				url : stContextPath + "xhr/order/goodscnt"
				, data : reqData 
				, done : function(data){
					var cartCnt = data.goodsCnt;
					if ( cartCnt > 0 ) {
						let confirmData = {
							content : "이미 동일한 상품이 장바구니에 있습니다.</br>추가하시겠습니까?"
					        ,okBtnText : "확인"
					        ,cancelBtnText : "취소"
				        };
						commonConfirm(confirmData);
						openLayer('commonConfirm');
						$("#closeCommonConfirmBtn").css("display", "none");
						
						$("#commonConfirmOkBtn").on('click' , function(){
							if($("#commonConfirmOkBtn").text() == "확인") {
								insertCartItemFn(reqData, cartCallMethod);
							}
						});
						$("#commonConfirmCancelBtn").on('click' , function(){
							//취소
							return false;
						});
					} else {
						insertCartItemFn(reqData, cartCallMethod);
					}
				}
			};
			ajax.call(options);
		} else {
			insertCartItemFn(reqData, cartCallMethod);
		}
	}
}

function insertCartItemFn(reqData, cartCallMethod) {
	
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
	
	var nowBuyOptions = {
			url : stContextPath + "xhr/order/insertCart",
			dataType : "json",
			type : "POST",
			data : reqData,
			async: false,
			success : function(result) {
				if (result.exCode !== null && result.exCode !== undefined) {
					var alertData = {
						title : "",
						content : result.exMsg,
						callBack : "",
						btnText : "확인"
					};
					commonAlert(alertData);
					openLayer('commonAlert');
					return false;
				} else {
					if(cartCallMethod == "confirm") {
						let confirmData = {
							content : "제품이 장바구니에 추가되었습니다.<br>장바구니로 이동하시겠습니까?"
						    ,okBtnText : "쇼핑 계속하기"
						    ,cancelBtnText : "장바구니 이동"
					    };
						commonConfirm(confirmData);
						openLayer('commonConfirm');
						$("#closeCommonConfirmBtn").css("display", "none");
						
						$("#commonConfirmOkBtn").on('click' , function(){
							//취소
							return false;
						});
						
						$("#commonConfirmCancelBtn").on('click' , function(){
							if($("#commonConfirmCancelBtn").text() == "장바구니 이동") {
								location.href = stContextPath + "cart/";
							}
						});
						
					} else {
						location.href = stContextPath + "cart/";
					}
					return false;
				}
			},
			error : function(response, status, error) {
				var alertData = {
					title : "",
					content : "오류",
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
		$.ajax(nowBuyOptions);
		return false;
}

var buyfixedMatchAjax = function (dataParam, qtyList, type, cartCallMethod) { 
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
    var self_ = this;
    var fixedmodel = "";
    var yesCallback = function () {
        buyAjax(fixedmodel + ':::1'); // 매칭제품 있으면 'Y' : fixedMdl구매
    }
    
    dataParam = dataParam.replace(/\|/g, "^");
    
    var noCallback = function () {
        buyAjax(dataParam);
    }
    var coCallback = function () {
    }
    
    var params = {
        'storeCd': 'sec',
        'productCode': + dataParam
    };

    var option = {
        url: stContextPath+'/xhr/bespoke/fixedMatchAjax',
        dataType: "json",
        type: "POST",
        data: params,
        jsonpCallback: "jsonpcallback_bespoke",
        success: function (rtnjson) {
            var price1 = "0";
            var price2 = "0";

            if (rtnjson.fixedMatchResult.code == 'Y') {
                fixedmodel = rtnjson.fixedMatchResult.data.fixedMdl;
                price1 = controlNumber.numberWithCommas(selectPrice);
                price2 = controlNumber.numberWithCommas(rtnjson.fixedMatchResult.data.bPrice);
                
                popup.confirm8(1, '가격비교 안내 및 fixed 제품 구매', price1, price2, yesCallback, noCallback, coCallback)
                return false;
            } else {
                if(type == 'cart'){
                	
                    cartAjax(dataParam, qtyList, cartCallMethod);
                } else {
                    buyAjax(dataParam);
                }
            }
        },
        error: function (response, status, error) {
            alert('fixedMatchAjax.오류');
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("ajax", true);
        },
        complete: function () { }
    };

    $.ajax(option);
};

// bespoke cartAjax
var cartAjax = function (data, qtyList, cartCallMethod) {
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
    var cartParam = "";
    var ids = '';

    var option1 = {
        url: stContextPath+"/xhr/bespoke/goodsIdsAjax",
        dataType: "json",
        type: "POST",
        async: false,
        data: {bspkGrpKeys : data},
        success: function (result) {
        	
            if(typeof(result.exCode) !== 'undefined') {
                var alertData ={
                    title : ""
                    , content : "상품을 준비중입니다."
                    , callBack : ""
                    , btnText : "확인"
                };
                commonAlert(alertData);
                openLayer('commonAlert');
                return false;
            } else {
                ids =  JSON.stringify(result.goodsIdList);
            }

        },
        error: function (response, status, error) {
            alert('오류');
            return false;
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("ajax", true);
        },
        complete: function () { }
    };
    $.ajax(option1);

    goodsIdsTmp = ids.replace(/\"/g, '');
    goodsIdsTmp = goodsIdsTmp.replace("[", '');
    goodsIdsTmp = goodsIdsTmp.replace("]", '');
    var bspkGoodsIdsList = goodsIdsTmp.split(",");
    
    if (cartCallMethod == "confirm") {
		var options = {
			url : stContextPath+"/xhr/order/goodscnt"
			, data : {
				goodsIds: bspkGoodsIdsList, //본체 goodsId와 패널 goodsId를 list로 전달
				nowBuyYn : "N",
				buyQtys : String(qtyList),
				orderType : "ONCE",
				bspkGrpKeys : data,
				bspkGoodsYn : "Y"
			}
			, done : function(resData){
				var cartCnt = resData.goodsCnt;
				
				if ( cartCnt > 0 ) {
					let confirmData = {
						content : "이미 동일한 상품이 장바구니에 있습니다.</br>추가하시겠습니까?"
				        ,okBtnText : "확인"
				        ,cancelBtnText : "취소"
			        };
					commonConfirm(confirmData);
					openLayer('commonConfirm');
					$("#closeCommonConfirmBtn").css("display", "none");
					
					$("#commonConfirmOkBtn").on('click' , function(){
						if($("#commonConfirmOkBtn").text() == "확인") {
							insertBespokeCartFn(data, ids, cartCallMethod);
						}
					});
					$("#commonConfirmCancelBtn").on('click' , function(){
						//취소
						return false;
					});
				} else {
					insertBespokeCartFn(data, ids, cartCallMethod);
				}
			}
		};
		ajax.call(options);
	} else {
		insertBespokeCartFn(data, ids, cartCallMethod);
	}

};

// bespoke insert cart
var insertBespokeCartFn = function(data, ids, cartCallMethod) {
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
	
	 if(ids != '') {
	        var option = {
	            url: stContextPath+"/xhr/order/insertCart",
	            dataType: "json",
	            type: "POST",
	            data: {
	                nowBuyYn : 'N',
	                bspkGrpKeys : data,
	                goodsIds : ids
	            },
	            success: function (result) {
	            	
	                if(typeof(result.exCode) !== 'undefined') {
	                    var alertData ={
	                        title : ""
	                        , content : result.exMsg
	                        , callBack : ""
	                        , btnText : "확인"
	                    };
	                    commonAlert(alertData);
	                    openLayer('commonAlert');
	                    return false;
	                } else {
	                	
	                	if(cartCallMethod == "confirm") {
							let confirmData = {
								content : "제품이 장바구니에 추가되었습니다.<br>장바구니로 이동하시겠습니까?"
							    ,okBtnText : "이동"
							    ,cancelBtnText : "취소"
						    };
							commonConfirm(confirmData);
							openLayer('commonConfirm');
							$("#closeCommonConfirmBtn").css("display", "none");
							
							$("#commonConfirmOkBtn").on('click' , function(){
								if($("#commonConfirmOkBtn").text() == "이동") {
									location.href = stContextPath+"cart/";
								}
							});
							
							$("#commonConfirmCancelBtn").on('click' , function(){
								//취소
								return false;
							});
							
						} else {
							location.href = stContextPath+"cart/";
						}
						return false;
	                }

	            },
	            error: function (response, status, error) {
	                alert('오류');
	            },
	            beforeSend: function (xhr) {
	                xhr.setRequestHeader("ajax", true);
	            },
	            complete: function () { }
	        };
	        $.ajax(option);
	    }
}

/**
 * 선물하기(crawling)_단일건 - target 추가
 * @param mdlCode 모델코드
 * @param target 타겟
 */
function presentDirect(mdlCode, target) {
	if (mdlCode === null || mdlCode === undefined
			|| $.trim(mdlCode).length == 0) {
		var alertData = {
			title : "",
			content : "모델코드가 없습니다.",
			callBack : "",
			btnText : "확인"
		};
		commonAlert(alertData);
		openLayer('commonAlert');
		return false;
	}
	
	// URL - stContextPath 적용 
	var stContextPath = $("#viewStContextPath").val();
	var goodsId;

	var option = {
		url : stContextPath+"/xhr/bespoke/goodsIdsAjax",
		dataType : "json",
		type : "POST",
		async : false,
		data : {
			bspkGrpKeys : mdlCode
		},
		success : function(result) {

			if (result.exCode !== null && result.exCode !== undefined) {
				var alertData = {
					title : "",
					content : "상품을 준비중입니다.",
					callBack : "",
					btnText : "확인"
				};
				commonAlert(alertData);
				openLayer('commonAlert');
				return false;
			} else {
				if (result.goodsIdList != null) {
					goodsId = result.goodsIdList[0];
				}
			}

		},
		error : function(response, status, error) {
			var alertData = {
				title : "",
				content : "오류",
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

	$.ajax(option);

	if (goodsId !== null && goodsId !== undefined) {
		var reqData = {
			goodsIds : goodsId,
			stGbCd : "${view.stGbCd}",
			stId : "${view.stId}",
			mbrNo : "${session.mbrNo}",
			nowBuyYn : "Y",
			buyQtys : 1,
			orderType : "ONCE",
		};

		var nowBuyOptions = {
			url : stContextPath+"/xhr/order/insertCart",
			dataType : "json",
			type : "POST",
			data : reqData,
			success : function(result) {
				if (result.exCode !== null && result.exCode !== undefined) {
					var alertData = {
						title : "",
						content : result.exMsg,
						callBack : "",
						btnText : "확인"
					};
					commonAlert(alertData);
					openLayer('commonAlert');
					return false;
				} else {
					var msg = "선물하기";
					
					if (fnChkLogin(msg, location.pathname)) {
						var cartId = document.createElement('input');
						
						cartId.setAttribute('name', "cartId");
						cartId.setAttribute('value', result.cartId);
						
						var presentYn = document.createElement('input');
						
						presentYn.setAttribute('name', "presentYn");
						presentYn.setAttribute('value', 'Y');
						
						var form = document.createElement('form');
						
						form.setAttribute('action', stContextPath+"present/presentSend/");
						form.setAttribute('target', target);
						form.setAttribute('method', 'post');

						form.appendChild(cartId);
						form.appendChild(presentYn);
						document.body.appendChild(form);
						form.submit();
					}
				}
			},
			error : function(response, status, error) {
				var alertData = {
					title : "",
					content : "오류",
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
		$.ajax(nowBuyOptions);
	}
};

// 상품아이디 버전
/**
 * fnAlertMessage : 알림메세지
 * @param alertMsg 메세지 내용
 */
function fnAlertMessage(alertMsg) {
	var alertData = {
		title : "",
		content : alertMsg,
		callBack : "",
		btnText : "확인"
	};
	commonAlert(alertData);
	openLayer('commonAlert');
}

/**
 * fnCheckGoodsStatus : 상품 판매 상태 체크
 * @param goodsIdParam 상품아이디
 */
function fnCheckGoodsStatus(goodsIdParam) {
	var stContextPath = $("#viewStContextPath").val();
	var goodsIdList = [];
	var checkOption = {
		url : stContextPath+"xhr/goods/checkGoodsStatus",
		dataType : "json",
		type : "POST",
		async : false,
		data : {
			grpKeys : goodsIdParam
		},
		success : function(result) {
			if (result.exCode !== null && result.exCode !== undefined) {
				fnAlertMessage("상품을 준비중입니다.");
				return false;
			} else {
				if (result != null) {
					goodsIdList = result;
				}
			}
		},
		error : function(response, status, error) {
			fnAlertMessage("[오류] goodsIdsAjax");
			return false;
		},
		beforeSend : function(xhr) {
			xhr.setRequestHeader("ajax", true);
		},
		complete : function() {
		}
	};
	
	$.ajax(checkOption);
	return goodsIdList;
}

/**
 * fnInsertCart : 장바구니 등록
 * @param reqData -> 
  			goodsIds : goodsIdList,
			nowBuyYn : 바로구매 여부,
			buyQtys : 수량,
			orderType : "ONCE"
 */
function fnInsertCart(reqData) {
	var stContextPath = $("#viewStContextPath").val();
	var cartResult = null;
	var nowBuyOptions = {
		url : stContextPath+"/xhr/order/insertCart",
		dataType : "json",
		type : "POST",
		data : reqData,
		async : false,
		success : function(result) {
			if (result.exCode !== null && result.exCode !== undefined) {
				fnAlertMessage(result.exMsg);
				return false;
			} else {
				cartResult = result;
			}
		},
		error : function(response, status, error) {
			fnAlertMessage("[오류] insertCart");
			return false;
		},
		beforeSend : function(xhr) {
			xhr.setRequestHeader("ajax", true);
		},
		complete : function() {
		}
	};
	$.ajax(nowBuyOptions);
	return cartResult;
}

/**
 * crawlingBuyDirectById : 바로구매(crawling)_단일건 (상품아이디)
 * @param goodsId 상품아이디
 */
function crawlingBuyDirectById(goodsId) {
	fnBuyDirectBySingleId(goodsId, "_self");
};

/**
 * fnBuyDirectBySingleId : 바로구매_단일건 (상품아이디)
 * @param goodsId 상품아이디
 * @param target 타겟
 */
function fnBuyDirectBySingleId(goodsId, target) {
	if (goodsId === null || goodsId === undefined
			|| $.trim(goodsId).length == 0) {
		fnAlertMessage("상품아이디가 없습니다.");
		return false;
	}
	
	var stContextPath = $("#viewStContextPath").val();

	// 상품 판매 상태 체크
	var goodsIdList = fnCheckGoodsStatus(goodsId);

	if (goodsIdList !== null && goodsIdList !== undefined && goodsIdList.length > 0) {
		var reqData = {
			goodsIds : goodsIdList,
			nowBuyYn : "Y",
			buyQtys : 1,
			orderType : "ONCE",
		};

		// 장바구니 등록
		if(fnInsertCart(reqData) != null) {
			// @ 주문 페이지로..
			var form = document.createElement('form');
			form.setAttribute('action', stContextPath + "order/");
			form.setAttribute('target', target);
			form.setAttribute('method', 'post');
			document.body.appendChild(form);
			form.submit();
		}
	}
};

/**
 * fnBuyDirectByMultiId : 바로구매_복수건 (상품아이디)
 * @param goodsList
 */
function fnBuyDirectByMultiId(goodsList) {
	
	var stContextPath = $("#viewStContextPath").val();
	
	console.log("goodsList 222222=====> " + JSON.stringify(goodsList));

	// @ Test 상품아이디 리스트
	// @ ex: { goodsId:상품아이디, qty:수량, compNo:업체번호(@닷컴기준: [312:삼성전자한국총괄],[313:삼성판매주식회사],[0:없음]) }
	// var goodsList = [
	// { goodsId:"G000001111", qty:2, compNo:312 },
	// { goodsId:"G000001112", qty:4, compNo:313 },
	// { goodsId:"G000001113", qty:1, compNo:313, tradeIn:"Y", galaxyClub:"Y", galaxyClubTpCd:"CLB008" }
	// ];

	// @ 상품아이디 조회를 위한 모델코드 및 업체 리스트(String)
	// @ searchGoodsParams: G000001111^G000001112^...
	// @ searchCompNoParams: 000^312^313...
	var searchGoodsParams = "";
	var searchCompNoParams = "";

	// @ 수량 리스트
	var qtyList = new Array();

	// 트레이드인 리스트
	var tradeInList = new Array();
	// @ Validate Check
	if (0 < goodsList.length) {
		var goodsId = "";
		var qtyI = 0;
		var compNoI = "";
		var content = "";
		var goodsOrdTpCd = "";
		var galaxyClubTpCd = "";

		for (var i = 0; i < goodsList.length; i++) {
			goodsId = goodsList[i].goodsId;
			qtyI = goodsList[i].qty;
			
			// 상품아이디 체크
			if (goodsId === null || goodsId === undefined || $.trim(goodsId).length == 0) {
				content = "상품아이디를 확인하여 주시기 바랍니다."
			}
			
			// 업체번호 체크
			if (goodsList[i].compNo === null || goodsList[i].compNo === undefined || $.trim(goodsList[i].compNo).length == 0) {
				compNoI = 0;
			}else{
				compNoI = goodsList[i].compNo;
			}
			
			// 수량 체크
			if (qtyI === null || qtyI === undefined || qtyI < 1) {
				content = "수량을 확인하여 주시기 바랍니다."
			}
			
			// ---- 트레이드인 구매 관련 start;
			//트레이드인
			if(goodsList[i].tradeIn == "Y") {
				goodsOrdTpCd = "TRD";
			}else if(goodsList[i].ceTradeIn == "Y"){
				goodsOrdTpCd = "CETRD";
			}else{
				// 트레이드인 / 갤럭시 클럽 상품은 하나만 구매 가능하므로 파라메터 초기화 삭제
				//goodsOrdTpCd = "";
			}
			
			if(goodsList[i].galaxyClub == "Y") {
				goodsOrdTpCd += "GC";
				if (goodsList[i].galaxyClubTpCd === null || goodsList[i].galaxyClubTpCd === undefined || $.trim(goodsList[i].galaxyClubTpCd).length == 0) {
					content = "갤럭시 클럽 캠페인 코드를 확인하여 주시기 바랍니다.";
				} else {
					galaxyClubTpCd = goodsList[i].galaxyClubTpCd;
				}
			}
			
			// 비스포크 워치 일 경우 트레이드인 아래 로직 패스
			if ("Y" != goodsList[i].bspkWatchYn) {
				// TradeIn, GalaxyClub 상품이 2개 이상일 경우 예외처리
				if (goodsOrdTpCd != "" && i > 0) {
					content = "트레이드인 / 갤럭시 클럽 상품은 한개만 구매 가능합니다.";
				}
			}
			
			console.log("goodsOrdTpCd=====> " + goodsOrdTpCd);
			// ---- 트레이드인 구매 관련 end;

			// 상품아이디 및 수량 이상 있을시 alert
			if (content !== "") {
				fnAlertMessage(content);
				return false;
			} else {
				// 상품아이디 정제
				if (i !== (goodsList.length - 1)) {
					searchGoodsParams += goodsId + "^";
					searchCompNoParams += compNoI + "^";
				} else {
					searchGoodsParams += goodsId;
					searchCompNoParams += compNoI;
				}
				// 수량 정제
				qtyList.push(qtyI);
				
				tradeInList.push(goodsOrdTpCd);
				
				// 비스포크 워치 일 경우 트레이드인 & 갤럭시 클럽 파라메터초기화
				if ("Y" == goodsList[i].bspkWatchYn) {
					goodsOrdTpCd = "";
				}
			}			
		}
	} else {
		fnAlertMessage("데이터 확인이 필요합니다.");
		return false;
	}
	
	// 상품 판매 상태 체크
	var goodsIdList = fnCheckGoodsStatus(searchGoodsParams);
	
	// @ Cart Insert
	if (goodsIdList !== null && goodsIdList !== undefined && goodsIdList.length > 0) {
		// @ goodsIds, buyQtys의 배열값을 String으로 넘겨주지 않으면 컨트롤러에서 param이 null로 받아져서 String처리,
		var reqData = {
			goodsIds : String(goodsIdList),
			nowBuyYn : "Y",
			buyQtys : String(qtyList),
			orderType : "ONCE",
			goodsOrdTpCd : String(tradeInList),
			galaxyClubTpCd : galaxyClubTpCd
		};			

		var orderUrl = stContextPath + "order/";
		
		// 장바구니 등록
		if(fnInsertCart(reqData) != null) {
			if(tradeInList.includes('CETRD') || tradeInList.includes('TRD')) { // TradeIn 체크
				if (fnChkLogin("바로구매", orderUrl)) { // 로그인 체크
					location.href= orderUrl;
				}
			} else if(tradeInList.includes('GC') || tradeInList.includes('TRDGC')) { // GalaxyClub 체크
				fnChkGalaxyClub(reqData);	// 로그인 체크 & 멤버십 체크
			} else {
				// @ 주문 페이지로..
				var form = document.createElement('form');
				form.setAttribute('action', orderUrl);
				form.setAttribute('target', "_self");
				form.setAttribute('method', 'post');
				document.body.appendChild(form);
				form.submit();
			}
		}
	}
};

/**
 * fnPresentDirectBySingleId : 선물하기 단일건 (상품아이디)
 * @param goodsId 상품아이디
 * @param target 타겟
 */
function fnPresentDirectBySingleId(goodsId, target) {
	if (goodsId === null || goodsId === undefined
			|| $.trim(goodsId).length == 0) {
		fnAlertMessage("상품아이디가 없습니다.");
		return false;
	}

	var stContextPath = $("#viewStContextPath").val();
	
	// 상품 판매 상태 체크
	var goodsIdList = fnCheckGoodsStatus(goodsId);

	if (goodsIdList !== null && goodsIdList !== undefined && goodsIdList.length > 0) {
		var reqData = {
			goodsIds : goodsIdList,
			nowBuyYn : "Y",
			buyQtys : 1,
			orderType : "ONCE",
		};
		
		// 장바구니 등록
		var cartResult = fnInsertCart(reqData);
		if(cartResult != null) {
			var msg = "선물하기";
			
			// 로그인 체크
			if (fnChkLogin(msg, location.pathname)) {
				// 선물하기 주문 파라메터 셋팅
				var cartId = document.createElement('input');
				cartId.setAttribute('name', "cartId");
				cartId.setAttribute('value', cartResult.cartId);
				
				var presentYn = document.createElement('input');
				presentYn.setAttribute('name', "presentYn");
				presentYn.setAttribute('value', 'Y');
				
				var form = document.createElement('form');
				form.setAttribute('action', stContextPath+"present/presentSend/");
				form.setAttribute('target', target);
				form.setAttribute('method', 'post');
				form.appendChild(cartId);
				form.appendChild(presentYn);
				document.body.appendChild(form);
				form.submit();
			}
		}
	}
};

/**
 * fnCartDirectByMultiId : 장바구니_복수건 (상품아이디)
 * @param goodsList
 */
function fnCartDirectByMultiId(goodsList, cartCallMethod) {
	
	console.log("goodsList=====> " + JSON.stringify(goodsList));

	// @ Test 상품아이디 리스트
	// @ ex: { goodsId:상품아이디, qty:수량, compNo:업체번호(@닷컴기준: [312:삼성전자한국총괄],[313:삼성판매주식회사],[0:없음]) }
	// var goodsList = [
	// { goodsId:"G000001111", qty:2, compNo:312 },
	// { goodsId:"G000001112", qty:4, compNo:313 },
	// { goodsId:"G000001113", qty:1, compNo:313, tradeIn:"Y", galaxyClub:"Y", galaxyClubTpCd:"CLB008" }
	// ];
	
	// cartCallMethod : 장바구니 이동 여부 확인 파라미터
	// var cartCallMethod = "move" (default) 장바구니 이동
	//						"confirm" 동일한 상품 확인 / 장바구니 이동 팝업 띄우기

	// @ 상품아이디 조회를 위한 모델코드 및 업체 리스트(String)
	// @ searchGoodsParams: G000001111^G000001112^...
	// @ searchCompNoParams: 000^312^313...
	var searchGoodsParams = "";
	var searchCompNoParams = "";

	// @ 수량 리스트
	var qtyList = new Array();

		
	// @ Validate Check
	if (0 < goodsList.length) {
		var goodsId = "";
		var qtyI = 0;
		var compNoI = "";
		var content = "";
		
		for (var i = 0; i < goodsList.length; i++) {
			goodsId = goodsList[i].goodsId;
			qtyI = goodsList[i].qty;

			// 상품아이디 체크
			if (goodsId === null || goodsId === undefined || $.trim(goodsId).length == 0) {
				content = "상품아이디를 확인하여 주시기 바랍니다."
			}
			
			// 업체번호 체크
			if (goodsList[i].compNo === null || goodsList[i].compNo === undefined || $.trim(goodsList[i].compNo).length == 0) {
				compNoI = 0;
			}else{
				compNoI = goodsList[i].compNo;
			}
			
			// 수량 체크
			if (qtyI === null || qtyI === undefined || qtyI < 1) {
				content = "수량을 확인하여 주시기 바랍니다."
			}
					
			// 상품아이디 및 수량 이상 있을시 alert
			if (content !== "") {
				fnAlertMessage(content);
				return false;
			} else {
				// 상품아이디 정제
				if (i !== (goodsList.length - 1)) {
					searchGoodsParams += goodsId + "^";
					searchCompNoParams += compNoI + "^";
				} else {
					searchGoodsParams += goodsId;
					searchCompNoParams += compNoI;
				}
				// 수량 정제
				qtyList.push(qtyI);
			}	
		}
	} else {
		fnAlertMessage("데이터 확인이 필요합니다.");
		return false;
	}
	
	// 상품 판매 상태 체크
	var goodsIdList = fnCheckGoodsStatus(searchGoodsParams);
	
	// @ Cart Insert
	if (goodsIdList !== null && goodsIdList !== undefined && goodsIdList.length > 0) {
		//일반상품 장바구니 goodsCnt 조회
		goodsCntCart(goodsIdList, qtyList, cartCallMethod);
	}
};
