var membershipAppCardTerms = {
	vWrapId : ".app-content"
	// 멤버십 카드 발급 요청
	, vCardIssueUrl : "xhr/membership/sendGcdmCardIssue"
	// 멤버십 약관 요청
	, vCardTermsUrl : "membership/membershipAppCardTermsPop/"
	// 멤버십 약관 팝업ID
	, vCardTermsId : "TERMSPOPUP"
	// 멤버십 약관 팝업 객체
	, vTermsWin : null
	// O : 삼성전자 OK 캐쉬백 카드
	, fnReqOcardIssue : function(stPath){
		var ajaxOptions = {
			url: stPath + this.vCardIssueUrl
			// 카드 타입(ivcardtype), 마케팅 활용 위한 제3자 제공동의(ivmakagree)
			, data : {ivcardtype : "O", ivmakagree : $("#checkTerms-40").prop("checked")? "Y" : "N"}
			, done: function (res){
				var objAlertData = {title: "alert" , content : '', callback : ''};
				if (res.result.evtype === "S"){
					// 결과코드(S:성공)
					objAlertData.content = _MEMBERSHIP_CARD_O_SUCESS;
					objAlertData.callback = membershipAppCardTerms.fnCallNativeMembershipCard;
				}else if (res.result.evtype === "D"){
					// 결과코드(D:기발급 카드)
					objAlertData.content = _MEMBERSHIP_CARD_DUPLICATE;
				}else{
					// 결과코드(E:실패)
				 	objAlertData.content = _MEMBERSHIP_CARD_FAIL;
				}
				commonAlert(objAlertData);
				openLayer('commonAlert');
				return false;
			}
		};
		ajax.call(ajaxOptions);
	}
	, fnCallNativeMembershipCard : function(){
		var secapp = window.secapp;
		if(typeof secapp !== 'undefined') {
			try {
				if(typeof secapp.setCreateMembershipCard === 'function') {
					// 안드로이드 Native 멤버쉽 카드 노출
					secapp.setCreateMembershipCard();
//					secapp.setCreateMembershipCard(JSON.stringify(arg));
				}
			} catch(e) {}
		}else console.log("fnCallNativeMembershipCard Show"); 
	}
	, fnTermsCheck : function(){
		var rtnVal = true;
		$("input[data-required='Y']").each(function(){
			if ($(this).attr("data-checkyn") !== "Y"){
				rtnVal = false;
				$(this).siblings(".error-msg").html(_MEMBERSHIP_CARD_TERMS_CONTENT_CHECK);
				$(this).addClass("error");
			}else if ($(this).prop("checked") === false){
				rtnVal = false;
				$(this).siblings(".error-msg").html(_MEMBERSHIP_CARD_TERMS_CHECK);
				$(this).addClass("error");
			}
		});
		return rtnVal;
	}
	, fnPopupCall : function(stPath, vTermsGbCd){
		this.vTermsWin = window.open("", this.vCardTermsId);
		var $objTermVO = $("[name=termsVo]");
		$("[name=termsGbCd]").val(vTermsGbCd);
		$objTermVO.attr("action", stPath + this.vCardTermsUrl);
		$objTermVO.attr("target", this.vCardTermsId);
		$objTermVO.submit();
	}
	, fnPopupCallback : function(termsGbCd){
		this.vTermsWin.window.close();
		var $checkTermsObj = $("#checkTerms-" + termsGbCd); 
		$checkTermsObj.attr("data-checkyn", "Y");
		if ($checkTermsObj.hasClass("error")){
			$checkTermsObj.removeClass("error");
		}
	}
};

$(document).ready(function(){
	
	// OK 캐쉬백 카드 발급
	$("#btnSendCashback", membershipAppCardTerms.vWrapId).on("click", function(e){
		e.preventDefault();
		if (membershipAppCardTerms.fnTermsCheck()){
			membershipAppCardTerms.fnReqOcardIssue($(membershipAppCardTerms.vWrapId).data("stpath"));
		}
	});
	
	// 약관 확인
	$(".terms-wrap>.terms-box>button", membershipAppCardTerms.vWrapId).on("click", function(e){
		e.preventDefault();
		membershipAppCardTerms.fnPopupCall($(membershipAppCardTerms.vWrapId).data("stpath"), $(this).data("gbcd"));
	});
	
	// 약관 동의
	$("input[data-required='Y']", membershipAppCardTerms.vWrapId).on("click", function(e){
		if ($(this).attr("data-checkyn") !== "Y"){
			$(this).siblings(".error-msg").html(_MEMBERSHIP_CARD_TERMS_CONTENT_CHECK);
			$(this).addClass("error");
			e.preventDefault();
			e.stopPropagation();
		}else{
			if ($(this).hasClass("error")){
				$(this).removeClass("error");
			}
		}
	});
	
	// 약관 전체 동의 
	$("#chk-all", membershipAppCardTerms.vWrapId).off().on("click", function(e){
		
		if ($("[data-checkyn='N']").length > 0){
			e.preventDefault();
			e.stopPropagation();
			commonAlert({content : _MEMBERSHIP_CARD_TERMS_ALL_CHECK});
			openLayer('commonAlert');
		}else{
			var grpNm = $(this).attr("data-children-name");
			if($(this).prop("checked")){
				$("[data-chkgrp-name=" + grpNm + "]:not(:disabled)").prop("checked", true );
			} else {
				$("[data-chkgrp-name=" + grpNm + "]").prop("checked", false );
			}
		}
	});
});