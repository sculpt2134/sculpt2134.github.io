var APPS_PLUGIN = !1;
//browser mobile plugin
$.browser = {},
function () {
    jQuery.browser.mobile = !1,
        jQuery.browser.ie = !1,
        $.browser.version = 0,
        navigator.userAgent.match(/MSIE ([0-9]+)\./) ? ($.browser.ie = !0,
            jQuery.browser.version = RegExp.$1) : navigator.userAgent.match(/Mobile ([0-9]+)\./) && ($.browser.mobile = !0,
            jQuery.browser.version = RegExp.$1)
}(),

//ie8 indexOf
function () {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
        for (var e = -1, i = 0; i < this.length; i++)
            this[i] === t && (e = i);
        return e
    })
}(),

//easing
function ($) {
    function filling(t, e, i) {
        if (e || (e = $(t.parentNode)),
            !e.length)
            return !1;
        var s, n, r, o, a, l, h = i || {},
            c = h.width || t.offsetWidth,
            p = h.height || t.offsetHeight,
            d = h.areawidth || e[0].offsetWidth,
            u = h.areaheight || e[0].offsetHeight;
        return c && p && d && u ? (s = e._css("backgroundPosition"),
            s && (s = s.split(" "),
                s[0] = "center" == s[0] ? .5 : -1 != s[0].indexOf("%") ? parseInt(s[0]) / 100 : 0,
                s[1] = "center" == s[1] ? .5 : -1 != s[1].indexOf("%") ? parseInt(s[1]) / 100 : 0),
            n = c > p ? u / p : d / c,
            n = u > Math.round(p * n) ? u / p : d > c * n ? d / c : n,
            r = Math.max(d, Math.round(c * n)),
            o = Math.max(u, Math.round(p * n)),
            s && (s[0] && (a = (d - r) * s[0]),
                s[1] && (l = (u - o) * s[1])),
            void $(t).css({
                width: r,
                height: o,
                marginLeft: a || "",
                marginTop: l || ""
            })) : !1
    }

    function assignanimationoptions(t, e, i) {
        var s;
        return isobject(t) ? s = {
                time: t.duration,
                loop: t.loop,
                delay: t.delay,
                bystep: t.bystep,
                rounding: t.rounding,
                easing: t.easing,
                onstart: t.start,
                onupdate: t.step,
                onend: t.complete
            } : "function" == typeof i ? s = {
                time: t,
                easing: e,
                onend: i
            } : "function" == typeof e ? (s = "number" == typeof t ? {
                    time: t
                } : {
                    easing: t
                },
                s.onend = e) : "function" == typeof t && (s = {
                onend: t
            }),
            void 0 === s.time && (s.time = 400),
            s.time /= 1e3,
            s.delay && !isNaN(parseInt(s.delay)) && ("string" == typeof s.delay && (s.autodelay = !0),
                s.delay = parseInt(s.delay) / 1e3),
            s
    }

    function killcamels(t) {
        return t.replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    var ua = navigator.userAgent,
        div = document.createElement("div"),
        ie = ua.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i),
        prefix = ["Webkit", "Moz", "O"],
        transition = "transition",
        transform = "transform",
        requestanimationframe = "requestAnimationFrame",
        cancelanimationframe = "CancelAnimationFrame",
        transforms = {
            translate3d: "translate3d(0px, 0px, 0px)",
            translate: "translate(0px, 0px)",
            scale3d: "scale3d(1, 1, 1)",
            scale: "scale(1, 1)"
        },
        browser = $.browser,
        support = $.support,
        version, i;
    browser || ($.browser = browser = {}),
        browser.local = !/^http:\/\//.test(location.href),
        browser.firefox = /firefox/i.test(ua),
        browser.webkit = /applewebkit/i.test(ua),
        browser.chrome = /chrome/i.test(ua),
        browser.opera = /opera/i.test(ua),
        browser.ios = /ip(ad|hone|od)/i.test(ua),
        browser.android = /android/i.test(ua),
        browser.safari = browser.webkit && !browser.chrome,
        support.touch = browser.ios || browser.android || void 0 !== document.ontouchstart && null !== document.ontouchstart,
        browser.mobile = support.touch && (browser.ios || browser.android);
    for (i in browser)
        browser[i] || delete browser[i];
    browser.os = navigator.appVersion.match(/(mac|win|linux)/i),
        browser.os = browser.os ? browser.os[1].toLowerCase() : "",
        (browser.ios || browser.android) && (version = ua.match(/applewebkit\/([0-9.]+)/i),
            version && version.length > 1 && (browser.webkitversion = version[1]),
            browser.ios ? (version = ua.match(/version\/([0-9.]+)/i),
                version && version.length > 1 && (browser.ios = version[1])) : browser.android && (version = ua.match(/android ([0-9.]+)/i),
                version && version.length > 1 && (browser.android = parseInt(version[1].replace(/\./g, ""))))),
        support.svgimage = !0,
        support.pointerevents = !0,
        ie && (browser.ie = ie = parseInt(ie[1] || ie[2]),
            9 > ie ? browser.oldie = !0 : 9 == ie && prefix.push("ms"),
            11 > ie && (support.pointerevents = !1),
            9 > ie && (support.svgimage = !1)),
        support.pushstate = !!history.pushState,
        support.mediaquery = "function" == typeof window.matchMedia || !browser.oldie,
        support.video = void 0 !== document.createElement("video").canPlayType,
        support.backgroundsize = "backgroundSize" in div.style,
        support.backgroundsize && (div.style.backgroundSize = "cover",
            support.backgroundsize = "cover" == div.style.backgroundSize);
    try {
        div.style.background = "rgba(0, 0, 0, 0)",
            support.rgba = "rgba(0, 0, 0, 0)" == div.style.background
    } catch (e) {
        support.rgba = !1
    }
    if (support.canvas = document.createElement("canvas"),
        support.canvas = support.canvas.getContext && support.canvas.getContext("2d"),
        void 0 != div.style[transform])
        support.transform = transform;
    else
        for (transform = "Transform",
            i = 0; 4 > i; i++)
            if (void 0 !== div.style[prefix[i] + transform]) {
                support.transform = prefix[i] + transform;
                break
            }
    if (support.transform) {
        transform = support.transform;
        for (i in transforms)
            div.style[transform] = "",
            div.style[transform] = transforms[i],
            support[i] = div.style[transform];
        browser.ie && 10 > browser.ie,
            browser.android && 430 > browser.android
    }
    if (void 0 != div.style[transition])
        support.transition = transition;
    else
        for (transition = "Transition",
            i = 0; 4 > i; i++)
            if (void 0 !== div.style[prefix[i] + transition]) {
                support.transition = prefix[i] + transition;
                break
            }
    if (window[requestanimationframe])
        support.requestanimationframe = !0;
    else
        for (requestanimationframe = "RequestAnimationFrame",
            i = 0; 4 > i; i++)
            if (void 0 !== window[prefix[i] + requestanimationframe]) {
                window.requestAnimationFrame = window[prefix[i] + requestanimationframe],
                    window.cancelAnimationFrame = window[prefix[i] + cancelanimationframe],
                    support.requestanimationframe = !0;
                break
            }
    support.requestanimationframe || (window.requestAnimationFrame = function () {
                var t = 0;
                return function (e) {
                    var i = gettime(),
                        s = Math.max(0, 16 - (i - t));
                    return t = i + s,
                        setTimeout(function () {
                            e(i + s)
                        }, s)
                }
            }(),
            window.cancelAnimationFrame = function (t) {
                clearTimeout(t)
            }
        ),
        $._cookie = {
            set: function (t, e, i, s, n) {
                var r, o = t + "=" + e + ";";
                i && (r = new Date,
                        r.setTime(r.getTime() + 1e3 * i * 60 * 60 * 24),
                        o += "expires=" + r.toGMTString() + ";"),
                    s && (o += "path=" + s + ";"),
                    n && (o += "domain=" + n + ";"),
                    document.cookie = o
            },
            get: function (t) {
                var e = (document.cookie || " ").match(new RegExp(t + " *= *([^;]+)"));
                return e ? e[1] : null
            }
        },
        $._query = {
            parse: function () {
                function t(e) {
                    if (e)
                        if (e = decodeURIComponent(e).replace(/\+/g, " "),
                            -1 != e.indexOf(","))
                            for (e = e.split(","),
                                i = 0,
                                s = e.length; s > i; i++)
                                e[i] = t(e[i]);
                        else
                            expint.test(e) && (e = parseFloat(e));
                    return e
                }
                var e, i, s;
                return function (i) {
                    var s = {};
                    if (i = /^#/.test(i) ? i.substring(i.lastIndexOf("#") + 1) : !i || /\?/.test(i) ? (i || location.href).split("?")[1] : i) {
                        for (i = i.split("#")[0]; e = expqueries.exec(i);)
                            s[e[1]] = t(e[2]);
                        return s
                    }
                    return !1
                }
            }(),
            make: function (t) {
                var e, i, s = typeof t;
                if ("string" == s)
                    return t;
                if ("object" == s) {
                    i = [];
                    for (e in t)
                        i.push(e + "=" + encodeURIComponent(t[e]));
                    return i.join("&")
                }
            }
        };
    var easings = {
            linear: function (t, e, i, s) {
                return i * t / s + e
            },
            easeInQuad: function (t, e, i, s) {
                return i * (t /= s) * t + e
            },
            easeOutQuad: function (t, e, i, s) {
                return -i * (t /= s) * (t - 2) + e
            },
            easeInOutQuad: function (t, e, i, s) {
                return (t /= s / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
            },
            easeOutInQuad: function (t, e, i, s) {
                return s / 2 > t ? easings.easeOutQuad(2 * t, e, i / 2, s) : easings.easeInQuad(2 * t - s, e + i / 2, i / 2, s)
            },
            easeInCubic: function (t, e, i, s) {
                return i * (t /= s) * t * t + e
            },
            easeOutCubic: function (t, e, i, s) {
                return i * ((t = t / s - 1) * t * t + 1) + e
            },
            easeInOutCubic: function (t, e, i, s) {
                return (t /= s / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
            },
            easeOutInCubic: function (t, e, i, s) {
                return s / 2 > t ? easings.easeOutCubic(2 * t, e, i / 2, s) : easings.easeInCubic(2 * t - s, e + i / 2, i / 2, s)
            },
            easeInQuart: function (t, e, i, s) {
                return i * (t /= s) * t * t * t + e
            },
            easeOutQuart: function (t, e, i, s) {
                return -i * ((t = t / s - 1) * t * t * t - 1) + e
            },
            easeInOutQuart: function (t, e, i, s) {
                return (t /= s / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
            },
            easeOutInQuart: function (t, e, i, s) {
                return s / 2 > t ? easings.easeOutQuart(2 * t, e, i / 2, s) : easings.easeInQuart(2 * t - s, e + i / 2, i / 2, s)
            },
            easeInQuint: function (t, e, i, s) {
                return i * (t /= s) * t * t * t * t + e
            },
            easeOutQuint: function (t, e, i, s) {
                return i * ((t = t / s - 1) * t * t * t * t + 1) + e
            },
            easeInOutQuint: function (t, e, i, s) {
                return (t /= s / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
            },
            easeOutInQuint: function (t, e, i, s) {
                return s / 2 > t ? easings.easeOutQuint(2 * t, e, i / 2, s) : easings.easeInQuint(2 * t - s, e + i / 2, i / 2, s)
            },
            easeInSine: function (t, e, i, s) {
                return -i * Math.cos(t / s * (Math.PI / 2)) + i + e
            },
            easeOutSine: function (t, e, i, s) {
                return i * Math.sin(t / s * (Math.PI / 2)) + e
            },
            easeInOutSine: function (t, e, i, s) {
                return -i / 2 * (Math.cos(Math.PI * t / s) - 1) + e
            },
            easeOutInSine: function (t, e, i, s) {
                return s / 2 > t ? easings.easeOutSine(2 * t, e, i / 2, s) : easings.easeInSine(2 * t - s, e + i / 2, i / 2, s)
            },
            easeInExpo: function (t, e, i, s) {
                return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i
            },
            easeOutExpo: function (t, e, i, s) {
                return t == s ? e + i : 1.001 * i * (-Math.pow(2, -10 * t / s) + 1) + e
            },
            easeInOutExpo: function (t, e, i, s) {
                return 0 == t ? e : t == s ? e + i : (t /= s / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e - 5e-4 * i : i / 2 * 1.0005 * (-Math.pow(2, -10 * --t) + 2) + e
            },
            easeOutInExpo: function (t, e, i, s) {
                return s / 2 > t ? easings.easeOutExpo(2 * t, e, i / 2, s) : easings.easeInExpo(2 * t - s, e + i / 2, i / 2, s)
            },
            easeInCirc: function (t, e, i, s) {
                return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e
            },
            easeOutCirc: function (t, e, i, s) {
                return i * Math.sqrt(1 - (t = t / s - 1) * t) + e
            },
            easeInOutCirc: function (t, e, i, s) {
                return (t /= s / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
            },
            easeOutInCirc: function (t, e, i, s) {
                return s / 2 > t ? easings.easeOutCirc(2 * t, e, i / 2, s) : easings.easeInCirc(2 * t - s, e + i / 2, i / 2, s)
            },
            easeInElastic: function (t, e, i, s, n, r) {
                if (!t)
                    return e;
                if (1 == (t /= s))
                    return e + i;
                var o, r = r && "number" == typeof r ? r : .3 * s,
                    n = n && "number" == typeof n ? n : 0;
                return !n || n < Math.abs(i) ? (n = i,
                        o = r / 4) : o = r / (2 * Math.PI) * Math.asin(i / n),
                    -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - o) * (2 * Math.PI) / r)) + e
            },
            easeOutElastic: function (t, e, i, s, n, r) {
                if (!t)
                    return e;
                if (1 == (t /= s))
                    return e + i;
                var o, r = r && "number" == typeof r ? r : .3 * s,
                    n = n && "number" == typeof n ? n : 0;
                return !n || n < Math.abs(i) ? (n = i,
                        o = r / 4) : o = r / (2 * Math.PI) * Math.asin(i / n),
                    n * Math.pow(2, -10 * t) * Math.sin((t * s - o) * (2 * Math.PI) / r) + i + e
            },
            easeInOutElastic: function (t, e, i, s, n, r) {
                if (0 == t)
                    return e;
                if (2 == (t /= s / 2))
                    return e + i;
                var o, o, r = s * (.3 * 1.5),
                    n = 0,
                    r = r && "number" == typeof r ? r : s * (.3 * 1.5),
                    n = n && "number" == typeof n ? n : 0;
                return !n || n < Math.abs(i) ? (n = i,
                        o = r / 4) : o = r / (2 * Math.PI) * Math.asin(i / n),
                    1 > t ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - o) * (2 * Math.PI) / r)) + e : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * s - o) * (2 * Math.PI) / r) * .5 + i + e
            },
            easeOutInElastic: function (t, e, i, s, n, r) {
                return s / 2 > t ? easings.easeOutElastic(2 * t, e, i / 2, s, n, r) : easings.easeInElastic(2 * t - s, e + i / 2, i / 2, s, n, r)
            },
            easeInBack: function (t, e, i, s, n) {
                var n = n && "number" == typeof n ? n : 1.70158;
                return i * (t /= s) * t * ((n + 1) * t - n) + e
            },
            easeOutBack: function (t, e, i, s, n) {
                var n = n && "number" == typeof n ? n : 1.70158;
                return i * ((t = t / s - 1) * t * ((n + 1) * t + n) + 1) + e
            },
            easeInOutBack: function (t, e, i, s, n) {
                var n = n && "number" == typeof n ? n : 1.70158;
                return (t /= s / 2) < 1 ? i / 2 * (t * t * (((n *= 1.525) + 1) * t - n)) + e : i / 2 * ((t -= 2) * t * (((n *= 1.525) + 1) * t + n) + 2) + e
            },
            easeOutInBack: function (t, e, i, s, n) {
                return s / 2 > t ? easings.easeOutBack(2 * t, e, i / 2, s, n) : easings.easeInBack(2 * t - s, e + i / 2, i / 2, s, n)
            },
            easeInBounce: function (t, e, i, s) {
                return i - easings.easeOutBounce(s - t, 0, i, s) + e
            },
            easeOutBounce: function (t, e, i, s) {
                return (t /= s) < 1 / 2.75 ? i * (7.5625 * t * t) + e : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
            },
            easeInOutBounce: function (t, e, i, s) {
                return s / 2 > t ? .5 * easings.easeInBounce(2 * t, 0, i, s) + e : .5 * easings.easeOutBounce(2 * t - s, 0, i, s) + .5 * i + e
            },
            easeOutInBounce: function (t, e, i, s) {
                return s / 2 > t ? easings.easeOutBounce(2 * t, e, i / 2, s) : easings.easeInBounce(2 * t - s, e + i / 2, i / 2, s)
            }
        },
        easing, cubicbeziers = {
            linear: "0.250, 0.250, 0.750, 0.750",
            ease: "0.250, 0.100, 0.250, 1.000",
            "ease-in": "0.420, 0.000, 1.000, 1.000",
            "ease-out": "0.000, 0.000, 0.580, 1.000",
            "ease-in-out": "0.420, 0.000, 0.580, 1.000",
            easeInQuad: "0.550, 0.085, 0.680, 0.530",
            easeInCubic: "0.550, 0.055, 0.675, 0.190",
            easeInQuart: "0.895, 0.030, 0.685, 0.220",
            easeInQuint: "0.755, 0.050, 0.855, 0.060",
            easeInSine: "0.470, 0.000, 0.745, 0.715",
            easeInExpo: "0.950, 0.050, 0.795, 0.035",
            easeInCirc: "0.600, 0.040, 0.980, 0.335",
            easeInBack: "0.600, -0.280, 0.735, 0.045",
            easeOutQuad: "0.250, 0.460, 0.450, 0.940",
            easeOutCubic: "0.215, 0.610, 0.355, 1.000",
            easeOutQuart: "0.165, 0.840, 0.440, 1.000",
            easeOutQuint: "0.230, 1.000, 0.320, 1.000",
            easeOutSine: "0.390, 0.575, 0.565, 1.000",
            easeOutExpo: "0.190, 1.000, 0.220, 1.000",
            easeOutCirc: "0.075, 0.820, 0.165, 1.000",
            easeOutBack: "0.175, 0.885, 0.320, 1.275",
            easeInOutQuad: "0.455, 0.030, 0.515, 0.955",
            easeInOutCubic: "0.645, 0.045, 0.355, 1.000",
            easeInOutQuart: "0.770, 0.000, 0.175, 1.000",
            easeInOutQuint: "0.860, 0.000, 0.070, 1.000",
            easeInOutSine: "0.445, 0.050, 0.550, 0.950",
            easeInOutExpo: "1.000, 0.000, 0.000, 1.000",
            easeInOutCirc: "0.785, 0.135, 0.150, 0.860",
            easeInOutBack: "0.680, -0.550, 0.265, 1.550"
        };
    for (easing in easings)
        $.easing[easing] = function (t) {
            return function (e, i, s, n, r) {
                return easings[t](i, s, n, r)
            }
        }(easing);
    var poorbrowser = browser.ie && 9 > browser.ie,
        expint = /^-?[0-9\.]+$/,
        exprgb = /rgba?\(/,
        expisbody = /body/i,
        expiscolor = /color/i,
        expgetrgb = /rgba?\(([0-9]+), *([0-9]+), *([0-9]+)/,
        expqueries = /([^=&]+)=?([^=&]*)/g,
        transitionname = support.transition,
        transitionable = !!transitionname,
        transitionendnames = "transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd msTransitionEnd",
        gettime = function () {
            return (new Date).getTime()
        },
        isobject = $.isPlainObject,
        color = {
            getcode: function (t, e) {
                return this.tohex.apply(null, this.torgb(t, e, style.get(t, e)))
            },
            torgb: function (target, property, v) {
                var temp;
                if ("transparent" == v || "rgba(0, 0, 0, 0)" == v) {
                    for (; !expisbody.test(target.nodeName);)
                        if (target = target.parentNode,
                            temp = style.get(target, property),
                            "transparent" != temp && "rgba(0, 0, 0, 0)" != temp)
                            return this.torgb(target, property, temp);
                    return [255, 255, 255]
                }
                return v.match(exprgb) ? (v = v.match(expgetrgb),
                    [parseInt(v[1]), parseInt(v[2]), parseInt(v[3])]) : (v.length > 5 ? v = [v.substr(1, 2), v.substr(3, 2), v.substr(5, 2)] : (v = [v.substr(1, 1), v.substr(2, 1), v.substr(3, 1)],
                        v = [v[0] + v[0], v[1] + v[1], v[2] + v[2]]),
                    [parseInt(eval("0x" + v[0]).toString(10)), parseInt(eval("0x" + v[1]).toString(10)), parseInt(eval("0x" + v[2]).toString(10))])
            },
            tohex: function () {
                for (var t, e = 0, i = ""; 3 > e; e++)
                    t = Math.max(Math.min(255, arguments[e]), 0).toString(16),
                    i += 2 > t.length ? "0" + t : t;
                return "#" + i
            }
        },
        style = function () {
            function t(t) {
                return t = s(t),
                    /^(matrix|translate|scale|rotate|skew|perspective)/.test(t) ? !0 : !1
            }

            function e(t) {
                var e = t.match(d.isxyztarget);
                return e ? e[1] : !1
            }

            function i(t) {
                return window.SVGElement && t instanceof SVGElement
            }

            function s(t) {
                if (f.test(t)) {
                    if (!support.translate)
                        return /X$/.test(t) ? "left" : "top";
                    if (u.test(t) && !support.translate3d)
                        return t.replace("3d", "")
                } else if (m.test(t) && u.test(t) && !support.scale3d)
                    return t.replace("3d", "");
                return t
            }

            function n(t, e, i) {
                var s, n, r = t.style[a].match(d.scale[0]);
                return r ? (s = parseFloat(r[1]),
                    n = void 0 !== r[2] ? parseFloat(r[2]) : s,
                    void 0 === i ? _.test(e) ? s : n : (_.test(e) ? s = i : n = i,
                        void(t.style[a] = t.style[a].replace(d.scale[0], "scale(" + s + ", " + n)))) : 1
            }

            function r(o, l) {
                var h, c, u;
                if (l = s(l),
                    t(l)) {
                    if (u = e(l))
                        return r(o, u + "X");
                    c = l,
                        l = a
                }
                if ("opacity" != l || support.opacity) {
                    if ("scrollTop" == l)
                        return o.scrollTop
                } else
                    l = "filter";
                if (h = o ? i(o) && o.attributes[l] ? parseInt(o.attributes[l].value) : o.style ? o.style[l] ? o.style[l] : o.currentStyle ? o.currentStyle[l] : document.defaultView.getComputedStyle(o, null)[l] : o[l] : 0,
                    c && a) {
                    if (u = c.match(p),
                        u = u ? u[0] : "",
                        g.test(c))
                        return h = h.match(d[c][0]),
                            h ? parseFloat(h[1]) : 0;
                    if (y && m.test(c))
                        return n(o, c);
                    if (h)
                        return h = h.match(d[c.replace(p, "")][0]),
                            h ? parseFloat(h["X" == u ? 1 : "Y" == u ? 2 : 3]) : m.test(c) ? 1 : 0
                }
                return "opacity" == l ? parseFloat(h) : "filter" == l ? (h = h.match(/alpha *\( *opacity *[=:] *([0-9\.]+) *\)/i),
                    h = h ? parseFloat(h[1]) : 1,
                    h || 0 === h ? h / 100 : 1) : "auto" == h ? 0 : /(pt|px)$/.test(h) ? parseInt(h) : h
            }

            function o(r, l, h) {
                var c, u, f, w;
                if ("object" != typeof l) {
                    if (void 0 !== h)
                        if (i(r) && r.attributes[l])
                            r.attributes[l].value = h;
                        else if (r.style)
                        if (l = s(l),
                            t(l) && a) {
                            if (w = e(l))
                                return o(r, w + "X", h),
                                    o(r, w + "Y", h),
                                    void o(r, w + "Z", h);
                            u = r.style[a] || style.get(r, a),
                                -1 == u.indexOf("(") && (u = ""),
                                g.test(l) ? (d[l][0].test(u) || (u += l + "(0)"),
                                    r.style[a] = u.replace(d[l][1], "$1" + h + "deg")) : (f = l.replace(p, ""),
                                    d[f][0].test(u) || (u += support[f]),
                                    y && m.test(l) ? n(r, l, h) : r.style[a] = u.replace(d[f][_.test(l) ? 1 : v.test(l) ? 2 : 3], "$1" + h + (m.test(f) ? "" : "px")))
                        } else if ("opacity" == l)
                        support.opacity ? r.style.opacity = h : r.style.filter = "" === h ? "" : "alpha(opacity=" + 100 * h + ")";
                    else if ("scrollTop" == l)
                        r.scrollTop = h;
                    else
                        try {
                            r.style[l] = !h || isNaN(h) || d.nopx.test(l) ? h : h + "px"
                        } catch (b) {
                            window.console && console.log(b.message + "(" + r + ' : id="' + r.id + '", class="' + r.className + '", property="' + l + '", value : "' + h + '")')
                        }
                    else
                        r[l] = h
                } else
                    for (c in l)
                        style.set(r, c, l[c])
            }
            for (var a = support.transform, l = ["translate3d", "translate", "scale3d", "scale", "skew", "skewX", "skewY", "rotate", "rotateX", "rotateY", "rotateZ"], h = "[e0-9-.]+", c = "(?:(?:px|deg))?", p = /(X|Y|Z)$/, d = {
                    isxyztarget: /^(scale|scale3d|translate|translate3d)$/,
                    nopx: /(zIndex)/
                }, u = /3d/, f = /^translate/, m = /^scale/, g = /^rotate/, _ = /X$/, v = /Y$/, y = 9 == browser.ie, w = 0, b = l.length; b > w; w++)
                d[l[w]] = [new RegExp(l[w] + "\\((" + h + ")" + c + "(?:, (" + h + ")" + c + "(?:, (" + h + ")" + c + ")?)?"), new RegExp("(" + l[w] + "\\()" + h + c)],
                g.test(l[w]) || (d[l[w]][2] = new RegExp("(" + l[w] + "\\(" + h + c + ", )" + h + c),
                    d[l[w]][3] = new RegExp("(" + l[w] + "\\(" + h + c + ", " + h + c + ", )" + h + c));
            return {
                get: r,
                set: o,
                istransform: t
            }
        }(),
        ani = function () {
            function t(i, s, r) {
                if (i)
                    if (i.constructor != Array) {
                        var o, l, y, S, k, P, C = r || {},
                            O = C.time || d,
                            M = Math.round(p * O),
                            A = Math.round(p * (C.delay || 0)),
                            E = C.easing || u,
                            $ = {};
                        for (o in s)
                            if (l = C.rounding === !1 || "opacity" == o ? !1 : !T(o),
                                s[o].constructor == Array)
                                $[o] = s[o],
                                M = Math.max(M, Math.round(p * $[o].length / p));
                            else if (expiscolor.test(o)) {
                            for (y = w(i, o, v(i, o)),
                                S = w(i, o, s[o]),
                                k = [],
                                P = 0; 3 > P; P++)
                                k[P] = a(o, y[P], S[P], M, E, !0);
                            for ($[o] = [],
                                P = 0; M > P; P++)
                                $[o][P] = b(k[0][P], k[1][P], k[2][P])
                        } else
                            $[o] = a(o, v(i, o), s[o], M, E, l);
                        e(i, s),
                            c.push({
                                el: i,
                                vs: $,
                                sf: C.bystep ? -1 - A : f + A,
                                tf: M,
                                bs: C.bystep,
                                es: C.onstart,
                                eu: C.onupdate,
                                ee: C.onend,
                                lp: C.loop
                            }),
                            m = Math.max(m, f + A + M + p),
                            _ || (g = gettime(),
                                x = window.requestAnimationFrame(n),
                                _ = !0)
                    } else
                        for (P = 0,
                            h = i.length; h > P; P++)
                            t(i[P], s, r)
            }

            function e(t, e, s) {
                var n, r, o, a = 0,
                    h = c.length;
                if (e)
                    if ("string" != typeof e) {
                        o = [];
                        for (r in e)
                            o.push(r);
                        o = o.join(" ") + " "
                    } else
                        o = e + " ";
                for (l = !0; h > a; a++)
                    if (n = c[a],
                        n && n.el == t) {
                        if (e)
                            for (r in n.vs)
                                -
                                1 != o.indexOf(r + " ") ? (s && y(n.el, r, n.vs[r][n.tf - 1]),
                                    delete n.vs[r]) : l = !1;
                        l && (s && i(c[a]),
                            c[a] = null)
                    }
            }

            function i(t) {
                var e, i = t.tf - 1;
                for (e in t.vs)
                    y(t.el, e, t.vs[e][i]);
                t.eu && t.eu.call(t.el, o(t, "update", i, i)),
                    t.ee && t.ee.call(t.el, o(t, "end", i, i))
            }

            function s(i, s, n, r, o, a) {
                function l(t) {
                    var e = Math.round(n * t.v);
                    p != e && (style.set(i, r, -s * e),
                        p = e)
                }

                function h() {
                    c(),
                        t(d, {
                            v: 1
                        }, {
                            time: o,
                            loop: a,
                            rounding: !1,
                            easing: "linear",
                            onupdate: l
                        })
                }

                function c() {
                    e(d),
                        p = -1,
                        d.v = 0
                }
                var p, d = {};
                return n--, {
                    play: h,
                    stop: c
                }
            }

            function n() {
                f = Math.floor((gettime() - g) / S),
                    m > f ? (r(f),
                        x = window.requestAnimationFrame(n)) : (window.cancelAnimationFrame(x),
                        r(m),
                        f = m = 0,
                        c = [],
                        _ = !1)
            }

            function r(t) {
                for (var e, i, s, n, r = 0, a = c.length; a > r; r++)
                    if (e = c[r],
                        e && t >= e.sf && (s = e.tf - 1,
                            i = e.bs ? e.sf = e.sf + 1 : Math.min(s, t - e.sf),
                            i > -1)) {
                        if (e.es && (e.es.call(e.el, o(e, "start", 0, s)),
                                delete e.es),
                            !c[r])
                            continue;
                        for (n in e.vs)
                            y(e.el, n, e.vs[n][i]);
                        if (e.eu && e.eu.call(e.el, o(e, "update", i, s)),
                            i == s)
                            if (e.ee && e.ee.call(e.el, o(e, "end", i, s)),
                                e.lp) {
                                if (e.sf = e.bs ? -1 : f,
                                    m += c[r].tf + p,
                                    "yoyo" == e.lp)
                                    for (n in e.vs)
                                        e.vs[n].reverse()
                            } else
                                c[r] = null
                    }
            }

            function o(t, e, i, s) {
                var n, r = t.vs,
                    o = {
                        type: e,
                        percent: i / s
                    };
                for (n in r)
                    o[n] = r[n][i];
                return o
            }

            function a(t, e, i, s, n, r) {
                var o, a = [],
                    l = i - e,
                    h = 0;
                for (s--; s >= h; h++)
                    o = easings[n](h, e, l, s),
                    a.push(r ? Math.round(o) : o);
                return a
            }
            var l, h, c = [],
                p = 60,
                d = 1,
                u = "easeOutCubic",
                f = 0,
                m = 0,
                g = 0,
                _ = !1,
                v = style.get,
                y = style.set,
                w = color.torgb,
                b = color.tohex,
                T = style.istransform,
                x = (style.issplitxyztarget,
                    null),
                S = 1e3 / p;
            return {
                set: t,
                stop: e,
                sprite: s,
                getvalues: a
            }
        }();
        $.fn._css = function (t, e) {
            var i;
            if (isobject(t))
                for (i in t)
                    this._css(i, t[i]);
            else {
                if (void 0 === e)
                    return style.get(this[0], t);
                this.each(function () {
                    style.set(this, t, e)
                })
            }
            return this
        },
        $.fn._animate = function (t, e, i, s) {
            var n, r = assignanimationoptions(e, i, s);
            return r.autodelay && (n = r.delay),
                this.each(function (e) {
                    e && (r.step = r.complete = null),
                        n && (r.delay = e * n),
                        ani.set(this, t, r)
                })
        },
        $.fn._spriteanimation = function (t, e, i, s, n) {
            return this.each(function (r) {
                $(this).data("spriteanimation", ani.sprite(this, t, e, i, s, n))
            })
        },
        $._getanimationvalues = ani.getvalues,
        $.fn._stop = function (t, e) {
            return (t === !0 || t === !1) && (e = t,
                    t = null),
                this._css(transitionname, "").each(function () {
                    ani.stop(this, t, e)
                })
        },
        $.fn._transition = function (t, e, i, s) {
            var n, r, o, a, l = this,
                h = assignanimationoptions(e, i, s);
            if (transitionable) {
                r = [];
                for (n in t)
                    style.istransform(n) && (n = support.transform),
                    r.push([killcamels(n), " ", h.time, "s ", h.delay ? h.delay + "s " : "", "cubic-bezier(", cubicbeziers[h.easing] || cubicbeziers.ease, ")"].join(""));
                return r = r.join(","),
                    o = h.onend,
                    h.onend = function () {
                        a || (l.css(transitionname, "").unbind(transitionendnames, h.onend),
                            setTimeout(function () {
                                o && o.call(l[0])
                            }, 0),
                            a = !0)
                    },
                    setTimeout(function () {
                        l.each(function () {
                            $(this).css(transitionname, r)._css(t).bind(transitionendnames, h.onend)
                        })
                    }, 0),
                    this
            }
            return this.each(function () {
                ani.set(this, t, h)
            })
        },
        $.fn._fill = function (t, e) {
            return this.each(function () {
                filling(this, t, e)
            })
        },
        $.fn.decideClass = function (t, e) {
            return this[e ? "addClass" : "removeClass"](t)
        },
        $._event = function () {
            var t = support.touch,
                e = t ? {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                } : {};
            return {
                gettype: function (i) {
                    var s, n;
                    if (t) {
                        n = {};
                        for (s in i)
                            n[e[s] || s] = i[s];
                        return n
                    }
                    return i
                },
                getpoint: function (t) {
                    return t = t.originalEvent,
                        t.touches || t.changedTouches ? [t.touches[0] ? t.touches[0].pageX : t.changedTouches[0].pageX, t.touches[0] ? t.touches[0].pageY : t.changedTouches[0].pageY] : [t.clientX, t.clientY]
                }
            }
        }(),
        div = null,
        $(document.documentElement).addClass(browser.os).addClass(browser.chrome ? "chrome" : browser.firefox ? "firefox" : browser.opera ? "opera" : browser.safari ? "safari" : browser.ie ? "ie ie" + browser.ie : "").addClass(browser.webkit ? "webkit" : "").addClass(browser.ie && 8 > browser.ie ? "ie8" : "").addClass(browser.ios ? "ios" : browser.android ? "android" : "").addClass(support.transition ? "transition" : "notransition").addClass(support.transform ? "transform" : "notransform").addClass(support.backgroundsize ? "backgroundsize" : "nobackgroundsize").addClass(support.rgba ? "rgba" : "norgba").addClass(support.svgimage ? "svg" : "nosvg").addClass(support.pointerevents ? "pointerevents" : "nopointerevents").addClass(support.opacity ? "opacity" : "noopacity"),
        window.console || (window.console = {},
            window.console.log = window.console.table = window.console.error = window.console.clear = function () {}
        ),
        window.trace = function () {
            function t(e) {
                var i, s, n;
                if (null === e)
                    return "null";
                if (void 0 === e)
                    return "undefined";
                if (e == window)
                    return "[object Window]";
                if (e == document)
                    return "[object HTMLDocument]";
                if (e === !0 || e === !1 || "number" == typeof e || "function" == typeof e)
                    return e;
                if ("object" == typeof e) {
                    if (e.constructor == Array) {
                        for (i = [],
                            s = 0,
                            n = e.length; n > s; s++)
                            i.push(t(e[s]));
                        return "[" + i.join(",") + "]"
                    }
                    if (e.constructor == String)
                        return '"' + e.replace(/\</g, "<") + '"';
                    if (e.constructor == Boolean || e.constructor === Number || e.constructor == RegExp)
                        return e;
                    if (e.constructor == Date)
                        return "Date(" + e.getTime() + ", " + e + ")";
                    if (e.each && e.bind) {
                        for (i = [],
                            s = 0,
                            n = e.length; n > s; s++)
                            i.push(s + ":" + t(e[s]));
                        return i.push("length:" + n),
                            "${" + i.join(",") + "}"
                    }
                    if (e.nodeType)
                        return "[object " + e.nodeName.toUpperCase() + " Element]";
                    i = [];
                    for (s in e)
                        i.push("'" + s + "':" + t(e[s]));
                    return "{" + i.join(",") + "}"
                }
                return '"' + (e.replace ? e.replace(/\</g, "<") : e) + '"'
            }

            function e() {
                n || (n = document.createElement("ol"),
                    n.style.cssText = "position:absolute;left:5px;top:5px;max-width:75%;font-family:verdana;font-size:9px;color:#000;line-height:1.35em;margin:0;padding:3px 3px 2px 38px;border:1px solid #000;background:#fff;display:none;z-index:10000;opacity:0.75;filter:alpha(opacity=75);",
                    n.onclick = s,
                    i())
            }

            function i() {
                document.body ? document.body.appendChild(n) : setTimeout(i, 10)
            }

            function s() {
                n && (n.innerHTML = "",
                    n.style.display = "none",
                    r = 1)
            }
            var n = null,
                r = 1;
            return {
                log: function () {
                    for (var i = 0, s = arguments.length, o = [], a = document.createElement("li"); s > i; i++)
                        o.push(t(arguments[i]));
                    a.style.cssText = "list-style:decimal;margin-bottom:1px;padding:2px 3px 3px;background:" + (r % 2 ? "#eee;" : "#ddd;"),
                        a.innerHTML = o.join(", "),
                        e(),
                        n.appendChild(a),
                        n.style.display = "block",
                        r++
                },
                fixed: function (t) {
                    e(),
                        n.style.position = t === !1 ? "absolute" : "fixed"
                },
                clear: s
            }
        }()
}(window.jQuery),

//range slider plugin
function (t) {
    function e(e, u) {
        function f() {
            if (wt)
                if (t("html").hasClass("s" + Tt) || "all" == Tt) {
                    if (!Ft) {
                        if (N && N.length)
                            for (Ht = 0; Nt > Ht; Ht++) {
                                var e = Math.ceil(bt / 2);
                                if (Ct[Ht] = t(Ct[Ht]).attr("data-call", Ht),
                                    e > Ht) {
                                    var i = Math.ceil(Nt - 1 - Ht);
                                    N.prepend(Ct[i])
                                }
                            }
                        Ft = !0
                    }
                    N && N.length && _()
                } else if (Ft) {
                if (N && N.length)
                    for (N.html(""),
                        Ht = 0; Nt > Ht; Ht++)
                        Ct[Ht] = t(Ct[Ht]).attr("data-call", Ht),
                        Ct[Ht].appendTo(N),
                        Ht == Nt - 1 && Pt && Pt.call();
                Ft = !1
            }
        }

        function m() {
            if (wt) {
                var e = t(this).attr("data-page");
                if (!Mt || e == jt)
                    return !1;
                var i = N.find("> li.show").index(),
                    s = [],
                    n = U.length;
                for (Ht = 0; n > Ht; Ht++)
                    s[Ht] = N.find("> li").eq(Ht).attr("data-call");
                var r = s.indexOf(e),
                    o = r - i;
                Lt && g(o)
            } else
                C({
                    to: parseInt(this.getAttribute("data-page"))
                });
            return !1
        }

        function g(e) {
            Lt = !1;
            var i, s, n, r = Math.floor(N.find(" > li").eq(Nt - 1).css("marginLeft").replace("px", "")),
                a = N.find(" > li").eq(Nt - 1).innerWidth() + 2 * r,
                l = N.find(" > li.show").index(),
                h = N.find(" > li").eq(l + e).attr("data-call"),
                c = 1,
                p = Math.ceil(N.css("transform").split(",")[4]);
            t.browser.ie > 9 && (p = Math.ceil(N.css("transform").split(",")[12]));
            var d = Math.abs(e),
                u = 0,
                f = !1,
                m = 0;
            t.browser.mobile && (m = 10);
            var g = function () {
                i = e > 0 ? 0 : Nt - 1;
                var t = N.find("> li").eq(i).attr("data-call");
                N.find("> li").eq(i).remove(),
                    0 != i ? N.prepend(Ct[t]) : N.append(Ct[t]),
                    u = e > 0 ? p + Math.abs(a) : p - Math.abs(a),
                    c++,
                    f = !0
            };
            n = setInterval(function () {
                var i = Math.ceil(N.css("transform").split(",")[4]);
                t.browser.ie > 9 && (i = Math.ceil(N.css("transform").split(",")[12])),
                    f ? (s = p,
                        f = !1) : s = e > 0 ? i - 20 : i + 20,
                    N._css({
                        translate3dX: s
                    });
                var r = Math.ceil(N.css("transform").split(",")[4]);
                t.browser.ie > 9 && (r = Math.ceil(N.css("transform").split(",")[12]));
                var l = r - p;
                o && $t && (l = Math.abs(l) + Math.abs(ot - p)),
                    a < Math.abs(l) && g(),
                    c == d + 1 && (clearInterval(n),
                        o && $t ? N._css({
                            translate3dX: ot
                        }) : N._css({
                            translate3dX: p
                        }),
                        jt = h,
                        R(),
                        z(),
                        $t = !1,
                        o ? setTimeout(function () {
                            Lt = !0,
                                Rt = !0
                        }, 100) : (Lt = !0,
                            Rt = !0))
            }, m)
        }

        function _(e) {
            if (wt) {
                var i = Math.ceil(N.css("transform").split(",")[4]);
                t.browser.ie > 9 && (i = Math.ceil(N.css("transform").split(",")[12]));
                var n = s.width() / 2,
                    r = (Math.floor(N.find(" > li").eq(Nt - 1).css("marginLeft").replace("px", "")),
                        N.find(" > li").eq(Nt - 1).innerWidth()),
                    o = N.find(" > li.show").offset().left,
                    a = o + r / 2 - n;
                Et && (a = o + r / 2 - n - i),
                    N._animate({
                        translate3dX: -a
                    }, {
                        duration: 550,
                        easing: "easeOutCubic",
                        force3D: !0
                    }),
                    Et = !0
            }
        }

        function v(e) {
            return I(),
                J = et = c(e)[0],
                Bt = J,
                a && (15 > J || J > i - 15) ? !0 : (tt = c(e)[1],
                    st = (new Date).getTime(),
                    nt = 0,
                    it = !1,
                    !Lt && o ? !1 : Rt ? (t.support.transform && (rt = Math.ceil(N.css("transform").split(",")[4]),
                            ot = Math.ceil(N.css("transform").split(",")[4]),
                            t.browser.ie > 9 && (rt = Math.ceil(N.css("transform").split(",")[12]),
                                ot = Math.ceil(N.css("transform").split(",")[12]))),
                        void 0 == rt && (rt = 0,
                            ot = 0),
                        void n.bind(h({
                            mousemove: y,
                            mouseup: b
                        }))) : !1)
        }

        function y(i) {
            var s = c(i)[0],
                r = c(i)[1],
                a = (new Date).getTime();
            if (it === !1 && (it = Math.abs(180 * Math.atan2(J - s, tt - r) / Math.PI),
                    45 > it || it > 135))
                return n.unbind(h({
                        mousemove: y,
                        mouseup: b
                    })),
                    !0;
            if (Ct[0].parent().parent().hasClass("g-contents") && (0 != jt ? (Ct[jt - 1].addClass("show"),
                    Nt - 1 != jt ? Ct[jt + 1].addClass("show") : Ct[0].addClass("show")) : (Ct[jt + 1].addClass("show"),
                    Ct[Nt - 1].addClass("show"))),
                nt = s - J,
                wt) {
                var l = s - Bt,
                    p = s - Yt,
                    d = rt,
                    u = Math.floor(N.find(" > li").eq(Nt - 1).css("marginLeft").replace("px", "")),
                    f = N.find(" > li").eq(Nt - 1).innerWidth() + 2 * u,
                    m = f / 2;
                if (p > 0 && 0 != Yt && !o) {
                    "left" == qt && (Ut = !0,
                            qt = "right"),
                        Ut && (Xt = 1,
                            Ut = !1,
                            Bt = s),
                        l = s - Bt;
                    var g = Math.abs(Math.floor((Math.abs(l) + f) / f) - Xt + 1),
                        _ = function () {
                            var t = N.find("> li").eq(Nt - 1).attr("data-call");
                            N.find("> li").eq(Nt - 1).remove(),
                                N.prepend(Ct[t]),
                                Xt++,
                                rt = d - Math.abs(f) * g
                        };
                    if (f * Xt < Math.abs(l) + m)
                        for (Ht = 0; g > Ht; Ht++)
                            _();
                    qt = "right"
                } else if (0 > p && 0 != Yt && !o) {
                    "right" == qt && (Ut = !0,
                            qt = "left"),
                        Ut && (Xt = 1,
                            Ut = !1,
                            Bt = s),
                        l = s - Bt;
                    var g = Math.abs(Math.floor((Math.abs(l) + f) / f) - Xt + 1),
                        v = function () {
                            var t = N.find("> li").eq(0).attr("data-call");
                            N.find("> li").eq(0).remove(),
                                N.append(Ct[t]),
                                Xt++,
                                rt = d + Math.abs(f) * g
                        };
                    if (f * Xt < Math.abs(l) + m)
                        for (Ht = 0; g > Ht; Ht++)
                            v();
                    qt = "left"
                }
                nt = rt + (s - J)
            }
            lt || jt && jt != Nt - 1 || (nt /= 2),
                ft || N._css("translate3dX", nt),
                w(nt),
                a - 300 > st && (st = a,
                    et = s),
                o || At || (Q.appendTo(e),
                    At = !0),
                Yt = s,
                t(document).on("mouseleave", function () {
                    t("html").hasClass("firefox") && b(i)
                }),
                i.preventDefault()
        }

        function w(i, s) {
            var n = t.isPlainObject(i) ? i.translate3dX : i;
            s !== !0 && xt && xt.call(e, n)
        }

        function b(t) {
            var e = c(t)[0],
                i = e - et;
            e != J ? wt ? (Rt = !1,
                    Xt = 1,
                    o && Math.abs(i) > 10 ? (i > 0 ? Lt && g(-1) : Lt && g(1),
                        $t = !0) : N._animate({
                        translate3dX: ot
                    }, {
                        duration: 300,
                        easing: "easeOutCubic",
                        force3D: !0,
                        complete: T
                    })) : 10 > Math.abs(e - J) ? x() : !i || (new Date).getTime() - st > 300 ? nt > Z / 2 && (lt || jt) ? k(!1, !0) : -Z / 2 > nt && (lt || jt != Nt - 1) ? P(!1, !0) : x() : i > 0 && (lt || jt) ? k(!1, !0) : 0 > i && (lt || jt != Nt - 1) ? P(!1, !0) : x() : X(),
                !o && At && (Q.detach(),
                    At = !1),
                n.unbind(h({
                    mousemove: y,
                    mouseup: b
                }))
        }

        function T() {
            var t = s.width() / 2,
                e = [],
                i = [],
                n = N.find(" > li").length;
            for (a = 0; n > a; a++)
                e[a] = Math.abs(N.find(" > li").eq(a).offset().left + N.find(" > li").eq(a).innerWidth() / 2 - t),
                i[a] = Math.ceil(N.find(" > li").eq(a).offset().left + N.find(" > li").eq(a).innerWidth() / 2 - t);
            var r, o = Math.min.apply(null, e);
            if (Array.indexOf)
                r = e.indexOf(o);
            else
                for (var a = 0; a < e.length; a++)
                    e[a] == o && (r = a);
            jt = N.find(" > li").eq(r).attr("data-call"),
                R(),
                z(),
                Rt = !0
        }

        function x() {
            $(0, "back")
        }

        function S(t) {
            var e, i, s = parseInt(t.to);
            return Mt ? (e = "number" != typeof s || isNaN(s) ? this.getAttribute ? parseInt(this.getAttribute("data-page")) : null : s,
                Ct[0].parent().parent().hasClass("g-contents") && (0 != e ? (Ct[e - 1].addClass("show"),
                    Nt - 1 != e && Ct[e + 1].addClass("show")) : Ct[e + 1].addClass("show")),
                null !== e && e != jt && e > -1 && Nt > e && (H(),
                    ft ? E(e, t.noAnimation) : (i = (jt - e) * K,
                        O(e),
                        $(i, "slide", t.noAnimation))),
                !1) : !1
        }

        function k(t, e, i) {
            var s;
            return Mt && (lt || jt) ? (wt ? Lt && g(-1) : (s = jt ? jt - 1 : Nt - 1,
                    ft ? E(s, i) : (O(s, "prev", e),
                        $(K, "slide", i))),
                t && t.preventDefault(),
                !1) : !1
        }

        function P(t, e, i) {
            var s;
            return !Mt || !lt && jt == Nt - 1 ? !1 : (wt ? Lt && g(1) : (s = jt == Nt - 1 ? 0 : jt + 1,
                    ft ? E(s, i) : (O(s, "next", e),
                        $(-K, "slide", i))),
                t && t.preventDefault(),
                !1)
        }

        function C(t) {
            var e, i = t.to;
            if (!Mt || i == jt)
                return !1;
            if (ft)
                S(t);
            else {
                for (Ht = 0; Nt > Ht; Ht++)
                    Ct[0].parent().parent().hasClass("g-contents") ? Ht != i && Ht != jt && Ct[Ht].removeClass("show") : Ht != i && Ht != jt && Ct[Ht].hide();
                e = t.pretendTo ? t.pretendTo : jt > i ? "prev" : "next",
                    O(i, e),
                    $("prev" == e ? K : -K, "slide", t.noAnimation)
            }
            return !1
        }

        function O(t, e, i) {
            var s, n;
            if (!i)
                if (e)
                    A(t, "next" == e ? "100%" : "-100%");
                else
                    for (s = Math.min(jt, t),
                        n = Math.max(jt, t),
                        Ht = s; n >= Ht; Ht++)
                        Ht != jt && A(Ht, 100 * (Ht - jt) + "%");
            M(t)
        }

        function M(t) {
            I(),
                Mt = !1,
                jt = t,
                R(),
                St && St.call(e, jt, Nt),
                H()
        }

        function A(t, e) {
            wt || ("number" == typeof t ? Ct[t] : t).css({
                    position: "absolute",
                    left: e
                }).show(),
                Ct[0].parent().parent().hasClass("g-contents") || wt || ("number" == typeof t ? Ct[t] : t).addClass("show")
        }

        function E(t, e) {
            var i;
            clearTimeout(i),
                mt && !e ? (A(jt, 0),
                    vt ? (Ct[jt]._animate({
                            opacity: 0
                        }, Wt.fade),
                        i = setTimeout(function () {
                            Ct[t].show()._animate({
                                opacity: 1
                            }, Wt.fade)
                        }, 500)) : (Ct[jt]._animate({
                            opacity: 0
                        }, Wt.fade),
                        i = setTimeout(function () {
                            Ct[t].show()._animate({
                                opacity: 1
                            }, Wt.fade)
                        }, 500)),
                    jt = t,
                    R()) : z()
        }

        function $(t, e, i) {
            Ct[0].parent().parent().hasClass("g-contents") && Ct[jt].addClass("show"),
                mt && !i ? vt ? N._transition({
                    translate3dX: t
                }, Wt[e]) : N._animate({
                    translate3dX: t
                }, Wt[e]) : z()
        }

        function R() {
            for (Ht = 0; Nt > Ht; Ht++)
                pt && U[Ht][Ht == jt ? "addClass" : "removeClass"]("on");
            !lt && ht && (W[jt ? "removeClass" : "addClass"]("disabled"),
                B[jt == Nt - 1 ? "addClass" : "removeClass"]("disabled"))
        }

        function z() {
            var t, i, s;
            for (Ht = 0; Nt > Ht; Ht++)
                Ht == jt ? (Ct[Ht].css({
                        position: "relative",
                        left: 0
                    }).addClass("xlider-current show"),
                    t = Ct[jt ? jt - 1 : lt ? Nt - 1 : -1],
                    i = Ct[jt == Nt - 1 ? lt ? 0 : Nt : jt + 1]) : Ct[0].parent().parent().hasClass("g-contents") || wt ? Ct[Ht].removeClass("xlider-current show") : Ct[Ht].hide().removeClass("xlider-current");
            if (!ft && !wt)
                for (V && (V.remove(),
                        V = null),
                    N._css("translate3dX", 0),
                    t = Ct[jt ? jt - 1 : lt ? Nt - 1 : -1],
                    i = Ct[jt == Nt - 1 ? lt ? 0 : Nt : jt + 1],
                    s = Ct[jt],
                    lt && t[0] == i[0] && (V = t.clone().addClass("xlider-fake"),
                        V.appendTo(N),
                        A(V, G, !0)),
                    Ht = 0; Nt > Ht; Ht++)
                    t && Ct[Ht][0] == t[0] ? A(Ht, "-" + G) : i && Ct[Ht][0] == i[0] && A(Ht, G);
            wt && (t = Ct[jt ? jt - 1 : lt ? Nt - 1 : -1],
                    i = Ct[jt == Nt - 1 ? lt ? 0 : Nt : jt + 1],
                    s = Ct[jt]),
                Mt = !0,
                kt && kt.call(e, jt, Nt),
                X()
        }

        function D() {
            C({
                to: jt == Nt - 1 ? 0 : jt + 1,
                pretendTo: "next"
            })
        }

        function I() {
            clearTimeout(Dt)
        }

        function X() {
            I(),
                zt && (Dt = setTimeout(D, _t))
        }

        function Y(t) {
            return zt = "boolean" == typeof t ? t : !zt,
                zt ? X() : I(),
                zt
        }

        function L() {
            mt && (Wt.slide.duration = gt || Math.max(450, Math.min(K, 750)),
                Wt.back.duration = .75 * (gt || Wt.slide.duration),
                Wt.fade.duration = gt || 200)
        }

        function F() {
            var t;
            e && (t = parseInt(this.getAttribute("data-xlider-page")),
                e[0].scrollLeft = 0,
                setTimeout(function () {
                    e[0].scrollLeft = 0
                }, 0),
                e.xlider("change", t, !0))
        }

        function H() {
            Z = e[0].offsetWidth,
                G = Ot ? Ct[0][0].offsetWidth : "100%",
                K = Ot ? G : Z,
                wt && (clearTimeout(at),
                    at = setTimeout(function () {
                        f()
                    }, 100)),
                L()
        }
        var N, j, W, B, q, U, V, Q, Z, G, K, J, tt, et, it, st, nt, rt, ot, at, u = u || {},
            lt = u.endless,
            ht = u.arrows,
            ct = ht ? ht.constructor == Array ? "pre" : "string" == typeof ht ? ht : "button" : "",
            pt = u.paging,
            dt = pt ? pt.length && pt[0].nodeType ? "pre" : "string" == typeof pt ? pt : "button" : "",
            ut = u.swipe !== !1,
            ft = u.fade,
            mt = u.animate !== !1,
            gt = u.duration,
            _t = u.autoPlay,
            vt = u.useTransition && l,
            yt = u.numDisplay || 1,
            wt = u.newstyle || !1,
            bt = u.maxview || 5,
            Tt = u.mode || "all",
            xt = u.onMove,
            St = u.onChange,
            kt = u.onChangeEnd,
            Pt = u.reset,
            Ct = e.children(),
            Ot = yt > 1,
            Mt = !0,
            At = !1,
            Et = !1,
            $t = !1,
            Rt = !0,
            zt = !!_t,
            Dt = null,
            It = "xlider-wrapper",
            Xt = 1,
            Yt = 0,
            Lt = !0,
            Ft = !1,
            Ht = 0,
            Nt = Ct.length,
            jt = u.defaultPage && u.defaultPage > -1 ? Math.min(Nt - 1, u.defaultPage) : 0,
            Wt = {
                slide: {
                    queue: !1,
                    step: w,
                    easing: "easeOutCubic",
                    complete: z
                },
                back: {
                    queue: !1,
                    step: w,
                    easing: "easeOutCubic",
                    complete: z
                },
                fade: {
                    queue: !1,
                    easing: "easeOutSine",
                    complete: z
                }
            };
        if (P5_APPS.isPoorBrowser && (wt = !1),
            r.length || (r = t(document.body)),
            Nt) {
            if (ft && (ut = !0,
                    lt = !0),
                p.test(e[0].nodeName) ? (N = e.addClass(It),
                    e = N.parent()) : 2 > Nt && p.test(Ct[0].nodeName) && (N = Ct.addClass(It),
                    Ct = Ct.find("> li"),
                    Nt = Ct.length),
                N || (N = t('<div class="' + It + '" />').appendTo(e)),
                "static" == N.css("position") && N.css("position", "relative"),
                "auto" == N.css("zIndex") && N.css("zIndex", 0),
                e.css("overflow", "hidden"),
                !ft && lt && 2 > Nt && (lt = !1),
                ht && Nt > 1 ? ("pre" == ct ? (W = ht[0],
                        B = ht[1]) : (j = t('<p class="arrows" />').appendTo(e),
                        W = t("<" + ht + ' class="prev">Prev</' + ht + ">").appendTo(j),
                        B = t("<" + ht + ' class="next">Next</' + ht + ">").appendTo(j)),
                    W.attr("data-flag", "prev").click(k),
                    B.attr("data-flag", "next").click(P)) : 2 > Nt && ("pre" == ht && (ht[0].remove(),
                        ht[1].remove()),
                    ht = null),
                pt)
                if ("pre" == dt)
                    q = t(pt),
                    U = q.children();
                else
                    for (q = t('<p class="paging" />').appendTo(e),
                        U = [],
                        Ht = 0; Nt > Ht; Ht++)
                        U[Ht] = t("<" + dt + " />"),
                        U[Ht][0].innerHTML = Ht + 1;
            for (Ht = 0; Nt > Ht; Ht++)
                Ct[Ht] = t(Ct[Ht]),
                wt || (Ct[Ht] = t(Ct[Ht]).css({
                        left: ft ? 0 : "200%",
                        top: 0,
                        width: "100%",
                        display: Ht == jt ? "" : "none"
                    }),
                    Ct[Ht].appendTo(N),
                    Ct[Ht].find("a, button, input, textarea").attr("data-xlider-page", Ht).focus(F)),
                Ct[0].parent().parent().hasClass("g-contents") && Ct[Ht].addClass("hide"),
                pt && (U[Ht] = t(U[Ht]).attr("data-page", Ht).click(m).appendTo(q));
            ut && (window.navigator.pointerEnabled ? N[0].style.cssText += "touch-action: pan-y;" : window.navigator.msPointerEnabled && (N[0].style.cssText += "-ms-touch-action: pan-y;"),
                    N.bind(h({
                        mousedown: v
                    })),
                    N.bind("selectstart dragstart", function () {
                        return !1
                    })),
                e.bind("xlider-prev", function (t, e) {
                    k(t, !1, e.noAnimation)
                }),
                e.bind("xlider-next", function (t, e) {
                    P(t, !1, e.noAnimation)
                }),
                e.bind("xlider-jump", function (t, e) {
                    C(e)
                }),
                e.bind("xlider-change", function (t, e) {
                    S(e)
                }),
                e.bind("xlider-toggleAuto", function (t, e) {
                    e.v = Y(e.value)
                }),
                e.bind("xlider-remove", function (t) {
                    for (Ht = 0; Nt > Ht; Ht++)
                        Ct[Ht].find("a, button, input, textarea").removeAttr("data-xlider-page"),
                        p.test(N[0].nodeName) || Ct[Ht].appendTo(e),
                        pt && ("pre" != dt ? U[Ht].remove() : U[Ht].unbind("click"));
                    for (N._css({
                            position: "",
                            translate3dX: ""
                        }).removeClass(It),
                        N.unbind(h({
                            mousedown: v
                        })),
                        p.test(N[0].nodeName) || N.remove(),
                        pt && "pre" != dt && q.remove(),
                        ht && ("pre" != ct ? (W.remove(),
                            B.remove()) : (W.unbind("click"),
                            B.unbind("click"))),
                        V && V.remove(),
                        Q.remove(),
                        e.unbind("xlider-prev xlider-next xlider-jump xlider-change xlider-toggleAuto xlider-remove"),
                        e = N = W = B = U = null,
                        Ht = 0,
                        Nt = d.length; Nt > Ht; Ht++)
                        if (d[Ht] == H) {
                            d.splice(Ht, 1);
                            break
                        }
                }),
                Q = t('<div class="blocker" style="position:absolute;left:0;top:0;width:100%;height:100%;background:#000;" />').css("opacity", 0),
                R(),
                H(),
                z(),
                d.push(H);
            var Bt, qt = "",
                Ut = !0
        }
    }
    if (t && !t.fn.xlider) {
        var i, s = t(window),
            n = t(document.documentElement),
            r = t(document.body),
            o = t.browser.mobile,
            a = t.browser.ios,
            l = (t.browser.android,
                t.support.transform,
                t.support.transition),
            h = t._event.gettype,
            c = t._event.getpoint,
            p = /ul/i,
            d = [];
        t.fn.xlider = function (i, s, n, r) {
                var o;
                if (!i || t.isPlainObject(i))
                    this.each(function () {
                        e(t(this), i)
                    });
                else if ("string" == typeof i) {
                    if ("prev" == i || "next" == i)
                        r = s;
                    else {
                        if ("toggleAuto" == i)
                            return o = {
                                    v: 0,
                                    value: s
                                },
                                t(this).trigger("xlider-" + i, o, s),
                                o.v;
                        ("change" == i || "string" != typeof n) && (r = n)
                    }
                    this.trigger("xlider-" + i, {
                        to: s,
                        pretendTo: n,
                        noAnimation: r
                    })
                }
                return this
            },
            s.resize(function () {
                i = n[0].clientWidth,
                    t.each(d, function () {
                        this()
                    })
            })
    }
}(window.jQuery),

//mousewheel plugin
! function (t) {
    "function" == typeof define && define.amd ? define(["jQuery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function (t) {
    function e(e) {
        var o = e || window.event,
            a = l.call(arguments, 1),
            h = 0,
            p = 0,
            d = 0,
            u = 0,
            f = 0,
            m = 0;
        if (e = t.event.fix(o),
            e.type = "mousewheel",
            "detail" in o && (d = -1 * o.detail),
            "wheelDelta" in o && (d = o.wheelDelta),
            "wheelDeltaY" in o && (d = o.wheelDeltaY),
            "wheelDeltaX" in o && (p = -1 * o.wheelDeltaX),
            "axis" in o && o.axis === o.HORIZONTAL_AXIS && (p = -1 * d,
                d = 0),
            h = 0 === d ? p : d,
            "deltaY" in o && (d = -1 * o.deltaY,
                h = d),
            "deltaX" in o && (p = o.deltaX,
                0 === d && (h = -1 * p)),
            0 !== d || 0 !== p) {
            if (1 === o.deltaMode) {
                var g = t.data(this, "mousewheel-line-height");
                h *= g,
                    d *= g,
                    p *= g
            } else if (2 === o.deltaMode) {
                var _ = t.data(this, "mousewheel-page-height");
                h *= _,
                    d *= _,
                    p *= _
            }
            if (u = Math.max(Math.abs(d), Math.abs(p)),
                (!r || r > u) && (r = u,
                    s(o, u) && (r /= 40)),
                s(o, u) && (h /= 40,
                    p /= 40,
                    d /= 40),
                h = Math[h >= 1 ? "floor" : "ceil"](h / r),
                p = Math[p >= 1 ? "floor" : "ceil"](p / r),
                d = Math[d >= 1 ? "floor" : "ceil"](d / r),
                c.settings.normalizeOffset && this.getBoundingClientRect) {
                var v = this.getBoundingClientRect();
                f = e.clientX - v.left,
                    m = e.clientY - v.top
            }
            return e.deltaX = p,
                e.deltaY = d,
                e.deltaFactor = r,
                e.offsetX = f,
                e.offsetY = m,
                e.deltaMode = 0,
                a.unshift(e, h, p, d),
                n && clearTimeout(n),
                n = setTimeout(i, 200),
                (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }

    function i() {
        r = null
    }

    function s(t, e) {
        return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
    }
    var n, r, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var h = o.length; h;)
            t.event.fixHooks[o[--h]] = t.event.mouseHooks;
    var c = t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
            if (this.addEventListener)
                for (var i = a.length; i;)
                    this.addEventListener(a[--i], e, !1);
            else
                this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", c.getLineHeight(this)),
                t.data(this, "mousewheel-page-height", c.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var i = a.length; i;)
                    this.removeEventListener(a[--i], e, !1);
            else
                this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"),
                t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (e) {
            var i = t(e),
                s = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return s.length || (s = t("body")),
                parseInt(s.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function (e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function (t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function (t) {
            return this.unbind("mousewheel", t)
        }
    })
}),

//slick slider
function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jQuery"], t) : "undefined" != typeof exports ? module.exports = t(require("jQuery")) : t(jQuery)
}(function (t) {
    "use strict";
    var e = window.Slick || {};
    e = function () {
            function e(e, s) {
                var n, r = this;
                r.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: t(e),
                        appendDots: t(e),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" data-omni-type="microsite_pcontentinter" data-omni="rolling:left arrow">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" data-omni-type="microsite_pcontentinter" data-omni="rolling:right arrow">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function (e, i) {
                            return t('<button type="button" data-role="none" tabindex="0" />').text(i + 1)
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    },
                    r.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    },
                    t.extend(r, r.initials),
                    r.activeBreakpoint = null,
                    r.animType = null,
                    r.animProp = null,
                    r.breakpoints = [],
                    r.breakpointSettings = [],
                    r.cssTransitions = !1,
                    r.focussed = !1,
                    r.interrupted = !1,
                    r.hidden = "hidden",
                    r.paused = !0,
                    r.positionProp = null,
                    r.respondTo = null,
                    r.rowCount = 1,
                    r.shouldClick = !0,
                    r.$slider = t(e),
                    r.$slidesCache = null,
                    r.transformType = null,
                    r.transitionType = null,
                    r.visibilityChange = "visibilitychange",
                    r.windowWidth = 0,
                    r.windowTimer = null,
                    n = t(e).data("slick") || {},
                    r.options = t.extend({}, r.defaults, s, n),
                    r.currentSlide = r.options.initialSlide,
                    r.originalSettings = r.options,
                    "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden",
                        r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden",
                        r.visibilityChange = "webkitvisibilitychange"),
                    r.autoPlay = t.proxy(r.autoPlay, r),
                    r.autoPlayClear = t.proxy(r.autoPlayClear, r),
                    r.autoPlayIterator = t.proxy(r.autoPlayIterator, r),
                    r.changeSlide = t.proxy(r.changeSlide, r),
                    r.clickHandler = t.proxy(r.clickHandler, r),
                    r.selectHandler = t.proxy(r.selectHandler, r),
                    r.setPosition = t.proxy(r.setPosition, r),
                    r.swipeHandler = t.proxy(r.swipeHandler, r),
                    r.dragHandler = t.proxy(r.dragHandler, r),
                    r.keyHandler = t.proxy(r.keyHandler, r),
                    r.instanceUid = i++,
                    r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                    r.registerBreakpoints(),
                    r.init(!0)
            }
            var i = 0;
            return e
        }(),
        e.prototype.activateADA = function () {
            var t = this;
            t.$slideTrack.find(".slick-active").find("a:not([data-role='slide-title']), input, button, select").attr({
                tabindex: "0"
            })
        },
        e.prototype.addSlide = e.prototype.slickAdd = function (e, i, s) {
            var n = this;
            if ("boolean" == typeof i)
                s = i,
                i = null;
            else if (0 > i || i >= n.slideCount)
                return !1;
            n.unload(),
                "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : s ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : s === !0 ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack),
                n.$slides = n.$slideTrack.children(this.options.slide),
                n.$slideTrack.children(this.options.slide).detach(),
                n.$slideTrack.append(n.$slides),
                n.$slides.each(function (e, i) {
                    t(i).attr("data-slick-index", e)
                }),
                n.$slidesCache = n.$slides,
                n.reinit()
        },
        e.prototype.animateHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        },
        e.prototype.animateSlide = function (e, i) {
            var s = {},
                n = this;
            n.animateHeight(),
                n.options.rtl === !0 && n.options.vertical === !1 && (e = -e),
                n.transformsEnabled === !1 ? n.options.vertical === !1 ? n.$slideTrack.animate({
                    left: e
                }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
                    top: e
                }, n.options.speed, n.options.easing, i) : n.cssTransitions === !1 ? (n.options.rtl === !0 && (n.currentLeft = -n.currentLeft),
                    t({
                        animStart: n.currentLeft
                    }).animate({
                        animStart: e
                    }, {
                        duration: n.options.speed,
                        easing: n.options.easing,
                        step: function (t) {
                            t = Math.ceil(t),
                                n.options.vertical === !1 ? (s[n.animType] = "translate(" + t + "px, 0px)",
                                    n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + t + "px)",
                                    n.$slideTrack.css(s))
                        },
                        complete: function () {
                            i && i.call()
                        }
                    })) : (n.applyTransition(),
                    e = Math.ceil(e),
                    n.options.vertical === !1 ? s[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + e + "px, 0px)",
                    n.$slideTrack.css(s),
                    i && setTimeout(function () {
                        n.disableTransition(),
                            i.call()
                    }, n.options.speed))
        },
        e.prototype.getNavTarget = function () {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)),
                i
        },
        e.prototype.asNavFor = function (e) {
            var i = this,
                s = i.getNavTarget();
            null !== s && "object" == typeof s && s.each(function () {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        },
        e.prototype.applyTransition = function (t) {
            var e = this,
                i = {};
            e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
                e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        },
        e.prototype.autoPlay = function () {
            var t = this;
            t.autoPlayClear(),
                t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        },
        e.prototype.autoPlayClear = function () {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        },
        e.prototype.autoPlayIterator = function () {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
                    t.currentSlide - 1 === 0 && (t.direction = 1))),
                t.slideHandler(e))
        },
        e.prototype.buildArrows = function () {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
                e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
                e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                    e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                    e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
        },
        e.prototype.buildDots = function () {
            var e, i, s = this;
            if (s.options.dots === !0 && s.slideCount > s.options.slidesToShow) {
                for (s.$slider.addClass("slick-dotted"),
                    i = t("<div><ul /></div>").addClass(s.options.dotsClass),
                    e = 0; e <= s.getDotCount(); e += 1)
                    i.find("ul").append(t("<li />").append(s.options.customPaging.call(this, s, e)));
                s.$dots = i.appendTo(s.options.appendDots)
            }
        },
        e.prototype.buildOut = function () {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                e.slideCount = e.$slides.length,
                e.$slides.each(function (e, i) {
                    t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
                }),
                e.$slider.addClass("slick-slider"),
                e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
                e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                e.$slideTrack.css("opacity", 0),
                (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1),
                t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                e.options.draggable === !0 && e.$list.addClass("draggable")
        },
        e.prototype.buildRows = function () {
            var t, e, i, s, n, r, o, a = this;
            if (s = document.createDocumentFragment(),
                r = a.$slider.children(),
                a.options.rows > 1) {
                for (o = a.options.slidesPerRow * a.options.rows,
                    n = Math.ceil(r.length / o),
                    t = 0; n > t; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var h = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = t * o + (e * a.options.slidesPerRow + i);
                            r.get(c) && h.appendChild(r.get(c))
                        }
                        l.appendChild(h)
                    }
                    s.appendChild(l)
                }
                a.$slider.empty().append(s),
                    a.$slider.children().children().children().css({
                        width: 100 / a.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
            }
        },
        e.prototype.checkResponsive = function (e, i) {
            var s, n, r, o = this,
                a = !1,
                l = o.$slider.width(),
                h = window.innerWidth || t(window).width();
            if ("window" === o.respondTo ? r = h : "slider" === o.respondTo ? r = l : "min" === o.respondTo && (r = Math.min(h, l)),
                o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                n = null;
                for (s in o.breakpoints)
                    o.breakpoints.hasOwnProperty(s) && (o.originalSettings.mobileFirst === !1 ? r < o.breakpoints[s] && (n = o.breakpoints[s]) : r > o.breakpoints[s] && (n = o.breakpoints[s]));
                null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || i) && (o.activeBreakpoint = n,
                        "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]),
                            e === !0 && (o.currentSlide = o.options.initialSlide),
                            o.refresh(e)),
                        a = n) : (o.activeBreakpoint = n,
                        "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]),
                            e === !0 && (o.currentSlide = o.options.initialSlide),
                            o.refresh(e)),
                        a = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null,
                        o.options = o.originalSettings,
                        e === !0 && (o.currentSlide = o.options.initialSlide),
                        o.refresh(e),
                        a = n),
                    e || a === !1 || o.$slider.trigger("breakpoint", [o, a])
            }
        },
        e.prototype.changeSlide = function (e, i) {
            var s, n, r, o = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(),
                a.is("li") || (a = a.closest("li")),
                r = o.slideCount % o.options.slidesToScroll !== 0,
                s = r ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll,
                e.data.message) {
                case "previous":
                    n = 0 === s ? o.options.slidesToScroll : o.options.slidesToShow - s,
                        o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, i);
                    break;
                case "next":
                    n = 0 === s ? o.options.slidesToScroll : s,
                        o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(l), !1, i),
                        a.children().trigger("focus");
                    break;
                default:
                    return
            }
        },
        e.prototype.checkNavigable = function (t) {
            var e, i, s = this;
            if (e = s.getNavigableIndexes(),
                i = 0,
                t > e[e.length - 1])
                t = e[e.length - 1];
            else
                for (var n in e) {
                    if (t < e[n]) {
                        t = i;
                        break
                    }
                    i = e[n]
                }
            return t
        },
        e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
                e.$slider.off("focus.slick blur.slick"),
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                e.$list.off("click.slick", e.clickHandler),
                t(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
                t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
                t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        },
        e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        },
        e.prototype.cleanUpRows = function () {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(),
                t.removeAttr("style"),
                e.$slider.empty().append(t))
        },
        e.prototype.clickHandler = function (t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(),
                t.stopPropagation(),
                t.preventDefault())
        },
        e.prototype.destroy = function (e) {
            var i = this;
            i.autoPlayClear(),
                i.touchObject = {},
                i.cleanUpEvents(),
                t(".slick-cloned", i.$slider).detach(),
                i.$dots && i.$dots.remove(),
                i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
                i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
                i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                        t(this).attr("style", t(this).data("originalStyling"))
                    }).find("button").removeAttr("title"),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.detach(),
                    i.$list.detach(),
                    i.$slider.append(i.$slides)),
                i.cleanUpRows(),
                i.$slider.removeClass("slick-slider"),
                i.$slider.removeClass("slick-initialized"),
                i.$slider.removeClass("slick-dotted"),
                i.unslicked = !0,
                e || i.$slider.trigger("destroy", [i])
        },
        e.prototype.disableTransition = function (t) {
            var e = this,
                i = {};
            i[e.transitionType] = "",
                e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        },
        e.prototype.fadeSlide = function (t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                    zIndex: i.options.zIndex
                }),
                i.$slides.eq(t).animate({
                    opacity: 1
                }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
                i.$slides.eq(t).css({
                    opacity: 1,
                    zIndex: i.options.zIndex
                }),
                e && setTimeout(function () {
                    i.disableTransition(t),
                        e.call()
                }, i.options.speed))
        },
        e.prototype.fadeSlideOut = function (t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t),
                e.$slides.eq(t).css({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }))
        },
        e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides,
                e.unload(),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slidesCache.filter(t).appendTo(e.$slideTrack),
                e.reinit())
        },
        e.prototype.focusHandler = function () {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
                i.stopImmediatePropagation();
                var s = t(this);
                setTimeout(function () {
                    e.options.pauseOnFocus && (e.focussed = s.is(":focus"),
                        e.autoPlay())
                }, 0)
            })
        },
        e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            var t = this;
            return t.currentSlide
        },
        e.prototype.getDotCount = function () {
            var t = this,
                e = 0,
                i = 0,
                s = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;)
                    ++s,
                    e = i + t.options.slidesToScroll,
                    i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0)
                s = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;)
                    ++s,
                    e = i + t.options.slidesToScroll,
                    i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else
                s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return s - 1
        },
        e.prototype.getLeft = function (t) {
            var e, i, s, n = this,
                r = 0;
            return n.slideOffset = 0,
                i = n.$slides.first().outerHeight(!0),
                n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
                        r = i * n.options.slidesToShow * -1),
                    n.slideCount % n.options.slidesToScroll !== 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1,
                        r = (n.options.slidesToShow - (t - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
                        r = n.slideCount % n.options.slidesToScroll * i * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth,
                    r = (t + n.options.slidesToShow - n.slideCount) * i),
                n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
                    r = 0),
                n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0,
                    n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
                e = n.options.vertical === !1 ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + r,
                n.options.variableWidth === !0 && (s = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow),
                    e = n.options.rtl === !0 ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0,
                    n.options.centerMode === !0 && (s = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1),
                        e = n.options.rtl === !0 ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0,
                        e += (n.$list.width() - s.outerWidth()) / 2)),
                e
        },
        e.prototype.getOption = e.prototype.slickGetOption = function (t) {
            var e = this;
            return e.options[t]
        },
        e.prototype.getNavigableIndexes = function () {
            var t, e = this,
                i = 0,
                s = 0,
                n = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll,
                    s = -1 * e.options.slidesToScroll,
                    t = 2 * e.slideCount); t > i;)
                n.push(i),
                i = s + e.options.slidesToScroll,
                s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return n
        },
        e.prototype.getSlick = function () {
            return this
        },
        e.prototype.getSlideCount = function () {
            var e, i, s, n = this;
            return s = n.options.centerMode === !0 ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0,
                n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function (e, r) {
                        if(n.options.rtl === true) return (t(n.$slideTrack[0]).outerWidth() - r.offsetLeft) - s - t(r).outerWidth() / 2 > -1 * n.swipeLeft ? (i = r, !1) : void 0;
                        if(n.options.rtl === false) return r.offsetLeft - s + t(r).outerWidth() / 2 > -1 * n.swipeLeft ? (i = r, !1) : void 0;
                    }),
                    e = Math.abs(t(i).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        },
        e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        },
        e.prototype.init = function (e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"),
                    i.buildRows(),
                    i.buildOut(),
                    i.setProps(),
                    i.startLoad(),
                    i.loadSlider(),
                    i.initializeEvents(),
                    i.updateArrows(),
                    i.updateDots(),
                    i.checkResponsive(!0),
                    i.focusHandler()),
                e && i.$slider.trigger("init", [i]),
                i.options.accessibility === !0 && i.initADA(),
                i.options.autoplay && (i.paused = !1,
                    i.autoPlay())
        },
        e.prototype.initADA = function () {
            var e = this;
            e.$slideTrack.find(".slick-cloned").attr({
                    tabindex: "-1"
                }),
                e.$slideTrack.attr("data-role", "listbox"),
                e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (e) {
                    t(this).attr({
                        "data-role": "option"
                    })
                }),
                null !== e.$dots && e.$dots.attr("data-role", "tablist").find("li").each(function (i) {
                    t(this).attr({
                        "data-role": "presentation",
                        id: "slick-slide" + e.instanceUid + i
                    })
                }).find("button").attr("data-role", "button").end().closest("div").attr("data-role", "toolbar"),
                e.activateADA()
        },
        e.prototype.initArrowEvents = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, t.changeSlide),
                t.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                }, t.changeSlide))
        },
        e.prototype.initDotEvents = function () {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                    message: "index"
                }, e.changeSlide),
                e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        },
        e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        },
        e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, e.swipeHandler),
                e.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, e.swipeHandler),
                e.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, e.swipeHandler),
                e.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, e.swipeHandler),
                e.$list.on("click.slick", e.clickHandler),
                t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
                e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
                t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
                t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        },
        e.prototype.initUI = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
                    t.$nextArrow.show()),
                t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        },
        e.prototype.keyHandler = function (t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        },
        e.prototype.lazyLoad = function () {
            function e(e) {
                t("img[data-lazy]", e).each(function () {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        s = document.createElement("img");
                    s.onload = function () {
                            e.animate({
                                opacity: 0
                            }, 100, function () {
                                e.attr("src", i).animate({
                                        opacity: 1
                                    }, 200, function () {
                                        e.removeAttr("data-lazy").removeClass("slick-loading")
                                    }),
                                    o.$slider.trigger("lazyLoaded", [o, e, i])
                            })
                        },
                        s.onerror = function () {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                o.$slider.trigger("lazyLoadError", [o, e, i])
                        },
                        s.src = i
                })
            }
            var i, s, n, r, o = this;
            o.options.centerMode === !0 ? o.options.infinite === !0 ? (n = o.currentSlide + (o.options.slidesToShow / 2 + 1),
                    r = n + o.options.slidesToShow + 2) : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)),
                    r = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide,
                    r = Math.ceil(n + o.options.slidesToShow),
                    o.options.fade === !0 && (n > 0 && n--,
                        r <= o.slideCount && r++)),
                i = o.$slider.find(".slick-slide").slice(n, r),
                e(i),
                o.slideCount <= o.options.slidesToShow ? (s = o.$slider.find(".slick-slide"),
                    e(s)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (s = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow),
                    e(s)) : 0 === o.currentSlide && (s = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow),
                    e(s))
        },
        e.prototype.loadSlider = function () {
            var t = this;
            t.setPosition(),
                t.$slideTrack.css({
                    opacity: 1
                }),
                t.$slider.removeClass("slick-loading"),
                t.initUI(),
                "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        },
        e.prototype.next = e.prototype.slickNext = function () {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        },
        e.prototype.orientationChange = function () {
            var t = this;
            t.checkResponsive(),
                t.setPosition()
        },
        e.prototype.pause = e.prototype.slickPause = function () {
            var t = this;
            t.autoPlayClear(),
                t.paused = !0
        },
        e.prototype.play = e.prototype.slickPlay = function () {
            var t = this;
            t.autoPlay(),
                t.options.autoplay = !0,
                t.paused = !1,
                t.focussed = !1,
                t.interrupted = !1
        },
        e.prototype.postSlide = function (t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]),
                e.animating = !1,
                e.setPosition(),
                e.swipeLeft = null,
                e.options.autoplay && e.autoPlay(),
                e.options.accessibility === !0 && e.initADA())
        },
        e.prototype.prev = e.prototype.slickPrev = function () {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        },
        e.prototype.preventDefault = function (t) {
            t.preventDefault()
        },
        e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var i, s, n, r = this,
                o = t("img[data-lazy]", r.$slider);
            o.length ? (i = o.first(),
                s = i.attr("data-lazy"),
                n = document.createElement("img"),
                n.onload = function () {
                    i.attr("src", s).removeAttr("data-lazy").removeClass("slick-loading"),
                        r.options.adaptiveHeight === !0 && r.setPosition(),
                        r.$slider.trigger("lazyLoaded", [r, i, s]),
                        r.progressiveLazyLoad()
                },
                n.onerror = function () {
                    3 > e ? setTimeout(function () {
                        r.progressiveLazyLoad(e + 1)
                    }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                        r.$slider.trigger("lazyLoadError", [r, i, s]),
                        r.progressiveLazyLoad())
                },
                n.src = s) : r.$slider.trigger("allImagesLoaded", [r])
        },
        e.prototype.refresh = function (e) {
            var i, s, n = this;
            s = n.slideCount - n.options.slidesToShow,
                !n.options.infinite && n.currentSlide > s && (n.currentSlide = s),
                n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
                i = n.currentSlide,
                n.destroy(!0),
                t.extend(n, n.initials, {
                    currentSlide: i
                }),
                n.init(),
                e || n.changeSlide({
                    data: {
                        message: "index",
                        index: i
                    }
                }, !1)
        },
        e.prototype.registerBreakpoints = function () {
            var e, i, s, n = this,
                r = n.options.responsive || null;
            if ("array" === t.type(r) && r.length) {
                n.respondTo = n.options.respondTo || "window";
                for (e in r)
                    if (s = n.breakpoints.length - 1,
                        i = r[e].breakpoint,
                        r.hasOwnProperty(e)) {
                        for (; s >= 0;)
                            n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1),
                            s--;
                        n.breakpoints.push(i),
                            n.breakpointSettings[i] = r[e].settings
                    }
                n.breakpoints.sort(function (t, e) {
                    return n.options.mobileFirst ? t - e : e - t
                })
            }
        },
        e.prototype.reinit = function () {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
                e.slideCount = e.$slides.length,
                e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                e.setPosition(),
                e.focusHandler(),
                e.paused = !e.options.autoplay,
                e.autoPlay(),
                e.$slider.trigger("reInit", [e])
        },
        e.prototype.resize = function () {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
                e.windowDelay = window.setTimeout(function () {
                    e.windowWidth = t(window).width(),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition()
                }, 50))
        },
        e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
            var s = this;
            return "boolean" == typeof t ? (e = t,
                    t = e === !0 ? 0 : s.slideCount - 1) : t = e === !0 ? --t : t,
                s.slideCount < 1 || 0 > t || t > s.slideCount - 1 ? !1 : (s.unload(),
                    i === !0 ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(),
                    s.$slides = s.$slideTrack.children(this.options.slide),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slidesCache = s.$slides,
                    void s.reinit())
        },
        e.prototype.setCSS = function (t) {
            var e, i, s = this,
                n = {};
            s.options.rtl === !0 && (t = -t),
                e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px",
                i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px",
                n[s.positionProp] = t,
                s.transformsEnabled === !1 ? s.$slideTrack.css(n) : (n = {},
                    s.cssTransitions === !1 ? (n[s.animType] = "translate(" + e + ", " + i + ")",
                        s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + e + ", " + i + ", 0px)",
                        s.$slideTrack.css(n)))
        },
        e.prototype.setDimensions = function () {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                    padding: "0px " + t.options.centerPadding
                }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
                    t.options.centerMode === !0 && t.$list.css({
                        padding: t.options.centerPadding + " 0px"
                    })),
                t.listWidth = t.$list.width(),
                t.listHeight = t.$list.height(),
                t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
                    t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
                    t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        },
        e.prototype.setFade = function () {
            var e, i = this;
            i.$slides.each(function (s, n) {
                    e = i.slideWidth * s * -1,
                        i.options.rtl === !0 ? t(n).css({
                            position: "relative",
                            right: e,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0
                        }) : t(n).css({
                            position: "relative",
                            left: e,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0
                        })
                }),
                i.$slides.eq(i.currentSlide).css({
                    zIndex: i.options.zIndex - 1,
                    opacity: 1
                })
        },
        e.prototype.setHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        },
        e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e, i, s, n, r, o = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (s = arguments[0],
                    a = arguments[1],
                    r = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0],
                    n = arguments[1],
                    a = arguments[2],
                    "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")),
                "single" === r)
                o.options[s] = n;
            else if ("multiple" === r)
                t.each(s, function (t, e) {
                    o.options[t] = e
                });
            else if ("responsive" === r)
                for (i in n)
                    if ("array" !== t.type(o.options.responsive))
                        o.options.responsive = [n[i]];
                    else {
                        for (e = o.options.responsive.length - 1; e >= 0;)
                            o.options.responsive[e].breakpoint === n[i].breakpoint && o.options.responsive.splice(e, 1),
                            e--;
                        o.options.responsive.push(n[i])
                    }
            a && (o.unload(),
                o.reinit())
        },
        e.prototype.setPosition = function () {
            var t = this;
            t.setDimensions(),
                t.setHeight(),
                t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
                t.$slider.trigger("setPosition", [t])
        },
        e.prototype.setProps = function () {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left",
                "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0),
                t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
                void 0 !== e.OTransform && (t.animType = "OTransform",
                    t.transformType = "-o-transform",
                    t.transitionType = "OTransition",
                    void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                void 0 !== e.MozTransform && (t.animType = "MozTransform",
                    t.transformType = "-moz-transform",
                    t.transitionType = "MozTransition",
                    void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
                    t.transformType = "-webkit-transform",
                    t.transitionType = "webkitTransition",
                    void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                void 0 !== e.msTransform && (t.animType = "msTransform",
                    t.transformType = "-ms-transform",
                    t.transitionType = "msTransition",
                    void 0 === e.msTransform && (t.animType = !1)),
                void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform",
                    t.transformType = "transform",
                    t.transitionType = "transition"),
                t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        },
        e.prototype.setSlideClasses = function (t) {
            var e, i, s, n, r = this;
            i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current"),
                //r.$slides.eq(t).addClass("slick-current").attr("tabindex", "0"),
                r.$slides.eq(t).addClass("slick-current"),
                r.options.centerMode === !0 ? (e = Math.floor(r.options.slidesToShow / 2),
                    r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active") : (s = r.options.slidesToShow + t,
                            i.slice(s - e + 1, s + e + 2).addClass("slick-active")),
                        0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")),
                    r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active") : i.length <= r.options.slidesToShow ? i.addClass("slick-active") : (n = r.slideCount % r.options.slidesToShow,
                    s = r.options.infinite === !0 ? r.options.slidesToShow + t : t,
                    r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(s - (r.options.slidesToShow - n), s + n).addClass("slick-active") : i.slice(s, s + r.options.slidesToShow).addClass("slick-active")),
                "ondemand" === r.options.lazyLoad && r.lazyLoad()
        },
        e.prototype.setupInfinite = function () {
            var e, i, s, n = this;
            if (n.options.fade === !0 && (n.options.centerMode = !1),
                n.options.infinite === !0 && n.options.fade === !1 && (i = null,
                    n.slideCount > n.options.slidesToShow)) {
                for (s = n.options.centerMode === !0 ? n.options.slidesToShow + 1 : n.options.slidesToShow,
                    e = n.slideCount; e > n.slideCount - s; e -= 1)
                    i = e - 1,
                    t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; s > e; e += 1)
                    i = e,
                    t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    t(this).attr("id", "")
                })
            }
        },
        e.prototype.interrupt = function (t) {
            var e = this;
            t || e.autoPlay(),
                e.interrupted = t
        },
        e.prototype.selectHandler = function (e) {
            var i = this,
                s = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                n = parseInt(s.attr("data-slick-index"));
            return n || (n = 0),
                i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(n),
                    void i.asNavFor(n)) : void i.slideHandler(n)
        },
        e.prototype.slideHandler = function (t, e, i) {
            var s, n, r, o, a, l = null,
                h = this;
            return e = e || !1,
                h.animating === !0 && h.options.waitForAnimate === !0 || h.options.fade === !0 && h.currentSlide === t || h.slideCount <= h.options.slidesToShow ? void 0 : (e === !1 && h.asNavFor(t),
                    s = t,
                    l = h.getLeft(s),
                    o = h.getLeft(h.currentSlide),
                    h.currentLeft = null === h.swipeLeft ? o : h.swipeLeft,
                    h.options.infinite === !1 && h.options.centerMode === !1 && (0 > t || t > h.getDotCount() * h.options.slidesToScroll) ? void(h.options.fade === !1 && (s = h.currentSlide,
                        i !== !0 ? h.animateSlide(o, function () {
                            h.postSlide(s)
                        }) : h.postSlide(s))) : h.options.infinite === !1 && h.options.centerMode === !0 && (0 > t || t > h.slideCount - h.options.slidesToScroll) ? void(h.options.fade === !1 && (s = h.currentSlide,
                        i !== !0 ? h.animateSlide(o, function () {
                            h.postSlide(s)
                        }) : h.postSlide(s))) : (h.options.autoplay && clearInterval(h.autoPlayTimer),
                        n = 0 > s ? h.slideCount % h.options.slidesToScroll !== 0 ? h.slideCount - h.slideCount % h.options.slidesToScroll : h.slideCount + s : s >= h.slideCount ? h.slideCount % h.options.slidesToScroll !== 0 ? 0 : s - h.slideCount : s,
                        h.animating = !0,
                        h.$slider.trigger("beforeChange", [h, h.currentSlide, n]),
                        r = h.currentSlide,
                        h.currentSlide = n,
                        h.setSlideClasses(h.currentSlide),
                        h.options.asNavFor && (a = h.getNavTarget(),
                            a = a.slick("getSlick"),
                            a.slideCount <= a.options.slidesToShow && a.setSlideClasses(h.currentSlide)),
                        h.updateDots(),
                        h.updateArrows(),
                        h.options.fade === !0 ? (i !== !0 ? (h.fadeSlideOut(r),
                                h.fadeSlide(n, function () {
                                    h.postSlide(n)
                                })) : h.postSlide(n),
                            void h.animateHeight()) : void(i !== !0 ? h.animateSlide(l, function () {
                            h.postSlide(n)
                        }) : h.postSlide(n))))
        },
        e.prototype.startLoad = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
                    t.$nextArrow.hide()),
                t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                t.$slider.addClass("slick-loading")
        },
        e.prototype.swipeDirection = function () {
            var t, e, i, s, n = this;
            return t = n.touchObject.startX - n.touchObject.curX,
                e = n.touchObject.startY - n.touchObject.curY,
                i = Math.atan2(e, t),
                s = Math.round(180 * i / Math.PI),
                0 > s && (s = 360 - Math.abs(s)),
                45 >= s && s >= 0 ? n.options.rtl === !1 ? "left" : "right" : 360 >= s && s >= 315 ? n.options.rtl === !1 ? "left" : "right" : s >= 135 && 225 >= s ? n.options.rtl === !1 ? "right" : "left" : n.options.verticalSwiping === !0 ? s >= 35 && 135 >= s ? "down" : "up" : "vertical"
        },
        e.prototype.swipeEnd = function (t) {
            var e, i, s = this;
            if (s.dragging = !1,
                s.interrupted = !1,
                s.shouldClick = s.touchObject.swipeLength > 10 ? !1 : !0,
                void 0 === s.touchObject.curX)
                return !1;
            if (s.touchObject.edgeHit === !0 && s.$slider.trigger("edge", [s, s.swipeDirection()]),
                s.touchObject.swipeLength >= s.touchObject.minSwipe) {
                switch (i = s.swipeDirection()) {
                    case "left":
                    case "down":
                        e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(),
                            s.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(),
                            s.currentDirection = 1
                }
                "vertical" != i && (s.slideHandler(e),
                    s.touchObject = {},
                    s.$slider.trigger("swipe", [s, i]))
            } else
                s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide),
                    s.touchObject = {})
        },
        e.prototype.swipeHandler = function (t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse")))
                switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
                    e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
                    e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                    t.data.action) {
                    case "start":
                        e.swipeStart(t);
                        break;
                    case "move":
                        e.swipeMove(t);
                        break;
                    case "end":
                        e.swipeEnd(t)
                }
        },
        e.prototype.swipeMove = function (t) {
            var e, i, s, n, r, o = this;
            return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
                !o.dragging || r && 1 !== r.length ? !1 : (e = o.getLeft(o.currentSlide),
                    o.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX,
                    o.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY,
                    o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))),
                    o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))),
                    i = o.swipeDirection(),
                    "vertical" !== i ? (void 0 !== t.originalEvent && o.touchObject.swipeLength > 4 && t.preventDefault(),
                        n = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1),
                        o.options.verticalSwiping === !0 && (n = o.touchObject.curY > o.touchObject.startY ? 1 : -1),
                        s = o.touchObject.swipeLength,
                        o.touchObject.edgeHit = !1,
                        o.options.infinite === !1 && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (s = o.touchObject.swipeLength * o.options.edgeFriction,
                            o.touchObject.edgeHit = !0),
                        o.options.vertical === !1 ? o.swipeLeft = e + s * n : o.swipeLeft = e + s * (o.$list.height() / o.listWidth) * n,
                        o.options.verticalSwiping === !0 && (o.swipeLeft = e + s * n),
                        o.options.fade === !0 || o.options.touchMove === !1 ? !1 : o.animating === !0 ? (o.swipeLeft = null,
                            !1) : void o.setCSS(o.swipeLeft)) : void 0)
        },
        e.prototype.swipeStart = function (t) {
            var e, i = this;
            return i.interrupted = !0,
                1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
                    !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
                    i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
                    i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
                    void(i.dragging = !0))
        },
        e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var t = this;
            null !== t.$slidesCache && (t.unload(),
                t.$slideTrack.children(this.options.slide).detach(),
                t.$slidesCache.appendTo(t.$slideTrack),
                t.reinit())
        },
        e.prototype.unload = function () {
            var e = this;
            t(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").css("width", "")
        },
        e.prototype.unslick = function (t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]),
                e.destroy()
        },
        e.prototype.updateArrows = function () {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2),
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        },
        e.prototype.updateDots = function () {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").find("button").removeAttr("title"),
                t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").find("button").attr("title", "selected"))
        },
        e.prototype.visibility = function () {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        },
        t.fn.slick = function () {
            var t, i, s = this,
                n = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                o = s.length;
            for (t = 0; o > t; t++)
                if ("object" == typeof n || "undefined" == typeof n ? s[t].slick = new e(s[t], n) : i = s[t].slick[n].apply(s[t].slick, r),
                    "undefined" != typeof i)
                    return i;
            return s
        }
}),

//canvas plugin
function (t) {
    if ("function" == typeof define && define.amd)
        define(["jQuery"], t);
    else if ("object" == typeof module && module.exports) {
        var e = require("jQuery");
        t(e),
            module.exports = e
    } else
        t(jQuery)
}(function (t) {
    function e(t) {
        this.init(t)
    }
    e.prototype = {
            value: 0,
            size: 100,
            startAngle: -Math.PI,
            thickness: "auto",
            fill: {
                gradient: ["#3aeabb", "#fdd250"]
            },
            emptyFill: "rgba(0, 0, 0, .1)",
            animation: {
                duration: 400,
                easing: "circleProgressEasing"
            },
            animationStartValue: 0,
            reverse: !1,
            lineCap: "butt",
            insertMode: "prepend",
            constructor: e,
            el: null,
            canvas: null,
            ctx: null,
            radius: 0,
            arcFill: null,
            lastFrameValue: 0,
            init: function (e) {
                t.extend(this, e),
                    this.radius = this.size / 2,
                    this.initWidget(),
                    this.initFill(),
                    this.draw(),
                    this.el.trigger("circle-inited")
            },
            initWidget: function () {
                this.canvas || (this.canvas = t("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
                var e = this.canvas;
                if (e.width = this.size,
                    e.height = this.size,
                    this.ctx = e.getContext("2d"),
                    window.devicePixelRatio > 1) {
                    var i = window.devicePixelRatio;
                    e.style.width = e.style.height = this.size + "px",
                        e.width = e.height = this.size * i,
                        this.ctx.scale(i, i)
                }
            },
            initFill: function () {
                function e() {
                    var e = t("<canvas>")[0];
                    e.width = i.size,
                        e.height = i.size,
                        e.getContext("2d").drawImage(u, 0, 0, r, r),
                        i.arcFill = i.ctx.createPattern(e, "no-repeat"),
                        i.drawFrame(i.lastFrameValue)
                }
                var i = this,
                    s = this.fill,
                    n = this.ctx,
                    r = this.size;
                if (!s)
                    throw Error("The fill is not specified!");
                if ("string" == typeof s && (s = {
                        color: s
                    }),
                    s.color && (this.arcFill = s.color),
                    s.gradient) {
                    var o = s.gradient;
                    if (1 == o.length)
                        this.arcFill = o[0];
                    else if (o.length > 1) {
                        for (var a = s.gradientAngle || 0, l = s.gradientDirection || [r / 2 * (1 - Math.cos(a)), r / 2 * (1 + Math.sin(a)), r / 2 * (1 + Math.cos(a)), r / 2 * (1 - Math.sin(a))], h = n.createLinearGradient.apply(n, l), c = 0; c < o.length; c++) {
                            var p = o[c],
                                d = c / (o.length - 1);
                            t.isArray(p) && (d = p[1],
                                    p = p[0]),
                                h.addColorStop(d, p)
                        }
                        this.arcFill = h
                    }
                }
                if (s.image) {
                    var u;
                    s.image instanceof Image ? u = s.image : (u = new Image,
                            u.src = s.image),
                        u.complete ? e() : u.onload = e
                }
            },
            draw: function () {
                this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
            },
            drawFrame: function (t) {
                this.lastFrameValue = t,
                    this.ctx.clearRect(0, 0, this.size, this.size),
                    this.drawEmptyArc(t),
                    this.drawArc(t)
            },
            drawArc: function (t) {
                if (0 !== t) {
                    var e = this.ctx,
                        i = this.radius,
                        s = this.getThickness(),
                        n = this.startAngle;
                    e.save(),
                        e.beginPath(),
                        this.reverse ? e.arc(i, i, i - s / 2, n - 2 * Math.PI * t, n) : e.arc(i, i, i - s / 2, n, n + 2 * Math.PI * t),
                        e.lineWidth = s,
                        e.lineCap = this.lineCap,
                        e.strokeStyle = this.arcFill,
                        e.stroke(),
                        e.restore()
                }
            },
            drawEmptyArc: function (t) {
                var e = this.ctx,
                    i = this.radius,
                    s = this.getThickness(),
                    n = this.startAngle;
                1 > t && (e.save(),
                    e.beginPath(),
                    0 >= t ? e.arc(i, i, i - s / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(i, i, i - s / 2, n, n - 2 * Math.PI * t) : e.arc(i, i, i - s / 2, n + 2 * Math.PI * t, n),
                    e.lineWidth = s,
                    e.strokeStyle = this.emptyFill,
                    e.stroke(),
                    e.restore())
            },
            drawAnimated: function (e) {
                var i = this,
                    s = this.el,
                    n = t(this.canvas);
                n.stop(!0, !1),
                    s.trigger("circle-animation-start"),
                    n.css({
                        animationProgress: 0
                    }).animate({
                        animationProgress: 1
                    }, t.extend({}, this.animation, {
                        step: function (t) {
                            var n = i.animationStartValue * (1 - t) + e * t;
                            i.drawFrame(n),
                                s.trigger("circle-animation-progress", [t, n])
                        }
                    })).promise().always(function () {
                        s.trigger("circle-animation-end")
                    })
            },
            getThickness: function () {
                return t.isNumeric(this.thickness) ? this.thickness : this.size / 14
            },
            getValue: function () {
                return this.value
            },
            setValue: function (t) {
                this.animation && (this.animationStartValue = this.lastFrameValue),
                    this.value = t,
                    this.draw()
            }
        },
        t.circleProgress = {
            defaults: e.prototype
        },
        t.easing.circleProgressEasing = function (t) {
            return .5 > t ? (t = 2 * t,
                .5 * t * t * t) : (t = 2 - 2 * t,
                1 - .5 * t * t * t)
        },
        t.fn.circleProgress = function (i, s) {
            var n = "circle-progress",
                r = this.data(n);
            if ("widget" == i) {
                if (!r)
                    throw Error('Calling "widget" method on not initialized instance is forbidden');
                return r.canvas
            }
            if ("value" == i) {
                if (!r)
                    throw Error('Calling "value" method on not initialized instance is forbidden');
                if ("undefined" == typeof s)
                    return r.getValue();
                var o = arguments[1];
                return this.each(function () {
                    t(this).data(n).setValue(o)
                })
            }
            return this.each(function () {
                var s = t(this),
                    r = s.data(n),
                    o = t.isPlainObject(i) ? i : {};
                if (r)
                    r.init(o);
                else {
                    var a = t.extend({}, s.data());
                    "string" == typeof a.fill && (a.fill = JSON.parse(a.fill)),
                        "string" == typeof a.animation && (a.animation = JSON.parse(a.animation)),
                        o = t.extend(a, o),
                        o.el = s,
                        r = new e(o),
                        s.data(n, r)
                }
            })
        }
}),
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,J="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function L(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===J||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}L.fn=l.prototype,L.Class=l,L.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),L(t).is(r))n.apply(t,a);else for(var i=L(t).parents(),s=0;s<i.length;s+=1)L(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s||(s=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new J.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===J?J.scrollY:e.scrollTop,n=e===J?J.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return J.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=L(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===J)return i===J;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a;for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=f.createElement("div");for(i.innerHTML=e,a=i.childNodes.length-1;0<=a;a-=1)this[t].insertBefore(i.childNodes[a],this[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&L(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&L(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?L(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return L(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?L(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return L(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&L(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=L(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?J.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){L.fn[e]=t[e]});var e,a,i,s,ee={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=J.getComputedStyle(e,null);return J.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new J.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=J.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=J.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||J.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(ee.isObject(a[l])&&ee.isObject(s[l])?ee.extend(a[l],s[l]):!ee.isObject(a[l])&&ee.isObject(s[l])?(a[l]={},ee.extend(a[l],s[l])):a[l]=s[l])}}return a}},te=(i=f.createElement("div"),{touch:J.Modernizr&&!0===J.Modernizr.touch||!!(0<J.navigator.maxTouchPoints||"ontouchstart"in J||J.DocumentTouch&&f instanceof J.DocumentTouch),pointerEvents:!!(J.navigator.pointerEnabled||J.PointerEvent||"maxTouchPoints"in J.navigator&&0<J.navigator.maxTouchPoints),prefixedPointerEvents:!!J.navigator.msPointerEnabled,transition:(a=i.style,"transition"in a||"webkitTransition"in a||"MozTransition"in a),transforms3d:J.Modernizr&&!0===J.Modernizr.csstransforms3d||(e=i.style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=i.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in J||"WebkitMutationObserver"in J,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});J.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in J}),I={isIE:!!J.navigator.userAgent.match(/Trident/g)||!!J.navigator.userAgent.match(/MSIE/g),isEdge:!!J.navigator.userAgent.match(/Edge/g),isSafari:(s=J.navigator.userAgent.toLowerCase(),0<=s.indexOf("safari")&&s.indexOf("chrome")<0&&s.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)},n=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},o={components:{configurable:!0}};n.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},n.prototype.once=function(a,i,e){var s=this;if("function"!=typeof i)return s;function r(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];i.apply(s,e),s.off(a,r),r.f7proxy&&delete r.f7proxy}return r.f7proxy=i,s.on(a,r,e)},n.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].length&&s.eventsListeners[a].forEach(function(e,t){(e===i||e.f7proxy&&e.f7proxy===i)&&s.eventsListeners[a].splice(t,1)})}),s},n.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&("string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),s=r):(a=e[0].events,i=e[0].data,s=e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},n.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&ee.extend(a,t.params)})},n.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},o.components.set=function(e){this.use&&this.use(e)},n.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+ee.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},n.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(n,o);var d={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),ee.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,T;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=x/S,M=Math.floor(d/t.slidesPerColumn),z=0;z<d;z+=1){T=0;var P=l.eq(z);if(1<t.slidesPerColumn){var k=void 0,$=void 0,L=void 0;"column"===t.slidesPerColumnFill?(L=z-($=Math.floor(z/S))*S,(M<$||$===M&&L===S-1)&&S<=(L+=1)&&(L=0,$+=1),k=$+L*x/S,P.css({"-webkit-box-ordinal-group":k,"-moz-box-ordinal-group":k,"-ms-flex-order":k,"-webkit-order":k,order:k})):$=z-(L=Math.floor(z/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==L&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",L)}if("none"!==P.css("display")){if("auto"===t.slidesPerView){var I=J.getComputedStyle(P[0],null),D=P[0].style.transform,O=P[0].style.webkitTransform;if(D&&(P[0].style.transform="none"),O&&(P[0].style.webkitTransform="none"),t.roundLengths)T=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0);else if(e.isHorizontal()){var A=parseFloat(I.getPropertyValue("width")),H=parseFloat(I.getPropertyValue("padding-left")),N=parseFloat(I.getPropertyValue("padding-right")),G=parseFloat(I.getPropertyValue("margin-left")),B=parseFloat(I.getPropertyValue("margin-right")),X=I.getPropertyValue("box-sizing");T=X&&"border-box"===X?A+G+B:A+H+N+G+B}else{var Y=parseFloat(I.getPropertyValue("height")),V=parseFloat(I.getPropertyValue("padding-top")),F=parseFloat(I.getPropertyValue("padding-bottom")),R=parseFloat(I.getPropertyValue("margin-top")),q=parseFloat(I.getPropertyValue("margin-bottom")),W=I.getPropertyValue("box-sizing");T=W&&"border-box"===W?Y+R+q:Y+V+F+R+q}D&&(P[0].style.transform=D),O&&(P[0].style.webkitTransform=O),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),l[z]&&(e.isHorizontal()?l[z].style.width=T+"px":l[z].style.height=T+"px");l[z]&&(l[z].swiperSlideSize=T),u.push(T),t.centeredSlides?(b=b+T/2+w/2+g,0===w&&0!==z&&(b=b-i/2-g),0===z&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+T+g),e.virtualSize+=T+g,w=T,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),te.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(T+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){E=[];for(var j=0;j<p.length;j+=1){var U=p[j];t.roundLengths&&(U=Math.floor(U)),p[j]<e.virtualSize+p[0]&&E.push(U)}p=E}if(!t.centeredSlides){E=[];for(var K=0;K<p.length;K+=1){var _=p[K];t.roundLengths&&(_=Math.floor(_)),p[K]<=e.virtualSize-i&&E.push(_)}p=E,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),t.centerInsufficientSlides){var Z=0;if(u.forEach(function(e){Z+=e+(t.spaceBetween?t.spaceBetween:0)}),(Z-=t.spaceBetween)<i){var Q=(i-Z)/2;p.forEach(function(e,t){p[t]=e-Q}),c.forEach(function(e,t){c[t]=e+Q})}}ee.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size||0<p&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=L(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;0===i?n=r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,n=1<=s),ee.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);ee.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=L(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(L(i).attr("data-swiper-slide-index"),10):t.clickedIndex=L(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=ee.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(te.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var c={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r||(r=s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var u={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&te.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var h={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=L(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=L(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p)):("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p));t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),a.removeAttr("data-swiper-slide-index")}};var v={setGrabCursor:function(e){if(!(te.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){te.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var m={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&te.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&te.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&te.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&te.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},g=function(){var e=J.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:J.cordova||J.phonegap,phonegap:J.cordova||J.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=J.devicePixelRatio||1,t}();function b(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var w={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},y={update:d,translate:p,transition:c,slide:u,loop:h,grabCursor:v,manipulation:m,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&!(!a.isTouchEvent&&"button"in r&&0<r.button||a.isTouched&&a.isMoved))if(i.noSwiping&&L(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||L(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=J.screen.width-d)){if(ee.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=ee.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;L(r.target).is(a.formElements)&&(p=!1),f.activeElement&&L(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur();var c=p&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||c)&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(ee.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=ee.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&L(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d,p=s.currentX-s.startX,c=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(c,2))<t.params.threshold))if(void 0===a.isScrolling&&(t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=p*p+c*c&&(d=180*Math.atan2(Math.abs(c),Math.abs(p))/Math.PI,a.isScrolling=t.isHorizontal()?d>i.touchAngle:90-d>i.touchAngle)),a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?p:c;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:ee.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=ee.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=ee.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=ee.now(),ee.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<ee.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-E&&(w=t.maxTranslate()-E),y=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>E&&(w=t.minTranslate()+E),y=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&T?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?p>=o[P]&&p<o[P+i.slidesPerGroup]&&(z=o[(M=P)+i.slidesPerGroup]-o[P]):p>=o[P]&&(M=P,z=o[o.length-1]-o[o.length-2]);var k=(p-o[M])/z;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(k>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(k>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var o=!("touchstart"!==a.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,te.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!te.touch&&g.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var o=!("onTouchStart"!==a.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!te.touch&&g.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var l=o||e.originalParams,d=l.direction&&l.direction!==s.direction,p=s.loop&&(l.slidesPerView!==s.slidesPerView||d);d&&a&&e.changeDirection(),ee.extend(e.params,l),ee.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,p&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];this.params.breakpointsInverse?s<=J.innerWidth&&(t=s):s>=J.innerWidth&&!t&&(t=s)}return t||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push("initialized"),s.push(a.direction),a.freeMode&&s.push("free-mode"),te.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),g.android&&s.push("android"),g.ios&&s.push("ios"),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new J.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},x={},T=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];1===a.length&&a[0].constructor&&a[0].constructor===Object?s=a[0]:(t=(e=a)[0],s=e[1]),s||(s={}),s=ee.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(y).forEach(function(t){Object.keys(y[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=y[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i||null===i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=ee.extend({},w);r.useModulesParams(n),r.params=ee.extend({},n,x,s),r.originalParams=ee.extend({},r.params),r.passedParams=ee.extend({},s);var o=(r.$=L)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=ee.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return ee.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:L(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],te.pointerEvents?p=["pointerdown","pointermove","pointerup"]:te.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},te.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:ee.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.changeDirection=function(a,e){void 0===e&&(e=!0);var t=this,i=t.params.direction;return a||(a="horizontal"===i?"vertical":"horizontal"),a===i||"horizontal"!==a&&"vertical"!==a||("vertical"===i&&(t.$el.removeClass(t.params.containerModifierClass+"vertical wp8-vertical").addClass(""+t.params.containerModifierClass+a),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a)),"horizontal"===i&&(t.$el.removeClass(t.params.containerModifierClass+"horizontal wp8-horizontal").addClass(""+t.params.containerModifierClass+a),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a)),t.params.direction=a,t.slides.each(function(e,t){"vertical"===a?t.style.width="":t.style.height=""}),t.emit("changeDirection"),e&&t.update()),t},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),ee.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){ee.extend(x,e)},e.extendedDefaults.get=function(){return x},e.defaults.get=function(){return w},e.Class.get=function(){return u},e.$.get=function(){return L},Object.defineProperties(h,e),h}(n),E={name:"device",proto:{device:g},static:{device:g}},S={name:"support",proto:{support:te},static:{support:te}},C={name:"browser",proto:{browser:I},static:{browser:I}},M={name:"resize",create:function(){var e=this;ee.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){J.addEventListener("resize",this.resize.resizeHandler),J.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){J.removeEventListener("resize",this.resize.resizeHandler),J.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},z={func:J.MutationObserver||J.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new z.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};J.requestAnimationFrame?J.requestAnimationFrame(t):J.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(te.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},P={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){ee.extend(this,{observer:{init:z.init.bind(this),attach:z.attach.bind(this),destroy:z.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},k={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,b=Math.floor(i/2)+s+l):(g=i+(s-1)+o,b=s+l);var y=Math.max((w||0)-b,0),x=Math.min((w||0)+g,u.length-1),T=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function E(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(ee.extend(t.virtual,{from:y,to:x,offset:T,slidesGrid:t.slidesGrid}),p===y&&c===x&&!e)return t.slidesGrid!==h&&T!==f&&t.slides.css(m,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:y,to:x,slides:function(){for(var e=[],t=y;t<=x;t+=1)e.push(u[t]);return e}()}),void E();var S=[],C=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var M=p;M<=c;M+=1)(M<y||x<M)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove();for(var z=0;z<u.length;z+=1)y<=z&&z<=x&&(void 0===c||e?C.push(z):(c<z&&C.push(z),z<p&&S.push(z)));C.forEach(function(e){t.$wrapperEl.append(v(u[e],e))}),S.sort(function(e,t){return t-e}).forEach(function(e){t.$wrapperEl.prepend(v(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(m,T+"px"),E()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?L(i.renderSlide.call(a,e,t)):L('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,o={};Object.keys(n).forEach(function(e){o[parseInt(e,10)+s]=n[e]}),t.virtual.cache=o}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;0<=i;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},$={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;ee.extend(e,{virtual:{update:k.update.bind(e),appendSlide:k.appendSlide.bind(e),prependSlide:k.prependSlide.bind(e),removeSlide:k.removeSlide.bind(e),removeAllSlides:k.removeAllSlides.bind(e),renderSlide:k.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},D={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=J.innerWidth,o=J.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===s&&!a||37===s&&a)&&t.slideNext(),(37===s&&!a||39===s&&a)&&t.slidePrev()):(38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===s&&t.slideNext(),38===s&&t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(L(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(L(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},O={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){ee.extend(this,{keyboard:{enabled:!1,enable:D.enable.bind(this),disable:D.disable.bind(this),handle:D.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var A={lastScrollTime:ee.now(),event:-1<J.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=A.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=ee.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<ee.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new J.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!A.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(A.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!A.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.off(A.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},H={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=L(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=L(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",a.navigation.onNextClick),t&&0<t.length&&t.on("click",a.navigation.onPrevClick),ee.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},N={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=L(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=L(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=L(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),ee.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},G={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(te.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(te.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),ee.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-r.offset()[a.isHorizontal()?"left":"top"]-n/2)/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(l),a.setTranslate(l),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=ee.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!te.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!te.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};te.touch?(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!te.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!te.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};te.touch?(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=L(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=L('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),ee.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},B={setTransform:function(e,t){var a=this.rtl,i=L(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var a=L(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},X={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!te.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=X.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=L(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!te.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=X.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=te.gestures?e.scale*a.currentScale:i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!te.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!g.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(g.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=ee.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=ee.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=g.clickedSlide?L(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,a=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?L(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},Y={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=L(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?L(e).attr("data-swiper-slide-index"):L(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?L(t).attr("data-swiper-slide-index"):L(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},V={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new V.LinearSpline(t.slidesGrid,e.slidesGrid):new V.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof T&&n(r[o]);else r instanceof T&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&ee.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof T&&r(s[a]);else s instanceof T&&e!==s&&r(s)}},F={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=L(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=L(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},R={init:function(){var e=this;if(e.params.history){if(!J.history||!J.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=R.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||J.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||J.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=R.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=J.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=R.slugify(a.attr("data-history"));J.location.pathname.includes(e)||(i=e+"/"+i);var s=J.history.state;s&&s.value===i||(this.params.history.replaceState?J.history.replaceState({value:i},null,i):J.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(R.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},q={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var a=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===a)return;e.slideTo(a)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&J.history&&J.history.replaceState)J.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&L(J).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&L(J).off("hashchange",this.hashNavigation.onHashCange)}},W={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=ee.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},j={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},U={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(T),d.slideShadows){var E=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),z=d.shadowScale,P=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+z+", 1, "+P+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var $=I.isSafari||I.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},K={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},_={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(T),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(te.pointerEvents||te.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},Z={init:function(){var e=this,t=e.params.thumbs,a=e.constructor;t.swiper instanceof a?(e.thumbs.swiper=t.swiper,ee.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),ee.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):ee.isObject(t.swiper)&&(e.thumbs.swiper=new a(ee.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&L(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView;if(t.realIndex!==a.realIndex){var s,r=a.activeIndex;if(a.params.loop){a.slides.eq(r).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,r=a.activeIndex);var n=a.slides.eq(r).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),o=a.slides.eq(r).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r==r-n?r:o-r<r-n?o:n}else s=t.realIndex;a.visibleSlidesIndexes.indexOf(s)<0&&(a.params.centeredSlides?s=r<s?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:r<s&&(s=s-i+1),a.slideTo(s,e?0:void 0))}var l=1,d=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),a.slides.removeClass(d),a.params.loop)for(var p=0;p<l;p+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+p)+'"]').addClass(d);else for(var c=0;c<l;c+=1)a.slides.eq(t.realIndex+c).addClass(d)}}},Q=[E,S,C,M,P,$,O,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;ee.extend(e,{mousewheel:{enabled:!1,enable:A.enable.bind(e),disable:A.disable.bind(e),handle:A.handle.bind(e),handleMouseEnter:A.handleMouseEnter.bind(e),handleMouseLeave:A.handleMouseLeave.bind(e),lastScrollTime:ee.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;ee.extend(e,{navigation:{init:H.init.bind(e),update:H.update.bind(e),destroy:H.destroy.bind(e),onNextClick:H.onNextClick.bind(e),onPrevClick:H.onPrevClick.bind(e)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||L(e.target).is(r)||L(e.target).is(s)||(s?t=s.hasClass(a.params.navigation.hiddenClass):r&&(t=r.hasClass(a.params.navigation.hiddenClass)),!0===t?a.emit("navigationShow",a):a.emit("navigationHide",a),s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;ee.extend(e,{pagination:{init:N.init.bind(e),render:N.render.bind(e),update:N.update.bind(e),destroy:N.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!L(e.target).hasClass(t.params.pagination.bulletClass)&&(!0===t.pagination.$el.hasClass(t.params.pagination.hiddenClass)?t.emit("paginationShow",t):t.emit("paginationHide",t),t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;ee.extend(e,{scrollbar:{init:G.init.bind(e),destroy:G.destroy.bind(e),updateSize:G.updateSize.bind(e),setTranslate:G.setTranslate.bind(e),setTransition:G.setTransition.bind(e),enableDraggable:G.enableDraggable.bind(e),disableDraggable:G.disableDraggable.bind(e),setDragPosition:G.setDragPosition.bind(e),onDragStart:G.onDragStart.bind(e),onDragMove:G.onDragMove.bind(e),onDragEnd:G.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){ee.extend(this,{parallax:{setTransform:B.setTransform.bind(this),setTranslate:B.setTranslate.bind(this),setTransition:B.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var i=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){t[e]=X[e].bind(i)}),ee.extend(i,{zoom:t});var s=1;Object.defineProperty(i.zoom,"scale",{get:function(){return s},set:function(e){if(s!==e){var t=i.zoom.gesture.$imageEl?i.zoom.gesture.$imageEl[0]:void 0,a=i.zoom.gesture.$slideEl?i.zoom.gesture.$slideEl[0]:void 0;i.emit("zoomChange",e,t,a)}s=e}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){ee.extend(this,{lazy:{initialImageLoaded:!1,load:Y.load.bind(this),loadInSlide:Y.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;ee.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:V.getInterpolateFunction.bind(e),setTranslate:V.setTranslate.bind(e),setTransition:V.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;ee.extend(t,{a11y:{liveRegion:L('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(F).forEach(function(e){t.a11y[e]=F[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;ee.extend(e,{history:{init:R.init.bind(e),setHistory:R.setHistory.bind(e),setHistoryPopState:R.setHistoryPopState.bind(e),scrollToSlide:R.scrollToSlide.bind(e),destroy:R.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;ee.extend(e,{hashNavigation:{initialized:!1,init:q.init.bind(e),destroy:q.destroy.bind(e),setHash:q.setHash.bind(e),onHashCange:q.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;ee.extend(t,{autoplay:{running:!1,paused:!1,run:W.run.bind(t),start:W.start.bind(t),stop:W.stop.bind(t),pause:W.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){ee.extend(this,{fadeEffect:{setTranslate:j.setTranslate.bind(this),setTransition:j.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){ee.extend(this,{cubeEffect:{setTranslate:U.setTranslate.bind(this),setTransition:U.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){ee.extend(this,{flipEffect:{setTranslate:K.setTranslate.bind(this),setTransition:K.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){ee.extend(this,{coverflowEffect:{setTranslate:_.setTranslate.bind(this),setTransition:_.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){ee.extend(this,{thumbs:{swiper:null,init:Z.init.bind(this),update:Z.update.bind(this),onThumbClick:Z.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===T.use&&(T.use=T.Class.use,T.installModule=T.Class.installModule),T.use(Q),T}),
APPS_PLUGIN = !0;