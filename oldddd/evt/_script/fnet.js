var device = {
	agent: navigator.userAgent.toLocaleLowerCase(),
	os: null,
	ver: null,
	isApp: null,
	appHgt: 0,
	val: '',
	isGnb : false, /* 2022-05-20 */
	init: function () {
		var str;
		var ver;
		if(device.agent !== undefined){
			if (device.agent.indexOf('iphone') > -1 || device.agent.indexOf('ipad') > -1) {
				str = device.agent.substring(device.agent.indexOf('os') + 3);
				ver = str.substring(0, str.indexOf(' like'));
				device.os = 'ios';
				device.ver = device.os + ver;
			}
			if (device.agent.indexOf('android') > -1) {
				str = device.agent.substring(device.agent.indexOf('android') + 8);
				var strSub = str.substring(0, str.indexOf(';'));
				ver = strSub.replace(/[.]/gi, '_');
				device.os = 'android';
				device.ver = device.os + ver;
			}
		}
		device.set();
	},
	set: function () {
		var html = document.querySelector('html');
		var htmlClass = html.getAttribute('class');
		var etc = '';
		if (device.agent.indexOf('samsung') > -1) etc += ' samsung';
		if (device.agent.indexOf('naver') > -1) etc += ' naver';
		if (device.agent.indexOf('secapp') > -1) {
			device.ver += ' secapp';
			device.isApp = true;
		}
		if (device.os !== null) {
			(htmlClass) ? html.setAttribute('class', htmlClass + ' ' + device.ver + etc) : html.setAttribute('class', device.ver + etc);
		}
		device.resp();
		window.addEventListener('resize', device.resp);
	},
	resp: function () {
		if (window.innerWidth > 1100) device.val = 'p';
		if (window.innerWidth <= 1100 && window.innerWidth >= 801) device.val = 't';
		if (window.innerWidth < 801) device.val = 'm';
		(window.innerWidth > 1281) ? device.isGnb = true : device.isGnb = false; /* 2022-05-20 */ /* 2023-04-04 */
		
		setTimeout(function () {
			if (window.innerWidth > 1100) device.val = 'p';
			if (window.innerWidth <= 1100 && window.innerWidth >= 801) device.val = 't';
			if (window.innerWidth < 801) device.val = 'm';
			(window.innerWidth > 1281) ? device.isGnb = true : device.isGnb = false; /* 2022-05-20 */ /* 2023-04-04 */
		}, 100);
	}
}
device.init();

// 앱 네이티브 gnb 영역 높이 설정
var topForApp = function (hgt) {
	if (!document.querySelector('#wrap').classList.contains('useWebGnb')) {
		document.querySelector('html').style.marginTop = hgt + 'px';
		device.appHgt = hgt;
		$('#container.type-visual').addClass('fold-app-top');
	}
	return false;
}

// 스크롤시 엘리먼트가 화면에 걸쳐있을때 특정 함수 실행
var scrollActive = function (el, callback) {
	var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
	var scrollStart = scrollTop + window.innerHeight;
	var clientReact = el.getBoundingClientRect();
	var elStart = scrollTop + clientReact.top;
	var elEnd = elStart + clientReact.height;
	var state = false;

	window.addEventListener('scroll', function () {
		scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
		scrollStart = scrollTop + window.innerHeight;
		clientReact = el.getBoundingClientRect();
		elStart = scrollTop + clientReact.top;
		elEnd = elStart + clientReact.height;
		if (scrollStart >= elStart && elEnd >= scrollTop) {
			if (state === false) {
				callback();
				state = true;
			}
		} else {
			if (state === true) state = false;
		}
	});
}

// gif 움직임 제어
window.addEventListener('DOMContentLoaded', function () {
	var objGif = document.querySelectorAll('.objGif');
	[].forEach.call(objGif, function (_this) {
		var lazySrc = _this.dataset.lazy;
		var lazySrc2 = _this.dataset.src;
		var src = _this.src;

		if (lazySrc) {
			src = lazySrc;
		} else if (lazySrc2) {
			src = lazySrc2;
		}
		scrollActive(_this, function () {
			if ($(_this).css("display") != "none") {
				_this.src = src;
			}
		})
	});
});

// 특정 요소 찾기
var findEl = {
	obj: null,
	arr: [],
	parent: function (el, str) {
		var tag = el.parentNode.tagName.toLowerCase();
		var cls = el.parentNode.classList;
		var id = el.parentNode.getAttribute('id');
		findEl.obj = el.parentNode;
		if (str !== tag && !cls.contains(str) && str != id) {
			if (tag != 'body') {
				findEl.parent(findEl.obj, str);
			} else {
				findEl.obj = null;
			}
		}
		return findEl.obj;
	},
	child: function (el, str) {
		findEl.arr = [];
		var nodes;
		try {
			nodes = el.childNodes;
		} catch ($error) {
			return false;
		}
		[].forEach.call(el.childNodes, function (obj) {
			if (obj.nodeType == 1) {
				var tag = obj.tagName.toLowerCase();
				var cls = obj.classList;
				var id = obj.getAttribute('id');
				if (str === tag || cls.contains(str) || str === id) {
					findEl.obj = obj;
					findEl.arr.push(obj);
				}
			}
		});
		if (findEl.arr.length > 1) {
			return findEl.arr;
		} else {
			return findEl.obj;
		}
	},
	prevNode: function (str) {
		if (str.previousSibling != null) {
			if (str.previousSibling.nodeType == 1) {
				findEl.obj = str.previousSibling;
			} else {
				findEl.prevNode(str.previousSibling);
			}
			return findEl.obj;
		} else {
			return false;
		}
	},
	nextNode: function (str) {
		if (str.nextSibling != null) {
			if (str.nextSibling.nodeType == 1) {
				findEl.obj = str.nextSibling;
			} else {
				findEl.nextNode(str.nextSibling);
			}
			return findEl.obj;
		} else {
			return false;
		}
	}
}

// 모바일 디바이스 뷰포트 변경
var viewportChange = function () {
	var pcView = 'width=802,maximum-scale=1.0';
	var normalView = 'width=device-width,initial-scale=1.0';
	var viewPort = document.querySelector('[name="viewport"]');

	function widthChk() {
		var winW = window.outerWidth;
		if(device.agent !== undefined){
			if (device.agent.indexOf('iphone') > -1 || device.agent.indexOf('ipad') > -1 || device.agent.indexOf('android') > -1) {
				if (540 < winW && winW < 1100) {
					viewPort.setAttribute('content', pcView);
				} else {
					viewPort.setAttribute('content', normalView);
				}
			}
		}
	}
	widthChk();
	window.addEventListener('resize', function () {
		if (viewPort.getAttribute('content') == pcView || viewPort.getAttribute('content') == normalView) {
			widthChk();
		}
		else {
			return false;
		}
	});
}

// 모바일 디바이스 함수실행 테스트
!function () {
	viewportChange();
}()

// gnb 4depth 상하 움직임 제어
var menuMov = {
	movLength: 10,
	init: function (el) {
		var target = el;
		if (!target.querySelector('.btnListControl')) {
			var ul = target.querySelector('ul');
			var li = ul.querySelectorAll('li');
			var per = 100 / li.length
			var mov = per * menuMov.movLength;
			var limit = 100;
			var movNum = 0;
			var btnUp, btnDown;

			var btnWrap = '';
			btnWrap += '<div class="btnListControl">';
			btnWrap += '	<button type="button" class="btnUp" disabled>up</button>';
			btnWrap += '	<button type="button" class="btnDown">down</button>';
			btnWrap += '</div>'

			function up() {
				if (100 > limit) {
					if (movNum > mov) {
						movNum -= mov;
						limit += mov;
					} else {
						limit += movNum;
						movNum -= movNum;
						btnUp.disabled = true;
					}
					ul.style.cssText = 'transform: translateY(-' + movNum + '%)';
					if (btnDown.disabled == true) btnDown.disabled = false;
				}
			}
			function down() {
				var downLimit = limit - mov;
				if (downLimit > mov) {
					movNum += mov;
					limit -= mov;
				} else {
					movNum += downLimit;
					limit -= downLimit;
					btnDown.disabled = true;
				}
				ul.style.cssText = 'transform: translateY(-' + movNum + '%)';
				if (btnUp.disabled == true) btnUp.disabled = false;
			}
			if (li.length > 10) {
				target.insertAdjacentHTML('beforeend', btnWrap);

				btnUp = target.querySelector('.btnUp');
				btnDown = target.querySelector('.btnDown');

				btnUp.addEventListener('click', up);
				btnDown.addEventListener('click', down);
			}
		}
	}
}



//gnb
var gnb = {
	html: null,
	header: null,
	wrap: null,
	dep1: null,
	dep2: null,
	allLi: null,
	btnMob: null,
	btnClose: null,
	btnBack: null,
	isOpenTopBnn : false,
	ariaSelected: 'aria-selected',
	init: function () {
		gnb.html = document.querySelector('html');
		gnb.header = document.querySelector('#header');
		gnb.wrap = document.querySelector('.new-gnb');

		if (gnb.wrap != null) {
			gnb.dep1 = gnb.wrap.querySelector('.gnb1depth');
			gnb.dep2 = gnb.wrap.querySelector('.gnb2depth');
			gnb.allLi = gnb.dep1.querySelectorAll('li');
			gnb.btnMob = document.querySelector('.main_menu');
			gnb.btnClose = gnb.wrap.querySelector('.gnb-close');
			gnb.btnBack = gnb.wrap.querySelector('.gnb-back');

			const toastPop = document.querySelector(".toast-pop");
			let toastPopHeight;
			toastPop == null ? toastPopHeight = 0 : toastPopHeight = toastPop.offsetHeight;

			gnb.addEvent();
			gnb.btnMob.addEventListener('click', function (e) {
				// 230120
				this.isOpenTopBnn = true;
				if(!toastPop == null) {
					if(toastPop.classList.contains("active")) {
						toastPop.style.zIndex = 200;
						// gnb.wrap.style.top = toastPopHeight + "px";
					}
				}
				//20230224 fnet nativegnb 호출
				if(window.secapp && $("#wrap").hasClass('fnet') === true){
					window.secapp.openCategoryList();
				}else{
					$('.new-gnb').addClass("mOpen");  // KDP-20205 모바일웹접근성
					e.stopPropagation();
					if (!gnb.html.classList.contains('gnbOpen')) {
						gnb.html.classList.add('gnbOpen');
						// 22-12-09 웹 접근성
						gnb.wrap.setAttribute('tabindex', '0');
						gnb.wrap.focus();
					}
					if ($('#gnbmask').length > 0) {
						$('#gnbmask').remove();
						$('#header').removeClass('active').find('.s-gnbSubWrap').hide().parent().find('.open').removeClass('open');
					}
				}
			});

			gnb.btnClose.addEventListener('click', function () {
				$('.new-gnb').removeClass("mOpen"); // KDP-20205 모바일웹접근성
				// 230120
				this.isOpenTopBnn = false;
				if(!toastPop == null) {
					toastPop.style.zIndex = 220;
					// gnb.wrap.style.top = 0;
				}				
				gnb.wrap.removeAttribute('tabindex');
				gnb.btnMob.focus();

				gnb.close();
			});
			gnb.btnClose.addEventListener('focusout', gnb.close);
			gnb.header.addEventListener('blur', function () {
				if ($('.outlink.clicked').length === 0 && $(":focus").parents("nav.gnb").length > 0) {
					$("#header a.logo").focus();
				}
				gnb.close();
			});

			gnb.btnBack.addEventListener('click', function () {
				var actLi = gnb.dep1.querySelectorAll('.active');

				actLi[actLi.length - 1].classList.remove('active');
				if (actLi.length == 1) this.classList.remove('show');

				if (gnb.dep1.querySelector('.rel')) {
					gnb.dep1.querySelector('.rel > ul').removeAttribute('style');
					gnb.dep1.querySelector('.rel').classList.remove('rel');
				}
			});

			gnb.header.addEventListener('mouseleave', function () {
				if (device.val == 'p') {
					gnb.close();
				}
			});
		}
	},
	close: function () { //gnb 닫기
		// 22-11-09 높이 값 초기화
		$('#header .gnb2depth').css('height', '');
		if (gnb.html.classList.contains('gnbOpen')) gnb.html.classList.remove('gnbOpen');
		if (gnb.btnBack.classList.contains('show')) gnb.btnBack.classList.remove('show');
		[].forEach.call(gnb.allLi, function (li, idx) {
			if (li.classList.contains('active')) {
				gnb.allLi[idx].classList.remove('active');
				gnb.allLi[idx].querySelector('a').setAttribute(gnb.ariaSelected, false);
			}
			if (li.parentNode.classList.contains('onDepth')) {
				setTimeout(function () { gnb.allLi[idx].parentNode.classList.remove('onDepth') }, 300);
			}
		});
		if (device.val === 'm' && gnb.dep1.querySelector('.rel')) {
			gnb.dep1.querySelector('.rel > ul').removeAttribute('style');
			gnb.dep1.querySelector('.rel').classList.remove('rel');
		}
	},
	depAct: function (el) { //gnb 메뉴 제어 공통
		if (device.isGnb === true && el.parentNode.parentNode.classList.contains('gnb1depth')) { /* 2022-05-20 */
			return false;
		} else {
			var thisClosest = findEl.parent(el, 'ul');
			var thisSibling = findEl.child(thisClosest, 'li');
			[].forEach.call(thisSibling, function (li, idx) {
				if (li.classList.contains('active')) {
					thisSibling[idx].classList.remove('active');
					thisSibling[idx].classList.remove('arrowBlind'); /* 2022-05-20 */
					if (el.getAttribute('href') == '#' || el.parentNode.classList.contains('direct')) { // 22-08-12 direct case
						li.parentNode.classList.remove('onDepth');
					} else {
						setTimeout(function () { li.parentNode.classList.remove('onDepth') }, 300);
					}
				}
			});
			if (el.getAttribute('href') == '#' || el.parentNode.classList.contains('direct')) { // 22-08-12 direct case
				el.parentNode.classList.add('active');
				el.parentNode.parentNode.classList.add('onDepth');
			}
			if (device.isGnb === true ) { /* 2022-05-20 */
				if (el.parentNode.querySelector('.gnb3depth')) {
					var dep3Ul = el.parentNode.querySelector('.gnb3depth > ul');
					var depth3Li = findEl.child(dep3Ul, 'li');
					for (var idx = 0; idx < depth3Li.length; idx++) {
						if (depth3Li[idx].classList.contains('active')) break;
						if (idx == depth3Li.length - 1 && depth3Li[0].querySelector('.gnb4depth')) {
							setTimeout(function () {
								dep3Ul.classList.add('onDepth');
								depth3Li[0].classList.add('active');
								menuMov.init(depth3Li[0].querySelector('.gnb4depth'));
							}, 300);
						}
					}
					
					// 2021-11-09 KDP-7553 gnb 높이 조정
					var dep2Wrap = el.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.gnb2depth');
					var dep2List = el.parentNode.parentNode.parentNode.querySelector('.list');
					var dep2Height = dep2List.offsetHeight + dep2List.querySelector('li').offsetHeight;
					if (dep3Ul !== null) {
						var dep3conunt = dep3Ul.childElementCount;
						var dep3Height = dep3Ul.offsetHeight + el.parentNode.parentNode.querySelector('li').offsetHeight;
						if (dep3conunt > 12) {
							dep2Wrap.style.cssText = 'height: ' + dep3Height + 'px;'
						}
						else {
							if (dep2List.childElementCount > 12) {
								dep2Wrap.style.cssText = 'height: ' + dep2Height + 'px;'
							} else {
								dep2Wrap.removeAttribute('style'); // 22-08-12 error fixed
							}
						}
					}
				}
				if (el.parentNode.querySelector('.gnb4depth')) menuMov.init(el.parentNode.querySelector('.gnb4depth'));
			}
			if (el.parentNode.parentNode.classList.contains('gnb1depth') && !gnb.btnBack.classList.contains('show')) gnb.btnBack.classList.add('show');
			if (device.val !== 'p') {
				var listNext = findEl.nextNode(thisClosest);
				if (listNext.classList.contains('gnbBanner')) thisClosest.parentNode.classList.add('rel');
				if (findEl.parent(el, 'rel')) {
					var rel = findEl.parent(el, 'rel');
					var target = rel.querySelector('ul');
					var thisInner = el.parentNode.querySelector('ul');
					target.style.height = thisInner.clientHeight + 'px';
				}
			}
		}
		return false;
	},
	dep3Act: function (el) { // 3depth 활성화 제어
		if (el != null) {
			var thisDep3Li = el.querySelectorAll('li');
			var thisDep4;
			if (thisDep3Li.length > 0) {
				thisDep4 = thisDep3Li[0].querySelector('.gnb4depth');
			}
			if (thisDep4 != null) {
				thisDep3Li[0].parentNode.classList.add('onDepth');
				setTimeout(function () {
					thisDep3Li[0].classList.add('active');
					menuMov.init(thisDep3Li[0].querySelector('.gnb4depth'));
				}, 300);
			}
		}
	},
	dep2Act: function (el) { // 2depth 활성화 제어
		if (el != null) {
			var thisDep2Li = el.querySelectorAll('li');
			var thisDep3 = thisDep2Li[0].querySelector('.gnb3depth');
			thisDep2Li[0].classList.add('active');

			if (thisDep3) thisDep2Li[0].parentNode.classList.add('onDepth');
			gnb.dep3Act(thisDep3);

		}
	},
	dep1Act: function (el) { // 1depth 활성화 제어
		if (el.parentNode.parentNode.classList.contains('gnb1depth')) {
			if (!gnb.wrap.classList.contains('gnbOpen') && device.val !== 'm') {
				gnb.html.classList.add('gnbOpen');
				if ($('#gnbmask').length > 0) $('#gnbmask').trigger('mouseenter focus');

				// 2021-11-09 KDP-7553 gnb 높이 조정
				var dep2Wrap = el.parentNode.querySelector('.gnb2depth');
				var dep2List = el.parentNode.querySelector('.gnb2depth > .inner > .list');
				var dep2conunt = dep2List.childElementCount;
				var dep2Height = dep2List.offsetHeight + el.parentNode.querySelector('.gnb2depth > .inner > .list > li').offsetHeight;
				if (dep2conunt > 12) {
					dep2Wrap.style.cssText = 'height: ' + dep2Height + 'px;'
				} else {
					gnb.dep2.removeAttribute('style');
				}
			}
			if (!el.parentNode.classList.contains('active')) {
				var thisDep2 = el.parentNode.querySelector('.gnb2depth > .inner > .list');
				[].forEach.call(gnb.allLi, function (li, idx) {
					if (li.classList.contains('active')) {
						li.classList.remove('active');
						li.querySelector('a').setAttribute(gnb.ariaSelected, false);
					}
				});
				el.parentNode.classList.add('active');
				el.setAttribute(gnb.ariaSelected, true);
				if (thisDep2.querySelectorAll('li')[0].querySelector('a').getAttribute('href') == '#') gnb.dep2Act(thisDep2);
			}
		}
	},
	linkFocus: function (el) { // 메뉴 포커스 이벤트 활성화
		var ul = findEl.parent(el, 'ul')
		var li = findEl.parent(el, 'li');
		var sibling = findEl.child(ul, 'li');
		var gp = findEl.parent(li, 'li');
		[].forEach.call(sibling, function (list, idx) {
			if (list.classList.contains('active')) {
				sibling[idx].classList.remove('active');
				list.parentNode.classList.remove('onDepth');
			}
		});
		if (gp && !gp.classList.contains('active')) {
			gp.classList.add('active');
		}
	},
	addEvent: function () { // 메뉴 이벤트 설정
		var eventClick = false;

		[].forEach.call(gnb.allLi, function (list) {
			var link = list.querySelector('a');

			link.addEventListener('focus', function () {
				var _this = this;
				if (eventClick == false) {
					if (_this.classList.contains('outlink') && _this.classList.contains('clicked')) {
						var $this = $(_this);
						var triggerEvent = (device.isGnb === true ) ? 'mouseenter focus' : 'click'; /* 2022-05-20 */
						if (device.val === 'm') {
							if (!gnb.html.classList.contains('gnbOpen')) gnb.html.classList.add('gnbOpen');
							if ($('#gnbmask').length > 0) {
								$('#gnbmask').remove();
								$('#header').removeClass('active').find('.s-gnbSubWrap').hide().parent().find('.open').removeClass('open');
							}
						}
						if ($this.parents('.gnb2depth')) {
							$this.parents('.gnb2depth').prev().trigger(triggerEvent);
						}
						if ($this.parents('.gnb3depth')) {
							$this.parents('.gnb3depth').prev().trigger(triggerEvent);
						}
						setTimeout(function () {
							$this.trigger(triggerEvent);
							$(".outlink.clicked").removeClass("clicked");
						}, 300);

					} else if (!_this.classList.contains('outlink')) {
						if (_this.getAttribute('href') == '#') {
							if (device.isGnb === true ) { /* 2022-05-20 */
								if (_this.parentNode.parentNode.classList.contains('gnb1depth')) {
									gnb.dep1Act(_this);
								} else {
									gnb.depAct(_this);
									if (_this.parentNode.classList.contains('active')) gnb.linkFocus(_this);
								}
							}
						}
						if (!gnb.html.classList.contains('gnbOpen')) {
							gnb.html.classList.add('gnbOpen');
						}
						gnb.linkFocus(_this);
					}
				} else {
					eventClick = false;
				}
			});
			$(link).on('mousedown', function () {
				eventClick = true;
			});
			$(link).on('mouseenter focus', function () {
				var _this = $(this)[0];
				if (device.isGnb === true ) { /* 2022-05-20 */
					if (_this.getAttribute('href') == '#') {
						(_this.parentNode.parentNode.classList.contains('gnb1depth')) ? gnb.dep1Act(_this) : gnb.depAct(_this);
					} else {
						if (_this.parentNode.parentNode.classList.contains('gnb1depth')) {
							gnb.close();
						} else {
							gnb.depAct(_this);
						}
					}
				}
			});
			$(link).on('click', function (e) {
				var _this = $(this)[0];
				if (_this.classList.contains('outlink')) {
					_this.classList.add('clicked');
				};
				if (_this.getAttribute('href') == '#') {
					e.preventDefault();
					if (device.isGnb === true ) { /* 2022-05-20 */
						gnb.dep1Act(_this);
					} else {
						gnb.depAct(_this);
					}
				}
			});
		});

		window.addEventListener('resize', function () { //리사이즈시 pc가 아닐 경우 4depth 설정 된 상하 제어 삭제
			if (device.isGnb=== false ) { /* 2022-05-20 */
				var listControl = gnb.html.querySelectorAll('.btnListControl');
				if (listControl) {
					setTimeout(function () {
						[].forEach.call(listControl, function (el) {
							el.parentNode.querySelector('ul').removeAttribute('style');
							el.parentNode.removeChild(el.parentNode.querySelector('.btnListControl'));
						});
					}, 100);
				}
			}
		});
	}
}

//리사이즈시 PF LIST header 색상 제어
function mobileHeaderType() {
	var header = document.querySelector('#header');
	var className = null;
	if (window.innerWidth < 800) {
		if (header && header.classList.contains('type-wht')) {
			className = 'type-wht';
			header.classList.remove('type-wht');
		}
	} else {
		if (className != null && device.val != 'm') {
			header.classList.add('type-wht');
		}
	}
	window.addEventListener('resize', function () {
		if (window.innerWidth < 801) {
			if (header && header.classList.contains('type-wht')) {
				className = 'type-wht';
				header.classList.remove('type-wht');
			}
		} else {
			if (className != null && device.val != 'm') {
				header.classList.add('type-wht');
			}
		}
	});
}

// // KDP-5292,KDP-5596 스크롤 위치 확인 후 native gnb 표시
var nativeGnb = function () {
	$(window).scroll(function () {
		var scrollValue = $(window).scrollTop();
		if (scrollValue < 50) {
			window.secapp.showAndHideGnb('VISIBLE');
		}
		else {
			window.secapp.showAndHideGnb('GONE');
		}
	});
}

window.addEventListener('DOMContentLoaded', function () {
	gnb.init();
	mobileHeaderType();
	if (device.isApp == true && !document.querySelector('#wrap').classList.contains('useWebGnb')) {
		nativeGnb();
		
		// 22-08-05 FNET BESPOKE sNav
		var _Bespk = $('#bespoke-make');
		var _sNav = $('.ref-bespoke-familynet');
		if (_Bespk.length > 0) {
			_sNav.addClass('native');
		}
	}
});

// 모바일에서 스크롤 lock 설정
var scrollLock = function (state) {
	var html = document.querySelector('html');
	if(device.agent !== undefined){
		if (device.agent.indexOf('iphone') > -1 || device.agent.indexOf('ipad') > -1 || device.agent.indexOf('android') > -1) {
			(state == 'lock') ? html.classList.add('scrollLock') : html.classList.remove('scrollLock');
		}
	}
}
$.datepicker.setDefaults({
	prevText: '이전 달',
	nextText: '다음 달',
	monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	showMonthAfterYear: true,
	yearSuffix: '년',
	dateFormat: "yy-mm-dd"
});
function calendar_picker() {//달력
	$(".inp-calendar:not(.exp-calendar)").datepicker({
		changeMonth: true,
		changeYear: true,
		//showOn: "button",
		//buttonText: "날짜조회"
	});
};

/* Skip */
function skip_navigator() {
	$("#skip_content").children("a").focus(function (e) {
		e.preventDefault();
		$("#skip_content").children("a").removeClass("on");
		$(this).addClass("on");
	});
	$("#skip_content").focusout(function (e) {
		e.preventDefault();
		$("#skip_content").children("a").removeClass("on");
	});
}

$(function () {
	$(window).resize(function () {
		// 로그인 박스 높이값에 따른 포지션 변경
		var $loginFront = $(".login-front");
		if ($loginFront.length > 0 && !$loginFront.hasClass("subpage")) {
			var contHeight = $loginFront.find(".wrap-login-content").outerHeight();
			var winHeight = $(window).innerHeight();
			if (contHeight >= winHeight) {
				$loginFront.css("position", "relative");
			} else {
				$loginFront.css("position", "fixed");
			}
		}
		var winw = $(window).width();

		// Datepicker Date 타이입 제외
		/**
		if(typeof _orderPaymentPage == 'undefined'
			&& typeof _orderDeliveryDetailPage == 'undefined'){
			if(winw < 800 && device.agent.indexOf('iphone') > -1 || device.agent.indexOf('ipad') > -1 || device.agent.indexOf('android') > -1){
				$(".inp-calendar").attr("type", "date");
				$(".ui-datepicker").css({"visibility":"hidden"});
			} else {
				$(".inp-calendar").attr("type", "text");
			}
		}
		*/


		// 이미지크기 조정 [영역에 채우고, 넘치는 부분은 Crop, Center/Middle 위치]
		$('.prop-list .photo > .thumb > img').each(function () {
			var prop_li = $(this).parent().parent().parent().parent(),
				prop_li_item = $(this).parent().parent().parent().not('.prop-txt');

			var before_width = prop_li.innerWidth(), //너비 값
				max_width = Math.ceil(before_width);

			var before_height = max_width * 0.67, // 비율에 맞춘 높이 값
				max_height = Math.floor(before_height);

			prop_li_item.width(max_width);
			prop_li_item.height(max_height);

			var img_width = $(this).width(),
				img_height = $(this).height();

			var before_ratio = 1.5,
				real_ratio = img_width / img_height;

			if (real_ratio > before_ratio) {
				$(this).css({
					'height': max_height,
					'position': 'absolute',
					'top': 0,
					'left': '50%',
					'transform': 'translateX(-50%)'
				});
			} else {
				$(this).css({
					'width': max_width,
					'position': 'absolute',
					'top': '50%',
					'left': 0,
					'transform': 'translateY(-50%)'
				});
			}
		});
	}).resize();
});

// Toggle checkbox
// 0625 script 수정
function togglechange(e) {
	var $e = $(e);
	var ariaHidden = 'aria-hidden';
	if ($e.length == 0) {
		return false;
	}
	// 200728 수정
	$e.find('input[type="checkbox"]').on('change', function () {
		if ($(this).is(':checked')) {
			$(this).siblings(".labeltxt.off").removeAttr(ariaHidden);
			$(this).siblings(".labeltxt.on").attr(ariaHidden, "true");
		} else {
			$(this).siblings(".labeltxt.on").removeAttr(ariaHidden);
			$(this).siblings(".labeltxt.off").attr(ariaHidden, "true");
		}
	});

	return false;
}

// input spinner
function spinnerchange(e) {
	var $e = $(e),
		amountValue;
	if ($e.length == 0) {
		return false;
	}

	$e.each(function () {
		var disable = $(this).find(".number").attr("disabled");
		if (disable === "disabled") {
			$(this).addClass("disabled");
		} else {
			$(this).removeClass("disabled");
		}
		$(this).find(".count").click(function (e) {
			e.preventDefault();
			var count = $(this).siblings(".number").val();
			if (disable != "disabled") {
				if ($(this).hasClass("count-miner")) {
					if (parseInt($(this).siblings(".number").val()) > 1) {
						count--;
						$(this).siblings(".number").val(count)
						$(this).parent().attr("data-count", $(this).siblings(".number").val());
					}
				} else {
					// 장바구니 한도 체크위해 필요
					if (!$(this).hasClass("cart-buy-limit-except")) {
						if (parseInt($(this).siblings(".number").val()) < 99) {
							count++;
							$(this).siblings(".number").val(count)
							$(this).parent().attr("data-count", $(this).siblings(".number").val());
						}
					}
				}
			}
		});
	});
	return false;
}

// bookmark Btn
function bookmarkBtn(e) {
	var $e = $(e);
	if ($e.length == 0) {
		return false;
	}

	$e.each(function () {
		$(this).click(function (e) {
			e.preventDefault();
			if ($(this).hasClass("on")) {
				$(this).removeClass("on");
				$('.bookmarkOff').show();
				$('.bookmarkOn').hide();
				setTimeout((function () {
					$('.bookmarkOff').fadeOut(300);
				}), 5000);
			} else {
				$(this).addClass("on");
				$('.bookmarkOn').show();
				$('.bookmarkOff').hide();
				setTimeout((function () {
					$('.bookmarkOn').fadeOut(300);
				}), 5000);
			}
		});
	});

	$(document).click(function (e) {
		if ($e.has(e.target).length === 0) {
			$('.bookmarkOn').fadeOut(300);
			$('.bookmarkOff').fadeOut(300);
		}
	});
	return false;
}
// Toggle checkbox - 간편로그인
// function togglechange_simplelogin(e){
//     var $e = $(e);
//     if($e.length == 0){
//         return false;
//     }
//     $e.find('input[type="checkbox"]').on('change',function(){
//         var chk = $(this).prop('checked');
//         if(chk==true){
//             $(this).parent().addClass('toggle-checked');
//             $(this).attr('checked' , true);
//             $(this).parent().find('.labeltxt').text('해제하기');
//         }else{
//             $(this).parent().removeClass('toggle-checked');
//             $(this).attr('checked' , false);
//             $(this).parent().find('.labeltxt').text('연결하기');
//         }
//     });
// }

// tooltip left top
function tooltipLeftTop(e) {
	var $e = $(e);

	if ($e.length == 0) {
		return false;
	}
	if (event) event.stopPropagation();

	$e.each(function () {
		$(this).click(function () {
			var top = $(this).position().top;
			var left = $(this).position().left;

			$(this).next().addClass('show').css({ left: left - 40, top: top + 30 });
			$(this).next().attr('tabindex', '0').focus();
		});
		$(this).next().find('.tolltip-close').click(function () {
			$(this).parent('.tooltip-layer').removeClass('show');
			$(this).parent('.tooltip-layer').prev('.btn-tooltop02').focus();
		});
	});
	return false;
}
// tooltip center top
var ariaBox;
function tooltipCenterTop(e, t, w, b) {
	e = $(e);
	t = $("." + t);
	var widths = w
		, aria = 'aria-selected'
		;

	if (event) event.stopPropagation();

	$(".tooltip-layer").fadeOut(200);

	if (ariaBox !== undefined) {
		ariaBox.attr(aria, false);
	}

	e.attr(aria, true);
	ariaBox = e;

	$(window).resize(function () {
		var winw = $(window).width();
		var top = $('#header').height();
		if (winw > 800) {
			var left;
			var leftover = e.offset().left - widths / 2 - e.innerWidth() / 2;
			var rightover = e.offset().left + widths;
			top = e.offset().top + e.height() - top;

			if (leftover < 24) { // 팝업이 왼쪽 최소 여백 24px를 이하로 넘어갈 때
				left = widths / 2 + 24;
			} else if (rightover > winw) { // 팝업이 오른쪽 화면을 넘어갈 때
				left = winw - widths / 2 - 24;
			} else {
				left = e.offset().left + e.innerWidth() / 2;
			}
			t.css({
				maxWidth: widths + "px",
				left: left,
				right: "auto",
				top: top + 17,
				transform: 'translateX(-50%)'
			});
		} else {
			top = e.offset().top + e.height() - top;
			if (b == 'fixed') {
				t.addClass('fixed');
			} else {
				t.removeClass('fixed');
			}
			t.css({
				maxWidth: 100 + "%",
				left: 12 + "px",
				right: 12 + "px",
				top: top + 17,
				transform: 'none'
			});
		}
	}).resize();
	t.fadeIn(200);
	t.focus();
	t.find(".share-tooltip-box li:first-child a").focus(); /* 2020-12-31 공유하기 링크 포커스 추가 */
	t.find(".btn-tooltip-close").on("click", function () {
		ariaBox.attr(aria, false);
		$(this).parent().fadeOut(200);
		if (!$(this).closest('.tooltip-layer').data('inner-slick-link')) { /* 2020-11-17 : 슬라이드 내 툴팁 닫기 시 포커스 삭제 */
			if ($("#commonAlert").is(":visible")) {

			} else {
				e.focus();
			}
		}
	});

	$('#pd-tooltip-close').on('keydown', function (e) {
		if (!event.shiftKey && (event.keyCode || event.which) === 9) {
			event.preventDefault();
			$('.pd-copylink').focus();
		}
	});
	return false;
}
window.addEventListener('click', function () {
	var tooltip = document.querySelectorAll('.tooltip-layer');
	[].forEach.call(tooltip, function (el) {
		if (el.style.display == 'block') {
			var close = el.querySelector('.btn-tooltip-close');
			close.click();
		}
	});
});

// slide Toggle
function slideToggle(e) {
	var $e = $(e);
	if ($e.length == 0) {
		return false;
	}
	$e.click(function () {
		$(this).parents('.droptoggle').find(".dropList").slideUp('fast');
		$(this).parents('.droptoggle').find(".dropButton").removeClass('open');
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown('fast');
			$(this).addClass('open');
		}
	});//toggle
	return false;
}

// s: 20210628 사은품 케이스 추가
function freebiesToggle(e) {
	var $e = $(e);
	if ($e.length == 0) {
		return false;
	}
	$e.click(function () {
		$(this).parent('.dropDown-content').find('._add').slideUp('fast');
		$(this).parent('.dropDown-content').find('.dropButton.frbs').removeClass('open');
		if (!$(this).next().children().find('._add').is(":visible")) {
			$(this).next().children().find('._add').slideDown('fast');
			$(this).addClass('open');
		}
	});
	return false;
}// e: 20210628 사은품 케이스 추가

// 푸터 사이트맵 리스트
var footerDropApp = {
	mobileFunc: function () {  // mobile
		var $ftlist = $(".sitemap-links");
		var $ftlink = $ftlist.find(">ul>li>ul");

		$ftlist.find("li").removeClass("active");
		// $ftlink.hide(); /*220929*/

		$(document).on("click.footevent", ".sitemap-links h3", function (e) {
			e.stopImmediatePropagation();

			/*s : 220929 */
			// if ($(this).parent().hasClass("active")) {
			// 	$(this).parent().removeClass("active");
			// 	$(this).siblings("ul").hide();
			// } else {
			// 	$(this).parent().addClass("active");
			// 	$(this).siblings("ul").show();
			// }

			if ($(this).parent().hasClass("active") && $(this).parent().hasClass("productLine1")) {
				$(this).parent().removeClass("active");
				$(this).siblings("ul").hide();
				$('.productLine2 ul').hide()
			} else if($(this).parent().hasClass("active")){
				$(this).parent().removeClass("active");
				$(this).siblings("ul").hide();
			}else {
				if($(this).parent().hasClass("productLine1")){
					$(this).parent().addClass("active");
					$(this).siblings("ul").show();
					$('.productLine2 ul').show();
				}else{
					$(this).parent().addClass("active");
					$(this).siblings("ul").show();
				}
			}
			/*e : 220929 */
		});
	},
	desktopFunc: function () { // desktop
		var $ftlist = $(".sitemap-links");
		var $ftlink = $ftlist.find(">ul>li>ul");

		$(document).off("click.footevent");
		$ftlist.find("li").removeClass("active");
		$ftlink.show();
	},
	init: function () {
		var _this = this;
		if ($(window).outerWidth() < 800) {
			_this.mobileFunc();
		} else {
			_this.desktopFunc();
		}
	}
};
$(function () {
	// 푸터 사이트맵 리스트
	var windowWidthFooter = $(window).outerWidth();
	footerDropApp.init();

	$(window).resize(function () {
		var newWinw = $(window).outerWidth();
		if (newWinw !== windowWidthFooter) {
			windowWidthFooter = newWinw;
			if (newWinw < 800) {
				footerDropApp.mobileFunc();
			} else {
				footerDropApp.desktopFunc();
			}
		}
	}).resize();
});

function tabContent(e) {
	var $e = $(e);
	var ariaSelected = 'aria-selected';
	var $tabCont = $('.tab-content');
	if ($e.length == 0 || $tabCont.length == 0) {/* 2107012 */
		return false;
	}
	$e.find("a").click(function (e) {
		e.preventDefault();
		var id = $(this).attr("aria-controls");
		$(this).closest('.tab-style-btn').find("a").attr(ariaSelected, "false");
		$(this).attr(ariaSelected, "true");
		$(this).closest('.tab-style-btn').parent().find("> .tab-content").hide();
		$("#" + id).show();
	});
	return false;
}

var scrollBarWidth; // 스크롤 값 전역변수
$(document).ready(function () {
	skip_navigator();
	calendar_picker();
	//screen_handle();

	//정적->동적 이벤트 리스너 변경
	$(document).on("click", ".droptoggle .dropOption .dropButton", function () {
		$(this).parents('.droptoggle').find(".dropList").slideUp('fast');
		$(this).parents('.droptoggle').find(".dropButton").removeClass('open');
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown('fast');
			$(this).addClass('open');
		}
		$(this).off();
	})

	togglechange('.toggleCheck');
	//slideToggle('.droptoggle .dropOption .dropButton');
	tooltipLeftTop('.btn-tooltop02');
	tabContent('.tab-style-btn');
	spinnerchange('.spinner-box');
	bookmarkBtn('.btn-good, .sns-heart');

});

// 띠배너 slick 초기화
function strBnrInit(){
	/* s : 221028 띠배너 base.js로 이동 */
	/* s:  221025 추가 */
	$(".string-banner-wrap .slide-box").on('init',function(event, slick){
		if(slick.$slides[0].dataset.theme == 'white'){
			$(this).parent().addClass('theme-white');
		}else{
			$(this).parent().addClass('theme-black');
		}
	});
	/* e:  221025 추가 */
	
	/* s : 20200903 string banner */
	if ($(".string-banner-wrap")) {
		var stringWrap = $(".string-banner-wrap"),
			stringItem = $(".string-banner-item"),
			stringSlide = stringWrap.find(".slide-box");
		if ( stringItem.length > 1 ) {
			stringWrap.addClass("is-slide");
			var stringBanner = stringSlide.slick({
				autoplay: true,
				touchMove: false,
				dots: false,
				arrows: true, //221026 수정 
				useCSS: false,
				easing: 'easeInOutQuad',
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 4000,
				//vertical: true, //220914 수정
				lazyLoad: 'ondemand',
				draggable: false, //221026 추가 
				adaptiveHeight: true,  //221026 추가 
				swipe: false, //221026 추가 
			});

			/* 220920 값에 따라 x버튼 흰/검 변경 */
			stringBanner.on('afterChange',function(event, slick, currentSlide){
				//console.log($(slick.$slider.parent()))
				var bannerItem = $(slick.$slides[currentSlide])[0];
				var bannerItemWrap = $(slick.$slider.parent());

				bannerItemWrap.removeClass('theme-black theme-white');
				if(bannerItem.dataset.theme == 'white'){
					bannerItemWrap.addClass('theme-white');
				}else{
					bannerItemWrap.addClass('theme-black');
				}
			});
		}
		stringWrap.off("click.bannerClose");
		stringWrap.on("click.bannerClose",".btn-close", function (){
			stringWrap.slideUp();
		});
	}
	/* e : 20200903 string banner */	
}

// 모바일 띠배너 말줄임처리
function mobStrBnrAbbr(){
	
	if($(".string-banner-wrap").length > 0){
		if($(window).width() <= 800){
			const boxTit = Array.from(document.querySelectorAll('.string-banner-wrap .slide-box .string-banner-item .txt')); 
			const box = [];

			const textSlice = function(tits, lengths){
				tits.forEach((el, idx) => {
					const tix = el.textContent;
					const memberPart = tix.slice(0, lengths);
					const t = memberPart.concat('...');
					box.push(t);

					if(tix.length >= lengths){
						tits[idx].innerHTML = box[idx];
					}
				});
			};
			textSlice(boxTit, 58);
		}
	}
}
/* s : 221028 띠배너 base.js로 이동 */

// checkbox allcheck
var allCheckFunc = {
	check: function (name) {
		$("[data-chkgrp-name=" + name + "]:not(:disabled)").prop("checked", true);
	},
	uncheck: function (name) {
		$("[data-chkgrp-name=" + name + "]").prop("checked", false);
	}
};

$(function () {
	$("[data-allchk-name=allCheck]").click(function () {
		var children = $(this).attr("data-children-name");
		if ($(this).prop("checked")) {
			allCheckFunc.check(children);
		} else {
			allCheckFunc.uncheck(children);
		}
	});
	$(":checkbox:not([data-allchk-name=allCheck]):not(:disabled)").each(function () {
		$(this).click(function () {
			var name = $(this).attr("data-chkgrp-name");
			var allcount = 0;
			var checked = 0;
			$("[data-chkgrp-name=" + name + "]").each(function () {
				{
					allcount++;
					if ($(this).prop("checked")) {
						checked++;
					}
				}
			});
			if (allcount != checked) {
				if ($("[data-children-name=" + name + "]").length != 0) {
					$("[data-children-name=" + name + "]").prop("checked", false);
				}
			} else {
				$("[data-children-name=" + name + "]").prop("checked", true);
			}
		});
	});
});

// Accessible layer popup - 강제 포커싱 처리
function accessibilityFocus() {
	$(document).on("keydown", "[data-focus-prev]", "[data-focus-next]", function (e) {
		var next = $(e.target).attr("data-focus-next"),
			prev = $(e.target).attr("data-focus-prev"),
			target = next || prev || false;
		if (!target || e.keyCode != 9) return;

		if ((!e.shiftKey && !!next) || (!e.shiftKey && !!prev)) {
			setTimeout(function () {
				$("[data-focus=" + target + "]").focus();
			}, 1)
		}
	});
}
function popCloseFocus() {
	var next = $(event.target).attr("data-focus-next");
	$("[data-focus=" + next + "]").focus();
}
// function layerOpt(target, type) {
// 	(type === 'open') ? target.wrap('<div class="layerPopWrap"></div>') : target.unwrap();
// }

var LAYERZINDEX = 300; // 200729 레이어팝업 z-index 초기값
var targetBtn = null;

// Accessible layer popup
function layerPopFunc(id) {
	var closeBtn = null;
	var ariaHidden = "aria-hidden";
	if (id) {
		var wrap = $("#" + id);
		closeBtn = wrap.find(".pop-close");

		open(id);

		if (event.type == "click") {
			targetBtn = event.srcElement;
			if (targetBtn.tagName != "BUTTON" || targetBtn.tagName != "A") {
				targetBtn = $(targetBtn).closest("button, a");
			}
		}

		closeBtn.off().on("click", function (e) {
			e.preventDefault();
			close(id);
		});
	} else {
		var openBtn = "[data-popup-target]";
		closeBtn = ".pop-close";

		$(document)
			.on("click", openBtn, function (e) {
				e.preventDefault();
				$(e.target).addClass("clicked");
				open(getTarget(e.target));
			})
			.on("click", closeBtn, function (e) {
				e.preventDefault();
				close($(this).data("activeTarget"));

				// KDP-5596 2021-08-23 삼성앱에서 팝업 닫기 클릭시
				scrollLock("unlock");
				if (
					device.isApp == true &&
					!document.querySelector("#wrap").classList.contains("useWebGnb")
				) {
					var scrollValue = $(window).scrollTop();
					if (scrollValue < 50) {
						window.secapp.showAndHideGnb("VISIBLE");
					} else {
						window.secapp.showAndHideGnb("GONE");
					}
				}
			});
	}
	// .on("click", "#mask", function(){
	//     close($(this).data("activeTarget"));
	// });

	function getTarget(t) {
		if ($(t).attr("data-popup-target")) {
			// 클릭한 엘리먼트가 button일 경우
			return $(t).attr("data-popup-target");
		} else {
			// 클릭한 엘리먼트가 a일 경우
			return $(t).closest("a").attr("data-popup-target");
		}
	}
	// .on("click", "#mask", function(){
	//     close($(this).data("activeTarget"));
	// });

	function open(t) {
		var showTarget;
		id
			? (showTarget = $("#" + id))
			: (showTarget = $("[data-popup-layer=" + t + "]"));

		// layerOpt(showTarget,'open');
		if ($(".layer-pop").is(":visible")) {
			LAYERZINDEX++; // 200729 팝업 두 개 이상 띄울 경우 z-index ++
		} else {
			LAYERZINDEX = 300; // 200729 팝업 두 개 이상 띄울 경우 z-index ++
		}
		showTarget
			.removeAttr("style")
			.addClass("active")
			.css("z-index", LAYERZINDEX)
			.attr(ariaHidden, false)
			.attr("data-zindex", LAYERZINDEX)
			.focus(); // 200729 z-index 값 data attr에 저장
		showTarget.find(".layer-content").scrollTop(0);
		showTarget.find(".pop-close").data("activeTarget", t);

		// KDP-5292 2021-08-23 삼성앱에서 팝업 최상단으로 유지
		// if (window.innerWidth <= 767 && device.isApp == true && showTarget.hasClass('layer-normal')) {
		// 	showTarget.css('top', device.appHgt + 'px');
		// }

		// KDP-5596 2021-08-23 앱에서 팝업 띄울시 gnb 표시해제
		if (
			device.isApp == true &&
			!document.querySelector("#wrap").classList.contains("useWebGnb")
		) {
			scrollLock("lock");
			window.secapp.showAndHideGnb("GONE"); // native gnb 숨김
		}

		// 딤드팝업 마스크 생성 및 활성화  // 200729
		if (!showTarget.hasClass("nomask") && t !== "latestItemLayer") {
			var zidx = parseInt($("#" + t).attr("data-zindex")) - 1;
			if ($("#mask[data-mask-target='" + t + "']").length === 0) {
				$("body").append(
					"<div id='mask' data-mask-target='" +
						t +
						"' style='z-index:" +
						zidx +
						"'></div>"
				);
				$("#mask").fadeIn().data("activeTarget", t);
			}
			scrollLock("lock");
		}
		if (t == "latestItemLayer") {
			$("#latestItemLayer").css("z-index", "300");
		}

		// 모아보기 slick reset 용
		if (showTarget.is("#gatherview, #layerSlick, #popupProdCode")) {
			$(".mediaslide, .modelslide, .filter-slick, .visualslide").slick(
				"setPosition"
			);
			$(".mediaslide-navi, .modelslide-navi, .visualslide-navi").slick(
				"setPosition"
			);
		}

		/* 패밀리넷 PF 팝업 예외처리 : transform 삭제에 따른 위치(마진) 값 세팅 : 211013 계산식 오류
		if (t === 'fnetPfLayerPopup') {
			var $obj = $('#' + t),
				$objWidth = $obj.outerWidth(),
				$objHeight = $obj.outerHeight();
			$obj.css({ 'margin-left': Math.round(-($objWidth / 2)) + 'px', 'margin-top': Math.round(-($objHeight / 2)) + 'px' });
			$('html').css('overflow-y', 'hidden');
		}
		*/
		
	}

	function close(t) {
		var activeTarget;

		id
			? (activeTarget = $("#" + id))
			: (activeTarget = $("[data-popup-layer=" + t + "]"));

		// layerOpt(activeTarget,'close');

		if (!activeTarget.hasClass("active")) {
			return;
		}
		activeTarget
			.removeAttr("style")
			.removeClass("active")
			.removeAttr("data-zindex")
			.attr(ariaHidden, true); // 200729
		scrollLock("unlock");
		// if(!$(".layer-pop").not('#latestItemLayer').is(":visible")) $("body").css("overflow",""); // 200729 팝업 모두 닫힌 후에 overflow hidden 해제

		$("#mask[data-mask-target='" + t + "']")
			.fadeOut("fast")
			.remove(); // 200729

		if ($("#" + t).data("inner-slick-link")) {
			/* 2020-09-23 : 슬라이드 내 팝업 클릭 후 닫기 이벤트 발생 시 오류 예외 처리 */
			$("[data-popup-target=" + t + "]")
				.closest(".slick-slide")
				.focus();
		} else {
			// 22-08-10 동영상 팝업 전체화면 후 오류 수정 (Tab 오류 있음)
			$(".slick-slide:not(.slick-cloned) [data-popup-target=" + t + "].clicked")
				.focus()
				.removeClass("clicked");
			//$("[data-popup-target=" + t + "].clicked").focus().removeClass('clicked');
		}

		LAYERZINDEX--; // 200729 레이어팝업 z-index값 초기화

		if (targetBtn != null) targetBtn.focus();

		/* 패밀리넷 PF 팝업 예외처리 : 211013
		if (t === 'fnetPfLayerPopup') {
			$('html').css('overflow-y', 'auto');
		}
		*/
	}
};

// 플로팅 메뉴 최근 본 제품 레이어
function showLatestItem(self, obj) {
	if (device.val != 'm') {
		var $self = $(self);
		var layer = $('#' + obj);
		var btnClose = layer.find('.pop-close');
		layer.attr('tabindex', '0').css('display', 'block');
		layer.focus(); //접근성
		layer.addClass('active');

		btnClose.click(function () {
			layer.attr('tabindex', '-1');
			$self.focus();
			layer.removeClass('active');
			scrollLock('unlock');
		});
	} else {
		layerPopFunc(obj);
	}
}

// 플로팅 메뉴 최근 본 제품 닫기 버튼 초점
$("#latestItemLayer").find('.pop-close').on('keydown', function () {
	$("#latestItemLayer").attr('tabindex', '-1');
	$("#btn-rcntgoods-floating").focus();
});

var activeDropWrap = null; //현재 활성화 된 셀렉트 박스
$(function () {
	layerPopFunc();
	accessibilityFocus();

	// 레이어 팝업 커스텀스크롤 200709
	// $(window).resize(function() {
	//     var winw = $(window).width();
	//     if($(".layer-pop").length > 0){
	//         if(winw > 801) {
	//             $(".layer-pop .layer-content").mCustomScrollbar({
	//                 theme:"minimal-dark"
	//             });
	//         } else {
	//             $(".layer-pop .layer-content").mCustomScrollbar('destroy');
	//         }
	//     }
	// }).resize();

	// Accessible Dropdown Menu
	var DROPLIMIT = 5; // 200729 droplist 최대 길이값
	// Accessible Dropdown Menu - handle direct BUTTON click
	$(document).on("click", ".droplist-button", function (e) { // 200727 수정
		e.preventDefault();
		//var $dropWrap = $(this).parent();
		var $dropWrap = $(this).parent(".wrap-droplist"); //TOBE 20210530
		var $dropList = $(this).next();
		var dropListBtm;
		var docHeight = $(document).innerHeight();

		if (!$dropWrap.hasClass("nodrop")) {          // 클래스 nodrop이 없는 엘리먼트에만 이벤트 적용
			if (!$dropWrap.hasClass("active")) {
				$('.wrap-droplist').removeClass("active").find('.droplist-button').attr("aria-expanded", "false");
				$dropWrap.addClass("active");

				// 230412 KDP-28110 정렬필터개선건
				// var listh = $dropList.find("li").height() * DROPLIMIT;
				// if (!$dropWrap.hasClass("custom-radio")) {
				// 	$dropList.css("max-height", listh);
				// }

				//210523 웹접근성
				// $dropList.find(">li").each(function(){
				//     $(this).attr("tabindex", 0);
				// });

				$dropList.find(">li").each(function () {
					//$(this).filter(".focused").focus(); To be 주석처리
					/* Tobe S */
					if ($(this).parents('ul').attr('role') == 'listbox') {
						if ($(this).hasClass('focused')) {
							$(this).attr({
								'tabindex': '0'
							});
						} else {
							$(this).attr({
								'aria-selected': 'false',
								'tabindex': '0'
							});
						}
					}
					/* Tobe E */
				});

				/* Tobe S */
				if ($(this).next('ul').attr('role') == 'listbox') {
					$dropList.find("li:first-child").attr({
						'aria-selected': 'true',
						'tabindex': '1'
					});
				}
				/* Tobe E */

				dropListBtm = $dropList.outerHeight() + $dropList.offset().top;

				if (docHeight < dropListBtm) {
					$dropWrap.addClass("bottom");
				}
				$(this).attr("aria-expanded", "true");
				//$dropList.focus();
				$dropList.find("[aria-selected='true']").focus(); // 200722
				// Tobe if(activeDropWrap != null) activeDropWrap.removeClass("active").removeClass("bottom");
				/* Tobe S */
				// Tobe $dropWrap.find('li').each(function(i){
				// Tobe     if(! $(this).hasClass('focused')){
				// Tobe        $(this).attr('aria-selected','false');
				// Tobe    }
				// Tobe });
				/* Tobe E */
				// Tobe activeDropWrap = $dropWrap;
			} else {
				$dropWrap.removeClass("active").removeClass("bottom");
				$(this).removeAttr("aria-expanded").focus();
				$(this).attr("aria-expanded", "false");
				activeDropWrap = null;
			}
		}
	});
	/* Tobe S */
	$(document).on("focus", ".droplist>li", function (e) {
		$('.droplist li').each(function (i) {
			if (!$(this).hasClass('focused')) {
				$(this).attr('aria-selected', 'false');
			}
		});
		$(this).attr('aria-selected', 'true');
	});
	/* Tobe E */

	$(document).on("focus", ".droplist-button", function (e) {
		e.preventDefault();
		var $dropBtn = $(this).parent().parent()
			, drpBTN = $('.droplist-button')
			, drpLI = $('.droplist>li')
			;
		$dropBtn.addClass("active");
		if (e.target == drpBTN || e.target == drpLI) {
			drpLI[0].focus();
		}
	});

	// Accessible Dropdown Menu - handle direct LABEL clicks
	$(document).on("click", ".droplist>li", function (e) {
		var wrapDroplist = '.wrap-droplist';
		var ariaSelected = 'aria-selected';
		if (!$(this).hasClass('disabled')) {
			if ($(this).attr("role") === "option") {
				if (!$(this).hasClass("focused")) {
					$(this).parent().children().removeAttr(ariaSelected).removeClass("focused");
					$(this).attr(ariaSelected, "selected").addClass("focused").focus();
				}
				if ($(this).children().length > 0 && $(this).parents(wrapDroplist).hasClass("included")) {
					var $clone = $(this).children().clone();
					$(this).parent().prev().html($clone);
				} else {
					var $text = $(this).text();
					$(this).parent().prev().html($text);
				}
				$(this).parent().attr("aria-activedescendant", $(this).attr("id"));
				$(this).parents(wrapDroplist).removeClass("active").removeClass("bottom")
				$(this).parent().prev().removeAttr("aria-expanded").addClass("selected").focus();
				activeDropWrap = null;
			} else if ($(this).attr("role") === "noption") {
				activeDropWrap = null;
			} else if ($(this).attr("data-roll") === "option") {
				if (!$(this).hasClass("focused")) {
					$(this).parent().children().removeAttr(ariaSelected).removeClass("focused");
					$(this).attr(ariaSelected, "selected").addClass("focused").focus();
				}
				if ($(this).children().length > 0 && $(this).parents(wrapDroplist).hasClass("included")) {
					var $clone = $(this).children().clone();
					$(this).parent().prev().html($clone);
				} else {
					var $text = $(this).text();
					$(this).parent().prev().html($text);
				}
				$(this).parent().attr("aria-activedescendant", $(this).attr("id"));
				$(this).parents(wrapDroplist).removeClass("active").removeClass("bottom")
				$(this).parent().prev().removeAttr("aria-expanded").addClass("selected").focus();
				activeDropWrap = null;
			}
		}
	});
	// Accessible Dropdown Menu - handle KEYPRESS events
	$(document).on("keydown", function (e) {
		var $target = $(e.target);
		var keyCode = (window.event) ? e.which : e.keyCode;
		var wrapDroplist = '.wrap-droplist';
		switch (keyCode) {
			case 9: // tab
				if ($target.attr("role") === "option") {
					e.preventDefault();
					var targetParent = $target.parents(wrapDroplist);
					if (targetParent.hasClass("active")) {
						var current = targetParent.attr("id");
						var currentBtn = targetParent.find(".droplist-button").attr("id");
						$("#" + current).removeClass("active");
						setTimeout(function () {
							$("#" + currentBtn).focus();
						}, 1)
					}
				}
				break;
			case 13:  // return
				if ($target.attr("role") === "option") {
					e.preventDefault();
					if ($target.attr("aria-disabled") != "true") {
						setTimeout(function () {
							$target.click();
						}, 1);
					}
				}
				//210114 접근성 추가
				if ($target.filter('.selected').length > 0) {
					setTimeout(function () {
						$('.droplist').find('.droplist-item.focused').focus();
					}, 1);
				}
				break;
			case 38: // up
				if ($target.attr("role") === "option") {
					e.preventDefault();
					if ($target.index() > 0) {
						$target.prev().focus();
					}
				}
				break;
			case 40: // down
				if ($target.attr("role") === "option") {
					e.preventDefault();
					var len = $target.parent().children().length - 1;
					if ($target.index() < len) {
						$target.next().focus();
					}
				}
				break;
		}
	});
	// Accessible Dropdown Menu - handle random body clicks off-$target
	$("body").on("click", function (e) {
		var $target = $(e.target);
		var isSelect = $target.parents(".wrap-droplist").length > 0;
		var exceptTarget = $target.hasClass("tooltip-layer") || $target.parents(".tooltip-layer").length > 0;
		var count = 0;
		var wrapDroplist = '.wrap-droplist';
		if ($(wrapDroplist).length > 0) {
			$(wrapDroplist).each(function () {
				if ($(this).hasClass("active")) {
					count++;
				}
			});
		}
		if (!exceptTarget) {
			if (!isSelect) {
				if ($(wrapDroplist).hasClass("active")) {
					$(".wrap-droplist.active").find(".droplist-button").click();
				}
			} else {
				if (count > 1) {
					$(".wrap-droplist.active").find(".droplist-button").click();
					$target.click();
				}
			}
		}
	});
});


// 윈도우 resize 체크 script
/*
$(window).resize(function(){
	var winw = $(window).width();

	if(winw > 800){
		웹 사이즈에서 작동
	} else {
		테블릿 및 모바일 사이즈에서 작동
	}
}).resize();
*/

// Left LNB Menu 200706
function navLnbMyMemb() {
	var winw = $(window).width();
	var $list = $(".nav-lnb-rounded .list-menu").find(".list");
	if ($list.length > 0) {
		$list.find(".menu > a").click(function (e) {
			e.preventDefault();
			if (winw < 801 && !$(this).parent().hasClass("active")) {
				var calcleft = $(this).parent().offset().left + $list.scrollLeft() + $(this).parent().width() / 2 - $list.width() / 2; // 200701
				$list.animate({ scrollLeft: calcleft }, 300); // 200701
			}
			if (!$(this).parent().hasClass("active")) {
				$list.find(".menu").removeClass("active");
				$list.find(".menu").find("ul").slideUp();
				$(this).parent().addClass("active");
				$(this).next().slideDown();
			}
		});
		$(window).resize(function () {
			var winw = $(window).width();
			if (winw > 800) {
				var eleft = $(".nav-lnb-rounded").offset().left * -1;
				$(".nav-lnb-rounded").find(".bg").css("left", eleft);
			}
		}).resize();
	}
}


// header right 영역
$(function () {
	var sGnbSubWrap = '.s-gnbSubWrap';
	$(".gnbMenu > ul > li > a.link-login").stop().on("mouseenter focus", function () {
		gnbMenuSubEv($(this));
	});
	$(".gnbMenu > ul > li > a.link-cart").on("click", function () {
		gnbMenuSubEv($(this));
	});
	$(".gnbMenu > ul > li > a.link-cart").on("keydown", function () {
		gnbMenuSubEv($(this));
	});
	function gnbMenuSubEv(t) {
		var __this = t
			, thisId = $(__this).attr("aria-controls")
			, aniCheck = $("#" + thisId).is(':animated')
			;
		if (!aniCheck) {
			if (!$(__this).hasClass('link-m-nav')) {
				var ariaSelected = "aria-selected"
				if (document.querySelector('html').classList.contains('gnbOpen')) document.querySelector('html').classList.remove('gnbOpen');  /* hover 시 메뉴 위에 뜨게 하려면 여기 주석 처리 */
				if (!$(__this).is('.open')) {
					$(__this).next('div').focus();
					if (!$("body").children().is("#gnbmask")) $("body").append("<div id='gnbmask'></div>");
					$("#gnbmask").fadeIn();
					$(__this).closest('#header').addClass('active').find('a').removeClass('open');
					$(__this).addClass('open');
					$(__this).closest('ul').find("a").attr(ariaSelected, "false");
					// $(__this).attr(ariaSelected, "true");

					$(__this).closest('#header').find(sGnbSubWrap).slideUp(200);
					$("#" + thisId).slideDown(300);// 210126 수정
				}
				$(__this).parent().find('.s-gnb-depth-2 li').removeClass("on").find('button').removeClass('selected');
				$(__this).parent().find(".s-gnb-depth-2 li").eq(0).addClass('on').find('button').addClass('selected');
			}
		}
	}
	$(".lnb-close").on("click", function () {
		$(".gnb").removeClass('mo-Gnb');
		$("#gnbmask").fadeOut();
		$("body").removeClass("fixed-scroll");
		$('#header').find('a').removeClass('open');
	});
	$(".lnb-back").on("click", function () {
		// $(this).closest('ul').find("a").attr("aria-selected", "false");
		$(sGnbSubWrap).slideUp(200, "easeOutCubic");
		setTimeout((function () {
			$(".lnb-back").parent().parent().parent().find('a').removeClass('open');
		}), 600);
	});

	function gnbRightUp() {
		$("#gnbmask, .lnb-close").fadeOut(300, function () {
			$(this).remove()
		});
		$('.gnbMenu > ul > li').focus();
		$(".gnbMenu > ul > li > a").attr("aria-selected", "false");
		$(".gnbMenu > ul > li > a").removeClass('open');
		$(sGnbSubWrap).slideUp(400, "easeOutCubic");
		$(".s-gnb-depth-2 li").removeClass('on').find('button').removeClass('selected');
		$('#header').removeClass('active');
		$("#gnbmask, .lnb-close").off()
	}

	$('.loginMenu, .header-right li').on('mouseleave', function () { //211217
		if ($('.link-login.open').length > 0) {
			gnbRightUp();
		}
	});

	$('.loginMenu dd:last-child a, .loginMenu dt:last-child a').blur(function (e) { //20220621
		gnbRightUp();
		e.preventDefault();
	});

	$('.gnb1depth>li:last-child>a').keyup(function (e) {
		if (e.shiftKey && e.keyCode == 9) {
			gnbRightUp();
		}
	});

	$(document).on("click", "#gnbmask", ".lnb-close", function () {
		if ($('.link-cart.open').length > 0) {
			gnbRightUp();
		}
	});

	$(".s-gnbSubWrap li").on("mouseenter focusin", function (e) {
		$(this).addClass("on").siblings().removeClass("on");
	});
	// gnb 캐스케이딩 구체화 - 0626
	$(".s-gnbSubWrap li > button").on("mouseenter focusin", function () {

		// if($('.s-gnb-depth-2').hasClass('.type-new-line')) $('.s-gnb-depth-2').removeClass('.type-new-line');
		// if($(this).parent().hasClass('new-item')) $('.s-gnb-depth-2').addClass('type-new-line');

		$(this).closest(sGnbSubWrap).find('button').removeClass("selected");
		$(this).addClass("selected");
	});

	$(window).resize(function () {
		var winw = $(window).width();

		if (winw < 1100) {
			$(".gnb").removeClass('mo-Gnb');
			$("#gnbmask").fadeOut();
			$("body").removeClass("fixed-scroll");
			$(this).closest('#header').find(sGnbSubWrap).slideUp(200);

			$(document).on("mouseenter", "#gnbmask", function () {
				if ($('.link-cart.open').length == 0) {
					$(this).fadeOut(300, function () {
						$(this).remove();
					});
					$(".gnb").removeClass('mo-Gnb');
					$("body").removeClass("fixed-scroll");
					$(this).closest('#header').find(sGnbSubWrap).slideUp(200);
				}
			});
			$(".lnb-close").on("click", function () {
				$(".gnb").removeClass('mo-Gnb');
				$("#mobmask").fadeOut();
				$("body").removeClass("fixed-scroll");
				$('#header').find('a').removeClass('open');
				$(this).closest('#header').find(sGnbSubWrap).slideUp(200);
			});
			$('.s-gnb-depth-2 li').removeClass("on").find('button').removeClass('selected');

			$('#header').find(sGnbSubWrap).hide();
			$('#header').find('a').removeClass('open');

		} else {
			$(".gnb").removeClass('moGnb');
			$("body").removeClass("fixed-scroll");
			$("#mobmask").fadeOut();
		}

		// gnb 추천 제품
		if (winw <= 1280) { /* 2022-05-20 */
			$('.gnb3depth').each(function () {

				if ($(this).hasClass('new-prd-list')) {
					var recPcTargets = ['.main-prd', '.sub-prd.num-1', '.sub-prd.num-2', '.sub-prd.num-3', '.sub-prd.num-4', '.sub-prd.num-5', '.sub-prd.num-6'];
					var recMoTagsClass = ['sub-prd main', 'sub-prd n-1', 'sub-prd n-2', 'sub-prd n-3', 'sub-prd n-4', 'sub-prd n-5', 'sub-prd n-6'];

					// t와 m에서 tag 교체
					$('.new-prd-list .prd-list-wrap').replaceWith(function () {
						return $('<ul/>', {
							html: this.innerHTML
						}).addClass('prd-list-wrap');
					});

					for (var pc_n = 0; pc_n < recPcTargets.length; pc_n++) {
						$('div' + recPcTargets[pc_n]).replaceWith(function () {
							return $('<li/>', {
								html: this.innerHTML
							}).addClass(recMoTagsClass[pc_n]);
						});
					}

					$('.txt-grp').each(function () {
						$(this).find('.tit').addClass('mo-color');
						$(this).find('.desc').addClass('mo-color');
					});
				}
			});

		} else {
			$('.gnb3depth').each(function () {
				if ($(this).hasClass('new-prd-list')) {
					var recMoTargets = ['.sub-prd.main', '.sub-prd.n-1', '.sub-prd.n-2', '.sub-prd.n-3', '.sub-prd.n-4', '.sub-prd.n-5', '.sub-prd.n-6'];
					var recPcTagsClass = ['main-prd', 'sub-prd num-1', 'sub-prd num-2', 'sub-prd num-3', 'sub-prd num-4', 'sub-prd num-5', 'sub-prd num-6'];

					// p에서 tag 교체
					$('.new-prd-list .prd-list-wrap').replaceWith(function () {
						return $('<div/>', {
							html: this.innerHTML
						}).addClass('prd-list-wrap');
					});

					for (var mo_n = 0; mo_n < recMoTargets.length; mo_n++) {
						$('li' + recMoTargets[mo_n]).replaceWith(function () {
							return $('<div/>', {
								html: this.innerHTML
							}).addClass(recPcTagsClass[mo_n]);
						});
					}
				}

				$('.gnb2depth .inner .list > li').each(function () {
					if ($(this).find('.flag-new').length > 0) {
						$(this).addClass('new');
					}

					$(this).find('.tit').removeClass('mo-color');
					$(this).find('.desc').removeClass('mo-color');
				});
			});
		}

		// t와 m에서 gnb 2depth 이하에서 숨기기
		if (device.isGnb===false || device.val == 'm') {  /* 2022-05-20 */
			$('.gnb1depth > li > a').each(function () {
				$(this).click(function () {
					$('.new-gnb').find('.mob-onlyMenu').hide();
				});
			});

			$('.gnb-back').click(function () {
				if (!$('.new-gnb').find('.gnb1depth > li').hasClass('active')) {
					$('.new-gnb').find('.mob-onlyMenu').show();
				}
			});

			//몰별 고정 메뉴 노출되지 않는 현상으로 닫기 클릭시 고정메뉴 표시 조치(2021.03.19)
			$('.gnb-close').click(function () {
				if (!$('.new-gnb').find('.gnb1depth > li').hasClass('active')) {
					$('.new-gnb').find('.mob-onlyMenu').show();
				}
			});
		}

	}).resize();

	navLnbMyMemb();

	// 패밀리넷 최상단 포인트 영역
	$('.family-point-btn').off('click');
	$('.family-point-btn').on('click', function () {
		$(this).toggleClass("is-open");
		$(".family-point-wrap").slideToggle(0);
	});

});

//tabstyle2 white line
function tabstyle2Bar(e) {
	var $e = $(e);
	$('.tab-point-content.tabstyle02 li').first().addClass('on');
	$e.click(function () {
		if (!$(this).hasClass("on")) {
			$('.tab-point-content.tabstyle02 li').removeClass("on");
			$(this).addClass("on");
		}
	});
}
$(window).on('load', function () {
	tabstyle2Bar('.tab-point-content.tabstyle02 li');
});

// 영상 관련 스크립트
var vodPlayer = {
	ytApi: null,
	obj: {},
	accountId: '923136708001',
	playerId: 'BJmCHrmIb',
	apiSet: function () {
		var tag = document.createElement('script');
		var firstScriptTag = document.getElementsByTagName('script')[0];
		tag.src = "https://www.youtube.com/iframe_api";
		vodPlayer.ytApi = tag;
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	},
	create: function (vodId, tagId, vodType, auto, loadCallBack, loopTF) {
		var autoStr = String(auto);
		var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
		var winH = window.innerHeight + scrollTop;
		vodPlayer.obj[tagId] = {}
		loopTF = (loopTF) ? 1 : 0;
		if (vodType == 'video') {
			vodPlayer.vid(vodId, tagId, autoStr, loadCallBack, {
				'winH': winH,
				'scrollTop': scrollTop
			}, loopTF);
		} else if (vodType == 'youtube') {
			vodPlayer.yt(vodId, tagId, autoStr, loadCallBack, {
				'winH': winH,
				'scrollTop': scrollTop
			}, loopTF);
		}
		if (vodType == 'bc') {
			vodPlayer.bc(vodId, tagId, autoStr, loadCallBack, {
				'winH': winH,
				'scrollTop': scrollTop
			}, loopTF);
		}
		vodPlayer.obj[tagId]['sort'] = vodType;
	},
	vid: function (vodId, tagId, auto, loadCallBack, doc, loopTF) {
		var vodWrap = document.querySelector('#' + tagId);
		var mobState = false;
		var mobSrc = null;
		var vodSrc = vodId;
		if (device.val == 'm' && vodWrap.dataset.mSrc) {
			mobSrc = vodWrap.dataset.mSrc;
			vodSrc = vodWrap.dataset.mSrc;
			mobState = true;
		}

		var vod = document.createElement('video');
		vod.setAttribute('id', tagId);
		vod.setAttribute('playsinline', '');
		if (loopTF) {
			vod.setAttribute('loop', '');
		}
		var source = '<source src="' + vodSrc + '" type="video/mp4">';
		vod.innerHTML = source;

		vod.setAttribute('class', vodWrap.className);
		vodWrap.parentNode.insertBefore(vod, vodWrap);
		vodWrap.parentNode.removeChild(vodWrap);

		vodPlayer.obj[tagId]['vod'] = vod;

		window.addEventListener('resize', function () {
			if (mobState == false) {
				if (mobSrc != null && device.val == 'm') {
					vod.setAttribute('src', vodWrap.dataset.mSrc);
					mobState = true;
				}
			} else {
				if (device.val != 'm') {
					vod.setAttribute('src', vodId);
					mobState = false;
				}
			}
		});
		vod.addEventListener('play', function () {
			vodPlayer.obj[tagId]['state'] = 'played';
		});
		vod.addEventListener('pause', function () {
			if (this.currentTime == 0 || this.currentTime == this.duration) {
				vodPlayer.obj[tagId]['state'] = 'ready';
			} else {
				vodPlayer.obj[tagId]['state'] = 'pause';
			}
		});
		vodPlayer.vidReady(vod, tagId, auto, doc, loadCallBack);
	},
	vidReady: function (vod, tagId, auto, doc, loadCallBack) {
		var readyEl = null;
		if (device.os == "ios") {
			canplayProc();
		} else {
			vod.addEventListener("canplay", canplayProc);
		}
		function canplayProc() {
			vodPlayer.obj[tagId]["state"] = "ready";
			if (typeof loadCallBack != "undefined" && loadCallBack)
				if (typeof loadCallBack == "function")
					loadCallBack();
				else if (loadCallBack)
					eval(loadCallBack);
			if (auto == "true") {
				vod.muted = true;
				readyEl = $("#" + tagId);
				if (readyEl.offset().top < doc.winH && doc.scrollTop < readyEl.offset().top + readyEl.outerHeight())
					if (readyEl.closest(".carousel-container").length == 0)
						vod.play();
				vodPlayer.scrollControl(readyEl, tagId)
			} else
				vod.setAttribute("controls", "")
		}
	},
	yt: function (vodId, tagId, auto, loadCallBack, doc, loopTF) {
		var playerOpt = (loopTF) ? { 'showinfo': 0, 'rel': 0, 'playsinline': 1, 'loop': loopTF, 'playlist': vodId } : { 'showinfo': 0, 'rel': 0, 'playsinline': 1, 'loop': loopTF };
		if (vodPlayer.ytApi == null) vodPlayer.apiSet('youtube');
		document.querySelector('#' + tagId).parentNode.classList.add('ifrm');
		document.querySelector('#' + tagId).parentNode.classList.add('youtube');
		var readyEl = null;
		var option = {
			width: '100%',
			height: '100%',
			videoId: vodId,
			playerVars: playerOpt,
			events: {
				'onReady': function (event) {
					vodPlayer.obj[tagId]['state'] = 'ready';
					readyEl = $('#' + tagId);
					if (auto == 'true') {
						if (device.val !== 'p') event.target.mute();
						if (readyEl.offset().top < doc.winH && doc.scrollTop < readyEl.offset().top + readyEl.outerHeight()) {
							if (readyEl.closest('.carousel-container').length == 0) {
								setTimeout(function () {
									event.target.playVideo();
								}, 100);
							}
						}
						vodPlayer.scrollControl(readyEl, tagId);
					}
					if (typeof loadCallBack != 'undefined' && loadCallBack) {
						if (typeof loadCallBack == 'function') {
							loadCallBack();
						} else {
							if (loadCallBack) { eval(loadCallBack); }
						}
					}
					// readyEl[0].insertAdjacentHTML('beforebegin', '<p class="playTime">'+event.target.getDuration()+'</p>');
				},
				'onStateChange': function (event) {
					if (event.data === 1) {
						vodPlayer.obj[tagId]['state'] = 'played';
					} else if (event.data === 2) {
						vodPlayer.obj[tagId]['state'] = 'pause';
					} else if (event.data === 0 || event.data == -1 || event.data == 5) {
						vodPlayer.obj[tagId]['state'] = 'ready';
					}
				}
			}
		}

		try {
			vodPlayer.obj[tagId]['vod'] = new YT.Player(tagId, option);
			vodPlayer.obj[tagId]['sort'] = 'youtube';
		} catch ($error) {
			setTimeout(function () { vodPlayer.create(vodId, tagId, 'youtube', auto, loadCallBack, loopTF) }, 100);
		}
	},
	bc: function (vodId, tagId, auto, loadCallBack, doc, loopTF) {
		document.querySelector('#' + tagId).parentNode.classList.add('brightcove');
		if (!loopTF) loopTF = false;
		var vodWrap = document.querySelector('#' + tagId);
		var vodParent = vodWrap.parentNode;
		var readyEl = null;
		var tag = document.createElement('script');
		tag.src = "https://players.brightcove.net/" + vodPlayer.accountId + "/" + vodPlayer.playerId + "_default/index.min.js";
		var playerHTML =
			'<video id="' + tagId + '" data-video-id="' + vodId +
			'"  data-account="' +
			vodPlayer.accountId +
			'" data-player="' +
			vodPlayer.playerId;
		if (loopTF)
			playerHTML = playerHTML + '" loop="' + loopTF;
		playerHTML = playerHTML + '" data-embed="default" class="video-js" controls></video>';

		vodParent.insertAdjacentHTML('afterbegin', playerHTML);
		vodParent.insertBefore(tag, vodWrap);
		vodParent.removeChild(vodWrap);

		tag.onload = callback;

		function callback() {
			readyEl = $('#' + tagId);

			vodPlayer.obj[tagId]['vod'] = bc(tagId);

			vodPlayer.obj[tagId].vod.on("canplay", function () {
				var _this = this;
				vodPlayer.obj[tagId]['state'] = 'ready';
				if (auto == 'true') {
					if (device.val !== 'p') _this.muted(true);
					if (readyEl.offset().top < doc.winH && doc.scrollTop < readyEl.offset().top + readyEl.outerHeight()) {
						if (readyEl.closest('.carousel-container').length == 0) {
							setTimeout(function () {
								_this.play()
							}, 100);
						}
					}
					vodPlayer.scrollControl(readyEl, tagId);
				}
				if (typeof loadCallBack != 'undefined' && loadCallBack) {
					if (typeof loadCallBack == 'function') {
						loadCallBack();
					} else {
						if (loadCallBack) { eval(loadCallBack); }
					}
				}
				// readyEl[0].insertAdjacentHTML('beforebegin', '<p class="playTime">'+_this.cache_.duration+'</p>');
			});

			vodPlayer.obj[tagId].vod.on('play', function () {
				vodPlayer.obj[tagId]['state'] = 'played';
			});
			vodPlayer.obj[tagId].vod.on('pause', function () {
				if (this.cache_.currentTime == 0 || this.cache_.currentTime == this.cache_.duration) {
					vodPlayer.obj[tagId]['state'] = 'ready';
				} else {
					vodPlayer.obj[tagId]['state'] = 'pause';
				}
			});
		}
	},
	scrollControl: function (el, tagId) { // 화면 내에 있을때만 플레이 되도록 제어
		window.addEventListener('scroll', function () {
			var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
			var winH = window.innerHeight + scrollTop;
			if (el.offset().top < winH && scrollTop < el.offset().top + el.outerHeight()) {
				if (vodPlayer.obj[tagId].state !== 'played') {
					if (el.closest('.carousel-container').length == 0) vodPlayer.play(tagId);
				}
			} else {
				if (vodPlayer.obj[tagId].state === 'played') vodPlayer.stop(tagId);
			}
		});
	},
	play: function (vodId) {
		if (vodPlayer.obj[vodId] != undefined) {
			if (vodPlayer.obj[vodId]['sort'] == 'video' || vodPlayer.obj[vodId]['sort'] == 'bc') {
				if (vodPlayer.obj[vodId]['state'] == 'ready') {
					setTimeout(function () { vodPlayer.obj[vodId]['vod'].play() }, 100);
				}
			} else if (vodPlayer.obj[vodId]['sort'] == 'youtube') {
				if (vodPlayer.obj[vodId]['state'] == 'ready') {
					setTimeout(function () { vodPlayer.obj[vodId]['vod'].playVideo() }, 100);
				}
			}
		}
	},
	pause: function (vodId) {
		if (vodPlayer.obj[vodId] != undefined) {
			if (vodPlayer.obj[vodId]['sort'] == 'video' || vodPlayer.obj[vodId]['sort'] == 'bc') {
				vodPlayer.obj[vodId]['vod'].pause();
			} else if (vodPlayer.obj[vodId]['sort'] == 'youtube') {
				vodPlayer.obj[vodId]['vod'].pauseVideo();
			}
		}
	},
	stop: function (vodId) {
		if (vodPlayer.obj[vodId] != undefined) {
			if (vodPlayer.obj[vodId]['sort'] == 'video') {
				vodPlayer.obj[vodId]['vod'].pause();
				vodPlayer.obj[vodId]['vod'].currentTime = 0;
			} else if (vodPlayer.obj[vodId]['sort'] == 'youtube') {
				vodPlayer.obj[vodId]['vod'].stopVideo();
			} else if (vodPlayer.obj[vodId]['sort'] == 'bc') {
				vodPlayer.obj[vodId]['vod'].currentTime(0);
				vodPlayer.obj[vodId]['vod'].pause();
			}
		}
	},
	setAccount: function (accountId, playerId) {
		vodPlayer.accountId = accountId;
		vodPlayer.playerId = playerId;
	}
}

// 캐러설 컨테이너 동영상 있을 경우 제어
var ifVodControl = function (el, type) {
	var videoWrap = el.querySelector('.video');
	if (videoWrap) {
		var video = el.querySelector('.video > video') || el.querySelector('iframe') || el.querySelector('.video-js');
		if (video) {
			var vodId = video.getAttribute('id');
			if (type == 'play') {
				if (vodPlayer.obj[vodId].state != 'played') vodPlayer.play(vodId);
			} else if (type == 'pause') {
				if (vodPlayer.obj[vodId].state == 'played') vodPlayer.pause(vodId);
			} else {
				if (vodPlayer.obj[vodId].state == 'played') vodPlayer.stop(vodId);
			}
		}
	}
	return false;
}
// 캐러설 컨테이너 슬라이더 실행
var vodCompoSlick = function (slideId, type, auto, ctarrow, ctindi) {
	var controlBlk = 'control-blk';
	var controlWht = 'control-wht';
	var arrowBlk = 'arrow-blk';
	var arrowWht = 'arrow-wht';
	var ctarrow = ctarrow;
	var ctindi = ctindi;
	if (ctarrow === undefined) ctarrow = true;
	if (ctindi === undefined) ctindi = true;
	if (!ctindi) slideId.parent().find('.slider-controls').addClass('hide');
	var slideOpt = {
		infinite: true,
		fade: true,// 22-09-05 슬라이드 방식 변경
		dots: ctindi,
		arrows: ctarrow,
		useCSS: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'easeInOutQuad',
		touchMove: false,
		appendDots: slideId.parent().find(".wrap-controls"),
		customPaging: function (slider, index) {
			var title = $(slider.$slides[index]).attr('data-ind-title');
			return "<button type='button'><span>" + title + "</span></button>";
		},
	}
	if (type == 'type2') {
		slideOpt['centerPadding'] = "24px";
		slideOpt['centerMode'] = true;
	}
	if (auto > 0) {
		slideOpt['autoplaySpeed'] = auto;
	}
	slideId.on({
		beforeChange: function (event, slick, currentSlide) {
			var videoWrap = $(slick.$slides[currentSlide])[0];
			ifVodControl(videoWrap, 'stop');
		},
		afterChange: function (event, slick, currentSlide) {
			var videoWrap = $(slick.$slides[currentSlide])[0];
			var slideWrap = slideId.parent();
			if (videoWrap.querySelector('.video') !== null) {
				if (videoWrap.querySelector('.video').dataset.auto !== 'false') {
					ifVodControl(videoWrap, 'play');
				}
			}
			slideWrap.removeClass(controlBlk).removeClass(controlWht).removeClass(arrowBlk).removeClass(arrowWht);
			if (videoWrap.dataset.control == 'wht') {
				slideWrap.addClass(controlWht);
			} else {
				slideWrap.addClass(controlBlk);
			}
			if (videoWrap.dataset.arrow == 'wht') {
				slideWrap.addClass(arrowWht);
			} else {
				slideWrap.addClass(arrowBlk);
			}
		}
	});
	slideId.slick(slideOpt);
}

//캐러셀 컨테이너 동영상 자동 실행 제어
var vodCompAuto = function (v) {
	var $this = v.$this;
	var vod = v.vod;
	var slideId = v.slideId;
	var slide0 = v.slide0;
	var auto = v.auto;
	var vodSrc = v.vodSrc;
	var tagId = v.tagId;
	var autoPlay = v.autoPlay;
	var autoPause = v.autoPause;

	function loadFunc() {
		if (auto > 0) autoPlay();
	}
	var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
	var winH = window.innerHeight + scrollTop;
	if (vod.dataset.auto == 'true') $this.classList.add('auto');
	if (slideId.offset().top < winH && scrollTop < slideId.offset().top + slideId.outerHeight()) {
		var visualWrap = slide0.querySelector('.visual-area');
		var videoWrap = slide0.querySelector('.video');

		if (videoWrap && videoWrap.dataset.auto == 'true' && visualWrap.classList.contains('auto') && videoWrap == v.vod) {
			setTimeout(function () {
				autoPause()
			}, 100);
			vodPlayer.create(vodSrc, tagId, vod.dataset.type, vod.dataset.auto, loadFunc, vod.dataset.loop);
		} else {
			vodPlayer.create(vodSrc, tagId, vod.dataset.type, vod.dataset.auto, undefined, vod.dataset.loop);
		}
	} else {
		vodPlayer.create(vodSrc, tagId, vod.dataset.type, vod.dataset.auto, undefined, vod.dataset.loop);
	}
}

//캐러셀 컨테이너 화면내에서만 자동 슬라이드 제어
var vodScreenAuto = function (v) {
	var slide = v.slide;
	var slideId = v.slideId;
	var auto = v.auto;
	var autoPlay = v.autoPlay;
	var autoPause = v.autoPause;
	var state = v.state;
	var controlWrap = v.controlWrap;

	var screenAuto = function () {
		var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
		var winH = window.innerHeight + scrollTop;
		if (slideId.offset().top < winH && scrollTop < slideId.offset().top + slideId.outerHeight()) {
			var activeSlide = slide[0].querySelector('.slick-active');
			var visualWrap = activeSlide.querySelector('.visual-area');
			var videoWrap = activeSlide.querySelector('.video');
			if (videoWrap && videoWrap.dataset.auto == 'true' && visualWrap.classList.contains('auto')) {
				setTimeout(function () {
					ifVodControl(activeSlide, 'play');
				}, 1000)
			}
			// KDP-20205 웹접근성 15p : 접근성 이슈로 주석처리
			// if (auto > 0) {
			// 	if (state == false) {
			// 		controlWrap.classList.add('ready');
			// 		autoPlay();
			// 		controlWrap.classList.remove('paused');
			// 		state = true;
			// 	}
			// }
		} else {
			if (state == true) {
				autoPause();
				controlWrap.classList.add('paused');
				state = false;
			}
		}
	}
	setTimeout(function () { screenAuto() }, 500);

	window.addEventListener('scroll', function () {
		screenAuto();
	});
}

// video 타입 동영상 일때 모바일 일 경우 경로 설정 제어
var vodCompoResize = function (v) {
	var vod = v.vod;
	var vodId = v.vodId;
	var mobState = v.mobState;
	var mobSrc = v.mobSrc;

	window.addEventListener('resize', function () {
		var target = vod.querySelector('.target');
		if (target && target.tagName == 'VIDEO') {
			var vid = vod.querySelector('video');
			if (mobState == false) {
				if (mobSrc != null && device.val == 'm') {
					vid.setAttribute('src', mobSrc);
					mobState = true;
				}
			} else {
				if (device.val != 'm') {
					vid.setAttribute('src', vodId);
					mobState = false;
				}
			}
		}
	});
}

//캐러셀 컨테이너 슬라이드 실행
var vodCompoSlide = function (id, type, auto, ctarrow, ctindi) {
	var slideId = $(id);
	var state;

	slideId.on('init', function (event, slick) {
		var slide = $(this);
		var allVodWrap = slide[0].querySelectorAll('.visual-area');
		var controlWrap = slide[0].parentNode.querySelector('.slider-controls');
		var btnSlideAuto = controlWrap.querySelector('.slide-play');
		var btnSlidePause = controlWrap.querySelector('.slide-pause');

		state = false;
		slideId.parent().removeClass('control-wht control-blk arrow-wht arrow-blk');
		if (slick.$slides[0].dataset.control == 'wht') {
			slideId.parent().addClass('control-wht');
		} else {
			slideId.parent().addClass('control-blk');
		}
		if (slick.$slides[0].dataset.arrow == 'wht') {
			slideId.parent().addClass('arrow-wht');
		} else {
			slideId.parent().addClass('arrow-blk');
		}
		var autoPlay = function () {
			slide.slick("slickPlay");
			controlWrap.classList.remove('paused');
			btnSlidePause.focus(); // KDP-20205 웹접근성 15p
		};
		var autoPause = function () {
			var activeSlide = slide[0].querySelector('.slick-active');
			ifVodControl(activeSlide, 'pause');
			slide.slick("slickPause");
			controlWrap.classList.add('paused');
			btnSlideAuto.focus(); // KDP-20205 웹접근성 15p
		};
		[].forEach.call(allVodWrap, function ($this, idx) {
			var vod = $this.querySelector('.video');
			var btnPlay = $this.parentNode.querySelector('.btn-video-play');
			if (vod) {
				var btnClose = $this.querySelector('.btn-video-close');
				var vodWrap = $this.querySelector('.target');
				var tagId = vod.dataset.id + idx;
				var vodId = vod.dataset.src;
				vodWrap.setAttribute('id', tagId);

				var mobState = false;
				var mobSrc = vod.dataset.mSrc;
				var vodSrc = vodId;
				if (device.val == 'm' && vod.dataset.mSrc) {
					vodSrc = vod.dataset.mSrc;
					mobState = true;
				}

				vodCompoResize({
					'vod': vod,
					'vodId': vodId,
					'mobState': mobState,
					'mobSrc': mobSrc
				});

				vodCompAuto({
					'$this': $this,
					'vod': vod,
					'slideId': slideId,
					'slide0': slick.$slides[0],
					'auto': auto,
					'vodSrc': vodSrc,
					'tagId': tagId,
					'autoPlay': autoPlay,
					'autoPause': autoPause
				});

				if (btnClose) {
					btnClose.addEventListener('click', function () {
						$this.classList.remove('show');
						slide.slick("slickNext");
						slide.slick("slickPlay");
						controlWrap.classList.remove('paused');
						clearTimeout(vodPlayCallTime);
						vodPlayer.stop(tagId);
					});
					btnPlay.addEventListener('click', function () {
						$this.classList.add('show');
						slide.slick("slickPause");
						controlWrap.classList.add('paused');
						vodPlayCall();
					});
					var vodPlayCallTime;
					var vodPlayCall = function () {
						if (vodPlayer.obj[tagId].state === undefined) {
							vodPlayCallTime = setTimeout(function () {
								vodPlayCall(tagId);
							}, 500);
						} else {
							vodPlayer.play(tagId);
						}
					}
				}
			}
		});


		btnSlideAuto.addEventListener('click', autoPlay);
		btnSlidePause.addEventListener('click', autoPause);

		vodScreenAuto({
			'slide': slide,
			'slideId': slideId,
			'auto': auto,
			'autoPlay': autoPlay,
			'autoPause': autoPause,
			'state': state,
			'controlWrap': controlWrap
		});

	});
	vodCompoSlick(slideId, type, auto, ctarrow, ctindi)
}

// 플로팅 메뉴
var floatSticky = function () {
	var wrap = document.querySelector('.floating-sticky');
	var movWrap = wrap.querySelector('.inner');
	var btnFloating = wrap.querySelector('.btn-floating');
	var btnTop = wrap.querySelector('.btn-gotop');
	window.addEventListener('scroll', function () {
		var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
		(scrollTop > 1000) ? btnTop.classList.add('show') : btnTop.classList.remove('show');
	});
	btnTop.addEventListener('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 300);
	});
	if (btnFloating) {
		btnFloating.addEventListener('click', function () {
			this.parentNode.classList.toggle('on');
			if ($('.floating-sticky .menu-list .inner').hasClass('on')) {
				$('.menu03, .menu02').attr('aria-hidden', 'false');
				$('.menu03, .menu02').css('display', 'block');
			} else {
				$('.menu03, .menu02').attr('aria-hidden', 'true');
				$('.menu03, .menu02').css('display', 'none');
			}
			event.preventDefault();
		});
	}
	if (device.val == 'p') { //pc 일 경우 jquery ui 드래그 사용
		$('.floating-sticky .menu-list .inner').draggable({
			stop: function (event, ui) {
				$(event.originalEvent.target).one('click', function (e) { e.stopImmediatePropagation(); });
			}
		});
	} else { //모바일 일 경우 네이티브 스크립트 작성
		var elTop = 0;
		var elLeft = 0;
		movWrap.addEventListener('touchstart', function (e) {
			elTop = e.changedTouches[0].clientY - wrap.offsetTop - movWrap.offsetTop;
			elLeft = e.changedTouches[0].clientX - wrap.offsetLeft - movWrap.offsetLeft;
		});
		movWrap.addEventListener('touchmove', function (e) {
			e.stopPropagation();
			e.stopImmediatePropagation();
			e.preventDefault();
			var top = e.changedTouches[0].clientY - wrap.offsetTop - elTop;
			var left = e.changedTouches[0].clientX - wrap.offsetLeft - elLeft;
			movWrap.style.cssText = 'top: ' + top + 'px; left: ' + left + 'px;'
		});
	}
	floatingStickyComparePosition(); // 230119
}

// 230119 비교하기 플로팅 위치
var toastH = $('.pfpd-compare').outerHeight();
var compareinnerH ;
function floatingStickyComparePosition() {
	if($(window).width() <= 800){ //mobile ver
		if($('.pfpd-compare').hasClass('only-pdCompare')){ //pd.html
			bPosition = $('.itm-total-bottom').outerHeight();
			if($('.pfpd-compare').hasClass('close')){
				$('.floating-sticky').css('margin-bottom', bPosition);	
				$('.floating-sticky').addClass('pfpd-compare-mo-position-close');
			}else if($('.pfpd-compare').hasClass('open')){
				toastH = $('.pfpd-compare').outerHeight();
				$('.floating-sticky').css('margin-bottom', toastH);	
				$('.floating-sticky').removeClass('pfpd-compare-mo-position-close');
			}
		}else{ //pf.html
			console.log('mo > pf');
			floatingPfpdCompareNormalPosition(-100);
		}
	}else{ //pc ver
		floatingPfpdCompareNormalPosition(-100);		
	}	
}
function floatingPfpdCompareNormalPosition(setPositionNum) { // 230119 
	if($('.pfpd-compare').hasClass('close')){
		$('.floating-sticky').css('margin-bottom',setPositionNum);
		setTimeout(function() {
			toastH = $('.pfpd-compare').outerHeight();
			$('.floating-sticky').css('margin-bottom',toastH );
		}, 500);
	}else if($('.pfpd-compare').hasClass('open')){
		$('.floating-sticky').css('margin-bottom',setPositionNum);
		setTimeout(function() {
			toastH = $('.pfpd-compare').outerHeight();
			$('.floating-sticky').css('margin-bottom',toastH );
		}, 500);
	}
}

var listHeightControl = function (el, item) {
	var listWrap = document.querySelector(el);
	var list = listWrap.querySelectorAll(item);
	var itemClass = item;
	var item = {}
	var line = 0;
	var sort = '';
	[].forEach.call(list, function (el) {
		var elTop = el.offsetTop;
		if (sort !== elTop) {
			sort = elTop;
			line = line + 1;
			item['line' + line] = [];
		}
		if (sort === elTop) {
			item['line' + line].push(el);
		}
	});
	for (var i = 1; i <= line; i++) {
		var cardArr = [];
		item['line' + i].forEach(function (el, idx) {
			var card = el.querySelectorAll('[class*="card-"]');
			[].forEach.call(card, function (el) {
				if (itemClass === '.box-product-card') el.style.margin = ''; /* 컴포넌트 23. Product Card 일 경우 마진값 리셋 */
				el.style.height = '';
			});
			if (idx === 0) {
				[].forEach.call(card, function (el) {
					cardArr.push(el.clientHeight);
				});
			} else {
				[].forEach.call(card, function (el, idx) {
					if (cardArr[idx] < el.clientHeight) {
						cardArr[idx] = el.clientHeight
					}
				});
			}
		});
		item['line' + i].forEach(function (el) {
			var card = el.querySelectorAll('[class*="card-"]');
			[].forEach.call(card, function (el, idx) {
				if (itemClass === '.box-product-card') { /* 컴포넌트 23. Product Card 일 경우 마진값 세팅 */
					var _thisHeight = 0;
					_thisHeight = cardArr[idx];
					if (_thisHeight === 0) el.style.margin = 0;
				}
				el.style.height = cardArr[idx] + 'px'
			});
		});
	}
}
// pf list 높이 정렬
var pfListHeight = function () {
	listHeightControl('.pf-prd-cardlist', '.item-inner');
	filterSel();
	colorOptSel();
}

// pf list 마우스 오버시 이미지 교체
var pfImgChange = function () {
	var pfList = document.querySelector('.pf-prd-cardlist');
	var list = pfList.querySelectorAll('.item-inner');
	[].forEach.call(list, function (obj) {
		var imgWrap = obj.querySelector('.card-img');
		var img = imgWrap.querySelector('img');
		var imgData = imgWrap.dataset.imageSrc;
		var srcSplit = imgData.split(' ');
		var srcArry = [];
		srcSplit.forEach(function (str) {
			var start = str.indexOf("'");
			var end = str.lastIndexOf("'");
			var src = str.substring(start + 1, end);
			srcArry.push(src);
		});
		var interval;
		var activeImg = 0;
		var imgChangeFunc = function () {
			interval = setInterval(function () {
				img.src = srcArry[activeImg];
				if (activeImg < srcArry.length - 1) {
					activeImg++;
				} else {
					activeImg = 0;
				}
			}, 1000);
		}
		imgWrap.addEventListener('mouseenter focus', function () {
			imgChangeFunc();
		});
		imgWrap.addEventListener('mouseleave blur', function () {
			clearInterval(interval);
		});
	});
}

//fp list 필터
var pfFilter = function () {

	$(document).ready(function () {
		// 품목 필터 영역
		$(".list-filter .btn-filter").on("click", function (e) {
			$(this).parent().find('.list-box').slideUp();
			if (!$(this).parent().hasClass("active")) {
				$(this).parent().addClass("active");
				if (!$(this).next().is(":visible")) {
					$(this).next().slideDown();
					$(this).parent().addClass('open');
				}
			}
			else {
				$(this).parent().removeClass("active");
				$(this).parent().find('.list-box').slideUp();
			}
			// 2021-01-07 추가
			checkPfFilter();
		});

		// desktop 필터 오픈 초기값
		if ($(window).width() > 800) {
			$(".list-filter > li").eq(0).find(".btn-filter").click();
			$(".list-filter > li").eq(1).find(".btn-filter").click();
			$(".list-filter > li").eq(2).find(".btn-filter").click();
		} else {
			$(".list-filter > li").eq(0).find(".btn-filter").click();
		}
	});

	// 2021-01-26 추가
	window.addEventListener('load', function () {
		checkPfFilter();
	});

	// 2021-01-07 접근성 : 품목 필터 상태 정보 제공
	function checkPfFilter() {
		var $item = $('.list-filter>li');
		$item.find($('span.blind')).remove();
		$item.each(function () {
			if ($(this).hasClass('active')) {
				$(this).find('.btn-filter').append('<span class="blind">열림</span>');
			} else {
				$(this).find('.btn-filter').append('<span class="blind">닫힘</span>')
			}
		});
	}

	// 가격 range slider
	$(function () {
		$('#slider-range').slider({
			range: true,
			min: 0,
			max: 300,
			step: 1,
			values: [63, 245],
			slide: function (event, ui) {
				$("#rangePrice").find(".min-range").text(ui.values[0] + "만원");
				$("#rangePrice").find(".max-range").text(ui.values[1] + "만원");
			}
		});
		$("#rangePrice").find(".min-range").text($("#slider-range").slider("values", 0) + "만원");
		$("#rangePrice").find(".max-range").text($("#slider-range").slider("values", 1) + "만원");
	});
	$('#slider-range .ui-slider-handle').draggable();


	$(function () {
		// 상세검색 필더 동작
		var $openPFBtn = $("#srchDetailFilter"),
			$pfFilter = $("#pfFilterArea"),
			$closePFBtn = $pfFilter.find(".close");
		var ariaHidden = 'aria-hidden'
		// s : 200706 수정
		function pfFilterFunc() {
			var winw = $(window).width();
			if (winw < 801) {
				$openPFBtn.click(function (e) {
					scrollLock('lock');
					if (device.isApp == true && !document.querySelector('#wrap').classList.contains('useWebGnb')) {
						// KDP-5292 앱에서 클릭시 gnb, 팝업높이 제어
						var scrollValue = $(window).scrollTop();
						if (scrollValue < 50) {
							$pfFilter.css('top', device.appHgt + 'px');
						}
						else {
							$pfFilter.css('top', '0' + 'px');
							window.secapp.showAndHideGnb('GONE');
						}
					}
					e.preventDefault();
					$("body, html").css("overflow", "hidden");
					if ($(".pf-filter-mask").length <= 0) $("body").append("<div class='pf-filter-mask'></div>");
					$(".pf-filter-mask").show();
					$pfFilter.show().attr(ariaHidden, "false"); // 모바일접근성 221123-27p - 221213 추가 수정
					$pfFilter.attr("tabindex", "0").focus(); // KDP-20205 웹접근성 72p - 221213 추가 수정
				});
				$closePFBtn.click(function (e) {
					e.preventDefault();
					$pfFilter.hide().attr(ariaHidden, "true");
					$pfFilter.removeAttr("tabindex");// KDP-20205 웹접근성 72p + 221209 수정
					$("#srchDetailFilter").focus();
					$("body, html").css("overflow", "");
					$(".pf-filter-mask").hide();
					scrollLock('unlock');
					setTimeout(function () {
						$(".pf-filter-mask").remove();
					}, 500);
					// KDP-5292 네이티브 gnb 활성화
					if (device.isApp == true && !document.querySelector('#wrap').classList.contains('useWebGnb')) {
						var scrollValue = $(window).scrollTop();
						if (scrollValue < 50) {
							window.secapp.showAndHideGnb('VISIBLE');
						}
						else {
							window.secapp.showAndHideGnb('GONE');
						}
					}
				});
			}
		}
		pfFilterFunc();

		var winOrigin = $(window).width();
		$(window).resize(function () {
			var newWinw = $(window).width();
			if (newWinw !== winOrigin) {
				winOrigin = newWinw;
				if (newWinw < 801) {
					// mobile
					if ($pfFilter.is(":visible")) {
						$pfFilter.hide().attr(ariaHidden, "true"); // 200723
						$(".pf-filter-mask").remove();
					}
					pfFilterFunc();
				} else {
					// desktop
					$("body, html").css("overflow", "");
					$(".pf-filter-mask").remove();
					if (!$pfFilter.is(":visible")) $pfFilter.show().attr(ariaHidden, "false"); // 200723
				}
			}
		}).resize();
		// e : 200706 수정
	});
}


// fp list 옵션 선택 슬라이더
function filterSel() {
	$('.filter-slick').each(function () {
		var _this = $(this);
		var check = _this.find('input:checked');
		var checkIdx = 0;
		if (_this.data('width') === undefined || _this.data('width') == 0) {
			_this.data('width', _this.width());
		}

		_this.find("input:radio").click(function () {
			$(this).is(':checked');
			$(this).parent('li').siblings().find("input:radio").prop('checked', false);
			checkIdx = $(this).parent().index();
			slider.slideTo(checkIdx);
		});

		if (_this.data('width') > _this.parent().width()) {
			if (_this.data('slider') === undefined) {
				_this.parent().addClass('slideOn');
				_this.data('slider', slider);
			} else {
				_this.data('slider').update();
			}
		} else {
			if (_this.data('slider') !== undefined) {
				_this.data('slider').destroy();
				_this.removeData('slider');
				_this.removeData('width');
				_this.parent().removeClass('slideOn');
			}
		}
		
		var slider = new Swiper(_this, {
			slidesPerView: 'auto',
			slideToClickedSlide: true,
			initialSlide: check.parent().index(),
			navigation: {
				nextEl: _this.find('.btn-next'),
				prevEl: _this.find('.btn-prev'),
			},
			spaceBetween: 5,
			breakpoints: {
				801: {
					spaceBetween: 8,
				},
				1441: {
					spaceBetween: 10,
				}
			}
		});
	});
}
// fp list 옵션 선택 슬라이더(컬러)
function colorOptSel() {
	$('.option-slick').each(function () {
		var _this = $(this);
		var check = _this.find('input:checked');
		var checkIdx = 0;
		if (_this.data('width') === undefined || _this.data('width') == 0) {
			_this.data('width', _this.width());
		}
		if (check.parent().index() > 0) {
			checkIdx = check.parent().index();
		}
		if (_this.data('width') > _this.parent().width()) {
			if (_this.data('slider') === undefined) {
				_this.parent().addClass('slideOn');
				var slider = new Swiper(_this, {
					slidesPerView: 'auto',
					navigation: {
						nextEl: _this.find('.btn-next'),
						prevEl: _this.find('.btn-prev'),
					},
					spaceBetween: 2
				});
				slider.slideTo(checkIdx);
				_this.data('slider', slider);
			} else {
				_this.data('slider').update();
			}
		} else {
			if (_this.data('slider') !== undefined) {
				_this.data('slider').destroy();
				_this.removeData('slider');
				_this.removeData('width');
				_this.parent().removeClass('slideOn');
			}
		}
	});
}

// pf list 비교하기 레이어
var prdCompare = {
	state: false,
	brieflySlide: null,
	unbriefly: function () {
		var layer = $(".pf-compare");
		var slide = layer.find(".slider-prd-compare");
		if (slide.find('> .prd').length < 4 && device.val === 'p') {
			prdCompare.state = false;
			prdCompare.brieflySlide.slick('unslick');
		}
	},
	briefly: function () {
		var layer = $(".pf-compare");
		var slide = layer.find(".slider-prd-compare");

		if (!layer.hasClass("open")) {
			layer.show().stop().animate({ "bottom": 0 }, 300, function () {
				if (slide.find('> .prd').length > 3 && device.val === 'p') {
					prdCompare.state = true;
					prdCompare.brieflySlide = slide.slick({
						slidesToShow: 3,
						infinite: false,
						responsive: [
							{
								breakpoint: 800,
								settings: "unslick"
							}
						]
					});
				}
			});
			layer.addClass("open");
			// if(winw <= 414){
			// 	initsliderPrdCompare.slick("unslick").slick(setsliderPrdComOpt); // slider init
			// } else {
			// 	initsliderPrdCompare.slick("unslick");
			// }
		} else {
			if (prdCompare.state == false) {
				if (slide.find('> .prd').length > 3 && device.val !== 'm') {
					prdCompare.state = true;
					prdCompare.brieflySlide = slide.slick({
						slidesToShow: 3,
						infinite: false,
						responsive: [
							{
								breakpoint: 800,
								settings: "unslick"
							}
						]
					});
				}
			}
			// add slide method sample
			// var html = '<div class="prd"><div class="prd-img"><img src="/sec/static/_images/temp/[Product image area]_01.svg" alt="냉장고"></div><div class="prd-info"><strong class="name">4셰프컬렉션 패밀리허브 셰프컬렉션 패밀리허브</strong><span class="serial">SM-F700NZPAKOO</span><span class="price">혜택가<em class="num">1,000,000 원</em></span></div><button type="button" class="prd-delete"><span class="blind">삭제</span></button></div>';
			// $sliderPrdCompare.slick('slickAdd', html);
		}
		layer.find(".slider-prd-compare").focus(); // 웹접근성 포커싱 처리

		// $(window).resize(function() {
		// 	var winw = $(window).width();
		// 	if(winw > 414) {
		// 		if($sliderPrdCompare.hasClass("slick-initialized")) initsliderPrdCompare.slick("unslick");
		// 		if($sliderLayerPrdCom.hasClass("slick-initialized")) initsliderLayerPrdCom.slick("unslick");
		// 	} else {
		// 		initsliderPrdCompare = $sliderPrdCompare.slick(setsliderPrdComOpt);
		// 		initsliderLayerPrdCom = $sliderLayerPrdCom.slick(setsliderPrdComOpt);
		// 	}
		// }).resize();


		// 비교하기 하단 레이어에서 초기화 버튼 눌렀을 때
		layer.find(".btn-reset").click(function (e) {
			e.preventDefault();
			//var this_h = $(".pf-compare").height()*-1;
			if (layer.hasClass("open")) {
				layer.stop().animate({ "bottom": "-50%" }, 700, function () {
					layer.removeClass("open").hide();
					$(".list-product li").find(".link-compare[data-compare-target='true']").focus().removeAttr("data-compare-target");// 웹접근성 포커싱 처리
				});
			}
		});

		// 비교하기 팝업 열 때 슬라이드 init
		layer.find(".btn-compare").click(function (e) {
			e.preventDefault();
			setTimeout(function () {
				prdCompare.detail();
			}, 300);
		});
	},
	detailSlide: null,
	detail: function () {

		var layerWrap = $(".layer-pf-compare .layer-content");

		filterSel();
		colorOptSel();

		layerWrap.on('scroll', function () {
			var _thisScroll = $(this).scrollTop();
			var scrTop = (layerWrap.height() / 2) + _thisScroll;
			var sel = layerWrap.find('.wrap-droplist');
			if (layerWrap.find('.slick-arrow').length > 0) {
				var arrow = layerWrap.find('.slick-arrow');
				arrow.css({ top: scrTop + 'px' });
				sel.css({ top: _thisScroll + 'px' });
			}
		})
	}
}

// pf list 관련 함수
var pfListFunc = function () {
	$(function () {
		// Best Seller mobile slider
		if ($("#slideCarousel01").find('li').length > 1) {
			$("#slideCarousel01").slick({
				arrows: false,
				autoplay: false,
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 9999,
						settings: "unslick"
					},
					{
						breakpoint: 801,
						settings: {
							centerPadding: "25vw",
							slidesToShow: 1.2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 560,
						settings: {
							centerPadding: "24px",
							slidesToShow: 1.2,
							slidesToScroll: 1,
						}
					}
				]
			});

			$(window).on('resize orientationchange', function () {
				$('#slideCarousel01').slick('resize');
			});
		}

		// outlet type-2 mobile slider
		if ($("#slideCarousel02").find('li').length > 1) {
			$("#slideCarousel02").slick({
				arrows: false,
				autoplay: false,
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 9999,
						settings: "unslick"
					},
					{
						breakpoint: 801,
						settings: {
							centerPadding: "48px",
							slidesToShow: 1,
							slidesToScroll: 1,
							centerMode: true,
						}
					},
					{
						breakpoint: 560,
						settings: {
							centerPadding: "24px",
							slidesToShow: 1,
							slidesToScroll: 1,
							centerMode: true,
						}
					}
				]
			});

			$(window).on('resize orientationchange', function () {
				$('#slideCarousel02').slick('resize');
			});
		}

		var ariaHidden = '"aria-hidden';
		// 상품리스트에서 비교하기 버튼 눌렀을 때
		if ($(".list-product").length > 0) {
			$(".list-product li, .ranking-inner").find(".link-compare").click(function (e) {
				e.preventDefault();
				prdCompare.briefly();
				// 웹접근성 포커싱 처리를 위한 attribute
				$(".list-product li").find(".link-compare").removeAttr("data-compare-target");
				$(this).attr("data-compare-target", "true");
			});
		}

		// 툴팁
		$(document).on("click", ".price-detail .btn-downtool", function(e) {
			var $this = $(this);
			$this.toggleClass("open");
			if (!$this.next(".box-tip").is(":visible"))
				$this.next(".box-tip").show().attr("aria-hidden", "false")
			else
				$this.next(".box-tip").hide().attr("aria-hidden", "true")
			// s : 220617 웹 접근성
			if($(".btn-downtool").hasClass("open")){
				$(".blind").text("툴팁닫기(레이어닫힘)");
			}else{
				$(".blind").text("툴팁보기(레이어열림");
			}
		});

		/* 툴팁 마우스 아웃 시 숨김 처리 예외 만들기 : 210119 */
		$(document).on("mouseleave", ".price-detail .sale, .price-detail .pic .box-tip, .price-detail .pic", function(e) {
			var $this = $(this);
			$(".box-tip").removeClass("open").hide().attr("aria-hidden", "true");
			$(".btn-downtool").removeClass("open").attr("aria-hidden", "true")
			// s : 220617 웹 접근성
			if($(".btn-downtool").hasClass("open")){
				$(".blind").text("툴팁닫기(레이어닫힘)");
			}else{
				$(".blind").text("툴팁보기(레이어열림)");
			}
		});

		$(window).on('resize orientationchange', function () {
			filterSel();
			colorOptSel();
		});

		$(window).resize(function () {
			var winw = $(window).width();
			// 커스텀 스트롤
			if (winw > 800) {
				$(".customScrollbar").mCustomScrollbar({
					theme: "minimal-dark"
				});
			} else {
				$(".customScrollbar").mCustomScrollbar('destroy');
			}
		}).resize();
	});

	pfImgChange();
	window.addEventListener('load', pfListHeight);
	window.addEventListener('resize', pfListHeight);
}

/* 컴포넌트23 : Product Card */
var CpnPrdCardListing = function () {
	var setCols = 4;
	$(window).resize(function () {
		listHeightControl('#productCardListing', '.box-product-card');
		var winw = $(window).width();
		setCols = (winw > 800) ? 4 : 2;
		CpnPrdCardSet(setCols);
		filterSel();
		colorOptSel();
	}).resize();
};
function CpnPrdCardSet(setCols) {
	var setCols = setCols;
	$('.slider-select-prdlist').each(function () {
		var _thisEl = $(this).find('.box-product-card:visible');
		_thisEl.removeClass('last-left').removeClass('last-right').removeClass('first-right');
		var total = _thisEl.length;
		if (total > 0) {
			if (total < setCols) _thisEl.eq(total - 1).addClass('first-right');
			var restCols = total % setCols;
			if (restCols === 0) {
				_thisEl.eq(total - setCols).addClass('last-left');
			} else {
				if (total > setCols) _thisEl.eq(total - restCols - 1).addClass('last-right');
				_thisEl.eq(total - setCols + (setCols - restCols)).addClass('last-left');
			}
			_thisEl.eq(total - 1).addClass('last-right');
		}
	});
}

// 모바일 로그
function mobLog(str) {
	if ($(window).find('.moblog')) $('.moblog').remove();
	$('#wrap').append('<p class="moblog" style="position:fixed;top:50%;left:50%;background:red;font-size:20px;z-index: 1000">' + str + '</p>')
}

/* PCD 세컨 네비 모바일 상단 고정 */
window.addEventListener('DOMContentLoaded', function () {
	var navLinkWin, navLinkOffset, navLinkSTop, navLinkEl = $('.wrap-html-content .nav-cpnt-wrap');
	$(window).resize(function () {
		if (navLinkEl.length > 0) {
			navLinkWin = $(window).outerWidth();
			navLinkOffset = navLinkEl.offset().top;
			navLinkFixed();
		}
	});
	$(window).scroll(function () {
		if (navLinkEl.length > 0) {
			navLinkSTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
			navLinkFixed();
		}
	});
	function navLinkFixed() {
		if (540 >= navLinkWin) {
			if (navLinkSTop > navLinkOffset) {
				navLinkEl.addClass('fixed');
			} else {
				navLinkEl.removeClass('fixed');
			}
		}
	}
});

/* 2020-11-24 : 스크롤 시 플로팅 메뉴 제어 */
var stickyPos, stickyTargetHeight, stickyStartTop;
$(window).on('scroll resize load', function (e) {
	stickyScrollPos();
});
function stickyScrollPos() {
	var stickyEl = $('.floating-sticky');
	if (stickyEl.length > 0) {
		stickyPos = stickyEl.offset().top + stickyEl.outerHeight();
		if (device.val === 'p' || device.val === 't' || device.isGnb === true ) { /* 2022-05-20 */
			if ($('.footer-content').eq(2).length > 0) {
				stickyStartTop = $('.footer-content').eq(2).offset().top;
				stickyTargetHeight = 100;
				if (stickyEl.hasClass('on')) stickyPos = stickyPos + stickyTargetHeight;
				if (stickyPos >= stickyStartTop) {
					stickyEl.addClass('on').css({ 'margin-bottom': stickyTargetHeight + 'px' });
				} else {
					stickyEl.removeClass('on').css({ 'margin-bottom': '0' });

					// 230119
					toastH = $('.pfpd-compare').outerHeight();
					floatingPfpdCompareNormalPosition(toastH);	
				}
			}
		}
		if (device.val === 'm') {
			if ($('.itm-total-bottom').length > 0) {
				stickyStartTop = $('.itm-total-bottom').offset().top;
				stickyTargetHeight = ($('.itm-total-bottom').css('display') === 'none') ? 0 : $('.itm-total-bottom').outerHeight();
			}
			if ($('.m-buy-btn-box').length > 0) {
				stickyStartTop = $('.m-buy-btn-box').offset().top;
				stickyTargetHeight = $('.m-buy-btn-box').outerHeight();
			}
			if ($('.itm-total-bottom').length > 0 || $('.m-buy-btn-box').length > 0) {
				if (stickyEl.hasClass('on')) stickyPos = stickyPos + stickyTargetHeight;
				if (stickyPos >= stickyStartTop) {
					stickyEl.addClass('on').css({ 'margin-bottom': stickyTargetHeight + 'px' });
					
					// 230119
					if($('.pfpd-compare').hasClass('only-pdCompare')){ //pd.html
						if($('.pfpd-compare').hasClass('open')){
							toastH = $('.pfpd-compare').outerHeight();
							stickyEl.addClass('on').css('margin-bottom', toastH);	
						}
					}

				} else {
					stickyEl.removeClass('on').css({ 'margin-bottom': '0' });
				}
			}
			//221206 비교하기 모바일
			if ($('.pfpd-compare').length > 0) {
				stickyEl.css({ 'z-index': '10' });
			}
		}
	}
}

//	fontSize ZoomInOut
defsize = 15;
function fontZoom(n) {
	objs = $(".layer-pop *").not("h2, .btn-font-size > li, .btn-font-size > li > button, .pop-close");
	if (13 < defsize && defsize < 21) {
		defsize += n;
		if (defsize == 13) {
			defsize += 1;
		}
		if (defsize == 21) {
			defsize -= 1;
		}
	}
	if (13 < defsize && defsize < 21) {
		$(objs).css("font-size", defsize + "px")
	}

}
function fontInit() {
	defsize = 15;
	objs = $(".layer-pop *")
	$(objs).css("font-size", defsize + "px")
}

function initPrint() {
	fontInit();
	zoomInit();
}
//	fontSize ZoomInOut

/* 2021-01-06 : 통합 검색 - 검색 레이어 포커스 이슈  */
checkFocusSearchLayer();
function checkFocusSearchLayer() {
	$(document).on("focus", ".btn-search", function () {
		headerSearch.eventListener.uinifiedSearchInp()
	});
}

// 2021-08-10 : 컴포넌트25 : story mouse over
function mouseOverArrow() {
	var linkUrl = $('.link-over');

	linkUrl.on('mouseenter', function () {
		$(this).parent('.link-over-wrap').addClass('over');
	}).on('mouseleave', function () {
		$(this).parent('.link-over-wrap').addClass('out');
		setTimeout(function () {
			$('.link-over-wrap').removeClass("over out");
		}, 200);
	});
}

// 211201 모바일에서만 slide
$(function(){
	mobSlickSlide(".videoStore .stepInfo",800,2,1,true,false); //비대면 라이브상담 box
});

function mobSlickSlide(slickContainer,mobBreakPoint,mobSlideShow,mobSlideScroll,mobIndi,mobHeight){ //html선택, breakpoint, 컨텐츠 개수, 이동 개수, 인디케이터 사용여부, height 각 값에 따라 변동
	$(slickContainer).slick({
		arrows: false,
		autoplay: false,
		infinite: false,
		dots: false,
		responsive: [
			{
				breakpoint: 9999,
				settings: "unslick"
			},
			{
			breakpoint: mobBreakPoint,
			settings: {
				arrows: true, //불필요시 css display:none 처리도 가능
				dots: mobIndi,
				adaptiveHeight: mobHeight,
				slidesToShow: mobSlideShow,
				slidesToScroll: mobSlideScroll
			}
		}]
	});

	$(window).on('resize orientationchange', function () {
		$(slickContainer).slick('resize');
	});
}

// Component 26 StoryDouble:sd
function sdCompoSlide(slideId, pcBg, moBg, ctArrow, ctDots, aPlay, aSpeed) {
	var _sdSlide = $(slideId);
	var _sdWrap = _sdSlide.closest('.story-double-content');
	var _sdCtrl = _sdWrap.find('.slider-controls');
	var ctrlWrap = _sdCtrl.children('.wrap-controls');
	var ctrlPlay = _sdCtrl.children('.slide-btn');
	var ctrl = _sdSlide.attr('data-control');
	var arws = _sdSlide.attr('data-arrow');
	var slickSet = {
		responsive: [
			{
				breakpoint: 9999,
				settings: 'unslick'
			},
			{
				breakpoint: 800,
				settings: {
					dots: ctDots,
					arrows: ctArrow,
					autoplay: aPlay,
					autoplaySpeed: aSpeed,
					appendDots: ctrlWrap,
					customPaging: function(slider, index) {
						var title = $(slider.$slides[index]).attr('data-ind-title');
						var omni = $(slider.$slides[index]).attr('data-omni');
						return "<button type='button' data-omni='" + omni + "'>" + title + "</button>";
					}
				}
			}
		]
	}
	_sdWrap.addClass('control-' + ctrl).addClass('arrow-' + arws);
	if (aPlay == false) _sdCtrl.addClass('none-auto');
	$(window).on('resize orientationchange', function() {
		_sdSlide.slick('resize');
		_sdCtrl.removeClass('paused');
		if (device.val == 'm') {
			ctrlPlay.on('click', function () {
				var _this = $(this);
				if (_this.hasClass('slide-play')) {
					_sdCtrl.removeClass('paused');
					_sdSlide.slick('slickPlay');
				} else {
					_sdCtrl.addClass('paused');
					_sdSlide.slick('slickPause');
				}
			});
			_sdWrap.css('background-color', moBg);
		} else {
			_sdWrap.css('background-color', pcBg);
		}
	});
	
	_sdSlide.slick(slickSet);
}

// 22-01-24 main popup : GALAXY CAMPUS STORE
function galcamsSlide(slideID, arrow, dots, auto, speed, height) {
	var _gsID = $(slideID);
	var _gsWrp = _gsID.closest('.galcams-popup');
	var _gsCtrl = _gsWrp.find('.slider-controls');
	var _ctrl = _gsCtrl.children('.wrap-controls');
	var galcamsSet = {
		lazyload: 'ondemand',
		dots: dots,
		arrows: arrow,
		autoplay: auto,
		autoplaySpeed: speed,
		appendDots: _ctrl,
		adaptiveHeight: height,
		customPaging: function(slider, index) {
			var title = $(slider.$slides[index]).attr('data-ind-title');
			var omni = $(slider.$slides[index]).attr('data-omni');
			return "<button type='button' data-omni='" + omni + "'><span>" + title + "</span></button>";
		}
	}
	_gsID.slick(galcamsSet);
}

// 22-05-23 Gift Card
// 220801 Gift Card수정
function giftCardSlide(slideID, navID) {
	var _gcSlide = $(slideID);
	var _gcNav = $(navID);
	var slideSet = {
		lazyload: 'ondemand',
		infinite: true,
		speed: 300,
		fade: true,
		dots: false,
		arrows: false,
		draggable: false,
		cssEase: 'linear',
		asNavFor: _gcNav,
	}
	var navSlideSet = {
		slidesToShow: 10,
		slidesToScroll: 1,
		asNavFor: _gcSlide,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 7
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 5
				}
			}
		]

	}
	_gcSlide.slick(slideSet);
	_gcNav.slick(navSlideSet);
}

// 22-06-02 order-promo
function orderPromoSilde(parentID, arrowsID, infinitSlide, showCard, slideCard, showMoCard, slideMoCard) {
	var _ptID = $(parentID);
	var pArrow = $(arrowsID + ' .prev');
	var nArrow = $(arrowsID + ' .next');
	var slideSet = {
		infinite: infinitSlide,
		dots: false,
		arrows: true,
		prevArrow: pArrow,
		nextArrow: nArrow,
		slidesToShow: showCard,
		slidesToScroll: slideCard,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: showMoCard,
					slidesToScroll: slideMoCard
				}
			}
		]
	}
	_ptID.slick(slideSet);
}

// 22-04-01 customer service : FNET
$(document).ready(function () {
	// AFTER Ready on document
	$('#customerService').on('mouseenter mouseleave', function () {
		$(this).toggleClass('open');
	});
});

//22-06-15 present Card
function presentCardSlide(slideID, navID) {
	var _gcSlide = $(slideID);
	var _gcNav = $(navID);
	var slideSet = {
		lazyload: 'ondemand',
		infinite: true,
		speed: 300,
		fade: true,
		dots: true,
		arrows: false,
		draggable: false,
		cssEase: 'linear',
		appendDots: _gcNav,
		customPaging: function(slider, index) {
			var thumb = $(slider.$slides[index]).attr('data-thumb');
			var val = $(slider.$slides[index]).attr('data-val');
			var alt = $(slider.$slides[index]).attr('data-alt');
			return '<input type="radio" id="Thumb_' + index + '" name="tmplNo" value=' + val +'><label for="Thumb_' + index + '"><div class="img"><img src="'+ thumb +'" alt="' + alt + '"></div></label>';
		}
	}
	_gcSlide.slick(slideSet);
}

// 221110 비교하기 sllic option
function pfpdCompareSlick(id) {
	var _pfpdSlideCompare = id;
	var optSttg = {
		infinite: false,
		speed: 300,
		slidesToShow: 3.54,
		slidesToScroll: 1,
		// variableWidth: true,
		responsive: [{
			breakpoint: 1439,
			settings: {
				slidesToShow: 3.3,
			}
		},{
			breakpoint: 800,
			settings: 'unslick'
		}]
	}
	$(window).on('resize orientationchange', function() {
		_pfpdSlideCompare.slick('resize');
	});
	_pfpdSlideCompare.slick(optSttg);
}

// 221115 비교하기 icon ctl
function compareIconCtl(e) {
	if($(this).hasClass('disabled')){
		this.classList.remove('disabled');
	}else{
		this.classList.add('disabled');
		toastOpen(e);
	}
}
// 221115 비교하기 toast popup ctl
function toastOpen(event) {
	pfpdCompare.classList.add('open');
	pfpdCompare.classList.remove('close');
	floatingStickyComparePosition(); // 230119
}
function toastClose(event) {
	pfpdCompare.classList.remove('open');
	pfpdCompare.classList.add('close');
	floatingStickyComparePosition(); // 230119
}
var itmTotalBottomH;
var pfpdCompareHeight;
var pfpdCompare; //221208
function toastCtl(event) {
	toggleToast.classList.toggle('disabled'); //icon ctl
	var hasClose = pfpdCompare.classList.contains('close');
	var hasOnlyPdCompare = pfpdCompare.classList.contains('only-pdCompare');
	
	if(hasClose){ //닫힘 상태일때 mo
		toastOpen(event);
		if($(window).width() <= 800) {
			if(hasOnlyPdCompare){
				$('.itm-total-bottom').hide({
					effect : "slide",
					direction : "down"
				});
			}
			moPfpdPosition();//pf,pd 적용
		}
	}else{ //열림 상태일때 mo
		toastClose(event);
		if($(window).width() <= 800) {
			if(hasOnlyPdCompare){
				$('.itm-total-bottom').show({
					effect : "slide",
					direction : "down"
				});
			}
			moPfpdPosition();//pf,pd 적용
		}
	}
}

function moPfpdPosition() {
	//pf,pd 적용
	var hasClose = pfpdCompare.classList.contains('close');	
	var bPosition;
	if(hasClose){//닫힘 상태일때 mo
		if($(window).width() <= 800) {	
			$('.compare-contentGroup').addClass('disp-none');
			bPosition = $('.itm-total-bottom').outerHeight();
			setTimeout(function() {
				console.log('Bye');
				$('.compare-inner').css('padding-bottom',bPosition);
			}, 400);
		}
	}else{ //열림 상태일때 mo
		if($(window).width() <= 800) {
			$('.compare-contentGroup').removeClass('disp-none');
			$('.compare-inner').css('padding-bottom',0);
		}
	}
}

//221124 item 2개 이상일 때
function pfpdCompareHctl() {
	$(".pfpd-compare").removeClass("if2item");	
}

// 221230 비교하기 > 차이점 sllic option
function comparePopupSlickpart1(part1) {
	var _pfpdComparePopupPart1 = part1;
	var optSttgPart1 = {
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		responsive: [{
				breakpoint: 800,
				settings: {
					slidesToShow: 2.1,
					slidesToScroll: 1,
					mobileFirst: true,
					dots: false,
					infinite: false,
					arrows: false,
					speed : 100,
					asNavFor: '.part2',
				}
			}
		]
	}
	$(window).on('resize', function() {
		_pfpdComparePopupPart1.slick('resize');
	});
	_pfpdComparePopupPart1.slick(optSttgPart1);
}
function comparePopupSlickpart2(part2) {
	var _pfpdComparePopupPart2 = part2;
	var optSttgPart2 = {
		slidesToShow: 4,
		autoplay: false,
		arrows: false,
		responsive: [{
				breakpoint: 800,
				settings: {
					slidesToShow: 2.1,
					slidesToScroll: 1,
					mobileFirst: true,
					dots: false,
					infinite: false,
					arrows: false,
					speed : 100,
					asNavFor: '.part1',
				}
			}
		]
	}
	$(window).on('resize', function() {
		_pfpdComparePopupPart2.slick('resize');
	});
	_pfpdComparePopupPart2.slick(optSttgPart2);
}
// 221230 비교하기 팝업 스크롤내리면 제품이미지 고정
function setPopupPart1Fixed(className) {
	var pfpdComparePop = className;
	pfpdComparePop.scroll(function(){
		const $this = $(this);
		var _scroll = $this.scrollTop();

		// 스크롤 내릴 때 제품 고정
		if(_scroll > 0){
			$('.layer-pop.popupPrdCompare').addClass('fixed');
		}else{
			$('.layer-pop.popupPrdCompare').removeClass('fixed');
		}
		
		// 스크롤 내릴 때 그림자 생기기
		if(_scroll >= 111){
			$('.layer-pop.popupPrdCompare .box-content-rounded .prd').addClass('shadow');
		}else{
			$('.layer-pop.popupPrdCompare .box-content-rounded .prd').removeClass('shadow');
		}
		var r = "setPopupPart1Fixed";
		setContentHeight(r);	//contents영역 세로값 설정 : 스크롤 될 때
	});	
}
// 221230 비교하기 >  팝업창 세로 사이즈 설정하기
function setPopupHeight() {

	if( $(window).width() > 810){
		// console.log('가로창사이즈(if):'+$(window).width());		
	}else if( $(window).width() > 700){
		// console.log('가로창사이즈(elseif700):'+$(window).width());
	}else if( $(window).width() < 699){
		// console.log('가로창사이즈(elseif699):'+$(window).width());
		$('.popupPrdCompare').css('max-height','100vh'); //mo 팝업창 세로값 설정
		$('.popupPrdCompare').css('height','100vh'); //mo 팝업창 세로값 설정
	}
	setContentHeight();
}
// 221230 비교하기 > 윈도우 세로 값에 따라, 스크롤 되는 contents영역 세로값 설정하기.
function setContentHeight() {
	var popH = $('.popupPrdCompare').outerHeight();
	var popP = parseInt($('.popupPrdCompare').css('padding'));
	var headerH = $('.popupPrdCompare .layer-header-compare').outerHeight();
	var differenceH = $('.layer-difference-compare').outerHeight();
	var differenceM = parseInt($('.layer-difference-compare').css('margin-top')) + parseInt($('.layer-difference-compare').css('margin-bottom'));
	var filterM = parseInt($('.layer-filter-compare').css('margin-bottom'));
	var filterH = $('.popupPrdCompare .layer-filter-compare').outerHeight();
	// console.log(popH +","+ headerH +","+ differenceH +","+ filterH +","+ popP +","+ filterM +","+ differenceM);
	var resultH = popH - headerH - differenceH - filterH - popP - filterM - differenceM -3;
	// console.log("resultH:"+resultH);
	$('.popupPrdCompare .layer-content-compare').css('max-height',resultH);
	$('.popupPrdCompare .layer-content-compare').css('height',resultH);
	$('.popupPrdCompare.active .layer-content-compare').css('max-height',resultH);
	$('.popupPrdCompare.active .layer-content-compare').css('height',resultH);
}
// 221230 비교하기팝업 필터앵커다운
function popFilterAnchorDown (id){
	var _id = $(id);
	var _idOffset = _id.offset().top;
	var comparePop = document.querySelector('.popupPrdCompare ');
	var comparePopBox = comparePop.querySelector('.layer-content-compare');
	var headerH, differenceH, differenceM, filterM, filterH, part1H, targetTop;
	
	function popFilterAnchorDownContentsScrollH(margin) {
		_idOffset = _id.offset().top;
		headerH = $('.popupPrdCompare .layer-header-compare').outerHeight();
		differenceH = $('.layer-difference-compare').outerHeight();
		differenceM = parseInt($('.layer-difference-compare').css('margin-top')) + parseInt($('.layer-difference-compare').css('margin-bottom'));
		filterM = parseInt($('.layer-filter-compare').css('margin-bottom'));
		filterH = $('.popupPrdCompare .layer-filter-compare').outerHeight();					
		part1H = $('.part1').height();

		targetTop= _idOffset - headerH - differenceH - differenceM - filterM - filterH -part1H - margin;	
		comparePopBox.scrollTo({top: targetTop, behavior: 'smooth'});
	}

	var hasFiexd = $('.layer-pop.popupPrdCompare').hasClass('fixed');	

	if (hasFiexd) {
		comparePopBox.scrollTo('top', 1);
		popFilterAnchorDownContentsScrollH(92);
	}else{
		popFilterAnchorDownContentsScrollH(40);
	}
}

// 22-11-22 RECOMMEND
function ctgrSlick(n) {
	var _n = n;
	var _ctgr = $('.copmpo-rcmd-area .catagory ul');
	var ctgrSet = {
		infinite: false,
		slidesToShow: _n
	}
	$(window).on('resize orientationchange', function() {
		_ctgr.slick('resize');
	});
	_ctgr.slick(ctgrSet);
}
// 상품평
function eplogSlide(itemId) {
	var _Id = $(itemId);
	var _eplog = _Id.find('.list-box');
	var prgrsBar = _Id.find('.inner');
	var eplogSet = {
		infinite: false,
		arrows: false,
		slidesToShow: 1.5
	}
	_eplog.on('afterChange', function () {
		var epLenth = _Id.find('.slick-slide').length;
		var slideIdx = _Id.find('.slick-active').attr('data-slick-index');
		epLenth = parseInt(100 / epLenth);
		slideIdx = parseInt(slideIdx);
		prgrsBar.animate({
			'width': (epLenth * (slideIdx + 1)) + '%'
		}, 300);
	});
	_eplog.slick(eplogSet);
}

function eplogLenth(itemId) {
	var _Id = $(itemId);
	var epLenth = _Id.find('.slick-slide').length;
	var slideIdx = _Id.find('.slick-active').attr('data-slick-index');
	var prgrsBar = _Id.find('.inner');
	epLenth = parseInt(100 / epLenth);
	slideIdx = parseInt(slideIdx);
	prgrsBar.css({
		'width': (epLenth * (slideIdx + 1)) + '%'
	});
}

var rcmdListHeight = function () {
	listHeightControl('.copmpo-rcmd-area.etc .pf-prd-cardlist', '.item-inner');
	filterSel();
	colorOptSel();
}
var rcmdListFunc = function () {
	$(function () {

		$(document).on("click", ".price-detail .btn-downtool", function(e) {
			var $this = $(this);
			$this.toggleClass("open");
			if (!$this.next(".box-tip").is(":visible"))
				$this.next(".box-tip").show().attr("aria-hidden", "false")
			else
				$this.next(".box-tip").hide().attr("aria-hidden", "true")

			if($(".btn-downtool").hasClass("open")){
				$(".blind").text("툴팁닫기(레이어닫힘)");
			}else{
				$(".blind").text("툴팁보기(레이어열림)");
			}
		});

		$(document).on("mouseleave", ".price-detail .box-tip", function(e) {
			var $this = $(this);
			$(".box-tip").removeClass("open").hide().attr("aria-hidden", "true");
			$(".btn-downtool").removeClass("open").attr("aria-hidden", "true")

			if($(".btn-downtool").hasClass("open")){
				$(".blind").text("툴팁닫기(레이어닫힘)");
			}else{
				$(".blind").text("툴팁보기(레이어열림)");
			}
		});

		$(window).on('resize orientationchange', function () {
			filterSel();
			colorOptSel();
		});
	});

	window.addEventListener('load', rcmdListHeight);
	window.addEventListener('resize', rcmdListHeight);
}


// 230120 탑배너 모듈
const topBnnFunc = function (dataName) {
	var elem = document.querySelector(".toast-pop[data-toast-name=" + dataName + "]");
	const btnClose = elem.querySelector(".toast-close");
	// console.log(elem);

	open();

	btnClose.addEventListener("click", function () {
		close();
	});

	// 스크롤 이벤트 비활성
	window.addEventListener("scroll", function () {
		let _thispos = $(this).scrollTop();
		scroll(_thispos);
	});

	function open() {
		if (device.val == "m" || device.val == "t") {
			elem.classList.add("active");
			// [].forEach.call(elem, function (popup) {
			//   popup.classList.add("active");
			// });
		}
	}

	function close() {
		elem.classList.remove("active");
		elem.style.position = "fixed";
		// gnb.wrap.style.top = 0;
	}

	function scroll(_thispos) {
		_thispos == 0 && elem.classList.contains("active")
			? (elem.style.position = "relative")
			: (elem.style.position = "fixed");
	}
};