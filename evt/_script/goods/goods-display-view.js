$.views.helpers({
    format: function(val) {
        return val.replace(/,/g, "")
    }
});
var listHeight;
(function($) {
    $(document).ready(function() {
        var param = {
            goodsId: $(goodsMain.vGoodsWrapId).data("goods-id"),
            goodsTpCd: $(goodsMain.vGoodsWrapId).data("goods-tp-cd"),
            adminYn: $(goodsMain.vGoodsWrapId).data("admin-yn"),
            adminPriceYn: $(goodsMain.vGoodsWrapId).data("admin-price-yn")
        };
        goodsMain.fnGetHtml(".itm-information", "goodsDetail", param, function() {
            var sticky = new Sticky(".itm-pd-picture");
            var sticky2 = new Sticky(".component-bar-inner");
            sticky.update();
            sticky2.update();
            goodsMain.fnNodeMove();
            goodsMain.fnCtaInit()
        });
        $("#container").addClass("pd-Container");
        $(".btn-direct").on("click", function() {
            if ($(this).is("#btnDirectSub")) $("#btnDirect", goodsMain.vMainWrapId).trigger("click");
            else if ($(this).is("#btnRegularSub")) $("#btnRegular", goodsMain.vMainWrapId).trigger("click");
            else if ($(this).is("#findStoreSub")) $(".btn-pd-find", goodsMain.vMainWrapId).eq(0).trigger("click");
            else if ($(this).is("#btnContactSub")) $(".btn-pd-contact", goodsMain.vMainWrapId).eq(0).trigger("click");
            else if ($(this).is("#btnCombineSub")) $("#btnCombine",
                goodsMain.vMainWrapId).trigger("click")
        }).on("mouseenter", function() {
            $(".price-clone-inner").append($(".itm-price div").html());
            $(".price-clone").addClass("opacity")
        }).on("mouseleave", function() {
            $(".price-clone").removeClass("opacity").children().children().remove()
        });
        var $review = $(".review-list-form .review-sort");
        $review.find(".drop-toggle").on("click", function() {
            $(this).toggleClass("dropopen")
        });
        $review.find(".dropBox a").on("click", function() {
            var selectTxt = $(this).find("label").text();
            $review.find(".drop-toggle").removeClass("dropopen");
            $(this).parent().prev().find("span").text(selectTxt)
        });
        var clickLeft = [0, 24, 56, 95, 135, 282];
        $(".anchor-nav .dot").on("click", function(e) {
            e.preventDefault();
            var offsetTop = $(".component-bar").height();
            var target = $("#" + $(this).attr("data-scroll"));
            var index = $(this).parent().index();
            $("html, body").stop().animate({
                scrollTop: target.offset().top - offsetTop
            }, 1E3);
            switch (index) {
                case index:
                    $(".anchor-nav").animate({
                        scrollLeft: clickLeft[index]
                    }, 500);
                    break
            }
            $(this).addClass("active");
            if (!$("#" + target[0].id + " .dropButton").hasClass("open")) $("#" +
                target[0].id + " .dropButton").click()
        });
        $("#btnRestoreSub").on("click", function(e) {
            var offsetTop = $(".restore-alarm").height();
            var target = $("#" + $(this).attr("data-scroll"));
            $("html, body").animate({
                scrollTop: target.offset().top - offsetTop
            }, 700)
        });
        $(window).scroll(function() {
            goodsMain.fnFindPosition();
            goodsMain.fnShowOrderMenu($(".itm-total-bottom", goodsMain.vGoodsWrapId))
        }).resize(function() {
            goodsMain.fnShowOrderMenu($(".itm-total-bottom", goodsMain.vGoodsWrapId));
            goodsMain.fnNodeMove()
        }).resize();
        shareInit($(goodsMain.vGoodsWrapId).data("kakaokey"),
            $(goodsMain.vGoodsWrapId).data("facebookid"));
        if ($(".award-box").length > 0) {
            var awardBox = $(".award-box"),
                awardList = $(".award-list"),
                awardItem = $(".award-item"),
                awardMore = awardBox.find(".btn-more");
            if (awardItem.length >= 3) awardList.addClass("col3");
            if (awardItem.length > 6) {
                awardControl();
                awardBox.find(".btn-more-box").show();
                awardMore.on("click", function() {
                    if (!awardBox.hasClass("is-active")) {
                        awardBox.addClass("is-active");
                        awardList.css("height", awardList.get(0).scrollHeight);
                        awardMore.blur()
                    } else {
                        awardList.css("height",
                            listHeight);
                        awardBox.removeClass("is-active")
                    }
                })
            }
        }
    });

    function awardControl() {
        listHeight = $(".award-item:eq(0)").outerHeight() + $(".award-item:eq(3)").outerHeight();
        $(".award-list").css("height", listHeight)
    }
    $(window).resize(function() {
        if ($(".award-item").length > 6) awardControl()
    });
    $(document).on("click", ".drop-component .dropButton", function() {
        $(this).next(".dropcontent").slideUp("fast");
        $(this).parent().find(".dropButton").removeClass("open");
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown("fast");
            $(this).addClass("open")
        }
    });
    $(document).on("click", ".compare-all .dropButton", function() {
        $(this).next().next(".dropcontent").slideUp("fast");
        $(this).parent().find(".dropButton").removeClass("open");
        if (!$(this).next().next().is(":visible")) {
            $(this).next().next().slideDown("fast");
            $(this).addClass("open")
        }
    });
    $(document).on("click", "#manualDropBtn", function() {
        if ($(this).hasClass("open") && $("#manualContents").html().trim().length == 0 && $(".itm-info-detail").length > 0) {
            var manualParam = {
                mdlCode: $(".itm-info-detail",
                    goodsMain.vGoodsWrapId).data("mdl-code"),
                goodsId: $("input[name=goodsId]").val(),
                goodsTpCd: $("input[name=goodsTpCd]").val(),
                manualLang: "KO",
                mdlNm: $(".itm-info-detail", goodsMain.vGoodsWrapId).data("mdl-nm")
            };
            goodsMain.fnGetHtml("#manualContents", "goodsManual", manualParam)
        }
    });
    $(document).on("click", "#specDropBtn", function() {
        if ($(this).hasClass("open") && $("#specContents").html().trim().length == 0 && $(".itm-info-detail").length > 0) {
            var specParam = {
                goodsId: $("input[name=goodsId]").val(),
                goodsTpCd: $("input[name=goodsTpCd]").val()
            };
            goodsMain.fnGetHtml("#specContents", "goodsSpec", specParam)
        }
    })
})(jQuery);