//$(function() {
//	accessibility.bind();
//});
window.onload = function(){
	accessibility.bind();
}

/**
 * 레이어 웹접근성 포커스 처리를 위한 스크립트
 */
var accessibility = {
		$target_1 : null,
		$target_2 : null,
		$target_3 : null,
		targetId : null,
		
		/** 이벤트 바인딩 */
		bind : function() {
			
			setTimeout(function() {
				// 레이어 열기
				$('.accessibility-pop-open').off().on('click', function(e) {
					accessibility.setTarget(this);
				});
				
				// 레이어 닫기
				$('.accessibility-pop-close').off().on('click', function(e) {
					setTimeout(function() {
						accessibility.targetfocus();
					}, 150);
				});
			}, 500)
		},
		
		/** 레이어 닫고 포커스 이동 */
		targetfocus : function() {
			try {
				if (!accessibility.isEmpty(accessibility.$target_3)
						&& accessibility.hasClass(accessibility.$target_3)) {
					if (accessibility.$target_3.prop('tagName') == 'SPAN') {
						accessibility.$target_3.attr('tabindex', 0);
					}  
					accessibility.$target_3.focus();
					accessibility.$target_3 = null;
				} else if (!accessibility.isEmpty(accessibility.$target_2)
						&& accessibility.hasClass(accessibility.$target_2)) {
					if (accessibility.$target_2.prop('tagName') == 'SPAN') {
						accessibility.$target_2.attr('tabindex', 0);
					}  
					accessibility.$target_2.focus();
					accessibility.$target_2 = null;
				} else if (!accessibility.isEmpty(accessibility.$target_1) 
						&& accessibility.hasClass(accessibility.$target_1)) {
					if (accessibility.$target_1.prop('tagName') == 'SPAN') {
						accessibility.$target_1.attr('tabindex', 0);
					} 
					accessibility.$target_1.focus();
					accessibility.$target_1 = null;
				}
			} catch (error) {
				accessibility.$target_3 = null;
				accessibility.$target_2 = null;
				accessibility.$target_1 = null;
			}
		},

		/** target 가져오기 */
		setTarget : function(target) {
			if (accessibility.isEmpty(accessibility.$target_1)) {
				accessibility.$target_1 = $(target);
			} else if (accessibility.isEmpty(accessibility.$target_2)) {
				accessibility.$target_2 = $(target);
			} else {
				accessibility.$target_3 = $(target);
			}
		},
		
		/** 요소 null 검사 */
		isEmpty : function(target) {
			if (target === null) return true;
			if (typeof target === 'string' && target === '') return true;
			if (typeof target === 'undefined') return true;
		},
		
		/** 클래스 체크 */
		hasClass : function(target) {
			return target.hasClass('accessibility-pop-open');
		},
		
		/** 아이디로 포커스 타켓 지정 */
		targetfocusById : function(id) {
			setTimeout(function() {
				var $id = $('#' + id);
				if ($id.prop('tagName') == 'SPAN') {
					$id.attr('tabindex', 0);
				}
				$id.focus();
			}, 150);
		}
}