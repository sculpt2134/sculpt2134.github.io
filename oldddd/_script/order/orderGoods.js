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
            var alertData = {
                title: "alert",
                content: "배송지 합산 해당 상품의 선택 가능한 수량은 " + goodsInfo[0].buyQty + "개입니다."
            };
            commonAlert(alertData);
            openLayer("commonAlert");
            return
        }
        var plusQty = 1;
        if (goodsInfo[0].minOrdQty != "") {
            var remainQty = goodsInfo[0].buyQty - goodsInfo[0].selQty;
            if (remainQty < goodsInfo[0].minOrdQty && qty < goodsInfo[0].minOrdQty) {
                var alertData$0 = {
                    title: "alert",
                    content: "이 상품은 최소 " + goodsInfo[0].minOrdQty + "개 이상 구매 상품입니다.<br>" + "다른 배송지 상품에 수량을 추가해 주세요."
                };
                commonAlert(alertData$0);
                openLayer("commonAlert");
                qtyObj.val(qty);
                return
            } else if (qty >= goodsInfo[0].minOrdQty) plusQty = 1;
            else plusQty = goodsInfo[0].minOrdQty
        }
        qty += plusQty;
        qtyObj.val(qty);
        this.setGoodsQty(cartId, plusQty);
        this.calAmt(parent)
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
            var alertData = {
                title: "alert",
                content: "배송지 합산 해당 상품의 선택 가능한 수량은 " + goodsInfo[0].buyQty + "개입니다."
            };
            commonAlert(alertData);
            openLayer("commonAlert");
            qtyObj.val(prevQty);
            return false
        }
        if (goodsInfo[0].minOrdQty != "" && qty != 0) {
            var remainQty = goodsInfo[0].buyQty - totalSelQty;
            if (remainQty < goodsInfo[0].minOrdQty) {
                var alertData$1 = {
                    title: "alert",
                    content: "이 상품은 최소 " + goodsInfo[0].minOrdQty + "개 이상 구매 상품입니다.<br>" + "다른 배송지 상품에 수량을 추가해 주세요."
                };
                commonAlert(alertData$1);
                openLayer("commonAlert");
                qtyObj.val(prevQty);
                return false
            } else if (qty < goodsInfo[0].minOrdQty) {
                qtyObj.val(goodsInfo[0].minOrdQty);
                qty = parseInt(qtyObj.val())
            }
        }
        goodsInfo[0].selQty = totalSelQty + qty;
        $.each($('.order-tbl[data-cart-id="' + cartId + '"]'), function() {
            $(this).find(".sel_qty").text(goodsInfo[0].selQty)
        });
        this.calAmt(parent);
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
                    dlvrAmt = result.orderGoodsList[i].pkgDlvrAmt + result.orderGoodsList[i].pkgAddDlvrAmt;
                    var saleAmt = result.orderGoodsList[i].saleAmt;
                    var prmtDcAmt =
                        result.orderGoodsList[i].prmtDcAmt;
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
                    if ($(this).find("input[name=dlvrAmt]").length > 0) totalDlvrgoodsAmt += parseInt($(this).find("input[name=dlvrAmt]").val())
                });
                var totalObj = parent.find(".total_price");
                $(totalObj).find(".total_sale_Amt").text(format.num(totalGoodsAmt));
                $(totalObj).find(".total_dlvr_amt").text(format.num(totalDlvrgoodsAmt));
                $(totalObj).find(".total_amt").text(format.num(totalGoodsAmt + totalDlvrgoodsAmt));
                $(totalObj).find("input[name=totalGoodsAmt]").val(totalGoodsAmt);
                $(totalObj).find("input[name=totalDlvrAmt]").val(totalDlvrgoodsAmt);
                goodsSelect.calTotalAmt()
            }
        };
        ajax.call(options)
    },
    setGoodsQty: function(cartId, count) {
        for (var i = 0; i < orderCommon.arrGoodsInfo.length; i++)
            if (orderCommon.arrGoodsInfo[i].cartId ==
                cartId) {
                orderCommon.arrGoodsInfo[i].selQty += count;
                $.each($('.order-tbl[data-cart-id="' + cartId + '"]'), function() {
                    $(this).find(".sel_qty").text(orderCommon.arrGoodsInfo[i].selQty);
                    return true
                })
            }
    },
    calTotalAmt: function() {
        console.log("orderGoods.js : calTotalAmt");
        var totalGoodsAmt = 0,
            totalDlvrAmt = 0,
            totalDcAmt = 0,
            totalFnSprtAmt = 0;
        totalGoodsAmt = Number($("#totalSaleAmt").val());
        if ("1" == $("#dlvraType").val() && $("#dlvraType").val() != undefined) totalDlvrAmt = Number($("#totalDlvrAmt").val());
        else totalDlvrAmt = Number($("#totalMultiDlvrAmt").val());
        $("#order_payment_total_goods_amt_view").text(format.num(totalGoodsAmt));
        $("#order_payment_total_dlvr_amt_view").text(format.num(totalDlvrAmt));
        $("#order_payment_total_goods_amt").val(totalGoodsAmt);
        $("#order_payment_total_dlvr_amt").val(totalDlvrAmt);
        $("#order_payment_total_svmn_amt").val(0);
        if (orderCommon.stGbCd == 20 || orderCommon.stGbCd == 30) totalDcAmt = Number($("#totalGoodsCpDcAmt").val());
        else totalDcAmt = Number($("#totalPrmtDcAmt").val()) + Number($("#totalGoodsCpDcAmt").val());
        totalFnSprtAmt = Number($("#totalFnSprtAmt").val());
        $("#order_payment_total_dc_amt").val(totalDcAmt);
        if (totalDcAmt > 0) $("#order_payment_total_dc_amt_view").html("-" + format.num(totalDcAmt));
        else $("#order_payment_total_dc_amt_view").html("0");
        var totalFnSprtAmtString = format.num(totalFnSprtAmt);
        if (orderCommon.stGbCd != "30") totalFnSprtAmtString = "-" + totalFnSprtAmtString;
        if (totalFnSprtAmt > 0) $("#order_payment_total_fn_sprt_amt_view").html(totalFnSprtAmtString);
        else $("#order_payment_total_fn_sprt_amt_view").html("0");
        orderPay.calTotalAmt()
    },
    freebieOptSelect: function(obj,
                               cartId, freebieKey, idx, buyQty, frbInfos) {
        var key = freebieKey + "_" + idx;
        if (idx == "99") {
            $("#optCartFreebie" + key).removeAttr("aria-selected").removeClass("focused");
            $(obj).parents(".wrap-droplist").removeClass("active").removeClass("bottom");
            $("#dropCartFreebieBtn" + freebieKey).css("color", "#999");
            $("#dropCartFreebieBtn" + freebieKey).html("선택안함");
            $("div[id^=selectedFreebie" + freebieKey + "]").remove()
        } else {
            var lmtQty = frbInfos.split("|")[3];
            $("div[id^=noneSelectedFreebie" + freebieKey + "]").remove();
            if ($("#" + freebieKey).length ==
                0) $('<div class="order-select-list" id=' + freebieKey + " lmt-qty=" + lmtQty + "></div>").insertAfter($("#dropCartFreebie" + freebieKey));
            var appendDiv = $(obj).clone();
            var dataOmni = $("#optCartFreebie" + key).attr("data-omni");
            appendDiv = $(appendDiv).find("div").removeClass("link-gift").addClass("gifts-select").attr("id", "selectedFreebie" + freebieKey + "_" + idx);
            appendDiv = $(appendDiv).append('<button type="button" data-omni="' + dataOmni + '" onclick="goodsSelect.removeSelectedFreebie(\'' + cartId + "','" + freebieKey + "','" +
                idx + "','" + frbInfos + '\');" class="btn-del"><span class="blind">삭제</span></button>');
            appendDiv = $(appendDiv).append('<input type="hidden" name="frbInfos" value="' + frbInfos + '">');
            $("#" + freebieKey).append($(appendDiv));
            var str = "";
            var qty = buyQty;
            if ($("#cart_goods_buy_qty_" + cartId).val() != undefined && $("#cart_goods_buy_qty_" + cartId).val() != buyQty) qty = $("#cart_goods_buy_qty_" + cartId).val();
            qty = qty * lmtQty;
            var liCnt = $("div[id^=selectedFreebie" + freebieKey + "]").length;
            if (qty > liCnt) {
                str = "사은품을 " + (qty - liCnt) + "개 더 선택하세요";
                $("#dropCartFreebieBtn" + freebieKey).attr("disabled", false)
            } else {
                str = "사은품을 모두 선택하셨습니다";
                $("#dropCartFreebieBtn" + freebieKey).attr("disabled", true);
                $(obj).parents(".wrap-droplist").removeClass("active").removeClass("bottom")
            }
            $("#dropCartFreebieBtn" + freebieKey).css("color", "#999");
            $("#dropCartFreebieBtn" + freebieKey).html(str)
        }
    },
    removeSelectedFreebie: function(cartId, freebieKey, idx, frbInfos) {
        var str = "";
        var qty = $("#cart_goods_buy_qty_" + cartId).val() != null ? $("#cart_goods_buy_qty_" + cartId).val() : $("#org_buy_qty_" +
            cartId).val();
        var lmtQty = frbInfos.split("|")[3];
        qty = qty * lmtQty;
        var liCnt = $("div[id^=selectedFreebie" + freebieKey + "]").length;
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
        $("#selectedFreebie" +
            freebieKey + "_" + idx).remove();
        if (liCnt == 0) $("#" + freebieKey).remove()
    },
    removeAllSelectedFreebie: function(cartId, buyQty) {
        if (buyQty == null || buyQty <= 0) return;
        var obj = $("#" + cartId);
        obj.find("div[id^=selectedFreebie]").parent(".order-select-list").remove();
        $.each(obj.find("button[id^=dropCartFreebieBtn]"), function(idx, item) {
            var lmtQty = $(item).attr("data-lmtQty");
            $(item).attr("disabled", false);
            $(item).html("사은품을 " + buyQty * lmtQty + "개 선택하세요.")
        })
    },
    couponOptSelect: function(obj, mbrCpNo, cpNo, cartId, couponKey, idx,
                              cpKindCd, multiAplYn, cpGbCd) {
        var ret = false;
        var isDup = couponKey.charAt(couponKey.length - 1);
        var classNm = isDup === "Y" ? "selDupCoupon" : "selBaseCoupon";
        var res = false;
        $("div[name=couponselectList]").each(function(key, item) {
            if ($(item).attr("data-mbrCpNo") == mbrCpNo) {
                res = true;
                return false
            }
        });
        if (res) {
            var alertData = {
                content: "이미 선택된 쿠폰이 존재합니다."
            };
            commonAlert(alertData);
            openLayer("commonAlert");
            if (event) event.stopPropagation();
            return false
        }
        console.log("orderGoods line 514");
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd ==
            "30") {
            var cpAplCd = $(obj).attr("data-cp-apl-cd");
            var buyQty = $("#" + cartId).find(".cart-spinner").attr("data-count");
            if (buyQty == undefined) buyQty = $("#org_buy_qty_" + cartId).val();
            if (cpAplCd == "20") {
                if (multiAplYn = "N" && buyQty > 1) {
                    var alertData$2 = {
                        content: "정액 쿠폰은 상품 수량이 1개 일때만 사용 가능합니다."
                    };
                    commonAlert(alertData$2);
                    openLayer("commonAlert");
                    $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
                    $("#couponSelectArea" + couponKey).attr("data-cpNo", "").attr("data-mbrCpNo", "").children().remove();
                    return false
                }
            } else if (cpAplCd == "10") {
                console.log("multiAplYn:" + multiAplYn + " | buyQty:" + buyQty);
                if (multiAplYn == "N" && buyQty > 1) {
                    var alertData$3 = {
                        content: "단수적용 쿠폰은 상품 수량이 1개 일때만 사용 가능합니다."
                    };
                    commonAlert(alertData$3);
                    openLayer("commonAlert");
                    $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
                    $("#couponSelectArea" + couponKey).attr("data-cpNo", "").attr("data-mbrCpNo", "").children().remove();
                    return false
                }
            }
        }
        var tCouponKey = "";
        var tMbrCpNo = "";
        var tDupMbrCpNo = "";
        if (isDup == "Y") {
            tCouponKey =
                "#couponSelectArea" + couponKey.replace("Y", "N");
            tMbrCpNo = $(tCouponKey).attr("data-mbrCpNo") || "";
            tDupMbrCpNo = mbrCpNo
        } else {
            tCouponKey = "#couponSelectArea" + couponKey.replace("N", "Y");
            tMbrCpNo = mbrCpNo;
            tDupMbrCpNo = $(tCouponKey).attr("data-mbrCpNo") || ""
        }
        goodsSelect.getCartGoodsCpDcInfo(cartId, tMbrCpNo, tDupMbrCpNo, mbrCpNo, cpNo, couponKey, idx, cpKindCd, multiAplYn, cpGbCd);
        $(obj).prevAll().attr("aria-selected", false);
        $(obj).nextAll().attr("aria-selected", false);
        $(obj).attr("aria-selected", true);
        return true
    },
    getCartGoodsCpDcInfo: function(cartId,
                                   tMbrCpNo, tDupMbrCpNo, mbrCpNo, cpNo, couponKey, idx, cpKindCd, multiAplYn) {
        var goodsBuyPrc = $("#" + cartId).find("input[name=goodsBuyPrc]").val() == undefined ? 0 : $("#" + cartId).find("input[name=goodsBuyPrc]").val();
        if (orderCommon.stGbCd == orderCommon.ST_GB_30) goodsBuyPrc = Number(goodsBuyPrc) - Number($("#" + cartId).find("input[name=fnSprtAmt]").val() == undefined ? 0 : $("#" + cartId).find("input[name=fnSprtAmt]").val());
        console.log("goodsBuyPrc:" + goodsBuyPrc);
        var options = {
            url: orderCommon.stContextPath + "xhr/order/getCartGoodsCpDcInfo",
            data: {
                cartId: cartId,
                mbrCpNo: tMbrCpNo,
                dupMbrCpNo: tDupMbrCpNo,
                buyPrc: goodsBuyPrc
            },
            done: function(data) {
                var couponDcInfo = data.couponDcInfo;
                console.dir(couponDcInfo);
                var isDup = couponKey.charAt(couponKey.length - 1);
                var dropCartCoupon = "dropCartCoupon" + couponKey;
                var cartTpCd = $("div[id=" + dropCartCoupon + "]").attr("data-cart-tp-cd");
                if (couponDcInfo.baseCpUsePsbYn == "N" || couponDcInfo.dupCpUsePsbYn == "N") {
                    var alertData = {
                        content: "사용할 수 없는 쿠폰입니다."
                    };
                    commonAlert(alertData);
                    openLayer("commonAlert");
                    $("#dropCartCouponeBtn" +
                        couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
                    if (cartTpCd == "40" && isDup == "Y") $("#dropCartCouponeBtn" + couponKey).html("My 큐커 플랜 멤버십 할인(복수선택 가능)");
                    else if (cartTpCd == "40" && isDup != "Y") $("#dropCartCouponeBtn" + couponKey).html("쿠폰을 선택해 주세요.");
                    return
                }
                var unitCpAmt = 0,
                    totCpAmt = 0;
                if (isDup == "Y") {
                    console.log("unitCpAmt:" + couponDcInfo.unitDupCpDcAmt + " | totCpAmt: " + couponDcInfo.dupCpDcAmt);
                    unitCpAmt = Number(couponDcInfo.unitDupCpDcAmt);
                    totCpAmt = Number(couponDcInfo.dupCpDcAmt)
                } else {
                    unitCpAmt = Number(couponDcInfo.unitCpDcAmt);
                    totCpAmt = Number(couponDcInfo.baseCpDcAmt)
                }
                var baseCouponDcAmt = $("#" + cartId).find("input[name='baseCpDcAmt']").val(),
                    dupCouponDcAmt = $("#" + cartId).find("input[name='dupCpDcAmt']").val();
                var buyAmt = $("#" + cartId).find("input[name=buyAmt]").val();
                var omniCpDcAmt = $("#" + cartId).find("input[name=omniCpDcAmt]").val();
                console.log("buyAmt:" + buyAmt + " | omniCpDcAmt: " + omniCpDcAmt + " | baseCpDcAmt:" + couponDcInfo.baseCpDcAmt + " | dupCpDcAmt:" + couponDcInfo.dupCpDcAmt + " | totDupCpDcAmt:" + dupCouponDcAmt);
                if (parseInt(buyAmt) -
                    parseInt(omniCpDcAmt) - parseInt(couponDcInfo.baseCpDcAmt) - parseInt(couponDcInfo.dupCpDcAmt) - parseInt(dupCouponDcAmt) <= 0) {
                    var alertData$4 = {
                        content: "쿠폰 적용 시 상품 결제 금액 0원 이하 입니다."
                    };
                    commonAlert(alertData$4);
                    openLayer("commonAlert");
                    $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
                    if (cartTpCd == "40" && isDup == "Y") $("#dropCartCouponeBtn" + couponKey).html("My 큐커 플랜 멤버십 할인(복수선택 가능)");
                    else if (cartTpCd == "40" && isDup != "Y") $("#dropCartCouponeBtn" + couponKey).html("쿠폰을 선택해 주세요.");
                    return
                }
                goodsSelect.renderSelectedCoupon(mbrCpNo,
                    cpNo, cartId, couponKey, idx, cpKindCd, multiAplYn, totCpAmt, unitCpAmt);
                $("#" + cartId).find("input[name='baseCpDcAmt']").val(parseInt(couponDcInfo.baseCpDcAmt));
                $("#" + cartId).find("input[name='dupCpDcAmt']").val(parseInt(couponDcInfo.dupCpDcAmt) + Number(dupCouponDcAmt));
                goodsSelect.getCartTotalInfo()
            }
        };
        ajax.call(options)
    },
    removeSelectedCoupon: function(couponKey, unitCpAmt, mbrCpNo) {
        var cartId = couponKey.replace(couponKey.charAt(couponKey.length - 1) == "Y" ? "_Y" : "_N", "");
        var tmpUnitCpAmt = 0;
        if (couponKey.charAt(couponKey.length -
            1) == "Y") {
            tmpUnitCpAmt = $("#" + cartId).find("input[name='dupCpDcAmt']").val();
            $("#" + cartId).find("input[name='dupCpDcAmt']").val(tmpUnitCpAmt - unitCpAmt)
        } else {
            tmpUnitCpAmt = $("#" + cartId).find("input[name='baseCpDcAmt']").val();
            $("#" + cartId).find("input[name='baseCpDcAmt']").val(tmpUnitCpAmt - unitCpAmt)
        }
        goodsSelect.getCartTotalInfo();
        var isDup = couponKey.charAt(couponKey.length - 1);
        var dropCartCoupon = "dropCartCoupon" + couponKey;
        var cartTpCd = $("div[id=" + dropCartCoupon + "]").attr("data-cart-tp-cd");
        $("#dropCartCouponeBtn" +
            couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
        if (cartTpCd == "40" && isDup == "Y") $("#dropCartCouponeBtn" + couponKey).html("My 큐커 플랜 멤버십 할인(복수선택 가능)");
        else if (cartTpCd == "40" && isDup != "Y") $("#dropCartCouponeBtn" + couponKey).html("쿠폰을 선택해 주세요.");
        $("#couponSelectArea" + couponKey).attr("data-cpNo", "").attr("data-mbrCpNo", "").attr("data-cp-apl-cd", "").attr("data-multi-api-yn", "");
        $("div[name=couponselectList]").each(function(key, item) {
            if ($(item).attr("data-mbrCpNo") == mbrCpNo) {
                $(item).remove();
                $(item).next("input[name='goodsCpInfos']").remove()
            }
        })
    },
    renderSelectedCoupon: function(mbrCpNo, cpNo, cartId, couponKey, idx, cpKindCd, multiAplYn, totCpAmt, unitCpAmt) {
        var obj = $("#optCartCoupon" + couponKey + "_" + idx);
        var key = couponKey + "_" + idx;
        var cpNm = $("#optCartCoupon" + key)[0].innerText;
        var couponInfo = cartId + ":" + mbrCpNo;
        var isDup = couponKey.charAt(couponKey.length - 1);
        var dataOmni = $("#optCartCoupon" + key).attr("data-omni");
        var $droupCouponBtn = $("#dropCartCouponeBtn" + couponKey);
        if (isDup == "Y") couponInfo += ":DUP";
        else couponInfo += ":BASE";
        var cpAplCd = $("#optCartCoupon" +
            key).attr("data-cp-apl-cd");
        var goodsId = $("#" + cartId).attr("data-goods-id");
        couponInfo += "|" + goodsId;
        $("#couponSelectArea" + couponKey).attr("data-cp-apl-cd", cpAplCd);
        $("#couponSelectArea" + couponKey).attr("data-multi-api-yn", multiAplYn);
        $("#couponSelectArea" + couponKey).append('<div class="order-select-list coupon" name="couponselectList" data-mbrCpNo="' + mbrCpNo + '"><div class="gifts-select gifts-coupone"><span class="names">' + cpNm + "</span><button onclick=\"goodsSelect.removeSelectedCoupon('" + couponKey + "','" + totCpAmt + "','" + mbrCpNo + '\');" type="button" class="btn-del" data-omni="' +
            dataOmni + '"><span class="blind">삭제</span></button></div>' + '<input type="hidden" name="goodsCpInfos" value="' + couponInfo + '">' + "</div>");
        $("#couponSelectArea" + couponKey).attr("data-cpNo", cpNo);
        $("#couponSelectArea" + couponKey).attr("data-mbrCpNo", mbrCpNo);
        $(obj).parents(".wrap-droplist").removeClass("active").removeClass("bottom");
        $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰이 적용되었습니다.");
        var dropCartCoupon = "dropCartCoupon" + couponKey;
        var cartTpCd = $("div[id=" + dropCartCoupon + "]").attr("data-cart-tp-cd");
        if (cartTpCd == "40" && isDup == "Y") {
            $("#dropCartCouponeBtn" + couponKey).html("쿠폰이 적용되었습니다.(복수선택 가능)");
            $droupCouponBtn.attr("disabled", false)
        } else if (cartTpCd == "40" && isDup != "Y") {
            $("#dropCartCouponeBtn" + couponKey).html("쿠폰이 적용되었습니다.");
            $droupCouponBtn.attr("disabled", true)
        } else $droupCouponBtn.attr("disabled", true)
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
        if (data)
            if (data.resultCode == "S") {
                var isDup = couponKey.charAt(couponKey.length - 1);
                var cartId = couponKey.replace(isDup == "Y" ? "_Y" : "_N", "");
                var idx = $("li[id*='optCartCoupon" +
                    couponKey + "']").length - 1;
                var key = couponKey + "_" + idx;
                var html = '<li id="optCartCoupon' + key + '" index="' + couponKey + '" class="droplist-item" data-cp-apl-cd="' + data.cpAplCd + '" onclick="goodsSelect.couponOptSelect(this, \'' + data.mbrCpNo + "', '" + data.cpNo + "', '" + cartId + "', '" + couponKey + "', '" + idx + "', '" + data.cpKindCd + "', '" + data.multiAplYn + "');\">";
                html += data.cpNm;
                html += "</li>";
                $("#ulCartCoupon" + couponKey + " > li").eq(idx).before(html);
                $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰이 적용되었습니다.").attr("disabled",
                    true);
                goodsSelect.couponOptSelect($("#optCartCoupon" + key), data.mbrCpNo, data.cpNo, cartId, couponKey, idx, data.cpKindCd, data.multiAplYn)
            } else goodsSelect.handleSerialCouponCallbackFail(couponKey);
        else goodsSelect.handleSerialCouponCallbackFail(couponKey)
    },
    handleSerialCouponCallbackFail: function(couponKey) {
        $("#dropCartCouponeBtn" + couponKey).html("상품쿠폰을 선택하세요").attr("disabled", false);
        $("#couponSelectArea" + couponKey).attr("data-cpNo", "").attr("data-mbrCpNo", "").children().remove()
    },
    getCartTotalInfo: function(cartType) {
        console.log("orderGoods.js : getCartTotalInfo");
        var obj;
        var buyQty = 0,
            prmtDcPrc = 0,
            baseCpDcAmt = 0,
            dupCpDcAmt = 0,
            goodsAmt = 0,
            payAmt = 0,
            fnSprtAmt = 0,
            dlvrAmt = 0,
            totalPrmtDcAmt = 0,
            totalFnSprtAmt = 0,
            totalGoodsAmt = 0,
            totalGoodsCpDcAmt = 0,
            totalPayAmt = 0,
            totalDlvrAmt = 0,
            cnt = 0,
            cartId = "",
            omniCpAplVal = 0,
            omniCpDcAmt = 0,
            bndlPrmtDcAmt = 0,
            mobileYn = "N",
            bndlFlag = false,
            mbrDcAmt = 0,
            prmtDcAmt = 0,
            omniApplyFlag = true,
            sampanYn = "Y",
            compNo = "";
        var selectCompNo = "",
            selectInfo = "",
            $freeDlvrYn = "",
            $dlvrcStdCd = "",
            $dlvrcPlcUseYn = "",
            $dlvrcDlvrAmt = 0,
            $dlvrcCdtStdCd = "",
            $dlvrcCdtCd = "",
            $dlvrcBuyPrcQty =
                "",
            $pkgDlvrNo = "",
            $realDlvrAmt = 0,
            $goodsBuyPrc = 0,
            $realGoodsAmt = 0,
            realGoodsAmtPrc = 0,
            $buyQty = 0,
            $realBuyQty = 0,
            realTotalCpAmt = 0,
            realBuyQtyInit = 0,
            $realDlvrAmtVal = 0;
        var omniCpInfo = $("#omniCpInfo").val();
        var maxOmniDcAmt = 0;
        if (omniCpInfo != undefined && omniCpInfo != null && omniCpInfo != "" && omniCpInfo.split("|").length > 3) maxOmniDcAmt = $.isNumeric(omniCpInfo.split("|")[4]) ? parseInt(omniCpInfo.split("|")[4]) : 0;
        var cartIdsObj;
        var chkCartIdsObj;
        var fnetCartTp = $("input[id='cartTpCd']").val();
        var cartTpCd = $("input[id='cartTpCd']").val();
        var compNoArr = [];
        var compNoData;
        if (fnetCartTp != undefined && fnetCartTp != "" && (orderCommon.stGbCd == orderCommon.ST_GB_20 || orderCommon.stGbCd == orderCommon.ST_GB_30)) {
            cartIdsObj = $('input:checkbox[name="cartIds"][data-type="' + fnetCartTp + '"]');
            chkCartIdsObj = $('input:checkbox[name="cartIds"][data-type="' + fnetCartTp + '"]:checked')
        } else if (typeof cartTpCd !== "undefined" && cartTpCd != "" && orderCommon.stGbCd == orderCommon.ST_GB_10) {
            cartIdsObj = $('input:checkbox[name="cartIds"][data-type="' + cartTpCd + '"]');
            chkCartIdsObj =
                $('input:checkbox[name="cartIds"][data-type="' + cartTpCd + '"]:checked');
            if (cartTpCd == "qooker") $("div.ship-info").find("span").text("0원 + 배송비 0원")
        } else {
            cartIdsObj = $('input:checkbox[name="cartIds"]');
            chkCartIdsObj = $('input:checkbox[name="cartIds"]:checked')
        }
        if (cartTpCd == "qooker") {
            var defaultVal = "",
                defaultCompNo = "";
            $(cartIdsObj).each(function(k, v) {
                defaultVal = $("#cart_qty_up_" + v.value).parent().closest("div.cart-tbl").find("div.cart-price");
                defaultCompNo = $(this).attr("data-compNo");
                if ($(defaultVal).find("input[name=dlvrcCdtStdCd]").val() ==
                    "20") $("#price_" + defaultCompNo).text(format.num($(defaultVal).find("input[name=dlvrcBuyPrcQty]").val()) + "원");
                else if ($(defaultVal).find("input[name=dlvrcCdtStdCd]").val() == "30") $("#price_" + defaultCompNo).text($(defaultVal).find("input[name=dlvrcBuyPrcQty]").val() + "개");
                $("#text-free_" + defaultCompNo).text("추가하면 무료배송!");
                $("#bar_" + defaultCompNo).css("width", "0%")
            })
        }
        $(chkCartIdsObj).each(function(k, v) {
            cartId = v.value;
            obj = $("#" + cartId);
            goodsAmt = Number(obj.find("input[name=saleAmt]").val() == undefined ? 0 : obj.find("input[name=saleAmt]").val());
            prmtDcPrc = Number(obj.find("input[name=prmtDcPrc]").val() == undefined ? 0 : obj.find("input[name=prmtDcPrc]").val());
            bndlPrmtDcAmt = Number(obj.find("input[name=bndlPrmtDcAmt]").val() == undefined ? 0 : obj.find("input[name=bndlPrmtDcAmt]").val());
            fnSprtAmt = Number(obj.find("input[name=fnSprtAmt]").val() == undefined ? 0 : obj.find("input[name=fnSprtAmt]").val());
            baseCpDcAmt = Number(obj.find("input[name=baseCpDcAmt]").val() == undefined ? 0 : obj.find("input[name=baseCpDcAmt]").val());
            dupCpDcAmt = Number(obj.find("input[name=dupCpDcAmt]").val() ==
            undefined ? 0 : obj.find("input[name=dupCpDcAmt]").val());
            dlvrAmt = Number(obj.find("input[name=dlvrAmt]").val() == undefined ? 0 : obj.find("input[name=dlvrAmt]").val());
            if (orderCommon.stGbCd == orderCommon.ST_GB_20 || orderCommon.stGbCd == orderCommon.ST_GB_30) payAmt = prmtDcPrc - fnSprtAmt - baseCpDcAmt - dupCpDcAmt - bndlPrmtDcAmt;
            else payAmt = prmtDcPrc - baseCpDcAmt - dupCpDcAmt - bndlPrmtDcAmt;
            omniCpAplVal = Number($("#omniCpAplVal").val() == undefined ? 0 : $("#omniCpAplVal").val());
            mobileYn = $(this).attr("data-mobile-yn");
            compGbCd =
                $(this).attr("data-comp-gb-cd");
            if (omniCpInfo != "" && cartTpCd != "qooker") {
                omniCpDcAmt = Math.round((prmtDcPrc - fnSprtAmt) * (omniCpAplVal / 100) / 100) * 100;
                var goodsBuyQty = Number(obj.find("input[name=buyQty]").val() == undefined ? 0 : obj.find("input[name=buyQty]").val());
                if (maxOmniDcAmt > 0 && omniCpDcAmt > 0 && maxOmniDcAmt * goodsBuyQty < omniCpDcAmt) omniCpDcAmt = maxOmniDcAmt * goodsBuyQty;
                obj.find("input[name=omniCpDcAmt]").val(omniCpDcAmt);
                payAmt = payAmt - omniCpDcAmt;
                if (typeof def_st_galaxy_campus == "undefined")
                    if (orderCouponOmniTG ==
                        "10" && mobileYn == "Y") return false;
                if (compGbCd == orderCommon.COMP_GB_CD_10) {
                    sampanYn = "N";
                    return false
                }
                var bndlGrpKey = $(this).attr("data-bndlGrpKey");
                if (bndlGrpKey != "") {
                    bndlFlag = true;
                    return false
                }
                if (payAmt <= 0) {
                    omniApplyFlag = false;
                    return false
                }
            }
            mbrDcAmt = Number(obj.find("input[name=mbrDcAmt]").val() == undefined ? 0 : obj.find("input[name=mbrDcAmt]").val());
            prmtDcAmt = Number(obj.find("input[name=prmtDcAmt]").val() == undefined ? 0 : obj.find("input[name=prmtDcAmt]").val());
            $("#mbr_dc_txt_" + cartId).text("- " + format.num(mbrDcAmt) +
                " 원");
            $("#prmt_dc_txt_" + cartId).text("- " + format.num(prmtDcAmt) + " 원");
            $("#coupon_dc_txt_" + cartId).text("- " + format.num(baseCpDcAmt + dupCpDcAmt) + " 원");
            $("#omni_dc_txt_" + cartId).text("- " + format.num(omniCpDcAmt) + " 원");
            if (orderCommon.stGbCd == orderCommon.ST_GB_20) $("#fnSprt_dc_txt_" + cartId).text("- " + format.num(fnSprtAmt) + " 원");
            else $("#fnSprt_dc_txt_" + cartId).text(format.num(fnSprtAmt) + " 원");
            $("#bundle_dc_txt_" + cartId).text("- " + format.num(bndlPrmtDcAmt) + " 원");
            if (orderCommon.stGbCd == orderCommon.ST_GB_20) $("#tot_dc_txt_" +
                cartId).text("- " + format.num(baseCpDcAmt + dupCpDcAmt + omniCpDcAmt + mbrDcAmt + fnSprtAmt + bndlPrmtDcAmt + prmtDcAmt) + " 원");
            else $("#tot_dc_txt_" + cartId).text("- " + format.num(baseCpDcAmt + dupCpDcAmt + omniCpDcAmt + mbrDcAmt + bndlPrmtDcAmt + prmtDcAmt) + " 원");
            $("#" + cartId).find(".price-big").html(format.num(payAmt) + " 원");
            if (!v.checked) return;
            totalPrmtDcAmt += goodsAmt - prmtDcPrc;
            totalGoodsAmt += goodsAmt;
            totalPayAmt += payAmt;
            totalGoodsCpDcAmt += baseCpDcAmt + dupCpDcAmt + omniCpDcAmt + bndlPrmtDcAmt;
            totalDlvrAmt += dlvrAmt;
            totalFnSprtAmt +=
                fnSprtAmt;
            cnt += Number(obj.find("input[name=buyQty]").val() == undefined ? 0 : obj.find("input[name=buyQty]").val());
            if (payAmt < goodsAmt) $("#" + cartId).find(".price-small").show();
            else $("#" + cartId).find(".price-small").hide();
            if (cartTpCd == "qooker" && v.checked) {
                selectCompNo = $(this).attr("data-compNo");
                selectInfo = $("#org_buy_qty_" + cartId).parent().closest("div.buy-cart-goods").find("div.cart-price");
                $freeDlvrYn = $(selectInfo).find("input[name=freeDlvrYn]");
                $dlvrcStdCd = $(selectInfo).find("input[name=dlvrcStdCd]");
                $dlvrcPlcUseYn = $(selectInfo).find("input[name=dlvrcPlcUseYn]");
                $dlvrcCdtStdCd = $(selectInfo).find("input[name=dlvrcCdtStdCd]");
                $dlvrcCdtCd = $(selectInfo).find("input[name=dlvrcCdtCd]");
                $dlvrcDlvrAmt = $(selectInfo).find("input[name=dlvrcDlvrAmt]");
                $dlvrcBuyPrcQty = $(selectInfo).find("input[name=dlvrcBuyPrcQty]");
                $pkgDlvrNo = $(selectInfo).find("input[name=selectCompNo]");
                $buyQty = $(selectInfo).find("input[name=buyQty]");
                $goodsBuyPrc = $(selectInfo).find("input[name=goodsBuyPrc]");
                realGoodsAmtPrc = Number($goodsBuyPrc.val()) *
                    Number($buyQty.val());
                realBuyQtyInit = Number($buyQty.val());
                realTotalCpAmt = baseCpDcAmt + dupCpDcAmt + bndlPrmtDcAmt;
                compNoData = {
                    compCartId: cartId,
                    selectCompNo: selectCompNo,
                    freeDlvrYn: $freeDlvrYn.val() == undefined ? Y : $freeDlvrYn.val(),
                    dlvrcStdCd: $dlvrcStdCd.val() == undefined ? 10 : $dlvrcStdCd.val(),
                    dlvrcPlcUseYn: $dlvrcPlcUseYn.val() == undefined ? N : $dlvrcPlcUseYn.val(),
                    dlvrcCdtStdCd: $dlvrcCdtStdCd.val() == undefined ? 0 : $dlvrcCdtStdCd.val(),
                    dlvrcCdtCd: $dlvrcCdtCd.val() == undefined ? 0 : $dlvrcCdtCd.val(),
                    dlvrcDlvrAmt: Number($dlvrcDlvrAmt.val()) ==
                    undefined ? 0 : Number($dlvrcDlvrAmt.val()),
                    dlvrcBuyPrcQty: $dlvrcBuyPrcQty.val() == undefined ? 0 : $dlvrcBuyPrcQty.val(),
                    pkgDlvrNo: $pkgDlvrNo.val(),
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
                realDlvrcDlvrAmt = 0,
                pricePoint = 0,
                txValidate = "10",
                progressPoint =
                    100;
            totalDlvrAmt = 0;
            var resultCompData = [];
            for (var i = 0; i < compNoArr.length; i++) {
                var valArr = compNoArr[i];
                var compCartId = valArr.compCartId;
                var idx = goodsSelect.getArrayIndex(resultCompData, valArr);
                if (idx > -1) {
                    resultCompData[idx].compCartId = compCartId;
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
                    resultCompData[idx].realTotalCpAmt += Number(valArr.realTotalCpAmt)
                } else resultCompData.push(valArr)
            }
            for (var i = 0; i < resultCompData.length; i++) {
                var valArr = resultCompData[i];
                var compCartId = valArr.compCartId;
                $realDlvrAmt = $("#dlvrAmt_" +
                    valArr.pkgDlvrNo);
                $realGoodsAmt = $("#realGoodsAmt_" + valArr.pkgDlvrNo);
                $realBuyQty = $("#realBuyQty_" + valArr.pkgDlvrNo);
                $realDlvrAmt.val(0);
                realCompNo = valArr.selectCompNo;
                realCompGoodsAmt = Number(valArr.realGoodsAmt);
                realCompBuyQty = Number(valArr.realBuyQty);
                realCompCpAmt = Number(valArr.realTotalCpAmt);
                if (orderCommon.stGbCd == orderCommon.ST_GB_10 && valArr.freeDlvrYn != "Y" && valArr.dlvrcStdCd != "10" && valArr.dlvrcPlcUseYn != "N") {
                    realDlvrcDlvrAmt = Number(valArr.dlvrcDlvrAmt);
                    if (valArr.dlvrcCdtCd == "10") $realDlvrAmt.val(Number(realDlvrcDlvrAmt *
                        realCompBuyQty));
                    else $realDlvrAmt.val(Number(realDlvrcDlvrAmt));
                    txValidate = valArr.dlvrcCdtStdCd;
                    if (valArr.dlvrcCdtStdCd == "20") {
                        if (Number(realCompGoodsAmt) >= Number(valArr.dlvrcBuyPrcQty)) $realDlvrAmt.val(0);
                        pricePoint = Number(valArr.dlvrcBuyPrcQty) - Number(realCompGoodsAmt);
                        progressPoint = Number(realCompGoodsAmt) / Number(valArr.dlvrcBuyPrcQty) * 100
                    } else if (valArr.dlvrcCdtStdCd == "30") {
                        if (Number(realCompBuyQty) >= Number(valArr.dlvrcBuyPrcQty)) $realDlvrAmt.val(0);
                        pricePoint = Number(valArr.dlvrcBuyPrcQty) - Number(realCompBuyQty);
                        progressPoint = Number(realCompBuyQty) / Number(valArr.dlvrcBuyPrcQty) * 100
                    }
                }
                $realDlvrAmtVal = $realDlvrAmt.val();
                realCompDlvrAmt = Number($realDlvrAmtVal);
                $realGoodsAmt.val(realCompGoodsAmt);
                $realBuyQty.val(realCompBuyQty);
                var dlvrcInfo = $("#ship-info_" + realCompNo);
                var priceInfo = $("#price_" + realCompNo);
                var textFreeInfo = $("#text-free_" + realCompNo);
                var progressInfo = $("#bar_" + realCompNo);
                if (progressPoint >= 100) progressPoint = 100;
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
                    dlvrcInfo.text(format.num($realGoodsAmt.val()) + "원 + 배송비 " + format.num(realCompDlvrAmt) + "원");
                    totalDlvrAmt += realCompDlvrAmt
                }
            }
        }
        if (typeof def_st_galaxy_campus == "undefined")
            if (omniCpInfo != "" && orderCouponOmniTG == "10" && mobileYn == "Y") {
                goodsSelect.deleteOmniCoupon();
                var alertData = {
                    content: "모바일 상품은 옴니쿠폰을 적용 할 수 없습니다."
                };
                commonAlert(alertData);
                openLayer("commonAlert");
                return false
            } if (omniCpInfo != undefined && omniCpInfo != null && omniCpInfo != "" && sampanYn == "N") {
            goodsSelect.deleteOmniCoupon();
            var alertData$5 = {
                content: "옴니쿠폰을 적용할 수 없는 상품이 있습니다."
            };
            commonAlert(alertData$5);
            openLayer("commonAlert");
            return false
        } else if (omniCpInfo != undefined && omniCpInfo != null && omniCpInfo != "" && bndlFlag) {
            goodsSelect.deleteOmniCoupon();
            var alertData$6 = {
                content: "번들 상품은 옴니쿠폰을 적용 할 수 없습니다."
            };
            commonAlert(alertData$6);
            openLayer("commonAlert");
            return false
        } else if (omniCpInfo != undefined && omniCpInfo != null && omniCpInfo != "" && !omniApplyFlag) {
            goodsSelect.deleteOmniCoupon();
            var alertData$7 = {
                content: "옴니쿠폰 적용 시 상품 결제 금액 0원 이하 입니다."
            };
            commonAlert(alertData$7);
            openLayer("commonAlert");
            return false
        }/* else if (omniCpInfo != undefined && omniCpInfo != null && omniCpInfo != "" && sampanYn == "Y" && mobileYn == "Y") {
            goodsSelect.deleteOmniCoupon();
            var alertData$8 = {
                content: "옴니쿠폰을 적용할 수 없는 상품이 있습니다."
            };
            commonAlert(alertData$8);
            openLayer("commonAlert");
            return false
        }*/
        $("#order_payment_total_fpnt_amt").val(totalFnSprtAmt);
        $("#order_payment_total_goods_amt").val(totalGoodsAmt);
        $("#totalPrmtDcAmt").val(totalPrmtDcAmt);
        $("#totalFnSprtAmt").val(totalFnSprtAmt);
        $("#totalSaleAmt").val(totalGoodsAmt);
        $("#totalGoodsCpDcAmt").val(totalGoodsCpDcAmt);
        $("#order_payment_total_dc_amt").val(totalGoodsCpDcAmt);
        $("#goods_cnt").html(cnt);
        if (orderCommon.stGbCd == orderCommon.ST_GB_40) {
            $("#order_payment_total_dlvr_amt").val(totalDlvrAmt);
            $("#totalDlvrAmt").val(totalDlvrAmt);
            $("#totalMultiDlvrAmt").val(totalDlvrAmt)
        }
        if (orderCommon.stGbCd ==
            orderCommon.ST_GB_10) {
            $("#order_payment_total_dlvr_amt").val(totalDlvrAmt);
            $("#totalDlvrAmt").val(totalDlvrAmt);
            $("#totalMultiDlvrAmt").val(totalDlvrAmt)
        }
        goodsSelect.calTotalAmt();
        return true
    },
    getArrayIndex: function(arr, obj) {
        for (var i = 0; i < arr.length; i++)
            if (arr[i].selectCompNo === obj.selectCompNo) return i;
        return -1
    },
    applyOmniCoupon: function() {
        goodsSelect.getCartTotalInfo()
    },
    deleteOmniCoupon: function(type) {
        var cartIdsObj;
        var cartTpCd = $("input[id='cartTpCd']").val();
        if (typeof cartTpCd !== "undefined" && cartTpCd !=
            "" && orderCommon.stGbCd == orderCommon.ST_GB_10) cartIdsObj = $('input:checkbox[name="cartIds"][data-type="' + cartTpCd + '"]');
        else cartIdsObj = $('input:checkbox[name="cartIds"]');
        $("#omniCpInfo").val("");
        $("#omniCpNo").val("");
        $("#omniIsuSrlNo").val("");
        $("#omniEmpNo").val("");
        $("#omniCpAplVal").val(0);
        $(".omni-coupon").find("span[class=names]").html("");
        $(".omni-coupon").hide();
        cartIdsObj.each(function(k, v) {
            var cartId = v.value;
            $("#" + cartId).find("input[name=omniCpDcAmt]").val("0")
        });
        goodsSelect.applyOmniCoupon()
    }
};
$(function() {
    $(document).on("focusout", "input[name=buyQtyOrd]", function(event) {
        goodsSelect.qtySelect($(this))
    })
});