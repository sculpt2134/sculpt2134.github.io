var beforeSizeMode,
	afterSizeMode;

$.browser = {};
(function () {
	jQuery.browser.mobile = false;
	jQuery.browser.ie = false;
	$.browser.version = 0;
	if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
		$.browser.ie = true;
		jQuery.browser.version = RegExp.$1;
	} else if (navigator.userAgent.match(/Mobile ([0-9]+)\./)) {
		$.browser.mobile = true;
		jQuery.browser.version = RegExp.$1;
	}
})();

var P5_APPS = {
	isMobile: $.browser.mobile,
	isPoorBrowser: $.browser.ie && 9 > $.browser.ie,
	parallaxAble: !($.browser.ie && 9 > $.browser.ie) && /* !$.browser.mobile && */ $.support.transition,
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
	layerAria: function (value) {
		$("#header").attr("aria-hidden", value);
		$(".cm-g-breadcrumb").attr("aria-hidden", value);
		$("#footer").attr("aria-hidden", value);
		$("#oo_tab").attr("aria-hidden", value);
		$(".s-btn-gotop").attr("aria-hidden", value);
	},
	addViewportEvent: function (param, target) { //해당 섹션에 들어갈때 or 벗어날때 이벤트 적용
		var events = 'scroll.addViewportEvent load.addViewportEvent resize.addViewportEvent';
		param = $.extend({
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
		var methods = $.fn.extend({
			destroy: function () {
				$(param.parent).off(events);
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
			$(parent).on(events, function () {
				var returnValue = {
					Height: $(obj).outerHeight(),
					ViewportHeight: $(parent).height(),
					ScrollTop: $(document).scrollTop(),
					OffsetTop: $(obj).offset().top
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
						$(obj).trigger('enter');
						if ($.isFunction(param.enter)) param.enter();
					}
					if (isEnter && (param.triggerPositionPercent !== false && viewPortPositionPercent > 0) || (param.triggerPosition && viewPortPosition > 0)) {
						$(obj).trigger('leave');
						if ($.isFunction(param.leave)) param.leave();
					}
					if ($.isFunction(param.progress)) {
						if (param.triggerPositionPercent) param.progress(Number(viewPortPositionPercent), returnValue);
						if (param.triggerPosition) param.progress(Number(viewPortPosition), returnValue);
					}
				}
				if (!isActive && visiblePercent > 0) {
					$(obj).trigger('visible');
					if ($.isFunction(param.visible)) param.visible();
				}
				if (isActive && visiblePercent == 0) {
					$(obj).trigger('invisible');
					if ($.isFunction(param.invisible)) param.invisible();
					$(obj).trigger('leave');
					if ($.isFunction(param.leave)) param.leave();
				}
				if (!isFullVisible && visiblePercent == 100) {
					$(obj).trigger('fullVisible');
					if ($.isFunction(param.fullVisible)) param.fullVisible();
				}
				if ($.isFunction(param.visiblePercent)) param.visiblePercent(Number(visiblePercent), returnValue);
				isActive = visiblePercent != 0;
				isEnter = ((param.triggerPositionPercent && viewPortPositionPercent <= 0) && isVisible) || ((param.triggerPosition && viewPortPosition <= 0) && isVisible);
				isFullVisible = visiblePercent >= 100;
			});
		});
	},
	/* sections */
	sections: function () {
		var $wrap = $('#wrap'),
			$contents = $('.apps-content'),
			$sections = $contents.children('[class^="m_"]'),
			$blocks = [],
			$children = null,
			controls = [],
			transformName = $.support.transform,
			parallaxAble = P5_APPS.parallaxAble,
			parallaxAbleTypes = /^(x|y|s|a|c)$/,
			parallaxFloatTypes = /^(s|a)$/,
			i = 0,
			j = 0,
			numSections = $sections.length,
			k, kmax,
			numBlocks;
		var nonLazyTarget = [$(".apps-content > section:eq(0)"), $(".m_content-intro"), $(".m_content-kv"), $(".m_content-pdp"), $("[data-role='gif-animation']")];
		$.each(nonLazyTarget, function (i, v) {
			v.addClass('non-lazy');
		});
		for (; i < numSections; i++ , j++) {
			$blocks[j] = $($sections[i]);
			controls[j] = createControls($blocks[j]);
			if (!controls[j]) {
				for ($children = $blocks[j].children('[class^="m_"]'), k = 0, kmax = $children.length; k < kmax; j++ , k++) {
					$blocks[j] = $($children[k]);
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
				$parallaxer = $({
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
				$figures[i] = $($figures[i]);
				$images[i] = $($images[i]);
				imageSources[i] = P5_APPS.getImageSources($images[i]);
			}
			$parallaxs = $article.find('[data-parallax]');
			for (i = 0, max = $parallaxs.length; i < max; i++) {
				$parallaxs[i] = $($parallaxs[i]);
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
						properties.y = $(window).width() * (properties.y) / 1440;
						properties.x = $(window).width() * (properties.x) / 1440;
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
										//valueTo = ($(window).width() * valueTo)/1920;
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
							if ($('[data-parallax]').length) {
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
				$.each(P5_APPS.scrollFunctions, function () {
					this(scrollTop, maxScrollTop);
				});
			}
			// if ($(".m_content-innovative.inno").length > 0) {
			// 	P5_APPS.passMoving.scroll();
			// }
			if ($('.m_content-decorative').length > 0) {
				P5_APPS.themesTab.scroll();
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
			width = Math.max($('#wrap').outerWidth(), width);
		}
		height = $(window).height();
		// ignore Mode
		if (func !== true) {
			if (!$.browser.mobile && width == P5_APPS.areaWidth && height == P5_APPS.areaHeight) {
				return;
			} else if ($.browser.mobile && width == P5_APPS.areaWidth) {
				return;
			}
		}
		var scrollBarWidth;
		var windowSize = window.innerWidth != undefined ? window.innerWidth : $(window).innerWidth() + 17;
		if ($.browser.mobile) {
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
			$.each(P5_APPS.resizeFunctions, function () {
				this();
			});
		}
		P5_APPS.scroll();
		P5_APPS.mobile_slider.resize();
		P5_APPS.tabToSlide.resize();
		P5_APPS.tabVideoKeyControl.resize();
		P5_APPS.pdpImgReplace();
		P5_APPS.step.resize();
		// if ($(".m_content-innovative.inno").length > 0) {
		// 	P5_APPS.passMoving.resize();
		// 	P5_APPS.passMoving.scroll();
		// }

		if (P5_APPS.video.elem._videoWrap.length > 0) {
			P5_APPS.video.resize();
		}

		P5_APPS.slide.resize();
		P5_APPS.motion.resize();
		if (location.pathname.indexOf("fr") > -1) { this.videoBackground.resize(); }
		P5_APPS.serviceFloatingBar.resize();
		P5_APPS.deeplink.resize();
	},
	ready: function (func) {
		if (func === undefined) { if (this.readyFunctions.length) { $.each(this.readyFunctions, function () { this(); }); } } else { if (typeof (func) == 'function') { this.readyFunctions.push(func); } } return this;
	},
	load: function (func) {
		if (func === undefined) { if (this.loadFunctions.length) { $.each(this.loadFunctions, function () { this(); }); } } else { if (typeof (func) == 'function') { this.loadFunctions.push(func); } } return this;
	},
	tab: function () { //how to use 탭
		var winWidth = window.innerWidth != undefined ? window.innerWidth : $(window).innerWidth() + 17;
		$("[data-role='tab']").each(function (key, value) {
			var _tab = $(this),
				_tabBtn = _tab.find("[data-role='tab-btn']"),
				_tabContent = _tab.find("[data-role='tab-content']"),
				_typeCheck = _tab.find(">li > .f_tab-content").is(".howto_type2") ? true : false;
			_tabBtn.removeClass("on");
			_tab.find(".f_tab.depth2 .f_tab-content").removeAttr("style");
			_tab.find(".step_desc").attr("aria-hidden", true);
			if (!_tabBtn.hasClass("on") && _typeCheck == false) {
				_tabContent.hide();
				_tab.find(">*:first-child").find("[data-role='tab-btn']").addClass("on").end().find("[data-role='tab-content']").show();
			} else if (!_tabBtn.hasClass("on") && _typeCheck == true) {
				_tab.find(">li:first-child h3 > button").addClass("on");
				_tab.find(">li:first-child .f_tab-content > .f_tab.depth2 > li:first-child h4 button").addClass("on");
				_tab.find(">li .f_tab-content.howto_type2 .m_f_tab ul button").addClass("s_tab-btn");
				$(".m_f_tab-list").css({
					"overflow": "hidden",
					"display": "block",
					"height": 0
				});
				$(".m_f_tab-list").attr("aria-hidden", true);
				$(".m_f_tab-list").attr("tabindex", -1);
				$(".m_f_tab-list > li button").attr("aria-hidden", true);
				$(".m_f_tab-list > li button").attr("tabindex", -1);
				$(".m_f_tab-list").find("li:first-child button").addClass("on");
			}

			_tabBtn.on({
				"click": function (e) {
					var _this = $(this);
					var _alt = $(this).find('.blind');
					var altText = $(this).data('alt-text').split(',');
					var $Slider = $(this).closest("[data-role='tab']").find('.step_list');
					var f_tab_txt = $(this).parent("h3").next().find(".m_f_tab-list li:first-child button").text();
					var _omni = _this.attr("data-omni");
					e.preventDefault();
					if (_typeCheck == false) {
						// mobile
						if (P5_APPS.sizeMode == 1) {
							if (_this.hasClass("on")) {
								_this.removeClass("on").parent().next().hide();
								_alt.text(altText[0]);
								if (_this.attr("data-omni")) {
									_this.attr("data-omni", _this.attr("data-omni").replace("_show less", "_show more"));
								}
							} else {
								_tabBtn.removeClass("on");
								_tabBtn.find('.blind').text(altText[0]);
								_tabContent.hide();
								_this.addClass("on").parent().next().show();
								_alt.text(altText[1]);
								if (_this.attr("data-omni")) {
									_this.parents("li").siblings().find("[data-role='tab-btn']").each(function () {
										$(this).attr("data-omni", $(this).attr("data-omni").replace("_show less", "_show more"));
									});
									_this.attr("data-omni", _this.attr("data-omni").replace("_show more", "_show less"));
								}
								if (_this.hasClass("f_tab-header")) {
									var targetScrollTop = $(".nav-wrap").length ? _this.offset().top - $(".nav-wrap").outerHeight(true) : _this.offset().top;
									targetScrollTop = $(document).find("#apps_floating").length > 0 ? targetScrollTop - $(document).find("#apps_floating").outerHeight() : targetScrollTop;
									$("body, html").stop().animate({
										scrollTop: targetScrollTop
									}, 500);
								}
							}
						}
						// pc
						else {
							if (!_this.hasClass("on")) {
								_tabBtn.removeClass("on");
								_tabContent.hide();
								_this.addClass("on").parent().next().show();
							}
						}
					} else {
						var subTabLen = _this.next(".m_f_tab-list").find(">li").length,
							subTabText = _this.text(),
							onTxt = _this.next().find(".s_tab-btn.on").text(),
							s_tab_idx = _this.parent().index();
						// mobile
						if (P5_APPS.sizeMode == 1) {
							if (_this.is(".f_tab-header")) {

								var defTxt = _this.parent("h3").next().find(".m_f_tab-list li:first-child button").text();
								if (_this.is(".on")) {
									_this.removeClass("on");
									_alt.text(altText[0].trim());
									_this.parent("h3").next().css("display", "none");
									_this.parent("h3").next().find(".f_tab.depth2 li .f_tab-content").css("display", "none");
									if (_this.attr("data-omni")) {
										_this.attr("data-omni", _this.attr("data-omni").replace("_show less", "_show more"));
									}
								} else {

									if (_this.parents("li").find(".m_f_tab .a_tab-btn").length > 0) {
										var subTabText = _this.parents("li").find(".m_f_tab .a_tab-btn").data("alt-text").split(",");
										_this.parents("li").find(".m_f_tab .a_tab-btn").html(defTxt + "<span class='blind'>" + subTabText[0] + "</span>");
									}
									_this.parents("li").siblings().find(">h3 .f_tab-header").removeClass("on");
									_this.parents("li").siblings().find(".f_tab.depth2 > li h4 .f_tab-header").removeClass("on");
									_this.parents("li").siblings().find(".f_tab.depth2 > li:first-child h4 .f_tab-header").addClass("on");
									_this.parents("li").siblings().find(".f_tab-content").css("display", "none");
									if (_this.parents("li").find(".a_tab-btn[data-role='tab-btn']").length > 0) {
										_this.parents("li").find(".f_tab.depth2 > li:first-child .f_tab-header[data-role='tab-btn']").addClass("on");
									}
									_this.addClass("on");
									_tabBtn.not('.a_tab-btn').find('.blind').text(altText[0]);
									_alt.text(altText[1].trim());
									_this.parent("h3").next().css("display", "block");
									_this.parent("h3").next().find(".m_f_tab > a_tab-btn").text(defTxt);
									_this.parent("h3").next().find(".m_f_tab-list li:first-child button").addClass("on");
									_this.parent("h3").next().find(".f_tab.depth2 li:first-child .f_tab-content").css("display", "block");
									_this.parent("h3").next().find(".m_f_tab .m_f_tab-list li > button").removeClass("on");
									_this.parent("h3").next().find(".m_f_tab .m_f_tab-list li:first-child > button").addClass("on");
									if (_this.attr("data-omni")) {
										_this.parents("li").siblings().find(">h3 .f_tab-header").each(function () {
											$(this).attr("data-omni", $(this).attr("data-omni").replace("_show less", "_show more"));
										});
										_this.attr("data-omni", _this.attr("data-omni").replace("_show more", "_show less"));
									}
								}
							} else if (_this.is(".a_tab-btn")) {
								if (_this.is(".active")) {
									_this.next(".m_f_tab-list").attr("aria-hidden", true);
									_this.next(".m_f_tab-list > li button").attr("aria-hidden", true);
									_this.next(".m_f_tab-list").attr("tabindex", -1);
									_this.next(".m_f_tab-list > li button").attr("tabindex", -1);
									_this.next(".m_f_tab-list").stop().animate({
										"height": 0
									}, 400, function () {
										_this.removeClass("active");
										_this.find(".blind").text(altText[0]);
									});
									if (_this.attr("data-omni")) {
										_this.attr("data-omni", _this.attr("data-omni").replace("_show less", "_show more"));
									}
								} else {
									var listHeight = 0;
									_this.next(".m_f_tab-list").find(">li").each(function () {
										listHeight = listHeight + $(this).outerHeight();
									});
									_this.next(".m_f_tab-list").removeAttr("aria-hidden");
									_this.next(".m_f_tab-list").removeAttr("tabindex");
									_this.next(".m_f_tab-list").find(">li button").removeAttr("aria-hidden");
									_this.next(".m_f_tab-list").find(">li button").removeAttr("tabindex");
									_this.next(".m_f_tab-list").stop().css({
										"top": _this.outerHeight()
									}).animate({
										//"height": (subTabLen * 100) + "%"
										"height": listHeight
									}, 400, function () {
										_this.addClass("active");
										_this.find(".blind").text(altText[1]);
									});
									if (_this.attr("data-omni")) {
										_this.attr("data-omni", _this.attr("data-omni").replace("_show more", "_show less"));
									}
								}
							} else {
								_this.parent("li").siblings().find(">button").removeClass("on");
								_this.parents(".m_f_tab").next(".f_tab.depth2").find(">li h4 button").removeClass("on");
								_this.parents(".m_f_tab").next(".f_tab.depth2").find(">li").eq(s_tab_idx).find("h4 > button").addClass("on");
								_this.addClass("on");
								_this.parents(".m_f_tab-list").attr("aria-hidden", true);
								_this.parents(".m_f_tab-list > li button").attr("aria-hidden", true);
								_this.parents(".m_f_tab-list").attr("tabindex", -1);
								_this.parents(".m_f_tab-list > li button").attr("tabindex", -1);
								_this.parents(".m_f_tab-list").stop().animate({
									"height": 0
								}, 400, function () {
									$(this).prev().removeClass("active");
									_this.parents(".m_f_tab").find('.a_tab-btn').html(_this.text() + "<span class='blind'>" + altText[0] + "</span>").focus();
								});

								_this.parents(".m_f_tab").next(".f_tab.depth2").find(">li").eq(s_tab_idx).siblings().find(".f_tab-content").css("display", "none");
								_this.parents(".m_f_tab").next(".f_tab.depth2").find(">li").eq(s_tab_idx).find(".f_tab-content").css("display", "block");

								var dataOmniTarget = _this.parents(".m_f_tab").find('.a_tab-btn'),
									thisOmni = $(this).data("omni");
								if (dataOmniTarget.attr("data-omni")) {
									dataOmniTarget.attr("data-omni", thisOmni + "_show more");
								}
							}
							if (_this.hasClass("f_tab-header")) {
								var targetScrollTop = $(".nav-wrap").length ? _this.offset().top - $(".nav-wrap").outerHeight(true) : _this.offset().top;
								targetScrollTop = $(document).find("#apps_floating").length > 0 ? targetScrollTop - $(document).find("#apps_floating").outerHeight() : targetScrollTop;
								$("body, html").stop().animate({
									scrollTop: targetScrollTop
								}, 500);
							}
							// pc
						} else {
							if (_this.parents("ul.f_tab").is(".depth2")) {
								_this.parents("li").siblings().find("[data-role='tab-btn']").removeClass("on");
								_this.addClass("on");
								_this.parents("ul").prev(".m_f_tab").find(".m_f_tab-list > li").eq(s_tab_idx).find("button").addClass("on");
								_this.parents("ul").prev(".m_f_tab").find(".a_tab-btn").html(subTabText + "<span class='blind'>" + altText[1] + "</span>");
								_this.parents("li").siblings().find(".f_tab-content").hide();
								_this.parent("h4").next(".f_tab-content").show();
							} else {
								_tabBtn.removeClass("on");
								_this.parents("li").siblings().find(">.f_tab-content").hide();
								_this.addClass("on");
								_this.parent("h3").next(".f_tab-content").show();
								_this.parent("h3").next(".f_tab-content").find(".f_tab > li:first-child h4 button").addClass("on");
								_this.parent("h3").next(".f_tab-content").find(".f_tab > li .f_tab-content").hide();
								_this.parent("h3").next(".f_tab-content").find(".f_tab > li:first-child .f_tab-content").show();
							}
						}
					}
					// slide가 존재할 경우
					if ($Slider.length) {
						if (!_this.is(".a_tab-btn")) {
							$Slider.filter('.slick-initialized').slick("unslick");
						}

						$Slider.each(function () {
							var $title = $(this).children('div:first-child').find('figcaption >*:first-child').html(),
								$titleData = $(this).children('div:first-child').find('figcaption >*:first-child').data('key'),
								$desc = $(this).children('div:first-child').find('figcaption p').html(),
								$descData = $(this).children('div:first-child').find('figcaption p').data('key');
							
							if (window.innerWidth > 768 && !$(this).is(".mo-visible")) {
								
								if ($(this).is(".pc-visible")){
									var $this = $(this).parent().find(".pc-visible");
									$title = $this.children('div:first-child').find('figcaption >*:first-child').html();
									$titleData = $this.children('div:first-child').find('figcaption >*:first-child').data('key');
									$desc = $this.children('div:first-child').find('figcaption p').html();
									$descData = $this.children('div:first-child').find('figcaption p').data('key');
								}

								$(this).closest('li').find('.step_desc >*:first-child').html($title).end().find('.step_desc p').html($desc);
								$(this).closest('li').find('.step_desc >*:first-child').attr('data-key', $titleData).end().find('.step_desc p').attr('data-key', $descData);

							} else if(window.innerWidth < 769) {
								if ($(this).is(".mo-visible")){
									var $this = $(this).parent().find(".mo-visible");
									$title = $this.children('div:first-child').find('figcaption >*:first-child').html();
									$titleData = $this.children('div:first-child').find('figcaption >*:first-child').data('key');
									$desc = $this.children('div:first-child').find('figcaption p').html();
									$descData = $this.children('div:first-child').find('figcaption p').data('key');
								}
								
								$(this).closest('li').find('.step_desc >*:first-child').html($title).end().find('.step_desc p').html($desc);
								$(this).closest('li').find('.step_desc >*:first-child').attr('data-key', $titleData).end().find('.step_desc p').attr('data-key', $descData);

							}
							
						});

						//desktop
						if (P5_APPS.sizeMode != 1) {
							if ($('.apps').hasClass('rtl') || $('.apps_usp').hasClass('rtl')) {
								P5_APPS.step.defaultConfig.rtl = true;
							}
							_this.closest('li').find('.step_list').slick(P5_APPS.step.defaultConfig);
						} else {
							if ($("#section-howto").find(".howto_type2").length < 0) {
								if (_this.hasClass('on')) {
									_this.closest('li').find('.step_list').slick(P5_APPS.step.defaultConfig);
								} else {
									_this.closest('li').find('.step_list').slick('unslick');
								}
							} else {
								if (_this.hasClass('on')) {
									if ($('.apps').hasClass('rtl') || $('.apps_usp').hasClass('rtl')) {
										P5_APPS.step.defaultConfig.rtl = true;
									}
									_this.closest('.f_tab').find('.step_list').slick(P5_APPS.step.defaultConfig);
								} else if (!_this.is(".a_tab-btn")) {
									if (_this.closest('.f_tab').find('.step_list').is(".slick-initialized")) {
										_this.closest('.f_tab').find('.step_list').slick('unslick');
									}
								}
							}
						}
					}
				}
			});
		});

		$("[data-role='tab'] .m_f_tab").on("focusout", function (e) {
			if (window.innerWidth < 769) {
				var _this = $(this),
					_thisAltArray = _this.find(".a_tab-btn").data("alt-text").split(",");

				if (_this.find(".a_tab-btn").is(".active") === true && $(e.relatedTarget).is(".s_tab-btn") === false) {
					_this.find(".a_tab-btn").removeClass("active");
					_this.find(".a_tab-btn .blind").text(_thisAltArray[0].trim());
					_this.find(".m_f_tab-list").attr("aria-hidden", true);
					_this.find(".m_f_tab-list").attr("tabindex", -1);
					_this.find(".m_f_tab-list > li button").attr("aria-hidden", true);
					_this.find(".m_f_tab-list > li button").attr("tabindex", -1);
					_this.find(".m_f_tab-list").css({
						"overflow": "hidden",
						"display": "block",
						"height": 0
					});
				}
			}
		});

		if (winWidth < 769) {
			P5_APPS.tabDep2Key();
		}
	},
	tabDep2Key: function () { //how to use 탭 키보드 이동
		$('.m_f_tab-list button').on('focusin', function (e) {
			var currentIdx = $(this).parent().index();
			var listLen = $(this).closest('.m_f_tab').find('li').length - 1;
			if (!$(this).closest('.m_f_tab').find('.a_tab-btn').hasClass('active')) {
				if (currentIdx == 0) {
					var listIdx = $(this).closest('.m_f_tab-list').find('.s_tab-btn.on').parent().index();
					var contentTab = $(this).closest('.f_tab-content').find('.f_tab.depth2');
					var contentAnchor_flag = contentTab.find('> li').eq(listIdx).find('a, button, input').filter(':visible').length ? true : false;
					var dep1_idx = $(this).closest('.f_tab-content').closest('li').index();
					var dep1_len = $('.m_content-step .f_container > .f_tab > li').length - 1;
					if (contentAnchor_flag == true) {
						contentTab.find('a,button,input').filter(':visible').first().focus();
					} else {
						if (dep1_idx != dep1_len) {
							$(this).closest('.f_tab-content').closest('li').next().find('a,button,input').filter(':visible').first().focus();
						} else {
							$('.m_content-step').next().find('a,button,input').filter(':visible').first().focus();
						}
					}
				} else if (currentIdx == listLen) {
					$(this).closest('.m_f_tab').find('.a_tab-btn').focus();
				}
			}
		});
	},
	step: { //how to use 탭 slider
		val: {
			breakPointCheck: "",
			focusChk: false,
			onlyFirstCheck: true,
			level1TapBtn: $(".m_content-step h3 .f_tab-header"),
			prevSizeMode: null,
			currentSizeMode: null,
			prevPagingTitle: "Tip",
			pagingTitleIdx: 0,
			currentIdx : 0
		},
		init: function () {
			P5_APPS.step.slickSlider();
			P5_APPS.step.val.breakPointCheck = P5_APPS.sizeMode;
		},
		defaultConfig: {
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			accessibility: true,
			speed: 500,
			dots: true,
			arrows: true,
			adaptiveHeight: true,
			customPaging: function (slider, i) {
				var pagingTitle = $(slider.$slides[i]).find('figcaption >*:first-child').text() || $(slider.$slides[i]).find('.text-box >*:first-child').text();
				if (pagingTitle.indexOf(P5_APPS.step.val.prevPagingTitle) > -1) {
					P5_APPS.step.val.pagingTitleIdx++;
					pagingTitle = (pagingTitle + "0" + (P5_APPS.step.val.pagingTitleIdx)).replace(" :", "");
				} else {
					//P5_APPS.step.val.prevPagingTitle = pagingTitle;
					P5_APPS.step.val.pagingTitleIdx = 0;
				}
				return '<button type="button" data-role="none" tabindex="0" data-omni-type="microsite_pcontentinter" data-omni="rolling:index_' + (i + 1) + '">slide' + (i + 1) + " : " + pagingTitle + '</button>';
			}
		},
		slickSlider: function () {
			var $slider = $(".f_tab-content [data-role='slide-step']");
			var winWidth = window.innerWidth != undefined ? window.innerWidth : $(window).innerWidth() + 17;
			var sizeClass = winWidth > 768 ? ".pc-visible" : ".mo-visible";
			var sizeFalse = winWidth > 768 ? ".mo-visible" : ".pc-visible";
			var swipeFlag = true;
			if ($('.apps').hasClass('rtl') || $('.apps_usp').hasClass('rtl')) {
				P5_APPS.step.defaultConfig.rtl = true;
			}
			if ($slider.length && !$('.apps.samsungpass').length) {
				$slider.slick(P5_APPS.step.defaultConfig);
			} else if ($slider.length && $('.apps.samsungpass').length) {
				if (winWidth > 768) {
					$slider.each(function () {
						if (!$(this).hasClass('mo-visible') && !$(this).hasClass('slick-initialized')) {
							$(this).slick(P5_APPS.step.defaultConfig);
						}
					});
				} else {
					$slider.each(function () {
						if (!$(this).hasClass('pc-visible') && !$(this).hasClass('slick-initialized')) {
							$(this).slick(P5_APPS.step.defaultConfig);
						}
					});
				}
			}
			$slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
				var $next = $(slick.$slides[currentSlide]),
					contentType = $next.find('[data-role="tab-content-video"]').length ? "video_" : "image_",
					taggingName = sliderName != undefined ? sliderName.indexOf('.') > -1 ? sliderName.split('.')[0].toLowerCase() : sliderName.toLowerCase() : "",
					sliderName = $next.closest('[data-role="slide-step"]').data('slider-name'),
					stepTit = $next.find('figcaption >*:first-child').html() || $next.find('.text-box >*:first-child').html(),
					stepTitData = $next.find('figcaption >*:first-child').data('key') || $next.find('.text-box >*:first-child').data('key'),
					stepDesc = $next.find('figcaption p').html() || $next.find('.text-box p').html(),
					stepDescData = $next.find('figcaption p').data('key') || $next.find('.text-box p').data('key');

				$next.closest('.f_tab-content').find('.step_desc >*:first-child').text(stepTit).end().find('.step_desc .desc').html(stepDesc);
				$next.closest('.f_tab-content').find('.step_desc >*:first-child').attr('data-key', stepTitData).end().find('.step_desc .desc').attr('data-key', stepDescData);

				if ($(slick.$slides[currentSlide]).closest('.f_tab-content').find('.step_desc a').length) {
					P5_APPS.step.val.focusChk = true;
				}
				$(document).on('keydown', '.f_tab-content .slick-dots button', function (e) {
					if (P5_APPS.step.val.focusChk == true) {
						if (!e.shiftKey && e.keyCode == 9) {
							e.preventDefault();
							$(this).closest('.f_tab-content').find('.step_desc a').focus();
							P5_APPS.step.val.focusChk = false;
						}
					}
				});
				if($(this).closest('.f_tab-content').find($slider).length > 1) {
					P5_APPS.step.val.currentIdx = currentSlide;
				}
			});

			$slider.on("swipe", function (event, slick, direction) {
				var currentSlide = slick.currentSlide,
					$next = $(slick.$slides[currentSlide]),
					currentSCroll = $(window).scrollTop();

				if (window.innerWidth < 769) {
					$next.closest('.step_list').find('.slick-dots li').find('button').blur();
					$next.closest('.step_list').find('.slick-dots li').eq(currentSlide).find('button').focus();
					$slider.find(".slick-list a").attr("tabindex", "-1");
					$(window).scrollTop(currentSCroll);
				}
			});
		},
		destory: function (array) { },
		setting: function () {
			P5_APPS.step.slickSlider();
		},
		contentSynced:function(sizeMode){
			var $tab = $('.f_tab');
			var _typeCheck = $tab.find(">li > .f_tab-content").is(".howto_type2") ? true : false;

			if(typeof APPS_SERVICE_NAME != "undefined")  {
				if(!_typeCheck && APPS_SERVICE_NAME == "smart call"){
					$('.f_tab-content').filter(function(){return $(this).find("[data-role='slide-step']").length > 1}).each(function(){
						var $this = $(this);
						var $currentSlider = $this.find("[data-role='slide-step']");
						var $pcSlider = $currentSlider.filter('.pc-visible');
						var $moSlider = $currentSlider.filter('.mo-visible');
						var currentIndex = 0;
						var pcSlideLength = $pcSlider.find('.slick-slide').length;
						var moSlideLength = $moSlider.find('.slick-slide').length;

						if($this.find($currentSlider).length > 1 && $currentSlider.is('.slick-initialized') && pcSlideLength != moSlideLength) {
							currentIndex = P5_APPS.step.val.currentIdx;

							if( sizeMode == 1 ) {
								currentIndex == 0 ? 0 : currentIndex++;
								$moSlider.slick('slickGoTo', currentIndex);
							} else {
								currentIndex--;
								$pcSlider.slick('slickGoTo', currentIndex);
							}
						}
					});
				}
			}
		},
		resize: function () {
			var sizeMode = P5_APPS.sizeMode > 1 ? 2 : 1;
			P5_APPS.step.val.currentSizeMode = sizeMode;
			var $tab = $('.f_tab'),
				$slider = $("[data-role='slide-step']"),
				sizeClass = P5_APPS.sizeMode > 1 ? ".pc-visible" : ".mo-visible",
				_typeCheck = $tab.find(">li > .f_tab-content").is(".howto_type2") ? true : false;
			

			if ($('.apps').hasClass('rtl') || $('.apps_usp').hasClass('rtl')) {
				P5_APPS.step.defaultConfig.rtl = true;
			}

			if (P5_APPS.step.val.prevSizeMode != P5_APPS.step.val.currentSizeMode) {
				P5_APPS.step.val.prevSizeMode = sizeMode;
				if (P5_APPS.sizeMode > 1) {
					$tab.each(function () {
						var _this = $(this);
						if (_typeCheck == false) {
							if (!_this.find('.f_tab-header.on').length) {
								_this.find('li:first-child .f_tab-header').addClass('on');
								if (_this.find('.slick-initialized').length) {
									_this.find($slider).slick('unslick');
								}
								_this.find('li:first-child .f_tab-content').show(function () {
									if ($('.apps').hasClass('rtl') || $('.apps_usp').hasClass('rtl')) {
										P5_APPS.step.defaultConfig.rtl = true;
									}
									_this.find('li:first-child .step_list').filter(sizeClass).slick(P5_APPS.step.defaultConfig);
								});
							}
						}
					});
					if ($('.apps.samsungpass').length) {
						$('.f_tab-content:visible').each(function () {
							var _this = $(this),
								$slider = _this.find('[data-role="slide-step"]'),
								stepTit = $slider.filter(sizeClass).find('.slick-slide.slick-current figcaption h4').html(),
								stepDesc = $slider.filter(sizeClass).find('.slick-slide.slick-current figcaption p').html();

							if ($('.mo-visible.slick-initialized').length) {
								$('.mo-visible.slick-initialized').slick("unslick");
							}
							if (!_this.find('.pc-visible').hasClass('slick-initialized')) {
								_this.find('.pc-visible').slick(P5_APPS.step.defaultConfig);
							}
							_this.find('.step_desc h4').text(stepTit).end().find('.step_desc .desc').html(stepDesc);
						});
					}
					// tagging omni value change
					P5_APPS.step.val.level1TapBtn.each(function () {
						var _this = $(this);
						var omni = _this.attr("data-omni");
						var omniType = _this.attr("data-omni-type");
						if (omni || omniType) {
							_this.attr("data-omni", omni.replace("_show less", "").replace("_show more", ""));
							_this.attr("data-omni-type", "microsite_contentinter");
						}
					});
				} else {
					if ($('.apps.samsungpass').length) {
						$('.f_tab-content:visible').each(function () {
							var _this = $(this),
								$slider = _this.find('[data-role="slide-step"]'),
								stepTit = $slider.filter(sizeClass).find('.slick-slide.slick-current figcaption h4').html(),
								stepDesc = $slider.filter(sizeClass).find('.slick-slide.slick-current figcaption p').html();
							if ($('.pc-visible.slick-initialized').length) {
								$('.pc-visible.slick-initialized').slick("unslick");
							}
							if (!_this.find('.mo-visible').hasClass('slick-initialized')) {
								_this.find('.mo-visible').slick(P5_APPS.step.defaultConfig);
							}
							_this.find('.step_desc h4').text(stepTit).end().find('.step_desc .desc').html(stepDesc);
						});
					}
					P5_APPS.tabDep2Key();
					// tagging omni value change
					P5_APPS.step.val.level1TapBtn.each(function (i) {
						var _this = $(this);
						var omni = _this.attr("data-omni");
						var omniType = _this.attr("data-omni-type");
						if (P5_APPS.step.val.onlyFirstCheck && i == 0) {
							_this.addClass("on");
						}
						var addText = _this.hasClass("on") ? "_show less" : "_show more";
						if (omni || omniType) {
							_this.attr("data-omni", omni + addText);
							_this.attr("data-omni-type", "microsite_viewmore");
						}
					});
				}

				P5_APPS.step.contentSynced(P5_APPS.sizeMode);

				setTimeout(function () {
					var tabWrap = $("[data-role='tab']"),
						tabWrapOnLength = tabWrap.find(">li >h3 >.f_tab-header.on").length;

					$("[data-role='tab'] > li").each(function (idx, value) {
						var _tab = $(this),
							_tabBtn = _tab.find(".f_tab-header[data-role='tab-btn']"),
							_tabSubBtn = _tab.find(".a_tab-btn"),
							_tabAltText = _tabBtn.is(".on") === true ? _tabBtn.data("alt-text").split(",")[1].trim() : _tabBtn.data("alt-text").split(",")[0].trim();

						if (_tabBtn.find(">span").is(".blind") === true) {
							if (window.innerWidth > 768) {
								_tabBtn.find(">.blind").attr("aria-hidden", true);

								if (tabWrapOnLength === 0) {
									var thisFirst = $("[data-role='tab'] > li:first-child");
									thisFirst.find(">h3 .f_tab-header[data-role='tab-btn']").trigger("click");
								}
							} else {
								_tabBtn.find(">.blind").removeAttr("aria-hidden");
								_tabBtn.find(">.blind").text(_tabAltText);

								if (_tabSubBtn.is(".active") === false) {
									_tabSubBtn.next().attr("aria-hidden", true);
								} else {
									_tabSubBtn.next().removeAttr("aria-hidden")
								}
							}
						}
					});
				}, 0);

			}

			if ($(".apps.samsungpass").length > 0 && $("html").is(".android") === true) {
				$.fn.replaceTag = function (newTag) {
					var originalElement = this[0]
						, originalTag = originalElement.tagName
						, startRX = new RegExp('^<' + originalTag, 'i')
						, endRX = new RegExp(originalTag + '>$', 'i')
						, startSubst = '<' + newTag
						, endSubst = newTag + '>'
						, newHTML = originalElement.outerHTML
							.replace(startRX, startSubst)
							.replace(endRX, endSubst);
					this.replaceWith(newHTML);
				};

				var passWrap = $(".apps.samsungpass").find("#section-howto.m_content-step"),
					passFigure = passWrap.find("figure"),
					passFigureCaption = passFigure.find("figcaption");

				passFigureCaption.each(function () {
					$(this).replaceTag("div");
				});

				passFigureCaption = passFigure.find(">div:first-child");
				passFigureCaption.addClass("text-box");
			}

			P5_APPS.step.val.onlyFirstCheck = false;
		}
	},
	mobile_slider: {
		slider: $('[data-role="mobile-slider"]'),
		slideShow: 1,
		slickSlider: function (target, slideShow, sliderName, sliderTitle) {
			var defaultConfig = { slidesToShow: slideShow, slidesToScroll: 1, infinite: false, accessibility: true, speed: 500, touchMove: true, swipe: true, arrows: false, dots: true, customPaging: function (slider, i) { var pagingTitle = $(slider.$slides[i]).find('[data-role="slide-title"]').length ? 'slide' + (i + 1) + ' : ' + $(slider.$slides[i]).find('[data-role="slide-title"]').text() : 'slide' + (i + 1); return '<button type="button" data-role="none" tabindex="0" data-omni-type="microsite_pcontentinter" data-omni="rolling:index_' + (i + 1) + '">' + pagingTitle + '</button>'; } }, activeIdx = 0, winWidth = window.innerWidth != undefined ? window.innerWidth : $(window).innerWidth() + 17; if ($('.apps').hasClass('rtl') || $('.apps_usp').hasClass('rtl')) { defaultConfig.rtl = true; } target.slick(defaultConfig); target.on('afterChange', function (event, slick, currentSlide, nextSlide) { var $next = $(slick.$slides[currentSlide]), $target = $next.closest('.m_feature').find('[data-role="mobile-slider-target"]').children(); $next.addClass('active').siblings().removeClass('active'); $target.eq(currentSlide).addClass('active').siblings().removeClass('active'); }); target.on("swipe", function (event, slick, direction) { var currentSlide = slick.currentSlide, $next = $(slick.$slides[currentSlide]), currentSCroll = $(window).scrollTop(); if (window.innerWidth < 769) { $next.closest('[data-role="mobile-slider"]').find('.slick-dots li').find('button').blur(); $next.closest('[data-role="mobile-slider"]').find('.slick-dots li').eq(currentSlide).find('button').focus(); target.find(".slick-list a").attr("tabindex", "-1"); $(window).scrollTop(currentSCroll); } });
		},
		event: function () {
			var slider = $('[data-role="mobile-slider"]'),
				deviceCheck = $('html').hasClass('mobile') || $('html').hasClass('touch') ? true : false,
				sliderTitle = [];
			if (P5_APPS.sizeMode == 1) {
				slider.each(function (i) {
					var slideCount = $(this).data('slide-show') == undefined ? 1 : parseInt($(this).data('slide-show')),
						sliderName = $(this).data('slider-name'),
						$target = $(this).closest('.m_feature').find('[data-role="mobile-slider-target"]'),
						sliderLen;
					if ($(this).find("div").is(".list")) {
						sliderLen = $(this).length;
					} else if ($(this).find("div").is(".item_box")) {
						sliderLen = $(this).length;
					} else if ($(this).find("div").is(".txt_box")) {
						sliderLen = $(this).length;
					}
					for (var t = 0; t < sliderLen; t++) {
						sliderTitle.push($(this).eq(t).find("[data-role='slide-title']").text());
					}
					for (var t = 0; t < sliderLen; t++) {
						if ($(this).find("div").is(".list")) {
							sliderTitle.push($(this).find(".list").eq(t).find("[data-role='slide-title']").text());
						} else if ($(this).find("div").is(".item_box") || $(this).find("div").is(".txt_box")) {
							sliderTitle.push($(this).find(".item_box").eq(t).find("[data-role='slide-title']").text());
						}
					}
					if (!$(this).hasClass('slick-initialized')) {
						P5_APPS.mobile_slider.slickSlider($(this), slideCount, sliderName, sliderTitle);
						sliderTitle = [];
						if ($target.length) {
							var activeIdx = $(this).find('.active').index();
							$(this)[0].slick.slickGoTo(activeIdx);
							$(this).find("a").attr("tabindex", "-1");
						}
					}
				});
			} else {
				slider.each(function () {
					var slideCount = $(this).data('slide-show') == undefined ? 1 : parseInt($(this).data('slide-show')),
						sliderName = $(this).data('slider-name'),
						deviceFlag = $(this).data('device-flag') != undefined && $(this).data('device-flag') == true ? true : false,
						$target = $(this).closest('.m_feature').find('[data-role="mobile-slider-target"]');
					if ($(this).hasClass('slick-initialized')) {
						if (deviceFlag == false) {
							$(this).slick("unslick");
							$(this).find('div, a').removeAttr('tabindex');
						} else if (deviceFlag == true && deviceCheck != true) {
							$(this).slick("unslick");
							$(this).find('div, a').removeAttr('tabindex');
						}
					} else {
						if (deviceFlag && deviceCheck) {
							P5_APPS.mobile_slider.slickSlider($(this), slideCount, sliderName, sliderTitle);
							activeIdx = $target.find('.slick-slide.active').index();
							$(this)[0].slick.slickGoTo(activeIdx);
						}
					}
				});
			}
		},
		resize: function () {
			this.event();
		},
		init: function () {
			this.event(); var slider = $('[data-role="mobile-slider"]'); $.each(slider, function () { var _this = $(this); if (_this.find("h3").length > 0 && _this.find("figure img").length > 0) { var _thisSlide = window.innerWidth > 768 ? _this.find(">*") : _this.find(".slick-track >*"); _thisSlide.each(function () { var _tit = $(this).find("h3").text() != "" ? $(this).find("h3").text() + " :: " : "", _alt = $(this).find("figure img").attr("alt"); $(this).find("h3").attr("aria-hidden", true); $(this).find("figure img").attr("alt", _tit + _alt); }); } });
		}
	},
	verticalSlider: { //수직 탭 slider - find-my-mobile 개편 후 삭제
		motion: function () {
			var slider = $('[data-role="fade-slide"]'), sliderDots = slider.find('.item_wrap .item_box a'); sliderDots.on('click', function (e) { var _this = $(this), _parent = $(this).closest('.item_box'), currentIdx = _parent.index(), slideImg = $(this).closest('.f_container').find('.overlay_inner .slide_img'), imgHeight = slideImg.find('img:first-child').outerHeight(true); _parent.addClass('active').siblings().removeClass('active'); slideImg.eq(currentIdx).stop().fadeIn(function () { $(this).addClass('active'); $(this).removeAttr('style'); }).siblings().stop().fadeOut(function () { $(this).removeClass('active'); $(this).removeAttr('style'); }); e.preventDefault(); });
		},
		init: function () {
			this.motion();
		}
	},
	tabToSlide: { //탭 slider -> members 개편 후 삭제
		checked: {
			isPC: [],
			prevSizeMode: null,
			currentSizeMode: null
		},
		slickSlider: function (target, sliderName, sliderTitle) {
			var defaultConfig = {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				accessibility: true,
				speed: 500,
				touchMove: true,
				swipe: true,
				arrows: false,
				dots: true,
				customPaging: function (slider, i) {
					var pagingTitle = $(slider.$slides[i]).find('[data-role="slide-title"]').text().toLowerCase(),
						pageText = pagingTitle.indexOf('.') > -1 ? pagingTitle.split('.')[0] : pagingTitle;
					return '<button type="button" data-role="none" tabindex="0" data-omni-type="microsite_pcontentinter" data-omni="rolling:index_' + (i + 1) + '">' + sliderTitle[i] + '</button>';
				}
			},
				activeIdx = 0,
				swipeFlag = true;
			if ($('.apps').hasClass('rtl') || $('.apps_usp').hasClass('rtl')) {
				defaultConfig.rtl = true;
			}
			target.slick(defaultConfig);
			target.on('afterChange', function (event, slick, currentSlide, nextSlide) {
				var $next = $(slick.$slides[currentSlide]),
					$wrap = $next.closest('[data-role="tab-to-slide"]'),
					$wrapVisible = $wrap.filter(':visible'),
					tabMedia = $wrap.find('[data-role="tab-media"]').children().eq(currentSlide),
					tabTit = $wrap.find('[data-role="tab-title"]').children().eq(currentSlide),
					tabTxt = $wrap.find('[data-role="tab-text"]').children().eq(currentSlide),
					contentType = $next.find('[data-role="tab-content-video"]').length ? "video_" : "image_",
					sliderName = $next.closest('[data-role="tab-slider"]').data('slider-name'),
					taggingName = sliderName != undefined ? sliderName.indexOf('.') > -1 ? sliderName.split('.')[0].toLowerCase() : sliderName.toLowerCase() : "",
					currentSCroll = $(window).scrollTop();
				currentSCroll = $(window).scrollTop();
				$next.addClass('active').siblings().removeClass('active');
				tabMedia.addClass('active').siblings().removeClass('active');
				tabTit.addClass('active').siblings().removeClass('active');
				tabTxt.addClass('active').siblings().removeClass('active');
				if (swipeFlag == true) {
					// sendClickCode('content_click','apps:' + APPS_SERVICE_NAME + ':' + contentType + taggingName + (currentSlide + 1) + '_swipe');
				}
				$(document).on('click', '[data-role="tab-to-slide"] .slick-dots button', function () {
					swipeFlag = false;
					setTimeout(function () {
						swipeFlag = true;
					}, 600);
				});
				if (P5_APPS.sizeMode == 1) {
					$next.closest('[data-role="tab-slider"]').find('.slick-dots li').find('button').blur();
					/*
					if($next.find('video').length){
						$next.find('a, button').filter(':first').focus();
					} else {
						$next.closest('[data-role="tab-slider"]').find('.slick-dots li').eq(currentSlide).find('button').focus();
					}
					*/
					$(window).scrollTop(currentSCroll);
					target.find(".slick-list a").attr("tabindex", "-1");
				}
			});
		},
		slideSetting: function () {
			var slider = $('[data-role="tab-to-slide"]').find('[data-role="tab-slider"]'),
				sliderTitle = [];
			if (P5_APPS.sizeMode == 1) {
				slider.each(function (i, event) {
					var sliderName = $(this).data('slider-name'),
						slideCon = $(this).find(".tab_slide_con").length > 0 ? $(this).find(".tab_slide_con") : $(this).find(".item_box").length ? $(this).find(".item_box") : $(this).find(".txt_box"),
						sliderLen = slideCon.length,
						activeIdx;
					for (var t = 0; t < sliderLen; t++) {
						sliderTitle.push(slideCon.eq(t).find("[data-role='slide-title']").text());
					}
					if (!$(this).hasClass('slick-initialized')) {
						P5_APPS.tabToSlide.slickSlider($(this), sliderName, sliderTitle);
						sliderTitle = [];
						if ($(this).find('.active').length) {
							activeIdx = $(this).find('.slick-slide.active').index();
							$(this)[0].slick.slickGoTo(activeIdx);
							$(this).find("a").attr("tabindex", "-1");
						}
					}
				});
			} else if (P5_APPS.sizeMode > 1) {
				slider.each(function () {
					if ($(this).hasClass('slick-initialized')) {
						$(this).slick("unslick");
						$(this).find('div, a').removeAttr('tabindex');
						$(this).find('div, a').removeAttr('style');
					}
				});
			}
		},
		tab: function () {
			var target = $('[data-role="tab-to-slide"]'),
				tabBtn = $('[data-role="tab-slider"]').find('a');
			tabBtn.on('click', function (e) {
				var _this = $(this),
					_parent = _this.parent(),
					_wrap = _this.closest('[data-role="tab-to-slide"]'),
					currentIdx = _parent.index(),
					tabMedia = _wrap.find('[data-role="tab-media"]').children(),
					tabVideo = $('[data-role="tab-content-video"]'),
					tabTit = _wrap.find('[data-role="tab-title"]').children(),
					tabTxt = _wrap.find('[data-role="tab-text"]').children();
				_parent.addClass('active').siblings().removeClass('active play-video-tab');
				tabMedia.eq(currentIdx).addClass('active').siblings().removeClass('active');
				tabTit.eq(currentIdx).addClass('active').siblings().removeClass('active');
				tabTxt.eq(currentIdx).addClass('active').siblings().removeClass('active');
				if (tabVideo.length && tabVideo.is(tabMedia) && tabMedia.find("video").length) {
					var _id = tabMedia.eq(currentIdx).find('video').attr('id'),
						currentVideo = $('#' + _id)[0];
					tabMedia.filter(tabVideo).each(function () {
						var _this = $(this),
							_video = $('#' + _this.find('video').attr('id'))[0];
						
						if (!P5_APPS.isPoorBrowser) {
							_video.pause();
							_video.currentTime = 0;
						}
						if (_this.find('.btn-media-play').length && $('html').hasClass('mobile')) {
							_this.find('.btn-media-play').show();
						}
					});
					if (tabMedia.find($('#' + _id)).length && _id != undefined && !$('html').hasClass('mobile')) {
						setTimeout(function () {
							if (currentVideo.paused) {
								currentVideo.play();
							}
						}, 150);
					}
				}
				e.preventDefault();
			});
		},
		listSetting: function () {
			var target = $('[data-role="tab-to-slide"]'),
				tabList = target.find('[data-role="tab-slider"]').children();
			if (P5_APPS.sizeMode == 1) {
				tabList.each(function () {
					var _wrap = $(this).closest('[data-role="tab-to-slide"]'),
						currentIdx = $(this).index(),
						tabMedia = _wrap.find('[data-role="tab-media"]').children(),
						tabTit = _wrap.find('[data-role="tab-title"]').children(),
						tabTxt = _wrap.find('[data-role="tab-text"]').children();
					if (!$(this).children().not('a').length) {
						$(this).prepend(tabMedia.eq(currentIdx).clone(true).addClass('clone'));
						$(this).append(tabTit.eq(currentIdx).clone(true).addClass('clone'));
						$(this).append(tabTxt.eq(currentIdx).clone(true).addClass('clone'));
					}
				});
			}
		},
		tabImgSlider: function () {
			if (P5_APPS.sizeMode > 1) {
				$("[data-role='tab-to-slide']").each(function (i) {
					var _this = $(this);
					var target = _this.filter("[data-division='type2']").find("[data-role='tab-media']");
					if (target.length) {
						if (!target.next().hasClass("clone")) {
							var cloneSlider = target.clone().attr({
								"class": "tab_img clone",
								"data-role": "img-slider"
							});
							var tabTit = _this.find(".tab_list").children();
							var tabTxt = _this.find(".tab_text").children();
							var defaultConfig = {
								fade: true,
								slidesToShow: 1,
								slidesToScroll: 1,
								infinite: false,
								accessibility: true,
								speed: 300,
								touchMove: true,
								swipe: true,
								arrows: true,
								dots: false
							}
							if ($('.apps').hasClass('rtl') || $('.apps_usp').hasClass('rtl')) {
								defaultConfig.rtl = true;
							}
							cloneSlider.find(".media_list").each(function () {
								$(this).attr({
									"class": ""
								});
							});
							target.after(cloneSlider)
							target.hide();
							if (!cloneSlider.hasClass('slick-initialized')) {
								cloneSlider.slick(defaultConfig).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
									tabTit.eq(nextSlide).addClass('active').siblings().removeClass('active');
									tabTxt.eq(nextSlide).addClass('active').siblings().removeClass('active');
								});
							}
							$(this).find(".tab_list a").on({
								"click": function (e) {
									var idx = $(this).parent().index();
									cloneSlider[0].slick.slickGoTo(idx);
									e.preventDefault();
								}
							});
						}
						if (!P5_APPS.tabToSlide.checked.isPC[i]) {
							var currentIdx = _this.find("[data-role='tab-media'] .active").index();
							_this.find(".tab_img")[0].slick.slickGoTo(currentIdx);
							P5_APPS.tabToSlide.checked.isPC[i] = true;
						}
					}
				});
			} else {
				P5_APPS.tabToSlide.checked.isPC = [];
			}
		},
		init: function () {
			this.listSetting();
			this.slideSetting();
			this.tab();
			this.tabImgSlider();
		},
		posterCheck: function () {
			var tabVideo = $('[data-role="tab-content-video"] > figure');
			if ($('html').hasClass('mobile')) {
				tabVideo.each(function () {
					var _this = $(this);
					if (_this.find('.video_poster').not(':visible')) {
						_this.find('.video_poster').show();
						_this.find('.video_poster').removeAttr('style');
					}
				});
			}
		},
		resize: function () {
			var sizeMode = P5_APPS.sizeMode > 1 ? 2 : 1;
			P5_APPS.tabToSlide.checked.currentSizeMode = sizeMode;

			if (P5_APPS.tabToSlide.checked.prevSizeMode != P5_APPS.tabToSlide.checked.currentSizeMode) {
				P5_APPS.tabToSlide.checked.prevSizeMode = sizeMode;
				if (P5_APPS.sizeMode == 1) {
					this.listSetting();
				} else if (P5_APPS.sizeMode > 1) {
					if ($('.mobile-check').length) {
						$('[data-role="tab-slider"]').find('.clone').remove();
					} else {
						$('[data-role="tab-slider"]').find('.clone').remove();
					}
				}
				this.slideSetting();
				this.tab();
				this.tabImgSlider();
			}
		}
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

		if (samsungUserAgent > -1 && !$(".apps_usp").is(".health")) {
			$(document.documentElement).addClass('samsung-device');
		}
		if (iphoneAgent > -1 && mobileUserAgent > -1) {
			$(document.documentElement).addClass('apple-browser-all');
		}
		if ((ipadAgent > -1 || macPcUserAgent > -1) && chromeUserAgentPc === -1 && ieCheck === -1 && operaCheck === -1 && firefoxCheck === -1) {
			$(document.documentElement).addClass('apple-browser-all');
		}

		if ($(".apps_usp").is(".themes")) {
			if (samsungUserAgent > -1 && mobileUserAgent > -1) {
				$(document.documentElement).addClass('samsung-mobile-device');
			} else if(samsungUserAgent > -1 && mobileUserAgent === -1) {
				$(document.documentElement).addClass('samsung-tablet-device');
			}
		}

		var mobileArr = new Array("iphone", "ipod", "blackberry", "android", "samsung", "ios", "ipad");
		for (var txt in mobileArr) {
			if (navigator.userAgent.toLowerCase().indexOf(mobileArr[txt]) > -1 && !$('html').hasClass('mobile')) {
				$('html').addClass('mobile');
			} else {
				$('html').addClass('desktop');
			}
		}
	},
	slideAnchor: function () { //slider의 키보드 이동
		var $anchor = $('.slick-slide').find('a, button, [tabindex]').filter(':last'); $anchor.on('keydown', function (e) { if (e.keyCode == '9' && !e.shiftKey) { $(this).closest('.slick-slider').find('.slick-dots li:first-child button').focus(); e.preventDefault(); } });
	},
	tabVideoKeyControl: { //탭 slider 키보드 이동
		event: function () {
			var $tabSlider = $('[data-role="tab-slider"]'),
				$tabAnchor = $tabSlider.find('a');
			$tabAnchor.on({
				focusin: function (e) {
					var $this = $(this);
					var $parent = $(this).parent();
					$parent.addClass('current-focus');
				},
				focusout: function (e) {
					var $this = $(this);
					var $parent = $(this).parent();
					$parent.removeClass('current-focus');
				}
			});
			$tabAnchor.on('keydown', function (e) {
				var currentIdx = $(this).parent().index();
				var $wrap = $(this).closest('[data-role="tab-to-slide"]');
				var $parent = $(this).parents("[data-role='tab-slider']");
				var $slide = $parent.find(">div");
				var $tabMedia = $wrap.find('[data-role="tab-media"]');
				var $tabVideo = $wrap.find('[data-role="tab-content-video"]');
				if ($wrap.find("div").is("[data-role='tab-content-video']") && $wrap.find(".overlay_wrap").length) {
					if (e.keyCode == '9' && !e.shiftKey) { //tab event
						if (currentIdx == $slide.length - 1) { //last tab
							e.preventDefault();
							if (currentIdx == $parent.find(">.active").index() && !$(this).parent().hasClass('play-video-tab')) {
								$tabVideo.eq(currentIdx).find('button').focus();
								e.preventDefault();
							} else {
								$(this).closest('[class^="m_content"]').nextAll().find('a, button, [tabindex]').filter(':first').focus();
								e.preventDefault();
							}
						} else if (currentIdx == $parent.find(">.active").index() && currentIdx != $slide.length - 1) {
							if (!$(this).parent().hasClass('play-video-tab')) {
								$tabVideo.eq(currentIdx).find('button').focus();
								e.preventDefault();
							} else {
								$(this).parent().next().find('a').focus();
								e.preventDefault();
							}
						}
					} else if (e.keyCode == '9' && e.shiftKey) { //back tab event
						if (currentIdx == 0) { } else if (currentIdx == $parent.find(">.active").index() + 1 && currentIdx != 0) {
							if ($(this).parent().prev().is('.play-video-tab')) {
								$(this).parent().prev().find('>a').focus();
								e.preventDefault();
							} else {
								e.preventDefault();
								$tabVideo.filter('.active').find('button').focus();
							}
						} else {
							e.preventDefault();
							$(this).parent().prev().find(">a").focus();
						}
					}
				}
			});
			$(document).on("keydown", '.btn-media-play', function (e) {
				var $wrap = $(this).closest('[data-role="tab-to-slide"]');
				var idx = $(this).closest('[data-role="tab-content-video"]').index();
				var $currentTab = $(this).parents('.overlay_wrap').prev().find(".item_box");
				if ($wrap.find("div").is("[data-role='tab-content-video']") && $wrap.find('.overlay_wrap').length) {
					if (e.keyCode == '9' && !e.shiftKey) {
						if ($currentTab.eq(idx + 1).find('a').length && $currentTab.eq(idx + 1).find('a').is(':visible')) {
							$currentTab.eq(idx + 1).find('a').focus();
							e.preventDefault();
						}
					} else if (e.keyCode == '9' && e.shiftKey) {
						if ($currentTab.eq(idx).find('a').length && $currentTab.eq(idx).find('a').is(':visible')) {
							$currentTab.eq(idx).find('a').focus();
							e.preventDefault();
						}
					}
				}
			});
			$(document).on("keydown", ".focus_target", function (e) {
				var $wrap = $(this).closest('[class^="m_content');
				var $prevTab = $wrap.prevAll().filter("[data-role='tab-to-slide']");
				if (e.keyCode == '9' && e.shiftKey) {
					if ($prevTab.find("[data-role='tab-slider'] > div:last").is(".active") && $prevTab.find("[data-role='tab-media'] > .active button").css('display') != 'none') {
						$prevTab.find("[data-role='tab-media'] > .active button").focus();
					} else {
						$prevTab.find("[data-role='tab-slider'] > div:last a").focus();
					}
					e.preventDefault();
				}
			});
		},
		init: function () {
			if (P5_APPS.sizeMode != 1 && $('html').hasClass('mobile')) {
				P5_APPS.tabVideoKeyControl.event();
				$("[data-role='tab-to-slide']").each(function () {
					if ($(this).find("div").is("[data-role='tab-content-video']") && $(this).find(".overlay_wrap").length) {
						$(this).nextAll().find('a, button, [tabindex]').filter(':first').addClass("focus_target");
					}
				});
			}
		},
		resize: function () {
			if (P5_APPS.sizeMode != 1 && $('html').hasClass('mobile')) {
				P5_APPS.tabVideoKeyControl.event();
				$("[data-role='tab-to-slide']").each(function () {
					if ($(this).find("div").is("[data-role='tab-content-video']")) {
						$(this).nextAll().find('a, button, [tabindex]').filter(':first').addClass("focus_target");
					}
				});
			} else {
				$('.apps-content .focus_target').removeClass('focus_target');
			}
		}
	},
	youtubeInsert: function () { //유튜브 영상 재생 api 삽입
		if (!YT) { var YT = { loading: 0, loaded: 0 }; } if (!YTConfig) { var YTConfig = { 'host': 'http://www.youtube.com' }; }
		if (!YT.loading) {
			YT.loading = 1;
			(function () {
				var l = []; YT.ready = function (f) { if (YT.loaded) { f(); } else { l.push(f); } }; var onYTReady = function () { YT.loaded = 1; for (var i = 0; i < l.length; i++) { try { l[i](); } catch (e) { } } }; YT.setConfig = function (c) { for (var k in c) { if (c.hasOwnProperty(k)) { YTConfig[k] = c[k]; } } };
				var a = document.createElement('script');
				a.type = 'text/javascript';
				a.id = 'www-widgetapi-script';
				a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfl4fk51J/www-widgetapi.js';
				a.async = true;
				var b = document.getElementsByTagName('script')[0];
				b.parentNode.insertBefore(a, b);
			})();
		}
	},
	youtubeFunc: { //유튜브 영상 재생
		elem: {
			target : $('[data-role="apps-youtube-visual"]')
		},
		setting: function () {
			// kv utube video
			var APPS_utubeArea = P5_APPS.youtubeFunc.elem.target;
			var APPS_utubePlayer;
			var APPS_utubeTitle = $("#utubePlayer").data("title") != undefined ? $("#utubePlayer").data("title") : "";
			var APPS_utubeAlt = $("#utubePlayer").data("alt-text") != undefined ? $("#utubePlayer").data("alt-text") : false;
			var APPS_utubeData = APPS_utubeArea.find(".video-area").data("key-exc");
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
						$("#yt-player").attr("title", APPS_utubeTitle);
						$("#yt-player").attr("data-key", APPS_utubeData["data-title"]+"-title");
						$("#yt-player").attr("tabindex", 0);
						$("#yt-player").focus();
						if(APPS_utubeAlt){
							var a = APPS_utubeAlt;
							$("#utubePlayer").append("<span class='blind'></span>");
							$("#utubePlayer").find(".blind").html(a);
							$("#utubePlayer").find(".blind").attr("data-key", APPS_utubeData["data-alt-text"]);
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
					var target = $('[data-role="apps-youtube-visual"]').find("figure");
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
			var APPS_utubeArea = P5_APPS.youtubeFunc.elem.target;
			if (APPS_utubeArea.length) {
				var APPS_utubeTitle = $("#utubePlayer").data("title") != undefined ? $("#utubePlayer").data("title") : "";
				var figure = APPS_utubeArea.find("figure");
				APPS_utubeArea.find(".btn-control-play").on("click", function (e) {
					e.preventDefault();
					P5_APPS.youtubeFunc.setting();

				});
				if (location.href.toLowerCase().indexOf("/cn/") === -1) {
					if ($.browser.ie && $.browser.version < 9) {
						figure.find("img").attr("alt", APPS_utubeTitle);
					}
				}
            }
        }
	},
	taggingServiceName: ["game-launcher"],
	footerAjax: function () {
		try {
			if (typeof commonObj !== "undefined") {
				
				var _parent = $("div.apps-content"),
					_pdpSection = $('<section class="m_content-pdp black create-pdp" id="more-services"><article class="m_feature"><div class="f_container" ><div class="inner"></div></div></article></section>');

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

				if (!$('.m_content-pdp').length) {
					_pdpSection.insertAfter(_parent.find('section').last());
					_pdpSection.find('img').removeAttr('width');
					_pdpSection.find('img').removeAttr('height');
				}
				
				P5_APPS.imgSrcReplaceQa($(".m_content-pdp"));
				P5_APPS.pdpImgReplace();

			}
		} catch (err) {
			console.info(err.message);
		}
	},
	pdpImgReplace: function () { //pdp 동적 구현시 해상도에 맞게 이미지 교체 
		var $pdp = $('.create-pdp'),
			$figure = $pdp.find('figure img');
		if (!$('html').hasClass('s1')) {
			$figure.each(function () {
				$(this).attr('src', $(this).data('src-pc'));
			});
		} else {
			$figure.each(function () {
				$(this).attr('src', $(this).data('src-mobile'));
			});
		}
	},
	deeplink: {
		samsungMembers: {
			redirectUrl : "https://play.google.com/store/apps/details?id=com.samsung.android.voc",
			init : function(){
				if ($('.samsung_members').length) {
					var targetLink = $("[id*='deeplink']"),
						redirectUrl = this.redirectUrl,
						appsPopup = $('.deeplink-popup'),
						popupAnchorF = appsPopup.find('a:first'),
						popupAnchorL = appsPopup.find('a:last'),
						btnClose = appsPopup.find('.btn_close'),
						winHeight = $(window).height(),
						popupHeight = appsPopup.outerHeight(),
						$this = null;

					var popupClose = function($this){
						appsPopup.removeClass('active');
						$('html').css("overflow", "visible");
						$this.focus();
					};

					targetLink.on('click', function (e) {

						$this = $(this);
						var targetHref = $this.attr("href");
						var odcPop = window.open(targetHref);
						var check_count = 0;
						var popupCheck = setInterval(function () {
							if (odcPop.closed) {
								clearInterval(popupCheck);
							} else {
								if (check_count == 3) {
									clearInterval(popupCheck);

									var notReflectCountry = ["ar", "ca", "ca_fr", "hu"],
										notReflectChec = false;

									$.each(notReflectCountry, function (i, v) {
										if (v === APPS_SITE_CODE.toLowerCase()) {
											notReflectChec = true;
											return false;
										}
									});

									check_count = 0;
									if ($('html').is('.samsung-device') && notReflectChec === false) { // hu, ar 7/2 제외 국가
										odcPop.close();
										appsPopup.addClass('active').focus();
										appsPopup.css("top", (winHeight / 2) - (popupHeight / 2));
										P5_APPS.layerAria(true);
										$(".apps-content").attr("aria-hidden", true);
										$("#apps_floating").attr("aria-hidden", true);
										$('html').css("overflow", "hidden");
									} else {
										odcPop.location.href = redirectUrl;
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
						$(".apps-content").attr("aria-hidden", false);
						$("#apps_floating").attr("aria-hidden", false);
						popupClose($this);
					});

					$(document).on('keydown', function (e) {
						if (appsPopup.is('.active')){
							if (e.keyCode == 27) {
								e.preventDefault();
								popupClose($this);
							}
						}
						if (btnClose.is(':focus')){
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
							if( e.shiftKey ){
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
				if ($('.galaxy_store').length || $('.galaxy_apps').length) {
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
							var element = $("#odccheckframe");
							if (element.length < 1) {
								element = $("<iframe id='odccheckframe' name='odccheckframe' width='15' height='15' style='display:none;'></iframe>");
								$("body").append(element);
							}
							document.odccheckframe.location.href = deepLink;
							setTimeout(function () {
								try {
									var s = document.odccheckframe.document.body.innerHTML;
								} catch (e) {
									$("#odccheckframe").remove();
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
					$('.galaxy_store .m_content-support .btn_default a, .galaxy_store .btn_kv.mobile_samsung a, .galaxy_apps .m_content-support .btn_default a').on('click', function (e) {
						/* launching */
						rundeepLink('samsungapps://MainPage/', 'Samsung Galaxy apps');
						e.preventDefault();
					});
				}
			}
		},
		resize: function () {
			var appsPopup = $('.deeplink-popup'),
				winHeight = $(window).height(),
				popupHeight = appsPopup.outerHeight();
			if (appsPopup.is('.active')) {
				$('html').css("overflow", "hidden");
				appsPopup.css("top", (winHeight / 2) - (popupHeight / 2));
			}
		},
		init: function () {
			this.samsungMembers.init();
			this.galaxyApps.init();
		}

	},
	imgSrcReplaceQa: function (target) {
		var _hrefCheck = location.href.indexOf("www.samsung.com") > -1 ? false : true;
		if (_hrefCheck) {
		    var _thisApps = $(document).find(".apps, #apps_floating"),
		        qaPath = "/qa",
		        qaUrl,
		        checkKeyword = ["/star", "/crown", "/beyond", "/davinci", "/hubble", "/akm_images", "/hero"]; //플래그쉽 키워드 입력

		    if (target) {
		        _thisApps = target;
		    }

		    _thisApps.find("img, video source").each(function () {
		        var _this = $(this);
		        var initCheck = false;
		        $.each(checkKeyword, function (i, v) {
		            $.each(["src", "data-src-pc", "data-src-mobile", "data-role-img"], function (j, w) {
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
			var _this = $(this);
			var flag = true;
			
			P5_APPS.addViewportEvent({
				triggerPositionPercent: 75,
				enter: function () {
					if (flag) {
						_this.next("section:not('.non-lazy')").addClass("lazy-load").find("img").each(function () {
							var __this = $(this);
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
		$('[data-role="gif-animation"]').each(function () {
			var _this = $(this);
			var gifImgArray = [];
			_this.find("img").each(function () {
				var __this = $(this);
				var targetImg = __this.filter(function () {
					return $(this).attr("src").indexOf("_ani.gif") > -1;
				});
				if (targetImg.length) {
					gifImgArray.push(targetImg);
				}
			});
			if (gifImgArray.length) {
				P5_APPS.addViewportEvent({
					triggerPositionPercent: 30,
					enter: function () {
						$.each(gifImgArray, function (i, v) {
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
			_videoWrap: $(document).find('[data-role="content-video"]'),
			_userAgent: navigator.userAgent.toLowerCase(),
			_videoKeyObj: {},
			_videoBtnTextArray: []
		},

		init: function () {
			var $video = $('.apps-content video');
			if ($video.length) {
				$video.each(function (idx) {
					var tagIdx = idx + 1;
					if ($(this).data("video-index") === undefined) {
						$(this).attr('data-video-index', tagIdx);
					}
				});
			}

			if (this.elem._videoWrap.length > 0) {
				this.set();
				this.event();
			}
		},

		set: function () {

			this.elem._videoWrap.each(function () {
				var _this = $(this);
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
						setIndex = $(this).index('[data-role="content-video"]'),
						videoIdx = _this.data('videoIdx'),
						videoSource = '',
						videoButtonSource = '',
						clickCode = _figure.data('tagging') != undefined ? _figure.data('tagging') : ("apps:" + APPS_SERVICE_NAME + ":video_" + videoIdx),
						sizeClass = P5_APPS.sizeMode == 1 ? "mobile-check" : "pc-check";

					P5_APPS.video.elem._videoKeyObj = _this.find("figure[data-key-exc]").data("key-exc");

					if (_this.find("figure[data-button-text]").data("button-text") != undefined) {
						P5_APPS.video.elem._videoBtnTextArray = _this.find("figure[data-button-text]").data("button-text").split("/");
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

			$(document).on('click', '.btn_media-play', function (e) {

				e.preventDefault();

				var _this = $(this),
					_videoData = _this.parents('figure').data('video-button'),
					_video = $(document).find('[data-video-match="' + _videoData + '"] video'),
					_poster = $(document).find('[data-video-match="' + _videoData + '"] .video_poster');

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

					// ie9
					if ($.browser.ie && $.browser.version == 9) {
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
				if ($.browser.ie && $.browser.version == 9) {
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
				}, false);

				if ($(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").length > 0) {
					if ($(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").is(".init")) {
						$(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").removeClass("init");
					}

					if ($(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").is(".pause")) {
						$(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").removeClass("pause");
					}

					if ($(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").is(".play")) {
						$(document).find("figure[data-video-button='" + _videoWrapData + "'] .btn_media-play").removeClass("play");
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
					if ($('.pc-check').length > 0) {
						this.set();
					}
				} else if (sizeModeCustom > 1) {
					if ($('.mobile-check').length > 0) {
						this.set();
					}
				}
			}
		}
	},
	themesTab: {
		elem: {
			_wrap: $('.m_content-decorative .f_tab li'),
			_button: $('.m_content-decorative .f_tab li .f_tab-header'),
			_motionInterval: null,
			_fadeInterval: null
		},

		init: function () {
			if ($('.m_content-decorative').length > 0) {
				this.set();
				this.event();
			}
		},

		set: function () {
			this.elem._wrap.eq(0).find('.screen-wrapper > img').each(function (idx) {
				var currentNumber = idx + 1;

				$(this).wrap('<figure class="screen" />');
				$(this).parent().addClass('type0' + currentNumber);
			});
		},

		event: function () {

			var motionInterval = this.elem._motionInterval,
				fadeInterval = this.elem._fadeInterval;

			this.elem._button.on('click', function (e) {
				e.preventDefault();

				var $this = $(this);
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

				$(this).attr("title", "selected").parents("li").siblings().find("h3 > .f_tab-header").removeAttr("title"); /* 런칭 */

				if (!$parent.hasClass('on')) {
					if (IDX == 0) {
						if (!$content.hasClass('on')) {
							$content.find('.screen-wrapper > img').each(function (idx) {
								var currentNumber = idx + 1;

								$(this).wrap('<figure class="screen" />');
								$(this).parent().addClass('type0' + currentNumber);
							});
							$content.addClass('on');
						}
					} else {
						$('.m_content-decorative .f_tab').find('.f_tab_content').removeClass('on');
						$('.m_content-decorative .f_tab li:first-child .screen-wrapper .screen').each(function (idx) {
							var $this = $(this);
							var $img = $this.find('img');

							$img.appendTo($this.closest('.screen-wrapper'));
						});
						$('.m_content-decorative .f_tab li:first-child .screen-wrapper .screen').remove();
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

					if (!$('html').hasClass('ie8')) {
						var _parent = $(this).closest('.f_tab'),
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
					var $target = $('.m_content-decorative .f_tab .elipse-wrapper');

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

		scroll: function () {
			var $decorative = $('.m_content-decorative');
			var $windowTop = $(window).scrollTop();
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
	slide: {

		elem: {
			_winHoriz: window.innerWidth !== undefined ? window.innerWidth : document.documentElement.clientWidth,
			_slideWrap: $(document).find("[data-role='slide-default'], [data-role='slide-pc'], [data-role='slide-mobile'], [data-role='slide-tab']"),
			_config: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				infinite: false,
				rtl: $("html").is(".rtl")
			},
			_beforeSizeMode: null,
			_afterSizeMode: null
		},
		init: function () {
			if (this.elem._slideWrap.length > 0) {
				this.event();
			}
		},
		event: function () {

			var winHoriz = P5_APPS.slide.elem._winHoriz;

			this.elem._slideWrap.each(function () {

				var type = $(this).data("role"),
					config = P5_APPS.slide.elem._config,
					optionConfig = $(this).data("role-option") != undefined ? eval("(" + $(this).data("role-option") + ")") : false;

				if (optionConfig !== false) {
					config = P5_APPS.slide.configRefresh(config, optionConfig);
				}

				switch (type) {

					case "slide-default":

						if (Object.keys(optionConfig).length > 1) {

							if (winHoriz > 768) {

								if ($(this).is(".slick-initialized")) {
									$(this).slick("unslick");
								}

								if (!$(this).is(".slick-initialized")) {
									$(this).slick(config["pc"]);
								}

							} else {

								if ($(this).is(".slick-initialized")) {
									$(this).slick("unslick");
								}

								if (!$(this).is(".slick-initialized")) {
									$(this).slick(config["mobile"]);
								}

							}

						} else {
							if (!$(this).is(".slick-initialized")) {
								$(this).slick(config);
							}
						}

						P5_APPS.slide.tagging($(this));
						P5_APPS.slide.accessibility.slide($(this));

						break;

					case "slide-pc":

						if (winHoriz > 768) {
							if (!$(this).is(".slick-initialized")) {
								$(this).slick(config);
								P5_APPS.slide.tagging($(this));
								P5_APPS.slide.accessibility.slide($(this));
							}
						} else {
							if ($(this).is(".slick-initialized")) {
								$(this).slick("unslick");
							}
						}

						break;

					case "slide-mobile":

						if (winHoriz > 768) {
							if ($(this).is(".slick-initialized")) {
								$(this).slick("unslick");
							}
						} else {
							if (!$(this).is(".slick-initialized")) {
								$(this).slick(config);
								P5_APPS.slide.tagging($(this));
								P5_APPS.slide.accessibility.slide($(this));
							}
						}

						break;

					case "slide-tab":

						var slideWrap = $(this).find(".f_container .inner");

						if (winHoriz > 768) {
							if (slideWrap.is(".slick-initialized")) {
								slideWrap.slick("unslick");
							}

							P5_APPS.slide.tabEvent.click($(this));
						} else {
							if (!slideWrap.is(".slick-initialized")) {
								slideWrap.slick(config);
								P5_APPS.slide.tagging(slideWrap);
								P5_APPS.slide.accessibility.slide(slideWrap);
								P5_APPS.slide.tabEvent.swipe(slideWrap);
							}
						}

						break;

					default:
						break;
				}

				//common accessibility
				P5_APPS.slide.accessibility.common($(this));

			});

		},
		tabEvent: {

			click: function ($this) {
				$this.find(".tab-slide-cont .tab-title a").on("click", function (e) {
					e.preventDefault();
					$(this).parents(".tab-slide-cont").addClass("active").siblings().removeClass("active");
					$(this).attr("title", "selected").parents(".tab-slide-cont").siblings().find(".tab-title a").removeAttr("title");
				});
			},

			swipe: function ($this) {
				$this.slick("slickGoTo", $this.find(".tab-slide-cont.active").index());
				$this.on("afterChange", function (event, slick, idx) {
					$this.find(".tab-slide-cont").eq(idx).addClass("active").siblings().removeClass("active");
				});
			}

		},
		configRefresh: function (config, reConfig) {

			if (typeof (config) !== typeof (reConfig)) {
				return config;
			}

			var reConfigLength = Object.keys(reConfig).length;
			if (reConfigLength === 1) {
				for (var key in reConfig) {
					if (reConfig[key] !== undefined) {
						config[key] = reConfig[key];
					}
				}
			} else {
				var newConfig = {};
				for (var key in reConfig) {
					if (newConfig[key] === undefined) {
						newConfig[key] = {};
						newConfig[key] = config;
					}

					newConfig[key] = $.extend({}, config, reConfig[key]);
				}
				config = newConfig;
			}

			return config;

		},
		tagging: function ($this) {

			var setctionTit = $this.parents("section").find(".f_header > .tit").text().toLowerCase(),
				dotsWrap = $this.find(".slick-dots"),
				dotsList = dotsWrap.find(">ul >li"),
				currentTit = "",
				nextTit = "",
				nextIdx = 0,
				prevTit = "",
				prevIdx = 0;

			if (APPS_SERVICE_NAME === "galaxy-themes") {

				dotsList.each(function (i) {
					var tit = $this.find(".slick-slide").eq(i).find(">.tit").text().toLowerCase(),
						dotsBtn = $(this).find(">button");

					dotsBtn.attr("data-omni-type", "microsite_pcontentinter");
					dotsBtn.attr("data-omni", "apps:" + APPS_SERVICE_NAME + ":" + setctionTit + "_" + tit);
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
						var dotsBtn = $(this).find(">button");
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
						thisSlide = $(slick.$slides[currentSlide]),
						thisWrap = thisSlide.parents(".slick-slider"),
						currentScroll = $(window).scrollTop();

					if (P5_APPS.slide.elem._winHoriz < 769) {
						thisWrap.find(".slick-dots >ul >li").eq(currentSlide).find("button").focus();
						$(window).scrollTop(currentScroll);

						setTimeout(function () {
							if ($this.find(".slick-list a").length > 0 && $this.find(".slick-list a").is(".mobile_samsung") === false) {
								$this.find(".slick-list a").attr("tabindex", "-1");
							}
						}, 1500);
					}
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

			if (this.elem._beforeSizeMode != this.elem._afterSizeMode) {
				this.elem._afterSizeMode = sizeMode;
				P5_APPS.slide.init();
			}

		}

	},
	motion: {

		common: {
			elem: {
				_uspWrap: $(document).find(".apps_usp"),
				_toggle: $(document).find('[data-role="btn-content-toggle"]'),
				_moving: $(document).find('.m_content-innovative.inno'),
				_kvTitle: $(document).find(".apps .fade-in [class*='f_header-']"),
				_kvImage: $(document).find(".apps .fade-in figure img"),
				_tabWrap: $(document).find("[data-role*='tab-']")
			},

			uspIntroMotion: function () {
				$('.apps_usp').addClass('show');
			},

			kvFadeIn: function () {
				this.elem._kvImage.animate({ opacity: 1 }, 1300, 'easeInOutQuad'); this.elem._kvTitle.delay(1000).animate({ opacity: 1 }, 1500, 'easeInOutQuad');
			},

			toggle: function () {
				var $button = this.elem._toggle;
				$button.each(function () {
					var $wrap = $(this).closest('[data-role="toggle-container"]'),
						serviceName = $wrap.data('alt-text').indexOf('/') > 0 ? $wrap.data('alt-text').split(',')[0] : $wrap.data('alt-text').split('/')[0],
						openCode = "apps:" + APPS_SERVICE_NAME.toLowerCase() + ":see more";
					$(this).attr('data-omni', openCode);
				});
				$button.on('click', function (e) {
					var $wrap = $(this).closest('[data-role="toggle-container"]'),
						$content = $wrap.find('[data-role="toggle-content"]'),
						serviceName = $wrap.data('alt-text').indexOf('/') < 0 ? $wrap.data('alt-text').split(',')[0] : $wrap.data('alt-text').split('/')[0],
						openTxt = $wrap.data('alt-text').indexOf('/') < 0 ? $wrap.data('alt-text').split(',')[1] : $wrap.data('alt-text').split('/')[1],
						closeTxt = $wrap.data('alt-text').indexOf('/') < 0 ? $wrap.data('alt-text').split(',')[2] : $wrap.data('alt-text').split('/')[2],
						openTitle = $wrap.data('alt-text').indexOf('/') < 0 ? $wrap.data('alt-text').split(',')[3] : $wrap.data('alt-text').split('/')[3],
						closeTitle = $wrap.data('alt-text').indexOf('/') < 0 ? $wrap.data('alt-text').split(',')[4] : $wrap.data('alt-text').split('/')[4],
						openCode = "apps:" + APPS_SERVICE_NAME.toLowerCase() + ":see more",
						closeCode = "apps:" + APPS_SERVICE_NAME.toLowerCase() + ":see less",
						currentSCroll;
					if ($wrap.hasClass('active')) {
						$content.stop().slideUp(function () {
							$(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').focus();
							$(this).closest('[data-role="toggle-container"]').removeClass('active');
							$(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').text(openTxt);
							$(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').attr('title', openTitle);
							$(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').attr('data-omni', openCode);
						});
						if (window.innerWidth < 769) {
							currentSCroll = $wrap.offset().top;
							$(window).scrollTop(currentSCroll);
						}
					} else {
						$content.stop().slideDown(function () {
							$(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').text(closeTxt);
							$(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').attr('title', closeTitle);
							$(this).closest('[data-role="toggle-container"]').find('[data-role="btn-content-toggle"]').attr('data-omni', closeCode);
						});
						$wrap.addClass('active');
		
						var $focusTarget = $content.find('[data-role="focus-target"]');
						if ($focusTarget.length) {
							$focusTarget.attr("tabindex", 0).focus();
							$focusTarget.off("focusout").on("focusout", function () {
								$(this).removeAttr("tabindex");
							});
						}
					}
		
					e.preventDefault();
				});
			},
			moving: {
				elem: {
					userBrowser: $('html.ie9').length || $('html.ie8').length ? 9 : 10,
					wrap: $(".m_content-innovative.inno"),
					figure: $(".m_content-innovative.inno").find(".f_container > figure"),
					figureLength: $(".m_content-innovative.inno").find(".f_container > figure").length - 1,
					thisTop1: $(".m_content-innovative.inno").length ? $(".m_content-innovative.inno").offset().top : "",
					thisTop2: $(".m_content-innovative.stronger").length ? $(".m_content-innovative.stronger").offset().top : "",
					contHeight: $(".m_content-innovative.stronger").outerHeight(),
					thisHeight: $(".m_content-innovative.inno").find(".f_container > figure").parent(".f_container").outerHeight(true),
					thisMoving: false,
					checkMoving1: true,
					checkMoving2: false,
					passSlideSize: "",
					imgSize: "",
					topPos: "",
					P5_APPS_Size: "",
					isNavi: $(".nav-wrap").length,
					unit: "",
					testCheck: 0,
					deltaY: 0,
					bottomHeight: 0
				},
				
				mobileDefault: function () {
					P5_APPS.motion.common.moving.elem.figure.removeAttr("style");
					P5_APPS.motion.common.moving.elem.figure.find("img").removeAttr("style");
				},
				defaultOption: function () {
					var winW = $(window).outerWidth();
					if (winW <= 1440) {
						P5_APPS.motion.common.moving.elem.figure.eq(P5_APPS.motion.common.moving.elem.figureLength).css({
							"margin-top": P5_APPS.motion.common.moving.elem.passSlideSize + "vw"
						});
						P5_APPS.motion.common.moving.elem.figure.find("img").css({
							"width": 1920 / 14.4 + "vw"
						});
						P5_APPS.motion.common.moving.elem.passSlideSize = 577 / 14.4;
					} else if (winW > 1440) {

						var value = P5_APPS.motion.common.moving.elem.userBrowser > 9 ? 600 : 728;

						P5_APPS.motion.common.moving.elem.figure.eq(P5_APPS.motion.common.moving.elem.figureLength).css({
							"margin-top": value + "px"
						});
						P5_APPS.motion.common.moving.elem.passSlideSize = value;
					}
				},
				passSlide: function (topPosition, scrollY, botSize, opacity) {
					if ($(window).outerWidth() > 1440) {
						P5_APPS.motion.common.moving.elem.unit = "px";
					} else {
						P5_APPS.motion.common.moving.elem.unit = "vw";
					}
					if (P5_APPS.motion.common.moving.elem.userBrowser > 9 || P5_APPS.motion.common.moving.elem.userBrowser == undefined) {
						if (scrollY < 0 && $(window).scrollTop() >= topPosition - 380) {
							P5_APPS.motion.common.moving.elem.figure.eq(P5_APPS.motion.common.moving.elem.figureLength).addClass("moving");
						} else if (scrollY > 0 && $(window).scrollTop() <= topPosition) {
							P5_APPS.motion.common.moving.elem.figure.eq(P5_APPS.motion.common.moving.elem.figureLength).removeClass("moving");
						}
					} else {
						if (APPS_SERVICE_NAME === "samsung members") {
							if (scrollY < 0 && $(window).scrollTop() >= topPosition - 380) {
								P5_APPS.motion.common.moving.elem.figure.eq(P5_APPS.motion.common.moving.elem.figureLength).not(':animated').stop().animate({
									"opacity": opacity
								}, 600);
							}
						} else {
							if (scrollY < 0 && $(window).scrollTop() >= topPosition - 380) {
								P5_APPS.motion.common.moving.elem.figure.eq(P5_APPS.motion.common.moving.elem.figureLength).not(':animated').stop().animate({
									"margin-top": 0 + P5_APPS.motion.common.moving.elem.unit,
									"opacity": opacity
								}, 600);
							} else if (scrollY > 0 && $(window).scrollTop() <= topPosition){
								P5_APPS.motion.common.moving.elem.figure.eq(P5_APPS.motion.common.moving.elem.figureLength).not(':animated').stop().animate({
									"margin-top": botSize + P5_APPS.motion.common.moving.elem.unit,
									"opacity": opacity
								}, 600);
							}
						}
					}
				},
				positionChange: function () {
					if (P5_APPS.motion.common.moving.elem.isNavi > 0) {
						P5_APPS.motion.common.moving.elem.figure.addClass("fixed1");
					} else {
						P5_APPS.motion.common.moving.elem.figure.addClass("fixed2");
					}
					P5_APPS.motion.common.moving.elem.figure.removeAttr("style");
				},
				passScrollMoving: function (top1, top2, hValue, pos, bottomSize, deltaVal) {
					function blockWheel() {
						jQuery(window).on("mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll", function (e) {
							e.preventDefault();
							return;
						});
						jQuery(window).on("keydown.disableScroll", function (e) {
							var eventKeyArray = [32, 33, 34, 35, 36, 37, 38, 39, 40];
							for (var i = 0; i < eventKeyArray.length; i++) {
								if (e.keyCode === eventKeyArray[i]) {
									e.preventDefault();
									return;
								}
							}
						});
					}
		
					function playWheel() {
						jQuery(window).off(".disableScroll");
					}
					var naviHeight;
					if (P5_APPS.motion.common.moving.elem.isNavi > 0) {
						naviHeight = 62;
					} else {
						naviHeight = 0;
					}
					// 1. 스크롤 섹션 진입 전
					if ($(window).scrollTop() <= top1 - naviHeight) {
						if (P5_APPS.motion.common.moving.elem.isNavi > 0) {
							P5_APPS.motion.common.moving.elem.figure.removeClass("fixed1");
						} else {
							P5_APPS.motion.common.moving.elem.figure.removeClass("fixed2");
						}
						P5_APPS.motion.common.moving.elem.figure.css({
							"top": 0
						});
						P5_APPS.motion.common.moving.elem.figure.stop();
						P5_APPS.motion.common.moving.elem.checkMoving1 = true;
						// 2. 스크롤 위치 섹션 진입
					} else if ($(window).scrollTop() >= top1 - 70 && $(window).scrollTop() <= top2 + 150) {
						if (deltaVal < 0 && P5_APPS.motion.common.moving.elem.checkMoving1) {
							// ie
							if ($.browser.ie || $("html").is(".ie")) {
								blockWheel();
								P5_APPS.motion.common.moving.elem.figure.stop(false, false).animate({
									"top": $(window).scrollTop() - top1
								}, 300, function () {
									P5_APPS.motion.common.moving.positionChange();
									setTimeout(function () {
										playWheel();
									}, 100);
								});
								P5_APPS.motion.common.moving.elem.checkMoving1 = false;
							}
							// other
							else {
								P5_APPS.motion.common.moving.positionChange();
								P5_APPS.motion.common.moving.elem.checkMoving1 = false;
							}
						} else if (deltaVal > 0 && P5_APPS.motion.common.moving.elem.checkMoving2) {
							var numVal = top2 - $(window).scrollTop() + 150;
							if (numVal < 0) {
								numVal = -(numVal);
							}
							//ie
							if ($.browser.ie || $("html").is(".ie")) {
								blockWheel();
								P5_APPS.motion.common.moving.elem.figure.stop(false, false).animate({
									"top": P5_APPS.motion.common.moving.elem.bottomHeight - numVal
								}, 300, function () {
									P5_APPS.motion.common.moving.positionChange();
									setTimeout(function () {
										playWheel();
									}, 100);
								});
								P5_APPS.motion.common.moving.elem.checkMoving2 = false;
							}
							//other
							else {
								P5_APPS.motion.common.moving.positionChange();
								P5_APPS.motion.common.moving.elem.checkMoving2 = false;
							}
						}
						if (P5_APPS.motion.common.moving.elem.userBrowser <= 9 && APPS_SERVICE_NAME === "samsung pass") {
							// P5_APPS.motion.common.moving.elem.figure.css({
							// 	"top": 60,
							// 	"bottom": "auto"
							// });
						}
						// 3. 스크롤 위치 섹션 벗어날시
					} else if ($(window).scrollTop() >= top2 + 150) {
						if (P5_APPS.motion.common.moving.elem.isNavi > 0) {
							P5_APPS.motion.common.moving.elem.figure.removeClass("fixed1");
						} else {
							P5_APPS.motion.common.moving.elem.figure.removeClass("fixed2");
						}
						P5_APPS.motion.common.moving.elem.figure.css({
							"top": P5_APPS.motion.common.moving.elem.bottomHeight
						});
						P5_APPS.motion.common.moving.elem.figure.stop();
						P5_APPS.motion.common.moving.elem.bottomHeight = hValue + 150;
						if (P5_APPS.motion.common.moving.elem.userBrowser > 9 || P5_APPS.motion.common.moving.elem.userBrowser == undefined) {
							P5_APPS.motion.common.moving.elem.figure.css({
								top: P5_APPS.motion.common.moving.elem.bottomHeight
							});
						} else if (P5_APPS.motion.common.moving.elem.userBrowser <= 9) {
							// if (APPS_SERVICE_NAME === "samsung pass") {
							// 	P5_APPS.motion.common.moving.elem.figure.css({
							// 		"top": "auto",
							// 		"bottom": -bottomSize
							// 	});
							// }
						}
						P5_APPS.motion.common.moving.elem.checkMoving2 = true;
					}
				}, //samsung pass 디바이스 모션
				init: function () {
					if (this.elem.wrap.length > 0) {
						P5_APPS.motion.common.moving.elem.P5_APPS_Size = P5_APPS.sizeMode;
						if ($(window).outerWidth() > 1440) {
							P5_APPS.motion.common.moving.elem.imgSize = 1280;
						} else {
							setTimeout(function () {
								P5_APPS.motion.common.moving.elem.imgSize = P5_APPS.motion.common.moving.elem.figure.eq(0).find("img").outerHeight();
							}, 100);
						}
						if (P5_APPS.motion.common.moving.elem.P5_APPS_Size > 1) {
							P5_APPS.motion.common.moving.defaultOption();
							setTimeout(function () {
								P5_APPS.motion.common.moving.passScrollMoving(P5_APPS.motion.common.moving.elem.thisTop1, P5_APPS.motion.common.moving.elem.thisTop2, P5_APPS.motion.common.moving.elem.thisHeight, P5_APPS.motion.common.moving.elem.topPos, P5_APPS.motion.common.moving.elem.imgSize);
							}, 100);
						} else {
							// 모바일 환경 JS 초기화
							P5_APPS.motion.common.moving.mobileDefault();
						}
					}
				},
				resize: function () {
					if (this.elem.wrap.length > 0) {
						var winW = $(window).outerWidth(true),
							winH = $(window).outerHeight(true);
						P5_APPS.motion.common.moving.elem.thisHeight = P5_APPS.motion.common.moving.elem.figure.parent(".f_container").outerHeight();
						P5_APPS.motion.common.moving.elem.thisTop1 = Number($(".m_content-innovative.inno").offset().top);
						P5_APPS.motion.common.moving.elem.thisTop2 = Number($(".m_content-innovative.stronger").offset().top);
						P5_APPS.motion.common.moving.elem.contHeight = $(".m_content-innovative.stronger").outerHeight();
						setTimeout(function () {
							P5_APPS.motion.common.moving.elem.imgSize = P5_APPS.motion.common.moving.elem.figure.eq(0).find("img").height();
						}, 100);
						P5_APPS.motion.common.moving.elem.P5_APPS_Size = P5_APPS.sizeMode;
						if (P5_APPS.motion.common.moving.elem.P5_APPS_Size > 1) {
							if (winW <= 1440) {
								P5_APPS.motion.common.moving.elem.figure.find("img").css({
									"width": 1920 / 14.4 + "vw"
								});
							} else if (winW > 1440) {
								P5_APPS.motion.common.moving.elem.figure.find("img").css({
									"width": "auto"
								});
								if (P5_APPS.motion.common.moving.elem.userBrowser <= 9 && P5_APPS.motion.common.moving.elem.figure.is(".fixed")) {
									P5_APPS.motion.common.moving.elem.figure.css({
										"top": 60
									});
								}
								P5_APPS.motion.common.moving.elem.imgSize = 1280;
							}
							P5_APPS.motion.common.moving.defaultOption();
							P5_APPS.motion.common.moving.passScrollMoving(P5_APPS.motion.common.moving.elem.thisTop1, P5_APPS.motion.common.moving.elem.thisTop2, P5_APPS.motion.common.moving.elem.thisHeight, P5_APPS.motion.common.moving.elem.topPos, P5_APPS.motion.common.moving.elem.imgSize);
						} else {
							// 모바일 환경 JS 초기화
							P5_APPS.motion.common.moving.mobileDefault();
						}
					}
				},
				scroll: function () {
					if (this.elem.wrap.length > 0) {
						//$(window).scrollTop()  = $(this).scrollTop();
						P5_APPS.motion.common.moving.elem.thisTop1 = Number($(".m_content-innovative.inno").offset().top);
						P5_APPS.motion.common.moving.elem.thisTop2 = Number($(".m_content-innovative.stronger").offset().top);
						P5_APPS.motion.common.moving.elem.thisHeight = P5_APPS.motion.common.moving.elem.figure.parent(".f_container").outerHeight();
						if (P5_APPS.motion.common.moving.elem.P5_APPS_Size > 1) {
							if (P5_APPS.motion.common.moving.elem.testCheck < $(window).scrollTop()) {
								P5_APPS.motion.common.moving.elem.deltaY = -1;
								P5_APPS.motion.common.moving.passScrollMoving(P5_APPS.motion.common.moving.elem.thisTop1, P5_APPS.motion.common.moving.elem.thisTop2, P5_APPS.motion.common.moving.elem.thisHeight, P5_APPS.motion.common.moving.elem.topPos, P5_APPS.motion.common.moving.elem.imgSize, P5_APPS.motion.common.moving.elem.deltaY);
								P5_APPS.motion.common.moving.passSlide(P5_APPS.motion.common.moving.elem.thisTop2, P5_APPS.motion.common.moving.elem.deltaY, 0, 1);
							} else {
								P5_APPS.motion.common.moving.elem.deltaY = 1;
								P5_APPS.motion.common.moving.passScrollMoving(P5_APPS.motion.common.moving.elem.thisTop1, P5_APPS.motion.common.moving.elem.thisTop2, P5_APPS.motion.common.moving.elem.thisHeight, P5_APPS.motion.common.moving.elem.topPos, P5_APPS.motion.common.moving.elem.imgSize, P5_APPS.motion.common.moving.elem.deltaY);
								P5_APPS.motion.common.moving.passSlide(P5_APPS.motion.common.moving.elem.thisTop2, P5_APPS.motion.common.moving.elem.deltaY, P5_APPS.motion.common.moving.elem.passSlideSize, 1);
							}
						}
						P5_APPS.motion.common.moving.elem.testCheck = $(window).scrollTop();
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
							//mousewheel: false,
							//preventClicks: true,
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
									//mousewheel: true,
									//preventClicks: true,
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

						_type = P5_APPS.motion.common.tab.typeCheck($(this));

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
						var _type = $(this).parents("[data-role*='tab-']").next("[data-role*='slide-']").length > 0 ? "slide" : "default",
							_content = $(this).parents("[data-role*='tab-']").next(".media_cont_wrap"),
							_idx = $(this).parents(".tab_btn_wrap").index();

						$(this).parents(".tab_btn_wrap").addClass("active").siblings().removeClass("active");

						if (_type === "slide") {
							P5_APPS.motion.common.tab.elem._thisWrap = $(this).parents("[data-role*='tab-']");
							P5_APPS.motion.common.tab.elem._slideIdx = _idx;
						}
						P5_APPS.motion.common.tab.motion($(this), _type, _content);
						P5_APPS.motion.common.tab.accessibility($(this));

					});

					_tabWrap.each(function () {

						var _this = $(this),
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
								_left =  $("html").hasClass("rtl") ? $(window).width() - (_btnWidth) - (_this.offset().left) : _this.offset().left,
								_centerValue = (_wrapWidth / 2) - (_btnWidth / 2),
								_transitionValue = (_left - _centerValue) + (_swiper.translate * ($("html").hasClass("rtl") ? 1 : -1 )),
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
				if (this.elem._moving.length > 0) { this.moving.init(); }
				if (this.elem._tabWrap.length > 0) { this.tab.init(); }
			},

			resize: function () {
				if (this.elem._moving.length > 0) { this.moving.resize(); }
				if (this.elem._tabWrap.length > 0) { this.tab.resize(); }
			},
			scroll: function () {
				if (this.elem._moving.length > 0) { this.moving.scroll(); }
			}
		},

		smartCall: {
			elem: {
				_moveTab: $(document).find(".smart-call .move_tab_list")
			},

			locationAnimate: function () {
				if ((APPS_SITE_CODE === "au" && location.href.indexOf("www.samsung.com") > -1) || location.pathname.indexOf("/fr/apps/smart-call") > -1) {
					var _this = $("[data-location]");
					_this.on("click", function () {
						var _locationClass = $(this).data("location"),
							_locationTop = $("." + _locationClass).offset().top;
						$("html, body").stop().animate({
							scrollTop: _locationTop
						}, 1000, "easeOutSine");
					});
				} else {
					var _btn = $(".move_tab_list").find("a"),
						_id, _top;
					_btn.on("click", function (e) {
						e.preventDefault();
						_id = $(this).attr("href")
						_top = $(document).find(_id).offset().top - 20;

						//landing floating bar
						_top = window.innerWidth > 768 ? _top : _top - $(document).find("#apps_floating").outerHeight();

						$("html, body").stop().animate({
							scrollTop: _top
						}, 1000, "easeOutSine", function () {
							$(document).find(_id).attr("tabindex", 0).focus();
						});

						loactionFocusOut(_id);
					});

					function loactionFocusOut(_id) {
						$(document).find(_id).off("focusout").on("focusout", function () {
							$(document).find(_id).removeAttr("tabindex");
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
				_canvasWrap: $(document).find(".samsung_members .m_content-best")
			},

			canvasMotion: function () {
				var _this = $(".m_content-best"), ico1 = $(".ico_1"), ico2 = $(".ico_2"), ico3 = $(".ico_3"), ico4 = $(".ico_4"), ico_animate = $(".obj_animate"), setTimeoutVarArray = [], reverseDelay = 1000, progressItv;

				function progress1() { ico1.find(".obj_animate.s1").stop().animate({ "height": 0 }, 300, "easeInOutSine", function () { ico1.find(".obj_animate.s2").stop().animate({ "height": 0 }, 300); }); setTimeout(function () { ico1.find(".obj_animate.s2").stop().animate({ "height": "100%" }, 300, "easeInOutSine", function () { ico1.find(".obj_animate.s1").stop().animate({ "height": "100%" }, 300); }); }, 1000); }

				function progress2() { ico2.find(".obj_animate.s1").circleProgress({ startAngle: -Math.PI / 4 * 1, value: 0, animationStartValue: 0.5, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '40' }); ico2.find(".obj_animate.s2").circleProgress({ startAngle: -Math.PI / 4 * 5, value: 0, animationStartValue: 0.5, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '40' }); setTimeout(function () { ico2.find(".obj_animate.s1").circleProgress('value', 0.5); }, reverseDelay); setTimeout(function () { ico2.find(".obj_animate.s2").circleProgress('value', 0.5); }, reverseDelay); }

				function progress3() { ico3.find(".obj_animate.s1").circleProgress({ startAngle: -Math.PI / 4 * 3, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '55' }); ico3.find(".obj_animate.s2").circleProgress({ startAngle: -Math.PI / 4 * 2, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '55' }); ico3.find(".obj_animate.s3").circleProgress({ startAngle: -Math.PI / 4 * 1, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '55' }); ico3.find(".obj_animate.s4").circleProgress({ startAngle: -Math.PI / 4 * 4, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '55' }); setTimeout(function () { ico3.find(".obj_animate.s1").circleProgress('value', 1); }, reverseDelay); setTimeout(function () { ico3.find(".obj_animate.s2").circleProgress('value', 1); }, reverseDelay); setTimeout(function () { ico3.find(".obj_animate.s3").circleProgress('value', 1); }, reverseDelay); setTimeout(function () { ico3.find(".obj_animate.s4").circleProgress('value', 1); }, reverseDelay); }

				function progress4() { ico4.find(".obj_animate.s1").circleProgress({ startAngle: -Math.PI / 4 * 4, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '35' }); ico4.find(".obj_animate.s2").circleProgress({ startAngle: -Math.PI / 4 * 3, value: 0, animationStartValue: 1.0, fill: { color: '#fafafa' }, emptyFill: 'rgba(0, 0, 0, 0)', thickness: '30', reverse: true }); setTimeout(function () { ico4.find(".obj_animate.s1").circleProgress('value', 1); }, reverseDelay); setTimeout(function () { ico4.find(".obj_animate.s2").circleProgress('value', 1); }, reverseDelay); }

				function play() { progress1(); setTimeoutVarArray.push(setTimeout(function () { $(".obj.ico_1").removeClass("show"); $(".obj.ico_2").addClass("show"); progress2(); }, 2000)); setTimeoutVarArray.push(setTimeout(function () { $(".obj.ico_2").removeClass("show"); $(".obj.ico_3").addClass("show"); progress3(); }, 4000)); setTimeoutVarArray.push(setTimeout(function () { $(".obj.ico_3").removeClass("show"); $(".obj.ico_4").addClass("show"); progress4(); }, 6000)); }
				
				P5_APPS.addViewportEvent({ triggerPositionPercent: 20, enter: function () { play(); progressItv = setInterval(function () { $(".obj").removeClass("show"); $(".obj.ico_1").addClass("show"); play(); }, 8000); }, leave: function (e) { for (var i = 0; i < setTimeoutVarArray.length; i++) { window.clearTimeout(setTimeoutVarArray[i]); } clearInterval(progressItv); $(".option_icon").find(">div").removeClass("show"); $(".obj.ico_1").addClass("show"); } }, _this);
			},

			init: function () {
				if (this.elem._canvasWrap.length > 0 && this.elem._canvasWrap.find(".obj_animate").length > 0) { this.canvasMotion(); }
			}

		},

		samsungFlow: {
			elem: {
				_canvasWrap: $(document).find(".flow #canvas_flow_01"),
				_notiWrap: $(document).find(".flow .m_content-notification"),
				_autoWrap: $(document).find(".flow .m_content-auto"),
				_secureWrap: $(document).find(".flow .m_content-secure")
			},

			canvasMotion: function () {
				var canvasFlow01 = document.getElementById("canvas_flow_01");
				var progress = 0;
				var length = 120;
				var speed = 1;
				var lineInterval;

				function updateLine(ctx) {
					if (canvasFlow01.getContext) {
						var ctx = canvasFlow01.getContext("2d");
						ctx.clearRect(0, 0, canvasFlow01.width, canvasFlow01.height);
						ctx.beginPath();
						ctx.strokeStyle = '#ffffff';
						ctx.lineWidth = 4;
						ctx.lineJoin = 'miter';
						if (progress <= 10) {
							ctx.moveTo(50, 80);
							ctx.lineTo(50 - progress, 80);
							ctx.moveTo(56 - progress, 72);
							ctx.lineTo(50 - progress, 80);
							ctx.lineTo(56 - progress, 88);
							ctx.moveTo(90, 60);
							ctx.lineTo(90 + progress, 60);
							ctx.moveTo(84 + progress, 52);
							ctx.lineTo(90 + progress, 60);
							ctx.lineTo(84 + progress, 68);
						} else if (progress <= 40) {
							ctx.moveTo(50, 80);
							ctx.lineTo(40, 80);
							ctx.lineTo(40, 80 - progress);
							ctx.moveTo(32, 86 - progress);
							ctx.lineTo(40, 80 - progress);
							ctx.lineTo(48, 86 - progress);
							ctx.moveTo(90, 60);
							ctx.lineTo(100, 60);
							ctx.lineTo(100, 60 + progress);
							ctx.moveTo(92, 54 + progress);
							ctx.lineTo(100, 60 + progress);
							ctx.lineTo(108, 54 + progress);
						} else if (progress <= 80) {
							ctx.moveTo(50, 80);
							ctx.lineTo(40, 80);
							ctx.lineTo(40, 40);
							ctx.lineTo(progress, 40);
							ctx.moveTo(progress - 6, 32);
							ctx.lineTo(progress, 40);
							ctx.lineTo(progress - 6, 48);
							ctx.moveTo(90, 60);
							ctx.lineTo(100, 60);
							ctx.lineTo(100, 100);
							ctx.lineTo(140 - progress, 100);
							ctx.moveTo(146 - progress, 92);
							ctx.lineTo(140 - progress, 100);
							ctx.lineTo(146 - progress, 108);
						} else if (progress <= 120) {
							ctx.moveTo(50, 80);
							ctx.lineTo(40, 80);
							ctx.lineTo(40, 40);
							ctx.lineTo(80, 40);
							ctx.lineTo(80, progress - 35);
							ctx.moveTo(88, progress - 40);
							ctx.lineTo(80, progress - 34);
							ctx.lineTo(72, progress - 40);
							ctx.moveTo(90, 60);
							ctx.lineTo(100, 60);
							ctx.lineTo(100, 100);
							ctx.lineTo(60, 100);
							ctx.lineTo(60, 175 - progress);
							ctx.moveTo(52, 180 - progress);
							ctx.lineTo(60, 174 - progress);
							ctx.lineTo(68, 180 - progress);
						}
						ctx.stroke();
						if (progress < length) {
							progress += speed;
						} else {
							clearInterval(lineInterval);
							setTimeout(function () {
								progress = 0;
								ctx.clearRect(0, 0, canvasFlow01.width, canvasFlow01.height);
								lineInterval = setInterval(updateLine, 15);
							}, 2000);
						}
					}
				}
				function drawLine() { lineInterval = setInterval(updateLine, 15)}
				drawLine();

				
			},

			effect: function(){
				P5_APPS.addViewportEvent({ triggerPositionPercent: 20, 'enter': function () { $('.m_content-notification').find('.f_container .scene_messege').addClass('flow_scale'); }, 'leave': function () { $('.m_content-notification').find('.f_container .scene_messege').removeClass('flow_scale'); } }, $('.m_content-notification'));
				P5_APPS.addViewportEvent({ triggerPositionPercent: 20, 'enter': function () { $('.m_content-auto').find('.f_container .scene_messege').addClass('flow_scale'); }, 'leave': function () { $('.m_content-auto').find('.f_container .scene_messege').removeClass('flow_scale'); } }, $('.m_content-auto'));
				P5_APPS.addViewportEvent({ triggerPositionPercent: 20, 'enter': function () { setTimeout(function () { $('.m_content-secure').find('.f_container .scene01').fadeIn(2000); }, 500); }, 'leave': function () { $('.m_content-secure').find('.f_container .scene01').hide(); } }, $('.m_content-secure'));
			},

			init: function () {
				if(this.elem._canvasWrap.length > 0){ this.canvasMotion(); }
				if (this.elem._notiWrap.length > 0 && this.elem._autoWrap.length > 0 && this.elem._secureWrap.length > 0) { this.effect(); }
			}
		},

		findMyMobile: {

			elem: {
				_kvWrap: $(document).find(".findmymobile [data-role='serial-fade']")
			},

			kvMotion: function () {
				var $target = $('[data-role="serial-fade"]'); if ($target.length) { P5_APPS.addViewportEvent({ triggerPositionPercent: 20, enter: function (e) { var $motion = $target.find('.motion'); if (P5_APPS.sizeMode != 1 && !$('html').hasClass('mobile')) { setTimeout(function () { $motion.eq(0).stop(true).animate({ opacity: 1 }, 700); setTimeout(function () { $motion.eq(1).stop(true).animate({ opacity: 1 }, 700); }, 500); }, 300); } }, leave: function (e) { var $motion = $target.find('.motion'); $motion.stop(true).animate({ opacity: 0 }, 200); } }, $target); }
			},

			init: function () {
				if (this.elem._kvWrap.length > 0) { this.kvMotion(); }
			}

		},

		galaxyStore: {
			elem: {
				_watchWrap: $(document).find(".galaxy_store .m_content-unique, .galaxy_apps .m_content-unique")
			},

			watch: function () {
				var setMotionFnc1, setMotionFnc2;

				P5_APPS.addViewportEvent({
					triggerPositionPercent: 20,
					'enter': function () {

						clearTimeout(setMotionFnc1);
						clearTimeout(setMotionFnc2);

						var $motion = $('.m_content-unique .f_container .motion_img');

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
						$('.m_content-unique .f_container .motion_img').eq(1).stop(true, true).css('opacity', 1);
						$('.m_content-unique .f_container .motion_img').eq(2).stop(true, true).css('opacity', 1);
						$('.m_content-unique .f_container .motion_img').removeAttr('style');

						clearTimeout(setMotionFnc1);
						clearTimeout(setMotionFnc2);
					}
				}, $('.galaxy_store .m_content-unique, .galaxy_apps .m_content-unique')); /* launching */
			},

			init: function () {
				if (this.elem._watchWrap.length > 0) {
					this.watch();
				}
			}
		},

		samsungNotes: {
			elem: {
				_tabWrap: $(document).find('.samsung_note .apps_image_tab')
			},

			imageTab: {
				elem: {
					tab: $(document).find('.samsung_note .apps_image_tab'),
					tabList: $(document).find('.samsung_note .apps_image_tab .tab_list'),
					button: $(document).find('.samsung_note .apps_image_tab .tab_list button'),
					autoMotion: "",
					autoCount: 0
				},
				clearMotion: function () {
					clearInterval(P5_APPS.motion.samsungNotes.imageTab.elem.autoMotion);
				},
				tab: function () {
					this.elem.button.on('click', function (e) {
						var $this = $(this);
						var $parent = $(this).closest('.tab_list');
						if (P5_APPS.sizeMode != 1) {
							$parent.addClass('active').siblings().removeClass('active');
							P5_APPS.motion.samsungNotes.imageTab.clearMotion();
						}
						e.preventDefault();
					});
				},
				autoTab: function () {
					var $target = $('[data-role="apps-image-tab"]');
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

			init: function (){
				if (this.elem._tabWrap.length > 0) { this.imageTab.init(); }
			}
		},

		init: function () {
			this.common.init();
			this.smartCall.init();
			this.samsungMembers.init();
			this.samsungFlow.init();
			this.findMyMobile.init();
			this.galaxyStore.init();
			this.samsungNotes.init();
		},

		resize: function () {
			this.common.resize();
		},

		scroll: function () {
			this.common.scroll();
		}

	},
	default_slider: {
		slider: $('[data-role="default-slider"]'),
		slideShow: 1,
		slickSlider: function(target, slideShow, sliderName, sliderTitle) {
			var defaultConfig = {
					slidesToShow: slideShow,
					slidesToScroll: 1,
					infinite: false,
					accessibility: true,
					speed: 500,
					touchMove: true,
					swipe: true,
					arrows: true,
					dots: true,
					customPaging: function(slider, i) {
						var slideTItle = $(slider.$slides[i]).find('[data-role="slide-title"]'),
							pagingTitle = slideTItle.length ? slideTItle.text().toLowerCase() : 'Slide' + (i + 1),
							pageText = pagingTitle.indexOf('.') > -1 ? pagingTitle.split('.')[0] : pagingTitle;
						return '<button type="button" data-role="none" tabindex="0" data-omni-type="microsite_pcontentinter" data-omni="rolling:index_' + (i + 1) + '">' + sliderName.split('.')[0] + ' ' + pageText + '</button>';
					}
				},
				activeIdx = 0,
				swipeFlag = true;
			if($('.apps').hasClass('rtl') || $('.apps_usp').hasClass('rtl')) {
				defaultConfig.rtl = true;
			}
			target.slick(defaultConfig);
			target.on('afterChange', function(event, slick, currentSlide, nextSlide) {
				var $next = $(slick.$slides[currentSlide]),
					$target = $next.closest('.m_feature').find('[data-role="default-slider-target"]').children(),
					contentType = $next.find('[data-role="tab-content-video"]').length ? "video_" : "image_",
					sliderName = $next.closest('[data-role="default-slider"]').data('slider-name'),
					taggingName = sliderName != undefined ? sliderName.indexOf('.') > -1 ? sliderName.split('.')[0].toLowerCase() : sliderName.toLowerCase() : "",
					currentSCroll = $(window).scrollTop();
				currentSCroll = $(window).scrollTop();
				$next.addClass('active').siblings().removeClass('active');
				$target.eq(currentSlide).addClass('active').siblings().removeClass('active');
				if(swipeFlag == true) {
					// sendClickCode('content_click','apps:' + APPS_SERVICE_NAME + ':' + contentType + taggingName + (currentSlide + 1) + '_swipe');
				}
				$(document).on('click', '[data-role="default-slider"] .slick-dots button', function() {
					swipeFlag = false;
					setTimeout(function() {
						swipeFlag = true;
					}, 600);
				});
				if(P5_APPS.sizeMode == 1) {
					$next.closest('[data-role="default-slider"]').find('.slick-dots li').find('button').blur();
					if($next.find('video').length) {
						$next.find('a, button').filter(':first').focus();
					} else {
						$next.closest('[data-role="default-slider"]').find('.slick-dots li').eq(currentSlide).find('button').focus();
					}
					$(window).scrollTop(currentSCroll);
				}
			});
		},
		event: function() {
			var slider = $('[data-role="default-slider"]'),
				deviceCheck = $('html').hasClass('mobile') || $('html').hasClass('touch') ? true : false,
				sliderTitle = [];
			slider.each(function(i) {
				var slideCount = $(this).data('slide-show') == undefined ? 1 : parseInt($(this).data('slide-show')),
					sliderName = $(this).data('slider-name'),
					$target = $(this).closest('.m_feature').find('[data-role="default-slider-target"]'),
					sliderLen = $(this).find(".list").length;
				if($(this).find("div").is(".list")) {
					sliderLen = $(this).find(".list").length;
				} else if($(this).find("div").is(".item_box")) {
					sliderLen = $(this).find(".item_box").length;
				}
				for(var t = 0; t < sliderLen; t++) {
					if($(this).find("div").is(".list")) {
						sliderTitle.push($(this).find(".list").eq(t).find("[data-role='slide-title']").text());
					} else if($(this).find("div").is(".item_box")) {
						sliderTitle.push($(this).find(".item_box").eq(t).find("[data-role='slide-title']").text());
					}
				}
				if(!$(this).hasClass('slick-initialized')) {
					P5_APPS.default_slider.slickSlider($(this), slideCount, sliderName, sliderTitle);
					sliderTitle = [];
					if($target.length) {
						activeIdx = $(this).find('.active').index();
						$(this)[0].slick.slickGoTo(activeIdx);
					}
				}
			});
		},
		resize: function() {},
		init: function() {
				this.event();
			} //기본 slider
	},
	videoBackground: { //스크롤시 해당 섹션 영상 재생
		autoPlay:function(){
			var target 			= $('[data-role="apps-video-type"] .f_container figure'),
				sectionFlag		= [];

			if(target.length){
				target.each(function(i){
					sectionFlag[i] = true;

					var _this	= $(this);

					P5_APPS.addViewportEvent({
						triggerPositionPercent: 20,
						enter :  function(){
								var _href 		= _this.find('video').attr('id'),
									$id 		= $('#' + _href);

								if(P5_APPS.sizeMode != 1 && sectionFlag[i] == true && !$('html').hasClass('mobile')){
									sectionFlag[i] = false;
									if($id.length){
										if( $id[0].readyState == 4 ){
											$id[0].play();
										}
									}
								}
							},

							leave : function(){
								var _href 		= _this.find('video').attr('id'),
									$id 		= $('#' + _href);

								if(P5_APPS.sizeMode != 1 && !$('html').hasClass('mobile')){
									if($id.length){
										if( $id[0].readyState == 4 ){
											$id[0].pause();
											$id[0].muted = true;
											if($id[0].currentTime != 0){
												$id[0].currentTime = 0;
											}
										}
									}
								}

								sectionFlag[i] = true;
							}

						}, _this );
				});
			}
		},
		init:function(){
			this.videoDataSet();
			this.videoSetting();
			this.autoPlay();
			this.clickEvent();
		},
		videoDataSet:function(){
			var target 			= $('[data-role="apps-video-type"] .f_container figure');

			target.each(function(){
				var _this = $(this);

				if(_this.find('video').length){
					_this.data('srcPc', _this.find('video source').data('srcPc'));
					_this.data('srcMobile', _this.find('video source').data('srcMobile'));
					_this.data('srcImage', _this.find('.video_poster'));
					_this.data('videoIdx', _this.find('video').data('videoIndex'));
					_this.find('video').remove();
				}
			});
		},
		videoSetting:function(){
			var target 			= $('[data-role="apps-video-type"] .f_container figure'),
				sectionFlag		= true;

			if(target.length){
				target.each(function(){
					var _this  		= $(this),
						videoSrc 	= '',
						_altTxt 	= _this.data('alt-text') != undefined ? _this.data('alt-text').split('.')[0]:"",
						_btnTitleTxt 	= _this.data('title-text') != undefined ? _this.data('title-text') : _this.data('alt-text') || "",
						currentIdx	= $(this).index('[data-role="apps-video-type"] .f_container figure'),
						videoIdx 	= _this.data('videoIdx'),
						videoSource = '',
						clickCode 	= "apps:" + APPS_SERVICE_NAME + ":video_" + videoIdx,
						sizeTrue	= P5_APPS.sizeMode == 1 ? "mo":"pc",
						sizeFalse	= P5_APPS.sizeMode == 1 ? "pc":"mo",
						sizeClass 	= P5_APPS.sizeMode == 1 ? "mobile-check" : "pc-check";

					videoSrc = P5_APPS.sizeMode == 1 ? _this.data('srcMobile') : _this.data('srcPc');

					// videoSource += '<figcaption class="blind">' + _altTxt + '</figcaption>';
					videoSource += '<video preload="metadata" muted="" class="' + sizeClass + '" id="appsVideo' + currentIdx + '"  webkit-playsinline="true" playsinline="true">';
					videoSource += 	'<source src="' + videoSrc + '" type="video/mp4">';
					videoSource += '</video>';
					videoSource += '<button type="button" class="btn-video-play" data-omni-type="microsite_contentinter" data-omni="' +  clickCode + '" title="'+ _btnTitleTxt +'" ><span class="blind">Play</span></button>';
					//videoSource += _this.data('srcImage');

					_this.append(videoSource);
					_this.prepend('<figcaption class="blind">' + _altTxt + '</figcaption>');
					
				});
			}
		},
		clickEvent:function(){
			$(document).on('click', '.btn-video-play', function(e){
				var _this 	= $(this),
					_wrap 	= $(this).closest('.f_container'),
					_id 	= _wrap.find('video').attr('id'),
					_video 	= $('#' + _id),
					_poster = $(this).parent().find(".video_poster");

				var _videoArray = [];
				$("video").each(function(i,v){
					_videoArray.push($(this).attr("id"));
				});

				$.each(_videoArray, function(idx, value){
					if($('#' + _videoArray[idx])[0]){
						$('#' + _videoArray[idx])[0].currentTime = 0;
					}
					$('#' + _videoArray[idx])[0].pause();
				});

				$(".btn-video-play").show();
				_video[0].currentTime = 0;
				_video[0].play();
				_video[0].muted = true;

				$(this).fadeOut();

				var videoLoadCheck = setInterval(function(){
					if( _video[0].currentTime != 0 ){
						_poster.hide();
						clearInterval(videoLoadCheck);
					}
				},300);

				_video[0].addEventListener("ended", function(){
					_video[0].currentTime = 0;
					_video[0].pause();
					//_poster.show();
					_this.fadeIn();
				}, false);

				e.preventDefault();
			});

			$('[data-role="btn-mute-toggle"]').on('click', function(e){
				var _this 	= $(this),
					_wrap 	= $(this).closest('.f_container'),
					_id 	= _wrap.find('video').attr('id'),
					_video 	= $('#' + _id),
					_poster = _wrap.find(".video_poster");

				if(_video.length){

					if(! _this.hasClass("active") ){
						_video.parent().find(".btn-video-play").trigger("click");
						_video[0].muted = false;
					} else {
						if(_video[0].currentTime != 0){
							_video[0].pause();
							//_poster.show();
							_video[0].currentTime = 0;
						}
						setTimeout(function(){
							_video[0].muted = false;
							_video[0].play();
							_video.parent().find(".btn-video-play").fadeOut();
							_poster.hide();
						}, 150);
					}

					_this.addClass('active');

				}
				e.preventDefault();
			});
		},
		posterCheck:function(){
			var $figure = $('[data-role="apps-video-type"] .f_container figure');

			if($('html').hasClass('mobile')){
				$figure.each(function(){
					var _this = $(this);

					if(_this.find('.video_poster').not(':visible')){
						_this.find('.video_poster').show();
						_this.find('.video_poster').removeAttr('style');
					}
				});
			}
		},
		resize:function(){
			if(P5_APPS.sizeMode != 1){
				if($('.mobile-check').length){
					$('[data-role="apps-video-type"] .f_container figure').children().not('.video_poster').remove();
					this.posterCheck();
					this.videoSetting();
				}

			} else {
				if($('.pc-check').length){
					$('[data-role="apps-video-type"] .f_container figure').children().not('.video_poster').remove();
					this.posterCheck();
					this.videoSetting();
				}
			}
			this.autoPlay();
			this.clickEvent();
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
					_serviceName = _key === "pen-up" ? "pen_up" : _key.replace(/-/gi, "_").replace(/ /gi, "_"),
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

			$(document).find("#content").prepend(_floatingHtml);
			P5_APPS.serviceFloatingBar.elem._toggleAlt = _floatingCommonToggle;

			var firstTarget = $("#apps_floating .toggle_btn");
			var lastTarget     = $("#apps_floating .navi_service_list li:last-child a");
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

			P5_APPS.imgSrcReplaceQa($("#apps_floating"));
		},

		click: function () {

			var _naviWrap = $(document).find(".apps_rawcode .navi_wrap"),
				_naviContents = _naviWrap.find(".navi_contents"),
				_naviServiceList = _naviWrap.find(".navi_service_list > li"),
				_naviServiceListLength = _naviServiceList.length,
				_idx = 0,
				_idxArr = randomFnc(_naviServiceListLength),
				_bounceSetTimeFnc = null;

			$(document).on("click", ".apps_rawcode .navi_wrap .toggle_btn", function(e){
				e.preventDefault();

				var _tagging = $(this).data("omni"),
					_replaceTagging = "";

				$(this).toggleClass("is_open");

				if (_naviContents.find("img").attr("src").indexOf("blank.gif") > -1) {
					_naviContents.find("img").each(function () {
						var _src = $(this).data("role-img");
						$(this).attr("src", _src);
					});
				}

				clearTimeout(_bounceSetTimeFnc);
				
				if ($(this).is(".is_open")) {
					_idxArr = randomFnc(_naviServiceListLength);
					_naviContents.addClass("is_open");
					$("html").css("overflow", "hidden");
					bounceMotion(_idx, 20, true);
					_replaceTagging = _tagging.replace("_open", "_close");
					$(this).attr("data-omni", _replaceTagging);
					$(this).find(".blind").text(P5_APPS.serviceFloatingBar.elem._toggleAlt[1]);
					$(this).find(".blind").attr("data-key", $(this).find(".blind").attr("data-key").replace(".open", ".close"));

					P5_APPS.layerAria(true);
					if (!_naviWrap.hasClass("fixed")) {
						$("#header").attr("aria-hidden", false);
					}
					$("#content .par").attr("aria-hidden",true);
				} else {
					_naviContents.removeClass("is_open");
					_naviServiceList.removeClass("bounce");
					$("html").removeAttr("style");

					_replaceTagging = _tagging.replace("_close", "_open");
					$(this).attr("data-omni", _replaceTagging);
					$(this).find(".blind").text(P5_APPS.serviceFloatingBar.elem._toggleAlt[0]);
					$(this).find(".blind").attr("data-key", $(this).find(".blind").attr("data-key").replace(".close", ".open"));

					P5_APPS.layerAria(false);
					$("#content .par").attr("aria-hidden", false);
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
			if ($(document).find("#apps_floating").length > 0 && window.innerWidth <= 768) {
				
				var _stickyCheck = location.href.toLowerCase().indexOf("/bixby") > -1 ? true : false;
				var _windowTop = $(window).scrollTop();
				var _gnbHeight = $(document).find("#header").outerHeight();
				var _naviHeight = $(document).find(".navi_header").outerHeight();

				if (_windowTop >= _gnbHeight) {
					$(document).find(".navi_wrap").addClass("fixed");
				} else {
					$(document).find(".navi_wrap").removeClass("fixed");
				}

				if (_stickyCheck === true && $(document).find(".js-sticky-placeholder").length > 0) {
					var _bixbyTop = $(document).find(".js-sticky-placeholder").offset().top;

					if (_windowTop >= _bixbyTop - _naviHeight) {
						$(document).find(".cl-g-sticky-navigation-text").addClass("apps-fixed");
					} else {
						$(document).find(".cl-g-sticky-navigation-text").removeClass("apps-fixed");
					}
				}
			}
		},

		resize: function () {
			var _siteCode = typeof APPS_SITE_CODE !== "undefined" ? APPS_SITE_CODE : siteCode,
				_xmlDataCheck = typeof xmlData !== "undefined" ? true : false;

			if (P5_APPS.serviceFloatingBar.elem._resizeIdx > 1 && _xmlDataCheck) {
				if ($(document).find("#apps_floating").length === 0 && window.innerWidth <= 768 && (_siteCode !== "au" && _siteCode !== "fr")) {
					this.grid(_siteCode);
				} else if ($(document).find("#apps_floating").length > 0 && window.innerWidth > 768) {

					var _tagging = $(document).find("#apps_floating .toggle_btn").data("omni"),
						_replaceTagging = "";

					_replaceTagging = _tagging.replace("_close", "_open");
					if ($(document).find(".js-sticky-placeholder").length > 0) {
						$(document).find(".cl-g-sticky-navigation-text").removeClass("apps-fixed");
					}

					$("html").removeAttr("style");
					$(document).find("#apps_floating .toggle_btn .blind").text(P5_APPS.serviceFloatingBar.elem._toggleAlt[0]);
					$(document).find("#apps_floating .toggle_btn").attr("data-omni", _replaceTagging);
					$(document).find("#apps_floating *").removeClass("is_open");
					$(document).find("#apps_floating *").removeClass("bounce");
				}
			} else {
				P5_APPS.serviceFloatingBar.elem._resizeIdx = P5_APPS.serviceFloatingBar.elem._resizeIdx + 1;
			}
		},

		init: function(){
			var _this = this;
				_appsFloatingCheck = $(document).find("#apps_floating").length === 0 ? true : false,
				_timer = 0,
				_siteCode = APPS_SITE_CODE;

			if (_appsFloatingCheck) {
				_this.grid(_siteCode);
				_this.click();
			}
		}

	},
	galaxyAppsChange : { //galaxy apps -> galaxy store change
	
		galaxyStore: function(){
			
			var _this = $(".apps-content").find($("[data-omni*='apps:"+ APPS_SERVICE_NAME +"_galaxy'"));

			_this.each(function(){
			
				$(this).attr({
					"title" :  _this.attr("title").replace("Galaxy Apps", "Galaxy Store"),
					"data-omni" : "apps:" + APPS_SERVICE_NAME + "_galaxy store"				
				});

				if ($(this).find(">img").length > 0) {
					$(this).find(">img").attr("alt", "SAMSUNG Galaxy Store");
				} else {
					$(this).text(_this.text().replace("GALAXY APPS", "GALAXY STORE"));
				}

			});

		},

		init: function(){
			var _hrefCheck = location.href.indexOf("www.samsung.com") > -1 ? false : true;
			
			if (typeof APPS_SERVICE_NAME !== "undefined") {
				if (APPS_SERVICE_NAME === "penup" || APPS_SERVICE_NAME === "samsung flow") {
					if ((APPS_SITE_CODE !== "au" || _hrefCheck) && (APPS_SITE_CODE !== "fr" || _hrefCheck)) {
						this.galaxyStore();
					}
				}
			}
		},
	},
	deviceSeries: function() { //galaxy themes 딥링크
		
		var modelCode = {
			newDevice :	["SM-G9700","SM-G9730","SM-G973","SM-G9750","SM-G975","SM-G970", "SM-G977"],
			oldDevice : ["SM-A105","SM-A205","SM-G357","SM-G8508","SM-G850","GT-I8262","SM-G355","SM-G360","SM-G361","SM-E500","SM-E700","GT-I9082","SM-G710","SM-G7102","SM-G720","GT-I9060","GT-I9063","SM-G5500","SM-G5308","SM-G530","SM-G531","GT-I8552","SM-J120","SM-J110","SM-J111","SM-J105","SM-J106","SM-J250","SM-J200","SM-J210","SM-J260","SM-G532","SM-J410","SM-G7508","SM-G750","GT-I9152","SM-P600","SM-P601","GT-N7100","GT-N7105","SM-N900","SM-N9000","SM-N9006","SM-N9008","SM-N9005","SM-N750","SM-N7505","SM-N9100","SM-N910","SM-N916","GT-S5300","GT-S7582","GT-I9300","GT-I9305","GT-I8190","GT-I9301","GT-I9500","GT-I9506","GT-I9505","GT-I9190","GT-I9195","GT-I9192","GT-I9515","SM-G900","SM-G901","SM-G800","SM-G903","SM-G9008","SM-G350","GT-S7262","SM-G318","SM-T113","SM-T116","SM-T211","SM-T350","SM-T531","SM-T530","SM-T535","SM-T230","SM-T331","SM-T585","SM-T385","SM-P350","SM-P550","SM-P555","SM-T280","SM-T355","SM-T550","SM-T555","SM-P580","SM-T580","SM-T595","SM-T285","SM-P355","SM-T380","SM-P585","SM-T560","SM-T561","SM-T800","SM-T805","SM-T700","SM-T705","SM-T710","SM-T713","SM-T715","SM-T813","SM-T819","SM-T810","SM-T815","SM-T820","SM-T825","SM-T830","SM-T835","SM-T231","GT-S7580","SM-G906"]
		}
		var deviceCheck = navigator.userAgent.toUpperCase();
		if (typeof APPS_SERVICE_NAME !== "undefined") {
			if (APPS_SERVICE_NAME === "galaxy-themes") {
				for (var key in modelCode) {
					modelCode[key].filter(function (v, i) {
						switch (key) {
							case "newDevice": // galaxy 10series
								if (deviceCheck.indexOf(v) > -1) {
									$("html").addClass("galaxy-series");
									return false;
								}
								break;
							case "oldDevice": // galaxy s6이전
								if (deviceCheck.indexOf(v) > -1) {
									$("html").addClass("old-series");
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

	initialize: function () { //전체 스크립트 기본 실행
		if (this.initialized) { return; }
		this.imgSrcReplaceQa();
		this.initialized = true;
		this.ready();
		this.scrollBarWidth = this.getScrollBarWidth();
		this.deviceCheck();
		this.sections = this.sections();
		this.resize(true);
		/* ie 8 issue */
		if ($.browser.ie && $.browser.version < 9) { $(".apps-content figure img").each(function () { var _this = $(this); var imgSrc = _this.attr("data-src-pc"); if (imgSrc) { _this.attr("src", imgSrc); } }); }
		this.step.init();
		this.tab();
		this.mobile_slider.init();
		this.verticalSlider.init();
		this.tabToSlide.init();
		this.tabVideoKeyControl.init();
		this.slideAnchor();
		this.youtubeFunc.init();
		this.deeplink.init();
		this.imgLazyLoad($(".apps-content > section"));
		this.gifAnimate();
		this.themesTab.init();
		this.video.init();
		this.slide.init();
		this.motion.init();
		this.default_slider.init();
		if (location.pathname.indexOf("fr") > -1) { this.videoBackground.init(); }
		this.galaxyAppsChange.init();
		this.deviceSeries();
		this.themesAnchorRedirect.init();

		if (APPS_SITE_CODE === "th") {
            setTimeout(function () {
                var _link = $(".apps a[href^='#'], #apps_floating a[href^='#'], .apps_cr a[href^='#']");
                _link.each(function () {
                    if ($(this).attr("href") !== "#search" && $(this).attr("href") !== "#section-deal" && $(this).attr("href") !== "#section-locally") {
                        $(this).attr("href", "javascript:void(0)");
                    }
                });
            }, 500);
        }
	}
};
$(document).ready(function () {
	var _jsonDataCheck = null,
		_timer = 0;
		
	_jsonDataCheck = setInterval(function () {
		_timer = _timer + 10;
		if (typeof commonObj !== "undefined") {
			clearInterval(_jsonDataCheck);
			P5_APPS.serviceFloatingBar.init();
			P5_APPS.footerAjax();
		} else if (_timer > 5000) {
			clearInterval(_jsonDataCheck);
		}
	}, 10);
	
	if ($('[data-role="apps-youtube-visual"]').length) { P5_APPS.youtubeInsert(); } 
});
$(window).resize(function () { P5_APPS.resize(true, "resize"); });
$(window).scroll(function () { P5_APPS.scroll(); });
if (window.addEventListener) { window.addEventListener('load', P5_APPS.initialize(), false); } else if (window.attachEvent) { window.attachEvent('onload', P5_APPS.initialize()); }