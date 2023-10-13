var orderCouponOmniTG = "00";
var orderDc = {
    orderCartCouponList: function() {
        var options = {
            url: orderCommon.stContextPath + "xhr/order/orderCartCouponList",
            type: "POST",
            data: {
                totPayAmt: $("#order_payment_total_pay_amt").val()
            },
            done: function(data) {
                var _cartCouponListData = null;
                _cartCouponListData = data.cartCouponList;
                var cartCouponListSize = data.cartCouponList.length;
                if (_cartCouponListData != null && cartCouponListSize > 0) {
                    var str = "";
                    var aplDcAmt = 0;
                    var mbrCpNo = "";
                    var cpNo = "";
                    $.each(_cartCouponListData, function(index, item) {
                        if (index < 1) {
                            str += "<button type='button' class='droplist-button selected' aria-haspopup='listbox' aria-labelledby='dropOrderCouponTitle04 dropOrderCouponBtn04' id='dropOrderCouponBtn04'>" +
                                item.cpNm + "</button>";
                            str += "<ul class='droplist' tabindex='-1' role='listbox' aria-labelledby='dropOrderCouponTitle04' aria-activedescendant='optOrderCoupon04-01'>";
                            str += "<li role='option' class='droplist-item focused' aria-selected='selected' tabindex='-1' onclick='orderDc.setCartCouponInfo(\"" + item.aplDcAmt + '",' + '"' + item.mbrCpNo + '",' + '"' + item.cpNo + "\")'>" + item.cpNm + "</li>";
                            aplDcAmt = item.aplDcAmt;
                            mbrCpNo = item.mbrCpNo;
                            cpNo = item.cpNo
                        } else str += "<li role='option' class='droplist-item' onclick='orderDc.setCartCouponInfo(\"" +
                            item.aplDcAmt + '",' + '"' + item.mbrCpNo + '",' + '"' + item.cpNo + "\")'>" + item.cpNm + "</li>";
                        if (index + 1 == cartCouponListSize) {
                            str += "<li role='option' id='cartCouponNone' class='droplist-item' onclick='orderDc.setCartCouponInfo(0)'>선택 안함</li>";
                            str += "</ul>"
                        }
                    });
                    if (parseInt($("#order_payment_total_pay_amt").val()) - aplDcAmt >= 0) {
                        $("#dropOrderCouponArea").html(str);
                        $("#cartCouponCnt").html(cartCouponListSize);
                        $("#totalCartCpDcAmt").val(aplDcAmt);
                        $(".sale-li .m-coupon").find("input[name=cpInfos]").val(orderCommon.CONST_CP_KIND_20 +
                            "| |" + mbrCpNo + "| |" + aplDcAmt + "|" + cpNo)
                    } else {
                        $("#dropOrderCouponArea").html(str);
                        $("#cartCouponCnt").html(cartCouponListSize);
                        $("#cartCouponNone").trigger("click");
                        $("html").scrollTop(0)
                    }
                }
            }
        };
        ajax.call(options)
    },
    setCartCouponInfo: function(aplDcAmt, mbrCpNo, cpNo) {
        if (parseInt(aplDcAmt) < 1) {
            $("#totalCartCpDcAmt").val(0);
            $(".sale-li .m-coupon").find("input[name=cpInfos]").val("");
            $("#order_payment_dc_cp_amt_view").text("0원")
        } else {
            var bfCartCpAmt = 0;
            if ($(".sale-li .m-coupon").find("input[name=cpInfos]").length >
                0 && $(".sale-li .m-coupon").find("input[name=cpInfos]").val() != "") bfCartCpAmt = parseInt($(".sale-li .m-coupon").find("input[name=cpInfos]").val().split("|")[4]);
            if (parseInt($("input[name=payAmt]").val()) + bfCartCpAmt > 0 && parseInt($("input[name=payAmt]").val()) + bfCartCpAmt - parseInt(aplDcAmt) < 0) {
                commonAlert({
                    title: "alert",
                    content: "사용할수 없는 쿠폰입니다."
                });
                openLayer("commonAlert");
                return
            }
            $("#totalCartCpDcAmt").val(aplDcAmt);
            $(".sale-li .m-coupon").find("input[name=cpInfos]").val(orderCommon.CONST_CP_KIND_20 + "| |" +
                mbrCpNo + "| |" + aplDcAmt + "|" + cpNo)
        }
        goodsSelect.calTotalAmt("cartCoupon")
    },
    openOmniEventCodeLayer: function() {
        $("#omniIsuSrlNoIpt").val("");
        $("#omniEmpNoIpt").val("");
        $(".con-bottom").hide();
        var selected = $('input[name="cartIds"]:checked').length + $("div.buy-target-goods").length;
        openLayer("popupEventCode");
        setTimeout(function() {
            $("#popupEventCode #omniIsuSrlNoIpt").focus()
        }, 10)
    },
    checkOmniEventCode: function() {
        var isuSrlNo = $("#omniIsuSrlNoIpt").val();
        var omniEmpNo = $("#omniEmpNoIpt").val();
        if ($("#qookerYn").val() ==
            "Y") {
            closeLayer("popupEventCode");
            return
        }
        if ($("#omniEmpNoIpt").is(":visible") == true) {
            if (omniEmpNo == "") {
                commonAlert({
                    title: "alert",
                    content: "추천인 코드를 입력해 주세요.",
                    callback: function() {
                        $("#omniEmpNoIpt").focus()
                    }
                });
                openLayer("commonAlert");
                return
            }
            if (omniEmpNo != "" && !/^[0-9,]+$/.test(omniEmpNo)) {
                commonAlert({
                    title: "alert",
                    content: "추천인 코드는 숫자만 입력 가능합니다.",
                    callback: function() {
                        $("#omniEmpNoIpt").focus()
                    }
                });
                openLayer("commonAlert");
                return
            }
        }
        var goodsids = [];
        $("div.buy-target-goods").each(function() {
            goodsids.push($(this).data("goodsId"))
        });
        $('input[name="cartIds"]:checked').each(function() {
            goodsids.push($(this).data("goodsId"))
        });
        var options = {
            url: orderCommon.stContextPath + "xhr/order/checkOmniEventCode",
            data: {
                isuSrlNo: isuSrlNo,
                empNo: omniEmpNo,
                goodsids: goodsids
            },
            async: false,
            fail: function() {
                closeLayer("popupEventCode")
            },
            done: function(data) {
                var coupon = data.coupon;
                $(".con-bottom").show();
                console.log(coupon);
                orderCouponOmniTG = coupon.cpTgCd;
                if (coupon != null && omniEmpNo != "") {
                    var employee = data.employee;
                    orderDc.omniCoupon = coupon;
                    orderDc.omniEmpNo =
                        omniEmpNo;
                    var alertData = {
                        content: "아래의 추천인 정보를 확인해주세요.<br/><br/> - 이름 : " + employee.empNm + "<br/> - 소속 : " + employee.plazaNm,
                        callback: function() {
                            var coupon = orderDc.omniCoupon;
                            var omniEmpNo = orderDc.omniEmpNo;
                            var cartIdsObj = $("input:checkbox[name='cartIds']").not("[data-type='qooker']");
                            var chkCartIdsObj = $("input:checkbox[name='cartIds']").not("[data-type='qooker']:checked");
                            $("#omniCpInfo").val(coupon.cpNo + "|" + coupon.isuSrlNo + "|" + coupon.aplVal + "|" + omniEmpNo + "|" + coupon.maxDcAmt);
                            $("#omniCpNo").val(coupon.cpNo);
                            $("#omniIsuSrlNo").val(coupon.isuSrlNo);
                            $("#omniEmpNo").val(omniEmpNo);
                            $("#omniCpAplVal").val(coupon.aplVal);
                            $("#easyPayPsbYn").val(coupon.easyPayPsbYn);
                            def_cp_tg_cd = coupon.cpTgCd;
                            if (orderCouponOmniTG == "10") cartIdsObj.each(function(k, v) {
                                $(this).parents(".buy-cart-goods").find(".omni-coupon").find("span[class=names]").html('<em class="tag">Omni-Coupon</em>' + coupon.aplVal + "% 할인");
                                $(this).parents(".buy-cart-goods").find(".omni-coupon").show()
                            });
                            else chkCartIdsObj.each(function(k, v) {
                                $(this).parents(".buy-cart-goods").find(".omni-coupon").find("span[class=names]").html('<em class="tag">Omni-Coupon</em>' +
                                    coupon.aplVal + "% 할인");
                                $(this).parents(".buy-cart-goods").find(".omni-coupon").show()
                            });
                            closeLayer("confirm-omni");
                            closeLayer("popupEventCode");
                            commonAlert({
                                title: "alert",
                                content: "추천인 코드가 적용되었습니다.<br>혜택이 적용됩니다."
                            });
                            openLayer("commonAlert");
                            goodsSelect.applyOmniCoupon()
                        }
                    };
                    commonConfirm(alertData);
                    openLayer("commonConfirm")
                }
                if (coupon != null)
                    if (omniEmpNo != "") _satellite.track("coupon", {
                        type: "employee no",
                        no: omniEmpNo
                    });
                    else _satellite.track("coupon", {
                        type: "event code",
                        no: coupon.isuSrlNo
                    })
            }
        };
        if (isuSrlNo !=
            null && isuSrlNo != "") ajax.call(options);
        else {
            commonAlert({
                title: "alert",
                content: "이벤트 코드를 입력해 주세요.",
                callback: function() {
                    $("#omniIsuSrlNoIpt").focus()
                }
            });
            openLayer("commonAlert")
        }
    },
    validSvmn: function() {
        if ($("#order_payment_dc_svmn_use_amt").val() == "") $("#order_payment_dc_svmn_use_amt").val("0");
        else {
            var useSvmnAmt = parseInt($("#order_payment_dc_svmn_use_amt").val());
            var mySvmnAmt = parseInt($("#order_payment_member_svmn_rmn_amt").val());
            if (useSvmnAmt != mySvmnAmt) $("input[name='use_pt']").prop("checked", false);
            if (useSvmnAmt > mySvmnAmt) {
                commonAlert({
                    title: "alert",
                    content: "보유중인 적립금보다 많은 금액을 입력하셨습니다."
                });
                openLayer("commonAlert");
                return false
            }
            var goodsTotalAmt = parseInt($("#order_payment_total_pay_amt").val());
            var fpntTotalAmt = parseInt($("#order_payment_total_fpnt_amt").val());
            var spntTotalAmt = parseInt($("#order_payment_total_spnt_amt").val());
            var apntTotalAmt = parseInt($("#order_payment_total_apnt_amt").val());
            var mpntTotalAmt = parseInt($("#order_payment_total_mpnt_amt").val());
            var orderPayAmt = goodsTotalAmt;
            if (orderCommon.stGbCd ==
                "30") orderPayAmt -= parseInt($("#totalFnSprtAmt").val()) - (fpntTotalAmt + spntTotalAmt + apntTotalAmt + mpntTotalAmt);
            if (useSvmnAmt > orderPayAmt) {
                commonAlert({
                    title: "alert",
                    content: "결제금액을 초과하였습니다."
                });
                openLayer("commonAlert");
                return false
            }
        }
        return true
    },
    validFndDayPnt: function(fnetPoint) {
        var svmnUseTypeCd = $("#svmnUseTypeCd").val();
        var fndDayPnt = 0;
        var myFoundDayAmt = $("#myFoundDayAmt").length > 0 ? $("#myFoundDayAmt").val() : 0;
        $("#pointUseType" + svmnUseTypeCd).find("input[name=fndDayPntInfos]").each(function(index, item) {
            fndDayPnt +=
                parseInt($(this).val().split("|")[1])
        });
        if (myFoundDayAmt > 0) {
            if (fndDayPnt > myFoundDayAmt) {
                commonAlert({
                    title: "alert",
                    content: "보유중인 적립금보다 많은 금액을 입력하셨습니다."
                });
                openLayer("commonAlert");
                return false
            }
            var goodsTotalAmt = parseInt($("#order_payment_total_pay_amt").val());
            var oldfPntTotalAmt = parseInt($("#order_payment_total_fpnt_amt").val());
            var spntTotalAmt = parseInt($("#order_payment_total_spnt_amt").val());
            var apntTotalAmt = parseInt($("#order_payment_total_apnt_amt").val());
            var mpntTotalAmt = parseInt($("#order_payment_total_mpnt_amt").val());
            var orderPayAmt = goodsTotalAmt;
            if (orderCommon.stGbCd == "30") orderPayAmt -= parseInt($("#totalFnSprtAmt").val()) - (spntTotalAmt + apntTotalAmt + mpntTotalAmt);
            if (fnetPoint > orderPayAmt) {
                commonAlert({
                    title: "alert",
                    content: "결제금액을 초과하였습니다."
                });
                openLayer("commonAlert");
                return false
            }
        }
        return true
    },
    validSpclPnt: function(fnetPoint) {
        var svmnUseTypeCd = $("#svmnUseTypeCd").val();
        var spclPnt = 0;
        var mySpecialAmt = $("#mySpecialAmt").length > 0 ? $("#mySpecialAmt").val() : 0;
        $("#pointUseType" + svmnUseTypeCd).find("input[name=spclPntInfos]").each(function(index,
                                                                                          item) {
            spclPnt += parseInt($(this).val().split("|")[1])
        });
        if (mySpecialAmt > 0) {
            if (spclPnt > mySpecialAmt) {
                commonAlert({
                    title: "alert",
                    content: "보유중인 적립금보다 많은 금액을 입력하셨습니다."
                });
                openLayer("commonAlert");
                return false
            }
            var goodsTotalAmt = parseInt($("#order_payment_total_pay_amt").val());
            var fpntTotalAmt = parseInt($("#order_payment_total_fpnt_amt").val());
            var oldSpntTotalAmt = parseInt($("#order_payment_total_spnt_amt").val());
            var apntTotalAmt = parseInt($("#order_payment_total_apnt_amt").val());
            var mpntTotalAmt = parseInt($("#order_payment_total_mpnt_amt").val());
            var orderPayAmt = goodsTotalAmt;
            if (orderCommon.stGbCd == "30") orderPayAmt -= parseInt($("#totalFnSprtAmt").val()) - (fpntTotalAmt + apntTotalAmt + mpntTotalAmt);
            if (fnetPoint > orderPayAmt) {
                commonAlert({
                    title: "alert",
                    content: "결제금액을 초과하였습니다."
                });
                openLayer("commonAlert");
                return false
            }
        }
        return true
    },
    validAwrdPnt: function(fnetPoint) {
        var svmnUseTypeCd = $("#svmnUseTypeCd").val();
        var awrdPnt = 0;
        var myAwardAmt = $("#myAwardAmt").length > 0 ? $("#myAwardAmt").val() : 0;
        $("#pointUseType" + svmnUseTypeCd).find("input[name=awrdPntInfos]").each(function(index,
                                                                                          item) {
            awrdPnt += parseInt($(this).val().split("|")[1])
        });
        if (myAwardAmt > 0) {
            if (awrdPnt > myAwardAmt) {
                commonAlert({
                    title: "alert",
                    content: "보유중인 적립금보다 많은 금액을 입력하셨습니다."
                });
                openLayer("commonAlert");
                return false
            }
            var goodsTotalAmt = parseInt($("#order_payment_total_pay_amt").val());
            var fpntTotalAmt = parseInt($("#order_payment_total_fpnt_amt").val());
            var spntTotalAmt = parseInt($("#order_payment_total_spnt_amt").val());
            var oldApntTotalAmt = parseInt($("#order_payment_total_apnt_amt").val());
            var mpntTotalAmt = parseInt($("#order_payment_total_mpnt_amt").val());
            var orderPayAmt = goodsTotalAmt;
            if (orderCommon.stGbCd == "30") orderPayAmt -= parseInt($("#totalFnSprtAmt").val()) - (fpntTotalAmt + spntTotalAmt + mpntTotalAmt);
            if (fnetPoint > orderPayAmt) {
                commonAlert({
                    title: "alert",
                    content: "결제금액을 초과하였습니다."
                });
                openLayer("commonAlert");
                return false
            }
        }
        return true
    },
    validMoscPnt: function(fnetPoint) {
        var svmnUseTypeCd = $("#svmnUseTypeCd").val();
        var moscPnt = 0;
        var myMosaicAmt = $("#myMosaicAmt").length > 0 ? $("#myMosaicAmt").val() : 0;
        $("#pointUseType" + svmnUseTypeCd).find("input[name=moscPntInfos]").each(function(index,
                                                                                          item) {
            moscPnt += parseInt($(this).val().split("|")[1])
        });
        if (myMosaicAmt > 0) {
            if (moscPnt > myMosaicAmt) {
                commonAlert({
                    title: "alert",
                    content: "보유중인 적립금보다 많은 금액을 입력하셨습니다."
                });
                openLayer("commonAlert");
                return false
            }
            var goodsTotalAmt = parseInt($("#order_payment_total_pay_amt").val());
            var fpntTotalAmt = parseInt($("#order_payment_total_fpnt_amt").val());
            var spntTotalAmt = parseInt($("#order_payment_total_spnt_amt").val());
            var apntTotalAmt = parseInt($("#order_payment_total_apnt_amt").val());
            var oldMpntTotalAmt = parseInt($("#order_payment_total_mpnt_amt").val());
            var orderPayAmt = goodsTotalAmt;
            if (orderCommon.stGbCd == "30") orderPayAmt -= parseInt($("#totalFnSprtAmt").val()) - (fpntTotalAmt + spntTotalAmt + apntTotalAmt);
            if (fnetPoint > orderPayAmt) {
                commonAlert({
                    title: "alert",
                    content: "결제금액을 초과하였습니다."
                });
                openLayer("commonAlert");
                return false
            }
        }
        return true
    },
    changeSaveMoney: function() {
        var svmnUseAmt = $("input[name='svmnUseAmt']").val().replace(/[^0-9]/g, "");
        $("#order_payment_dc_svmn_use_amt").val(svmnUseAmt.replace(/(^0+)/, ""));
        $("input[name='svmnUseAmt']").val(format.num($("#order_payment_dc_svmn_use_amt").val()));
        if (!orderDc.validSvmn()) {
            $("input[name='svmnUseAmt']").val("");
            $("#order_payment_dc_svmn_use_amt").val("0")
        }
        this.calSvmnAmt()
    },
    changeFnetSaveMoney: function(obj, goodsId, svmnTpcd) {
        this.validSvmn();
        var fnetPoint = $(obj).val().replace(/[^0-9]/g, "").replace(/(^0+)/, "") == "" ? 0 : $(obj).val().replace(/[^0-9]/g, "").replace(/(^0+)/, "");
        $(obj).next().val(goodsId + "|" + fnetPoint);
        $(obj).val(format.num(fnetPoint));
        if (svmnTpcd == "10") {
            if (!orderDc.validFndDayPnt()) {
                $(obj).val("");
                $(obj).next().val(goodsId + "|0")
            }
        } else if (svmnTpcd ==
            "20") {
            if (!orderDc.validSpclPnt()) {
                $(obj).val("");
                $(obj).next().val(goodsId + "|0")
            }
        } else if (svmnTpcd == "30") {
            if (!orderDc.validAwrdPnt()) {
                $(obj).val("");
                $(obj).next().val(goodsId + "|0")
            }
        } else if (svmnTpcd == "40")
            if (!orderDc.validMoscPnt()) {
                $(obj).val("");
                $(obj).next().val(goodsId + "|0")
            } orderPaymentManager.calculatePointSvmnAmt();
        orderPaymentManager.setTotalPaymentInfo()
    },
    calSvmnAmt: function() {
        var svmnAmt = $("#order_payment_dc_svmn_use_amt").length > 0 ? parseInt($("#order_payment_dc_svmn_use_amt").val()) : 0;
        var fndDayPnt =
            0;
        var spclPnt = 0;
        var awrdPnt = 0;
        var moscPnt = 0;
        var svmnUseTypeCd = $("#svmnUseTypeCd").val();
        $("#pointUseType" + svmnUseTypeCd).find("input[name=fndDayPntInfos]").each(function(index, item) {
            fndDayPnt += parseInt($(this).val().split("|")[1])
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=spclPntInfos]").each(function(index, item) {
            spclPnt += parseInt($(this).val().split("|")[1])
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=awrdPntInfos]").each(function(index, item) {
            awrdPnt += parseInt($(this).val().split("|")[1])
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=moscPntInfos]").each(function(index, item) {
            moscPnt += parseInt($(this).val().split("|")[1])
        });
        if (svmnAmt > 0 || fndDayPnt > 0 || spclPnt > 0 || awrdPnt > 0 || moscPnt > 0);
        $("#order_payment_total_fpnt_amt").val(fndDayPnt);
        $("#order_payment_total_spnt_amt").val(spclPnt);
        $("#order_payment_total_apnt_amt").val(awrdPnt);
        $("#order_payment_total_mpnt_amt").val(moscPnt);
        orderPaymentManager.calculatePointSvmnAmt();
        orderPaymentManager.setTotalPaymentInfo()
    },
    calculatePointSvmnAmt: function(appendingTarget) {},
    calculateFnPointSvmnAmt: function(appendingTarget) {
        var svmnAmt = $("#order_payment_dc_svmn_use_amt").length > 0 ? parseInt($("#order_payment_dc_svmn_use_amt").val()) : 0;
        var svmnAmtView = "0";
        var fndDayPnt = 0;
        var spclPnt = 0;
        var awrdPnt = 0;
        var moscPnt = 0;
        var svmnUseTypeCd = $("#svmnUseTypeCd").val();
        $("#pointUseType" + svmnUseTypeCd).find("input[name=fndDayPntInfos]").each(function(index, item) {
            fndDayPnt += parseInt($(this).val().split("|")[1])
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=spclPntInfos]").each(function(index,
                                                                                          item) {
            spclPnt += parseInt($(this).val().split("|")[1])
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=awrdPntInfos]").each(function(index, item) {
            awrdPnt += parseInt($(this).val().split("|")[1])
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=moscPntInfos]").each(function(index, item) {
            moscPnt += parseInt($(this).val().split("|")[1])
        });
        var totalSvmnAmt = svmnAmt + fndDayPnt + spclPnt + awrdPnt + moscPnt;
        if (svmnAmt > 0 || fndDayPnt > 0 || spclPnt > 0 || awrdPnt > 0 || moscPnt > 0) svmnAmtView = "-" + format.num(totalPointSum);
        $(appendingTarget).val(totalSvmnAmt);
        $(appendingTarget + "_view").text(svmnAmtView);
        $("#order_payment_total_svmn_amt");
        $("#order_payment_total_fn_sprt_amt_view").text(svmnAmtView);
        $("#order_payment_total_dc_amt").val(totalPointSum);
        $("#totalFnSprtAmt").val(totalPointSum);
        $("#order_payment_total_fpnt_amt").val(fndDayPnt);
        $("#order_payment_total_spnt_amt").val(spclPnt);
        $("#order_payment_total_apnt_amt").val(awrdPnt);
        $("#order_payment_total_mpnt_amt").val(moscPnt)
    },
    setTotalPaymentInfo: function() {
        $("#order_payment_total_pay_amt").val();
        $("#order_payment_total_pay_amt_view").text()
    }
};