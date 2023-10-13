var cartGoods = {
    delOpenLayer: function(cartId) {
        var mdlInfo = "";
        $("#CartGoodDel").attr("data-cartId", cartId);
        if ($("div[id=" + cartId + "]").hasClass("cart-multi")) {
            $("div[id=" + cartId + "]").closest("div.cart-tbl").find("div.cart-tr").each(function() {
                mdlInfo += $(this).attr("data-omni") + ":"
            });
            mdlInfo = mdlInfo.slice(0, mdlInfo.length - 1)
        } else mdlInfo = $("div[id=" + cartId + "]").attr("data-omni");
        $("#CartGoodDel").find(".btn-type2").attr("data-omni", mdlInfo);
        openLayer("CartGoodDel")
    },
    delConfirm: function() {
        var cartId = $("#CartGoodDel").attr("data-cartId");
        if (cartId == "") return;
        var cartIds = [];
        var myBundleList = $("input[name=cartIds][value=" + cartId + "]").closest("div.multi-order-tbl").find("div.cart-multi");
        if (myBundleList.length > 1) $.each(myBundleList, function(idx, element) {
            cartIds.push($(element).attr("id"))
        });
        else cartIds.push(cartId);
        cartGoods.del(cartIds);
        closeLayer("CartGoodDel")
    },
    del: function(cartIds) {
        var options = {
            url: orderCommon.stContextPath + "xhr/order/deleteCart",
            data: {
                cartIds: cartIds
            },
            done: function(data) {
                var alertData = {
                    content: "삭제되었습니다.",
                    callback: function() {
                        location.reload()
                    }
                };
                commonAlert(alertData);
                openLayer("commonAlert")
            }
        };
        ajax.call(options)
    },
    changeOption: function(cartId) {
        var params = {
            cartId: cartId,
            callBackFnc: "cartGoods.cbChangeOption"
        };
        pop.cartOptionChange(params)
    },
    cbChangeOption: function(data) {
        location.reload()
    },
    checkBuyQty: function(qtyObj, gb) {
        var minQtyObj = qtyObj.parent().parent().children(".minOrdQty");
        var maxQtyObj = qtyObj.parent().parent().children(".maxOrdQty");
        var stkMngObj = qtyObj.parent().parent().children(".stkMngYn");
        var webQtyObj = qtyObj.parent().parent().children(".webStkQty");
        if (gb === "D" || gb === "") {
            if (parseInt(qtyObj.val()) < 1) {
                var alertData = {
                    content: "최소 구매수량은 1개 입니다."
                };
                commonAlert(alertData);
                openLayer("commonAlert");
                qtyObj.val("1");
                return "LOW"
            }
            if (minQtyObj.val() !== "")
                if (parseInt(qtyObj.val()) < parseInt(minQtyObj.val())) {
                    var alertData$0 = {
                        content: "최소 구매수량은 " + parseInt(minQtyObj.val()) + "개 입니다."
                    };
                    commonAlert(alertData$0);
                    openLayer("commonAlert");
                    qtyObj.val(parseInt(minQtyObj.val()));
                    return "LOW"
                } if (stkMngObj.val() === "Y")
                if (parseInt(qtyObj.val()) > parseInt(webQtyObj.val())) {
                    var alertData$1 = {
                        content: "현재 재고 수량은 " + parseInt(webQtyObj.val()) + "개 입니다."
                    };
                    commonAlert(alertData$1);
                    openLayer("commonAlert");
                    qtyObj.val(parseInt(webQtyObj.val()));
                    return "LOW"
                }
        }
        if (gb === "U" || gb === "") {
            if (maxQtyObj.val() !== "")
                if (parseInt(qtyObj.val()) > parseInt(maxQtyObj.val())) {
                    var alertData$2 = {
                        content: "최대 구매수량은 " + parseInt(maxQtyObj.val()) + "개 입니다."
                    };
                    commonAlert(alertData$2);
                    openLayer("commonAlert");
                    qtyObj.val(parseInt(maxQtyObj.val()));
                    return "HIGH"
                } if (stkMngObj.val() === "Y")
                if (parseInt(qtyObj.val()) > parseInt(webQtyObj.val())) {
                    var alertData$3 = {
                        content: "현재 재고 수량은 " + parseInt(webQtyObj.val()) + "개 입니다."
                    };
                    commonAlert(alertData$3);
                    openLayer("commonAlert");
                    qtyObj.val(parseInt(webQtyObj.val()));
                    return "HIGH"
                }
        }
        return ""
    },
    checkB2BBuyQty: function(qtyObj, gb) {
        var minQtyObj = qtyObj.parent().parent().children(".minOrdQty");
        var maxQtyObj = qtyObj.parent().parent().children(".maxOrdQty");
        var stkMngObj = qtyObj.parent().parent().children(".stkMngYn");
        var webQtyObj = qtyObj.parent().parent().children(".webStkQty");
        var goodsId = qtyObj.parent().parent().children(".goodsId");
        if (gb === "D" || gb === "") {
            if (parseInt(qtyObj.val()) < 1) {
                var alertData = {
                    content: "최소 구매수량은 1개 입니다."
                };
                commonAlert(alertData);
                openLayer("commonAlert");
                qtyObj.val("1");
                return "LOW"
            }
            if (minQtyObj.val() !== "")
                if (parseInt(qtyObj.val()) - 1 < parseInt(minQtyObj.val())) {
                    var alertData$4 = {
                        content: "최소 구매수량은 " + parseInt(minQtyObj.val()) + "개 입니다."
                    };
                    commonAlert(alertData$4);
                    openLayer("commonAlert");
                    qtyObj.val(parseInt(minQtyObj.val()));
                    $("#cart_qty_down_" + cartId).siblings(".number").val(parseInt(qtyObj.val()) + 1);
                    $("#cart_qty_down_" +
                        cartId).parent().attr("data-count", $("#cart_qty_down_" + cartId).siblings(".number").val());
                    return "LOW"
                } if (stkMngObj.val() === "Y")
                if (parseInt(qtyObj.val()) > parseInt(webQtyObj.val())) {
                    var alertData$5 = {
                        content: "현재 재고 수량은 " + parseInt(webQtyObj.val()) + "개 입니다."
                    };
                    commonAlert(alertData$5);
                    openLayer("commonAlert");
                    qtyObj.val(parseInt(webQtyObj.val()));
                    return "LOW"
                }
        }
        if (gb === "U" || gb === "") {
            if (maxQtyObj.val() !== "")
                if (parseInt(qtyObj.val()) > parseInt(maxQtyObj.val())) {
                    var alertData$6 = {
                        content: "최대 구매수량은 " + parseInt(maxQtyObj.val()) +
                            "개 입니다."
                    };
                    commonAlert(alertData$6);
                    openLayer("commonAlert");
                    qtyObj.val(parseInt(maxQtyObj.val()));
                    return "HIGH"
                } if (parseInt(qtyObj.val()) >= 10) {
                var confirmData = {
                    content: "구매 가능한 수량이 초과되었습니다.</br>대량 구매를 원하시면</br>견적문의를 통해 문의해 주세요."
                };
                commonConfirm(confirmData);
                openLayer("commonConfirm");
                $("#commonConfirmOkBtn").off("click").on("click", function() {
                    order.goB2BContactUs(goodsId.val())
                });
                return "HIGH"
            }
            if (stkMngObj.val() === "Y")
                if (parseInt(qtyObj.val()) > parseInt(webQtyObj.val())) {
                    var alertData$7 = {
                        content: "현재 재고 수량은 " +
                            parseInt(webQtyObj.val()) + "개 입니다."
                    };
                    commonAlert(alertData$7);
                    openLayer("commonAlert");
                    qtyObj.val(parseInt(webQtyObj.val()));
                    return "HIGH"
                }
        }
        return ""
    },
    changeBuyQty: function(cartId, buyQty) {
        var tmpCartTpCd = $("input[name=cartIds][value=" + cartId + "]").attr("data-type");
        var cartTpCd = "";
        if (tmpCartTpCd == "qooker") cartTpCd = orderCommon.CART_TP_CD_40;
        console.log("cartId: " + cartId + " , buyQty: " + buyQty + ", cartTpCd: " + cartTpCd);
        var nowBuyOptions = {
            url: orderCommon.stContextPath + "xhr/order/changeBuyQty",
            dataType: "json",
            type: "POST",
            data: {
                cartId: cartId,
                buyQty: buyQty,
                cartTpCd: cartTpCd
            },
            success: function(data) {
                console.log(data);
                if (data.exCode != null && data.exCode !== undefined && data.exCode != "") {
                    var alertData = {
                        title: "",
                        content: data.exMsg,
                        callBack: "",
                        btnText: "확인"
                    };
                    commonAlert(alertData);
                    openLayer("commonAlert");
                    if (data.exCode == "ORD0039") {
                        var currPrpsnordlmtqty = 0;
                        $("input[name=cartIds]").each(function(index, item) {
                            if (cartId == $(this).val()) {
                                currPrpsnordlmtqty = $(this).attr("data-currPrpsnordlmtqty");
                                return false
                            }
                        });
                        $("#cart_goods_buy_qty_" +
                            cartId).val(currPrpsnordlmtqty);
                        $("#cart_goods_buy_qty_" + cartId).focus()
                    } else {
                        $("#cart_goods_buy_qty_" + cartId).val($("#org_buy_qty_" + cartId).val());
                        $("#cart_goods_buy_qty_" + cartId).focus()
                    }
                    return false
                } else goodsSelect.getCartTotalInfo()
            },
            error: function(response, status, error) {
                var alertData = {
                    title: "",
                    content: "오류가 발생하였습니다.",
                    callBack: "",
                    btnText: "확인"
                };
                commonAlert(alertData);
                openLayer("commonAlert");
                return false
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("ajax", true)
            },
            complete: function() {}
        };
        $.ajax(nowBuyOptions);
        return false
    },
    getCartTotalInfo: function() {
        var options = {
            url: orderCommon.stContextPath + "xhr/order/getCartTotalInfo",
            data: $("#cart_form").serialize(),
            done: function(data) {
                $("#cart_total_goods_amt").html(format.num(data.cartInfo.totalGoodsAmt));
                $("#cart_total_dlvr_amt").html(format.num(data.cartInfo.totalDlvrAmt));
                $("#cart_total_amt").html(format.num(data.cartInfo.totalAmt));
                $("#cart_total_svmn_amt").html("/ 적립예정 (" + format.num(data.cartInfo.totalSvmnAmt) + "point)")
            }
        };
        ajax.call(options)
    },
    changeTotalPriceInfo: function() {
        var bndlGrpKey =
            $(this).attr("data-bndlGrpKey");
        var isChecked = $(this).is(":checked");
        var cartIdsObj;
        var chkCartIdsObj;
        var cartTpCd = $("input[id='cartTpCd']").val();
        if (typeof cartTpCd !== "undefined" && cartTpCd != "" && orderCommon.stGbCd == orderCommon.ST_GB_10) {
            cartIdsObj = $('input:checkbox[name="cartIds"][data-type="' + cartTpCd + '"]');
            chkCartIdsObj = $('input:checkbox[name="cartIds"][data-type="' + cartTpCd + '"]:checked')
        } else {
            cartIdsObj = $('input:checkbox[name="cartIds"]');
            chkCartIdsObj = $('input:checkbox[name="cartIds"]:checked')
        }
        if (bndlGrpKey !=
            "") cartIdsObj.each(function() {
            if ($(this).attr("data-bndlGrpKey") == bndlGrpKey) $(this).prop("checked", isChecked)
        });
        if (typeof cartTpCd !== "undefined" && cartTpCd != "" && orderCommon.stGbCd == orderCommon.ST_GB_10)
            if (cartIdsObj.is(":checked")) $(".opt-select").find("button[data-type='" + cartTpCd + "']").removeClass("btn-type2-disable").addClass("btn-type2");
            else $(".opt-select").find("button[data-type='" + cartTpCd + "']").removeClass("btn-type2").addClass("btn-type2-disable");
        else if (cartIdsObj.is(":checked")) $(".opt-select").find("button").removeClass("btn-type2-disable").addClass("btn-type2");
        else $(".opt-select").find("button").removeClass("btn-type2").addClass("btn-type2-disable");
        var totCnt = cartIdsObj.length;
        var chkCnt = chkCartIdsObj.length;
        if (typeof cartTpCd !== "undefined" && cartTpCd != "" && orderCommon.stGbCd == orderCommon.ST_GB_10)
            if (totCnt == chkCnt) $("input[name='cart_check_box_all'][data-type='" + cartTpCd + "']").prop("checked", true);
            else $("input[name='cart_check_box_all'][data-type='" + cartTpCd + "']").prop("checked", false);
        else if (totCnt == chkCnt) $("input[name='cart_check_box_all']").prop("checked",
            true);
        else $("input[name='cart_check_box_all']").prop("checked", false);
        goodsSelect.getCartTotalInfo();
        if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
    },
    buyQtyWhenChange: function(cartId, qtyObj, qty) {
        this.changeBuyQty(cartId, qty);
        membershipPointManager.setCartGoodsAdditonalPoint();
        var priceInfo = $("#cart_qty_up_" + cartId).parent().closest("div.cart-tbl").find("div.cart-price");
        var $saleAmt = $(priceInfo).find("input[name=saleAmt]");
        var $buyAmt = $(priceInfo).find("input[name=buyAmt]");
        var $goodsAmt = $(priceInfo).find("input[name=goodsAmt]");
        var $prmtDcPrc = $(priceInfo).find("input[name=prmtDcPrc]");
        var $fnSprtAmt = $(priceInfo).find("input[name=fnSprtAmt]");
        var $buyQty = $(priceInfo).find("input[name=buyQty]");
        var $prmtDcAmt = $(priceInfo).find("input[name=prmtDcAmt]");
        var $mbrDcAmt = $(priceInfo).find("input[name=mbrDcAmt]");
        var $baseCpDcAmt = $(priceInfo).find("input[name=baseCpDcAmt]");
        var $dupCpDcAmt = $(priceInfo).find("input[name=dupCpDcAmt]");
        var $additionalPoint = $(priceInfo).find("input[name=additionalPoint]");
        var oneSaleAmt = $saleAmt.val() / $buyQty.val();
        var oneBuyAmt = $goodsAmt.val();
        var newSaleAmt = parseInt(oneSaleAmt) * qty;
        var newBuyAmt = parseInt(oneBuyAmt) * qty;
        var newPrmtDcPrc = parseInt($prmtDcPrc.val() / $buyQty.val()) * qty;
        var newPrmtDcAmt = parseInt($prmtDcAmt.val() / $buyQty.val()) * qty;
        var newMbrDcAmt = parseInt($mbrDcAmt.val() / $buyQty.val()) * qty;
        var newFnSprtAmt = parseInt($fnSprtAmt.val() / $buyQty.val()) * qty;
        var newAdditionalPoint = parseInt($additionalPoint.val() /
            $buyQty.val()) * qty;
        var newBaseCpDcAmt = parseInt($baseCpDcAmt.val() / $buyQty.val()) * qty;
        var newDupCpDcAmt = parseInt($dupCpDcAmt.val() / $buyQty.val()) * qty;
        var baseMultiAplYn = $("#couponSelectArea" + cartId + "_N").attr("data-multi-api-yn");
        var dupMultiAplYn = $("#couponSelectArea" + cartId + "_Y").attr("data-multi-api-yn");
        if (baseMultiAplYn != "Y") newBaseCpDcAmt = parseInt($baseCpDcAmt.val());
        if (dupMultiAplYn != "Y") newDupCpDcAmt = parseInt($dupCpDcAmt.val());
        $saleAmt.val(newSaleAmt);
        $prmtDcPrc.val(newPrmtDcPrc);
        $buyAmt.val(newBuyAmt);
        $buyQty.val(qty);
        $mbrDcAmt.val(newMbrDcAmt);
        $prmtDcAmt.val(newPrmtDcAmt);
        $fnSprtAmt.val(newFnSprtAmt);
        $baseCpDcAmt.val(newBaseCpDcAmt);
        $dupCpDcAmt.val(newDupCpDcAmt);
        newBuyAmt = newBuyAmt - newBaseCpDcAmt - newDupCpDcAmt;
        $additionalPoint.val(newAdditionalPoint);
        $(priceInfo).find("span.price-small").text(newSaleAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
        if (orderCommon.stGbCd == orderCommon.ST_GB_20) $(priceInfo).find("span.price-big").text((newBuyAmt - newFnSprtAmt).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
            ",") + "원");
        else $(priceInfo).find("span.price-big").text(newBuyAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
        this.setDataWithTotal();
        var bfQty = $("#cart_qty_up_" + cartId).parent().closest("div.cart-tbl").attr("data-omni-quantity");
        var type = "";
        if (bfQty < qty) type = "add";
        else if (bfQty > qty) type = "remove";
        if (type) {
            $("#cart_qty_up_" + cartId).parent().closest("div.cart-tbl").attr("data-omni-quantity", qty);
            _satellite.track("change cart", {
                mdlInfo: $("#cart_qty_up_" + cartId).parent().closest("div.cart-tbl").attr("data-omni"),
                type: type
            })
        }
    },
    buyQtyB2BWhenChange: function(cartId, qtyObj, qty) {
        console.log("buyQtyB2BWhenChange");
        this.changeBuyQty(cartId, qty);
        membershipPointManager.setCartGoodsAdditonalPoint();
        var priceInfo = $("#cart_qty_up_" + cartId).parent().closest("div.cart-tbl").find("div.cart-price");
        var $saleAmt = $(priceInfo).find("input[name=saleAmt]");
        var $buyAmt = $(priceInfo).find("input[name=buyAmt]");
        var $goodsAmt = $(priceInfo).find("input[name=goodsAmt]");
        var $prmtDcPrc = $(priceInfo).find("input[name=prmtDcPrc]");
        var $fnSprtAmt =
            $(priceInfo).find("input[name=fnSprtAmt]");
        var $buyQty = $(priceInfo).find("input[name=buyQty]");
        var $prmtDcAmt = $(priceInfo).find("input[name=prmtDcAmt]");
        var $mbrDcAmt = $(priceInfo).find("input[name=mbrDcAmt]");
        var $additionalPoint = $(priceInfo).find("input[name=additionalPoint]");
        var $dcGbCd = $(priceInfo).find("input[name=dcGbCd]");
        var $baseCpDcAmt = $(priceInfo).find("input[name=baseCpDcAmt]");
        var $dupCpDcAmt = $(priceInfo).find("input[name=dupCpDcAmt]");
        var $salePrc1 = $(priceInfo).find("input[name=salePrc1]");
        var $salePrc2 = $(priceInfo).find("input[name=salePrc2]");
        var $salePrc3 = $(priceInfo).find("input[name=salePrc3]");
        var oneSaleAmt = $saleAmt.val() / $buyQty.val();
        var oneBuyAmt = $buyAmt.val();
        var oneGoodsAmt = $goodsAmt.val();
        var onePrmtDcPrc = $prmtDcPrc.val() / $buyQty.val();
        var onePrmtDcAmt = $prmtDcAmt.val() / $buyQty.val();
        var oneMbrDcAmt = $mbrDcAmt.val() / $buyQty.val();
        if ($dcGbCd.val() === "30") $(priceInfo).find("input[name^=rangePrice]").each(function() {
            var rangeStrtQty = $(this).attr("data-range-strt-qty");
            var rangeEndQty =
                $(this).attr("data-range-end-qty");
            var rangeAmt = $(this).val();
            var salePrc1 = $(this).attr("data-sale-prc1");
            var salePrc2 = $(this).attr("data-sale-prc2");
            var salePrc3 = $(this).attr("data-sale-prc3");
            if (qty >= parseInt(rangeStrtQty) && qty <= parseInt(rangeEndQty)) {
                oneBuyAmt = rangeAmt;
                oneGoodsAmt = rangeAmt - $baseCpDcAmt.val() - $dupCpDcAmt.val();
                onePrmtDcPrc = rangeAmt;
                if (salePrc3 != null && salePrc3 != "") {
                    $salePrc3.val(parseInt(salePrc3));
                    onePrmtDcAmt = parseInt($salePrc2.val()) - parseInt($salePrc3.val())
                } else if (salePrc2 !=
                    null && salePrc2 != "") {
                    $salePrc2.val(parseInt(salePrc2));
                    oneMbrDcAmt = parseInt($salePrc1.val()) - parseInt($salePrc2.val())
                } else if (salePrc1 != null && salePrc1 != "") $salePrc1.val(parseInt(salePrc1))
            }
        });
        var newSaleAmt = parseInt(oneSaleAmt) * qty;
        var newBuyAmt = parseInt(oneBuyAmt);
        var newGoodsAmt = parseInt(oneGoodsAmt);
        var newPrmtDcPrc = parseInt(onePrmtDcPrc) * qty;
        var newPrmtDcAmt = parseInt(onePrmtDcAmt) * qty;
        var newMbrDcAmt = parseInt(oneMbrDcAmt) * qty;
        var newFnSprtAmt = parseInt($fnSprtAmt.val() / $buyQty.val()) * qty;
        var newAdditionalPoint =
            parseInt($additionalPoint.val() / $buyQty.val()) * qty;
        $saleAmt.val(newSaleAmt);
        $goodsAmt.val(newGoodsAmt);
        $prmtDcPrc.val(newPrmtDcPrc);
        $buyAmt.val(newBuyAmt);
        $buyQty.val(qty);
        $mbrDcAmt.val(newMbrDcAmt);
        $prmtDcAmt.val(newPrmtDcAmt);
        $fnSprtAmt.val(newFnSprtAmt);
        $additionalPoint.val(newAdditionalPoint);
        $(priceInfo).find("span.price-small").text(newSaleAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
        $(priceInfo).find("span.price-big").text((newBuyAmt * qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
            ",") + "원");
        this.setDataWithTotal();
        var bfQty = $("#cart_qty_up_" + cartId).parent().closest("div.cart-tbl").attr("data-omni-quantity");
        var type = "";
        if (bfQty < qty) type = "add";
        else if (bfQty > qty) type = "remove";
        if (type) {
            $("#cart_qty_up_" + cartId).parent().closest("div.cart-tbl").attr("data-omni-quantity", qty);
            _satellite.track("change cart", {
                mdlInfo: $("#cart_qty_up_" + cartId).parent().closest("div.cart-tbl").attr("data-omni"),
                type: type
            })
        }
    },
    setDataWithTotal: function() {
        var bndlGrpKey = $(this).attr("data-bndlGrpKey");
        var isChecked = $(this).is(":checked");
        var cartIdsObj;
        var chkCartIdsObj;
        var cartTpCd = $("input[id='cartTpCd']").val();
        if (typeof cartTpCd !== "undefined" && cartTpCd != "" && orderCommon.stGbCd == orderCommon.ST_GB_10) {
            cartIdsObj = $('input:checkbox[name="cartIds"][data-type="' + cartTpCd + '"]');
            chkCartIdsObj = $('input:checkbox[name="cartIds"][data-type="' + cartTpCd + '"]:checked')
        } else {
            cartIdsObj = $('input:checkbox[name="cartIds"]');
            chkCartIdsObj = $('input:checkbox[name="cartIds"]:checked')
        }
        if (bndlGrpKey != "") cartIdsObj.each(function() {
            if ($(this).attr("data-bndlGrpKey") ==
                bndlGrpKey) $(this).prop("checked", isChecked)
        });
        if (typeof cartTpCd !== "undefined" && cartTpCd != "" && orderCommon.stGbCd == orderCommon.ST_GB_10)
            if (cartIdsObj.is(":checked")) $(".opt-select").find("button[data-type='" + cartTpCd + "']").removeClass("btn-type2-disable").addClass("btn-type2");
            else $(".opt-select").find("button[data-type='" + cartTpCd + "']").removeClass("btn-type2").addClass("btn-type2-disable");
        else if (cartIdsObj.is(":checked")) $(".opt-select").find("button").removeClass("btn-type2-disable").addClass("btn-type2");
        else $(".opt-select").find("button").removeClass("btn-type2").addClass("btn-type2-disable");
        var totCnt = cartIdsObj.length;
        var chkCnt = chkCartIdsObj.length;
        if (typeof cartTpCd !== "undefined" && cartTpCd != "" && orderCommon.stGbCd == orderCommon.ST_GB_10)
            if (totCnt == chkCnt) $("input[name='cart_check_box_all'][data-type='" + cartTpCd + "']").prop("checked", true);
            else $("input[name='cart_check_box_all'][data-type='" + cartTpCd + "']").prop("checked", false);
        else if (totCnt == chkCnt) $("input[name='cart_check_box_all']").prop("checked",
            true);
        else $("input[name='cart_check_box_all']").prop("checked", false);
        cartGoods.changeTotalPriceInfo()
    },
    increaseBuyQty: function(cartId, that) {
        var qtyObj = $("#cart_qty_up_" + cartId).parent().children("input[name=buyQty]");
        $("#fnetOrderAgree").val("N");
        $("#b2bIBMLimit").val("N");
        $("#personalBuyLimit").val("N");
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")
            if (qtyObj.val() > 0) {
                var baseCoupon = $("#couponSelectArea" + cartId + "_N").attr("data-mbrcpno");
                var baseCpAplCd = $("#couponSelectArea" + cartId + "_N").attr("data-cp-apl-cd");
                var baseMultiAplYn = $("#couponSelectArea" + cartId + "_N").attr("data-multi-api-yn");
                if (baseCoupon != undefined && baseCoupon != "")
                    if (baseCpAplCd == "20") goodsSelect.removeSelectedCoupon(cartId + "_N");
                    else if (baseMultiAplYn == "N" && baseCpAplCd == "10") goodsSelect.removeSelectedCoupon(cartId + "_N");
                var dupCoupon = $("#couponSelectArea" + cartId + "_Y").attr("data-mbrcpno");
                var dupCpAplCd = $("#couponSelectArea" + cartId + "_Y").attr("data-cp-apl-cd");
                var dupMultiAplYn = $("#couponSelectArea" + cartId + "_Y").attr("data-multi-api-yn");
                if (dupCoupon != undefined && dupCoupon != "")
                    if (dupCpAplCd == "20") goodsSelect.removeSelectedCoupon(cartId + "_Y");
                    else if (dupMultiAplYn == "N" && dupCpAplCd == "10") goodsSelect.removeSelectedCoupon(cartId + "_Y")
            } if (!validationManager.cartBuyLimitQuantity(cartId, that)) return;
        if (this.checkBuyQty(qtyObj, "U") == "") {
            this.buyQtyWhenChange(cartId, qtyObj, parseInt(qtyObj.val()) + 1);
            orderPaymentManager.initalizeFnetOrderPayInfo();
            if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
        }
        goodsSelect.removeAllSelectedFreebie(cartId,
            parseInt(qtyObj.val()) + 1)
    },
    decreaseBuyQty: function(cartId) {
        $("#fnetOrderAgree").val("N");
        $("#b2bIBMLimit").val("N");
        $("#personalBuyLimit").val("N");
        var qtyObj = $("#cart_qty_down_" + cartId).parent().children("input[name=buyQty]");
        $("#cart_qty_up_" + cartId).removeClass("cart-buy-limit-except");
        if (parseInt(qtyObj.val()) > 1) {
            var minQtyObj = qtyObj.parent().parent().children(".minOrdQty");
            if (minQtyObj.val() !== "")
                if (parseInt(qtyObj.val()) - 1 < parseInt(minQtyObj.val())) {
                    var alertData = {
                        content: "최소  구매수량은 " + parseInt(minQtyObj.val()) +
                            "개 입니다."
                    };
                    commonAlert(alertData);
                    openLayer("commonAlert");
                    $("#cart_qty_down_" + cartId).siblings(".number").val(parseInt(qtyObj.val()) + 1);
                    $("#cart_qty_down_" + cartId).parent().attr("data-count", $("#cart_qty_down_" + cartId).siblings(".number").val());
                    return
                } var checkFlag = this.checkBuyQty(qtyObj, "D");
            if (checkFlag == "") {
                this.buyQtyWhenChange(cartId, qtyObj, parseInt(qtyObj.val()) - 1);
                orderPaymentManager.initalizeFnetOrderPayInfo();
                if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
            }
            var cartDataType =
                $("#" + cartId).find("input[name=cartIds]").attr("data-type");
            console.log("cartid :: " + cartId + " :: cartDataType :: " + cartDataType);
            if (cartDataType == "qooker") {
                $("#" + cartId).find("input[name='baseCpDcAmt']").val(0);
                $("#" + cartId).find("input[name='dupCpDcAmt']").val(0);
                $("div[id^=couponSelectArea" + cartId + "]").attr("data-cpNo", "").attr("data-mbrCpNo", "").attr("data-cp-apl-cd", "").attr("data-multi-api-yn", "").children().remove();
                $("button[id^=dropCartCouponeBtn" + cartId + "_Y]").html("My 큐커 플랜 멤버십 할인(복수선택 가능)").attr("disabled",
                    false);
                $("button[id^=dropCartCouponeBtn" + cartId + "_N]").html("쿠폰을 선택해 주세요.").attr("disabled", false)
            }
        }
        goodsSelect.removeAllSelectedFreebie(cartId, parseInt(qtyObj.val()) - 1)
    },
    directModifyBuyQty: function(cartId, that) {
        $("#fnetOrderAgree").val("N");
        $("#b2bIBMLimit").val("N");
        $("#personalBuyLimit").val("N");
        var qtyObj = $("#cart_goods_buy_qty_" + cartId);
        if (!validationManager.cartBuyLimitDirect(cartId, that)) return;
        var maxQtyObj = qtyObj.parent().parent().children(".maxOrdQty");
        var minQtyObj = qtyObj.parent().parent().children(".minOrdQty");
        if (!valid.onlyNum.test(qtyObj.val())) {
            if (minQtyObj.val() > 0) qtyObj.val(minQtyObj.val());
            else qtyObj.val(parseInt(1));
            var alertData = {
                content: "숫자만 입력 가능합니다."
            };
            commonAlert(alertData);
            openLayer("commonAlert");
            return
        }
        var checkFlag = cartGoods.checkBuyQty(qtyObj, "");
        if (checkFlag == "") {
            if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")
                if (qtyObj.val() > 1) {
                    var baseCoupon = $("#couponSelectArea" + cartId + "_N").attr("data-mbrcpno");
                    var baseCpAplCd = $("#couponSelectArea" + cartId + "_N").attr("data-cp-apl-cd");
                    var baseMultiAplYn =
                        $("#couponSelectArea" + cartId + "_N").attr("data-multi-api-yn");
                    if (baseCoupon != undefined && baseCoupon != "")
                        if (baseCpAplCd == "20") goodsSelect.removeSelectedCoupon(cartId + "_N");
                        else if (baseMultiAplYn == "N" && baseCpAplCd == "10") goodsSelect.removeSelectedCoupon(cartId + "_N");
                    var dupCoupon = $("#couponSelectArea" + cartId + "_Y").attr("data-mbrcpno");
                    var dupCpAplCd = $("#couponSelectArea" + cartId + "_Y").attr("data-cp-apl-cd");
                    var dupMultiAplYn = $("#couponSelectArea" + cartId + "_Y").attr("data-multi-api-yn");
                    if (dupCoupon != undefined &&
                        dupCoupon != "")
                        if (dupCpAplCd == "20") goodsSelect.removeSelectedCoupon(cartId + "_Y");
                        else if (dupMultiAplYn == "N" && dupCpAplCd == "10") goodsSelect.removeSelectedCoupon(cartId + "_Y")
                } $("#cart_qty_down_" + cartId).parent().attr("data-count", qtyObj.val());
            this.buyQtyWhenChange(cartId, qtyObj, parseInt(qtyObj.val()))
        } else if (checkFlag == "LOW") {
            $("#cart_qty_down_" + cartId).siblings(".number").val(parseInt(minQtyObj.val()));
            $("#cart_qty_down_" + cartId).parent().attr("data-count", $("#cart_qty_down_" + cartId).siblings(".number").val());
            qtyObj = $("#cart_goods_buy_qty_" + cartId);
            this.buyQtyWhenChange(cartId, qtyObj, parseInt(qtyObj.val()))
        } else if (checkFlag == "HIGH") {
            $("#cart_qty_down_" + cartId).siblings(".number").val(parseInt(maxQtyObj.val()));
            $("#cart_qty_down_" + cartId).parent().attr("data-count", $("#cart_qty_down_" + cartId).siblings(".number").val());
            qtyObj = $("#cart_goods_buy_qty_" + cartId);
            this.buyQtyWhenChange(cartId, qtyObj, parseInt(qtyObj.val()))
        }
        if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess();
        goodsSelect.removeAllSelectedFreebie(cartId, parseInt(qtyObj.val()))
    },
    increaseB2BBuyQty: function(cartId, that) {
        var qtyObj = $("#cart_qty_up_" + cartId).parent().children("input[name=buyQty]");
        $("#fnetOrderAgree").val("N");
        $("#b2bIBMLimit").val("N");
        $("#personalBuyLimit").val("N");
        if (this.checkB2BBuyQty(qtyObj, "U") == "") {
            this.buyQtyB2BWhenChange(cartId, qtyObj, parseInt(qtyObj.val()) + 1);
            orderPaymentManager.initalizeFnetOrderPayInfo()
        } else $(that).addClass("cart-buy-limit-except")
    },
    decreaseB2BBuyQty: function(cartId) {
        var qtyObj =
            $("#cart_qty_down_" + cartId).parent().children("input[name=buyQty]");
        $("#fnetOrderAgree").val("N");
        $("#b2bIBMLimit").val("N");
        $("#personalBuyLimit").val("N");
        $("#cart_qty_up_" + cartId).removeClass("cart-buy-limit-except");
        if (parseInt(qtyObj.val()) > 1) {
            if (this.checkB2BBuyQty(qtyObj, "D") == "") {
                this.buyQtyB2BWhenChange(cartId, qtyObj, parseInt(qtyObj.val()) - 1);
                orderPaymentManager.initalizeFnetOrderPayInfo();
                if (membershipPointManager != "undefined" && membershipPointManager != undefined) membershipPointManager.setGainMembershipPointProcess()
            }
        } else $(that).addClass("cart-buy-limit-except")
    },
    addWish: function(obj) {
        var url;
        if ($(obj).hasClass("on")) url = orderCommon.stContextPath + "xhr/order/deleteWish";
        else url = orderCommon.stContextPath + "xhr/order/insertWish";
        var options = {
            url: url,
            data: {
                cartId: $(obj).attr("data-cartId")
            },
            done: function(data) {}
        };
        ajax.call(options)
    },
    selectGoods: function(obj) {
        var rmnLmtAmt = Number($("#rmnLmtAmt").val());
        var totEmpPrc = 0;
        var empPrc = 0;
        var checkedCnt = 0;
        var isMultiOrderPsb = $("#isMultiOrderPsb").val();
        var totBuyQty = 0;
        $('input:checkbox[name="cartIds"]').each(function(k,
                                                          v) {
            if (!v.checked) return;
            var cartId = v.value;
            var cartObj = $("#" + cartId);
            var tmpEmpPrc = Number(cartObj.find("input[name=tmpEmpPrc]").val());
            var tmpBuyQty = Number(cartObj.find("input[name=buyQty]").val());
            totEmpPrc += tmpEmpPrc;
            totBuyQty += tmpBuyQty;
            checkedCnt++
        });
        if (orderCommon.stGbCd == "20" && isMultiOrderPsb == "false" && totBuyQty > 1) {
            $(obj).prop("checked", false);
            var alertData = {
                content: "구매 한도를 초과하여 단일상품만 선택이 가능합니다."
            };
            commonAlert(alertData);
            openLayer("commonAlert");
            return
        }
        $('input:checkbox[name="cartIds"]').each(function(k,
                                                          v) {
            if (!v.checked) return;
            var cartId = v.value;
            var cartObj = $("#" + cartId);
            var tmpEmpPrc = Number(cartObj.find("input[name=tmpEmpPrc]").val());
            var prmtDcPrc = Number(cartObj.find("input[name=prmtDcPrc]").val());
            if (orderCommon.stGbCd == "20") {
                if (rmnLmtAmt < tmpEmpPrc) tmpEmpPrc = Math.floor(rmnLmtAmt + (tmpEmpPrc - rmnLmtAmt) / .75);
                cartObj.find("input[name=empPrc]").val(tmpEmpPrc);
                cartObj.find("input[name=fnSprtAmt]").val(prmtDcPrc - tmpEmpPrc)
            }
        })
    }
};
var cartHeaderBtn = {
    delOpenLayer: function(obj) {
        var cartType = $(obj).attr("data-type");
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") var checkCart = $("input:checkbox[name=cartIds][data-type=" + cartType + "]:checked");
        else if (orderCommon.stGbCd == "10") var checkCart = $("input:checkbox[name=cartIds][data-type=" + cartType + "]:checked");
        else var checkCart = $("input:checkbox[name=cartIds]:checked");
        if (checkCart.length <= 0) openLayer("CartGoodDel3");
        else openLayer("CartGoodDel2")
    },
    delConfirm: function() {
        var cartIds = [];
        var fnetCartTp = $("input[id='cartTpCd']").val();
        var cartTpCd = $("input[id='cartTpCd']").val();
        if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && fnetCartTp != undefined && fnetCartTp != "") $("input:checkbox[name=cartIds][data-type=" + fnetCartTp + "]:checked").each(function(k, v) {
            cartIds.push(v.value)
        });
        else if (orderCommon.stGbCd == "10" && typeof cartTpCd !== "undefined" && cartTpCd != "") $("input:checkbox[name=cartIds][data-type=" + cartTpCd + "]:checked").each(function(k, v) {
            cartIds.push(v.value)
        });
        else $("input:checkbox[name=cartIds]:checked").each(function(k,
                                                                     v) {
                cartIds.push(v.value)
            });
        closeLayer("CartGoodDel2");
        cartGoods.del(cartIds)
    },
    delAuto: function() {
        $("input:checkbox[name=cartIds]").prop("checked", false);
        $("td.v_top.soldout > input:checkbox[name=cartIds]").prop("checked", true);
        $("td.bulkOrdEnd > input:checkbox[name=cartIds]").prop("checked", true);
        var checkCart = $("input:checkbox[name=cartIds]:checked");
        if (checkCart.length === 0) {
            var alertData = {
                content: _ORDER_CART_MSG_SOLDOUT_NO_SELECT
            };
            commonAlert(alertData);
            openLayer("commonAlert");
            return
        }
        cartGoods.del("SO")
    }
};
var order = {
    valid: function(status) {
        var result = true;
        var checkCartObjs;
        var cartTpCd = $("#cartTpCd").val();
        if ($("div[id='marriageMoveCartContent']").length && (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")) {
            var fnetCartTp = $("#cartTpCd").val();
            checkCartObjs = $("input:checkbox[name='cartIds'][data-type='" + fnetCartTp + "']:checked").parent().parent()
        } else if (orderCommon.stGbCd == "10") checkCartObjs = $("input:checkbox[name='cartIds'][data-type='" + cartTpCd + "']:checked").parent().parent();
        else checkCartObjs = $("input:checkbox[name=cartIds]:checked").parent().parent();
        checkCartObjs.each(function(index, cartObj) {
            var status = $(cartObj).children().children(".salePsbCd").val();
            if (SALE_PSB_00 !== status) {
                var alertData = {
                    content: "구매하실 수 없는 상품입니다."
                };
                commonAlert(alertData);
                openLayer("commonAlert");
                $(cartObj).focus();
                result = false;
                return false
            }
            if (result && $(cartObj).children().children(".item_no").val() === "") {
                var alertData$8 = {
                    content: "옵션이 선택되지 않았습니다."
                };
                commonAlert(alertData$8);
                openLayer("commonAlert");
                $(cartObj).focus();
                result = false;
                return false
            }
            var qtyObj = $(cartObj).children().children().children(".number");
            if (result && cartGoods.checkBuyQty(qtyObj, "") !== "") {
                qtyObj.focus();
                result = false;
                return false
            }
            return true
        });
        return result
    },
    select: function() {
        var checkCart;
        var fnetCartTp = $("input[id='cartTpCd']").val();
        var cartTpCd = $("input[id='cartTpCd']").val();
        if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && fnetCartTp != undefined && fnetCartTp != "") checkCart = $("input:checkbox[name=cartIds][data-type=" + fnetCartTp + "]:checked");
        else if (orderCommon.stGbCd == "10" && typeof cartTpCd !== "undefined" && cartTpCd != "") checkCart =
            $("input:checkbox[name=cartIds][data-type=" + cartTpCd + "]:checked");
        else checkCart = $("input:checkbox[name=cartIds]:checked");
        if ($("#btnCartOrder")) $("#btnCartOrder").removeAttr("data-popup-target");
        if (checkCart.length === 0) {
            var alertData = {
                content: "주문하실 상품을 선택하여 주세요."
            };
            if ($("#btnCartOrder")) alertData.callback = function() {
                $("#btnCartOrder").focus()
            };
            commonAlert(alertData);
            openLayer("commonAlert");
            return
        }
        var goodsCnt = $("#goods_cnt").text();
        if (orderCommon.stGbCd == "50" && goodsCnt > 25) {
            var alertData$9 = {
                content: "최대주문 수량(25개)을 초과하였습니다."
            };
            commonAlert(alertData$9);
            openLayer("commonAlert");
            return false
        }
        var chrgDcGoodsCnt = 0;
        var chrgDcStrId = "";
        var cartGoodsQty = 0;
        var isChrgAlert = false;
        var chrgAlertMsg = "청구할인 상품과 일반 상품을<br>동시에 주문/결제하실 수 없습니다.";
        var isFreebieOk = true;
        var isArcnYn = false;
        var isDryerYn = false;
        var isUsePsbStkQtyCheck = false;
        var usePsbStkCheckCartIdList = [];
        var checkFlag = false;
        $(checkCart).each(function() {
            cartGoodsQty++;
            var cartId = $(this).val();
            var cartObj = $("#" + cartId);
            var psbCd = cartObj.attr("psb-cd");
            if (psbCd != SALE_PSB_00) {
                chrgAlertMsg =
                    "품절 상품은 주문하실 수 없습니다.";
                isChrgAlert = true;
                return
            }
            var qookerYn = $(this).attr("data-type");
            if (qookerYn == "qooker" && orderCommon.mbrNo == orderCommon.CONST_NO_MEMBER_NO) {
                chrgAlertMsg = "큐커 식품관 상품은 로그인 후 이용해 주세요.";
                isChrgAlert = true;
                return
            }
            if (cartObj.find("input[name=chrgDcStrId]").val() != "") {
                chrgDcGoodsCnt++;
                if (chrgDcGoodsCnt > 1);
                chrgDcStrId = cartObj.find("input[name=chrgDcStrId]").val()
            }
            if (chrgDcGoodsCnt != 0 && cartGoodsQty - chrgDcGoodsCnt > 0) {
            	//2022.06.18 갤캠스 추가
            	if(orderCommon.stGbCd == "80" && orderCommon.stId == "122" ) {
                    chrgAlertMsg = "청구할인 상품과 일반 상품을 동시에 주문/결제하실 수 없어요!";
            	}
            	else {
                    chrgAlertMsg = "청구할인 상품과 일반 상품을<br>동시에 주문/결제하실 수 없습니다.";
            	}
                isChrgAlert = true;
                return
            }
            $("button[id^=dropCartFreebieBtn]").each(function() {
                if ($(this).attr("data-cartId") ==
                    cartId)
                    if ($(this).attr("disabled") != "disabled" && $(this).text() != "선택안함") {
                        $(this).css("color", "red");
                        $(this).focus();
                        isFreebieOk = false;
                        return
                    }
            });
            var useStkCd = $(this).attr("data-useStkCd");
            if (useStkCd == "20") {
                isUsePsbStkQtyCheck = true;
                usePsbStkCheckCartIdList.push(cartId)
            }
        });
        if (orderCommon.stGbCd == "10") {
            if ($("#isStorePickUpOnly").val() != "Y")
                if (!validationManager.isStorePickUpOnly()) return false;
            if ($("#goodsLimitPassYn").val() != "Y")
                if (!validationManager.checkGoodsLimit()) return false
        }
        if (!isChrgAlert) {
            if ($("#personalBuyLimit").val() !=
                "Y")
                if (!validationManager.personalBuyLimit()) return false;
            if (!validationManager.checkPayDiscount()) return
        }
        if (isChrgAlert) {
            var alertData$10 = {
                content: chrgAlertMsg
            };
            var qookerYn = $("input[id='cartTpCd']").val();
            if (qookerYn == "qooker" && orderCommon.mbrNo == orderCommon.CONST_NO_MEMBER_NO) alertData$10.callback = function() {
                location.href = "/sec/member/indexLogin/?returnUrl=" + location.pathname
            };
            else if ($("#btnCartOrder")) alertData$10.callback = function() {
                $("#btnCartOrder").focus()
            };
            commonAlert(alertData$10);
            openLayer("commonAlert");
            return
        }
        if (!isFreebieOk) return;
        if (!validationManager.cartBuyLimitOrder()) {
            var alertData$11 = {
                content: "동일 상품 2개 이상 구매 시,<br/>한도를 초과한 구매는 불가합니다.<br/>한도 내에서 수량을 조정하여 주시기 바랍니다."
            };
            if ($("#btnCartOrder")) alertData$11.callback = function() {
                $("#btnCartOrder").focus()
            };
            commonAlert(alertData$11);
            openLayer("commonAlert");
            return
        }
        if (orderCommon.stId == "8")
            if ($("#b2bIBMLimit").val() != "Y")
                if (!validationManager.b2b2cIBMCountLimit()) return;
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")
            if ($("#fnetOrderAgree").val() !=
                "Y")
                if (!validationManager.fnFamliyNetCountLimit()) return;
        if (orderCommon.stGbCd == "50" && orderCommon.stId == "5" && $("#smallbPurchaseAgree").val() == "N") {
            openLayer("popupSmallbPurchase");
            return
        }
        if (orderGoodsQtyRestrictYn != null)
            if (orderGoodsQtyRestrictYn == "Y") {
                openLayer("popupFmailyOrderQtyFail");
                return false
            } else if ($("#fmailyOrderQtyAgreeYn:checked").val() != "Y") {
                $("#popupFmailyOrderQtyAgree").find(".orderGoodsQtyRestrictQty").text(orderGoodsQtyRestrictQty + "대째");
                openLayer("popupFmailyOrderQtyAgree");
                return false
            }
        checkFlag =
            true;
        if ((orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") && fnetCartTp != undefined && fnetCartTp == "marriMv")
            if (validationManager.myMarriageMoveStat.accCteGoods != undefined && validationManager.myMarriageMoveStat.accCteGoods == "accCteGoods") {
                var msg = "";
                if (checkCart.length == 1) msg = "액세서리 상품이 존재하여 혼수이사 주문/결제가 불가합니다.";
                else msg = "액세서리 상품이 포함되어 있어 혼수이사 주문/결제가 불가합니다.";
                var alertData$12 = {
                    content: msg
                };
                commonAlert(alertData$12);
                openLayer("commonAlert");
                return false
            } if (orderCommon.stGbCd == "30" && fnetCartTp != undefined &&
            fnetCartTp == "marriMv")
            if (validationManager.myMarriageMoveStat.lmtOver != undefined && validationManager.myMarriageMoveStat.lmtOver == "lmtOver") {
                var msg$13 = "";
                if (checkCart.length == 1) msg$13 = "잔여한도보다 임직원가가 낮아 혼수이사 주문/결제가 불가합니다.";
                else msg$13 = "잔여한도보다 임직원가가 낮은 상품이 포함되어 있어 혼수이사 주문/결제가 불가합니다.";
                var alertData$14 = {
                    content: msg$13
                };
                commonAlert(alertData$14);
                openLayer("commonAlert");
                return false
            } var omniCpInfo = $("#omniCpInfo").val();
        if (omniCpInfo != undefined && omniCpInfo != null && omniCpInfo != "")
            if (validationManager.checkOmniCouponGoods(omniCpInfo)) {
                closeLayer("commonConfirm");
                var msg$15 = "쿠폰 적용 불가 상품이 포함되어 있습니다.</br> 장바구니 상품을 다시 확인해 주세요.";
                var alertData$16 = {
                    content: msg$15
                };
                commonAlert(alertData$16);
                openLayer("commonAlert");
                return false
            } if (orderCommon.stGbCd == "30" && fnetCartTp != undefined && fnetCartTp == "spcExhbn") {
            var spcExhbnLmtOver = false;
            for (var goodsId in validationManager.spcExhbnGoodsStat)
                if (validationManager.spcExhbnGoodsStat[goodsId] == "lmtOver") {
                    spcExhbnLmtOver = true;
                    break
                } if (spcExhbnLmtOver == true) {
                var msg$17 = "";
                if (checkCart.length == 1) msg$17 = "잔여한도보다 임직원가가 낮아 특별기획전 주문/결제가 불가합니다.";
                else msg$17 = "잔여한도보다 임직원가가 낮은 상품이 포함되어 있어 특별기획전 주문/결제가 불가합니다.";
                var alertData$18 = {
                    content: msg$17
                };
                commonAlert(alertData$18);
                openLayer("commonAlert");
                return false
            }
        }
        if (orderCommon.stGbCd == "30" && fnetCartTp != undefined && fnetCartTp == "main")
            if (validationManager.nomalCartSpcExhbnPassGoodsNm.length > 0)
                if (checkCart.length > 0 && checkFlag) {
                    if ($("#btnCartOrder")) $("#btnCartOrder").attr("data-popup-target", "commonConfirm");
                    var confirmData = {
                        content: "현재 임직원께서 선택하신 상품들을 일괄 결제하실 경우<br/>총 결제 금액이 보유하신 잔여한도를 초과하여<br/>특별기획전 적용이 가능한 일부 상품이 일반 구매로 진행됩니다.<br/><br/>특별기획전 혜택 적용을 원하시는 경우<br/>현재 보유 중이신 잔여 한도 내에서 주문 완료 후<br/>특별 기획전 상품을 별도로 추가 주문 하시면 됩니다.<br/><br/>일괄 결제를 계속 진행하시겠습니까?",
                        callback: order.stockValid
                    };
                    commonConfirm(confirmData);
                    openLayer("commonConfirm");
                    return
                } if (checkCart.length > 0 && checkFlag) {
            if ($("#btnCartOrder")) $("#btnCartOrder").attr("data-popup-target", "commonConfirm");
            //2022.06.17 갤캠스 추가
            if(orderCommon.stGbCd == "80" && orderCommon.stId == "122") {
        		var confirmData$19 = {
                        content: "선택하신 상품 (" + $("#goods_cnt").text() + "개) 을 주문하시겠어요?",
                        callback: order.stockValid
                    };
        	}
        	else {
        		 var confirmData$19 = {
        				 content: "선택하신 상품 (" + $("#goods_cnt").text() + "개) 을<br>주문하시겠습니까?",
        				 callback: order.stockValid
        				 };
        	}
            commonConfirm(confirmData$19);
            openLayer("commonConfirm");
            return
        }
    },
    all: function() {
        $(".cart_check_box").prop("checked", true);
        this.stockValid()
    },
    goB2BContactUs: function(goodsId) {
        location.href =
            orderCommon.stContextPath + "support/contactus/sales-enquiries/?goodsId=" + goodsId
    },
    goOrderPayment: function() {
        if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")
            if ($("div[id='marriageMoveCartContent']").length || $("div[id='specialExhibitionCartContent']").length) order.fnetCartFormDataController(true);
        if (orderCommon.stGbCd == "10")
            if ($("div[id='qookerCartContent']").length) order.dotComCartFormDataController(true);
        if (this.valid()) {
            var options = {
                url: orderCommon.stContextPath + "xhr/order/setOrderInfo",
                data: $("#cart_form").serialize(),
                done: function(data) {
                    $("#cart_form").attr("action", orderCommon.stContextPath + "order");
                    $("#cart_form").attr("target", "_self");
                    $("#cart_form").attr("method", "post");
                    $("#cart_form").submit()
                }
            };
            if (orderCommon.stGbCd == "10" || orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "70" || orderCommon.stGbCd == "80") {
                var ordPdExcptMdlListCompareFlag = order.ordPdExcptMdlListCompare();
                if (ordPdExcptMdlListCompareFlag) {
                    var stGrp = "";
                    if (orderCommon.stGbCd == "10") stGrp = "b2c";
                    else if (orderCommon.stGbCd ==
                        "20" || orderCommon.stGbCd == "30") stGrp = "fnet";
                    else stGrp = "b2b2c";
                    options = $.extend({}, options, {
                        netFunnelId: stGrp + "_checkout"
                    })
                }
            }
            ajax.call(options)
        }
    },
    stockValid: function() {
        if (($("div[id='marriageMoveCartContent']").length || $("div[id='specialExhibitionCartContent']").length) && (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30")) order.fnetCartFormDataController(true);
        if ($("div[id='qookerCartContent']").length && orderCommon.stGbCd == "10") order.dotComCartFormDataController(true);
        var options = {
            url: orderCommon.stContextPath +
                "xhr/order/getValidGoodsStock",
            data: $("#cart_form").serialize(),
            done: function(data) {
                if (data.validGoods != null && data.validGoods.salePsbCd != null && data.validGoods.salePsbCd !== "")
                    if (data.validGoods.salePsbCd === SALE_PSB_00) {
                        var msg = data.validGoods.goodsNm + "<br>상품의 구매 가능하신 최대 수량은 ";
                        msg += data.validGoods.webStkQty + "개 입니다.";
                        var alertData = {
                            content: msg
                        };
                        commonAlert(alertData);
                        openLayer("commonAlert")
                    } else {
                        var alertData$20 = {
                            content: "품절된 상품이 있습니다."
                        };
                        commonAlert(alertData$20);
                        openLayer("commonAlert");
                        location.reload();
                    }
                else order.goOrderPayment();
            }
        };
        ajax.call(options)
    },
    fnetCartTabAction: function(cartTp) {
        switch (cartTp) {
            case "main":
                $("#dlLimitExcpt").hide();
                $("#deliveryChange").show();
                $("#marriageMoveCartContent").hide();
                $(".main-cart").show();
                $("#marriedMoveCartTab").removeClass("on");
                $("#nomalCartTab").addClass("on");
                $("#specialExhibitionCartTab").removeClass("on");
                $("#specialExhibitionCartContent").hide();
                if (orderCommon.stGbCd == "20") {
                    $("#cartLimitEtcInfoBox").hide();
                    $("#cartLimitInfoBox").show()
                }
                $("input[id='cartTpCd']").val(cartTp);
                break;
            case "marriMv":
                $("#dlLimitExcpt").show();
                $("#deliveryChange").hide();
                $(".main-cart").hide();
                $("#marriageMoveCartContent").show();
                $("#nomalCartTab").removeClass("on");
                $("#marriedMoveCartTab").addClass("on");
                $("#specialExhibitionCartTab").removeClass("on");
                $("#specialExhibitionCartContent").hide();
                if (orderCommon.stGbCd == "20") {
                    $("#cartLimitEtcInfoBox").hide();
                    $("#cartLimitInfoBox").show()
                }
                $("input[id='cartTpCd']").val(cartTp);
                break;
            case "spcExhbn":
                $(".main-cart").hide();
                $("#nomalCartTab").removeClass("on");
                $("#dlLimitExcpt").hide();
                $("#deliveryChange").show();
                $("#marriageMoveCartContent").hide();
                $("#marriedMoveCartTab").removeClass("on");
                $("#specialExhibitionCartContent").show();
                $("#specialExhibitionCartTab").addClass("on");
                if (orderCommon.stGbCd == "20") {
                    $("#cartLimitInfoBox").hide();
                    $("#cartLimitEtcInfoBox").show()
                }
                $("input[id='cartTpCd']").val(cartTp);
                break;
            default:
                break
        }
        if ($("input[name='cart_check_box_all'][data-type='" + cartTp + "']").length <= 0) {
            $("#btnCartOrder").hide();
            $("#cartBottom").hide()
        } else {
            $("#btnCartOrder").show();
            $("#cartBottom").show()
        }
        $("#fnetOrderAgree").val("N");
        orderPaymentManager.initalizeFnetOrderPayInfo();
        goodsSelect.getCartTotalInfo(cartTp)
    },
    fnetCartFormDataController: function(cntTp) {
        var fnetCartTp = $("#cartTpCd").val();
        $("input:checkbox[name='cartIds']").not("[data-type='" + fnetCartTp + "']").each(function(index, cartIdsObj) {
            $(cartIdsObj).attr("disabled", cntTp)
        })
    },
    dotComCartTabAction: function(cartTp) {
        switch (cartTp) {
            case "main":
                $("input[id='cartTpCd']").val(cartTp);
                break;
            case "qooker":
                $("input[id='cartTpCd']").val(cartTp);
                break;
            default:
                break
        }
    },
    dotComCartFormDataController: function(cntTp) {
        var cartTpCd =
            $("#cartTpCd").val();
        $("input:checkbox[name='cartIds']").not("[data-type='" + cartTpCd + "']").each(function(index, cartIdsObj) {
            $(cartIdsObj).attr("disabled", cntTp)
        })
    },
    ordPdExcptMdlListCompare: function() {
        var rtnVal = false;
        var ordPdExcptMdlList = [];
        var ordPdExcptMdlStr = $("input[id = 'ordPdExcptMdlList']").val();
        if (ordPdExcptMdlStr != undefined && ordPdExcptMdlStr != "") ordPdExcptMdlList = $("input[id = 'ordPdExcptMdlList']").val().split(",");
        var cartTpCd = $("#cartTpCd").val();
        var cartIds = null;
        if (orderCommon.stGbCd ==
            "10" || orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") cartIds = $("input:checkbox[name=cartIds][data-type=" + cartTpCd + "]:checked");
        else cartIds = $("input:checkbox[name=cartIds]:checked");
        if (ordPdExcptMdlList != undefined && ordPdExcptMdlList != null && ordPdExcptMdlList.length != 0) $(cartIds).each(function(idx, cartIdsObj) {
            if (ordPdExcptMdlList.includes($(cartIdsObj).attr("data-mdlcode"))) {
                rtnVal = true;
                return
            }
        });
        return rtnVal
    }
};
var cartInit = {
    window_resize: function() {
        $(window).on("resize", function() {
            var screen_size = $(window).width();
            var winH_size = $(window).height();
            var fixedH_size = $(".cart-foot").outerHeight() - 10;
            var sticky = new Sticky(".cart-payment-area");
            if (screen_size > 800) {
                $("#container .hidden-area").remove();
                $("#container").append('<div class="hidden-area"></div>');
                if ($(".cart-payment-area").children().is(".btn-l") == true) return false;
                else {
                    $(".m-buy-btn-box").find(".btn-l").insertAfter(".cart-payment-area > .cost-listup");
                    $(".content").children().remove(".m-buy-btn-box")
                }
                if ($(".cart-payment-area").children().is(".delivery-change") == true) return false;
                else {
                    $(".m-top-deco").find(".delivery-change").insertAfter(".cart-payment-area > .delivery-title");
                    $(".content").children().remove(".m-top-deco")
                }
            } else {
                $("#container .hidden-area").remove();
                if ($(".content").children().is(".m-buy-btn-box") == true) return false;
                else {
                    $(".content").append("<div class='m-buy-btn-box'><em></em></div>");
                    $(".cart-payment-area").find(".btn-l").insertBefore(".m-buy-btn-box > em")
                }
                if ($(".content").children().is(".m-top-deco") ==
                    true) return false;
                else {
                    $(".content").children(".mo-cart-delivery-point").after("<div class='m-top-deco'><em></em></div>");
                    $(".content").children(".cart-payment-area").children(".delivery-change").insertBefore(".m-top-deco > em")
                }
                sticky.destroy();
                $(window).scroll(function() {
                    if ($(document).scrollTop() > $("#footer").offset().top - (winH_size - fixedH_size)) $(".m-buy-btn-box").hide({
                        effect: "slide",
                        direction: "down"
                    });
                    else $(".m-buy-btn-box").show({
                        effect: "slide",
                        direction: "down"
                    })
                })
            }
            return true
        }).resize()
    }
};

function window_resize() {
    $(window).on("resize", function() {
        var screen_size = $(window).width();
        var winH_size = $(window).height();
        var fixedH_size = $(".cart-foot").outerHeight() - 10;
        var sticky = new Sticky(".cart-payment-area");
        if (screen_size > 800) {
            $("#container .hidden-area").remove();
            $("#container").append('<div class="hidden-area"></div>');
            if ($(".cart-payment-area").children().is(".btn-l") == true) return false;
            else {
                $(".m-buy-btn-box").find(".btn-l").insertAfter(".cart-payment-area > .cost-listup");
                $(".content").children().remove(".m-buy-btn-box")
            }
            if ($(".cart-payment-area").children().is(".delivery-change") ==
                true) return false;
            else {
                $(".m-top-deco").find(".delivery-change").insertAfter(".cart-payment-area > .delivery-title");
                $(".content").children().remove(".m-top-deco")
            }
        } else {
            $("#container .hidden-area").remove();
            if ($(".content").children().is(".m-buy-btn-box") == true) return false;
            else {
                $(".content").append("<div class='m-buy-btn-box'><em></em></div>");
                $(".cart-payment-area").find(".btn-l").insertBefore(".m-buy-btn-box > em")
            }
            if ($(".content").children().is(".m-top-deco") == true) return false;
            else {
                $(".content").children(".mo-cart-delivery-point").after("<div class='m-top-deco'><em></em></div>");
                $(".content").children(".cart-payment-area").children(".delivery-change").insertBefore(".m-top-deco > em")
            }
            sticky.destroy();
            $(window).scroll(function() {
                if ($(document).scrollTop() > $("#footer").offset().top - (winH_size - fixedH_size)) $(".m-buy-btn-box").hide({
                    effect: "slide",
                    direction: "down"
                });
                else $(".m-buy-btn-box").show({
                    effect: "slide",
                    direction: "down"
                })
            })
        }
        return true
    }).resize()
}
$(window).on("resize", function() {
    if ($(".p-bespoke .cart-spec").children().is(".pc-bespoke") == false) $(".p-bespoke .pc-bespoke").insertAfter(".p-bespoke > .cart-spec > .cart-spec-group")
}).resize();