$(function() {
    $(window).resize(function() {
        var winw = $(window).width();
        if (winw > 800) {
            $(".pr-g-feature-benefit-pim, .bu-g-feature-benefit-pim").find(".js-feature-benefit-carousel").find("img").each(function() {
                var src = $(this).attr("data-src-pc");
                $(this).attr("src", src)
            });
            $(".pr-g-feature-benefit-pim, .bu-g-feature-benefit-pim").find(".js-img-src").each(function() {
                var src = $(this).attr("data-src-pc");
                $(this).attr("src", src)
            })
        } else {
            $(".pr-g-feature-benefit-pim, .bu-g-feature-benefit-pim").find(".js-feature-benefit-carousel").find("img").each(function() {
                var src =
                    $(this).attr("data-src-mobile");
                if (src != "") $(this).attr("src", src)
            });
            $(".pr-g-feature-benefit-pim, .bu-g-feature-benefit-pim").find(".js-img-src").each(function() {
                var src = $(this).attr("data-src-mobile");
                if (src != "") $(this).attr("src", src)
            })
        }
    }).resize()
});
$(document).ready(function() {
    try {
        $(".js-feature-benefit-carousel").slick({
            accessibility: true,
            speed: 500,
            useTransform: true,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            infinite: false,
            swipeToSlide: false,
            initialSlide: 0,
            variableWidth: false,
            responsive: [{
                breakpoint: 801,
                settings: {
                    variableWidth: false,
                    centerMode: false,
                    arrows: false
                }
            }]
        })
    } catch (t) {}
});
$(".js-feature-benefit-carousel").on("afterChange", function(event, slick, currentSlide, nextSlide) {
    var liIdx = $(this).parent().parent().find(".feature-benefit__disclaimer-wrap li");
    var actIdx = $(this).find(".slick-active").attr("data-slick-index");
    if (liIdx.length > 0) {
        liIdx.removeClass("slick-slide-active");
        liIdx.eq(actIdx).addClass("slick-slide-active")
    }
});
try {
    ! function(a, e) {
        "undefined" == typeof a.smg && (a.smg = {}), "undefined" == typeof a.smg.aem && (a.smg.aem = {}), "undefined" == typeof a.smg.aem.components && (a.smg.aem.components = {}), "undefined" == typeof a.smg.aem.components.marketing && (a.smg.aem.components.marketing = {});
        var t = (a.smg.aem.varStatic, a.smg.aem.util, a.smg.aem.customEvent, a.smg.aem.components.marketing);
        t.tab = function() {
            var t = function(t) {
                    var c = function(a) {
                            a.closest("li").attr("aria-selected", !0).addClass("s-tab-active").siblings("li").attr("aria-selected",
                                !1).removeClass("s-tab-active")
                        },
                        s = function(a, e) {
                            if (0 === a.closest(".ma-g-c-tab-feature--inside").length) a.closest(".ma-g-c-tab-feature__tab").find(".ma-g-c-tab-feature__tab-content").eq(e).css("display", "block").siblings(".ma-g-c-tab-feature__tab-content").css("display", "none");
                            else {
                                var t = 500,
                                    i = "s-active",
                                    c = a.closest(".ma-g-c-tab-feature"),
                                    s = c.find(".ma-g-c-tab-feature__tab-content"),
                                    o = c.find(".ma-g-c-tab-feature__tab-disclaimer");
                                o.removeClass("s-disclaimer-active").eq(e).addClass("s-disclaimer-active"),
                                    s.removeClass(i).eq(e).addClass(i), n(a), e ? (s.eq(0).animate({
                                    opacity: "0"
                                }, t), s.eq(1).animate({
                                    opacity: "1"
                                }, t)) : (s.eq(0).css("opacity", "1"), s.eq(1).animate({
                                    opacity: "0"
                                }, t))
                            }
                        };
                    e(".ma-g-c-tab-feature .ma-g-c-tab-feature__tab").each(function() {
                        var a = e(this).find(".ma-g-c-tab-feature__tab-btn").filter("button");
                        a.each(function(a, t) {
                            var n = e(t);
                            n.data("tabBtn-idx", a), 0 === a && (c(n), s(n, a))
                        }).promise().done(function() {
                            a.on("click", function(a) {
                                var t = e(a.currentTarget),
                                    n = t.data("tabBtn-idx");
                                c(t), s(t, n)
                            })
                        })
                    }),
                        e(a).on("resize orientationchange", i)
                },
                n = function(a) {
                    var e = a.closest(".ma-g-c-tab-feature"),
                        t = e.find(".ma-g-c-tab-feature__tab"),
                        n = e.find(".ma-g-c-tab-feature__tab-content.s-active").find("img").height() || "";
                    t.css("height", n)
                },
                i = function() {
                    e(".ma-g-c-tab-feature--inside").each(function() {
                        var a = e(this);
                        a.find(".ma-g-c-tab-feature__tab").height(a.find(".s-active").find("img").height())
                    })
                };
            return {
                init: t
            }
        }(), e(function() {
            t.tab.init(e("body")), "undefined" != typeof e("#featureTabEmptyYn").val() && "Y" !== e("#featureTabEmptyYn").val() &&
            "undefined" != typeof e("#featureTabAnchorId").val() && "" !== e("#featureTabAnchorId").val() && e(".pr-g-feature-benefit-tab-feature-pim, .bu-g-feature-benefit-tab-feature-pim").attr("id", e("#featureTabAnchorId").val())
        })
    }(window, window.jQuery)
} catch (e) {};