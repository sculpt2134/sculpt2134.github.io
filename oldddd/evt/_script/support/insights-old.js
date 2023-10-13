$(document).ready(function () {
	if ($(".carousel-solutions__slide").length == 1)
		$(".carousel-solutions__slide-wrap").addClass("s-single-slide");
	if ($(".carousel-insights__slide").length == 1)
		$(".carousel-insights__slide-wrap").addClass("s-single-slide");
	if ($(".carousel-products__slide").length == 1)
		$(".carousel-products__slide-wrap").addClass("s-single-slide");
	 
	$(".carousel-solutions__slide-wrap").slick({
		accessibility : true,
		speed: 500,
		useTransform: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        centerMode: true,
        infinite: true,
        swipeToSlide: false,
        initialSlide: 0,
        variableWidth: false,
        centerPadding: "21.8%",
        responsive : [ {
			breakpoint: 769,
            settings: {
                variableWidth: false,
                centerMode: false,
                arrows: false,
                dots: true
            }
		} ]
	});
	
	
	$(".carousel-insights__slide-wrap").slick({
		accessibility : true,
		speed: 500,
		useTransform: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        centerMode: true,
        infinite: true,
        swipeToSlide: false,
        initialSlide: 0,
        variableWidth: false,
        centerPadding: "21.8%",
		responsive : [ {
			breakpoint: 769,
            settings: {
                variableWidth: false,
                centerMode: false,
                arrows: false,
                dots: true
            }
		} ]
	});
	
	$(".carousel-products__slide-wrap").slick({
		accessibility : true,
		speed: 500,
		useTransform: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        touchThreshold: 10,
		responsive : [ {
			breakpoint: 769,
            settings: {
            	slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
		} ]
	});
});



! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.util && (e.smg.aem.util = {});
    var n = Object.prototype.hasOwnProperty,
        i = e.document;
    ! function() {
        var t = "Netscape" == navigator.appName,
            n = -1 != navigator.appVersion.indexOf("Mac"),
            i = -1 != navigator.userAgent.indexOf("Safari"),
            a = -1 != navigator.userAgent.indexOf("Chrome");
        e.isPcSafari = t && !n && i && !a ? !0 : !1
    }(), e.smg.aem.util = function() {
        return {
            isArray: function(e) {
                return "array" === t.type(e)
            },
            def: function(e, i) {
                for (var a in i) n.call(i, a) && (e[a] = "object" === t.type(e[a]) ? this.isArray(e[a]) ? i[a].slice(0) : this.def(e[a], i[a]) : i[a]);
                return e
            },
            winSize: function() {
                var n = {
                    w: e.isPcSafari ? t(e).width() : e.innerWidth || i.documentElement.clientWidth || i.body.clientWidth,
                    h: e.isPcSafari ? t(e).height() : e.innerHeight || i.documentElement.clientHeight || i.body.clientHeight
                };
                return n
            },
            getQueryStr: function(t) {
                t = t || e.location.href;
                var n = {};
                return t.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(e, t, i) {
                    n[t] = i
                }), n
            },
            winOpener: function(t) {
                var n, i, a, o = {
                    url: "//www.samsung.com",
                    name: "smg_opener_" + (new Date).getTime(),
                    width: 400,
                    height: 400,
                    left: null,
                    top: null,
                    scrollbars: "no",
                    toolbar: "no",
                    location: "no",
                    directories: "no",
                    status: "no",
                    menubar: "no",
                    resizable: "no"
                };
                a = e.smg.util.def(o, t || {}), a.left = a.left || screen.width / 2 - a.width / 2, a.top = a.top || screen.height / 2 - a.height / 2, i = "";
                for (var s in a) "url" != s && "name" != s && (i += "," + s + "=" + a[s]);
                return i = i.substr(1, i.length), n = window.open(a.url, a.name, i)
            },
            imgLoader: function(e, n) {
                e.each(function() {
                    var i = n || function() {};
                    this.complete || t(this).height() > 0 ? i.apply(e) : t(this).load(function() {
                        i.apply(e)
                    })
                })
            },
            vwOrientationUpdate: function(n) {
                t(e).on("orientationchange", function() {
                    var e = t(n || ".js-vw");
                    e.size() && (e.css("display", "none").height(), e.css("display", ""))
                })
            },
            iPadVWRender: function() {
                navigator.userAgent.match(/iPad/i) && this.vwOrientationUpdate(".js-vw")
            },
            Cookie: function() {
                var t = {
                    expires: "",
                    path: "/",
                    domain: "",
                    secure: ""
                };
                return {
                    setCookie: function(n, i, a) {
                        var o = new Date;
                        o.setTime(o.getTime() + 24 * (a || 0) * 60 * 60 * 1e3);
                        var s = e.smg.aem.util.def(t, {
                            expires: o
                        });
                        document.cookie = [n, "=", i, s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
                    },
                    getCookie: function(e) {
                        for (var t, n = e + "=", i = document.cookie.split(";"), a = 0, o = i.length; o > a; a++) {
                            for (t = i[a];
                                " " == t.charAt(0);) t = t.substring(1);
                            if (-1 != t.indexOf(n)) return t.substring(n.length, t.length)
                        }
                        return ""
                    }
                }
            },
            loadCSS: function(e, n, i) {
                e && "string" !== t.type(e) || (e = [e]);
                var a = t("head"),
                    o = [];
                t.map(e, function(e) {
                    var n = t.Deferred();
                    o.push(n), t("<link>").attr({
                        rel: "stylesheet",
                        type: "text/css",
                        href: e + (i ? "?_ts=" + (new Date).getTime() : "")
                    }).appendTo(a).load(function() {
                        n.resolve()
                    })
                }), t.when.apply(t, o).done(function() {
                    t.isFunction(n) && n()
                })
            },
            getServerTime: function(e, n) {
                n = n || window.location.href.toString(), e = e || function() {}, t.ajax({
                    url: n,
                    async: !1,
                    cashe: !1
                }).done(function(t, n, i) {
                    e(new Date(i.getResponseHeader("Date")))
                })
            },
            getRestrictBytes: function(e, t) {
                var n = e.length,
                    i = 0,
                    a = 0,
                    o = "";
                t = t || 100;
                for (var s = 0; n > s; s++) o = e.charAt(s), escape(o).length > 4 ? i += 2 : i++, t >= i && (a = s + 1);
                return {
                    bytes: i,
                    rectLeng: a
                }
            },
            isAemEditMode: function() {
                var n = !1;
                return e.parent && e.frameElement && t(e.parent.document).find(".foundation-authoring-ui-mode").size() && (n = !0), n
            },
            slickOptionControlFuncs: {
                changeOpt: function(e, n, i) {
                    var a = e.data("slick-opt");
                    if (void 0 !== a) {
                        var o = t.extend(!0, {}, n),
                            s = a.autoSlideOpts.autoSlide,
                            l = a.autoSlideOpts.autoSlideTime,
                            r = a.infinite;
                        return o.autoplay = s, o.autoplaySpeed = l, o.infinite = r, n.responsive && (o.responsive[0].settings.infinite = r), e.data("isAutoSlide", s), void 0 !== i && i.data("isAutoSlide", s), o
                    }
                    return n
                },
                setToggleButton: function(e) {
                    var n = e.data("isAutoSlide");
                    if (e = e.hasClass("s-slick") ? e : e.find(".s-slick"), void 0 !== n && n !== !1 && (e.find(".slick-dots").length || e.siblings(".s-slick-dots").find(".slick-dots").length)) {
                        var i, a, o, s, l = t("body").hasClass("touch-device"),
                            r = "",
                            d = '<button tabindex="-1" type="button" class="blind js-hidden-control ',
                            u = {
                                PLAY: t.getI18nDiction("play", "Play"),
                                PAUSE: t.getI18nDiction("Pause", "Pause")
                            },
                            c = {
                                play: "Start automatic slide",
                                pause: "Stop automatic slide"
                            };
                        n ? (r += '<li class="slick-dots-autoplay" aria-hidden="false" aria-live ="polite">', r += '<button class="s-autoplay-pause" role="button">' + u.PAUSE + "</button>", r += "</li>", l && (d += 'js-hidden-pause">' + c.pause + "</button>")) : (r += '<li class="slick-dots-autoplay" aria-hidden="false" aria-live ="polite">', r += '<button class="s-autoplay-play" role="button">' + u.PLAY + "</button>", r += "</li>", l && (d += 'js-hidden-play">' + c.play + "</button>")), e.find(".slick-dots").length ? (o = e.find(".slick-dots"), s = "smg") : e.siblings(".s-slick-dots").length && (o = e.siblings(".s-slick-dots").find(".slick-dots"), s = "cl"), o.length && (o.append(t(r)), i = o.find(".slick-dots-autoplay"), l && (e.before(d), a = e.prev(".js-hidden-control")));
                        var p = function(e, n, i) {
                                t(n.$dots).find(".slick-dots-autoplay").attr("aria-hidden", !1)
                            },
                            f = function(t) {
                                e.slick(t.hasClass("s-autoplay-pause") ? "slickPlay" : "slickPause")
                            },
                            h = function(e) {
                                var n = t(e.currentTarget).find("> button");
                                n.hasClass("s-autoplay-pause") ? m(n, a) : y(n, a)
                            },
                            g = function(e) {
                                var n = t(e.target),
                                    a = i.find("> button");
                                n.hasClass("js-hidden-pause") ? m(a, n) : y(a, n)
                            },
                            m = function(t, n) {
                                v(t, "s-autoplay-pause", "s-autoplay-play", u.PLAY), l && v(n, "js-hidden-pause", "js-hidden-play", c.play), e.slick("slickPause")
                            },
                            y = function(t, n) {
                                v(t, "s-autoplay-play", "s-autoplay-pause", u.PAUSE), l && v(n, "js-hidden-play", "js-hidden-pause", c.pause), e.slick("slickPlay")
                            },
                            v = function(e, t, n, i) {
                                e.removeClass(t), e.addClass(n), void 0 !== i && e.text(i)
                            },
                            k = function() {
                                i.off("click.smgaemutil").on("click.smgaemutil", h), l && a.off("click.smgaemutil").on("click.smgaemutil", g)
                            },
                            b = function(t) {
                                var n = e.data("detachedButton"),
                                    i = e.data("appendType"),
                                    o = e.data("hiddenButton");
                                if ("smg" === i ? e.find(".slick-dots").append(n) : "cl" === i && e.siblings(".s-slick-dots").find(".slick-dots").append(n), l)
                                    if (e.find(".slick-dots").length) e.prev(".js-hidden-control").length || (e.before(o), a = e.prev(".js-hidden-control"));
                                    else {
                                        var s = e.prev(".js-hidden-control");
                                        s.length && s.remove()
                                    } k(), f(n.find("> button"))
                            },
                            w = function(t) {
                                e.prev(".js-hidden-control").remove()
                            };
                        e.data("detachedButton", i), e.data("appendType", s), e.data("hiddenButton", d), e.off("breakpoint.smgaemutil").on("breakpoint.smgaemutil", b), e.on("afterChange", p), e.off("destroy.smgaemutil").on("destroy.smgaemutil", w), k()
                    }
                }
            }
        }
    }(), e.smg.aem.util.cookie = new e.smg.aem.util.Cookie, t(function() {
        e.smg.aem.util.iPadVWRender()
    })
}(window, window.jQuery);