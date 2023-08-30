var searchApp = {
    stickySearchbar: function() {
        return new Sticky(".sticty-searchbar-inner")
    },
    priceRange: function(minPrice, maxPrice) {
        minPrice = minPrice == undefined ? Number($(".box-range .range-price .min-range").text()) : minPrice;
        maxPrice = maxPrice == undefined ? Number($(".box-range .range-price .max-range").text()) : maxPrice;
        var priceRange = $(".box-range .price-range"),
            rangePrice = $(".box-range .range-price");
        priceRange.slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            step: 1,
            values: [minPrice, maxPrice],
            slide: function(event,
                            ui) {
                rangePrice.find(".min-range").text(ui.values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                rangePrice.find(".max-range").text(ui.values[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            }
        });
        rangePrice.find(".min-range").text(priceRange.slider("values", 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        rangePrice.find(".max-range").text(priceRange.slider("values", 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    },
    searchFilterControl: function() {
        var that = this,
            winW = $(window).width();
        if (winW >
            800) that.searchFilterPc();
        else that.searchFilterMo()
    },
    searchFilterPc: function() {
        var collectionName = $(".result-filter-wrap.is-mo,.result-filter-wrap.is-pc").attr("collection-name");
        $(".result-filter-wrap[collection-name='" + collectionName + "']").removeClass("is-pc is-mo is-active");
        $(".search-result-wrap[collection-name='" + collectionName + "'] .btn-filter-open").removeClass("is-active");
        $("body").removeClass("fixed-scroll");
        $(".page-dimmed-filter").hide()
    },
    searchFilterMo: function() {
        var collectionName =
            $(".result-filter-wrap.is-mo,.result-filter-wrap.is-pc").attr("collection-name");
        $(".result-filter-wrap[collection-name='" + collectionName + "']").removeClass("is-pc is-mo is-active");
        $(".page-dimmed-filter").fadeOut();
        $("body").removeClass("fixed-scroll");
        $(".search-result-wrap[collection-name='" + collectionName + "'] .btn-filter-open").removeClass("is-active")
    },
    reviewChange: function() {
        var winW = $(window).width();
        if (winW > 800) $(".review-list > li").each(function() {
            $(this).find(".review-con").before($(this).find(".review-thumb"))
        });
        else $(".review-list > li").each(function() {
            $(this).find(".review-thumb").appendTo($(this).find(".review-con"))
        })
    },
    searchClear: function() {
        var searchWrap = $("#container .search-box"),
            searchInp = searchWrap.find(".inp"),
            searchClear = searchWrap.find(".btn-inp-clear");
        searchInp.on("change keyup paste", function() {
            var val = $(this).val();
            if (val.length) searchClear.show();
            else searchClear.hide()
        })
    },
    eventListener: {
        relatedSearch: function() {
            $(".unified-result-related-wrap").toggleClass("active")
        },
        resultTabMenu: function() {
            var clickLeft = [0, 80, 160, 240, 320, 400, 480, 560, 640],
                index = $(this).parent().index();
            switch (index) {
                case index:
                    $(".conbox-unified-search .result-tab").animate({
                        scrollLeft: clickLeft[index]
                    }, 500);
                    break
            }
        },
        searchFilterOpen: function(e) {
            var that = searchApp,
                winW = $(window).width(),
                $target = $(e.target),
                collectionName = $target.attr("collection-name"),
                $filterTarget = $(".result-filter-wrap[collection-name='" + collectionName + "']");
            $(".btn-filter-open[collection-name='" + collectionName + "']").toggleClass("is-active");
            $(".btn-filter-open[collection-name='" +
                collectionName + "']").addClass("btn-filter-close");
            $filterTarget.toggleClass("is-active");
            if (winW > 800) {
                that.searchFilterPc();
                $filterTarget.toggleClass("is-pc")
            } else {
                that.searchFilterMo();
                $("body").addClass("fixed-scroll");
                if (!$("body").children().is(".page-dimmed-filter")) $("body").append("<div class='page-dimmed-filter'></div>");
                $(".page-dimmed-filter").show();
                $filterTarget.toggleClass("is-mo");
                if (device.isApp == true) $filterTarget.css("top", device.appHgt + "px")
            }
        },
        searchFilterClose: function(e) {
            var collectionName =
                $(".result-filter-wrap.is-mo,.result-filter-wrap.is-pc").attr("collection-name");
            $(".result-filter-wrap[collection-name='" + collectionName + "']").removeClass("is-pc is-mo is-active");
            $(".page-dimmed-filter").fadeOut();
            $("body").removeClass("fixed-scroll");
            $(".btn-filter-close[collection-name='" + collectionName + "']").removeClass("is-active");
            $(".btn-filter-close[collection-name='" + collectionName + "']").removeClass("btn-filter-close")
        },
        searchFilterItem: function() {
            $(this).stop().toggleClass("is-close");
            $(this).parents(".item").find(".cont").stop().slideToggle(200)
        },
        searchInpClear: function() {
            var searchWrap = $("#container .search-box"),
                searchInp = searchWrap.find(".inp"),
                searchClear = searchWrap.find(".btn-inp-clear");
            searchInp.val("");
            searchClear.hide()
        },
        btnTabStyle: function(e) {
            e.preventDefault();
            var id = $(this).attr("aria-controls");
            $(this).parents(".btn-style-fillbox").find("a").attr("aria-selected", "false");
            $(this).attr("aria-selected", "true");
            $(this).parents(".tabContent-fillbox-wrap").find(".tabContent-fillbox-each").hide();
            $("#" + id).show()
        },
        btnContentsMore: function(e) {
            e.preventDefault();
            var $target = $(e.target),
                tabName = $target.attr("tab-name");
            if (tabName == undefined) tabName = $($target.parent()).attr("tab-name");
            $("#" + tabName + " a").trigger("click");
            $("html").scrollTop(0)
        },
        enterKeyPress: function(e) {
            var $target = $(e.target),
                id = $target.attr("id"),
                value = $target.val();
            switch (id) {
                case "inputSearch":
                    $("#inputSearch-sticy").val(value);
                    break;
                case "inputSearch-sticy":
                    $("#inputSearch").val(value);
                    break;
                case "searchWithinResults":
                    $("#searchWithinResults-sticy").val(value);
                    break;
                case "searchWithinResults-sticy":
                    $("#searchWithinResults").val(value);
                    break;
                default:
                    break
            }
            if (e.keyCode != 13) return;
            $("#" + id + "Button").trigger("click")
        },
        initEventListener: function() {
            var that = this,
                relatedEventId = ".relatedEvent",
                tabEventId = ".tabEvent",
                searchInpId = ".searchInpEvent",
                filterEventId = ".filterEvent",
                btnTabSyleId = ".btnTabSyleEvent";
            $(".unified-result-related-wrap").off(relatedEventId);
            $(document).off(filterEventId);
            $(".unified-result-related-wrap").on("click" + relatedEventId, ".btn-more",
                that.relatedSearch);
            $(".conbox-unified-search").on("click" + tabEventId, ".result-tab .btn-tab", that.resultTabMenu);
            $(document).on("click" + filterEventId, ".search-result-wrap .btn-filter-open", that.searchFilterOpen);
            $(document).on("click" + filterEventId, ".search-result-wrap .btn-filter-close, .page-dimmed-filter", that.searchFilterClose);
            $(document).on("click" + filterEventId, ".result-filter-wrap .filter-cont .btn-open", that.searchFilterItem);
            $("#container .search-box").on("click" + searchInpId, ".btn-inp-clear",
                that.searchInpClear);
            $(".btn-style-fillbox").on("click" + btnTabSyleId, "a", that.btnTabStyle);
            $(".contents-more").on("click", "a", that.btnContentsMore);
            $("#inputSearch").on("keyup", that.enterKeyPress);
            $("#inputSearch-sticy").on("keyup", that.enterKeyPress);
            $("#searchWithinResults").on("keyup", that.enterKeyPress)
        }
    },
    init: function() {
        var that = this;
        that.stickySearchbar();
        that.priceRange();
        that.reviewChange();
        that.searchClear();
        that.eventListener.initEventListener()
    }
};
$(document).ready(function() {
    searchApp.init();
    dropTab(".search-result-wrap");
    searchTabContent(".result-tab")
});

function searchTabContent(e) {
    var $e = $(e);
    var result = true;
    if ($e.length == 0) {
        result = false;
        return result
    }
    $e.find("a").click(function(e) {
        e.preventDefault();
        var id = $(this).attr("aria-controls");
        $(this).parents(".result-tab").find("a").attr("aria-selected", "false");
        $(this).attr("aria-selected", "true");
        $(this).parents(".result-tab").parents().find(".tab-content").hide();
        $("#" + id).show()
    });
    return result
}
$(window).resize(function() {
    if ($(".result-filter-wrap").hasClass("is-pc") || $(".result-filter-wrap").hasClass("is-mo")) searchApp.searchFilterControl();
    searchApp.reviewChange();
    searchInputManager.isMobileYN = searchInputManager.isMobileDevice()
});

function dropTab(e) {
    var $e = $(e);
    var result = true;
    if ($e.length == 0) {
        result = false;
        return result
    }
    $e.find(".drop-toggle").on("click", function(e) {
        $(this).toggleClass("dropopen")
    });
    $e.find(".dropBox a").on("click", function(e) {
        var selectTxt = $(this).find("span").text();
        $e.find(".drop-toggle").removeClass("dropopen");
        $(this).parent().prev().find("span").text(selectTxt)
    });
    return result
}
$("#slider-range .ui-slider-handle").draggable();
if ($(".family-point-wrapper").length) $(".sticty-searchbar-inner").attr("data-margin-top", $(".family-point-wrapper").height());
$(window).resize(function() {
    if ($(".family-point-wrapper").length) $(".sticty-searchbar-inner").attr("data-margin-top", $(".family-point-wrapper").height())
});