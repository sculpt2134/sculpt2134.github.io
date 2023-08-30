var membershipAppCardIssue = {
	vWrapId : ".app-content"
	// OK캐쉬백 제휴 카드  약관 화면
	, vTermsUrl : "membership/membershipAppCardTerms/"
	// 멤버십 카드 발급 요청
	, vCardIssueUrl : "xhr/membership/sendGcdmCardIssue"
	// OK 캐시백 카드 번호 조회
	, vCardLookupUrl : "xhr/membership/sendGcdmCardLookup"
	// M : 삼성전자 맴버십 카드 발급
	, fnReqMcardIssue : function(stPath){
		var ajaxOptions = {
			url: stPath + this.vCardIssueUrl
			, done: function (data){
				var objAlertData = {title: "alert" , content : '', callback : ''};
				if (data.result.evtype === "S"){
					// 결과코드(S:성공)
					objAlertData.content = _MEMBERSHIP_CARD_M_SUCESS;
					objAlertData.callback = membershipAppCardIssue.fnCallNativeMembershipCard;
				}else if (data.result.evtype === "D"){
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
	// O : OK캐쉬백 제휴 카드  조회
	, fnReqCardLookup : function(stPath){
		var ajaxOptions = {
			url: stPath + this.vCardLookupUrl
			, done: function (data){
				if (data.result.evtype === "S" && data.result.ocbcardno === 'N'){
					// OK캐쉬백 제휴 카드  약관 화면 이동
					location.href = $(membershipAppCardIssue.vWrapId).data("stpath") + membershipAppCardIssue.vTermsUrl;
				}else{
					var objAlertData = {title: "alert" , content : '', callback : ''};
					if (data.result.evtype === "S" && data.result.ocbcardno.length > 2){
						// 기발급 카드
						objAlertData.content = _MEMBERSHIP_CARD_DUPLICATE;
					}else{
						// 결과코드(E:실패)
						objAlertData.content = _MEMBERSHIP_CARD_SEARCH_FAIL;
					}
				 	commonAlert(objAlertData);
				 	openLayer('commonAlert');
				}
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
};

$(document).ready(function(){
	
	// 삼성전자 OK캐쉬백 제휴 카드 발급
	$("#btnViewCashback", membershipAppCardIssue.vWrapId).on("click", function(e){
		e.preventDefault();
		membershipAppCardIssue.fnReqCardLookup($(membershipAppCardIssue.vWrapId).data("stpath"));
    });
	
	// 멤버십 카드 발급
	$("#btnSendMembership", membershipAppCardIssue.vWrapId).on("click", function(e){
		e.preventDefault();
		membershipAppCardIssue.fnReqMcardIssue($(membershipAppCardIssue.vWrapId).data("stpath"));
	});
});
