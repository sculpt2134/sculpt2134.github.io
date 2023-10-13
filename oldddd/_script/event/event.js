///////////////////// event.js /////////////////////////////////////////////////////
///////////////////// 파일변경 시  indexLayout.jsp 내 event.js 호출 스크립트 버전 추가 (캐시 방지)

let eventInfo;
let entryEvent; // 기본정보
let collectItems; // 수집항목
let goodsSerialInfos; // 제품목록
let plcyContentCollect; // 개인 정보 처리 수집 이용 동의
let plcyContentPrcs; // 개인 정보 처리 업무 위탁 동의
let eventPrivacyPolicys; // 개인 정보 방침 리스트 or 마케팅 수신 동의
let addFields; // 추가필드
let eventGbFields; //이벤트 구분 필드
let plazas; // 매장목록
let siDoList; // 시/도 목록
let siGunGuList; // 시군구 목록
let questionInfos;
let voteQuestionInfos;
let sessionMbr;
let membershipNo;
let stPath;
let returnUrl;
let pblcEvtNo;
let eventGbCd; // 이벤트 타입 : 시리얼, 개인정보수집, 투표, 설문, 매장상담예약
let kakaoAppKeyEvent; // 카카오 키
let eventAddType; //이벤트 타입
let entryCnt;  //응모건수
let eventAddYn; // 특정이벤트 구분 변수
let fanclassFlag; //팬클래스 이벤트 여부
let joinNo; //이벤트 응모번호
//let addSurveyFields; // 추가설문필드

let ugcFlag= false; // @PIL(22.10.28) GCS 뽐 겔러리 이벤트 유무


/* 기획 요구사항 : 카카오맵 초기 셋팅은 서울 / 강남구로 셋팅 */
let siDo10; // 서울
let siGunGu123; // 강남구

let isPreView = false; // true : 미리보기
let oneTimeChk = false;

let plazaNm;
let phoneTpCd;
let ciToken;
let unpackGoodsId;

let $popDiv;
let $popDivRenewal;
let $tooltipDiv;
let $unpackAuthDiv;
let $eventKcbAuthDiv;

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
stPath = ($("#openPop").data("st-path"));

var eventGoodsMain = {
		vMainWrapId : '#pd-inner-cont'
		, vGoodsWrapId : '#goods_detail_wrap'
		, fnGetHtml : function(target, url, data, callback){
			var options = {
				url: eventGoodsMain.fnAjaxUrl(url)
				, dataType : "html"
				, data: data
				, done: function (html){
					$(target).html(html);
					if(callback){
						callback();
					}
				}
			};
			ajax.call(options);
		}
		, fnAjaxUrl : function(vUrl, vAjaxUrl){
			var ajaxUrl = "xhr/goods/";
			if (vAjaxUrl !== undefined){
				ajaxUrl = vAjaxUrl;
			}
			return stPath +  ajaxUrl + vUrl;
		}, fnLoginCheck : function(callback){
			var options = {
				url : eventGoodsMain.fnAjaxUrl("loginCheck")
				, type: 'POST'
				, done : function(data) {
					if(callback){
						callback(data.isLogin);
					}
				}
			};
			ajax.call(options);
		}
	}

	var eventGoodsDetail = {
		fnReqData : function(){
			var reqData = $("#eventGoodsCartForm").serializeJson();

			return reqData;
		}

		//b2b2c b2b 추가
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

			var nowBuyOptions = {
				url : eventGoodsMain.fnAjaxUrl("insertCart", "xhr/order/")
				, data : reqData
				, done : function(data){
					if ( (reqData.pckStrNo !== null && reqData.pckStrNo !== undefined && $.trim(reqData.pckStrNo).length > 0 ) || reqData.rglrDlvrYn != null || data.isHomefitnessPrivateGoodsYn == "Y") {
						var options2 = {
								url : eventGoodsMain.fnAjaxUrl("loginCheck")
								, type: 'POST'
								, done : function(data) {
									if(!data.isLogin) {
										location.href= stPath + "member/indexLogin/?returnUrl="+ stPath +"order/";
									} else {
										location.href = stPath + "order/";
									}
								}
							};
							ajax.call(options2);

					} else {
						location.href = stPath + "order/";
					}
						_satellite.track('buy now');
				}
			};

//			nowBuyOptions = $.extend({}, nowBuyOptions, {netFunnelId : 'b2c_checkout'});

			var checkGoodsLimitOptions = {
				url : eventGoodsMain.fnAjaxUrl("limit", "xhr/order/check/goods/")
			  , data : reqData
			  , done : function(data) {
					ajax.call(nowBuyOptions);
			  }

			};

			ajax.call(checkGoodsLimitOptions);
		}

};

$(function(){
	// create html tag
	$popDiv = $(drawPopHtmlCode());
	$popDivRenewal = $(drawPopHtmlCodeRenewal());

	$tooltipDiv = $(drawTooltipHtmlCode());

	$popDiv2 = $(drawPopHtmlCode2());
	$popDiv4 = $(drawPopHtmlCode4());
	$popDiv5 = $(drawPopHtmlCode5());
    //갤캠스
    $popDiv6 = $(drawPopHtmlCode6());

});

function fnDrawPop(){
	// 팝업 html Code
	if($("#popupArea_Event3791").length > 0){
		$("#popupArea_Event3791").append($popDiv);
	}else{
		$("#popupArea").append($popDiv);
	}

	// 툴팁 html Code
	if($("#tooltipArea_Event3791").length > 0){
		$("#tooltipArea_Event3791").append($tooltipDiv);
	}else{
		$("#tooltipArea").append($tooltipDiv);
	}


	$(".titleNo").show();
}

function fnDrawPopRenewal(){
	// 팝업 html Code
	if($("#popupArea_Event3791").length > 0){
		$("#popupArea_Event3791").append($popDivRenewal);
	}else{
		$("#popupArea").append($popDivRenewal);
	}

	// 툴팁 html Code
	if($("#tooltipArea_Event3791").length > 0){
		$("#tooltipArea_Event3791").append($tooltipDiv);
	}else{
		$("#tooltipArea").append($tooltipDiv);
	}


	$(".titleNo").show();
}

////////////////////////////////////////////////////////////////////////////////////
///////////////////// FUNCTION //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/* 매장상담 예약 팝업 스크립트 로드 */
function fnScriptLoad(){

	$.getScript("//developers.kakao.com/sdk/js/kakao.min.js")
	.done(function(script, textStatus){
//		console.log("[ success ] kakao.min.js load success");
	})
	.fail(function(jqxhr, settings, exception){
//		console.log("[ fail ] kakao.min.js load fail");
	});

	$.getScript("//dapi.kakao.com/v2/maps/sdk.js?appkey="+kakaoAppKeyEvent+"&autoload=false", function() {
        daum.maps.load(function() {
        	if ( eventAddYn == 'B2C_PLAZA_DOCENT') {
        		console.log("[ success docent.js] dapi.kakao.com sdk.js load success");
        		fnEventDocentReservationJsLoad(); // event-docentreservation.js load
        	} else if ( eventAddYn == 'B2C_PLAZA_DOCENT_CAMPUS') {
        		console.log("[ success campus-docent.js] dapi.kakao.com sdk.js load success");
        		fnEventDocentCampusReservationJsLoad(); // event-docentreservation.js load
        	} else {
        		console.log("[ success reservation.js] dapi.kakao.com sdk.js load success");
        		fnEventReservationJsLoad(); // event-reservation.js load
        	}
        });
    });
}

// 카카오 관련 스크립트가 로드 된 후 로드하기 위함
function fnEventReservationJsLoad(){
	var def = $.Deferred();
	var script = document.createElement('script');
	script.src = "/sec/static/evt/_script/event/event-reservation.js?ver=1.5";
	script.onload = function() {
//		console.log("[ success ] event-reservation.js load success");
		def.resolve();
	}
	script.onerror = function() {
//		console.log("[ fail ] event-reservation.js load fail");
		def.reject();
	}
	document.body.appendChild(script);
}

//갤럭시 스튜디오 도슨트 js load
function fnEventDocentReservationJsLoad(){
	var def = $.Deferred();
	var script = document.createElement('script');
	script.src = "/sec/static/evt/_script/event/event-docent-reservation.js?ver=1.1";
	script.onload = function() {
//		console.log("[ success ] event-reservation.js load success");
		def.resolve();
	}
	script.onerror = function() {
//		console.log("[ fail ] event-reservation.js load fail");
		def.reject();
	}
	document.body.appendChild(script);
}

//갤럭시 스튜디오 도슨트 in 캠퍼스 js load
function fnEventDocentCampusReservationJsLoad(){
	var def = $.Deferred();
	var script = document.createElement('script');
	script.src = "/sec/static/evt/_script/event/event-docent-campus-reservation.js?ver=1.1";
	script.onload = function() {
//		console.log("[ success ] event-reservation.js load success");
		def.resolve();
	}
	script.onerror = function() {
//		console.log("[ fail ] event-reservation.js load fail");
		def.reject();
	}
	document.body.appendChild(script);
}

/* 팝업 호출 */
function fnCallPop2(evtNo){
	oneTimeChk = false;

	pblcEvtNo = evtNo;
	returnUrl = window.location.pathname;

	var searchPath = window.location.search;

	if(searchPath.indexOf("eventNo") != -1) {
		returnUrl += searchPath;
	} else {
		if (searchPath.indexOf("?") != -1){
			if(returnUrl.indexOf("event/eventContentDetailView") != -1) {
				returnUrl += searchPath + "&eventNo="+pblcEvtNo;
			} else {
				returnUrl += searchPath;
			}
		} else {
			returnUrl += "?eventNo="+pblcEvtNo;
		}
	}

	stPath = ($("#openPop").data("st-path"));

	var param;
	param = {eventNo : pblcEvtNo , isPreView : isPreView };

	var options = {
		url : stPath+"xhr/event/getEventBaseInfo"
		, data : param
		, done: function (data) {

			$("#mask").remove();
			var eventInfo = data.eventInfo;

			/* 카카오 맵을 사용하기 위한 기초 정보 */
			kakaoAppKeyEvent = data.kakaoAppKey;
			siDo10 = data.siDo10;
			siGunGu123 = data.siGunGu123;

			if(eventInfo.errMsg == "" || eventInfo.errMsg == null){
				var evtGbCd = data.eventInfo.entryEvent.eventGbCd;
				if(evtGbCd != undefined && evtGbCd != ""){
					//기존 이벤트 팝업
					setEventPop(data);
				} else {
					//애드브릭스 customEvent
					adbrixCustomEvent(data.eventInfo.entryEvent.ttl, pblcEvtNo, 'click');
					//리뉴얼 이벤트 팝업
					setEventPopRenewal(data);
				}
			}else{
				if(eventInfo.errCd == "LGN0005"){
					makeAlert(eventInfo.errMsg, fnGoLoginPage);
				}else{
					makeAlert(eventInfo.errMsg, eventPopClose);
				}
			}
			if(eventGbCd){
				if(eventInfo.plazas){
					$("#eventBtn_Area_div").css("display","none");
				}else{
					$("#eventBtn_Area_div").css("display","");
				}
			}
		}
	};
	ajax.call(options);
	multiFileCnt = 0;			//첨부파일 개수 초기화
}


/* 팝업 호출 */
function fnCallPop5(evtNo){
	oneTimeChk = false;

	pblcEvtNo = evtNo;
	returnUrl = window.location.pathname;

	var searchPath = window.location.search;

	if(searchPath.indexOf("eventNo") != -1) {
		returnUrl += searchPath;
	} else {
		if (searchPath.indexOf("?") != -1){
			if(returnUrl.indexOf("event/eventContentDetailView") != -1) {
				returnUrl += searchPath + "&eventNo="+pblcEvtNo;
			} else {
				returnUrl += searchPath;
			}
		} else {
			returnUrl += "?eventNo="+pblcEvtNo;
		}
	}

	stPath = ($("#openPop").data("st-path"));

	var param;
	param = {eventNo : pblcEvtNo , isPreView : isPreView };

	var options = {
		url : stPath+"xhr/event/getEventBaseInfo"
		, data : param
		, done: function (data) {
			$("#mask").remove();
			var eventInfo = data.eventInfo;

			/* 카카오 맵을 사용하기 위한 기초 정보 */
			kakaoAppKeyEvent = data.kakaoAppKey;
			siDo10 = data.siDo10;
			siGunGu123 = data.siGunGu123;

			if(eventInfo.errMsg == "" || eventInfo.errMsg == null){
				data.eventInfo.plcyContentCollect.plcyNm = "[삼성전자 멤버십] 개인정보 수집 및 이용 동의";
				if (data.eventInfo.plcyContentPrcs != null) {
					data.eventInfo.plcyContentPrcs.plcyNm = "[이벤트 응모] 재화 또는 서비스 홍보, 판매 권유 업무 위탁에 대한 개별 고지";
				}
				setEventPop(data);
//				$("#evtImg").hide();
			}else{
				if(eventInfo.errCd == "LGN0005"){
					var loginConfirm = {
							content : "로그인 이후 자랑하기 이벤트에 응모가 가능합니다.<br>로그인 화면으로 이동하시겠습니까?"
				            ,okBtnText : "확인"
				            ,cancelBtnText : "취소"
				            ,callback : fnGoLoginPage
					};
					commonConfirm(loginConfirm);
					openLayer('commonConfirm');
				}else if(eventInfo.errCd == "EVTPOP0017"){
					let confirmData = {
							content : eventInfo.errMsg
				            ,okBtnText : "확인"
				            ,cancelBtnText : "취소"
				            ,callback : fnGoMembershipPage
			            };
						commonConfirm(confirmData);
						openLayer('commonConfirm');
				}else if(eventInfo.errMsg=="이미 응모하였습니다.") {
					var alertData = {
				               content : "이미 BESPOKE 클럽 가입하기 이벤트에 참여하셨습니다.<BR>감사합니다."
				               ,btnText : '닫기'
				               ,callback : eventPopClose
				               };
					commonAlert(alertData);
					openLayer('commonAlert');
				}else{
					makeAlert(eventInfo.errMsg, eventPopClose);
				}
			}
			if(eventInfo.plazas){
				$("#eventBtn_Area_div").css("display","none");
			}else{
				$("#eventBtn_Area_div").css("display","");
			}
		}
	};
	ajax.call(options);
	multiFileCnt = 0;			//첨부파일 개수 초기화
}


/* 기존 이벤트 응모 팝업 화면 셋팅 */
function setEventPop(data){

	fnDrawPop();
	$("#exhibition").click(); // 팝업표시

	eventInfo = data.eventInfo;
	entryEvent = eventInfo.entryEvent;
	collectItems = eventInfo.eventCollectItems; // 수집항목
	goodsSerialInfos = eventInfo.goodsSerialInfos; // 제품목록
	plcyContentCollect = eventInfo.plcyContentCollect; // 개인 정보 처리 수집 이용 동의
	plcyContentPrcs = eventInfo.plcyContentPrcs; // 개인 정보 처리 업무 위탁 동의
	eventPrivacyPolicys = eventInfo.eventPrivacyPolicys; // 개인 정보 방침 리스트 or 마케팅 수신 동의
	addFields = eventInfo.addFields; // 추가필드
	questionInfos = eventInfo.questionInfos; // 설문문항
	plazas = eventInfo.plazas;
	siDoList = eventInfo.siDoList;
	siGunGuList = eventInfo.siGunGuList;
	eventAddYn = entryEvent.eventAddYn;
	eventAddType = entryEvent.eventAddYn; //이벤트타입
	fanclassFlag = (eventAddYn == 'B2C_PLAZA_FOLD3' || eventAddYn == 'B2C_PLAZA_FLIP3');

	/*BO 개발전, 추가 설문필드 데이터 셋팅*/
	//addSurveyFields = eventInfo.addSurveyFields; // 추가 설문필드

	$("#entryEventNo").val(entryEvent.eventNo); // 서버전송용 이벤트 번호
	$("#evtGbCd").val(entryEvent.eventGbCd); // 서버전송용 이벤트 구분
	$("#prtcpPsbGbCd").val(entryEvent.prtcpPsbGbCd); // 참여가능구분코드
	$("#prtcpPsbCnt").val(entryEvent.prtcpPsbCnt); // 참여가능수
	$("#evtNm").text(entryEvent.ttl);
	$("#cpNo").val(entryEvent.cpNo); // 쿠폰번호 셋팅
	$("#ftEvtNm").text(entryEvent.ttl); // 쿠폰번호 셋팅
	$("#eventAddYn").val(entryEvent.eventAddYn); // 특정이벤트 웹서버, 아카마이 업로드 여부
	$("#popEntrySuccMsg").val(entryEvent.popEntrySuccMsg);

	sessionMbr = eventInfo.loginUserMbrNo;
	membershipNo = eventInfo.loginUserMembership;

	// 이벤트 응모 구분 (개인정보 수집, 설문, 투표, 시리얼번호체크 등)
	eventGbCd = entryEvent.eventGbCd;

	setLayoutShowHide(eventGbCd);
	setCommLayout(entryEvent, collectItems, addFields);

	if(eventGbCd == "40"){
		$(".goodsSelect").hide();
		$("#goodsUl").empty();

		// 알림톡 사용 여부
		$("#biztalkUseYn").val(entryEvent.biztalkUseYn);

		// 제휴쿠폰 사용 여부
		$("#prtnrCpUseYn").val(entryEvent.prtnrCpUseYn);

		// 알림톡 템플릿
		$("#biztalkTmplTxt").val(entryEvent.biztalkTmplTxt);
	}

	// 제품선택 : 목록 처리 (시리얼형일 경우에만 처리) =====================================================
	if(eventGbCd == "50"){
		$(".goodsSelect").hide();
		$("#goodsUl").empty();

		var html="";
		$.each(goodsSerialInfos, function(idx, val){
			var index = idx +1;
			html += "<li class=\"item\">";
			html += "	<input id=\"chk-goods-"+index+"\" type=\"radio\" name=\"chk-goods\" value=\""+val.goodsId+"\" onchange='goodsCheck(this)' data-mdlcode='"+val.mdlCode+"' data-goods-nm='"+val.goodsNm+"'>";
			html += "	<label for=\"chk-goods-"+index+"\">"+val.mdlCode+"</label>";
			html += "</li>";
		});
		$("#goodsUl").append(html);
		$(".goodsSelect").show();

		$("#inpEnterSerialNum").attr("readonly", true);
	}


	// 질문 셋팅 ==========================================================================
	if(eventGbCd == "60"){
		// 제휴쿠폰 사용 여부
		$("#prtnrCpUseYn").val(entryEvent.prtnrCpUseYn);

		createQuestionHtml(questionInfos);
	}

	// 매장상담 예약 타입
	if(eventGbCd == "80"){
		fnScriptLoad();

		// 알림톡 템플릿
		$("#biztalkTmplTxt").val(entryEvent.biztalkTmplTxt);
	}

	// 개인 정보 동의 관련 =====================================================================
	var policyHtml="";
	$("#privacyPolicy").empty();

	// 개인 정보 처리 수집 이용 동의
	policyHtml += createPrivacyPolicyHtml(plcyContentCollect, 1);
	// 개인 정보 처리 업무 위탁 동의
	if (plcyContentPrcs != null) {
		policyHtml += createPrivacyPolicyHtml(plcyContentPrcs, 2);
	}
	// 개인정보수집유형 : 마케팅수신동의 및 그외
	$.each(eventPrivacyPolicys, function(idx, val){
		var index = idx +3;
		policyHtml += createPrivacyPolicyHtml(val, index);
	});
	$("#privacyPolicy").append(policyHtml);

	$(".error-msg").hide();

    if (eventAddYn == 'N') { // default 문구
    	$("#inpCounselMembershipErr").html("<p>나의 정보에서 멤버십 회원 추가정보 입력 후</p><p>알림신청하면 멤버십 번호가 보여집니다.</p>");
    } else if (eventAddYn == 'Y') { // 웨신샵 이벤트일때 문구 변경
    	$("#inpCounselMembershipErr").html("<p>※멤버십번호가 보이지 않으시나요?</p><p>화면 우측 상단 > 나의정보 메뉴에서</p><p>멤버십 가입여부 확인 후 다시 시도해 보세요.</p><p>(미가입 시 가입 후 재시도 필요)</p>");
    }

	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}

}

/* 리뉴얼 이벤트 응모 팝업 화면 셋팅 */
function setEventPopRenewal(data){

	fnDrawPopRenewal();
	$("#ciToken").val(ciToken);

	$("#exhibition").click(); // 팝업표시

	eventInfo = data.eventInfo;
	entryEvent = eventInfo.entryEvent;
	collectItems = eventInfo.eventCollectItems; // 수집항목
	goodsSerialInfos = eventInfo.goodsSerialInfos; // 제품목록
	plcyContentCollect = eventInfo.plcyContentCollect; // 개인 정보 처리 수집 이용 동의
	plcyContentPrcs = eventInfo.plcyContentPrcs; // 개인 정보 처리 업무 위탁 동의
	eventPrivacyPolicys = eventInfo.eventPrivacyPolicys; // 개인 정보 방침 리스트 or 마케팅 수신 동의
	addFields = eventInfo.addFields; // 추가필드
	eventGbFields = eventInfo.eventGbFields //이벤트 구분 필드
	questionInfos = eventInfo.questionInfos; // 설문문항(퀴즈)
	voteQuestionInfos = eventInfo.voteQuestionInfos; // 설문문항(투표)
	plazas = eventInfo.plazas;
	siDoList = eventInfo.siDoList;
	siGunGuList = eventInfo.siGunGuList;
	eventAddYn = entryEvent.eventAddYn;
	eventAddType = entryEvent.eventAddYn; //이벤트타입
	fanclassFlag = (eventAddYn == 'B2C_PLAZA_FOLD3' || eventAddYn == 'B2C_PLAZA_FLIP3');
	docentFlag = (eventAddYn == 'B2C_PLAZA_DOCENT' || eventAddYn == 'B2C_PLAZA_DOCENT_CAMPUS');
	
	$("#entryEventNo").val(entryEvent.eventNo); // 서버전송용 이벤트 번호
	$("#evtGbCd").val(entryEvent.eventGbCd); // 서버전송용 이벤트 구분
	$("#isEvtGbFld").val("Y"); // 리뉴얼 이벤트 응모 체크변수
	$("#prtcpPsbGbCd").val(entryEvent.prtcpPsbGbCd); // 참여가능구분코드
	$("#prtcpPsbCnt").val(entryEvent.prtcpPsbCnt); // 참여가능수
	$("#evtNm").text(entryEvent.ttl);
	$("#cpNo").val(entryEvent.cpNo); // 쿠폰번호 셋팅
	$("#ftEvtNm").text(entryEvent.ttl); // 쿠폰번호 셋팅
	$("#eventAddYn").val(entryEvent.eventAddYn); // 특정이벤트 웹서버, 아카마이 업로드 여부

	$("#popTitle").text(entryEvent.popEntryTtl);
	$("#eventSaveBtn").text(entryEvent.popEntryCtaText);
	$("#popEntrySuccMsg").val(entryEvent.popEntrySuccMsg);

	sessionMbr = eventInfo.loginUserMbrNo;
	membershipNo = eventInfo.loginUserMembership;

	var evtGbFlds = [];
	for(var idx=0; idx<eventGbFields.length; idx++){
		evtGbFlds.push(eventGbFields[idx].eventFldTpCd);
	}

	setLayoutShowHideRenewal(evtGbFlds);
	setCommLayout(entryEvent, collectItems, addFields);

	// 제휴쿠폰 사용 여부
	$("#prtnrCpUseYn").val(entryEvent.prtnrCpUseYn);

	//확장형
	if(evtGbFlds.indexOf("01") > -1 || evtGbFlds.indexOf("06") > -1){
		$(".goodsSelect").hide();
		$("#goodsUl").empty();

		// 알림톡 사용 여부
		$("#biztalkUseYn").val(entryEvent.biztalkUseYn);

		// 알림톡 템플릿
		$("#biztalkTmplTxt").val(entryEvent.biztalkTmplTxt);
	}

	// 제품선택 : 목록 처리 (시리얼형일 경우에만 처리) =====================================================
	if(evtGbFlds.indexOf("02") > -1){
		$(".goodsSelect").hide();
		$("#goodsUl").empty();

		var html="";
		$.each(goodsSerialInfos, function(idx, val){
			var index = idx +1;
			html += "<li class=\"item\">";
			html += "	<input id=\"chk-goods-"+index+"\" type=\"radio\" name=\"chk-goods\" value=\""+val.goodsId+"\" onchange='goodsCheck(this)' data-mdlcode='"+val.mdlCode+"' data-goods-nm='"+val.goodsNm+"'>";
			html += "	<label for=\"chk-goods-"+index+"\">"+val.mdlCode+"</label>";
			html += "</li>";
		});
		$("#goodsUl").append(html);
		$(".goodsSelect").show();

		$("#inpEnterSerialNum").attr("readonly", true);
	}


	// 질문 셋팅(퀴즈) ==========================================================================
	if(evtGbFlds.indexOf("03") > -1){
		// 제휴쿠폰 사용 여부
		$("#prtnrCpUseYn").val(entryEvent.prtnrCpUseYn);

		createQuestionHtml(questionInfos);
	}

	// 질문 셋팅(투표) ==========================================================================
	if(evtGbFlds.indexOf("04") > -1){
		createVoteQuestionHtml(voteQuestionInfos);
	}

	// 매장상담 예약 타입
	if(evtGbFlds.indexOf("05") > -1){
		fnScriptLoad();

		// 알림톡 템플릿
		$("#biztalkTmplTxt").val(entryEvent.biztalkTmplTxt);
	}

	// 개인 정보 동의 관련 =====================================================================
	var policyHtml="";
	$("#privacyPolicy").empty();

	// 개인 정보 처리 수집 이용 동의
	policyHtml += createPrivacyPolicyHtml(plcyContentCollect, 1);
	// 개인 정보 처리 업무 위탁 동의
	if (plcyContentPrcs != null) {
		policyHtml += createPrivacyPolicyHtml(plcyContentPrcs, 2);
	}
	// 개인정보수집유형 : 마케팅수신동의 및 그외
	$.each(eventPrivacyPolicys, function(idx, val){
		var index = idx +3;
		policyHtml += createPrivacyPolicyHtml(val, index);
	});

	$("#privacyPolicy").append(policyHtml);
	$(".error-msg").hide();

	if (eventAddYn == 'N') { // default 문구
		$("#inpCounselMembershipErr").html("<p>나의 정보에서 멤버십 회원 추가정보 입력 후</p><p>알림신청하면 멤버십 번호가 보여집니다.</p>");
	} else if (eventAddYn == 'Y') { // 웨신샵 이벤트일때 문구 변경
		$("#inpCounselMembershipErr").html("<p>※멤버십번호가 보이지 않으시나요?</p><p>화면 우측 상단 > 나의정보 메뉴에서</p><p>멤버십 가입여부 확인 후 다시 시도해 보세요.</p><p>(미가입 시 가입 후 재시도 필요)</p>");
	}

	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}

}

/* 시리얼넘버 입력폼 readonly 해제 */
function goodsCheck(obj){
	$("#inpEnterSerialNum").attr("readonly", false);
}

/* 개인정보 수집 관련 html 생성 */
function createPrivacyPolicyHtml(obj, index){

	var agreeRqidYn = obj.agreeRqidYn;
	var agreeRqidYnNm;
	var agreeSelWds = obj.agreeSelWds;
	var policyNo = obj.policyNo;

	if(agreeRqidYn == "Y"){
		agreeRqidYnNm = "필수";
	}else{
		agreeRqidYnNm = "선택";
	}

	if(obj.plcyGbCd == "10"){
		agreeSelWds = "위의 개인정보 수집 및 이용에 동의합니다.";
	}else if(obj.plcyGbCd == "20"){
		agreeSelWds = "위의 개인정보 처리 업무 위탁에 동의합니다.";
	}

	var html="";
	html += "<div class='terms-wrap'>";
	html += "	<h4 class='terms-tit'>"+obj.plcyNm+"</h4>";
	html += "	<div class='terms-box'>";
	html += "		<p>"+obj.content+"</p>";
	html += "	</div>";
	html += "	<div class='chk-form terms-more'>";

	if(agreeRqidYn == "Y"){
		html += "		<input id='chk-enter-"+index+"' data-chkgrp-name='checkEventEnter' type='checkbox' required='' title='' class='inp-terms entryAgreeY plcyGbCd" + obj.plcyGbCd + "' data-policyNo="+policyNo+">";
	}else{
		html += "		<input id='chk-enter-"+index+"' data-chkgrp-name='checkEventEnter' type='checkbox' required='' title='' class='inp-terms plcyGbCd" + obj.plcyGbCd + "' data-policyNo="+policyNo+">";
	}

	if(obj.plcyGbCd != "20"){
		html += "		<label for='chk-enter-"+index+"' class='chk-gray'>"+agreeSelWds+" ("+agreeRqidYnNm+")</label>";
	}

	html += "	</div>";

	if(agreeRqidYn == "Y" && obj.plcyGbCd != "20"){
		html += "	<div class='error-msg' id='err-chk-enter-"+index+"'>";

		if(obj.plcyGbCd == "10"){
			html += "		<p>개인정보 수집 및 이용에 동의해 주세요.</p>";
		}
//		else if(obj.plcyGbCd == "20"){
//			html += "		<p>개인정보 처리 위탁에 동의해 주세요.</p>";
//		}
		else{
			html += "		<p>"+obj.plcyNm+"에 동의해 주세요.</p>";
		}

		html += "	</div>";
	}
	html += "</div>";

	return html;
}

/*
	설문형 질문 html 생성(퀴즈)
*/
function createQuestionHtml(obj){

	$(".qstList").empty();

	// 10 객관식 체크박스 / 20 객관식 라디오버튼 / 30 주관식
	var html="";
	$.each(questionInfos, function(idx, val){
		var qstTpCd = val.qstTpCd; // 질문타입
		var rplContent = val.rplContent; // 보기문항
		var rplNos = val.rplNos; // 보기문항 번호
		var rghtansYn = val.rghtansYn; // 보기문항 정답
		var qstNo = val.qstNo;

		html += "<div class='survey-item'>";
		html += "    <p class='question'>Q. "+val.qstNm+"</p>";
		html += "    <input type='hidden' id='qstAnswer"+qstNo+"' name='qstAnswer' value='N' data-qsttpcd='"+qstTpCd+"'/>";
		html += "    <div class='answer-box'>";

		if(qstTpCd == "30"){
			html += "        <input type='text'  id='answer"+qstNo+"' name='answer"+qstNo+"' class='inp-line qstAnswer"+qstNo+"' placeholder='정답을 입력해 주세요.' maxlength='200'>";
			html += "        <input type='hidden' id='answer"+qstNo+"Y' name='answer"+qstNo+"Y' value='"+rplContent+"'/>";
		}else{
            html += "        <ul class='answer-list chk-form qstAnswer"+qstNo+"'>";
            var rplNosArr = rplNos.split(",");
            var rplContentArr = rplContent.split(",");
            var rghtansYnArr = rghtansYn.split(",");

			for(var i=0; i<rplNosArr.length; i++){
				var qNo = rplNosArr[i]; // 보기문항 번호
				var qText = rplContentArr[i]; // 보기문항
				var qAns = rghtansYnArr[i]; // 보기문항 정답

				html += "            <li class='item'>";
				if(qstTpCd == "10"){
					html += "            <input id='answer"+qstNo+qNo+"' type='checkbox' name='answer"+qstNo+"' value='Y'>";
				}else if(qstTpCd == "20"){
					html += "            <input id='answer"+qstNo+qNo+"' type='radio' name='answer"+qstNo+"' value='Y'>";
				}
				html += "                <label for='answer"+qstNo+qNo+"'>"+qText+"</label>";
                html += "                <input type='hidden' id='answer"+qstNo+qNo+"Y' value='"+qAns+"'/>";
                html += "            </li>";
			}
            html += "        </ul>";
		}

        html += "    </div>";
        html += "	 <div style='width: 100%; display: inline-block;margin-top:20px'>";
		html += "	     <div style='display:inline-block;vertical-align:middle;'>";

		if(qstTpCd == "30"){
			html += "	 		<button type='button' class='btn btn-s btn-type1 chkAns' style='margin-top:0' name='qstAnswer"+qstNo+"' id='chkAnsBtn"+qstNo+"' arg1='"+qstNo+"' arg2='"+qstTpCd+"'>정답확인</button>";
		}else{
			html += "	 		<button type='button' class='btn btn-s btn-type1 chkAns' style='margin-top:0' id='chkAnsBtn"+qstNo+"' arg1='"+qstNo+"' arg2='"+qstTpCd+"'>정답확인</button>";
		}

		html += "	     </div>";
		html += "	     <div class='error-msg answer-msg' id='answer"+qstNo+"Err' style='display:inline-block;vertical-align:middle;margin-left:8px;padding-top:0'>";
		html += "	       <p>오답입니다.</p>  ";
		html += "	     </div>    ";
		html += "	 </div>	";
        html += "</div>";
	});
	$(".qstList").append(html);

	$(".error-msg").hide();
	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}
}

/*
설문형 질문 html 생성(투표)
*/
function createVoteQuestionHtml(obj){

	$(".voteQstList").empty();

	// 10 객관식 체크박스 / 20 객관식 라디오버튼 / 30 주관식
	var html="";
	$.each(voteQuestionInfos, function(idx, val){
		var qstTpCd = val.qstTpCd; // 질문타입
		var rplContent = val.rplContent; // 보기문항
		var rplNos = val.rplNos; // 보기문항 번호
		var qstNo = val.qstNo;
		var imgUrl = val.imgUrl; // 이미지Url

		if(qstTpCd == "30"){	//주관식
			html += "<div class='secure-pop-tit margin-bottom bottom-line small-tit voteQstAnswer"+qstNo+"'>"+val.qstNm+"</div>";
			html += "<div class='inp-box width100'>";
			html += "	<label for='voteAnswer"+qstNo+"' class='blind'>"+val.qstNm+"</label>";
			html += "	<div class='inp-write'>";
			html += "		<input type='text' id='voteAnswer"+qstNo+"' name='voteAnswer"+qstNo+"' data-rplNo='"+rplNos+"' class='inp-line text-add voteQstAnswer"+qstNo+"' placeholder='내용을 기입 해 주세요'  maxlength='200'>";
			html += "	</div>";
			html += "	<div class='error-msg' id='voteAnswer"+qstNo+"Err'>";
			html += "		<p>항목을 입력해 주세요.</p>";
			html += "	</div>";
			html += "</div>";
		}else{
			html += "<div class='secure-pop-tit margin-bottom bottom-line small-tit voteQstAnswer"+qstNo+"'>"+val.qstNm+"</div>";
			html += "<div class='droptoggle'>";
			html += "	<div class='dropOption'>";
			html += "		<a href='javascript:;' class='dropButton underline-none dropButton"+qstNo+"'>";
			html += "			<span class='left-title'>내용을 확인하고 선택해주세요</span>";
			html += "		</a>";
			html += "		<div class='dropList'>";
			html += "			<div class='inp-box width100'>";
			html += "			<label for='chk-videos-"+qstNo+"' class='blind'>사진 선택</label>";
			if(qstTpCd == "10"){
				html += "			<div class='chk-form rounded'>";
			}else if(qstTpCd == "20"){
				html += "			<div>";
			}
			html += "					<ul class='chk-list-box2 chk-form mo-col1'>";
			var rplNosArr = rplNos.split(",");
			var rplContentArr = rplContent.split(",");
			var imgUrlArr = imgUrl.split(",");

			for(var i=0; i<rplNosArr.length; i++){
				var qNo = rplNosArr[i]; // 보기문항 번호
				var qText = rplContentArr[i]; // 보기문항
				var qUrl = imgUrlArr[i]; // 사진문항
				html += "					<li class='item'>";
				if(qstTpCd == "10"){
					html += "					<input id='voteAnswer"+qstNo+qNo+"' type='checkbox' name='voteAnswer"+qstNo+"' class='voteAnswer' value='"+qText+"' data-rplNo='"+qNo+"'>";
				}else if(qstTpCd == "20"){
					html += "					<input id='voteAnswer"+qstNo+qNo+"' type='radio' name='voteAnswer"+qstNo+"' class='voteAnswer' value='"+qText+"' data-rplNo='"+qNo+"'>";
				}
				html += "						<label for='voteAnswer"+qstNo+qNo+"'>";
				html += "							<div class='img-box'>";
				if(qUrl != ""){
					html += "							<img src='"+qUrl+"' alt='"+qText+"'>";
				}
				html += "            				</div>";
				html += "							<div class='text-box'>";
				html += "							<pre>"+qText+"</pre>";
				html += "							</div>";
				html += "            			</label>";
				html += "            		</li>";
			}
			html += "					</ul>";
			html += "					<!-- 에러시 div 'inp-box'에 클래스 error 삽입 -->";
			html += "					<div class='error-msg' id='voteAnswer"+qstNo+"Err'>";
			html += "						<p>항목을 선택해 주세요.</p>";
			html += "					</div>";
			html += "				</div>";
			html += "			</div>";
			html += "		</div>";
			html += "	</div>";
			html += "</div>";
			html += "</div>";
		}
	});
	$(".voteQstList").append(html);
	$(".dropButton").first().click();
	$(".error-msg").hide();
	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}
}
/*
설문형 질문 html 생성(투표)
*/
function createVoteQuestionHtml_Bak(obj){

	$(".voteQstList").empty();

	// 10 객관식 체크박스 / 20 객관식 라디오버튼 / 30 주관식
	var html="";
	$.each(voteQuestionInfos, function(idx, val){
		var qstTpCd = val.qstTpCd; // 질문타입
		var rplContent = val.rplContent; // 보기문항
		var rplNos = val.rplNos; // 보기문항 번호
		var qstNo = val.qstNo;

		html += "<div class='survey-item'>";
		html += "    <p class='question'>Q. "+val.qstNm+"</p>";
		html += "    <input type='hidden' id='voteQstAnswer"+qstNo+"' name='voteQstAnswer' value='N' data-qsttpcd='"+qstTpCd+"'/>";
		html += "    <div class='answer-box'>";

		if(qstTpCd == "30"){
			html += "        <input type='text'  id='voteAnswer"+qstNo+"' name='voteAnswer"+qstNo+"' data-rplNo='"+rplNos+"' class='inp-line voteQstAnswer"+qstNo+"' placeholder='내용을 기입해 주세요.' maxlength='200'>";
	//		html += "        <input type='hidden' id='voteAnswer"+qstNo+"Y' name='voteAnswer"+qstNo+"Y' value='"+rplContent+"'/>";
		}else{
			html += "        <ul class='answer-list chk-form voteQstAnswer"+qstNo+"'>";
			var rplNosArr = rplNos.split(",");
			var rplContentArr = rplContent.split(",");

			for(var i=0; i<rplNosArr.length; i++){
				var qNo = rplNosArr[i]; // 보기문항 번호
				var qText = rplContentArr[i]; // 보기문항

				html += "            <li class='item'>";
				if(qstTpCd == "10"){
					html += "            <input id='voteAnswer"+qstNo+qNo+"' type='checkbox' name='voteAnswer"+qstNo+"' value='"+qText+"' data-rplNo='"+qNo+"'>";
				}else if(qstTpCd == "20"){
					html += "            <input id='voteAnswer"+qstNo+qNo+"' type='radio' name='voteAnswer"+qstNo+"' value='"+qText+"' data-rplNo='"+qNo+"'>";
				}
				html += "                <label for='voteAnswer"+qstNo+qNo+"'>"+qText+"</label>";
				html += "            </li>";
			}
			html += "        </ul>";
		}

		html += "    </div>";

		//정답확인란
		html += "	 <div style='width: 100%; display: inline-block;margin-top:20px'>";
		html += "	     <div class='error-msg answer-msg' id='voteAnswer"+qstNo+"Err' style='display:inline-block;vertical-align:middle;margin-left:8px;padding-top:0'>";
		html += "	       <p>입력해주세요.</p>  ";
		html += "	     </div>    ";
		html += "	 </div>	";
		html += "</div>";
	});
	$(".voteQstList").append(html);

	$(".error-msg").hide();
	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}
}

// 공통부분 외에는 우선 hide 처리 후 각 구분코드에 맞게 show
function setLayoutShowHide(eventGbCd){
	$(".eventGbCd50").hide();
	$(".eventGbCd60").hide();
	$(".eventGbCd70").hide();
	$(".eventGbCd80").hide();
	$(".titleNo").hide();

	$("#eventSaveBtn").text("이벤트 응모");
	$("#popTitle").text("응모자 정보");
	$("#evtHeader h2").text("응모 하기");

	if(eventGbCd == "40" || eventGbCd == "50"){
		$("#popTitle").val("");
		$(".eventGbCd50").show();
	}else if(eventGbCd == "60"){
		$("#popTitle").val("");
		$(".eventGbCd60").show();
	}else if(eventGbCd == "70"){
		$("#eventSaveBtn").text("투표하기");
		$("#popTitle").text("투표자 정보");
		$("#evtHeader h2").text("투표 하기");
		$(".eventGbCd70").show();
	}else if(eventGbCd == "80"){
		$(".titleNo").show();
		$(".eventGbCd80").show();

		if (fanclassFlag) { //팬클래스 이벤트 일때
			$("#popTitle").text("예약자 정보");
		} else {
			$("#popTitle").text(entryEvent.ttl+" 매장상담예약 이벤트 신청정보");
		}

		$(".btn-box").hide();
	}

	$("#chk-enter-all").prop("checked", false);
	$("#inpEnterName").focus();
}

//각 이벤트 HTML 저장 후 순서에 맞게 필드에 show
function setLayoutShowHideRenewal(evtGbFlds){
	var html = '';
	var eventGbCdHtml50 = '';		//시리얼번호 체크 이벤트 HTML
	var eventGbCdHtml60 = '';		//퀴즈 이벤트 HTML
	var eventGbCdHtml70 = '';		//투표 이벤트 HTML
	var eventGbCdHtml80 = '';		//매장상담 이벤트 HTML

	$(".eventGbCd80").hide();

	//시리얼번호 체크 이벤트 HTML
	eventGbCdHtml50 += '<div class="inp-box goodsSelect eventGbCd50">';
	eventGbCdHtml50 += '		<label for="chk-goods-1" class="lb-line lb-top">제품 선택</label>';
	eventGbCdHtml50 += '		<div>';
	eventGbCdHtml50 += '			<ul class="chk-list-box chk-form mo-col1" id="goodsUl">';
	eventGbCdHtml50 += '			</ul>';
	eventGbCdHtml50 += '			<div class="error-msg" id="chk-goods-err">';
	eventGbCdHtml50 += '				<p>제품을 선택해 주세요.</p>';
	eventGbCdHtml50 += '			</div>';
	eventGbCdHtml50 += '		</div>';
	eventGbCdHtml50 += '	</div>';
	eventGbCdHtml50 += '<div class="inp-box goodsSelect eventGbCd50">';
	eventGbCdHtml50 += '		<p class="label-box">';
	eventGbCdHtml50 += '			<label for="inpEnterSerialNum" class="lb-line">제품 시리얼 <br>넘버</label>';
	eventGbCdHtml50 += '			<i class="btn-tooltop02" data-tooltip="serialno-usetip"><span>툴팁보기(레이어열림)</span></i>';
	eventGbCdHtml50 += '		</p>';
	eventGbCdHtml50 += '		<div>';
	eventGbCdHtml50 += '			<div class="inquiry-con">';
	eventGbCdHtml50 += '				<textarea id="inpEnterSerialNum" name="inpEnterSerialNum" class="inp-line pop-tArea" placeholder="제품 시리얼 넘버 확인 후 입력해 주세요." maxlength="500"></textarea>';
	eventGbCdHtml50 += '				<span class="txt-count serial-count"><em class="strong">0</em> / 500자</span>';
	eventGbCdHtml50 += '			</div>';
	eventGbCdHtml50 += '			<div class="serial-box">';
	eventGbCdHtml50 += '				<p class="essential">* 제품의 시리얼 넘버를 입력하신 후 [확인하기] 버튼을 눌러주세요.</p>';
	eventGbCdHtml50 += '				<button type="button" class="btn btn-s btn-type1" id="chkSerialNoBtn">확인하기</button>';
	eventGbCdHtml50 += '			</div>';
	eventGbCdHtml50 += '			<div class="error-msg" id="inpEnterSerialNumErr">';
	eventGbCdHtml50 += '				<p>시리얼 넘버를 입력 후 확인해 주세요.</p>';
	eventGbCdHtml50 += '			</div>';
	eventGbCdHtml50 += '		</div>';
	eventGbCdHtml50 += '</div>';


	//퀴즈 이벤트 이벤트 HTML
	eventGbCdHtml60 += '<div class="survey-box qstList eventGbCd60">';
	eventGbCdHtml60 += '</div>';


	//투표 이벤트 이벤트 HTML
	eventGbCdHtml70 += '<div class="survey-box voteQstList eventGbCd70">';
	eventGbCdHtml70 += '		<p><strong><span id="evtNm"></span></strong> 투표에 참여해주셔서 감사합니다.</p>';
	eventGbCdHtml70 += '		<p>투표 이벤트 추첨을 위해 아래 정보를 작성해주세요.</p>';
	eventGbCdHtml70 += '		<p class="txt-major">* 투표하기는 1회만 가능합니다.</p>';
	eventGbCdHtml70 += '		<p class="txt-general eventGbCd70">* 잘못된 정보 입력 시 투표에 제한이 있을 수 있으며, 경품 당첨이 취소됩니다.</p>';
	eventGbCdHtml70 += '</div>';


	//매장상담 이벤트 이벤트 HTML
	eventGbCdHtml80 += '<div class="user-info-box secure-pop-form user-form eventGbCd80">';
	eventGbCdHtml80 += '		<div class="secure-pop-tit bottom-line"><span class="titleNo">02. </span>매장선택</div>';
	eventGbCdHtml80 += '    <p class="txt-general">매장 상담 가능한 매장 및 매장상담 희망일을 선택하세요.</p>';
	eventGbCdHtml80 += '    <div class="secure-pop">';
	eventGbCdHtml80 += '        <div class="inp-box">';
	eventGbCdHtml80 += '            <label for="inpCounselName" class="lb-line">시/도 선택</label>';
	eventGbCdHtml80 += '            <div>';
	eventGbCdHtml80 += '                <div>';
	eventGbCdHtml80 += '                    <div class="select-box">';
	eventGbCdHtml80 += '                        <div id="dropAge" class="wrap-droplist">';
	eventGbCdHtml80 += '                            <button class="droplist-button selected" aria-haspopup="listbox" aria-labelledby="dropAreaBtn" id="dropAreaBtn">서울</button>';
	eventGbCdHtml80 += '                            <ul class="droplist" id="dropSiDo" tabindex="-1" role="listbox" aria-labelledby="dropAreaBtn" aria-activedescendant="dropArea1-1">';
	eventGbCdHtml80 += '                            </ul>';
	eventGbCdHtml80 += '                        </div>';
	eventGbCdHtml80 += '                    </div>';
	eventGbCdHtml80 += '                </div>';
	eventGbCdHtml80 += '            </div>';
	eventGbCdHtml80 += '        </div>';
	eventGbCdHtml80 += '        <div class="inp-box">';
	eventGbCdHtml80 += '           	<label for="inpCounselCall" class="lb-line">시/군/구 선택</label>';
	eventGbCdHtml80 += '				<div>';
	eventGbCdHtml80 += '                <div class="select-box">';
	eventGbCdHtml80 += '                    <div id="dropAge" class="wrap-droplist">';
	eventGbCdHtml80 += '                        <button class="droplist-button selected" aria-haspopup="listbox" aria-labelledby="dropAreaBtn2" id="dropAreaBtn2">강남구</button>';
	eventGbCdHtml80 += '                        <ul class="droplist" id="dropSiGunGu" tabindex="-1" role="listbox" aria-labelledby="dropAreaBtn2" aria-activedescendant="dropArea2-1">';
	eventGbCdHtml80 += '                        </ul>';
	eventGbCdHtml80 += '                    </div>';
	eventGbCdHtml80 += '                </div>';
	eventGbCdHtml80 += '            </div>';
	eventGbCdHtml80 += '        </div>';
	eventGbCdHtml80 += '        <ul class="chk-form style-btn store-select-list">';
	eventGbCdHtml80 += '        </ul>';
	eventGbCdHtml80 += '		<div class="error-msg" id="radio-store1Err" style="text-align: center;">';
	eventGbCdHtml80 += '		    <p>매장을 선택하세요</p>';
	eventGbCdHtml80 += '		</div>';
	eventGbCdHtml80 += '        <div class="store-detail-info">';
	eventGbCdHtml80 += '            <div class="store-detail">';
	eventGbCdHtml80 += '                <p class="store-name"></p>';
	eventGbCdHtml80 += '                <dl>';
	eventGbCdHtml80 += '                    <dt>주소</dt>';
	eventGbCdHtml80 += '                    <dd id="storeAddr"></dd>';
	eventGbCdHtml80 += '                </dl>';
	eventGbCdHtml80 += '                <dl>';
	eventGbCdHtml80 += '                    <dt>전화번호</dt>';
	eventGbCdHtml80 += '                    <dd id="storeTel"></dd>';
	eventGbCdHtml80 += '                </dl>';
	eventGbCdHtml80 += '                <dl>';
	eventGbCdHtml80 += '                    <dt>영업시간</dt>';
	eventGbCdHtml80 += '                    <dd id="storeOpenTime"></dd>';
	eventGbCdHtml80 += '                </dl>';
	eventGbCdHtml80 += '                <dl class="dl-parking">';
	eventGbCdHtml80 += '                    <dt>주차공간</dt>';
	eventGbCdHtml80 += '                    <dd id="storeParkingInfo"></dd>';
	eventGbCdHtml80 += '                </dl>';
	eventGbCdHtml80 += '                <p class="btn-more-box"><a href="#" class="link" id="microSiteDetailView">상세보기 ></a></p>';
	eventGbCdHtml80 += '            </div>';
	eventGbCdHtml80 += '            <div class="store-detail-mapbox" id="map">';
	eventGbCdHtml80 += '                <!-- 맵 영역 -->';
	eventGbCdHtml80 += '            </div>';
	eventGbCdHtml80 += '            <div class="hope-visit-date">';
	eventGbCdHtml80 += '                <p class="date-title">방문 희망 일자 선택</p>';
	eventGbCdHtml80 += '                <dl>';
	eventGbCdHtml80 += '                    <dt>날짜선택</dt>';
	eventGbCdHtml80 += '                    <dd>';
	eventGbCdHtml80 += '                        <input type="text" id="visitDate" name="visitDate" placeholder="방문 희망 일자를 선택해 주세요." class="inp-line inp-calendar">';
	eventGbCdHtml80 += '                        <p class="txt">* 삼성스토어 매장 마감시간은 20시 30분입니다.</p>';
	eventGbCdHtml80 += '                    </dd>';
	eventGbCdHtml80 += '                </dl>';
	eventGbCdHtml80 += '            </div>';
	eventGbCdHtml80 += '        </div>';
	eventGbCdHtml80 += '    </div>';
	eventGbCdHtml80 += '</div>';

//매장상담시 응모버튼
//	eventGbCdHtml80 += '<div class="user-info-box secure-pop-form terms-form  eventGbCd80">';
//	eventGbCdHtml80 += '		<div class="secure-pop-tit bottom-line">';
//	eventGbCdHtml80 += '			<span class="titleNo">04. </span>신청 정보 확인';
//	eventGbCdHtml80 += '		</div>';
//	eventGbCdHtml80 += '		<p class="txt-general">방문 희망일자와 매장 정보를 확인 후 신청을 완료하세요.</p>';
//	eventGbCdHtml80 += '		<div class="final-check-box">';
//	eventGbCdHtml80 += '			<p class="txt1 storeRsltMsg"><span class="txt-major selectedResultMsg"></span>으로<br><span class="selectedResultMsg2">매장방문을 신청합니다.</span></p>';
//	eventGbCdHtml80 += '			<p class="txt2">※ 신청 시 카카오 알림톡으로 &lt;“<span id="ftEvtNm"></span>” 매장상담예약&gt;<br> 초대장이 발송됩니다.</p>';
//	eventGbCdHtml80 += '			<p class="btn-area"><button type="button" class="btn btn-d btn-type2" id="reservationBtn">신청하기</button></p>';
//	eventGbCdHtml80 += '		</div>';
//	eventGbCdHtml80 += '</div>';


	for(var idx=0; idx<evtGbFlds.length; idx++){
		if(evtGbFlds[idx] == "02"){	//시리얼번호 체크
			html += eventGbCdHtml50;
		} else if(evtGbFlds[idx] == "03") {	//퀴즈
			html += eventGbCdHtml60;
		} else if(evtGbFlds[idx] == "04") {	//투표
			html += eventGbCdHtml70;
		} else if(evtGbFlds[idx] == "05") {	//매장상담
			html += eventGbCdHtml80;
		}
	}

	$("#eventGbField").empty();
	$("#eventGbField").append(html);

	$(".titleNo").hide();
	
//	$("#eventSaveBtn").text("이벤트 응모");
//	$("#popTitle").text("응모자 정보");
	$("#evtHeader h2").text("응모 하기");

	if(evtGbFlds.indexOf("05") > -1){
		$(".titleNo").show();
		$(".eventGbCd80").show();
		if (fanclassFlag) { //팬클래스 이벤트 일때
			$("#popTitle").text("예약자 정보");
		}

		if(eventInfo.plazas){
			$("#eventBtn_Area_div").hide();
		}else{
			$("#eventBtn_Area_div").show();
		}
	}

	$("#chk-enter-all").prop("checked", false);
	$("#inpEnterName").focus();
}

// 공통 layout 처리
function setCommLayout(entryEvent, collectItems, addFields){

	// 1. 상단 이미지 모바일 / pc 체크
	var imgUrl="";
	var filter = "win16|win32|win64|mac|macintel";
	if ( navigator.platform ) {
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
			imgUrl = "//"+entryEvent.moImgPath;
		} else {
			imgUrl = "//"+entryEvent.pcImgPath;
		}
	}

	if(imgUrl == ""){
		$("#evtHeader").removeClass("text-hide");
	}else{
		$("#evtImg").attr("src", imgUrl);
		$("#evtHeader").addClass("text-hide");
	}

	// 2. 이름 : 로그인 필수 여부에 따라 성명 셋팅 및 readonly 처리
	if(sessionMbr == 0 || sessionMbr == null){
		$("#inpEnterName").removeAttr("readonly");
    }

    if(sessionMbr != 0 && sessionMbr != null){
    	$("#inpEnterName").attr("readonly",true);
		$("#inpEnterName").val(eventInfo.loginUserMbrNm);
		$("#inpEnterCall").val(eventInfo.loginUserMobile);
		$("#inpEnterEmail").val(eventInfo.loginUserEmail);
		$("#inpEnterSchool").val(eventInfo.sculNm);
		$("#inpCounselMembership").val(membershipNo);
 	}

	// 3. 수집항목 show/hide 처리 : 이름, 연락처, 이메일, 주소, sns, 멥버십
	$(".entryCollect").hide();
	$.each(collectItems, function(idx, val){
		var collectItemCd = val.collectItemCd;
		$(".entryCollect"+collectItemCd).show();
	});

	// 3-1. 멤버십 번호가 없는 경우는 보이지 않는다.
	// 2020-12-24 멤버십 번호가 없어도 나타난다.
	if(membershipNo == "" || membershipNo == null ){
//		$(".entryCollect60").hide();
	}

	// 학교이름 show처리
	if(stPath.indexOf("/event/galaxycampus/")  -1){
		$(".entryCollect70").show();
	}

	// 4. 추가필드 처리
	$("#addFieldArea").empty();

	var addFieldHtml="";
	$.each(addFields, function(idx, obj){
		addFieldHtml += createAddFieldHtml(obj);
	});

	$("#addFieldArea").append(addFieldHtml);

}

/* 추가 필드 생성 */
function createAddFieldHtml(obj){

	let fldTpCd = obj.fldTpCd;
	let fldNm = obj.fldNm;
	let fldVal = obj.fldVal;
	let fldNo = obj.fldNo;
	let fldDscrt = obj.fldDscrt;
	let html = "";

	const divInpBox = "<div class='inp-box'>";
	let labelFor =    "    <label for='addField"+fldNo+"' class='lb-line'>"+fldNm+"</label>";
	let comment = "		 <p class='essential'>"+fldDscrt+"</p>";

	if(fldTpCd == "10"){
		// 한줄입력
		html += divInpBox;
        html += labelFor;
        html += "    <div>";
        html += "        <input type='text' name='addField"+fldNo+"' id='addField"+fldNo+"' class='inp-line' value='' data-fldtpcd='"+fldTpCd+"'>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
        html += "        	<p>입력해 주세요.</p>";
        html += "        </div>";
        html += "    </div>";
        html += "</div>";
	}else if(fldTpCd == "20"){
		// 여러줄입력
		html += divInpBox;
        html += labelFor;
        html += "    <div>";
        html += "        <div class='inquiry-con'>";
        html += "            <textarea name='addField"+fldNo+"' id='addField"+fldNo+"' class='inp-line pop-tArea textAreaLen' placeholder='입력해 주세요.' maxlength='1000' data-fldtpcd='"+fldTpCd+"'></textarea>";
        html += '		     <span class="txt-count textarea-count"><em class="strong">0</em> / 1000자</span>';
        html += "        </div>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
        html += "        	<p>입력해 주세요.</p>";
        html += "        </div>";
        html += "    </div>";
        html += "</div>	";
	}else if(fldTpCd == "30"){
		// 라디오버튼
		html += divInpBox;
        html += labelFor;
        html += "    <div>";
        html += "        <ul class='chk-list-box chk-form mo-col2' id='addField"+fldNo+"' data-fldtpcd='"+fldTpCd+"'>";

        var fldValArrRd = fldVal.split(",");
		for(var i=0; i<fldValArrRd.length; i++){
			var lb = fldValArrRd[i];
			html += "            <li class='item'>";
            html += "                <input id='addField"+fldNo+(i+1)+"' type='radio' name='addField"+fldNo+"' value='"+lb+"'>";
            html += "                <label for='addField"+fldNo+(i+1)+"'>"+lb+"</label>";
            html += "            </li>";
		}

        html += "        </ul>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
        html += "        	<p>선택해 주세요.</p>";
        html += "        </div>";
        html += "    </div>";
        html += "</div>";
	}else if(fldTpCd == "40"){
		// 체크박스
		html += divInpBox;
        html += labelFor;
        html += "    <div>";
        html += "        <ul class='chk-list-box chk-form mo-col2' id='addField"+fldNo+"' data-fldtpcd='"+fldTpCd+"'>";

        var fldValArrChk = fldVal.split(",");
		for(var j=0; j<fldValArrChk.length; j++){
			var lb2 = fldValArrChk[j];
			html += "            <li class='item'>";
            html += "                <input id='addField"+fldNo+(j+1)+"' type='checkbox' name='addField"+fldNo+"' value='"+lb2+"'>";
            html += "                <label for='addField"+fldNo+(j+1)+"'>"+lb2+"</label>";
            html += "            </li>";
		}

        html += "        </ul>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
        html += "        	<p>선택해 주세요.</p>";
        html += "        </div>";
        html += "    </div>";
        html += "</div>";
	}else if(fldTpCd == "50"){
		// 셀렉트박스
		html += divInpBox;
        html += "    <label for='addField"+fldNo+"Btn' class='lb-line'>"+fldNm+"</label>";
        html += "    <div>";
        html += "        <div class='select-box'>";
        html += "            <div id='dropAge' class='wrap-droplist'>";
        html += "                <button type='button' class='droplist-button' aria-haspopup='listbox' aria-labelledby='addField"+fldNo+"Btn' id='addField"+fldNo+"Btn'>선택해 주세요.</button>";
        html += "                <ul class='droplist' tabindex='-1' role='listbox' aria-labelledby='addField"+fldNo+"Btn' aria-activedescendant='addField"+fldNo+"1' id='addField"+fldNo+"' data-fldtpcd='"+fldTpCd+"'>";

		var fldValArrSel = fldVal.split(",");
		for(var k=0; k<fldValArrSel.length; k++){
			var lb3 = fldValArrSel[k];
			html += "                <li id='addField"+fldNo+(k+1)+"' role='option' class='droplist-item'>"+lb3+"</li>";
		}

        html += "                </ul>";
        html += "            </div>";
        html += "        </div>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
        html += "        	<p>선택해 주세요.</p>";
        html += "        </div>";
        html += "    </div>";
        html += "</div>";
	}else if(fldTpCd == "60"){
		// 첨부파일
		html += divInpBox;
        html += labelFor;
        html += "    <div>";
        html += "        <div class='box mail'>";
        html += "            <input type='text' id='addField"+fldNo+"' class='inp-line' title='파일첨부' readOnly='readOnly'>";
        html += "            <input type='hidden' id='phyPath"+fldNo+"' name='phyPath"+fldNo+"' />";
        html += "            <button type='button' class='btn btn-s btn-type1' id='upldBtn"+fldNo+"60' onclick=\"fnSearchFile('"+fldNo+"')\">찾아보기</button>";
        html += "        </div>";
        html += "        <p class='essential'>* JPG, PNG 파일만 첨부 가능합니다.</p>";
        html += "        <ul class='addfile-list file-list"+fldNo+"'></ul>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
        html += "            <p>첨부된 파일이 없습니다.</p>";
        html += "    	</div>";
        html += " 		<input type='hidden' name='fileExe"+fldNo+"'  id='fileExe"+fldNo+"'/>";
		html += " 		<input type='hidden' name='fileName"+fldNo+"' id='fileName"+fldNo+"'/>";
		html += " 		<input type='hidden' name='filePath"+fldNo+"' id='filePath"+fldNo+"'/>";
		html += " 		<input type='hidden' name='fileSize"+fldNo+"' id='fileSize"+fldNo+"'/>";
		html += " 		<input type='hidden' name='fileType"+fldNo+"' id='fileType"+fldNo+"'/>";
        html += "    </div>";
        html += "</div>";


	}else if(fldTpCd == "70"){
		// 이미지삽입
		fldVal = "//"+fldVal;
		html += "<div>";
        html += "    <label for='inpEnterFileImg' class='lb-line'>"+fldNm+"</label>";
        html += "    <div class=\"event-img\">";
        html += "	 	<img src='"+fldVal+"' style='width:100%; height:250px;'>";
        html += "    </div>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "</div>";
	}else if(fldTpCd == "80"){

		var html80="";

		// 안내문구
		/*html += divInpBox;
        html += "    <label for='addField"+fldTpCd+"' class='lb-line'>"+fldNm+"</label>";
        html += "    <div>";
        html += "        <div class='inquiry-con'>";
        html += "            <p>"+fldVal+"</p>";
        html += "        </div>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "    </div>";
        html += "</div>	";*/

		html80 = "<div class='inp-txt-box'>";
		if(fldNm != null){
			html80 += "    <label for='addField"+fldTpCd+"' class='lb-line'>"+fldNm+"</label>";
		}
		html80 += "    <div class='pre-box'>";
		html80 += "            <pre>"+fldVal+"</pre>";

		if(fldDscrt != null){
			html80 += "            <pre>"+fldDscrt+"</pre>";
        }
		html80 += "    </div>";
		html80 += "</div>";

		html = html80;
	} else if(fldTpCd == "90"){
		if(obj.eventNo == "30307"){
			// 리뷰
			html += "<div>";
			html += "    <div>";
			html += labelFor;
			html += "        <div class='hmf_textarea_wrap'>";
			html += "			<span class='bspk-count'><strong id='counter'>0</strong> 자 / 5000</span>";
			html += "        </div>";
			html += "        <div class='inquiry-con'>";
			html += "            <textarea name='bspk-txt-fld' id='addField"+fldNo+"' class='inp-line pop-tArea' placeholder='상품평은 최소 10자 이상, 5000자 까지 입력 가능합니다.' maxlength='5000' data-fldtpcd='"+fldTpCd+"'></textarea>";
			html += "        </div>";
			if(fldDscrt != null){
				html += comment;
			}
			html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
			html += "        	<p>입력해 주세요.</p>";
			html += "        </div>";
			html += "    </div>";
			html += "</div>	";

			html += "<div>";
			html += "	<font size='2'>* 파일 용량은 최대 50MB까지 업로드 가능합니다.</font><br>";
			html += "	<font size='2'>* 이미지 규격 사이즈는 최대한 맞춰 넣어주시기 바랍니다.</font><br>";
			html += "	<font size='2'>* 해당 모델과 무관한 내용이나 동일 문자의 반복, 욕설 등 부적합한 내용은 삭제될 수 있습니다.</font><br>";
			html += "	<font size='2'>* 등록한 사진과 모델명이 불일치하거나 무관할 경우, 게시된 내용은 삭제될 수 있습니다.</font>";
			html += "</div>";

		} else {
			// 댓글
			html += divInpBox;
			html += labelFor;
			html += "    <div>";
			html += "        <div class='inquiry-con'>";
			html += "            <textarea name='addField"+fldNo+"' id='addField"+fldNo+"' class='inp-line pop-tArea' placeholder='입력해 주세요.' maxlength='500' data-fldtpcd='"+fldTpCd+"'></textarea>";
			html += "        </div>";
			if(fldDscrt != null){
				html += comment;
			}
			html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
			html += "        	<p>입력해 주세요.</p>";
			html += "        </div>";
			html += "    </div>";
			html += "</div>	";
		}
	} else if(fldTpCd == "100"){
		//모델명 체크
		html += divInpBox;
        html += labelFor;
        html += "    <div>";
        html += "        <div class='box mail'>";
        html += "            <input type='text' name='inputMdlCode' id='addField"+fldNo+"' class='inp-line' value='' data-fldtpcd='"+fldTpCd+"'>";
        html += "            <input type='hidden' id='bspkMdChk' value=''/>";
        html += "            <button type='button' id='bspkMdBtn' class='btn btn-s btn-type1' onclick=\"bspkModelChk("+fldNo+")\">확인</button>";
        html += "        </div>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
        html += "        	<p>모델명을 입력해 주세요.</p>";
        html += "        </div>";
        html += "    </div>";
        html += "</div>";
	} else if(fldTpCd == "110"){
		// 평점 입력
		html += divInpBox;
		html += labelFor;
		html += "    <div class='gradechoice'>";
		html += "        <div class='review-starating'>";
		for(var i=1; i<=5; i++){
			if(i==1){
				html += "<button type='button' value=" + i + " id='addField"+fldNo+"' data-fldtpcd='"+fldTpCd+"' onclick=\"bspkStarating("+i+", "+fldNo+", "+fldTpCd+")\"><span class='star-yellow' >별점</span></button>";
			} else {
				html += "<button type='button' value=" + i + " id='addField"+fldNo+"' data-fldtpcd='"+fldTpCd+"' onclick=\"bspkStarating("+i+", "+fldNo+", "+fldTpCd+")\"><span class='star-yellow'  aria-hidden='true'>별점</span></button>";
			}
		}
		html += "        <span class='starating-score'>";
		html += "            <input type='hidden' id='estmScore' name='estmScore' value='5'/>";
		html += "            <strong>5</strong>/5";
		html += "        </span>";
		html += "    </div>";
		html += "    </div>";
		html += "</div>";
	} else if(fldTpCd == "120"){
		//다중첨부파일
		html += divInpBox;
		html += "    <div class='attach-file'>";
		html += "        <div class='addMedia' id='attach-file-btn'>";
		html += "            <label class='inp-file' for='attachFile' tabindex='0'>";
		html += "                <em class='blind'>파일첨부하기</em>";
		html += "                <button type='button' id='attachFile' style='width:100%; background:none;' onclick=\"multiFileUpload.file(multiFileUpload.afterFileSelect)\"><span>첨부</span></button>";
		html += "                <input type='hidden' id='addField"+fldNo+"' data-fldtpcd='"+fldTpCd+"' value=''/>";
		html += "            </label>";
		html += "            <p>(<em>0</em>/10)</p>";
		html += "        </div>";
		html += "        <ol>";
		html += "        </ol>";
		html += "        <p class='mediaCount'>(<em>0</em>/10)</p>";
		html += "        <div class='error-msg' id='addField"+fldNo+"Err'>";
		html += "            <p>첨부파일을 등록해 주세요.</p>";
		html += "        </div>";
		html += "    </div>";
		html += "</div>";
	} else if(fldTpCd == "130"){
		// 달력
		html += divInpBox;
        html += labelFor;
        html += "<div>";
        html += "        <input type='text' name='addField"+fldNo+"' id='addField"+fldNo+"' class='inp-line inp-calendar' placeholder='날짜를 선택해주세요' readonly='readonly' data-fldtpcd='"+fldTpCd+"'>";
        if(fldDscrt != null){
        	html += comment;
        }
        html += "     	<div class='error-msg' id='addField"+fldNo+"Err'>";
        html += "       	<p>입력해 주세요.</p>";
        html += "     	</div>";
        html += "    </div>";
        html += "</div>	";
	}

    return html;

}


/*
	BESPOKE 모델명 체크
*/
function bspkModelChk(fldNo){
	var mdlCode = $("#addField"+fldNo).val();
	var option = {
		url : stPath+"event/eventEntryMdlCodeChk"
		, data : {
		mdlCode : mdlCode
		, eventNo : pblcEvtNo
		}
		, done : function(data){
			if(data === 1){
				let id;
				let errorMsgId;
				//$('input[name=inputMdlCode]').attr("readonly", true);
				$("#bspkMdChk").val("checked");
				$.each(addFields, function(idx, obj){
					if(obj.fldTpCd == "100"){
						id = "addField"+obj.fldNo;
						errorMsgId = "#"+id+"Err";
					}
				});
				makeAlert("모델명 입력이 완료되었습니다.");
				$(errorMsgId).hide();
				$("#bspkMdBtn").hide();
			} else {
				makeAlert("모델명을 다시 확인해 주세요.");
			}
		}
	};
	ajax.call(option);
}

/*
	BESPOKE 자랑하기 평점 선택
*/
function bspkStarating(idx, fldNo, fldTpCd){
	var scoreHtml = "";
	$(".gradechoice>.review-starating").children().remove();

	for(var i = 1; i <= 5; i++){
		var ariaHidden = "";
		if(i > 1){
			ariaHidden = "aria-hidden='true'";
		}

		if(idx >= i){
			scoreHtml += '<button type="button" value="'+i+'" id="addField'+fldNo+'" data-fldtpcd="'+fldTpCd+'" onclick="bspkStarating('+i+', '+fldNo+', '+fldTpCd+')"><span class="star-yellow"'+ ariaHidden  +'>별점</span></button>';
		}else{
			scoreHtml += '<button type="button" value="'+i+'" id="addField'+fldNo+'" data-fldtpcd="'+fldTpCd+'" onclick="bspkStarating('+i+', '+fldNo+', '+fldTpCd+')"><span class="star-gray"'+ ariaHidden  +'>별점</span></button>';
		}
	}

	scoreHtml += '<input type="hidden" id="estmScore" name="estmScore" value="'+idx+'"/>';
	scoreHtml += '<span class="starating-score"><strong> ';
	scoreHtml += idx;
	scoreHtml += '</strong>/5</span>';
	$(".gradechoice>.review-starating").append(scoreHtml);
	$("button[value='"+idx+"']").focus();
}

/*
	다중파일 첨부
*/
var multiFileCnt = 0;										//첨부된 파일 수
var multiFileUpload = {									//다중 파일 업로드
	file: function (callback, mob) {
		multiFileUpload.callBack = callback;
		multiFileUpload.fileForm("eventComment", mob);
	},
	fileForm: function (type, mob) {
		if(multiFileCnt >= 10){
			var alertOverCnt = {
				title : ""
				,content : "더 이상 첨부가 불가능합니다."
				,callback : ""
				,btnText : "확인"
			};
			commonAlert(alertOverCnt);
			openLayer('commonAlert');
			return false;
		}
		$("#multiFileUploadForm").remove();
		var html = [];
		html.push("<form name=\"multiFileUploadForm\" id=\"multiFileUploadForm\" method=\"post\" enctype=\"multipart/form-data\">");
		html.push("	<div style=\"display:none;\">");
		if(mob == undefined){
			html.push("		<input type=\"file\" name=\"uploadMultiFile\" id=\"eventUploaddMultiFile\" accept=\".jpg, .jpeg, .png, .gif, .mp4\" />");
		} else if(mob == "camera"){
			html.push("		<input type=\"file\" name=\"uploadMultiFile\" id=\"eventUploaddMultiFile\" accept=\"image/*\" />");
		} else if(mob == "camcorder"){
			html.push("		<input type=\"file\" name=\"uploadMultiFile\" id=\"eventUploaddMultiFile\" accept=\"video/*\" />");
		}
		html.push("		<input type=\"hidden\" name=\"uploadType\" value=\"" + type + "\">");
		html.push("	</div>");
		html.push("</form>");

		$("body").append(html.join(''));
		$("#eventUploaddMultiFile").click();
	},
	afterFileSelect: function(file, exCode){
		var fldNo = "";
		var errorMsgId = "";

		$.each(addFields, function(idx, obj){
			if(obj.fldTpCd == "120"){
				fldNo = obj.fldNo;
				errorMsgId = "#addField" + fldNo + "Err";
			}
		});
		$("#addField"+fldNo).val("attached");
		$(errorMsgId).hide();

		if(file.exMsg != null){
			var alertExMsg = {
				title : ""
				,content : file.exMsg
				,callback : ""
				,btnText : "확인"
			};
			commonAlert(alertExMsg);
			openLayer('commonAlert');
			return;
		}

		var ext = file.file.fileName.split('.').pop().toLowerCase();
		var attachLength = $(".attach-file>ol>li>a").length;

		for(var i = 0; i < attachLength; i++){
			if(file.file.fileName === $(".attach-file>ol>li>a")[i].title){
				var alertSameFile = {
					title : ""
					,content : "동일한 파일이 등록되어 있습니다."
					,callback : ""
					,btnText : "확인"
				};
				commonAlert(alertSameFile);
				openLayer('commonAlert');
				return;
			}
		}

		var html = '';

		if(ext !== "mp4"){
			html += '<li id="'+multiFileCnt+'">';
//			html += '<button type="button" class="delete" name="delFileBtn" style="right: 0.5455vw; top: 0.4545vw; width: 1.4545vw; height: 1.4545vw; background: url(/sec/static/evt/_images/common/icon-delete-circle3.svg) no-repeat;"><span class="blind">삭제</span></button>';
			html += '<button type="button" class="delete" name="delFileBtn"><span class="blind">삭제</span></button>';
			html += '<a href="javascript:;" title="'+file.file.fileName+'">';
			html += '<input type="hidden" name="multiImgPath" value="'+file.file.filePath+'"/>';
			html += '<img src="' + stPath + 'xhr/common/imageView?filePath='+file.file.filePath+'" alt="'+file.file.fileName+'">';
			html += '</a></li>';
		}else{
			html += '<li id="'+multiFileCnt+'">';
//			html += '<button type="button" class="delete" name="delFileBtn" style="right: 0.5455vw; top: 0.4545vw; width: 1.4545vw; height: 1.4545vw; background: url(/sec/static/evt/_images/common/icon-delete-circle3.svg) no-repeat;"><span class="blind">삭제</span></button>';
			html += '<button type="button" class="delete" name="delFileBtn"><span class="blind">삭제</span></button>';
			html += '<a href="javascript:;" title="'+file.file.fileName+'">';
			html += '<input type="hidden" name="multiImgPath" value="'+file.file.filePath+'"/>';
			html += '<video muted="muted" loop="loop">';
			html += '<source src="' + stPath + 'xhr/common/imageView?filePath='+file.file.filePath+'" type="video/mp4">';
			html += 'Your browser does not support the video tag.';
			html += '</video>';
			html += '</a></li>';
		}
		$(".attach-file>ol").append(html);
		multiFileCnt++;
		$("#attach-file-btn>p").remove();
		$("#attach-file-btn").append("<p>(<em>"+multiFileCnt+"</em>/10)</p>");
		$(".mediaCount").html("<p>(<em>"+multiFileCnt+"</em>/10)</p>");
		if(multiFileCnt == 10){
			$("#attach-file-btn").hide();
		}
	}
}

/* 첨부파일 추가 */
$(document).on("change", "#eventUploaddMultiFile", function () {
	waiting.start();
	$('#multiFileUploadForm').ajaxSubmit({
		url: stPath + 'xhr/common/fileUploadResult',
		dataType: 'json',
		success: function (result) {
			$("#multiFileUploadForm").remove();
			waiting.stop();
			multiFileUpload.callBack(result);
		},
		error: function (xhr, status, error) {
			waiting.stop();
		}
	});
});

$(document).on('click', '.attach-file>ol>li button[name=delFileBtn]', function(){
	$(this).parent().remove();
	multiFileCnt--;
	$("#attach-file-btn>p").remove();
	$("#attach-file-btn").append("<p>(<em>"+multiFileCnt+"</em>/10)</p>");
	$(".mediaCount").html("<p>(<em>"+multiFileCnt+"</em>/10)</p>");
	if(multiFileCnt < 10){
		$("#attach-file-btn").show();
	}
	if(multiFileCnt == 0){
		$.each(addFields, function(idx, obj){
			if(obj.fldTpCd == "120"){
				var fldNo = obj.fldNo;
				$("#addField"+fldNo).val("");
			}
		});
	}

	$('#attachFile').focus();
});

/* 멤버십 페이지 이동 */
function fnGoMembershipPage(){
	window.location.href = stPath+"membership/membershipJoin/";
	$(".evt-pop-close").trigger("click");
}


/*
	시리얼 번호 확인
*/
function fnCheckSerialNo(){
	var goodsVal = $("input[name='chk-goods']:checked").val(); // 선택한 제품 아이디
	var inputValue = $("#inpEnterSerialNum").val(); // 입력한 시리얼번호
	$("#inpEnterSerialNumErr").hide();

	if(goodsVal == undefined || goodsVal == ""){
		makeAlert("제품을 선택하셔야 시리얼 넘버 확인이 가능합니다.");
		return;
	}

	if(inputValue == ""){
		$("#inpEnterSerialNumErr").show();
		return;
	}

	let param = {
			serialNo : inputValue
		,	mdlCode : $("input[name='chk-goods']:checked").data("mdlcode") // 모델 코드
		,	goodsId : $("input[name='chk-goods']:checked").val()
		,	eventNo : pblcEvtNo
	};

	let options = {
		url : stPath+"xhr/event/checkSerialNo"
		, data : param
		, type : "GET"
		, done: function (data) {
			var result = data.result;

			$("#serialNumChk").val(result.validate);

			if(result.validate == "Y"){
				$("#serialNum").val(result.serialNo);
				$("#mdlCode").val(result.mdlCode);
			}

			if(result.validate== "Y") {
				makeAlert("제품 시리얼 넘버<br/>확인이 완료되었습니다.");
			} else if(result.validate == "D") {
				makeAlert("이미 사용된 시리얼입니다.");
				$("#serialNumChk").val("N");
			} else {
				makeAlert("제품 시리얼 넘버를 다시<br/>입력해 주세요.");
			}
			if(result === "N"){
				$("#inpEnterSerialNum").select();
			}
		}
	};
	ajax.call(options);

}

/*
특정이벤트에 대해 추가필드[댓글] 조회
*/
function fnGetReplyList(evtNo, so){
	if(evtNo == undefined || evtNo == ""){
		makeAlert("eventNo가 존재하지 않습니다.");
		return;
	}

	stPath = ($("#openPop").data("st-path"));

	let param = {
			eventNo : evtNo
		,	fldTpCd : '90' // 추가필드 - 댓글 유형
		,   page : (so !== undefined ? so.page : 1)
		,   rows : (so !== undefined ? so.rows : 10)
	};

	let options = {
		url : stPath+"xhr/event/getReplyList"
		, data : param
		, type: 'POST'
		, dataType : "html"
		, done: function (data) { //joinName, fldVal, sysRegrNo
			$("#review-list").html(data);

		}
	};

	ajax.call(options);

}


/*
특정이벤트에 대해 추가필드[댓글] 조회
*/
function fnGetCommentList(evtNo){
	if(evtNo == undefined || evtNo == ""){
		makeAlert("eventNo가 존재하지 않습니다.");
		return;
	} else {
		stPath = ($("#openPop").data("st-path"));

		var param = {
				eventNo : evtNo
				, fldTpCd : '90' // 추가필드 - 댓글 유형
			};

		var options = {
			url : stPath+"xhr/event/getCommentList"
			, data : param
			, type: 'POST'
			, dataType : "html"
			, done: function (data) { //joinName, fldVal, sysRegrNo
				$("#review-list").children().remove();
				$("#review-list").html(data);
			}
		};
		ajax.call(options);
	}


	/*if(linkJoinNo == undefined){
		var param = {
			eventNo : evtNo
			, fldTpCd : '90' // 추가필드 - 댓글 유형
		};

		var options = {
			url : stPath+"xhr/event/getCommentList"
			, data : param
			, type: 'POST'
			, dataType : "html"
			, done: function (data) { //joinName, fldVal, sysRegrNo
				$("#review-list").children().remove();
				$("#review-list").html(data);
			}
		};
		ajax.call(options);
	} else {
		var param = {
			eventNo : evtNo
			, fldTpCd : '90' // 추가필드 - 댓글 유형
			, linkJoinNo : linkJoinNo
		};

		var options = {
			url : stPath+"xhr/event/getCommentList"
			, data : param
			, type: 'POST'
			, dataType : "html"
			, done: function (data) { //joinName, fldVal, sysRegrNo
				$("#review-list").children().remove();
				$("#review-list").html(data);

			}
		};

		ajax.call(options);
	}*/

}



/*
	정답확인 qstNo : 문항번호 / qstTbCd : 문항타입
*/
function checkAnswer(qstNo, qstTpCd){

	var rplCnt=0; // 보기문항 갯수
	var answerCnt=0; // 맞힌 갯수

	if(qstTpCd == "30"){
		var inputAnswer = $("input[name=answer"+qstNo+"]").val();
		var answer = $("input[name=answer"+qstNo+"Y]").val();
		if(inputAnswer == answer){
			$("#answer"+qstNo+"Err").hide();
			makeAlert("정답입니다.");
			$("#qstAnswer"+qstNo).val("Y");
		}else{
			$("#answer"+qstNo+"Err").show();
			makeAlert("아쉽게도 오답입니다.<BR>다시 한번 확인해 주세요.");
			$("#qstAnswer"+qstNo).val("N");
		}
	}else{
		$("input[name=answer"+qstNo+"]").each(function(idx){
			var id = $(this).attr("id");
			var answer = $("#"+id+"Y").val();

			if($("#"+id).is(":checked") == true){
				if(answer == "Y"){
					answerCnt++; // 선택한 보기가 정답이 Y인 경우
				}
			}else{
				if(answer != "Y"){
					answerCnt++; // 선택하지 않은 보기가 정답이 N인 경우
				}
			}
			rplCnt++;
		});

		if(rplCnt == answerCnt){
			$("#answer"+qstNo+"Err").hide();
			makeAlert("정답입니다.");
			$("#qstAnswer"+qstNo).val("Y");
		}else{
			$("#answer"+qstNo+"Err").show();
			makeAlert("아쉽게도 오답입니다.<BR>다시 한번 확인해 주세요.");
			$("#qstAnswer"+qstNo).val("N");
		}
	}
}

/*
	우편 번호 찾기 팝업 ===================================================================================
 */
function fnPostLayerPop(){
	var options = {
            oncomplete: function(data) {
            	 //var addr = ''; // 주소 변수
                 var extraAddr = ''; // 참고항목 변수
                 // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                 if(data.userSelectedType === 'R'){
                     // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                     // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                     if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                         extraAddr += data.bname;
                     }
                     // 건물명이 있고, 공동주택일 경우 추가한다.
                     if(data.buildingName !== '' && data.apartment === 'Y'){
                         extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                     }
                     // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                     if(extraAddr !== ''){
                         extraAddr = ' (' + extraAddr + ')';
                     }
                     // 조합된 참고항목을 해당 필드에 넣는다.
                 }
                data.jibunAddress += extraAddr;
                data.roadAddress += extraAddr;

                fnLoadAddrInfo(data);
            },
            width : '100%',
            height : '100%',
            maxSuggestItems : 5
    };
	layerPost.open(options);
};

function fnLoadAddrInfo(addrInfo){
	var html =  "";
	var addr = "";
	if(addrInfo.userSelectedType ==='R'){
		html = '<p>[도로명]</p>';
		html += '<p>'+addrInfo.roadAddress+'</p>';
		addr += "[도로명] "+addrInfo.roadAddress;
	}else{
		html = '<p>[지번명]</p>';
		html += '<p>'+addrInfo.jibunAddress+'</p>';
		addr += "[지번명] "+addrInfo.jibunAddress;
	}

	$("#inpEnterZonecode").val(addrInfo.zonecode);
	$("#inpEnterAddress").val(addr);
	$("#inpEnterAddressDiv").empty().append(html);
	$("#inpEnterAddressDetail").select();
}

// ================================================================================================= 우편번호 END

/*
	이메일형식 체크
*/
function fnEmailCheck(email) {
	var str = email.substring(0,2);
	var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
	// 이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
	if(exptext.test(email) == false) {
		if(str != "10" && str != "82" ){	//핸드폰번호가 메일에 입력된경우는 제외
			return false;
		}
	}
	return true;
}

/*
	모바일번호 체크
*/
function fnMobileCheck(phoneNum) {
	var regExp =/(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;
	if(regExp.test(phoneNum)){
		return true;
	} else {
		return false;
	}
}

function fnUrlCheck(url){
	var regExp = /^(http|https):\/\/[^ "]+$/;
	if(regExp.test(url)) {
		return true;
	}else{
		return false;
	}

}

/*
	국문 25자, 영어 50자 체크
 */
function fnOnLimitInputVal(selector){
	var adrsNm = $(selector).val();
	adrsNm = adrsNm.replace(/[^a-zA-Zㄱ-힣\u119E\u11A20-9\s]/g, "").replace(/\s+/g, " ");
	var totalByte = 0;
	var macLen = 50;
	var len;
	for (var i = 0; i < adrsNm.length; i++) {
		var oneChar = escape(adrsNm.charAt(i));
		if (oneChar.length == 1) {
			totalByte++;
		} else if (oneChar.indexOf("%u") != -1) {
			totalByte += 2;
		} else if (oneChar.indexOf("%") != -1) {
			totalByte++;
		}
		if (totalByte <= macLen) {
			len = i + 1;
		}
	}
	$(selector).val(adrsNm.substring(0, len));
}

/*
   상세주소 특수문자 예외처리
 */
function fnOnLimitInputValAtDtlAddr(selector){
	var dtlAddr = $(selector).val();
	dtlAddr = dtlAddr.replace(/[^a-zA-Zㄱ-힣\u119E\u11A20-9,-/\s]/g, "").replace(/\s+/g, " ");
	$(selector).val(dtlAddr);
}

/* 공통 레이어 알럿 팝업 */
function makeAlert(contentsParam, calback){
	var contentsparam = contentsParam;
	let alertData = {
               content : contentsparam
               ,btnText : '확인'
               ,callback : calback
               };
	commonAlert(alertData);
	openLayer('commonAlert');
}

/* 공통 레이어 알럿 팝업 */
function makeAlert3(contentsParam, calback){
	var contentsparam = contentsParam;
	let alertData = {
               content : contentsparam
               ,btnText : '확인'
               ,callback : calback
               };
	commonAlert3(alertData);
	openLayer('commonAlert');
}

function commonAlert3(data) {
	$("#commonAlert h2").text(data.title);
	$("#commonAlert pre").html(data.content);
	$("#commonAlert a").text(data.btnText);
	if (data.focusId) {
		$("#commonAlert a").data("focus-id", data.focusId);
	}
	if (data.callback === '') {
		data.callback = undefined;
	}
	$("#commonAlert a").attr("onclick", "closeLayer('commonAlert'," + data.callback + ");");
	$("#commonAlert a").attr("data-focus-next", "commonAlert");
}

/* 팝업닫기 */
function eventPopClose3(){
	$(".evt-pop-close").trigger("click");
	$("#commonAlert pre").replaceWith("<p style='word-break:keep-all;'></p>");
	
	// S @PIL(22.10.28) GCS 뽐 겔러리 이벤트 글쓰이 화면 이동 ----------
	if(ugcFlag){
	    window.location.href = stPath+"galcamsLog/write/?eventNo="+pblcEvtNo;
	}
	// E ----------@PIL(22.10.28) GCS 뽐 겔러리 이벤트 글쓰이 화면 이동 
	
}

/* 팝업닫기 */
function eventPopClose(){
	$(".evt-pop-close").trigger("click");
}

/* 팝업닫기 */
function eventSurveyPopClose(){
	$(".evt-pop-close").trigger("click");

	$("#popupArea_Event3791").html("");

	drawSurveyHtmlCode();

}

/* 팝업닫기(비스포크 자랑하기 전용) */
function eventBspkPopClose(){
	$(".evt-pop-close").trigger("click");
	var offset = $("#exhibitionHeight").offset();
	$('html, body').animate({scrollTop : offset.top}, 400);
}

/* 로그인 페이지 이동 */
function fnGoLoginPage(){
	window.location.href = stPath+"member/indexLogin/?returnUrl="+returnUrl;
	$(".evt-pop-close").trigger("click");
}

/*
	파일 업로드 ============================================================================================= START
*/
var currentFileSize = 0; 	// 업로드 파일 용량
var currentFileExe = ''; 	// 업로드 파일 확장자

var fileUpload = {
	data : {
		fldNo : ""
	},
	file : function(callBack, fldNo) {
		fileUpload.callBack = callBack;
		fileUpload.fileForm("file", '');
		fileUpload.data.fldNo = fldNo;
	}
	, fileFilter : function(callback, filter) {
		fileUpload.callBack = callback;
		fileUpload.fileForm("file", filter);
	}
	, image : function(callback){
		fileUpload.callBack = callback;
		fileUpload.fileForm("image", '');
	}
	, certificate : function(callback){
		fileUpload.callBack = callback;
		fileUpload.fileForm("certificate", '');
	}
	, fileForm : function(type, filter){
		var html = [];
		$('#fileUploadForm').remove();
		html.push("<form name=\"fileUploadForm\" id=\"fileUploadForm\" method=\"post\" enctype=\"multipart/form-data\">");
		html.push("	<div style=\"display:none;\">");
		html.push("		<input type=\"file\" name=\"eventUploadFile\" id=\"eventUploadFile\" />");
		html.push("		<input type=\"hidden\" name=\"uploadType\" value=\"" + type + "\">");
		html.push("		<input type=\"hidden\" name=\"filter\" value=\"" + filter + "\">");
		html.push("	</div>");
		html.push("</form>");
		$("body").append(html.join(''));
		$("#eventUploadFile").click();
	}
	, callBack : null
	, objId : null
	, afterFileSelect : function(file, exCode) {

		//console.log("===> [afterFileSelect] fldNo : ", fileUpload.data.fldNo);

		$("#phyPath").val(file.filePath);

		var html = '';
		var maxSize = 10;

		currentFileSize = file.fileSize;
		currentFileExe = (file.fileExe).toUpperCase();

		var chkFileExe = false;

		var alertData1 = {
				title : "",
				content : "",
				callback : "",
				btnText : "확인"
			};

		if(currentFileExe != "JPG" && currentFileExe != "PNG") {
			alertData1.content = "JPG, PNG 파일만 첨부 가능합니다.";
			chkFileExe = true;
		}

		if (chkFileExe) {
			commonAlert(alertData1);
			openLayer('commonAlert');

			$("#addField"+fileUpload.data.fldNo).val("");

			$("input[name$='" + fileUpload.data.fldNo + "']").val("");

			return;
		}

		if (currentFileSize > maxSize * 1024 * 1024) {
			var alertData2 = {
				title : "",
				content : "이미지는 최대 10MB까지 첨부 가능합니다.",
				callback : "",
				btnText : "확인"
			};
			commonAlert(alertData2);
			openLayer('commonAlert');
			return;
		}

		if ($(".file-list"+fileUpload.data.fldNo).children("li").length >= 1) {
			var alertData3 = {
				title : "",
				content : "파일은 1개만 첨부 가능합니다.",
				callback : "",
				btnText : "확인"
			};
			commonAlert(alertData3);
			openLayer('commonAlert');
			return;
		}

		html += '<li>';
		html += '	<span>'+file.fileName+'</span>';
		html += '	<button type="button" class="ico-del-s" onclick="fileRemove(\''+fileUpload.data.fldNo+'\')">';
		html += '		<span class="blind">첨부파일 삭제</span>';
		html += '	</button>';
		html += '</li>';

		$(".file-list"+fileUpload.data.fldNo).append(html);
	}
};

//파일 업로드 디폴트 콜백 함수
function fnFileUploadCallBack(result, exCode){
	var rsltFldNo = fileUpload.data.fldNo;
	$("#addField"+rsltFldNo).val(result.fileName);
	$("#fileExe"+rsltFldNo).val(result.fileExe);
	$("#fileName"+rsltFldNo).val(result.fileName);
	$("#filePath"+rsltFldNo).val(result.filePath);
	$("#fileSize"+rsltFldNo).val(result.fileSize);
	$("#fileType"+rsltFldNo).val(result.fileType);

	fileUpload.afterFileSelect(result, exCode);
}

// 파일 삭제
function fileRemove(fldNo) {
	//var liFileSize = $(".file-list"+fldNo).children("li").eq(0).find("input[name='fileSize']").val();
	//var minSize = currentFileSize - liFileSize;

	$(".file-list"+fldNo).children("li").eq(0).remove();
	$("#addField"+fldNo).val("");
}

$(document).on("change","#eventUploadFile",function(){
	waiting.start();
	$('#fileUploadForm').ajaxSubmit({
		url : stPath+'xhr/common/fileUploadResult.do'
		, dataType : 'json'
		, success : function(result){
			waiting.stop();
			$('#fileUploadForm').remove();
			if(result.exCode == null || result.exCode === ""){
				if(fileUpload.callBack === undefined || fileUpload.callBack == null){
					fnFileUploadCallBack(result.file, result.exCode);
				}else{
					fileUpload.callBack(result.file, result.exCode);
				}
			}else{
				makeAlert(result.exMsg);
			}
		}
		, error : function(xhr, status, error) {
			waiting.stop();
			if(xhr.status === 1000) {
				makeAlert("세션이 종료되었습니다.");
			} else {
				makeAlert("오류가 발생되었습니다.<BR>관리자에게 문의하십시요.["+xhr.status+"]["+error+"]");
			}
		}
	});
});

// 파일찾기
function fnSearchFile(fldNo){
	fileUpload.file(fnFileUploadCallBack, fldNo);
}

// 파일 업로드 ============================================================================================= END



////////////////////////////////////////////////////////////////////////////////////
///////////////////// EVENT LISTENER ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// 설문형 : 정답확인
$(document).on('click', '.chkAns', function(){
	//var id = $(this).attr('id');
	var qstNo = $(this).attr('arg1');
	var qstTpCd = $(this).attr('arg2');
	checkAnswer(qstNo, qstTpCd);
});

// 우편번호 검색
$(document).on('click', "#inpEnterZonecode, #zoneCodeBtn", function(){
	fnPostLayerPop();
});

// 이벤트 응모
$(document).on('click', "#eventSaveBtn", function(){
	fnSaveEventEntry();
});

//매장상담 응모
$(document).on('click', "#reservationBtn", function(){

	if (entryEvent.eventAddYn == 'B2C_PLAZA_DOCENT' || entryEvent.eventAddYn == 'B2C_PLAZA_DOCENT_CAMPUS') {
		var ctt = $("#inpEnterCall").val();

		if (!fnMobileCheck(ctt)) {
			var alertData = {
					title : ""
					,content : '올바른 형식의 연락처를 입력하세요.'
					,btnText : '닫기'
					,callback : fnFocusCtt
				};
				commonAlert(alertData);
				openLayer('commonAlert');


		} else {
			stPath = ($("#openPop").data("st-path"));

			var param = {
					eventNo : entryEvent.eventNo
					, ctt : ctt // 추가필드 - 댓글 유형
				};

			var options = {
				url : stPath+"xhr/event/checkEntryConstraints"
				, data : param
				, type: 'POST'
				, done: function (data) {
					var result = data.result;

					if (result.cttCnt > 1) {
						var alertData = {
							content : "이미 응모한 연락처 입니다."
							,btnText : '닫기'
							,callback : fnFocusCtt
						};
						commonAlert(alertData);
						openLayer('commonAlert');
					} else {
						fnSaveEventEntry();
					}
				}
			};
			ajax.call(options);
		}
	} else {
		fnSaveEventEntry();
	}


});

function fnFocusCtt() {
	$("#inpEnterCall").focus();
}

//이벤트 응모
$(document).on('click', "#eventSurveySaveBtn", function(){
	fnSaveEventSurvey();
});

// 약관 전체 선택
$(document).on('click', "#chk-enter-all", function(){
	var allChked = $(this).prop("checked");
	$(".inp-terms").each(function(){
		//console.log($(this).attr("id"));
		$(this).prop("checked", allChked);
	});
});

// url 체크
/*var timerUrl;
$(document).on('input', '#inpEnterSns', function(e){
	var value = e.target.value;
	var id = e.target.id;

	$("#"+id+"Err").hide();

	if(timerUrl){
		clearTimeout(timerUrl);
	}

	timerUrl = setTimeout(function(){
		if(!fnUrlCheck(value)){
			$("#"+id+"Err2").show();
			return;
		}else{
			$("#"+id+"Err2").hide();
		}
	},300);
});*/

// [유효성 체크] 핸드폰 번호
/*var timerPhone;
$(document).on('input', '#inpEnterCall', function(e){
	var value = e.target.value;
	var id = e.target.id;

	if(!value == ""){
		$("#"+id+"Err").hide();

		if(timerPhone){
			clearTimeout(timerPhone);
		}
		timerPhone = setTimeout(function(){
			if(!fnMobileCheck(value)) {
				$("#"+id+"Err2").show();
				return;
			}else{
				$("#"+id+"Err2").hide();
			}
		}, 300);
	}

});*/

// [유효성 체크] 이메일
/*var timerEmail;
$(document).on('input', '#inpEnterEmail', function(e){
	var value = e.target.value;
	var id = e.target.id;

	$("#"+id+"Err").hide();
	$("#"+id+"Err2").hide();

	if(timerEmail){
		clearTimeout(timerEmail);
	}
	timerEmail = setTimeout(function(){
		if(!fnEmailCheck(value)) {
			$("#"+id+"Err2").show();
			return;
		}else{
			$("#"+id+"Err2").hide();
		}
	}, 300);
});*/

// [유효성 체크] 국문 25, 영문 50 제한
$(document).on('keyup keydown', '#inpEnterName', function(){
	fnOnLimitInputVal($(this));
});

// [유효성 체크] 상세주소 특수문자 예외처리
$(document).on('keyup keydown', '#inpEnterAddressDetail', function(){
	fnOnLimitInputValAtDtlAddr($(this));
});


// 내용 글자수 실시간 카운팅
var content;
$(document).on('keyup', '#inpEnterSns', function(){
	content = $(this).val();
	$(".sns-count").html("<em class='strong'>"+content.length+"</em> / 500자");
});

var content2;
$(document).on('input', '#inpEnterSerialNum', function(){
	content2 = $(this).val();
	$(".serial-count").html("<em class='strong'>"+content2.length+"</em> / 500자");
});


var content3;
$(document).on('input', 'textarea[name=bspk-txt-fld]', function(){
	content3 = $(this).val();
	$(".bspk-count").html("<strong id='counter'>"+content3.length+"</strong>자 / 5000");
});

var content4;
$(document).on('keyup', '.textAreaLen', function(){
	content4 = $(this).val();
	$(this).parent().find(".textarea-count").html("<em class='strong'>"+content4.length+"</em> / 1000자");
});

$(document).on('keyup keydown', 'input[name=inputMdlCode]', function(){
	$("#bspkMdBtn").show();
	$("#bspkMdChk").val("unchecked");
});



// 시리얼번호 체크
$(document).on('click', '#chkSerialNoBtn', fnCheckSerialNo);

// [유효성 체크] 숫자만 입력
$(document).on('keyup', 'input:text[numberOnly]', function(){
	$(this).val($(this).val().replace(/[^0-9]/g,""));
});

// 매장 상세보기
$(document).on("click", "#microSiteDetailView", function(){
	//var microSitePlazaNo = $("input[name=radio-store]:checked").val();
	var microSiteShopNo = $("input[name=radio-store]:checked").data("shop-no");
	//var microSiteUrl = stPath+"digitalplaza/micro/"+microSitePlazaNo;
	var microSiteUrl = stPath+"digitalplaza/storeDetail/"+microSiteShopNo;
	//window.location.href = microSiteUrl;
	window.open(microSiteUrl);

	$("#microSiteUrl").val(microSiteUrl);
});

//툴팁 동작 이벤트
$(document).on("click", ".btn-tooltop02", function(){
	var target = $(this).data("tooltip");
	var goodsVal = $("input[name='chk-goods']:checked").val();
	var imgUrl="";

	$(".serialno-usetip").css("z-index",1000); // tooltip이 팝업위에 표시되도록 설정

	$.each(goodsSerialInfos, function(idx, val){
		var goodsId = val.goodsId;

		if(goodsId == goodsVal){
			imgUrl = "//"+val.serialImgPath;
		}
	});

	if(imgUrl != ""){
		$("#serialImg").attr("src", imgUrl);
		tooltipCenterTop(this,target,380);
	}/*else{

		if(inputValue == undefined || inputValue == ""){
			$("#chk-goods-err").show();
		}
	}*/
});

// ========================================= event ======================================================= END
// ========================================= event ======================================================= END


/*
	이벤트 응모 저장
 */
function fnSaveEventEntry(){

//	createJsonStr();

	$("#focusTarget").val("");

	if(fnValidationCheck()){
		if ( $("#inpEnterSns").val() ) {
			var snsUrl =  $("#inpEnterSns").val();
			snsUrl = snsUrl.trim().replace(/^(http|https):\/\//, "");

			$("#inpEnterSns").val(snsUrl);
		}

		$("#addFieldArea").children(".inp-box").each(function(){
			var $addFieldId = $(this).find("[id^='addField']");

			var fldtpcd = $addFieldId.data("fldtpcd");

			if (fldtpcd === 10 || fldtpcd === 20 || fldtpcd === 90) { //한줄 입력(10) 또는 여러줄입력(20) 일때
				var fldVal =  $addFieldId.val();
				fldVal = fldVal.trim().replace(/^(http|https):\/\//, "");

				$addFieldId.val(fldVal);
			}

		});

		createJsonStr();
		createVoteJsonStr();

		var options = {
				url: stPath+"xhr/event/insertEventEntry",
				data: $("#eventEntryPopFrm").serialize(),
				done: function (data) {
					var result = data.result;

					if(result.eventAddYn != undefined && result.eventAddYn == "B2C_BSPK_JOIN_2021"){
						var alertData = {
							content : "BESPOKE 클럽 가입하기 이벤트에 참여해 주셔서 감사합니다.<br>클럽 가입 고객만을 위한 혜택을 놓치지 마세요"
							,btnText : '닫기'
							,callback : eventPopClose
						};
						commonAlert(alertData);
						openLayer('commonAlert');
					} else if(result.eventAddYn != undefined && result.eventAddYn == "B2C_BSPK_BOAST_2021"){
						var alertData = {
							content : "BESPOKE 클럽 자랑하기 이벤트에 참여해 주셔서 감사합니다.<br>작성한 상품평은 관리자가 확인하여<br>승인 후에 자랑하기 이벤트 게시판과<br>해당 상품의 상품평 목록에 게시됩니다."
							,btnText : '닫기'
							,callback : eventBspkPopClose
						};
						commonAlert(alertData);
						openLayer('commonAlert');
					} else {
						if(result.resultCd == "success" && eventAddType == "B2C_LIVE_ALARM"){
							makeAlert(result.resultMsg, eventPopClose);

							fnGetEventEntryInfo(entryEvent.eventNo);
						}
						else if(result.resultCd == "success" && eventAddType == "B2C_GALAXY_PREALARM_2022"){
							var surRcvSelFlag = $("input[data-chkgrp-name=checkEventEnter].plcyGbCd40").is(":checked");

							if (surRcvSelFlag) { // 마수동 클릭한 채로 응모하기 눌렀을때 설문팝업
								joinNo = result.joinNo;

								makeAlert(result.resultMsg, eventSurveyPopClose);
							} else {
								makeAlert(result.resultMsg, eventPopClose);
							}
						} else {
							if (eventAddType == 'B2B2C_9ALAXY_DAY') {
								certificationKcbFlag = false;
							}

							$("#commonAlert p").replaceWith("<pre style='word-break:keep-all;'></pre>");

							var mktRcvSelYn = $("input[data-chkgrp-name=checkEventEnter].plcyGbCd30").eq(0).prop("checked");

							if (mktRcvSelYn !== undefined) {
								var curTime = toTimeString(new Date(), 'Y');
								var mbrNm = $("#inpEnterName").val();
								var stNm = "[" + result.stNm + "]";

								curTime = curTime.substring(0,4) + "년" + " " + curTime.substring(4,6) + "월" + curTime.substring(6,8) + "일" + " "
									+ curTime.substring(8,10) + ":" + curTime.substring(10,12) + ":" + curTime.substring(12,14) + "에<br>";

								if (mktRcvSelYn) {
									result.resultMsg = stNm + "<br>" + mbrNm + " 고객님<br><br>" + curTime + "<br>이벤트를 위한 광고성 정보 수신에<br>'동의' 하셨습니다.<br>앞으로 SMS 및 이메일을 통해<br> 광고성 정보가 안내됩니다.<br><br>" + result.resultMsg;
								} else if (!mktRcvSelYn) {
									result.resultMsg = stNm + "<br>" + mbrNm + " 고객님<br><br>" + curTime + "<br>이벤트를 위한 광고성 정보 수신에<br>'미동의' 하셨습니다.<br>광고성 정보 수신에 동의하지 않은 경우<br> 이벤트 관련 정보, 혜택 안내를 받으실 수 없습니다.<br><br>" + result.resultMsg;
								}
							}

							makeAlert3(result.resultMsg, eventPopClose3);
						}
					}
					
					//응모성공인 경우 애드브릭스 호출
					if(result.resultCd == "success"){
						adbrixCustomEvent(entryEvent.ttl, pblcEvtNo, 'success');
					}
					
					//if(result.resultCd == "success"){
//						console.log("응모저장 : ",result.resultCd);
						// 무슨 이유인지는 퍼블 문의 필요
						// 버튼에 display: none 이 들어가서 버튼이 안보임
						// 매장예약 상담 이벤트 일 경우에만
						// 임시로 style을 지우고 있음
						/*if(entryEvent.eventGbCd == "80"){
							$(".btn-box").removeAttr("style");
						}*/
					//}

				}
			};

		if (entryEvent.eventGbCd != "80") { //매장상담이 아닐때만 기존로직(응모버튼 보이게하기) 적용
			$(".btn-box").removeAttr("style");
		}

		if (entryEvent.eventAddYn == 'B2C_PLAZA_DOCENT' || entryEvent.eventAddYn == 'B2C_PLAZA_DOCENT_CAMPUS') {
			$("#eventBtn_Area_div").hide();
		}

		if(isPreView) return;

		oneTimeChk = false;

		ajax.call(options);
	}
	// validation result
	else{
		var id = $("#focusTarget").val();
		var type = $("#focusTargetType").val();

		if(type == ""){
			setTimeout(function(){
				$("#"+id).focus();
			}, 1);
		}else{
			$("input[name="+id+"]").focus();
		}
		return;
	}

}

/*
 * [유효성 체크]
 */
function fnValidationCheck(){

	var passyn = "Y";
	var evtGbFlds = [];

	if(eventGbFields != undefined){
		for(var idx=0; idx<eventGbFields.length; idx++){
			evtGbFlds.push(eventGbFields[idx].eventFldTpCd);
		}
	}

	$(".error-msg").hide();
	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}

	const collectItem = {
		                  "10" : {/*이름*/ id : "inpEnterName", errId1 : "inpEnterNameErr", errId2 : "inpEnterNameErr", callback : null},
						  "20" : {/*연락처*/ id : "inpEnterCall", errId1 : "inpEnterCallErr", errId2 : "inpEnterCallErr2", callback : fnMobileCheck},
						  "30" : {/*이메일*/ id : "inpEnterEmail", errId1 : "inpEnterEmailErr", errId2 : "inpEnterEmailErr2", callback : fnEmailCheck},
						  "40" : {/*주소*/ id : "inpEnterZonecode", errId1 : "inpEnterZonecodeErr", errId2 : "inpEnterZonecodeErr", callback : null},
						  "50" : {/*SNS게시물*/ id : "inpEnterSns", errId1 : "inpEnterSnsErr", errId2 : "inpEnterSnsErr2", callback : fnUrlCheck},
						  "60" : {/*멤버십번호*/ id : "inpCounselMembership", errId1 : "inpCounselMembershipErr", errId2 : "inpCounselMembershipErr", callback : null}
						};

	// 수집항목 null 체크
	$.each(collectItems, function(idx, val){

		// 멤버십은 체크하지 않는다.
//		if(val.collectItemCd != "60"){
			var collectItemId = collectItem[val.collectItemCd].id;
			var collectItemErrId = collectItem[val.collectItemCd].errId1;
			var collectItemVal = $("#"+collectItemId).val();

			if(collectItemVal == ""){
				$("#"+collectItemErrId).show();
				passyn = "N";
				fnFocusIdSet(collectItemId); // focus될 아이디 정보
			}
//		}
	});

	// 유효성 체크 결과
	let validationSubResult;
	const chkArr = ["20", "30", "50"]; // 연락처, 이메일, url 유효성 체크

	$.each(chkArr, function(i, val){
		validationSubResult = fnValidationSub(collectItem[val]);
		if(!validationSubResult){
			passyn = "N";
			fnFocusIdSet(collectItem[val].id);
		}
	})

	// 생성된 추가필드에 대한 유효성 체크
	passyn = fnValidationAddFieldsChk(passyn);

	// 개인정보 수집형 일때
	if(eventGbCd == "40" || evtGbFlds.indexOf("01") > -1 || evtGbFlds.indexOf("06") > -1){
		$("#eventNm").val(entryEvent.ttl);
	}

	// 시리얼번호 체크 형일때만
	if(eventGbCd == "50" || evtGbFlds.indexOf("02") > -1){
//		console.log("분기 처리 :"+ passyn);
		passyn = fnValidationChk50(passyn);
	}

	// 설문형(퀴즈)은 모든 정답이 맞어야함
	if(eventGbCd == "60" || evtGbFlds.indexOf("03") > -1){
		passyn = fnValidationChk60(passyn);
	}

	// 투표형 일때
	if(evtGbFlds.indexOf("04") > -1){
		passyn = fnValidationChk70(passyn);
	}

	// 매장상담예약 형일때
	if(eventGbCd == "80" || evtGbFlds.indexOf("05") > -1){

		// 매장상담 예약 이벤트 신청 시 서버 전달값
		$("#visPlazaNo").val($("input[name=radio-store]:checked").val());
		$("#visShopNo").val($("input[name=radio-store]:checked").data("shop-no"));
		$("#visPathTpCd").val($("input[name=radio-store]:checked").data("path-tp-cd"));
		$("#visPlazaNm").val($("input[name=radio-store]:checked").next().text());

		if (docentFlag) {
			var visHopeDt = $docentCal.val();
			var timeCd = getVisTimeCd();
			var withPrsnNum = getWithPrsnNum();

			var visTimeCdNm = $("ul[data-fldtpcd='50']").children("li.focused").text();
			var visWithPrsnNumNm = $("ul[data-fldtpcd='30']").children("li.item").children("input:checked").val();

			$("#visTimeCdNm").val(visTimeCdNm);
			$("#visWithPrsnNumNm").val(visWithPrsnNumNm);

			$("#visHopeDt").val(visHopeDt);
			$("#visTimeCd").val(timeCd);
			$("#visWithPrsnNum").val(withPrsnNum);

		} else if (!docentFlag) { //도슨트 아닐때
			$("#visHopeDt").val($("#visitDate").val());
		}

		$("#eventNm").val(entryEvent.ttl);

		var seletedPlazaNo = $("input[name=radio-store]:checked").val();

		if(seletedPlazaNo == undefined){
			passyn = "N";
			$("#radio-store1Err").show();
			//$("#radio-store1").focus();

			fnFocusIdSet("radio-store1");
		}
	}

	// 개인정보수집관련
	passyn = fnValidationPrivacyPolicy(passyn);

	return passyn == "Y" ? true : false;
}

/*
 * [유효성 체크] 수집항목
 * obj.id / obj.errId2 / obj.callback
 */
function fnValidationSub(obj){
	var value = $("#"+obj.id).val();
	if(value != ""){
		var chkFlag = obj.callback(value);
		if(!chkFlag){
			$("#"+obj.errId2).show();
			return false;
		}
	} return true;
}

// [유효성 체크] 시리얼번호 체크 형
function fnValidationChk50(passyn){
//	console.log(passyn);
	// 제품선택
	var goodsVal = $("input[name=chk-goods]:checked").val();
	if(goodsVal == undefined || goodsVal == ""){
		$("#chk-goods-err").show();
		passyn = "N";
		fnFocusIdSet("chk-goods", "name");
	}

	// 제품 시리얼 번호 확인
	if( $("#serialNumChk").val() == "N" ){
		$("#inpEnterSerialNumErr").show();
		passyn = "N";
		fnFocusIdSet("inpEnterSerialNum");
	}
	return passyn;
}

// [유효성 체크] 설문형은 모든 정답이 맞어야함(퀴즈)
function fnValidationChk60(passyn){
	let failCnt = 0;
	let focusId;
	let tpCd;
	let ulClassNm;
	$("input[name=qstAnswer]").each(function(){
		ulClassNm = $(this).attr("id");
		var errMsgIdCd = ulClassNm.replaceAll("qstAnswer", "");
		if($(this).val() == "N"){
			failCnt++
			if(failCnt == 1){ // 첫번째 답안에 포커스 줄라고~!!
				tpCd = $(this).data("qsttpcd");
				if(tpCd == "30"){ // 주관식일때..
					fnFocusIdSet("answer"+errMsgIdCd);
				}else{
					focusId = $("."+ulClassNm+" > li").children(":eq(0)").attr("id");
					fnFocusIdSet(focusId);
				}
			}
			$("#answer"+errMsgIdCd+"Err").show();
		}
	});

	if(failCnt > 0){
		passyn = "N";
	}

	return passyn;
}

//[유효성 체크] 투표는 모든 항목이 기입 되어 있어야함
function fnValidationChk70(passyn){
	//#$#$
	$.each(voteQuestionInfos, function(idx, val){
		var voteQstNo = val.qstNo;
		var voteQstTpCd = val.qstTpCd;
		var voteQstNm = val.qstNm;
		var errorMsgId = "#voteAnswer"+voteQstNo+"Err";

		if(voteQstTpCd=="30"){
			//주관식
			var inputValue = $("input[name='voteAnswer"+voteQstNo+"']").val();
			if(inputValue == undefined || inputValue == ""){
				$(errorMsgId).show();
				passyn = "N";
				fnFocusIdSet("voteAnswer"+voteQstNo, "name");
			}
		}else if(voteQstTpCd == "20"){
			//라디오버튼
			var inputVal = $("input[name='voteAnswer"+voteQstNo+"']:checked").val();
			if(inputVal == undefined || inputVal == ""){
				$(errorMsgId).show();
				passyn = "N";
				if($(".dropButton"+voteQstNo).hasClass("open") === false){
					$(".dropButton"+voteQstNo).click();
				}
				fnFocusIdSet("voteAnswer"+voteQstNo, "name"); // focus될 아이디 정보
			}
		}else if(voteQstTpCd == "10"){
			//체크박스
			var chkCnt = 0;
			var inputVal = $("input[name='voteAnswer"+voteQstNo+"']:checked").val();
			$("input[name='voteAnswer"+voteQstNo+"']:checked").each(function(){
				if($(this).val() != ""){
					chkCnt++;
				}
			});
			if(chkCnt == 0){
				$(errorMsgId).show();
				passyn = "N";
				if($(".dropButton"+voteQstNo).hasClass("open") === false){
					$(".dropButton"+voteQstNo).click();
				}
				fnFocusIdSet("voteAnswer"+voteQstNo, "name"); // focus될 아이디 정보
			}
		}
	});
	return passyn;
}

// [유효성 체크] 개인정보수집관련
function fnValidationPrivacyPolicy(passyn){
	var plcyAltYn = entryEvent.plcyAltYn; // 처리 방침 알림 여부

	let isRqidChkPlcy = false; // true : 개인정보 [선택]항목 체크완료

	$("#privacyPolicy .entryAgreeY").each(function(idx, item){
		var id = $(item).attr("id");
		if($("#"+id).is(":checked") == false){
			$("#err-"+id).show();
			passyn = "N"; // 응모 저장 X
			fnFocusIdSet(id);

		}

	});

	if (passyn != "N") { // 개인정보 필수 항목 모두 체크했을 때
		var $optPolicy = $("#privacyPolicy .inp-terms").not(".entryAgreeY").not(".plcyGbCd20").not(".plcyGbCd40"); // 개인정보 선택 항목

		if ($optPolicy.length != 0) {
			$optPolicy.each(function(){
				if($(this).is(":checked") == false){
					isRqidChkPlcy = true;
					return false; // break

				} else {
					isRqidChkPlcy = false;
					return true; // continue
				}
			});

		}
	}

	if (plcyAltYn == "Y") {
		if(passyn == "Y"){
			if (!oneTimeChk && isRqidChkPlcy) { // 일회성 알림 로직
				var alertData = {
						title : "",
						content : "광고성 정보 수신에 동의하지 않은 경우<br>이벤트 관련 정보, 혜택 안내를 받으실 수 없습니다.<br>[광고성 정보 수신] 동의 여부를 확인해주세요.",
						callback : "",
						btnText : "확인"
				};

				commonAlert(alertData);
				openLayer('commonAlert');

				passyn = "N";

				oneTimeChk = true;

			} else if (oneTimeChk && !isRqidChkPlcy) {
				passyn = "Y"; // 응모 저장 O
			}
		}
	}

	return passyn;
}

// [유효성 체크] 생성된 추가필드에 대한 유효성 체크
function fnValidationAddFieldsChk(passyn){

	$.each(addFields, function(idx, item){

		let id = "addField"+item.fldNo;
		let fldTpCd = item.fldTpCd;
		let errorMsgId = "#"+id+"Err";
		let fldValOptYn = (item.fldValOptYn == null || item.fldValOptYn === undefined) ? 'N' : item.fldValOptYn;

		const fldTpCdArr_10_20_60_90_130 = ['10', '20', '60', '90', '130'];

		if (fldValOptYn == 'N') { // 2021.01.04  이벤트 추가 필드 중 필수값 제외 컬럼 추가(값이 'N' 또는 null 일때만 필수값 체크, 'Y'이면 체크 하지 않음)
		//if(fldTpCdArr_10_20_60.includes(fldTpCd)){
			if(fldTpCdArr_10_20_60_90_130.indexOf(fldTpCd) > -1){
				// 한줄, 여러줄, 첨부파일
				if($("#"+id).val() == ""){
					$(errorMsgId).show();
					passyn = "N";
					fnFocusIdSet(id); // focus될 아이디 정보
				} else if(eventInfo.entryEvent.eventNo == "30307" && fldTpCd == "90") {
					var content = $("#"+id).val();
					if(content.length < 10){
						makeAlert("내용은 최소 10자 이상으로 입력해 주세요.");
						passyn = "N";
					} else if (content.length > 5000){
						makeAlert("내용은 최대 5,000자 이하로 입력해 주세요.");
						passyn = "N";
					}
				}
			}else if(fldTpCd == "30"){
				// 라디오 버튼
				var inputValue = $("input[name='"+id+"']:checked").val();
				if(inputValue == undefined || inputValue == ""){
					$(errorMsgId).show();
					passyn = "N";
					fnFocusIdSet(id, "name"); // focus될 아이디 정보
				}
			}else if(fldTpCd == "40"){
				// 체크박스
				var chkCnt=0;
				$("input[name='"+id+"']:checked").each(function(){
					if($(this).val() != ""){
						chkCnt++;
					}
				});

				if(chkCnt == 0){
					$(errorMsgId).show();
					passyn = "N";
					fnFocusIdSet(id, "name"); // focus될 아이디 정보
				}
			}else if(fldTpCd == "50"){
				// 셀렉트박스
				var selText = $("#"+id+" li.focused").text();
				if(selText == ""){
					$(errorMsgId).show();
					passyn = "N";
					fnFocusIdSet(id+"Btn"); // focus될 아이디 정보 : 셀렉트일 경우 버튼에 포커싱
				}
			}else if(fldTpCd == "100"){
				//모델명 입력
				var modelChkFlag = $("#bspkMdChk").val();
				if($("#"+id).val() == "" || modelChkFlag != "checked"){
					$(errorMsgId).show();
					passyn = "N";
					fnFocusIdSet(id); // focus될 아이디 정보
				}
			}else if(fldTpCd == "120"){
				//다중 첨부파일
				if($("#"+id).val() == ""){
					$(errorMsgId).show();
					passyn = "N";
					fnFocusIdSet("attachFile"); // focus될 아이디 정보
				}
			}
		}
	});

	return passyn;
}

/*
 * type이 name으로 넘어오는 경우 targetId는 id가 아니 name으로 포커싱준다.
 */
function fnFocusIdSet(targetId, type){
	if($("#focusTarget").val() == ""){
		$("#focusTarget").val(targetId);
		if(type != ""){
			$("#focusTargetType").val(type);
		}
	}
}

/*
	추가필드의 내용을 jsonString으로 조합해서 서버로 전달
 */
function createJsonStr(){

	var jsonStr = new Object;
	var rowArr = new Array;
	var index = 0;

	$.each(addFields, function(idx, item){
		let jobj = new Object;
		let id = "addField"+item.fldNo;
		let fldTpCd = item.fldTpCd;

		if(fldTpCd == "10" || fldTpCd == "20" || fldTpCd == "90" || fldTpCd == "100" || fldTpCd == "130"){
			// 한줄 , 여러줄
			var inputValue126 = $("#"+id).val();
			if(inputValue126 != ""){
				jobj.fldNo = item.fldNo+"";
				jobj.fldGrp = item.fldGrp;
				jobj.fldTpCd = item.fldTpCd+"";
				jobj.fldNm = item.fldNm;
				jobj.fldVal = inputValue126;

				rowArr.push(jobj);
				jsonStr.addFieldList = rowArr;
			}
			index++;
		}else if(fldTpCd == "30"){
			// 라디오 버튼
			var inputValue3 = $("input[name='"+id+"']:checked").val();
			if(inputValue3 != undefined && inputValue3 != ""){
				jobj.fldNo = item.fldNo+"";
				jobj.fldGrp = item.fldGrp;
				jobj.fldTpCd = item.fldTpCd+"";
				jobj.fldNm = item.fldNm;
				jobj.fldVal = inputValue3;

				rowArr.push(jobj);
				jsonStr.addFieldList = rowArr;
			}
			index++;
		}else if(fldTpCd == "40"){
			// 체크박스
			$("input[name='"+id+"']:checked").each(function(a, b){
				var obj2 = new Object;
				obj2.fldNo = item.fldNo+"";
				obj2.fldGrp = item.fldGrp;
				obj2.fldTpCd = item.fldTpCd+"";
				obj2.fldNm = item.fldNm;
				obj2.fldVal = $(this).val();

				rowArr.push(obj2);
				jsonStr.addFieldList = rowArr;
			});
			index++;
		}else if(fldTpCd == "50"){
			// 셀렉트박스
			var selText = $("#"+id+" li.focused").text();
			if(selText != ""){
				jobj.fldNo = item.fldNo+"";
				jobj.fldGrp = item.fldGrp;
				jobj.fldTpCd = item.fldTpCd+"";
				jobj.fldNm = item.fldNm;
				jobj.fldVal = selText;

				rowArr.push(jobj);
				jsonStr.addFieldList = rowArr;
			}
			index++;
		} else if(fldTpCd == "60"){
			// 첨부파일
			var inputValue126 = $("#"+id).val();
			var filePath = $("#filePath"+item.fldNo).val();

			if(inputValue126 != ""){
				if (item.fldVal != "" && item.fldVal != null && item.fldVal != undefined) {
					var fldValMeta = item.fldVal.split(",");

					if (fldValMeta.length == 1) { // 기존 fileTypeImg
						jobj.fldNo = item.fldNo+"";
						jobj.fldGrp = item.fldGrp;
						jobj.fldTpCd = item.fldTpCd+"";
						jobj.fldNm = item.fldNm;
						jobj.fldVal = inputValue126 + ";" + filePath;
						jobj.fldValMeta = fldValMeta[0];

						rowArr.push(jobj);
						jsonStr.addFieldList = rowArr;

					} else if (fldValMeta.length == 2) { // 추가 fileTypeImg, fileTypeImgWithMeta
						//fileTypeImg data setting
						jobj.fldNo = item.fldNo+"";
						jobj.fldGrp = item.fldGrp;
						jobj.fldTpCd = item.fldTpCd+"";
						jobj.fldNm = item.fldNm;
						jobj.fldVal = inputValue126 + ";" + filePath;
						jobj.fldValMeta = fldValMeta[0];

						rowArr.push(jobj);
						jsonStr.addFieldList = rowArr;

						if (eventAddYn == 'N') {
							let jobj2 = new Object;
							//fileTypeImgWithMeta data setting
							jobj2.fldNo = (item.fldNo+1)+"";
							jobj2.fldGrp = item.fldGrp;
							jobj2.fldTpCd = item.fldTpCd+"";
							jobj2.fldNm = item.fldNm;
							jobj2.fldVal = inputValue126 + ";" + filePath;
							jobj.fldValMeta = fldValMeta[1];

							rowArr.push(jobj2);
							jsonStr.addFieldList = rowArr;
						}
					}
				}
			}
			index++;
		}

		else if(fldTpCd == "110") {
			//평점
			var starating = $("#estmScore").val();
			if(starating != "" && starating != undefined && starating != null){
				jobj.fldNo = item.fldNo+"";
				jobj.fldGrp = item.fldGrp;
				jobj.fldTpCd = item.fldTpCd+"";
				jobj.fldNm = item.fldNm;
				jobj.fldVal = starating;

				rowArr.push(jobj);
				jsonStr.addFieldList = rowArr;
			}
			index++;
		} else if(fldTpCd == "120"){
			//다중 첨부파일
			var multiImgPath = new Array;
			var addMultiImgPathArr = $('input[name=multiImgPath]');
			if($(addMultiImgPathArr).length > 0){
				for(var i = 0; i < addMultiImgPathArr.length; i++){
					multiImgPath.push($(addMultiImgPathArr[i]).val());
				}
			}
			index++;
			if(multiImgPath != null && multiImgPath != undefined && multiImgPath != ""){
				jobj.fldNo = item.fldNo+"";
				jobj.fldGrp = item.fldGrp;
				jobj.fldTpCd = item.fldTpCd+"";
				jobj.fldNm = item.fldNm;
				jobj.fldVal = multiImgPath;

				rowArr.push(jobj);
				jsonStr.addFieldList = rowArr;
			}
		}

	});

	// 동의
	var rowArrPlcy = new Array;

	$(".plcyGbCd20").prop("checked", true);

	$("input[data-chkgrp-name=checkEventEnter]").each(function(idx, item){
		let plcyObj = new Object;
		var id = $(item).attr("id");

		plcyObj.policyNo = $("#"+id).data("policyno")+"";
		plcyObj.fldGrp = idx;

		if($("#"+id).is(":checked") == true){
			plcyObj.seletedYn = "Y";
		}else{
			plcyObj.seletedYn = "N";
		}

		rowArrPlcy.push(plcyObj);
		jsonStr.plcyAgreeList = rowArrPlcy;
		index++;

	});

	var biztalkUseYn = $("#biztalkUseYn").val();

	if (biztalkUseYn == 'Y') {
		var mktRcvSelYnLen = $("input[data-chkgrp-name=checkEventEnter].plcyGbCd30").length;

		var plcyGbCd30idx = 0;

		$("input[data-chkgrp-name=checkEventEnter].plcyGbCd30").each(function(idx, item){
			var id = $(item).attr("id");

			if($("#"+id).is(":checked") == true){
				plcyGbCd30idx++;
			}

		});

		if (mktRcvSelYnLen == plcyGbCd30idx) {
			$("#mktRcvSelYn").val("Y");
		} else {
			$("#mktRcvSelYn").val("N");
		}

	}

	if(index == 0){
		$("#jsonStr").val("noData"); // 항목이 없을 경우 noData 로 넘겨서 서버에서 else 처리함
	}else{
		$("#jsonStr").val(JSON.stringify(jsonStr));
	}

	//console.log($("#jsonStr").val());
}

/*
	투표의 내용을 jsonString으로 조합해서 서버로 전달
*/
function createVoteJsonStr(){
	var voteInfo = new Object;
	voteInfo.rdoBox = [];
	voteInfo.txtBox = [];
	voteInfo.chkBox = [];

	$.each(voteQuestionInfos, function(idx, val){
		var rplInfo = new Array();
		var voteQstNo = val.qstNo;
		var voteQstTpCd = val.qstTpCd;
		var voteQstNm = val.qstNm;
		var errorMsgId = "#voteAnswer"+voteQstNo+"Err";
		let jobj = new Object;

		if(voteQstTpCd=="30"){
			//주관식
			var inputValue = $("input[name='voteAnswer"+voteQstNo+"']").val();
			var rplNo = $("input[name='voteAnswer"+voteQstNo+"']").data("rplno");

			jobj.qstNo = voteQstNo;
			jobj.qstTpCd = voteQstTpCd;
			jobj.qstNm = voteQstNm;
			jobj.rplNo = rplNo;
			jobj.rplInfo = inputValue;
			voteInfo.txtBox.push(jobj);

		}else if(voteQstTpCd == "20"){
			//라디오버튼
			var inputValue = $("input[name='voteAnswer"+voteQstNo+"']:checked").val();
			var rplNo = $("input[name='voteAnswer"+voteQstNo+"']:checked").data("rplno");

			jobj.qstNo = voteQstNo;
			jobj.qstTpCd = voteQstTpCd;
			jobj.qstNm = voteQstNm;
			jobj.rplNo = rplNo;
			jobj.rplInfo = inputValue;
			voteInfo.rdoBox.push(jobj);

		}else if(voteQstTpCd == "10"){
			var rplNo = new Array();
			var rplVal = new Array();
			var inputVal = $("input[name='voteAnswer"+voteQstNo+"']:checked").val();
			$("input[name='voteAnswer"+voteQstNo+"']:checked").each(function(){
				if($(this).val() != ""){
					rplNo.push($(this).data("rplno"));
					rplVal.push($(this).val());
				}
			});

			jobj.qstNo = voteQstNo;
			jobj.qstTpCd = voteQstTpCd;
			jobj.qstNm = voteQstNm;
			jobj.rplNo = rplNo;
			jobj.rplInfo = rplVal;
			voteInfo.chkBox.push(jobj);

		}
	});

	$("#voteJsonStr").val(JSON.stringify(voteInfo));

}

/*
	툴팁영역 html tag
 */
function drawTooltipHtmlCode(){
	var html="";
	html += '<div class="tooltip-layer serialno-usetip" tabindex="0">';
	html += '    <div class="tooltip-title"><h2>시리얼번호 확인</h2></div>';
	html += '    <div class="tooltip-content">';
	html += '        <div class="serial-img">';
    html += '            <img src="" alt="" id="serialImg">';
    html += '        </div>';
	html += '    </div>';
	html += '    <button type="button" class="btn-tooltip-close"><em class="blind">닫기</em></button>';
	html += '</div>	';
	return html;
}

/*
	팝업영역 html tag
 */
function drawPopHtmlCode(){
	var ctPath = $("#openPop").data("st-path");

	var html="";
	html += '<form id="eventEntryPopFrm">';

	html += '	<input type="hidden" id="serialNumChk" value="N"/>';
	html += '	<input type="hidden" id="serialNum" name="serialNum" value=""/>';
	html += '	<input type="hidden" id="mdlCode" name="mdlCode" value=""/>';
	html += '	<input type="hidden" id="focusTarget" value=""/>';
	html += '	<input type="hidden" id="focusTargetType" value=""/>';
	html += '	<input type="hidden" id="jsonStr" name="jsonStr" value=""/>';
	html += '	<input type="hidden" id="entryEventNo" name="eventNo" value=""/>';
	html += '	<input type="hidden" id="evtGbCd" name="evtGbCd" value=""/>';
	html += '	<input type="hidden" id="prtcpPsbGbCd" name="prtcpPsbGbCd" value=""/>';
	html += '	<input type="hidden" id="prtcpPsbCnt" name="prtcpPsbCnt" value=""/>';
	html += '	<input type="hidden" id="visPlazaNo" name="visPlazaNo" value=""/>';
	html += '	<input type="hidden" id="visShopNo" name="visShopNo" value=""/>';
	html += '	<input type="hidden" id="visPlazaNm" name="visPlazaNm" value=""/>';
	html += '	<input type="hidden" id="visHopeDt" name="visHopeDt" value=""/>';
	html += '	<input type="hidden" id="visTimeCd" name="visTimeCd" value=""/>';
	html += '	<input type="hidden" id="visWithPrsnNum" name="visWithPrsnNum" value=""/>';
	html += '	<input type="hidden" id="visPlazaTel" name="visPlazaTel" value=""/>';
	html += '	<input type="hidden" id="visPlazaAddr" name="visPlazaAddr" value=""/>';
	html += '	<input type="hidden" id="visPathTpCd" name="visPathTpCd" value=""/>';
	html += '	<input type="hidden" id="cpNo" name="cpNo" value=""/>';
	html += '	<input type="hidden" id="eventNm" name="eventNm" value=""/>';
	html += '	<input type="hidden" id="microSiteUrl" name="microSiteUrl" value=""/>';
	html += '	<input type="hidden" id="biztalkTmplTxt" name="biztalkTmplTxt" value=""/>'; // 알림톡 템플릿 번호
	html += '	<input type="hidden" id="biztalkUseYn" name="biztalkUseYn" value=""/>'; // 알림톡 사용 여부
	html += '	<input type="hidden" id="prtnrCpUseYn" name="prtnrCpUseYn" value=""/>'; // 제휴쿠폰 사용 여부
	html += '	<input type="hidden" id="mktRcvSelYn" name="mktRcvSelYn" value=""/>'; // 광고성 정보 수신 전체 동의 여부

	html += '	<input type="hidden" id="weekdayCloseTime" name="weekdayCloseTime" value=""/>'; // 평일 마감시간
	html += '	<input type="hidden" id="weekdayOpenTime" name="weekdayOpenTime" value=""/>'; // 평일 오픈 시간
	html += '	<input type="hidden" id="weekendCloseTime" name="weekendCloseTime" value=""/>'; // 주말 마감 시간
	html += '	<input type="hidden" id="weekendOpenTime" name="weekendOpenTime" value=""/>'; // 주말 오픈 시간
	html += '	<input type="hidden" id="eventAddYn" name="eventAddYn" value=""/>'; // 주말 오픈 시간
	html += '	<input type="hidden" id="popEntrySuccMsg" name="popEntrySuccMsg" value=""/>';


	html += '	<div class="layer-pop layer-normal layer-event-exhibition" id="popupExhibitionEnter" tabindex="0" data-popup-layer="popupExhibitionEnter" data-focus="popupExhibitionEnter">';
	html += '       <button type="button" id="exhibition" data-popup-target="popupExhibitionEnter" style="display: none;"></button>';
	html += '	    <div class="layer-header" id="evtHeader">';
	html += '	        <h2>응모 하기</h2>';
	html += '	    </div>';
	html += '	    <div class="layer-content">';
	html += '	        <div class="frm-login ">';
	html += '	            <form action="">';
	html += '	                <fieldset class="secureInp">';
	html += '	                    <legend>응모 입력 폼</legend>';
	html += '						 <div class="event-img">';
	html += '	                        <img src="" alt="" id="evtImg">';
	html += '	                    </div>';

	html += '	                    <div class="vote-txt-box eventGbCd70">';
	html += '	                        <p><strong><span id="evtNm"></span></strong> 투표에 참여해주셔서 감사합니다.</p>';
	html += '	                        <p>투표 이벤트 추첨을 위해 아래 정보를 작성해주세요.</p>';
	html += '	                        <p class="txt-major">* 투표하기는 1회만 가능합니다.</p>';
	html += '	                    </div>';

	html += '	                    <div class="user-info-box secure-pop-form user-form">';
	html += '	                        <div class="secure-pop-tit bottom-line"><span class="titleNo">01. </span><span id="popTitle">응모자 정보</span></div>';
	html += '	                        <div class="secure-pop form-write">';
	html += '	                            <div class="inp-box entryCollect10 entryCollect">';
	html += '	                                <label for="inpEnterName" class="lb-line">이름</label>';
	html += '		                            <div>';
	html += '		                                <input type="text" id="inpEnterName" name="inpEnterName" class="inp-line" value="" readonly="readonly">';
	html += '		                                <div class="error-msg" id="inpEnterNameErr">';
	html += '	                                    	<p>이름을 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <div class="inp-box entryCollect20 entryCollect">';
	html += '	                                <label for="inpEnterCall" class="lb-line">연락처</label>';
	html += '		                            <div>';
	html += '	                                    <input type="text" id="inpEnterCall" name="inpEnterCall" class="inp-line" placeholder="(-) 없이 숫자만 입력해 주세요." numberOnly maxlength="11">';
	html += '	                                    <div class="error-msg" id="inpEnterCallErr">';
	html += '	                                    	<p>연락처를 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '	                                    <div class="error-msg"  id="inpEnterCallErr2">';
	html += '	                                    	<p>연락처가 올바르지 않습니다.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '								<div class="inp-box entryCollect60 entryCollect">';
    html += '								    <label for="inpCounselMembership" class="lb-line line-double">삼성전자 <br>멤버십 번호</label>';
    html += '								    <div>';
    html += '								        <input type="text" id="inpCounselMembership" class="inp-line" value="" readonly="readonly">';
    html += '	                                    <div class="error-msg" id="inpCounselMembershipErr">';
//	html += '	                                    	<p>나의 정보에서 멤버십 회원 추가정보 입력 후</p><p>알림신청하면 멤버십 번호가 보여집니다.</p>';
	html += '	                                    </div>';
    html += '								    </div>';
    html += '								</div>';

	html += '	                            <div class="inp-box entryCollect30 entryCollect">';
	html += '	                                <label for="inpEnterEmail" class="lb-line">이메일</label>';
	html += '		                            <div>';
	html += '	                                    <input type="text" id="inpEnterEmail" name="inpEnterEmail" class="inp-line" placeholder="이메일을 입력해 주세요.">';
	html += '	                                    <div class="error-msg" id="inpEnterEmailErr">';
	html += '	                                        <p>이메일을 입력해 주세요. </p>';
	html += '	                                    </div>';
	html += '	                                    <div class="error-msg" id="inpEnterEmailErr2">';
	html += '	                                        <p>이메일을 정확히 입력해 주세요. </p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <div class="inp-box entryCollect40 entryCollect">';
	html += '	                                <label for="inpEnterZonecode" class="lb-line">주소</label>';
	html += '		                            <div class="address-box">';
	html += '		                                <div class="address-search">';
	html += '	                                        <input type="text" id="inpEnterZonecode" name="inpEnterZonecode"readonly="readonly" class="inp-line" title="우편번호" placeholder="우편번호를 검색해 주세요." value="">';
	html += '	                                        <button type="button" class="btn btn-s btn-type1" id="zoneCodeBtn">우편번호</button>';
	html += '	                                    </div>';
	html += '	                                    <div class="address-txt">';
	html += '	                                        <div id="inpEnterAddressDiv" >';
	html += '	                                        </div>';
	html += '	                                        	<input type="hidden" id="inpEnterAddress" name="inpEnterAddress">';
	html += '	                                    </div>';
	html += '	                                    <div class="address-detail">';
	html += '	                                        <input type="text" name="inpEnterAddressDetail" id="inpEnterAddressDetail" class="inp-line" placeholder="상세주소를 입력해주세요(선택사항).">';
	html += '	                                    </div>';
	html += '	                                     <div class="error-msg" id="inpEnterZonecodeErr">';
	html += '	                                        <p>우편번호를 통해 주소를 선택해 주세요.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <div class="inp-box entryCollect50 entryCollect">';
	html += '	                                <label for="inpEnterSns" class="lb-line">SNS 게시물 URL</label>';
	html += '		                            <div>';
	html += '		                                <div class="inquiry-con">';
	html += '		                                    <textarea id="inpEnterSns" name="inpEnterSns" class="inp-line pop-tArea" placeholder="게시한 SNS URL을 입력해 주세요." maxlength="500"></textarea>';
	html += '		                                    <span class="txt-count sns-count"><em class="strong">0</em> / 500자</span>';
	html += '		                                </div>';
//	html += '	                                    <p class="essential">* SNS 안내 문구 영역</p>';
	html += '	                                    <div class="error-msg" id="inpEnterSnsErr">';
	html += '	                                       <p>SNS 게시물 URL을 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '	                                    <div class="error-msg" id="inpEnterSnsErr2">';
	html += '	                                       <p>URL을 정확하게 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '	                                </div>';
	html += '	                            </div>';

	html += '								<div class="inp-box entryCollect70 entryCollect">';
	html += '	                                <label for="inpEnterSchool" class="lb-line">학교</label>';
	html += '		                            <div>';
	html += '	                                    <input type="text" id="inpEnterSchool" name="inpEnterSchool" class="inp-line pop-tArea" readonly="readonly">';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <p class="txt-general eventGbCd70">* 잘못된 정보 입력 시 투표에 제한이 있을 수 있으며, 경품 당첨이 취소됩니다.</p>';

	html += '	                            <div id="addFieldArea"> ';

	html += '	                            </div>';

	html += '	                            <div class="inp-box goodsSelect eventGbCd50">';
	html += '	                                <label for="chk-goods-1" class="lb-line lb-top">제품 선택</label>';
	html += '		                            <div>';
	html += '	                                    <ul class="chk-list-box chk-form mo-col1" id="goodsUl"></ul>';

	html += '	                                     <div class="error-msg" id="chk-goods-err">';
	html += '	                                        <p>제품을 선택해 주세요.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <div class="inp-box goodsSelect eventGbCd50">';
	html += '	                                <p class="label-box">';
	html += '	                                    <label for="inpEnterSerialNum" class="lb-line">제품 시리얼 <br>넘버</label>';
	html += '	                                    <i class="btn-tooltop02" data-tooltip="serialno-usetip"><span>툴팁보기(레이어열림)</span></i>';
	html += '	                                </p>';
	html += '		                            <div>';
	html += '		                                <div class="inquiry-con">';
	html += '		                                    <textarea id="inpEnterSerialNum" name="inpEnterSerialNum" class="inp-line pop-tArea" placeholder="제품 시리얼 넘버 확인 후 입력해 주세요." maxlength="500"></textarea>';
	html += '		                                    <span class="txt-count serial-count"><em class="strong">0</em> / 500자</span>';
	html += '	                                    </div>';
	html += '	                                    <div class="serial-box">';
	html += '	                                        <p class="essential">* 제품의 시리얼 넘버를 입력하신 후 [확인하기] 버튼을 눌러주세요.</p>';
	html += '	                                        <button type="button" class="btn btn-s btn-type1" id="chkSerialNoBtn">확인하기</button>';
	html += '	                                    </div>';

	html += '	                                     <div class="error-msg" id="inpEnterSerialNumErr">';
	html += '	                                        <p>시리얼 넘버를 입력 후 확인해 주세요.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';
	html += '	                        </div>';
	html += '	                    </div>';

	html += '	                    <div class="survey-box qstList eventGbCd60">';
	html += '	                    </div>';

	html += '						<div class="user-info-box secure-pop-form user-form eventGbCd80">';
	html += '							<div class="secure-pop-tit bottom-line"><span class="titleNo">02. </span>매장선택</div>';
	html += '						    <p class="txt-general">매장 상담 가능한 매장 및 매장상담 희망일을 선택하세요.</p>';
	html += '						    <div class="secure-pop">';
	html += '						        <div class="inp-box">';
	html += '						            <label for="inpCounselName" class="lb-line">시/도 선택</label>';
	html += '						            <div>';
	html += '						                <div>';
	html += '						                    <div class="select-box">';
	html += '						                        <div id="dropAge" class="wrap-droplist">';
	html += '						                            <button class="droplist-button selected" aria-haspopup="listbox" aria-labelledby="dropAreaBtn" id="dropAreaBtn">서울</button>';
	html += '						                            <ul class="droplist" id="dropSiDo" tabindex="-1" role="listbox" aria-labelledby="dropAreaBtn" aria-activedescendant="dropArea1-1">';
	html += '						                            </ul>';
	html += '						                        </div>';
	html += '						                    </div>';
	html += '						                </div>';
	html += '						            </div>';
	html += '						        </div>';
	html += '						        <div class="inp-box">';
	html += '						            <label for="inpCounselCall" class="lb-line">시/군/구 선택</label>';
	html += '						           <div>';
	html += '						                <div class="select-box">';
	html += '						                    <div id="dropAge" class="wrap-droplist">';
	html += '						                        <button class="droplist-button selected" aria-haspopup="listbox" aria-labelledby="dropAreaBtn2" id="dropAreaBtn2">강남구</button>';
	html += '						                        <ul class="droplist" id="dropSiGunGu" tabindex="-1" role="listbox" aria-labelledby="dropAreaBtn2" aria-activedescendant="dropArea2-1">';
	html += '						                        </ul>';
	html += '						                    </div>';
	html += '						                </div>';
	html += '						            </div>';
	html += '						        </div>';

	html += '						        <ul class="chk-form style-btn store-select-list">';
	html += '						        </ul>';
	html += '								<div class="error-msg" id="radio-store1Err" style="text-align: center;">';
	html += '								    <p>매장을 선택하세요</p>';
	html += '								</div>';

	html += '						        <div class="store-detail-info">';
	html += '						            <div class="store-detail">';
	html += '						                <p class="store-name"></p>';
	html += '						                <dl>';
	html += '						                    <dt>주소</dt>';
	html += '						                    <dd id="storeAddr"></dd>';
	html += '						                </dl>';
	html += '						                <dl>';
	html += '						                    <dt>전화번호</dt>';
	html += '						                    <dd id="storeTel"></dd>';
	html += '						                </dl>';
	html += '						                <dl>';
	html += '						                    <dt>영업시간</dt>';
	html += '						                    <dd id="storeOpenTime"></dd>';
	html += '						                </dl>';
	html += '						                <dl class="dl-parking">';
	html += '						                    <dt>주차공간</dt>';
	html += '						                    <dd id="storeParkingInfo"></dd>';
	html += '						                </dl>';
	html += '						                <p class="btn-more-box"><a href="#" class="link" id="microSiteDetailView">상세보기 ></a></p>';
	html += '						            </div>';


	html += '						            <div class="store-detail-mapbox" id="map">';
	html += '						                <!-- 맵 영역 -->';
	html += '						            </div>';
	html += '						            <div class="hope-visit-date">';
	html += '						                <p class="date-title">방문 희망 일자 선택</p>';
	html += '						                <dl>';
	html += '						                    <dt>날짜선택</dt>';
	html += '						                    <dd>';
	html += '						                        <input type="text" id="visitDate" name="visitDate" placeholder="방문 희망 일자를 선택해 주세요." class="inp-line inp-calendar">';
	html += '						                        <p class="txt">* 삼성스토어 매장 마감시간은 20시 30분입니다.</p>';
	html += '						                    </dd>';
	html += '						                </dl>';
	html += '						            </div>';


	html += '						        </div>';
	html += '						    </div>';
	html += '						</div>';

	html += '	                    <div class="user-info-box secure-pop-form terms-form">';
	html += '	                        <div class="secure-pop-tit bottom-line">';
	html += '	                            <span class="titleNo">03. </span>개인정보 수집·이용 동의 <span class="ico-required">*<span>필수입력</span></span>';
	html += '	                        </div>';

	html += '	                        <div class="secure-pop terms-con">';
	html += '	                            <p class="txt-general">';
	html += '			                                귀하께서는 본 동의 안내 문구를 숙지하셨으며, 안내문구에 대해 거절하실 수 있습니다.<br>';
	html += '			                                단, 거절하신 경우에는 이벤트 응모가 제한되실 수 있습니다.';
	html += '	                            </p>';
	html += '	                            <div class="chk-form allChk-box">';
	html += '	                                <input id="chk-enter-all" data-allchk-name="allCheck" data-children-name="checkEventEnter" type="checkbox" required="" title=""';
	html += '	                                    class="checkBoxTerms">';
	html += '	                                <label for="chk-enter-all" class="chk-all">모든 약관을 확인하고 전체 동의합니다.</label>';
	html += '	                            </div>';
	html += '	                            <div id="privacyPolicy"></div>';
	html += '	                        </div>';

	html += '	                        <div class="help-box">';
	html += '	                            <p>';
	html += '			                                개인정보 처리에 대한 상세한 사항은 삼성전자 웹사이트  (<a href="http://www.samsung.com' + ctPath + '" class="link" target="_blank">www.samsung.com' + ctPath + '</a>)에 공개한 "삼성닷컴 이벤트 개인정보 처리방침"을 참조하십시오.<br>';
	html += '			                                다만, 본 동의서 내용과 상충되는 부분은 본 동의서 내용을 우선합니다.';
	html += '	                            </p>';
	html += '	                        </div>';
	html += '	                    </div>';
	html += '						<div class="user-info-box secure-pop-form terms-form  eventGbCd80">';
	html += '						    <div class="secure-pop-tit bottom-line">';
	html += '						        <span class="titleNo">04. </span>신청 정보 확인';
	html += '						    </div>';
	html += '						    <p class="txt-general">방문 희망일자와 매장 정보를 확인 후 신청을 완료하세요.</p>';
	html += '						    <div class="final-check-box">';
	html += '						        <p class="txt1 storeRsltMsg"><span class="txt-major selectedResultMsg"></span>으로<br><span class="selectedResultMsg2">매장방문을 신청합니다.</span></p>';
	html += '						        <p class="txt2">※ 신청 시 카카오 알림톡으로 &lt;“<span id="ftEvtNm"></span>” 매장상담예약&gt;<br> 초대장이 발송됩니다.</p>';
	html += '						        <p class="btn-area"><button type="button" class="btn btn-d btn-type2" id="reservationBtn">신청하기</button></p>';
	html += '						    </div>';
	html += '						</div>';
	html += '	                </fieldset>';
	html += '	            </form>';
	html += '	            <div class="btn-box " id="eventBtn_Area_div">';
	html += '		            <button type="button" class="btn btn-d btn-type2" id="eventSaveBtn">이벤트 응모</button>';
	html += '		        </div>';
	html += '	        </div>';
	html += '	    </div>';
	html += '	    <button type="button" class="pop-close evt-pop-close" data-focus-next="popupExhibitionEnter">팝업닫기</button>';
	html += '	</div>	';
	html += '</form>';

	return html;

}

/********************** 리뉴얼 이벤트용 팝업 HTML Start**********************/
function drawPopHtmlCodeRenewal(){
	var html="";
	html += '<form id="eventEntryPopFrm">';

	html += '	<input type="hidden" id="serialNumChk" value="N"/>';
	html += '	<input type="hidden" id="serialNum" name="serialNum" value=""/>';
	html += '	<input type="hidden" id="mdlCode" name="mdlCode" value=""/>';
	html += '	<input type="hidden" id="focusTarget" value=""/>';
	html += '	<input type="hidden" id="focusTargetType" value=""/>';
	html += '	<input type="hidden" id="jsonStr" name="jsonStr" value=""/>';

	html += '	<input type="hidden" id="voteJsonStr" name="voteJsonStr" value=""/>';

	html += '	<input type="hidden" id="entryEventNo" name="eventNo" value=""/>';
	html += '	<input type="hidden" id="evtGbCd" name="evtGbCd" value=""/>';
	html += '	<input type="hidden" id="isEvtGbFld" name="isEvtGbFld" value=""/>';
	html += '	<input type="hidden" id="prtcpPsbGbCd" name="prtcpPsbGbCd" value=""/>';
	html += '	<input type="hidden" id="prtcpPsbCnt" name="prtcpPsbCnt" value=""/>';
	html += '	<input type="hidden" id="visPlazaNo" name="visPlazaNo" value=""/>';
	html += '	<input type="hidden" id="visShopNo" name="visShopNo" value=""/>';
	html += '	<input type="hidden" id="visPlazaNm" name="visPlazaNm" value=""/>';
	html += '	<input type="hidden" id="visHopeDt" name="visHopeDt" value=""/>';
	html += '	<input type="hidden" id="visTimeCd" name="visTimeCd" value=""/>';
	html += '	<input type="hidden" id="visTimeCdNm" name="visTimeCdNm" value=""/>';
	html += '	<input type="hidden" id="visWithPrsnNum" name="visWithPrsnNum" value=""/>';
	html += '	<input type="hidden" id="visWithPrsnNumNm" name="visWithPrsnNumNm" value=""/>';
	html += '	<input type="hidden" id="visPlazaTel" name="visPlazaTel" value=""/>';
	html += '	<input type="hidden" id="visPlazaAddr" name="visPlazaAddr" value=""/>';
	html += '	<input type="hidden" id="visPathTpCd" name="visPathTpCd" value=""/>';
	html += '	<input type="hidden" id="cpNo" name="cpNo" value=""/>';
	html += '	<input type="hidden" id="eventNm" name="eventNm" value=""/>';
	html += '	<input type="hidden" id="microSiteUrl" name="microSiteUrl" value=""/>';
	html += '	<input type="hidden" id="biztalkTmplTxt" name="biztalkTmplTxt" value=""/>'; // 알림톡 템플릿 번호
	html += '	<input type="hidden" id="biztalkUseYn" name="biztalkUseYn" value=""/>'; // 알림톡 사용 여부
	html += '	<input type="hidden" id="prtnrCpUseYn" name="prtnrCpUseYn" value=""/>'; // 제휴쿠폰 사용 여부
	html += '	<input type="hidden" id="mktRcvSelYn" name="mktRcvSelYn" value=""/>'; // 광고성 정보 수신 전체 동의 여부

	html += '	<input type="hidden" id="weekdayCloseTime" name="weekdayCloseTime" value=""/>'; // 평일 마감시간
	html += '	<input type="hidden" id="weekdayOpenTime" name="weekdayOpenTime" value=""/>'; // 평일 오픈 시간
	html += '	<input type="hidden" id="weekendCloseTime" name="weekendCloseTime" value=""/>'; // 주말 마감 시간
	html += '	<input type="hidden" id="weekendOpenTime" name="weekendOpenTime" value=""/>'; // 주말 오픈 시간
	html += '	<input type="hidden" id="eventAddYn" name="eventAddYn" value=""/>'; // 주말 오픈 시간
	html += '	<input type="hidden" id="ciToken" name="ciToken" value=""/>';
	html += '	<input type="hidden" id="popEntrySuccMsg" name="popEntrySuccMsg" value=""/>';

	html += '	<div class="layer-pop layer-normal layer-event-exhibition layer-famailyPF layer-pop-content-festa-event" id="popupExhibitionEnter" tabindex="0" data-popup-layer="popupExhibitionEnter" data-focus="popupExhibitionEnter">';
	html += '       <button type="button" id="exhibition" data-popup-target="popupExhibitionEnter" style="display: none;"></button>';
	html += '	    <div class="layer-header" id="evtHeader">';
	html += '	        <h2>응모 하기</h2>';
	html += '	    </div>';
	html += '	    <div class="layer-content">';
	html += '	        <div class="frm-login ">';
	html += '	            <form action="">';
	html += '	                <fieldset class="secureInp">';
	html += '	                    <legend>응모 입력 폼</legend>';
	html += '						 <div class="event-img">';
	html += '	                        <img src="" alt="" id="evtImg">';
	html += '	                    </div>';

//	html += '	                    <div class="vote-txt-box eventGbCd70">';
//	html += '	                        <p><strong><span id="evtNm"></span></strong> 투표에 참여해주셔서 감사합니다.</p>';
//	html += '	                        <p>투표 이벤트 추첨을 위해 아래 정보를 작성해주세요.</p>';
//	html += '	                        <p class="txt-major">* 투표하기는 1회만 가능합니다.</p>';
//	html += '	                    </div>';

	html += '	                    <div class="user-info-box secure-pop-form user-form">';
	html += '	                        <div class="secure-pop-tit bottom-line"><span class="titleNo">01. </span><span id="popTitle">응모자 정보</span></div>';
	html += '	                        <div class="secure-pop form-write">';
	html += '	                            <div class="inp-box entryCollect10 entryCollect">';
	html += '	                                <label for="inpEnterName" class="lb-line">이름</label>';
	html += '		                            <div>';
	html += '		                                <input type="text" id="inpEnterName" name="inpEnterName" class="inp-line" value="" readonly="readonly">';
	html += '		                                <div class="error-msg" id="inpEnterNameErr">';
	html += '	                                    	<p>이름을 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <div class="inp-box entryCollect20 entryCollect">';
	html += '	                                <label for="inpEnterCall" class="lb-line">연락처</label>';
	html += '		                            <div>';
	html += '	                                    <input type="text" id="inpEnterCall" name="inpEnterCall" class="inp-line" placeholder="(-) 없이 숫자만 입력해 주세요." numberOnly maxlength="11">';
	html += '	                                    <div class="error-msg" id="inpEnterCallErr">';
	html += '	                                    	<p>연락처를 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '	                                    <div class="error-msg"  id="inpEnterCallErr2">';
	html += '	                                    	<p>연락처가 올바르지 않습니다.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '								<div class="inp-box entryCollect60 entryCollect">';
	html += '								    <label for="inpCounselMembership" class="lb-line line-double">삼성전자 <br>멤버십 번호</label>';
	html += '								    <div>';
	html += '								        <input type="text" id="inpCounselMembership" class="inp-line" value="" readonly="readonly">';
	html += '	                                    <div class="error-msg" id="inpCounselMembershipErr">';
	//html += '	                                    	<p>나의 정보에서 멤버십 회원 추가정보 입력 후</p><p>알림신청하면 멤버십 번호가 보여집니다.</p>';
	html += '	                                    </div>';
	html += '								    </div>';
	html += '								</div>';

	html += '	                            <div class="inp-box entryCollect30 entryCollect">';
	html += '	                                <label for="inpEnterEmail" class="lb-line">이메일</label>';
	html += '		                            <div>';
	html += '	                                    <input type="text" id="inpEnterEmail" name="inpEnterEmail" class="inp-line" placeholder="이메일을 입력해 주세요.">';
	html += '	                                    <div class="error-msg" id="inpEnterEmailErr">';
	html += '	                                        <p>이메일을 입력해 주세요. </p>';
	html += '	                                    </div>';
	html += '	                                    <div class="error-msg" id="inpEnterEmailErr2">';
	html += '	                                        <p>이메일을 정확히 입력해 주세요. </p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <div class="inp-box entryCollect40 entryCollect">';
	html += '	                                <label for="inpEnterZonecode" class="lb-line">주소</label>';
	html += '		                            <div class="address-box">';
	html += '		                                <div class="address-search">';
	html += '	                                        <input type="text" id="inpEnterZonecode" name="inpEnterZonecode"readonly="readonly" class="inp-line" title="우편번호" placeholder="우편번호를 검색해 주세요." value="">';
	html += '	                                        <button type="button" class="btn btn-s btn-type1" id="zoneCodeBtn">우편번호</button>';
	html += '	                                    </div>';
	html += '	                                    <div class="address-txt">';
	html += '	                                        <div id="inpEnterAddressDiv" >';
	html += '	                                        </div>';
	html += '	                                        	<input type="hidden" id="inpEnterAddress" name="inpEnterAddress">';
	html += '	                                    </div>';
	html += '	                                    <div class="address-detail">';
	html += '	                                        <input type="text" name="inpEnterAddressDetail" id="inpEnterAddressDetail" class="inp-line" placeholder="상세주소를 입력해주세요(필수사항).">';
	html += '	                                    </div>';
	html += '	                                     <div class="error-msg" id="inpEnterZonecodeErr">';
	html += '	                                        <p>우편번호를 통해 주소를 선택해 주세요.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <div class="inp-box entryCollect50 entryCollect">';
	html += '	                                <label for="inpEnterSns" class="lb-line">SNS 게시물 URL</label>';
	html += '		                            <div>';
	html += '		                                <div class="inquiry-con">';
	html += '		                                    <textarea id="inpEnterSns" name="inpEnterSns" class="inp-line pop-tArea" placeholder="게시한 SNS URL을 입력해 주세요." maxlength="500"></textarea>';
	html += '		                                    <span class="txt-count sns-count"><em class="strong">0</em> / 500자</span>';
	html += '		                                </div>';
	//html += '	                                    <p class="essential">* SNS 안내 문구 영역</p>';
	html += '	                                    <div class="error-msg" id="inpEnterSnsErr">';
	html += '	                                       <p>SNS 게시물 URL을 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '	                                    <div class="error-msg" id="inpEnterSnsErr2">';
	html += '	                                       <p>URL을 정확하게 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '	                                </div>';
	html += '	                            </div>';

	html += '								<div class="inp-box entryCollect70 entryCollect">';
	html += '	                                <label for="inpEnterSchool" class="lb-line">학교</label>';
	html += '		                            <div>';
	html += '	                                    <input type="text" id="inpEnterSchool" name="inpEnterSchool" class="inp-line" readonly="readonly">';
	html += '		                            </div>';
	html += '	                            </div>';

//	html += '	                            <p class="txt-general eventGbCd70">* 잘못된 정보 입력 시 투표에 제한이 있을 수 있으며, 경품 당첨이 취소됩니다.</p>';

	html += '	                            <div id="eventGbField"> ';
	html += '	                            </div>';

	html += '	                            <div id="addFieldArea"> ';
	html += '	                            </div>';
	html += '	                        </div>';
	html += '	                    </div>';


	html += '	                    <div class="user-info-box secure-pop-form terms-form">';
	html += '	                        <div class="secure-pop-tit bottom-line">';
	html += '	                            <span class="titleNo">03. </span>개인정보 수집·이용 동의 <span class="ico-required">*<span>필수입력</span></span>';
	html += '	                        </div>';

	html += '	                        <div class="secure-pop terms-con">';
	html += '	                            <p class="txt-general">';
	html += '			                                귀하께서는 본 동의 안내 문구를 숙지하셨으며, 안내문구에 대해 거절하실 수 있습니다.<br>';
	html += '			                                단, 거절하신 경우에는 이벤트 응모가 제한되실 수 있습니다.';
	html += '	                            </p>';
	html += '	                            <div class="chk-form allChk-box">';
	html += '	                                <input id="chk-enter-all" data-allchk-name="allCheck" data-children-name="checkEventEnter" type="checkbox" required="" title=""';
	html += '	                                    class="checkBoxTerms">';
	html += '	                                <label for="chk-enter-all" class="chk-all">모든 약관을 확인하고 전체 동의합니다.</label>';
	html += '	                            </div>';
	html += '	                            <div id="privacyPolicy"></div>';
	html += '	                        </div>';

	html += '	                        <div class="help-box">';
	html += '	                            <p>';
	html += '			                                개인정보 처리에 대한 상세한 사항은 삼성전자 웹사이트  (<a href="http://www.samsung.com/sec" class="link" target="_blank">www.samsung.com/sec</a>)에 공개한 "삼성닷컴 이벤트 개인정보 처리방침"을 참조하십시오.<br>';
	html += '			                                다만, 본 동의서 내용과 상충되는 부분은 본 동의서 내용을 우선합니다.';
	html += '	                            </p>';
	html += '	                        </div>';
	html += '	                    </div>';
	html += '						<div class="user-info-box secure-pop-form terms-form  eventGbCd80">';
	html += '						    <div class="secure-pop-tit bottom-line">';
	html += '						        <span class="titleNo">04. </span>신청 정보 확인';
	html += '						    </div>';
	html += '						    <p class="txt-general">방문 희망일자와 매장 정보를 확인 후 신청을 완료하세요.</p>';
	html += '						    <div class="final-check-box">';
	html += '						        <p class="txt1 storeRsltMsg"><span class="txt-major selectedResultMsg"></span>으로<br><span class="selectedResultMsg2">매장방문을 신청합니다.</span></p>';
	html += '						        <p class="txt2">※ 신청 시 카카오 알림톡으로 &lt;“<span id="ftEvtNm"></span>” 매장상담예약&gt;<br> 초대장이 발송됩니다.</p>';
	html += '						        <p class="btn-area"><button type="button" class="btn btn-d btn-type2" id="reservationBtn">신청하기</button></p>';
	html += '						    </div>';
	html += '						</div>';
	html += '	                </fieldset>';
	html += '	            </form>';
	html += '	            <div class="btn-box " id="eventBtn_Area_div">';
	html += '		            <button type="button" class="btn btn-d btn-type2" id="eventSaveBtn">이벤트 응모</button>';
	html += '		        </div>';
	html += '	        </div>';
	html += '	    </div>';
	html += '	    <button type="button" class="pop-close evt-pop-close" data-focus-next="popupExhibitionEnter">팝업닫기</button>';
	html += '	</div>	';
	html += '</form>';

	return html;

}
/********************** 리뉴얼 이벤트용 팝업 HTML End **********************/



/********************** 언팩 전용 모듈 **********************/

var certificationFlag = false;

function fnCallPop3(evtNo, paramPhoneTpCd){
	if (!certificationFlag) {
		pblcEvtNo = evtNo;
		phoneTpCd = paramPhoneTpCd;
	}

	returnUrl = window.location.pathname;

	var searchPath = window.location.search;

	if(searchPath.indexOf("eventNo") != -1) {
		returnUrl += searchPath;
	} else {
		if (searchPath.indexOf("?") != -1){
			if(returnUrl.indexOf("event/eventContentDetailView") != -1) {
				returnUrl += searchPath + "&eventNo="+pblcEvtNo;
			} else {
				returnUrl += searchPath;
			}
		} else {
//			returnUrl += "?eventNo="+pblcEvtNo;
		}
	}

	stPath = ($("#openPop").data("st-path"));

	var param;
	param = {eventNo : pblcEvtNo , isPreView : isPreView };


	var options2 = {
			url : "/sec/xhr/member/getSession",
			type: "POST",
			done : function(data){
				var options = {
						url : stPath+"xhr/event/getEventBaseInfo"
						, data : param
						, done: function (data2) {
							$("#mask").remove();
							var eventInfo = data2.eventInfo;

							if(eventInfo.errMsg == "" || eventInfo.errMsg == null){
								if (!certificationFlag) {
									fnNicePopup(data2);
								} else {
									setEventPop2(data2);
								}
							}else{
								if(eventInfo.errCd == "LGN0005"){
									makeAlert(eventInfo.errMsg, fnGoLoginPage2);
								}else{
									makeAlert(eventInfo.errMsg, eventPopClose);
								}
							}
						}
					};

				var session = JSON.parse(data);

				if (session.mbrNo == 0) { // 로그인이 되어 있지 않을때
					options = $.extend({}, options, {netFunnelId : 'b2c_gnb_login'});

				} else { // 로그인이 되어있을때
					if (!certificationFlag) {
						options = $.extend({}, options, {netFunnelId : 'b2c_promotion2'});
					}
				}

				ajax.call(options);
			}
	}

	ajax.call(options2);


}

//휴대폰실명인증 popup
function fnNicePopup(data) {
	stPath = ($("#openPop").data("st-path"));

	$unpackAuthDiv = $(drawUnpackAuthDivHtmlCode(data));

	$("#popupArea_Event3791").html("");

	if($("#popupArea_Event3791").length > 0) {
		$("#popupArea_Event3791").append($unpackAuthDiv);
		var checkPlus = data.checkPlus;

		$("form[name='form_chk']").children("input[name='EncodeData']").val(checkPlus.encData);

	}

	var agent = navigator.userAgent.toLowerCase();
	if ( ( (navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf("msie") !== -1))){
		newWindowAndSubmit({
			url : stPath + 'popupCheckPlus/',
			nice : true
			, stContextPath : stPath
		})
	} else {
		window.open(
						'',
						'popupChk',
						'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
		document.form_chk.action = "https://evt.niceid.co.kr/CheckPlusSafeModel/checkplus.cb";
		document.form_chk.target = "popupChk";
		document.form_chk.submit();
	}
}
// KCB인증시 콜백함수명이 겹치므로 주석처리(2022-02-23, kdp59.sec)
// 실명인증 후 callback
//function cbCertificationInfo(data) {
//	if(data.rtnCode){
//		param = { ciToken : data.colInfo, phoneTpCd: phoneTpCd };
//
//		ciToken = data.colInfo;
//		stPath = ($("#openPop").data("st-path"));
//
//		var options = {
//			url : stPath+"xhr/event/getUnpackNiceAuthCnt"
//			, data : param
//			, done: function (data) {
//
//				if (data.niceAuthCnt > 0) { // 이미 나이스정보로 등록이 되어 있으면,
//					certificationFlag = false;
//					makeAlert("이미 응모하였습니다.");
//
//				} else {
//					certificationFlag = true;
//
//					makeAlert("본인 인증이 완료 되었습니다.", fnCallPop3Chain);
//				}
//
//			}
//		};
//
//		ajax.call(options);
//
//	} else{
//		certificationFlag = false;
//	}
//}

function fnCallPop3Chain() {
	fnCallPop3(pblcEvtNo, phoneTpCd);
}

/* Nice인증 */
function drawUnpackAuthDivHtmlCode(data){
	var html="";
	html += '<form name="form_chk" method="post" action="/checkplus_main.jsp">';
	html += '	<input type="hidden" name="m" value="checkplusService">';
	html += '	<input type="hidden" name="EncodeData" value="">';
	html += '</form>';

	return html;
}

/* 이벤트 응모 팝업 화면 셋팅 */
function setEventPop2(data){
	fnDrawPop2();

	$("#phoneTpCd").val(phoneTpCd);
	$("#ciToken").val(ciToken);

	$("#exhibition").click(); // 팝업표시

	eventInfo = data.eventInfo;
	entryEvent = eventInfo.entryEvent;
	collectItems = eventInfo.eventCollectItems; // 수집항목
//	goodsSerialInfos = eventInfo.goodsSerialInfos; // 제품목록
	plcyContentCollect = eventInfo.plcyContentCollect; // 개인 정보 처리 수집 이용 동의
	plcyContentPrcs = eventInfo.plcyContentPrcs; // 개인 정보 처리 업무 위탁 동의
	eventPrivacyPolicys = eventInfo.eventPrivacyPolicys; // 개인 정보 방침 리스트 or 마케팅 수신 동의
//	addFields = eventInfo.addFields; // 추가필드
//	questionInfos = eventInfo.questionInfos; // 설문문항
//	plazas = eventInfo.plazas;
//	siDoList = eventInfo.siDoList;
//	siGunGuList = eventInfo.siGunGuList;
	eventAddYn = entryEvent.eventAddYn;

	$("#entryEventNo").val(entryEvent.eventNo); // 서버전송용 이벤트 번호
	$("#evtGbCd").val(entryEvent.eventGbCd); // 서버전송용 이벤트 구분
	$("#prtcpPsbGbCd").val(entryEvent.prtcpPsbGbCd); // 참여가능구분코드
	$("#prtcpPsbCnt").val(entryEvent.prtcpPsbCnt); // 참여가능수
	$("#evtNm").text(entryEvent.ttl);
	$("#cpNo").val(entryEvent.cpNo); // 쿠폰번호 셋팅
	$("#ftEvtNm").text(entryEvent.ttl); // 쿠폰번호 셋팅
//	$("#eventAddYn").val(entryEvent.eventAddYn); // 특정이벤트 웹서버, 아카마이 업로드 여부

	sessionMbr = eventInfo.loginUserMbrNo;
	membershipNo = eventInfo.loginUserMembership;

	// 이벤트 응모 구분 (개인정보 수집, 설문, 투표, 시리얼번호체크 등)
	eventGbCd = entryEvent.eventGbCd;

	setLayoutShowHide(eventGbCd);
	setCommLayout(entryEvent, collectItems, addFields);

	if(eventGbCd == "40"){
		$(".goodsSelect").hide();
		$("#goodsUl").empty();

		// 알림톡 사용 여부
		$("#biztalkUseYn").val(entryEvent.biztalkUseYn);

		// 알림톡 템플릿
		$("#biztalkTmplTxt").val(entryEvent.biztalkTmplTxt);
	}

	// 개인 정보 동의 관련 =====================================================================
	var policyHtml="";
	$("#privacyPolicy").empty();

	// 개인 정보 처리 수집 이용 동의
	policyHtml += createPrivacyPolicyHtml(plcyContentCollect, 1);
	// 개인 정보 처리 업무 위탁 동의
	if (plcyContentPrcs != null) {
		policyHtml += createPrivacyPolicyHtml(plcyContentPrcs, 2);
	}
	// 개인정보수집유형 : 마케팅수신동의 및 그외
	$.each(eventPrivacyPolicys, function(idx, val){
		var index = idx +3;
		policyHtml += createPrivacyPolicyHtml(val, index);
	});
	$("#privacyPolicy").append(policyHtml);

	$(".error-msg").hide();

    if (eventAddYn == 'N') { // default 문구
    	$("#inpCounselMembershipErr").html("<p>나의 정보에서 멤버십 회원 추가정보 입력 후</p><p>알림신청하면 멤버십 번호가 보여집니다.</p>");
    } else if (eventAddYn == 'Y') { // 웨신샵 이벤트일때 문구 변경
    	$("#inpCounselMembershipErr").html("<p>※멤버십번호가 보이지 않으시나요?</p><p>화면 우측 상단 > 나의정보 메뉴에서</p><p>멤버십 가입여부 확인 후 다시 시도해 보세요.</p><p>(미가입 시 가입 후 재시도 필요)</p>");
    }

	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}

}


/* 로그인 페이지 이동 */
function fnGoLoginPage2(){
	window.location.href = stPath+"member/indexLogin/?returnUrl="+returnUrl;
	$(".evt-pop-close").trigger("click");
}

function fnDrawPop2(){
	// 팝업 html Code
	if($("#popupArea_Event3791").length > 0){
		$("#popupArea_Event3791").append($popDiv2);
	}else{
		$("#popupArea").append($popDiv2);
	}

	$(".titleNo").show();
}

/*
	팝업영역 html tag
*/
function drawPopHtmlCode2(){
	var html="";
	html += '<form id="eventEntryPopFrm">';

	html += '	<input type="hidden" id="jsonStr" name="jsonStr" value=""/>';
	html += '	<input type="hidden" id="entryEventNo" name="eventNo" value=""/>';
	html += '	<input type="hidden" id="evtGbCd" name="evtGbCd" value=""/>';
	html += '	<input type="hidden" id="prtcpPsbGbCd" name="prtcpPsbGbCd" value=""/>';
	html += '	<input type="hidden" id="prtcpPsbCnt" name="prtcpPsbCnt" value=""/>';
	html += '	<input type="hidden" id="cpNo" name="cpNo" value=""/>';
	html += '	<input type="hidden" id="eventNm" name="eventNm" value=""/>';
	html += '	<input type="hidden" id="microSiteUrl" name="microSiteUrl" value=""/>';
	html += '	<input type="hidden" id="biztalkTmplTxt" name="biztalkTmplTxt" value=""/>'; // 알림톡 템플릿 번호
	html += '	<input type="hidden" id="biztalkUseYn" name="biztalkUseYn" value=""/>'; // 알림톡 사용 여부
	html += '	<input type="hidden" id="mktRcvSelYn" name="mktRcvSelYn" value=""/>'; // 광고성 정보 수신 전체 동의 여부

	html += '	<input type="hidden" id="eventAddYn" name="eventAddYn" value=""/>';
	html += '	<input type="hidden" id="ciToken" name="ciToken" value=""/>';
	html += '	<input type="hidden" id="phoneTpCd" name="phoneTpCd" value=""/>';

	html += '	<div class="layer-pop layer-normal layer-event-exhibition" id="popupExhibitionEnter" tabindex="0" data-popup-layer="popupExhibitionEnter" data-focus="popupExhibitionEnter">';
	html += '       <button type="button" id="exhibition" data-popup-target="popupExhibitionEnter" style="display: none;"></button>';
	html += '	    <div class="layer-header" id="evtHeader">';
	html += '	        <h2>응모 하기</h2>';
	html += '	    </div>';
	html += '	    <div class="layer-content">';
	html += '	        <div class="frm-login ">';
	html += '	            <form action="">';
	html += '	                <fieldset class="secureInp">';
	html += '	                    <legend>응모 입력 폼</legend>';
	html += '						 <div class="event-img">';
	html += '	                        <img src="" alt="" id="evtImg">';
	html += '	                    </div>';

	html += '	                    <div class="user-info-box secure-pop-form user-form">';
	html += '	                        <div class="secure-pop-tit bottom-line"><span class="titleNo">01. </span><span id="popTitle">응모자 정보</span></div>';
	html += '	                        <div class="secure-pop form-write">';
	html += '	                            <div class="inp-box entryCollect10 entryCollect">';
	html += '	                                <label for="inpEnterName" class="lb-line">이름</label>';
	html += '		                            <div>';
	html += '		                                <input type="text" id="inpEnterName" name="inpEnterName" class="inp-line" value="" readonly="readonly">';
	html += '		                                <div class="error-msg" id="inpEnterNameErr">';
	html += '	                                    	<p>이름을 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <div class="inp-box entryCollect20 entryCollect">';
	html += '	                                <label for="inpEnterCall" class="lb-line">연락처</label>';
	html += '		                            <div>';
	html += '	                                    <input type="text" id="inpEnterCall" name="inpEnterCall" class="inp-line" placeholder="(-) 없이 숫자만 입력해 주세요." numberOnly maxlength="11">';
	html += '	                                    <div class="error-msg" id="inpEnterCallErr">';
	html += '	                                    	<p>연락처를 입력해 주세요.</p>';
	html += '	                                    </div>';
	html += '	                                    <div class="error-msg"  id="inpEnterCallErr2">';
	html += '	                                    	<p>연락처가 올바르지 않습니다.</p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '								<div class="inp-box entryCollect60 entryCollect">';
	html += '								    <label for="inpCounselMembership" class="lb-line line-double">삼성전자 <br>멤버십 번호</label>';
	html += '								    <div>';
	html += '								        <input type="text" id="inpCounselMembership" class="inp-line" value="" readonly="readonly">';
	html += '	                                    <div class="error-msg" id="inpCounselMembershipErr">';
	//html += '	                                    	<p>나의 정보에서 멤버십 회원 추가정보 입력 후</p><p>알림신청하면 멤버십 번호가 보여집니다.</p>';
	html += '	                                    </div>';
	html += '								    </div>';
	html += '								</div>';

	html += '								<div class="inp-box entryCollect70 entryCollect">';
	html += '	                                <label for="inpEnterSchool" class="lb-line">학교</label>';
	html += '		                            <div>';
	html += '	                                    <input type="text" id="inpEnterSchool" name="inpEnterSchool" class="inp-line" readonly="readonly">';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                            <div class="inp-box entryCollect30 entryCollect">';
	html += '	                                <label for="inpEnterEmail" class="lb-line">이메일</label>';
	html += '		                            <div>';
	html += '	                                    <input type="text" id="inpEnterEmail" name="inpEnterEmail" class="inp-line" placeholder="이메일을 입력해 주세요.">';
	html += '	                                    <div class="error-msg" id="inpEnterEmailErr">';
	html += '	                                        <p>이메일을 입력해 주세요. </p>';
	html += '	                                    </div>';
	html += '	                                    <div class="error-msg" id="inpEnterEmailErr2">';
	html += '	                                        <p>이메일을 정확히 입력해 주세요. </p>';
	html += '	                                    </div>';
	html += '		                            </div>';
	html += '	                            </div>';

	html += '	                        </div>';
	html += '	                    </div>';

	html += '	                    <div class="user-info-box secure-pop-form terms-form">';
	html += '	                        <div class="secure-pop-tit bottom-line">';
	html += '	                            <span class="titleNo">03. </span>개인정보 수집·이용 동의 <span class="ico-required">*<span>필수입력</span></span>';
	html += '	                        </div>';

	html += '	                        <div class="secure-pop terms-con">';
	html += '	                            <p class="txt-general">';
	html += '			                                귀하께서는 본 동의 안내 문구를 숙지하셨으며, 안내문구에 대해 거절하실 수 있습니다.<br>';
	html += '			                                단, 거절하신 경우에는 이벤트 응모가 제한되실 수 있습니다.';
	html += '	                            </p>';
	html += '	                            <div class="chk-form allChk-box">';
	html += '	                                <input id="chk-enter-all" data-allchk-name="allCheck" data-children-name="checkEventEnter" type="checkbox" required="" title=""';
	html += '	                                    class="checkBoxTerms">';
	html += '	                                <label for="chk-enter-all" class="chk-all">모든 약관을 확인하고 전체 동의합니다.</label>';
	html += '	                            </div>';
	html += '	                            <div id="privacyPolicy"></div>';
	html += '	                        </div>';

	html += '	                        <div class="help-box">';
	html += '	                            <p>';
	html += '			                                개인정보 처리에 대한 상세한 사항은 삼성전자 웹사이트  (<a href="http://www.samsung.com/sec" class="link" target="_blank">www.samsung.com/sec</a>)에 공개한 "삼성닷컴 이벤트 개인정보 처리방침"을 참조하십시오.<br>';
	html += '			                                다만, 본 동의서 내용과 상충되는 부분은 본 동의서 내용을 우선합니다.';
	html += '	                            </p>';
	html += '	                        </div>';
	html += '	                    </div>';
	html += '	                </fieldset>';
	html += '	            </form>';
	html += '	            <div class="btn-box " id="eventBtn_Area_div2">';
	html += '		            <button type="button" class="btn btn-d btn-type2" id="eventSaveBtn2">이벤트 응모</button>';
	html += '		        </div>';
	html += '	        </div>';
	html += '	    </div>';
	html += '	    <button type="button" class="pop-close evt-pop-close" data-focus-next="popupExhibitionEnter">팝업닫기</button>';
	html += '	</div>	';
	html += '</form>';

	return html;

}

//이벤트 응모
$(document).on('click', "#eventSaveBtn2", function(){
	fnSaveEventEntry2();
});

/*
	이벤트 응모 저장
*/
function fnSaveEventEntry2(){

	//createJsonStr();

	$("#focusTarget").val("");

	if(fnValidationCheck2()){
		if ( $("#inpEnterSns").val() ) {
			var snsUrl =  $("#inpEnterSns").val();
			snsUrl = snsUrl.trim().replace(/^(http|https):\/\//, "");

			$("#inpEnterSns").val(snsUrl);
		}

		$("#addFieldArea").children(".inp-box").each(function(){
			var $addFieldId = $(this).find("[id^='addField']");

			var fldtpcd = $addFieldId.data("fldtpcd");

			if (fldtpcd === 10 || fldtpcd === 20 || fldtpcd === 90) { //한줄 입력(10) 또는 여러줄입력(20) 일때
				var fldVal =  $addFieldId.val();
				fldVal = fldVal.trim().replace(/^(http|https):\/\//, "");

				$addFieldId.val(fldVal);
			}

		});

		createJsonStr();



		var options = {
				url: stPath+"xhr/event/insertEventEntry",
				data: $("#eventEntryPopFrm").serialize(),
				done: function (data) {
					var result = data.result;
					makeAlert(result.resultMsg, eventPopClose);

					certificationFlag = false;
					//if(result.resultCd == "success"){
	//					console.log("응모저장 : ",result.resultCd);
						// 무슨 이유인지는 퍼블 문의 필요
						// 버튼에 display: none 이 들어가서 버튼이 안보임
						// 매장예약 상담 이벤트 일 경우에만
						// 임시로 style을 지우고 있음
						/*if(entryEvent.eventGbCd == "80"){
							$(".btn-box").removeAttr("style");
						}*/
					//}

				}
			};

		$(".btn-box").removeAttr("style");
		if(isPreView) return;

		oneTimeChk = false;

		ajax.call(options);
	}
	// validation result
	else{
		var id = $("#focusTarget").val();
		var type = $("#focusTargetType").val();

		if(type == ""){
			setTimeout(function(){
				$("#"+id).focus();
			}, 1);
		}else{
			$("input[name="+id+"]").focus();
		}
		return;
	}

}

/*
 * [유효성 체크]
 */
function fnValidationCheck2(){

	var passyn = "Y";

	$(".error-msg").hide();
	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}

	const collectItem = {
		                  "10" : {/*이름*/ id : "inpEnterName", errId1 : "inpEnterNameErr", errId2 : "inpEnterNameErr", callback : null},
						  "20" : {/*연락처*/ id : "inpEnterCall", errId1 : "inpEnterCallErr", errId2 : "inpEnterCallErr2", callback : fnMobileCheck},
						  "30" : {/*이메일*/ id : "inpEnterEmail", errId1 : "inpEnterEmailErr", errId2 : "inpEnterEmailErr2", callback : fnEmailCheck},
						};

	// 수집항목 null 체크
	$.each(collectItems, function(idx, val){

		// 멤버십은 체크하지 않는다.
//		if(val.collectItemCd != "60"){
			var collectItemId = collectItem[val.collectItemCd].id;
			var collectItemErrId = collectItem[val.collectItemCd].errId1;
			var collectItemVal = $("#"+collectItemId).val();

			if(collectItemVal == ""){
				$("#"+collectItemErrId).show();
				passyn = "N";
				fnFocusIdSet(collectItemId); // focus될 아이디 정보
			}
//		}
	});

	// 유효성 체크 결과
	let validationSubResult;
	const chkArr = ["20", "30"]; // 연락처, 이메일, url 유효성 체크

	$.each(chkArr, function(i, val){
		validationSubResult = fnValidationSub(collectItem[val]);
		if(!validationSubResult){
			passyn = "N";
			fnFocusIdSet(collectItem[val].id);
		}
	})

	// 생성된 추가필드에 대한 유효성 체크
//	passyn = fnValidationAddFieldsChk(passyn);

	// 개인정보 수집형 일때
	if(eventGbCd == "40"){
		$("#eventNm").val(entryEvent.ttl);
	}

	// 개인정보수집관련
	passyn = fnValidationPrivacyPolicy(passyn);

	return passyn == "Y" ? true : false;
}


//로그인 체크
//function fnLoginCheck() {
//	stPath = ($("#openPop").data("st-path"));
//
//	var options = {
//			url : stPath+"xhr/member/getSession",
//			type: "POST",
//			done : function(data){
//				var session = JSON.parse(data);
//
//				if (session.mbrNo == 0) {
//					makeAlert("로그인이 필요합니다.", fnLoginPage);
//
//				}
//			}
//	}
//
//	ajax.call(options);
//}

//function fnLoginPage() {
//	stPath = ($("#openPop").data("st-path"));
//
//	var returnUrl = document.referrer;
//
//	location.href= stPath + 'member/indexLogin/?returnUrl='+returnUrl;
//}

/*
	당첨자 확인 기간 확인
*/
function fnCheckWinConstraints(evtNo, paramGoodsId){

	returnUrl = window.location.pathname;

	var searchPath = window.location.search;

	returnUrl += searchPath;

	stPath = ($("#openPop").data("st-path"));

	unpackGoodsId = paramGoodsId;

	let param = {
			eventNo : evtNo
	};

	let options = {
		url : stPath+"xhr/event/checkWinConstraints"
		, data : param
		, done: function (data) {
			$("#mask").remove();

			var result = data.result;

			if (result.errCd == "LGN0005") {
				makeAlert(result.errMsg, fnGoLoginPage);

			} else if (result.errCd == "EVTWIN0005") { //당첨되었을때
				var paramAlert = [];
				paramAlert.content = result.errMsg;
				paramAlert.btnText = "구매하러 가기";
				paramAlert.goodsId = paramGoodsId;
				makeAlert2(paramAlert, fnEventNowBuyChain);

			} else {
				makeAlert(result.errMsg, eventPopClose);
			}

		}
	};
//	options = $.extend({}, options, {netFunnelId : 'b2c_promotion2'});

	ajax.call(options);

}

function fnEventNowBuyChain () {

	fnEventNowBuy(unpackGoodsId);
}

function fnEventNowBuy (unpackGoodsId) {
	$eventCartForm = drawEventCartHtmlCode();

	$("#popupArea_Event3791").html("");

	if($("#popupArea_Event3791").length > 0) {
		$("#popupArea_Event3791").append($eventCartForm);
	}

	//G000181490, G000181479, G000181471
	$("form[name='eventGoodsCartForm'] > input[name='goodsIds']").val(unpackGoodsId);
	eventGoodsDetail.fnCartNowBuy(eventGoodsDetail.fnReqData());
}

/*
	툴팁영역 html tag
*/
function drawEventCartHtmlCode(){
	var html="";
	html += '	<form id="eventGoodsCartForm" name="eventGoodsCartForm" method="post">';
	html += '    <input type="hidden" name="goodsIds" value="" />';                      //상품번호
	html += '    <input type="hidden" name="stGbCd" value="10" />';                        //사이트구분코드
	html += '    <input type="hidden" name="stId" value="1" />';                          //사이트 아이디
	html += '    <input type="hidden" name="nowBuyYn" value="Y" />';                     //바로구매 여부
	html += '    <input type="hidden" name="buyQtys" class="count-prd" value="1" />';    //구매수량
	html += '    <input type="hidden" name="orderType" value="ONCE" />';    //주문유형
	html += '</form>';
	return html;
}

/* 공통 레이어 알럿 팝업 */
function makeAlert2(contentsParam, calback){

	//TB응모형이벤트 전용 구매이력체크
	if(!checkEvtPersonalBuyLimit(contentsParam.goodsId)){
		return false;
	}

	var contentsparam = contentsParam;
	let alertData = {
               content : contentsparam.content
               ,btnText : contentsparam.btnText
               ,callback : calback
               };

	commonAlert(alertData);
	openLayer('commonAlert');
}

/* TB응모형 이벤트 구매수량 chk(TB응모형 이벤트 전용)
 * Author : Gyeongjae.id(주문)
 * */
function checkEvtPersonalBuyLimit(goodsId){

	let rtnVal = true;

	let options = {
		url : stPath+"xhr/order/check/checkEvtPersonalBuyLimit"
		, async : false
		, data : {goodsId : goodsId}
		, done: function (data) {
			console.log(typeof data);
			if(data){
				rtnVal = data;
			}else{
				rtnVal = data;
				commonAlert({title: "alert" ,content : "이미 구매하신 상품입니다."});
				openLayer('commonAlert');
			}
		}
	};
	ajax.call(options);

	return rtnVal;
}

/********************** 코세페 (코리아 세일 페스타) start**********************/
/* 팝업 호출 */
function fnCallPop4(evtNo){
	oneTimeChk = false;

	pblcEvtNo = evtNo;
	returnUrl = window.location.pathname;

	var searchPath = window.location.search;

	if(searchPath.indexOf("eventNo") != -1) {
		returnUrl += searchPath;
	} else {
		if (searchPath.indexOf("?") != -1){
			if(returnUrl.indexOf("event/eventContentDetailView") != -1) {
				returnUrl += searchPath + "&eventNo="+pblcEvtNo;
			} else {
				returnUrl += searchPath;
			}
		} else {
			returnUrl += "?eventNo="+pblcEvtNo;
		}
	}

	stPath = ($("#openPop").data("st-path"));

	var param;
	param = {eventNo : pblcEvtNo , isPreView : isPreView };

	var options = {
		url : stPath+"xhr/event/getEventBaseInfo"
		, data : param
		, done: function (data) {
			$("#mask").remove();

			var eventInfo = data.eventInfo;

			/* 카카오 맵을 사용하기 위한 기초 정보 */
			kakaoAppKeyEvent = data.kakaoAppKey;
			siDo10 = data.siDo10;
			siGunGu123 = data.siGunGu123;

			if(eventInfo.errMsg == "" || eventInfo.errMsg == null){
				if(eventInfo.entryCnt > 0){
					setEventPop5(data);
				}else{
					setEventPop4(data);
				}
			}else{
				if(eventInfo.errCd == "LGN0005"){
					makeAlert(eventInfo.errMsg, fnGoLoginPage);
				}else{
					makeAlert(eventInfo.errMsg, eventPopClose);
				}
			}
			/*if(eventInfo.plazas){
				$("#eventBtn_Area_div").css("display","none");
			}else{
				$("#eventBtn_Area_div").css("display","");
			}*/

/*			var session = JSON.parse(data);

			if (session.mbrNo == 0) { // 로그인이 되어 있지 않을때
				options = $.extend({}, options, {netFunnelId : 'b2c_gnb_login'});

			} else { // 로그인이 되어있을때
				if (!certificationFlag) {
					options = $.extend({}, options, {netFunnelId : 'b2c_promotion2'});
				}
			}*/

		}
	};
	ajax.call(options);
}

/* 이벤트 응모 팝업 화면 셋팅 */
function setEventPop4(data){

	fnDrawPop4();
	$("#exhibition").click(); // 팝업표시

	eventInfo = data.eventInfo;
	entryEvent = eventInfo.entryEvent;
	collectItems = eventInfo.eventCollectItems; // 수집항목
	goodsSerialInfos = eventInfo.goodsSerialInfos; // 제품목록
	plcyContentCollect = eventInfo.plcyContentCollect; // 개인 정보 처리 수집 이용 동의
	plcyContentPrcs = eventInfo.plcyContentPrcs; // 개인 정보 처리 업무 위탁 동의
	eventPrivacyPolicys = eventInfo.eventPrivacyPolicys; // 개인 정보 방침 리스트 or 마케팅 수신 동의
	addFields = eventInfo.addFields; // 추가필드
	questionInfos = eventInfo.questionInfos; // 설문문항
	plazas = eventInfo.plazas;
	siDoList = eventInfo.siDoList;
	siGunGuList = eventInfo.siGunGuList;
	eventAddType = entryEvent.eventAddYn; //이벤트타입
	entryCnt = eventInfo.entryCnt;  //응모건수
	eventAddYn = entryEvent.eventAddYn;

	$("#entryEventNo").val(entryEvent.eventNo); // 서버전송용 이벤트 번호
	$("#evtGbCd").val(entryEvent.eventGbCd); // 서버전송용 이벤트 구분
	$("#prtcpPsbGbCd").val(entryEvent.prtcpPsbGbCd); // 참여가능구분코드
	$("#prtcpPsbCnt").val(entryEvent.prtcpPsbCnt); // 참여가능수
	$("#evtNm").text(entryEvent.ttl);
	$("#cpNo").val(entryEvent.cpNo); // 쿠폰번호 셋팅
	$("#ftEvtNm").text(entryEvent.ttl); // 쿠폰번호 셋팅
//	$("#eventAddYn").val(entryEvent.eventAddYn); // 특정이벤트 웹서버, 아카마이 업로드 여부

	$("#popTitle4").text(entryEvent.popEntryTtl);
	$("#eventSaveBtn4").text(entryEvent.popEntryCtaText);
	$("#popEntrySuccMsg4").val(entryEvent.popEntrySuccMsg);

	if(eventAddYn == "B2C_KSF_KAKAO_SEND"){
		$("#imageForm").empty().append(drawPopHtmlCode4_1());
	}else if(eventAddYn == "B2C_KAKAO_SEND"){
		$("#imageForm").empty().append(drawPopHtmlCode4_2());
	}

	sessionMbr = eventInfo.loginUserMbrNo;
	membershipNo = eventInfo.loginUserMembership;

	// 이벤트 응모 구분 (개인정보 수집, 설문, 투표, 시리얼번호체크 등)
	eventGbCd = entryEvent.eventGbCd;

	setLayoutShowHide(eventGbCd);
	setCommLayout(entryEvent, collectItems, addFields);

	if(eventGbCd == "40"){
		$(".goodsSelect").hide();
		$("#goodsUl").empty();

		// 알림톡 사용 여부
		$("#biztalkUseYn").val(entryEvent.biztalkUseYn);

		// 제휴쿠폰 사용 여부
		$("#prtnrCpUseYn").val(entryEvent.prtnrCpUseYn);

		// 알림톡 템플릿
		$("#biztalkTmplTxt").val(entryEvent.biztalkTmplTxt);
	}

	// 제품선택 : 목록 처리 (시리얼형일 경우에만 처리) =====================================================
	if(eventGbCd == "50"){
		$(".goodsSelect").hide();
		$("#goodsUl").empty();

		var html="";
		$.each(goodsSerialInfos, function(idx, val){
			var index = idx +1;
			html += "<li class=\"item\">";
			html += "	<input id=\"chk-goods-"+index+"\" type=\"radio\" name=\"chk-goods\" value=\""+val.goodsId+"\" onchange='goodsCheck(this)' data-mdlcode='"+val.mdlCode+"' data-goods-nm='"+val.goodsNm+"'>";
			html += "	<label for=\"chk-goods-"+index+"\">"+val.mdlCode+"</label>";
			html += "</li>";
		});
		$("#goodsUl").append(html);
		$(".goodsSelect").show();

		$("#inpEnterSerialNum").attr("readonly", true);
	}


	// 질문 셋팅 ==========================================================================
	if(eventGbCd == "60"){
		// 제휴쿠폰 사용 여부
		$("#prtnrCpUseYn").val(entryEvent.prtnrCpUseYn);

		createQuestionHtml(questionInfos);
	}

	// 매장상담 예약 타입
	if(eventGbCd == "80"){
		fnScriptLoad();

		// 알림톡 템플릿
		$("#biztalkTmplTxt").val(entryEvent.biztalkTmplTxt);
	}

	// 개인 정보 동의 관련 =====================================================================
	var policyHtml="";
	$("#privacyPolicy").empty();

	// 개인 정보 처리 수집 이용 동의
	policyHtml += createPrivacyPolicyHtml(plcyContentCollect, 1);
	// 개인 정보 처리 업무 위탁 동의
	if (plcyContentPrcs != null) {
		policyHtml += createPrivacyPolicyHtml(plcyContentPrcs, 2);
	}
	// 개인정보수집유형 : 마케팅수신동의 및 그외
	$.each(eventPrivacyPolicys, function(idx, val){
		var index = idx +3;
		policyHtml += createPrivacyPolicyHtml(val, index);
	});
	$("#privacyPolicy").append(policyHtml);

	$(".error-msg").hide();

    if (eventAddYn == 'N') { // default 문구
    	$("#inpCounselMembershipErr").html("<p>나의 정보에서 멤버십 회원 추가정보 입력 후</p><p>알림신청하면 멤버십 번호가 보여집니다.</p>");
    } else if (eventAddYn == 'Y') { // 웨신샵 이벤트일때 문구 변경
    	$("#inpCounselMembershipErr").html("<p>※멤버십번호가 보이지 않으시나요?</p><p>화면 우측 상단 > 나의정보 메뉴에서</p><p>멤버십 가입여부 확인 후 다시 시도해 보세요.</p><p>(미가입 시 가입 후 재시도 필요)</p>");
    }

	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}

}

function fnDrawPop4(){
	$("#popupArea_Event3791").html("");
	$("#tooltipArea_Event3791").html("");
	// 팝업 html Code
	if($("#popupArea_Event3791").length > 0){
		$("#popupArea_Event3791").append($popDiv4);
	}else{
		$("#popupArea").append($popDiv4);
	}

	// 툴팁 html Code
	if($("#tooltipArea_Event3791").length > 0){
		$("#tooltipArea_Event3791").append($tooltipDiv);
	}else{
		$("#tooltipArea").append($tooltipDiv);
	}


	$(".titleNo").show();
}

/*
팝업영역 html tag
*/
function drawPopHtmlCode4(){
var html="";
html += '<form id="eventEntryPopFrm">';

html += '	<input type="hidden" id="serialNumChk" value="N"/>';
html += '	<input type="hidden" id="serialNum" name="serialNum" value=""/>';
html += '	<input type="hidden" id="mdlCode" name="mdlCode" value=""/>';
html += '	<input type="hidden" id="focusTarget" value=""/>';
html += '	<input type="hidden" id="focusTargetType" value=""/>';
html += '	<input type="hidden" id="jsonStr" name="jsonStr" value=""/>';
html += '	<input type="hidden" id="entryEventNo" name="eventNo" value=""/>';
html += '	<input type="hidden" id="evtGbCd" name="evtGbCd" value=""/>';
html += '	<input type="hidden" id="prtcpPsbGbCd" name="prtcpPsbGbCd" value=""/>';
html += '	<input type="hidden" id="prtcpPsbCnt" name="prtcpPsbCnt" value=""/>';
html += '	<input type="hidden" id="visPlazaNo" name="visPlazaNo" value=""/>';
html += '	<input type="hidden" id="visShopNo" name="visShopNo" value=""/>';
html += '	<input type="hidden" id="visPlazaNm" name="visPlazaNm" value=""/>';
html += '	<input type="hidden" id="visHopeDt" name="visHopeDt" value=""/>';
html += '	<input type="hidden" id="visPlazaTel" name="visPlazaTel" value=""/>';
html += '	<input type="hidden" id="visPlazaAddr" name="visPlazaAddr" value=""/>';
html += '	<input type="hidden" id="cpNo" name="cpNo" value=""/>';
html += '	<input type="hidden" id="eventNm" name="eventNm" value=""/>';
html += '	<input type="hidden" id="microSiteUrl" name="microSiteUrl" value=""/>';
html += '	<input type="hidden" id="biztalkTmplTxt" name="biztalkTmplTxt" value=""/>'; // 알림톡 템플릿 번호
html += '	<input type="hidden" id="biztalkUseYn" name="biztalkUseYn" value=""/>'; // 알림톡 사용 여부
html += '	<input type="hidden" id="prtnrCpUseYn" name="prtnrCpUseYn" value=""/>'; // 제휴쿠폰 사용 여부
html += '	<input type="hidden" id="mktRcvSelYn" name="mktRcvSelYn" value=""/>'; // 광고성 정보 수신 전체 동의 여부

html += '	<input type="hidden" id="weekdayCloseTime" name="weekdayCloseTime" value=""/>'; // 평일 마감시간
html += '	<input type="hidden" id="weekdayOpenTime" name="weekdayOpenTime" value=""/>'; // 평일 오픈 시간
html += '	<input type="hidden" id="weekendCloseTime" name="weekendCloseTime" value=""/>'; // 주말 마감 시간
html += '	<input type="hidden" id="weekendOpenTime" name="weekendOpenTime" value=""/>'; // 주말 오픈 시간
html += '	<input type="hidden" id="eventAddYn" name="eventAddYn" value=""/>'; // 주말 오픈 시간
html += '	<input type="hidden" id="popEntrySuccMsg4" name="popEntrySuccMsg4" value=""/>';

html += '	<div class="layer-pop layer-normal layer-event-exhibition" id="popupExhibitionEnter" tabindex="0" data-popup-layer="popupExhibitionEnter" data-focus="popupExhibitionEnter">';
html += '       <button type="button" id="exhibition" data-popup-target="popupExhibitionEnter" style="display: none;"></button>';
html += '	    <div class="layer-header" id="evtHeader">';
html += '	        <h2>응모 하기</h2>';
html += '	    </div>';
html += '	    <div class="layer-content">';
html += '	        <div class="frm-login ">';
html += '	            <form action="">';
html += '	                <fieldset class="secureInp">';
html += '	                    <legend>응모 입력 폼</legend>';
html += '						 <div class="event-img">';
html += '	                        <img src="" alt="" id="evtImg">';
html += '	                    </div>';

html += '	                    <div class="vote-txt-box eventGbCd70">';
html += '	                        <p><strong><span id="evtNm"></span></strong> 투표에 참여해주셔서 감사합니다.</p>';
html += '	                        <p>투표 이벤트 추첨을 위해 아래 정보를 작성해주세요.</p>';
html += '	                        <p class="txt-major">* 투표하기는 1회만 가능합니다.</p>';
html += '	                    </div>';

html += '	                    <div class="user-info-box secure-pop-form user-form">';
html += '	                        <div class="secure-pop-tit bottom-line"><span class="titleNo">01. </span><span id="popTitle">응모자 정보</span></div>';
html += '	                        <div class="secure-pop form-write">';
html += '	                            <div class="inp-box entryCollect10 entryCollect">';
html += '	                                <label for="inpEnterName" class="lb-line">이름</label>';
html += '		                            <div>';
html += '		                                <input type="text" id="inpEnterName" name="inpEnterName" class="inp-line" value="" readonly="readonly">';
html += '		                                <div class="error-msg" id="inpEnterNameErr">';
html += '	                                    	<p>이름을 입력해 주세요.</p>';
html += '	                                    </div>';
html += '		                            </div>';
html += '	                            </div>';

html += '	                            <div class="inp-box entryCollect20 entryCollect">';
html += '	                                <label for="inpEnterCall" class="lb-line">연락처</label>';
html += '		                            <div>';
html += '	                                    <input type="text" id="inpEnterCall" name="inpEnterCall" class="inp-line" placeholder="(-) 없이 숫자만 입력해 주세요." numberOnly maxlength="11">';
html += '	                                    <div class="error-msg" id="inpEnterCallErr">';
html += '	                                    	<p>연락처를 입력해 주세요.</p>';
html += '	                                    </div>';
html += '	                                    <div class="error-msg"  id="inpEnterCallErr2">';
html += '	                                    	<p>연락처가 올바르지 않습니다.</p>';
html += '	                                    </div>';
html += '		                            </div>';
html += '	                            </div>';

html += '								<div class="inp-box entryCollect60 entryCollect">';
html += '								    <label for="inpCounselMembership" class="lb-line line-double">삼성전자 <br>멤버십 번호</label>';
html += '								    <div>';
html += '								        <input type="text" id="inpCounselMembership" class="inp-line" value="" readonly="readonly">';
html += '	                                    <div class="error-msg" id="inpCounselMembershipErr">';
//html += '	                                    	<p>나의 정보에서 멤버십 회원 추가정보 입력 후</p><p>알림신청하면 멤버십 번호가 보여집니다.</p>';
html += '	                                    </div>';
html += '								    </div>';
html += '								</div>';

html += '	                            <div class="inp-box entryCollect30 entryCollect">';
html += '	                                <label for="inpEnterEmail" class="lb-line">이메일</label>';
html += '		                            <div>';
html += '	                                    <input type="text" id="inpEnterEmail" name="inpEnterEmail" class="inp-line" placeholder="이메일을 입력해 주세요.">';
html += '	                                    <div class="error-msg" id="inpEnterEmailErr">';
html += '	                                        <p>이메일을 입력해 주세요. </p>';
html += '	                                    </div>';
html += '	                                    <div class="error-msg" id="inpEnterEmailErr2">';
html += '	                                        <p>이메일을 정확히 입력해 주세요. </p>';
html += '	                                    </div>';
html += '		                            </div>';
html += '	                            </div>';

html += '	                            <div class="inp-box entryCollect40 entryCollect">';
html += '	                                <label for="inpEnterZonecode" class="lb-line">주소</label>';
html += '		                            <div class="address-box">';
html += '		                                <div class="address-search">';
html += '	                                        <input type="text" id="inpEnterZonecode" name="inpEnterZonecode"readonly="readonly" class="inp-line" title="우편번호" placeholder="우편번호를 검색해 주세요." value="">';
html += '	                                        <button type="button" class="btn btn-s btn-type1" id="zoneCodeBtn">우편번호</button>';
html += '	                                    </div>';
html += '	                                    <div class="address-txt">';
html += '	                                        <div id="inpEnterAddressDiv" >';
html += '	                                        </div>';
html += '	                                        	<input type="hidden" id="inpEnterAddress" name="inpEnterAddress">';
html += '	                                    </div>';
html += '	                                    <div class="address-detail">';
html += '	                                        <input type="text" name="inpEnterAddressDetail" id="inpEnterAddressDetail" class="inp-line" placeholder="상세주소를 입력해 주세요.">';
html += '	                                    </div>';
html += '	                                     <div class="error-msg" id="inpEnterZonecodeErr">';
html += '	                                        <p>우편번호를 통해 주소를 선택해 주세요.</p>';
html += '	                                    </div>';
html += '		                            </div>';
html += '	                            </div>';

html += '	                            <div class="inp-box entryCollect50 entryCollect">';
html += '	                                <label for="inpEnterSns" class="lb-line">SNS 게시물 URL</label>';
html += '		                            <div>';
html += '		                                <div class="inquiry-con">';
html += '		                                    <textarea id="inpEnterSns" name="inpEnterSns" class="inp-line pop-tArea" placeholder="게시한 SNS URL을 입력해 주세요." maxlength="500"></textarea>';
html += '		                                    <span class="txt-count sns-count"><em class="strong">0</em> / 500자</span>';
html += '		                                </div>';
//html += '	                                    <p class="essential">* SNS 안내 문구 영역</p>';
html += '	                                    <div class="error-msg" id="inpEnterSnsErr">';
html += '	                                       <p>SNS 게시물 URL을 입력해 주세요.</p>';
html += '	                                    </div>';
html += '	                                    <div class="error-msg" id="inpEnterSnsErr2">';
html += '	                                       <p>URL을 정확하게 입력해 주세요.</p>';
html += '	                                    </div>';
html += '	                                </div>';
html += '	                            </div>';

html += '								<div class="inp-box entryCollect70 entryCollect">';
html += '	                                <label for="inpEnterSchool" class="lb-line">학교</label>';
html += '		                            <div>';
html += '	                                    <input type="text" id="inpEnterSchool" name="inpEnterSchool" class="inp-line" readonly="readonly">';
html += '		                            </div>';
html += '	                            </div>';

html += '	                            <p class="txt-general eventGbCd70">* 잘못된 정보 입력 시 투표에 제한이 있을 수 있으며, 경품 당첨이 취소됩니다.</p>';

html += '	                            <div id="addFieldArea"> ';

html += '	                            </div>';

html += '	                            <div class="inp-box goodsSelect eventGbCd50">';
html += '	                                <label for="chk-goods-1" class="lb-line lb-top">제품 선택</label>';
html += '		                            <div>';
html += '	                                    <ul class="chk-list-box chk-form mo-col1" id="goodsUl"></ul>';

html += '	                                     <div class="error-msg" id="chk-goods-err">';
html += '	                                        <p>제품을 선택해 주세요.</p>';
html += '	                                    </div>';
html += '		                            </div>';
html += '	                            </div>';

html += '	                            <div class="inp-box goodsSelect eventGbCd50">';
html += '	                                <p class="label-box">';
html += '	                                    <label for="inpEnterSerialNum" class="lb-line">제품 시리얼 <br>넘버</label>';
html += '	                                    <i class="btn-tooltop02" data-tooltip="serialno-usetip"><span>툴팁보기(레이어열림)</span></i>';
html += '	                                </p>';
html += '		                            <div>';
html += '		                                <div class="inquiry-con">';
html += '		                                    <textarea id="inpEnterSerialNum" name="inpEnterSerialNum" class="inp-line pop-tArea" placeholder="제품 시리얼 넘버 확인 후 입력해 주세요." maxlength="500"></textarea>';
html += '		                                    <span class="txt-count serial-count"><em class="strong">0</em> / 500자</span>';
html += '	                                    </div>';
html += '	                                    <div class="serial-box">';
html += '	                                        <p class="essential">* 제품의 시리얼 넘버를 입력하신 후 [확인하기] 버튼을 눌러주세요.</p>';
html += '	                                        <button type="button" class="btn btn-s btn-type1" id="chkSerialNoBtn">확인하기</button>';
html += '	                                    </div>';

html += '	                                     <div class="error-msg" id="inpEnterSerialNumErr">';
html += '	                                        <p>시리얼 넘버를 입력 후 확인해 주세요.</p>';
html += '	                                    </div>';
html += '		                            </div>';
html += '	                            </div>';
html += '	                        </div>';
html += '	                    </div>';

html += '	                    <div class="survey-box qstList eventGbCd60">';
html += '	                    </div>';

html += '						<div class="user-info-box secure-pop-form user-form eventGbCd80">';
html += '							<div class="secure-pop-tit bottom-line"><span class="titleNo">02. </span>매장선택</div>';
html += '						    <p class="txt-general">매장 상담 가능한 매장 및 매장상담 희망일을 선택하세요.</p>';
html += '						    <div class="secure-pop">';
html += '						        <div class="inp-box">';
html += '						            <label for="inpCounselName" class="lb-line">시/도 선택</label>';
html += '						            <div>';
html += '						                <div>';
html += '						                    <div class="select-box">';
html += '						                        <div id="dropAge" class="wrap-droplist">';
html += '						                            <button class="droplist-button selected" aria-haspopup="listbox" aria-labelledby="dropAreaBtn" id="dropAreaBtn">서울</button>';
html += '						                            <ul class="droplist" id="dropSiDo" tabindex="-1" role="listbox" aria-labelledby="dropAreaBtn" aria-activedescendant="dropArea1-1">';
html += '						                            </ul>';
html += '						                        </div>';
html += '						                    </div>';
html += '						                </div>';
html += '						            </div>';
html += '						        </div>';
html += '						        <div class="inp-box">';
html += '						            <label for="inpCounselCall" class="lb-line">시/군/구 선택</label>';
html += '						           <div>';
html += '						                <div class="select-box">';
html += '						                    <div id="dropAge" class="wrap-droplist">';
html += '						                        <button class="droplist-button selected" aria-haspopup="listbox" aria-labelledby="dropAreaBtn2" id="dropAreaBtn2">강남구</button>';
html += '						                        <ul class="droplist" id="dropSiGunGu" tabindex="-1" role="listbox" aria-labelledby="dropAreaBtn2" aria-activedescendant="dropArea2-1">';
html += '						                        </ul>';
html += '						                    </div>';
html += '						                </div>';
html += '						            </div>';
html += '						        </div>';

html += '						        <ul class="chk-form style-btn store-select-list">';
html += '						        </ul>';
html += '								<div class="error-msg" id="radio-store1Err" style="text-align: center;">';
html += '								    <p>매장을 선택하세요</p>';
html += '								</div>';

html += '						        <div class="store-detail-info">';
html += '						            <div class="store-detail">';
html += '						                <p class="store-name"></p>';
html += '						                <dl>';
html += '						                    <dt>주소</dt>';
html += '						                    <dd id="storeAddr"></dd>';
html += '						                </dl>';
html += '						                <dl>';
html += '						                    <dt>전화번호</dt>';
html += '						                    <dd id="storeTel"></dd>';
html += '						                </dl>';
html += '						                <dl>';
html += '						                    <dt>영업시간</dt>';
html += '						                    <dd id="storeOpenTime"></dd>';
html += '						                </dl>';
html += '						                <dl>';
html += '						                    <dt>주차공간</dt>';
html += '						                    <dd id="storeParkingInfo"></dd>';
html += '						                </dl>';
html += '						                <p class="btn-more-box"><a href="#" class="link" id="microSiteDetailView">상세보기 ></a></p>';
html += '						            </div>';
html += '						            <div class="store-detail-mapbox" id="map">';
html += '						                <!-- 맵 영역 -->';
html += '						            </div>';
html += '						            <div class="hope-visit-date">';
html += '						                <p class="date-title">방문 희망 일자 선택</p>';
html += '						                <dl>';
html += '						                    <dt>날짜선택</dt>';
html += '						                    <dd>';
html += '						                        <input type="text" id="visitDate" name="visitDate" placeholder="방문 희망 일자를 선택해 주세요." class="inp-line inp-calendar">';
html += '						                        <p class="txt">* 삼성스토어 매장 마감시간은 20시 30분입니다.</p>';
html += '						                    </dd>';
html += '						                </dl>';
html += '						            </div>';
html += '						        </div>';
html += '						    </div>';
html += '						</div>';

html += '	                    <div class="user-info-box secure-pop-form terms-form">';
html += '	                        <div class="secure-pop-tit bottom-line">';
html += '	                            <span class="titleNo">03. </span>개인정보 수집·이용 동의 <span class="ico-required">*<span>필수입력</span></span>';
html += '	                        </div>';

html += '	                        <div class="secure-pop terms-con">';
html += '	                            <p class="txt-general">';
html += '			                                귀하께서는 본 동의 안내 문구를 숙지하셨으며, 안내문구에 대해 거절하실 수 있습니다.<br>';
html += '			                                단, 거절하신 경우에는 이벤트 응모가 제한되실 수 있습니다.';
html += '	                            </p>';
html += '	                            <div class="chk-form allChk-box">';
html += '	                                <input id="chk-enter-all" data-allchk-name="allCheck" data-children-name="checkEventEnter" type="checkbox" required="" title=""';
html += '	                                    class="checkBoxTerms">';
html += '	                                <label for="chk-enter-all" class="chk-all">모든 약관을 확인하고 전체 동의합니다.</label>';
html += '	                            </div>';
html += '	                            <div id="privacyPolicy"></div>';
html += '	                        </div>';

html += '	                        <div class="help-box">';
html += '	                            <p>';
html += '			                                개인정보 처리에 대한 상세한 사항은 삼성전자 웹사이트  (<a href="http://www.samsung.com/sec" class="link" target="_blank">www.samsung.com/sec</a>)에 공개한 "삼성닷컴 이벤트 개인정보 처리방침"을 참조하십시오.<br>';
html += '			                                다만, 본 동의서 내용과 상충되는 부분은 본 동의서 내용을 우선합니다.';
html += '	                            </p>';
html += '	                        </div>';
html += '	                    </div>';
html += '						<div class="user-info-box secure-pop-form terms-form  eventGbCd80">';
html += '						    <div class="secure-pop-tit bottom-line">';
html += '						        <span class="titleNo">04. </span>신청 정보 확인';
html += '						    </div>';
html += '						    <p class="txt-general">방문 희망일자와 매장 정보를 확인 후 신청을 완료하세요.</p>';
html += '						    <div class="final-check-box">';
html += '						        <p class="txt1 storeRsltMsg"><span class="txt-major selectedResultMsg"></span>으로<br> 매장방문을 신청합니다.</p>';
html += '						        <p class="txt2">※ 신청 시 카카오 알림톡으로 &lt;“<span id="ftEvtNm"></span>” 매장상담예약&gt;<br> 초대장이 발송됩니다.</p>';
html += '						        <p class="btn-area"><button type="button" class="btn btn-d btn-type2" id="reservationBtn">신청하기</button></p>';
html += '						    </div>';
html += '						</div>';
/****************************/
html += '    					<div id = "imageForm">';
html += '    					</div>';
/*****************************/
html += '	                </fieldset>';
html += '	            </form>';
html += '	            <div class="btn-box " id="eventBtn_Area_div">';
html += '		            <button type="button" class="btn btn-d btn-type2" id="eventSaveBtn4">카카오톡 공유하기</button>';
html += '		        </div>';
html += '	        </div>';
html += '	    </div>';
html += '	    <button type="button" class="pop-close evt-pop-close" data-focus-next="popupExhibitionEnter">팝업닫기</button>';
html += '	</div>	';
html += '</form>';

return html;

}

function drawPopHtmlCode4_1(){
var html="";
/****************************/
html += '    					<!-- s : CHEER CARD form -->';
html += '    					<div class="user-info-box secure-pop-form user-form">';
html += '    						<div class="secure-pop-tit bottom-line">홍보 이미지</div>';
html += '    					</div>';
html += '    					<ul class="cheer-cards">';
html += '    						<li>';
html += '    							<div class="chk-form terms-more">';
html += '    								<input type="radio" id="chrCard_01" name="chrCard" checked>';
html += '    								<label for="chrCard_01">';
html += '    									삼세페 이미지';
html += '    									<figure class="card-img">';
html += '    										<img src="https://images.samsung.com/kdp/event/festa_samsungsale/sec_promotion_img_02.jpg" alt="삼성전자 세일 페스타만의 꿀혜택을 홍보하고 비스포크 굿즈를 받아보세요!">';
html += '    									</figure>';
html += '    								</label>';
html += '    							</div>';
html += '    						</li>';
html += '    					</ul>';

return html;

}

function drawPopHtmlCode4_2(){
var html="";
/****************************/
html += '    					<!-- s : CHEER CARD form -->';
html += '    					<div class="user-info-box secure-pop-form user-form">';
html += '    						<div class="secure-pop-tit bottom-line">가족 사랑 마음 카드</div>';
html += '    					</div>';
html += '    					<ul class="cheer-cards">';
html += '    						<li>';
html += '    							<div class="chk-form terms-more">';
html += '    								<input type="radio" id="chrCard_01" name="chrCard" checked>';
html += '    								<label for="chrCard_01">';
html += '    									건강하세요';
html += '    									<figure class="card-img">';
html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_01.jpg" alt="곁에 계셔주셔서 감사해요">';
html += '    									</figure>';
html += '    								</label>';
html += '    							</div>';
html += '    						</li>';
html += '    						<li>';
html += '    							<div class="chk-form terms-more">';
html += '    								<input type="radio" id="chrCard_02" name="chrCard">';
html += '    								<label for="chrCard_02">';
html += '    									사랑해요-1';
html += '    									<figure class="card-img">';
html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_02.jpg" alt="소중한 당신, 많이 사랑해요">';
html += '    									</figure>';
html += '    								</label>';
html += '    							</div>';
html += '    						</li>';
html += '    						<li>';
html += '    							<div class="chk-form terms-more">';
html += '    								<input type="radio" id="chrCard_03" name="chrCard">';
html += '    								<label for="chrCard_03">';
html += '    									행복하세요';
html += '    									<figure class="card-img">';
html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_03.jpg" alt="앞으로 꽃길만 걸어요">';
html += '    									</figure>';
html += '    								</label>';
html += '    							</div>';
html += '    						</li>';
html += '    						<li>';
html += '    							<div class="chk-form terms-more">';
html += '    								<input type="radio" id="chrCard_04" name="chrCard">';
html += '    								<label for="chrCard_04">';
html += '    									사랑해요-2';
html += '    									<figure class="card-img">';
html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_04.jpg" alt="낳아주시고 키워주셔서 감사해요">';
html += '    									</figure>';
html += '    								</label>';
html += '    							</div>';
html += '    						</li>';
html += '    						<li>';
html += '    							<div class="chk-form terms-more">';
html += '    								<input type="radio" id="chrCard_05" name="chrCard">';
html += '    								<label for="chrCard_05">';
html += '    									응원해요';
html += '    									<figure class="card-img">';
html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_05.jpg" alt="빛나는 당신의 꿈을 응원해요">';
html += '    									</figure>';
html += '    								</label>';
html += '    							</div>';
html += '    						</li>';
html += '    						<li>';
html += '    							<div class="chk-form terms-more">';
html += '    								<input type="radio" id="chrCard_06" name="chrCard">';
html += '    								<label for="chrCard_06">';
html += '    									힘내세요';
html += '    									<figure class="card-img">';
html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_06.jpg" alt="모두 다 잘될 거예요">';
html += '    									</figure>';
html += '    								</label>';
html += '    							</div>';
html += '    						</li>';
html += '    					</ul>';

return html;

}

//이벤트 응모
$(document).on('click', "#eventSaveBtn4", function(){
	//fnSaveEventEntry4();
	$("#focusTarget").val("");

	if(fnValidationCheck4()){
		if(fnValidationSelCard()){
			makeAlert("공유를 위해 카카오톡APP이 실행되며,<br>카카오톡 APP을 통해 반드시 공유하기를 완료해야 참여됩니다.", fnSaveEventEntry4);
		}
	}
	// validation result
	else{
		var id = $("#focusTarget").val();
		var type = $("#focusTargetType").val();

		if(type == ""){
			setTimeout(function(){
				$("#"+id).focus();
			}, 1);
		}else{
			$("input[name="+id+"]").focus();
		}
		return;
	}
});

/*
이벤트 응모 저장
*/
function fnSaveEventEntry4(){

	if ( $("#inpEnterSns").val() ) {
		var snsUrl =  $("#inpEnterSns").val();
		snsUrl = snsUrl.trim().replace(/^(http|https):\/\//, "");

		$("#inpEnterSns").val(snsUrl);
	}

	$("#addFieldArea").children(".inp-box").each(function(){
		var $addFieldId = $(this).find("[id^='addField']");

		var fldtpcd = $addFieldId.data("fldtpcd");

		if (fldtpcd === 10 || fldtpcd === 20 || fldtpcd === 90) { //한줄 입력(10) 또는 여러줄입력(20) 일때
			var fldVal =  $addFieldId.val();
			fldVal = fldVal.trim().replace(/^(http|https):\/\//, "");

			$addFieldId.val(fldVal);
		}

	});

	createJsonStr();

	var options = {
		url: stPath+"xhr/event/insertEventEntry",
		data: $("#eventEntryPopFrm").serialize(),
		done: function (data) {
			var result = data.result;

	    	if(result.resultCd == "success"){	//응모성공시 카톡공유하기창 실행

	    		var eventUrl   = document.location.href;
	    		var eventTitle = "";
	    		var eventImagePath = "";
	    		var eventDesc  = "";
	    		var msg = $("#popEntrySuccMsg4").val();
	    		var eventNo = $("#entryEventNo").val();
                var mbrNo = sessionMbr;

	    		if(eventAddYn == "B2C_KSF_KAKAO_SEND"){
	    			eventTitle = "모두가 기다려온 축제 삼세페";
	    			eventImagePath = "https://images.samsung.com/kdp/event/festa_samsungsale/sec_promotion_img_02.jpg";
	    			eventDesc  = "삼성전자 세일 페스타만의 꿀혜택을 홍보하고 비스포크 굿즈를 받아보세요!";
	    			msg = "이벤트 응모 및 홍보 이미지 보내기가 완료되었습니다.<br>이벤트페이지에서 정상참여 되었는지 확인해주세요.<br>(비정상 종료, 나와의 채팅방 공유는 반영되지 않습니다)";
	    		}else if(eventAddYn == "B2C_KAKAO_SEND"){
	    			eventTitle = "삼성전자와 함께하는 가족사랑 선물대전";
	    		    eventImagePath = $("[name='chrCard']:checked").parent().find('img').attr('src');
	    		    eventDesc  = "쑥스러워서 하지 못했던 말, 가족 사랑 마음 카드 이벤트와 함께 선물대전을 즐겨보세요!";
	    		    msg = "이벤트 응모 및 마음 카드 보내기가 완료되었습니다.<br>이벤트페이지에서 정상참여 되었는지 확인해주세요.<br>(비정상 종료, 나와의 채팅방 공유는 반영되지 않습니다)";
	    		}
	    	    snsShare.kakaoTalkCallback(eventUrl, eventTitle, eventImagePath, eventDesc, eventNo, mbrNo);
	    	    makeAlert(msg, eventPopClose);
	    	}else{
	    		makeAlert(result.resultMsg, eventPopClose);
			}
		}
	};

	$(".btn-box").removeAttr("style");
	if(isPreView) return;

	oneTimeChk = false;

	ajax.call(options);

}

/*
 * [유효성 체크]
 */
function fnValidationCheck4(){

	var passyn = "Y";

	$(".error-msg").hide();
	if(membershipNo == "" || membershipNo == null ){
		$("#inpCounselMembershipErr").show();
	}

	const collectItem = {
		                  "10" : {/*이름*/ id : "inpEnterName", errId1 : "inpEnterNameErr", errId2 : "inpEnterNameErr", callback : null},
						  "20" : {/*연락처*/ id : "inpEnterCall", errId1 : "inpEnterCallErr", errId2 : "inpEnterCallErr2", callback : fnMobileCheck},
						  "30" : {/*이메일*/ id : "inpEnterEmail", errId1 : "inpEnterEmailErr", errId2 : "inpEnterEmailErr2", callback : fnEmailCheck},
						  "40" : {/*주소*/ id : "inpEnterZonecode", errId1 : "inpEnterZonecodeErr", errId2 : "inpEnterZonecodeErr", callback : null},
						  "50" : {/*SNS게시물*/ id : "inpEnterSns", errId1 : "inpEnterSnsErr", errId2 : "inpEnterSnsErr2", callback : fnUrlCheck},
						  "60" : {/*멤버십번호*/ id : "inpCounselMembership", errId1 : "inpCounselMembershipErr", errId2 : "inpCounselMembershipErr", callback : null}
						};

	// 수집항목 null 체크
	$.each(collectItems, function(idx, val){

		// 멤버십은 체크하지 않는다.
//		if(val.collectItemCd != "60"){
			var collectItemId = collectItem[val.collectItemCd].id;
			var collectItemErrId = collectItem[val.collectItemCd].errId1;
			var collectItemVal = $("#"+collectItemId).val();

			if(collectItemVal == ""){
				$("#"+collectItemErrId).show();
				passyn = "N";
				fnFocusIdSet(collectItemId); // focus될 아이디 정보
			}
//		}
	});

	// 유효성 체크 결과
	let validationSubResult;
	const chkArr = ["20", "30"]; // 연락처, 이메일 유효성 체크

	$.each(chkArr, function(i, val){
		validationSubResult = fnValidationSub(collectItem[val]);
		if(!validationSubResult){
			passyn = "N";
			fnFocusIdSet(collectItem[val].id);
		}
	})

	// 생성된 추가필드에 대한 유효성 체크
	passyn = fnValidationAddFieldsChk(passyn);

	// 개인정보 수집형 일때
	if(eventGbCd == "40"){
		$("#eventNm").val(entryEvent.ttl);
	}

	// 개인정보수집관련
	passyn = fnValidationPrivacyPolicy(passyn);

	return passyn == "Y" ? true : false;
}

/* 이벤트 응모 팝업 화면 셋팅 */
function setEventPop5(data){
	fnDrawPop5();
	$("#exhibition").click(); // 팝업표시

	eventInfo = data.eventInfo;
	entryEvent = eventInfo.entryEvent;
	$("#entryEventNo").val(entryEvent.eventNo); // 서버전송용 이벤트 번호
	sessionMbr = eventInfo.loginUserMbrNo;
	eventAddYn = entryEvent.eventAddYn;

	if(eventAddYn == "B2C_KSF_KAKAO_SEND"){
		$("#imageForm").empty().append(drawPopHtmlCode5_1());
	}else if(eventAddYn == "B2C_KAKAO_SEND"){
		$("#imageForm").empty().append(drawPopHtmlCode5_2());
	}

	$("#eventSaveBtn5").text(entryEvent.popEntryCtaText);
	$("#popEntrySuccMsg5").val(entryEvent.popEntrySuccMsg);

	// 1. 상단 이미지 모바일 / pc 체크
	var imgUrl="";
	var filter = "win16|win32|win64|mac|macintel";
	if ( navigator.platform ) {
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
			imgUrl = "//"+entryEvent.moImgPath;
		} else {
			imgUrl = "//"+entryEvent.pcImgPath;
		}
	}
	$("#evtImg").attr("src", imgUrl);

}

function fnDrawPop5(){
	$("#popupArea_Event3791").html("");
	$("#tooltipArea_Event3791").html("");
	// 팝업 html Code
	if($("#popupArea_Event3791").length > 0){
		$("#popupArea_Event3791").append($popDiv5);
	}else{
		$("#popupArea").append($popDiv5);
	}

	// 툴팁 html Code
	if($("#tooltipArea_Event3791").length > 0){
		$("#tooltipArea_Event3791").append($tooltipDiv);
	}else{
		$("#tooltipArea").append($tooltipDiv);
	}

	$(".titleNo").show();
}


function drawPopHtmlCode5(){
	var html="";
	html += '<!-- s : 21-10-22 KOREA Sale FESTA - 응원카드 카톡공유 -->';
	html += '<input type="hidden" id="focusTargetType" value=""/>';
	html += '<input type="hidden" id="entryEventNo" name="eventNo" value=""/>';
	html += '<input type="hidden" id="popEntrySuccMsg5" name="popEntrySuccMsg5" value=""/>';
	html += '<div class="layer-pop layer-normal layer-event-exhibition" id="popupExhibitionEnter" tabindex="0" data-popup-layer="popupExhibitionEnter" data-focus="popupExhibitionEnter">';
	html += '   <button type="button" id="exhibition" data-popup-target="popupExhibitionEnter" style="display: none;"></button>';
/****************************/
	html += '   <div id = "imageForm">';
	html += '   </div>';
/****************************/
	html += '	<button type="button" class="pop-close evt-pop-close" data-focus-next="popupExhibitionEnter">팝업닫기</button>';
	html += '</div>';
	html += '<!-- e : 21-10-22 KOREA Sale FESTA - 응원카드 카톡공유 -->';
	return html;
}

function drawPopHtmlCode5_1(){
	var html="";
	html += '		<div class="layer-header text-hide">';
	html += '			<h2>홍보 이미지 - 카카오톡 공유하기</h2>';
	html += '		</div>';
	html += '		<div class="layer-content">';
	html += '			<div class="">';
	html += '				<form action="">';
	html += '					<fieldset class="secureInp">';
	html += '						<legend>SAMSUNG Sale FESTA</legend>';

	html += '						<div class="event-img">';
	html += '    						<img src="" alt="삼성전자 세일 페스타만의 꿀혜택을 홍보하고 비스포크 굿즈를 받아보세요!" id="evtImg">';
	html += '						</div>';

	html += '						<!-- s : CHEER CARD form -->';
	html += '						<div class="user-info-box secure-pop-form user-form">';
	html += '							<div class="secure-pop-tit bottom-line">홍보 이미지</div>';
	html += '						</div>';
	html += '						<ul class="cheer-cards">';
	html += '							<li>';
	html += '								<div class="chk-form terms-more">';
	html += '									<input type="radio" id="chrCard_01" name="chrCard" checked>';
	html += '									<label for="chrCard_01">';
	html += '										삼세페 이미지';
	html += '										<figure class="card-img">';
	html += '											<img src="https://images.samsung.com/kdp/event/festa_samsungsale/sec_promotion_img_02.jpg" alt="삼성전자 세일 페스타만의 꿀혜택을 홍보하고 비스포크 굿즈를 받아보세요!">';
	html += '										</figure>';
	html += '									</label>';
	html += '								</div>';
	html += '							</li>';
	html += '						</ul>';
	html += '						<!-- e : CHEER CARD form -->';
	html += '					</fieldset>';

	html += '				</form>';
	html += '				<div class="btn-box">';
	html += '					<button type="button" class="btn btn-d btn-type2" id="eventSaveBtn5">카카오톡 공유하기</button>';
	html += '				</div>';
	html += '			</div>';

	html += '		</div>';

	return html;
}

function drawPopHtmlCode5_2(){
	var html="";
	html += '		<div class="layer-header text-hide">';
	html += '			<h2>응원카드 - 카카오톡 공유하기</h2>';
	html += '		</div>';
	html += '		<div class="layer-content">';
	html += '			<div class="">';
	html += '				<form action="">';
	html += '					<fieldset class="secureInp">';
	html += '						<legend>BESPOKE GRANDE AI</legend>';

	html += '						<div class="event-img">';
	html += '    						<img src="" alt="삼성전자 세일 페스타만의 꿀혜택을 홍보하고 기프티콘 받아보세요!" id="evtImg">';
	html += '						</div>';

	html += '						<!-- s : CHEER CARD form -->';
	html += '						<div class="user-info-box secure-pop-form user-form">';
	html += '							<div class="secure-pop-tit bottom-line">가족 사랑 마음 카드</div>';
	html += '						</div>';
	html += '    					<ul class="cheer-cards">';
	html += '    						<li>';
	html += '    							<div class="chk-form terms-more">';
	html += '    								<input type="radio" id="chrCard_01" name="chrCard" checked>';
	html += '    								<label for="chrCard_01">';
	html += '    									건강하세요';
	html += '    									<figure class="card-img">';
	html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_01.jpg" alt="곁에 계셔주셔서 감사해요">';
	html += '    									</figure>';
	html += '    								</label>';
	html += '    							</div>';
	html += '    						</li>';
	html += '    						<li>';
	html += '    							<div class="chk-form terms-more">';
	html += '    								<input type="radio" id="chrCard_02" name="chrCard">';
	html += '    								<label for="chrCard_02">';
	html += '    									사랑해요-1';
	html += '    									<figure class="card-img">';
	html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_02.jpg" alt="소중한 당신, 많이 사랑해요">';
	html += '    									</figure>';
	html += '    								</label>';
	html += '    							</div>';
	html += '    						</li>';
	html += '    						<li>';
	html += '    							<div class="chk-form terms-more">';
	html += '    								<input type="radio" id="chrCard_03" name="chrCard">';
	html += '    								<label for="chrCard_03">';
	html += '    									행복하세요';
	html += '    									<figure class="card-img">';
	html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_03.jpg" alt="앞으로 꽃길만 걸어요">';
	html += '    									</figure>';
	html += '    								</label>';
	html += '    							</div>';
	html += '    						</li>';
	html += '    						<li>';
	html += '    							<div class="chk-form terms-more">';
	html += '    								<input type="radio" id="chrCard_04" name="chrCard">';
	html += '    								<label for="chrCard_04">';
	html += '    									사랑해요-2';
	html += '    									<figure class="card-img">';
	html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_04.jpg" alt="낳아주시고 키워주셔서 감사해요">';
	html += '    									</figure>';
	html += '    								</label>';
	html += '    							</div>';
	html += '    						</li>';
	html += '    						<li>';
	html += '    							<div class="chk-form terms-more">';
	html += '    								<input type="radio" id="chrCard_05" name="chrCard">';
	html += '    								<label for="chrCard_05">';
	html += '    									응원해요';
	html += '    									<figure class="card-img">';
	html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_05.jpg" alt="빛나는 당신의 꿈을 응원해요">';
	html += '    									</figure>';
	html += '    								</label>';
	html += '    							</div>';
	html += '    						</li>';
	html += '    						<li>';
	html += '    							<div class="chk-form terms-more">';
	html += '    								<input type="radio" id="chrCard_06" name="chrCard">';
	html += '    								<label for="chrCard_06">';
	html += '    									힘내세요';
	html += '    									<figure class="card-img">';
	html += '    										<img src="https://images.samsung.com/kdp/event/familylove/sec_familylove_card_06.jpg" alt="모두 다 잘될 거예요">';
	html += '    									</figure>';
	html += '    								</label>';
	html += '    							</div>';
	html += '    						</li>';
	html += '    					</ul>';
	html += '						<!-- e : CHEER CARD form -->';
	html += '					</fieldset>';

	html += '				</form>';
	html += '				<div class="btn-box">';
	html += '					<button type="button" class="btn btn-d btn-type2" id="eventSaveBtn5">카카오톡 공유하기</button>';
	html += '				</div>';
	html += '			</div>';

	html += '		</div>';

	return html;
}

//>카카오톡 공유하기
$(document).on('click', "#eventSaveBtn5", function(){
	if(fnValidationSelCard()){
		$("#focusTarget").val("");
		makeAlert("공유를 위해 카카오톡APP이 실행되며,<br>카카오톡 APP을 통해 반드시 공유하기를 완료해야 참여됩니다.", fnSaveEventEntry5);
	}
});



/*
>카카오톡 공유하기
*/
function fnSaveEventEntry5(){

	var eventUrl   = document.location.href;
	var eventTitle = "";
	var eventImagePath = "";
	var eventDesc  = "";
	var msg = $("#popEntrySuccMsg5").val();
	var eventNo = $("#entryEventNo").val();
    var mbrNo = sessionMbr;

	if(eventAddYn == "B2C_KSF_KAKAO_SEND"){
		eventTitle = "모두가 기다려온 축제 삼세페";
		eventImagePath = "https://images.samsung.com/kdp/event/festa_samsungsale/sec_promotion_img_02.jpg";
		eventDesc  = "삼성전자 세일 페스타만의 꿀혜택을 홍보하고 비스포크 굿즈를 받아보세요!";
		msg = "이벤트 응모 및 홍보 이미지 보내기가 완료되었습니다.<br>이벤트페이지에서 정상참여 되었는지 확인해주세요.<br>(비정상 종료, 나와의 채팅방 공유는 반영되지 않습니다)";
	}else if(eventAddYn == "B2C_KAKAO_SEND"){
		eventTitle = "삼성전자와 함께하는 가족사랑 선물대전";
	    eventImagePath = $("[name='chrCard']:checked").parent().find('img').attr('src');
	    eventDesc  = "쑥스러워서 하지 못했던 말, 가족 사랑 마음 카드 이벤트와 함께 선물대전을 즐겨보세요!";
	    msg = "이벤트 응모 및 마음 카드 보내기가 완료되었습니다.<br>이벤트페이지에서 정상참여 되었는지 확인해주세요.<br>(비정상 종료, 나와의 채팅방 공유는 반영되지 않습니다)";
	}
    snsShare.kakaoTalkCallback(eventUrl, eventTitle, eventImagePath, eventDesc, eventNo, mbrNo);
    makeAlert(msg, eventPopClose);
}

//[유효성 체크] 카드선택
function fnValidationSelCard(){
	var passyn = true;
	passyn = $("input[name='chrCard']").is(':checked');
	if(!passyn){
		if(eventInfo.entryEvent.eventAddYn == "B2C_KSF_KAKAO_SEND"){
			makeAlert("홍보 이미지를 선택해 주세요.");
		}else if(eventInfo.entryEvent.eventAddYn == "B2C_KAKAO_SEND"){
			makeAlert("응원카드를 선택해 주세요.");
		}
	}
	return passyn;
}
/********************** 코세페 (코리아 세일 페스타) end**********************/

/*
새로운 갤럭시 알림신청-추가설문팝업 html tag
*/
function drawSurveyHtmlCode(){
	stPath = ($("#openPop").data("st-path"));

	var options = {
			url: stPath+"xhr/event/getEventSurveyCodeList",
			done: function (data) {
				var evtSurBftCdList = data.evtSurBftCdList;
				var evtSurPhoneCdList = data.evtSurPhoneCdList;

				var html="";
				html += '<div class="layer-pop layer-normal layer-event-survey" id="popupAddSurvey" style="z-index:300;" tabindex="0" data-popup-layer="popupAddSurvey" data-focus="popupAddSurvey">';
				html += '    <button type="button" id="exhibition" data-popup-target="popupAddSurvey" style="display: none;"></button>';
				html += '    <div class="layer-header">';
				html += '        <h2>새로운 Galaxy 추가 설문조사</h2>';
				html += '    </div>';
				html += '    <div class="layer-content">';
				html += '		<div class="frm-login wrap-scroll">';
				html += '			<form id="eventEntrySurveyPopFrm">';
				html += '	            <input type="hidden" id="joinNo" name="joinNo" />';
				html += '	            <input type="hidden" id="eventNo" name="eventNo" />';
				html += '	            <input type="hidden" id="evtSurBftCd" name="evtSurBftCd" value=""/>';
				html += '	            <input type="hidden" id="evtSurPhoneCd" name="evtSurPhoneCd" value=""/>';
				html += '				<input type="hidden" id="focusTarget" value=""/>';
				html += '				<input type="hidden" id="focusTargetType" value=""/>';
				html += '				<input type="hidden" id="jsonStr" name="jsonStr" value=""/>';
				html += '				<fieldset>';
				html += '					<legend>설문조사 입력</legend>';
				html += '					<div class="inp-box-survey bg-box">';
				html += '						<div class="inp-box">';
				html += '							<label for="prodSolSltLv1" class="lb-line">제품 구매 시 가장 선호하는 혜택을 선택해주세요.</label>';
				html += '							<div id="evtSurBftCdList" class="wrap-droplist">';
				html += '								<button class="droplist-button" aria-haspopup="listbox" aria-labelledby="droplistTitleLv-1 droplistPdBtn-1"';
				html += '									id="droplistPdBtn-1">옵션을 선택하세요</button>';
				html += '								<ul class="droplist" tabindex="-1" role="listbox" aria-labelledby="droplistTitleLv-1"';
				html += '									aria-activedescendant="pd-type01-01">';

				for (var i = 0; i < evtSurBftCdList.length; i++) {
					html += '<li id="pd-type01-0' + (i + 1) + '" role="option" data-pd-type-cd="' + evtSurBftCdList[i].dtlCd + '" class="droplist-item">' + evtSurBftCdList[i].dtlNm + '</li>';
				}

	//			html += '									<li id="pd-type01-02" role="option" class="droplist-item">카드할인</li>';
	//			html += '									<li id="pd-type01-03" role="option" class="droplist-item">중고폰 보상</li>';
	//			html += '									<li id="pd-type01-04" role="option" class="droplist-item">무이자 할부</li>';
				html += '								</ul>';
				html += '							</div>';
				html += '							<div id="evtSurBftCdListErr" class="error-msg">';
				html += '								<p>※ 옵션을 선택하십시오.</p>';
				html += '							</div>';
				html += '						</div>';
				html += '						<div class="inp-box">																																															';
				html += '							<label for="prodSolSltLv1" class="lb-line">현재 사용중인 스마트폰의 제조사를 선택해주세요.</label>																																															';
				html += '							<div id="evtSurPhoneCdList" class="wrap-droplist">																																															';
				html += '								<button class="droplist-button" aria-haspopup="listbox" aria-labelledby="droplistTitleLv-1 droplistPdBtn-2"																																															';
				html += '									id="droplistPdBtn-2">옵션을 선택하세요</button>																																															';
				html += '								<ul class="droplist" tabindex="-1" role="listbox" aria-labelledby="droplistTitleLv-1"																																															';
				html += '									aria-activedescendant="pd-type01-01">';
				for (var i = 0; i < evtSurPhoneCdList.length; i++) {
					html += '<li id="pd-type01-0' + (i + 1) + '" role="option" data-pd-type-cd="' + evtSurPhoneCdList[i].dtlCd + '" class="droplist-item">' + evtSurPhoneCdList[i].dtlNm + '</li>';
				}
	//			html += '									<li id="pd-type01-01" role="option" class="droplist-item">삼성</li>																																															';
	//			html += '									<li id="pd-type01-02" role="option" class="droplist-item">애플</li>																																															';
	//			html += '									<li id="pd-type01-03" role="option" class="droplist-item">화웨이</li>																																															';
	//			html += '									<li id="pd-type01-04" role="option" class="droplist-item">오포</li>																																															';
	//			html += '									<li id="pd-type01-05" role="option" class="droplist-item">비보</li>																																															';
	//			html += '									<li id="pd-type01-06" role="option" class="droplist-item">기타</li>																																															';
				html += '								</ul>																																															';
				html += '							</div>																																															';
				html += '							<div id="evtSurPhoneCdListErr" class="error-msg">																																															';
				html += '								<p>※ 옵션을 선택하십시오.</p>																																															';
				html += '							</div>																																															';
				html += '						</div>																																															';
				html += '					</div>																																															';
				html += '				</fieldset>																																															';
				html += '			</form>																																															';
				html += '		</div>																																															';
				html += '        <div class="btn-box">																																															';
				html += '            <button id="eventSurveySaveBtn" type="button" class="btn btn-d btn-type2">제출하기</button>																																															';
				html += '        </div>																																															';
				html += '    </div>																																															';
				html += '    <button type="button" class="pop-close evt-pop-close" data-focus-next="popupAddSurvey">팝업닫기</button>																																															';
				html += '</div>																																															';

				if ($("#popupArea_Event3791").length > 0) {
					$("#popupArea_Event3791").append(html);

					$("#exhibition").click();
				}

				$("#eventEntrySurveyPopFrm > #eventNo").val(entryEvent.eventNo); // 서버전송용 이벤트 번호
			}
	};

	ajax.call(options);

}

/*
	이벤트 설문 저장
*/
function fnSaveEventSurvey(){
	$(".error-msg").hide();

	$("#focusTarget").val("");

	if (fnSurveyValidCheck()) {
		createSurveyJsonStr();

		var options = {
				url: stPath+"xhr/event/insertEventSurvey",
				data: $("#eventEntrySurveyPopFrm").serialize(),
				done: function (data) {
					var result = data.result;

					makeAlert(result.resultMsg, eventPopClose);
				}
			};

		ajax.call(options);

	} else {
		var id = $("#focusTarget").val();
		var type = $("#focusTargetType").val();

		if(type == ""){
			setTimeout(function(){
				$("#"+id).focus();
			}, 1);
		}else{
			$("input[name="+id+"]").focus();
		}

		return;
	}

}

function fnSurveyValidCheck() {
	var passyn = "Y";

	var evtSurBftCd = $("#evtSurBftCdList > ul > li.focused").data("pd-type-cd");
	var evtSurPhoneCd = $("#evtSurPhoneCdList > ul > li.focused").data("pd-type-cd");

	if (joinNo === undefined || joinNo == '') {
		passYn = "N";
		alert("응모번호가 존재하지 않습니다.");
	} else {
		$("#eventEntrySurveyPopFrm > #joinNo").val(joinNo);
	}

	if (evtSurBftCd === undefined) {
		$("#evtSurBftCdListErr").show();
	//	$("#droplistPdBtn-1").click();
		passyn = "N";
	} else {
		$("#eventEntrySurveyPopFrm > #evtSurBftCd").val(evtSurBftCd);
	}

	if (evtSurPhoneCd === undefined ) {
		$("#evtSurPhoneCdListErr").show();
	//	$("#droplistPdBtn-2").click();
		passyn = "N";
	} else {
		$("#eventEntrySurveyPopFrm > #evtSurPhoneCd").val(evtSurPhoneCd);
	}

	return passyn == "Y" ? true : false;
}

/*
	추가필드의 내용을 jsonString으로 조합해서 서버로 전달
*/
function createSurveyJsonStr(){

	var jsonStr = new Object;
	var rowArr = new Array;
	var index = 0;

	//addSurveyFields = eventInfo.addSurveyFields; // 추가 설문필드

	var addSurvey = new Object;
	var addSurveyFields = new Array;

	addSurvey.fldNo = "evtSurBftCdList";
	addSurvey.surveyFldTpCd = 50;
	addSurvey.fldGrp = 1;
	addSurvey.fldNm = '제품 구매 시 가장 선호하는 혜택을 선택해주세요.';

	addSurveyFields.push(addSurvey);

	addSurvey = new Object;
	addSurvey.fldNo = "evtSurPhoneCdList";
	addSurvey.surveyFldTpCd = 50;
	addSurvey.fldGrp = 2;
	addSurvey.fldNm = '현재 사용중인 스마트폰의 제조사를 선택해주세요.';

	addSurveyFields.push(addSurvey);

	$.each(addSurveyFields, function(idx, item){
		let jobj = new Object;
		let id = item.fldNo;
		let surveyFldTpCd = item.surveyFldTpCd;

		if(surveyFldTpCd == "10" || surveyFldTpCd == "20" || surveyFldTpCd == "90" || surveyFldTpCd == "100" || surveyFldTpCd == "130"){
			// 한줄 , 여러줄
		}else if(surveyFldTpCd == "30"){
			// 라디오 버튼
		}else if(surveyFldTpCd == "40"){
			// 체크박스
		}else if(surveyFldTpCd == "50"){
			// 셀렉트박스
//			var evtSurBftCd = $("#evtSurBftCdList > ul > li.focused").data("pd-type-cd");
//			var evtSurPhoneCd = $("#evtSurPhoneCdList > ul > li.focused").data("pd-type-cd");

			var selText = $("#"+id+" > ul > li.focused").text();
			if(selText != ""){
				jobj.fldNo = item.fldNo+"";
				jobj.fldGrp = item.fldGrp;
				jobj.surveyFldTpCd = item.surveyFldTpCd+"";
				jobj.fldNm = item.fldNm;
				jobj.fldVal = selText;

				rowArr.push(jobj);
				jsonStr.addSurveyFields = rowArr;
			}
			index++;
		} else if(surveyFldTpCd == "60"){
			// 첨부파일
		} else if(surveyFldTpCd == "110") {
			//평점
		} else if(surveyFldTpCd == "120"){
			//다중 첨부파일
		}

	});

	if(index == 0){
		$("#jsonStr").val("noData"); // 항목이 없을 경우 noData 로 넘겨서 서버에서 else 처리함
	}else{
		$("#jsonStr").val(JSON.stringify(jsonStr));
	}

	//console.log($("#jsonStr").val());
}


/* KCB인증 */
function drawEventKcbAuthDivHtmlCode(data){
	var html="";
	html += '<form name="form_kcbPhone" method="post">';
	html += '	<input type="hidden" name="tc" value="kcb.oknm.online.safehscert.popup.cmd.P931_CertChoiceCmd">';
	html += '	<input type="hidden" name="cp_cd" value="">'; //회원사 코드
	html += '	<input type="hidden" name="mdl_tkn" value="">'; // 토큰
	html += '</form>';

	return html;
}


/********************** KCB 인증 전용 모듈 **********************/

var certificationKcbFlag = false;

function fnCallPop7(evtNo){
		pblcEvtNo = evtNo;

	oneTimeChk = false;

	returnUrl = window.location.pathname;

	var searchPath = window.location.search;

	if(searchPath.indexOf("eventNo") != -1) {
		returnUrl += searchPath;
	} else {
		if (searchPath.indexOf("?") != -1){
			if(returnUrl.indexOf("event/eventContentDetailView") != -1) {
				returnUrl += searchPath + "&eventNo="+pblcEvtNo;
			} else {
				returnUrl += searchPath;
			}
		} else {
//			returnUrl += "?eventNo="+pblcEvtNo;
		}
	}

	stPath = ($("#openPop").data("st-path"));

	var param;
	param = {eventNo : pblcEvtNo , isPreView : isPreView };

	var options = {
		url : stPath+"xhr/event/getEventBaseInfo"
		, data : param
		, done: function (data) {

			$("#mask").remove();
			var eventInfo = data.eventInfo;

			if(eventInfo.errMsg == "" || eventInfo.errMsg == null){
				if (!certificationKcbFlag) {
					eventAddYn = eventInfo.entryEvent.eventAddYn;
					fnKcbPopup(data);
				} else {
					//애드브릭스 customEvent
					adbrixCustomEvent(data.eventInfo.entryEvent.ttl, pblcEvtNo, 'click');
					
					setEventPopRenewal(data);
				}

			}else{
				if(eventInfo.errCd == "LGN0005"){
					makeAlert(eventInfo.errMsg, fnGoLoginPage);
				}else{
					makeAlert(eventInfo.errMsg, eventPopClose);
				}
			}
			if(eventGbCd){
				if(eventInfo.plazas){
					$("#eventBtn_Area_div").css("display","none");
				}else{
					$("#eventBtn_Area_div").css("display","");
				}
			}
		}
	};
	ajax.call(options);
	multiFileCnt = 0;			//첨부파일 개수 초기화
}

//휴대폰실명인증 popup
function fnKcbPopup(data) {
	stPath = ($("#openPop").data("st-path"));

	$eventKcbAuthDiv = $(drawEventKcbAuthDivHtmlCode(data));

	$("#popupArea_Event3791").html("");

	if($("#popupArea_Event3791").length > 0) {
		$("#popupArea_Event3791").append($eventKcbAuthDiv);
		var kcbPhone = data.kcbPhone;

		$("form[name='form_kcbPhone']").children("input[name='cp_cd']").val(kcbPhone.cp_CD);
		$("form[name='form_kcbPhone']").children("input[name='mdl_tkn']").val(kcbPhone.mdl_TKN);

	}

	var agent = navigator.userAgent.toLowerCase();

	if ( ( (navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf("msie") !== -1))){
		newWindowAndSubmit({
			url : stPath + 'popupKcbPhone/',
			stContextPath : stPath
		})
	} else {
		window.open(
						'',
						'popupChk',
						'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
		document.form_kcbPhone.action = "https://safe.ok-name.co.kr/CommonSvl";
		document.form_kcbPhone.target = "popupChk";
		document.form_kcbPhone.submit();
	}
}

function cbCertificationInfo(data) {
	if(data.rtnCode){
		// 닷컴 비스포크 인피니티 라인
		if (eventAddYn == 'B2C_BSPK_INFINITE_LINE') {
			var birthDayYear = (data.birthDate).toString().substring(0, 4);
			var curYear = new Date().getFullYear();
			var curAge = (curYear - birthDayYear) + 1;

			if (curAge < 19) {
				makeAlert("만19세 이상만 응모할 수 있습니다.");
				return;
			} else {

				param = { ciToken : data.colInfo, eventNo: pblcEvtNo };

				ciToken = data.colInfo;
				stPath = ($("#openPop").data("st-path"));

				var options = {
					url : stPath+"xhr/event/getEventKcbAuthCnt"
					, data : param
					, done: function (data) {

						if (data.kcbAuthCnt > 0) { // 이미 KCB정보로 등록이 되어 있으면,
							certificationKcbFlag = false;
							makeAlert("이미 응모하였습니다.");

						} else {
							certificationKcbFlag = true;

							makeAlert("본인 인증이 완료 되었습니다.", fnCallPop7Chain);
						}

					}
				};

				ajax.call(options);
			}
		}
		// 갤캠스 비스포크 인피니티 라인
		else if (eventAddYn == 'B2B2C_9ALAXY_DAY') {
			param = { ciToken : data.colInfo, eventNo: pblcEvtNo };

			ciToken = data.colInfo;
			stPath = ($("#openPop").data("st-path"));

			var options = {
				url : stPath+"xhr/event/getEventKcbAuthCnt"
				, data : param
				, done: function (data) {

					if (data.kcbAuthCnt > 0) { // 이미  KCB정보로 등록이 되어 있으면,
						certificationKcbFlag = false;
						makeAlert("이미 응모하였습니다.");

					} else {
						certificationKcbFlag = true;

						makeAlert("본인 인증이 완료 되었습니다.", fnCallPop7Chain);
					}

				}
			};

			ajax.call(options);
		}

		else {
			makeAlert("해당하는 특정이벤트가 없습니다.");
		}

	} else{
		certificationKcbFlag = false;
	}
}

function fnCallPop7Chain() {
	fnCallPop7(pblcEvtNo);
}

//응모자수
function listEventParticpant(evtNo) {
			stPath = $("#openPop").data("st-path");
        	var options = {
                url: stPath + "xhr/event/getEventJoinInfo",
                data:{eventNo : evtNo},
                done: function(data) {
                	$("#test").append("<p>{현재 "+data.result.entryTtlCnt+"명 응모중!}</p>");
                },
                fail:function(){
                }
    	}
    	ajax.call(options);
}

// 갤캠스 대학교 대항전 학교 순위
function galcamsSchoolEvent(evtNo, cnt, schoolNm, entryNum) {
	if(evtNo == undefined || evtNo == ""){
		makeAlert("eventNo가 존재하지 않습니다.");
		return;
	} else {
		stPath = ($("#openPop").data("st-path"));

		var param = {
				eventNo: evtNo
			,   cnt:cnt
			,   eventSchoolNmYn:schoolNm
			,   eventEntryYn:entryNum
		};

		var options = {
			url : stPath+"xhr/event/galcamsSchoolEvent"
			, data : param
			, type: 'POST'
			, dataType : "html"
			, done: function (data) { //joinName, fldVal, sysRegrNo
				$("#schoolEventRank").children().remove();
				$("#schoolEventRank").html(data);
			}
		};
		ajax.call(options);
	}
}

//갤캠스 이벤트 참여가능 사용자 체크
function fnCallPop8(evtNo) {
	stPath = $("#openPop").data("st-path");

	var options2 = {
        url: stPath + "xhr/member/getSession",
        type: "POST",
        done: function(data) {
            var session = JSON.parse(data);
            if(session.mbrNo == 0 ) {
				var returnUrl = $("input[name=returnUrl]").val();
				location.href= stPath + 'member/indexLogin/?returnUrl='+ window.location.pathname + "?eventNo="+evtNo;
            }else{
                var fnCallPop8Data = {
            			mbrNo : session.mbrNo
            		  , eventNo : evtNo
                };

            	var options = {
                        url : stPath + "xhr/event/galcamsEntryTargetInfo",
                        data: fnCallPop8Data,
                        done: function(data2) {
                        	if($("#popupArea_Event3791").length > 0){
                        		$("#popupArea_Event3791").children().remove();
                        	}

                        	if(data2.eventTargetChk){
                        		fnCallPop2(evtNo);
                        	}else{
                            	makeAlert(data2.msg, eventPopClose);
                            	$("#mask").remove();
                        		return;
                        	}
                        }
            	}
            	ajax.call(options);
            }
        }
    }
    ajax.call(options2);
}

//갤캠스 당첨 팝업
function drawPopHtmlCode6(){
	var html="";
	html += '<div class="layer-pop layer-default alert layer-event-exhibition" id="popupWinInfo" tabindex="0" data-popup-layer="popupWinInfo" data-focus="popupWinInfo">';
	html += '   <button type="button" id="exhibition" data-popup-target="popupWinInfo" style="display: none;"></button>';
/****************************/
	html += '   <div id = "winPopDiv">';
	html += '   </div>';
/****************************/
	html += '	<button type="button" class="pop-close evt-pop-close" data-focus-next="popupWinInfo">팝업닫기</button>';
	html += '</div>';
	return html;
}

//당첨
function drawPopHtmlCode6_1() {
    var html = "";
      html += 	'<div class="layer-header blind">';
      html += 		'<h2>이벤트 당첨 결과 팝업</h2>';
      html += 	'</div>';
      html += 	'<div class="layer-content">';
      html += 		'<div class="content-box">';
      html += 			'<ul>';
      html += 				'<li>';
      html += 					'<div class="icon-box">';
      html += 						'<i class="gc_icon i-event-01">이벤트 팝업 이미지01</i>';
      html += 					'</div>';
      html += 					'<p class="gc_bold_word">';
      html += 						'<span id="winName"></span>님, 축하해요<br>';
      html += 						'<br>';
      html += 						'<span id="eventName"></span> 결과<br>';
      html += 						'<span class="gc_blue_word gc_bold_word"><span id="rewardNm"></span></span>에<br>';
      html += 						'당첨되셨습니다';
      html += 					'</p>';
      html += 				'</li>';
      html += 			'</ul>';
      html += 		'</div>';
      html += 		'<div class="btn-box">';
      html += 			'<a href="javascript:void(0)" class="btn btn-d btn-type2" onclick="eventPopClose();">확인</a>';
      html += 		'</div>';
      html += 	'</div>';

    return html
}

//미당첨
function drawPopHtmlCode6_2() {
    var html = "";
	      html += 	'<div class="layer-header blind">';
	      html += 		'<h2>이벤트 당첨 결과 팝업</h2>';
	      html += 	'</div>';
	      html += 	'<div class="layer-content">';
	      html += 		'<div class="content-box">';
	      html += 			'<ul>';
	      html += 				'<li>';
	      html += 					'<div class="icon-box">';
	      html += 						'<i class="gc_icon i-event-01">이벤트 팝업 이미지01</i>';
	      html += 					'</div>';
	      html += 					'<p class="gc_normal_word">';
	      html += 						'아쉽게도 이벤트에 당첨되지 않았어요';
	      html += 						'다른 이벤트도 많이 준비되어 있으니';
	      html += 						'도전해 주세요';
	      html += 					'</p>';
	      html += 				'</li>';
	      html += 			'</ul>';
	      html += 		'</div>';
	      html += 		'<div class="btn-box">';
	      html += 			'<a href="javascript:void(0)" class="btn btn-d btn-type2" onclick="eventPopClose();">확인</a>';
	      html += 		'</div>';
	      html += 	'</div>';
    return html
}


function fnDrawPop6(){
	// 팝업 html Code
	if($("#popupArea_Event3791").length > 0){
		$("#popupArea_Event3791").children().remove();
		$("#popupArea_Event3791").append($popDiv6);
	}else{
		$("#popupArea").append($popDiv6);
	}

	// 툴팁 html Code
	if($("#tooltipArea_Event3791").length > 0){
		$("#tooltipArea_Event3791").children().remove();
		$("#tooltipArea_Event3791").append($tooltipDiv);
	}else{
		$("#tooltipArea").append($tooltipDiv);
	}

	$(".titleNo").show();
}

/* 기존 이벤트 응모 팝업 화면 셋팅 */
function setEventPop6(data){
	fnDrawPop6();
	$("#exhibition").click(); // 팝업표시

	if (data.myWinInfo.mbrNm == null || data.myWinInfo.mbrNm == "N") {
		$("#winPopDiv").empty().append(drawPopHtmlCode6_2());
	}else{
		$("#winPopDiv").empty().append(drawPopHtmlCode6_1());
	    $("#winName").text(data.myWinInfo.mbrNm);       		// 화면출력용 사용자명
	    $("#eventName").text(data.myWinInfo.ttl);				// 화면출력용 이벤트명
	    $("#rewardNm").text(data.myWinInfo.rewardNm);		// 화면출력용 보상명
	}
}


/* 당첨자 팝업 호출 */
function fnCallPop9(evtNo){
	oneTimeChk = false;

	pblcEvtNo = evtNo;
	returnUrl = window.location.pathname;

	var searchPath = window.location.search;

	if(searchPath.indexOf("eventNo") != -1) {
		returnUrl += searchPath;
	} else {
		if (searchPath.indexOf("?") != -1){
			if(returnUrl.indexOf("event/eventContentDetailView") != -1) {
				returnUrl += searchPath + "&eventNo="+pblcEvtNo;
			} else {
				returnUrl += searchPath;
			}
		} else {
			returnUrl += "?eventNo="+pblcEvtNo;
		}
	}

	stPath = ($("#openPop").data("st-path"));

	var options2 = {
	        url: stPath + "xhr/member/getSession",
	        type: "POST",
	        done: function(data) {
	            var session = JSON.parse(data);
	            if(session.mbrNo == 0 ) {
					var returnUrl = $("input[name=returnUrl]").val();
					location.href= stPath + 'member/indexLogin/?returnUrl='+ window.location.pathname + "?eventNo="+evtNo;
	            }else{
	                var param = {mbrNo : session.mbrNo , eventNo : evtNo };

	            	var options = {
	                        url : stPath + "xhr/event/getMyWinInfo",
	                        data: param,
	                        done: function(data2) {
	                        	$("#mask").remove();
	                        	//if(eventInfo.errMsg == "" || eventInfo.errMsg == null){}
	        					setEventPop6(data2);
	                        }
	            	}
	            	ajax.call(options);
	            }
	        }
	    }
	    ajax.call(options2);
}
/* S @PIL(22.10.28) GCS 뽐 겔러리 참여 작품 보러 가기 ----------*/
function fnCallPop11(evtNo){
   stPath = ($("#openPop").data("st-path"));
   window.location.href = stPath+"galcamsLog/event/" + evtNo + "/list";
}

/* S @PIL(22.10.28) GCS 뽐 겔러리 이벤트 정보 동의 & 참여 ----------*/
function fnCallPop12(evtNo){
    ugcFlag     = true;
    pblcEvtNo = evtNo;
    stPath      = $("#openPop").data("st-path");

	var options2 = {
        url: stPath + "xhr/member/getSession",
        type: "POST",
        done: function(data) {
            var session = JSON.parse(data);

	         if(session.mbrNo ==0){
					var returnUrl = $("input[name=returnUrl]").val();
					location.href= stPath + 'member/indexLogin/?returnUrl='+ window.location.pathname + "?eventNo="+evtNo;
	         }else{
			    var param = {
			            mbrNo : session.mbrNo
			          , eventNo : evtNo
			    };
			
				var options = {
			            url : stPath + "xhr/event/galcamsEventEntryInfo",
			            data: param,
			            done: function(data2) {
			               // 정보 동의 여부 및 뽐갤러리 글쓰기 여부 체크
			            	if(data2.eventEntryInfoChk){
			            		fnCallPop2(evtNo);
			            	}else{
			                	makeAlert(data2.msg, eventPopClose12); // 뽐 갤러리 글쓰기 화면으로 이동
			                	$("#mask").remove();
			            		return;
			            	}
			            }
				}
				ajax.call(options);
			}
        }
    }
    ajax.call(options2);
}

/* S @PIL(22.10.28) GCS 뽐 겔러리 이벤트 KCP 인증 & 참여 ----------*/
function fnCallPop13(evtNo){
    ugcFlag     = true;
    pblcEvtNo = evtNo;
    stPath      = $("#openPop").data("st-path");

	var options2 = {
        url: stPath + "xhr/member/getSession",
        type: "POST",
        done: function(data) {
            var session = JSON.parse(data);

	         if(session.mbrNo ==0){
					var returnUrl = $("input[name=returnUrl]").val();
					location.href= stPath + 'member/indexLogin/?returnUrl='+ window.location.pathname + "?eventNo="+evtNo;
	         }else{
			    var param = {
			            mbrNo : session.mbrNo
			          , eventNo : evtNo
			    };
			
				var options = {
			            url : stPath + "xhr/event/galcamsEventEntryInfo",
			            data: param,
			            done: function(data2) {
			               // 정보 동의 여부 및 뽐갤러리 글쓰기 여부 체크
			            	if(data2.eventEntryInfoChk){
			            		fnCallPop7(evtNo);
			            	}else{
			                	makeAlert(data2.msg, eventPopClose12); // 뽐 갤러리 글쓰기 화면으로 이동
			                	$("#mask").remove();
			            		return;
			            	}
			            }
				}
				ajax.call(options);
			}
        }
    }
    ajax.call(options2);
}

/* S @PIL(22.10.28) GCS 뽐 겔러리 이벤트 응모 제한 & 참여 ----------*/
function fnCallPop14(evtNo){
    ugcFlag     = true;
    pblcEvtNo = evtNo;
    stPath      = $("#openPop").data("st-path");

	var options2 = {
        url: stPath + "xhr/member/getSession",
        type: "POST",
        done: function(data) {
            var session = JSON.parse(data);

	         if(session.mbrNo ==0){
					var returnUrl = $("input[name=returnUrl]").val();
					location.href= stPath + 'member/indexLogin/?returnUrl='+ window.location.pathname + "?eventNo="+evtNo;
	         }else{
			    var param = {
			            mbrNo : session.mbrNo
			          , eventNo : evtNo
			    };
			
				var options = {
			            url : stPath + "xhr/event/galcamsEventEntryInfo",
			            data: param,
			            done: function(data2) {
			               // 정보 동의 여부 및 뽐갤러리 글쓰기 여부 체크
			            	if(data2.eventEntryInfoChk){
			            		fnCallPop8(evtNo);
			            	}else{
			                	makeAlert(data2.msg, eventPopClose12); // 뽐 갤러리 글쓰기 화면으로 이동
			                	$("#mask").remove();
			            		return;
			            	}
			            }
				}
				ajax.call(options);
			}
        }
    }
    ajax.call(options2);
}

/*  뽐 갤러리 이벤트 팝업닫기 */
function eventPopClose12(){
	$(".evt-pop-close").trigger("click");
	
	window.location.href = stPath+"galcamsLog/write/?eventNo="+pblcEvtNo;
}

/* E ----------@PIL(22.10.28) GCS 뽐 겔러리  */


//투표하기 선택
$(document).on("click", ".voteAnswer", function(){
	var title="";
	var html="";
	var checkCnt=0;

	$(this).parent().parent().find(".item").each(function(){
		if($(this).find("input").is(":checked") == true){
			if(title == ""){
				title=$(this).find("input").val();
			}
			checkCnt++;
		}
	});

	if(checkCnt == 0){
		$(this).parents(".dropOption").find("a").removeClass("right-add-icon");
		html += "			<span class='left-title'>내용을 확인하고 선택해주세요</span>";
	}else if(checkCnt == 1){
		$(this).parents(".dropOption").find("a").removeClass("right-add-icon").addClass("right-add-icon");
		html += "			<span class='left-title'>"+title+"</span>";
		html += "		<span class='round-icon-sky'>선택 완료</span>";
	}else{
		checkCnt--;
		$(this).parents(".dropOption").find("a").removeClass("right-add-icon").addClass("right-add-icon");
		html += "			<span class='left-title'>"+title+"</span>";
		html += "			<em class='others-num'>외 "+checkCnt+"개</em>";
		html += "		<span class='round-icon-sky'>선택 완료</span>";
	}
	$(this).parents(".dropOption").find("a").empty().append(html);
});

//애드브릭스 호출
function adbrixCustomEvent(ttl, evtNo, clickTime){
	var eventName = "";
	var userAgent=navigator.userAgent.toUpperCase();
	//애드브릭스 customEvent
	if(window.secapp !== undefined && userAgent.indexOf("SECAPP") > -1){
		if(clickTime == "success"){
			eventName = "enter_event_" + String(evtNo);
		}else{
			eventName = "click_event_" + String(evtNo);
		}
    	var eventParam = {
    		eventName : eventName
    	  , attrModel : {
    		      eventNm : ttl,
    		      service_id : "GCS"
    		}
    	};
		window.secapp.customEvent(JSON.stringify(eventParam));
	}	
}