/**
 * 임직원 복지물 개설 문의 script
 */

var special_pattern = /[~!@\#$%^&*\()\-=+_'\;<>\/.\`:\"\\,\[\]?|{}]/gi;
var email_pattern   = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi ;

function name (data){
	var name = $("input[name="+data+"]");
	return name;
}

var welfareMall = {
	vWrapId : "#bizuniFormWrap"
	, vBizNoCheck : false
	, validateFocus: null
	, fnSuccessApply : function(){
		location.href=$(welfareMall.vWrapId).data('ctpath')+"/welfare/welfareMall/";
	}
	, setError : function name(id, isTerm){
		if(welfareMall.validateFocus == null){
			welfareMall.validateFocus = id;
		}
		if (isTerm) {
			$("#" + id).addClass('error');
		} else {
			$("#" + id).parents(".inp-box").addClass('error');
		}
	}
	, validateNull: function (data) {
		var nameData = name(data)
		var checkData = nameData.val();
		if (checkData == undefined || checkData === "") {
			welfareMall.setError(nameData.attr('id'));
		}
	}
	, validateCaptchaNull: function (data) {
		var nameData = name(data)
		var checkData = nameData.val();
		var captchaId = nameData.attr('id');
		$("#"+captchaId).next().hide();
		
		if (checkData == undefined || checkData === "") {
			$("#"+captchaId).next().html("<p>보안코드를 입력해 주세요.</p>");
			$("#"+captchaId).next().show();

			if(welfareMall.validateFocus == null){
				welfareMall.validateFocus = captchaId;
			}
		}
	}
	, validateMobileNull: function (data) {
		var nameData = name(data)
		var checkData = nameData.val();
		var mobileId = nameData.attr('id');
		
		$("#" + mobileId).next().hide();
		$("#" + mobileId).next().next().hide();
		
		if (checkData == undefined || checkData === "") {
			if(welfareMall.validateFocus == null){
				welfareMall.validateFocus = mobileId;
			}
			$("#" + mobileId).next().show();
		}else{
			welfareMall.validateMobileNumberPattern(mobileId);
		}
	}
	, validateTextarea: function (data) {
		var checkData = $("textarea[name="+data+"]").val();
		if (checkData == undefined || checkData === "") {
			welfareMall.setError($("textarea[name="+data+"]").attr('id'));
		}
	}
	, validateSelect: function (data) {
		var nameData = name(data)
		var checkData = $(".bt_"+data+"").siblings("ul").children("li.focused").val();
		if (checkData == undefined || checkData === "") {
			welfareMall.setError($(".bt_"+data+"").attr('id'));
		}else{
			nameData.val(checkData);
		}
	}
	, validateCheckbox: function (data) {
		var nameData = name(data)
		var checkData = $("input[name="+data+"]:checked");
		if (checkData.length == 0) {
			welfareMall.setError(nameData.attr('id'));
		}
		
	}
	, validateEmailPattern : function () {
		var emailData = $("input[name=email]").val();
		if (emailData.length >= 1) {
			if ( !emailData.match(email_pattern) ) {
            	welfareMall.setError($("input[name=email]").attr('id'));
            }
		}
	}
    , validateMobileNumberPattern : function (mobileId) {
		var mobileData = $("#"+mobileId).val();
		var regExp =/(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/; 
		if(!regExp.test(mobileData)){ 
			if(welfareMall.validateFocus == null){
				welfareMall.validateFocus = mobileId;
			}
        	$("#" + mobileId).next().next().show();
		}
    }
	, fnBizNoCheckCallBack : function(data){
		if(data == undefined){
			let alertData = {
				title: ""
				,content : "사업자등록번호를<br/>확인해 주세요."
				,callback : ""
				,btnText : "확인"
			};
		commonAlert(alertData);
		openLayer('commonAlert');
		bizNoReset();
		
		}else if(data.enpScd != "01"){
			$("div[name=bizNoErr] p").text(data.enpScdMsg);
			$(".inpWithbtn").addClass("error");
			bizNoReset();	

		}else{
			welfareMall.vBizNoCheck = true;
			$(".address-detail,.address-detail-line ").show();
			$("input[name=bizRegNo]").val(data.bizRegNo);
			$("input[name=corpNm]").val(data.corpNm);
			$("input[name=ceoNm]").val(data.ceoNm);
			$("input[name=postNoNew]").val(data.bizPostNoNew);
			$("#roadnmAddr").text(data.bizRoadAddr);
			$("input[name=roadnmAddr]").val(data.bizRoadAddr);
			$("input[name=roadnmDtlAddr]").val(data.bizRoadDtlAddr);
		}
	}
	, fnBizNoCheck : function (bizRegNo){
		searchCompany.callback = function(result){
			welfareMall.fnBizNoCheckCallBack(result);
			
		}
		searchCompany.apiUrl = $(welfareMall.vWrapId).data('ctpath')+"xhr/common/companyInfo"
		searchCompany.searchApi(bizRegNo);
	}
	, fnPostPopup : function(){
		var options = {
			oncomplete: function (data) {
				$("input[name=postNoNew]").val(data.zonecode);
				$("input[name=roadnmAddr]").val(data.roadAddress);
				$("input[name=prclAddr]").val(data.address);
				var adressHtml =  '<p>[도로명]</p><p>' + data.roadAddress + '</p>';
				$(".mid-addr").html(adressHtml);
				$(".address-detail").show();
				$(".address-detail-line").show();
			},
			width: '100%',
			height: '100%',
			maxSuggestItems: 5
		};
		layerPost.embed(options);
	}
	
}

//사업자등록번호 초기화
function bizNoReset(){
	$("input[name=corpNm]").val("");
	$("input[name=bizRegNo]").val("");
	$("input[name=ceoNm]").val("");
	$(".address-detail,.address-detail-line ").hide();
	$("input[name=postNoNew]").val("");	
	$("#roadnmAddr").text("");
	$("input[name=roadnmAddr]").val("");
	$("input[name=roadnmDtlAddr]").val("");							
}

//네이버 캡차
function fnSetNaverCaptchaView(){
	var options = {
			url : $(welfareMall.vWrapId).data('ctpath')+"common/naverCaptchaView/"
		,	data : {}
		,	dataType : "html"
		,	done : function(html){
				$("#captchaTarget").html(html);
				
			    //--------------------------------------------------------------------------------------------
				//-- textbox 에서 enter 를 누를 때마다 주소 검색팝업이 나타나는 것을 방지한다.
				//-- 작성자 : shin seong hoon
			    //--------------------------------------------------------------------------------------------
//				$("#captchaTarget input:text").on("keydown", function(event) {
//					 if ( event.keyCode == "13" ) {
//						 return false;
//					 } 
//				});
		}
	};
	ajax.call(options);		
}

//보안코드 체크 
function fnCheckSecureCode(){
	var options = {
		done : function(data) {
			//if (data.result === $(welfareMall.vWrapId).data('success')) {
			if (data.result == "S") {
	
				//약관 이력 등록을 위한 rcvYns 셋팅
				$("input[name=rcvYns]").each(function() {
					if($(this).parents(".terms-wrap").find("input:checkbox").is(":checked")){
						$(this).val("Y");
					}else{
						$(this).val("N");
					}
				});
				
				//TO - DO :: 인증 성공 후 처리
				var formData = $("#welfareMallForm").serializeJson();
				var options = {
					url: $(welfareMall.vWrapId).data('ctpath')+"xhr/welfare/insertWelfareMall/",
					data: formData,
					done: function (data) {
						let alertData = {
								title: ""
								,content : "임직원 복지몰 개설문의 신청이<br>완료되었습니다."
								,callback : welfareMall.fnSuccessApply
								,btnText : "확인"
							};
						commonAlert(alertData);
						openLayer('commonAlert');
					}
				};
				ajax.call(options);
			} else {
				var captchaId = $("input[name=captchaValue]").attr('id');
				welfareMall.validateFocus = captchaId;
				$("#"+captchaId).next().html("<p>보안문자 코드가 바르지 않습니다.</p>");
				$("#"+captchaId).focus();
				$("#"+captchaId).next().show();
			}
		}
	};
	captCha.cert(options);
}

function insertwelfareMall(){
	welfareMall.validateFocus = null;
	if(!welfareMall.vBizNoCheck){
		welfareMall.setError($("input[name=bizRegNo]").attr('id'));
	}
	welfareMall.validateNull("bizRegNo");
	welfareMall.validateNull("corpNm");
	welfareMall.validateNull("ceoNm");
	welfareMall.validateNull("postNoNew");
	welfareMall.validateNull("roadnmDtlAddr");
	welfareMall.validateNull("eqrrNm");
	welfareMall.validateMobileNull("mobile");
	welfareMall.validateNull("email" );
	welfareMall.validateEmailPattern();
	welfareMall.validateSelect("chrgDpmCd");
	welfareMall.validateSelect("ofclRspnsCd");
	welfareMall.validateSelect("eplyCntCd");
	if((!$("input[name=homepageUrl]")[0].checked
		&& !$("input[name=homepageUrl]")[1].checked)
		|| $("input[name=homepageUrl]:checked").val() == "Y"){
		welfareMall.validateNull("homePageUrl");
	}
//	welfareMall.validateCheckbox("arrSctrTp"    );
//	welfareMall.validateCheckbox("arrPrdslIntrs");
	welfareMall.validateNull("iqrTtl");
//	welfareMall.validateSelect("aplPrtnrTpCd");
	welfareMall.validateTextarea("iqrContent");
	welfareMall.validateCaptchaNull("captchaValue");
	welfareMall.validateCheckbox("agree");
	
	if(welfareMall.validateFocus != null){
		$("#" + welfareMall.validateFocus).focus();
	}else{
		fnCheckSecureCode();
	}
}

function readyLoadwelfareMallView(){

    //--------------------------------------------------------------------------------------------
	//네이버 captCha
    //--------------------------------------------------------------------------------------------
	fnSetNaverCaptchaView();
	captCha.create($(welfareMall.vWrapId).data('ctpath'));
	
    //--------------------------------------------------------------------------------------------
	//-- 취소 버튼 기능을 추가  /  작성자 : shin seong hoon
    //--------------------------------------------------------------------------------------------
	$("#btnCancelBack").on("click", function() {
        if ( document.referrer ) { 
            history.back();
        } 
	}); 
	
    //--------------------------------------------------------------------------------------------
	//-- textbox 에서 enter 를 누를 때마다 주소 검색팝업이 나타나는 것을 방지한다. - 시작
	//-- 작성자 : shin seong hoon
    //--------------------------------------------------------------------------------------------
	$(".inp-line").on("keydown", function(event) {
		 if ( event.keyCode == "13" ) {
			 return false;
		 } 
		return true;
	});
    //--------------------------------------------------------------------------------------------
	//-- textbox 에서 enter 를 누를 때마다 주소 검색팝업이 나타나는 것을 방지한다. - 끝
    //--------------------------------------------------------------------------------------------
	
	//숫자만 입력 가능
	$("input:text[numberOnly]").on("keyup", function() {
		$(this).val($(this).val().replace(/[^0-9]/g,""));
	});
	
	$(".special_pattern").on("focusout", function() {
		var x = $(this).val();
		if (x.length > 0) {
			if (x.match(special_pattern)) {
				x = x.replace(special_pattern, "");
			}
			$(this).val(x);
		}
		}).on("keyup", function() {
			$(this).val($(this).val().replace(special_pattern, ""));
	});
	
    //-------------------------------------------------------------------------
    //-- mobile에서 ctrl + v 로 붙여넣기 할 때 입력값을 검증한다.
	//-- 작성자 : shin seong hoon
    //-------------------------------------------------------------------------
    $(".special_pattern").bind("input paste", function() {
        $(this).trigger("keyup");
    });

    //------------------------------------------------------------------------------
    //-- 입력값 길이를 제한한다 : 시작 -- 작성자 : shin seong hoon
    //------------------------------------------------------------------------------
    function checkMaxLength (object) {
    	var inputData     = $(object).val();
        var currentLength = $(object).val().length;
    	var maxLength     = $(object).attr("maxLength");

    	if (typeof maxLength == "undefined" || maxLength == null || maxLength == "" || Number(maxLength) < 1 ) {
        	return;
        }

        if ( currentLength > maxLength ) {
        	$(object).val(inputData.slice(0, maxLength));
        }
    }
    
    //------------------------------------------------------------------------------
    //-- 입력값 길이를 제한 ==> 국문 25자, 영어 50자 
    //------------------------------------------------------------------------------
    function fnOnLimitInputVal (selector, macLen) {
        var adrsNm    = $(selector).val();
        var totalByte = 0;
        var len       = 0;

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
    
    $("input[type=text]").bind("keyup paste input change propertychange", function() {
    	var id = $(this).attr("id");
        switch (id) {
            case "inpName" :
            	fnOnLimitInputVal(this, 50);
                break;
            default :
            	checkMaxLength(this);
        }
    });
    //------------------------------------------------------------------------------
    //-- 입력값 길이를 제한한다 : 종료
    //------------------------------------------------------------------------------


    /* 글자 수 */
	$(document).on("keyup input", "#inqu-cont", function(e){
		var content = document.getElementById("inqu-cont");
		var bytes = document.getElementById("byte");
		var cnt = 0;
		// var ch = '';
		
		for(var i=0; i<content.value.length; i++){
			// ch = content.value.charAt(i);
			cnt += 1;
		}
		
		bytes.innerHTML = cnt;
		if(cnt > 2000){
			$("#inqu-box").val($("#inqu-box").val().substring(0,2000));
			bytes.innerHTML = 2000;		
		}
		
		$(this).parents(".inp-box").removeClass('error');
	});	

	//text 수정 시 에러 메세지 제거 
	$(welfareMall.vWrapId).on("keyup", "input[type=text]", function(){
		var id = $(this).attr('id');
		$("#" + id).parents(".inp-box").removeClass('error');
	});
	
	$(welfareMall.vWrapId).on("click", "li", function(){
		var id = $(this).parent('ul').attr('id');
		$("#" + id).parents(".inp-box").removeClass('error');
	});
	
	$(welfareMall.vWrapId).on("click", "input[type=checkbox], input[type=radio]", function(){
		var id = $(this).attr('id');
		$("#" + id).parents(".inp-box").removeClass('error');
	});
	
	//사업자등록번호 확인
	$(welfareMall.vWrapId).on("click", "#searchBizRegNo", function(){
		$(".inpWithbtn").removeClass("error");
		var bizRegNo = $("#inpCom").val();
		
		if(bizRegNo == undefined || bizRegNo == ""){
			$("div[name=bizNoErr] p").text("사업자등록번호를 입력해 주세요.");
			$(".inpWithbtn").addClass("error");
			return;
		}
		welfareMall.fnBizNoCheck(bizRegNo);
	});
	
	//우편번호 찾기
	$(welfareMall.vWrapId).on("click", "#searchPost", function(){
		welfareMall.fnPostPopup()
	});
	
	$(welfareMall.vWrapId).on("click", "input[name=homepageUrl]", function(){
		
		if(!$(this)[0].checked && !$(this)[1].checked){
			$(".homepageUrlArea").show();
			$(".homepageUrlArea .error-msg").html("<p>홈페이지 주소 여부를 선택해 주세요.</p>");
		}else if($(this).val() == 'Y'){
			$(".homepageUrlArea").show();
			$(".homepageUrlArea .error-msg").html("<p>URL을 입력해 주세요.</p>");
		}else if($(this).val() == 'N'){
			$(".homepageUrlArea").hide();
		}
		
	});
	
    //----------------------------------------------------------	
	//-- 기본값 지정 - 시작
    //----------------------------------------------------------	
//	if($("input[name=bizRegNo]").val() !== ""){
//		$("div[name=bizNoErr] p").text("사업자등록번호를 확인해 주세요.");
//	}
	
	if($("input[name=ofclRspnsCd]").val() !== ""){
		var ofclRspnsCd = $("input[name=ofclRspnsCd]").val();
		for(var i = 0; i < $("#ul_ofclRspnsCd").children('li').length; i++){
			if($("#spot-"+i).val() == ofclRspnsCd){
				$("#spot-"+i).addClass("focused")
				$("#droplistBtnB01").html($("#spot-"+i).html());
				$("#droplistBtnB01").addClass("selected");
			}
		}
	}
	
	if($("input[name=eplyCntCd]").val() !== ""){
		var eplyCntCd = $("input[name=eplyCntCd]").val();
		for(var j = 0; j < $("#ul_eplyCntCd").children('li').length; j++){
			if($("#empl-"+j).val() == eplyCntCd){
				$("#empl-"+j).addClass("focused");
				$("#droplistBtnB03").html($("#empl-"+j).html());
				$("#droplistBtnB03").addClass("selected");
			}
		}
	}
    //----------------------------------------------------------	
	//-- 기본값 지정 - 끝
    //----------------------------------------------------------	
	
}
$(document).ready(readyLoadwelfareMallView);

