////////////////////////////////////////////////////////////////////////////////////
///////////////////// event-reservation.js ////////////////////////////////////////
///////////////////// 파일변경 시  indexLayout.jsp 내 event.js 호출 스크립트 버전 추가 (캐시 방지)

var $fanclassCal = $("input.inp-calendar");
var applyTxt = "";

$(function(){
	if (!fanclassFlag) {
		// 방문희망일자는 현재날짜 초기 셋팅
	    fnVisitDate();
	    // 시/도 목록
	    fnSiDoListSet();
	    // 매장, 방문날짜 선택 메시지
	    $(".storeRsltMsg").hide();

	} else if (fanclassFlag) {
		$(".store-detail-mapbox").remove();
		$(".hope-visit-date").remove();
		$(".btn-more-box").remove();
		$(".dl-parking").remove();
		$("#inpEnterAddressDetail").parent().hide();
		$("div.entryCollect20").children("label").text('연락처(휴대폰 번호)');
		$("p.txt2").text($("p.txt2").text().replace("매장상담예약", "팬클래스"));

		if (eventAddYn == 'B2C_PLAZA_FOLD3') {
			applyTxt = "Z 폴드3 찐 활용법 클래스를 신청합니다."
		} else if (eventAddYn == 'B2C_PLAZA_FLIP3') {
			applyTxt = "Z 플립3 찐 활용법 클래스를 신청합니다."
		}

		$(".selectedResultMsg2").text(applyTxt);

		fnSiDoListSet2();
	}

});

////////////////////////////////////////////////////////////////////////////////////
///////////////////// EVENT LISTENER ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


if (!fanclassFlag) {
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
	            plazaHtml += '    <input id="radio-store'+selSidoPlazaIndex+'" type="radio" name="radio-store" required="" title="" value="'+val.plazaNo+'" data-shop-no="'+val.shopNo+'">';
	            plazaHtml += '    <label for="radio-store'+selSidoPlazaIndex+'">'+val.plazaNm+'</label>';
	            plazaHtml += '</li>';

	            // 목록의 첫번째 매장으로 카카오맵 셋팅
	    		if(selSidoPlazaIndex == 1){
	    			fnSetPlazaInfo(val); // 매장상세정보 표시
	    			displayPlaces(val.lttd , val.litd); // kakao map
	    		}

	            selSidoPlazaIndex++;
	        }
	    });
	    $(".store-select-list").append(plazaHtml);
	    $("#dropAreaBtn2").text("전체");
	    $("#radio-store1").attr("checked", "checked");
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
	            plazaHtml += '    <input id="radio-store'+selSiGunGuPlazaIndex+'" type="radio" name="radio-store" required="" title="" value="'+val.plazaNo+'" data-shop-no="'+val.shopNo+'">';
	            plazaHtml += '    <label for="radio-store'+selSiGunGuPlazaIndex+'">'+val.plazaNm+'</label>';
	            plazaHtml += '</li>';

	            // 목록의 첫번째 매장으로 카카오맵 셋팅
	    		if(selSiGunGuPlazaIndex == 1){
	    			fnSetPlazaInfo(val); // 매장상세정보 표시
	    			displayPlaces(val.lttd , val.litd); // kakao map
	    		}

	            selSiGunGuPlazaIndex++;
	        }
	    });
	    $(".store-select-list").append(plazaHtml);
	    $("#radio-store1").attr("checked", "checked");

	})

	/*
	 * 매장선택
	 * 1. 매장 상세정보 표시
	 * 2. 카카오맵 표시
	 * 3. 매장 선택에 대한 신청버튼 상단 메시지 설정
	 * 4. 방문가능 날짜 셋팅
	 */
	$(document).on('click', 'input[name=radio-store]', function(){
		var seletedVal = $(this).val();
		var id = $(this).attr("id");

		//$("input:radio[name=radio-store]").removeAttr("checked"); // 전체 체크해제
		//$("#"+id).attr("checked","checked"); // 해당 ID 체크

	    var selectPlaza = plazas.filter(function(val) {
	        return seletedVal == val.plazaNo;
	    });

	    fnSetPlazaInfo(selectPlaza[0]); // 매장상세정보 표시
	    displayPlaces(selectPlaza[0].lttd , selectPlaza[0].litd); // kakao map
	    fnSeletedMsg(); // 신청버튼 상단 메시지

	    // 방문예약 가능한 날짜 셋팅
		fnSetAvailableDate();

	});

	// 방문날짜 선택
	$(document).on("change","#visitDate",function(){
		fnSeletedMsg(); // 신청버튼 상단 메시지
	});
	// 방문날짜 선택 시 디폴트(오늘날짜) 선택 해제 // css 처리되면 추후 삭제
	$(document).on("click","#visitDate",function(){
		$("table.ui-datepicker-calendar > tbody > tr > td > a").removeClass("ui-state-highlight");
	});

} else if (fanclassFlag) { // 팬클래스 전용 이벤트 등록
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
	            plazaHtml += '    <input id="radio-store'+selSidoPlazaIndex+'" type="radio" name="radio-store" required="" title="" value="'+val.plazaNo+'" data-shop-no="'+val.shopNo+'">';
	            plazaHtml += '    <label for="radio-store'+selSidoPlazaIndex+'">'+val.plazaNm+'</label>';
	            plazaHtml += '</li>';

	            // 목록의 첫번째 매장으로 카카오맵 셋팅
	    		if(selSidoPlazaIndex == 1){
	    			plazaNm = val.plazaNm;
	    			var addr = val.roadAddr + " " + (val.roadDtlAddr == null ? "" : val.roadDtlAddr);
	    		    $("#storeAddr").text(addr);
	    		    $("#storeTel").text(val.tel);

	    		    var openTime = fnOpenTime(val);
	    		    $("#storeOpenTime").text(openTime);

	    		    var parking = val.parkingInfo == "" ? "-" : val.parkingInfo;
	    		    $("#storeParkingInfo").text(parking);

//	    			fnSetPlazaInfo(val); // 매장상세정보 표시
//	    			displayPlaces(val.lttd , val.litd); // kakao map
	    		}

	            selSidoPlazaIndex++;
	        }
	    });
	    $(".store-select-list").append(plazaHtml);
	    $("#dropAreaBtn2").text("전체");
	    $("#radio-store1").attr("checked", "checked");

	    if (eventAddYn == 'B2C_PLAZA_FOLD3') {
			fnGetPlazaHolidays(10);

		} else if (eventAddYn == 'B2C_PLAZA_FLIP3') {
			fnGetPlazaHolidays(20);
		}

	    fnSeletedMsg2();
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
	            plazaHtml += '    <input id="radio-store'+selSiGunGuPlazaIndex+'" type="radio" name="radio-store" required="" title="" value="'+val.plazaNo+'" data-shop-no="'+val.shopNo+'">';
	            plazaHtml += '    <label for="radio-store'+selSiGunGuPlazaIndex+'">'+val.plazaNm+'</label>';
	            plazaHtml += '</li>';

	            // 목록의 첫번째 매장으로 카카오맵 셋팅
	    		if(selSiGunGuPlazaIndex == 1){
	    			plazaNm = val.plazaNm;

	    			var addr = val.roadAddr + " " + (val.roadDtlAddr == null ? "" : val.roadDtlAddr);
	    		    $("#storeAddr").text(addr);
	    		    $("#storeTel").text(val.tel);

	    		    var openTime = fnOpenTime(val);
	    		    $("#storeOpenTime").text(openTime);

	    		    var parking = val.parkingInfo == "" ? "-" : val.parkingInfo;
	    		    $("#storeParkingInfo").text(parking);
//	    			fnSetPlazaInfo(val); // 매장상세정보 표시
//	    			displayPlaces(val.lttd , val.litd); // kakao map
	    		}

	            selSiGunGuPlazaIndex++;
	        }
	    });
	    $(".store-select-list").append(plazaHtml);
	    $("#radio-store1").attr("checked", "checked");

	    if (eventAddYn == 'B2C_PLAZA_FOLD3') {
			fnGetPlazaHolidays(10);

		} else if (eventAddYn == 'B2C_PLAZA_FLIP3') {
			fnGetPlazaHolidays(20);
		}

	    fnSeletedMsg2();

	})

	/*
	 * 매장선택
	 * 1. 매장 상세정보 표시
	 * 2. 카카오맵 표시
	 * 3. 매장 선택에 대한 신청버튼 상단 메시지 설정
	 * 4. 방문가능 날짜 셋팅
	 */
	$(document).on('click', 'input[name=radio-store]', function(){
		var seletedVal = $(this).val();
		var id = $(this).attr("id");

		//$("input:radio[name=radio-store]").removeAttr("checked"); // 전체 체크해제
		//$("#"+id).attr("checked","checked"); // 해당 ID 체크

	    var selectPlaza = plazas.filter(function(val) {
	        return seletedVal == val.plazaNo;
	    });

	    var val = selectPlaza[0];
	    plazaNm = val.plazaNm;
	    var addr = val.roadAddr + " " + (val.roadDtlAddr == null ? "" : val.roadDtlAddr);
	    $("#storeAddr").text(addr);
	    $("#storeTel").text(val.tel);

	    var openTime = fnOpenTime(val);
	    $("#storeOpenTime").text(openTime);

	    var parking = val.parkingInfo == "" ? "-" : val.parkingInfo;
	    $("#storeParkingInfo").text(parking);
//	    fnSetPlazaInfo(selectPlaza[0]); // 매장상세정보 표시
//	    displayPlaces(selectPlaza[0].lttd , selectPlaza[0].litd); // kakao map

	    // 방문예약 가능한 날짜 셋팅
//		fnSetAvailableDate();

	    if (eventAddYn == 'B2C_PLAZA_FOLD3') {
			fnGetPlazaHolidays(10);

		} else if (eventAddYn == 'B2C_PLAZA_FLIP3') {
			fnGetPlazaHolidays(20);
		}

	 // 날짜선택이 지도영역에 추가로 그려지기 때문에 해당 펑션을 호출해줌
	    calendar_picker();

	    fnSeletedMsg2(); // 신청버튼 상단 메시지

	});

	// 방문날짜 선택
	$(document).on("change", $fanclassCal ,function(){
		fnSeletedMsg2(); // 신청버튼 상단 메시지
	});
	// 방문날짜 선택 시 디폴트(오늘날짜) 선택 해제 // css 처리되면 추후 삭제
	$(document).on("click", $fanclassCal ,function(){
		$("table.ui-datepicker-calendar > tbody > tr > td > a").removeClass("ui-state-highlight");
	});
}

////////////////////////////////////////////////////////////////////////////////////
///////////////////// EVENT FUNCTION (팬클래스 전용)///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//시/도 목록 초기 셋팅
function fnSiDoListSet2(){

    /* #### 시/도 세팅 ###################################################### */
	$("#dropAreaBtn").text("서울");
	$("#dropAreaBtn2").text("강남구");
	$("#dropSiDo").empty();
	var siDoHtml="";
    siDoHtml += '<li id="dropSiDo-0" role="option" class="droplist-item" value="0">전체</li>';
    $.each(siDoList, function(idx, val){
        var index = idx +1;
        if(val.dtlCd == siDo10){ // 초기는 서울로 설정
        	siDoHtml += "<li id=\"dropSiDo-"+index+"\" role=\"option\" class=\"droplist-item focused\" aria-selected=\"true\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
        }else{
        	siDoHtml += "<li id=\"dropSiDo-"+index+"\" role=\"option\" class=\"droplist-item\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
        }
    });
    $("#dropSiDo").append(siDoHtml);

    /* #### 시/군/구 세팅 ###################################################### */
    $("#dropSiGunGu").empty();
    var siGunGuHtml="";
    siGunGuHtml += "<li id=\"dropSiGunGu-0\" role=\"option\" class=\"droplist-item\" value=\"0\">전체</li>";
    $.each(siGunGuList, function(idx, val){
    	if(val.usrDfn1Val == siDo10){
            var index = idx +1;
            if(val.dtlCd == siGunGu123){ // 초기는 강남구
            	siGunGuHtml += "<li id=\"dropSiGunGu-"+index+"\" role=\"option\" class=\"droplist-item focused\" aria-selected=\"true\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
            }else{
            	siGunGuHtml += "<li id=\"dropSiGunGu-"+index+"\" role=\"option\" class=\"droplist-item\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
            }
        }
    });
    $("#dropSiGunGu").append(siGunGuHtml);

    /* #### 매장 세팅 ###################################################### */
    $(".store-select-list").empty();
    var plazaHtml = "";
    var initPlazaIndex = 1;
    $.each(plazas, function(idx, val){

    	if(val.dtrtCd == siGunGu123){
    		plazaHtml += '<li>';
    		plazaHtml += '    <input id="radio-store'+initPlazaIndex+'" type="radio" name="radio-store" required="" title="" value="'+val.plazaNo+'" data-shop-no="'+val.shopNo+'">';
    		plazaHtml += '    <label for="radio-store'+initPlazaIndex+'">'+val.plazaNm+'</label>';
    		plazaHtml += '</li>';

    		// 목록의 첫번째 매장으로 카카오맵 셋팅
    		if(initPlazaIndex == 1){
    			plazaNm = val.plazaNm;

    			var addr = val.roadAddr + " " + (val.roadDtlAddr == null ? "" : val.roadDtlAddr);
    		    $("#storeAddr").text(addr);
    		    $("#storeTel").text(val.tel);

    		    var openTime = fnOpenTime(val);
    		    $("#storeOpenTime").text(openTime);

    		    var parking = val.parkingInfo == "" ? "-" : val.parkingInfo;
    		    $("#storeParkingInfo").text(parking);
//    			fnSetPlazaInfo(val); // 매장상세정보 표시
//    			displayPlaces(val.lttd , val.litd); // kakao map
    		}

    		initPlazaIndex++;
    	}

    });
    $(".store-select-list").append(plazaHtml);
    $("#radio-store1").attr("checked", "checked");

//    fnSetAvailableDate();
    // 방문예약 가능한 날짜 셋팅
    if (eventAddYn == 'B2C_PLAZA_FOLD3') {
		fnGetPlazaHolidays(10);

	} else if (eventAddYn == 'B2C_PLAZA_FLIP3') {
		fnGetPlazaHolidays(20);
	}

 // 날짜선택이 지도영역에 추가로 그려지기 때문에 해당 펑션을 호출해줌
    calendar_picker();

	setTimeout(function(){
		fnSeletedMsg2();
	},1000);

}

////////////////////////////////////////////////////////////////////////////////////
///////////////////// EVENT FUNCTION (일반)///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// 시/도 목록 초기 셋팅
function fnSiDoListSet(){

    /* #### 시/도 세팅 ###################################################### */
	$("#dropAreaBtn").text("서울");
	$("#dropAreaBtn2").text("강남구");
	$("#dropSiDo").empty();
	var siDoHtml="";
    siDoHtml += '<li id="dropSiDo-0" role="option" class="droplist-item" value="0">전체</li>';
    $.each(siDoList, function(idx, val){
        var index = idx +1;
        if(val.dtlCd == siDo10){ // 초기는 서울로 설정
        	siDoHtml += "<li id=\"dropSiDo-"+index+"\" role=\"option\" class=\"droplist-item focused\" aria-selected=\"true\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
        }else{
        	siDoHtml += "<li id=\"dropSiDo-"+index+"\" role=\"option\" class=\"droplist-item\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
        }
    });
    $("#dropSiDo").append(siDoHtml);

    /* #### 시/군/구 세팅 ###################################################### */
    $("#dropSiGunGu").empty();
    var siGunGuHtml="";
    siGunGuHtml += "<li id=\"dropSiGunGu-0\" role=\"option\" class=\"droplist-item\" value=\"0\">전체</li>";
    $.each(siGunGuList, function(idx, val){
    	if(val.usrDfn1Val == siDo10){
            var index = idx +1;
            if(val.dtlCd == siGunGu123){ // 초기는 강남구
            	siGunGuHtml += "<li id=\"dropSiGunGu-"+index+"\" role=\"option\" class=\"droplist-item focused\" aria-selected=\"true\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
            }else{
            	siGunGuHtml += "<li id=\"dropSiGunGu-"+index+"\" role=\"option\" class=\"droplist-item\" value=\""+val.dtlCd+"\">"+val.dtlNm+"</li>";
            }
        }
    });
    $("#dropSiGunGu").append(siGunGuHtml);

    /* #### 매장 세팅 ###################################################### */
    $(".store-select-list").empty();
    var plazaHtml = "";
    var initPlazaIndex = 1;
    $.each(plazas, function(idx, val){

    	if(val.dtrtCd == siGunGu123){
    		plazaHtml += '<li>';
    		plazaHtml += '    <input id="radio-store'+initPlazaIndex+'" type="radio" name="radio-store" required="" title="" value="'+val.plazaNo+'" data-shop-no="'+val.shopNo+'">';
    		plazaHtml += '    <label for="radio-store'+initPlazaIndex+'">'+val.plazaNm+'</label>';
    		plazaHtml += '</li>';

    		// 목록의 첫번째 매장으로 카카오맵 셋팅
    		if(initPlazaIndex == 1){
    			fnSetPlazaInfo(val); // 매장상세정보 표시
    			displayPlaces(val.lttd , val.litd); // kakao map
    		}

    		initPlazaIndex++;
    	}

    });
    $(".store-select-list").append(plazaHtml);
    $("#radio-store1").attr("checked", "checked");


    // 방문예약 가능한 날짜 셋팅
	fnSetAvailableDate();

	setTimeout(function(){
		fnSeletedMsg();
	},1000);

}

//신청버튼 상단 메시지
function fnSeletedMsg(){
	var visitDate = $("#visitDate").val();
	var selectedMsg = visitDate.substring(0,4)+"년 "+visitDate.substring(5,7)+"월 "+visitDate.substring(8,10)+"일 "+plazaNm;
	$(".selectedResultMsg").text(selectedMsg);
	$(".storeRsltMsg").show();
}

function fnSeletedMsg2(){
	var visitDate = $fanclassCal.val();
//	var visitDate = $("#visHopeDt").val();
	var selectedMsg = visitDate.substring(0,4)+"년 "+visitDate.substring(5,7)+"월 "+visitDate.substring(8,10)+"일 "+plazaNm;
	$(".selectedResultMsg").text(selectedMsg);
	$(".storeRsltMsg").show();
}

//매장상세정보 표시
function fnSetPlazaInfo(val){
	plazaNm = val.plazaNm; // event.js 쪽에 전역변수로 있으니 수정하지 마세요.
    $(".store-name").text(plazaNm);

    var addr = val.roadAddr + " " + (val.roadDtlAddr == null ? "" : val.roadDtlAddr);
    $("#storeAddr").text(addr);
    $("#storeTel").text(val.tel);

    var openTime = fnOpenTime(val);
    $("#storeOpenTime").text(openTime);

    var parking = val.parkingInfo == "" ? "-" : val.parkingInfo;
    $("#storeParkingInfo").text(parking);

    if(val.microSiteFlag == "Y"){
        $(".btn-more-box").show();
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
    var weoth = val.weekendOpenTime.substring(0,2); // 주말 오픈 시간 시
    var weotm = val.weekendOpenTime.substring(2,4); // 주말 오픈 시간 분
    var wecth = val.weekendCloseTime.substring(0,2); // 주말 클로즈 시간 시
    var wectm = val.weekendCloseTime.substring(2,4); // 주말 클로즈 시간 분
    var openTime = "평일 "+wdoth+":"+wdotm+" ~ "+wdcth+":"+wdctm+" / 주말 "+weoth+":"+weotm+" ~ "+wecth+":"+wectm;

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

/* 내일로 날짜를 표시 */
function fnVisitDate(){
	let today;
	let year; // 년도
	let month;   // 월
	let date;  // 날짜
	let now = new Date();
	now.setDate(now.getDate()+1);
    year = now.getFullYear(); // 년도
    month = (now.getMonth()+1).toString().length ==1 ? "0"+(now.getMonth()+1) : now.getMonth()+1;   // 월
    date = (now.getDate()+1).toString().length == 1 ? "0"+now.getDate() : now.getDate() ;  // 날짜
    today = year+"-"+month+"-"+date;
    $("#visitDate").val(today);

}

/* 이벤트에 등록된 가능한 날짜만 선택할 수 있도록  DatePicker 셋팅 */
function fnSetAvailableDate(){

    const day = new Date();
    // timestamp 로 넘어온 데이터를 date 형식으로 변환
    const tmpSdt = new Date(entryEvent.counselStrtDtm);
    const tmpEdt = new Date(entryEvent.counselEndDtm);

    // 두 날짜사이의 일수를 계산하기 위해 HH24miss 부분을 제외한 날짜 형식으로 변환
    const standardDt = new Date(day.getFullYear(), day.getMonth(), day.getDate());
    const counselStrtDt = new Date(tmpSdt.getFullYear(), tmpSdt.getMonth(), tmpSdt.getDate());
    const counselEndDt = new Date(tmpEdt.getFullYear(), tmpEdt.getMonth(), tmpEdt.getDate());

    let startDt; // 달력에 표시될 시작 날짜를 담는다.
    let elapsedMSec; // 두 날짜 사이의 일수를 담는다.

    // 시작일과 오늘날짜를 비교해서 큰 날짜를 비교 날짜로 설정한다.
    if(standardDt.getTime() < counselStrtDt.getTime()) {
        elapsedMSec = counselEndDt.getTime() - counselStrtDt.getTime();
        startDt = new Date(counselStrtDt);
    }else{
        elapsedMSec = counselEndDt.getTime() - standardDt.getTime();
        startDt = new Date(standardDt);
    }

    const dayCnt = elapsedMSec / 1000 / 60 / 60 / 24; // 일수 계산

    var activeDays = []; // 달력에 표시할 날짜를 담을 배열
    for (var i = 0; i <= dayCnt; i += 1) {
    	//오늘날짜부터 찍어야 할 경우
    	if(i==0){
    		startDt.setDate(startDt.getDate()); // 하루씩 증가시켜서 배열에 담는다.
    	}else{
    		startDt.setDate(startDt.getDate() + 1); // 하루씩 증가시켜서 배열에 담는다.
    	}
    	//startDt.setDate(startDt.getDate() + 1); // 하루씩 증가시켜서 배열에 담는다.
        activeDays.push(dateToStringFormat(startDt, "yyyyMMdd"));
    }

    var result;
    var datepickerOption = {
        disabledType: "30",
        holidays: result, // holidays를 undefined 로 전달 // holidays 필요없음
        activeDays: activeDays
    };
    setDatePicker(datepickerOption); // Reference path : sec/static/_script/common.js

}



/* 이벤트에 등록된 가능한 날짜만 선택할 수 있도록  DatePicker 셋팅 */
//공휴일 set
function fnGetPlazaHolidays(evtCd){ // evtCd : 10(폴드, 홀수일), evtCd : 20(플립, 짝수일)
	var $timeItem = $("input.inp-calendar[data-fldtpcd='130']").parents(".inp-box").next().find("input[type='text']"); // 날짜 바로 다음 항목 selector 하위 input 타입
	var fclPlazaNo = $("input[name=radio-store]:checked").val();

	var paramDisabledType = '30';

	stPath = ($("#openPop").data("st-path"));

	var options = {
			url : stPath + "xhr/event/getFclApplDays/"
	    ,	type : "GET"
		,	data : { eventNo : entryEvent.eventNo, fclPlazaNo : fclPlazaNo}
		,	done : function(result){
			var activeDays = [];
			var today = new Date();
			var startDay;

			var dDay = 3;

			for(var i=dDay; i<28+dDay; i++){
				var dateSetFlag = false;

				today = new Date();
				today.setDate(today.getDate() + i);

				if (dateToStringFormat(today,"yyyyMMdd") == '20220101') break; // 12월31일까지만 오픈

				for(var j = 0; j < result.length; j++ ) {
					if (result[j] == dateToStringFormat(today,"yyyyMMdd")) {
						dateSetFlag = true;
						break;
					}
				}

				if (dateSetFlag) continue;

				if (evtCd == 10) {
					if (today.getDate() % 2 == 0) {
						continue;
					} else {
						if (activeDays.length == 0) {
							startDay = dateToStringFormat(today);
						}

						activeDays.push(dateToStringFormat(today,"yyyyMMdd"));
					}

				} else if (evtCd == 20) {
					if (today.getDate() % 2 == 1) {
						continue;
					} else {
						if (activeDays.length == 0) {
							startDay = dateToStringFormat(today);
						}

						activeDays.push(dateToStringFormat(today,"yyyyMMdd"));
					}
				}

			}

			$timeItem.attr("readOnly", true);

			var datepickerOption = {
					disabledType : paramDisabledType
				,	activeDays : activeDays
				,   beforeShow : function(){
					setTimeout(function(){
            		},0);
				}
			};

			datepickerOption = $.extend({}, datepickerOption, {holidays : result});

			if (activeDays.length == 0) {
				var tempDay = new Date();

				if (evtCd == 10) {
					tempDay.setDate(tempDay.getDate() + dDay);
					startDay = dateToStringFormat(tempDay);
					activeDays.push(dateToStringFormat(tempDay,"yyyyMMdd"));
				} else if (evtCd == 20) {
					tempDay.setDate(tempDay.getDate() + (dDay+1));
					startDay = dateToStringFormat(tempDay);
					activeDays.push(dateToStringFormat(tempDay,"yyyyMMdd"));
				}


			}

			$("input.inp-calendar[data-fldtpcd='130']").val(startDay);

			$("#visHopeDt").val(startDay);

			startDay = new Date(startDay);

			//일0 월1 화2 수3 목4 금5 토6, 주중 19:00 /주말 15:00
			if (startDay.getDay() === 0 || startDay.getDay() === 6 ) { // 선택한 날짜가 주말이라면
				$timeItem.val("15:00");
			} else {
				$timeItem.val("19:00");
			}

			setDatePicker(datepickerOption);

			calendar_picker();

			fnSeletedMsg2();
		}
	};

	ajax.call(options);

	$("input.inp-calendar[data-fldtpcd='130']").on("change", function(){
		$("#visHopeDt").val($(this).val());

		var curCalendarVal = new Date($(this).val());

		if (curCalendarVal.getDay() === 0 || curCalendarVal.getDay() === 6 ) { // 선택한 날짜가 주말이라면
			$timeItem.val("15:00");
		} else {
			$timeItem.val("19:00");
		}
	});
}