function openLayer(t, callback) {
    var showTarget = $("[data-popup-layer=" + t + "]");

	if ($(".layer-pop").is(":visible")) {
		LAYERZINDEX++; // 200729 팝업 두 개 이상 띄울 경우 z-index ++
	} else {
		LAYERZINDEX = 300; // 200729 팝업 두 개 이상 띄울 경우 z-index ++
	}
	showTarget.removeAttr("style").addClass('active').css("z-index", LAYERZINDEX).attr("aria-hidden", false).attr("data-zindex", LAYERZINDEX).focus(); // 200729 z-index 값 data attr에 저장
    showTarget.find(".pop-close").data("activeTarget", t);

	// layerOpt(showTarget,'open');
	// 2021-11-03 KDP-7422 팝업위치 오류 수정
    // 230413 KDP-28261 팝업수정
	// if (device.isApp == true && device.val === 'm' && showTarget.hasClass('layer-normal')) {
	// 	showTarget.css('top', device.appHgt + 'px');
	// }

	// 딤드팝업 마스크 생성 및 활성화  // 200729
    if (!showTarget.hasClass("nomask")) {
		var zidx = parseInt($("#" + t).attr("data-zindex")) - 1;
        $("body").append("<div id='mask' data-mask-target='" + t + "' style='z-index:" + zidx + "'></div>");
        $("#mask").fadeIn().data("activeTarget", t);
		scrollLock('lock');
		//$("body").css("overflow","hidden");
	};

	// 모아보기 slick reset 용
    if (showTarget.is("#gatherview, #layerSlick, #popupProdCode")) {
		$('.mediaslide, .modelslide, .filter-slick, .visualslide').slick('setPosition');
		$('.mediaslide-navi, .modelslide-navi, .visualslide-navi').slick('setPosition');
	}

	//	/* 쿠폰 등록 팝업 예외처리 : transform 삭제에 따른 위치(마진) 값 세팅 */
	//	if (t === 'popupCoupon') {
	//		var $obj = $('#' + t ),
	//			$objWidth = $obj.outerWidth(),
	//			$objHeight = $obj.outerHeight();
	//		$obj.css({ 'margin-left': Math.round(-($objWidth / 2)) + 'px', 'margin-top': Math.round(-($objHeight / 2)) + 'px', 'transform' : 'none' });
	//	}

	showTarget.focus();
	
	if (typeof accessibility !== 'undefined'
		&&  typeof accessibility.bind === 'function') {
		accessibility.bind();
    }
	$("#commonAlert a").focus();
}

function closeLayer(t, callback) {
    var activeTarget = $("[data-popup-layer=" + t + "]");

	if (!activeTarget.hasClass("active")) {
		return;
	}

	activeTarget.removeAttr("style").removeClass("active").removeAttr("data-zindex").attr("aria-hidden", true);  // 200729
	// layerOpt(activeTarget,'close');
	scrollLock('unlock');
	//if(!$(".layer-pop").not("#latestItemLayer").is(":visible")) $("body").css("overflow",""); // 200729 팝업 모두 닫힌 후에 overflow hidden 해제  //20200813 최근본 상품 레이어 제외.
	$("#mask[data-mask-target='" + t + "']").fadeOut("fast").remove();  // 200729
    $("[data-popup-target=" + t + "]").focus();

	LAYERZINDEX--;  // 200729 레이어팝업 z-index값 초기화

    $("#commonAlert h2").text("");
    $("#commonAlert p").html("");
    $("#commonAlert a").text("확인");
	$("#commonAlert a").attr("onclick", "closeLayer('commonAlert'," + undefined + ");");

	if (callback != undefined) {
		callback();
	}
	$("#commonAlert a").data("focus-id", "");
}

/**
   data: Json, title, content
	  var alertData = {
		  title: "공통 얼럿 팝업 테스트"
		,content : "테스트입니다.!!!"
		,callback : searchNoticeList
		,btnText : "확인"
	};
	commonAlert(alertData);
	openLayer('commonAlert');
*/
function commonAlert(data) {
    $("#commonAlert h2").text(data.title);
    $("#commonAlert p").html(data.content);
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

/**
	commonAlert2(alertData);
	openLayer('commonAlert2');
*/
function commonAlert2(data) {
	$("#commonAlert2 h2").text(data.title);
	$("#commonAlert2 p").html(data.content);
	$("#commonAlert2 a").text(data.btnText);
	if (data.focusId) {
		$("#commonAlert2 a").data("focus-id", data.focusId);
	}
	if (data.callback === '') {
		data.callback = undefined;
	}
	$("#commonAlert2 a").attr("onclick", "closeLayer('commonAlert2'," + data.callback + ");");
	$("#commonAlert2 a").attr("data-focus-next", "commonAlert2");

}

/**
data: Json, title, content
	var confirmData = {
		title: "공통 얼럿 팝업 테스트"
	  ,content : "확인하시겠습니까?"
	  ,callback : searchNoticeList
	  ,okBtnText : "확인"
	  ,cancelBtnText : "취소"
	  // 20210530 추가
	  ,closeCallback : function(){ 취소 이벤트 }
 };
 commonConfirm(confirmData);
 openLayer('commonConfirm');
*/
function commonConfirm(data) {
    $("#commonConfirm h2").text(data.title);
    $("#commonConfirm p").html(data.content);
    $("#commonConfirm #commonConfirmOkBtn").text(data.okBtnText);
    $("#commonConfirm #commonConfirmCancelBtn").text(data.cancelBtnText);

	if (data.dataPopupName) {
		$("#commonConfirm").attr("data-popup-name", data.dataPopupName);
	} else {
		$("#commonConfirm").attr("data-popup-name", "");
	}

    $("#commonConfirm #commonConfirmOkBtn").attr("onclick", "closeLayer('commonConfirm'," + data.callback + ");");

	if (data.closeCallback != undefined) {
        $("#commonConfirm #commonConfirmCancelBtn").attr("onclick", "closeLayer('commonConfirm'," + data.closeCallback + ");");
		$("#commonConfirm #closeCommonConfirmBtn").attr("onclick", "closeLayer('commonConfirm'," + data.closeCallback + ");");
	}
}
/**
 commonConfirm2(confirmData);
 openLayer('commonConfirm2');
*/
function commonConfirm2(data) {
	$("#commonConfirm2 h2").text(data.title);
	$("#commonConfirm2 p").html(data.content);
	$("#commonConfirm2 #commonConfirmOkBtn2").text(data.okBtnText);
	$("#commonConfirm2 #commonConfirmCancelBtn2").text(data.cancelBtnText);

	if (data.dataPopupName) {
		$("#commonConfirm2").attr("data-popup-name", data.dataPopupName);
	} else {
		$("#commonConfirm2").attr("data-popup-name", "");
	}

	$("#commonConfirm2 #commonConfirmOkBtn2").attr("onclick", "closeLayer('commonConfirm2'," + data.callback + ");");

	if (data.closeCallback != undefined) {
		$("#commonConfirm2 #commonConfirmCancelBtn2").attr("onclick", "closeLayer('commonConfirm2'," + data.closeCallback + ");");
    }
}
$(function() {});