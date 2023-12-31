var goodsMembershipPointManager = {
    data: null,
    returnData: {
        totalPoint: 0,
        basicRate: 0,
        basicRatePoint: 0,
        addRate: 0,
        addRatePoint: 0,
        aplPoint: 0,
        mdlAddPoint: 0,
        limitPoint: 0,
        membershipGrdNm: null
    },
    get: function(param, callback) {
        var that = goodsMembershipPointManager;
        if (that.data) {
            var callbackData = that.getData(param);
            if (callback) callback(callbackData)
        } else {
            var options = {
                url: stContextPath + "xhr/goods/membershipPolicy",
                data: {
                    goodsListStr: JSON.stringify(param.goods)
                },
                type: "POST",
                done: function(data) {
                    that.data = data.membershipInfo;
                    that.data.checkList = data.checkList;
                    if (param) {
                        var callbackData = that.getData(param);
                        if (callback) callback(callbackData)
                    }
                }
            };
            ajax.call(options)
        }
    },
    getData: function(param) {
        var that = goodsMembershipPointManager;
        if (param) {
            var rtnData = that.getTotalPrice(param);
            return that.formatData(rtnData)
        } else return null
    },
    getTotalPrice: function(param) {
        var that = goodsMembershipPointManager;
        var goods = param.goods;
        var membershipGrd = that.data.membershipGrd;
        var offsetS001 = that.data.offsetS001;
        var offsetS002 = that.data.offsetS002;
        var offsetS003List = that.data.offsetS003List;
        var offsetS004List = that.data.offsetS004List;
        var membershipNo = that.data.membershipNo;
        var limitPoint = that.data.limitPnt ? that.data.limitPnt : 0;
        var isLogin = that.data.mbrNo == "0" ? false : true;
        var allPrice = 0;
        var checkModelList = that.data.checkList;
        for (var i in param.goods) {
            allPrice += ($.isNumeric(param.goods[i].price) ? param.goods[i].price : 0) * param.goods[i].cnt;
            for (var j in checkModelList)
                if (checkModelList[j].goodsId == param.goods[i].goodsId) checkModelList[j].cnt = param.goods[i].cnt
        }
        var rtnData =
            that.returnData;
        rtnData.limitPoint = limitPoint;
        rtnData.membershipGrd = membershipGrd;
        rtnData.membershipGrdNm = that.data.membershipGrdNm;
        rtnData.addRatePoint = 0;
        rtnData.mdlAddPoint = 0;
        rtnData.aplPoint = 0;
        rtnData.basicRatePoint = 0;
        rtnData.isLogin = isLogin;
        if (offsetS001)
            if (offsetS001.amtRtDv == "2") {
                rtnData.basicRate = parseFloat(offsetS001.pnt);
                rtnData.basicRatePoint = Math.floor(allPrice * parseFloat(offsetS001.pnt) / 100)
            } if (that.data.stGbCd == "10") {
            if (offsetS004List && offsetS004List.length > 0)
                for (var i in offsetS004List) {
                    var offsetS004 =
                        offsetS004List[i];
                    var amtFrom = parseInt(parseFloat(offsetS004.amtFrom));
                    var amtTo = parseInt(parseFloat(offsetS004.amtTo));
                    if (allPrice >= amtFrom && allPrice < amtTo) {
                        if (offsetS004.amtRtDv == "1") rtnData.aplPoint = parseInt(parseFloat(offsetS004.pnt));
                        else rtnData.aplPoint = Math.floor(allPrice * parseFloat(offsetS004.pnt) / 100);
                        break
                    }
                }
            if (offsetS003List && offsetS003List.length > 0)
                for (var i in checkModelList)
                    for (j in offsetS003List)
                        if (offsetS003List[j].amtRtDv == "1" && checkModelList[i].mdlCode == offsetS003List[j].model) rtnData.mdlAddPoint +=
                            parseInt(parseFloat(offsetS003List[j].pnt) * checkModelList[i].cnt)
        }
        if (!isLogin) {
            rtnData.totalPoint = rtnData.basicRatePoint + rtnData.aplPoint + rtnData.mdlAddPoint;
            return rtnData
        }
        if (membershipNo)
            if (membershipGrd == "K05" || membershipGrd == "K06") {
                if (offsetS002 && offsetS002.amtRtDv == "2") rtnData.addRate = parseFloat(offsetS002.pnt) / 100;
                if (limitPoint < allPrice * rtnData.addRate) {
                    rtnData.addRatePoint = limitPoint;
                    var rate = limitPoint / allPrice;
                    if (limitPoint <= 0) rtnData.addRate = 0;
                    else if (rate > 0 && rate < .001) rtnData.addRate = .1;
                    else rtnData.addRate = (Math.round(1E3 * rate) / 10).toFixed(1)
                } else {
                    rtnData.addRatePoint = Math.floor(allPrice * rtnData.addRate);
                    rtnData.addRate = rtnData.addRate * 100
                }
                rtnData.totalPoint = rtnData.basicRatePoint + rtnData.addRatePoint + rtnData.aplPoint + rtnData.mdlAddPoint;
                return rtnData
            } else {
                rtnData.totalPoint = rtnData.basicRatePoint + rtnData.aplPoint + rtnData.mdlAddPoint;
                return rtnData
            }
        else {
            rtnData.totalPoint = 0;
            return rtnData
        }
    },
    formatData: function(rtnData) {
        rtnData.totalPoint = format.num(rtnData.totalPoint);
        rtnData.basicRatePoint =
            format.num(rtnData.basicRatePoint);
        rtnData.addRatePoint = format.num(rtnData.addRatePoint);
        rtnData.mdlAddPoint = format.num(rtnData.mdlAddPoint);
        rtnData.limitPoint = format.num(rtnData.limitPoint);
        rtnData.aplPoint = format.num(rtnData.aplPoint);
        rtnData.membershipGrdNm = rtnData.membershipGrdNm;
        return rtnData
    }
};