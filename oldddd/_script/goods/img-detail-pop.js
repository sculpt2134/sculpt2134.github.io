
(function($){
	var setGalleryDetail = {
		infinite: false,
		arrow: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		fade: true,
		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 801,
			settings: {
				arrows: false, 
				dots: true 
			}
		}]
	};
	
	$(document).ready(function(){
		if($("#sliderGirdDetail01").length > 0){
			setGalleryDetail.initialSlide = $(".popup-comm-gallery #sliderGirdDetail01").find('.select-img').data('idx');
			$("#sliderGirdDetail01").slick(setGalleryDetail);
			
			// 갤러리 레이어팝업 닫을 시 레이어팝업 내 슬라이드 unslick
			$(".popup-comm-gallery > .popup-contents > .component-head .pop-close").on("click", function(e){
				if($(this).parents(".popup-comm-gallery")){
					var slider = $(this).parents(".popup-comm-gallery").find(".slider-gallery-detail");
					if(slider.hasClass("slick-initialized")){
						slider.slick("unslick");
					}
				}
			});
		}
	});
	
	$(function () {
		/*var target = $('#sliderGirdDetail01 .big-inner').find('img');
		target = target.parents('div').find('.slick-active img');
		var zoom = target.data('zoom');
		
		$(".big-inner")
			.on('mousemove', magnify)
			.append("<div class='magnifier'></div>")
			.children('.magnifier').css({
				"background": "url('" + target.attr("src") + "') no-repeat",
				"background-size": target.width() * zoom + "px " + target.height() * zoom+ "px"
			});
		
		var magnifier = $('.magnifier');
		
		function magnify(e) {
			if($(window).width() > 800) {
				target = target.parents('div').find('.slick-active img');
				$('.magnifier').css({
					"background": "url('" + target.attr("src") + "') no-repeat",
					"background-size": target.width() * zoom + "px " + target.height() * zoom+ "px"
				});
				
				// 마우스 위치에서 .magnify의 위치를 차감해 컨테이너에 대한 마우스 좌표를 얻는다.
				var mouseX = e.pageX - $(this).offset().left;
				var mouseY = e.pageY - $(this).offset().top;
				
				// 컨테이너 밖으로 마우스가 벗어나면 돋보기를 없앤다.
				if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
					magnifier.fadeIn(100);
				} else {
					magnifier.fadeOut(100);
				}
				
				//돋보기가 존재할 때
				if (magnifier.is(":visible")) {
					var rx = (target[0].offsetLeft * 2) -(mouseX * zoom - magnifier.width() /2 );
					var ry = target[0].offsetTop -(mouseY * zoom - magnifier.height() /2 );
					
					//돋보기를 마우스 위치에 따라 움직인다.
					//돋보기의 width, height 절반을 마우스 좌표에서 차감해 마우스와 돋보기 위치를 일치시킨다.
					var px = mouseX - magnifier.width() / 2;
					var py = mouseY - magnifier.height() / 2;
					
					//적용
					magnifier.css({
						left: px,
						top: py,
						backgroundPosition: rx + "px " + ry + "px"
					});
				}
			}
		}*/
	});
	
})(jQuery);
