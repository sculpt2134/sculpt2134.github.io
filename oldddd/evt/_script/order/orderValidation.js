var validationManager = {
    myMarriageMoveStat: {},
    spcExhbnGoodsStat: {},
    nomalCartSpcExhbnPassGoodsNm: [],
    checkGoodsLimit: function() {
        var $inputHidden = $("input.cart-data-hidden:checked"),
            goodsIds = [];
        $.each($inputHidden, function(idx, element) {
            var goodsId = $(element).attr("data-goods-id");
            goodsIds.push(goodsId)
        });
        var options = {
            url: orderCommon.stContextPath + "xhr/order/check/goods/limit",
            data: {
                goodsIds: goodsIds
            },
            done: function(data) {
                if (data) {
                    $("#goodsLimitPassYn").val("Y");
                    order.select();
                    return true
                } else return false
            }
        };
        ajax.call(options)
    },
    isStorePickUpOnly: function() {
        var $inputHidden = $("input.cart-data-hidden:checked"),
            goodsIds = [];
        $.each($inputHidden, function(idx, element) {
            var goodsId = $(element).attr("data-goods-id");
            goodsIds.push(goodsId)
        });
        var options = {
            url: orderCommon.stContextPath + "xhr/order/check/isStorePickUpOnly",
            data: {
                goodsIds: goodsIds
            },
            done: function(data) {
                console.log(data);
                if (data) {
                    $("#isStorePickUpOnly").val("Y");
                    order.select();
                    return true
                } else return false
            }
        };
        ajax.call(options)
    },
    isExistsJickpanGoods: function() {
        var orderGoods =
                $("div.buy-target-goods"),
            goodsIds = [],
            goodsInfo = {};
        for (var i = 0; i < orderGoods.length; i++) {
            var compGbCd = $(orderGoods[i]).attr("data-comp-gb-cd");
            if (compGbCd == "10") {
                $("#total-area-membership-point-b2c").hide();
                return
            }
        }
    },
    isAvaliableManySampanGoods: function() {
        var listCartGoods = $("div.buy-target-goods"),
            totalCartCount = $("div.buy-target-goods").length,
            totalGoodsCount = 0;
        if (totalCartCount > 1) {
            $("#total-area-membership-point-b2c").hide();
            return
        }
        $.each(listCartGoods, function(idx, element) {
            if (parseInt($(element).attr("data-buy-qty")) >
                1) {
                $("#total-area-membership-point-b2c").hide();
                return
            }
        })
    },
    isAvaliableManyFnetGoods: function() {
        var listCartGoods = $("div.buy-target-goods"),
            totalCartCount = $("div.buy-target-goods").length,
            totalGoodsCount = 0;
        if (totalCartCount > 1) {
            $("#total-area-membership-point").hide();
            return
        }
        $.each(listCartGoods, function(idx, element) {
            if (parseInt($(element).attr("data-buy-qty")) > 1) {
                $("#total-area-membership-point").hide();
                return
            }
        })
    },
    isAppliedPointValue: function() {
        var alertData = {
            content: "아직 적용되지 않은 포인트가 있습니다.<br/>입력하신 포인트에 적용 버튼을 눌러주세요."
        };
        if (orderCommon.stGbCd == orderCommon.ST_GB_20 || orderCommon.stGbCd == orderCommon.ST_GB_30 || orderCommon.stGbCd == orderCommon.ST_GB_40) {
            var svmnUseTypeCd = $("#svmnUseTypeCd").val();
            var currentInputPoint = 0;
            var listInputPoint;
            if (svmnUseTypeCd == "1") listInputPoint = $("input.use-goods-point[name=fnetPoint]");
            else if (svmnUseTypeCd == "2") listInputPoint = $("input.use-cart-point[name=fnetPoint]");
            $.each(listInputPoint, function(idx, element) {
                var point = $(element).val() == "" ? 0 : parseInt($(element).val().replace(/,/g, ""));
                currentInputPoint += point
            });
            var currentUsePoint = parseInt($("#order_payment_total_fpnt_amt").val()) + parseInt($("#order_payment_total_spnt_amt").val()) + parseInt($("#order_payment_total_apnt_amt").val()) + parseInt($("#order_payment_total_mpnt_amt").val());
            if (currentInputPoint != currentUsePoint) {
                commonAlert(alertData);
                openLayer("commonAlert");
                return false
            }
        }
        if ($("#use-pt-value-10").val() != undefined) {
            var currentInputPoint = parseInt($("#use-pt-value-10").val() == "" ? 0 : $("#use-pt-value-10").val().replace(/,/g,
                    "")),
                currentUsePoint = parseInt($("#order_payment_dc_svmn_use_amt").val());
            if (currentInputPoint != currentUsePoint) {
                commonAlert(alertData);
                openLayer("commonAlert");
                return false
            }
        }
        return true
    },
    personalBuyLimit: function() {
        $("#personalBuyLimit").val("N");
        $("#fmailyOrderQtyAgreeYn").prop("checked", false);
        var $inputHidden;
        var fnetCartTp = $("input[id='cartTpCd']").val();
        var cartTpCd = $("input[id='cartTpCd']").val();
        if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && fnetCartTp != undefined && fnetCartTp != "") $inputHidden =
            $('input.cart-data-hidden[data-type="' + fnetCartTp + '"]:checked');
        else if (orderCommon.stGbCd == "10" && typeof cartTpCd !== "undefined" && cartTpCd != "") $inputHidden = $('input.cart-data-hidden[data-type="' + cartTpCd + '"]:checked');
        else $inputHidden = $("input.cart-data-hidden:checked");
        var goodsIds = [];
        var goodsIdsStr = [];
        $.each($inputHidden, function(idx, element) {
            var goodsId = $(element).attr("data-goods-id");
            var cartId = $(element).val();
            var buyQty = $("div.buy-cart-goods[id=" + cartId + "]").find("input[name=buyQty]").val();
            goodsIds.push(goodsId);
            goodsIdsStr.push(goodsId + "|" + buyQty)
        });
        var options = {
            url: orderCommon.stContextPath + "xhr/order/check/personalBuyLimit",
            data: {
                goodsIds: goodsIds,
                goodsIdsStr: goodsIdsStr
            },
            done: function(data) {
                console.log(data);
                $("#personalBuyLimit").val("Y");
                order.select();
                return true
            }
        };
        ajax.call(options)
    },
    checkOmsPsbStk: function() {
        $("#omsPsbStkCheckYn").val("N");
        var orderGoods = $("div.buy-target-goods"),
            goodsIds = [],
            cartIds = [],
            goodsInfo = {};
        for (var i = 0; i < orderGoods.length; i++) {
            var goodsId = $(orderGoods[i]).attr("data-goods-id"),
                cartId = $(orderGoods[i]).attr("data-cart-id"),
                buyQty = $(orderGoods[i]).find("input[name=buyQty]").val() == undefined ? 0 : $(orderGoods[i]).find("input[name=buyQty]").val();
            goodsIds.push(goodsId);
            cartIds.push(cartId);
            goodsInfo[goodsId] = buyQty
        }
        var options = {
            url: orderCommon.stContextPath + "xhr/order/check/checkOmsPsbStk",
            data: {
                cartIds: cartIds,
                goodsIds: goodsIds
            },
            done: function(data) {
                var buyPsbYn = data.buyPsbYn;
                console.log("OMS-168 RESULT : " + buyPsbYn);
                if (buyPsbYn == "Y") {
                    $("#omsPsbStkCheckYn").val("Y");
                    orderPaymentManager.btnStartPay()
                } else {
                    $("#omsPsbStkCheckYn").val("N");
                    commonAlert({
                        title: "alert",
                        content: "매장에 픽업 가능한 재고가 부족합니다."
                    });
                    openLayer("commonAlert");
                    return false
                }
                return true
            }
        };
        ajax.call(options)
    },
    checkSiteCloseTime: function() {
        $("#siteCloseTimeCheckYn").val("N");
        var options = {
            url: orderCommon.stContextPath + "xhr/order/check/checkSiteCloseTime",
            data: {},
            done: function(data) {
                var availableYn = data.availableYn;
                var fromTime = data.fromTime;
                var toTime = data.toTime;
                var message = data.message;
                console.log("SITE CLOSE TIME RESULT : " + availableYn + "(" + fromTime + " ~ " + toTime + ")");
                if (availableYn ==
                    "Y") {
                    $("#siteCloseTimeCheckYn").val("Y");
                    orderPaymentManager.btnStartPay()
                } else {
                    $("#siteCloseTimeCheckYn").val("N");
                    commonAlert({
                        title: "alert",
                        content: message + "<br> (" + fromTime + " ~ " + toTime + ")"
                    });
                    openLayer("commonAlert");
                    return false
                }
                return true
            }
        };
        ajax.call(options)
    },
    checkPayDiscount: function() {
        var $inputHidden = $("input.cart-data-hidden:checked"),
            isInMixedNormalAndChargeDiscount = "N",
            isInMixedDifferentChargeRate = "N",
            countNormalGoods = 0,
            countChargeDcGoods = 0,
            totalCheckedGoodsCount = $inputHidden.length,
            chargeDcRateInfo = [],
            distinctChargeDcRateInfo = [],
            isInMixedDifferentLongNoItrst = "N",
            longNoItrstInfo = [],
            distinctLongNoItrstInfo = [];
        for (var i = 0; i < $inputHidden.length; i++) {
            var element = $inputHidden[i],
                isChargeYn = $(element).attr("data-is-charge-Yn"),
                dcRate = $(element).attr("data-chrg-dc-rate"),
                isLongNoItrstYn = $(element).attr("data-long-no-itrst-yn");
            if (isChargeYn != "Y") countNormalGoods++;
            else countChargeDcGoods++;
            if (isChargeYn == "Y") {
                chargeDcRateInfo.push(dcRate);
                longNoItrstInfo.push(isLongNoItrstYn)
            }
        }
        console.log(countNormalGoods);
        console.log(countChargeDcGoods);
        $.each(chargeDcRateInfo, function(idx, element) {
            if ($.inArray(element, distinctChargeDcRateInfo) === -1) distinctChargeDcRateInfo.push(element)
        });
        if (distinctChargeDcRateInfo.length > 1) isInMixedDifferentChargeRate = "Y";
        if (isInMixedDifferentChargeRate == "Y") {
            commonAlert({
                title: "alert",
                content: "청구할인율이 서로 다른 상품을<br>동시에 주문/결제하실 수 없습니다."
            });
            openLayer("commonAlert");
            return false
        }
        $.each(longNoItrstInfo, function(idx, element) {
            if ($.inArray(element, distinctLongNoItrstInfo) === -1) distinctLongNoItrstInfo.push(element)
        });
        if (distinctLongNoItrstInfo.length > 1) isInMixedDifferentLongNoItrst = "Y";
        if (isInMixedDifferentLongNoItrst == "Y") {
            commonAlert({
                title: "alert",
                content: "청구할인과 무이자 청구할인 상품을<br>동시에 주문/결제하실 수 없습니다."
            });
            openLayer("commonAlert");
            return false
        }
        return true
    },
    checkCountForlimitDiscount: function() {
        $("#limitDiscountYn").val("N");
        var orderGoods = $("div.buy-target-goods"),
            goodsIds = [],
            goodsInfo = {};
        for (var i = 0; i < orderGoods.length; i++) {
            var goodsId = $(orderGoods[i]).attr("data-goods-id"),
                buyQty = $(orderGoods[i]).find("input[name=buyQty]").val() ==
                undefined ? 0 : $(orderGoods[i]).find("input[name=buyQty]").val();
            goodsIds.push(goodsId);
            goodsInfo[goodsId] = buyQty
        }
        var options = {
            url: orderCommon.stContextPath + "xhr/order/check/limitDiscount",
            data: {
                goodsIds: goodsIds
            },
            done: function(data) {
                console.log(data);
                var limitDiscountInfo = data.limitDiscountInfo;
                for (var i = 0; i < limitDiscountInfo.length; i++) {
                    var listLimitDiscountInfo = limitDiscountInfo[i].limitDiscountInfo.split("|");
                    var goodsId = listLimitDiscountInfo[0],
                        dcQty1 = parseInt(listLimitDiscountInfo[1]),
                        dcQty2 = parseInt(listLimitDiscountInfo[2]),
                        buyQty = parseInt(goodsInfo[goodsId]);
                    if (dcQty1 != 0 && (dcQty1 - dcQty2 < 0 || dcQty1 - (dcQty2 + buyQty) < 0)) {
                        $("#limitDiscountYn").val("N");
                        commonAlert({
                            title: "alert",
                            content: "주문 상품 중 할인 수량이 부족하여 구매할 수 없는 상품이 있습니다."
                        });
                        openLayer("commonAlert");
                        return false
                    }
                }
                $("#limitDiscountYn").val("Y");
                orderPaymentManager.btnStartPay();
                return true
            }
        };
        ajax.call(options)
    },
    b2b2cIBMCountLimit: function() {
        $("#b2bIBMLimit").val("N");
        var $inputHidden = $("input.cart-data-hidden:checked"),
            goodsIds = [],
            category = {};
        $.each($inputHidden, function(idx,
                                      element) {
            goodsIds.push($(element).attr("data-goods-id"));
            var upDispClsfNo = $(element).attr("data-upDispClsfNo");
            var count = category[upDispClsfNo] == undefined ? 0 : category[upDispClsfNo];
            count++;
            category[upDispClsfNo] = count
        });
        var options = {
            url: orderCommon.stContextPath + "xhr/order/check/b2b2c/ibm/limitcount",
            data: {
                goodsIds: goodsIds
            },
            done: function(data) {
                var $inputHidden = $("input.cart-data-hidden:checked"),
                    category = {};
                $.each($inputHidden, function(idx, element) {
                    var upDispClsfNo = $(element).attr("data-upDispClsfNo");
                    var count = category[upDispClsfNo] == undefined ? 0 : category[upDispClsfNo];
                    count++;
                    category[upDispClsfNo] = count
                });
                var listBuyInfo = data.listOrderBuyLimitVO,
                    baseCount = data.baseCount,
                    goodsBuyQty = {},
                    goodsId = null;
                for (var i = 0; i < $inputHidden.length; i++) {
                    var cartId = $($inputHidden[i]).val(),
                        buyQty = parseInt($("div.buy-cart-goods[id=" + cartId + "]").find("input[name=buyQty]").val());
                    goodsId = $("div.buy-cart-goods[id=" + cartId + "]").find(".cart-data-hidden").attr("data-goods-id");
                    goodsBuyQty[goodsId] = buyQty;
                    if (buyQty > baseCount) {
                        var alertData = {
                            content: "구매 가능한 개수를 초과하였습니다.",
                            callback: function() {
                                $("#b2bIBMLimit").val("N")
                            }
                        };
                        commonAlert(alertData);
                        openLayer("commonAlert");
                        return false
                    }
                }
                for (var j = 0; j < listBuyInfo.length; j++) {
                    goodsId = listBuyInfo[j].goodsId;
                    var orderCount = parseInt(listBuyInfo[j].count);
                    if (orderCount > baseCount || orderCount + parseInt(goodsBuyQty[goodsId]) > baseCount) {
                        var alertData$0 = {
                            content: "구매 가능한 개수를 초과하였습니다.",
                            callback: function() {
                                $("#b2bIBMLimit").val("N")
                            }
                        };
                        commonAlert(alertData$0);
                        openLayer("commonAlert");
                        return false
                    }
                }
                var isBreak =
                    true;
                $.each(category, function(key, element) {
                    if (parseInt(element) > baseCount) {
                        var alertData$1 = {
                            content: "구매 가능한 개수를 초과하였습니다.",
                            callback: function() {
                                $("#b2bIBMLimit").val("N")
                            }
                        };
                        commonAlert(alertData$1);
                        openLayer("commonAlert");
                        isBreak = false;
                        return false
                    }
                });
                if (isBreak) {
                    $("#b2bIBMLimit").val("Y");
                    order.select();
                    return true
                } else return false
            }
        };
        ajax.call(options)
    },
    fnFamliyNetCountLimit: function() {
        $("#fnetOrderAgree").val("N");
        var $inputHidden;
        var fnetCartTp = $("input[id='cartTpCd']").val();
        if ((orderCommon.stGbCd ==
            "20" || orderCommon.stGbCd == "30") && fnetCartTp != undefined && fnetCartTp != "") $inputHidden = $('input.cart-data-hidden[data-type="' + fnetCartTp + '"]:checked');
        else $inputHidden = $("input.cart-data-hidden:checked");
        var goodsIds = [];
        var mnlUsrNos = [];
        var buyQtys = [];
        var orderGoodsList = [];
        var cartIds = [];
        $.each($inputHidden, function(idx, element) {
            var goodsId = $(element).attr("data-goods-id");
            goodsIds.push(goodsId);
            mnlUsrNos.push($(element).attr("data-mnl-usr-no"));
            var cartId = $(element).val();
            var obj = $("#" + cartId);
            var buyQty =
                Number(obj.find("input[name=buyQty]").val() == undefined ? 0 : obj.find("input[name=buyQty]").val());
            buyQtys.push(buyQty);
            cartIds.push(cartId);
            orderGoodsList.push(goodsId + "|" + buyQty)
        });
        var options = {
            url: orderCommon.stContextPath + "xhr/order/check/limitcount",
            data: {
                goodsIds: goodsIds,
                mnlUsrNos: mnlUsrNos,
                buyQtys: buyQtys,
                cartIds: cartIds,
                orderGoodsList: orderGoodsList,
                nowBuyYn: "N",
                fnetCartTp: fnetCartTp
            },
            done: function(data) {
                var listBuyInfo = data.listOrderBuyLimitVO,
                    baseCount = data.baseCount,
                    goodsBuyQty = {},
                    goodsId =
                        null;
                orderGoodsQtyRestrictYn = data.orderGoodsQtyRestrictYn;
                orderGoodsQtyRestrictQty = data.orderGoodsQtyRestrictQty;
                if (Array.isArray(data.dispRestricts)) {
                    $("#dispRestrictsFrm").remove();
                    var formHtml = "";
                    formHtml += '<form action="" id="dispRestrictsFrm"  name="dispRestrictsFrm" method="post" >';
                    for (var j = 0; j < data.dispRestricts.length; j++) {
                        formHtml += '<input name="dispClsfNo" value="' + data.dispRestricts[j].dispClsfNo + '">';
                        formHtml += '<input name="qty_' + data.dispRestricts[j].dispClsfNo + '" value="' + data.dispRestricts[j].buyQty +
                            '" >'
                    }
                    formHtml += "</form>";
                    $("body").append(formHtml)
                }
                validationManager.myMarriageMoveStat = data.myMarriageMoveStat == undefined || data.myMarriageMoveStat == null ? {} : data.myMarriageMoveStat;
                validationManager.spcExhbnGoodsStat = data.spcExhbnGoodsStat == undefined || data.spcExhbnGoodsStat == null ? {} : data.spcExhbnGoodsStat;
                validationManager.nomalCartSpcExhbnPassGoodsNm = data.nomalCartSpcExhbnPassGoodsNm == undefined || data.nomalCartSpcExhbnPassGoodsNm == null ? [] : data.nomalCartSpcExhbnPassGoodsNm;
                for (var i = 0; i < $inputHidden.length; i++) {
                    var cartId =
                            $($inputHidden[i]).val(),
                        buyQty = parseInt($("div.buy-cart-goods[id=" + cartId + "]").find("input[name=buyQty]").val());
                    goodsId = $("div.buy-cart-goods[id=" + cartId + "]").find(".cart-data-hidden").attr("data-goods-id");
                    goodsBuyQty[goodsId] = buyQty;
                    if (buyQty > baseCount) {
                        $("#popupFmailyAgree").find("#baseCount").text(baseCount);
                        openLayer("popupFmailyAgree");
                        return false
                    }
                }
                for (var j = 0; j < listBuyInfo.length; j++) {
                    goodsId = listBuyInfo[j].goodsId;
                    var orderCount = parseInt(listBuyInfo[j].count);
                    if (orderCount >= baseCount ||
                        orderCount + parseInt(goodsBuyQty[goodsId]) >= baseCount) {
                        $("#popupFmailyAgree").find("#baseCount").text(baseCount);
                        openLayer("popupFmailyAgree");
                        return false
                    }
                }
                $("#fnetOrderAgree").val("Y");
                order.select();
                return true
            }
        };
        ajax.call(options)
    },
    fnetOrderQtyRestrictAgreeN: function() {
        $("#fmailyOrderQtyAgreeYn").prop("checked", false);
        closeLayer("popupFmailyOrderQtyAgree")
    },
    fnetOrderQtyRestrictAgreeY: function() {
        var text = $("#fmailyOrderQtyAgreeText").val().trim();
        if (text == "본인은 상기 내용에 동의합니다." || text == "본인은 상기 내용에 동의합니다") $("#fmailyOrderQtyAgreeYn").prop("checked",
            true);
        else $("#fmailyOrderQtyAgreeYn").prop("checked", false);
        if ($("#fmailyOrderQtyAgreeYn:checked").val() == "Y") {
            closeLayer("popupFmailyOrderQtyAgree");
            order.select();
            return true
        } else {
            commonAlert({
                title: "alert",
                content: "안내문구와 동일하게<br>본인입력 내용을 다시 입력 해주세요. "
            });
            openLayer("commonAlert");
            return false
        }
    },
    fnFamliyNetCountLimitAgreeN: function() {
        $("#fnetOrderAgree").val("N");
        closeLayer("popupFmailyAgree")
    },
    fnFamliyNetCountLimitAgree: function() {
        $("#fnetOrderAgree").val("Y");
        closeLayer("popupFmailyAgree");
        order.select()
    },
    initializeCartPoint: function() {
        var listCartGoods = $("div.buy-target-goods"),
            totalCartCount = $("div.buy-target-goods").length,
            totalGoodsCount = 0;
        $.each(listCartGoods, function(idx, element) {
            totalGoodsCount += parseInt($(element).attr("data-buy-qty"))
        });
        if (totalCartCount != totalGoodsCount) {
            $(".rdUseType02").hide();
            $(".rdUseType02").attr("disabled", "disabled")
        }
    },
    initializeMembershipPoint: function() {
        var listCartGoods = $("div.buy-target-goods"),
            totalCartCount = $("div.buy-target-goods").length,
            totalGoodsCount = 0;
        $.each(listCartGoods, function(idx, element) {
            totalGoodsCount += parseInt($(element).attr("data-buy-qty"))
        });
        if (totalCartCount != totalGoodsCount) $("#total-area-membership-point").hide()
    },
    cartBuyLimitOrder: function() {
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40") {
            var $cartInput;
            var fnetCartTp = $("input[id='cartTpCd']").val();
            var cartTpCd = $("input[id='cartTpCd']").val();
            if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && fnetCartTp != undefined && fnetCartTp != "") $cartInput =
                $('input.cart-data-hidden[data-type="' + fnetCartTp + '"]:checked');
            else if (orderCommon.stGbCd == "10" && typeof cartTpCd !== "undefined" && cartTpCd != "") $cartInput = $('input.cart-data-hidden[data-type="' + cartTpCd + '"]:checked');
            else $cartInput = $("input.cart-data-hidden:checked");
            var totalPayAmt = parseInt($("#order_payment_total_pay_amt").val());
            var currentRmnBuyAmt = parseInt($("#hideRmnLmtAmt").val());
            if (orderCommon.stGbCd == "20" && fnetCartTp == "spcExhbn") {
                var currentRmnBuyEtcAmt = parseInt($("#hideRmnLmtEtcAmt").val());
                currentRmnBuyAmt = currentRmnBuyEtcAmt
            }
            if (currentRmnBuyAmt > 0 && currentRmnBuyAmt < totalPayAmt)
                for (var i = 0; i < $cartInput.length; i++) {
                    var cartId = $($cartInput[i]).val(),
                        buyQty = parseInt($("div.buy-cart-goods[id=" + cartId + "]").find("input[name=buyQty]").val());
                    if (buyQty > 1) return false
                }
        }
        return true
    },
    cartBuyLimitQuantity: function(cartId, that) {
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40") {
            var fnetCartTp = $("input[id='cartTpCd']").val();
            var $cartDiv = $("div.buy-cart-goods[id=" + cartId +
                    "]"),
                buyQty = parseInt($("input#cart_goods_buy_qty_" + cartId).val());
            if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40") {
                var currentRmnBuyAmt = parseInt($("#hideRmnLmtAmt").val()),
                    employeePrice = (parseInt($cartDiv.find("input[name=saleAmt]").val()) - parseInt($cartDiv.find("input[name=fnSprtAmt]").val())) / buyQty * (buyQty + 1);
                if (orderCommon.stGbCd == "20" && fnetCartTp != undefined && fnetCartTp != null && fnetCartTp == "spcExhbn") {
                    var currentRmnBuyEtcAmt = parseInt($("#hideRmnLmtEtcAmt").val());
                    currentRmnBuyAmt = currentRmnBuyEtcAmt
                }
                if (currentRmnBuyAmt > 0 && currentRmnBuyAmt < employeePrice) {
                    var alertData = {
                        content: "동일 상품 2개 이상 구매 시,<br/>한도를 초과한 구매는 불가합니다.<br/>한도 내에서 수량을 조정하여 주시기 바랍니다."
                    };
                    commonAlert(alertData);
                    openLayer("commonAlert");
                    $(that).addClass("cart-buy-limit-except");
                    return false
                }
            }
        }
        return true
    },
    cartBuyLimitDirect: function(cartId, that) {
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40") {
            var $cartDiv = $("div.buy-cart-goods[id=" + cartId + "]"),
                buyQty = parseInt($cartDiv.find("input[name=buyQty]").val()),
                beforeQty = parseInt($cartDiv.attr("data-omni-quantity"));
            if (that != undefined) buyQty = parseInt($(that).val());
            if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40") {
                var fnetCartTp = $("input[id='cartTpCd']").val();
                var currentRmnBuyAmt = parseInt($("#hideRmnLmtAmt").val()),
                    employeePrice = (parseInt($cartDiv.find("input[name=saleAmt]").val()) - parseInt($cartDiv.find("input[name=fnSprtAmt]").val())) / beforeQty * buyQty;
                if (orderCommon.stGbCd == "20" && fnetCartTp != undefined && fnetCartTp != null &&
                    fnetCartTp == "spcExhbn") {
                    var currentRmnBuyEtcAmt = parseInt($("#hideRmnLmtEtcAmt").val());
                    currentRmnBuyAmt = currentRmnBuyEtcAmt
                }
                if (currentRmnBuyAmt > 0 && currentRmnBuyAmt < employeePrice) {
                    var alertData = {
                        content: "동일 상품 구매 시, 한도 초과는 불가합니다.<br/>한도 내에서 수량을 조정하여 주시기 바랍니다."
                    };
                    commonAlert(alertData);
                    openLayer("commonAlert");
                    $(that).val(beforeQty);
                    $(that).trigger("focusout")
                }
            }
        }
        return true
    },
    memberInfo: function() {
        $(".error-msg").hide();
        if ($("#order_payment_ordr_nm").val() == "") {
            editMemberInfo();
            $("#order_payment_ordr_nm").next().show();
            $("#order_payment_ordr_nm").focus();
            return false
        }
        if ($("#order_payment_ordr_mobile").val() == "") {
            editMemberInfo();
            $("#order_payment_ordr_mobile").next().html("<p>휴대폰을 입력해 주세요.</p>");
            $("#order_payment_ordr_mobile").next().show();
            $("#order_payment_ordr_mobile").focus();
            return false
        }
        $("#order_payment_ordr_mobile").val($("#order_payment_ordr_mobile").val().replace(/[-_ ]/gi, ""));
        if (!valid.mobile.test($("#order_payment_ordr_mobile").val().replace(/-/gi, ""))) {
            editMemberInfo();
            $("#order_payment_ordr_mobile").next().html("<p>휴대폰을 정확히 입력해주세요.</p>");
            $("#order_payment_ordr_mobile").next().show();
            $("#order_payment_ordr_mobile").focus();
            return false
        }
        if ($("#order_payment_ordr_email").val() == "") {
            editMemberInfo();
            $("#order_payment_ordr_email").next().html("<p>이메일을 입력해 주세요.</p>");
            $("#order_payment_ordr_email").next().show();
            $("#order_payment_ordr_email").focus();
            return false
        }
        $("#order_payment_ordr_email").val($("#order_payment_ordr_email").val().replace(/[ ]/gi, ""));
        if (!valid.email.test($("#order_payment_ordr_email").val())) {
            editMemberInfo();
            $("#order_payment_ordr_email").next().html("<p>이메일 형식이 올바르지 않습니다.</p>");
            $("#order_payment_ordr_email").next().show();
            $("#order_payment_ordr_email").focus();
            return false
        }
        return true
    },
    receiverInfo: function() {
        $(".error-msg").hide();
        if ($("#order-recieve-nm").val() == "") {
            editMemberInfo();
            $("#order-recieve-nm").next().show();
            $("#order-recieve-nm").focus();
            return false
        }
        if ($("#order-recieve-mobile").val() == "") {
            editMemberInfo();
            $("#order-recieve-mobile").next().html("<p>휴대폰을 입력해 주세요.</p>");
            $("#order-recieve-mobile").next().show();
            $("#order-recieve-mobile").focus();
            return false
        }
        if (!valid.mobile.test($("#order-recieve-mobile").val().replace(/-/gi,
            ""))) {
            editMemberInfo();
            $("#order-recieve-mobile").next().html("<p>휴대폰을 확인해 주세요.</p>");
            $("#order-recieve-mobile").next().show();
            $("#order-recieve-mobile").focus();
            return false
        }
        return true
    },
    dlvrInfo: function() {
        $(".error-msg").hide();
        if ($("#spanOrdRoadAddr").length && (!$("#delivery-tab-view2").length || $("#delivery-tab-view2").css("display") == "none")) {
            if ($("input[name=adrsNm]").val() == null || $("input[name=adrsNm]").val().trim() === "") return false;
            if ($("input[name=adrsMobile]").val() == null || $("input[name=adrsMobile]").val().trim() ===
                "") return false;
            if (($("input[name=postNoNew]").val() == null || $("input[name=postNoNew]").val().trim() === "") && ($("input[name=postNoOld]").val() == null || $("input[name=postNoOld]").val().trim() === "")) return false;
            if ($("input[name=postNoNew]").val() != null && $("input[name=postNoNew]").val().trim() != "") {
                if ($("input[name=roadAddr]").val() == null || $("input[name=roadAddr]").val().trim() === "") return false
            } else if ($("input[name=prclAddr]").val() == null || $("input[name=prclAddr]").val().trim() === "") return false
        }
        if ($(".validate-delivery-info").length &&
            (!$("#delivery-tab-view2").length || $("#delivery-tab-view2").css("display") == "none")) {
            if ($("#adrsNm").val() == null || $("#adrsNm").val().trim() === "") {
                $("#adrsNm").next().show();
                $("#adrsNm").focus();
                return false
            }
            if ($("#adrsMobile").val() == null || $("#adrsMobile").val().trim() === "") {
                $("#adrsMobile").next().show();
                $("#adrsMobile").focus();
                return false
            }
            if (!valid.mobile.test($("#adrsMobile").val().replace(/-/gi, ""))) {
                editMemberInfo();
                $("#adrsMobile").next().html("<p>휴대폰을 정확히 입력해주세요.</p>");
                $("#adrsMobile").next().show();
                $("#adrsMobile").focus();
                return false
            }
            if ($("#postNoNew").val() == null || $("#postNoNew").val().trim() === "" || ($("#roadAddr").val() == null || $("#roadAddr").val().trim() === "")) {
                $("#roadAddr").next().show();
                $("#roadAddr").focus();
                return false
            }
            if ($("#roadDtlAddr").val() == null || $("#roadDtlAddr").val().trim() === "") {
                $("#roadDtlAddr").next().show();
                $("#roadDtlAddr").focus();
                return false
            }
        }
        if ($("#delivery-tab-view5").css("display") != "none" && $("#delivery-tab-view5").css("display") != undefined) {
            var value = false;
            $(".officePick").each(function() {
                if ($(this).attr("aria-selected") ==
                    "selected") value = true
            });
            return value
        }
        var result = true;
        if ($("#delivery-tab-view1").css("display") == "none") $(".delivery-box").each(function() {
            var postNoNew = this.querySelector("[name='multiMemberAddressPostNoNew']").value;
            var postNoOld = this.querySelector("[name='multiMemberAddressPostNoOld']").value;
            var roadAddr = this.querySelector("[name='multiMemberAddressRoadAddr']").value;
            var prclAddr = this.querySelector("[name='multiMemberAddressPrclAddr']").value;
            var adrsNm = this.querySelector("[name='multiMemberAddressAdrsNm']").value;
            var mobile = this.querySelector("[name='multiMemberAddressMobile']").value;
            if (adrsNm == null || adrsNm.trim() === "") result = false;
            if (mobile == null || mobile.trim() === "") result = false;
            if ((postNoNew == null || postNoNew.trim() === "") && (postNoOld == null || postNoOld.trim() === "")) {
                this.querySelector(".multiMemberAddressErr").style.dispaly = "block";
                result = false
            }
            if (postNoNew != null && postNoNew.trim() != "") {
                if (roadAddr == null || roadAddr.trim() === "") {
                    this.querySelector(".multiMemberAddressErr").style.dispaly = "block";
                    result = false
                }
            } else if (prclAddr ==
                null || prclAddr.trim() === "") {
                this.querySelector(".multiMemberAddressErr").style.dispaly = "block";
                result = false
            }
        });
        return result
    },
    carePlusPrevDlvrInfo: function() {
        $(".error-msg").hide();
        if ($("input[name=careplusPrevAdrsNm]").val() == null || $("input[name=careplusPrevAdrsNm]").val().trim() === "") {
            $("#careplusPrevAdrsNm").next().show();
            $("#careplusPrevAdrsNm").focus();
            return false
        }
        if ($("input[name=careplusPrevAdrsMobile]").val() == null || $("input[name=careplusPrevAdrsMobile]").val().trim() === "") {
            $("#careplusPrevAdrsMobile").next().show();
            $("#careplusPrevAdrsMobile").focus();
            return false
        }
        if (!valid.mobile.test($("#careplusPrevAdrsMobile").val().replace(/-/gi, ""))) {
            $("#careplusPrevAdrsMobile").next().html("<p>휴대폰을 정확히 입력해주세요.</p>");
            $("#careplusPrevAdrsMobile").next().show();
            $("#careplusPrevAdrsMobile").focus();
            return false
        }
        if ($("input[name=careplusPrevPostNoNew]").val() == null || $("input[name=careplusPrevPostNoNew]").val().trim() === "") {
            $("#careplusPrevPostNoNew").next().show();
            $("#careplusPrevPostNoNew").focus();
            return false
        }
        if ($("input[name=careplusPrevRoadDtlAddr]").val() ==
            null || $("input[name=careplusPrevRoadDtlAddr]").val().trim() === "") {
            $("#careplusPrevRoadDtlAddr").next().show();
            $("#careplusPrevRoadDtlAddr").focus();
            return false
        }
        return true
    },
    point: function(obj, svmnTpcd) {
        if ($("#order_payment_dc_svmn_use_amt").val() == "") $("#order_payment_dc_svmn_use_amt").val("0");
        else {
            var useSvmnAmt = $("#order_payment_dc_svmn_use_amt").length > 0 ? parseInt($("#order_payment_dc_svmn_use_amt").val()) : 0;
            var mySvmnAmt = parseInt($("#order_payment_member_svmn_rmn_amt").val());
            var minimumPoint =
                0;
            if (useSvmnAmt != mySvmnAmt) $("input[name='use_pt']").prop("checked", false);
            if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40") minimumPoint = 100;
            var currentInputPont = parseInt($(obj).val());
            if (currentInputPont == 0) {
                parseInt($(obj).val(0));
                return false
            }
            if (currentInputPont > 0 && currentInputPont < minimumPoint) {
                $(obj).val(0);
                commonAlert({
                    title: "alert",
                    content: "최소 100 포인트 이상부터 사용 가능합니다."
                });
                openLayer("commonAlert");
                parseInt($(obj).val(0));
                return false
            }
            if (svmnTpcd == orderCommon.SVMN_TP_10) mySvmnAmt =
                parseInt($("#myFoundDayAmt").val());
            else if (svmnTpcd == orderCommon.SVMN_TP_20) mySvmnAmt = parseInt($("#mySpecialAmt").val());
            else if (svmnTpcd == orderCommon.SVMN_TP_30) mySvmnAmt = parseInt($("#myAwardAmt").val());
            else if (svmnTpcd == orderCommon.SVMN_TP_40) mySvmnAmt = parseInt($("#myMosaicAmt").val());
            else if (svmnTpcd == orderCommon.SVMN_TP_50) mySvmnAmt = parseInt($("#myWelfareAmt").val());
            if (currentInputPont > mySvmnAmt) {
                commonAlert({
                    title: "alert",
                    content: "보유중인 적립금보다 많은 금액을 입력하셨습니다."
                });
                openLayer("commonAlert");
                parseInt($(obj).val(0));
                return false
            }
            var goodsId = $(obj).attr("data-goods-id");
            if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40")
                if (!$(obj).hasClass("fnet-all-use-point-value"))
                    if (currentInputPont % goodsCount > 0) {
                        commonAlert({
                            title: "alert",
                            content: "상품 개수의 배수로만 포인트를 사용하실 수 있습니다."
                        });
                        openLayer("commonAlert");
                        parseInt($(obj).val(0));
                        return false
                    } var listGoodsPoint = $("input[name=fnetPoint][data-goods-id=" + goodsId + "]");
            if (!$(obj).hasClass("fnet-all-use-point-value")) {
                var goodsPoint = 0;
                var goodsCount =
                    parseInt($("div.buy-target-goods[data-goods-id=" + goodsId + "]").attr("data-buy-qty"));
                var goodsBuyAmt = parseInt($("div.buy-target-goods[data-goods-id=" + goodsId + "]").find("input[name=buyAmt]").val());
                var thisBndlPrmtDcAmt = $.isNumeric($(obj).find("input[name=bndlPrmtDcAmt]").val()) ? parseInt($(obj).find("input[name=bndlPrmtDcAmt]").val()) : 0;
                var thisBaseGoodsCpDcAmt = parseInt($(obj).find("input[name=baseGoodsCpDcAmt]").val());
                var thisDupGoodsCpDcAmt = parseInt($(obj).find("input[name=dupGoodsCpDcAmt]").val());
                var thisOmniCpDcAmt = $.isNumeric($(obj).find("#omniCpDcAmt").val()) ? parseInt($(obj).find("#omniCpDcAmt").val()) : 0;
                var thisCpDcAmt = thisBaseGoodsCpDcAmt + thisDupGoodsCpDcAmt + thisOmniCpDcAmt;
                var goodsPayAmt = goodsBuyAmt - thisBndlPrmtDcAmt - thisCpDcAmt;
                $.each(listGoodsPoint, function(idx, element) {
                    goodsPoint += parseInt($(element).val().replace(",", ""))
                });
                if (goodsPayAmt < goodsPoint) {
                    commonAlert({
                        title: "alert",
                        content: "상품의 결제 금액을 초과하였습니다."
                    });
                    openLayer("commonAlert");
                    parseInt($(obj).val(0));
                    return false
                }
            }
            var goodsTotalAmt =
                parseInt($("order_payment_total_pay_amt").val());
            var fpntTotalAmt = parseInt($("#order_payment_total_fpnt_amt").val());
            var spntTotalAmt = parseInt($("#order_payment_total_spnt_amt").val());
            var apntTotalAmt = parseInt($("#order_payment_total_apnt_amt").val());
            var mpntTotalAmt = parseInt($("#order_payment_total_mpnt_amt").val());
            var orderPayAmt = goodsTotalAmt;
            if (orderCommon.stGbCd == "30") orderPayAmt -= parseInt($("#totalFnSprtAmt").val()) - (fpntTotalAmt + spntTotalAmt + apntTotalAmt + mpntTotalAmt);
            if (useSvmnAmt > orderPayAmt) {
                commonAlert({
                    title: "alert",
                    content: "결제금액을 초과하였습니다."
                });
                openLayer("commonAlert");
                parseInt($(obj).val(0));
                return false
            }
        }
        return true
    },
    cartPoint: function(obj) {
        var currentPayAmt = parseInt($("#order_payment_total_pay_amt").val()),
            currentInputPoint = parseInt($(obj).val()),
            minimumPoint = 0;
        if (currentPayAmt < currentInputPoint) {
            commonAlert({
                title: "alert",
                content: "결제금액을 초과하였습니다."
            });
            openLayer("commonAlert");
            $(obj).val(0)
        }
        return true
    },
    pay: function() {
        var payMeansCd = $("#payMeansCd").val();
        var payAmt = parseInt($("#order_payment_total_pay_amt").val());
        if (!(orderCommon.stGbCd == 20 || orderCommon.stGbCd == 30 || orderCommon.stGbCd == 40))
            if (orderCommon.stGbCd == 10 && Number($("#cpDcAmtForFree").val()) > 0) {
                if (payAmt < 0) {
                    commonAlert({
                        title: "alert",
                        content: "결제금액을 확인해 주세요."
                    });
                    openLayer("commonAlert");
                    return false
                }
            } else {
//                if (payAmt <= 0) {
//                    commonAlert({
//                        title: "alert",
//                        content: "결제금액을 확인해 주세요."
//                    });
//                    openLayer("commonAlert");
//                    return false
//                }
            }
        else if (payAmt < 0) {
            commonAlert({
                title: "alert",
                content: "결제금액을 확인해 주세요."
            });
            openLayer("commonAlert");
            return false
        }
        var buyGoodsList = $("div.buy-target-goods");
        var goodsPayFlag = true;
        for (var i = 0; i < buyGoodsList.length; i++) {
            var element = buyGoodsList[i];
            var goodsId = $(element).attr("data-goods-id");
            var cartId = $(element).attr("data-cart-id");
            var goodsPayAmt = $(element).find("input[name=goodsPayAmt]").val();
            if (goodsPayAmt < 0) goodsPayFlag = false
        }
        if (!goodsPayFlag) {
            commonAlert({
                title: "alert",
                content: "상품 결제금액을 확인해 주세요."
            });
            openLayer("commonAlert");
            return false
        }
        if ((payMeansCd == "" || payMeansCd == undefined) && payAmt > 0) {
            commonAlert({
                title: "alert",
                content: "결제수단을 선택해 주세요."
            });
            openLayer("commonAlert");
            return false
        }
        if (payMeansCd == orderCommon.CONST_PAY_MEANS_110 && $("input[name=rglrDlvrYn]").val() != "Y") {
            if ($(".credit-add").css("display") == "none") {
                if ($("#mobilCardCode").val() == "") {
                    commonAlert({
                        title: "alert",
                        content: "신용카드를 선택해 주세요."
                    });
                    openLayer("commonAlert");
                    return false
                }
            } else if (!$(".credit-add").find(".droplist-button").hasClass("selected")) {
                commonAlert({
                    title: "alert",
                    content: "신용카드를 선택해 주세요."
                });
                openLayer("commonAlert");
                return false
            }
            if ($("#mobilCardCode").val() != "" && $("#mobilCardCode").val() != undefined) {
                if (parseInt($("#order_payment_total_pay_amt").val()) >
                    0 && $("#installmentMonth").val() == "") {
                    commonAlert({
                        title: "alert",
                        content: "할부기간을 체크해 주세요.",
                        callback: function() {
                            $("#orderPaymentBtn").focus()
                        }
                    });
                    openLayer("commonAlert");
                    return false
                }
                if (parseInt($("#order_payment_total_pay_amt").val()) > 0 && parseInt($("#order_payment_total_pay_amt").val()) < 5E4 && $("#installmentMonth").val() != "00") {
                    commonAlert({
                        title: "alert",
                        content: "결제 예정 금액이 5만원 이상일때만 결제가 가능합니다."
                    });
                    openLayer("commonAlert");
                    return false
                }
            }
        }
        if (payMeansCd == "easypay" && $("#mobilCardCode").val() == "") {
            commonAlert({
                title: "alert",
                content: "간편결제사를 선택해 주세요."
            });
            openLayer("commonAlert");
            return false
        }
        if (payMeansCd == orderCommon.CONST_PAY_MEANS_130)
            if (!$("#agree_escro01").is(":checked")) {
                commonAlert({
                    title: "alert",
                    content: "구매안전 에스크로 사용 동의해 주세요."
                });
                openLayer("commonAlert");
                return false
            } if (payMeansCd == orderCommon.CONST_PAY_MEANS_140)
            if (!$("#agree_escro02").is(":checked")) {
                commonAlert({
                    title: "alert",
                    content: "구매안전 에스크로 사용 동의해 주세요."
                });
                openLayer("commonAlert");
                return false
            } if (payMeansCd == orderCommon.CONST_PAY_MEANS_140 || payMeansCd == orderCommon.CONST_PAY_MEANS_130 ||
            payMeansCd == orderCommon.CONST_PAY_MEANS_150) {
            var useGbCd = $("input:radio[name=useGbCd]:checked").val();
            if (useGbCd == orderCommon.CONST_CASH_USE_GB_10) {
                if ($("#order_payment_doc_isu_means_no_phn").val() == "") {
                    $("#order_payment_doc_isu_means_no_phn").focus();
                    return false
                }
                if (!valid.mobile.test($("#order_payment_doc_isu_means_no_phn").val())) {
                    $("#order_payment_doc_isu_means_no_phn").focus();
                    return false
                }
            }
            if (useGbCd == orderCommon.CONST_CASH_USE_GB_20) {
                if ($("#order_payment_doc_isu_means_no_biz").val() == "") {
                    $("#order_payment_doc_isu_means_no_biz").focus();
                    return false
                }
                if (!valid.bizNo.test($("#order_payment_doc_isu_means_no_biz").val())) {
                    $("#order_payment_doc_isu_means_no_biz").focus();
                    return false
                }
            }
        }
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40") {
            if (!$("#agreement-1").prop("checked") || !$("#agreement-2").prop("checked") || !$("#agreement-3").prop("checked")) {
                var alertMsg = "주문 상품 정보 및 배송 정보를 확인하고<br>구매에 동의해 주세요.";
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
            var galaxyClubYn = $("input[id = galaxyClubYn]").val();
            var trdInYn = $("input[id = tradeInYn]").val();
            var fMInYn = $("input[id = familyMallYN]").val();
            var btnSelectCheck = $("#dropOrderInstPlanGalaxyBtn").hasClass("selected");
            if (trdInYn == "Y" && galaxyClubYn == "Y") {
                if (btnSelectCheck == false) {
                    var alertMsg = "할부 기간을 선택해주세요.";
                    commonAlert({
                        title: "alert",
                        content: alertMsg
                    });
                    openLayer("commonAlert");
                    return false
                }
                if (!$("#agreement-1").prop("checked") || !$("#agreement-2").prop("checked") || !$("#agreement-3").prop("checked") ||
                    !$("#agreement-5").prop("checked") || !$("#agreement-9").prop("checked") || !$("#agreement-11").prop("checked") || !$("#agreement-13").prop("checked") || !$("#agreement-14").prop("checked") || !$("#agreement-15").prop("checked")) {
                    var alertMsg = "주문 및 개인정보 수집 필수 및 중고보상, <br>My 갤럭시 클럽 이용약관에 동의해 주세요.";
                    if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") alertMsg = "주문 상품 정보 및 배송 정보를 확인하고<br>구매에 동의해 주세요.";
                    commonAlert({
                        title: "alert",
                        content: alertMsg
                    });
                    openLayer("commonAlert");
                    return false
                }
            } else if (trdInYn ==
                "Y") {
                if (!$("#agreement-1").prop("checked") || !$("#agreement-2").prop("checked") || !$("#agreement-3").prop("checked") || !$("#agreement-5").prop("checked") || !$("#agreement-9").prop("checked") || !$("#agreement-11").prop("checked")) {
                    var alertMsg = "주문 및 개인정보 수집 필수 및 중고보상 이용약관에<br>동의해 주세요.";
                    if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") alertMsg = "주문 상품 정보 및 배송 정보를 확인하고<br>구매에 동의해 주세요.";
                    commonAlert({
                        title: "alert",
                        content: alertMsg
                    });
                    openLayer("commonAlert");
                    return false
                }
            } else if (galaxyClubYn ==
                "Y") {
                if (btnSelectCheck == false) {
                    var alertMsg = "할부 기간을 선택해주세요.";
                    commonAlert({
                        title: "alert",
                        content: alertMsg
                    });
                    openLayer("commonAlert");
                    return false
                }
                if (!$("#agreement-1").prop("checked") || !$("#agreement-2").prop("checked") || !$("#agreement-3").prop("checked") || !$("#agreement-5").prop("checked") || !$("#agreement-13").prop("checked") || !$("#agreement-14").prop("checked") || !$("#agreement-15").prop("checked")) {
                    var alertMsg = "주문 및 개인정보 수집 필수 및 My 갤럭시 클럽 이용약관에<br>동의해 주세요.";
                    if (orderCommon.stGbCd == "20" || orderCommon.stGbCd ==
                        "30") alertMsg = "주문 상품 정보 및 배송 정보를 확인하고<br>구매에 동의해 주세요.";
                    commonAlert({
                        title: "alert",
                        content: alertMsg
                    });
                    openLayer("commonAlert");
                    return false
                }
            } else if (fMInYn == "Y") {
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
            } else if (!$("#agreement-1").prop("checked") || !$("#agreement-2").prop("checked") ||
                !$("#agreement-3").prop("checked") || !$("#agreement-5").prop("checked")) {
                var alertMsg = "주문 및 개인정보 수집 필수 약관에<br>동의해 주세요.";
                if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") alertMsg = "주문 상품 정보 및 배송 정보를 확인하고<br>구매에 동의해 주세요.";
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
            var regularDeliveryYn = $("#regularDeliveryYn").val();
            if (regularDeliveryYn == "Y")
                if (!$("#agreement-7").prop("checked")) {
                    var alertMsg =
                        "자동승인 이용약관에<br>동의해 주세요.";
                    commonAlert({
                        title: "alert",
                        content: alertMsg
                    });
                    openLayer("commonAlert");
                    return false
                }
        }
        return true
    },
    tradeInInfo: function() {
        var tradeInDiv = $("div.trade-in-div");
        var tradeFlag = true;
        $.each(tradeInDiv, function(idx, element) {
            var modelName = $(element).children().find("ul.droplist").find("li.focused").data("modelname");
            var proNum = $(element).children().find("ul.droplist").find("li.focused").data("pronum");
            var addCmpAmt = Number($(element).children().find("ul.droplist").find("li.focused").data("addcmpamt"));
            console.log(modelName + "||" + proNum + "||" + addCmpAmt);
            if (modelName == "" && proNum == "" && addCmpAmt == 0) {
                tradeFlag = false;
                $(element).find(".trade-in-err").show();
                $(element).find("div[class=wrap-droplist]").find("button[id=tradeModelAddrBtn]").focus();
                return
            }
        });
        return tradeFlag
    },
    checkOrderPayDiscount: function() {
        var $buyTargetGoods = $("div.buy-target-goods"),
            isInMixedNormalAndChargeDiscount = "N",
            isInMixedDifferentChargeRate = "N",
            countNormalGoods = 0,
            countChargeDcGoods = 0,
            totalCheckedGoodsCount = $buyTargetGoods.length,
            chargeDcRateInfo = [],
            distinctChargeDcRateInfo = [],
            isInMixedDifferentLongNoItrst = "N",
            longNoItrstInfo = [],
            distinctLongNoItrstInfo = [];
        for (var i = 0; i < $buyTargetGoods.length; i++) {
            var element = $buyTargetGoods[i],
                isChargeYn = $(element).attr("data-is-charge-Yn"),
                isChargeDcStrId = $(element).attr("data-chrg-dc-str-id"),
                dcRate = $(element).attr("data-chrg-dc-rate"),
                isLongNoItrstYn = $(element).attr("data-long-no-itrst-yn");
            if (isChargeDcStrId != "" && isChargeDcStrId != undefined) countNormalGoods++;
            else countChargeDcGoods++;
            if (isChargeDcStrId != "" && isChargeDcStrId != undefined) {
                chargeDcRateInfo.push(dcRate);
                longNoItrstInfo.push(isLongNoItrstYn)
            }
        }
        console.log(countNormalGoods);
        console.log(countChargeDcGoods);
        if (countNormalGoods > 0 && countChargeDcGoods > 0) isInMixedNormalAndChargeDiscount = "Y";
        if (isInMixedNormalAndChargeDiscount == "Y") {
            commonAlert({
                title: "alert",
                content: "청구할인 적용 제품과 미적용 제품은 각각 개별 결제 및 주문 진행하시면 됩니다."
            });
            openLayer("commonAlert");
            return false
        }
        $.each(chargeDcRateInfo, function(idx, element) {
            if ($.inArray(element, distinctChargeDcRateInfo) ===
                -1) distinctChargeDcRateInfo.push(element)
        });
        if (distinctChargeDcRateInfo.length > 1) isInMixedDifferentChargeRate = "Y";
        if (isInMixedDifferentChargeRate == "Y") {
            commonAlert({
                title: "alert",
                content: "청구할인율이 서로 다른 상품을<br>동시에 주문/결제하실 수 없습니다."
            });
            openLayer("commonAlert");
            return false
        }
        $.each(longNoItrstInfo, function(idx, element) {
            if ($.inArray(element, distinctLongNoItrstInfo) === -1) distinctLongNoItrstInfo.push(element)
        });
        if (distinctLongNoItrstInfo.length > 1) isInMixedDifferentLongNoItrst = "Y";
        if (isInMixedDifferentLongNoItrst ==
            "Y") {
            commonAlert({
                title: "alert",
                content: "청구할인과 무이자 청구할인 상품을<br>동시에 주문/결제하실 수 없습니다."
            });
            openLayer("commonAlert");
            return false
        }
        return true
    },
    homefitnessPrivateProduct: function() {
        var lectureCnt = $("#selectedLectureCnt").text().split("/");
        var alertMsg = "프라이빗 날짜 선택을 " + $("#selectedLectureCnt").text() + "개 선택해주셨습니다.<br> 추가로 선택해주세요";
        if (lectureCnt[0].trim() != lectureCnt[1].trim()) {
            commonAlert({
                title: "alert",
                content: alertMsg
            });
            openLayer("commonAlert");
            return false
        }
        return true
    },
    isAlreadyReservePrivateProduct: function() {
        if ($("#lctNoList").val() !=
            "" && $("#lctNoList").val() != null) var lctNoListValue = $("#lctNoList").val();
        var resultAjax = false;
        var options = {
            url: orderCommon.stContextPath + "xhr/homefitness/main/checkReservationAlready",
            data: {
                lctNoList: lctNoListValue
            },
            async: false,
            done: function(data) {
                if (data == false) {
                    commonAlert({
                        title: "alert",
                        content: "이미 다른 사용자가 해당 수강을 신청했습니다. <br> 다시 선택해주세요."
                    });
                    openLayer("commonAlert");
                    resultAjax = false;
                    location.reload()
                } else resultAjax = true
            }
        };
        ajax.call(options);
        return resultAjax
    },
    isHomeFitTermsValidation: function() {
        if (!$("#agreement-8").prop("checked")) {
            var alertMsg =
                "삼성닷컴 홈 피트니스 서비스 이용약관을 확인하고<br>서비스 이용약관을 동의해 주세요.";
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
        return true
    },
    isCareplusTermsValidation: function() {
        if (!$("#agreement-17").prop("checked")) {
            var alertMsg = "삼성닷컴 케어플러스 서비스 이용약관을 확인하고<br>서비스 이용약관을 동의해 주세요.";
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
        return true
    },
    checkOmniCouponGoods: function(omniCpInfo) {
        var rtnVal =
            false;
        var fnetCartTp = $("input[id='cartTpCd']").val();
        var cartTpCd = $("input[id='cartTpCd']").val();
        if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && fnetCartTp != undefined && fnetCartTp != "") $inputHidden = $('input.cart-data-hidden[data-type="' + fnetCartTp + '"]:checked');
        else if (orderCommon.stGbCd == "10" && typeof cartTpCd !== "undefined" && cartTpCd != "") $inputHidden = $('input.cart-data-hidden[data-type="' + cartTpCd + '"]:checked');
        else $inputHidden = $("input.cart-data-hidden:checked");
        var goodsIds = [];
        var omniCpIsuNo =
            omniCpInfo.split("|")[1];
        $.each($inputHidden, function(idx, element) {
            var goodsId = $(element).attr("data-goods-id");
            goodsIds.push(goodsId)
        });
		let checkOmniCouponPram = {
				url : orderCommon.stContextPath + 'xhr/order/check/checkOmniCouponGoods'
				, data: {
							omniCpIsuNo : omniCpIsuNo
				          , goodsids : goodsIds
				        }
				, async : false
				,  fail: function() {//kdp60 카테고리 검증실패시 exception발생 처리
							rtnVal = true;
		            }
				, done : function(data){
					if(data.exceptGoodsIds != undefined && data.exceptGoodsIds != null){
						//상품대상 옴니쿠폰일시에 데이터 들어있으면 대상상품아님
						//카테고리대상 옴니쿠폰일시에 검증될 굿즈아이디 갯수와 데이터수가 동일하면 검증통과 갯수맞지않으면 exception처리
						
						rtnVal = true;
					}
				}
			};
        ajax.call(checkOmniCouponPram);
        return rtnVal
    },
    isArconConstructionValidation: function() {
        if (!$("#agreement-20").prop("checked")) {
            var alertMsg = "가정용 시스템에어컨 시공계약 약관을 확인하시고<br>개인정보 수집 이용약관에 동의해 주세요.";
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
        return true
    }
};
var orderGoodsQtyRestrictYn = null;
var orderGoodsQtyRestrictQty = 0;