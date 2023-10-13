(function($){
	$(document).ready(function(){
	    $('.tab-store-top').on('click', function(e) {
			var $target = $(e.target);
			var locationAcceptYN = $.cookie(storePickupConstants.LOCATION_ACCEPT);
			
			$(".store-search-nohave").css("display", "none");
			console.log("위치정보 검색 vs 매장명 검색 클릭");
			
			// 위치정보
			if ( $target.hasClass('location-info-search') || $target.hasClass('ico-locationInfo') ) {
				locationAccept = true;
				$('.location-map .store-info-box').removeClass('is-active');
				console.log("위치정보 검색 탭을 선택하였습니다.");
				
				storePickupManager.initTabLocationInfo();
				
			// 매장명 검색
			} else if ( $target.hasClass('plaza-name-search') ) {
				console.log("매장명 검색 탭을 선택하였습니다.");
				locationAccept = false;
				isMsIE = false;
				
				//위치정보 허용해서 조회 후 매장명 검색 탭으로 이동했을 경우
				if(locationAcceptYN === 'Y') { //매장명 검색 검색어가 없을 때
					
					$('#tabContent-box1').show();
					$('#tabContent-box2').hide();
					
					$('.tab-store-bottom.list-show').attr("aria-selected", "true");
					$('.tab-store-bottom.map-show').attr("aria-selected", "false");
					
					storePickupManager.mapInit($('#searchGpsLocation').val());
				} else {
					storePickupManager.mapInit();
				}
			}
	    });
	    
	    $(document).on('click', '.tab-store-bottom', function(e) {
			var $target = $(e.target);
			
			// 목록보기
			if ( $target.hasClass('list-show') ) {
				$(".location-map").find('.map-mark').removeClass('active'); //지도보기에서 선택된 마커 선택 해제
				
				isSelectedMarker = false;
				$("#countPickupPrd").val($("#countPickupPrd").data("min-pickup-qty"));
				
				$('.location-map .store-info-box').removeClass('is-active');
				$('#tabContent-box2').hide();
				$('#tabContent-box1').show();
			// 지도보기
			} else if ( $target.hasClass('map-show') ) {
				// 목록보기에서 선택된 매장 라디오 버튼 해제
				if($("[id^='location-list']").length > 0) {
					$("[id^='location-list']").each(function(){
						if($(this).is(":checked")) {
							$(this).prop("checked", false);
						}
					});
					//해제니까 상품수량 선택 부분의 숫자를 최소 숫자 1로 셋팅 필요
					$("#countPickupPrd").val($("#countPickupPrd").data("min-pickup-qty"));
				}
				
				if(!locationAccept) {
					//storePickupManager.showMap(37.4959854, 127.0664091);
				} else if(locationAccept) {
					storePickupManager.showMap(_locLatitude, _locLongitude); //위치허용
				}
				
				$('#tabContent-box1').hide();
				$('#tabContent-box2').show();
				
				if(typeof(map) !== 'undefined') {
					map.relayout();
					map.setLevel(6);
					
					//Default 위치 = 강남
					if(_locLatitude === null || _locLatitude === undefined || _locLatitude == '' ) {
						_locLatitude = 37.4959854;
					}
					
					if(_locLongitude === null || _locLongitude === undefined || _locLongitude == '' ) {
						_locLongitude = 127.0664091;
					}
					kakaoMapManager.panTo(_locLatitude, _locLongitude);
				}
				
			}
		});
	    
	    // 검색 bar
	    $('#searchPlazaName').on('click', function(e) {
	    	var $target = $(e.target);
	    	$target.val("");
	    });
	    
	    // 검색 버튼
	   /* $('#btn-search-gps').on('click', function() {
	    	kakaoMapManager.hideMarkers();
	    	map.setLevel(6);
	    	storePickupManager.initTabLocationInfo();
	    	$(".store-search-nohave").css("display", "none");
	    });*/
	    
	    //매장명 검색
    	$(document).on('click', '.store-pickup-wrap #btn-search-plaza', function() {
        	kakaoMapManager.hideMarkers();
        	
        	map.setLevel(6);
        	$(".store-search-nohave").css("display", "none");
        	$('.location-map .store-info-box').removeClass('is-active');
        	
        	if($('#searchPlazaName').val() == ""){
        		$('.location-list ul').empty();
        		$('.store-viewer .searching-result').css("display", "none");
        		$('.store-search-nohave').css("color", "red");
        		$('.store-search-nohave').css("display", "block");
        		
        		//아래 초기화 부분은 함수로 만들어서 통일
        		storePickupManager.showMap(_locLatitude, _locLongitude);
        		
        		$('#tabContent-box1').show();
				$('#tabContent-box2').hide();
				$('.tab-store-bottom.list-show').attr("aria-selected", "true");
				$('.tab-store-bottom.map-show').attr("aria-selected", "false");
        		
        	}else {
        		console.log("검색어-------------------------------" + $('#searchPlazaName').val());
        		storePickupManager.callDataPlazaListByPlazaName();
        	}
        });
	    
        $(".location-map").off("click.mapMarkEvent");
        // 지도 위 마크 클릭
        $(".location-map").on("click.mapMarkEvent" , ".map-mark", function(){
            $(".location-map .store-info-box").addClass("is-active");
            
    		isSelectedMarker = true;
            
            $(".location-map").find('.map-mark').removeClass('active');
            $(this).addClass('active');
            
            var marker = $('.map-mark.active').data();
            marker.latlng = new kakao.maps.LatLng(marker.lttd, marker.litd);
            
            storePickupManager.storeInfoLayer(marker);
            
        });
        
        // 매장선택
        $('#btn-choosePlaza').on('click', function() {
        	var radioVal = $("input:radio[name='radioLocationList']:checked").val();
        	var minQty = $("#countPickupPrd").data("min-pickup-qty");
        	
        	//구매수량이 없을 때
        	var count = $("#countPickupPrd").val();
        	if(count == "" || count == null || parseInt(count) <= 0) {
        		count = minQty;
        		$("#countPickupPrd").val(count);
				return false;
        	}
        	
        	if(radioVal) {
        		//선택된 매장이 있다면
        		$('#store-select-message').css('visibility', 'hidden');
        		var json = $("input:radio[name='radioLocationList']:checked").data();
        		var pickupCount = $("#countPickupPrd").val();
        		
        		//수량 검증
        		if(checkPswdMatch(json)){
	        		setChoosenPickupStore(json, pickupCount, "N");
	        		$('.pop-close').trigger('click');
        		}
        		
        	} //else if(markerSelectedPosition !== undefined && markerSelectedPosition !== null) {
        	else if(isSelectedMarker) {
        		// 마커 선택
        		$('#store-select-message').css('visibility', 'hidden');
        		var json = markerSelectedPosition;
        		var pickupCount = $("#countPickupPrd").val();
        		
        		//수량 검증
        		if(checkPswdMatch(json)){
	        		setChoosenPickupStore(json, pickupCount, "N");
	        		markerSelectedPosition = null;
	        		$('.pop-close').trigger('click');
        		}
        	} else {
        		//선택된 매장이 없다면
        		$('#store-select-message').css('visibility', 'visible');
        	}
        });
        
        //바로구매
        $('#btn-directBuy').on('click', function() {
        	//선택된 매장이 있다면
        	var radioVal = $("input:radio[name='radioLocationList']:checked").val();
        	var minQty = $("#countPickupPrd").data("min-pickup-qty");
        	
        	//구매수량이 없을 때
        	var count = $("#countPickupPrd").val();
        	if(count == "" || count == null || parseInt(count) <= 0) {
        		count = minQty;
        		$("#countPickupPrd").val(count);
				return false;
        	}
        	
        	if(radioVal) {
        		// 선택된 매장이 있다면
        		$('#store-select-message').css('visibility', 'hidden');
        		var json = $("input:radio[name='radioLocationList']:checked").data();
        		var pickupCount = $("#countPickupPrd").val();
        		
        		//수량 검증
        		if(checkPswdMatch(json)){
        			setChoosenPickupStore(json, pickupCount, "Y");
        			$('.pop-close').trigger('click');
        		}
        	} //else if(markerSelectedPosition !== undefined && markerSelectedPosition !== null) {
        	else if(isSelectedMarker) {
        		// 마커 선택
        		$('#store-select-message').css('visibility', 'hidden');
        		var json = markerSelectedPosition;
        		var pickupCount = $("#countPickupPrd").val();

        		//수량 검증
        		if(checkPswdMatch(json)){
		    		setChoosenPickupStore(json, pickupCount, "Y");
		    		markerSelectedPosition = null;
		    		$('.pop-close').trigger('click');
        		}
        	} else {
        		//선택된 매장이 없다면
        		$('#store-select-message').css('visibility', 'visible');
        	}
        });
        
        // 수량 변경
    	$("#pickup-spinner").on("click", function (e){
    		var $target = $(e.target)
    			, count = $("#countPickupPrd").val()
    			, $infoBox = $('.location-map .store-info-box');
    		
    		$('#fnetOrderAgree').val('N');
    		$('#b2bIBMLimit').val('N');
    		
            e.preventDefault();
            var maxQty = $("#countPickupPrd").data("max-qty")
            , maxPickupQty = $("#countPickupPrd").data("max-pickup-qty")
            , minQty = $("#countPickupPrd").data("min-pickup-qty");
            
            var mhdjTgYn = $('input[name=mhdjTgYn]').val();
            
            var radioVal = $("input:radio[name='radioLocationList']:checked").val();
            if(radioVal || $infoBox.hasClass('is-active')) {
            	$(this).attr("disabled", false);

            	var json;
            	if(isSelectedMarker) {
            		json = markerSelectedPosition;
            	}else{
            		json = $("input:radio[name='radioLocationList']:checked").data();
            	}
            	console.log("store-pickup-list-pop.js setChoosenPickupStore:::"+JSON.stringify(json));

            	//maxQty에 재고가 최대구매가능수량보다 크면 구매가능수량, 아니면 재고 세팅
            	if(maxPickupQty < json.stockCount){
                	maxQty = maxPickupQty;
            	}else{
            		maxQty = json.stockCount;
            	}
            } else {
            	$(this).attr("disabled", true);
            	let alertData = {
    					title: ""
    					, content : "매장을 선택해 주세요."
    					, callback : ""
    					, btnText : "확인"
    				};
    			commonAlert(alertData);
    			openLayer('commonAlert');
    			return;
            }
            
            //감소
            if($target.hasClass("count-miner")){
                if(parseInt(count) > minQty){
                    count--;
                }else {
                	$(this).attr("disabled", true);
                }
            } else if($target.hasClass("count-plus")){
            	$(this).attr("disabled", false);
            
            	if(parseInt(count) < parseInt(maxQty)){
            		count++;
            	}else{
            		let alertData = {
        					title: ""
        					, content : "최대구매수량은" + maxQty +"개 입니다."
        					, callback : ""
        					, btnText : "확인"
        				};
    				commonAlert(alertData);
    				openLayer('commonAlert');
    				count = parseInt(maxQty);
            	}
            }
            $("#countPickupPrd").val(count);
    	});
    	
    	//완료전 구매가능수량 검증
    	var checkPswdMatch = function(json){
            var maxQty;
            var maxPickupQty = $("#countPickupPrd").data("max-pickup-qty");
            var count = $("#countPickupPrd").val();

        	//maxQty에 재고가 최대구매가능수량보다 크면 구매가능수량, 아니면 재고 세팅
        	if(maxPickupQty < json.stockCount){
            	maxQty = maxPickupQty;
        	}else{
        		maxQty = json.stockCount;
        	}
            
            if(parseInt(count) > parseInt(maxQty)) {//키보드 입력 값이 maxQty보다 클 때
					let alertData = {
	   					title: ""
	   					, content : "최대구매수량은" + maxQty + "개 입니다."
	   					, callback : ""
	   					, btnText : "확인"
	   				};
				commonAlert(alertData);
				openLayer('commonAlert');
				count = parseInt(maxQty);

				$("#countPickupPrd").val(count);
				
				return false;
			}
            return true;
    	}
	}); // $(document).ready End	
})(jQuery);

