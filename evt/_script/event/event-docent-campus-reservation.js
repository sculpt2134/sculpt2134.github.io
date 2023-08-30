////////////////////////////////////////////////////////////////////////////////////
///////////////////// event-reservation.js ////////////////////////////////////////
///////////////////// 파일변경 시  indexLayout.jsp 내 event.js 호출 스크립트 버전 추가 (캐시 방지)

var applyTxt = "";
var $docentCal = $("input.inp-calendar[data-fldtpcd='130']");
var closedDay = "";

$(function(){
	fnAvailableTimeCd ();
    // 시/도 목록
    fnSiDoListSet();

    //방문일 삭제
    $(".hope-visit-date").remove();
    //주차공간 삭제
    $(".dl-parking").remove();

    // 매장, 방문날짜 선택 메시지
    $(".storeRsltMsg").hide();

    if ($("p.txt2").length < 2) {
	    $("p.txt2").text($("p.txt2").text().replace("매장상담예약", ""));
	    $("p.txt2").after("<p class='txt2'>※ 예약 변경/취소 희망 시, 갤럭시 스튜디오 운영 사무국 02-3288-2028 으로 유선 연결 하여 진행 부탁드립니다. 감사합니다.</p>")
    }

    $(".selectedResultMsg2").text("갤럭시 스튜디오 도슨트 투어 신청 합니다.");

    //캠퍼스베뉴일때 안내문구 추가
//	if ($(".store-alert").length == 0) {
//		$(".store-name").after("<p class='store-alert'>※ 운영기간:  2022년 2월25일(금) ~2022년 3월 16일(수)</p></br>");
//	}

});

////////////////////////////////////////////////////////////////////////////////////
///////////////////// EVENT LISTENER ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


	/* 시/도 선택 */
	$(document).on("click","#dropSiDo li",function(){

	    var siDoCd = $(this).val();
	    $("#dropSiGunGu").empty();
	    $(".store-select-list").empty();

	    // 시/군/구 세팅
	    var siGunGuHtml="";
	    siGunGuHtml += "<li id=\"dropSiGunGu-0\" role=\"option\" class=\"droplist-item\" value=\"0\">전체</li>";

	    $.each(siGunGuList, function(idx, val){

	        if(val.usrDfn1Val == siDoCd){
	            var index = idx +1;
	            siGunGuHtml += "<li id=\"dropSiGunGu-"+index+"\" role=\"option\" class=\"droplist-item\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
	        }
	    });
	    $("#dropSiGunGu").append(siGunGuHtml);

	    // 매장 셋팅
	    var plazaHtml = "";
	    var selSidoPlazaIndex = 1;
	    $.each(plazas, function(idx, val){
	        var compareData = val.cityCd;
	        if(siDoCd == 0){
	            compareData = 0;
	        }

	        if(siDoCd == compareData){
	            plazaHtml += '<li>';
	            plazaHtml += '    <input id="radio-store'+selSidoPlazaIndex+'" type="radio" name="radio-store" required="" title="" value="'+val.plazaNo+'" data-shop-no="'+val.shopNo+'" data-path-tp-cd="'+val.pathTpCd+'">';
	            plazaHtml += '    <label for="radio-store'+selSidoPlazaIndex+'">'+val.plazaNm+'</label>';
	            plazaHtml += '</li>';

	            // 목록의 첫번째 매장으로 카카오맵 셋팅
	    		if(selSidoPlazaIndex == 1){
	    			//캠퍼스베뉴일때 안내문구 추가
	    			if (val.plazaNo != "162" && $(".store-alert").length == 0) {
	    				$(".store-name").after("<p class='store-alert'>" + getOperationDuration(val) +"</p>");
	    			} else {
	    				$(".store-alert").html(getOperationDuration(val));
	    			}

	    			plazaNm = val.plazaNm;
	    			var addr = val.roadAddr + " " + (val.roadDtlAddr == null ? "" : val.roadDtlAddr);
	    		    $("#storeAddr").text(addr);
	    		    $("#storeTel").text(val.tel);

	    		    var openTime = fnOpenTime(val);
	    		    $("#storeOpenTime").text(openTime);

	    		    var parking = val.parkingInfo == "" ? "-" : val.parkingInfo;
	    		    $("#storeParkingInfo").text(parking);

	    			fnSetPlazaInfo(val); // 매장상세정보 표시
	    			displayPlaces(val.lttd , val.litd); // kakao map
	    		}

	            selSidoPlazaIndex++;
	        }
	    });
	    $(".store-select-list").append(plazaHtml);
	    $("#dropAreaBtn2").text("전체");
	    $("#radio-store1").attr("checked", "checked");

		fnGetPlazaDcntHolidays();

	});

	/* 시/군/구 선택 */
	$(document).on("click", "#dropSiGunGu li", function(){

		// 시/도 선택값
		var selectedSiDo = $("#dropSiDo").find("li.focused").attr("value");
		var siGunGuCd = $(this).val();

		if(selectedSiDo == 0 && siGunGuCd == 0){
	    	return; // 시도 전체 시군구 전체 일때는 하위 로직 태우지 않음.
	    }

	    $(".store-select-list").empty();


	    // 매장 셋팅
	    var plazaHtml = "";
	    var selSiGunGuPlazaIndex =1;
	    $.each(plazas, function(idx, val){
	        /*
	            target은 시/군/구를 전체로 선택했을 때 현재 선택되어져있는 시/도의 값에 따라 매장이 보여지는게 다르기 때문에
	            target을 사용하여 시/도 혹은 시/군/구 값으로 셋팅하여 비교하고 시/도의 값의 따라 매장 목록을 재구성한다.
	         */
	        var target = siGunGuCd;
	        var compareData = val.dtrtCd;

	        if(siGunGuCd == 0){ // 시/군/구를 전체로 선택할 경우
	            compareData = 0; // 비교대상도 모두 0으로 셋팅하여 전체가 나오도록 설정
	            if(selectedSiDo != undefined){ // 선택된 시/도가 있을 경우
	                target = selectedSiDo; // 시/도의 값을 target에 담는다.
	                compareData = val.cityCd; // 비교대상으로 각 매장의 시/도 값을 담아 비교한다.
	            }
	        }

	        if(target == compareData){
	            plazaHtml += '<li>';
	            plazaHtml += '    <input id="radio-store'+selSiGunGuPlazaIndex+'" type="radio" name="radio-store" required="" title="" value="'+val.plazaNo+'" data-shop-no="'+val.shopNo+'" data-path-tp-cd="'+val.pathTpCd+'">';
	            plazaHtml += '    <label for="radio-store'+selSiGunGuPlazaIndex+'">'+val.plazaNm+'</label>';
	            plazaHtml += '</li>';

	            // 목록의 첫번째 매장으로 카카오맵 셋팅
	    		if(selSiGunGuPlazaIndex == 1){
	    			//캠퍼스베뉴일때 안내문구 추가
	    			if (val.plazaNo != "162" && $(".store-alert").length == 0) {
	    				$(".store-name").after("<p class='store-alert'>" + getOperationDuration(val) +"</p>");
	    			} else {
	    				$(".store-alert").html(getOperationDuration(val));
	    			}

	    			plazaNm = val.plazaNm;

	    			var addr = val.roadAddr + " " + (val.roadDtlAddr == null ? "" : val.roadDtlAddr);
	    		    $("#storeAddr").text(addr);
	    		    $("#storeTel").text(val.tel);

	    		    var openTime = fnOpenTime(val);
	    		    $("#storeOpenTime").text(openTime);

	    		    var parking = val.parkingInfo == "" ? "-" : val.parkingInfo;
	    		    $("#storeParkingInfo").text(parking);
	    			fnSetPlazaInfo(val); // 매장상세정보 표시
	    			displayPlaces(val.lttd , val.litd); // kakao map
	    		}

	            selSiGunGuPlazaIndex++;
	        }
	    });
	    $(".store-select-list").append(plazaHtml);
	    $("#radio-store1").attr("checked", "checked");

		fnGetPlazaDcntHolidays();

	})

	/*
	 * 매장선택
	 * 1. 매장 상세정보 표시
	 * 2. 카카오맵 표시
	 * 3. 매장 선택에 대한 신청버튼 상단 메시지 설정
	 * 4. 방문가능 날짜 셋팅
	 */
	$(document).on('click', 'input[name=radio-store]', function(){
		fnAvailableTimeCd();

		var seletedVal = $(this).val();
		var id = $(this).attr("id");

		//$("input:radio[name=radio-store]").removeAttr("checked"); // 전체 체크해제
		//$("#"+id).attr("checked","checked"); // 해당 ID 체크

	    var selectPlaza = plazas.filter(function(val) {
	        return seletedVal == val.plazaNo;
	    });

	    var val = selectPlaza[0];

	    //캠퍼스베뉴일때 안내문구 추가
		if (seletedVal != "162" && $(".store-alert").length == 0) {
			$(".store-name").after("<p class='store-alert'>" + getOperationDuration(val) +"</p>");
		} else {
			$(".store-alert").html(getOperationDuration(val));
		}

	    plazaNm = val.plazaNm;
	    var addr = val.roadAddr + " " + (val.roadDtlAddr == null ? "" : val.roadDtlAddr);
	    $("#storeAddr").text(addr);
	    $("#storeTel").text(val.tel);

	    var openTime = fnOpenTime(val);
	    $("#storeOpenTime").text(openTime);

	    var parking = val.parkingInfo == "" ? "-" : val.parkingInfo;
	    $("#storeParkingInfo").text(parking);
	    fnSetPlazaInfo(selectPlaza[0]); // 매장상세정보 표시
	    displayPlaces(selectPlaza[0].lttd , selectPlaza[0].litd); // kakao map

		fnGetPlazaDcntHolidays();

	 // 날짜선택이 지도영역에 추가로 그려지기 때문에 해당 펑션을 호출해줌
	    calendar_picker();

	    $("ul[data-fldtpcd='50']").parent("div").children("button").text("선택해 주세요.");
		$("ul[data-fldtpcd='50']").parent("div").children("button").removeClass("selected");

		$("ul[data-fldtpcd='50']").children("li").each(function(){
			if($(this).hasClass("focused")) {
				$(this).removeClass("focused");
			}
		});

//	    fnSeletedMsg(); // 신청버튼 상단 메시지

	});

	// 방문날짜
	$docentCal.change(function(){
		fnGetPlazaDcntHolidays($docentCal.val());

		$("ul[data-fldtpcd='50']").parent("div").children("button").text("선택해 주세요.");
		$("ul[data-fldtpcd='50']").parent("div").children("button").removeClass("selected");

		$("ul[data-fldtpcd='50']").children("li").each(function(){
			if($(this).hasClass("focused")) {
				$(this).removeClass("focused");
			}
		});
	});

	// 방문시간 선택
	$(document).on("click", $("ul[data-fldtpcd='50']").children("li"), function(){
		fnSeletedMsg(); // 신청버튼 상단 메시지

	});

	// 방문날짜 선택 시 디폴트(오늘날짜) 선택 해제 // css 처리되면 추후 삭제
	$(document).on("click", $docentCal ,function(){
		$("table.ui-datepicker-calendar > tbody > tr > td > a").removeClass("ui-state-highlight");
	});

////////////////////////////////////////////////////////////////////////////////////
///////////////////// EVENT FUNCTION (일반)///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// 시/도 목록 초기 셋팅
function fnSiDoListSet(){

    /* #### 시/도 세팅 ###################################################### */
//	$("#dropAreaBtn").text("서울");
//	$("#dropAreaBtn2").text("강남구");

	$("#dropAreaBtn").text("전체");
	$("#dropAreaBtn2").text("전체");

	$("#dropSiDo").empty();
	var siDoHtml="";
    siDoHtml += '<li id="dropSiDo-0" role="option" class="droplist-item focused\" aria-selected=\"true\" value="0">전체</li>';
    $.each(siDoList, function(idx, val){
        var index = idx +1;

        siDoHtml += "<li id=\"dropSiDo-"+index+"\" role=\"option\" class=\"droplist-item\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
    });
    $("#dropSiDo").append(siDoHtml);

    /* #### 시/군/구 세팅 ###################################################### */
    $("#dropSiGunGu").empty();
    var siGunGuHtml="";
    siGunGuHtml += "<li id=\"dropSiGunGu-0\" role=\"option\" class=\"droplist-item focused\" aria-selected=\"true\" value=\"0\">전체</li>";
    $.each(siGunGuList, function(idx, val){
//    	if(val.usrDfn1Val == siDo10){
            var index = idx +1;

            siGunGuHtml += "<li id=\"dropSiGunGu-"+index+"\" role=\"option\" class=\"droplist-item\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
//        }
    });
    $("#dropSiGunGu").append(siGunGuHtml);

    /* #### 매장 세팅 ###################################################### */
    $(".store-select-list").empty();
    var plazaHtml = "";
    var initPlazaIndex = 1;
    $.each(plazas, function(idx, val){

//    	if(val.dtrtCd == siGunGu123){
    		plazaHtml += '<li>';
    		plazaHtml += '    <input id="radio-store'+initPlazaIndex+'" type="radio" name="radio-store" required="" title="" value="'+val.plazaNo+'" data-shop-no="'+val.shopNo+'" data-path-tp-cd="'+val.pathTpCd+'">';
    		plazaHtml += '    <label for="radio-store'+initPlazaIndex+'">'+val.plazaNm+'</label>';
    		plazaHtml += '</li>';

    		// 목록의 첫번째 매장으로 카카오맵 셋팅
    		if(initPlazaIndex == 1){
    			fnSetPlazaInfo(val); // 매장상세정보 표시
    			displayPlaces(val.lttd , val.litd); // kakao map

    			//캠퍼스베뉴일때 안내문구 추가
    			if (val.plazaNo != "162" && $(".store-alert").length == 0) {
    				$(".store-name").after("<p class='store-alert'>" + getOperationDuration(val) +"</p>");
    			} else {
    				$(".store-alert").html(getOperationDuration(val));
    			}
    		}

    		initPlazaIndex++;
//    	}

    });
    $(".store-select-list").append(plazaHtml);
    $("#radio-store1").attr("checked", "checked");

    // 방문예약 가능한 날짜 셋팅
	fnGetPlazaDcntHolidays();

	setTimeout(function(){
		fnSeletedMsg();
	},1000);

}

//신청버튼 상단 메시지
function fnSeletedMsg(){
	var visitDate = $docentCal.val();
	var selectedMsg = visitDate.substring(0,4)+"년 "+visitDate.substring(5,7)+"월 "+visitDate.substring(8,10)+"일 "+plazaNm + " " + $("ul[data-fldtpcd='50']").children("li.focused").text();
	$(".selectedResultMsg").text(selectedMsg);
	$(".storeRsltMsg").show();;
}

//매장상세정보 표시
function fnSetPlazaInfo(val){
	plazaNm = val.plazaNm; // event.js 쪽에 전역변수로 있으니 수정하지 마세요.
	closedDay = val.closedDay;
    $(".store-name").text(plazaNm);

    var addr = val.roadAddr + " " + (val.roadDtlAddr == null ? "" : val.roadDtlAddr);
    $("#storeAddr").text(addr);
    $("#storeTel").text(val.tel);

    var openTime = fnOpenTime(val);
    $("#storeOpenTime").text(openTime);

    var parking = val.parkingInfo == "" ? "-" : val.parkingInfo;
    $("#storeParkingInfo").text(parking);

    if(val.microSiteFlag == "Y"){
        $(".btn-more-box").show();s
    }else{
        $(".btn-more-box").hide();
    }

    var microSiteShopNo = $("input[name=radio-store]:checked").data("shop-no");
	var microSiteUrl = stPath+"digitalplaza/storeDetail/"+microSiteShopNo;
	$("#microSiteUrl").val(microSiteUrl);

    // 평일 및 주말 오픈, 마감 시간
    $("#weekdayCloseTime").val(val.weekdayCloseTime);
    $("#weekdayOpenTime").val(val.weekdayOpenTime);
    $("#weekendCloseTime").val(val.weekendCloseTime);
    $("#weekendOpenTime").val(val.weekendOpenTime);
    $("#visPlazaTel").val(val.tel);
    $("#visPlazaAddr").val(val.roadAddr + " " + val.roadDtlAddr);

}

function fnOpenTime(val){
	var wdoth = val.weekdayOpenTime.substring(0,2); // 평일 오픈 시간 시
    var wdotm = val.weekdayOpenTime.substring(2,4); // 평일 오픈 시간 분
    var wdcth = val.weekdayCloseTime.substring(0,2); // 평일 클로즈 시간 시
    var wdctm = val.weekdayCloseTime.substring(2,4); // 평일 클로즈 시간 분
//    var weoth = val.weekendOpenTime.substring(0,2); // 주말 오픈 시간 시
//    var weotm = val.weekendOpenTime.substring(2,4); // 주말 오픈 시간 분
//    var wecth = val.weekendCloseTime.substring(0,2); // 주말 클로즈 시간 시
//    var wectm = val.weekendCloseTime.substring(2,4); // 주말 클로즈 시간 분
    var openTime = "평일 "+wdoth+":"+wdotm+" ~ "+wdcth+":"+wdctm+" (평일만 운영)";

    if(wdoth == ""){
    	openTime = "-";
    }

    return openTime;
}

// 마커를 담을 배열입니다
function displayPlaces(xPosition, yPosition) {

    var mapContainer = document.getElementById('map'); // 지도를 표시할 div
    var mapOption = {
        center: new kakao.maps.LatLng(xPosition, yPosition), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    map.relayout();

    // 마커가 표시될 위치입니다
    var markerPosition  = new kakao.maps.LatLng(xPosition, yPosition);
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    //일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
	var mapTypeControl = new kakao.maps.MapTypeControl();
	// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
	// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

	// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    var position =  new kakao.maps.LatLng(xPosition, yPosition);

    // 인포윈도우를 생성하고 지도에 표시합니다
    var infowindow = new kakao.maps.CustomOverlay({
        map: map, // 인포윈도우가 표시될 지도 CustomOverlay
        position: position
    });

    infowindow.setMap(map);

    // 날짜선택이 지도영역에 추가로 그려지기 때문에 해당 펑션을 호출해줌
    calendar_picker();
}


function fnGetPlazaDcntHolidays(visHopeDt){
	fnAvailableTimeCd(); //시간코드 html 초기화

	var dcntPlazaNo = $("input[name=radio-store]:checked").val();

	var paramDisabledType = '30';

	stPath = ($("#openPop").data("st-path"));

	var options = {
			url : stPath + "xhr/event/getDocentApplDays/"
	    ,	type : "GET"
		,	data : { eventNo : entryEvent.eventNo, dcntPlazaNo : dcntPlazaNo,
						visHopeDt : (visHopeDt === undefined ? '' : dateToStringFormat(new Date(visHopeDt),"yyyyMMdd") ) }
		,	done : function(result){
				var activeDays = [];
				var today = new Date();
				var startDay;

				var dDay = 1;

				for(var i=dDay; i<7+dDay; i++){
					var calDateSetFlag = false;

					var timeCd10Flag = false;
					var timeCd30Flag = false;
					var timeCd50Flag = false;

					today = new Date();
					today.setDate(today.getDate() + i);

					//주말 스킵
					if (today.getDay() === 0 || today.getDay() === 6 ) continue; // 날짜가 주말이라면

					//공휴일 스킵(삼일절, 대통령선거일)
					if (dateToStringFormat(today,"yyyyMMdd") == '20220301' || dateToStringFormat(today,"yyyyMMdd") == '20220309') continue;

					if (dateToStringFormat(today,"yyyyMMdd") > closedDay) break; // 매장별 closedDay까지 오픈

					for(var j = 0; j < result.length; j++ ) {
						if (result[j].APPL_COMPL_DATE == dateToStringFormat(today,"yyyyMMdd")) {
							var timeCd = result[j].TIME_CD;

							if (timeCd == "10") {
								timeCd10Flag = true;
							} else if (timeCd == "30") {
								timeCd30Flag = true;
							} else if (timeCd == "50") {
								timeCd50Flag = true;
							}

						}

						if (timeCd10Flag == true && timeCd30Flag == true && timeCd50Flag == true) { // 캠퍼스 베뉴가 아닐때
							calDateSetFlag = true;

							if (activeDays.length == 0) {
								fnAvailableTimeCd();
							}

							break;

						} else {
							if (visHopeDt === undefined) { // 달력선택값이
								if (dateToStringFormat(new Date(today),"yyyyMMdd") == result[j].APPL_COMPL_DATE) {
									if (activeDays.length == 0) {
										if (timeCd10Flag) fnDisabledTimeCd(10);
										if (timeCd30Flag) fnDisabledTimeCd(30);
										if (timeCd50Flag) fnDisabledTimeCd(50);
									}
								}

							} else if (visHopeDt !== undefined) { // 달력선택값이 있을때
//								startDay = visHopeDt;

								if (dateToStringFormat(new Date(visHopeDt),"yyyyMMdd") == result[j].APPL_COMPL_DATE) {
									if (timeCd10Flag) fnDisabledTimeCd(10);
									if (timeCd30Flag) fnDisabledTimeCd(30);
									if (timeCd50Flag) fnDisabledTimeCd(50);
								}
							}
						}

					}

					if (calDateSetFlag) continue;

					if (activeDays.length == 0) {
						startDay = dateToStringFormat(today);
					}

					activeDays.push(dateToStringFormat(today,"yyyyMMdd"));

				}

				if (visHopeDt !== undefined) {
					startDay = visHopeDt;
				}

				if (activeDays.length == 0) {
					activeDays[0] = '20900101';
					makeAlert("해당 매장은 예약이 모두 완료되었습니다.");
				}

				if (visHopeDt === undefined) {
					var datepickerOption = {
							disabledType : paramDisabledType
						,	activeDays : activeDays
						,   beforeShow : function(){
							setTimeout(function(){
		            		},0);
						}
					};

					datepickerOption = $.extend({}, datepickerOption);
				}

				$docentCal.val(startDay);

				$("#visHopeDt").val(startDay);

				if (visHopeDt === undefined) {
					setDatePicker(datepickerOption);

					calendar_picker();
				}

				fnSeletedMsg();
			}
		};

	ajax.call(options);

}

function getWithPrsnNum () {
	var withPrsnNum = $("ul[data-fldtpcd='30']").children("li.item").children("input:checked").val();

	if (withPrsnNum == '없음') {
		return 0;
	} else if (withPrsnNum == '1명') {
		return 1;
	} else if (withPrsnNum == '2명') {
		return 2;
	} else if (withPrsnNum == '3명') {
		return 3;
	}
}

function getVisTimeCd () {
	var timeCd = $("ul[data-fldtpcd='50']").children("li.focused").text();

	if (timeCd == '12:00~13:00') {
		return 10;
	} else if (timeCd == '14:00~15:00') {
		return 30;
	} else if (timeCd == '16:00~17:00') {
		return 50;
	}
}

function fnDisabledTimeCd (timeCd) {
	var $docentTimePos = $("ul[data-fldtpcd='50']").children("li");

	if (timeCd == 10) {
		$docentTimePos = $docentTimePos.eq(0);

		if ( $docentTimePos.text().indexOf("(마감)") == -1) {
			$docentTimePos.addClass("disabled");
			$docentTimePos.text($docentTimePos.text()+"(마감)");
		}

	} else if (timeCd == 30) {
		$docentTimePos = $docentTimePos.eq(1);

		if ( $docentTimePos.text().indexOf("(마감)") == -1) {
			$docentTimePos.addClass("disabled");
			$docentTimePos.text($docentTimePos.text()+"(마감)");
		}

	} else if (timeCd == 50) {
		$docentTimePos = $docentTimePos.eq(2);

		if ( $docentTimePos.text().indexOf("(마감)") == -1) {
			$docentTimePos.addClass("disabled");
			$docentTimePos.text($docentTimePos.text()+"(마감)");
		}

	}

}

function fnAvailableTimeCd () {
	var $docentTimePos = $("ul[data-fldtpcd='50']").children("li");

	$docentTimePos.each(function(){
		$(this).removeClass("disabled");
		$(this).text($(this).text().replace("(마감)", ""));
	});

}

function getOperationDuration (val) {
	//ex) ※ 운영기간: 2022년 2월25일(금) ~2022년 3월 16일(수)
	var openDt = val.openDt;
	var closedDay = val.closedDay;

	var returnStr = getDocentStrDate(openDt, closedDay);

	var plazaNo = val.plazaNo;

//	if (plazaNo == "1007") {
//		returnStr += getDocentNotice(plazaNo);
//	}

	if (val.spclItdcWds != null && val.spclItdcWds != '') {
		returnStr += getDocentNotice(val);
	}

	return returnStr;

}

function getDocentStrDate (startDateVal, endDateVal) {
	var startDate = startDateVal.substring(0, 4) +"-" + startDateVal.substring(4, 6) + "-" + startDateVal.substring(6, 8);
	var endDate = endDateVal.substring(0, 4) +"-" + endDateVal.substring(4, 6) + "-" + endDateVal.substring(6, 8);

	var dateOpenDt = new Date(startDate);
	dateOpenDt.setDate(dateOpenDt.getDate() + 1);
	var dateClosedDay = new Date(endDate);

	var strStNextDateVal = dateToStringFormat(dateOpenDt,"yyyyMMdd");
	var strStDateVal = strStNextDateVal.substring(0, 4) +"년 " + strStNextDateVal.substring(5, 6) + "월" + strStNextDateVal.substring(6, 8) + "일";
	var strEndDateVal = endDateVal.substring(0, 4) +"년 " + endDateVal.substring(5, 6) + "월" + endDateVal.substring(6, 8) + "일";

	var strStDayOfWeek = "(" + getDocentDayOfWeek(dateOpenDt) + ")";
	var strEndDayOfWeek = "(" + getDocentDayOfWeek(dateClosedDay) + ")";

	return "※ 운영기간: " + strStDateVal + strStDayOfWeek + " ~ " + strEndDateVal + strEndDayOfWeek;
}

function getDocentDayOfWeek (dateVal) {
	var returnNum = dateVal.getDay();
	var dayOfWeek = "";

	if (returnNum == 0) dayOfWeek = "일";
	else if (returnNum == 1) dayOfWeek = "월";
	else if (returnNum == 2) dayOfWeek = "화";
	else if (returnNum == 3) dayOfWeek = "수";
	else if (returnNum == 4) dayOfWeek = "목";
	else if (returnNum == 5) dayOfWeek = "금";
	else if (returnNum == 6) dayOfWeek = "토";

	return dayOfWeek;

}

function getDocentNotice (val) {
//	if (plazaNo == "1008") { //건국대학교
//		plazaTimeScheTxt = ": 2022년 4월 6일(수) 14시&16시";
//	}

	return "<br/>" + "※ 갤럭시 대학생 서포터즈와 함께하는 도슨트 투어<br/>: " + val.spclItdcWds;
}

