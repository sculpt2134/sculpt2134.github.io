/**
 - Class Name 	: _script/membership/membershipCommon.js
 - Description 	: 멤버십 공통 script
 - Since        : 2020.07.14
 - Author       : sjlee
*/
$(function(){

	// 마일리지 증빙 서류 파일 처리
	$('.wrap-file').find("input[type='file']").change(function(e){
		var filename = e.target.files[0].name;
		$(this).parent().find(".path").text(filename);
	});

	$(window).resize(function() {
		if($(window).innerWidth() > 801) {
			$(".customScrollbar").mCustomScrollbar({
				theme:"minimal-dark"
			});
		} else {
			$(".customScrollbar").mCustomScrollbar('destroy');
		}
	}).resize();

	// s: 200723 탭관련 스크립트 수정
	var slideTabMyMemb = undefined;
	function initMyTabSwiper() {
		var winw = $(window).width();
		if(winw < 801 && slideTabMyMemb == undefined) {            
			slideTabMyMemb = new Swiper('.box-tab-point-content', {
				slidesPerView: 2.8,
				centeredSlides: true,
				centeredSlidesBounds: true,
				slideToClickedSlide: true,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
			});
		} else if (winw > 800 && slideTabMyMemb != undefined) {
			slideTabMyMemb.destroy();
			slideTabMyMemb = undefined;
			$('.box-tab-point-content').find(".tab-point-content").removeAttr('style');
			$('.box-tab-point-content').find(".tab-point-content .tab").removeAttr('style');            
		}        
	}
	initMyTabSwiper();

	$(window).on('resize', function(){
		initMyTabSwiper();        
	});
	// e: 200723 탭관련 스크립트 수정

	// 마일리지 삼성카드 결제 금액
	var $mileageGraph = $(".mymemb-tab-mileage .graph-payment");
	var $userGraph = $mileageGraph.find(".graph");
	var userPoint = $userGraph.find(".user-point em").text().replace(/\D/g, "");
	var pointRate;
	
	if(userPoint > 499 && userPoint <= 1000){
		pointRate = Math.floor((userPoint-500)/500*100/4);
		$userGraph.find(".part").eq(0).addClass("active");
		if(userPoint ==  1000) $userGraph.find(".part").eq(1).addClass("active");
	} else if(userPoint > 1000 && userPoint <= 2000){
		pointRate = Math.floor((1/4+(userPoint-1000)/1000/4)*100);
		$userGraph.find(".part:eq(0), .part:eq(1)").addClass("active");
		if(userPoint ==  2000) $userGraph.find(".part").eq(2).addClass("active");
	} else if(userPoint > 2000 && userPoint <= 4000){
		pointRate = Math.floor((1/2+(userPoint-2000)/2000/4)*100);
		$userGraph.find(".part:eq(0), .part:eq(1), .part:eq(2)").addClass("active");
		if(userPoint ==  4000) $userGraph.find(".part").eq(3).addClass("active");
	} else if(userPoint > 4000 && userPoint <= 5000){
		pointRate = Math.floor((3/4+(userPoint-4000)/1000/4)*100);
		$userGraph.find(".part").each(function(){
			$(this).addClass("active");
		});
	} else if(userPoint > 5000){
		pointRate = 100;
		$userGraph.find(".part").each(function(){
			$(this).addClass("active");
		});
		$mileageGraph.find(".user-point").hide();
	} else {
		$mileageGraph.find(".user-point").hide();
	}
	$(window).resize(function(){
		var winw = $(window).width();
		if(winw > 800) {
			$mileageGraph.find(".user-point").css({
				"top": "-5px",
				"left": pointRate+"%"
			});
			$mileageGraph.find(".user-point-line").css({
				"height": "2px",
				"width": pointRate+"%"
			});
		} else {
			$mileageGraph.find(".user-point").css({
				"left" : "auto",
				"top": pointRate+"%"
			});
			$mileageGraph.find(".user-point-line").css({
				"width": "2px",
				"height": pointRate+"%"
			});

		}
	}).resize();

});

var LAYERZINDEX;
var layerEventManager = {
	getTarget: function(t) {
		if($(t).attr("data-popup-target")){
			// 클릭한 엘리먼트가 button일 경우
			return $(t).attr("data-popup-target");
		} else {
			// 클릭한 엘리먼트가 a일 경우
			return $(t).closest("a").attr("data-popup-target");
		}
	},
	open: function(t){
		var showTarget = $("[data-popup-layer="+t+"]");
		if($(".layer-pop").is(":visible")) {
			LAYERZINDEX++; // 200729 팝업 두 개 이상 띄울 경우 z-index ++
		} else {
			LAYERZINDEX = 300; // 200729 팝업 두 개 이상 띄울 경우 z-index ++
		}
		showTarget.show().css("z-index", LAYERZINDEX).attr("aria-hidden", false).attr("data-zindex", LAYERZINDEX).focus(); // 200729 z-index 값 data attr에 저장
		showTarget.find(".pop-close").data("activeTarget", t);

		if(!showTarget.hasClass("embed")){ // 200724
			$("body *") // 200722 레이어 팝업를 제외한 영역은 hidden처리(스크린 리더기)
				.not($("#"+t))
				.not($("#"+t).parents())
				.not($("#"+t).find("*"))
				.not($("[data-popup-target="+t+"]").parents())
				.not($("[data-popup-target="+t+"]")).attr("aria-hidden", true);
		}

		// 딤드팝업 마스크 생성 및 활성화  // 200729
		if(!showTarget.hasClass("nomask")){
			var zidx = parseInt($("#"+t).attr("data-zindex")) - 1;
			$("body").append("<div id='mask' data-mask-target='"+t+"' style='z-index:"+zidx+"'></div>");

			$("#mask").fadeIn().data("activeTarget", t);
			$("body").css("overflow","hidden");
		};

		// 모아보기 slick reset 용
		if (showTarget.is("#gatherview, #layerSlick, #popupProdCode")){
			$('.mediaslide, .modelslide, .filter-slick, .visualslide').slick('setPosition');
			$('.mediaslide-navi, .modelslide-navi, .visualslide-navi').slick('setPosition');
		}
	},
	close: function(t){
		var activeTarget = $("[data-popup-layer="+t+"]");
		activeTarget.removeAttr("style").removeAttr("data-zindex").attr("aria-hidden", true).hide();  // 200729
		if(!$(".layer-pop").is(":visible")) $("body").css("overflow",""); // 200729 팝업 모두 닫힌 후에 overflow hidden 해제
		$("#mask[data-mask-target='"+t+"']").fadeOut("fast").remove();  // 200729
		$("[data-popup-target="+t+"]").focus();
		if(!activeTarget.hasClass("embed")){ // 200724
			$("body *") // 200722 
				.not($("#"+t))
				.not($("#"+t).parents())
				.not($("#"+t).find("*"))
				.not($("[data-popup-target="+t+"]").parents())
				.not($("[data-popup-target="+t+"]")).removeAttr("aria-hidden");
		}
		LAYERZINDEX--;  // 200729 레이어팝업 z-index값 초기화
	}
}

var cerfityManager = {
	init: function(callback) {
		var that = cerfityManager;
		
		that.callback = callback;
	}
}
