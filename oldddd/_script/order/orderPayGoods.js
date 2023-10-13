var selectedCoupon = {};
var messager = {
    data: {
        content: "",
        btnText: "확인",
        okBtnText: "확인",
        cancelBtnText: "취소"
    },
    setAlertData: function(content, btnText, callback) {
        messager.data.content = content;
        messager.data.btnText = btnText;
        if (callback != undefined) messager.data.callback = callback;
        else delete messager.data[callback]
    },
    setConfirmData: function(content, okBtnText, cancelBtnText, callback) {
        messager.data.content = content;
        messager.data.okBtnText = okBtnText;
        messager.data.cancelBtnText = cancelBtnText;
        if (callback != undefined) messager.data.callback = callback;
        else delete messager.data[callback]
    },
    alert: function(content, btnText, callback) {
        messager.setAlertData(content, btnText, callback);
        commonAlert(messager.data);
        openLayer("commonAlert")
    },
    confirm: function(content, okBtnText, cancelBtnText, callback) {
        messager.setConfirmData(content, okBtnText, cancelBtnText, callback);
        commonConfirm(messager.data);
        openLayer("commonConfirm")
    },
    catNotUseCouponByAlready: function() {
        messager.alert("이미 적용한 쿠폰은 사용할 수 없습니다.", "확인")
    }
};
var goodsSelect = {
    reloadGoodsList: function(parent) {
        this.calAmt(parent)
    },
    initGoodsQty: function(index) {
        var parent = $(".order-m-area");
        parent.find("input[name=buyQtyOrd]").val("0");
        parent.find("span[class=sel_qty]").text("0");
        parent.find(".txt_total").text("0");
        parent.find(".total_sale_Amt").text("0");
        parent.find(".total_dlvr_Amt").text("0");
        parent.find(".total_amt").text("0");
        parent.find(".total_dlvr_amt").text("0");
        parent.find(".dlvr_amt").text("무료배송");
        parent.find("input[name=goodsAmt]").val(0);
        parent.find("input[name=dlvrAmt]").val(0);
        parent.find("input[name=pkgDlvrAmts]").val(0);
        parent.find("input[name=totalGoodsAmt]").val(0);
        parent.find("input[name=totalDlvrAmt]").val(0)
    },
    qtyDown: function(obj) {
        var parent = $(obj).closest(".order-m-area");
        var goodsObj = $(obj).closest("tr");
        var qtyObj = goodsObj.find("input[name=buyQtyOrd]");
        var cartId = goodsObj.find("input[name=cartIds]").val();
        var qty = parseInt(qtyObj.val());
        if (qty == 0) return;
        var goodsInfo = orderCommon.arrGoodsInfo.filter(function(item) {
            return item.cartId == cartId
        });
        var minusQty = 1;
        if (goodsInfo[0].minOrdQty !=
            "")
            if (qty > goodsInfo[0].minOrdQty) minusQty = 1;
            else minusQty = goodsInfo[0].minOrdQty;
        qty -= minusQty;
        qtyObj.val(qty);
        this.setGoodsQty(cartId, 0 - minusQty);
        this.calAmt(parent)
    },
    qtyUp: function(obj) {
        var parent = $(obj).closest(".order-m-area");
        var goodsObj = $(obj).closest("tr");
        var qtyObj = goodsObj.find("input[name=buyQtyOrd]");
        var cartId = goodsObj.find("input[name=cartIds]").val();
        var qty = parseInt(qtyObj.val());
        var goodsInfo = orderCommon.arrGoodsInfo.filter(function(item) {
            return item.cartId == cartId
        });
        if (goodsInfo[0].buyQty ==
            goodsInfo[0].selQty) {
            commonAlert({
                title: "alert",
                content: "배송지 합산 해당 상품의 선택 가능한 수량은 " + goodsInfo[0].buyQty + "개입니다."
            });
            openLayer("commonAlert");
            return
        }
        var plusQty = 1;
        if (goodsInfo[0].minOrdQty != "") {
            var remainQty = goodsInfo[0].buyQty - goodsInfo[0].selQty;
            if (remainQty < goodsInfo[0].minOrdQty && qty < goodsInfo[0].minOrdQty) {
                var msg = "이 상품은 최소 " + goodsInfo[0].minOrdQty + "개 이상 구매 상품입니다.\n" + "다른 배송지 상품에 수량을 추가해 주세요.";
                commonAlert({
                    title: "alert",
                    content: msg
                });
                openLayer("commonAlert");
                qtyObj.val(qty);
                return
            } else if (qty >= goodsInfo[0].minOrdQty) plusQty =
                1;
            else plusQty = goodsInfo[0].minOrdQty
        }
        qty += plusQty;
        qtyObj.val(qty);
        this.setGoodsQty(cartId, plusQty);
        this.calAmt(parent);
        if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
    },
    qtySelect: function(obj) {
        var parent = $(obj).closest(".order-m-area");
        var index = parent.data("index");
        var goodsObj = $(obj).closest("tr");
        var qtyObj = goodsObj.find("input[name=buyQtyOrd]");
        var cartId = goodsObj.find("input[name=cartIds]").val();
        var goodsInfo = orderCommon.arrGoodsInfo.filter(function(item) {
            return item.cartId ==
                cartId
        });
        var totalBuyQty = 0,
            totalSelQty = 0;
        $(".order-m-area").each(function() {
            var goodsIndex = $(this).data("index");
            $($(this).find(".order-tbl")).each(function() {
                var goodsCartId = $(this).find("input[name=cartIds]").val();
                var goodsQty = $(this).find("input[name=buyQtyOrd]").val();
                if (goodsCartId == cartId) {
                    totalBuyQty += parseInt(goodsQty);
                    if (goodsIndex != index) totalSelQty += parseInt(goodsQty)
                }
            })
        });
        var prevQty = goodsInfo[0].selQty - totalSelQty;
        if (qtyObj.val() == "") {
            qtyObj.val(prevQty);
            return false
        }
        var qty = parseInt(qtyObj.val());
        if (totalBuyQty > goodsInfo[0].buyQty) {
            commonAlert({
                title: "alert",
                content: "배송지 합산 해당 상품의 선택 가능한 수량은 " + goodsInfo[0].buyQty + "개입니다."
            });
            openLayer("commonAlert");
            qtyObj.val(prevQty);
            return false
        }
        if (goodsInfo[0].minOrdQty != "" && qty != 0) {
            var remainQty = goodsInfo[0].buyQty - totalSelQty;
            if (remainQty < goodsInfo[0].minOrdQty) {
                var msg = "이 상품은 최소 " + goodsInfo[0].minOrdQty + "개 이상 구매 상품입니다.\n" + "다른 배송지 상품에 수량을 추가해 주세요.";
                commonAlert({
                    title: "alert",
                    content: msg
                });
                openLayer("commonAlert");
                qtyObj.val(prevQty);
                return false
            } else if (qty <
                goodsInfo[0].minOrdQty) {
                qtyObj.val(goodsInfo[0].minOrdQty);
                qty = parseInt(qtyObj.val())
            }
        }
        goodsInfo[0].selQty = totalSelQty + qty;
        $.each($('.order-tbl[data-cart-id="' + cartId + '"]'), function() {
            $(this).find(".sel_qty").text(goodsInfo[0].selQty)
        });
        this.calAmt(parent);
        if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess();
        return true
    },
    calAmt: function(parent) {
        var selGoodsInfo = [];
        $.each(parent.find(".order-tbl"), function() {
            var goodsData = {
                cartId: $(this).find("input[name=cartIds]").val(),
                selQty: $(this).find("input[name=buyQtyOrd]").val()
            };
            selGoodsInfo.push(goodsData)
        });
        var options = {
            url: orderCommon.stContextPath + "xhr/order/calcDlvrAmt",
            data: {
                postNoNew: parent.find("input[name=postNoNew]").val(),
                postNoOld: parent.find("input[name=postNoOld]").val(),
                selGoodsInfo: JSON.stringify(selGoodsInfo)
            },
            done: function(result) {
                console.log(result);
                var dlvrAmt = 0;
                var goodsAmt = 0;
                for (var i = 0; i < result.orderGoodsList.length; i++) {
                    dlvrAmt = result.orderGoodsList[i].pkgDlvrAmt +
                        result.orderGoodsList[i].pkgAddDlvrAmt;
                    var saleAmt = result.orderGoodsList[i].saleAmt;
                    var prmtDcAmt = result.orderGoodsList[i].prmtDcAmt;
                    var buyQty = result.orderGoodsList[i].buyQty;
                    if (prmtDcAmt == null || prmtDcAmt == 0) goodsAmt = saleAmt * buyQty;
                    else goodsAmt = (saleAmt - prmtDcAmt) * buyQty;
                    var goodObj = parent.find(".order-tbl[data-cart-id=" + result.orderGoodsList[i].cartId + "]");
                    $(goodObj).find(".txt_total").text(format.num(goodsAmt));
                    $(goodObj).find("input[name=goodsAmt]").val(goodsAmt);
                    $(goodObj).find("input[name=pkgDlvrAmts]").val(result.orderGoodsList[i].pkgDlvrAmt);
                    var pkgDlvrNo = result.orderGoodsList[i].pkgDlvrNo;
                    var dlvrObj = parent.find("td[data-pkg-dlvr-no=" + pkgDlvrNo + "]");
                    if (dlvrAmt > 0) $(dlvrObj).find(".dlvr_amt").text(format.num(dlvrAmt) + "원");
                    else $(dlvrObj).find(".dlvr_amt").text("무료배송");
                    $(dlvrObj).find("input[name=dlvrAmt]").val(dlvrAmt)
                }
                var totalGoodsAmt = 0,
                    totalDlvrgoodsAmt = 0;
                $.each(parent.find(".order-tbl"), function() {
                    totalGoodsAmt += parseInt($(this).find("input[name=goodsAmt]").val());
                    if ($(this).find("input[name=dlvrAmt]").length > 0) totalDlvrgoodsAmt +=
                        parseInt($(this).find("input[name=dlvrAmt]").val())
                });
                var totalObj = parent.find(".total_price");
                $(totalObj).find(".total_sale_Amt").text(format.num(totalGoodsAmt));
                $(totalObj).find(".total_dlvr_amt").text(format.num(totalDlvrgoodsAmt));
                $(totalObj).find(".total_amt").text(format.num(totalGoodsAmt + totalDlvrgoodsAmt));
                $(totalObj).find("input[name=totalGoodsAmt]").val(totalGoodsAmt);
                $(totalObj).find("input[name=totalDlvrAmt]").val(totalDlvrgoodsAmt);
                goodsSelect.calTotalAmt();
                if (membershipPointManager !=
                    "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
            }
        };
        ajax.call(options)
    },
    setGoodsQty: function(cartId, count) {
        for (var i = 0; i < orderCommon.arrGoodsInfo.length; i++)
            if (orderCommon.arrGoodsInfo[i].cartId == cartId) {
                orderCommon.arrGoodsInfo[i].selQty += count;
                $.each($('.order-tbl[data-cart-id="' + cartId + '"]'), function() {
                    $(this).find(".sel_qty").text(orderCommon.arrGoodsInfo[i].selQty)
                })
            }
    },
    calTotalAmt: function(type) {
        console.log("orderPayGoods.js : calTotalAmt");
        console.log("??");
        orderPaymentManager.setCompGoodsNDlvrAmt();
        var totalGoodsAmt = 0,
            totalDlvrAmt = 0,
            totalDcAmt = 0,
            totalFnSprtAmt = 0,
            totGoodsCpDcAmt = 0,
            totOmniCpCdAmt = 0;
        totalGoodsAmt = parseInt($("input[name=totalGoodsAmt]").val());
        if ("1" == $("#dlvraType").val() && $("#dlvraType").val() != undefined) totalDlvrAmt = parseInt($("input[name=totalDlvrAmt]").val());
        else totalDlvrAmt = parseInt($("input[name=totalMultiDlvrAmt]").val());
        $("#order_payment_total_goods_amt_view").text(format.num(totalGoodsAmt));
        $("#order_payment_total_dlvr_amt_view").text(format.num(totalDlvrAmt));
        $("#order_payment_total_goods_amt").val(totalGoodsAmt);
        $("#order_payment_total_dlvr_amt").val(totalDlvrAmt);
        $("input[id^='baseGoodsCpDcAmt']").each(function() {
            totGoodsCpDcAmt += parseInt($(this).val())
        });
        $("input[id^='dupGoodsCpDcAmt']").each(function() {
            totGoodsCpDcAmt += parseInt($(this).val())
        });
        $("#totalGoodsCpDcAmt").val(totGoodsCpDcAmt);
        $("input[id^='omniCpDcAmt']").each(function() {
            totOmniCpCdAmt += parseInt($(this).val())
        });
        $("#totalOmniCpDcAmt").val(totOmniCpCdAmt);
        if (parseInt($("#totalMemDcsAmt").val()) +
            parseInt($("#totalPrmtDcAmt").val()) > 0) $("#order_payment_benefit_amt_view").text("-" + format.num(parseInt($("#totalMemDcsAmt").val()) + parseInt($("#totalPrmtDcAmt").val())) + "원");
        if (parseInt($("#totalGoodsCpDcAmt").val()) > 0) $("#order_payment_dc_goods_cp_amt_view").text("-" + format.num(parseInt($("#totalGoodsCpDcAmt").val())) + "원");
        else $("#order_payment_dc_goods_cp_amt_view").text("0원");
        if (parseInt($("#totalCartCpDcAmt").val()) > 0);
        if (parseInt($("#totalOmniCpDcAmt").val()) > 0) $("#order_payment_dc_omni_cp_amt_view").text("-" +
            format.num(parseInt($("#totalOmniCpDcAmt").val())) + "원");
        else $("#order_payment_dc_omni_cp_amt_view").text("0원");
        if (type == "goodsCoupon") $("#totalCartCpDcAmt").val("0");
        totalDcAmt = parseInt($("#totalMemDcsAmt").val()) + parseInt($("#totalPrmtDcAmt").val()) + parseInt($("#totalGoodsCpDcAmt").val()) + parseInt($("#totalOmniCpDcAmt").val()) + parseInt($("#totalRglrDlvrDcAmt").val());
        totalFnSprtAmt = Number($("#totalFnSprtAmt").val());
        $("#order_payment_total_dc_amt").val(totalDcAmt);
        if (totalDcAmt > 0) $("#order_payment_total_dc_amt_view").html("-" +
            format.num(totalDcAmt));
        else $("#order_payment_total_dc_amt_view").html("0");
        var totalFnSprtAmtString = format.num(totalFnSprtAmt);
        if (orderCommon.stGbCd != "30") totalFnSprtAmtString = "-" + totalFnSprtAmtString;
        if (totalFnSprtAmt > 0) $("#order_payment_total_fn_sprt_amt_view").html(totalFnSprtAmtString);
        else $("#order_payment_total_fn_sprt_amt_view").html("0");
        if (orderCommon.stGbCd == "30") $("#order_payment_total_return_amt_view").html(totalFnSprtAmtString);
        orderPay.calTotalAmt(type);
        if ($("#iotOrderYn").val() ==
            "Y") orderPaymentManager.setTotalPaymentInfo()
    },
    freebieOptSelect: function(obj, cartId, freebieKey, idx, buyQty, frbInfos) {
        var key = freebieKey + "_" + idx;
        if (idx == "99") {
            $("#optCartFreebie" + key).removeAttr("aria-selected").removeClass("focused");
            $(obj).parents(".wrap-droplist").removeClass("active").removeClass("bottom");
            $("#dropCartFreebieBtn" + freebieKey).css("color", "#999");
            $("#dropCartFreebieBtn" + freebieKey).html("선택안함");
            $("div[id^=selectedFreebie" + freebieKey + "]").remove()
        } else {
            $("div[id^=noneSelectedFreebie" +
                freebieKey + "]").remove();
            if ($("#" + freebieKey).length == 0) $('<div class="order-select-list" id=' + freebieKey + "></div>").insertAfter($("#dropCartFreebie" + freebieKey));
            var appendDiv = $(obj).clone();
            var dataOmni = $("#optCartFreebie" + key).attr("data-omni");
            appendDiv = $(appendDiv).find("div").removeClass("link-gift").addClass("gifts-select").attr("id", "selectedFreebie" + freebieKey + "_" + idx);
            appendDiv = $(appendDiv).append('<button type="button" data-omni="' + dataOmni + '" onclick="goodsSelect.removeSelectedFreebie(\'' +
                cartId + "','" + freebieKey + "','" + idx + '\');" class="btn-del"><span class="blind">삭제</span></button>');
            appendDiv = $(appendDiv).append('<input type="hidden" name="frbInfos" value="' + frbInfos + '">');
            $("#" + freebieKey).append($(appendDiv));
            var str = "";
            var qty = buyQty;
            var lmtQty = $("#dropCartFreebieBtn" + freebieKey).attr("data-lmtQty");
            qty = qty * lmtQty;
            var liCnt = $("div[id^=selectedFreebie" + freebieKey + "]").length;
            if (qty > liCnt) {
                str = "사은품을 " + (qty - liCnt) + "개 더 선택하세요";
                $("#dropCartFreebieBtn" + freebieKey).attr("disabled", false)
            } else {
                str =
                    "사은품을 모두 선택하셨습니다";
                $("#dropCartFreebieBtn" + freebieKey).attr("disabled", true);
                $(obj).parents(".wrap-droplist").removeClass("active").removeClass("bottom")
            }
            $("#dropCartFreebieBtn" + freebieKey).css("color", "#999");
            $("#dropCartFreebieBtn" + freebieKey).html(str)
        }
    },
    removeSelectedFreebie: function(cartId, freebieKey, idx) {
        var str = "";
        var qty = $("#cart_goods_buy_qty_" + cartId).val();
        var liCnt = $("div[id^=selectedFreebie" + freebieKey + "]").length;
        var lmtQty = $("#dropCartFreebieBtn" + freebieKey).attr("data-lmtQty");
        qty =
            qty * lmtQty;
        liCnt = liCnt - 1;
        if (liCnt == 0) {
            $("#dropCartFreebieBtn" + freebieKey).attr("disabled", false);
            str = "사은품을 " + qty + "개 선택하세요"
        } else if (qty > liCnt) {
            $("#dropCartFreebieBtn" + freebieKey).attr("disabled", false);
            str = "사은품을 " + (qty - liCnt) + "개 더 선택하세요"
        } else {
            $("#dropCartFreebieBtn" + freebieKey).attr("disabled", true);
            str = "사은품을 모두 선택하셨습니다"
        }
        $("#dropCartFreebieBtn" + freebieKey).html(str);
        $("#selectedFreebie" + freebieKey + "_" + idx).remove();
        if (liCnt == 0) $("#" + freebieKey).remove()
    },
    couponOptSelect: function(obj, mbrCpNo, cpNo, cartId,
                              couponKey, idx, cpKindCd, multiAplYn, cpGbCd) {
        var res = false;
        console.log("orderpaygoods.js: couponOptselect");
        if ($("#isHomefitnessGoodsYn").val() == "Y") {
            var alertData = {
                content: "해당 금액은 무료 이용기간 종료 후 자동 결제 되는 금액입니다." + "- 주문결제 페이지 금액과 할인 결제 금액은 상이 할 수 있습니다.<br>" + "*결제를 원하지 않으시면 무료 이용기간 종료 전 환불/해지 신청바랍니다."
            };
            commonAlert(alertData);
            openLayer("commonAlert")
        }
        $("div[name=couponselectList]").each(function(key, item) {
            if ($(item).attr("data-mbrCpNo") == mbrCpNo) {
                res = true;
                return false
            }
        });
        if (res) {
            var alertData$0 = {
                content: "이미 선택된 쿠폰이 존재합니다."
            };
            commonAlert(alertData$0);
            openLayer("commonAlert");
            if (event) event.stopPropagation();
            return false
        }
        console.log("orderPayGoods.js couponOptSelect cpKindCd:" + cpKindCd);
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") {
            var cpAplCd = $(obj).attr("data-cp-apl-cd");
            console.log("cpAplCd:" + cpAplCd);
            if (cpAplCd == "20") {
                if ($("#" + cartId).find("input[name='buyQtyOrd']").val() > 1) {
                    var alertData$1 = {
                        content: "정액 쿠폰은 상품 수량이 1개 일때만 사용 가능합니다."
                    };
                    commonAlert(alertData$1);
                    openLayer("commonAlert");
                    $("#dropCartCouponeBtn" +
                        couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
                    $("#couponSelectArea" + couponKey).attr("data-cpNo", "").attr("data-mbrCpNo", "").children().remove();
                    return
                }
            } else if (cpAplCd == "10")
                if (multiAplYn == "N" && $("#" + cartId).find("input[name='buyQtyOrd']").val() > 1) {
                    var alertData$2 = {
                        content: "단수적용 쿠폰은 상품 수량이 1개 일때만 사용 가능합니다."
                    };
                    commonAlert(alertData$2);
                    openLayer("commonAlert");
                    $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
                    $("#couponSelectArea" + couponKey).attr("data-cpNo", "").attr("data-mbrCpNo",
                        "").children().remove();
                    return
                }
        }
        var goodsUnitBuyAmt = $(obj).attr("data-goods-buy-prc");
        $("#pointUseType1").find("input:checked").trigger("click");
        $("#pointUseType2").find("input:checked").trigger("click");
        $("#mem_use_pt").prop("checked", false);
        $("#order_payment_dc_svmn_use_amt").val(0);
        $("#use-pt-value-10").val(0);
        orderPaymentManager.addCouponInfo(obj, mbrCpNo, cpNo, cartId, couponKey, idx, cpKindCd, multiAplYn, cpGbCd, goodsUnitBuyAmt);
        $(obj).prevAll().attr("aria-selected", false);
        $(obj).nextAll().attr("aria-selected",
            false);
        $(obj).attr("aria-selected", true)
    },
    getCartGoodsCpDcInfo: function(cartId, tMbrCpNo, tDupMbrCpNo, mbrCpNo, cpNo, couponKey, idx, isDup) {
        console.log("orderPayGoods.js getCartGoodsCpDcInfo");
        var options = {
            url: orderCommon.stContextPath + "xhr/order/getCartGoodsCpDcInfo",
            data: {
                cartId: cartId,
                mbrCpNo: tMbrCpNo,
                dupMbrCpNo: tDupMbrCpNo
            },
            done: function(data) {
                var couponDcInfo = data.couponDcInfo;
                if (couponDcInfo.baseCpUsePsbYn == "N" || couponDcInfo.dupCpUsePsbYn == "N") {
                    var alertData = {
                        content: "사용할 수 없는 쿠폰입니다."
                    };
                    commonAlert(alertData);
                    openLayer("commonAlert");
                    $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
                    return
                }
                var unitCpAmt = 0,
                    totCpAmt = 0;
                if (isDup == "Y") {
                    unitCpAmt = Number(couponDcInfo.unitDupCpDcAmt);
                    totCpAmt = Number(couponDcInfo.dupCpDcAmt)
                } else {
                    unitCpAmt = Number(couponDcInfo.unitCpDcAmt);
                    totCpAmt = Number(couponDcInfo.baseCpDcAmt)
                }
                var prmtDcPrc = $('div.order-tbl[id="' + cartId + '"]').find('input[name="prmtDcPrc"]').val();
                var newPrmtDcPrc = parseInt(prmtDcPrc) - unitCpAmt;
                $('div.order-tbl[id="' + cartId + '"]').find('input[name="dupGoodsCpDcAmt"]').val(unitCpAmt);
                $('div.order-tbl[id="' + cartId + '"]').find("div.order-price span.price-big").text(newPrmtDcPrc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
                var listTotalDiscountPrice = $("div.order-price").find('input[name="dupGoodsCpDcAmt"]');
                var totalDiscountPrice = parseInt($("#totalMemDcsAmt").val());
                $.each(listTotalDiscountPrice, function(idx, element) {
                    totalDiscountPrice += parseInt($(element).val())
                });
                var StringDiscountPrice = 0;
                if (totalDiscountPrice > 0) StringDiscountPrice = "-" + totalDiscountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                    ",");
                $("#order_payment_total_dc_amt_view").text(StringDiscountPrice);
                $("#order_payment_total_dc_amt").val(totalDiscountPrice);
                $("#order_payment_dc_goods_cp_amt_view").text(StringDiscountPrice + "원");
                goodsSelect.renderSelectedCoupon(mbrCpNo, cpNo, cartId, couponKey, idx, unitCpAmt, totCpAmt);
                goodsSelect.setCouponDcAmtInfo(cartId, unitCpAmt);
                if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
            }
        };
        ajax.call(options)
    },
    removeSelectedCoupon: function(couponKey) {
        console.log("removeSelectedCoupon");
        orderPaymentManager.removeCouponInfo(couponKey);
        if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
    },
    renderSelectedCoupon: function(cpKindCd, mbrCpNo, cpNo, cartId, couponKey, idx, unitCpAmt, totCpAmt) {
        console.log("orderPayGoods.js renderSelectedCoupon");
        var obj = $("#optCartCoupon" + couponKey + "_" + idx);
        var key = couponKey + "_" + idx;
        var cpNm = $("#optCartCoupon" + key)[0].innerText.split("\n")[0];
        var couponInfo = cartId + "|" + mbrCpNo;
        var isDup =
            couponKey.charAt(couponKey.length - 1);
        var dataOmni = $("#optCartCoupon" + key).attr("data-omni");
        couponInfo += "|" + unitCpAmt + "|" + totCpAmt + "|" + totCpAmt + "|" + cpNo + "|" + couponKey;
        if (isDup == "Y") couponInfo += "|DUP";
        else couponInfo += "|BASE";
        $("#couponSelectArea" + couponKey).append('<div class="gifts-select gifts-coupone"><span class="names">' + cpNm + "</span><button onclick=\"orderPaymentManager.removeCouponInfo('" + couponKey + '\');" type="button" class="btn-del" data-omni="' + dataOmni + '"><span class="blind">삭제</span></button></div>');
        $("#couponSelectArea" + couponKey).append('<input type="hidden" name="cartCpInfos" value="' + couponInfo + '">');
        var setCpinfos = orderCommon.CONST_CP_KIND_10 + "|" + cartId + "|" + mbrCpNo + "|" + unitCpAmt + "|" + totCpAmt + "|" + cpNo;
        $("#couponSelectArea" + couponKey).append('<input type="hidden" name="cpInfos" value="' + setCpinfos + '">');
        $("#couponSelectArea" + couponKey).attr("data-cpNo", cpNo);
        $("#couponSelectArea" + couponKey).attr("data-mbrCpNo", mbrCpNo);
        $(obj).parents(".wrap-droplist").removeClass("bottom");
        $(obj).parents(".wrap-droplist").click();
        $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰이 적용되었습니다.");
        $("#dropCartCouponeBtn" + couponKey).attr("disabled", true)
    },
    setRemoveCouponDcAmtInfo: function(cartId) {
        var goodsAmt = Number($("#goodsAmt" + cartId).val()),
            buyAmt = Number($("#buyAmt" + cartId).val()),
            baseGoodsCpDcAmt = Number($("#baseGoodsCpDcAmt" + cartId).val()),
            dupGoodsCpDcAmt = Number($("#dupGoodsCpDcAmt" + cartId).val()),
            payAmt = buyAmt - baseGoodsCpDcAmt - dupGoodsCpDcAmt,
            omniCpAplVal = Number($("#omniCpAplVal").val()),
            omniCpDcAmt = 0;
        if (omniCpAplVal > 0) omniCpDcAmt =
            Math.round(payAmt * (omniCpAplVal / 100) / 100) * 100;
        payAmt = payAmt - omniCpDcAmt;
        $("#omniCpDcAmt" + cartId).val(omniCpDcAmt);
        if (payAmt < goodsAmt) $("#" + cartId).find(".price-small").show();
        else $("#" + cartId).find(".price-small").hide();
        $("#" + cartId).find(".price-big").html(format.num(payAmt) + "원");
        var listTotalDiscountPrice = $("div.order-price").find('input[name="dupGoodsCpDcAmt"]');
        var totalDiscountPrice = parseInt($("#totalMemDcsAmt").val());
        $.each(listTotalDiscountPrice, function(idx, element) {
            totalDiscountPrice +=
                parseInt($(element).val())
        });
        var StringDiscountPrice = 0;
        if (totalDiscountPrice > 0) StringDiscountPrice = "-" + totalDiscountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#order_payment_total_dc_amt_view").text(StringDiscountPrice);
        $("#order_payment_total_dc_amt").val(totalDiscountPrice);
        $("#order_payment_dc_goods_cp_amt_view").text(StringDiscountPrice + "원");
        goodsSelect.calTotalAmt(parseInt($("#totalCartCpDcAmt").val()) > 0 ? "goodsCoupon" : "")
    },
    setCouponDcAmtInfo: function(cartId) {
        var goodsAmt = Number($("#goodsAmt" +
                cartId).val()),
            buyAmt = Number($("#buyAmt" + cartId).val()),
            baseGoodsCpDcAmt = Number($("#baseGoodsCpDcAmt" + cartId).val()),
            dupGoodsCpDcAmt = Number($("#dupGoodsCpDcAmt" + cartId).val()),
            payAmt = buyAmt - baseGoodsCpDcAmt - dupGoodsCpDcAmt,
            omniCpAplVal = Number($("#omniCpAplVal").val()),
            omniCpDcAmt = 0;
        if (omniCpAplVal > 0) omniCpDcAmt = Math.round(payAmt * (omniCpAplVal / 100) / 100) * 100;
        payAmt = payAmt - omniCpDcAmt;
        $("#omniCpDcAmt" + cartId).val(omniCpDcAmt);
        if (payAmt < goodsAmt) $("#" + cartId).find(".price-small").show();
        else $("#" + cartId).find(".price-small").hide();
        $("#" + cartId).find(".price-big").html(format.num(payAmt) + "원");
        goodsSelect.calTotalAmt(parseInt($("#totalCartCpDcAmt").val()) > 0 ? "goodsCoupon" : "")
    },
    applyOmniCoupon: function(type) {
        var omniCpAplVal = Number($("#omniCpAplVal").val()),
            mobileYn = "N",
            sampanYn = "Y";
        var omniCpInfo = $("#omniCpInfo").val() != undefined ? $("#omniCpInfo").val() : "";
        var omniApplyFlag = true;
        if ($("#qookerYn").val() == "Y") return;
        if (omniCpInfo != "") {
            $(".omni-coupon").each(function() {
                var cartId = $(this).attr("data-cartId");
                mobileYn = $("#" + cartId).attr("data-mobile-yn");
                var compGbCd = $("#" + cartId).attr("data-comp-gb-cd");
                if (typeof def_st_galaxy_campus == "undefined")
                    if (orderCouponOmniTG == "10" && mobileYn == "Y") {
                        omniApplyFlag = false;
                        return false
                    } if (compGbCd == orderCommon.COMP_GB_CD_10) {
                    omniApplyFlag = false;
                    sampanYn = "N"
                }
            });
            if ($(".order-m-area").find(".order-multi").length > 0) {
                goodsSelect.deleteOmniCoupon();
                var alertData = {
                    content: "번들 상품은 옴니쿠폰을 적용 할 수 없습니다."
                };
                commonAlert(alertData);
                openLayer("commonAlert");
                return
            }
            if (typeof def_st_galaxy_campus == "undefined")
                if (!omniApplyFlag &&
                    orderCouponOmniTG == "10" && mobileYn == "Y") {
                    goodsSelect.deleteOmniCoupon();
                    var alertData$3 = {
                        content: "모바일 상품은 옴니쿠폰을 적용 할 수 없습니다."
                    };
                    commonAlert(alertData$3);
                    openLayer("commonAlert");
                    return
                } if (!omniApplyFlag && sampanYn == "N") {
                goodsSelect.deleteOmniCoupon();
                var alertData$4 = {
                    content: "옴니쿠폰을 적용할 수 없는 상품이 있습니다."
                };
                commonAlert(alertData$4);
                openLayer("commonAlert");
                return
            }
            if (!omniApplyFlag && sampanYn == "Y" && mobileYn == "Y") {
                goodsSelect.deleteOmniCoupon();
                var alertData$5 = {
                    content: "옴니쿠폰을 적용할 수 없는 상품이 있습니다."
                };
                commonAlert(alertData$5);
                openLayer("commonAlert");
                return
            }
        }
        if (omniCpInfo != "") {
            $(".omni-coupon").find("span[class=names]").html('<em class="tag">Omni-Coupon</em>' + omniCpAplVal + "% 할인");
            $(".omni-coupon").show()
        }
        var maxOmniDcAmt = 0;
        if (omniCpInfo != "" && omniCpInfo.split("|").length > 3) maxOmniDcAmt = $.isNumeric(omniCpInfo.split("|")[4]) ? parseInt(omniCpInfo.split("|")[4]) : 0;
        $(".omni-coupon").each(function() {
            var cartId = $(this).attr("data-cartId");
            var goodsAmt = Number($("#goodsAmt" + cartId).val());
            var goodsBuyPrc = $("#" + cartId).find("input[name=goodsBuyPrc]").val() ==
            undefined ? 0 : $("#" + cartId).find("input[name=goodsBuyPrc]").val();
            var buyQty = $("#" + cartId).find("input[name=buyQty]").val() == undefined ? 0 : $("#" + cartId).find("input[name=buyQty]").val();
            var buyAmt = Number($("#buyAmt" + cartId).val());
            var baseGoodsCpDcAmt = Number($("#baseGoodsCpDcAmt" + cartId).val());
            var dupGoodsCpDcAmt = Number($("#dupGoodsCpDcAmt" + cartId).val());
            var payAmt = buyAmt - baseGoodsCpDcAmt - dupGoodsCpDcAmt;
            var omniCpDcAmt = 0;
            if (omniCpAplVal > 0) omniCpDcAmt = Math.round(goodsBuyPrc * (omniCpAplVal / 100) / 100) *
                100 * buyQty;
            if (maxOmniDcAmt > 0 && omniCpDcAmt > 0 && maxOmniDcAmt * buyQty < omniCpDcAmt) omniCpDcAmt = maxOmniDcAmt * buyQty;
            payAmt = payAmt - omniCpDcAmt;
            if (payAmt <= 0) omniApplyFlag = false;
            $("#omniCpDcAmt" + cartId).val(omniCpDcAmt);
            if (payAmt < goodsAmt) $("#" + cartId).find(".price-small").show();
            else $("#" + cartId).find(".price-small").hide();
            $("#" + cartId).find(".price-big").html(format.num(payAmt) + "원");
            var obj = $("div.buy-target-goods[id=" + cartId + "]");
            var mbrDcAmt = Number(obj.find("input[name=mbrDcAmt]").val() == undefined ? 0 :
                obj.find("input[name=mbrDcAmt]").val());
            var prmtDcAmt = Number(obj.find("input[name=prmtDcAmt]").val() == undefined ? 0 : obj.find("input[name=prmtDcAmt]").val());
            var fnSprtAmt = Number(obj.find("input[name=fnSprtAmt]").val() == undefined ? 0 : obj.find("input[name=fnSprtAmt]").val());
            var prmtDcPrc = Number(obj.find("input[name=prmtDcPrc]").val() == undefined ? 0 : obj.find("input[name=prmtDcPrc]").val());
            var bndlPrmtDcAmt = Number(obj.find("input[name=bndlPrmtDcAmt]").val() == undefined ? 0 : obj.find("input[name=bndlPrmtDcAmt]").val());
            $("#mbr_dc_txt_" + cartId).text("- " + format.num(mbrDcAmt) + " 원");
            $("#prmt_dc_txt_" + cartId).text("- " + format.num(prmtDcAmt) + " 원");
            $("#coupon_dc_txt_" + cartId).text("- " + format.num(baseGoodsCpDcAmt + dupGoodsCpDcAmt) + " 원");
            $("#omni_dc_txt_" + cartId).text("- " + format.num(omniCpDcAmt) + " 원");
            if (orderCommon.stGbCd == orderCommon.ST_GB_20) $("#fnSprt_dc_txt_" + cartId).text("- " + format.num(fnSprtAmt) + " 원");
            else $("#fnSprt_dc_txt_" + cartId).text(format.num(fnSprtAmt) + " 원");
            $("#bundle_dc_txt_" + cartId).text("- " + format.num(bndlPrmtDcAmt) +
                " 원");
            if (orderCommon.stGbCd == orderCommon.ST_GB_20) $("#tot_dc_txt_" + cartId).text("- " + format.num(baseGoodsCpDcAmt + dupGoodsCpDcAmt + omniCpDcAmt + mbrDcAmt + fnSprtAmt + bndlPrmtDcAmt + prmtDcAmt) + " 원");
            else $("#tot_dc_txt_" + cartId).text("- " + format.num(baseGoodsCpDcAmt + dupGoodsCpDcAmt + omniCpDcAmt + mbrDcAmt + bndlPrmtDcAmt + prmtDcAmt) + " 원")
        });
        goodsSelect.calTotalAmt(parseInt($("#totalCartCpDcAmt").val()) > 0 ? "goodsCoupon" : "");
        if (!omniApplyFlag) {
            goodsSelect.deleteOmniCoupon();
            var alertData$6 = {
                content: "옴니쿠폰 적용 시 상품 결제 금액 0원 이하 입니다."
            };
            commonAlert(alertData$6);
            openLayer("commonAlert");
            return
        }
        //옴니쿠폰 사용 시 신용카드 결제만 선택되게
//        $(".btn-pay-means").each(function() {
//          var paymeansTarget = $(this).attr('data-paymeans-target');
//          if(paymeansTarget == 'card'){
//            if(!$(this).hasClass('on')){
//              pay_tabs(this,'110','');
//            }
//          }else{
//            $(this).attr('disabled', 'disabled');
//          }
//        });
        
        orderPaymentManager.setTotalPaymentInfo();
        if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
    },
    deleteOmniCoupon: function(type) {
        console.log("orderPayGoods.js deleteOmniCoupon type:" +
            type);
        $("#omniCpInfo").val("");
        $("#omniCpNo").val("");
        $("#omniIsuSrlNo").val("");
        $("#omniEmpNo").val("");
        $("#omniCpAplVal").val(0);
        $(".omni-coupon").find("span[class=names]").html("");
        $(".omni-coupon").hide();
        goodsSelect.applyOmniCoupon("del");
        $(".btn-pay-means").each(function() {
            $(this).removeAttr("disabled")
        })
    },
    couponIssue: function(obj, cartId, couponKey, idx) {
        $("#popupCoupon").attr("index", couponKey);
        var options = {
            prefix: $(obj).attr("data-stContextPath"),
            goodsId: $(obj).attr("data-goodsId")
        };
        commonCpPop.setOpenPopupCallback(function(data) {
            $("#mask[data-mask-target='undefined']").remove();
            if ($("#mask[data-mask-target='popupCoupon']").length > 1) $("#mask[data-mask-target='popupCoupon']").eq(0).remove();
            $("#popupCoupon #isuSrlNo").focus()
        });
        commonCpPop.setClosePopupCallback(goodsSelect.serialCouponCallback);
        commonCpPop.serialCouponPopup("popupCoupon", options)
    },
    serialCouponCallback: function(data) {
        var couponKey = $("#popupCoupon").attr("index");
        if (typeof data == "undefined") goodsSelect.handleSerialCouponCallbackFail(couponKey);
        else if (Object.isExtensible(data) == false) goodsSelect.handleSerialCouponCallbackFail(couponKey);
        else if (Object.keys(data).length == 0) goodsSelect.handleSerialCouponCallbackFail(couponKey);
        else if (data.resultYN === "Y") {
            var isDup = couponKey.charAt(couponKey.length - 1);
            var cartId = couponKey.replace(isDup == "Y" ? "_Y" : "_N", "");
            var idx = $("li[id*='optCartCoupon" + couponKey + "']").length - 1;
            var key = couponKey + "_" + idx;
            var html = '<li id="optCartCoupon' + key + '" index="' + couponKey + '" class="droplist-item" data-cp-apl-cd="' + data.cpAplCd + '" onclick="goodsSelect.couponOptSelect(this, \'' + data.mbrCpNo + "', '" + data.cpNo + "', '" +
                cartId + "', '" + couponKey + "', '" + idx + "', '" + data.cpKindCd + "', '" + data.multiAplYn + "');\">";
            html += data.cpNm;
            html += "</li>";
            $("#ulCartCoupon" + couponKey + " > li").eq(idx).before(html);
            $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰이 적용되었습니다.").attr("disabled", true);
            goodsSelect.couponOptSelect($("#optCartCoupon" + key), data.mbrCpNo, data.cpNo, cartId, couponKey, idx, data.cpKindCd, data.multiAplYn)
        } else goodsSelect.handleSerialCouponCallbackFail(couponKey)
    },
    handleSerialCouponCallbackFail: function(couponKey) {
        $("#dropCartCouponeBtn" +
            couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
        $("#couponSelectArea" + couponKey).attr("data-cpNo", "").attr("data-mbrCpNo", "").children().remove()
    },
    setOrderGoodsInfo: function() {
        orderCommon.arrGoodsInfo = [];
        orderCommon.goodsBuyTotalQty = 0;
        var parent = $(".order-m-area");
        $.each(parent.find(".buy-target-goods"), function() {
            var selQty = parseInt($(this).data("buy-qty"));
            var goodsData = {
                cartId: $(this).data("cart-id"),
                goodsId: $(this).data("goods-id"),
                goodsNm: $(this).data("goods-nm"),
                buyQty: parseInt($(this).data("buy-qty")),
                selQty: selQty,
                minOrdQty: $(this).data("min-ord-qty")
            };
            orderCommon.goodsBuyTotalQty += parseInt($(this).data("buy-qty"));
            orderCommon.arrGoodsInfo.push(goodsData)
        });
        $("#goods_cnt").text(orderCommon.goodsBuyTotalQty);
        goodsSelect.calTotalAmt()
    }
};
$(function() {
    $(document).on("focusout", "input[name=buyQtyOrd]", function(event) {
        goodsSelect.qtySelect($(this))
    })
});