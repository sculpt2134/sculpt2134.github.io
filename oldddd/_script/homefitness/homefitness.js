var $mobileSize = 767;
$(function() {
    hmfNavUi();
    hmfTabUi.tab();
    hmfCalendarUi.init();
    hmfChartUi.init();
    hmfScrollItem();
    hmfAccess.hmfrainer();
    hmfComponentBar();
    hmfEtc.hmfImgNaviSlide()
});
$(document).ready(function() {
    hmfSlideUi.init()
});
$(window).resize(function() {
    hmfComponentBar();
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger("resizeEnd");
        var boxHeight = $(".todayClass").find(".inner").height();
        $(".todayClass").find(".hmf_more_box").css({
            "height": boxHeight
        })
    }, 300)
});
$(window).on("load", function() {
    var boxHeight = $(".todayClass").find(".inner").height();
    $(".todayClass").find(".hmf_more_box").css({
        "height": boxHeight
    });
    if ($("#container").children().is(".myhome_member")) {
        var $myOffset = $(".myhome_member").offset(),
            $navHeight = $(".hmf_nav_wrap").outerHeight();
        $("html, body").animate({
            scrollTop: $myOffset.top - $navHeight
        }, 400);
        $(".myhome_member").attr("tabindex", "0")
    }
});
var hmfTabUi = {
    tabAria: function(element) {
        if ($(element).length) $(element).each(function() {
            var isFirst = false;
            if ($(this).is("ul")) {
                if ($(this).attr("role") != "tablist") isFirst = true;
                if (isFirst) $(this).attr("role", "tablist")
            } else {
                if ($(this).find("ul").attr("role") != "tablist") isFirst = true;
                if (isFirst) $(this).find("ul").attr("role", "tablist")
            }
            $(this).find("li").each(function(f) {
                var _a = $(this).find("a");
                if (_a.length) {
                    if (isFirst) $(this).attr("role", "presentation");
                    if (isFirst) _a.attr("role", "tab");
                    if ($(this).hasClass("active")) _a.attr("aria-selected",
                        true);
                    else _a.attr("aria-selected", false)
                }
            })
        })
    },
    tab: function() {
        var $uiTab = $(".ui-tab");
        hmfTabUi.tabAria(".hmf_tabmenu");
        $(document).on("click", ".ui-tab a", function(e) {
            e.preventDefault();
            var $this = $(this),
                $closest = $this.closest(".ui-tab"),
                $isHash = $closest.hasClass("is_hash") ? true : false,
                $isFirst = $closest.data("first"),
                $href = $this.attr("href"),
                $target = $closest.data("target"),
                $winScrollTop = $(window).scrollTop();
            if ($($href).length) {
                if ($isFirst == true) $closest.data("first", false);
                if ($isHash == true) {
                    location.hash =
                        $href;
                    $(window).scrollTop($winScrollTop)
                }
                if ($this.closest(".fixed").length) {
                    var $scrollTop = $("#header").length ? $this.closest(".fixed").offset().top - $("#header").outerHeight() : $this.closest(".fixed").offset().top;
                    scrollUI.move($scrollTop)
                }
                if ($target == undefined) {
                    $($href).addClass("active").attr("aria-expanded", true).siblings(".hmf_tab_panel").attr("aria-expanded", false).removeClass("active");
                    if ($($href).find(".bottom_fixed").length) $($href).addClass("add_fixed_btn")
                } else {
                    $($target).attr("aria-expanded",
                        false).removeClass("active");
                    $($href).addClass("active").attr("aria-expanded", true)
                }
                $this.parent().addClass("active").siblings().removeClass("active").find("a").removeAttr("title");
                $this.attr("aria-selected", true).closest("li").siblings().find("[role=tab]").attr("aria-selected", false)
            } else console.error("대상 지정 오류! href값에 해당 id값을 넣어 주세요~")
        });
        var $hash = location.hash;
        if ($uiTab.length) $uiTab.each(function(e) {
            var isHash = false,
                isHashClk = "",
                tarAry = [],
                $isFirst = $(this).data("first");
            $(this).find("li").each(function(f) {
                var _a =
                        $(this).find("a"),
                    _aId = _a.attr("id"),
                    _href = _a.attr("href");
                if (_a.length) {
                    if (!_aId) _aId = "tab_btn_" + e + "_" + f;
                    tarAry.push(_href);
                    _a.attr({
                        "id": _aId,
                        "aria-controls": _href.substring(1)
                    });
                    $(_href).attr({
                        "role": "tabpanel",
                        "aria-labelledby": _aId
                    });
                    if (_href == $hash || $(_href).find($hash).length) {
                        isHash = true;
                        isHashClk = _a
                    }
                }
            });
            $(this).data("target", tarAry.join(","));
            if (isHash == false)
                if ($isFirst == undefined || $isFirst == true) {
                    $(this).data("first", true);
                    if ($(this).find(".active").length) $(this).find(".active").find("a").trigger("click");
                    else $(this).find("li").eq(0).find("a").trigger("click")
                } if (isHash == true) isHashClk.trigger("click")
        });
        $(document).on("change", ".hmf-rdo-tab input", function(e) {
            var $show = $(this).data("show"),
                $hide = $(this).closest(".hmf-rdo-tab").data("hide");
            if ($($hide).hasClass("hmf_rdo_panel")) $($hide).removeClass("show");
            else $($hide).hide();
            if ($($show).hasClass("hmf_rdo_panel")) $($show).addClass("show");
            else $($show).show()
        });
        if ($(".hmf-rdo-tab").length) $(".hmf-rdo-tab").each(function() {
            var tarAry = [];
            $(this).find("input[type=radio]").each(function() {
                var $tar =
                    $(this).data("show");
                if (tarAry.indexOf($tar) < 0 && !!$tar) tarAry.push($tar);
                if ($(this).prop("checked"))
                    if ($($tar).hasClass("hmf_rdo_panel")) $($tar).addClass("show");
                    else $($tar).show()
            });
            if ($(this).data("hide") == undefined) $(this).data("hide", tarAry.join(","))
        })
    }
};
var hmfNavUi = function() {
    $(".hmf_nav_menu_list > li.active > a, .hmf_nav_menu_list li.on").attr("title", "선택됨");
    $(document).on("mouseenter focus", ".hmf_nav_menu_list > li > a", function(e) {
        e.preventDefault();
        var $this = $(this),
            $thPrt = $this.parent("li");
        $thPrt.addClass("on").siblings().removeClass("on")
    });
    if ($(window).width() > $mobileSize) $(document).on("mouseleave focusout", ".hmf_nav_menu_list > li", function(e) {
        e.preventDefault();
        $(".hmf_nav_menu_list > li").removeClass("on")
    });
    $(window).on("load scroll resize",
        function(e) {
            e.preventDefault();
            var $lastScrollTop = 0,
                $delta = $("#header").outerHeight(),
                $delta2 = $("#header").outerHeight() + $(".hmfKeyVs").outerHeight(),
                $navbarHeight = $(".hmf_nav").outerHeight(),
                $this = $(this),
                $st = $this.scrollTop();
            if ($(".hmfKeyVs").length > 0) {
                if ($st > $delta2) $(".hmf_nav").addClass("fixed");
                else if ($st <= $lastScrollTop + $delta2 && $st <= $navbarHeight + $delta2) $(".hmf_nav").removeClass("fixed");
                $lastScrollTop = $st
            } else {
                if ($st > $delta) $(".hmf_nav").addClass("fixed");
                else if ($st <= $lastScrollTop + $delta &&
                    $st <= $navbarHeight + $delta) $(".hmf_nav").removeClass("fixed");
                $lastScrollTop = $st
            }
        })
};
var hmfSlideUi = {
    slideUiTow: function(element) {
        var tar = !!element ? element : ".hmf-ui-slick";
        if ($(tar).length > 0) $(tar).each(function(i) {
            var $this = $(this);
            var $slickOpts = {
                dots: false,
                infinite: false,
                speed: 400,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                responsive: [{
                    breakpoint: 1100,
                    settings: {
                        dots: false,
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        dots: false,
                        arrows: true,
                        variableWidth: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: "10px"
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        arrows: false,
                        variableWidth: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: "12px"
                    }
                }]
            };
            if ($this.hasClass("hmf-slk-center")) $this.slick($.extend($slickOpts, {
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1100,
                    settings: {
                        dots: false,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }));
            else if ($this.hasClass("hmf-list")) $this.slick($.extend($slickOpts, {
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 1100,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                    {
                        breakpoint: 800,
                        settings: {
                            dots: true,
                            arrows: false,
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            dots: true,
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: true,
                            centerMode: true,
                            centerPadding: "0"
                        }
                    }
                ]
            }));
            else $this.slick($slickOpts);
            if ($this.hasClass("hmf_tch_slider")) $(this).on("afterChange", function() {
                $(".hmf_tch_dtl_title h2").text($(".slick-current").attr("name"))
            })
        });
        var tar2 = !!element ? element : ".hmf-ui-slick2";
        if ($(tar2).length > 0) $(tar2).each(function(i) {
            var $this = $(this);
            var $slickOpts = {
                dots: false,
                infinite: false,
                speed: 400,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                responsive: [{
                    breakpoint: 1100,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        arrows: false,
                        variableWidth: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: "12px"
                    }
                }]
            };
            if ($this.hasClass("hmf-slk-num")) $this.on("init", function(event, slick) {
                var $thCnt = $this.siblings(".hmf_page_num").append('<div class="hmf_slick_counter"><strong class="current"></strong> / <span class="total"></span></div>');

                function pageCnt() {
                    if ($(window).width() > $mobileSize) {
                        $thCnt.find(".current").text(Math.ceil((slick.currentSlide + 1) / 3)).end().find(".total").text(Math.ceil(slick.slideCount / 3));
                        if (slick.slideCount / 3 <= 1) $this.siblings(".hmf_page_num").hide();
                        else $this.siblings(".hmf_page_num").show()
                    } else {
                        $thCnt.find(".current").text(slick.currentSlide + 1).end().find(".total").text(Math.ceil(slick.slideCount));
                        if (slick.slideCount <= 1) $this.siblings(".hmf_page_num").hide();
                        else $this.siblings(".hmf_page_num").show()
                    }
                }
                pageCnt();
                $(window).on("load, resize", function() {
                    pageCnt()
                })
            }).slick($.extend($slickOpts, {
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 800,
                    settings: {
                        dots: false,
                        centerMode: false,
                        variableWidth: false,
                        arrows: true,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        arrows: true,
                        variableWidth: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: "12px"
                    }
                }]
            })).on("beforeChange", function(event, slick, currentSlide, nextSlide) {
                if ($(window).width() > $mobileSize) $this.siblings(".hmf_page_num").find(".current").text(Math.ceil((nextSlide +
                    1) / 3));
                else $this.siblings(".hmf_page_num").find(".current").text(nextSlide + 1)
            });
            else $this.slick($slickOpts)
        });
        var tar = !!element ? element : ".hmf-ui-slick3";
        if ($(tar).length > 0) $(tar).each(function(i) {
            var $this = $(this);
            var $slickOpts = {
                dots: false,
                arrows: true,
                infinite: false,
                speed: 400,
                slidesToShow: 21,
                slidesToScroll: 21,
                responsive: [{
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 14,
                        slidesToScroll: 14
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 7
                    }
                }]
            };
            $this.slick($slickOpts)
        });
        var tar = !!element ? element :
            ".hmf-ui-slick4";
        if ($(tar).length > 0) $(tar).each(function(i) {
            var $this = $(this);
            var $slickOpts = {
                dots: true,
                arrows: true,
                infinite: false,
                speed: 400,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }]
            };
            $this.slick($slickOpts);
            var $slideLng = $this.find(".slick-slide").length;
            if ($slideLng < 4) $this.find(".slick-track").css("margin", "0")
        })
    },
    slideAuto: function(element) {
        var tar = !!element ?
            element : ".hmf-slide-auto";
        if ($(tar).length > 0) $(tar).each(function(i) {
            var $this = $(this);
            var slickOpts = {
                autoplay: true,
                focusOnSelect: true,
                dots: true,
                arrows: false,
                useCSS: false,
                easing: "easeInOutQuad",
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerMode: false
                    }
                }],
                autoplaySpeed: 6E3,
                pauseOnHover: false,
                pauseOnFocus: false,
                focusOnChange: false,
                appendDots: $(this).next(".hmf-slider-controls").find(".wrap-controls"),
                customPaging: function(slide,
                                       i) {
                    return ' <button type="button" class="page_num">' + (i + 1) + "번째 페이지</button>"
                }
            };
            if ($this.hasClass("hmf-slide-full")) $this.slick($.extend(slickOpts, {
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }));
            else if ($this.hasClass("todayClass")) {
                $this.slick($.extend(slickOpts, {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    adaptiveheight: false,
                    arrows: true,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                })).on("beforeChange afterChange init",
                    function() {
                        var boxHeight = $(this).find(".inner").height();
                        $(this).find(".hmf_more_box").css({
                            "height": boxHeight
                        })
                    });
                var $slideLng = $(".hmf-slide-auto .slick-slide").length;
                if ($(window).width() > $mobileSize) {
                    if ($slideLng < 3) $(".hmf-slider-controls").hide()
                } else if ($slideLng < 2) $(".hmf-slider-controls").hide()
            } else $this.slick(slickOpts);
            $(this).siblings().find(".slide-play").click(function() {
                $(this).parent().prev(".slick-slider").slick("slickPlay");
                $(this).parent().removeClass("paused");
                $(this).hide().siblings(".slide-pause").show()
            });
            $(this).siblings().find(".slide-pause").click(function() {
                $(this).parent().prev(".slick-slider").slick("slickPause");
                $(this).parent().addClass("paused");
                $(this).hide().siblings(".slide-play").show()
            })
        })
    },
    init: function() {
        hmfSlideUi.slideUiTow();
        hmfSlideUi.slideAuto()
    }
};
var hmfCalendarUi = {
    calendarCustom: function(el) {
        var $day = ".hmf_calendar a";
        $(document).on("click", $day, function() {
            var $this = $(this);
            $this.parents(".hmf_cld_box").addClass("selected").siblings().removeClass("selected")
        })
    },
    jqCalendar: function(element) {
        if ($(element).length > 0) $(element).multiDatesPicker({
            minDate: 0,
            dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        }).find(".ui-datepicker-today").attr("class", "").children("a").removeClass("ui-state-highlight ui-state-active")
    },
    init: function() {
        hmfCalendarUi.calendarCustom();
        hmfCalendarUi.jqCalendar(".hmf_datepicker")
    }
};
var hmfChartUi = {
    chartJsPie: function(element) {
        var $graphNum = $(element);
        if ($graphNum.length > 0) $graphNum.each(function() {
            var chart = new Chart("hmf-pie-graph", {
                type: "pie",
                data: {
                    labels: ["유연성", "근력", "체지방감소", "체력", "신체정렬"],
                    datasets: [{
                        data: [500, 200, 300, 600, 500],
                        backgroundColor: ["#4d9fff", "#8fc3ff", "#dde1ff", "#cbeff9", "#98e0f3"],
                        borderColor: ["#fff"],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false,
                        callbacks: {}
                    },
                    hover: {
                        animationDuration: 0,
                        mode: null
                    },
                    animation: {
                        duration: 500,
                        easing: "easeOutQuart",
                        onComplete: function() {
                            var ctx = this.chart.ctx;
                            var fontSize = 16;
                            var fontStyle = "normal";
                            Chart.defaults.global.defaultFontFamily = "SamsungOneKorean";
                            var fontFamily = Chart.defaults.global.defaultFontFamily;
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            ctx.textAlign = "center";
                            ctx.textBaseline = "bottom";
                            this.data.datasets.forEach(function(dataset) {
                                for (var i = 0; i < dataset.data.length; i++) {
                                    var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                                        total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                                        mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                                        start_angle = model.startAngle,
                                        end_angle = model.endAngle,
                                        mid_angle = start_angle + (end_angle - start_angle) / 2;
                                    var x = mid_radius * Math.cos(mid_angle);
                                    var y = mid_radius * Math.sin(mid_angle);
                                    ctx.fillStyle = "#000";
                                    if (i == 0) ctx.fillStyle = "#fff";
                                    var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
                                    ctx.fillText(percent, model.x + x, model.y + y + 10)
                                }
                            })
                        }
                    },
                    legendCallback: function(chart) {
                        var text = [];
                        text.push('<ul class="' + chart.id + '-legend">');
                        for (var i =
                            0; i < chart.data.datasets[0].data.length; i++) {
                            text.push('<li><div class="color"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></div><div class="txt"><span>');
                            if (chart.data.labels[i]) text.push(chart.data.labels[i]);
                            text.push("</span></div></li>")
                        }
                        text.push("</ul>");
                        return text.join("")
                    }
                }
            });
            document.getElementById("legend").innerHTML = chart.generateLegend()
        })
    },
    customChart: function(element) {
        $(document).on("click", element, function() {
            var $this = $(this);
            var $thisBarHt =
                $this.find(".bar").outerHeight();
            $this.find(".min").css({
                "bottom": $thisBarHt
            }).fadeIn(700);
            $this.parent(".hmf_bar_wrap").addClass("on").siblings().removeClass("on").find(".min").hide()
        });
        $(window).on("load scroll", function() {
            var $grapBarBox = $(".hmf_bar_wrap");
            if ($grapBarBox.length > 0) $grapBarBox.each(function() {
                var $this = $(this),
                    $thBar = $this.find(".bar"),
                    $graph = $thBar.data("height"),
                    $btmOfItem = $this.offset().top + $this.outerHeight() - 200,
                    $btmOfWin = $(window).scrollTop() + $(window).height();
                if ($btmOfWin >
                    $btmOfItem) $thBar.stop().animate({
                    "height": $graph + "%"
                }, 300, function() {
                    if ($(".hmf_bar_wrap").hasClass("on")) {
                        var $barHt = $(".hmf_bar_wrap.on .bar").outerHeight();
                        $(".hmf_bar_wrap.on .min").css({
                            "bottom": $barHt
                        }).fadeIn(500)
                    }
                });
                else if ($btmOfWin < $btmOfItem) {
                    $thBar.stop().animate({
                        "height": "0"
                    }, 300);
                    $(".hmf_bar_wrap.on .min").fadeOut(700)
                }
            })
        })
    },
    init: function() {
        hmfChartUi.customChart(".hmf_bar_wrap > a")
    }
};
var hmfScrollItem = function() {
    var $item = $(".fadeMove");
    itemMove();
    $(window).scroll(function() {
        itemMove()
    });

    function itemMove() {
        $item.each(function() {
            var $this = $(this),
                $btmOfItem = $this.offset().top + $this.outerHeight() - 100,
                $btmOfWin = $(window).scrollTop() + $(window).height();
            if ($btmOfWin > $btmOfItem) $this.addClass("in");
            else if ($btmOfWin < $btmOfItem) $this.removeClass("in")
        })
    }
};
var hmfAccess = {
    hmfrainer: function() {
        var $sldItem = $(".hmf_tch_wrap .item .m_link"),
            $btnLink = $(".hmf_tch_wrap .btn-underline");
        $sldItem.on("mouseover focusin", function() {
            var $this = $(this),
                $thItem = $this.parents(".item");
            $thItem.addClass("on").siblings().removeClass("on").find(".hmf_tch_sum").show();
            $thItem.find(".hmf_tch_sum").hide();
            if ($(window).width() < 1100) {
                $thItem.find(".hmf_tch_info").hide();
                $thItem.find(".hmf_tch_sum").show()
            }
        });
        $(".hmf_tch_wrap .item").on("mouseleave", function() {
            $(this).removeClass("on").find(".hmf_tch_sum").show()
        })
    }
};
var hmfEtc = {
    hmfImgNaviSlide: function() {
        var $slideTmb = $(".hmf-slide-thumb");
        if ($slideTmb.length) $slideTmb.each(function() {
            var $this = $(this),
                $imgArea = $this.find(".hmf-img-view"),
                $imgNavi = $this.find(".hmf-img-navi");
            $imgNavi.on("click", "a", function() {
                var $this = $(this),
                    $thImgsrc = $this.find("img").attr("src");
                $this.attr("title", "선택됨").parents("li").addClass("active").siblings().removeClass("active").find("a").removeAttr("title");
                $imgArea.find("img").attr("src", $thImgsrc)
            })
        })
    }
};

function hmfComponentBar() {
    var hmf_head_h = $(".hmf_nav").height();
    var hmf_sticky = new Sticky(".hmf_j_btmbar");
    if ($(".hmf_nav").length) $(".hmf_j_btmbar, .component-bar-inner").attr("data-margin-top", hmf_head_h)
};