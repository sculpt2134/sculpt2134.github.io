var membershipPointManager = {
    init: function() {
        var that = membershipPointManager,
            membershipNo = $("#membershipNo").val(),
            myGrade = $("#membershipGrade").val();
        var options = {
            url: orderCommon.stContextPath + "xhr/membership/policy",
            data: {
                membershipNo: membershipNo,
                membershipGrade: myGrade
            },
            done: function(data) {
                that.data = data;
                membershipPointManager.initGoodsAdditionalPoint();
                membershipPointManager.setOrderGoodsAdditionalPoint();
                membershipPointManager.setCartGoodsAdditonalPoint();
                membershipPointManager.setGainMembershipPointProcess()
            }
        };
        ajax.call(options)
    },
    initGoodsAdditionalPoint: function() {
        membershipPointManager.goodsAdditonalPoint = 0
    },
    setOrderGoodsAdditionalPoint: function() {
        var listOrderItems = $("div.buy-target-goods"),
            that = membershipPointManager,
            goodsAdditonalPoint = 0,
            currentAdditionalPoint = 0;
        if (listOrderItems == undefined) return goodsAdditonalPoint;
        $.each(listOrderItems, function(idx, element) {
            var addtionalPoint = $(element).find("input[name=additionalPoint]").val() == undefined ? 0 : $(element).find("input[name=additionalPoint]").val();
            goodsAdditonalPoint +=
                Math.floor(parseFloat(addtionalPoint))
        });
        if (orderCommon.stGbCd == "10" || orderCommon.stGbCd == "70" || orderCommon.stGbCd == "80") that.goodsAdditonalPoint = goodsAdditonalPoint;
        return true
    },
    setCartGoodsAdditonalPoint: function() {
        var listCartItems = $("input:checked[name=cartIds]"),
            that = membershipPointManager,
            goodsAdditonalPoint = 0,
            currentAdditionalPoint = 0;
        if (listCartItems == undefined) return goodsAdditonalPoint;
        $.each(listCartItems, function(idx, element) {
            var cartElement = $("div.cart-tbl[id=" + $(element).val() + "]");
            var addtionalPoint = $(cartElement).find("input[name=additionalPoint]").val() ==
            undefined ? 0 : $(cartElement).find("input[name=additionalPoint]").val();
            goodsAdditonalPoint += Math.floor(parseFloat(addtionalPoint))
        });
        if (orderCommon.stGbCd == "10" || orderCommon.stGbCd == "70" || orderCommon.stGbCd == "80") that.goodsAdditonalPoint = goodsAdditonalPoint;
        return true
    },
    setGainMembershipPointProcess: function() {
        if (orderCommon.stGbCd == 40 || orderCommon.stGbCd == 90 || orderCommon.stGbCd == 50) return;
        var myGrade = $("#membershipGrade").val();
        if (myGrade == "" || myGrade == undefined) return;
        var buyTargetGoodsArr = $.makeArray($(".buy-target-goods").filter(function(index,
                                                                                   div) {
            return $(div).attr("data-comp-gb-cd") != "40"
        }));
        var compNo = "";
        var compDiffYn = "N";
        $.each(buyTargetGoodsArr, function(index, item) {
            var currGoodsCompNo = $(item).attr("data-goods-comp-no");
            if (index != 0 && compNo != currGoodsCompNo) {
                compDiffYn = "Y";
                return
            }
            compNo = currGoodsCompNo
        });
        var dlvraType = $("#dlvraType").val();
        var grpKey = "";
        if (compDiffYn == "Y" && dlvraType == "1") grpKey = "data-goods-comp-no";
        else if (dlvraType == "2") grpKey = "data-goods-id";
        if (grpKey != "") {
            var gainMemPntTarget = buyTargetGoodsArr.reduce(function(returnDiv,
                                                                     div) {
                var groupKey = $(div).attr(grpKey);
                if (returnDiv[groupKey] === undefined) returnDiv[groupKey] = [];
                returnDiv[groupKey].push(div);
                return returnDiv
            }, {});
            membershipPointManager.setByGoodsGainMembershipPoint(gainMemPntTarget)
        } else membershipPointManager.setGainMembershipPoint(compNo)
    },
    setGainMembershipPoint: function(compNo) {
        var that = membershipPointManager,
            data = membershipPointManager.data;
        if (data == "" || data == undefined) return;
        if ($("#qookerYn").val() == "Y") return;
        var pageType = $("#pageType").val();
        if (pageType ==
            "cart") membershipPointManager.setCartGoodsAdditonalPoint();
        else if (pageType == "order") membershipPointManager.setOrderGoodsAdditionalPoint();
        var payTotalAmt = parseInt($("#order_payment_total_pay_amt").val()),
            gainPoint = 0,
            defaultGainPercentage = data.defaultGainInfo == undefined ? 0 : parseFloat(data.defaultGainInfo.pnt) / 100,
            additionalGainPercentage = data.addtionalGainInfo == undefined ? 0 : parseInt(data.addtionalGainInfo.pnt) / 100,
            addtionalGradeGainPoint = 0,
            priceGainAmount = 0,
            goodsAdditonalPoint = that.goodsAdditonalPoint ==
            undefined ? 0 : that.goodsAdditonalPoint;
        //if (orderCommon.stGbCd == orderCommon.ST_GB_20 || orderCommon.stGbCd == orderCommon.ST_GB_30) 
        	payTotalAmt += parseInt($("#order_payment_dc_svmn_use_amt").val() == undefined ? 0 : $("#order_payment_dc_svmn_use_amt").val());
        var thrdPtyGoodsPayAmt = $.makeArray($(".buy-target-goods").filter(function(index, div) {
            return $(div).attr("data-comp-gb-cd") == "40"
        })).reduce(function(val, div) {
            return val + parseInt($(div).find("input[name=goodsPayAmt]").val())
        }, 0);
        payTotalAmt -= parseInt(thrdPtyGoodsPayAmt ==
        undefined ? 0 : thrdPtyGoodsPayAmt);
        addtionalGradeGainPoint = payTotalAmt * additionalGainPercentage;
        var limitGradeGainPoint = data.myGcdmLimitPoint == undefined ? 0 : parseInt(data.myGcdmLimitPoint.limitPnt);
        if (limitGradeGainPoint < addtionalGradeGainPoint) addtionalGradeGainPoint = limitGradeGainPoint;
        if (orderCommon.stGbCd == "10")
            if (compNo == "312")
                for (var i = 0; i < data.gcdmPriceGainPolicy.length; i++) {
                    var element = data.gcdmPriceGainPolicy[i],
                        amtFrom = parseInt(parseFloat(element.amtFrom)),
                        amtTo = parseInt(parseFloat(element.amtTo)),
                        point = parseInt(parseFloat(element.pnt)),
                        route = element.route;
                    if (payTotalAmt >= amtFrom && payTotalAmt < amtTo && (route == "D2C" || route == "")) {
                        var amtRtDv = element.amtRtDv;
                        if (amtRtDv == "1") priceGainAmount = point;
                        else if (amtRtDv == "2") priceGainAmount = payTotalAmt * (point / 100);
                        break
                    }
                } else {
                if (compNo == "313")
                    for (var i$0 = 0; i$0 < data.gcdmPriceGainPolicy.length; i$0++) {
                        var element$1 = data.gcdmPriceGainPolicy[i$0],
                            amtFrom$2 = parseInt(parseFloat(element$1.amtFrom)),
                            amtTo$3 = parseInt(parseFloat(element$1.amtTo)),
                            point$4 = parseInt(parseFloat(element$1.pnt)),
                            route$5 = element$1.route;
                        if (payTotalAmt >= amtFrom$2 && payTotalAmt < amtTo$3 && (route$5 == "ESTORE" || route$5 == "")) {
                            var amtRtDv$6 = element$1.amtRtDv;
                            if (amtRtDv$6 == "1") priceGainAmount = point$4;
                            else if (amtRtDv$6 == "2") priceGainAmount = payTotalAmt * (point$4 / 100);
                            break
                        }
                    }
            } else if (orderCommon.stGbCd == "70")
            if (orderCommon.stId == "266")
                for (var i$7 = 0; i$7 < data.gcdmPriceGainPolicy.length; i$7++) {
                    var element$8 = data.gcdmPriceGainPolicy[i$7],
                        amtFrom$9 = parseInt(parseFloat(element$8.amtFrom)),
                        amtTo$10 = parseInt(parseFloat(element$8.amtTo)),
                        point$11 = parseInt(parseFloat(element$8.pnt)),
                        route$12 = element$8.route;
                    if (payTotalAmt >= amtFrom$9 && payTotalAmt < amtTo$10 && (route$12 == "B2BEPP" || route$12 == "")) {
                        var amtRtDv$13 = element$8.amtRtDv;
                        if (amtRtDv$13 == "1") priceGainAmount = point$11;
                        else if (amtRtDv$13 == "2") priceGainAmount = payTotalAmt * (point$11 / 100);
                        break
                    }
                }
        
      //멤버쉽포인트 적립금액 별도계산
		var payMembershipAmt = parseInt($("#order_payment_dc_svmn_use_amt").val() == undefined ? 0 : $("#order_payment_dc_svmn_use_amt").val());
		$('#order_payment_membership_save_amt').val(Math.round(payMembershipAmt * defaultGainPercentage));

        gainPoint = payTotalAmt * defaultGainPercentage + addtionalGradeGainPoint + priceGainAmount + goodsAdditonalPoint;
        $("#order_payment_total_save_amt").val(Math.round(gainPoint));
        $("em#order_payment_total_svmn_amt_view.to-be-point").text(format.num(Math.floor(gainPoint)));
        $("em#order_payment_total_save_amt_view.to-be-point").text(format.num(Math.floor(gainPoint)))
    },
    setByGoodsGainMembershipPoint: function(gainMemPntTarget) {
        var that = membershipPointManager,
            data = membershipPointManager.data;
        if (data == "" || data == undefined) return;
        if ($("#qookerYn").val() == "Y") return;
        membershipPointManager.setOrderGoodsAdditionalPoint();
        var totalGainPoint = 0;
        for (var groupKey in gainMemPntTarget) {
            var innerArr = gainMemPntTarget[groupKey];
            var totGoodsPayAmt = innerArr.reduce(function(val, div) {
                return val +
                    parseInt($(div).find("input[name=goodsPayAmt]").val())
            }, 0);
            var totGoodsAdditonalPoint = innerArr.reduce(function(val, div) {
                return val + Math.floor(parseFloat($(div).find("input[name=additionalPoint]").val()))
            }, 0);
            var payTotalAmt = parseInt(totGoodsPayAmt),
                gainPoint = 0,
                defaultGainPercentage = parseFloat(data.defaultGainInfo.pnt) / 100,
                additionalGainPercentage = data.addtionalGainInfo == undefined ? 0 : parseInt(data.addtionalGainInfo.pnt) / 100,
                addtionalGradeGainPoint = 0,
                priceGainAmount = 0,
                goodsAdditonalPoint = totGoodsAdditonalPoint ==
                undefined ? 0 : totGoodsAdditonalPoint;
            addtionalGradeGainPoint = payTotalAmt * additionalGainPercentage;
            var limitGradeGainPoint = data.myGcdmLimitPoint == undefined ? 0 : parseInt(data.myGcdmLimitPoint.limitPnt);
            if (limitGradeGainPoint < addtionalGradeGainPoint) addtionalGradeGainPoint = limitGradeGainPoint;
            if (orderCommon.stGbCd == "10")
                if (groupKey == "312")
                    for (var i = 0; i < data.gcdmPriceGainPolicy.length; i++) {
                        var element = data.gcdmPriceGainPolicy[i],
                            amtFrom = parseInt(parseFloat(element.amtFrom)),
                            amtTo = parseInt(parseFloat(element.amtTo)),
                            point = parseInt(parseFloat(element.pnt)),
                            route = element.route;
                        if (payTotalAmt >= amtFrom && payTotalAmt < amtTo && (route == "D2C" || route == "")) {
                            var amtRtDv = element.amtRtDv;
                            if (amtRtDv == "1") priceGainAmount = point;
                            else if (amtRtDv == "2") priceGainAmount = payTotalAmt * (point / 100);
                            break
                        }
                    } else {
                    if (groupKey == "313")
                        for (var i$14 = 0; i$14 < data.gcdmPriceGainPolicy.length; i$14++) {
                            var element$15 = data.gcdmPriceGainPolicy[i$14],
                                amtFrom$16 = parseInt(parseFloat(element$15.amtFrom)),
                                amtTo$17 = parseInt(parseFloat(element$15.amtTo)),
                                point$18 =
                                    parseInt(parseFloat(element$15.pnt)),
                                route$19 = element$15.route;
                            if (payTotalAmt >= amtFrom$16 && payTotalAmt < amtTo$17 && (route$19 == "ESTORE" || route$19 == "")) {
                                var amtRtDv$20 = element$15.amtRtDv;
                                if (amtRtDv$20 == "1") priceGainAmount = point$18;
                                else if (amtRtDv$20 == "2") priceGainAmount = payTotalAmt * (point$18 / 100);
                                break
                            }
                        }
                } else if (orderCommon.stGbCd == "70")
                if (orderCommon.stId == "266")
                    for (var i$21 = 0; i$21 < data.gcdmPriceGainPolicy.length; i$21++) {
                        var element$22 = data.gcdmPriceGainPolicy[i$21],
                            amtFrom$23 = parseInt(parseFloat(element$22.amtFrom)),
                            amtTo$24 = parseInt(parseFloat(element$22.amtTo)),
                            point$25 = parseInt(parseFloat(element$22.pnt)),
                            route$26 = element$22.route;
                        if (payTotalAmt >= amtFrom$23 && payTotalAmt < amtTo$24 && (route$26 == "B2BEPP" || route$26 == "")) {
                            var amtRtDv$27 = element$22.amtRtDv;
                            if (amtRtDv$27 == "1") priceGainAmount = point$25;
                            else if (amtRtDv$27 == "2") priceGainAmount = payTotalAmt * (point$25 / 100);
                            break
                        }
                    }
            gainPoint = payTotalAmt * defaultGainPercentage + addtionalGradeGainPoint + priceGainAmount + goodsAdditonalPoint;
            totalGainPoint += gainPoint
        }
        $("#order_payment_total_save_amt").val(Math.round(totalGainPoint));
        $("em#order_payment_total_svmn_amt_view.to-be-point").text(format.num(Math.floor(totalGainPoint)));
        $("em#order_payment_total_save_amt_view.to-be-point").text(format.num(Math.floor(totalGainPoint)))
    }
}; 