$.views.helpers({
	format: function(val){
		return val.replace(/\,/g, "");
	}
});

(function($){
	
	$('#slider-range').slider({
		range: true,
		min: 0,
		max: 300,
		step: 1,
		values: [63, 245]
	});
	
	var prodCardWrap = {
			vWrapId : ".prodCardWrap"
			, vWishMsg : {contentMsg : _GOODS_DETAIL_INSERT_WISH_SUCCESS, classNm : "wish-view", btnView : "전체 보기"}
			, fnMsgPop : function(vOption){
				var msgOptions = {};
				if(typeof vOption === "string"){
					$.extend(msgOptions, { contentMsg : vOption });
				}else if(typeof vOption === "object"){
					$.extend(msgOptions, vOption);
				} 
				var $objPopupMsg = $(".popup-msg"); 
				$objPopupMsg.html($("#popupMsgTemplate").render(msgOptions));
				$objPopupMsg.find('a').off().on('click', function (){
					if ($(this).hasClass('wish-view')){ 
						//전체보기
						console.log("전체보기");
					}
				});
				$objPopupMsg.show().focus();

		        // 딤드팝업 마스크 생성 및 활성화
		        if(!$("body").children().is("#mask")) $("body").append("<div id='mask'></div>");
		        $("#mask").fadeIn().data("activeTarget", 'popupMsg');
		        $("body").css("overflow","hidden");
		        
		        setTimeout(function() {
		        	$('#mask').trigger('click');
		        }, 5000);
			}
			, fnRegistWish : function(vGoodsId){
				// 찜하기 추가
				this.fnMsgPop(this.vWishMsg);
				// 찜하기 삭제
//				this.fnMsgPop(_GOODS_DETAIL_REMOVE_WISH_SUCCESS);
				console.log("vGoodsI == " + vGoodsId);
			}
			, fnCardCreate : function(){
				var options = {
						url: this.fnAjaxUrl("goodsFilterList")
						, data: $("#goodsFilterListForm").serializeJson()
						, done: function (data){
							console.log(data);
							var $cardWrap = $(".prodCardWrap");
							$cardWrap.html($("#prodCardTemplate").render(data));
							$cardWrap.data("info", data);
							$("#resultCnt").html("");
							prodCardWrap.fnCardEvent(prodCardWrap.vWrapId);
						}
				};
				ajax.call(options);
			}
			, fnAjaxUrl : function(vUrl){
				return $(this.vWrapId).data("ctpath") +  "xhr/goods/" + vUrl;
			}
			, fnCardEvent : function(vWrap){
				// 찜하기
				$('.card-top>.btn-good', vWrap).off().on('click', function (){
					console.log("찜하기");
				});
				// 상세보기
				$('.card-images>img, .card-info>.info-tit', vWrap).off().on('click', function (){
					location.href = "/goods/goodsDisplay?goodsId=" + $(this).closest('.product-card').data("id");
				});
				// 상품평 보러가기
				$('.itm-rating>.itm-review-count', vWrap).off().on('click', function (){
					console.log("상품평");
				});
				// 색상변경
				$('.p-type-area>.itm-color-list', vWrap).find('[type=radio]').off().on("change", function (){
					console.log($(this).data("id"));
				});
			}
	};
	
	var goodsFilter = {
			vWrapId : ".item-filter-wrap"
			, fnShowOrderMenu : function($ele){
				// 모바일에서 하단 합계 부분 
	            if($(window).width() < 900){
	            	var effectOpt = {effect : "slide", direction : "down"}; 
	                if($(document).scrollTop() > $("#footer").offset().top + $(window).height() - $('#compGoodsNoticeInfo').outerHeight() + $ele.outerHeight() * 2){
	                	$ele.hide(effectOpt);
	                }else{
	                	$ele.show(effectOpt);
	                }
	            }
	            if ($(document).scrollTop() > $(".component-bar").offset().top - ($(window).height() / 2) + $('.component-bar').height()) {
	                $('.component-bar').addClass("aniAct");
	            } else {
	                $('.component-bar').removeClass("aniAct");
	            }
			}
			, fnSearch : function(filterNm){
				// 상세검색
				var chgUrl = window.location.pathname;
				if (typeof filterNm === "string") chgUrl = window.location.pathname + "?" + filterNm;
				if (typeof(history.pushState) === "function"){
					history.pushState(null, null, chgUrl);
					prodCardWrap.fnCardCreate();
				}else location.href = chgUrl;
			}
	};
	
	$(document).ready(function(){
		
		
		$(".left-filter").find('input[type="checkbox"]').on("click", function (e){
			console.log($(this).attr("id"));
			console.log($(this).attr("title"));
			
			var $filter = $(".left-filter").find('input[type="checkbox"]:checked');
			if ($filter.length > 3) $(".options .releaseBtn").show();
			var filterNm = [];
			$filter.each(function(){
				filterNm.push($(this).data("filternm"));
		    });
			goodsFilter.fnSearch(filterNm.join("+"));
		});
		
		$(".left-filter .dropButton").on("click", function (e) {
			$(this).parent().find('.list-box').slideUp('fast');
			if (!$(this).hasClass("active")) {
				$(this).addClass("active");
				if (!$(this).next().is(":visible")) {
					$(this).next().slideDown('fast');
					$(this).addClass('open');
				}
			}
			else {
				$(this).removeClass("active");
				$(this).parent().find('.list-box').slideUp('fast');
			}
		});
		
		// 선택해제
		$(".options .releaseBtn").on("click", function(){
			$(this).hide();
			$(".left-filter").find('input[type="checkbox"]:checked').each(function(){
				$(this).prop('checked', false);
		    });
			goodsFilter.fnSearch();
		});
		// 필터해제
		$(".options .area button").on("click", function(){
			console.log($(this));
		});

		$(".filter-more").on("click", function (e) {
			if (!$(this).parent().find('ul.chk-form').hasClass("active")) {
				$(this).parent().find('ul.chk-form').addClass("active");
				$(this).text('직게 보기');
			}
			else {
				$(this).parent().find('ul.chk-form').removeClass("active");
				$(this).text('더 보기');
			}
		});
		prodCardWrap.fnCardCreate();

	});

})(jQuery);