var special_pattern=/[~!@#$%^&*\()\-=+_';<>\/.`:"\\,\[\]?|{}]/gi;var email_pattern=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi;function name(data){var name=$("input[name="+data+"]");return name}
var applyPartner={vWrapId:"#bizuniFormWrap",vBizNoCheck:false,validateFocus:null,fnSuccessApply:function(){location.href=$(applyPartner.vWrapId).data("ctpath")+"/partner/partnerSummary/"},setError:function name(id,isTerm){if(applyPartner.validateFocus==null)applyPartner.validateFocus=id;if(isTerm)$("#"+id).addClass("error");else $("#"+id).parents(".inp-box").addClass("error")},validateNull:function(data){var nameData=name(data);var checkData=nameData.val();if(checkData==undefined||checkData==="")applyPartner.setError(nameData.attr("id"))},
validateCaptchaNull:function(data){var nameData=name(data);var checkData=nameData.val();var captchaId=nameData.attr("id");$("#"+captchaId).next().hide();if(checkData==undefined||checkData===""){$("#"+captchaId).next().html("<p>보안코드를 입력해 주세요.</p>");$("#"+captchaId).next().show();if(applyPartner.validateFocus==null)applyPartner.validateFocus=captchaId}},validateMobileNull:function(data){var nameData=name(data);var checkData=nameData.val();var mobileId=nameData.attr("id");$("#"+mobileId).next().hide();
$("#"+mobileId).next().next().hide();if(checkData==undefined||checkData===""){if(applyPartner.validateFocus==null)applyPartner.validateFocus=mobileId;$("#"+mobileId).next().show()}else applyPartner.validateMobileNumberPattern(mobileId)},validateTextarea:function(data){var checkData=$("textarea[name="+data+"]").val();if(checkData==undefined||checkData==="")applyPartner.setError($("textarea[name="+data+"]").attr("id"))},validateSelect:function(data){var nameData=name(data);var checkData=$(".bt_"+data+
"").siblings("ul").children("li.focused").val();if(checkData==undefined||checkData==="")applyPartner.setError($(".bt_"+data+"").attr("id"));else nameData.val(checkData)},validateCheckbox:function(data){var nameData=name(data);var checkData=$("input[name="+data+"]:checked");if(checkData.length==0)applyPartner.setError(nameData.attr("id"))},validateEmailPattern:function(){var emailData=$("input[name=email]").val();if(emailData.length>=1)if(!emailData.match(email_pattern))applyPartner.setError($("input[name=email]").attr("id"))},
validateMobileNumberPattern:function(mobileId){var mobileData=$("#"+mobileId).val();var regExp=/(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;if(!regExp.test(mobileData)){if(applyPartner.validateFocus==null)applyPartner.validateFocus=mobileId;$("#"+mobileId).next().next().show()}},fnBizNoCheckCallBack:function(data){if(data==undefined){var alertData={title:"",content:"사업자등록번호를<br/>확인해 주세요.",callback:"",btnText:"확인"};commonAlert(alertData);openLayer("commonAlert");bizNoReset()}else if(data.enpScd!=
"01"){$("div[name=bizNoErr] p").text(data.enpScdMsg);$(".inpWithbtn").addClass("error");bizNoReset()}else{applyPartner.vBizNoCheck=true;$(".address-detail,.address-detail-line ").show();$("input[name=bizRegNo]").val(data.bizRegNo);$("input[name=corpNm]").val(data.corpNm);$("input[name=ceoNm]").val(data.ceoNm);$("input[name=postNoNew]").val(data.bizPostNoNew);$("#roadnmAddr").text(data.bizRoadAddr);$("input[name=roadnmAddr]").val(data.bizRoadAddr);$("input[name=roadnmDtlAddr]").val(data.bizRoadDtlAddr)}},
fnBizNoCheck:function(bizRegNo){searchCompany.callback=function(result){applyPartner.fnBizNoCheckCallBack(result)};searchCompany.apiUrl=$(applyPartner.vWrapId).data("ctpath")+"xhr/common/companyInfo";searchCompany.searchApi(bizRegNo)},fnPostPopup:function(){var options={oncomplete:function(data){$("input[name=postNoNew]").val(data.zonecode);$("input[name=roadnmAddr]").val(data.roadAddress);$("input[name=prclAddr]").val(data.address);var adressHtml="<p>[도로명]</p><p>"+data.roadAddress+"</p>";$(".mid-addr").html(adressHtml);
$(".address-detail").show();$(".address-detail-line").show()},width:"100%",height:"100%",maxSuggestItems:5};layerPost.embed(options)}};function bizNoReset(){$("input[name=corpNm]").val("");$("input[name=bizRegNo]").val("");$("input[name=ceoNm]").val("");$(".address-detail,.address-detail-line ").hide();$("input[name=postNoNew]").val("");$("#roadnmAddr").text("");$("input[name=roadnmAddr]").val("");$("input[name=roadnmDtlAddr]").val("")}
function fnSetNaverCaptchaView(){var options={url:$(applyPartner.vWrapId).data("ctpath")+"common/naverCaptchaView/",data:{},dataType:"html",done:function(html){$("#captchaTarget").html(html)}};ajax.call(options)}
function fnCheckSecureCode(){var options={done:function(data){if(data.result=="S"){$("input[name=rcvYns]").each(function(){if($(this).parents(".terms-wrap").find("input:checkbox").is(":checked"))$(this).val("Y");else $(this).val("N")});var formData=$("#applyPartnerForm").serializeJson();var options={url:$(applyPartner.vWrapId).data("ctpath")+"xhr/partner/insertApplyPartner/",data:formData,done:function(data){var alertData={title:"",content:"비즈니스 파트너 신청이 완료되었습니다.",callback:applyPartner.fnSuccessApply,
btnText:"확인"};commonAlert(alertData);openLayer("commonAlert")}};ajax.call(options)}else{var captchaId=$("input[name=captchaValue]").attr("id");applyPartner.validateFocus=captchaId;$("#"+captchaId).next().html("<p>보안문자 코드가 바르지 않습니다.</p>");$("#"+captchaId).focus();$("#"+captchaId).next().show()}}};captCha.cert(options)}
function insertApplyPartner(){applyPartner.validateFocus=null;if(!applyPartner.vBizNoCheck)applyPartner.setError($("input[name=bizRegNo]").attr("id"));applyPartner.validateNull("bizRegNo");applyPartner.validateNull("corpNm");applyPartner.validateNull("ceoNm");applyPartner.validateNull("postNoNew");applyPartner.validateNull("roadnmDtlAddr");applyPartner.validateNull("eqrrNm");applyPartner.validateMobileNull("mobile");applyPartner.validateNull("email");applyPartner.validateEmailPattern();applyPartner.validateSelect("ofclRspnsCd");
applyPartner.validateSelect("eplyCntCd");if(!$("input[name=homepageUrl]")[0].checked&&!$("input[name=homepageUrl]")[1].checked||$("input[name=homepageUrl]:checked").val()=="Y")applyPartner.validateNull("homePageUrl");applyPartner.validateCheckbox("arrSctrTp");applyPartner.validateCheckbox("arrPrdslIntrs");applyPartner.validateNull("iqrTtl");applyPartner.validateSelect("aplPrtnrTpCd");applyPartner.validateTextarea("iqrContent");applyPartner.validateCaptchaNull("captchaValue");applyPartner.validateCheckbox("agree");
if(applyPartner.validateFocus!=null)$("#"+applyPartner.validateFocus).focus();else fnCheckSecureCode()}
function readyLoadApplyPartnerView(){fnSetNaverCaptchaView();captCha.create($(applyPartner.vWrapId).data("ctpath"));$("#btnCancelBack").on("click",function(){if(document.referrer)history.back()});$(".inp-line").on("keydown",function(event){if(event.keyCode=="13")return false;return true});$("input:text[numberOnly]").on("keyup",function(){$(this).val($(this).val().replace(/[^0-9]/g,""))});$(".special_pattern").on("focusout",function(){var x=$(this).val();if(x.length>0){if(x.match(special_pattern))x=
x.replace(special_pattern,"");$(this).val(x)}}).on("keyup",function(){$(this).val($(this).val().replace(special_pattern,""))});$(".special_pattern").bind("input paste",function(){$(this).trigger("keyup")});function checkMaxLength(object){var inputData=$(object).val();var currentLength=$(object).val().length;var maxLength=$(object).attr("maxLength");if(typeof maxLength=="undefined"||maxLength==null||maxLength==""||Number(maxLength)<1)return;if(currentLength>maxLength)$(object).val(inputData.slice(0,
maxLength))}function fnOnLimitInputVal(selector,macLen){var adrsNm=$(selector).val();var totalByte=0;var len=0;for(var i=0;i<adrsNm.length;i++){var oneChar=escape(adrsNm.charAt(i));if(oneChar.length==1)totalByte++;else if(oneChar.indexOf("%u")!=-1)totalByte+=2;else if(oneChar.indexOf("%")!=-1)totalByte++;if(totalByte<=macLen)len=i+1}$(selector).val(adrsNm.substring(0,len))}$("input[type=text]").bind("keyup paste input change propertychange",function(){var id=$(this).attr("id");switch(id){case "inpName":fnOnLimitInputVal(this,
50);break;default:checkMaxLength(this)}});$(document).on("keyup input","#inqu-cont",function(e){var content=document.getElementById("inqu-cont");var bytes=document.getElementById("byte");var cnt=0;for(var i=0;i<content.value.length;i++)cnt+=1;bytes.innerHTML=cnt;if(cnt>2E3){$("#inqu-box").val($("#inqu-box").val().substring(0,2E3));bytes.innerHTML=2E3}$(this).parents(".inp-box").removeClass("error")});$(applyPartner.vWrapId).on("keyup","input[type=text]",function(){var id=$(this).attr("id");$("#"+
id).parents(".inp-box").removeClass("error")});$(applyPartner.vWrapId).on("click","li",function(){var id=$(this).parent("ul").attr("id");$("#"+id).parents(".inp-box").removeClass("error")});$(applyPartner.vWrapId).on("click","input[type=checkbox], input[type=radio]",function(){var id=$(this).attr("id");$("#"+id).parents(".inp-box").removeClass("error")});$(applyPartner.vWrapId).on("click","#searchBizRegNo",function(){$(".inpWithbtn").removeClass("error");var bizRegNo=$("#inpCom").val();if(bizRegNo==
undefined||bizRegNo==""){$("div[name=bizNoErr] p").text("사업자등록번호를 입력해 주세요.");$(".inpWithbtn").addClass("error");return}applyPartner.fnBizNoCheck(bizRegNo)});$(applyPartner.vWrapId).on("click","#searchPost",function(){applyPartner.fnPostPopup()});$(applyPartner.vWrapId).on("click","input[name=homepageUrl]",function(){if(!$(this)[0].checked&&!$(this)[1].checked){$(".homepageUrlArea").show();$(".homepageUrlArea .error-msg").html("<p>홈페이지 주소 여부를 선택해 주세요.</p>")}else if($(this).val()=="Y"){$(".homepageUrlArea").show();
$(".homepageUrlArea .error-msg").html("<p>URL을 입력해 주세요.</p>")}else if($(this).val()=="N")$(".homepageUrlArea").hide()});if($("input[name=ofclRspnsCd]").val()!==""){var ofclRspnsCd=$("input[name=ofclRspnsCd]").val();for(var i=0;i<$("#ul_ofclRspnsCd").children("li").length;i++)if($("#spot-"+i).val()==ofclRspnsCd){$("#spot-"+i).addClass("focused");$("#droplistBtnB01").html($("#spot-"+i).html());$("#droplistBtnB01").addClass("selected")}}if($("input[name=eplyCntCd]").val()!==""){var eplyCntCd=$("input[name=eplyCntCd]").val();
for(var j=0;j<$("#ul_eplyCntCd").children("li").length;j++)if($("#empl-"+j).val()==eplyCntCd){$("#empl-"+j).addClass("focused");$("#droplistBtnB03").html($("#empl-"+j).html());$("#droplistBtnB03").addClass("selected")}}}$(document).ready(readyLoadApplyPartnerView);
