var _orderData = [];
var orderPay = {
    calTotalAmt: function(type, couponDcAmt) {
    	
        var goodsTotalAmt = parseInt($("#order_payment_total_goods_amt").val());
        var dlvrTotalAmt = parseInt($("#order_payment_total_dlvr_amt").val());
        var fnSprtAmt = parseInt($("#totalFnSprtAmt").val());
        var dcTotalAmt = 0;
        var svmnTotalAmt = 0;
        var fpntTotalAmt = 0;
        var spntTotalAmt = 0;
        var apntTotalAmt = 0;
        var mpntTotalAmt = 0;
        var wpntTotalAmt = 0;
        dcTotalAmt = parseInt($("#order_payment_total_dc_amt").val());
        if (orderCommon.mbrNo != orderCommon.CONST_NO_MEMBER_NO) {
            svmnTotalAmt = parseInt($("#order_payment_total_svmn_amt").val());
            fpntTotalAmt = $("#order_payment_total_fpnt_amt").length > 0 ? parseInt($("#order_payment_total_fpnt_amt").val()) : 0;
            spntTotalAmt = $("#order_payment_total_spnt_amt").length > 0 ? parseInt($("#order_payment_total_spnt_amt").val()) : 0;
            apntTotalAmt = $("#order_payment_total_apnt_amt").length > 0 ? parseInt($("#order_payment_total_apnt_amt").val()) : 0;
            mpntTotalAmt = $("#order_payment_total_mpnt_amt").length > 0 ? parseInt($("#order_payment_total_mpnt_amt").val()) : 0;
            wpntTotalAmt = $("#order_payment_total_wpnt_amt").length > 0 ? parseInt($("#order_payment_total_wpnt_amt").val()) :
                0
        }
        var totalFnetPoint = fpntTotalAmt + spntTotalAmt + apntTotalAmt + mpntTotalAmt + wpntTotalAmt;
        if (orderCommon.stGbCd == "30") fnSprtAmt = 0;
        var payTotalAmt = goodsTotalAmt + dlvrTotalAmt - dcTotalAmt - svmnTotalAmt - totalFnetPoint - fnSprtAmt;
        console.log("## payTotalAmt = " + payTotalAmt);
        console.log("## totalFnetPoint=" + totalFnetPoint);
        console.log("## fnSprtAmt=" + fnSprtAmt);
        $("#mbl_order_payment_total_goods_amt_view").text(isNaN(goodsTotalAmt) ? 0 : format.num(goodsTotalAmt));
        $("#mbl_order_total_dc_point_view").text(isNaN(dcTotalAmt +
            svmnTotalAmt + fnSprtAmt) ? 0 : format.num(dcTotalAmt + svmnTotalAmt + fnSprtAmt));
        $("#order_payment_total_pay_amt_view").val(payTotalAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $("#order_payment_total_fn_sprt_amt_view").val(fnSprtAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        if (orderCommon.stGbCd == "30") $("#order_payment_total_return_amt_view").html(fnSprtAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        if (orderCommon.mbrNo != orderCommon.CONST_NO_MEMBER_NO && $("input[name=rglrDlvrYn]").val() !=
            "Y")
            if (payTotalAmt < 0 && (svmnTotalAmt > 0 || fpntTotalAmt > 0 || spntTotalAmt > 0 || apntTotalAmt > 0 || mpntTotalAmt > 0 || wpntTotalAmt > 0)) {
                if (svmnTotalAmt > 0) $("#order_payment_dc_svmn_use_amt").val("0");
                if (fpntTotalAmt > 0) $("#pointUseType" + $("#svmnUseTypeCd").val()).find("input[name=fndDayPntInfos]").each(function(index, item) {
                    var initFndDayPntInfos = $(this).val().split("|")[0] + "|0";
                    $(this).val(initFndDayPntInfos)
                });
                if (spntTotalAmt > 0) $("#pointUseType" + $("#svmnUseTypeCd").val()).find("input[name=spclPntInfos]").each(function(index,
                                                                                                                                    item) {
                    var initSpclPntInfos = $(this).val().split("|")[0] + "|0";
                    $(this).val(initSpclPntInfos)
                });
                if (apntTotalAmt > 0) $("#pointUseType" + $("#svmnUseTypeCd").val()).find("input[name=awrdPntInfos]").each(function(index, item) {
                    var initAwrdPntInfos = $(this).val().split("|")[0] + "|0";
                    $(this).val(initAwrdPntInfos)
                });
                if (mpntTotalAmt > 0) $("#pointUseType" + $("#svmnUseTypeCd").val()).find("input[name=moscPntInfos]").each(function(index, item) {
                    var initMoscPntInfos = $(this).val().split("|")[0] + "|0";
                    $(this).val(initMoscPntInfos)
                });
                if (wpntTotalAmt > 0) $("#pointUseType" + $("#svmnUseTypeCd").val()).find("input[name=welfarePntInfos]").each(function(index, item) {
                    var initWelfarePntInfos = $(this).val().split("|")[0] + "|0";
                    $(this).val(initWelfarePntInfos)
                });
                orderDc.calSvmnAmt();
                return
            } if (type != undefined && type == "goodsCoupon") {
            $("#order_payment_total_pay_amt").val(payTotalAmt);
            if ($("input[name=rglrDlvrYn]").val() != "Y");
        } else {
            $("#order_payment_total_pay_amt_view").text(format.num(payTotalAmt));
            $("#order_payment_total_pay_amt_final_view").text(format.num(payTotalAmt));
            $("#order_payment_total_pay_amt").val(payTotalAmt)
        }
    },
    valid: function() {
        var payMeansCd = $("#payMeansCd").val();
        var payAmt = parseInt($("#order_payment_total_pay_amt").val());
        if (payAmt <= 0) {
            commonAlert({
                title: "alert",
                content: "결제금액을 확인해 주세요."
            });
            openLayer("commonAlert");
            return false
        }
        if ($("input[name=rglrDlvrYn]").val() == "Y") {
            if ($("input[name=rglrDlvrCycl]").val() == "") {
                commonAlert({
                    title: "alert",
                    content: "배송주기를 선택해 주세요."
                });
                openLayer("commonAlert");
                $("input[name=rglrDlvrCycl]").focus();
                return false
            }
            var rglrPayDay =
                $("input[name=rglrPayDay]").val();
            if (rglrPayDay == "" || rglrPayDay == undefined) {
                commonAlert({
                    title: "alert",
                    content: "배송일자를 기재해 주세요."
                });
                openLayer("commonAlert");
                $("input[name=rglrPayDay]").focus();
                return false
            }
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
                if (parseInt($("#order_payment_total_pay_amt").val()) > 0 && $("#installmentMonth").val() == "") {
                    commonAlert({
                        title: "alert",
                        content: "할부기간을 체크해 주세요."
                    });
                    openLayer("commonAlert");
                    return false
                }
                if (parseInt($("#order_payment_total_pay_amt").val()) > 0 && parseInt($("#order_payment_total_pay_amt").val()) < 5E4 && $("#installmentMonth").val() != "00") {
                    commonAlert({
                        title: "alert",
                        content: "일시불만 가능합니다."
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
            } if (payMeansCd == orderCommon.CONST_PAY_MEANS_140 || payMeansCd == orderCommon.CONST_PAY_MEANS_130 || payMeansCd == orderCommon.CONST_PAY_MEANS_150) {
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
        if (orderCommon.mbrNo == orderCommon.CONST_NO_MEMBER_NO);
        return true
    },
    getCardIstmInfo: function() {
    	var chrgDcStrIdObj = $("input[name=goodsChrgDcStrId]")[0];
        var cardCode = $("#selectCardCode").val();
        var payAmt = parseInt($("#order_payment_total_pay_amt").val());
    	var sidIstmPrdObj = $("input[name=goodsSidIstmPrd]")[0];
        
        if (cardCode != "" && cardCode != undefined && payAmt >= 5E4) {
            var options = {
                url: orderCommon.stContextPath + "xhr/order/getCardIstmInfo",
                async : false,
				data : {
					cardCode : $("#selectCardCode").val(),
					chrgDcStrId : $(chrgDcStrIdObj).val(),
					sidIstmPr : $(sidIstmPrdObj).val()
				},
                done: function(data) {
                    orderPay.setCardIstmInfoData(data.cardIstmInfo, payAmt)
                }
            };
            ajax.call(options)
        } else orderPay.setCardIstmInfoData("", payAmt)
    },
    setCardIstmInfoData: function(cardIstm, payAmt) {
        var str = "<li role='option' class='droplist-item focused' aria-selected='true' onclick='setInstallMentMonth(this, \"00\")'>일시불</li>";
        if (cardIstm != "" &&
            cardIstm != undefined && payAmt >= 5E4) {
            var istmPrdArr = cardIstm.istmPrd.split(",");
            var noItrstPrdArr = cardIstm.noItrstPrd.split(",");
            var noItrstStdAmt = parseInt(cardIstm.noItrstStdAmt);
			noItrstPrdArr = noItrstPrdArr.sort((a,b) => a-b );
			istmPrdArr = istmPrdArr.sort((a,b) => a-b );
            
            for (var i in istmPrdArr) {
                var istmPrd = istmPrdArr[i];
                var noItrstFlag = false;
                if (istmPrd != "1") {
                    for (var n in noItrstPrdArr) {
                        var noItrstPrd = noItrstPrdArr[n];
                        if (payAmt >= noItrstStdAmt && istmPrd == noItrstPrd) {
							var sidIstmPrdObj = $("input[name=goodsSidIstmPrd]")[0];
							var midTpCdObj = $("input[name=goodsMidTpCd]")[0];
							// sid할부기간 or midTpCd 값이 없을때
							if( $(sidIstmPrdObj).val() == "" || $(midTpCdObj).val() == "" ) {
								str +="<li role='option' class='droplist-item' onclick='setInstallMentMonth(this, \""+ (noItrstPrd < 10 ? "0"+noItrstPrd : noItrstPrd) +"\")'>"+noItrstPrd+"개월(무이자)</li>";
								noItrstFlag = true;
							} else {
								if( $(sidIstmPrdObj).val() == noItrstPrd && $(midTpCdObj).val() == "20" ) {
									// sid할부기간이 값 있고 midTpCd 값 20일때
									str +="<li role='option' class='droplist-item' onclick='setInstallMentMonth(this, \""+ (noItrstPrd < 10 ? "0"+noItrstPrd : noItrstPrd) +"\")'>"+noItrstPrd+"개월(무이자)</li>";
									noItrstFlag = true;
								} else if( $(sidIstmPrdObj).val() == noItrstPrd && $(midTpCdObj).val() == "10" ) {
									// sid할부기간이 값 있고 midTpCd 값 10일때
									noItrstFlag = true;
								} else {
									str +="<li role='option' class='droplist-item' onclick='setInstallMentMonth(this, \""+ (noItrstPrd < 10 ? "0"+noItrstPrd : noItrstPrd) +"\")'>"+noItrstPrd+"개월(무이자)</li>";
									noItrstFlag = true;
								}
							}
                        }
                    }
                    if (!noItrstFlag) str += "<li role='option' class='droplist-item' onclick='setInstallMentMonth(this, \"" + (istmPrd < 10 ? "0" + istmPrd : istmPrd) + "\")'>" + istmPrd + "개월</li>"
                }
            }
            $("#installmentMonth").val("");
            $("#dropOrderInstPlanBtn").html("할부 기간을 선택해주세요.")
        } else {
            $("#installmentMonth").val("00");
            $("#dropOrderInstPlanBtn").html("일시불")
        }
        var dropOrderInstPlanBtn = $("#dropOrderInstPlanBtn").next();
        dropOrderInstPlanBtn.html(str)
    },
    payBtn: function() {
        if ((orderCommon.stGbCd ==
            "20" || orderCommon.stGbCd == "30") && $("#fnetOrderAgree").val() == "N") {
            if ($("#agreement-1").prop("checked") && $("#agreement-2").prop("checked") && $("#agreement-3").prop("checked") && $("#agreement-5").prop("checked")) {
                commonAlert({
                    title: "alert",
                    content: "주문 및 개인정보 수집 필수 약관에<br>동의하시기전 패밀리넷 구매동의를 하셔야 합니다 \n 약관에 체크를 푸신후 결재버튼을 누르세요."
                });
                openLayer("commonAlert");
                return false
            }
            openLayer("popupFmailyAgree");
            return false
        } else {
            var trdInYn = $("input[id = tradeInYn]").val();
            if (trdInYn == "Y") {
                if (!$("#agreement-1").prop("checked") ||
                    !$("#agreement-2").prop("checked") || !$("#agreement-3").prop("checked") || !$("#agreement-5").prop("checked") || !$("#agreement-9").prop("checked") || !$("#agreement-10").prop("checked") || !$("#agreement-11").prop("checked")) {
                    var alertMsg = "주문 및 개인정보 수집 필수 및 중고보상 이용약관에<br>동의해 주세요.";
                    if (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30") alertMsg = "주문 상품 정보 및 배송 정보를 확인하고<br>구매에 동의해 주세요.";
                    commonAlert({
                        title: "alert",
                        content: alertMsg
                    });
                    openLayer("commonAlert");
                    return false
                }
            } else if (!$("#agreement-1").prop("checked") ||
                !$("#agreement-2").prop("checked") || !$("#agreement-3").prop("checked") || !$("#agreement-5").prop("checked")) {
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
        }
        var isArcn = false;
        var isDryer = false;
        var orderGoods = $("div.buy-target-goods");
        for (var i =
            0; i < orderGoods.length; i++) {
            console.log(orderGoods[i]);
            var arcnYn = $(orderGoods[i]).attr("data-arcn-yn");
            if (arcnYn == "Y") {
                isArcn = true;
                break
            }
            var dryerYn = $(orderGoods[i]).attr("data-dryer-yn");
            if (dryerYn == "Y") {
                isDryer = true;
                break
            }
        }
        if (isArcn)
            if ($("#arcnYn").val() != "Y") {
                openLayer("popupAirConditioner");
                return false
            } if (isDryer)
            if ($("#dryerYn").val() != "Y") {
                openLayer("popupDryer");
                return false
            } if (!orderOrdr.valid()) {
            commonAlert({
                title: "alert",
                content: "주문자 정보가 올바르지 않습니다."
            });
            openLayer("commonAlert");
            return false
        }
        if ("1" ==
            $("#dlvraType").val()) {
            if ($("input[name=extAdvVstYn]:checked").val() == "Y" && $(".extra-service").find("input[name=extAdvVstDate]").val() == "") {
                commonAlert({
                    title: "alert",
                    content: "사전 방문일을 입력해 주세요."
                });
                openLayer("commonAlert");
                return false
            } else {
                var minDate = $(".extra-service").find("input[name=extAdvVstDate]").attr("min");
                var maxDate = $(".extra-service").find("input[name=extAdvVstDate]").attr("max");
                var advVstDate = $(".extra-service").find("input[name=extAdvVstDate]").val();
                var dishwasherYn = $(".extra-service").find("input[name=dishwasherYn]").val();
                if (dishwasherYn != "Y")
                    if (!orderPay.checkValidAdvVstDate(minDate, maxDate, advVstDate)) return false
            }
            if ($(".extra-service").find("input[name=extIstHopeDate]").length > 0 && $(".extra-service").find("input[name=extIstHopeDate]").val() == "") {
                if ($(".extra-service").find("input[name=dlvrIstYn]").val() == "Y") commonAlert({
                    title: "alert",
                    content: "설치 희망일을 입력해 주세요."
                });
                else commonAlert({
                    title: "alert",
                    content: "배송 희망일을 입력해 주세요."
                });
                openLayer("commonAlert");
                return false
            } else {
                var minDate = $(".extra-service").find("input[name=extIstHopeDate]").attr("min");
                var maxDate = $(".extra-service").find("input[name=extIstHopeDate]").attr("max");
                var advVstDate = $(".extra-service").find("input[name=extIstHopeDate]").val();
                var disableHopeDateString = $(".extra-service").find("input[name=extIstHopeDate]").data("disable-hope-day");
                var dlvrIstYn = $(".extra-service").find("input[name=dlvrIstYn]").val();
                if (!orderPay.checkValidExtIstHopeDate(minDate, maxDate, advVstDate, disableHopeDateString, dlvrIstYn)) return false
            }
        } else {
            var extIstFlag = true;
            $.each($(".delivery-box"), function() {
                if ($(this).find("input[name^=extAdvVstDate]").val() ==
                    "" && $(this).find("input[name^=extAdvVstYn]:checked").val() == "Y") {
                    commonAlert({
                        title: "alert",
                        content: "사전 방문일을 입력해 주세요."
                    });
                    openLayer("commonAlert");
                    extIstFlag = false;
                    return false
                } else {
                    var minDate = $(this).find("input[name^=extAdvVstDate]").attr("min");
                    var maxDate = $(this).find("input[name^=extAdvVstDate]").attr("max");
                    var advVstDate = $(this).find("input[name^=extAdvVstDate]").val();
                    if (!orderPay.checkValidAdvVstDate(minDate, maxDate, advVstDate)) {
                        extIstFlag = false;
                        return false
                    }
                }
                return true
            });
            $.each($(".delivery-box"),
                function() {
                    if ($(this).find("input[name^=extIstHopeDate]").length > 0 && $(this).find("input[name^=extIstHopeDate]").val() == "") {
                        if ($(this).find("input[name^=dlvrIstYn]").val() == "Y") commonAlert({
                            title: "alert",
                            content: "설치 희망일을 입력해 주세요."
                        });
                        else commonAlert({
                            title: "alert",
                            content: "배송 희망일을 입력해 주세요."
                        });
                        openLayer("commonAlert");
                        extIstFlag = false;
                        return false
                    } else {
                        var minDate = $(this).find("input[name^=extIstHopeDate]").attr("min");
                        var maxDate = $(this).find("input[name^=extIstHopeDate]").attr("max");
                        var advVstDate =
                            $(this).find("input[name^=extIstHopeDate]").val();
                        var disableHopeDateString = $(this).find("input[name^=extIstHopeDate]").data("disable-hope-day");
                        var dlvrIstYn = $(this).find("input[name^=extIstHopeDate]").val();
                        if (!orderPay.checkValidExtIstHopeDate(minDate, maxDate, advVstDate, disableHopeDateString, dlvrIstYn)) {
                            extIstFlag = false;
                            return false
                        }
                    }
                    return true
                });
            if (!extIstFlag) return false
        }
        if (orderCommon.mbrNo != orderCommon.CONST_NO_MEMBER_NO) {
            if (!orderDc.validSvmn()) return false;
            if (!orderDc.validFndDayPnt()) return false;
            if (!orderDc.validSpclPnt()) return false;
            if (!orderDc.validAwrdPnt()) return false;
            if (!orderDc.validMoscPnt()) return false
        }
        if (!this.valid()) return false;
        if ("Y" == localStorage.getItem("ing")) {
            if (pgPopup != null && !pgPopup.closed) pgPopup.focus();
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
        var confirmData = {
            content: orderConfirmMsg,
            callback: function() {
                localStorage.setItem("ing", "Y");
                orderPay.getOrderNo()
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
        if (minDate.getTime() > advVstDate.getTime() || maxDate.getTime() <
            advVstDate.getTime()) {
            commonAlert({
                title: "alert",
                content: "사전 방문일은 " + minDate.dateFormat("yyyy-MM-dd") + "~" + maxDate.dateFormat("yyyy-MM-dd") + "<br/>이내로 선택 가능 합니다."
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
                content: "설치 희망일은 " + minDate.dateFormat("yyyy-MM-dd") + "~" + maxDate.dateFormat("yyyy-MM-dd") + "<br/>이내로 선택 가능 합니다."
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
                    if (advVstDate.dateFormat("yyyyMMdd") ==
                        disableHopeDateList[i]) {
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
    getOrderDlvrInfo: function() {
        var _orderDlvrInfo = [];
        var dlvraIndex = 0;
        var orderCartInfo = [];
        var orderExtraInfo = [];
        console.log("orderPay.js getOrderNo dlvraType: " + $("#dlvraType").val());
        if ("1" == $("#dlvraType").val()) {
            $.each($(".order-m-area"), function() {
                $.each($(this).find(".buy-target-goods"),
                    function() {
                        var buyQty = $(this).find("input[name=buyQtyOrd]").val();
                        if (buyQty > 0)
                            if (typeof _multi_goods_order == "undefined") {
                                var goods = {
                                    cartId: $(this).find("input[name=cartIds]").val(),
                                    buyQty: buyQty,
                                    dlvrCpNo: 0,
                                    dlvrMbrCpNo: 0,
                                    cpDcAmt: 0,
                                    buyQtyOrd: buyQty
                                };
                                orderCartInfo.push(goods)
                            } else
                                for (var i = 0; i < buyQty; i++) {
                                    var goods = {
                                        cartId: $(this).find("input[name=cartIds]").val(),
                                        buyQty: 1,
                                        dlvrCpNo: 0,
                                        dlvrMbrCpNo: 0,
                                        cpDcAmt: 0,
                                        buyQtyOrd: buyQty
                                    };
                                    orderCartInfo.push(goods)
                                }
                    })
            });
            if ($("#order-recieve-view").length > 0) {
                var extra = {
                    extIstHopeDate: "",
                    extDoorDrct: "",
                    extFrbDlvra: "",
                    extAdvVstYn: "",
                    extAdvVstDate: "",
                    extGrbgPuYn: ""
                };
                orderExtraInfo.push(extra);
                for (var i = 0; i < orderCartInfo.length; i++) {
                    var orderCartInfoTmp = [];
                    orderCartInfoTmp.push(orderCartInfo[i]);
                    var dlvra = {
                        dlvraIndex: dlvraIndex,
                        adrsNm: $("#order-recieve-nm").val(),
                        adrsMobile: $("#order-recieve-mobile").val(),
                        adrsTel: $("#order-recieve-mobile").val(),
                        postNoNew: "",
                        roadAddr: "",
                        roadDtlAddr: "",
                        postNoOld: "",
                        prclAddr: "",
                        prclDtlAddr: "",
                        dlvrMemo: "",
                        localPostYn: "N",
                        ordDlvrMtdCd: "20",
                        cartInfoStr: JSON.stringify(orderCartInfoTmp),
                        extraInfoStr: JSON.stringify(orderExtraInfo),
                        pckStrNo: $("#plazaNo").val()
                    };
                    _orderDlvrInfo.push(dlvra)
                }
            } else $.each($(".info-delivery-single"), function() {
                var extra = {
                    extIstHopeDate: $(".extra-service").find("input[name=extIstHopeDate]").val(),
                    extDoorDrct: $(".extra-service").find("input[name=extDoorDrct]:checked").val(),
                    extFrbDlvra: $(".extra-service").find("input[name=extFrbDlvra]:checked").val(),
                    extAdvVstYn: $(".extra-service").find("input[name=extAdvVstYn]:checked").val(),
                    extAdvVstDate: $(".extra-service").find("input[name=extAdvVstDate]").val(),
                    extGrbgPuYn: $(".extra-service").find("input[name=extGrbgPuYn]:checked").val() != "" && $(".extra-service").find("input[name=extGrbgPuYn]:checked").val() != undefined ? $(".extra-service").find("input[name=extGrbgPuYn]:checked").val() : "N",
                    dsbRddListStr: $(".extra-service").find("input[name^=extIstHopeDate]").data("disableHopeDay")
                };
                orderExtraInfo.push(extra);
                if ($("input[name=rdoDeliveryMethod]").length > 0 && $("input[name=rdoDeliveryMethod]").val() ==
                    "20") $(this).find("input[name=orderDeliveryMethod]").val("20");
                else if ($("#deliveryTab5").hasClass("on")) $(this).find("input[name=orderDeliveryMethod]").val("30");
                var selDlvrMemo = $(this).find("input[name=odrDeliveryMsg]").is(":visible") ? $(this).find("input[name=odrDeliveryMsg]").val() : $(this).find("button[name=odrDeliveryMsg]").text();
                if (_ORDER_DELIVERY_DEFAULT_MSG == selDlvrMemo) selDlvrMemo = "";
                var careplusTp = $("#carePlusTp").val();
                if (careplusTp != undefined && careplusTp != "" && careplusTp == "I") selDlvrMemo =
                    $(".careplusIDlvrArea").find("input[name=odrDeliveryMsg]").is(":visible") ? $(".careplusIDlvrArea").find("input[name=odrDeliveryMsg]").val() : $(".careplusIDlvrArea").find("button[name=odrDeliveryMsg]").text();
                if ($("#delivery-tab-view5").css("display") != "none" && $("#delivery-tab-view1").css("display") == "none") {
                    var obj;
                    $(".officePick").each(function() {
                        if ($(this).attr("aria-selected") == "selected") obj = $(this)
                    });
                    var dlvra = {
                        dlvraIndex: dlvraIndex,
                        adrsNm: $(obj).data("ordnm"),
                        adrsMobile: $(obj).data("ordmobile"),
                        adrsTel: $(obj).data("ordmobile"),
                        postNoNew: $(obj).data("postnew"),
                        roadAddr: $(obj).data("roadaddr"),
                        roadDtlAddr: $(obj).data("roaddtladdr"),
                        postNoOld: $(obj).data("postold"),
                        prclAddr: $(obj).data("prcladdr"),
                        prclDtlAddr: $(obj).data("prcldtladdr"),
                        dlvrMemo: "",
                        localPostYn: "N",
                        ordDlvrMtdCd: $(this).find("input[name=orderDeliveryMethod]").val(),
                        cartInfoStr: JSON.stringify(orderCartInfo),
                        extraInfoStr: JSON.stringify(orderExtraInfo),
                        pckStrNo: $(obj).data("plazano")
                    };
                    _orderDlvrInfo.push(dlvra)
                } else if (typeof _multi_goods_order ==
                    "undefined") {
                    var dlvra = {
                        dlvraIndex: dlvraIndex,
                        adrsNm: $(this).find("input[name=adrsNm]").val(),
                        adrsMobile: $(this).find("input[name=adrsMobile]").val(),
                        adrsTel: $(this).find("input[name=adrsTel]").val(),
                        postNoNew: $(this).find("input[name=postNoNew]").val(),
                        roadAddr: $(this).find("input[name=roadAddr]").val(),
                        roadDtlAddr: $(this).find("input[name=roadDtlAddr]").val(),
                        postNoOld: $(this).find("input[name=postNoOld]").val(),
                        prclAddr: $(this).find("input[name=prclAddr]").val(),
                        prclDtlAddr: $(this).find("input[name=prclDtlAddr]").val(),
                        dlvrMemo: selDlvrMemo,
                        localPostYn: $(this).find("input[name=localPostYn]").val(),
                        ordDlvrMtdCd: $(this).find("input[name=orderDeliveryMethod]").val(),
                        cartInfoStr: JSON.stringify(orderCartInfo),
                        extraInfoStr: JSON.stringify(orderExtraInfo)
                    };
                    _orderDlvrInfo.push(dlvra)
                } else
                    for (var i = 0; i < orderCartInfo.length; i++) {
                        var orderCartInfoTmp = [];
                        orderCartInfoTmp.push(orderCartInfo[i]);
                        var dlvra = {
                            dlvraIndex: dlvraIndex,
                            adrsNm: $(this).find("input[name=adrsNm]").val(),
                            adrsMobile: $(this).find("input[name=adrsMobile]").val(),
                            adrsTel: $(this).find("input[name=adrsTel]").val(),
                            postNoNew: $(this).find("input[name=postNoNew]").val(),
                            roadAddr: $(this).find("input[name=roadAddr]").val(),
                            roadDtlAddr: $(this).find("input[name=roadDtlAddr]").val(),
                            postNoOld: $(this).find("input[name=postNoOld]").val(),
                            prclAddr: $(this).find("input[name=prclAddr]").val(),
                            prclDtlAddr: $(this).find("input[name=prclDtlAddr]").val(),
                            dlvrMemo: selDlvrMemo,
                            localPostYn: $(this).find("input[name=localPostYn]").val(),
                            ordDlvrMtdCd: $(this).find("input[name=orderDeliveryMethod]").val(),
                            cartInfoStr: JSON.stringify(orderCartInfoTmp),
                            extraInfoStr: JSON.stringify(orderExtraInfo)
                        };
                        _orderDlvrInfo.push(dlvra)
                    }
            })
        } else $.each($(".delivery-box"), function() {
            orderCartInfo = [];
            orderExtraInfo = [];
            var arrMultiMemberAddr = $(this).find("input[name=arrMultiMemberAddr]").val().split(";");
            $.each($(this).find("input[name=multiCartIds]"), function() {
                var goods = {
                    cartId: $(this).val(),
                    buyQty: 1,
                    dlvrCpNo: 0,
                    dlvrMbrCpNo: 0,
                    cpDcAmt: 0,
                    buyQtyOrd: $(this).attr("data-buy-qty")
                };
                orderCartInfo.push(goods)
            });
            var extra = {
                extIstHopeDate: $(this).find("input[name^=extIstHopeDate]").val(),
                extAdvVstYn: $(this).find("input[name^=extAdvVstYn]:checked").val(),
                extAdvVstDate: $(this).find("input[name^=extAdvVstDate]").val(),
                extGrbgPuYn: $(this).find("input[name^=extGrbgPuYn]:checked").val() != "" && $(this).find("input[name^=extGrbgPuYn]:checked").val() != undefined ? $(this).find("input[name^=extGrbgPuYn]:checked").val() : "N",
                dsbRddListStr: $(this).find("input[name^=extIstHopeDate]").data("disableHopeDay")
            };
            orderExtraInfo.push(extra);
            if ($("input[name=rdoDeliveryMethod]").length > 0 && $("input[name=rdoDeliveryMethod]").val() ==
                "20") $(this).find("input[name=orderDeliveryMethod]").val("20");
            else if ($("#deliveryTab5").hasClass("on")) $(this).find("input[name=orderDeliveryMethod]").val("30");
            var selDlvrMemo = $(this).find("input[name=odrDeliveryMsg]").is(":visible") ? $(this).find("input[name=odrDeliveryMsg]").val() : $(this).find("button[name=odrDeliveryMsg]").text();
            if (_ORDER_DELIVERY_DEFAULT_MSG == selDlvrMemo) selDlvrMemo = "";
            var dlvra = {
                dlvraIndex: dlvraIndex++,
                adrsNm: arrMultiMemberAddr[0],
                adrsMobile: arrMultiMemberAddr[1],
                adrsTel: arrMultiMemberAddr[2],
                postNoNew: arrMultiMemberAddr[3],
                roadAddr: arrMultiMemberAddr[4],
                roadDtlAddr: arrMultiMemberAddr[5],
                postNoOld: arrMultiMemberAddr[6],
                prclAddr: arrMultiMemberAddr[7],
                prclDtlAddr: arrMultiMemberAddr[8],
                dlvrMemo: selDlvrMemo,
                localPostYn: $(this).find("input[name=localPostYn]").val(),
                ordDlvrMtdCd: $(this).find("input[name=orderDeliveryMethod]").val(),
                cartInfoStr: JSON.stringify(orderCartInfo),
                extraInfoStr: JSON.stringify(orderExtraInfo)
            };
            _orderDlvrInfo.push(dlvra)
        });
        return _orderDlvrInfo
    },
    getOrderNo: function(payMeansCd) {
        var orderDlvrInfo =
            orderPay.getOrderDlvrInfo();
        _orderData = new Array;
        _orderData.push({
            name: "mbrNo",
            value: $("input[name=mbrNo]").val()
        });
        _orderData.push({
            name: "ordNm",
            value: $("input[name=ordNm]").val()
        });
        _orderData.push({
            name: "ordrId",
            value: $("input[name=ordrId]").val()
        });
        _orderData.push({
            name: "mbrGrdCd",
            value: $("input[name=mbrGrdCd]").val()
        });
        _orderData.push({
            name: "ordrMobile",
            value: $("input[name=ordrMobile]").val()
        });
        _orderData.push({
            name: "ordrTel",
            value: $("input[name=ordrTel]").val()
        });
        _orderData.push({
            name: "ordrEmail",
            value: $("input[name=ordrEmail]").val()
        });
        _orderData.push({
            name: "cartTpCd",
            value: $("input[name=cartTpCd]").val()
        });
        $.each(orderCommon.arrGoodsInfo, function(index, item) {
            _orderData.push({
                name: "cartIds",
                value: item.cartId
            });
            _orderData.push({
                name: "goodsNms",
                value: item.goodsNm
            });
            _orderData.push({
                name: "goodsInfos",
                value: item.goodsId + "|" + item.buyQty
            })
        });
        $("input[name=goodsCpInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) _orderData.push({
                name: "cpInfos",
                value: item.defaultValue
            })
        });
        $("input[name=frbInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) _orderData.push({
                name: "frbInfos",
                value: item.defaultValue
            })
        });
        if ($("#omniCpInfo").val() != null) _orderData.push({
            name: "omniCpInfo",
            value: $("#omniCpInfo").val()
        });
        _orderData.push({
            name: "payMeansCd",
            value: $("#payMeansCd").val()
        });
        _orderData.push({
            name: "svmnUseAmt",
            value: $("#order_payment_dc_svmn_use_amt").val()
        });
        _orderData.push({
            name: "savedPoint",
            value: $("#order_payment_total_save_amt").val()
        });
		_orderData.push( {name : 'savedUseMembershipPoint', value : $('#order_payment_membership_save_amt').val() });
        var svmnUseTypeCd =
            $("#svmnUseTypeCd").val();
        _orderData.push({
            name: "svmnUseTypeCd",
            value: svmnUseTypeCd
        });
        var isExcludedJickpan = $("#isExcludedJickpan").val();
        _orderData.push({
            name: "isExcludedJickpan",
            value: isExcludedJickpan
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=fndDayPntInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) _orderData.push({
                name: "fndDayPntInfos",
                value: item.defaultValue
            })
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=spclPntInfos]").each(function(index,
                                                                                          item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) _orderData.push({
                name: "spclPntInfos",
                value: item.defaultValue
            })
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=awrdPntInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) _orderData.push({
                name: "awrdPntInfos",
                value: item.defaultValue
            })
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=moscPntInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) _orderData.push({
                name: "moscPntInfos",
                value: item.defaultValue
            })
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=welfarePntInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) _orderData.push({
                name: "welfarePntInfos",
                value: item.defaultValue
            })
        });
        $("div.buy-target-goods").each(function(idx, element) {
            _orderData.push({
                name: "additionalFnSprtAmt",
                value: $(element).attr("data-additional-fn-sprt-amt")
            })
        });
        _orderData.push({
            name: "excptNo",
            value: $("#excptNo").val()
        });
        _orderData.push({
            name: "acctInfoNo",
            value: $("select[name=acctInfoNo]").val()
        });
        _orderData.push({
            name: "dpstrNm",
            value: $("input[name=dpstrNm]").val()
        });
        _orderData.push({
            name: "useGbCd",
            value: $("input:radio[name=useGbCd]:checked").val()
        });
        _orderData.push({
            name: "isuMeansNoPhn",
            value: $("input[name=isuMeansNoPhn]").val()
        });
        _orderData.push({
            name: "isuMeansNoBiz",
            value: $("input[name=isuMeansNoBiz]").val()
        });
        _orderData.push({
            name: "payAmt",
            value: $("input[name=payAmt]").val()
        });
        _orderData.push({
            name: "orderDlvrInfoStr",
            value: JSON.stringify(orderDlvrInfo)
        });
        _orderData.push({
            name: "dlvraType",
            value: $("#dlvraType").val() == undefined || $("#dlvraType").val() == "" ? "1" : $("#dlvraType").val()
        });
        _orderData.push({
            name: "onlineStoreOnlyYn",
            value: $("#onlineStoreOnlyYn").val()
        });
        _orderData.push({
            name: "rglrDlvrYn",
            value: $("input[name=rglrDlvrYn]").val()
        });
        _orderData.push({
            name: "rglrDlvrCycl",
            value: $("input[name=rglrDlvrCycl]").val()
        });
        _orderData.push({
            name: "rglrPayDay",
            value: $('input[name="subRglrPayDay"]').val()
        });
        $("input[name=maker ]").each(function(idx, element) {
            _orderData.push({
                name: "maker",
                value: $(element).val()
            })
        });
        $("input[name=model ]").each(function(idx, element) {
            _orderData.push({
                name: "model",
                value: $(element).val()
            })
        });
        $("input[name=modelName ]").each(function(idx, element) {
            _orderData.push({
                name: "modelName",
                value: $(element).val()
            })
        });
        $("input[name=modelSeries ]").each(function(idx, element) {
            _orderData.push({
                name: "modelSeries",
                value: $(element).val()
            })
        });
        $("input[name=releaseDate ]").each(function(idx, element) {
            _orderData.push({
                name: "releaseDate",
                value: $(element).val()
            })
        });
        $("input[name=fgUse ]").each(function(idx,
                                              element) {
            _orderData.push({
                name: "fgUse",
                value: $(element).val()
            })
        });
        $("input[name=addCmpAmt ]").each(function(idx, element) {
            _orderData.push({
                name: "addCmpAmt",
                value: $(element).val()
            })
        });
        $("input[name=proNum ]").each(function(idx, element) {
            _orderData.push({
                name: "proNum",
                value: $(element).val()
            })
        });
        _orderData.push({
            name: "tradeInYn",
            value: $("input[id=tradeInYn]").val()
        });
        _orderData.push({
            name: "galaxyClubYn",
            value: $("input[id=galaxyClubYn]").val()
        });
        _orderData.push({
            name: "cpDcAmtForFree",
            value: $("#cpDcAmtForFree").val()
        });
        _orderData.push({
            name: "isHomefitnessGoodsYn",
            value: $("#isHomefitnessGoodsYn").val()
        });
        _orderData.push({
            name: "isHomefitnessPrivateGoodsYn",
            value: $("#isHomefitnessPrivateGoodsYn").val()
        });
        _orderData.push({
            name: "winePckUpYn",
            value: $("input[id=winePckUpYn]").val()
        });
        _orderData.push({
            name: "ceTrdYn",
            value: $("input[id=ceTrdYn]").val()
        });
        _orderData.push({
            name: "kcbAuthNo",
            value: $("input[id=galcamsKcbSeq]").val()
        });
        _orderData.push({
            name: "galcamsCertrGbCd",
            value: $("input[id=galcamsCertrGbCd]").val()
        });
        if (typeof def_page_guid != "undefined") _orderData.push({
            name: "pageGuid",
            value: def_page_guid
        });
        var qookerListObj = $(".cartListRst");
        var qookerCartTpCd = "";
        var qookerYn = "N";
        if (qookerListObj.length >
            0) $(qookerListObj).each(function(idx, element) {
            qookerCartTpCd = $(this).attr("data-cart-tp-cd");
            if (qookerCartTpCd == "40") qookerYn = "Y"
        });
        var orderCompDlvrStr = orderPay.getDlvrAmtData();
        if (qookerYn != null && qookerYn != "undefined" && qookerYn == "Y") {
            _orderData.push({
                name: "qookerYn",
                value: qookerYn
            });
            _orderData.push({
                name: "orderCompDlvrStr",
                value: JSON.stringify(orderCompDlvrStr)
            })
        }
        console.dir(_orderData);
        if (orderCommon.stGbCd == orderCommon.ST_GB_10 || orderCommon.stGbCd == orderCommon.ST_GB_20 || orderCommon.stGbCd == orderCommon.ST_GB_30 ||
            orderCommon.stGbCd == orderCommon.ST_GB_50 || orderCommon.stGbCd == orderCommon.ST_GB_70 || orderCommon.stGbCd == orderCommon.ST_GB_80)
            if (__history != null && __history.length > 0) _orderData.push({
                name: "rddListStr",
                value: JSON.stringify(__history)
            });
        if (false) {
            var popupWidth = 500;
            var popupHeight = 600;
            var popupX = document.body.offsetWidth / 2 - popupWidth / 2;
            var popupY = window.screen.height / 2 - popupHeight / 2;
            var popOptions = "width=" + popupWidth + ", height=" + popupHeight + ", top=" + popupY + ", left=" + popupX + ", fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=no, location=no, scrollbar=no";
            pgPopup = window.open("", "pgPopup", popOptions);
            mobilPay.open()
        } else {
            var d = new Date;
            var tmpNo = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + d.getHours() + "" + d.getMinutes() + "" + d.getSeconds() + "" + Math.floor(Math.random() * 1E3);
            var options = {
                url: orderCommon.stContextPath + "xhr/order/insertOrderTemp?tmpNo=" + tmpNo + "&multiGoodsOrderYn=" + (typeof _multi_goods_order == "undefined" ? "N" : _multi_goods_order),
                data: _orderData,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Cache-Control", "no-cache");
                    xhr.setRequestHeader("Pragma",
                        "no-cache")
                },
                done: function(data) {
                    if (data.ordNo != "")
                        if (data.ordQtyPlcyFlag == "S") {
                            $("#order_payment_ord_no").val(data.ordNo);
                            var rglrDlvrNo = data.rglrDlvrNo;
                            if (rglrDlvrNo != "" && rglrDlvrNo != undefined) $("#rglrDlvrNo").val(data.rglrDlvrNo);
                            var childSid = data.childSidList;
                            var childSidHtml = "";
                            var childAmtHtml = "";
                            $("#divChildSidInfos").html(childSidHtml);
                            $("#divChildSidInfos").html(childAmtHtml);
                            if (childSid != "" && childSid != undefined)
                                for (var i in childSid)
                                    if (childSid[i].childStrId != "" && childSid[i].childStrId !=
                                        undefined) {
                                        childSidHtml += '<input type="hidden" name="childSidInfos" value="' + childSid[i].childStrId + '">';
                                        childAmtHtml += '<input type="hidden" name="childAmtInfos" value="' + childSid[i].saleAmt + '">'
                                    } $("#divChildSidInfos").html(childSidHtml);
                            $("#divChildAmtInfos").html(childAmtHtml);
                            var chrgDcStrId = "";
                            var chrgDcRate = "";
                            var longNoItrstYn = "";
                            $.each($("div.buy-target-goods"), function(idx, element) {
                                chrgDcStrId = $(element).find("input[name=goodsChrgDcStrId]").val();
                                chrgDcRate = $(element).find("input[name=goodsChrgDcRate]").val();
                                longNoItrstYn = $(element).find("input[name=goodsLongNoItrstYn]").val()
                            });
                            if (chrgDcStrId != undefined && chrgDcStrId != "" && (chrgDcRate != undefined && chrgDcRate != "")) {
                                $("#chrgDcYn").val("Y");
                                $("#chrgDcRate").val(chrgDcRate);
                                $("#longNoItrstYn").val(longNoItrstYn)
                            }
                            if ($("#omniCpInfo").val() != null && $("#omniCpInfo").val() != "") {
                                $("#nonCertificationCardYn").val("Y");
                                $("#divChildSidInfos").html("");
                                $("#divChildAmtInfos").html("")
                            } else $("#nonCertificationCardYn").val("N");
                            orderPay.module()
                        } else {
                            if (data.ordQtyPlcyMsg !=
                                "" && data.ordQtyPlcyMsg != undefined) commonAlert({
                                title: "alert",
                                content: data.ordQtyPlcyMsg
                            });
                            else commonAlert({
                                title: "alert",
                                content: "구매 제한 초과입니다.<br/>조건을 확인하신 후 다시 주문해 주세요."
                            });
                            openLayer("commonAlert");
                            localStorage.setItem("ing", "N")
                        }
                    else {
                        commonAlert({
                            title: "alert",
                            content: "주문생성시 오류가 발생했습니다. 다시 시도해 주세요."
                        });
                        openLayer("commonAlert");
                        localStorage.setItem("ing", "N")
                    }
                },
                fail: function(data) {
                    localStorage.setItem("ing", "N")
                }
            };
            ajax.call(options)
        }
    },
    module: function() {
		var isHomefitnessGoodsYn = $("#isHomefitnessGoodsYn").val();
        var payMeansCd = $("#payMeansCd").val();
        var totalPayAmt = parseInt($("input[name=payAmt]").val());
        
        
        if (isHomefitnessGoodsYn != 'Y' && orderCommon.stGbCd != 10 && totalPayAmt < 1) {
            $("#payMeansCd").val("");
            this.complete()
        } else if (payMeansCd == orderCommon.CONST_PAY_MEANS_110 || payMeansCd == orderCommon.CONST_PAY_MEANS_140 || payMeansCd == orderCommon.CONST_PAY_MEANS_130 || payMeansCd == orderCommon.CONST_PAY_MEANS_210 || payMeansCd == orderCommon.CONST_PAY_MEANS_220 || payMeansCd == orderCommon.CONST_PAY_MEANS_230 || payMeansCd == orderCommon.CONST_PAY_MEANS_240 || payMeansCd == orderCommon.CONST_PAY_MEANS_250 || payMeansCd ==
            orderCommon.CONST_PAY_MEANS_260 || payMeansCd == orderCommon.CONST_PAY_MEANS_270) {
            if (payMeansCd == orderCommon.CONST_PAY_MEANS_110 && $("#rdCardType02").length > 0) $("#nonCertificationCardYn").val($("#rdCardType02").is(":checked") ? "Y" : "N");
            var popupWidth = 500;
            var popupHeight = 600;
            var popupX = document.body.offsetWidth / 2 - popupWidth / 2;
            var popupY = window.screen.height / 2 - popupHeight / 2;
            var popOptions = "width=" + popupWidth + ", height=" + popupHeight + ", top=" + popupY + ", left=" + popupX + ", fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=no, location=no, scrollbar=no";
            pgPopup = window.open("", "pgPopup", popOptions);
            mobilPay.open()
        }
    },
    complete: function() {
        var formdata = new Array;
        var recentPayInfoYn = "N";
        formdata.push({
            name: "ordNo",
            value: $("input[name=ordNo]").val()
        });
        $.each(orderCommon.arrGoodsInfo, function(index, item) {
            formdata.push({
                name: "cartIds",
                value: item.cartId
            })
        });
        formdata.push({
            name: "cartTpCd",
            value: $("input[name=cartTpCd]").val()
        });
        if ($("#pay-tab-view-sspay").is(":visible")) recentPayInfoYn = $("input[name=saveSamsungPay]").is(":checked") ? "Y" : "N";
        else if ($("#pay-tab-view-card").is(":visible")) recentPayInfoYn =
            $("input[name=savePay]").is(":checked") ? "Y" : "N";
        else if ($("#pay-tab-view-easy").is(":visible")) recentPayInfoYn = $("input[name=saveEasyPay]").is(":checked") ? "Y" : "N";
        else if ($("#pay-tab-view-vacct").is(":visible")) recentPayInfoYn = $("input[name=saveVirCashPay]").is(":checked") ? "Y" : "N";
        else if ($("#pay-tab-view-racct").is(":visible")) recentPayInfoYn = $("input[name=saveRealCashPay]").is(":checked") ? "Y" : "N";
        formdata.push({
            name: "payMeansCd",
            value: $("#payMeansCd").val()
        });
        formdata.push({
            name: "payAmt",
            value: $("input[name=payAmt]").val()
        });
        formdata.push({
            name: "acctInfoNo",
            value: $("select[name=acctInfoNo]").val()
        });
        formdata.push({
            name: "dpstrNm",
            value: $("input[name=dpstrNm]").val()
        });
        formdata.push({
            name: "mobilPayStdCertifyInfo",
            value: $("input[name=mobilPayStdCertifyInfo]").val()
        });
        formdata.push({
            name: "recentPayInfoYn",
            value: recentPayInfoYn
        });
        formdata.push({
            name: "selectCardCode",
            value: $("#selectCardCode").val()
        });
        var svmnUseTypeCd = $("#svmnUseTypeCd").val();
        formdata.push({
            name: "svmnUseTypeCd",
            value: svmnUseTypeCd
        });
        $("input[name=goodsCpInfos]").each(function(index,
                                                    item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) formdata.push({
                name: "cpInfos",
                value: item.defaultValue
            })
        });
        formdata.push({
            name: "savedPoint",
            value: $("#order_payment_total_save_amt").val()
        });
		formdata.push( {name : 'savedUseMembershipPoint', value : $('#order_payment_membership_save_amt').val() });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=fndDayPntInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) formdata.push({
                name: "fndDayPntInfos",
                value: item.defaultValue
            })
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=spclPntInfos]").each(function(index, item) {
            if (item.defaultValue !=
                "" && item.defaultValue.length > 0) formdata.push({
                name: "spclPntInfos",
                value: item.defaultValue
            })
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=awrdPntInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) formdata.push({
                name: "awrdPntInfos",
                value: item.defaultValue
            })
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=moscPntInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) formdata.push({
                name: "moscPntInfos",
                value: item.defaultValue
            })
        });
        $("#pointUseType" + svmnUseTypeCd).find("input[name=welfarePntInfos]").each(function(index, item) {
            if (item.defaultValue != "" && item.defaultValue.length > 0) formdata.push({
                name: "welfarePntInfos",
                value: item.defaultValue
            })
        });
        $("div.buy-target-goods").each(function(idx, element) {
            formdata.push({
                name: "additionalFnSprtAmt",
                value: $(element).attr("data-additional-fn-sprt-amt")
            })
        });
        formdata.push({
            name: "onlineStoreOnlyYn",
            value: $("#onlineStoreOnlyYn").val()
        });
        formdata.push({
            name: "rglrDlvrYn",
            value: $("input[name=rglrDlvrYn]").val()
        });
        if ($("input[name=rglrDlvrYn]").val() == "Y") _orderData.push({
            name: "mobilPayStdCertifyInfo",
            value: $("input[name=mobilPayStdCertifyInfo]").val()
        });
        if ($("#order-recieve-view").length > 0) formdata.push({
            name: "dlvrPckStrYn",
            value: "Y"
        });
        else formdata.push({
            name: "dlvrPckStrYn",
            value: "N"
        });
        formdata.push({
            name: "cpDcAmtForFree",
            value: $("#cpDcAmtForFree").val()
        });
        if ($("#isHomefitnessPrivateGoodsYn").val() == "Y") formdata.push({
            name: "lctNoList",
            value: $("#lctNoList").val()
        });
        if ($("#galaxyClubYn").val() == "Y") formdata.push({
            name: "galaxyClubYn",
            value: $("#galaxyClubYn").val()
        });
        if ($("#ceTrdYn").val() == "Y") formdata.push({
            name: "ceTrdYn",
            value: $("#ceTrdYn").val()
        });
        formdata.push({
            name: "iotOrderYn",
            value: $("#iotOrderYn").val()
        });
        formdata.push({
            name: "carePlusYn",
            value: $("input[name=carePlusYn]").val()
        });
        formdata.push({
            name: "carePlusTp",
            value: $("input[name=carePlusTp]").val()
        });
        formdata.push({
            name: "linkSubCd",
            value: $("input[name=linkSubCd]").val()
        });
        formdata.push({
            name: "careplusPrevAdrsNm",
            value: $("input[name=careplusPrevAdrsNm]").val()
        });
        formdata.push({
            name: "careplusPrevAdrsMobile",
            value: $("input[name=careplusPrevAdrsMobile]").val()
        });
        formdata.push({
            name: "careplusPrevGbNm",
            value: $("input[name=careplusPrevGbNm]").val()
        });
        formdata.push({
            name: "careplusPrevPostNoNew",
            value: $("input[name=careplusPrevPostNoNew]").val()
        });
        formdata.push({
            name: "careplusPrevRoadAddr",
            value: $("input[name=careplusPrevRoadAddr]").val()
        });
        formdata.push({
            name: "careplusPrevRoadDtlAddr",
            value: $("input[name=careplusPrevRoadDtlAddr]").val()
        });
        formdata.push({
            name: "winePckUpYn",
            value: $("input[name=winePckUpYn]").val()
        });
        
		var goodsMid1Obj = $("input[name=goodsMid1]")[0];
		var sidIstmPrdObj = $("input[name=goodsSidIstmPrd]")[0];
		var midTpCdObj = $("input[name=goodsMidTpCd]")[0];
		formdata.push({name : 'goodsMid1', value :$(goodsMid1Obj).val()});
		formdata.push({name : 'sidIstmPrd', value :$(sidIstmPrdObj).val()});
		formdata.push({name : 'midTpCd', value :$(midTpCdObj).val()});
        
        console.dir(formdata);
        console.dir(_orderData);
        var options = {
            url: orderCommon.stContextPath + "xhr/order/insertOrderComplete",
            data: formdata,
            done: function(data) {
                if (data.resultCode == "S") {
                    $("#order_payment_form").attr("action", orderCommon.stContextPath + "order/indexOrderCompletion/");
                    $("#order_payment_form").attr("target", "_self");
                    $("#order_payment_form").attr("method", "post");
                    $("#order_payment_form").submit()
                } else {
                    commonAlert({
                        title: "alert",
                        content: data.resultMsg
                    });
                    openLayer("commonAlert");
                    localStorage.setItem("ing",
                        "N");
                    return
                }
            },
            fail: function() {
                localStorage.setItem("ing", "N")
            }
        };
        ajax.call(options)
    },
    fnetOrderAgree: function() {
        $("#fnetOrderAgree").val("Y");
        closeLayer("popupFmailyAgree")
    },
    getDlvrAmtData: function() {
        var qookerListObj = $(".cartListRst");
        var qookerCartTpCd = "",
            qookerInfo = "",
            qookerCartId = "",
            qookerCompNo = "",
            $pkgDlvrYn = "",
            $pkgDlvrNo = "",
            $pkgOrgDlvrAmt = 0,
            $pkgAddDlvrAmt = 0,
            $pkgDlvrAmt = 0,
            $dlvrcCdtCd = "",
            $dlvrcCdtStdCd = "",
            $dlvrcPayMtdCd = "",
            $dlvrcPlcNo = "",
            $dlvrcStdCd = "",
            $dlvrcBuyPrc = "",
            $dlvrcBuyQty = "",
            $dlvrcDlvrAmt =
                "",
            $dlvrcAddDlvrAmt = 0;
        var compNoArr = [];
        var compNoData;
        if (qookerListObj.length > 0) $(qookerListObj).each(function(k, v) {
            qookerCartId = $(this).attr("data-cart-id");
            qookerCartTpCd = $(this).attr("data-cart-tp-cd");
            if (qookerCartTpCd == "40") {
                qookerInfo = $(this).find("div.order-price");
                qookerCompNo = $(this).attr("data-goods-comp-no");
                compNoData = {
                    cartId: qookerCartId,
                    pkgDlvrYn: $(qookerInfo).find("input[name=pkgDlvrYn]").val(),
                    pkgDlvrNo: $(qookerInfo).find("input[name=pkgDlvrNo]").val(),
                    pkgOrgDlvrAmt: $(qookerInfo).find("input[name=pkgOrgDlvrAmt]").val(),
                    pkgAddDlvrAmt: $(qookerInfo).find("input[name=pkgAddDlvrAmt]").val(),
                    pkgDlvrAmt: $("#dlvrAmt_" + qookerCompNo).val(),
                    dlvrcCdtCd: $(qookerInfo).find("input[name=dlvrcCdtCd]").val(),
                    dlvrcCdtStdCd: $(qookerInfo).find("input[name=dlvrcCdtStdCd]").val(),
                    dlvrcPayMtdCd: $(qookerInfo).find("input[name=dlvrcPayMtdCd]").val(),
                    dlvrcPlcNo: $(qookerInfo).find("input[name=dlvrcPlcNo]").val(),
                    dlvrcStdCd: $(qookerInfo).find("input[name=dlvrcStdCd]").val(),
                    dlvrcBuyPrc: $(qookerInfo).find("input[name=dlvrcBuyPrc]").val(),
                    dlvrcBuyQty: $(qookerInfo).find("input[name=dlvrcBuyQty]").val(),
                    dlvrcDlvrAmt: $(qookerInfo).find("input[name=dlvrcDlvrAmt]").val(),
                    dlvrcAddDlvrAmt: $(qookerInfo).find("input[name=dlvrcAddDlvrAmt]").val()
                };
                compNoArr.push(compNoData)
            }
        });
        return compNoArr
    }
}; 