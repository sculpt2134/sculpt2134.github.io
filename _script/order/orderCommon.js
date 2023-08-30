function tabs(obj, e) {
    if (e == 1) {
        $("#dlvraType").val("1");
        $(".extra-service").show();
        $("#delivery-tab-view2").hide();
        $(".delivery-tab-nav> ul> li >button").removeClass("on");
        $("#deliveryTab5").show();
        $(obj).addClass("on");
        $("#delivery-tab-view" + e).show();
        $(obj).addClass("on");
        if (typeof _multi_goods_order == "string") _multi_goods_order = _multi_goods_order_tmp;
        goodsSelect.calTotalAmt();
        membershipPointManager.setGainMembershipPointProcess()
    } else if (e == 2) {
        $("#dlvraType").val("2");
        $(".extra-service").hide();
        $("#delivery-tab-view1").hide();
        $(".delivery-tab-nav> ul> li >button").removeClass("on");
        $("#deliveryTab5").hide();
        $("#delivery-tab-view" + e).show();
        $(obj).addClass("on");
        if (typeof _multi_goods_order == "string") _multi_goods_order = "N";
        var totalMultiDlvrAmt = 0;
        $.each($(".order-m-area").find(".order-tbl"), function() {
            var dlvrAmt = $(this).find("input[name=dlvrAmt]").length > 0 ? parseInt($(this).find("input[name=dlvrAmt]").val()) : 0;
            totalMultiDlvrAmt = totalMultiDlvrAmt + parseInt($(this).find("input[name=buyQtyOrd]").val()) *
                dlvrAmt
        });
        $("input[name=totalMultiDlvrAmt]").val(totalMultiDlvrAmt);
        goodsSelect.calTotalAmt();
        membershipPointManager.setGainMembershipPointProcess()
    } else if (e == 4) {
        $("#dlvraType").val("1");
        $(".extra-service").show();
        $("#delivery-tab-view5").hide();
        $("#deliveryTab5").removeClass("on");
        $("#delivery-tab-view1").show();
        $(obj).addClass("on");
        if (typeof _multi_goods_order == "string") _multi_goods_order = _multi_goods_order_tmp;
        goodsSelect.calTotalAmt()
    } else if (e == 5) {
        $("#dlvraType").val("1");
        $(".extra-service").show();
        $("#delivery-tab-view1").hide();
        $(".delivery-tab-nav> ul> li >button").removeClass("on");
        $("#delivery-tab-view" + e).show();
        $(obj).addClass("on");
        if (typeof _multi_goods_order == "string") _multi_goods_order = _multi_goods_order_tmp;
        goodsSelect.calTotalAmt()
    }
}

function point_tabs(e) {
    $("input.fnet-all-use-point").prop("checked", false);
    if (e == 1) {
        $("#pointUseType1").show();
        $("#pointUseType2").hide();
        $("#rdUseType01").prop("checked", true);
        $("#rdUseType02").prop("checked", false);
        $("#rdUseType03").prop("checked", false);
        $("#rdUseType04").prop("checked", false);
        $("#svmnUseTypeCd").val("1");
        initFnetPoints("1")
    } else if (e == 2) {
        $("#pointUseType2").show();
        $("#pointUseType1").hide();
        $("#rdUseType04").prop("checked", true);
        $("#rdUseType01").prop("checked", false);
        $("#rdUseType02").prop("checked",
            false);
        $("#rdUseType03").prop("checked", false);
        $("#svmnUseTypeCd").val("2");
        initFnetPoints("2")
    }
}

function initFnetPoints(svmnUseTypeCd) {
    orderPaymentManager.initalize();
    if (svmnUseTypeCd == 1) {
        $("input.use-goods-point[name=fnetPoint]").val(0);
        $("input.use-cart-point[name=fnetPoint]").val(0);
        $("#pointUseType" + svmnUseTypeCd).find("input[name=fndDayPntInfos]").each(function(index, item) {
            var list = $(item).val().split("|");
            var goodsId = list[0];
            $(this).val(goodsId + "|0")
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=spclPntInfos]").each(function(index, item) {
            var list = $(item).val().split("|");
            var goodsId =
                list[0];
            $(this).val(goodsId + "|0")
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=awrdPntInfos]").each(function(index, item) {
            var list = $(item).val().split("|");
            var goodsId = list[0];
            $(this).val(goodsId + "|0")
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=moscPntInfos]").each(function(index, item) {
            var list = $(item).val().split("|");
            var goodsId = list[0];
            $(this).val(goodsId + "|0")
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=welfarePntInfos]").each(function(index, item) {
            var list = $(item).val().split("|");
            var goodsId = list[0];
            $(this).val(goodsId + "|0")
        })
    }
    if (svmnUseTypeCd == 2) {
        $("input.use-cart-point[name=fnetPoint]").val(0);
        $("input.use-goods-point[name=fnetPoint]").val(0);
        $("input.use-all-cart-point").prop("checked", false);
        $("input.use-all-cart-point").val("N");
        $("#pointUseType" + svmnUseTypeCd).find("input[name=fndDayPntInfos]").each(function(index, item) {
            $(this).val("|0")
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=spclPntInfos]").each(function(index, item) {
            $(this).val("|0")
        });
        $("#pointUseType" +
            svmnUseTypeCd).find("input[name=awrdPntInfos]").each(function(index, item) {
            $(this).val("|0")
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=moscPntInfos]").each(function(index, item) {
            $(this).val("|0")
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=welfarePntInfos]").each(function(index, item) {
            var list = $(item).val().split("|");
            var goodsId = list[0];
            $(this).val(goodsId + "|0")
        })
    }
    orderDc.calSvmnAmt();
    if (orderCommon.CONST_NO_MEMBER_NO != "0l")
        if (membershipPointManager != "undefined" && membershipPointManager !=
            undefined) membershipPointManager.setGainMembershipPointProcess()
}

function pay_tabs(obj, payMeansCd, usrDfn4Val) {
    $("li.pay-view").find("em.blind").remove();
    $("li.pay-view li.on").removeClass("on");
    $(".pay-nav-box button").removeClass("on");
    $(".pay-view").hide();
    $(obj).addClass("on");
    $("#pay-tab-view-" + $(obj).data("paymeans-target")).show();
    $("#payMeansCd").val(payMeansCd);
    $("#mobilCardCode").val(usrDfn4Val);
    if (payMeansCd == orderCommon.CONST_PAY_MEANS_110) {
        $(".credit-card > li, .easy-pay > li").removeClass("on");
        var firstCardCode = $("#firstCardCode").val();
        var payMeansTarget =
            $("[data-sel-card=" + firstCardCode + "]");
        payMeansTarget.addClass("on");
        setDialogSize(payMeansTarget.data("card-code"), firstCardCode);
        $(".credit-add").hide();
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")
            if (firstCardCode == "12") $("#cartPointDiv").show();
            else {
                $("#cartPointDiv").hide();
                $("#cardPointUse").prop("checked", false);
                $("#cardPointUseYn").val("N")
            }
    } else if (payMeansCd == "easypay") {
        var firstEasyPayCode = $(".easy-pay li:first-of-type").data("pay-code");
        var easyPayMeansTarget = $("[data-pay-code=" +
            firstEasyPayCode + "]");
        easyPayMeansTarget.addClass("on");
        setDialogSize(easyPayMeansTarget.data("card-code"), "");
        $("#payMeansCd").val(firstEasyPayCode)
    } else if (payMeansCd == orderCommon.CONST_PAY_MEANS_130) setDialogSize("BANK", "");
    else if (payMeansCd == orderCommon.CONST_PAY_MEANS_140) setDialogSize("ACCT", "");
    else if (payMeansCd == "nocerti");
    var _tabText = "<em class='blind'>" + $(obj).text().trim() + " 선택됨</em>";
    $(".btn-pay-means").find("em.blind").remove();
    $(obj).html($(obj).html() + _tabText);
    var _payView = $("li.pay-view");
    _payView.find("em.blind").remove();
    if (_payView.find("li.on").length > 0) {
        var _text = _payView.find("li.on > button").html().trim() + "<em class='blind'>" + _payView.find("li.on > button").attr("title") + " 선택됨</em>";
        _payView.find("li.on > button").html(_text)
    }
}

function window_resize() {
    $(window).on("resize", function() {
        var screen_size = $(window).width();
        var winH_size = $(window).height();
        var fixedH_size = $(".terms-box").outerHeight() + 90;
        var sticky = new Sticky(".payment-area");
        if (screen_size > 800) {
            $("#container .hidden-area").remove();
            $(".order-content").parent().append('<div class="hidden-area"></div>');
            if ($(".payment-area").children().is(".btn") == true) return false;
            else {
                $(".m-buy-btn-box").find(".chk-all").insertAfter(".payment-area > .terms-box > .terms-view");
                $(".m-buy-btn-box").find(".btn").insertAfter(".payment-area > .terms-box");
                $("#container").children().remove(".m-buy-btn-box")
            }
        } else {
            $("#container .hidden-area").remove();
            if ($("#container").children().is(".m-buy-btn-box") == true) return false;
            else {
                $("#container").append("<div class='m-buy-btn-box'><div class='m-buy-pay'><span class='m-buy-total'>총 주문금액 <em id='mbl_order_payment_total_goods_amt_view'>0</em>원</span><span class='m-buy-sale'>할인/포인트 <em id='mbl_order_total_dc_point_view'>0</em>원</span></div></div>");
                $(".terms-box").find(".chk-all").insertBefore(".m-buy-btn-box > .m-buy-pay");
                $(".payment-area").find(".btn").insertAfter(".m-buy-btn-box > .m-buy-pay")
            }
            var $m_coupon_btn = $(".m-coupon > li:first-child").wrapInner("<button type='button' class='m-coupon-btn'></button>");
            $m_coupon_btn.click(function() {
                if ($(this).hasClass("active")) $(this).removeClass("active");
                else {
                    $(this).addClass("active");
                    setTimeout(function() {
                        $m_coupon_btn.next().children(".wrap-droplist").find("button").click()
                    }, 1)
                }
            });
            sticky.destroy()
        }
        return true
    }).resize()
}

function setDialogSize(cardCode, selCardCode) {
    if ("Y" == orderCommon.getDeviceYn) switch (cardCode) {
        case "KBC":
            dialog.create("order_payment_pay_dialog", {
                width: 510,
                height: 760,
                modal: true
            });
            break;
        case "WOO":
            dialog.create("order_payment_pay_dialog", {
                width: 680,
                height: 780,
                modal: true
            });
            break;
        case "WRC":
        	dialog.create("order_payment_pay_dialog", {
        		width: 680,
        		height: 780,
        		modal: true
        	});
        	break;
        case "CTB":
            dialog.create("order_payment_pay_dialog", {
                width: 660,
                height: 760,
                modal: true
            });
            break;
        case "HDC":
            dialog.create("order_payment_pay_dialog", {
                width: 520,
                height: 760,
                modal: true
            });
            break;
        case "HNC":
            dialog.create("order_payment_pay_dialog", {
                width: 550,
                height: 760,
                modal: true
            });
            break;
        case "LTC":
            dialog.create("order_payment_pay_dialog", {
                width: 670,
                height: 760,
                modal: true
            });
            break;
        case "NHC":
            dialog.create("order_payment_pay_dialog", {
                width: 530,
                height: 760,
                modal: true
            });
            break;
        case "SSC":
            dialog.create("order_payment_pay_dialog", {
                width: 530,
                height: 760,
                modal: true
            });
            break;
        case "SHN":
            dialog.create("order_payment_pay_dialog", {
                width: 530,
                height: 760,
                modal: true
            });
            break;
        case "KKO":
            dialog.create("order_payment_pay_dialog", {
                width: 560,
                height: 760,
                modal: true
            });
            break;
        case "TOS":
            dialog.create("order_payment_pay_dialog", {
                width: 680,
                height: 780,
                modal: true
            });
            break;
        case "LTP":
            dialog.create("order_payment_pay_dialog", {
                width: 580,
                height: 760,
                modal: true
            });
            break;
        case "PYC":
            dialog.create("order_payment_pay_dialog", {
                width: 520,
                height: 760,
                modal: true
            });
            break;
        case "SSP":
            dialog.create("order_payment_pay_dialog", {
                width: 530,
                height: 760,
                modal: true
            });
            break;
        case "SSG":
            dialog.create("order_payment_pay_dialog", {
                width: 540,
                height: 760,
                modal: true
            });
            break;
        case "BANK":
            dialog.create("order_payment_pay_dialog", {
                width: 520,
                height: 760,
                modal: true
            });
            break;
        case "ACCT":
            dialog.create("order_payment_pay_dialog", {
                width: 520,
                height: 760,
                modal: true
            });
            break;
        default:
            dialog.create("order_payment_pay_dialog", {
                width: 850,
                height: 760,
                modal: true
            })
    } else dialog.create("order_payment_pay_dialog", {
        width: 350,
        height: 530,
        modal: true
    });
    if (cardCode != "ACCT" || cardCode != "BANK") $("#mobilCardCode").val(cardCode);
    $("#selectCardCode").val(selCardCode);
    if (selCardCode != undefined && selCardCode != "") orderPay.getCardIstmInfo()
}

function telCheck(object) {
    $(object).keyup(function(event) {
        var inputVal = $(this).val();
        inputVal = inputVal.replace(/[^0-9]/gi, "");
        $(this).val(inputVal)
    })
}

function editMemberInfo() {
    $("#liMemberInfo").hide();
    $("#liEditMemberInfo").show()
}

function setMemberInfo() {
    if (!orderOrdr.valid()) return;
    else {
        $("#spanMbrNm").text($("#order_payment_ordr_nm").val());
        $("#spanMbrMobile").text($("#order_payment_ordr_mobile").val());
        $("#spanMbrEmail").text($("#order_payment_ordr_email").val());
        $("#liMemberInfo").show();
        $("#liEditMemberInfo").hide();
        $("#order_payment_ordr_mobile").next().hide();
        $("#order_payment_ordr_email").next().hide();
        $("#order_payment_ordr_nm").next().hide()
    }
}
$("input[name=rdoDeliveryMethod]").change(function() {
    if ($(this).val() == "10") {
        $("#divMultiStorePick").hide();
        $("#divMultiStorePickMsg").hide();
        $("#divMultiDelivery").show();
        $("#divMultiDeliveryAddress").show();
        $("#divMultiDeliveryMsg").show()
    } else {
        $("#divMultiStorePick").show();
        $("#divMultiStorePickMsg").show();
        $("#divMultiDelivery").hide();
        $("#divMultiDeliveryAddress").hide();
        $("#divMultiDeliveryMsg").hide()
    }
});

function setExtAdvVstDate(obj) {
    if ($(obj).val() == "Y") $(obj).parent().parent().parent().find(".inp-block").show();
    else {
        $(obj).parent().parent().parent().find(".inp-block").hide();
        $(obj).closest("ul").find("input[name^=extAdvVstDate]").val("")
    }
}

function setEtcCardCode(obj, cardCode, selCardCode) {
    if (cardCode == "" || cardCode == undefined) $(".pay-input-box-1").hide();
    else $(".pay-input-box-1").show();
    setDialogSize(cardCode, selCardCode);
    if (obj) {
        var _this = $(obj);
        var _title = _this.text();
        _this.closest("ul").prev("#dropOrderCouponBtn06").attr("title", _title)
    }
}

function setInstallMentMonth(obj, month) {
    $("#installmentMonth").val(month)
}

function setCardPointUseYn() {
    $("#cardPointUseYn").val($("#cardPointUse").is(":checked") ? "Y" : "N")
}

function setRecentPayInfo() {
    if (orderCommon.recentPayMeansCd == "" || orderCommon.recentPayMeansCd == undefined) $(".pay-method-pay").click();
    else switch (orderCommon.recentPayMeansCd) {
        case orderCommon.CONST_PAY_MEANS_210:
            $(".pay-method-pay").click();
            break;
        case orderCommon.CONST_PAY_MEANS_220:
            setRecentEasyPay(orderCommon.CONST_PAY_MEANS_220);
            break;
        case orderCommon.CONST_PAY_MEANS_230:
            setRecentEasyPay(orderCommon.CONST_PAY_MEANS_230);
            break;
        case orderCommon.CONST_PAY_MEANS_240:
            setRecentEasyPay(orderCommon.CONST_PAY_MEANS_240);
            break;
        case orderCommon.CONST_PAY_MEANS_250:
            setRecentEasyPay(orderCommon.CONST_PAY_MEANS_250);
            break;
        case orderCommon.CONST_PAY_MEANS_260:
            setRecentEasyPay(orderCommon.CONST_PAY_MEANS_260);
            break;
        case orderCommon.CONST_PAY_MEANS_270:
            setRecentEasyPay(orderCommon.CONST_PAY_MEANS_270);
            break;
        case orderCommon.CONST_PAY_MEANS_110:
            $("[data-paymeans-target=card]").click();
            $(".credit-card > li, .easy-pay > li").removeClass("on");
            var payMeansTarget = $("[data-sel-card=" + orderCommon.recentCardcCd + "]");
            if (payMeansTarget.length <
                1) {
                $(".credit-add").show();
                $("[data-etc-sel-card=" + orderCommon.recentCardcCd + "]").click()
            } else {
                payMeansTarget.addClass("on");
                setDialogSize(payMeansTarget.data("card-code"), orderCommon.recentCardcCd);
                $(".credit-add").hide();
                if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")
                    if (orderCommon.recentCardcCd == "12") $("#cartPointDiv").show();
                    else {
                        $("#cartPointDiv").hide();
                        $("#cardPointUse").prop("checked", false);
                        $("#cardPointUseYn").val("N")
                    }
            }
            var _payView = $("li.pay-view");
            _payView.find("em.blind").remove();
            if (_payView.find("li.on").length > 0) {
                var _text = _payView.find("li.on > button").html().trim() + "<em class='blind'>" + _payView.find("li.on > button").attr("title") + " 선택됨</em>";
                _payView.find("li.on > button").html(_text)
            }
            break;
        case orderCommon.CONST_PAY_MEANS_130:
            $("[data-paymeans-target=vacct]").click();
            break;
        case orderCommon.CONST_PAY_MEANS_140:
            $("[data-paymeans-target=racct]").click();
            break;
        default:
            $(".pay-method-pay").click()
    }
}

function setRecentEasyPay(payMeansCd) {
    $("[data-paymeans-target=easy]").click();
    $(".credit-card > li, .easy-pay > li").removeClass("on");
    var easyPayMeansTarget = $("[data-pay-code=" + payMeansCd + "]");
    easyPayMeansTarget.addClass("on");
    setDialogSize(easyPayMeansTarget.data("card-code"), "");
    $("#payMeansCd").val(payMeansCd)
}

function termsAllCheck(obj) {
    console.log($(obj).attr("id"));
    var objId = $(obj).attr("id");
    if (objId == "agreement-2")
        if ($("#agreement-2").prop("checked")) $(".agreement-2").find("input[type=checkbox]").prop("checked", true);
        else $(".agreement-2").find("input[type=checkbox]").prop("checked", false);
    else if (objId == "agreement-7")
        if ($("#agreement-7").prop("checked")) $(".agreement-7").find("input[type=checkbox]").prop("checked", true);
        else $(".agreement-7").find("input[type=checkbox]").prop("checked", false);
    else if (objId ==
        "agreement-8")
        if ($("#agreement-8").prop("checked")) $(".agreement-8").find("input[type=checkbox]").prop("checked", true);
        else $(".agreement-8").find("input[type=checkbox]").prop("checked", false);
    else if (objId == "agreement-12")
        if ($("#agreement-12").prop("checked")) $(".agreement-16").find("input[type=checkbox]").prop("checked", true);
        else $(".agreement-16").find("input[type=checkbox]").prop("checked", false);
    else if (objId == "agreement-17")
        if ($("#agreement-17").prop("checked")) $(".agreement-17").find("input[type=checkbox]").prop("checked",
            true);
        else $(".agreement-17").find("input[type=checkbox]").prop("checked", false);
    else if (objId == "agreement-20")
        if ($("#agreement-20").prop("checked")) $(".agreement-20").find("input[type=checkbox]").prop("checked", true);
        else $(".agreement-20").find("input[type=checkbox]").prop("checked", false)
}

function allFnetUsePoint(obj, goodsId, svmnTpcd) {
    if (!validationManager.point()) return;
    var myFoundDayAmt = $("#myFoundDayAmt").length > 0 ? $("#myFoundDayAmt").val() : 0;
    var mySpecialAmt = $("#mySpecialAmt").length > 0 ? $("#mySpecialAmt").val() : 0;
    var myAwardAmt = $("#myAwardAmt").length > 0 ? $("#myAwardAmt").val() : 0;
    var myMosaicAmt = $("#myMosaicAmt").length > 0 ? $("#myMosaicAmt").val() : 0;
    var currentPointType = $(obj).attr("point-type"),
        currentPointInput = $("input[point-type=" + currentPointType + "].fnet-all-use-point-value"),
        currentPoint =
            $(currentPointInput).val() == "" ? 0 : parseInt($(currentPointInput).val().replace(",", ""));
    if (currentPoint > 0) $(currentPointInput).val(0);
    var totalPointInputType = "";
    if (svmnTpcd == orderCommon.SVMN_TP_10) totalPointInputType = "fpnt";
    else if (svmnTpcd == orderCommon.SVMN_TP_20) totalPointInputType = "spnt";
    else if (svmnTpcd == orderCommon.SVMN_TP_30) totalPointInputType = "apnt";
    else if (svmnTpcd == orderCommon.SVMN_TP_40) totalPointInputType = "mpnt";
    else if (svmnTpcd == orderCommon.SVMN_TP_50) totalPointInputType = "wpnt";
    $("#order_payment_total_" +
        totalPointInputType + "_amt").val(0);
    if ($(obj).is(":checked")) {
        var useSvmnAmt = 0;
        var totPayAmt = 0;
        var maxPayAmt = parseInt($("#order_payment_total_pay_amt").val()) + currentPoint;
        var limitPoint = 0;
        if (orderCommon.stGbCd == "30") maxPayAmt -= parseInt($("#totalFnSprtAmt").val());
        if (typeof maxPayAmt == "undefined") maxPayAmt = 0;
        var goodsTotalAmt = parseInt($("#order_payment_total_goods_amt").val());
        var dlvrTotalAmt = parseInt($("#order_payment_total_dlvr_amt").val());
        var dcTotalAmt = parseInt($("#order_payment_total_dc_amt").val());
        var memTotalAmt = parseInt($("#order_payment_dc_svmn_use_amt").val());
        if (typeof goodsTotalAmt == "undefined") goodsTotalAmt = 0;
        if (typeof dlvrTotalAmt == "undefined") dlvrTotalAmt = 0;
        if (typeof dcTotalAmt == "undefined") dcTotalAmt = 0;
        if (typeof memTotalAmt == "undefined") memTotalAmt = 0;
        var fpntTotalAmt = parseInt($("#order_payment_total_fpnt_amt").val());
        var spntTotalAmt = parseInt($("#order_payment_total_spnt_amt").val());
        var apntTotalAmt = parseInt($("#order_payment_total_apnt_amt").val());
        var mpntTotalAmt = parseInt($("#order_payment_total_mpnt_amt").val());
        var wpntTotalAmt = parseInt($("#order_payment_total_wpnt_amt").val());
        if (typeof fpntTotalAmt == "undefined") fpntTotalAmt = 0;
        if (typeof spntTotalAmt == "undefined") spntTotalAmt = 0;
        if (typeof apntTotalAmt == "undefined") apntTotalAmt = 0;
        if (typeof mpntTotalAmt == "undefined") mpntTotalAmt = 0;
        if (typeof wpntTotalAmt == "undefined") wpntTotalAmt = 0;
        if (svmnTpcd == "10") {
            totPayAmt = goodsTotalAmt + dlvrTotalAmt - dcTotalAmt - memTotalAmt - spntTotalAmt - apntTotalAmt - mpntTotalAmt - wpntTotalAmt;
            if (myFoundDayAmt > totPayAmt) useSvmnAmt = totPayAmt;
            else useSvmnAmt = myFoundDayAmt;
            if (maxPayAmt < useSvmnAmt) useSvmnAmt = maxPayAmt;
            $(obj).parent().parent().find("input[name=fndDayPntInfos]").val(goodsId + "|" + useSvmnAmt)
        } else if (svmnTpcd == "20") {
            totPayAmt = goodsTotalAmt + dlvrTotalAmt - dcTotalAmt - memTotalAmt - fpntTotalAmt - apntTotalAmt - mpntTotalAmt - wpntTotalAmt;
            if (mySpecialAmt > totPayAmt) useSvmnAmt = totPayAmt;
            else useSvmnAmt = mySpecialAmt;
            if (maxPayAmt < useSvmnAmt) useSvmnAmt = maxPayAmt;
            $(obj).parent().parent().find("input[name=spclPntInfos]").val(goodsId + "|" + useSvmnAmt)
        } else if (svmnTpcd ==
            "30") {
            totPayAmt = goodsTotalAmt + dlvrTotalAmt - dcTotalAmt - memTotalAmt - fpntTotalAmt - spntTotalAmt - mpntTotalAmt - wpntTotalAmt;
            if (myAwardAmt > totPayAmt) useSvmnAmt = totPayAmt;
            else useSvmnAmt = myAwardAmt;
            if (maxPayAmt < useSvmnAmt) useSvmnAmt = maxPayAmt;
            $(obj).parent().parent().find("input[name=awrdPntInfos]").val(goodsId + "|" + useSvmnAmt)
        } else if (svmnTpcd == "40") {
            totPayAmt = goodsTotalAmt + dlvrTotalAmt - dcTotalAmt - memTotalAmt - fpntTotalAmt - spntTotalAmt - apntTotalAmt - wpntTotalAmt;
            if (myMosaicAmt > totPayAmt) useSvmnAmt = totPayAmt;
            else useSvmnAmt = myMosaicAmt;
            if (maxPayAmt < useSvmnAmt) useSvmnAmt = maxPayAmt;
            $(obj).parent().parent().find("input[name=moscPntInfos]").val(goodsId + "|" + useSvmnAmt)
        } else if (svmnTpcd == "50") {
            totPayAmt = goodsTotalAmt + dlvrTotalAmt - dcTotalAmt - memTotalAmt - fpntTotalAmt - spntTotalAmt - apntTotalAmt - mpntTotalAmt;
            if (myMosaicAmt > totPayAmt) useSvmnAmt = totPayAmt;
            else useSvmnAmt = myMosaicAmt;
            if (maxPayAmt < useSvmnAmt) useSvmnAmt = maxPayAmt;
            $(obj).parent().parent().find("input[name=welfarePntInfos]").val(goodsId + "|" + useSvmnAmt)
        }
        useSvmnAmt =
            Math.floor(useSvmnAmt);
        $(obj).parent().parent().find("input[name=fnetPoint]").val(format.num(useSvmnAmt));
        if (useSvmnAmt < 1) $(obj).prop("checked", false)
    } else {
        $(obj).parent().parent().find("input[name=fnetPoint]").val("");
        if (svmnTpcd == "10") $(obj).parent().parent().find("input[name=fndDayPntInfos]").val(goodsId + "|0");
        else if (svmnTpcd == "20") $(obj).parent().parent().find("input[name=spclPntInfos]").val(goodsId + "|0");
        else if (svmnTpcd == "30") $(obj).parent().parent().find("input[name=awrdPntInfos]").val(goodsId +
            "|0");
        else if (svmnTpcd == "40") $(obj).parent().parent().find("input[name=moscPntInfos]").val(goodsId + "|0");
        else if (svmnTpcd == "50") $(obj).parent().parent().find("input[name=welfarePntInfos]").val(goodsId + "|0")
    }
    orderPaymentManager.calculatePointSvmnAmt();
    orderPaymentManager.setTotalPaymentInfo();
    if (orderCommon.CONST_NO_MEMBER_NO != "0l")
        if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
}
$(document).on("click", ".credit-card > li, .easy-pay > li", function() {
    $(".credit-card > li, .easy-pay > li").removeClass("on");
    $(this).addClass("on");
    if ($(this).data("card-code") == "etc") $(".credit-add").show();
    else {
        setDialogSize($(this).data("card-code"), $(this).data("sel-card"));
        $(".credit-add").hide();
        if ($(this).data("pay-code") != "" && $(this).data("pay-code") != undefined) $("#payMeansCd").val($(this).data("pay-code"));
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")
            if ($(this).data("card-code") ==
                "SSC") $("#cartPointDiv").show();
            else {
                $("#cartPointDiv").hide();
                $("#cardPointUse").prop("checked", false);
                $("#cardPointUseYn").val("N")
            }
    }
    $("li.pay-view").find("em.blind").remove();
    var _text = "<em class='blind'>" + $(this).attr("title") + " 선택됨</em>";
    $(this).find("button").html($(this).find("button").html() + _text)
});

function setAgreement(obj) {
    if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")
        if ($("#agreement-3").prop("checked")) $("#agreement-2").prop("checked", true);
        else $("#agreement-2").prop("checked", false);
    else {
        var divTgt = $(obj).parent().parent();
        if ($(divTgt).hasClass("agreement-2"))
            if ($("#agreement-3").prop("checked") && $("#agreement-5").prop("checked")) $("#agreement-2").prop("checked", true);
            else $("#agreement-2").prop("checked", false);
        else if ($(divTgt).hasClass("agreement-8"))
            if ($("#agreement-9").prop("checked") &&
                $("#agreement-10").prop("checked") && $("#agreement-11").prop("checked")) $("#agreement-8").prop("checked", true);
            else $("#agreement-8").prop("checked", false);
        else if ($(divTgt).hasClass("agreement-17"))
            if ($("#agreement-18").prop("checked") && $("#agreement-19").prop("checked")) $("#agreement-17").prop("checked", true);
            else $("#agreement-17").prop("checked", false)
    }
}

function setDeliveryMsg(obj, type, m) {
    if (m > 0) $("[data-dlvr-msg=" + type + "]").find("input[name=odrDeliveryMsg]").show();
    else $("[data-dlvr-msg=" + type + "]").find("input[name=odrDeliveryMsg]").hide()
}

function rglrPayDayChange() {
    var rglrPayDay = $("input[name=rglrPayDay]").val();
    var today = new Date;
    var toDate = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    var rglrPayDate = rglrPayDay.substring(rglrPayDay.length, rglrPayDay.length - 2);
    if (rglrPayDate == toDate) {
        commonAlert({
            title: "alert",
            content: "당일 정기 배송주문은 익일 결제부터 적용이 가능합니다."
        });
        openLayer("commonAlert");
        $("input[name=rglrPayDay]").focus();
        return false
    }
    return true
}

function getLastDay(year, month) {
    var date = new Date(year, month, 0);
    return date.getDate()
}
$(document).on("change", "#rglrPayDay", function() {
    var nowDate = $("#nowDate").val();
    var nowYear = nowDate.substr(0, 4);
    var nowMonth = nowDate.substr(4, 2);
    var nowDay = nowDate.substr(6, 2);
    nowDate = new Date(nowYear, nowMonth - 1, nowDay);
    var inputVal = $(this).val().length == 1 ? "0" + $(this).val() : $(this).val();
    inputVal = inputVal.replace(/[^0-9]/gi, "");
    var inputDate = new Date(nowYear, nowMonth - 1, inputVal);
    if (nowDate > inputDate) inputDate = new Date(nowYear, nowMonth, inputVal);
    var year = inputDate.getFullYear();
    var month = inputDate.getMonth() +
    1 < 10 ? "0" + (inputDate.getMonth() + 1) : inputDate.getMonth() + 1;
    var day = inputDate.getDate() < 10 ? "0" + inputDate.getDate() : inputDate.getDate();
    var lastDay = getLastDay(year, month);
    var nowLastDay = getLastDay(nowYear, nowMonth);
    if ((nowLastDay == 28 || nowLastDay == 29 || (lastDay == 28 || lastDay == 29)) && (inputVal == 29 || inputVal == 30)) {
        month = "02";
        day = "28"
    }
    if (0 < inputVal && inputVal < 31)
        if (inputVal != nowDay) {
            $("#subRglrPayDay").val(year + "-" + month + "-" + day);
            $(this).val(inputVal)
        } else {
            commonAlert({
                content: "당일 정기 배송 주문은<br>익일 결제부터 적용이 가능합니다."
            });
            openLayer("commonAlert");
            $(this).val("")
        } if (!(0 < inputVal && inputVal < 31)) {
        commonAlert({
            content: "정기 결제 일자는 1일 ~ 30일까지 입력 가능합니다."
        });
        openLayer("commonAlert");
        $(this).val("")
    }
});
$(document).on("click", ".tradeInItem", function() {
    console.log($("#trdmd").val() + "      dddddddddddddd   ");
    if ($("#trdmd").val() != 20) {
        var addCmpAmt = Number($(this).data("addcmpamt"));
        var fgUse = $(this).data("fguse");
        var maker = $(this).data("maker");
        var model = $(this).data("model");
        var modelName = $(this).data("modelname");
        var modelSeries = $(this).data("modelseries");
        var proNum = $(this).data("pronum");
        var releaseDate = $(this).data("releasedate");
        console.log(addCmpAmt + "||" + fgUse + "||" + maker + "||" + model + "||" + modelName +
            "||" + modelSeries + "||" + proNum + "||" + releaseDate);
        $(this).parent().parent().siblings(".reward-value").html("추가보상 : <em>" + addCmpAmt.toLocaleString() + "원</em>");
        $(this).parent().parent().siblings("input[name=addCmpAmt]").val(addCmpAmt);
        $(this).parent().parent().siblings("input[name=fgUse]").val(fgUse);
        $(this).parent().parent().siblings("input[name=maker]").val(maker);
        $(this).parent().parent().siblings("input[name=model]").val(model);
        $(this).parent().parent().siblings("input[name=modelName]").val(modelName);
        $(this).parent().parent().siblings("input[name=modelSeries]").val(modelSeries);
        $(this).parent().parent().siblings("input[name=proNum]").val(proNum);
        $(this).parent().parent().siblings("input[name=releaseDate]").val(releaseDate)
    } else {
        var addCmpAmt = Number($(this).data("addcmpamt"));
        var fgUse = $(this).data("fguse");
        var maker = $(this).data("maker");
        var model = $(this).data("model");
        var modelName = $(this).data("modelname");
        var modelSeries = $(this).data("modelseries");
        var proNum = $(this).data("pronum");
        var releaseDate =
            $(this).data("releasedate");
        console.log(" 노트북 :     " + addCmpAmt + "||" + fgUse + "||" + maker + "||" + model + "||" + modelName + "||" + modelSeries + "||" + proNum + "||" + releaseDate);
        $(this).parent().parent().parent().siblings("#reward-value_book").html("추가보상 : <em>" + addCmpAmt.toLocaleString() + "원</em>");
        $(this).parent().parent().parent().siblings("input[name=addCmpAmt]").val(addCmpAmt);
        $(this).parent().parent().parent().siblings("input[name=fgUse]").val(fgUse);
        $(this).parent().parent().parent().siblings("input[name=maker]").val(maker);
        $(this).parent().parent().parent().siblings("input[name=model]").val(model);
        $(this).parent().parent().parent().siblings("input[name=modelName]").val(modelName);
        $(this).parent().parent().parent().siblings("input[name=modelSeries]").val(modelSeries);
        $(this).parent().parent().parent().siblings("input[name=proNum]").val(proNum);
        $(this).parent().parent().parent().siblings("input[name=releaseDate]").val(releaseDate)
    }
});
$(document).on("click", ".tradeInItemMdName", function() {
    console.log("!!!!!!!!!!!!!");
    $(this).parent().parent().parent().siblings("#reward-value_book").html("추가보상 : <em>" + "0" + "원</em>");
    $(this).parent().parent().parent().siblings("input[name=addCmpAmt]").val("0");
    $(this).parent().parent().parent().siblings("input[name=fgUse]").val("0");
    $(this).parent().parent().parent().siblings("input[name=maker]").val("");
    $(this).parent().parent().parent().siblings("input[name=model]").val("");
    $(this).parent().parent().parent().siblings("input[name=modelName]").val("");
    $(this).parent().parent().parent().siblings("input[name=modelSeries]").val("");
    $(this).parent().parent().parent().siblings("input[name=proNum]").val("");
    $(this).parent().parent().parent().siblings("input[name=releaseDate]").val("");
    var modelName = $(this).data("modelname");
    var trdmd = $("#trdmd").val();
    if (trdmd == "20") $("#trdmdname").val(modelName);
    console.log($("#trdmdname").val());
    getTrdMdList(modelName)
});

function tradeInRtnMdlSch() {
    var htmlStr = "";
    var trdmd = $("#trdmd").val();
    ajax.call({
        url: orderCommon.stContextPath + "xhr/order/tradeInRtnMdlSch",
        type: "POST",
        dataType: "json",
        data: {
            "trdmd": trdmd
        },
        done: function(data) {
            console.log("errMsg=" + data.errMsg);
            if (data.errMsg != "" && data.errMsg != null && typeof data.errMsg != "undefined") {
                commonAlert({
                    title: "alert",
                    content: data.errMsg
                });
                openLayer("commonAlert");
                return false
            }
            if (trdmd != "20") {
                var tradeInRtnMdlList = [];
                tradeInRtnMdlList = data.tradeInPrdList;
                var htmlStr = "";
                htmlStr +=
                    '<li id="optTrade-1" role="option" class="droplist-item focused tradeInItem" aria-selected="true" data-addcmpamt = "0" data-modelname="" data-pronum="" >반납모델을 선택해 주세요.</li>\n';
                for (var i = 0; i < tradeInRtnMdlList.length; i++) htmlStr += '<li id="optTrade-' + i + '" role="option" class="droplist-item tradeInItem" data-addcmpamt="' + tradeInRtnMdlList[i].add_cmp_amt + '" data-fguse="' + tradeInRtnMdlList[i].fg_use + '" data-maker="' + tradeInRtnMdlList[i].maker + '" data-model="' + tradeInRtnMdlList[i].model + '" data-modelname="' +
                    tradeInRtnMdlList[i].model_name + '" data-modelseries="' + tradeInRtnMdlList[i].model_series + '" data-pronum="' + tradeInRtnMdlList[i].pro_num + '"  data-releasedate="' + tradeInRtnMdlList[i].release_date + '" >' + tradeInRtnMdlList[i].model_name + "</li>\n";
                $(".trdDropList").html(htmlStr)
            } else {
                var tradeInRtnMdlList = [];
                tradeInRtnMdlList = data.tradeInPrdList;
                var tradeinMdNmList = [];
                for (var i = 0; i < tradeInRtnMdlList.length; i++) tradeinMdNmList.push(tradeInRtnMdlList[i].model_name);
                var mdlist = tradeinMdNmList.filter(function(val,
                                                             idx) {
                    return tradeinMdNmList.indexOf(val) === idx
                });
                var htmlStrGb = "";
                for (var i = 0; i < mdlist.length; i++) htmlStrGb += '<li id="optTrade-' + i + '" role="option" class="droplist-item tradeInItemMdName" " data-modelname="' + mdlist[i] + '">' + mdlist[i] + "</li>\n";
                $(".trdDropListGb").html(htmlStrGb);
                var htmlStrMd = "";
                htmlStrMd += '<li id="optTrade-1" role="option" class="droplist-item focused tradeInItem" aria-selected="true" data-addcmpamt = "0" data-modelname="" data-pronum="" > 반납 모델을 선택해 주세요.</li>\n';
                $(".trdDropListMd").html(htmlStrMd)
            }
        }
    })
}

function fnOrderXssReplaceEscape(eleValue) {
    var substitutionVal = eleValue;
    if (eleValue != undefined && typeof eleValue === "string" && eleValue != "") substitutionVal = substitutionVal.replace("<", "&lt;").replace(">", "&gt;").replace("&", "").replace('"', "");
    return substitutionVal
}

function getTrdMdList(modelName) {
    console.log("===============");
    console.log(modelName);
    var trdmd = $("#trdmd").val();
    console.log(trdmd);
    console.log(modelName);
    ajax.call({
        url: orderCommon.stContextPath + "xhr/order/tradeInRtnMdlSch",
        type: "POST",
        dataType: "json",
        data: {
            "trdmd": trdmd
        },
        done: function(data) {
            console.log("errMsg=" + data.errMsg);
            console.log("================================");
            console.log("================================");
            if (data.errMsg != "" && data.errMsg != null && typeof data.errMsg != "undefined") {
                commonAlert({
                    title: "alert",
                    content: data.errMsg
                });
                openLayer("commonAlert");
                return false
            }
            var htmlStrMd = "";
            var tradeInRtnMdlList = [];
            tradeInRtnMdlList = data.tradeInPrdList;
            var tradeInModelList = [];
            for (var i = 0; i < tradeInRtnMdlList.length; i++)
                if (tradeInRtnMdlList[i].model_name == modelName) tradeInModelList.push(tradeInRtnMdlList[i]);
            $(".tradeInItem").remove();
            $("#tradeModelAddrBtn04").text("반납모델을 선택해 주세요.");
            var htmlStr = "";
            for (var i = 0; i < tradeInModelList.length; i++) htmlStr += '<li id="optTrade-' + i + '" role="option" class="droplist-item tradeInItem" data-addcmpamt="' +
                tradeInModelList[i].add_cmp_amt + '" data-fguse="' + tradeInModelList[i].fg_use + '" data-maker="' + tradeInModelList[i].maker + '" data-model="' + tradeInModelList[i].model + '" data-modelname="' + tradeInModelList[i].model_name + '" data-modelseries="' + tradeInModelList[i].model_series + '" data-pronum="' + tradeInModelList[i].pro_num + '"  data-releasedate="' + tradeInModelList[i].release_date + '" >' + tradeInModelList[i].model + "</li>\n";
            $(".trdDropListMd").html(htmlStr)
        }
    })
};