var orderPaymentManager = {
		
		
    fnOpenLayer: function($objLayer, data) {
        var t = $objLayer.attr("id");
        $objLayer.html(data);
        if ($(".layer-pop").is(":visible")) LAYERZINDEX++;
        else LAYERZINDEX = 300;
        $objLayer.show().css("z-index", LAYERZINDEX).attr("aria-hidden", false).attr("data-zindex", LAYERZINDEX).focus();
        $objLayer.find(".pop-close").data("activeTarget", t);
        if (!$objLayer.hasClass("embed")) $("body *").not($("#" + t)).not($("#" + t).parents()).not($("#" + t).find("*")).not($objLayer.parents()).not($objLayer).attr("aria-hidden",
            true);
        if (!$objLayer.hasClass("nomask")) {
            var zidx = parseInt($("#" + t).attr("data-zindex")) - 1;
            $("body").append("<div id='mask' data-mask-target='" + t + "' style='z-index:" + zidx + "'></div>");
            $("#mask").fadeIn().data("activeTarget", t);
            scrollLock("lock")
        }
        if (!$("body").children().is("#mask")) $("body").append("<div id='mask'></div>");
        $("#mask").fadeIn().data("activeTarget", $objLayer.data("popup-layer"));
        $objLayer.find(".pop-close").off().on("click", function() {
            $objLayer.removeAttr("style").removeAttr("data-zindex").attr("aria-hidden",
                true).hide();
            $objLayer.empty();
            if ($objLayer.hasClass("layer-storepickup")) $objLayer.removeClass("layer-storepickup");
            if ($objLayer.hasClass("layer-gatherview")) $objLayer.removeClass("layer-gatherview");
            if ($objLayer.hasClass("popup-comm-video")) $objLayer.removeClass("popup-comm-video");
            if ($objLayer.hasClass("popup-comm-img360")) $objLayer.removeClass("popup-comm-img360");
            if ($objLayer.hasClass("popup-comm-gallery")) $objLayer.removeClass("popup-comm-gallery");
            $("#mask[data-mask-target='" + t + "']").fadeOut("fast").remove();
            scrollLock("unlock");
            $objLayer.focus();
            if (!$objLayer.hasClass("embed")) $("body *").not($("#" + t)).not($("#" + t).parents()).not($("#" + t).find("*")).not($objLayer.parents()).not($objLayer).removeAttr("aria-hidden");
            LAYERZINDEX--;
            $(this).off()
        });
        return $objLayer
    },
    removeCouponInfo: function(couponKey, unitCpAmt, mbrCpNo) {
        orderPaymentManager.initalize();
        var cartId = couponKey.replace(couponKey.charAt(couponKey.length - 1) == "Y" ? "_Y" : "_N", "");
        var tmpUnitCpAmt = 0;
        if (couponKey.charAt(couponKey.length - 1) == "Y") {
            tmpUnitCpAmt =
                $("#dupGoodsCpDcAmt" + cartId).val();
            $("#dupGoodsCpDcAmt" + cartId).val(tmpUnitCpAmt - unitCpAmt)
        } else {
            tmpUnitCpAmt = $("#baseGoodsCpDcAmt" + cartId).val();
            $("#baseGoodsCpDcAmt" + cartId).val(tmpUnitCpAmt - unitCpAmt)
        }
        if (unitCpAmt == undefined || unitCpAmt == "undefined") unitCpAmt = tmpUnitCpAmt;
        var isDup = couponKey.charAt(couponKey.length - 1);
        var dropCartCoupon = "dropCartCoupon" + couponKey;
        var cartTpCd = $("div[id=" + dropCartCoupon + "]").attr("data-cart-tp-cd");
        $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled",
            false);
        if (cartTpCd == "40" && isDup == "Y") $("#dropCartCouponeBtn" + couponKey).html("My 큐커 플랜 멤버십 할인(복수선택 가능)");
        else if (cartTpCd == "40" && isDup != "Y") $("#dropCartCouponeBtn" + couponKey).html("쿠폰을 선택해 주세요.");
        $("#couponSelectArea" + couponKey).attr("data-cpNo", "").attr("data-mbrCpNo", "").attr("data-multiaplyn", "");
        $("div[name=couponselectList]").each(function(key, item) {
            if ($(item).attr("data-mbrCpNo") == mbrCpNo) $(item).remove()
        });
        var totalDiscountAmt = $("#order_payment_total_dc_amt").val().replace("-", "");
        console.log("totalDiscountAmt:" +
            totalDiscountAmt + "|" + unitCpAmt);
        $("#order_payment_total_dc_amt").val(totalDiscountAmt - unitCpAmt);
        var totalGoodsCpDcAmt = Number($("#totalGoodsCpDcAmt").val());
        $("#totalGoodsCpDcAmt").val(totalGoodsCpDcAmt - unitCpAmt);
        if (parseInt($("#totalGoodsCpDcAmt").val()) > 0) $("#order_payment_dc_goods_cp_amt_view").text("-" + format.num(parseInt($("#totalGoodsCpDcAmt").val())) + "원");
        else $("#order_payment_dc_goods_cp_amt_view").text("0원");
        orderPaymentManager.setCouponDcAmtInfo(cartId, 0);
        orderPaymentManager.setTotalPaymentInfo();
        orderPaymentManager.initalizeFnetOrderPayInfo();
        var freeCouponApplied = $("#" + cartId).data("freeCouponApplied");
        if (freeCouponApplied != "" && freeCouponApplied != undefined)
            if (freeCouponApplied == "Y") {
                $("#" + cartId).data("freeCouponApplied", "N");
                var cpDcAmtForFree = Number($("#cpDcAmtForFree").val()) - unitCpAmt;
                $("#cpDcAmtForFree").val(cpDcAmtForFree)
            } if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
    },
    addCouponInfo: function(obj, mbrCpNo,
                            cpNo, cartId, couponKey, idx, cpKindCd, multiAplYn, cpGbCd, goodsUnitBuyAmt) {
        console.log("orderPayment.js addCouponInfo  multiAplYn:" + multiAplYn);
        var result = false,
            isDup = couponKey.charAt(couponKey.length - 1),
            classNm = isDup === "Y" ? "selDupCoupon" : "selBaseCoupon";
        $("." + classNm).each(function(key, item) {
            if ($(item).attr("data-mbrCpNo") == mbrCpNo && "couponSelectArea" + couponKey != $(item).attr("id")) {
                result = true;
                return false
            }
        });
        if (result) {
            messager.catNotUseCouponByAlready();
            return
        }
        var tCouponKey = "",
            tMbrCpNo = "",
            tDupMbrCpNo =
                "";
        if (isDup == "Y") {
            tCouponKey = "#couponSelectArea" + couponKey.replace("Y", "N");
            tMbrCpNo = $(tCouponKey).attr("data-mbrCpNo") || "";
            tDupMbrCpNo = mbrCpNo
        } else {
            tCouponKey = "#couponSelectArea" + couponKey.replace("N", "Y");
            tMbrCpNo = mbrCpNo;
            tDupMbrCpNo = $(tCouponKey).attr("data-mbrCpNo") || ""
        }
        orderPaymentManager.getCartGoodsCpDcInfo(cpKindCd, cartId, tMbrCpNo, tDupMbrCpNo, mbrCpNo, cpNo, couponKey, idx, isDup, multiAplYn, goodsUnitBuyAmt, cpGbCd)
    },
    getCartGoodsCpDcInfo: function(cpKindCd, cartId, tMbrCpNo, tDupMbrCpNo, mbrCpNo, cpNo,
                                   couponKey, idx, isDup, multiAplYn, goodsUnitBuyAmt, cpGbCd) {
        console.log("orderPayment.js getCartGoodsCpDcInfo  multiAplYn:" + multiAplYn);
        console.log("orderPayment.js getCartGoodsCpDcInfo  cpkindCd :" + cpKindCd + " ,cartId :" + cartId + ", tMbrCpNo :" + tMbrCpNo + ", tDupMbrCpNo :" + tDupMbrCpNo + ", mbrCpNo :" + mbrCpNo + ", cpNo :" + cpNo + ", couponKey :" + couponKey + ", idx : " + idx + ", isDup :" + isDup + ",goodsUnitBuyAmt :" + goodsUnitBuyAmt);
        orderPaymentManager.initalize();
        var goodsBuyPrc = $("#" + cartId).find("input[name=goodsBuyPrc]").val() ==
        undefined ? 0 : $("#" + cartId).find("input[name=goodsBuyPrc]").val();
        if (goodsBuyPrc == 0)
            if (goodsUnitBuyAmt != undefined && goodsUnitBuyAmt != 0) goodsBuyPrc = goodsUnitBuyAmt;
        var options = {
            url: orderCommon.stContextPath + "xhr/order/getCartGoodsCpDcInfo",
            data: {
                cpKindCd: cpKindCd,
                cartId: cartId,
                mbrCpNo: tMbrCpNo,
                dupMbrCpNo: tDupMbrCpNo,
                buyPrc: goodsBuyPrc,
                couponKey: couponKey,
                pageGuid: def_page_guid
            },
            done: function(data, textStatus, jqXHR) {
                console.log(data);
                var error = false;
                var maxDcEn = typeof jqXHR == "undefined" ? null : jqXHR.getResponseHeader("maxDcEn");
                var couponDcInfo = data.couponDcInfo;
                if (maxDcEn == null) error = true;
                else {
                    maxDcEn = maxDcEn.substring(3, maxDcEn.length - 3).split("_").join("=").trim();
                    var maxDc = parseInt(atob(maxDcEn));
                    if (couponDcInfo.baseCpDcAmt > maxDc) error = true;
                    if (couponDcInfo.dupCpDcAmt > maxDc) error = true;
                    if (couponDcInfo.unitCpDcAmt > maxDc) error = true;
                    if (couponDcInfo.unitDupCpDcAmt > maxDc) error = true
                }
                var dropCartCoupon = "dropCartCoupon" + couponKey;
                var cartTpCd = $("div[id=" + dropCartCoupon + "]").attr("data-cart-tp-cd");
                if (couponDcInfo.baseCpUsePsbYn ==
                    "N" || couponDcInfo.dupCpUsePsbYn == "N" || error) {
                    var alertData = {
                        content: "사용할 수 없는 쿠폰입니다."
                    };
                    commonAlert(alertData);
                    openLayer("commonAlert");
                    $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
                    if (cartTpCd == "40" && isDup == "Y") $("#dropCartCouponeBtn" + couponKey).html("My 큐커 플랜 멤버십 할인(복수선택 가능)");
                    else if (cartTpCd == "40" && isDup != "Y") $("#dropCartCouponeBtn" + couponKey).html("쿠폰을 선택해 주세요.");
                    return
                }
                var unitCpAmt = 0,
                    totCpAmt = 0;
                if (isDup == "Y") {
                    console.log("unitCpAmt:" + couponDcInfo.unitDupCpDcAmt +
                        " | totCpAmt: " + couponDcInfo.dupCpDcAmt);
                    unitCpAmt = Number(couponDcInfo.unitDupCpDcAmt);
                    totCpAmt = Number(couponDcInfo.dupCpDcAmt)
                } else {
                    unitCpAmt = Number(couponDcInfo.unitCpDcAmt);
                    totCpAmt = Number(couponDcInfo.baseCpDcAmt)
                }
                var totalDiscountPrice = parseInt($("#order_payment_total_dc_amt").val());
                var buyAmt = Number($("#buyAmt" + cartId).val()),
                    baseGoodsCpDcAmt = Number($("#baseGoodsCpDcAmt" + cartId).val()),
                    dupGoodsCpDcAmt = Number($("#dupGoodsCpDcAmt" + cartId).val()),
                    omniCpDcAmt = 0,
                    payAmt = buyAmt - baseGoodsCpDcAmt - dupGoodsCpDcAmt;
                if ($("#omniCpDcAmt" + cartId).val() != "") {
                    omniCpDcAmt = Number($("#omniCpDcAmt" + cartId).val());
                    payAmt = payAmt - omniCpDcAmt;
                    console.log("omniCpDcAmt:" + omniCpDcAmt)
                }
                console.log("payAmt:" + payAmt + " | totCpAmt:" + totCpAmt);
                var divGoods = $("#" + cartId);
                var freeCouponMdlCode = String(divGoods.data("free-coupon-mdl-code"));
                var freeAmtExcpt = false;
                if (freeCouponMdlCode != "" && freeCouponMdlCode != undefined) {
                    var listFreeCouponMdlCode = freeCouponMdlCode.split(",");
                    if (listFreeCouponMdlCode.includes(String(cpNo))) {
                        freeAmtExcpt =
                            true;
                        divGoods.data("freeCouponApplied", "Y");
                        var cpDcAmtForFree = Number($("#cpDcAmtForFree").val()) + unitCpAmt;
                        $("#cpDcAmtForFree").val(cpDcAmtForFree)
                    } else freeAmtExcpt = false
                }
                var dropCartCoupon = "dropCartCoupon" + couponKey;
                var cartTpCd = $("div[id=" + dropCartCoupon + "]").attr("data-cart-tp-cd");
                if (orderCommon.stGbCd == 10 && freeAmtExcpt) {
                    if (payAmt - totCpAmt < 0) {
                        var alertData$0 = {
                            content: "쿠폰 적용 시 상품 결제 금액 0원 미만 입니다."
                        };
                        commonAlert(alertData$0);
                        openLayer("commonAlert");
                        $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled",
                            false);
                        if (cartTpCd == "40" && isDup == "Y") $("#dropCartCouponeBtn" + couponKey).html("My 큐커 플랜 멤버십 할인(복수선택 가능)");
                        else if (cartTpCd == "40" && isDup != "Y") $("#dropCartCouponeBtn" + couponKey).html("쿠폰을 선택해 주세요.");
                        return
                    }
                } else if (payAmt - totCpAmt <= 0) {
                    var alertData$1 = {
                        content: "쿠폰 적용 시 상품 결제 금액 0원 이하 입니다."
                    };
                    commonAlert(alertData$1);
                    openLayer("commonAlert");
                    $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
                    if (cartTpCd == "40" && isDup == "Y") $("#dropCartCouponeBtn" + couponKey).html("My 큐커 플랜 멤버십 할인(복수선택 가능)");
                    else if (cartTpCd == "40" && isDup != "Y") $("#dropCartCouponeBtn" + couponKey).html("쿠폰을 선택해 주세요.");
                    return
                }
                var StringDiscountPrice = 0;
                if (totalDiscountPrice > 0);
                $("#order_payment_total_dc_amt").val(totalDiscountPrice + totCpAmt);
                orderPaymentManager.renderSelectedCoupon(cpKindCd, mbrCpNo, cpNo, cartId, couponKey, idx, unitCpAmt, totCpAmt, "N", multiAplYn, cpGbCd);
                if (couponKey.charAt(couponKey.length - 1) == "Y") $("#dupGoodsCpDcAmt" + cartId).val(totCpAmt + dupGoodsCpDcAmt);
                else $("#baseGoodsCpDcAmt" + cartId).val(totCpAmt + baseGoodsCpDcAmt);
                orderPaymentManager.setCouponDcAmtInfo(cartId, unitCpAmt);
                var totalGoodsCpDcAmt = Number($("#totalGoodsCpDcAmt").val());
                $("#totalGoodsCpDcAmt").val(totalGoodsCpDcAmt + totCpAmt);
                if (parseInt($("#totalGoodsCpDcAmt").val()) > 0) $("#order_payment_dc_goods_cp_amt_view").text("-" + format.num(parseInt($("#totalGoodsCpDcAmt").val())) + "원");
                else $("#order_payment_dc_goods_cp_amt_view").text("0원");
                orderPaymentManager.setTotalPaymentInfo();
                orderPaymentManager.initalizeFnetOrderPayInfo();
                if (membershipPointManager != "undefined" &&
                    membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
            }
        };
        ajax.call(options)
    },
    renderSelectedCoupon: function(cpKindCd, mbrCpNo, cpNo, cartId, couponKey, idx, unitCpAmt, totCpAmt, serialOmniYn, multiAplYn, cpGbCd) {
        console.log("orderPayment.js renderSelectedCoupon ");
        console.log("multiAplYn: " + multiAplYn);
        var obj = $("#optCartCoupon" + couponKey + "_" + idx);
        var key = couponKey + "_" + idx;
        var cpNm = $("#optCartCoupon" + key)[0].innerText;
        var couponInfo = cpKindCd + "|" + cartId + "|" + mbrCpNo;
        var isDup =
            couponKey.charAt(couponKey.length - 1);
        var dataOmni = $("#optCartCoupon" + key).attr("data-omni");
        couponInfo += "|" + unitCpAmt + "|" + totCpAmt + "|" + cpNo + "|" + couponKey;
        if (isDup == "Y") couponInfo += "|DUP";
        else couponInfo += "|BASE";
        couponInfo += "|" + multiAplYn + "|" + cpGbCd;
        var goodsId = $("#" + cartId).attr("data-goods-id");
        couponInfo += "|" + goodsId;
        var $couponSelectArea = $("#couponSelectArea" + couponKey),
            $droupCouponBtn = $("#dropCartCouponeBtn" + couponKey);
        $couponSelectArea.append('<div class="order-select-list" name="couponselectList" data-mbrCpNo="' + mbrCpNo + '"><div class="gifts-select gifts-coupone"><span class="names">' +
            cpNm + "</span><button onclick=\"orderPaymentManager.removeCouponInfo('" + couponKey + "','" + totCpAmt + "','" + mbrCpNo + '\');" type="button" class="btn-del" data-omni="' + dataOmni + '"><span class="blind">삭제</span></button></div>' + '<input type="hidden" name="goodsCpInfos" value="' + couponInfo + '">' + "</div>");
        $couponSelectArea.attr("data-cpNo", cpNo);
        $couponSelectArea.attr("data-mbrCpNo", mbrCpNo);
        $couponSelectArea.attr("data-multiaplyn", multiAplYn);
        $(obj).parents(".wrap-droplist").removeClass("active").removeClass("bottom");
        $droupCouponBtn.html("상품쿠폰이 적용되었습니다.");
        var dropCartCoupon = "dropCartCoupon" + couponKey;
        var cartTpCd = $("div[id=" + dropCartCoupon + "]").attr("data-cart-tp-cd");
        if (cartTpCd == "40" && isDup == "Y") {
            $droupCouponBtn.html("쿠폰이 적용되었습니다.(복수선택 가능)");
            $droupCouponBtn.attr("disabled", false)
        } else if (cartTpCd == "40" && isDup != "Y") {
            $droupCouponBtn.html("쿠폰이 적용되었습니다.");
            $droupCouponBtn.attr("disabled", true)
        } else $droupCouponBtn.attr("disabled", true)
    },
    getTotalPayAmt: function(buyGoodsList) {
        var totalPayAmt = 0;
        var obj;
        var totalDlvrAmt =
            0;
        $.each(buyGoodsList, function(idx, element) {
            var goodsId = $(element).attr("data-goods-id");
            var cartId = $(element).attr("data-cart-id");
            var buyQty = parseInt($(element).attr("data-buy-qty"));
            if ($("#qookerYn").val() == "Y") {
                obj = $("#" + cartId);
                totalDlvrAmt = parseInt(obj.find("input[name=dlvrAmt]").val() == undefined ? 0 : obj.find("input[name=dlvrAmt]").val())
            }
            var additionalFnSprtAmt = 0;
            var thisSaleAmt = parseInt($(element).find("input[name=saleAmt]").val());
            var thisUseLimit = parseInt($(element).find("input[name=useLimit]").val());
            var thisEmployeeAmt = parseInt($(element).find("input[name=buyAmt]").val()) / buyQty;
            var thisFnSprtAmt = parseInt($(element).find("input[name=fnSprtAmt]").val());
            var thisBaseGoodsCpDcAmt = parseInt($(element).find("input[name=baseGoodsCpDcAmt]").val());
            var thisDupGoodsCpDcAmt = parseInt($(element).find("input[name=dupGoodsCpDcAmt]").val());
            var thisOmniCpDcAmt = $.isNumeric($("#omniCpDcAmt" + cartId).val()) ? parseInt($("#omniCpDcAmt" + cartId).val()) : 0;
            var thisBndlPrmtDcAmt = $.isNumeric($(element).find("input[name=bndlPrmtDcAmt]").val()) ?
                parseInt($(element).find("input[name=bndlPrmtDcAmt]").val()) : 0;
            var thisCpDcAmt = thisBaseGoodsCpDcAmt + thisDupGoodsCpDcAmt + thisOmniCpDcAmt;
            thisEmployeeAmt = parseInt(thisEmployeeAmt - thisCpDcAmt - thisBndlPrmtDcAmt + totalDlvrAmt);
            totalPayAmt += thisEmployeeAmt
        });
        console.log("***************** [ 총 결제 금액 ] *****************");
        console.log(totalPayAmt);
        console.log("****************************************************");
        orderPaymentManager.setCompGoodsNDlvrAmt();
        return totalPayAmt
    },
    setTotalPaymentInfo: function() {
        $("#isExcludedJickpan").val("N");
        $("#canUseMembershipPoint").val("Y");
        console.log("orderPayment.js setTotalPaymentInfo");
        console.log("orderCommon.stGbCd:" + orderCommon.stGbCd);
        var currentRmnLmtAmt = parseInt($("#hideRmnLmtAmt").val()),
            currentRmnLmtEtcAmt = parseInt($("#hideRmnLmtEtcAmt").val()),
            totalSaleAmt = 0,
            totalEmployeeAmt = 0,
            totalBuyAmt = 0,
            totalFnSprtAmt = 0,
            totalRealPayAmt = 0,
            totalUseLimit = 0,
            totalUseLimitEtc = 0,
            totalBaseGoodsCpDcAmt = 0,
            totalDupGoodsCpDcAmt = 0,
            totalCpDcAmt = 0,
            totalFnetPoint = 0,
            totalAdditionalFnSprtAmt = 0,
            totOmniCpCdAmt = 0,
            cartFnetPoint =
                0,
            membershipPoint = 0,
            currentTotalPayAmt = parseInt($("#order_payment_total_pay_amt").val());
        var svmnUseTypeCd = $("#svmnUseTypeCd").val();
        var thisUseSvmnTotalAmt = $("#order_payment_dc_svmn_use_amt").length > 0 ? parseInt($("#order_payment_dc_svmn_use_amt").val()) : 0;
        var thisFpntTotalAmt = $("#order_payment_total_fpnt_amt").length > 0 ? parseInt($("#order_payment_total_fpnt_amt").val()) : 0;
        var thisSpntTotalAmt = $("#order_payment_total_spnt_amt").length > 0 ? parseInt($("#order_payment_total_spnt_amt").val()) : 0;
        var thisApntTotalAmt =
            $("#order_payment_total_apnt_amt").length > 0 ? parseInt($("#order_payment_total_apnt_amt").val()) : 0;
        var thisMpntTotalAmt = $("#order_payment_total_mpnt_amt").length > 0 ? parseInt($("#order_payment_total_mpnt_amt").val()) : 0;
        var thisWpntTotalAmt = $("#order_payment_total_wpnt_amt").length > 0 ? parseInt($("#order_payment_total_wpnt_amt").val()) : 0;
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40") cartFnetPoint = thisFpntTotalAmt + thisSpntTotalAmt + thisApntTotalAmt + thisMpntTotalAmt;
        if (orderCommon.stGbCd ==
            "70") cartFnetPoint = thisFpntTotalAmt + thisSpntTotalAmt + thisApntTotalAmt + thisMpntTotalAmt + thisWpntTotalAmt;
        membershipPoint = thisUseSvmnTotalAmt;
        var buyGoodsList = $("div.buy-target-goods"),
            cartFnetPointTemp = cartFnetPoint,
            membershipPointTemp = membershipPoint;
        var totalPayAmt = orderPaymentManager.getTotalPayAmt(buyGoodsList);
        var maxOmniDcAmt = 0;
        if ($("#omniCpInfo").val() != "" && $("#omniCpInfo").val() != undefined && $("#omniCpInfo").val().split("|").length > 3) maxOmniDcAmt = $.isNumeric($("#omniCpInfo").val().split("|")[4]) ?
            parseInt($("#omniCpInfo").val().split("|")[4]) : 0;
        var obj;
        var thisDlvrAmt = 0;
        for (var i = 0; i < buyGoodsList.length; i++) {
            var element = buyGoodsList[i];
            var bspkGoodsYn = $(element).attr("data-bspk-goods-yn");
            var compGbCd = $(element).attr("data-comp-gb-cd");
            var goodsId = $(element).attr("data-goods-id");
            var cartId = $(element).attr("data-cart-id");
            var buyQty = parseInt($(element).attr("data-buy-qty"));
            var thisPoint = 0;
            if ($("#qookerYn").val() == "Y") {
                obj = $("#" + cartId);
                thisDlvrAmt = parseInt(obj.find("input[name=dlvrAmt]").val() ==
                undefined ? 0 : obj.find("input[name=dlvrAmt]").val())
            }
            var mbrDcAmt = parseInt($(element).find("input[name=mbrDcAmt]").val()) / buyQty;
            var prmtDcAmt = parseInt($(element).find("input[name=prmtDcAmt]").val()) / buyQty;
            var thisSaleAmt = parseInt($(element).find("input[name=saleAmt]").val()) / buyQty;
            var thisFnSprtAmt = parseInt($(element).find("input[name=fnSprtAmt]").val()) / buyQty;
            var thisEmployeeAmt = thisSaleAmt - mbrDcAmt - prmtDcAmt - thisFnSprtAmt;
            var thisUseLimit = parseInt($(element).find("input[name=useLimit]").val()) /
                buyQty;
            var thisUseLimitEtc = parseInt($(element).find("input[name=useLimitEtc]").val()) / buyQty;
            var thisBndlPrmtDcAmt = $.isNumeric($(element).find("input[name=bndlPrmtDcAmt]").val()) ? parseInt($(element).find("input[name=bndlPrmtDcAmt]").val()) : 0;
            var thisBaseGoodsCpDcAmt = parseInt($(element).find("input[name=baseGoodsCpDcAmt]").val());
            var oriBaseGoodsCpDcAmt = thisBaseGoodsCpDcAmt;
            if (thisBaseGoodsCpDcAmt > 0) {
                var multiAplYn = $("#couponSelectArea" + cartId + "_N").attr("data-multiaplyn");
                thisBaseGoodsCpDcAmt = Math.floor(thisBaseGoodsCpDcAmt /
                    buyQty)
            }
            var thisDupGoodsCpDcAmt = parseInt($(element).find("input[name=dupGoodsCpDcAmt]").val());
            var oriDupGoodsCpDcAmt = thisDupGoodsCpDcAmt;
            if (thisDupGoodsCpDcAmt > 0) {
                var multiAplYn = $("#couponSelectArea" + cartId + "_Y").attr("data-multiaplyn");
                thisDupGoodsCpDcAmt = Math.floor(thisDupGoodsCpDcAmt / buyQty)
            }
            var thisOmniCpDcAmt = $.isNumeric($("#omniCpDcAmt" + cartId).val()) ? parseInt($("#omniCpDcAmt" + cartId).val()) : 0;
            if (maxOmniDcAmt > 0 && thisOmniCpDcAmt > 0 && maxOmniDcAmt * buyQty < thisOmniCpDcAmt) thisOmniCpDcAmt = maxOmniDcAmt;
            if (thisOmniCpDcAmt > 0) thisOmniCpDcAmt = thisOmniCpDcAmt / buyQty;
            var thisCpDcAmt = thisBaseGoodsCpDcAmt + thisDupGoodsCpDcAmt + thisOmniCpDcAmt;
            thisEmployeeAmt = parseInt(thisEmployeeAmt - thisCpDcAmt - thisBndlPrmtDcAmt);
            var thisMembershipPoint = 0;
            var thisFnetPoint = (parseInt($(element).find("input[name=fnetPoint]").val()) + parseInt($(element).find("input[name=fnetSPoint]").val()) + parseInt($(element).find("input[name=fnetAPoint]").val()) + parseInt($(element).find("input[name=fnetMPoint]").val())) / buyQty;
            if (orderCommon.stGbCd ==
                "70") thisFnetPoint = (parseInt($(element).find("input[name=fnetPoint]").val()) + parseInt($(element).find("input[name=fnetSPoint]").val()) + parseInt($(element).find("input[name=fnetAPoint]").val()) + parseInt($(element).find("input[name=fnetMPoint]").val()) + parseInt($(element).find("input[name=fnetWPoint]").val())) / buyQty;
            if (i == buyGoodsList.length - 1) thisMembershipPoint = membershipPointTemp;
            else thisMembershipPoint = Math.floor(membershipPoint * parseFloat(thisEmployeeAmt / totalPayAmt));
//            if (orderCommon.stGbCd ==
//                "10")
//                if (membershipPoint > 0 && thisMembershipPoint < 5E3) $("#isExcludedJickpan").val("Y");
            membershipPointTemp -= thisMembershipPoint;
            if (svmnUseTypeCd == "1") thisPoint = thisFnetPoint;
            if (svmnUseTypeCd == "2") {
                if (i == buyGoodsList.length - 1) thisPoint = cartFnetPointTemp;
                else thisPoint = Math.floor(cartFnetPoint * parseFloat(thisEmployeeAmt / totalPayAmt));
                cartFnetPointTemp -= thisPoint
            }
            thisEmployeeAmt = thisEmployeeAmt - thisMembershipPoint - thisPoint;
            var thisEmployeeAmtFinal = thisEmployeeAmt;
            if (orderCommon.stGbCd == "30") thisEmployeeAmtFinal =
                thisEmployeeAmtFinal + thisFnSprtAmt + thisPoint;
            var rmnAmt = 0;
            console.log(oriBaseGoodsCpDcAmt - Math.floor(thisBaseGoodsCpDcAmt) * buyQty);
            if (oriBaseGoodsCpDcAmt - Math.floor(thisBaseGoodsCpDcAmt) * buyQty != 0) rmnAmt += parseInt(oriBaseGoodsCpDcAmt - thisBaseGoodsCpDcAmt * buyQty);
            if (oriDupGoodsCpDcAmt - Math.floor(thisDupGoodsCpDcAmt) * buyQty != 0) rmnAmt += parseInt(oriDupGoodsCpDcAmt - thisDupGoodsCpDcAmt * buyQty);
            console.log("thisSaleAmt:" + thisSaleAmt + " | thisEmployeeAmtFinal:" + thisEmployeeAmtFinal + "|buyQty:" + buyQty);
            if (thisSaleAmt >
                thisEmployeeAmtFinal)
                if (orderCommon.stGbCd == "30") {
                    $(element).find("span.price-big").text(format.num(thisEmployeeAmtFinal * buyQty - thisFnSprtAmt * buyQty - rmnAmt) + "원");
                    $("#goodsPayAmt" + cartId).val(thisEmployeeAmtFinal * buyQty - thisFnSprtAmt * buyQty - rmnAmt)
                } else {
                    $(element).find("span.price-big").text(format.num(thisEmployeeAmtFinal * buyQty - rmnAmt) + "원");
                    $("#goodsPayAmt" + cartId).val(thisEmployeeAmtFinal * buyQty - rmnAmt)
                } if (orderCommon.stGbCd == "70")
                if (thisSaleAmt = thisEmployeeAmtFinal) {
                    $(element).find("span.price-big").text(format.num(thisEmployeeAmtFinal *
                        buyQty - rmnAmt) + "원");
                    console.log("thisEmployeeAmtFinal:" + thisEmployeeAmtFinal + " rmnAmt:" + rmnAmt);
                    $("#goodsPayAmt" + cartId).val(thisEmployeeAmtFinal * buyQty - rmnAmt)
                } thisSaleAmt = thisSaleAmt * buyQty;
            thisUseLimit = thisUseLimit * buyQty;
            thisUseLimitEtc = thisUseLimitEtc * buyQty;
            thisEmployeeAmtFinal = thisEmployeeAmtFinal * buyQty;
            thisFnSprtAmt = thisFnSprtAmt * buyQty;
            thisPoint = thisPoint * buyQty;
//            if (orderCommon.stGbCd == "10")
//                if ($("#isExcludedJickpan").val() == "Y" && compGbCd == "20" && membershipPoint > 0 && thisEmployeeAmtFinal < 5E3) $("#canUseMembershipPoint").val("N");
            console.log("**********" + goodsId + "*********");
            console.log("판매가      : " + thisSaleAmt);
            console.log("한도         : " + thisUseLimit);
            console.log("특별한도         : " + thisUseLimitEtc);
            console.log("임직원가       : " + thisEmployeeAmtFinal);
            console.log("회사지원금    : " + thisFnSprtAmt);
            console.log("번들 할인금     : " + thisBndlPrmtDcAmt);
            console.log("쿠폰 할인금     : " + thisBaseGoodsCpDcAmt);
            console.log("중복쿠폰 할인금   : " + thisDupGoodsCpDcAmt);
            console.log("옴니쿠폰 할인금   : " + thisOmniCpDcAmt);
            console.log("멤버십 포인트      : " + membershipPoint);
            console.log("임직원 포인트      : " + thisPoint);
            console.log("배송비             : " + thisDlvrAmt);
            console.log("***********************************");
            totalSaleAmt += thisSaleAmt;
            totalUseLimit += thisUseLimit;
            totalUseLimitEtc += thisUseLimitEtc;
            totalEmployeeAmt += thisEmployeeAmtFinal - rmnAmt + thisDlvrAmt;
            totalFnSprtAmt += thisFnSprtAmt;
            totalBaseGoodsCpDcAmt += thisBaseGoodsCpDcAmt;
            totalDupGoodsCpDcAmt += thisDupGoodsCpDcAmt;
            totOmniCpCdAmt += thisOmniCpDcAmt;
            totalCpDcAmt += thisCpDcAmt * buyQty + rmnAmt;
            totalFnetPoint += thisPoint
        }
        if (svmnUseTypeCd ==
            "2") totalFnetPoint = cartFnetPoint;
        var totalMemDscAmt = $.isNumeric($("#totalMemDcsAmt").val()) ? parseInt($("#totalMemDcsAmt").val()) : 0;
        var totalPrmtDcAmt = $.isNumeric($("#totalPrmtDcAmt").val()) ? parseInt($("#totalPrmtDcAmt").val()) : 0;
        totalCpDcAmt += parseInt(totalMemDscAmt) + parseInt(totalPrmtDcAmt);
        console.log("총 판매가      : " + totalSaleAmt);
        console.log("총 한도       : " + totalUseLimit);
        console.log("총 특별한도     : " + totalUseLimitEtc);
        console.log("총 임직원가     : " + totalEmployeeAmt);
        console.log("총 회사지원금    : " + totalFnSprtAmt);
        console.log("총 할인금액     : " + totalCpDcAmt);
        console.log("## 총 할인 가격 = " + totalCpDcAmt);
        console.log("## 회사 지원금    = " + totalFnSprtAmt);
        console.log("## 멤버십 포인트 = " + membershipPoint);
        if (svmnUseTypeCd == "1") console.log("## 임직원포인트  = (상품별) " + totalFnetPoint);
        else if (svmnUseTypeCd == "2") console.log("## 임직원 포인트 = (장바구니전체) " + totalFnetPoint);
        console.log("## 결제 예정 금액  = " + totalEmployeeAmt);
        console.log("## 사용포인트종류 = " + svmnUseTypeCd);
        var fnetPointText = "0";
        var dcTotalAmtText = "0";
        var membershipPointText = "0";
        var fnSprtAmtText =
            "0";
        var mblDcAmtText = "0";
        if (totalCpDcAmt > 0) dcTotalAmtText = "-" + format.num(totalCpDcAmt);
        if (membershipPoint > 0) membershipPointText = format.num(membershipPoint);
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40" || orderCommon.stGbCd == "70") {
            if (totalFnetPoint > 0 && svmnUseTypeCd == 1)
                if (orderCommon.stGbCd != "30") fnetPointText = "-" + format.num(totalFnetPoint);
                else fnetPointText = format.num(totalFnetPoint);
            else if (totalFnetPoint > 0 && svmnUseTypeCd == 2)
                if (orderCommon.stGbCd != "30") fnetPointText =
                    "-" + format.num(totalFnetPoint);
                else fnetPointText = format.num(totalFnetPoint);
            if (totalFnSprtAmt > 0)
                if (orderCommon.stGbCd != "30") fnSprtAmtText = "-" + format.num(totalFnSprtAmt);
                else fnSprtAmtText = format.num(totalFnSprtAmt)
        }
        if (totalCpDcAmt > 0 || membershipPoint > 0 || totalFnSprtAmt > 0 || totalFnetPoint > 0)
            if (orderCommon.stGbCd != "30") mblDcAmtText = "-" + format.num(totalCpDcAmt + membershipPoint + totalFnSprtAmt + totalFnetPoint);
            else mblDcAmtText = "-" + format.num(totalCpDcAmt + membershipPoint);
        $("#totalFnSprtAmt").val(totalFnSprtAmt);
        $("#totalUseLimit").val(totalUseLimit);
        var currentBuyAmt = 0;
        var currentFnSprtAmt = 0;
        var currentMbrBdnAmt = 0;
        if ($("#isMuhanDojeonApplied").val() == "Y" && orderCommon.stGbCd == "20") {
            currentBuyAmt = parseInt($("#hideBuyEtcAmt").val());
            currentFnSprtAmt = parseInt($("#hideFnSprtEtcAmt").val());
            currentMbrBdnAmt = parseInt($("#hideMbrBdnEtcAmt").val());
            if (!isNaN(currentRmnLmtEtcAmt)) $("#spanRmnLmtEtcAmtAf, #spanRmnLmtEtcAmtMoAf").find("em").text(format.num(currentRmnLmtEtcAmt - totalUseLimitEtc) + " 원");
            if (!isNaN(currentBuyAmt)) $("#spanBuyEtcAmtAf, #spanBuyEtcAmtMoAf").find("em").text(format.num(currentBuyAmt +
                totalSaleAmt) + " 원");
            if (!isNaN(currentFnSprtAmt)) $("#spanFnSprtEtcAmtAf, #spanFnSprtEtcAmtMoAf").find("em").text(format.num(currentFnSprtAmt + totalFnSprtAmt) + " 원");
            if (!isNaN(currentMbrBdnAmt)) $("#spanMbrBdnEtcAmtAf, #spanMbrBdnEtcAmtMoAf").find("em").text(format.num(currentMbrBdnAmt + totalSaleAmt - totalFnSprtAmt) + " 원")
        } else {
            currentBuyAmt = parseInt($("#hideBuyAmt").val());
            currentFnSprtAmt = parseInt($("#hideFnSprtAmt").val());
            currentMbrBdnAmt = parseInt($("#hideMbrBdnAmt").val());
            if (!isNaN(currentRmnLmtAmt)) $("#spanRmnLmtAmtAf, #spanRmnLmtAmtMoAf").find("em").text(format.num(currentRmnLmtAmt -
                totalUseLimit) + " 원");
            if (!isNaN(currentBuyAmt)) $("#spanBuyAmtAf, #spanBuyAmtMoAf").find("em").text(format.num(currentBuyAmt + totalSaleAmt) + " 원");
            if (!isNaN(currentFnSprtAmt)) $("#spanFnSprtAmtAf, #spanFnSprtAmtMoAf").find("em").text(format.num(currentFnSprtAmt + totalFnSprtAmt) + " 원");
            if (!isNaN(currentMbrBdnAmt)) $("#spanMbrBdnAmtAf, #spanMbrBdnAmtMoAf").find("em").text(format.num(currentMbrBdnAmt + totalSaleAmt - totalFnSprtAmt) + " 원")
        }
        $("#order_payment_total_goods_amt").val(totalSaleAmt);
        $("#order_payment_total_dc_amt").val(dcTotalAmtText);
        $("#order_payment_total_dc_amt_view").text(dcTotalAmtText);
        $("#order_payment_total_fn_sprt_amt").val(totalFnSprtAmt);
        $("#order_payment_total_fn_sprt_amt_view").text(fnSprtAmtText);
        $("#order_payment_total_svmn_amt_view").text(membershipPointText);
        $("#order_payment_total_fnet_svmn_amt_view").text(fnetPointText);
        $("#order_payment_total_pay_amt").val(format.num(totalEmployeeAmt));
        $("#order_payment_total_pay_amt_view").text(format.num(totalEmployeeAmt));
        $("#mbl_order_payment_total_goods_amt_view").text(format.num(totalSaleAmt));
        $("#mbl_order_total_dc_point_view").text(mblDcAmtText);
        $("#order_payment_total_pay_amt_final_view").text(format.num(totalEmployeeAmt));
        $("#order_payment_total_pay_amt").val(totalEmployeeAmt);
        if (orderCommon.stGbCd == "30") {
            $("#order_payment_total_return_amt_view").text(format.num(totalFnSprtAmt + (thisFpntTotalAmt + thisSpntTotalAmt + thisApntTotalAmt + thisMpntTotalAmt)));
            $("#order_payment_total_return_amt").val(totalFnSprtAmt + (thisFpntTotalAmt + thisSpntTotalAmt + thisApntTotalAmt + thisMpntTotalAmt))
        }
        if (!isNaN(currentTotalPayAmt) &&
            (currentTotalPayAmt > 5E4 && totalEmployeeAmt <= 5E4 || currentTotalPayAmt <= 5E4 && totalEmployeeAmt > 5E4)) orderPay.getCardIstmInfo()
    },
    initalizeFnetOrderPayInfo: function() {
        console.log("initalizeFnetOrderPayInfo");
        var fpntTotalAmt = $("#order_payment_total_fpnt_amt").length > 0 ? parseInt($("#order_payment_total_fpnt_amt").val()) : 0;
        var spntTotalAmt = $("#order_payment_total_spnt_amt").length > 0 ? parseInt($("#order_payment_total_spnt_amt").val()) : 0;
        var apntTotalAmt = $("#order_payment_total_apnt_amt").length > 0 ? parseInt($("#order_payment_total_apnt_amt").val()) :
            0;
        var mpntTotalAmt = $("#order_payment_total_mpnt_amt").length > 0 ? parseInt($("#order_payment_total_mpnt_amt").val()) : 0;
        var viewSaleAmt = $("#order_payment_total_goods_amt_view").length > 0 ? parseInt($("#order_payment_total_goods_amt").val()) : 0;
        var viewFnSprtAmt = $("#order_payment_total_fn_sprt_amt_view").length > 0 ? parseInt($("#order_payment_total_fn_sprt_amt").val()) : 0;
        var viewPayAmt = $("#order_payment_total_pay_amt_view").length > 0 ? parseInt($("#order_payment_total_pay_amt").val()) : 0;
        var wpntTotalAmt = $("#order_payment_total_wpnt_amt").length >
        0 ? parseInt($("#order_payment_total_wpnt_amt").val()) : 0;
        var viewFnetPointAmt = fpntTotalAmt + spntTotalAmt + apntTotalAmt + mpntTotalAmt;
        if (orderCommon.stGbCd == "70") viewFnetPointAmt = fpntTotalAmt + spntTotalAmt + apntTotalAmt + mpntTotalAmt + wpntTotalAmt;
        var totalUseLimit = 0;
        var totalUseLimitEtc = 0;
        var buyGoodsList = $("div.buy-target-goods");
        $.each(buyGoodsList, function(idx, element) {
            totalUseLimit += parseInt($(element).find("input[name=useLimit]").val());
            totalUseLimitEtc += parseInt($(element).find("input[name=useLimitEtc]").val())
        });
        console.log(format.num(parseInt($("#hideRmnLmtAmt").val())));
        console.log(viewSaleAmt);
        console.log(format.num(parseInt($("#hideFnSprtAmt").val())));
        console.log(viewFnSprtAmt);
        console.log(format.num(parseInt($("#hideMbrBdnAmt").val())));
        console.log(viewPayAmt);
        console.log(viewFnetPointAmt);
        if (orderCommon.stGbCd == "30");
        if ($("#isMuhanDojeonApplied").val() == "Y" && orderCommon.stGbCd == "20") {
            $("#spanRmnLmtEtcAmtAf, #spanRmnLmtEtcAmtMoAf").find("em").text(format.num(parseInt($("#hideRmnLmtEtcAmt").val()) - totalUseLimitEtc) +
                " 원");
            $("#spanBuyEtcAmtAf,    #spanBuyEtcAmtMoAf").find("em").text(format.num(parseInt($("#hideBuyEtcAmt").val()) + viewSaleAmt) + " 원");
            $("#spanFnSprtEtcAmtAf, #spanFnSprtEtcAmtMoAf").find("em").text(format.num(parseInt($("#hideFnSprtEtcAmt").val()) + viewFnSprtAmt) + " 원");
            $("#spanMbrBdnEtcAmtAf, #spanMbrBdnEtcAmtMoAf").find("em").text(format.num(parseInt($("#hideMbrBdnEtcAmt").val()) + (viewSaleAmt - viewFnSprtAmt)) + " 원")
        } else {
            $("#spanRmnLmtAmtAf, #spanRmnLmtAmtMoAf").find("em").text(format.num(parseInt($("#hideRmnLmtAmt").val()) -
                totalUseLimit) + " 원");
            $("#spanBuyAmtAf,     #spanBuyAmtMoAf").find("em").text(format.num(parseInt($("#hideBuyAmt").val()) + viewSaleAmt) + " 원");
            $("#spanFnSprtAmtAf, #spanFnSprtAmtMoAf").find("em").text(format.num(parseInt($("#hideFnSprtAmt").val()) + viewFnSprtAmt) + " 원");
            $("#spanMbrBdnAmtAf, #spanMbrBdnAmtMoAf").find("em").text(format.num(parseInt($("#hideMbrBdnAmt").val()) + (viewSaleAmt - viewFnSprtAmt)) + " 원")
        }
    },
    calculatePointSvmnAmt: function() {
        console.log("orderPayment.js calculatePointSvmnAmt");
        var svmnAmt =
            $("#order_payment_dc_svmn_use_amt").length > 0 ? parseInt($("#order_payment_dc_svmn_use_amt").val()) : 0;
        var totalFndDayPnt = 0;
        var totalSpclPnt = 0;
        var totalAwrdPnt = 0;
        var totalMoscPnt = 0;
        var totalAddtionalPoint = 0;
        var svmnUseTypeCd = $("#svmnUseTypeCd").val();
        $("#pointUseType" + svmnUseTypeCd).find("input[name=fndDayPntInfos]").each(function(index, item) {
            var fndDayPnt = parseInt($(this).val().split("|")[1]);
            totalFndDayPnt += fndDayPnt
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=spclPntInfos]").each(function(index,
                                                                                          item) {
            var spclPnt = parseInt($(this).val().split("|")[1]);
            totalSpclPnt += spclPnt
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=awrdPntInfos]").each(function(index, item) {
            var awrdPnt = parseInt($(this).val().split("|")[1]);
            totalAwrdPnt += awrdPnt
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=moscPntInfos]").each(function(index, item) {
            var moscPnt = parseInt($(this).val().split("|")[1]);
            totalMoscPnt += moscPnt
        });
        if (orderCommon.stGbCd == "70") {
            var totalWelfPnt = 0;
            $("#pointUseType" + svmnUseTypeCd).find("input[name=welfarePntInfos]").each(function(index,
                                                                                                 item) {
                var welfPnt = parseInt($(this).val().split("|")[1]);
                totalWelfPnt += welfPnt
            });
            $("#order_payment_total_wpnt_amt").val(totalWelfPnt)
        }
        $("#order_payment_total_svmn_amt").val(svmnAmt);
        $("#order_payment_total_additional_point_amt").val(totalAddtionalPoint);
        $("#order_payment_total_fpnt_amt").val(totalFndDayPnt);
        $("#order_payment_total_spnt_amt").val(totalSpclPnt);
        $("#order_payment_total_apnt_amt").val(totalAwrdPnt);
        $("#order_payment_total_mpnt_amt").val(totalMoscPnt);
        if (orderCommon.stGbCd == "70") {
            if (totalFndDayPnt +
                totalSpclPnt + totalAwrdPnt + totalMoscPnt + totalWelfPnt == 0) $.each($("div.buy-target-goods"), function(idx, element) {
                $(element).find("input[name=fnetPoint]").val(0);
                $(element).find("input[name=fnetSPoint]").val(0);
                $(element).find("input[name=fnetAPoint]").val(0);
                $(element).find("input[name=fnetMPoint]").val(0);
                $(element).find("input[name=fnetWPoint]").val(0)
            })
        } else if (totalFndDayPnt + totalSpclPnt + totalAwrdPnt + totalMoscPnt == 0) $.each($("div.buy-target-goods"), function(idx, element) {
            $(element).find("input[name=fnetPoint]").val(0);
            $(element).find("input[name=fnetSPoint]").val(0);
            $(element).find("input[name=fnetAPoint]").val(0);
            $(element).find("input[name=fnetMPoint]").val(0)
        })
    },
    setCouponDcAmtInfo: function(cartId, unitCpAmt) {
        console.log("orderPayment.js setCouponDcAmtInfo");
        var goodsAmt = Number($("#goodsAmt" + cartId).val()),
            goodsBuyPrc = $("#" + cartId).find("input[name=goodsBuyPrc]").val() == undefined ? 0 : $("#" + cartId).find("input[name=goodsBuyPrc]").val(),
            buyQty = $("#" + cartId).find("input[name=buyQty]").val() == undefined ? 0 : $("#" + cartId).find("input[name=buyQty]").val(),
            buyAmt = Number($("#buyAmt" + cartId).val()),
            baseGoodsCpDcAmt = Number($("#baseGoodsCpDcAmt" + cartId).val()),
            dupGoodsCpDcAmt = Number($("#dupGoodsCpDcAmt" + cartId).val()),
            payAmt = buyAmt - baseGoodsCpDcAmt - dupGoodsCpDcAmt,
            omniCpAplVal = Number($("#omniCpAplVal").val()),
            omniCpDcAmt = 0;
        if (omniCpAplVal > 0) {
            omniCpDcAmt = Math.round(goodsBuyPrc * (omniCpAplVal / 100) / 100) * 100 * buyQty;
            payAmt = payAmt - omniCpDcAmt;
            $("#omniCpDcAmt" + cartId).val(omniCpDcAmt)
        } else;
        var $priceSmall = $("#" + cartId).find(".price-small"),
            $priceBig = $("#" + cartId).find(".price-big");
        if (payAmt < goodsAmt) {
            if ($priceSmall.length == 0) $priceBig.before('<span class="price-small">' + format.num(goodsAmt) + "원</span>");
            $priceSmall.show()
        } else $priceSmall.hide();
        $priceBig.html(format.num(payAmt) + "원");
        var obj = $("div.buy-target-goods[id=" + cartId + "]");
        var mbrDcAmt = Number(obj.find("input[name=mbrDcAmt]").val() == undefined ? 0 : obj.find("input[name=mbrDcAmt]").val());
        var prmtDcAmt = Number(obj.find("input[name=prmtDcAmt]").val() == undefined ? 0 : obj.find("input[name=prmtDcAmt]").val());
        var fnSprtAmt = Number(obj.find("input[name=fnSprtAmt]").val() ==
        undefined ? 0 : obj.find("input[name=fnSprtAmt]").val());
        var prmtDcPrc = Number(obj.find("input[name=prmtDcPrc]").val() == undefined ? 0 : obj.find("input[name=prmtDcPrc]").val());
        var bndlPrmtDcAmt = Number(obj.find("input[name=bndlPrmtDcAmt]").val() == undefined ? 0 : obj.find("input[name=bndlPrmtDcAmt]").val());
        $("#mbr_dc_txt_" + cartId).text("- " + format.num(mbrDcAmt) + " 원");
        $("#prmt_dc_txt_" + cartId).text("- " + format.num(prmtDcAmt) + " 원");
        $("#coupon_dc_txt_" + cartId).text("- " + format.num(baseGoodsCpDcAmt + dupGoodsCpDcAmt) +
            " 원");
        $("#omni_dc_txt_" + cartId).text("- " + format.num(omniCpDcAmt) + " 원");
        if (orderCommon.stGbCd == orderCommon.ST_GB_20) $("#fnSprt_dc_txt_" + cartId).text("- " + format.num(fnSprtAmt) + " 원");
        else $("#fnSprt_dc_txt_" + cartId).text(format.num(fnSprtAmt) + " 원");
        $("#bundle_dc_txt_" + cartId).text("- " + format.num(bndlPrmtDcAmt) + " 원");
        if (orderCommon.stGbCd == orderCommon.ST_GB_20) $("#tot_dc_txt_" + cartId).text("- " + format.num(baseGoodsCpDcAmt + dupGoodsCpDcAmt + omniCpDcAmt + mbrDcAmt + fnSprtAmt + bndlPrmtDcAmt + prmtDcAmt) + " 원");
        else $("#tot_dc_txt_" + cartId).text("- " + format.num(baseGoodsCpDcAmt + dupGoodsCpDcAmt + omniCpDcAmt + mbrDcAmt + bndlPrmtDcAmt + prmtDcAmt) + " 원");
        $("#" + cartId).find(".price-big").html(format.num(payAmt) + " 원")
    },
    goodsExcMsg: function() {
        if ($("#goodsExcMsg").val() == "Y" && orderCommon.stGbCd == "10") {
            var goodsExcAlert = {
                content: $("#goodsExcMsgPop").html(),
                callback: function() {
                    orderPaymentManager.btnStartPay()
                }
            };
            commonConfirm(goodsExcAlert);
            openLayer("commonConfirm")
        } else orderPaymentManager.btnStartPay()
    },
    btnStartPay: function() {
        var fMInYn =
            $("input[id = familyMallYN]").val();
        var sculTpCd = $("input[id=sculTpCd]").val(); //갤캠스 구분 코드 10 = 대학생/대학원, 20 = 고등학생
        if (orderCommon.stGbCd == "40")
            if ($("#siteCloseTimeCheckYn").val() != "Y")
                if (!validationManager.checkSiteCloseTime()) return false;
        if ($("#isHomefitnessPrivateGoodsYn").val() == "Y") {
            var isPrivateProduct = validationManager.homefitnessPrivateProduct();
            if (!isPrivateProduct) return false;
            var isAlreadyReservePrivateFlag = validationManager.isAlreadyReservePrivateProduct();
            if (!isAlreadyReservePrivateFlag) return false
        }
        if (!validationManager.checkOrderPayDiscount()) return false;
        if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && $("#fnetOrderAgree").val() == "Y")
            if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") {
                if (!$("#agreement-1").prop("checked") || !$("#agreement-2").prop("checked") || !$("#agreement-3").prop("checked")) {
                    var alertMsg = "주문 상품 정보 및 배송 정보를 확인하고<br>구매 및 주문약관에 동의해 주세요.";
                    commonAlert({
                        title: "alert",
                        content: alertMsg,
                        callback: function() {
                            $("#orderPaymentBtn").focus()
                        }
                    });
                    openLayer("commonAlert");
                    return false
                }
            } else {
                if (!$("#agreement-1").prop("checked") || !$("#agreement-2").prop("checked") ||
                    !$("#agreement-3").prop("checked") || !$("#agreement-5").prop("checked")) {
                    var alertMsg = "주문 및 개인정보 수집 필수 약관에<br>동의해 주세요.";
                    commonAlert({
                        title: "alert",
                        content: alertMsg,
                        callback: function() {
                            $("#agreement-1").focus();
                            $("#orderPaymentBtn").focus()
                        }
                    });
                    openLayer("commonAlert");
                    return false
                }
            }
         else if (fMInYn == "Y")
            if (!$("#agreement-1").prop("checked") || !$("#agreement-3").prop("checked")) {
                var alertMsg = "주문 및 개인정보 수집 필수 약관에<br>동의해 주세요.";
                commonAlert({
                    title: "alert",
                    content: alertMsg,
                    callback: function() {
                        $("#agreement-1").focus();
                        $("#orderPaymentBtn").focus()
                    }
                });
                openLayer("commonAlert");
                return false
            }

            var orderGoods = $("div.buy-target-goods");

            //20220802 갤캠스 고등학생 validation check
            if (fMInYn == "N" && orderCommon.stGbCd == "80" && sculTpCd == "20" ){
                if (!$("#agreement-40").prop("checked")) {
                    var alertMsg =  "법정대리인 인증이 완료되지 않았습니다.<br>법정대리인 인증을 진행해 주세요.";

                    commonAlert({title: "alert" ,content : alertMsg, callback: function(){
                            $("#agreement-40").focus();
                            $("#orderPaymentBtn").focus();
                        }});
                    openLayer('commonAlert');
                    return false;
                }
            }

        if ($("#limitDiscountYn").val() != "Y")
            if (!validationManager.checkCountForlimitDiscount()) return false;
        for (var i = 0; i < orderGoods.length; i++) {
            var arcnYn = $(orderGoods[i]).attr("data-arcn-yn");
            if (arcnYn == "Y") {
                isNeededToCheck = true;
                break
            }
        }
        var isArcn = false;
        for (var i = 0; i < orderGoods.length; i++) {
            var arcnYn = $(orderGoods[i]).attr("data-arcn-yn");
            if (arcnYn == "Y") {
                isArcn = true;
                break
            }
        }
        if (isArcn)
            if ($("#arcnYn").val() !=
                "Y") {
                openLayer("popupAirConditioner");
                return false
            } var isDryer = false;
        for (var i = 0; i < orderGoods.length; i++) {
            var dryerYn = $(orderGoods[i]).attr("data-dryer-yn");
            if (dryerYn == "Y") {
                isDryer = true;
                break
            }
        }
        if (isDryer)
            if ($("#dryerYn").val() != "Y") {
                openLayer("popupDryer");
                return false
            } if (!validationManager.memberInfo()) {
            commonAlert({
                title: "alert",
                content: "주문자 정보가 올바르지 않습니다.",
                callback: function() {
                    $("#orderPaymentBtn").focus()
                }
            });
            openLayer("commonAlert");
            return false
        }
        if ($("#order-recieve-view").length > 0) {
            if (!validationManager.receiverInfo()) {
                commonAlert({
                    title: "alert",
                    content: "수령인 정보가 올바르지 않습니다.",
                    callback: function() {
                        $("#orderPaymentBtn").focus()
                    }
                });
                openLayer("commonAlert");
                return false
            }
            if ($("#omsPsbStkCheckYn").val() != "Y")
                if ($("#winePckUpYn").val() == null || $("#winePckUpYn").val() === "" || $("#winePckUpYn").val() == "N")
                    if (!validationManager.checkOmsPsbStk()) return false
        } else if ($("#onlineStoreOnlyYn").val() == "N") {
            if (!validationManager.dlvrInfo()) {
                commonAlert({
                    title: "alert",
                    content: "배송지 정보가 올바르지 않습니다.",
                    callback: function() {
                        $("#orderPaymentBtn").focus()
                    }
                });
                openLayer("commonAlert");
                return false
            }
            if (orderCommon.stGbCd == "10" && $("#carePlusYn").val() == "Y" && $("#carePlusTp").val() == "I")
                if (!validationManager.carePlusPrevDlvrInfo()) {
                    commonAlert({
                        title: "alert",
                        content: "이전설치 배송지 정보가 올바르지 않습니다.",
                        callback: function() {
                            $("#orderPaymentBtn").focus()
                        }
                    });
                    openLayer("commonAlert");
                    return false
                } if ("1" == $("#dlvraType").val()) {
                if ($("input[name=extAdvVstYn]:checked").val() == "Y" && $(".extra-service").find("input[name=extAdvVstDate]").val() == "") {
                    $(".extra-service").find("div.advVstDateYnErr").show();
                    $(".extra-service").find("input[name=extAdvVstDate]").focus();
                    commonAlert({
                        title: "alert",
                        content: "사전 방문일을 입력해 주세요.",
                        callback: function() {
                            $("#orderPaymentBtn").focus()
                        }
                    });
                    openLayer("commonAlert");
                    return false
                } else {
                    var minDate = $(".extra-service").find("input[name=extAdvVstDate]").attr("min");
                    var maxDate = $(".extra-service").find("input[name=extAdvVstDate]").attr("max");
                    var advVstDate = $(".extra-service").find("input[name=extAdvVstDate]").val();
                    var dishwasherYn = $(".extra-service").find("input[name=dishwasherYn]").val();
                    if (dishwasherYn != "Y")
                        if (!orderPaymentManager.checkValidAdvVstDate(minDate,
                            maxDate, advVstDate)) {
                            $(".extra-service").find("div.advVstDateYnErr2").show();
                            return false
                        }
                }
                if ($(".extra-service").find("input[name=extIstHopeDate]").length > 0 && $(".extra-service").find("input[name=extIstHopeDate]").val() == "") {
                    if ($(".extra-service").find("input[name=dlvrIstYn]").val() == "Y") {
                        $(".extra-service").find("div.dlvrIstYnErr").show();
                        $(".extra-service").find("input[name=extIstHopeDate]").focus();
                        commonAlert({
                            title: "alert",
                            content: "설치 희망일을 입력해 주세요.",
                            callback: function() {
                                $("#orderPaymentBtn").focus()
                            }
                        })
                    } else {
                        $(".extra-service").find("div.dlvrIstYnErr").show();
                        $(".extra-service").find("input[name=extIstHopeDate]").focus();
                        commonAlert({
                            title: "alert",
                            content: "배송 희망일을 입력해 주세요.",
                            callback: function() {
                                $("#orderPaymentBtn").focus()
                            }
                        })
                    }
                    openLayer("commonAlert");
                    return false
                } else {
                    var minDate = $(".extra-service").find("input[name=extIstHopeDate]").attr("min");
                    var maxDate = $(".extra-service").find("input[name=extIstHopeDate]").attr("max");
                    var advVstDate = $(".extra-service").find("input[name=extIstHopeDate]").val();
                    var disableHopeDateString = $(".extra-service").find("input[name=extIstHopeDate]").data("disable-hope-day");
                    var dlvrIstYn = $(".extra-service").find("input[name=dlvrIstYn]").val();
                    if (!orderPaymentManager.checkValidExtIstHopeDate(minDate, maxDate, advVstDate, disableHopeDateString, dlvrIstYn)) {
                        $(".extra-service").find("div.dlvrIstYnErr2").show();
                        return false
                    }
                }
            } else {
                var extIstFlag = true;
                $.each($(".delivery-box"), function() {
                    if ($(this).find("input[name^=extAdvVstDate]").val() == "" && $(this).find("input[name^=extAdvVstYn]:checked").val() == "Y") {
                        $(this).find(".advVstDateYnErr").show();
                        $(this).find("input[name^=extAdvVstDate]").focus();
                        commonAlert({
                            title: "alert",
                            content: "사전 방문일을 입력해 주세요.",
                            callback: function() {
                                $("#orderPaymentBtn").focus()
                            }
                        });
                        openLayer("commonAlert");
                        extIstFlag = false;
                        return false
                    } else {
                        var minDate = $(this).find("input[name^=extAdvVstDate]").attr("min");
                        var maxDate = $(this).find("input[name^=extAdvVstDate]").attr("max");
                        var advVstDate = $(this).find("input[name^=extAdvVstDate]").val();
                        if (!orderPaymentManager.checkValidAdvVstDate(minDate, maxDate, advVstDate)) {
                            $(this).find(".advVstDateYnErr2").show();
                            extIstFlag = false;
                            return false
                        }
                    }
                    if ($(this).find("input[name^=extIstHopeDate]").length >
                        0 && $(this).find("input[name^=extIstHopeDate]").val() == "") {
                        if ($(this).find("input[name^=dlvrIstYn]").val() == "Y") {
                            $(this).find(".dlvrIstYnErr").show();
                            $(this).find("input[name^=extIstHopeDate]").focus();
                            commonAlert({
                                title: "alert",
                                content: "설치희망일을 입력해 주세요.",
                                callback: function() {
                                    $("#orderPaymentBtn").focus()
                                }
                            })
                        } else {
                            $(this).find(".dlvrIstYnErr").show();
                            $(this).find("input[name^=extIstHopeDate]").focus();
                            commonAlert({
                                title: "alert",
                                content: "배송희망일을 입력해 주세요.",
                                callback: function() {
                                    $("#orderPaymentBtn").focus()
                                }
                            })
                        }
                        openLayer("commonAlert");
                        extIstFlag = false;
                        return false
                    } else {
                        var minDate = $(this).find("input[name^=extIstHopeDate]").attr("min");
                        var maxDate = $(this).find("input[name^=extIstHopeDate]").attr("max");
                        var advVstDate = $(this).find("input[name^=extIstHopeDate]").val();
                        var disableHopeDateString = $(this).find("input[name^=extIstHopeDate]").data("disable-hope-day");
                        var dlvrIstYn = $(this).find("input[name^=dlvrIstYn]").val();
                        if (!orderPaymentManager.checkValidExtIstHopeDate(minDate, maxDate, advVstDate, disableHopeDateString, dlvrIstYn)) {
                            $(this).find(".dlvrIstYnErr2").show();
                            $(this).find("input[name^=extIstHopeDate]").focus();
                            extIstFlag = false;
                            return false
                        }
                    }
                    return true
                });
                if (!extIstFlag) return false
            }
        }
        if ($("#trade-in").length > 0)
            if (!validationManager.tradeInInfo()) {
                commonAlert({
                    title: "alert",
                    content: "Trade-In 반납모델을 선택해 주세요.",
                    callback: function() {
                        $("#orderPaymentBtn").focus()
                    }
                });
                openLayer("commonAlert");
                return false
            } if (orderCommon.stGbCd == "10" && $("#canUseMembershipPoint").val() == "N") {
            commonAlert({
                title: "alert",
                content: "주문 상품 중 결제 금액이 멤버십 사용 가능 최소 금액(5,000원)보다 작은 상품이 있습니다.",
                callback: function() {
                    $("#orderPaymentBtn").focus()
                }
            });
            openLayer("commonAlert");
            return false
        }
        if (!validationManager.isAppliedPointValue()) return false;
        if (orderCommon.mbrNo != orderCommon.CONST_NO_MEMBER_NO) {
            if (!validationManager.point()) return false;
            if (!orderDc.validFndDayPnt()) return false;
            if (!orderDc.validSpclPnt()) return false;
            if (!orderDc.validAwrdPnt()) return false;
            if (!orderDc.validMoscPnt()) return false
        }
        if (!validationManager.pay()) return false;
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")
            if ($("#isMuhanDojeonApplied").val() ==
                "Y")
                if (!orderPaymentManager.getIsMuHanDoJeoCanApply()) return false;
        if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && $("#fnetOrderAgree").val() == "N") {
            orderPaymentManager.fnetOrderAgreePop();
            return false
        }
        if ((orderCommon.stGbCd == "10" || orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "70" || orderCommon.stGbCd == "80") && $("#isolatedAreaYn").val() == "Y" && $("#isolatedAreaAgree").val() == "N") {
            if ($("#dlvrExcptPopupCd").val() == "1") openLayer("popupDelivery_0401");
            else if ($("#dlvrExcptPopupCd").val() ==
                "2") openLayer("popupDelivery_0501");
            else if ($("#dlvrExcptPopupCd").val() == "3") openLayer("popupDelivery_0502");
            else if ($("#dlvrExcptPopupCd").val() == "4") openLayer("popupDelivery_0503");
            else if ($("#dlvrExcptPopupCd").val() == "5") openLayer("popupDelivery_0504");
            else if ($("#dlvrExcptPopupCd").val() == "6") openLayer("popupDelivery_0601");
            else if ($("#dlvrExcptPopupCd").val() == "7") openLayer("popupDelivery_0602");
            else if ($("#dlvrExcptPopupCd").val() == "8") openLayer("popupDelivery_0603");
            else if ($("#dlvrExcptPopupCd").val() ==
                "9") openLayer("popupDelivery_0604");
            return false
        }
        if ((orderCommon.stGbCd == "10" || orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && $("#order-recieve-view").length == 0 && $("#qookerYn").val() != "Y")
            if (!($("#onlineStoreOnlyYn").val() == "Y" || $("#dlvrHopeDtExcpt").val() == "Y") && !(orderCommon.stGbCd == "10" && $("#carePlusYn").val() === "Y"))
                if (fn_checkExtIstHopeDate() === false) return false;
        if (orderCommon.stGbCd == "10" && $("#isHomefitnessGoodsYn").val() == "Y")
            if (!validationManager.isHomeFitTermsValidation()) return false;
        if (orderCommon.stGbCd == "10" && $("#carePlusYn").val() == "Y")
            if (!validationManager.isCareplusTermsValidation()) return false;
        if (orderCommon.stGbCd == "10" && $("#arcnCstrtYn").val() == "Y" || orderCommon.stGbCd == "20" && $("#arcnCstrtYn").val() == "Y")
            if (!validationManager.isArconConstructionValidation()) return false;
        if (orderCommon.stGbCd == "40")
            if ($("#alsomallBuyTermsYn").val() != "Y") {
                openLayer("alsomallBuyTerms");
                return false
            } if (pgPopup != null)
            if (pgPopup.closed) localStorage.setItem("ing", "N");
        if ("Y" == localStorage.getItem("ing")) {
            if (pgPopup !=
                null && !pgPopup.closed) pgPopup.focus();
            commonAlert({
                title: "alert",
                content: "결제가 진행중입니다."
            });
            openLayer("commonAlert");
            return false
        }
        var orderConfirmMsg = "주문하시겠습니까?";
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") {
            var totalGoodsAmt = parseInt($("input[name=totalGoodsAmt]").val());
            var totalFnSprtAmt = parseInt($("input[name=totalFnSprtAmt]").val());
            if (totalFnSprtAmt > 0 && totalFnSprtAmt < Math.ceil(totalGoodsAmt * .25)) orderConfirmMsg = "주문 한도 초과입니다.\n 초과되는 금액은 본인 지불로\n 주문하시겠습니까?"
        }
        if (orderCommon.stGbCd == "20" &&
            $("#isMuhanDojeonApplied").val() == "Y")
            if ($("#spcExhbnSelfPayOrder").val() == "Y") orderConfirmMsg = "현재 요청주신 특별기획전 상품의 총결제액이\n 특별한도 1,500만원을 초과하여\n 25% 임직원 할인이 미적용된 금액으로 결제가 진행됩니다.\n<br>결제를 계속하시겠습니까?";
        var confirmData = {
            content: orderConfirmMsg,
            callback: function() {
                localStorage.setItem("ing", "Y");
                $("#orderPaymentBtn").attr("disabled", "disabled");
                orderPay.getOrderNo();
                setTimeout(function() {
                    $("#orderPaymentBtn").removeAttr("disabled")
                }, 5E3)
            },
            closeCallback: function() {
                if ($("#spcExhbnSelfPayOrder").val() != undefined &&
                    $("#spcExhbnSelfPayOrder").val() == "Y") window.location.href = orderCommon.stContextPath + "cart/";
                else $("#orderPaymentBtn").focus()
            }
        };
        commonConfirm(confirmData);
        openLayer("commonConfirm");
        return true
    },
    checkValidAdvVstDate: function(minDate, maxDate, advVstDate) {
        minDate = new Date(minDate);
        maxDate = new Date(maxDate);
        advVstDate = new Date(advVstDate);
        if (minDate.getTime() > advVstDate.getTime() || maxDate.getTime() < advVstDate.getTime()) {
            commonAlert({
                title: "alert",
                content: "사전 방문일은 " + minDate.dateFormat("yyyy-MM-dd") +
                    "~" + maxDate.dateFormat("yyyy-MM-dd") + "<br/>이내로 선택 가능 합니다."
            });
            openLayer("commonAlert");
            return false
        }
        return true
    },
    checkValidExtIstHopeDate: function(minDate, maxDate, advVstDate, disableHopeDateString, dlvrIstYn) {
        minDate = new Date(minDate);
        maxDate = new Date(maxDate);
        advVstDate = new Date(advVstDate);
        if (minDate.getTime() > advVstDate.getTime() || maxDate.getTime() < advVstDate.getTime()) {
            if (dlvrIstYn == "Y") commonAlert({
                title: "alert",
                content: "설치 희망일은 " + minDate.dateFormat("yyyy-MM-dd") + "~" + maxDate.dateFormat("yyyy-MM-dd") +
                    "<br/>이내로 선택 가능 합니다."
            });
            else commonAlert({
                title: "alert",
                content: "배송 희망일은 " + minDate.dateFormat("yyyy-MM-dd") + "~" + maxDate.dateFormat("yyyy-MM-dd") + "<br/>이내로 선택 가능 합니다."
            });
            openLayer("commonAlert");
            return false
        } else if (disableHopeDateString != null && disableHopeDateString != undefined) {
            var disableHopeDateList = disableHopeDateString.split("|");
            if (disableHopeDateList.length > 0)
                for (var i = 0; i < disableHopeDateList.length; i++)
                    if (advVstDate.dateFormat("yyyyMMdd") == disableHopeDateList[i]) {
                        if (dlvrIstYn == "Y") commonAlert({
                            title: "alert",
                            content: "선택 불가능한 설치 희망일 입니다."
                        });
                        else commonAlert({
                            title: "alert",
                            content: "선택 불가능한 배송 희망일 입니다."
                        });
                        openLayer("commonAlert");
                        return false
                    }
        }
        return true
    },
    isolatedAreaAgree: function(popId) {
        if ($("#" + popId + " input[name='popDeliCheck']").is(":checked")) {
            closeLayer(popId);
            $("#isolatedAreaAgree").val("Y");
            orderPaymentManager.btnStartPay()
        } else {
            commonAlert({
                title: "alert",
                content: "결제를 계속 진행하시려면 동의 후 확인 버튼을 눌러주세요."
            });
            openLayer("commonAlert");
            return false
        }
    },
    fnetOrderAgree: function() {
        $("#fnetOrderAgree").val("Y");
        closeLayer("popupFmailyAgree");
        orderPaymentManager.btnStartPay()
    },
    fnetOrderAgreePop: function() {
        if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && $("#fnetOrderAgree").val() == "N") {
            openLayer("popupFmailyAgree");
            return false
        } else if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && $("#fnetOrderAgree").val() == "Y") {
            commonAlert({
                title: "alert",
                content: "패밀리넷에 이미 동의하셨습니다."
            });
            openLayer("commonAlert");
            return false
        }
        return true
    },
    getFnetBuyLimitInfo: function(payTotalAmt) {
        console.log("getFnetBuyLimitInfo");
        var cartTblList = $("input[name=cartIds]").closest("div.cart-tbl");
        var $element = null,
            thisSaleAmt = 0,
            thisFnSprtAmt = 0;
        for (var i = 0; i < cartTblList.length; i++) {
            $element = $(cartTblList[i]);
            thisSaleAmt = parseInt($($element.find("input[name=buyAmt]")).val());
            thisFnSprtAmt = thisSaleAmt * .25;
            $element.find("input[name=buyAmt]").val(thisSaleAmt);
            $element.find("input[name=goodsAmt]").val(thisSaleAmt);
            $element.find("input[name=fnSprtAmt]").val(thisFnSprtAmt);
            $element.find("span.price-small").show();
            $element.find("span.price-big").text(format.num(thisSaleAmt -
                thisFnSprtAmt) + "원")
        }
        $("#order_payment_total_fpnt_amt").val(0);
        $("#order_payment_total_dc_amt").val(0);
        cartTblList = $("input[name=cartIds]").closest("div.buy-target-goods");
        for (var j = 0; j < cartTblList.length; j++) {
            $element = $(cartTblList[j]);
            thisSaleAmt = parseInt($($element.find("input[name=buyAmt]")).val());
            thisFnSprtAmt = thisSaleAmt * .25;
            $element.find("input[name=buyAmt]").val(thisSaleAmt);
            $element.find("input[name=goodsAmt]").val(thisSaleAmt);
            $element.find("input[name=fnSprtAmt]").val(thisFnSprtAmt);
            $element.find("span.price-small").show();
            $element.find("span.price-big").text(format.num(thisSaleAmt - thisFnSprtAmt) + "원")
        }
        $("#order_payment_total_fpnt_amt").val(0);
        $("#order_payment_total_dc_amt").val(0)
    },
    initalize: function() {
        var buyGoodsList = $("div.buy-target-goods");
        $.each(buyGoodsList, function(idx, element) {
            $(element).attr("data-additional-fn-sprt-amt", $(element).attr("data-cart-id") + "|0")
        });
        $("#order_payment_total_additional_point_amt").val(0);
        return true
    },
    getEachFnetBuyLimitInfo: function(cartId) {
        console.log("getEachFnetBuyLimitInfo");
        var $element = $('div.cart-tbl[id="' + cartId + '"]'),
            thisSaleAmt = parseInt($($element.find("input[name=saleAmt]")).val()),
            thisFnSprtAmt = Math.ceil(thisSaleAmt * .25);
        $element.find("input[name=buyAmt]").val(thisSaleAmt);
        $element.find("input[name=goodsAmt]").val(thisSaleAmt);
        $element.find("input[name=fnSprtAmt]").val(thisFnSprtAmt)
    },
    changeFnetSaveMoney: function(obj, goodsId, svmnTpcd) {
        var that = orderPaymentManager;
        if (!validationManager.point(obj, svmnTpcd)) return;
        var pointType = $(obj).attr("point-type");
        $("input#fnet_cart_pt_" +
            pointType).prop("checked", false);
        var fnetPoint = parseInt($(obj).val() == "" ? 0 : $(obj).val());
        $(obj).next().val(goodsId + "|" + fnetPoint);
        $(obj).val(format.num(fnetPoint));
        var caluationAgain = true;
        var $targetDiv = $('div.buy-target-goods[data-goods-id="' + goodsId + '"]');
        if (svmnTpcd == "10")
            if (!orderDc.validFndDayPnt(fnetPoint)) {
                $(obj).val("");
                $(obj).next().val(goodsId + "|0");
                caluationAgain = false
            } else $targetDiv.find("input[name=fnetPoint]").val(fnetPoint);
        else if (svmnTpcd == "20")
            if (!orderDc.validSpclPnt(fnetPoint)) {
                $(obj).val("");
                $(obj).next().val(goodsId + "|0");
                caluationAgain = false
            } else $targetDiv.find("input[name=fnetSPoint]").val(fnetPoint);
        else if (svmnTpcd == "30")
            if (!orderDc.validAwrdPnt(fnetPoint)) {
                $(obj).val("");
                $(obj).next().val(goodsId + "|0");
                caluationAgain = false
            } else $targetDiv.find("input[name=fnetAPoint]").val(fnetPoint);
        else if (svmnTpcd == "40")
            if (!orderDc.validMoscPnt(fnetPoint)) {
                $(obj).val("");
                $(obj).next().val(goodsId + "|0");
                caluationAgain = false
            } else $targetDiv.find("input[name=fnetMPoint]").val(fnetPoint);
        if (caluationAgain) {
            that.calculatePointSvmnAmt();
            that.setTotalPaymentInfo();
            that.initalizeFnetOrderPayInfo(obj)
        }
        if (orderCommon.CONST_NO_MEMBER_NO != "0l")
            if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
    },
    fnetUseGoodsPoint: function(svmnTpCd, goodsId) {
        if ($("input.use-goods-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val() == "") $("input.use-goods-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val(0);
        var goodsPointInfo =
                $("input.use-goods-point-hidden[data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val(),
            currentInputPoint = parseInt($("input.use-goods-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val().replace(/,/g, ""));
        var listGoodsPointInfo = goodsPointInfo.split("|"),
            goodsId = listGoodsPointInfo[0],
            currentUsePoint = 0,
            goodsHiddenInfo = $("div.buy-target-goods[data-goods-id=" + goodsId + "]");
        var fnetPoint = parseInt(goodsHiddenInfo.find("input[name=fnetPoint]").val());
        var fnetSPoint =
            parseInt(goodsHiddenInfo.find("input[name=fnetSPoint]").val());
        var fnetAPoint = parseInt(goodsHiddenInfo.find("input[name=fnetAPoint]").val());
        var fnetMPoint = parseInt(goodsHiddenInfo.find("input[name=fnetMPoint]").val());
        var totalGoodsUsePoint = fnetPoint + fnetSPoint + fnetAPoint + fnetMPoint;
        if (orderCommon.stGbCd == "70") {
            var fnetWPoint = parseInt(goodsHiddenInfo.find("input[name=fnetWPoint]").val());
            totalGoodsUsePoint = fnetPoint + fnetSPoint + fnetAPoint + fnetMPoint + fnetWPoint
        }
        var goodsCount = parseInt(goodsHiddenInfo.find("input[name=buyQty]").val());
        var currentHavePoint = parseInt($("input.have-fnet-point[data-svmn-tp-cd=" + svmnTpCd + "]").val());
        if (svmnTpCd == orderCommon.SVMN_TP_10) currentUsePoint = fnetPoint;
        if (svmnTpCd == orderCommon.SVMN_TP_20) currentUsePoint = fnetSPoint;
        if (svmnTpCd == orderCommon.SVMN_TP_30) currentUsePoint = fnetAPoint;
        if (svmnTpCd == orderCommon.SVMN_TP_40) currentUsePoint = fnetMPoint;
        if (orderCommon.stGbCd == "70")
            if (svmnTpCd == orderCommon.SVMN_TP_50) currentUsePoint = fnetWPoint;
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd ==
            "40")
            if (currentInputPoint % goodsCount > 0) {
                commonAlert({
                    title: "alert",
                    content: "상품 개수의 배수로만 포인트를 사용하실 수 있습니다."
                });
                openLayer("commonAlert");
                $("input.use-goods-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val(format.num(currentUsePoint));
                return false
            } if (currentInputPoint > 0 && currentInputPoint < 100) {
            commonAlert({
                title: "alert",
                content: "최소 100 포인트 이상부터 사용 가능합니다."
            });
            openLayer("commonAlert");
            $("input.use-goods-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" +
                goodsId + "]").val(format.num(currentUsePoint));
            return
        }
        if (currentInputPoint > currentHavePoint) {
            commonAlert({
                title: "alert",
                content: "최대 보유 포인트보다 많은 포인트를 입력하였습니다."
            });
            openLayer("commonAlert");
            $("input.use-goods-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val(format.num(currentUsePoint));
            return
        }
        var goodsPoint = 0;
        var goodsCount = parseInt($(goodsHiddenInfo).attr("data-buy-qty"));
        var goodsBuyAmt = parseInt($(goodsHiddenInfo).find("input[name=buyAmt]").val());
        var thisBndlPrmtDcAmt =
            $.isNumeric($(goodsHiddenInfo).find("input[name=bndlPrmtDcAmt]").val()) ? parseInt($(goodsHiddenInfo).find("input[name=bndlPrmtDcAmt]").val()) : 0;
        var thisBaseGoodsCpDcAmt = parseInt($(goodsHiddenInfo).find("input[name=baseGoodsCpDcAmt]").val());
        var thisDupGoodsCpDcAmt = parseInt($(goodsHiddenInfo).find("input[name=dupGoodsCpDcAmt]").val());
        var thisOmniCpDcAmt = $.isNumeric($(goodsHiddenInfo).find("#omniCpDcAmt").val()) ? parseInt($(goodsHiddenInfo).find("#omniCpDcAmt").val()) : 0;
        var thisCpDcAmt = thisBaseGoodsCpDcAmt +
            thisDupGoodsCpDcAmt + thisOmniCpDcAmt;
        var goodsPayAmt = goodsBuyAmt - thisBndlPrmtDcAmt - thisCpDcAmt;
        if (currentInputPoint > 0 && currentInputPoint > goodsPayAmt - totalGoodsUsePoint + currentUsePoint) {
            commonAlert({
                title: "alert",
                content: "상품 금액을 초과하였습니다."
            });
            openLayer("commonAlert");
            $("input.use-goods-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val(format.num(currentUsePoint));
            return
        }
        var totalPayAmt = parseInt($("#order_payment_total_pay_amt").val()) + currentUsePoint;
        if (orderCommon.stGbCd ==
            "30") {
            var displayReturnAmt = parseInt($("#order_payment_total_return_amt").val());
            totalPayAmt -= displayReturnAmt
        }
        if (currentInputPoint > 0 && currentInputPoint > totalPayAmt) {
            commonAlert({
                title: "alert",
                content: "결제 금액을 초과하였습니다."
            });
            openLayer("commonAlert");
            $("input.use-goods-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val(format.num(currentUsePoint));
            return
        }
        $("input.use-goods-point-hidden[data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val(goodsId + "|" + currentInputPoint);
        $("input.use-goods-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "][data-goods-id=" + goodsId + "]").val(format.num(currentInputPoint));
        if (svmnTpCd == orderCommon.SVMN_TP_10) {
            $(goodsHiddenInfo).find("input[name=fnetPoint]").val(currentInputPoint);
            $("#order_payment_total_fpnt_amt").val(currentInputPoint);
            console.log("[상품별] 창립포인트 사용: " + currentInputPoint)
        }
        if (svmnTpCd == orderCommon.SVMN_TP_20) {
            $(goodsHiddenInfo).find("input[name=fnetSPoint]").val(currentInputPoint);
            $("#order_payment_total_spnt_amt").val(currentInputPoint);
            console.log("[상품별] 특별포인트 사용: " + currentInputPoint)
        }
        if (svmnTpCd == orderCommon.SVMN_TP_30) {
            $(goodsHiddenInfo).find("input[name=fnetAPoint]").val(currentInputPoint);
            $("#order_payment_total_apnt_amt").val(currentInputPoint);
            console.log("[상품별] 시상포인트 사용: " + currentInputPoint)
        }
        if (svmnTpCd == orderCommon.SVMN_TP_40) {
            $(goodsHiddenInfo).find("input[name=fnetMPoint]").val(currentInputPoint);
            $("#order_payment_total_mpnt_amt").val(currentInputPoint);
            console.log("[상품별] 모자이크포인트 사용: " + currentInputPoint)
        }
        if (orderCommon.stGbCd ==
            "70")
            if (svmnTpCd == orderCommon.SVMN_TP_50) {
                $(goodsHiddenInfo).find("input[name=fnetWPoint]").val(currentInputPoint);
                $("#order_payment_total_wpnt_amt").val(currentInputPoint);
                console.log("[상품별] 복지포인트 사용: " + currentInputPoint)
            } orderPaymentManager.calculatePointSvmnAmt();
        orderPaymentManager.setTotalPaymentInfo();
        orderPaymentManager.initalizeFnetOrderPayInfo();
        if (orderCommon.CONST_NO_MEMBER_NO != "0l")
            if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
    },
    fnetUseCartPoint: function() {
        var svmnTpCd;
        var totalGoodsUsePoint = 0;
        var currentTotalInputPoint = 0;
        var thisFpntTotalAmt = $("#order_payment_total_fpnt_amt").length > 0 ? parseInt($("#order_payment_total_fpnt_amt").val()) : 0;
        var thisSpntTotalAmt = $("#order_payment_total_spnt_amt").length > 0 ? parseInt($("#order_payment_total_spnt_amt").val()) : 0;
        var thisApntTotalAmt = $("#order_payment_total_apnt_amt").length > 0 ? parseInt($("#order_payment_total_apnt_amt").val()) : 0;
        var thisMpntTotalAmt = $("#order_payment_total_mpnt_amt").length >
        0 ? parseInt($("#order_payment_total_mpnt_amt").val()) : 0;
        var totalPayAmt = parseInt($("#order_payment_total_pay_amt").val());
        totalGoodsUsePoint = thisFpntTotalAmt + thisSpntTotalAmt + thisApntTotalAmt + thisMpntTotalAmt;
        if (orderCommon.stGbCd == "70") {
            var thisWpntTotalAmt = $("#order_payment_total_wpnt_amt").length > 0 ? parseInt($("#order_payment_total_wpnt_amt").val()) : 0;
            totalGoodsUsePoint = thisFpntTotalAmt + thisSpntTotalAmt + thisApntTotalAmt + thisMpntTotalAmt + thisWpntTotalAmt
        }
        var originalPayAmt = totalPayAmt + totalGoodsUsePoint;
        if (orderCommon.stGbCd == "30") {
            var displayReturnAmt = parseInt($("#order_payment_total_return_amt").val());
            originalPayAmt -= displayReturnAmt
        }
        $(".use-cart-point").each(function(index, item) {
            svmnTpCd = $(this).attr("data-svmn-tp-cd");
            if ($("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "]").val() == "") $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "]").val(0);
            var goodsPointInfo = $("input.use-cart-point-hidden[data-svmn-tp-cd=" + svmnTpCd + "]").val(),
                currentInputPoint = parseInt($("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" +
                    svmnTpCd + "]").val().replace(/,/g, "")),
                currentUsePoint = 0;
            var currentHavePoint = parseInt($("input.have-fnet-point[data-svmn-tp-cd=" + svmnTpCd + "]").val());
            var isClickedYn = $("input.use-all-cart-point[data-svmn-tp-cd=" + svmnTpCd + "]").val();
            if (svmnTpCd == orderCommon.SVMN_TP_10) currentUsePoint = thisFpntTotalAmt;
            if (svmnTpCd == orderCommon.SVMN_TP_20) currentUsePoint = thisSpntTotalAmt;
            if (svmnTpCd == orderCommon.SVMN_TP_30) currentUsePoint = thisApntTotalAmt;
            if (svmnTpCd == orderCommon.SVMN_TP_40) currentUsePoint = thisMpntTotalAmt;
            if (orderCommon.stGbCd == "70")
                if (svmnTpCd == orderCommon.SVMN_TP_50) currentUsePoint = thisWpntTotalAmt;
            if (currentInputPoint > 0 && currentInputPoint < 100) {
                commonAlert({
                    title: "alert",
                    content: "최소 100 포인트 이상부터 사용 가능합니다."
                });
                openLayer("commonAlert");
                $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "]").val(format.num(currentUsePoint));
                if (isClickedYn == "Y") $("input.use-all-cart-point[data-svmn-tp-cd=" + svmnTpCd + "]").val("N");
                return
            }
            if (currentInputPoint > currentHavePoint) {
                console.log("너 포인트 가진 거 보다 많이 썼다.");
                commonAlert({
                    title: "alert",
                    content: "최대 보유 포인트보다 많은 포인트를 입력하였습니다."
                });
                openLayer("commonAlert");
                $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "]").val(format.num(currentUsePoint));
                if (isClickedYn == "Y") $("input.use-all-cart-point[data-svmn-tp-cd=" + svmnTpCd + "]").val("N");
                return
            }
            currentTotalInputPoint += currentInputPoint;
            if (currentTotalInputPoint > 0 && currentTotalInputPoint > originalPayAmt) {
                console.log("너 포인트 결제금액보다 많이 썼다.");
                commonAlert({
                    title: "alert",
                    content: "결제 금액을 초과하였습니다."
                });
                openLayer("commonAlert");
                $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + orderCommon.SVMN_TP_10 + "]").val(format.num(thisFpntTotalAmt));
                $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + orderCommon.SVMN_TP_20 + "]").val(format.num(thisSpntTotalAmt));
                $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + orderCommon.SVMN_TP_30 + "]").val(format.num(thisApntTotalAmt));
                $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + orderCommon.SVMN_TP_40 + "]").val(format.num(thisMpntTotalAmt));
                $("input.use-all-cart-point[data-svmn-tp-cd=" +
                    orderCommon.SVMN_TP_10 + "]").prop("checked", false);
                $("input.use-all-cart-point[data-svmn-tp-cd=" + orderCommon.SVMN_TP_20 + "]").prop("checked", false);
                $("input.use-all-cart-point[data-svmn-tp-cd=" + orderCommon.SVMN_TP_30 + "]").prop("checked", false);
                $("input.use-all-cart-point[data-svmn-tp-cd=" + orderCommon.SVMN_TP_40 + "]").prop("checked", false);
                $("input.use-all-cart-point[data-svmn-tp-cd=" + orderCommon.SVMN_TP_10 + "]").val("N");
                $("input.use-all-cart-point[data-svmn-tp-cd=" + orderCommon.SVMN_TP_20 + "]").val("N");
                $("input.use-all-cart-point[data-svmn-tp-cd=" + orderCommon.SVMN_TP_30 + "]").val("N");
                $("input.use-all-cart-point[data-svmn-tp-cd=" + orderCommon.SVMN_TP_40 + "]").val("N");
                if (orderCommon.stGbCd == "70") {
                    $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + orderCommon.SVMN_TP_50 + "]").val(format.num(thisWpntTotalAmt));
                    $("input.use-all-cart-point[data-svmn-tp-cd=" + orderCommon.SVMN_TP_50 + "]").prop("checked", false);
                    $("input.use-all-cart-point[data-svmn-tp-cd=" + orderCommon.SVMN_TP_50 + "]").val("N")
                }
                return
            }
        });
        $(".use-cart-point").each(function(index, item) {
            svmnTpCd = $(this).attr("data-svmn-tp-cd");
            var currentInputPoint = parseInt($("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "]").val().replace(/,/g, ""));
            $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "]").val(format.num(currentInputPoint));
            if (svmnTpCd == orderCommon.SVMN_TP_10) {
                $("input.use-cart-point-hidden[name=fndDayPntInfos]").val("|" + currentInputPoint);
                $("#order_payment_total_fpnt_amt").val(currentInputPoint)
            }
            if (svmnTpCd ==
                orderCommon.SVMN_TP_20) {
                $("input.use-cart-point-hidden[name=spclPntInfos]").val("|" + currentInputPoint);
                $("#order_payment_total_spnt_amt").val(currentInputPoint)
            }
            if (svmnTpCd == orderCommon.SVMN_TP_30) {
                $("input.use-cart-point-hidden[name=awrdPntInfos]").val("|" + currentInputPoint);
                $("#order_payment_total_apnt_amt").val(currentInputPoint)
            }
            if (svmnTpCd == orderCommon.SVMN_TP_40) {
                $("input.use-cart-point-hidden[name=moscPntInfos]").val("|" + currentInputPoint);
                $("#order_payment_total_mpnt_amt").val(currentInputPoint)
            }
            if (orderCommon.stGbCd ==
                "70")
                if (svmnTpCd == orderCommon.SVMN_TP_50) {
                    $("input.use-cart-point-hidden[name=welfarePntInfos]").val("|" + currentInputPoint);
                    $("#order_payment_total_wpnt_amt").val(currentInputPoint)
                }
        });
        orderPaymentManager.setTotalPaymentInfo();
        orderPaymentManager.initalizeFnetOrderPayInfo();
        if (orderCommon.CONST_NO_MEMBER_NO != "0l")
            if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
    },
    fnetUseAllCartPoint: function(svmnTpCd) {
        var goodsPointInfo =
                $("input.use-cart-point-hidden[data-svmn-tp-cd=" + svmnTpCd + "]").val(),
            currentHavePoint = parseInt($("input.have-fnet-point[data-svmn-tp-cd=" + svmnTpCd + "]").val());
        var isClickedYn = $("input.use-all-cart-point[data-svmn-tp-cd=" + svmnTpCd + "]").val();
        if (isClickedYn == "Y") {
            $("input.use-cart-point[data-svmn-tp-cd=" + svmnTpCd + "]").val(0);
            $("input.use-all-cart-point[data-svmn-tp-cd=" + svmnTpCd + "]").val("N")
        } else {
            if (currentHavePoint < 100) return;
            var totalGoodsUsePoint = 0;
            var thisFpntTotalAmt = $("#order_payment_total_fpnt_amt").length >
            0 ? parseInt($("#order_payment_total_fpnt_amt").val()) : 0;
            var thisSpntTotalAmt = $("#order_payment_total_spnt_amt").length > 0 ? parseInt($("#order_payment_total_spnt_amt").val()) : 0;
            var thisApntTotalAmt = $("#order_payment_total_apnt_amt").length > 0 ? parseInt($("#order_payment_total_apnt_amt").val()) : 0;
            var thisMpntTotalAmt = $("#order_payment_total_mpnt_amt").length > 0 ? parseInt($("#order_payment_total_mpnt_amt").val()) : 0;
            totalGoodsUsePoint = thisFpntTotalAmt + thisSpntTotalAmt + thisApntTotalAmt + thisMpntTotalAmt;
            if (orderCommon.stGbCd ==
                "70") {
                var thisWpntTotalAmt = $("#order_payment_total_wpnt_amt").length > 0 ? parseInt($("#order_payment_total_wpnt_amt").val()) : 0;
                totalGoodsUsePoint = thisFpntTotalAmt + thisSpntTotalAmt + thisApntTotalAmt + thisMpntTotalAmt + thisWpntTotalAmt
            }
            var totalPayAmt = parseInt($("#order_payment_total_pay_amt").val());
            var currentUsePoint = 0;
            if (svmnTpCd == orderCommon.SVMN_TP_10) {
                currentUsePoint = thisFpntTotalAmt;
                totalGoodsUsePoint -= thisFpntTotalAmt
            }
            if (svmnTpCd == orderCommon.SVMN_TP_20) {
                currentUsePoint = thisSpntTotalAmt;
                totalGoodsUsePoint -=
                    thisSpntTotalAmt
            }
            if (svmnTpCd == orderCommon.SVMN_TP_30) {
                currentUsePoint = thisApntTotalAmt;
                totalGoodsUsePoint -= thisApntTotalAmt
            }
            if (svmnTpCd == orderCommon.SVMN_TP_40) {
                currentUsePoint = thisMpntTotalAmt;
                totalGoodsUsePoint -= thisMpntTotalAmt
            }
            if (orderCommon.stGbCd == "70")
                if (svmnTpCd == orderCommon.SVMN_TP_50) {
                    currentUsePoint = thisWpntTotalAmt;
                    totalGoodsUsePoint -= thisWpntTotalAmt
                } var originalPayAmt = totalPayAmt + currentUsePoint;
            if (orderCommon.stGbCd == "30") {
                var displayReturnAmt = parseInt($("#order_payment_total_return_amt").val());
                originalPayAmt -= displayReturnAmt
            }
            var thisAllCartPoint = originalPayAmt;
            if (thisAllCartPoint > currentHavePoint) thisAllCartPoint = currentHavePoint;
            $("input.use-cart-point[name=fnetPoint][data-svmn-tp-cd=" + svmnTpCd + "]").val(thisAllCartPoint);
            $("input.use-all-cart-point[data-svmn-tp-cd=" + svmnTpCd + "]").val("Y")
        }
    },
    useMembershipPoint: function() {
        if ($("#use-pt-value-10").val() == "") $("#use-pt-value-10").val(0);
        var currentInputPoint = parseInt($("#use-pt-value-10").val().replace(/,/g, "")),
            currentUsePoint = parseInt($("#order_payment_dc_svmn_use_amt").val()),
            currentHavePoint = parseInt($("#order_payment_member_svmn_rmn_amt").val());
        var totalPayAmt = parseInt($("#order_payment_total_pay_amt").val());
//        if (currentInputPoint > 0 && currentInputPoint < 5E3) {
//            commonAlert({
//                title: "alert",
//                content: "최소 5,000 포인트 이상부터 사용 가능합니다."
//            });
//            openLayer("commonAlert");
//            $("#use-pt-value-10").val(format.num(0));
//            $("#order_payment_dc_svmn_use_amt").val(format.num(0));
//            orderPaymentManager.setTotalPaymentInfo();
//            orderPaymentManager.initalizeFnetOrderPayInfo();
//            return
//        }
        if (currentInputPoint > currentHavePoint) {
            commonAlert({
                title: "alert",
                content: "최대 보유 포인트보다 많은 포인트를 입력하였습니다."
            });
            openLayer("commonAlert");
            $("#use-pt-value-10").val(format.num(currentUsePoint));
            return
        }
        if (orderCommon.stGbCd == "30") {
            var displayReturnAmt = parseInt($("#order_payment_total_return_amt").val());
            totalPayAmt -= displayReturnAmt
        }
        if (currentInputPoint > totalPayAmt + currentUsePoint) {
            commonAlert({
                title: "alert",
                content: "결제 금액을 초과하였습니다."
            });
            openLayer("commonAlert");
            $("#use-pt-value-10").val(format.num(currentUsePoint));
            return
        }
        
//        if (!(orderCommon.stGbCd == "20" || orderCommon.stGbCd ==
//            "30" || orderCommon.stGbCd == "40"))
//            if (currentInputPoint > totalPayAmt - 100) {
//                commonAlert({
//                    title: "alert",
//                    content: "결제 금액이 최소 100원 이상이도록 사용하여야 합니다."
//                });
//                openLayer("commonAlert");
//                $("#use-pt-value-10").val(format.num(currentUsePoint));
//                return
//            } 
        
        $("#use-pt-value-10").val(format.num(currentInputPoint));
        $("#order_payment_dc_svmn_use_amt").val(currentInputPoint);
        
        orderPaymentManager.setTotalPaymentInfo();
        orderPaymentManager.initalizeFnetOrderPayInfo();
        if (orderCommon.CONST_NO_MEMBER_NO != "0l")
            if (membershipPointManager !=
                "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
    },
    useAllMembershipPoint: function() {
        var currentInputPoint = parseInt($("#use-pt-value-10").val().replace(/,/g, "")),
            currentUsePoint = parseInt($("#order_payment_dc_svmn_use_amt").val()),
            currentHavePoint = parseInt($("#order_payment_member_svmn_rmn_amt").val());
        var isClickedYn = $("#mem_use_pt").val();
        if (isClickedYn == "Y") {
            $("#use-pt-value-10").val(0);
            $("#mem_use_pt").prop("checked", false);
            $("#mem_use_pt").val("N")
        } else {
            var totalPayAmt =
                parseInt($("#order_payment_total_pay_amt").val()) + currentUsePoint;
            if (orderCommon.stGbCd == "30") {
                var displayReturnAmt = parseInt($("#order_payment_total_return_amt").val());
                totalPayAmt -= displayReturnAmt
            }
            var thisAllCartPoint = totalPayAmt;
//            if (!(orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40")) thisAllCartPoint -= 100;
            if (thisAllCartPoint > currentHavePoint) thisAllCartPoint = currentHavePoint;
            $("#use-pt-value-10").val(format.num(thisAllCartPoint));
            $("#mem_use_pt").prop("checked", true);
            $("#mem_use_pt").val("Y")
        }
    },
    checkGoodsExcMsg: function() {
        var buyGoodsList = $("div.buy-target-goods");
        var goodsId = [];
        var cartId = [];
        var buyQty = [];
        console.log("goodsId.length =" + goodsId.length);
        $.each(buyGoodsList, function(idx, element) {
            goodsId.push($(element).attr("data-goods-id"));
            cartId.push($(element).attr("data-cart-id"));
            buyQty.push(parseInt($(element).attr("data-buy-qty")))
        });
        var options = {
            url: orderCommon.stContextPath + "xhr/order/chkGoodsExcMsg",
            data: {
                goodsId: goodsId,
                cartId: cartId,
                buyQty: buyQty
            },
            done: function(data) {
                if (data.goodsExcMsg != null && data.goodsExcMsg == "Y") $("#goodsExcMsg").val(data.goodsExcMsg)
            }
        };
        ajax.call(options)
    },
    getIsolatedAreaStatus: function() {
        var _orderDlvrInfo = orderPay.getOrderDlvrInfo();
        var options = {
            url: orderCommon.stContextPath + "xhr/order/getIsolatedAreaStatus",
            async: false,
            data: {
                orderDlvrInfoStr: JSON.stringify(_orderDlvrInfo)
            },
            done: function(data) {
                $("#isolatedAreaAgree").val("N");
                $("#isolatedAreaYn").val("N");
                $("#dlvrExcptTpCd").val("");
                $("#dlvrExcptPopupCd").val("");
                if (data.isolatedArea !=
                    null) {
                    $("#isolatedAreaYn").val(data.isolatedArea.isolatedAreaYn);
                    $("#dlvrExcptTpCd").val(data.isolatedArea.dlvrExcptTpCd);
                    $("#dlvrExcptPopupCd").val(data.isolatedArea.dlvrExcptPopupCd)
                }
            }
        };
        ajax.call(options)
    },
    getIsMuHanDoJeoCanApply: function() {
        var returnVal;
        var _goodsId = "";
        var _stGbCd = "";
        $(".buy-target-goods").each(function() {
            _goodsId = $(this).data("goods-id")
        });
        _stGbCd = orderCommon.stGbCd;
        var options = {
            url: orderCommon.stContextPath + "xhr/order/getIsMuHanDoJeoCanApply",
            async: false,
            data: {
                goodsId: _goodsId,
                stGbCd: _stGbCd
            },
            done: function(data) {
                if (!data.isMuHanDoJeoCanApply) {
                    commonAlert({
                        title: "alert",
                        content: "특별기획전 구매 수량을 초과하였습니다."
                    });
                    openLayer("commonAlert");
                    returnVal = false
                } else returnVal = true
            }
        };
        ajax.call(options);
        return returnVal
    },
    setCompGoodsNDlvrAmt: function() {
        var qookerListObj = $(".cartListRst");
        var qookerCartId = "",
            qookerCartTpCd = "",
            qookerCompNo = "",
            qookerBuyQty = 0,
            qookerInfo = "",
            $freeDlvrYn = "",
            $dlvrcStdCd = "",
            $dlvrcPlcUseYn = "",
            $dlvrcCdtStdCd = "",
            $dlvrcCdtCd = "",
            $dlvrcDlvrAmt = 0,
            $dlvrcBuyPrcQty = 0,
            $goodsBuyPrc =
                0,
            $bndlPrmtDcAmt = 0,
            $baseCpDcAmt = 0,
            $dupCpDcAmt = 0,
            realGoodsAmtPrc = 0,
            realBuyQtyInit = 0,
            realTotalCpAmt = 0,
            $realDlvrAmt = 0,
            $pkgDlvrNo = "";
        if (qookerListObj.length > 0) {
            var compNoArr = [];
            var compNoData;
            $(qookerListObj).each(function(k, v) {
                qookerCartId = $(this).attr("data-cart-id");
                qookerCartTpCd = $(this).attr("data-cart-tp-cd");
                if (qookerCartTpCd == "40") $("#qookerOpenYn").css("display", "");
                else $("#qookerOpenYn").css("display", "none");
                if (qookerCartTpCd == "40") {
                    qookerCompNo = $(this).attr("data-goods-comp-no");
                    qookerBuyQty =
                        $(this).attr("data-buy-qty");
                    qookerInfo = $(this).find("div.order-price");
                    $freeDlvrYn = $(qookerInfo).find("input[name=freeDlvrYn]").val();
                    $dlvrcStdCd = $(qookerInfo).find("input[name=dlvrcStdCd]").val();
                    $dlvrcPlcUseYn = $(qookerInfo).find("input[name=dlvrcPlcUseYn]").val();
                    $dlvrcCdtStdCd = $(qookerInfo).find("input[name=dlvrcCdtStdCd]").val();
                    $dlvrcCdtCd = $(qookerInfo).find("input[name=dlvrcCdtCd]").val();
                    $dlvrcDlvrAmt = $(qookerInfo).find("input[name=dlvrcDlvrAmt]").val();
                    $dlvrcBuyPrcQty = $(qookerInfo).find("input[name=dlvrcBuyPrcQty]").val();
                    $pkgDlvrNo = qookerCompNo;
                    $goodsBuyPrc = $(qookerInfo).find("input[name=goodsBuyPrc]").val();
                    $baseCpDcAmt = $(qookerInfo).find("input[name=baseGoodsCpDcAmt]").val();
                    $dupCpDcAmt = $(qookerInfo).find("input[name=dupGoodsCpDcAmt]").val();
                    $bndlPrmtDcAmt = $(qookerInfo).find("input[name=bndlPrmtDcAmt]").val();
                    realGoodsAmtPrc = Number($goodsBuyPrc) * Number(qookerBuyQty);
                    realBuyQtyInit = Number(qookerBuyQty);
                    realTotalCpAmt = Number($baseCpDcAmt) + Number($dupCpDcAmt) + Number($bndlPrmtDcAmt);
                    compNoData = {
                        qookerCompNo: qookerCompNo,
                        freeDlvrYn: $freeDlvrYn == undefined ? Y : $freeDlvrYn,
                        dlvrcStdCd: $dlvrcStdCd == undefined ? 10 : $dlvrcStdCd,
                        dlvrcPlcUseYn: $dlvrcPlcUseYn == undefined ? N : $dlvrcPlcUseYn,
                        dlvrcCdtStdCd: $dlvrcCdtStdCd == undefined ? 0 : $dlvrcCdtStdCd,
                        dlvrcCdtCd: $dlvrcCdtCd == undefined ? 0 : $dlvrcCdtCd,
                        dlvrcDlvrAmt: $dlvrcDlvrAmt == undefined ? 0 : $dlvrcDlvrAmt,
                        dlvrcBuyPrcQty: $dlvrcBuyPrcQty == undefined ? 0 : $dlvrcBuyPrcQty,
                        pkgDlvrNo: $pkgDlvrNo,
                        realGoodsAmt: realGoodsAmtPrc == undefined ? 0 : realGoodsAmtPrc,
                        realBuyQty: realBuyQtyInit == undefined ? 0 : realBuyQtyInit,
                        realTotalCpAmt: realTotalCpAmt == undefined ? 0 : realTotalCpAmt
                    };
                    compNoArr.push(compNoData)
                }
            });
            if (compNoArr.length > 0) {
                var realCompNo = "",
                    realCompGoodsAmt = 0,
                    realCompDlvrAmt = 0,
                    realCompBuyQty = 0,
                    realCompCpAmt = 0,
                    $realDlvrAmtVal = 0,
                    realDlvrcDlvrAmt = 0,
                    totalDlvrAmt = 0,
                    pricePoint = 0,
                    txValidate = "10",
                    progressPoint = 100;
                var resultCompData = [];
                for (var i = 0; i < compNoArr.length; i++) {
                    var valArr = compNoArr[i];
                    var idx = orderPaymentManager.getArrayIndex(resultCompData, valArr);
                    if (idx > -1) {
                        resultCompData[idx].freeDlvrYn = valArr.freeDlvrYn;
                        resultCompData[idx].dlvrcStdCd = valArr.dlvrcStdCd;
                        resultCompData[idx].dlvrcPlcUseYn = valArr.dlvrcPlcUseYn;
                        resultCompData[idx].dlvrcCdtStdCd = valArr.dlvrcCdtStdCd;
                        resultCompData[idx].dlvrcCdtCd = valArr.dlvrcCdtCd;
                        resultCompData[idx].dlvrcDlvrAmt = valArr.dlvrcDlvrAmt;
                        resultCompData[idx].dlvrcBuyPrcQty = valArr.dlvrcBuyPrcQty;
                        resultCompData[idx].pkgDlvrNo = valArr.pkgDlvrNo;
                        resultCompData[idx].realGoodsAmt += Number(valArr.realGoodsAmt);
                        resultCompData[idx].realBuyQty += Number(valArr.realBuyQty);
                        resultCompData[idx].realTotalCpAmt +=
                            Number(valArr.realTotalCpAmt)
                    } else resultCompData.push(valArr)
                }
                for (var i = 0; i < resultCompData.length; i++) {
                    var valArr = resultCompData[i];
                    realCompNo = valArr.qookerCompNo;
                    realCompGoodsAmt = Number(valArr.realGoodsAmt);
                    realCompBuyQty = Number(valArr.realBuyQty);
                    realCompCpAmt = Number(valArr.realTotalCpAmt);
                    $realDlvrAmt = $("#dlvrAmt_" + valArr.pkgDlvrNo);
                    $realDlvrAmt.val(0);
                    console.log(":금액: " + realCompGoodsAmt + " :수량: " + realCompBuyQty + " :쿠폰: " + realCompCpAmt);
                    if (orderCommon.stGbCd == orderCommon.ST_GB_10 && valArr.freeDlvrYn !=
                        "Y" && valArr.dlvrcStdCd != "10" && valArr.dlvrcPlcUseYn != "N") {
                        realDlvrcDlvrAmt = Number(valArr.dlvrcDlvrAmt);
                        if (valArr.dlvrcCdtCd == "10") $realDlvrAmt.val(Number(realDlvrcDlvrAmt * realCompBuyQty));
                        else $realDlvrAmt.val(Number(realDlvrcDlvrAmt));
                        txValidate = valArr.dlvrcCdtStdCd;
                        if (valArr.dlvrcCdtStdCd == "20") {
                            if (Number(realCompGoodsAmt) >= Number(valArr.dlvrcBuyPrcQty)) $realDlvrAmt.val(0);
                            pricePoint = Number(valArr.dlvrcBuyPrcQty) - Number(realCompGoodsAmt);
                            progressPoint = Number(realCompGoodsAmt) / Number(valArr.dlvrcBuyPrcQty) *
                                100
                        } else if (valArr.dlvrcCdtStdCd == "30") {
                            if (Number(realCompBuyQty) >= Number(valArr.dlvrcBuyPrcQty)) $realDlvrAmt.val(0);
                            pricePoint = Number(valArr.dlvrcBuyPrcQty) - Number(realCompBuyQty);
                            progressPoint = Number(realCompBuyQty) / Number(valArr.dlvrcBuyPrcQty) * 100
                        }
                    }
                    $realDlvrAmtVal = $realDlvrAmt.val();
                    realCompDlvrAmt = Number($realDlvrAmtVal);
                    var dlvrcInfo = $("#ship-info_" + realCompNo);
                    var priceInfo = $("#price_" + realCompNo);
                    var textFreeInfo = $("#text-free_" + realCompNo);
                    var progressInfo = $("#bar_" + realCompNo);
                    if (progressPoint >=
                        100) progressPoint = 100;
                    if (orderCommon.stGbCd == orderCommon.ST_GB_10) {
                        if (pricePoint <= 0) {
                            priceInfo.text("");
                            textFreeInfo.text("무료배송!")
                        } else if (txValidate == "20") {
                            priceInfo.text(format.num(pricePoint) + "원");
                            textFreeInfo.text("추가하면 무료배송!")
                        } else if (txValidate == "30") {
                            priceInfo.text(pricePoint + "개");
                            textFreeInfo.text("추가하면 무료배송!")
                        }
                        progressInfo.css("width", progressPoint + "%");
                        dlvrcInfo.text(format.num(realCompGoodsAmt) + "원 + 배송비 " + format.num(realCompDlvrAmt) + "원");
                        totalDlvrAmt += Number(realCompDlvrAmt);
                        $("input[name=totalDlvrAmt]").val(totalDlvrAmt);
                        $("#order_payment_total_dlvr_amt").val(totalDlvrAmt);
                        $("#order_payment_total_dlvr_amt_view").text(format.num(totalDlvrAmt))
                    }
                }
            }
        }
    },
    getArrayIndex: function(arr, obj) {
        for (var i = 0; i < arr.length; i++)
            if (arr[i].qookerCompNo === obj.qookerCompNo) return i;
        return -1
    }
};