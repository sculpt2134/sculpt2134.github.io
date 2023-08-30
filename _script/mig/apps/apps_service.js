var beforeSizeMode,
	afterSizeMode;

jQueryOld.browser = {}; 
(function () {
	jQuery.browser.mobile = false;
	jQuery.browser.ie = false;
	jQueryOld.browser.version = 0;
	if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
		jQueryOld.browser.ie = true;
		jQuery.browser.version = RegExp.$1;
	} else if (navigator.userAgent.match(/Mobile ([0-9]+)\./)) {
		jQueryOld.browser.mobile = true;
		jQuery.browser.version = RegExp.$1;
	}
})(jQueryOld);

var P5_APPS = {
	isMobile: jQueryOld.browser.mobile,
	isPoorBrowser: jQueryOld.browser.ie && 9 > jQueryOld.browser.ie,
	parallaxAble: !(jQueryOld.browser.ie && 9 > jQueryOld.browser.ie) && /* !jQueryOld.browser.mobile && */ jQueryOld.support.transition,
	areaWidth: 0,
	areaHeight: 0,
	prevSizeMode: -1,
	sizeMode: 0,
	winSize: 0,
	scrollBarWidth: 0,
	scrollTop: 0,
	motionActive: 0,
	scrollFunctions: [],
	resizeFunctions: [],
	readyFunctions: [],
	loadFunctions: [],
	initialized: false,
	scrollType : null,
	parameter: function () {

		var _this = this,
			_href = location.href,
			_parameterObj = {},
			_parameter = _href.split("?")[1],
			_parameterArr = _parameter.split("&");

		_parameterArr.filter(function (_p, _i) {
			var _paramId = _p.split("=")[0],
				_paramValue = _p.split("=")[1];

			_parameterObj[_paramId] = _paramValue;
		});

		return _parameterObj;

	},
	eiwafDevice: {
		TYPE_DESKTOP: "desktop",
		TYPE_PHONE: "phone",
		TYPE_TABLET: "tablet",
		agent: {
			_mobile: (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(window.navigator.userAgent)),
			_tablet: (/iPad|tablet/i.test(window.navigator.userAgent)),
            _apple: (/iP(hone|od|ad)/i.test(window.navigator.userAgent))
		},
		detect: function () {
			var _userAgent = navigator.userAgent.toLowerCase();
				_html = document.getElementsByTagName("html")[0];

			//default add class
			_html.classList.add("default-apps");

			//samsung-device check
			if (_userAgent.search("sm-") > -1) {
				_html.classList.add("samsung-device");
				if (this.agent.mobile) _html.classList.add("samsung-mobile-device");
			}

			if (this.agent_apple) {
                _html.classList.add("apple-mobile-device");
            }

			if (this.type) return;

			if (this.agent._mobile) {
				if (_userAgent.search("android") > -1) {
					if (_userAgent.search("mobile") == -1) this.type = this.TYPE_TABLET;
				}

				if (!this.type) this.type = this.TYPE_PHONE;
			}

			if (this.agent._tablet) this.type = this.TYPE_TABLET;
			if (!this.type) this.type = this.TYPE_DESKTOP;

			switch (this.type) {
				case "phone":
					_html.classList.add("apps-device-phone");
					break;

				case "tablet":
					_html.classList.add("apps-device-tablet");
					break;

				case "desktop":
					_html.classList.add("apps-device-desktop");
					break;
			
				default:
					break;
			}
		}
	},
	layerAria: function (value) {
		jQueryOld("#header").attr("aria-hidden", value);
		jQueryOld(".cm-g-breadcrumb").attr("aria-hidden", value);
		jQueryOld("#footer").attr("aria-hidden", value);
		jQueryOld("#oo_tab").attr("aria-hidden", value);
		jQueryOld(".s-btn-gotop").attr("aria-hidden", value);
	},
	addViewportEvent: function (param, target) { //해당 섹션에 들어갈때 or 벗어날때 이벤트 적용
		var events = 'scroll.addViewportEvent load.addViewportEvent resize.addViewportEvent';
		param = jQueryOld.extend({
			parent: window,
			a11y: false,
			triggerPosition: false,
			triggerPositionPercent: false,
			enter: false,
			leave: false,
			progress: false,
			visiblePercent: false,
			visible: false,
			invisible: false,
			fullVisible: false
		}, param || {});
		if (typeof (param.triggerPosition && param.triggerPositionPercent) == 'number') {
			return true;
		}
		var methods = jQueryOld.fn.extend({
			destroy: function () {
				jQueryOld(param.parent).off(events);
			}
		});
		return target.each(function (idx, obj) {
			var isEnter = false;
			var isVisible = false;
			var isActive = false;
			var isFullVisible = false;
			var visiblePercent = 0;
			var parent = param.parent;
			//if(param.triggerPosition)
			jQueryOld(parent).on(events, function () {
				var returnValue = {
					Height: jQueryOld(obj).outerHeight(),
					ViewportHeight: jQueryOld(parent).height(),
					ScrollTop: jQueryOld(document).scrollTop(),
					OffsetTop: jQueryOld(obj).offset().top
				};
				var visiblePerTopPercent = ((returnValue.ScrollTop + returnValue.ViewportHeight - returnValue.OffsetTop) / returnValue.Height * 100).toFixed(2);
				var visiblePerBottomPercent = -((returnValue.ScrollTop - returnValue.OffsetTop - returnValue.Height) / returnValue.Height * 100).toFixed(2);
				var viewPortPosition = returnValue.OffsetTop - returnValue.ScrollTop - param.triggerPosition;
				var viewPortPositionPercent = (viewPortPosition / returnValue.ViewportHeight * 100 - param.triggerPositionPercent).toFixed(2);
				isVisible = visiblePerTopPercent >= 0 && visiblePerBottomPercent >= 0;
				if (viewPortPositionPercent >= 50) viewPortPositionPercent = 50;
				else if (viewPortPositionPercent <= -50) viewPortPositionPercent = -50;
				if (isVisible && visiblePerTopPercent <= 100) visiblePercent = visiblePerTopPercent;
				else if (isVisible && visiblePerBottomPercent <= 100) visiblePercent = visiblePerBottomPercent;
				else if (isVisible) visiblePercent = 100;
				else visiblePercent = 0;
				if (isVisible) {
					/* Set Property */
					obj.isVisible = isVisible;
					obj.isEnter = isEnter;
					obj.viewPortPositionPercent = viewPortPositionPercent;
					obj.viewPortPosition = viewPortPosition;
					obj.visiblePercent = visiblePercent;
				}
				if (isVisible) {
					/* Set Trigger & Run */
					if (!isEnter && (param.triggerPositionPercent !== false && viewPortPositionPercent <= 0) || (param.triggerPosition && viewPortPosition <= 0)) {
						jQueryOld(obj).trigger('enter');
						if (jQueryOld.isFunction(param.enter)) param.enter();
					}
					if (isEnter && (param.triggerPositionPercent !== false && viewPortPositionPercent > 0) || (param.triggerPosition && viewPortPosition > 0)) {
						jQueryOld(obj).trigger('leave');
						if (jQueryOld.isFunction(param.leave)) param.leave();
					}
					if (jQueryOld.isFunction(param.progress)) {
						if (param.triggerPositionPercent) param.progress(Number(viewPortPositionPercent), returnValue);
						if (param.triggerPosition) param.progress(Number(viewPortPosition), returnValue);
					}
				}
				if (!isActive && visiblePercent > 0) {
					jQueryOld(obj).trigger('visible');
					if (jQueryOld.isFunction(param.visible)) param.visible();
				}
				if (isActive && visiblePercent == 0) {
					jQueryOld(obj).trigger('invisible');
					if (jQueryOld.isFunction(param.invisible)) param.invisible();
					jQueryOld(obj).trigger('leave');
					if (jQueryOld.isFunction(param.leave)) param.leave();
				}
				if (!isFullVisible && visiblePercent == 100) {
					jQueryOld(obj).trigger('fullVisible');
					if (jQueryOld.isFunction(param.fullVisible)) param.fullVisible();
				}
				if (jQueryOld.isFunction(param.visiblePercent)) param.visiblePercent(Number(visiblePercent), returnValue);
				isActive = visiblePercent != 0;
				isEnter = ((param.triggerPositionPercent && viewPortPositionPercent <= 0) && isVisible) || ((param.triggerPosition && viewPortPosition <= 0) && isVisible);
				isFullVisible = visiblePercent >= 100;
			});
		});
	},
	/* sections */
	sections: function () {
		var $wrap = jQueryOld('#wrap'),
			$contents = jQueryOld('.apps-content'),
			$sections = $contents.children('[class^="m_"]'),
			$blocks = [],
			$children = null,
			controls = [],
			transformName = jQueryOld.support.transform,
			parallaxAble = P5_APPS.parallaxAble,
			parallaxAbleTypes = /^(x|y|s|a|c)$/,
			parallaxFloatTypes = /^(s|a)$/,
			i = 0,
			j = 0,
			numSections = $sections.length,
			k, kmax,
			numBlocks;
		var nonLazyTarget = [jQueryOld(".apps-content > section:eq(0)"), jQueryOld(".m_content-intro"), jQueryOld(".m_content-kv"), jQueryOld(".m_content-pdp"), jQueryOld("[data-role='gif-animation']")];
		jQueryOld.each(nonLazyTarget, function (i, v) {
			v.addClass('non-lazy');
		});
		for (; i < numSections; i++ , j++) {
			$blocks[j] = jQueryOld($sections[i]);
			controls[j] = createControls($blocks[j]);
			if (!controls[j]) {
				for ($children = $blocks[j].children('[class^="m_"]'), k = 0, kmax = $children.length; k < kmax; j++ , k++) {
					$blocks[j] = jQueryOld($children[k]);
					controls[j] = createControls($blocks[j]);
				}
				if (kmax) {
					j--;
				} else {
					controls[j] = getArticleControl($blocks[j]);
				}
			}
		}
		numBlocks = $blocks.length;

		function createControls($section) {
			var className = $section.attr('class') || '';
			if ((/^m_feature/).test(className) && (/article/i).test($section[0].nodeName)) {
				return getArticleControl($section);
			}
		}

		function getArticleControl($article) {
			var $figures = $article.find('figure'),
				$images = $article.find('figure img'),
				$parallaxs = null,
				imageSources = [],
				parallaxs = [],
				hasVideo = false,
				videoHided = false,
				isParallaxVideo = false,
				$parallaxer = jQueryOld({
					p: 0
				}),
				parallaxAnimateOption = {
					queue: false,
					duration: 850,
					bystep: false,
					rounding: false,
					easing: 'easeOutQuint',
					step: onParallaxAnimate
				},
				i, j, max;
			for (i = 0, max = $figures.length; i < max; i++) {
				$figures[i] = jQueryOld($figures[i]);
				$images[i] = jQueryOld($images[i]);
				imageSources[i] = P5_APPS.getImageSources($images[i]);
			}
			$parallaxs = $article.find('[data-parallax]');
			for (i = 0, max = $parallaxs.length; i < max; i++) {
				$parallaxs[i] = jQueryOld($parallaxs[i]);
				parallaxs[i] = $parallaxs[i].attr('data-parallax');
				if (parallaxs[i]) {
					parallaxs[i] = parallaxs[i].split('|');
					for (j = 0; j < parallaxs[i].length; j++) {
						parallaxs[i][j] = parallaxs[i][j].split(',');
						if (parallaxAbleTypes.test(parallaxs[i][j][0])) {
							parallaxs[i][j][10] = parallaxs[i][j][0].toLowerCase();
							parallaxs[i][j].shift();
						} else {
							parallaxs[i][j][9] = 'y';
						}
						if (parallaxs[i][j][9] != 'c') {
							parallaxs[i][j][0] = parseFloat(parallaxs[i][j][0]);
							parallaxs[i][j][1] = parallaxs[i][j][0] - parseFloat(parallaxs[i][j][1]);
							if (parallaxs[i][j][2] !== undefined) {
								parallaxs[i][j][5] = parseFloat(parallaxs[i][j][2]);
							}
							if (parallaxs[i][j][3] !== undefined) {
								parallaxs[i][j][6] = parseFloat(parallaxs[i][j][3]);
							}
							parallaxs[i][j][2] = 0;
							parallaxs[i][j][3] = 0;
							parallaxs[i][j][4] = 0;
							if (parallaxs[i][j][9] == 's') {
								parallaxs[i][j][2] = parallaxs[i][j][0];
							}
						}
					}
				}
			}

			function onParallaxAnimate(v) {
				for (var properties, value,
					i = 0, j, max = $parallaxs.length; i < max; i++) {
					for (j = 0, properties = {}; j < parallaxs[i].length; j++) {
						if (parallaxs[i][j][9] == 'c') {
							continue;
						}
						value = parallaxs[i][j][3] + (parallaxs[i][j][4] - parallaxs[i][j][3]) * v.p;
						properties[parallaxs[i][j][9]] = parallaxs[i][j][2] = value;
					}
					if (P5_APPS.sizeMode == 1) {
						properties.y = jQueryOld(window).width() * (properties.y) / 1440;
						properties.x = jQueryOld(window).width() * (properties.x) / 1440;
					}
					$parallaxs[i][0].style[transformName] = ['scale(', properties.s !== undefined ? properties.s : 1, ', ', properties.s !== undefined ? properties.s : 1, ')', ' ', 'translate3d(', properties.x || 0, 'px, ', properties.y || 0, 'px, 0)'].join('');
					if (properties.a !== undefined) {
						$parallaxs[i][0].style.opacity = properties.a;
					}
				}
			}
			return {
				name: 'article',
				setSizeMode: function (sizeMode, flag) {
					for (var newSrc, i = 0, max = $figures.length; i < max; i++) {
						newSrc = '' + imageSources[i][sizeMode];
						if ($images[i][0] && $images[i][0].src) {
							if (flag == "resize" || $images[i].parents("section").hasClass("non-lazy") || (document.location.href.indexOf("#") > -1) ) {
								$images[i][0].src = newSrc;
							}
						}
					}
				},
				setParallax: function (visiblePercent) {
					var i, j, max, valueTo, sizeMode;
					if (parallaxAble) {
						visiblePercent = Math.max(0, visiblePercent, Math.min(1, visiblePercent));
						sizeMode = P5_APPS.sizeMode;
						$parallaxer._stop();
						if (sizeMode == 1) {
							//visiblePercent = visiblePercent * 0.175;
						}
						for (i = 0, max = $parallaxs.length; i < max; i++) {
							if (2 > sizeMode && !$parallaxs[i].data("only") && $parallaxs[i].data("only") != "all" || 1 < sizeMode && $parallaxs[i].data("only") == "mobile") {
								$parallaxs[i].removeAttr("style");
								return;
							}
							for (j = 0; j < parallaxs[i].length; j++) {
								if (parallaxs[i][j][9] == 'c') {
									window[parallaxs[i][j][0]] && window[parallaxs[i][j][0]](visiblePercent);
								} else {
									parallaxs[i][j][3] = parallaxs[i][j][2];
									valueTo = parallaxs[i][j][0] - parallaxs[i][j][1] * visiblePercent;
									if (parallaxs[i][j][5] !== undefined) {
										valueTo = Math.max(parallaxs[i][j][5], valueTo);
									}
									if (parallaxs[i][j][6] !== undefined) {
										valueTo = Math.min(parallaxs[i][j][6], valueTo);
									}
									if (sizeMode == 3 && parallaxs[i][j][9] != 's' && parallaxs[i][j][9] != 'a') {
										valueTo *= 0.75;
									}
									if (!parallaxFloatTypes.test(parallaxs[i][j][9])) {
										valueTo = Math.round(valueTo);
									}
									parallaxs[i][j][4] = valueTo;
									if (sizeMode == 1) {
										//valueTo = valueTo * 0.175;
										//valueTo = (jQueryOld(window).width() * valueTo)/1920;
										//valueTo = 10;
									}
								}
							}
						}
						$parallaxer[0].p = 0;
						$parallaxer._animate({
							p: 1
						}, parallaxAnimateOption);
						if (hasVideo && !videoHided && isParallaxVideo && visiblePercent && 1 > visiblePercent) {
							$article.trigger('video-parallax', visiblePercent);
						}
					}
				}
			};
		}

		function scroll(scrollTop, maxScrollTop) {
			var areaHeight = P5_APPS.areaHeight,
				blockTop, blockHeight,
				visibleSize, visiblePercent, visibleHeight, visibleBase,
				i = 0;
			for (; i < numBlocks; i++) {
				blockTop = !i ? $blocks[i][0].offsetTop - scrollTop : $blocks[i][0].getBoundingClientRect().top;
				if (blockTop > 0 || $blocks[i].css('display') != 'none') {
					blockHeight = $blocks[i][0].offsetHeight;
					if (!i) {
						visibleSize = 1 - ((blockHeight + blockTop) / blockHeight);
					} else {
						visibleSize = -(blockTop - areaHeight) / (areaHeight + blockHeight);
					}
					if (parallaxAble) {
						visiblePercent = visibleSize;
						if (visiblePercent >= -0.15 && 1.15 >= visiblePercent) {
							if (jQueryOld('[data-parallax]').length) {
								controls[i].setParallax(visiblePercent);
							}
						}
					}
					visibleBase = Math.min(blockHeight * 0.66, P5_APPS.areaHeight * 0.66);
					visibleHeight = Math.min(areaHeight, 0 >= blockTop ? blockHeight + blockTop : Math.min(blockHeight, areaHeight - blockTop));
				}
			}
		}

		function resize(flag) {
			var i = 0,
				sizeMode = P5_APPS.sizeMode;
			for (; i < numBlocks; i++) {
				controls[i].setSizeMode(sizeMode, flag);
			}
		}
		return {
			scroll: scroll,
			resize: resize
		};
	},
	getImageSources: function ($image) {
		var s2 = $image.attr('data-src-pc') || $image.attr('src'),
			s3 = s2,
			s1 = $image.attr('data-src-mobile') || s2;
		return [null, s1, s2, s3];
	},
	getScrollBarWidth: function () {
		var div = document.createElement('div'),
			scrollBarWidth;
		div.style.cssText = 'position: absolute; left: -999em; width: 100px; height: 100px; overflow: scroll;';
		document.body.appendChild(div);
		scrollBarWidth = 100 - div.clientWidth;
		document.body.removeChild(div);
		div = null;
		return scrollBarWidth;
	},
	scroll: (function (e) {
		var ie = navigator.userAgent.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i),
			webkit = (/applewebkit/i).test(navigator.userAgent),
			documentElement = document.documentElement,
			scrollCaptured = false,
			lastScrollTop = 0,
			maxScrollTop = 0;

		function scrollFix(scrollBy) {
			var newScrollTop = Math.min(getMaxScrollTop(), Math.max(0, getScrollTop() + scrollBy));
			if (newScrollTop != lastScrollTop) {
				scroll(newScrollTop);
				scrollCaptured = true;
				document[webkit ? 'body' : 'documentElement'].scrollTop = newScrollTop;
			}
		}

		function getScrollTop() {
			return documentElement.scrollTop || (document.body ? document.body.scrollTop : 0) || 0;
		}

		function getMaxScrollTop() {
			return Math.max(document.body ? document.body.scrollHeight : 0, documentElement.scrollHeight) - Math.min(documentElement.offsetHeight, documentElement.clientHeight);
		}

		function scroll(_scrollTop) {
			var scrollTop = typeof (_scrollTop) == 'number' ? _scrollTop : getScrollTop();
			lastScrollTop = scrollTop;
			if (scrollCaptured) {
				scrollCaptured = false;
				return false;
			}
			P5_APPS.scrollTop = scrollTop;
			maxScrollTop = getMaxScrollTop();
			P5_APPS.scrollTop = scrollTop;
			P5_APPS.sections && P5_APPS.sections.scroll && P5_APPS.sections.scroll(scrollTop, maxScrollTop);
			if (P5_APPS.scrollFunctions.length) {
				jQueryOld.each(P5_APPS.scrollFunctions, function () {
					this(scrollTop, maxScrollTop);
				});
			}

			P5_APPS.motion.scroll();
			P5_APPS.serviceFloatingBar.scroll();
		}
		return scroll;
	})(),
	resize: function (func, flag) {
		if (typeof (func) == 'function') {
			this.resizeFunctions.push(func);
			return this;
		}
		var documentElement = document.documentElement,
			width, height, sizeMode;
		width = documentElement.clientWidth;
		if (P5_APPS.isPoorBrowser) {
			width = Math.max(jQueryOld('#wrap').outerWidth(), width);
		}
		height = jQueryOld(window).height();
		// ignore Mode
		if (func !== true) {
			if (!jQueryOld.browser.mobile && width == P5_APPS.areaWidth && height == P5_APPS.areaHeight) {
				return;
			} else if (jQueryOld.browser.mobile && width == P5_APPS.areaWidth) {
				return;
			}
		}
		var scrollBarWidth;
		var windowSize = window.innerWidth != undefined ? window.innerWidth : jQueryOld(window).innerWidth() + 17;
		if (jQueryOld.browser.mobile) {
			scrollBarWidth = 0;
		} else {
			scrollBarWidth = 17;
		}
		//sizeMode = width > 1440-scrollBarWidth ? 3 : width > 768-scrollBarWidth ? 2 : 1;
		sizeMode = windowSize > 1440 ? 3 : windowSize > 768 ? 2 : 1;
		P5_APPS.prevSizeMode = P5_APPS.sizeMode;
		if (sizeMode != P5_APPS.sizeMode) {
			P5_APPS.sizeMode = sizeMode;
			documentElement.className = documentElement.className.replace(/ *s[1-4][1-4]?/g, '') + ' s' + sizeMode;
		}
		documentElement.className = documentElement.className.replace(/ *s0/, '') + (360 > width ? ' s0' : '');
		P5_APPS.areaWidth = width;
		P5_APPS.areaHeight = height;
		P5_APPS.sections && P5_APPS.sections.resize && P5_APPS.sections.resize(flag);
		if (P5_APPS.resizeFunctions.length) {
			jQueryOld.each(P5_APPS.resizeFunctions, function () {
				this();
			});
		}
		P5_APPS.scroll();
		P5_APPS.pdpImgReplace();

		// new how to use socuse
		if (jQueryOld(document).find("#section-howtotab").length > 0) {
			this.howToTab.resize();
		}

		if (P5_APPS.video.elem._videoWrap.length > 0) {
			P5_APPS.video.resize();
		}

		P5_APPS.slide.resize();
		P5_APPS.motion.resize();
		P5_APPS.serviceFloatingBar.resize();
		P5_APPS.deeplink.resize();
		P5_APPS.accessibility.resize();
	},
	deviceCheck: function () { //브라우저 or 디바이스 환경 check
		var samsungUserAgent = navigator.userAgent.toLowerCase().indexOf('sm-'),
			iphoneAgent = navigator.userAgent.toLowerCase().indexOf('iphone'),
			ipadAgent = navigator.userAgent.toLowerCase().indexOf('ipad'),
			mobileUserAgent = navigator.userAgent.toLowerCase().indexOf('mobile'),
			chromeUserAgentPc = navigator.userAgent.toLowerCase().indexOf('chrome'),
			macPcUserAgent = navigator.userAgent.toLowerCase().indexOf('macintosh'),
			ieCheck = navigator.userAgent.toLowerCase().indexOf('trident'),
			operaCheck = navigator.userAgent.toLowerCase().indexOf('opera'),
			firefoxCheck = navigator.userAgent.toLowerCase().indexOf('firefox');

		if (samsungUserAgent > -1 && !jQueryOld(".apps").is(".health")) {
			jQueryOld(document.documentElement).addClass('samsung-device');
		}
		if (iphoneAgent > -1 && mobileUserAgent > -1) {
			jQueryOld(document.documentElement).addClass('apple-browser-all');
		}
		if ((ipadAgent > -1 || macPcUserAgent > -1) && chromeUserAgentPc === -1 && ieCheck === -1 && operaCheck === -1 && firefoxCheck === -1) {
			jQueryOld(document.documentElement).addClass('apple-browser-all');
		}

		if (jQueryOld(".apps").is(".themes")) {
			if (samsungUserAgent > -1 && mobileUserAgent > -1) {
				jQueryOld(document.documentElement).addClass('samsung-mobile-device');
			} else if(samsungUserAgent > -1 && mobileUserAgent === -1) {
				jQueryOld(document.documentElement).addClass('samsung-tablet-device');
			}
		}

		var mobileArr = new Array("iphone", "ipod", "blackberry", "android", "samsung", "ios", "ipad");
		for (var txt in mobileArr) {
			if (navigator.userAgent.toLowerCase().indexOf(mobileArr[txt]) > -1) {
				jQueryOld('html').addClass('mobile');
			} else {
				jQueryOld('html').addClass('desktop');
			}
		}
	},
	slideAnchor: function () { //slider의 키보드 이동
		var $anchor = jQueryOld('.slick-slide').find('a, button, [tabindex]').filter(':last'); $anchor.on('keydown', function (e) { if (e.keyCode == '9' && !e.shiftKey) { jQueryOld(this).closest('.slick-slider').find('.slick-dots li:first-child button').focus(); e.preventDefault(); } });
	},
	youtube: {
		elem: {
			_target : jQueryOld('[data-role="apps-youtube-visual"]')
		},

		apiSetup: function(){
			if (!YT) {
				var YT = {
					loading: 0,
					loaded: 0
				};
			}
			if (!YTConfig) {
				var YTConfig = {
					'host': 'http://www.youtube.com'
				};
			}
			if (!YT.loading) {
				YT.loading = 1;
				(function () {
					var l = [];
					YT.ready = function (f) {
						if (YT.loaded) {
							f();
						} else {
							l.push(f);
						}
					};
					var onYTReady = function () {
						YT.loaded = 1;
						for (var i = 0; i < l.length; i++) {
							try {
								l[i]();
							} catch (e) {}
						}
					};
					YT.setConfig = function (c) {
						for (var k in c) {
							if (c.hasOwnProperty(k)) {
								YTConfig[k] = c[k];
							}
						}
					};
					var a = document.createElement('script');
					a.type = 'text/javascript';
					a.id = 'www-widgetapi-script';
					a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfl4fk51J/www-widgetapi.js';
					a.async = true;
					var b = document.getElementsByTagName('script')[0];
					b.parentNode.insertBefore(a, b);

					P5_APPS.youtube.event();
				})();
			}
		},

		event: function () {
			var APPS_utubeArea = P5_APPS.youtube.elem._target;
			if (APPS_utubeArea.length) {
				var APPS_utubeTitle = jQueryOld("#utubePlayer").data("title") != undefined ? jQueryOld("#utubePlayer").data("title") : "";
				var figure = APPS_utubeArea.find("figure");

				APPS_utubeArea.find(".btn-control-play").on("click", function (e) {
					e.preventDefault();
					P5_APPS.youtube.setting();
				});

				if (location.href.toLowerCase().indexOf("/cn/") === -1) {
					if (jQueryOld.browser.ie && jQueryOld.browser.version < 9) {
						figure.find("img").attr("alt", APPS_utubeTitle);
					}
				}
			}
		},

		setting: function () {
			// kv utube video
			var APPS_utubeArea = P5_APPS.youtube.elem._target;
			var APPS_utubePlayer;
			var APPS_utubeTitle = jQueryOld("#utubePlayer").data("title") != undefined ? jQueryOld("#utubePlayer").data("title") : "";
			var APPS_utubeAlt = jQueryOld("#utubePlayer").data("alt-text") != undefined ? jQueryOld("#utubePlayer").data("alt-text") : false;
			APPS_utubeArea.find(".video-area").html('<div id="yt-player"></div>');
			
			APPS_utubePlayer = new YT.Player('yt-player', {
				height: '100%',
				width: '100%',
				videoId: APPS_utubeArea.find('.video-area').data('media-url'),
				playerVars: {
					rel: 0
				},
				events: {
					onStateChange: onPlayerStateChange,
					onReady: function () {
						focusOutIdx = 0;
						jQueryOld("#yt-player").attr("title", APPS_utubeTitle);
						jQueryOld("#yt-player").attr("tabindex", 0);
						jQueryOld("#yt-player").focus();
						if(APPS_utubeAlt){
							var a = APPS_utubeAlt;
							jQueryOld("#utubePlayer").append("<span class='blind'></span>");
							jQueryOld("#utubePlayer").find(".blind").html(a);
						}
						var figure = APPS_utubeArea.find("figure");
						//APPS_utubePlayer.playVideo();
						setTimeout(function () {
							figure.css({
								"opacity": 0
							});
							figure.hide();
						}, 0);
						
					}
				}
				
			});
			// when video ends
			function onPlayerStateChange(event) {
				if (event.data == 0) {
					//APPS_utubePlayer.stopVideo();
					var target = jQueryOld('[data-role="apps-youtube-visual"]').find("figure");
					target.show().css({
						"opacity": 1
					});
					//APPS_utubePlayer.seekTo(0, true);     // 영상의 시간을 0초로 이동시킨다.
					//APPS_utubePlayer.stopVideo();
					APPS_utubeArea.find(".video-area").html('<div id="yt-player"></div>');
					var utubeFocusSetInterval = setInterval(function () {
						if (APPS_utubeArea.find(".btn-control-play").is(":focus") === false && target.attr("style").indexOf("block") > -1) {
							clearInterval(utubeFocusSetInterval);
							APPS_utubeArea.find(".btn-control-play").focus();
						}
					}, 1200);
				}
			}
		},

		init: function () {
			if(this.elem._target.length > 0) this.apiSetup();
		}
	},
	taggingServiceName: ["game-launcher"],
	footerAjax: function () {
		try {
			if (typeof commonObj !== "undefined") {
				
				var _parent = jQueryOld("div.apps-content"),
					_pdpSection = jQueryOld('<section class="m_content-pdp black create-pdp" id="more-services"><article class="m_feature"><div class="f_container" ><div class="inner"></div></div></article></section>');

				//추후 삭제 요망(kids-mode 페이지가 삭제 될 경우(전국가))
				if (APPS_SITE_CODE !== "nz" && APPS_SITE_CODE !== "au") {
					APPS_SERVICE_NAME = APPS_SERVICE_NAME === "kids mode" ? "samsung-kids-home" : APPS_SERVICE_NAME;
				}		

				var _pdpJson = commonObj.pdp,
					_pdpJsonDefaultKey = ["galaxy-s", "landing"],
					_pdpServiceName = APPS_SERVICE_NAME,
					_pdpParentElement = _pdpSection.find('div.inner');

				P5_APPS.taggingServiceName.filter(function(name, i) {
					if(APPS_SERVICE_NAME === name){
						_pdpServiceName = name.replace(/\-/g,"_");
					}
				});
				
				if(typeof _pdpJson["classification"] !== "undefined") {
					if (typeof _pdpJson["classification"]["watch"] !== "undefined") {
						_pdpJson["classification"]["watch"].forEach(function (_val) {
							if (APPS_SERVICE_NAME.replace(" ", "-") === _val) {
								_pdpJsonDefaultKey = ["watch", "landing"];
							}
						});
					}
				}

				_pdpJsonDefaultKey.forEach(function (_key) {
					var _pdpHtml = "",
						_href = _pdpJson[_key].href,
						_class = _pdpJson[_key].class,
						_desctopImgPath = _pdpJson[_key].imgPath.desktop,
						_mobileImgPath = _pdpJson[_key].imgPath.mobile,
						_title = _pdpJson[_key].title,
						_alt = _pdpJson[_key].alt.replace(/"/g, "&quot;"),
						_buttonText = _pdpJson[_key].button_text,
						_buttonTitle = _pdpJson[_key].button_title.replace(/"/g, "&quot;"),
						_buttonTaggingType = _pdpJson[_key].tagging.type,
						_buttonTaggingOmni = _pdpJson[_key].tagging.omni;

					_pdpHtml += "<div class='item " + _class + "'>";
					_pdpHtml += 	"<figure>";
					_pdpHtml += 		"<img src='//images.samsung.com/is/image/samsung/p5/common/apps/akm_images/common/blank.gif' data-src-pc='" + _desctopImgPath + "' data-src-mobile='" + _mobileImgPath + "' alt='" + _alt + "' data-key='pdp." + _key + ".alt-alt'>";
					_pdpHtml += 	"</figure>";
					_pdpHtml += 	"<h2 class='tit s-font-sharpsans' data-key='pdp." + _key + ".tit'>" + _title + "</h2>";
					_pdpHtml += 	"<a href='" + _href + "' class='btn_link' title='" + _buttonTitle + "' data-omni-type='" + _buttonTaggingType + "' data-omni='apps:" + _pdpServiceName + ":" + _buttonTaggingOmni + "' data-key='pdp." + _key + ".title-title'>";
					_pdpHtml += 		"<span data-key='pdp." + _key + ".button_text'>" + _buttonText + "</span>";
					_pdpHtml += 	"</a>";
					_pdpHtml += "</div>";

					if (typeof _pdpJson !== "undefined") {
						switch (_key) {
							case "watch":
								_pdpParentElement.prepend(_pdpHtml);
								break;
							case "galaxy-s":
								_pdpParentElement.prepend(_pdpHtml);
								break;
							case "landing":
								_pdpParentElement.append(_pdpHtml);
								break;
							default:
								break;
						}
					}

				});

				if (!jQueryOld('.m_content-pdp').length) {
					_pdpSection.insertAfter(_parent.find('section').last());
					_pdpSection.find('img').removeAttr('width');
					_pdpSection.find('img').removeAttr('height');
				}
				
				P5_APPS.imgSrcReplaceQa(jQueryOld(".m_content-pdp"));
				P5_APPS.pdpImgReplace();

			}
		} catch (err) {
			console.info(err.message);
		}
	},
	pdpImgReplace: function () { //pdp 동적 구현시 해상도에 맞게 이미지 교체 
		var $pdp = jQueryOld('.create-pdp'),
			$figure = $pdp.find('figure img');
		if (!jQueryOld('html').hasClass('s1')) {
			$figure.each(function () {
				jQueryOld(this).attr('src', jQueryOld(this).data('src-pc'));
			});
		} else {
			$figure.each(function () {
				jQueryOld(this).attr('src', jQueryOld(this).data('src-mobile'));
			});
		}
	},
	deeplink: {
		common: {
			serviceName : APPS_SERVICE_NAME,
			notReflectCheck: false,
			notServiceCheck: true,
			redirectUrl : "",
			deepLinkCheck: function (_serviceName) {
				switch (_serviceName) {
					case "samsung members":
						P5_APPS.deeplink.common.redirectUrl = "https://play.google.com/store/apps/details?id=com.samsung.android.voc";
						break;
					case "penup":
						P5_APPS.deeplink.common.redirectUrl = "https://play.google.com/store/apps/details?id=com.sec.penup";
						break;

					case "galaxy-themes":
						P5_APPS.deeplink.common.redirectUrl = "https://apps.samsung.com/theme/MainPage.as?contentsType=THEMES&from=SamsungdotCom";
						break;

					default:
						P5_APPS.deeplink.common.notServiceCheck = false;
						break;
				}
			},
			init : function(){

				//서비스 체크 및 예외국가 체크
				P5_APPS.deeplink.common.deepLinkCheck(APPS_SERVICE_NAME);

				if (P5_APPS.deeplink.common.notServiceCheck === true) {
					var targetLink = jQueryOld("[id*='deeplink']"),
						appsPopup = jQueryOld('.deeplink-popup'),
						popupAnchorF = appsPopup.find('a:first'),
						popupAnchorL = appsPopup.find('a:last'),
						btnClose = appsPopup.find('.btn_close'),
						winHeight = jQueryOld(window).height(),
						popupHeight = appsPopup.outerHeight(),
						$this = null;

					var popupClose = function ($this) {
						appsPopup.removeClass('active');
						jQueryOld('html').css("overflow", "visible");
						$this.focus();
					};

					targetLink.on('click', function (e) {
						$this = jQueryOld(this);
						var targetHref = $this.attr("href");
						var odcPop = window.open(targetHref);
						var check_count = 0;
						var popupCheck = setInterval(function () {
							if (odcPop.closed) {
								clearInterval(popupCheck);
							} else {
								if (check_count == 3) {
									clearInterval(popupCheck);
									check_count = 0;
									if (jQueryOld('html').is('.samsung-device') === true) {
										odcPop.close();
										appsPopup.addClass('active').focus();
										appsPopup.css("top", (winHeight / 2) - (popupHeight / 2));
										P5_APPS.layerAria(true);
										jQueryOld(".apps-content").attr("aria-hidden", true);
										jQueryOld("#apps_floating").attr("aria-hidden", true);
										jQueryOld('html').css("overflow", "hidden");
									} else {
										odcPop.location.href = P5_APPS.deeplink.common.redirectUrl;
									}
								}
								check_count++;
							}
						}, 200);

						e.preventDefault();
					});

					btnClose.on('click', function (e) {
						e.preventDefault();
						P5_APPS.layerAria(false);
						jQueryOld(".apps-content").attr("aria-hidden", false);
						jQueryOld("#apps_floating").attr("aria-hidden", false);
						popupClose($this);
					});

					jQueryOld(document).on('keydown', function (e) {
						if (appsPopup.is('.active')) {
							if (e.keyCode == 27) {
								e.preventDefault();
								popupClose($this);
							}
						}
						if (btnClose.is(':focus')) {
							if (e.which == 9 || e.keyCode == 9) {
								e.preventDefault();
								popupAnchorF.focus();
							}
							if (e.shiftKey) {
								if (e.which == 9 || e.keyCode == 9) {
									e.preventDefault();
									popupAnchorL.focus();
								}
							}
						}
						if (popupAnchorF.is(':focus')) {
							if (e.shiftKey) {
								if (e.which == 9 || e.keyCode == 9) {
									e.preventDefault();
									btnClose.focus();
								}
							}
						}
					});
				}
			}
		},
		galaxyApps: {
			init: function () {
				if (jQueryOld('.galaxy_store').length || jQueryOld('.galaxy_apps').length) {
					/* launching */
					/*
						모바일 딥링크 실행 관련 함수
						ex :  rundeepLink('samsungapps://ProductDetail/com.samsung.radio','MILK');
			
						deepLink : 실행 할 딥링크  (ex : samsungapps://ProductDetail/com.samsung.radio)
						appName : 앱 이름 (ex :  MILK)
					*/
					var rundeepLink = function (deepLink, appName) {
						//딥링크 또는 앱 이름이 없거나 공백이 면 함수를 실행 하지 않습니다.
						if (deepLink == undefined || deepLink.replace(' ', '') == '') return;
						if (appName == undefined || appName.replace(' ', '') == '') return;
						var isNaverBrowser,
							isChromeBrowser = false,
							isNewBrowser,
							odcPop = null,
							check_count = 0,
							retry_count = 3,
							interval_time = 200,
							timeout_time = 1000,
							userAgentString = navigator.userAgent;
						//크롬 브라우저 여부를 판단합니다.
						if (userAgentString.toLowerCase().indexOf("chrome") > -1) {
							isChromeBrowser = true;
							if (userAgentString.toLowerCase().indexOf("version") > -1) {
								isChromeBrowser = false;
							}
						}
						//네이버브라우저 여부를 판단합니다.
						isNaverBrowser = (userAgentString.indexOf('NAVER') != -1 ? true : false);
						//브라우저  버전을 판단합니다.
						//브라우저 버전이 534 미만인 경우 iframe 방식으로 딥링크를 실행하고, 브라우저 버전이 534 이상인 경우, window.open 방식을 사용합니다.
						isNewBrowser = (parseInt(userAgentString.split('/').pop(), 10) >= 534 ? true : false);
						//브라우저버전이 534 이상인 경우, 네이버 브라우저 또는 크롬브라우저 인 경우 window.open 방식으로 딥링크를 실행 합니다.
						if (isNewBrowser || isNaverBrowser || isChromeBrowser) {
							odcPop = window.open(deepLink);
							var popupCheck = setInterval(function () {
								if (odcPop.closed) {
									clearInterval(popupCheck);
								} else {
									if (check_count == retry_count) {
										clearInterval(popupCheck);
										odcPop.close();
										check_count = 0;
										alert(deeplinkText[SITE_CD]);
									}
									check_count++;
								}
							}, interval_time);
						}
						////브라우저버전이 534 미만인 경우 iframe을 이용해 딥링크를 실행 합니다.
						else {
							var element = jQueryOld("#odccheckframe");
							if (element.length < 1) {
								element = jQueryOld("<iframe id='odccheckframe' name='odccheckframe' width='15' height='15' style='display:none;'></iframe>");
								jQueryOld("body").append(element);
							}
							document.odccheckframe.location.href = deepLink;
							setTimeout(function () {
								try {
									var s = document.odccheckframe.document.body.innerHTML;
								} catch (e) {
									jQueryOld("#odccheckframe").remove();
									alert(deeplinkText[SITE_CD]);
								}
							}, timeout_time);
						}
					}
					/*
					 * 국가별 alert 문구 노출
					 * deeplinkText[SITE_CD]
					 */
					var deeplinkText = {
						"ae": "Please install Samsung GALAXY Apps.",
						"ae_ar": "الرجاء تثبيت Samsung GALAXY Apps.",
						"africa_en": "Please install Samsung GALAXY Apps.",
						"africa_fr": "Installez Samsung GALAXY Apps.",
						"africa_pt": "Instale Samsung GALAXY Apps.",
						"ar": "Instalá Samsung GALAXY Apps.",
						"at": "Installieren Sie Samsung GALAXY Apps.",
						"au": "Please install Samsung GALAXY Apps.",
						"be_fr": "Installez Samsung GALAXY Apps.",
						"be": "Installeer Samsung GALAXY Apps.",
						"bg": "Моля, инсталирайте Samsung GALAXY Apps.",
						"br": "Instale os Samsung GALAXY Apps.",
						"ca": "Please install Samsung GALAXY Apps.",
						"ca_fr": "Veuillez installer Samsung GALAXY Apps.",
						"ch_fr": "Installez Samsung GALAXY Apps.",
						"ch": "Installieren Sie Samsung GALAXY Apps.",
						"cl": "Instala las Samsung GALAXY Apps.",
						"cn": "请安装 三星应用商店。",
						"co": "Instale Samsung GALAXY Apps.",
						"cz": "Nainstalujte službu Samsung GALAXY Apps.",
						"de": "Installieren Sie Samsung GALAXY Apps.",
						"dk": "Installer Samsung GALAXY Apps.",
						"ee": "Installige Samsung GALAXY Apps.",
						"eg": "الرجاء تثبيت Samsung GALAXY Apps.",
						"es": "Instale Samsung GALAXY Apps.",
						"fi": "Asenna Samsung GALAXY Apps.",
						"gr": "Εγκαταστήστε το Samsung GALAXY Apps.",
						"hk": "請安裝 Samsung GALAXY Apps。",
						"hk_en": "Please install Samsung GALAXY Apps.",
						"hr": "Instalirajte Samsung GALAXY Apps.",
						"hu": "Kérjük, telepítse a Samsung GALAXY Apps alkalmazást.",
						"id": "Instal Samsung GALAXY Apps.",
						"ie": "Please install Samsung GALAXY Apps.",
						"il": "התקן את Samsung GALAXY Apps.",
						"in": "Please install Samsung GALAXY Apps.",
						"ir": "لطفاً Samsung GALAXY Apps را نصب کنید.",
						"mt": "Installare Samsung GALAXY Apps.",
						"it": "Installare Samsung GALAXY Apps.",
						"jp": "Samsung GALAXY Apps をインストールしてください。",
						"kz_ru": "Установите приложение Samsung GALAXY Apps.",
						"latin_en": "Please install Samsung GALAXY Apps.",
						"latin": "Instale Samsung GALAXY Apps.",
						"levant": "Please install Samsung GALAXY Apps.",
						"lt": "Įdiekite „Samsung GALAXY Apps“.",
						"lv": "Lūdzu, instalējiet lietotni Samsung GALAXY Apps.",
						"mx": "Instala las Samsung GALAXY Apps.",
						"my": "Please install Samsung GALAXY Apps.",
						"n_africa": "Installez Samsung GALAXY Apps.",
						"nl": "Installeer Samsung GALAXY Apps.",
						"nz": "Please install Samsung GALAXY Apps.",
						"pe": "Instala las Samsung GALAXY Apps.",
						"ph": "Please install Samsung GALAXY Apps.",
						"pk": "Please install Samsung GALAXY Apps.",
						"pl": "Zainstaluj Samsung GALAXY Apps.",
						"pt": "Instale Samsung GALAXY Apps.",
						"ro": "Vă rugăm să instalaţi Samsung GALAXY Apps.",
						"rs": "Instalirajte Samsung GALAXY Apps.",
						"si": "Namestite aplikacije Samsung GALAXY Apps.",
						"ru": "Установите приложение Samsung GALAXY Apps.",
						"sa": "الرجاء تثبيت Samsung GALAXY Apps.",
						"sa_en": "Please install Samsung GALAXY Apps.",
						"se": "Installera Samsung GALAXY Apps.",
						"sec": "Samsung GALAXY Apps를 설치해 주세요.",
						"sg": "Please install Samsung GALAXY Apps.",
						"sk": "Nainštalujte si Samsung GALAXY Apps.",
						"th": "โปรดติดตั้ง Samsung GALAXY Apps",
						"tr": "Lütfen Samsung GALAXY Apps yükleyin.",
						"tw": "請安裝 Samsung GALAXY Apps。",
						"ua": "Установіть програму Samsung GALAXY Apps.",
						"ua_ru": "Установите приложение Samsung GALAXY Apps.",
						"uk": "Please install Samsung GALAXY Apps.",
						"ve": "Instale Samsung GALAXY Apps.",
						"vn": "Vui lòng cài đặt Samsung GALAXY Apps.",
						"za": "Please install Samsung GALAXY Apps."
					}
					jQueryOld('.galaxy_store .m_content-support .btn_default a, .galaxy_store .btn_kv.mobile_samsung a, .galaxy_apps .m_content-support .btn_default a').on('click', function (e) {
						/* launching */
						rundeepLink('samsungapps://MainPage/', 'Samsung Galaxy apps');
						e.preventDefault();
					});
				}
			}
		},
		resize: function () {
			var appsPopup = jQueryOld('.deeplink-popup'),
				winHeight = jQueryOld(window).height(),
				popupHeight = appsPopup.outerHeight();

			if (appsPopup.is('.active')) {
				jQueryOld('html').css("overflow", "hidden");
				appsPopup.css("top", (winHeight / 2) - (popupHeight / 2));
			}
		},
		init: function () {
			this.common.init();
			this.galaxyApps.init();
		}
	},
	imgSrcReplaceQa: function (target) {
		var _hrefCheck = location.href.indexOf("www.samsung.com") > -1 ? false : true;
		if (_hrefCheck) {
		    var _thisApps = jQueryOld(document).find(".apps, #apps_floating"),
		        qaPath = "/qa",
		        qaUrl,
		        checkKeyword = ["/star", "/crown", "/beyond", "/davinci", "/hubble", "/akm_images", "/hero"]; //플래그쉽 키워드 입력

		    if (target) {
		        _thisApps = target;
		    }

		    _thisApps.find("img, video source").each(function () {
		        var _this = jQueryOld(this);
		        var initCheck = false;
		        jQueryOld.each(checkKeyword, function (i, v) {
		            jQueryOld.each(["src", "data-src-pc", "data-src-mobile", "data-role-img"], function (j, w) {
		                if (_this.attr(w)) {
		                    if (_this.attr(w).indexOf(v) > -1) {
		                        initCheck = true;
		                    }
		                }
		            });
		            if (initCheck) {
		                var dataObj = _this.data();
		                for (var key in dataObj) {
		                    if (typeof dataObj[key] == "string" && dataObj[key].indexOf(qaPath) === -1) {
		                        dataObj[key] = dataObj[key].replace(v, v + qaPath);
		                    }
		                    if (key == "srcPc") {
		                        _this.attr("data-src-pc", dataObj[key]);
		                    } else if (key == "srcMobile") {
		                        _this.attr("data-src-mobile", dataObj[key]);
		                    } else if (key == "roleImg") {
								_this.attr("data-role-img", dataObj[key]);
							}
		                }
		                if (_this.attr("src").indexOf(qaPath) === -1) {
		                    qaUrl = _this.attr("src").replace(v, v + qaPath);
		                    _this.attr("src", qaUrl);
		                }
		            }
		        });
		    });
		}
	},
	imgLazyLoad: function (target) {
		function changeSrcPc(target) {
			if (target.attr("data-src-pc")) {
				target.attr("src", target.attr("data-src-pc"));
			}
		}

		function changeSrcMobile(target) {
			if (target.attr("data-src-mobile")) {
				target.attr("src", target.attr("data-src-mobile"));
			}
		}
		target.each(function () {
			var _this = jQueryOld(this);
			var flag = true;
			
			P5_APPS.addViewportEvent({
				triggerPositionPercent: 75,
				enter: function () {
					if (flag) {
						_this.next("section:not('.non-lazy')").addClass("lazy-load").find("img").each(function () {
							var __this = jQueryOld(this);
							if (P5_APPS.sizeMode == 1) {
								if (__this.attr("data-src-mobile")) {
									__this.attr("src", __this.attr("data-src-mobile"));
								} else {
									changeSrcPc(__this);
								}
								__this.error(function () {
									changeSrcPc(__this);
								});
							} else {
								if (__this.attr("data-src-pc")) {
									__this.attr("src", __this.attr("data-src-pc"));
								} else {
									changeSrcMobile(__this);
								}
								/*__this.error(function () {
									changeSrcMobile(__this);
								});*/
							}
						});
					}
					flag = false;
				}
			}, _this);
		});
	},
	gifAnimate: function () {
		jQueryOld('[data-role="gif-animation"]').each(function () {
			var _this = jQueryOld(this);
			var gifImgArray = [];
			_this.find("img").each(function () {
				var __this = jQueryOld(this);
				var targetImg = __this.filter(function () {
					return jQueryOld(this).attr("src").indexOf("_ani.gif") > -1;
				});
				if (targetImg.length) {
					gifImgArray.push(targetImg);
				}
			});
			if (gifImgArray.length) {
				P5_APPS.addViewportEvent({
					triggerPositionPercent: 30,
					enter: function () {
						jQueryOld.each(gifImgArray, function (i, v) {
							var imgSrc;
							if (v.attr("src").indexOf("?") > -1) {
								imgSrc = v.attr("src").split("?")[0];
							} else {
								imgSrc = v.attr("src").replace(".gif", ".gif?cash");
							}
							v.attr("src", imgSrc);
						});
					}
				}, _this);
			}
		});
	},
	video: {
		elem: {
			_videoWrap: jQueryOld(document).find('[data-role="content-video"]'),
			_userAgent: navigator.userAgent.toLowerCase(),
			_videoKeyObj: {},
			_videoBtnTextArray: []
		},

		init: function () {
			var $video = jQueryOld('.apps-content video');
			if ($video.length) {
				$video.each(function (idx) {
					var tagIdx = idx + 1;
					if (jQueryOld(this).data("video-index") === undefined) {
						jQueryOld(this).attr('data-video-index', tagIdx);
					}
				});
			}

			if (this.elem._videoWrap.length > 0) {
				this.set();
				this.event();
				// this.play.reset(jQueryOld(document).find(".video-area"));
			}
		},

		set: function () {

			this.elem._videoWrap.each(function () {
				var _this = jQueryOld(this);
				if (_this.find('video').length > 0) {
					_this.data('srcPc', _this.find('video source').data('srcPc'));
					_this.data('srcMobile', _this.find('video source').data('srcMobile'));
					_this.data('videoIdx', _this.find('video').data('videoIndex'));
					_this.find('video').remove();

					var _figure = _this.find('figure'),
						_figureBtnWrap = _this.parent().find('figure[data-video-button]'),
						videoSrc = '',
						_altTxt = _figure.data('alt-text') != undefined ? _figure.data('alt-text').split('.')[0] : "",
						_btnTitleTxt = _figure.data('title-text') != undefined ? _figure.data('title-text') : _figure.data('alt-text') || "",
						setIndex = jQueryOld(this).index('[data-role="content-video"]'),
						videoIdx = _this.data('videoIdx'),
						videoSource = '',
						videoButtonSource = '',
						clickCode = _figure.data('tagging') != undefined ? _figure.data('tagging') : ("apps:" + APPS_SERVICE_NAME + ":video_" + videoIdx),
						sizeClass = P5_APPS.sizeMode == 1 ? "mobile-check" : "pc-check";

					P5_APPS.video.elem._videoKeyObj = _this.find("figure[data-key-exc]").data("key-exc");

					if (_this.find("figure[data-button-text]").data("button-text") != undefined) {
						P5_APPS.video.elem._videoBtnTextArray = _this.find("figure[data-button-text]").data("button-text").split("/");
					} else if (_this.find("figure[data-toggle-on]").length > 0 && _this.find("figure[data-toggle-off]").length > 0) {
						P5_APPS.video.elem._videoBtnTextArray.push(_this.find("figure[data-toggle-on]").data("toggle-on"));
						P5_APPS.video.elem._videoBtnTextArray.push(_this.find("figure[data-toggle-on]").data("toggle-off"));
					} else {
						P5_APPS.video.elem._videoBtnTextArray = ["play", "stop"]
					}

					videoSrc = P5_APPS.sizeMode == 1 ? _this.data('srcMobile') : _this.data('srcPc');
					_figure.find("figcaption").remove().end().find("video").remove();
					_figureBtnWrap.find(".btn_media-play").remove();
					videoSource += '<video preload="metadata" muted="" class="' + sizeClass + '" id="tabMedia' + setIndex + '" playsinline>';
					videoSource += '<source src="' + videoSrc + '" type="video/mp4">';
					videoSource += '</video>';
					videoButtonSource = '<button type="button" id="btn_media-play' + videoIdx + '" class="btn_media-play" data-omni-type="microsite_contentinter" data-omni="' + clickCode + '" title="' + _btnTitleTxt + '"><span class="blind">' + P5_APPS.video.elem._videoBtnTextArray[0] + '</span></button>';

					_figure.append(videoSource);
					_figure.prepend('<figcaption class="blind">' + _altTxt + '</figcaption>');
					_figureBtnWrap.append(videoButtonSource);

					if (P5_APPS.video.elem._videoKeyObj != null || P5_APPS.video.elem._videoKeyObj != undefined) {
						_figure.find("figcaption").attr("data-key", P5_APPS.video.elem._videoKeyObj["data-alt-text"]);
						_figureBtnWrap.find(".btn_media-play").attr("data-key", P5_APPS.video.elem._videoKeyObj["data-title-text"] + "-title");
						_figureBtnWrap.find(".btn_media-play span.blind").attr("data-key", P5_APPS.video.elem._videoKeyObj["data-button-text"].split(",")[0]);
					}

					if (_this.find('video')[0].currentTime === 0 && P5_APPS.video.elem._userAgent.indexOf("mobile") > -1) {
						_figure.find(".video_poster").removeAttr("style");
					}
				}
			});
		},

		event: function () {

			jQueryOld(document).on('click', '.btn_media-play', function (e) {

				e.preventDefault();

				var _this = jQueryOld(this),
					_videoData = _this.parents('figure').data('video-button'),
					_video = jQueryOld(document).find('[data-video-match="' + _videoData + '"] video'),
					_poster = jQueryOld(document).find('[data-video-match="' + _videoData + '"] .video_poster');

				if (_video[0].currentTime === 0) {
					P5_APPS.video.play.on(_this, _video, _poster);
				} else {
					P5_APPS.video.play.off(_this, _video, _poster);
				}

			});

		},

		play: {

			elem: {
				_currentSizeMode: null,
				_prevSizeMode: null
			},

			loadCheck: function (_video, _poster) {
				var videoLoadCheck = setInterval(function () {
					if (_video[0].currentTime != 0) {
						_poster.hide();
						clearInterval(videoLoadCheck);
					}
				}, 300);
			},

			on: function (_this, _video, _poster) {
				var _taggingName = _this.data("omni");

				if (_video[0].currentTime == 0) {
					_video[0].play();
					_video[0].muted = true;
					_this.addClass("init");
					_this.find("span").text(P5_APPS.video.elem._videoBtnTextArray[1]);
					_this.attr("data-omni", _taggingName + "_stop");
				}

				this.loadCheck(_video, _poster);

				_video[0].addEventListener("ended", function () {
					_video[0].currentTime = 0;
					_video[0].pause();
					_this.removeClass("play , init");
					_this.attr("data-omni", _taggingName);
					_this.find("span").text(P5_APPS.video.elem._videoBtnTextArray[0]);
					_poster.removeAttr("style");
					// ie9
					if (jQueryOld.browser.ie && jQueryOld.browser.version == 9) {
						_this.css("opacity", 1);
					}
				}, false);

			},

			off: function (_this, _video, _poster) {
				var _taggingName = _this.data("omni");

				_this.removeClass("init");

				if (_video[0].paused) {
					_this.removeClass("pause").addClass("play");
					_video[0].play();
					_this.find("span").text(P5_APPS.video.elem._videoBtnTextArray[1]);
					_this.attr("data-omni", _taggingName + "_stop");
				} else {
					_this.removeClass("play").addClass("pause");
					_video[0].pause();
					_this.attr("data-omni", _taggingName);
					_this.find("span").text(P5_APPS.video.elem._videoBtnTextArray[0]);
				}

				// ie9
				if (jQueryOld.browser.ie && jQueryOld.browser.version == 9) {
					_this.css("opacity", 1).stop().animate({ "opacity": 0 }, 1000);
				}

			},

			reset: function (_wrap) {
				//_wrap은 video 영역을 감싼 element을 변수로 보내주면 됨
				var _videoWrapData = _wrap.find("[data-role='content-video']").data("video-match"),
					_video = _wrap.find("video");

				_video[0].addEventListener("ended", function () {
					_video[0].currentTime = 0;
					_video[0].pause();
					_wrap.find(".video_poster").show();
				}, false);

				if (jQueryOld(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").length > 0) {
					if (jQueryOld(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").is(".init")) {
						jQueryOld(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").removeClass("init");
					}

					if (jQueryOld(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").is(".pause")) {
						jQueryOld(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").removeClass("pause");
					}

					if (jQueryOld(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").is(".play")) {
						jQueryOld(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").removeClass("play");
					}
				}

			}
		},

		resize: function () {
			var sizeModeCustom = P5_APPS.sizeMode > 1 ? 2 : 1;
			this.elem._currentSizeMode = sizeModeCustom;

			if (this.elem._prevSizeMode != this.elem._currentSizeMode) {
				this.elem._prevSizeMode = sizeModeCustom;
				if (sizeModeCustom == 1) {
					if (jQueryOld('.pc-check').length > 0) {
						this.set();
					}
				} else if (sizeModeCustom > 1) {
					if (jQueryOld('.mobile-check').length > 0) {
						this.set();
					}
				}
			}
		}
	},
	slide: {

		elem: {
			_winHoriz: window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth,
			_slideWrap: jQueryOld(document).find("[data-role='slide-default'], [data-role='slide-pc'], [data-role='slide-mobile'], [data-role='slide-tab']"),
			_config: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				infinite: false,
				rtl: jQueryOld("html").is(".rtl")
			},
			_beforeSizeMode: null,
			_afterSizeMode: null,
			_resizeIdx: 0
		},
		init: function () {
			if (this.elem._slideWrap.length > 0) {
				this.event();
			}
		},
		event: function () {

			var winHoriz = P5_APPS.slide.elem._winHoriz;

			this.elem._slideWrap.each(function () {
				var type = jQueryOld(this).data("role"),
					config = P5_APPS.slide.elem._config,
					optionConfig = jQueryOld(this).data("role-option") != undefined ? eval("(" + jQueryOld(this).data("role-option") + ")") : false,
					adaptOptionCheck = false;

				if (optionConfig !== false) {
					config = P5_APPS.slide.configRefresh(config, optionConfig, type);
					
					if (type === "slide-default" && Object.keys(optionConfig).length > 1) {
						for (var key in config) {
							for (var nKey in config[key]) {
								if (nKey === "adaptiveHeight") {
									adaptOptionCheck = {};
									adaptOptionCheck[key] = true;
								}
							}
						}
					} else {
						for (var key in config) {
							if (key === "adaptiveHeight") {
								adaptOptionCheck = true;
							}
						}
					}
				}

				switch (type) {

					case "slide-default":

						if (optionConfig !== false) {

							if (winHoriz > 768) {

								if (jQueryOld(this).is(".slick-initialized")) {
									jQueryOld(this).slick("unslick");
								}

								if (!jQueryOld(this).is(".slick-initialized")) {
									if (typeof config["pc"] !== "undefined") {
										jQueryOld(this).slick(config["pc"]);
									} else {
										jQueryOld(this).slick(P5_APPS.slide.elem._config);
									}

									if (adaptOptionCheck["pc"] === true) adaptBugFix(jQueryOld(this));
								}

							} else {

								if (jQueryOld(this).is(".slick-initialized")) {
									jQueryOld(this).slick("unslick");
								}

								if (!jQueryOld(this).is(".slick-initialized")) {
									if (typeof config["mobile"] !== "undefined") {
										jQueryOld(this).slick(config["mobile"]);
									} else {
										jQueryOld(this).slick(P5_APPS.slide.elem._config);
									}

									if (adaptOptionCheck["mobile"] === true) adaptBugFix(jQueryOld(this));
								}

							}

						} else {
							if (!jQueryOld(this).is(".slick-initialized")) {
								jQueryOld(this).slick(config);

								if (adaptOptionCheck === true) adaptBugFix(jQueryOld(this));
							}
						}

						P5_APPS.slide.tagging(jQueryOld(this));
						P5_APPS.slide.accessibility.slide(jQueryOld(this));

						break;

					case "slide-pc":

						if (winHoriz > 768) {
							if (!jQueryOld(this).is(".slick-initialized")) {
								jQueryOld(this).slick(config);
								P5_APPS.slide.tagging(jQueryOld(this));
								P5_APPS.slide.accessibility.slide(jQueryOld(this));

								if (adaptOptionCheck === true) adaptBugFix(jQueryOld(this));
							}
						} else {
							if (jQueryOld(this).is(".slick-initialized")) {
								jQueryOld(this).slick("unslick");
							}
						}

						break;

					case "slide-mobile":

						if (winHoriz > 768) {
							if (jQueryOld(this).is(".slick-initialized")) {
								jQueryOld(this).slick("unslick");
							}
						} else {
							if (!jQueryOld(this).is(".slick-initialized")) {
								jQueryOld(this).slick(config);
								P5_APPS.slide.tagging(jQueryOld(this));
								P5_APPS.slide.accessibility.slide(jQueryOld(this));

								if (adaptOptionCheck === true) adaptBugFix(jQueryOld(this));
							}
						}

						break;

					case "slide-tab":

						var slideWrap = jQueryOld(this).find(".f_container .inner").length > 0 ? jQueryOld(this).find(".f_container .inner") : jQueryOld(this);

						if (winHoriz > 768) {
							if (slideWrap.is(".slick-initialized")) {
								slideWrap.slick("unslick");
							}
							P5_APPS.slide.tabEvent.click(jQueryOld(this), APPS_SERVICE_NAME);
						} else {
							if (!slideWrap.is(".slick-initialized")) {
								slideWrap.slick(config);
								P5_APPS.slide.tagging(slideWrap);
								P5_APPS.slide.accessibility.slide(slideWrap);
								P5_APPS.slide.tabEvent.swipe(slideWrap);

								if (adaptOptionCheck === true) adaptBugFix(jQueryOld(this));
							}
						}

						break;

					default:
						break;
				}

				//common accessibility
				P5_APPS.slide.accessibility.common(jQueryOld(this));

				function adaptBugFix(_slide) {
					//adaptiveHeight : true - bug fix
					_slide.find(".slick-slide.slick-current img").load(function () {
						var _height = _slide.find(".slick-slide.slick-current").outerHeight();
						_slide.find(".slick-list").css("height", _height);
					});
				}

			});

		},
		tabEvent: {

			click: function ($this, service) {

				switch (service) {
					case "find my mobile":
						$this.find(".item_box a").off();
						$this.find(".item_box a:first").attr("title", "selected");
						$this.find(".item_box a").on("click", function (e) {
							e.preventDefault();
							var _idx = jQueryOld(this).parents(".item_box").index(),
								_imgContent = jQueryOld(this).parents("[data-role='fade-slide']").find(".overlay_wrap .slide_img").eq(_idx);

							jQueryOld(this).parents(".item_box").addClass("active").siblings().removeClass("active");
							jQueryOld(this).attr("title", "selected").parents(".item_box").siblings().find("a").removeAttr("title");
							// _imgContent.addClass("active");
							_imgContent.stop().fadeIn(function () {
								jQueryOld(this).addClass('active');
								jQueryOld(this).removeAttr('style');
							}).siblings().stop().fadeOut(function () {
								jQueryOld(this).removeClass('active');
								jQueryOld(this).removeAttr('style');
							});
						});

						break;
				
					default:
						$this.find(".tab-slide-cont .tab-title a").off();
						$this.find(".tab-slide-cont .tab-title a").on("click", function (e) {
							e.preventDefault();
							jQueryOld(this).parents(".tab-slide-cont").addClass("active").siblings().removeClass("active");
							jQueryOld(this).attr("title", "selected").parents(".tab-slide-cont").siblings().find(".tab-title a").removeAttr("title");
						});

						break;
				}

			},

			swipe: function ($this) {
				$this.slick("slickGoTo", $this.find(".tab-slide-cont.active").index());
				$this.on("afterChange", function (event, slick, idx) {
					$this.find(".tab-slide-cont").eq(idx).addClass("active").siblings().removeClass("active");
				});
			}

		},
		configRefresh: function (config, reConfig, type) {

			if (typeof (config) !== typeof (reConfig)) {
				return config;
			}

			if (type === "slide-default") {
				var newConfig = {};
				for (var key in reConfig) {
					if (newConfig[key] === undefined) {
						newConfig[key] = {};
						newConfig[key] = config;
					}
					newConfig[key] = jQueryOld.extend({}, newConfig[key], reConfig[key]);
				}
				config = newConfig;
			} else {
				config = jQueryOld.extend({}, config, reConfig);
			}
			
			return config;

		},
		tagging: function ($this) {

			var setctionTit = $this.parents("section").find(".f_header > .tit").text().toLowerCase(),
				type = $this.data("role"),
				dotsWrap = $this.find(".slick-dots"),
				dotsList = dotsWrap.find(">ul >li"),
				currentTit = "",
				nextTit = "",
				nextIdx = 0,
				prevTit = "",
				prevIdx = 0;

			if (APPS_SERVICE_NAME === "galaxy-themes") {
				
				dotsList.each(function (i) {
					/* 개편 필요 */
					if (type === "slide-default") {
						var tit = $this.find(".slick-slide").eq(i).find(">.tit").text().toLowerCase(),
							dotsBtn = jQueryOld(this).find(">button");
	
						dotsBtn.attr("data-omni-type", "microsite_pcontentinter");
						dotsBtn.attr("data-omni", "apps:" + APPS_SERVICE_NAME + ":" + setctionTit + "_" + tit);
					} else {
						var applyingCheck = $this.parents("section").is(".m_content-applying"),
							infinityDisplayCheck = $this.parents(".card_list_wrap").is("#infinity-O-display");

						if (applyingCheck) {
							jQueryOld(this).find(">button").attr("data-omni-type", "microsite_pcontentinter");
							jQueryOld(this).find(">button").attr("data-omni", "apps:galaxy-themes:applying-themes:select:feature02_step" + (i + 1));
						}

						if (infinityDisplayCheck) {
							jQueryOld(this).find(">button").attr("data-omni-type", "microsite_pcontentinter");
							jQueryOld(this).find(">button").attr("data-omni", "apps:galaxy-themes:huge-selection-of-themes:select:feature05_infinity-o_image" + (i + 1));
						}
					}
				});

				if ($this.find(".slick-arrow").length > 0) {

					currentTit = $this.find(".slick-slide").eq(0).find(">.tit").text().toLowerCase();
					nextTit = $this.find(".slick-slide").eq(1).find(">.tit").text().toLowerCase();

					$this.find(".slick-arrow").attr("data-omni-type", "microsite_pcontentinter");
					$this.find(".slick-arrow.slick-prev").attr("data-omni", "apps:" + APPS_SERVICE_NAME + ":" + setctionTit + "_" + currentTit);
					$this.find(".slick-arrow.slick-next").attr("data-omni", "apps:" + APPS_SERVICE_NAME + ":" + setctionTit + "_" + nextTit);
				}

				$this.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
					
					prevIdx = nextSlide - 1 < 0 ? 0 : nextSlide - 1;
					nextIdx = nextSlide + 1 > $this.find(".slick-slide").length - 1 ? $this.find(".slick-slide").length : nextSlide + 1;
					
					prevTit = $this.find(".slick-slide").eq(prevIdx).find(">.tit").text().toLowerCase();
					nextTit = $this.find(".slick-slide").eq(nextIdx).find(">.tit").text().toLowerCase();
					$this.find(".slick-arrow.slick-prev").attr("data-omni", "apps:" + APPS_SERVICE_NAME + ":" + setctionTit + "_" + prevTit);
					$this.find(".slick-arrow.slick-next").attr("data-omni", "apps:" + APPS_SERVICE_NAME + ":" + setctionTit + "_" + nextTit);

				});

			} else {
				if ($this.find(".slick-dots").length > 0) {
					dotsList.each(function (i) {
						var dotsBtn = jQueryOld(this).find(">button");
						dotsBtn.attr("data-omni-type", "microsite_pcontentinter");
						dotsBtn.attr("data-omni", "rolling:index_" + (i + 1));
					});
				}
	
				if ($this.find(".slick-arrow").length > 0) {
					$this.find(".slick-arrow").attr("data-omni-type", "microsite_pcontentinter");
					$this.find(".slick-arrow.slick-prev").attr("data-omni", "rolling:left arrow");
					$this.find(".slick-arrow.slick-next").attr("data-omni", "rolling:right arrow");
				}
			}

		},
		accessibility: {

			common: function ($this) {
				if ($this.find("figure figcaption").length > 0) {
					if ($this.find("figure figcaption").is(".blind") && $this.find(".tit, .title, .sub-title").length > 0) {
						$this.find(".tit, .title, .sub-title").attr("aria-hidden", true);
					}
				}

				if (P5_APPS.slide.elem._winHoriz > 768) {
					if ($this.find(".title a, .sub-title a, .tit a").length > 0) {
						$this.find(".title a, .sub-title a, .tit a").removeAttr("tabindex");
						$this.find(".tab-slide-cont.active .title a, .tab-slide-cont.active .sub-title a, .tab-slide-cont.active .tit a").attr("title", "selected");
					}
				} else {
					if ($this.find(".title a, .sub-title a, .tit a").length > 0) {
						$this.find(".title a, .sub-title a, .tit a").removeAttr("title");
					}
				}
			},

			slide: function ($this) {
				setTimeout(function () {
					if ($this.find(".slick-list a").length > 0 && $this.find(".slick-list a").is(".mobile_samsung") === false) {
						$this.find(".slick-list a").attr("tabindex", "-1");
					}
				}, 1500);

				$this.find(".slick-slide").not(".slick-cloned").each(function (i) {
					var caption = $this.find(".slick-slide").eq(i).find("figcaption").length > 0 || $this.find(".slick-slide").eq(i).find(".title a").length > 0 || $this.find(".slick-slide").eq(i).find(">.tit").length > 0 ? $this.find(".slick-slide").eq(i).find("figcaption").text() || $this.find(".slick-slide").eq(i).find(".title a").text() || $this.find(".slick-slide").eq(i).find(".tit").text() : null,
						dotsCheck = $this.find(".slick-dots").length > 0 ? true : false,
						dotsText = caption !== null ? "slide" + (i + 1) + " : " + caption : "slide" + (i + 1);
					
					if (dotsCheck) {
						$this.find(".slick-dots >ul >li").eq(i).find("button").text(dotsText);
					}
				});

				$this.on("swipe", function (event, slick) {
					var currentSlide = slick.currentSlide,
						thisSlide = jQueryOld(slick.$slides[currentSlide]),
						thisWrap = thisSlide.parents(".slick-slider"),
						currentScroll = jQueryOld(window).scrollTop();

					if (P5_APPS.slide.elem._winHoriz < 769) {
						thisWrap.find(".slick-dots >ul >li").eq(currentSlide).find("button").focus();
						jQueryOld(window).scrollTop(currentScroll);

						setTimeout(function () {
							if ($this.find(".slick-list a").length > 0 && $this.find(".slick-list a").is(".mobile_samsung") === false) {
								$this.find(".slick-list a").attr("tabindex", "-1");
							}
						}, 1500);
					}
				});

				$this.find(".slick-slide").attr("aria-hidden", true);
				$this.find(".slick-slide a").attr("aria-hidden", true);
				$this.find(".slick-slide a").attr("tabindex", -1);
				$this.find(".slick-slide.slick-active").attr("aria-hidden", false);
				$this.find(".slick-slide.slick-active a").attr("aria-hidden", false);
				$this.find(".slick-slide.slick-active a").attr("tabindex", 0);

				$this.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
					$this.find(".slick-slide").attr("aria-hidden", true);
					$this.find(".slick-slide a").attr("aria-hidden", true);
					$this.find(".slick-slide a").attr("tabindex", -1);
					$this.find(".slick-slide").eq(nextSlide).attr("aria-hidden", false);
					$this.find(".slick-slide").eq(nextSlide).find("a").attr("aria-hidden", false);
					$this.find(".slick-slide").eq(nextSlide).find("a").attr("tabindex", 0);
				});

				$this.find(".slick-dots button, .slick-arrow").on("click", function (e) {
					e.preventDefault();

					setTimeout(function () {
						if ($this.find(".slick-list a").length > 0 && $this.find(".slick-list a").is(".mobile_samsung") === false) {
							$this.find(".slick-list a").attr("tabindex", "-1");
						}
					}, 1500);
				});
			}

		},
		resize: function () {

			this.elem._winHoriz = window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth;

			var sizeMode = P5_APPS.sizeMode > 1 ? 2 : 1;
			this.elem._beforeSizeMode = sizeMode;

			if (this.elem._beforeSizeMode != this.elem._afterSizeMode && this.elem._resizeIdx > 0) {
				this.elem._afterSizeMode = sizeMode;
				P5_APPS.slide.init();
			} else if (this.elem._resizeIdx < 1){
				this.elem._resizeIdx = this.elem._resizeIdx + 1;
			}

		}

	},
	motion: {

		common: {
			elem: {
				_uspWrap: jQueryOld(document).find(".apps"),
				_toggle: jQueryOld(document).find('[data-role="btn-content-toggle"]'),
				_scrollMotion: jQueryOld(document).find('.scroll-motion'),
				_kvTitle: jQueryOld(document).find(".apps .fade-in [class*='f_header-']"),
				_kvImage: jQueryOld(document).find(".apps .fade-in figure img"),
				_tabWrap: jQueryOld(document).find("[data-role*='tab-']")
			},
			uspIntroMotion: function () {
				jQueryOld('.apps').addClass('show');
			},
			kvFadeIn: function () {
				this.elem._kvImage.animate({ opacity: 1 }, 1300, 'easeInOutQuad'); this.elem._kvTitle.delay(1000).animate({ opacity: 1 }, 1500, 'easeInOutQuad');
			},
			toggle: function () {
				var $button = this.elem._toggle;
				$button.each(function () {
					 var openCode = "apps:" + APPS_SERVICE_NAME.toLowerCase() + ":see more";
					 jQueryOld(this).attr('data-omni', openCode);
				});
				$button.on('click', function (e) {
					var $wrap = jQueryOld(this).closest('[data-role="toggle-container"]'),
						$content = $wrap.find('[data-role="toggle-content"]'),
						openTxt = $wrap.data('toggle-on'),
						closeTxt = $wrap.data('toggle-off'),
						openTitle = $wrap.data('toggle-title-on'),
						closeTitle = $wrap.data('toggle-title-off'),
						openCode = "apps:" + APPS_SERVICE_NAME.toLowerCase() + ":see more",
						closeCode = "apps:" + APPS_SERVICE_NAME.toLowerCase() + ":see less",
						currentSCroll;
					if ($wrap.hasClass('active')) {
						$content.stop().slideUp(function () {
							jQueryOld(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').focus();
							jQueryOld(this).closest('[data-role="toggle-container"]').removeClass('active');
							jQueryOld(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').text(openTxt);
							jQueryOld(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').attr('title', openTitle);
							jQueryOld(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').attr('data-omni', openCode);
						});
						if (window.innerWidth < 769) {
							currentSCroll = $wrap.offset().top;
							jQueryOld(window).scrollTop(currentSCroll);
						}
					} else {
						$content.stop().slideDown(function () {
							jQueryOld(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').text(closeTxt);
							jQueryOld(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').attr('title', closeTitle);
							jQueryOld(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').attr('data-omni', closeCode);
						});
						$wrap.addClass('active');
		
						var $focusTarget = $content.find('[data-role="focus-target"]');
						if ($focusTarget.length) {
							$focusTarget.attr("tabindex", 0).focus();
							$focusTarget.off("focusout").on("focusout", function () {
								jQueryOld(this).removeAttr("tabindex");
							});
						}
					}
		
					e.preventDefault();
				});
			},
			scrollMotion: {
				vari : {
					lastPositionTop : 0,
					sectionUpInCheck : true,
					sectionUpOutCheck : true,
					sectionDownInCheck : false,
					sectionDownOutCheck : false,
					screenChangeCheck : false,
					target01 : null,
					target02 : null,
					sectionH : null,
					sectionOffsetTop : null,
					motionTarget : null,
					targetFixedH : null,
					screenChangeOffsetTop : null,
					blockWheel : function(){
						jQueryOld(window).on("mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll", function (e) {
							e.preventDefault();
							return;
						});
					},
					playWheel : function() {
						jQueryOld(window).off(".disableScroll");
					}
				},
				init : function(){
					this.vari.target01 				= jQueryOld(".scroll-motion.target01");
					this.vari.target02 				= jQueryOld(".scroll-motion.target02");
					this.vari.sectionH 				= this.vari.target01.innerHeight() + this.vari.target02.innerHeight();
					this.vari.sectionOffsetTop 		= jQueryOld(".scroll-motion").offset().top;
					this.vari.motionTarget 			= this.vari.target01.find("figure");
					this.vari.screenChangeOffsetTop = this.vari.target02.offset().top;
					this.vari.target01.find("figure:eq(0) img").load(function(){
						P5_APPS.motion.common.scrollMotion.vari.targetFixedH 	= P5_APPS.motion.common.scrollMotion.vari.target01.find("figure:eq(0) img").height() * 0.7;
					});
				},
				reset : function(){
					this.vari.motionTarget.removeClass("fixed2").removeAttr("style");
					this.vari.sectionUpInCheck = true;
					this.vari.sectionUpOutCheck = true;
					this.vari.sectionDownInCheck = false;
					this.vari.sectionDownOutCheck = false;
					this.vari.screenChangeCheck = false;
				},
				upEvent : function () {
					// 섹션 진입
					if( jQueryOld(window).scrollTop() <= (this.vari.sectionOffsetTop + this.vari.sectionH - this.vari.targetFixedH) && ! this.vari.sectionUpInCheck ){						
						if ( (jQueryOld.browser.ie || jQueryOld("html").is(".ie")) && P5_APPS.scrollType == "mousewheel"  ){
							this.vari.blockWheel();
							this.vari.motionTarget.stop(false, false).animate({
								"top": jQueryOld(window).scrollTop() - this.vari.sectionOffsetTop
							}, 300, function () {
								P5_APPS.motion.common.scrollMotion.vari.motionTarget.removeAttr("style").addClass("fixed2");
								setTimeout(function () {
									P5_APPS.motion.common.scrollMotion.vari.playWheel();
								}, 100);
							});
						} else {
							this.vari.motionTarget.removeAttr("style").addClass("fixed2");
						}
						
						this.vari.sectionUpInCheck = true;
						this.vari.sectionDownOutCheck = false;
					}
					// 섹션 이탈
					if( jQueryOld(window).scrollTop() <= this.vari.sectionOffsetTop && ! this.vari.sectionUpOutCheck ){
						this.vari.motionTarget.removeClass("fixed2").css("top", 0);
						this.vari.sectionUpInCheck = true;
						this.vari.sectionUpOutCheck = true;
						this.vari.sectionDownInCheck = false;
					}
					// 스크린 변경
					if( jQueryOld(window).scrollTop() <=  this.vari.screenChangeOffsetTop && this.vari.screenChangeCheck ){
						this.vari.target01.find("figure").eq(2).removeClass("moving");
						this.vari.screenChangeCheck = false;	
					}
				},
				downEvent : function () {
					// 섹션 진입
					this.vari.sectionOffsetTop = jQueryOld(".scroll-motion").offset().top;
					if( jQueryOld(window).scrollTop() >= this.vari.sectionOffsetTop && ! this.vari.sectionDownInCheck ){
						if ( (jQueryOld.browser.ie || jQueryOld("html").is(".ie")) && P5_APPS.scrollType == "mousewheel"  ){
							this.vari.blockWheel();
							this.vari.motionTarget.stop(false, false).animate({
								"top": jQueryOld(window).scrollTop() - this.vari.sectionOffsetTop
							}, 300, function () {
								P5_APPS.motion.common.scrollMotion.vari.motionTarget.removeAttr("style").addClass("fixed2");
								setTimeout(function () {
									P5_APPS.motion.common.scrollMotion.vari.playWheel();
								}, 100);
							});
						} else {
							this.vari.motionTarget.removeAttr("style").addClass("fixed2");
						}

						this.vari.downTopCheck = false;
						this.vari.sectionUpOutCheck = false;
						this.vari.sectionDownInCheck = true;
					}
					// 섹션 이탈
					if( (jQueryOld(window).scrollTop() >= this.vari.sectionOffsetTop + ( this.vari.sectionH  - this.vari.targetFixedH )) && ! this.vari.sectionDownOutCheck ){
						this.vari.motionTarget.removeClass("fixed2").css("top",  this.vari.sectionH - this.vari.targetFixedH);
						this.vari.sectionDownOutCheck = true;
						this.vari.sectionUpInCheck = false;
					}
					// 스크린 변경
					if( jQueryOld(window).scrollTop() >=  this.vari.screenChangeOffsetTop && ! this.vari.screenChangeCheck ){
						this.vari.target01.find("figure").eq(2).addClass("moving");
						this.vari.screenChangeCheck = true;	
					}
				},
				resize: function () {
					if( P5_APPS.sizeMode > 1 ){
						this.init();
					} else {
						this.reset();
					}
				},
				scroll: function () {
					if( P5_APPS.sizeMode > 1 ){
						if( jQueryOld(window).scrollTop() > this.vari.lastPositionTop ){
							this.downEvent();
						} else {
							this.upEvent();
						}
						this.vari.lastPositionTop = jQueryOld(window).scrollTop(); 
					}
				}
			},
			tab: {
				elem: {
					_type: null,
					_swiper: null,
					_swiperConfig: {
						mobile: {
							direction: 'horizontal',
							slidesPerView: 'auto',
							freeMode: false,
							loop: false,
							watchSlidesProgress: true,
							allowTouchMove: false,
							breakpoints: {
								768: {
									direction: 'horizontal',
									slidesPerView: 'auto',
									freeMode: true,
									loop: false,
									touchMoveStopPropagation: true,
									touchStartPreventDefault: true,
									watchSlidesProgress: true,
									allowTouchMove: true
								}
							}
						}
					},
					_thisWrap: null,
					_slideIdx: 0,
					_beforeSizeMode: 0,
					_afterSizeMode: 0
				},

				typeCheck: function(_this){
					var _data = _this.data("role");
					return this.elem._type = _data.trim();
				},

				setting: function () {

					var _tabWrap = P5_APPS.motion.common.elem._tabWrap,
						_type = null;
					
					_tabWrap.each(function () {

						_type = P5_APPS.motion.common.tab.typeCheck(jQueryOld(this));

						switch(_type){
	
							case "tab-swiper-mobile":
								
								var _swipeWrap = _tabWrap.find(".swiper-container"),
									_config = P5_APPS.motion.common.tab.elem._swiperConfig.mobile;
								
								P5_APPS.motion.common.tab.elem._swiper = new Swiper(_swipeWrap, _config);
	
								break;
	
							default:
								break;
	
						}
					});

				},

				event: function () {

					var _tabWrap = P5_APPS.motion.common.elem._tabWrap,
						_tabBtn = _tabWrap.find(".tab_btn");

					_tabBtn.on("click", function (e) {

						e.preventDefault();
						var _type = jQueryOld(this).parents("[data-role*='tab-']").next("[data-role*='slide-']").length > 0 ? "slide" : "default",
							_content = jQueryOld(this).parents("[data-role*='tab-']").next(".media_cont_wrap"),
							_idx = jQueryOld(this).parents(".tab_btn_wrap").index();

						jQueryOld(this).parents(".tab_btn_wrap").addClass("active").siblings().removeClass("active");

						if (_type === "slide") {
							P5_APPS.motion.common.tab.elem._thisWrap = jQueryOld(this).parents("[data-role*='tab-']");
							P5_APPS.motion.common.tab.elem._slideIdx = _idx;
						}
						P5_APPS.motion.common.tab.motion(jQueryOld(this), _type, _content);
						P5_APPS.motion.common.tab.accessibility(jQueryOld(this));

					});

					_tabWrap.each(function () {

						var _this = jQueryOld(this),
							_content = _this.next(".media_cont_wrap"),
							_type = _this.next("[data-role*='slide-']").length > 0 ? "slide" : "default";

						switch (_type) {
							case "slide":
								_content.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
									P5_APPS.motion.common.tab.elem._thisWrap = _this.parents("[data-role*='tab-']");
									P5_APPS.motion.common.tab.elem._slideIdx = nextSlide;
									_this.find(".tab_btn_wrap").eq(nextSlide).addClass("active").siblings().removeClass("active");
									_this.find(".tab_btn_wrap").eq(nextSlide).find(".tab_btn").trigger("click");
									_this.find(".tab_btn_wrap").eq(nextSlide).siblings().find(".tab_btn").blur();
								});

								break;
						
							default:
								break;
						}

					});

				},

				motion: function (_this, _type, _content) {

					switch (_type) {
						case "slide":

							var _idx = _this.parents(".tab_btn_wrap").index();
								_swiper = P5_APPS.motion.common.tab.elem._swiper,
								_wrapWidth = _this.parents(".inner.swiper-wrapper").outerWidth(),
								_btnWidth = _this.outerWidth(),
								_left =  jQueryOld("html").hasClass("rtl") ? jQueryOld(window).width() - (_btnWidth) - (_this.offset().left) : _this.offset().left,
								_centerValue = (_wrapWidth / 2) - (_btnWidth / 2),
								_transitionValue = (_left - _centerValue) + (_swiper.translate * (jQueryOld("html").hasClass("rtl") ? 1 : -1 )),
								_transitionArrIdx = 0

							_content.slick("slickGoTo", _idx);

							if (window.innerWidth < 769) {
								if (_transitionValue > 0 && _transitionValue < _swiper.snapGrid[_swiper.snapGrid.length - 1]) {
									_this.parents(".inner.swiper-wrapper").removeAttr("style");
									_swiper.setTranslate(-_transitionValue);
								} else {
									_transitionArrIdx = _transitionValue < 0 ? 0 : _swiper.snapGrid.length - 1;
									_this.parents(".inner.swiper-wrapper").removeAttr("style");
									_swiper.setTranslate(- _swiper.snapGrid[_transitionArrIdx]);
								}
							}
							
							break;
					
						default:
							break;
					}

				},

				accessibility: function(_this){

					_this.attr("aria-selected", true).parents(".tab_btn_wrap").siblings().find(".tab_btn").removeAttr("aria-selected");

				},

				tagging: function () {

				},

				resize: function () {
					this.elem._winHoriz = window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth;

					var sizeMode = P5_APPS.sizeMode > 1 ? 2 : 1;
					this.elem._beforeSizeMode = sizeMode;

					if (this.elem._beforeSizeMode != this.elem._afterSizeMode) {
						this.elem._afterSizeMode = sizeMode;
						
						if (P5_APPS.motion.common.tab.elem._thisWrap !== null && P5_APPS.motion.common.tab.elem._thisWrap !== undefined) {
							var _type = P5_APPS.motion.common.tab.elem._thisWrap.next("[data-role*='slide-']").length > 0 ? "slide" : "default",
								_idx = P5_APPS.motion.common.tab.elem._slideIdx;
							
							switch (_type) {
								case "slide":
									
									var _tabWrap = P5_APPS.motion.common.tab.elem._thisWrap;
									setTimeout(function () {
										_tabWrap.find(".tab_btn_wrap").eq(_idx).find(".tab_btn").trigger("click");
									}, 0);

									break;
							
								default:
									break;
							}
						}

					}
				},

				init: function () {
					this.setting();
					this.event();
				}

			},
			init: function () {
				if (this.elem._uspWrap.length > 0) { this.uspIntroMotion(); }
				if (this.elem._kvTitle.length > 0 && this.elem._kvImage.length > 0) { this.kvFadeIn(); }
				if (this.elem._toggle.length > 0) { this.toggle(); }
				if (this.elem._scrollMotion.length > 0) { this.scrollMotion.init(); }
				if (this.elem._tabWrap.length > 0) { this.tab.init(); }
			},
			resize: function () {
				if (this.elem._scrollMotion.length > 0) { this.scrollMotion.resize(); }
				if (this.elem._tabWrap.length > 0) { this.tab.resize(); }
			},
			scroll: function () {
				if (this.elem._scrollMotion.length > 0) { this.scrollMotion.scroll(); }
			}
		},

		smartCall: {
			elem: {
				_moveTab: jQueryOld(document).find(".smart-call .move_tab_list")
			},

			locationAnimate: function () {
				if ((APPS_SITE_CODE === "au" && location.href.indexOf("www.samsung.com") > -1) || location.pathname.indexOf("/fr/apps/smart-call") > -1) {
					var _this = jQueryOld("[data-location]");
					_this.on("click", function () {
						var _locationClass = jQueryOld(this).data("location"),
							_locationTop = jQueryOld("." + _locationClass).offset().top;
						jQueryOld("html, body").stop().animate({
							scrollTop: _locationTop
						}, 1000, "easeOutSine");
					});
				} else {
					var _btn = jQueryOld(".move_tab_list").find("a"),
						_id, _top;
					_btn.on("click", function (e) {
						e.preventDefault();
						_id = jQueryOld(this).attr("href")
						_top = jQueryOld(document).find(_id).offset().top - 20;

						//landing floating bar
						_top = jQueryOld(document).find("#apps_floating").length > 0 ? _top - jQueryOld(document).find("#apps_floating").outerHeight() : _top;

						jQueryOld("html, body").stop().animate({
							scrollTop: _top
						}, 1000, "easeOutSine", function () {
							jQueryOld(document).find(_id).attr("tabindex", 0).focus();
						});

						loactionFocusOut(_id);
					});

					function loactionFocusOut(_id) {
						jQueryOld(document).find(_id).off("focusout").on("focusout", function () {
							jQueryOld(document).find(_id).removeAttr("tabindex");
						});
					}
				}
			},

			init: function () {
				if (this.elem._moveTab.length > 0) { this.locationAnimate(); }
			}
			
		},

		samsungMembers: {

			elem: {
				_canvasWrap: jQueryOld(document).find(".samsung_members .m_content-best")
			},

			canvasMotion: function () {
				var _this = jQueryOld(".m_content-best"), ico1 = jQueryOld(".ico_1"), ico2 = jQueryOld(".ico_2"), ico3 = jQueryOld(".ico_3"), ico4 = jQueryOld(".ico_4"), ico_animate = jQueryOld(".obj_animate"), setTimeoutVarArray = [], reverseDelay = 1000, progressItv;

				function progress1() { ico1.find(".obj_animate.s1").stop().animate({ "height": 0 }, 300, "easeInOutSine", function () { ico1.find(".obj_animate.s2").stop().animate({ "height": 0 }, 300); }); setTimeout(function () { ico1.find(".obj_animate.s2").stop().animate({ "height": "100%" }, 300, "easeInOutSine", function () { ico1.find(".obj_animate.s1").stop().animate({ "height": "100%" }, 300); }); }, 1000); }

				function progress2() { ico2.find(".obj_animate.s1").circleProgress({ startAngle: -Math.PI / 4 * 1, value: 0, animationStartValue: 0.5, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '40' }); ico2.find(".obj_animate.s2").circleProgress({ startAngle: -Math.PI / 4 * 5, value: 0, animationStartValue: 0.5, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '40' }); setTimeout(function () { ico2.find(".obj_animate.s1").circleProgress('value', 0.5); }, reverseDelay); setTimeout(function () { ico2.find(".obj_animate.s2").circleProgress('value', 0.5); }, reverseDelay); }

				function progress3() { ico3.find(".obj_animate.s1").circleProgress({ startAngle: -Math.PI / 4 * 3, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '55' }); ico3.find(".obj_animate.s2").circleProgress({ startAngle: -Math.PI / 4 * 2, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '55' }); ico3.find(".obj_animate.s3").circleProgress({ startAngle: -Math.PI / 4 * 1, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '55' }); ico3.find(".obj_animate.s4").circleProgress({ startAngle: -Math.PI / 4 * 4, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '55' }); setTimeout(function () { ico3.find(".obj_animate.s1").circleProgress('value', 1); }, reverseDelay); setTimeout(function () { ico3.find(".obj_animate.s2").circleProgress('value', 1); }, reverseDelay); setTimeout(function () { ico3.find(".obj_animate.s3").circleProgress('value', 1); }, reverseDelay); setTimeout(function () { ico3.find(".obj_animate.s4").circleProgress('value', 1); }, reverseDelay); }

				function progress4() { ico4.find(".obj_animate.s1").circleProgress({ startAngle: -Math.PI / 4 * 4, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '35' }); ico4.find(".obj_animate.s2").circleProgress({ startAngle: -Math.PI / 4 * 3, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '30', reverse: true }); setTimeout(function () { ico4.find(".obj_animate.s1").circleProgress('value', 1); }, reverseDelay); setTimeout(function () { ico4.find(".obj_animate.s2").circleProgress('value', 1); }, reverseDelay); }

				function play() { progress1(); setTimeoutVarArray.push(setTimeout(function () { jQueryOld(".obj.ico_1").removeClass("show"); jQueryOld(".obj.ico_2").addClass("show"); progress2(); }, 2000)); setTimeoutVarArray.push(setTimeout(function () { jQueryOld(".obj.ico_2").removeClass("show"); jQueryOld(".obj.ico_3").addClass("show"); progress3(); }, 4000)); setTimeoutVarArray.push(setTimeout(function () { jQueryOld(".obj.ico_3").removeClass("show"); jQueryOld(".obj.ico_4").addClass("show"); progress4(); }, 6000)); }
				
				P5_APPS.addViewportEvent({ triggerPositionPercent: 20, enter: function () { play(); progressItv = setInterval(function () { jQueryOld(".obj").removeClass("show"); jQueryOld(".obj.ico_1").addClass("show"); play(); }, 8000); }, leave: function (e) { for (var i = 0; i < setTimeoutVarArray.length; i++) { window.clearTimeout(setTimeoutVarArray[i]); } clearInterval(progressItv); jQueryOld(".option_icon").find(">div").removeClass("show"); jQueryOld(".obj.ico_1").addClass("show"); } }, _this);
			},

			init: function () {
				if (this.elem._canvasWrap.length > 0 && this.elem._canvasWrap.find(".obj_animate").length > 0) { this.canvasMotion(); }
			}

		},

		samsungFlow: {
			elem: {
				_canvasWrap: jQueryOld(document).find(".flow #canvas_flow_01"),
				_notiWrap: jQueryOld(document).find(".flow .m_content-notification"),
				_autoWrap: jQueryOld(document).find(".flow .m_content-auto"),
				_secureWrap: jQueryOld(document).find(".flow .m_content-secure")
			},

			canvasMotion: function () {
				var canvasFlow01 = this.elem._canvasWrap[0];
				function updateLine(ctx) {
					if (canvasFlow01.getContext) {
						var ctx = canvasFlow01.getContext("2d");
						ctx.strokeStyle = '#ffffff';
						ctx.lineWidth = 6;
						ctx.lineJoin = 'miter';
						ctx.clearRect(0,0,canvasFlow01.width,canvasFlow01.height);

						var time = 0;
						var pathInterval = setInterval(function(){
							if( time <= 1000 ){
								if(  time >= 50 ){
									ctx.clearRect(0,0,canvasFlow01.width,canvasFlow01.height);
									ctx.beginPath();
									ctx.arc(70,70,35,Math.PI * 1, Math.PI * (1 + ((time - 50) * 0.00075)) );
									ctx.stroke();
									ctx.beginPath();
									ctx.arc(70,70,35,Math.PI * 0, Math.PI * (0 + ((time - 50) * 0.00075)) );
									ctx.stroke();
								}
								var degres = (time/10) * 1.35;
								var radians = degres * Math.PI / 180;
								var xunits = Math.cos(radians) * 35;
								var yunits = Math.sin(radians) * 35;
								ctx.beginPath();
								ctx.arc(70-xunits, 70-yunits, 6, 0, Math.PI * 2);
								ctx.stroke();
								ctx.beginPath();
								ctx.arc(70+xunits, 70+yunits, 6, 0, Math.PI * 2);
								ctx.stroke();
							} else {
								clearInterval(pathInterval);
							}
							time = time + 10;
						}, 10);
					}
				}
				
				var drawCanvasInterval = setInterval(function(){
					updateLine();
				}, 3000);				
			},

			effect: function(){
				P5_APPS.addViewportEvent({ triggerPositionPercent: 20, 'enter': function () { jQueryOld('.m_content-notification').find('.f_container .scene_message, .f_container .scene_messege').addClass('flow_scale'); }, 'leave': function () { jQueryOld('.m_content-notification').find('.f_container .scene_message, .f_container .scene_messege').removeClass('flow_scale'); } }, jQueryOld('.m_content-notification'));
				P5_APPS.addViewportEvent({ triggerPositionPercent: 20, 'enter': function () { jQueryOld('.m_content-auto').find('.f_container .scene_message, .f_container .scene_messege').addClass('flow_scale'); }, 'leave': function () { jQueryOld('.m_content-auto').find('.f_container .scene_message, .f_container .scene_messege').removeClass('flow_scale'); } }, jQueryOld('.m_content-auto'));
				P5_APPS.addViewportEvent({ triggerPositionPercent: 20, 'enter': function () { setTimeout(function () { jQueryOld('.m_content-secure').find('.f_container .scene01').fadeIn(2000); }, 500); }, 'leave': function () { jQueryOld('.m_content-secure').find('.f_container .scene01').hide(); } }, jQueryOld('.m_content-secure'));
			},

			init: function () {
				if(this.elem._canvasWrap.length > 0){ this.canvasMotion(); }
				if (this.elem._notiWrap.length > 0 && this.elem._autoWrap.length > 0 && this.elem._secureWrap.length > 0) { this.effect(); }
			}
		},

		findMyMobile: {

			elem: {
				_kvWrap: jQueryOld(document).find(".findmymobile [data-role='serial-fade']")
			},

			kvMotion: function () {
				var $target = jQueryOld('[data-role="serial-fade"]');
				if ($target.length) {
					P5_APPS.addViewportEvent({
						triggerPositionPercent: 20,
						enter: function (e) {
							var $motion = $target.find('.motion');
							if (P5_APPS.sizeMode != 1 && !jQueryOld('html').hasClass('mobile')) {
								setTimeout(function () {
									$motion.eq(0).stop(true).animate({
										opacity: 1
									}, 700);
									setTimeout(function () {
										$motion.eq(1).stop(true).animate({
											opacity: 1
										}, 700);
									}, 500);
								}, 300);
							}
						},
						leave: function (e) {
							var $motion = $target.find('.motion');
							$motion.stop(true).animate({
								opacity: 0
							}, 200);
						}
					}, $target);
				}
			},

			init: function () {
				if (this.elem._kvWrap.length > 0) { this.kvMotion(); }
			}

		},

		galaxyThemes: {

			themesTab: {
				elem: {
					_wrap: jQueryOld('.m_content-decorative .f_tab li'),
					_button: jQueryOld('.m_content-decorative .f_tab li .f_tab-header'),
					_motionInterval: null,
					_fadeInterval: null
				},

				set: function () {
					this.elem._wrap.eq(0).find('.screen-wrapper > img').each(function (idx) {
						var currentNumber = idx + 1;
		
						jQueryOld(this).wrap('<figure class="screen" />');
						jQueryOld(this).parent().addClass('type0' + currentNumber);
					});
				},
		
				event: function () {
		
					var motionInterval = this.elem._motionInterval,
						fadeInterval = this.elem._fadeInterval;
		
					this.elem._button.on('click', function (e) {
						e.preventDefault();
		
						var $this = jQueryOld(this);
						var $parent = $this.closest('li');
						var IDX = $parent.index();
						var $content = $parent.find('.f_tab_content');
						var $screenWrap = $content.find('.screen-wrapper');
						var $screen = $screenWrap.find('.screen');
						var COUNT = 0;
						var DELAY = 1000;
						var speed = 500;
						var intervalSpeed = 0;
						var screenLen = 7;
						var motionFlag = false;
						var fadeFlag = false;
						var FADECOUNT;
		
						COUNT = screenLen;
		
						jQueryOld(this).attr("title", "selected").parents("li").siblings().find("h3 > .f_tab-header").removeAttr("title"); /* 런칭 */
		
						if (!$parent.hasClass('on')) {
							if (IDX == 0) {
								if (!$content.hasClass('on')) {
									$content.find('.screen-wrapper > img').each(function (idx) {
										var currentNumber = idx + 1;
		
										jQueryOld(this).wrap('<figure class="screen" />');
										jQueryOld(this).parent().addClass('type0' + currentNumber);
									});
									$content.addClass('on');
								}
							} else {
								jQueryOld('.m_content-decorative .f_tab').find('.f_tab_content').removeClass('on');
								jQueryOld('.m_content-decorative .f_tab li:first-child .screen-wrapper .screen').each(function (idx) {
									var $this = jQueryOld(this);
									var $img = $this.find('img');
		
									$img.appendTo($this.closest('.screen-wrapper'));
								});
								jQueryOld('.m_content-decorative .f_tab li:first-child .screen-wrapper .screen').remove();
							}
		
							if (IDX == 1 && !$parent.hasClass('on')) {
								if (motionFlag == false) {
									motionFlag = true;
								}
								COUNT = 0;
		
								$screen.css('opacity', 0);
								$screen.eq(0).css('opacity', 1);
		
								motionInterval = setInterval(function () {
									motionPlay();
								}, 300);
							} else {
								clearMotion();
								motionFlag = false;
							}
		
							if (!jQueryOld('html').hasClass('ie8')) {
								var _parent = jQueryOld(this).closest('.f_tab'),
									_videoWrap = _parent.find('[data-role="content-video"]'),
									_video = _videoWrap.find('video');
		
								if (IDX == 0 || IDX == 1) {
		
									_video[0].currentTime = 0;
									_video[0].pause();
									_videoWrap.find('.btn_media-play').attr('class', 'btn_media-play');
		
								}
		
								if (IDX == 2 && !$parent.hasClass('on')) {
									P5_APPS.video.play.reset($parent);
								}
							}
		
							$parent.addClass('on').siblings().removeClass('on');
						}
		
						function wave() {
							var $target = jQueryOld('.m_content-decorative .f_tab .elipse-wrapper');
		
							if (!$target.hasClass('on')) {
								$target.addClass('on');
								setTimeout(function () {
									$target.stop(true).animate({
										opacity: 0
									}, function () {
										$this.removeClass('on');
										$this.removeAttr('style');
									});
								}, 1000);
							}
						}
		
						function multiMotion() {
							if (motionFlag == true) {
								motionFlag = false;
		
								if (COUNT != 0 && COUNT != screenLen) {
									setTimeout(function () {
										wave();
										$screen.eq(COUNT).not(':animated').stop(true).animate({
											opacity: 1
										}, speed, function () {
											setTimeout(function () {
												$screen.eq(COUNT).not(':animated').stop(true).animate({
													opacity: 0
												}, speed, function () {
													COUNT++;
		
													if (!motionFlag) {
														motionFlag = true;
													}
		
												});
											}, DELAY);
										});
									}, DELAY);
								} else if (COUNT == 0) {
									setTimeout(function () {
										$screen.eq(COUNT).not(':animated').stop(true).animate({
											opacity: 0
										}, speed, function () {
											COUNT++;
											if (!motionFlag) {
												motionFlag = true;
											}
										});
									}, DELAY);
								} else if (COUNT == screenLen) {
									wave();
									setTimeout(function () {
										$screen.eq(COUNT).not(':animated').stop(true).animate({
											opacity: 1
										}, speed);
									}, DELAY, function () {
										motionFlag = false;
										clearMotion();
									});
								}
							}
						}
		
						function motionPlay() {
							if (COUNT <= screenLen) {
								multiMotion();
							} else {
								clearInterval(motionInterval);
							}
						}
		
						function clearMotion() {
							clearInterval(motionInterval);
						}
		
					});
		
				},

				init: function () {
					this.set();
					this.event();
				},
		
				scroll: function () {
					var $decorative = jQueryOld('.m_content-decorative');
					var $windowTop = jQueryOld(window).scrollTop();
					var $conTop = $decorative.offset().top;
					var $conHei = $decorative.outerHeight();
					var $eventArea = $conTop + $conHei;
					var $con = this.elem._wrap.eq(0);
					if ($conTop < $windowTop && $windowTop < $eventArea) {
						if ($con.hasClass('on')) {
							$con.find('.f_tab_content').addClass('on');
						}
					}
				}
			},

			init: function() {
				if (jQueryOld('.m_content-decorative').length > 0) this.themesTab.init();
			},

			scroll: function() {
				if (jQueryOld('.m_content-decorative').length > 0) this.themesTab.scroll();
			}

		},

		galaxyStore: {
			elem: {
				_watchWrap: jQueryOld(document).find(".galaxy_store .m_content-unique"),
				_offersWrap: jQueryOld(document).find(".galaxy_store .m_content-special_offers")
			},

			watch: function () {
				var setMotionFnc1, setMotionFnc2;

				P5_APPS.addViewportEvent({
					triggerPositionPercent: 20,
					'enter': function () {

						clearTimeout(setMotionFnc1);
						clearTimeout(setMotionFnc2);

						var $motion = jQueryOld('.m_content-unique .f_container .motion_img');

						setMotionFnc1 = setTimeout(function () {
							$motion.eq(1).stop().animate({
								'opacity': 1
							});
						}, 1000);
						setMotionFnc2 = setTimeout(function () {
							$motion.eq(2).stop().animate({
								'opacity': 1
							});
						}, 2500);
					},
					'leave': function () {
						jQueryOld('.m_content-unique .f_container .motion_img').eq(1).stop(true, true).css('opacity', 1);
						jQueryOld('.m_content-unique .f_container .motion_img').eq(2).stop(true, true).css('opacity', 1);
						jQueryOld('.m_content-unique .f_container .motion_img').removeAttr('style');

						clearTimeout(setMotionFnc1);
						clearTimeout(setMotionFnc2);
					}
				}, jQueryOld('.galaxy_store .m_content-unique, .galaxy_apps .m_content-unique'));
			},

			offers: function () {
				var _wrap = this.elem._offersWrap,
					_itemGames = _wrap.find(".item.games"),
					_itemPartners = _wrap.find(".item.partners");

				P5_APPS.addViewportEvent({
					triggerPositionPercent: 60,
					'enter': function () {
						_itemGames.find(".feature_box").addClass("moving");
					},
					'leave': function () {
						_itemGames.find(".feature_box").removeClass("moving");
					}
				}, _itemGames);

				P5_APPS.addViewportEvent({
					triggerPositionPercent: 60,
					'enter': function () {
						_itemPartners.find(".feature_box").addClass("moving");
					},
					'leave': function () {
						_itemPartners.find(".feature_box").removeClass("moving");
					}
				}, _itemPartners);

			},

			init: function () {
				if (this.elem._watchWrap.length > 0) this.watch();
				if (this.elem._offersWrap.length > 0) this.offers();
			}
		},

		samsungNotes: {
			elem: {
				_tabWrap: jQueryOld(document).find('.samsung_note .apps_image_tab'),
				_penWrap: jQueryOld(document).find(".samsung_note .m_content-switch-style")
			},

			imageTab: {
				elem: {
					tab: jQueryOld(document).find('.samsung_note .apps_image_tab'),
					tabList: jQueryOld(document).find('.samsung_note .apps_image_tab .tab_list'),
					button: jQueryOld(document).find('.samsung_note .apps_image_tab .tab_list button'),
					autoMotion: "",
					autoCount: 0
				},
				clearMotion: function () {
					clearInterval(P5_APPS.motion.samsungNotes.imageTab.elem.autoMotion);
				},
				tab: function () {
					this.elem.button.on('click', function (e) {
						var $this = jQueryOld(this);
						var $parent = jQueryOld(this).closest('.tab_list');
						if (P5_APPS.sizeMode != 1) {
							$parent.addClass('active').siblings().removeClass('active');
							P5_APPS.motion.samsungNotes.imageTab.clearMotion();
						}
						e.preventDefault();
					});
				},
				autoTab: function () {
					var $target = jQueryOld('[data-role="apps-image-tab"]');
					var $list = this.elem.tabList;
					var autoCount = this.elem.autoCount;
					var listLen = $list.length;
					P5_APPS.addViewportEvent({
						triggerPositionPercent: 20,
						'enter': function () {
							if (P5_APPS.sizeMode != 1) {
								P5_APPS.motion.samsungNotes.imageTab.elem.autoMotion = setInterval(function () {
									if (autoCount < listLen) {
										$list.eq(autoCount + 1).addClass('active').siblings().removeClass('active');
										autoCount++;
									} else {
										$list.eq(0).addClass('active').siblings().removeClass('active');
										P5_APPS.motion.samsungNotes.imageTab.clearMotion();
									}
								}, 1500);
							}
						},
						'leave': function () {
							if (P5_APPS.sizeMode != 1) {
								autoCount = 0;
								$list.eq(0).addClass('active').siblings().removeClass('active');
								P5_APPS.motion.samsungNotes.imageTab.clearMotion();
							}
						}
					}, $target);
				},
				init: function () {
					this.tab();
					this.autoTab();
				}
			},

			penMoving: {

				init: function(){
					this.motion();
				},

				motion: function(){
					
					var _wrap = P5_APPS.motion.samsungNotes.elem._penWrap;

					P5_APPS.addViewportEvent({
						triggerPositionPercent: 40,
						'enter': function () {
							_wrap.find(".note_pen").addClass("move");
						},
						'leave': function () {
							_wrap.find(".note_pen").removeClass("move");
						}
					}, _wrap);

				}

			},

			init: function (){
				if (this.elem._tabWrap.length > 0) this.imageTab.init();
				if (this.elem._penWrap.length > 0) this.penMoving.init();
			}
		},

		samsungCloud: {

			elem: {
				_backupWrap: jQueryOld(document).find(".cloud .m_content-backup"),
				_ondriveWrap: jQueryOld(document).find(".cloud .m_content-onedrive")
			},

			cloudOpacity : function(){

				window.cloudOpacity = (function () {
					var $article = jQueryOld('.m_content-backup>.m_feature'),
						$screenView = $article.find('.motion'),
						$parallaxer = jQueryOld({
							size: 0
						}),
						parallaxAnimateOption = {
							queue: false,
							duration: 850,
							rounding: false,
							easing: 'easeOutQuint',
							step: onAnimate
						};

					function animate(_percent) {
						$parallaxer._animate({
							size: 1 * Math.max(0, Math.min(1, _percent * 3.6 - 1))
						}, parallaxAnimateOption);
					}

					function onAnimate(v) {
						var size = v.size;
						$screenView.css({
							'opacity': size,
							'filter': 'alpha(opacity=' + size * 100 + ')'
						});
					}
					return animate;
				})();

			},

			motion: function () {
				
				var _ondriveWrap = this.elem._ondriveWrap,
					_motion = _ondriveWrap.find('.motion');

				P5_APPS.addViewportEvent({
					triggerPositionPercent: 20,
					enter: function (e) {
						if (P5_APPS.sizeMode != 1) {
							_motion.addClass("on");
						}
					},
					leave: function (e) {
						if (P5_APPS.sizeMode != 1) {
							_motion.removeClass("on");
						}
					}
				}, _ondriveWrap);
			},

			init: function() {
				if(this.elem._backupWrap.length > 0) this.cloudOpacity();
				if(this.elem._ondriveWrap.length > 0) this.motion();
			}

		},

		samsungInternet: {

			elem: {
				_winHoriz: window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth,
				_extentionWrap: jQueryOld(document).find(".apps.internet .m_content-extention_tip"),
				_beforeClickIdx : 0,
				_beforeSizeMode: null,
				_afterSizeMode: null,
				_resizeIdx: 0,
				_content: null
			},

			event: function () {

				var _internet = this,
					_wrap = this.elem._extentionWrap,
					_tabBtn = _wrap.find(".tab_btn_wrap button"),
					_tabDepBtn = _wrap.find(".tab_depth2 button.tab_btn");

				_tabBtn.on("click", function () {
					
					var _this = jQueryOld(this),
						_thisIdx = _this.parent().index();

					_wrap.find(".tab_conts_wrap").removeAttr("style");

					_internet.motion.elem._beforeHeight = _wrap.find(".tab_conts_wrap").height();

					_internet.elem._beforeClickIdx = _this.parent().siblings(".active").index();
					_this.parent().addClass("active").siblings().removeClass("active");
					_internet.change(_thisIdx, false);
					_internet.motion.click(_thisIdx);
					_internet.accessibility.click(_this, "dep1");

				});

				_tabDepBtn.on("click", function () {
					
					var _this = jQueryOld(this),
						_thisIdx = _this.index(),
						_goToIdx = _thisIdx === 0 ? 0 : 5;
					
					_this.addClass("active").siblings().removeClass("active");
					_internet.elem._content.find(".card-list-wrap").slick("slickGoTo", _goToIdx);
					_internet.accessibility.click(_this, "dep2");

				});


			},

			motion: {

				elem : {
					_beforeSizeMode: 0,
					_afterSizeMode: 0,
					_beforeHeight: 0,
					_afterHeight: 0
				},

				setting: function (_idx) {
					
					var _wrap = P5_APPS.motion.samsungInternet.elem._extentionWrap,
						_content = _wrap.find(".list_slide_tab .tab_conts").eq(_idx),
						_list = _content.find(".card-list");

					setTimeout(function () {
						_wrap.find(".tab_conts_wrap").removeAttr("style");
					}, 100);

                },
                
                click: function (_idx) {

					var _internet = P5_APPS.motion.samsungInternet,
						_wrap = P5_APPS.motion.samsungInternet.elem._extentionWrap,
						_content = _wrap.find(".list_slide_tab .tab_conts").eq(_idx),
						_list = _content.find(".card-list.slick-current"),
						_contentWrap = _wrap.find(".tab_conts_wrap");

					_content.find(".slick-list").css("height", _list.find(".card-list-inner").outerHeight(true));
					_content.find(".card-list-wrap").on("beforeChange", function (event, slick, idx, nextIdx) {
						var _slickList = jQueryOld(slick.$list[0]);
						_contentWrap.removeAttr("style");
						_slickList.css({
							"height" : _slickList.find(".card-list").eq(nextIdx).find(".card-list-inner").outerHeight(true)
						});
					});

					this.elem._afterHeight = _contentWrap.height();

					_contentWrap.css("height", this.elem._beforeHeight);
					setTimeout(function () {
						_contentWrap.css("height", _internet.motion.elem._afterHeight);
					}, 0);

                },

				resize: function (_idx) {

					var _internet = P5_APPS.motion.samsungInternet,
						_wrap = _internet.elem._extentionWrap,
						_contentWrap = _wrap.find(".tab_conts_wrap"),
						_content = _wrap.find(".list_slide_tab .tab_conts").eq(_idx),
						_sizeMode = P5_APPS.sizeMode > 1 ? 2 : 1;
					
					_content.find(".slick-list").css({
						"height" : _content.find(".card-list.slick-current .card-list-inner").outerHeight(true)
					});

					this.elem._beforeSizeMode = _sizeMode;
					if (this.elem._beforeSizeMode != this.elem._afterSizeMode) {
						this.elem._afterSizeMode = _sizeMode;
						setTimeout(function () {
							_content.find(".slick-list").css({
								"height" : _content.find(".card-list.slick-current .card-list-inner").outerHeight(true)
							});
						}, 1000);
					}
				}

			},

			/* tab contents change event */
			change: function (_idx, _resizeCheck) {

				var _internet = this,
					_wrap = this.elem._extentionWrap,
					_content = _wrap.find(".list_slide_tab .tab_conts").eq(_idx);

				_content.addClass("active").siblings().removeClass("active");
				_content.find(".tab_depth2 button").removeClass("active");
				_content.find(".tab_depth2 button:first-child").addClass("active");
				_internet.slide(_content, _resizeCheck);

				_internet.elem._content = _content;
			},

			/* tab contents slide */
			slide: function (_content, _resizeCheck) {

				var _internet = this,
					_winHoriz = _internet.elem._winHoriz,
					_wrap = _internet.elem._extentionWrap,
					_type = _content.find(".card-list-wrap").data("role-slide"),
					_contentSlideCheck = _content.find(".card-list-wrap").is(".slick-initialized"),
					_slideConfig = {
						centerMode: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false,
						accessibility: true,
						speed: 500,
						dots: true,
						arrows: true,
						// adaptiveHeight: true,
						rtl: jQueryOld("html").is(".rtl")
					},
					_beforeContent = _wrap.find(".tab_conts").eq(_internet.elem._beforeClickIdx),
					_beforeContentSlideCheck = _beforeContent.find(".card-list-wrap").is(".slick-initialized");
				
				//before reset
				if (_beforeContentSlideCheck === true) {
					_beforeContent.find(".card-list-wrap").slick("slickUnfilter");
					_beforeContent.find(".card-list-wrap").slick("unslick");
				}

				if (_resizeCheck === true && _contentSlideCheck) {
					_content.find(".card-list-wrap").slick("slickUnfilter");
					_content.find(".card-list-wrap").slick("unslick");
				}

				_content.find(".card-list-wrap .card-list").removeClass("on");
				
				//slide setting
				switch (_type) {
					case "default":

						_contentSlideCheck = _content.find(".card-list-wrap").is(".slick-initialized");
						
						if (_contentSlideCheck === false) {
							_content.find(".card-list-wrap").slick(_slideConfig);
							_content.find(".card-list-wrap .card-list").each(function () {
								
								var _this = jQueryOld(this);
								if (_winHoriz > 768) {
									if (_this.is(".visible_mo") === false) {
										_this.addClass("on");
									}
								} else {
									if (_this.is(".visible_pc") === false) {
										_this.addClass("on");
									}
								}
							});

							_content.find(".card-list-wrap").slick("slickFilter", ".on");
							_content.find(".card-list-wrap").slick("refresh");

							_internet.tagging(_content);
							_internet.accessibility.dots(_content);
						}
						
						break;

					case "mobile":
						
						_contentSlideCheck = _content.find(".card-list-wrap").is(".slick-initialized");
						
						if (_winHoriz > 768) {
							if (_contentSlideCheck === true) _content.find(".card-list-wrap").slick("unslick");
						} else {
							if (_contentSlideCheck === false) _content.find(".card-list-wrap").slick(_slideConfig);
							_internet.tagging(_content);
							_internet.accessibility.dots(_content);
						}

						break;
				
					default:
						break;
				}

				//dep2 btn afterchange
				if (_content.find(".tab_depth2").length > 0) {
					_content.find(".card-list-wrap").on("afterChange", function (event, slick, idx) {
						if (idx < slick.slideCount - 1) {
							_content.find(".tab_depth2 button:first").addClass("active").siblings().removeClass("active");
							_content.find(".tab_depth2 button:first").attr("title", "selected").siblings().removeAttr("title");
						} else {
							_content.find(".tab_depth2 button:last").addClass("active").siblings().removeClass("active");
							_content.find(".tab_depth2 button:last").attr("title", "selected").siblings().removeAttr("title");
						}
					});
				}

			},

			tagging: function (_content) {
				_content.find(".slick-dots li button").each(function (_i) {
					var _this = jQueryOld(this);
					_this.attr("data-omni-type", "microsite_pcontentinter");
					_this.attr("data-omni", "rolling:index_" + (_i + 1));
				});
			},

			accessibility: {

				click: function (_this, _type) {

					if (_type === "dep1") {
						_this.attr("aria-selected", true).parent().siblings().find("button").attr("aria-selected", false);
					} else {
						_this.attr("title", "selected").siblings().removeAttr("title");
					}

				},

				dots: function (_content) {
					
					var _internet = P5_APPS.motion.samsungInternet;

					_content.find(".slick-dots li button").each(function (_i) {
						var _this = jQueryOld(this),
							_title = "";

						if (_content.find(".card-list").eq(_i).find(".sub-title").length > 1) {
							var _subTitle = _content.find(".card-list").eq(_i).find(".sub-title");
							_subTitle.each(function (_n) {

								var _cardThis = jQueryOld(this),
									_comma = _subTitle.length - 1 > _n ? "," : "";

								if (_internet.elem._winHoriz > 768 && (_cardThis.parents(".visible_pc").length > 0 || _cardThis.parents(".visible_mo").length === 0)) {
									_title += _cardThis.text() + _comma;
								} else if (_internet.elem._winHoriz <= 768 && (_cardThis.parents(".visible_mo").length > 0 || _cardThis.parents(".visible_pc").length === 0)) {
									_title += _cardThis.text() + _comma;
								}

							});

						} else {

							_title = _content.find(".card-list").eq(_i).find(".sub-title").text();

						}

						if(_title.split(",")[1] === "") _title = _title.split(",")[0];

						_this.text("slide" + (_i + 1) + " : " + _title);
					});

				}

			},

			init: function () {
				if (this.elem._extentionWrap.length > 0) {
					this.event();
					this.change(0);
					this.motion.click(0);
					this.motion.setting();
				}
			},

			resize: function () {
				if (this.elem._extentionWrap.length > 0) {
					this.elem._winHoriz = window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth;

					var _sizeMode = P5_APPS.sizeMode > 1 ? 2 : 1;
					var _activeIdx = this.elem._extentionWrap.find(".tab_conts.active").index();
					this.elem._beforeSizeMode = _sizeMode;

					if (this.elem._resizeIdx > 0) this.motion.resize(_activeIdx);

					if (this.elem._beforeSizeMode != this.elem._afterSizeMode && this.elem._resizeIdx > 0) {
						this.elem._afterSizeMode = _sizeMode;
						_activeIdx = this.elem._extentionWrap.find(".tab_conts.active").index();
						this.change(_activeIdx, true);

					} else if (this.elem._resizeIdx < 1) {
						this.elem._afterSizeMode = _sizeMode;
						this.elem._resizeIdx = this.elem._resizeIdx + 1;
					}
				}
			}

		},

		init: function () {
			this.common.init();
			this.smartCall.init();
			this.samsungMembers.init();
			this.samsungFlow.init();
			this.findMyMobile.init();
			this.galaxyThemes.init();
			this.galaxyStore.init();
			this.samsungNotes.init();
			this.samsungCloud.init();
			this.samsungInternet.init();
		},

		resize: function () {
			this.common.resize();
			this.samsungInternet.resize();
		},

		scroll: function () {
			this.common.scroll();
			this.galaxyThemes.scroll();
		}

	},
	serviceFloatingBar: {

		elem: {
			_toggleAlt: null,
			_resizeIdx: 0			
		},

		grid: function(_country){

			/* xml => json change 20200218 */
			var _floatingJson = commonObj.floating,
				_floatingJsonCommon = _floatingJson.common,
				_floatingCommonTitle = _floatingJsonCommon.title,
				_floatingCommonAlt = _floatingJsonCommon.alt,
				_floatingCommonToggle = _floatingJsonCommon.toggle,
				_floatingCommonImgPath = _floatingJsonCommon.imgPath,
				_floatingHtml = "",
				_floatingServiceName = APPS_SERVICE_NAME == "penup" ? "pen_up" : APPS_SERVICE_NAME.replace(/-/gi, "_").replace(/ /gi, "_"),
				_floatingServices = _floatingJson.services;

			_floatingHtml += "<div id='apps_floating' class='apps_rawcode'>";
			_floatingHtml += 	"<div class='navi_wrap'>";
			_floatingHtml += 		"<div class='navi_section'>";
			_floatingHtml += 			"<div class='navi_header'>";
			_floatingHtml += 				"<div class='toggle_btn_box'>";
			_floatingHtml += 					"<a href='#' class='toggle_btn' data-omni-type='microsite_contentinter' data-omni='apps:" + _floatingServiceName + ":service_open'>";
			_floatingHtml += 						"<span data-key='apps.services.title'>" + _floatingCommonTitle + "</span><span class='blind' data-key='apps.services.open'>" + _floatingCommonToggle[0] + "</span>";
			_floatingHtml += 					"</a>";
			_floatingHtml += 				"</div>";
			_floatingHtml += 				"<div class='navi_btn_list'>";
			_floatingHtml += 					"<div class='navi_btn_inner'>";
			_floatingHtml += 						"<a href='/" + _country + "/apps' data-omni-type='microsite_contentinter' data-omni='apps:" + _floatingServiceName + ":floating bar:go to apps landing page'>";
			_floatingHtml += 							"<img src='" + _floatingCommonImgPath + "' alt='" + _floatingCommonAlt + "' data-key='apps.services.landing_img-alt'>";
			_floatingHtml += 						"</a>";
			_floatingHtml += 					"</div>";
			_floatingHtml += 				"</div>";
			_floatingHtml += 			"</div>";
			_floatingHtml += 			"<div class='navi_contents'>";
			_floatingHtml += 				"<div class='navi_inner'>";
			_floatingHtml += 					"<ul class='navi_service_list'>";

			for (var _key in _floatingServices) {

				var _serviceJson = _floatingServices[_key],
					_serviceLink = _serviceJson.href,
					_serviceImgPath = _serviceJson.imgPath,
					_serviceTitle = _serviceJson.title,
					_serviceName = _key === "pen-up" ? "pen_up" : _key.replace(/-/gi, "_").replace(/ /gi, "_");
					_blank = "";

				if (typeof _serviceJson.blank !== "undefined") _blank = _serviceJson.blank;

				_floatingHtml += "<li data-role-name='" + _key + "'>";
				_floatingHtml += 	"<a href='" + _serviceLink + "' " + (_blank.length > 0 ? "target='_blank'" : "") + " data-omni-type='microsite_contentinter' data-omni='apps:" + _floatingServiceName + ":service_" + _serviceName + "' " + (_serviceJson.blank == "Y" ? "target='_blank'" : "") + ">";
				_floatingHtml += 		"<figure><img src='//images.samsung.com/is/image/samsung/p5/common/apps/akm_images/common/blank.gif' data-role-img='" + _serviceImgPath + "' alt=''></figure>";
				_floatingHtml += 		"<em class='tit' data-key='apps.landing.services." + _serviceName.replace(/ /gi, "_") + ".title'>" + _serviceTitle + "</em>";
				_floatingHtml += 	"</a>";
				_floatingHtml += "</li>";

			}

			_floatingHtml += "</ul></div></div></div></div></div>";

			jQueryOld(document).find("#content").prepend(_floatingHtml);
			P5_APPS.serviceFloatingBar.elem._toggleAlt = _floatingCommonToggle;

			var firstTarget = jQueryOld("#apps_floating .toggle_btn");
			var lastTarget = jQueryOld("#apps_floating .navi_service_list li:last-child a");
			firstTarget.on({
				"keydown" : function(e){
					if( e.shiftKey ){
						if( e.which == 9 || e.keyCode == 9 ){
							e.preventDefault();
							lastTarget.focus();
						}
					} 
				}
			});

			lastTarget.on({
				"keydown" : function(e){
					if( e.shiftKey ){
						
					} else if ( e.which == 9 || e.keyCode == 9 ){
						e.preventDefault();
						firstTarget.focus();
					}
				}
			});

			P5_APPS.imgSrcReplaceQa(jQueryOld("#apps_floating"));
		},

		click: function () {

			var _naviWrap = jQueryOld(document).find(".apps_rawcode .navi_wrap"),
				_naviContents = _naviWrap.find(".navi_contents"),
				_naviServiceList = _naviWrap.find(".navi_service_list > li"),
				_naviServiceListLength = _naviServiceList.length,
				_idx = 0,
				_idxArr = randomFnc(_naviServiceListLength),
				_bounceSetTimeFnc = null;

			jQueryOld(document).on("click", ".apps_rawcode .navi_wrap .toggle_btn", function(e){
				e.preventDefault();

				var _tagging = jQueryOld(this).data("omni"),
					_replaceTagging = "";

				jQueryOld(this).toggleClass("is_open");

				if (_naviContents.find("img").attr("src").indexOf("blank.gif") > -1) {
					_naviContents.find("img").each(function () {
						var _src = jQueryOld(this).data("role-img");
						jQueryOld(this).attr("src", _src);
					});
				}

				clearTimeout(_bounceSetTimeFnc);
				
				if (jQueryOld(this).is(".is_open")) {
					_idxArr = randomFnc(_naviServiceListLength);
					_naviContents.addClass("is_open");
					jQueryOld("html").css("overflow", "hidden");
					bounceMotion(_idx, 20, true);
					_replaceTagging = _tagging.replace("_open", "_close");
					jQueryOld(this).attr("data-omni", _replaceTagging);
					jQueryOld(this).find(".blind").text(P5_APPS.serviceFloatingBar.elem._toggleAlt[1]);
					jQueryOld(this).find(".blind").attr("data-key", jQueryOld(this).find(".blind").attr("data-key").replace(".open", ".close"));

					P5_APPS.layerAria(true);
					if (!_naviWrap.hasClass("fixed")) {
						jQueryOld("#header").attr("aria-hidden", false);
					}
					jQueryOld("#content .par").attr("aria-hidden",true);
				} else {
					_naviContents.removeClass("is_open");
					_naviServiceList.removeClass("bounce");
					jQueryOld("html").removeAttr("style");

					_replaceTagging = _tagging.replace("_close", "_open");
					jQueryOld(this).attr("data-omni", _replaceTagging);
					jQueryOld(this).find(".blind").text(P5_APPS.serviceFloatingBar.elem._toggleAlt[0]);
					jQueryOld(this).find(".blind").attr("data-key", jQueryOld(this).find(".blind").attr("data-key").replace(".close", ".open"));

					P5_APPS.layerAria(false);
					jQueryOld("#content .par").attr("aria-hidden", false);
				}
			});

			function bounceMotion(_idx, _timer, setCheck) {
				if (_idx < _naviServiceListLength) {
					_naviServiceList.eq(_idxArr[_idx] - 1).addClass("bounce");
					_bounceSetTimeFnc = setTimeout(function () {
						bounceMotion(_idx + 1, _timer);
					}, _timer);
				}
			}

			function randomFnc(n){
				var ar = new Array();
				var temp;
				var rnum;
		
				for(var i=1; i<=n; i++){
					ar.push(i);
				}
		
				for(var i=0; i< ar.length ; i++){
					rnum = Math.floor(Math.random() *n);
					temp = ar[i];
					ar[i] = ar[rnum];
					ar[rnum] = temp;
				}
		
				return ar;
			}

		},

		scroll: function () {
			if (jQueryOld(document).find("#apps_floating").length > 0 && window.innerWidth <= 768) {
				
				var _stickyCheck = location.href.toLowerCase().indexOf("/bixby") > -1 ? true : false;
				var _windowTop = jQueryOld(window).scrollTop();
				var _gnbHeight = jQueryOld(document).find("#header").outerHeight();
				var _naviHeight = jQueryOld(document).find(".navi_header").outerHeight();

				if (_windowTop >= _gnbHeight) {
					jQueryOld(document).find(".navi_wrap").addClass("fixed");
				} else {
					jQueryOld(document).find(".navi_wrap").removeClass("fixed");
				}

				if (_stickyCheck === true && jQueryOld(document).find(".js-sticky-placeholder").length > 0) {
					var _bixbyTop = jQueryOld(document).find(".js-sticky-placeholder").offset().top;

					if (_windowTop >= _bixbyTop - _naviHeight) {
						jQueryOld(document).find(".cl-g-sticky-navigation-text").addClass("apps-fixed");
					} else {
						jQueryOld(document).find(".cl-g-sticky-navigation-text").removeClass("apps-fixed");
					}
				}
			}
		},

		resize: function () {
			var _siteCode = typeof APPS_SITE_CODE !== "undefined" ? APPS_SITE_CODE : siteCode,
				_xmlDataCheck = typeof xmlData !== "undefined" ? true : false;

			if (P5_APPS.serviceFloatingBar.elem._resizeIdx > 1 && _xmlDataCheck) {
				if (jQueryOld(document).find("#apps_floating").length === 0 && window.innerWidth <= 768 && (_siteCode !== "au" && _siteCode !== "fr")) {
					this.grid(_siteCode);
				} else if (jQueryOld(document).find("#apps_floating").length > 0 && window.innerWidth > 768) {

					var _tagging = jQueryOld(document).find("#apps_floating .toggle_btn").data("omni"),
						_replaceTagging = "";

					_replaceTagging = _tagging.replace("_close", "_open");
					if (jQueryOld(document).find(".js-sticky-placeholder").length > 0) {
						jQueryOld(document).find(".cl-g-sticky-navigation-text").removeClass("apps-fixed");
					}

					jQueryOld("html").removeAttr("style");
					jQueryOld(document).find("#apps_floating .toggle_btn .blind").text(P5_APPS.serviceFloatingBar.elem._toggleAlt[0]);
					jQueryOld(document).find("#apps_floating .toggle_btn").attr("data-omni", _replaceTagging);
					jQueryOld(document).find("#apps_floating *").removeClass("is_open");
					jQueryOld(document).find("#apps_floating *").removeClass("bounce");
				}
			} else {
				P5_APPS.serviceFloatingBar.elem._resizeIdx = P5_APPS.serviceFloatingBar.elem._resizeIdx + 1;
			}
		},

		init: function(){
			var _appsFloatingCheck = jQueryOld(document).find("#apps_floating").length === 0 ? true : false,
				_siteCode = APPS_SITE_CODE;

			if (_appsFloatingCheck) {
				this.grid(_siteCode);
				this.click();
			}
		}

	},
	deviceSeries: function() { //galaxy themes 딥링크
		var modelCode = {
			galaxyDevice :	["SM-G9700","SM-G9730","SM-G973","SM-G9750","SM-G975","SM-G970", "SM-G977"],
			notesDevice : ["SM-N976", "SM-N975", "SM-N970", "SM-N971", "SM-N975", "SM-N976"],
			oldDevice : ["SM-A105","SM-A205","SM-G357","SM-G8508","SM-G850","GT-I8262","SM-G355","SM-G360","SM-G361","SM-E500","SM-E700","GT-I9082","SM-G710","SM-G7102","SM-G720","GT-I9060","GT-I9063","SM-G5500","SM-G5308","SM-G530","SM-G531","GT-I8552","SM-J120","SM-J110","SM-J111","SM-J105","SM-J106","SM-J250","SM-J200","SM-J210","SM-J260","SM-G532","SM-J410","SM-G7508","SM-G750","GT-I9152","SM-P600","SM-P601","GT-N7100","GT-N7105","SM-N900","SM-N9000","SM-N9006","SM-N9008","SM-N9005","SM-N750","SM-N7505","SM-N9100","SM-N910","SM-N916","GT-S5300","GT-S7582","GT-I9300","GT-I9305","GT-I8190","GT-I9301","GT-I9500","GT-I9506","GT-I9505","GT-I9190","GT-I9195","GT-I9192","GT-I9515","SM-G900","SM-G901","SM-G800","SM-G903","SM-G9008","SM-G350","GT-S7262","SM-G318","SM-T113","SM-T116","SM-T211","SM-T350","SM-T531","SM-T530","SM-T535","SM-T230","SM-T331","SM-T585","SM-T385","SM-P350","SM-P550","SM-P555","SM-T280","SM-T355","SM-T550","SM-T555","SM-P580","SM-T580","SM-T595","SM-T285","SM-P355","SM-T380","SM-P585","SM-T560","SM-T561","SM-T800","SM-T805","SM-T700","SM-T705","SM-T710","SM-T713","SM-T715","SM-T813","SM-T819","SM-T810","SM-T815","SM-T820","SM-T825","SM-T830","SM-T835","SM-T231","GT-S7580","SM-G906"]
		}
		var deviceCheck = navigator.userAgent.toUpperCase();
		if (typeof APPS_SERVICE_NAME !== "undefined") {
			if (APPS_SERVICE_NAME === "galaxy-themes" || APPS_SERVICE_NAME === "galaxy-store") {
				for (var key in modelCode) {
					modelCode[key].filter(function (v, i) {
						switch (key) {
							case "galaxyDevice": //galaxy10 series
								if (deviceCheck.indexOf(v) > -1) {
									jQueryOld("html").addClass("galaxy-series");
									return false;
								}
								break;
							case "notesDevice": //note10 series
								if (deviceCheck.indexOf(v) > -1) {
									jQueryOld("html").addClass("notes-series");
									return false;
								}
								break;
							case "oldDevice": // galaxy s6이전
								if (deviceCheck.indexOf(v) > -1) {
									jQueryOld("html").addClass("old-series");
									return false;
								}
								break;
							default:
								break;
						}
					});
				}
			}
		}
	},
	themesAnchorRedirect : {
		event : function(){
			var _href = document.location.href;

			if(_href.indexOf("infinity-o-display") > -1){
				var _hrefConvert = _href.split("#");

				_hrefConvert[1] = "infinity-O-display";
				_href = _hrefConvert.join("#",_hrefConvert[1]);

				document.location.href = _href;
			}
		},
		init : function(){
			if (typeof APPS_SERVICE_NAME !== "undefined") {
				if (APPS_SERVICE_NAME === "galaxy-themes") {
					this.event();
				}
			}
		}
	},
	howToTab: {
		elem: {
			_wrap: jQueryOld(document).find("#section-howtotab"),
			_btn: jQueryOld(document).find("#section-howtotab [data-role='tab-btn']"),
			_mTabWrap: jQueryOld(document).find("#section-howtotab .m_f_tab"),
			_winHoriz: window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth,
			_descHeight: 0,
			_beforeSizeMode: 0,
			_afterSizeMode: 0,
			_loadCheck: true,
			_loadIdx: 0,
			_initCheck: true
		},

		event: {

			sectionMotion: function (_slide, _initChcek) {
				var _wrap = P5_APPS.howToTab.elem._wrap;
				if (window.innerWidth > 768) {
					var _header = _wrap.find(".f_header"),
						_tab = _slide.parents(".f_tab").find("h3 [data-role='tab-btn']"),
						_subTab = _slide.parents(".f_tab.depth2").length > 0 ? _slide.parents(".f_tab.depth2").find("h4 [data-role='tab-btn']") : null,
						_headerHeight = _header.outerHeight(true),
						_tabHeight = _tab.outerHeight(),
						_subTabHeight = _subTab !== null ? _subTab.outerHeight() : 0,
						_descHeight = P5_APPS.howToTab.elem._descHeight,
						_descMarginValue = _slide.parents(".f_tab-content").find(">.step_desc .desc.only").length > 0 ? _slide.parents(".f_tab-content").find(">.step_desc .desc.only").outerHeight(true) - _slide.parents(".f_tab-content").find(">.step_desc .desc.only").outerHeight() : _slide.parents(".f_tab-content").find(">.step_desc *:first-child").outerHeight(true) - _slide.parents(".f_tab-content").find(">.step_desc *:first-child").outerHeight(),
						_slideHeight = _slide.outerHeight(true),
						_resultHeight = _headerHeight + _tabHeight + _subTabHeight + _descHeight + _slideHeight + _descMarginValue + 50;
					
					_initChcek = P5_APPS.howToTab.elem._initCheck === false ? "move" : _initChcek;
					if (_initChcek === "init") {
						P5_APPS.howToTab.elem._initCheck = false;
						_wrap.css("height", _resultHeight);
					} else if(_initChcek === "move"){
						var _howToMoveSetTime = setTimeout(function(){
							clearTimeout(_howToMoveSetTime);
							_wrap.css("height", _resultHeight);
						}, 0);
					}
					
				} else {
					setTimeout(function(){
						_wrap.removeAttr("style");
					}, 0);
				}
			},

			click: function () {
				var _btn = P5_APPS.howToTab.elem._btn;

				_btn.on("click", function () {
					var _btnType = P5_APPS.howToTab.event.btnType(jQueryOld(this));

					switch (_btnType) {
						case "tab":
							P5_APPS.howToTab.event.toggle(jQueryOld(this));
							break;

						case "mTab":
							P5_APPS.howToTab.event.toggleMobile(jQueryOld(this));
							break;

						case "subTab":
							P5_APPS.howToTab.event.toggleSubMobile(jQueryOld(this));
							break;

						default:
							break;
					}
				});
			},

			focusEvent: function () {
				
				//mobile subTab focus event
				var _focusWrap = P5_APPS.howToTab.elem._mTabWrap;
				_focusWrap.on("focusout", function (e) {
					var _subTabList = jQueryOld(this).find(".m_f_tab-list"),
						_toggleTextOn = _subTabList.prev(".a_tab-btn").data("toggle-on");

					if (_subTabList.is(".on") === true && e.relatedTarget === null) {
						_subTabList.prev(".a_tab-btn").removeClass("active");
						_subTabList.prev(".a_tab-btn").find(".blind").text(_toggleTextOn);
						_subTabList.removeClass("on");
						_subTabList.removeAttr("style");
					}
				});
			},

			keyEvent: function () {
				
				//mobile key event
				var _mBtn = P5_APPS.howToTab.elem._btn;
				_mBtn.on("keydown", function (e) {
					var _btnType = P5_APPS.howToTab.event.btnType(jQueryOld(this)),
						_tabLen = jQueryOld(this).parents(".m_f_tab-list").find(">li").length - 1,
						_thisIdx = jQueryOld(this).parent("li").index();

					if (_btnType === "subTab") {
						if (e.keyCode === 9 && e.shiftKey) {
							if (_thisIdx === 0) {
								P5_APPS.howToTab.event.keyMotion(jQueryOld(this), _btnType);
							}
						} else if (e.keyCode === 9) {
							if (_tabLen === _thisIdx) {
								P5_APPS.howToTab.event.keyMotion(jQueryOld(this), _btnType);
							}
						}
					} else if(_btnType === "mTab") {
						if (e.keyCode === 9 && e.shiftKey) {
							if (jQueryOld(this).is(".active") === true) {
								P5_APPS.howToTab.event.keyMotion(jQueryOld(this), _btnType);
							}
						} else if (e.keyCode === 9) {}
					}
				});
			},

			keyMotion: function (_this, _type) {
				switch (_type) {
					case "subTab":
						
						_this.parents(".m_f_tab-list").prev(".a_tab-btn").removeClass("active");
						_this.parents(".m_f_tab-list").removeClass("on");
						_this.parents(".m_f_tab-list").removeAttr("style");
						P5_APPS.howToTab.event.accessibilityMobile(_this.parents(".m_f_tab-list").prev(".a_tab-btn"), true);

						break;

					case "mTab":

						_this.removeClass("active");
						_this.next(".m_f_tab-list").removeClass("on");
						_this.next(".m_f_tab-list").removeAttr("style");
						P5_APPS.howToTab.event.accessibilityMobile(_this, true);

						break;
				
					default:
						break;
				}
			},

			btnType: function (_this) {
				if (_this.parents(".m_f_tab-list").length > 0) {
					return "subTab";
				} else if (_this.is(".a_tab-btn")) {
					return "mTab";
				} else {
					return "tab";
				}
			},

			toggle: function (_this) {
				
				var _depthCheck = _this.parent("h3").length > 0 ? "depth1" : "depth2",
					_slideWrap = null,
					_toggleCheck = _this.is(".on");

				//depth toggle motion
				P5_APPS.howToTab.event.action(_this, _depthCheck);

				//slide check - depth2
				if (_this.parent().next("[data-role='tab-content']").find(".active [data-role*='slide-']").length > 0) {
					_slideWrap = _this.parent().next("[data-role='tab-content']").find(".active [data-role*='slide-']");
					P5_APPS.howToTab.event.slide(_slideWrap);
				//slide check - depth1
				} else if (_this.parent().next("[data-role='tab-content'].active").find("[data-role*='slide-']").length > 0) {
					_slideWrap = _this.parent().next("[data-role='tab-content'].active").find("[data-role*='slide-']");
					P5_APPS.howToTab.event.slide(_slideWrap);
				}

				if (P5_APPS.howToTab.elem._winHoriz < 769) {
					var _toggleTop = _this.offset().top,
						_isFloating = jQueryOld(document).find("#apps_floating").length > 0 ? true : false,
						_floatingHeight = _isFloating === true ? jQueryOld(document).find("#apps_floating").outerHeight() : 0,
						_resultTop = _toggleTop - _floatingHeight;

					jQueryOld("html, body").stop().animate({
						scrollTop: _resultTop
					}, 500, "easeOutSine");
				}

				//accessibility mobile
				if (window.innerWidth < 769) {
					P5_APPS.howToTab.event.accessibilityMobile(_this, _toggleCheck, "depth1");
				}
				
			},

			toggleMobile: function (_this) {
				
				var _height = _this.next().find(">li").outerHeight() * _this.next().find(">li").length,
					_toggleCheck = _this.next().is(".on"),
					_btnHeight = _this.outerHeight();
								
				if (_toggleCheck === false) {
					_this.addClass("active");
					_this.next().addClass("on").css({
						"top": _btnHeight,
						"height": _height
					});
				} else {
					_this.removeClass("active");
					_this.next().removeClass("on").css({
						"top": _btnHeight,
						"height": 0
					});
				}
				
				//accessibility mobile
				P5_APPS.howToTab.event.accessibilityMobile(_this, _toggleCheck);

				//tagging
				P5_APPS.howToTab.event.toggleTagging(_this, _toggleCheck, "mTab");

			},

			toggleSubMobile: function (_this) {
				var _text = _this.text().trim(),
					_list = _this.parents(".f_tab-content.active").find(".f_tab.depth2 > li"),
					_idx = _this.parent().index(),
					_slideWrap = _list.eq(_idx).find("[data-role*='slide-']");

				_this.parents(".m_f_tab-list").removeClass("on");
				_this.parents(".m_f_tab-list").prev(".a_tab-btn").removeClass("active");
				_this.parents(".m_f_tab-list").prev(".a_tab-btn").find("*:first-child").text(_text);
				_this.parents(".m_f_tab-list").prev(".a_tab-btn").focus();

				//slide content toggle
				_list.eq(_idx).find(">.f_tab-content").addClass("active").parent("li").siblings().find(">.f_tab-content").removeClass("active");

				//slide event
				P5_APPS.howToTab.event.slide(_slideWrap);

				//accessibility mobile
				P5_APPS.howToTab.event.accessibilityMobile(_this.parents(".m_f_tab-list").prev(".a_tab-btn"), true);

				_this.parents(".m_f_tab-list").css({
					"top": _this.outerHeight(true),
					"height": 0
				});

			},

			toggleTagging: function (_this, _toggleCheck, _type) {
				
				var _tagging = _this.data("omni");

				if (_toggleCheck === false) {
					_this.attr("data-omni", _tagging.replace("_show more", "_show less"));
				} else {
					_this.attr("data-omni", _tagging.replace("_show less", "_show more"));
				}

			},

			accessibilityMobile: function (_this, _toggleCheck, _depth) {
				
				var _on = _this.data("toggle-on"),
					_off = _this.data("toggle-off");

				if (_depth === undefined) {
					if (_toggleCheck === false) {
						_this.next().find("button").attr("aria-hidden", false);
						_this.next().find("button").attr("tabindex", 0);
						_this.find(".blind").text(_off); //_altArray[1] => Close the category
					} else {
						_this.next().find("button").attr("aria-hidden", true);
						_this.next().find("button").attr("tabindex", -1);
						_this.find(".blind").text(_on); //_altArray[0] => Open the category
					}
				} else {
					if (_toggleCheck === false) {
						_this.find(".blind").text(_off); //_altArray[1] => Close the category
					} else {
						_this.find(".blind").text(_on); //_altArray[0] => Open the category
					}
				}

			},

			action: function (_this, _depthCheck) {
				switch (_depthCheck) {
					case "depth1":
						
						if (P5_APPS.howToTab.elem._winHoriz > 768) {
							_this.addClass("on").parents("li").siblings().find("h3 > [data-role='tab-btn']").removeClass("on");
							_this.parents("li").siblings().find("[data-role='tab-content']").removeClass("active");
							_this.parent().next("[data-role='tab-content']").addClass("active");
						} else {
							
							//toggle button text reset
							if (_this.parent("h3").next().find(".m_f_tab").length > 0) {
								var _mTab = _this.parent("h3").next().find(".m_f_tab"),
									_mTabList = _mTab.find(".m_f_tab-list"),
									_mTabFirstText = _mTabList.find("li:first-child button").text();

								_mTab.find(">[data-role='tab-btn'] >span:first-child").text(_mTabFirstText);
							}

							if (_this.is(".on") === true) {
								_this.removeClass("on").parents("li").siblings().find("h3 > [data-role='tab-btn']").removeClass("on");
								_this.parent().next("[data-role='tab-content']").removeClass("active");

								if (_this.parent().next("[data-role='tab-content']").find(".slick-initialized").length > 0) {
									_this.parent().next("[data-role='tab-content']").find(".slick-initialized").slick("unslick");
								}
							} else {
								_this.addClass("on").parents("li").siblings().find("h3 > [data-role='tab-btn']").removeClass("on");
								_this.parent().next("[data-role='tab-content']").addClass("active").parents("li").siblings().find("[data-role='tab-content']").removeClass("active");
								//P5_APPS.howToTab.event.slide(_this.parent().next("[data-role='tab-content']").find("[data-role*='slide-']"));
							}
						}

						//depth2 first button or tab-content reset
						if (_this.parent().next("[data-role='tab-content']").find(".depth2").length > 0) {
							var dep2 = _this.parent().next("[data-role='tab-content']").find(".depth2");
							dep2.find(">li [data-role='tab-btn']").removeClass("on");
							dep2.find(">li:first-child [data-role='tab-btn']").addClass("on");
							dep2.find("li [data-role='tab-content']").removeClass("active");
							dep2.find(">li:first-child [data-role='tab-content']").addClass("active");
						}
						break;

					case "depth2":
						_this.addClass("on").parents("li").siblings().find("h4 > [data-role='tab-btn']").removeClass("on");
						_this.parents("li").siblings().find("[data-role='tab-content']").removeClass("active");
						_this.parent().next("[data-role='tab-content']").addClass("active");
						break;
				
					default:
						break;
				}
			},

			slide: function (_wrap) {

				var _winHoriz = window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth,
					_slideVersion = _wrap.length > 1 ? "multiple" : "single",
					_config = {
						centerMode: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false,
						accessibility: true,
						speed: 500,
						dots: true,
						arrows: true,
						adaptiveHeight: true,
						rtl: jQueryOld("html").is(".rtl")
					}

				_wrap.parents("[data-role='tab']").find(">li").each(function(){
					if (jQueryOld(this).find("[data-role*='slide-']").is(".slick-initialized") === true) {
						jQueryOld(this).find("[data-role*='slide-'].slick-initialized").slick("unslick");
					}
				});

				switch (_slideVersion) {
					case "single":

						var _initFlag = _wrap.is(".slick-initialized") === true ? true : false;
						
						if(_initFlag === false){
							_wrap.slick(_config);
							P5_APPS.howToTab.event.slideMotion(_wrap);
							P5_APPS.howToTab.event.slideAccessibility(_wrap);
							P5_APPS.howToTab.event.slideTagging(_wrap);
						}
						break;

					case "multiple":

						_wrap.each(function () {

							var _isSize = jQueryOld(this).is(".pc-visible") === true ? true : false,
								_initFlag = jQueryOld(this).is(".slick-initialized") === true ? true : false;

							if (_winHoriz > 768) {
								if (_isSize === true) {
									if(_initFlag === false){
										var _this = jQueryOld(this);
										_this.slick(_config);
										P5_APPS.howToTab.event.slideMotion(_this);
										P5_APPS.howToTab.event.slideAccessibility(_this);
										P5_APPS.howToTab.event.slideTagging(_this);
									}
								} else {
									if (_initFlag === true) {
										jQueryOld(this).slick("unslick");
									}
								}
							} else {
								if (_isSize === false) {
									if(_initFlag === false){
										var _this = jQueryOld(this);
										_this.slick(_config);
										P5_APPS.howToTab.event.slideMotion(_this);
										P5_APPS.howToTab.event.slideAccessibility(_this);
										P5_APPS.howToTab.event.slideTagging(_this);
									}
								} else {
									if (_initFlag === true) {
										jQueryOld(this).slick("unslick");
									}
								}
							}

						});

						break;
				
					default:
						break;1
				}

			},

			slideMotion: function (_slide) {
				
				//slide title, desc reset
				var _firstList = _slide.find(".slick-slide:first-child"),
					_firstTit = _firstList.find("figcaption *:first-child").html().trim(),
					_firstDesc = _firstList.find("figcaption *:last-child").html().trim(),
					_descWrap = _slide.parents(".f_tab-content").find(">.step_desc");

				_slide.parents(".f_tab-content").find(">.step_desc *:first-child").html(_firstTit);
				_slide.parents(".f_tab-content").find(">.step_desc *:last-child").html(_firstDesc);

				if (_slide.parents(".f_tab-content").find(">.step_desc *:last-child a").length > 0) {
					_slide.parents(".f_tab-content").find(">.step_desc *:last-child a").attr("tabindex", -1);
				}

				//slide desc height
				if (_slide.parents(".f_tab-content").find(">.step_desc .desc.only").length > 0) {
					P5_APPS.howToTab.elem._descHeight = _slide.parents(".f_tab-content").find(">.step_desc .desc.only").outerHeight();
				} else {
					P5_APPS.howToTab.elem._descHeight = _slide.parents(".f_tab-content").find(">.step_desc *:first-child").outerHeight() + _slide.parents(".f_tab-content").find(">.step_desc *:last-child").outerHeight(true);
				}
				_descWrap.css("height", P5_APPS.howToTab.elem._descHeight);

				//slide section height motion
				P5_APPS.howToTab.event.sectionMotion(_slide, "init");

				if (_slide.find("figcaption *:last-child a").length > 0) {
					_slide.find("figcaption *:last-child a").on("focus", function () {
						_slide.parents(".f_tab-content").find(">.step_desc *:last-child a").css({
							"outline": "2px solid #835c11"
						});
					});

					_slide.find("figcaption *:last-child a").on("focusout", function () {
						_slide.parents(".f_tab-content").find(">.step_desc *:last-child a").removeAttr("style");
					});
				}

				//slide event text change
				_slide.on("afterChange", function (e, slick, current, next) {
					var _this = jQueryOld(e.currentTarget),
						_listWrap = _this.find(".slick-list"),
						_list = _listWrap.find(".slick-slide").eq(current),
						_tit = _list.find("figcaption *:first-child").html().trim(),
						_desc = _list.find("figcaption *:last-child").html().trim();

					_slide.parents(".f_tab-content").find(">.step_desc *:first-child").html(_tit);
					_slide.parents(".f_tab-content").find(">.step_desc *:last-child").html(_desc);

					if (_slide.parents(".f_tab-content").find(">.step_desc *:last-child a").length > 0) {
						_slide.parents(".f_tab-content").find(">.step_desc *:last-child a").attr("tabindex", -1);
					}

					//slide desc height
					_descWrap = _slide.parents(".f_tab-content").find(">.step_desc");
					P5_APPS.howToTab.elem._descHeight = _slide.parents(".f_tab-content").find(">.step_desc *:first-child").outerHeight() + _slide.parents(".f_tab-content").find(">.step_desc *:last-child").outerHeight(true);
					setTimeout(function () {
						_descWrap.css("height", P5_APPS.howToTab.elem._descHeight);
					}, 0);

					//slide section height motion
					P5_APPS.howToTab.event.sectionMotion(_slide, "afterChange");
					
				});

				//slide mobile event
				_slide.on("swipe", function (event, slick, direction) {
					var _currentSCroll = jQueryOld(window).scrollTop();

					if (P5_APPS.howToTab.elem._winHoriz <= 768) {
						_slide.find(".slick-dots .slick-active button").focus();
						jQueryOld(window).scrollTop(_currentSCroll);
					}
				});

			},

			slideAccessibility: function (_slide) {
				_slide.find(".slick-slide").each(function (i) {
					var _tit = jQueryOld(this).find("figcaption > *:first-child").text();
					_slide.find(".slick-dots ul li").eq(i).find("button").text("slide" + (i + 1) + " : " + _tit);
				});
			},

			slideTagging: function (_slide) {
				_slide.find(".slick-slide").each(function (i) {
					_slide.find(".slick-dots ul li").eq(i).find("button").attr("data-omni-type", "microsite_pcontentinter");
					_slide.find(".slick-dots ul li").eq(i).find("button").attr("data-omni", "rolling:index_" + (i + 1));
				});
			},

			accessibility: function () {
				P5_APPS.howToTab.elem._wrap.find(".step_desc").attr("aria-hidden", true);

				if (P5_APPS.howToTab.elem._winHoriz <= 768) {
					if (P5_APPS.howToTab.elem._wrap.find(".m_f_tab-list").length > 0) {
						var mTabList = P5_APPS.howToTab.elem._wrap.find(".m_f_tab-list");

						mTabList.find("button").attr("aria-hidden", true);
						mTabList.find("button").attr("tabindex", 1);
					}
				}

			},

			resize: function () {
				P5_APPS.howToTab.elem._winHoriz = window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth;

				var sizeMode = P5_APPS.sizeMode > 1 ? 2 : 1;
				P5_APPS.howToTab.elem._beforeSizeMode = sizeMode;

				if (P5_APPS.howToTab.elem._beforeSizeMode !== P5_APPS.howToTab.elem._afterSizeMode) {
					var _slideWrap = P5_APPS.howToTab.elem._wrap.find("[data-role='tab-content'] .active [data-role*='slide-']").length > 0 ? P5_APPS.howToTab.elem._wrap.find("[data-role='tab-content'] .active [data-role*='slide-']") : P5_APPS.howToTab.elem._wrap.find("[data-role='tab-content'].active [data-role*='slide-']");
					
					P5_APPS.howToTab.elem._afterSizeMode = sizeMode;

					//resize tab reset & slide refresh
					if (P5_APPS.howToTab.elem._winHoriz > 768) {
						var _tabBtnOnLen = P5_APPS.howToTab.elem._wrap.find("h3 > [data-role='tab-btn'].on").length;

						if (_tabBtnOnLen === 0) {
							P5_APPS.howToTab.elem._wrap.find("[data-role='tab'] > li:first-child h3 button").trigger("click");
						} else {
							P5_APPS.howToTab.event.slide(_slideWrap);
						}
					} else {
						P5_APPS.howToTab.event.slide(_slideWrap);
					}

					//resize sub tab remember
					var _howToTabContent = P5_APPS.howToTab.elem._wrap.find(".f_tab-content.active");
					if (_howToTabContent.parents(".f_tab.depth2").length > 0 && P5_APPS.howToTab.elem._winHoriz > 768) {
						_howToTabContent.prev("h4").find("button").addClass("on").parents("li").siblings().find("h4 button").removeClass("on");
					} else if (_howToTabContent.parents(".f_tab.depth2").length > 0 && P5_APPS.howToTab.elem._winHoriz <= 768) {
						var _contentTit = _howToTabContent.prev("h4").find("button").text().trim();
						_howToTabContent.parents(".f_tab.depth2").prev(".m_f_tab").find(">button *:first-child").text(_contentTit);
					}

				}

				var _slide = P5_APPS.howToTab.elem._wrap.find(".slick-slider"),
					_descWrap = _slide.parents(".f_tab-content").find(">.step_desc");
				
				if (_slide.parents(".f_tab-content").find(">.step_desc .desc.only").length > 0) {
					P5_APPS.howToTab.elem._descHeight = _slide.parents(".f_tab-content").find(">.step_desc .desc.only").outerHeight();
				} else {
					P5_APPS.howToTab.elem._descHeight = _slide.parents(".f_tab-content").find(">.step_desc *:first-child").outerHeight() + _slide.parents(".f_tab-content").find(">.step_desc *:last-child").outerHeight(true);
				}
				
				setTimeout(function () {
					_descWrap.css("height", P5_APPS.howToTab.elem._descHeight);
				}, 0);

				if (P5_APPS.howToTab.elem._winHoriz > 768) {
					P5_APPS.howToTab.event.sectionMotion(_slide, "resize");
				} else {
					this.keyEvent();
				}

			},

			init: function () {

				var _wrap = P5_APPS.howToTab.elem._wrap,
					_container = _wrap.find(".m_feature > .f_container"),
					_tab = _container.find(">.f_tab");

				this.click();
				if (P5_APPS.howToTab.elem._winHoriz <= 768) {
					this.focusEvent();
					this.keyEvent();
				}

				if (location.href.indexOf("?") > -1) {
					var parameterObj = P5_APPS.parameter(),
						howtoParamCheck = false;

					for (var key in parameterObj) {
						if(key === "howtouse") howtoParamCheck = true;
					}

					if (howtoParamCheck) {

						var _tabIdx = Number(parameterObj.howtouse) - 1,
							_tabThis = _tab.find(">li").eq(_tabIdx);

						_wrap.find(".active").removeClass("active");
						_tab.find(">li h3 button").removeClass("on");
						_tabThis.find(">h3 button").addClass("on");
						_tabThis.find(">.f_tab-content").addClass("active");

						if (_tabThis.find(".f_tab.depth2").length > 0) {
							_tabThis.find(".f_tab.depth2 > li h4 button").removeClass("on");
							_tabThis.find(".f_tab.depth2 > li:first-child h4 button").addClass("on");
							_tabThis.find(".f_tab.depth2 > li:first-child [data-role='tab-content']").addClass("active");
						}
					}

				}
				
				var _slideWrap = _wrap.find("[data-role='tab-content'] .active [data-role*='slide-']").length > 0 ? _wrap.find("[data-role='tab-content'] .active [data-role*='slide-']") : _wrap.find("[data-role='tab-content'].active [data-role*='slide-']");
				if (_slideWrap !== undefined) {
					this.slide(_slideWrap);

					//adaptiveHeight : true - bug fix <== resize issue
					if (P5_APPS.howToTab.elem._winHoriz > 768) {
						var _loadIdx = 0;
						_slideWrap.find(".slick-slide.slick-current img:first").load(function (e) {
							if (_loadIdx === 0 && e.target.getAttribute("src").indexOf("blank.gif") === -1) {
								var _height = _slideWrap.find(".slick-slide.slick-current").outerHeight(),
									_marginValue = _slideWrap.outerHeight() - _slideWrap.height();

								_slideWrap.css("height", _height + _marginValue);
								P5_APPS.howToTab.event.sectionMotion(_slideWrap, "init");
								_loadIdx = _loadIdx + 1;
							} else {
								_slideWrap.removeAttr("style");
								return false;
							}
						});
					} else {
						var _loadIdx = 0;
						_slideWrap.find(".slick-slide.slick-current img:first").load(function (e) {
							if (_loadIdx === 0 && e.target.getAttribute("src").indexOf("blank.gif") === -1) {
								var _height = _slideWrap.find(".slick-slide.slick-current").outerHeight(),
									_dotsHeight = _slideWrap.find(".slick-dots").outerHeight(true),
									_resultHeight = _height + _dotsHeight;

								_slideWrap.css("height", _resultHeight);
								_slideWrap.find(".slick-list").css("height", _height);
								_loadIdx = _loadIdx + 1;
							} else {
								_slideWrap.removeAttr("style");
								return false;
							}
						});
					}
				}

				this.accessibility();
			}

		},

		resize: function () {
			if (this.elem._wrap.length > 0 && this.elem._btn.length > 0) {
				P5_APPS.howToTab.elem._loadCheck = P5_APPS.howToTab.elem._loadIdx >= 1 ? false : true;
				if (P5_APPS.howToTab.elem._loadCheck === false) {
					this.event.resize();
				} else {
					P5_APPS.howToTab.elem._loadIdx = P5_APPS.howToTab.elem._loadIdx + 1;
				}
			}
		},

		init: function () {
			if (this.elem._wrap.length > 0 && this.elem._btn.length > 0) {
				this.event.init();
			}
		}
	},
	accessibility: {

		elem: {
			_beforeSizeMode: 0,
			_afterSizeMode: 0
		},

		common: {

			elem: {
				_headdingElem: jQueryOld(document).find(".apps .m_content-intro h1")
			},

			headdingAriaEvent: function () {

				var ariaType = window.innerWidth > 768 ? true : false;
				this.elem._headdingElem.attr("aria-hidden", ariaType);

			},

			resize: function () {

				var sizeMode = P5_APPS.sizeMode > 1 ? 2 : 1;
				P5_APPS.accessibility.elem._beforeSizeMode = sizeMode;

				if (P5_APPS.accessibility.elem._beforeSizeMode != P5_APPS.accessibility.elem._afterSizeMode) {
					P5_APPS.accessibility.elem._afterSizeMode = sizeMode;
					if (this.elem._headdingElem.length > 0) this.headdingAriaEvent();
				}

			},

			init: function () {
				if (this.elem._headdingElem.length > 0) this.headdingAriaEvent();
			}

		},

		resize: function () {
			this.common.resize();
		},

		init: function () {
			this.common.init();
		}

	},
	readyInit: function (){
		this.eiwafDevice.detect();
		this.deviceCheck();
		this.deviceSeries();
		this.imgLazyLoad(jQueryOld(".apps-content > section"));
		this.accessibility.init();
		this.deeplink.init();
		this.motion.init();
		if (jQueryOld('[data-role="apps-youtube-visual"]').length > 0) this.youtube.init();
		
		var _jsonDataCheck = null,
			_timer = 0;

		_jsonDataCheck = setInterval(function () {
			_timer = _timer + 10;
			if (typeof commonObj !== "undefined") {
				clearInterval(_jsonDataCheck);
				P5_APPS.serviceFloatingBar.init();
				P5_APPS.footerAjax();
			} else if (_timer > 5000) {
				console.error("error json undefined");
				clearInterval(_jsonDataCheck);
			}
		}, 10);

		this.themesAnchorRedirect.init();
		
		//임시 추후 삭제 0306 galaxy-themes
        if( APPS_SERVICE_NAME == "galaxy-themes" ){
			if ( APPS_SITE_CODE === "rs" ) {
				setTimeout(function(){
					jQueryOld(".m_content-huge .card_list_wrap > .disclaimer p").text("* Slike pozadine za „Infinity-O display“ su trenutno podržane na modelima „Galaxy S20“ / „S20+“ / „S20 Ultra“ / „Z Flip“ / „S10“ / „S10+“ / „S10e“ i „Note10“ / „Note10+“. Možete da preuzmete „Galaxy Themes“ iz prodavnice „Galaxy Store“.");	
				}, 2000);
			} else if ( APPS_SITE_CODE === "lt" ){
				setTimeout(function(){
					jQueryOld(".m_content-huge .card_list_wrap > .disclaimer p").text("* „Infinity-O display“ fonus šiuo metu palaiko „Galaxy S20“ / „S20+“ / „S20 Ultra“ / „Z Flip“ / „S10“ / „S10+“ / „S10e“ ir „Note10“ / „Note10+“. „Galaxy Themes“ galite atsisiųsti iš „Galaxy Store“.");	
				}, 2000);
			} else if( APPS_SITE_CODE === "cl" ){
				var _kvMobileUrl = location.href.indexOf("www.samsung.com") > -1 ? "//images.samsung.com/apps/hubble/galaxy-themes/common/themes_kv_mo.jpg" : "//images.samsung.com/apps/hubble/qa/galaxy-themes/common/themes_kv_mo.jpg";
				jQueryOld(document).find(".apps.themes.cl .m_content-kv img").attr("data-src-mobile", _kvMobileUrl);
			}
		}

	},
	loadInit: function () { //전체 스크립트 기본 실행
		this.imgSrcReplaceQa();
		this.scrollBarWidth = this.getScrollBarWidth();		
		this.sections = this.sections();
		this.resize(true);
		this.slideAnchor();
		this.gifAnimate();
		this.video.init();
        this.howToTab.init();
		this.slide.init();

		if (APPS_SITE_CODE === "th") {
            setTimeout(function () {
                var _link = jQueryOld(".apps a[href^='#'], #apps_floating a[href^='#'], .apps_cr a[href^='#']");
                _link.each(function () {
                    if (jQueryOld(this).attr("href") !== "#search" && jQueryOld(this).attr("href") !== "#section-deal" && jQueryOld(this).attr("href") !== "#section-locally") {
                        jQueryOld(this).attr("href", "javascript:void(0)");
                    }
                });
            }, 500);
		}
	}
};
jQueryOld(document).ready(function () { P5_APPS.readyInit(); });
jQueryOld(window).resize(function () { P5_APPS.resize(true, "resize"); });
jQueryOld(window).scroll(function (target) { P5_APPS.scroll(); P5_APPS.scrollType = target.type;  });
jQueryOld(window).on("mousewheel DOMMouseScroll", function(target){ P5_APPS.scrollType = target.type; });
if (window.addEventListener) { window.addEventListener('load', P5_APPS.loadInit(), false); } else if (window.attachEvent) { window.attachEvent('onload', P5_APPS.loadInit()); }