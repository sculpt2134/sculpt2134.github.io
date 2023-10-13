var _defaultAddr;
var _orderMemberAddrListData = new Array;
var _fnBuyLimitExcptAddrListData = new Array;
var _multiDvlObj;
var _dvlSaveType;

function dlvrMsgToggle(obj) {
    var parent = $(obj).closest(".order-m-area");
    var selMsg = parent.find(".dlvra_msg_select");
    if ($(selMsg).hasClass("on")) $(selMsg).removeClass("on").hide();
    else $(selMsg).addClass("on").show()
}
var orderOrdr = {
    valid: function() {
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
        $("#order_payment_ordr_mobile").val($("#order_payment_ordr_mobile").val().replace(/[-_ ]/gi,
            ""));
        if (!valid.mobile.test($("#order_payment_ordr_mobile").val().replace(/-/gi, ""))) {
            editMemberInfo();
            $("#order_payment_ordr_mobile").next().html("<p>휴대폰을 정확히 입력해주세요.</p>");
            $("#order_payment_ordr_mobile").next().show();
            $("#order_payment_ordr_mobile").focus();
            return false
        }
        if ($("#order_payment_ordr_email").val() == "") {
            editMemberInfo();
            $("#order_payment_ordr_email").next().show();
            $("#order_payment_ordr_email").focus();
            return false
        }
        $("#order_payment_ordr_email").val($("#order_payment_ordr_email").val().replace(/[ ]/gi,
            ""));
        if (!valid.email.test($("#order_payment_ordr_email").val())) {
            editMemberInfo();
            $("#order_payment_ordr_email").next().show();
            $("#order_payment_ordr_email").focus();
            return false
        }
        return true
    }
};
var orderDlvra = {
    index: 0,
    data: {
        mbrDlvraNo: 0,
        adrsNm: "",
        postNoOld: "",
        postNoNew: "",
        roadAddr: "",
        roadDtlAddr: "",
        prclAddr: "",
        prclDtlAddr: "",
        tel: "",
        mobile: ""
    },
    getCartDefaultAddr: function(mbrDlvraNo) {
        var options = {
            url: orderCommon.stContextPath + "xhr/order/getMemberAddressDefault",
            data: {},
            type: "POST",
            async: false,
            done: function(data) {
                if (data.address == null || data.address == "")
                    if (mbrDlvraNo != null && mbrDlvraNo != "") {
                        var options = {
                            url: orderCommon.stContextPath + "xhr/order/getMemberAddress",
                            data: {
                                mbrDlvraNo: mbrDlvraNo
                            },
                            done: function(result) {
                                if (result.address ==
                                    null || result.address == "") $("#memberNoDeliveryAddress").show();
                                else {
                                    var html = '<p class="delivery-tit"><span id="spanAdrsNm">선택 배송지 : ' + result.address.gbNm + "</span></p>";
                                    html += '<p class="delivery-txt"><span id="spanRoadAddr">(' + result.address.postNoNew + ") " + result.address.roadAddr + "</span></p>";
                                    html += '<p class="delivery-txt"><span id="spanRoadDtlAddr">' + result.address.roadDtlAddr + "</span></p>";
                                    html += '<button type="button" class="btn btn-d btn-type1" onclick="orderDlvra.openAddress(this);return false;">배송지 정보 추가/변경</button>';
                                    $("#memberDeliveryAddress").html(html);
                                    $("#memberDeliveryAddress").show()
                                }
                            }
                        };
                        ajax.call(options)
                    } else $("#memberNoDeliveryAddress").show();
                else {
                    var html = '<p class="delivery-tit"><span id="spanAdrsNm">기본 배송지 : ' + data.address.gbNm + "</span></p>";
                    html += '<p class="delivery-txt"><span id="spanRoadAddr">(' + data.address.postNoNew + ") " + data.address.roadAddr + "</span></p>";
                    html += '<p class="delivery-txt"><span id="spanRoadDtlAddr">' + data.address.roadDtlAddr + "</span></p>";
                    html += '<button type="button" class="btn btn-d btn-type1" onclick="orderDlvra.openAddress(this);return false;">배송지 정보 추가/변경</button>';
                    $("#memberDefaultDeliveryAddress").html(html);
                    $("#memberDefaultDeliveryAddress").show()
                }
            }
        };
        ajax.call(options)
    },
    getDefaultAddr: function() {
        var options = {
            url: orderCommon.stContextPath + "xhr/order/getMemberAddressDefault",
            data: {},
            done: function(data) {
                if (data.address == null || data.address == "") console.log("member Address Empty :::: ");
                else _defaultAddr = data.address
            }
        };
        ajax.call(options)
    },
    memberAddressGbNmList: function(obj, mbrDlvraNo) {
        var options = {
            url: orderCommon.stContextPath + "xhr/order/orderMemberAddressList",
            type: "POST",
            data: {},
            done: function(data) {
                _orderMemberAddrListData = data.memberAddressList;
                var str = "";
                $.each(_orderMemberAddrListData, function(index, item) {
                    if (item.mbrDlvraNo == mbrDlvraNo) str += "<li role='option' class='droplist-item focused' aria-selected='true' onclick='orderDlvra.setMemberAddressInfo(this," + item.mbrDlvraNo + ", event)'>" + item.gbNm + "</li>";
                    else str += "<li role='option' class='droplist-item' onclick='orderDlvra.setMemberAddressInfo(this," + item.mbrDlvraNo + ", event)'>" + item.gbNm + "</li>"
                });
                if ($("#divMultiDelivery ul li").length / $("#divMultiDelivery ul").length < 20) str += "<li role='option' class='droplist-item' onclick='orderDlvra.openAddress(this);' class='btn btn-d btn-type2' data-type='I'>배송지 등록</li>";
                var parent = $(obj).next();
                parent.html(str)
            }
        };
        ajax.call(options)
    },
    fnBuyLimitExcptAddrGbNmList: function(obj, mbrDlvraNo) {
        var options = {
            url: orderCommon.stContextPath + "xhr/order/orderFnBuyLimitExcptAddrList",
            type: "POST",
            data: {},
            done: function(data) {
                _fnBuyLimitExcptAddrListData = data.fnBuyLimitExcptAddr;
                var str = "";
                $.each(_fnBuyLimitExcptAddrListData, function(index, item) {
                    if (item.mbrDlvraNo == mbrDlvraNo) str += "<li role='option' class='droplist-item focused' aria-selected='true' onclick='orderDlvra.setFnBuyLimitExcptAddrInfo(this," + item.mbrDlvraNo + ", event)'>" + item.gbNm + "</li>";
                    else str += "<li role='option' class='droplist-item' onclick='orderDlvra.setFnBuyLimitExcptAddrInfo(this," + item.mbrDlvraNo + ", event)'>" + item.gbNm + "</li>"
                });
                var parent = $(obj).next();
                parent.html(str)
            }
        };
        ajax.call(options)
    },
    setMemberAddressInfo: function(obj,
                                   mbrDlvraNo, event) {
        if (_orderMemberAddrListData == null) return;
        if ($("input[id = dlvraType]").val() == "2" && (orderCommon.stGbCd == "20" || orderCommon.stGbCd == "30" || orderCommon.stGbCd == "40" || orderCommon.stGbCd == "50")) {
            var orgDlvraNm = $(obj).parents("dl").find("button[name=ordDlvraselectBtn]").text();
            var orgDlvrBoxNm = $(obj).parents("dl").attr("name");
            var addrDiffCnt = 0;
            var mbrDlvraNoArr = new Array;
            mbrDlvraNoArr.push(String(mbrDlvraNo));
            $(".delivery-box").each(function(idx, obj) {
                var dlvrBoxNm = $(obj).attr("name");
                if (orgDlvrBoxNm != dlvrBoxNm) mbrDlvraNoArr.push(this.querySelector("[name='multiMemberAddressMbrDlvraNo']").value)
            });
            mbrDlvraNoArr = mbrDlvraNoArr.filter(function(item, index) {
                return mbrDlvraNoArr.indexOf(item) == index
            });
            if (mbrDlvraNoArr.length >= 4) {
                if (orderCommon.stGbCd == "50") openLayer("popupB2bDeliverySeparationInfo");
                else openLayer("popupFnetDeliverySeparationInfo");
                $(obj).parents("dl").find("button[name=ordDlvraselectBtn]").text(orgDlvraNm);
                event.stopImmediatePropagation();
                event.preventDefault();
                return false
            }
        }
        var multiMemberAddress =
            "";
        var arrMultiMemberAddr = "";
        var multiMemberAddressMbrDlvraNo = "";
        var multiMemberAddressPostNoNew = "";
        var multiMemberAddressRoadAddr = "";
        var multiMemberAddressPostNoOld = "";
        var multiMemberAddressPrclAddr = "";
        var multiMemberAddressAdrsNm = "";
        var multiMemberAddressMobile = "";
        $.each(_orderMemberAddrListData, function(index, item) {
            if (item.mbrDlvraNo == mbrDlvraNo) {
                var postNo, addr, dtlAddr;
                if (item.postNoNew != null && item.postNoNew != "") {
                    postNo = item.postNoNew;
                    addr = item.roadAddr;
                    dtlAddr = item.roadDtlAddr
                } else {
                    postNo = item.postNoOld;
                    addr = item.prclAddr;
                    dtlAddr = item.prclDtlAddr
                }
                multiMemberAddress = item.adrsNm + " / " + item.mobile + " / (" + postNo + ")" + addr + " " + dtlAddr;
                arrMultiMemberAddr = item.adrsNm + ";" + item.mobile + ";" + item.tel + ";" + item.postNoNew + ";" + item.roadAddr + ";" + item.roadDtlAddr + ";" + item.postNoOld + ";" + item.prclAddr + ";" + item.prclDtlAddr;
                multiMemberAddressMbrDlvraNo = item.mbrDlvraNo;
                multiMemberAddressPostNoNew = item.postNoNew;
                multiMemberAddressRoadAddr = item.roadAddr;
                multiMemberAddressPostNoOld = item.postNoOld;
                multiMemberAddressPrclAddr =
                    item.prclAddr;
                multiMemberAddressAdrsNm = item.adrsNm;
                multiMemberAddressMobile = item.mobile
            }
        });
        $(obj).parent().parent().parent().find("input[name=multiMemberAddressMbrDlvraNo]").val(multiMemberAddressMbrDlvraNo);
        $(obj).parent().parent().parent().find("input[name=multiMemberAddressPostNoNew]").val(multiMemberAddressPostNoNew);
        $(obj).parent().parent().parent().find("input[name=multiMemberAddressRoadAddr]").val(multiMemberAddressRoadAddr);
        $(obj).parent().parent().parent().find("input[name=multiMemberAddressPostNoOld]").val(multiMemberAddressPostNoOld);
        $(obj).parent().parent().parent().find("input[name=multiMemberAddressPrclAddr]").val(multiMemberAddressPrclAddr);
        $(obj).parent().parent().parent().find("input[name=multiMemberAddressAdrsNm]").val(multiMemberAddressAdrsNm);
        $(obj).parent().parent().parent().find("input[name=multiMemberAddressMobile]").val(multiMemberAddressMobile);
        $(obj).parent().parent().parent().find("input[name=multiMemberAddress]").val(multiMemberAddress);
        $(obj).parent().parent().parent().find("input[name=arrMultiMemberAddr]").val(arrMultiMemberAddr);
        $(obj).parent().parent().parent().find("input[name=extIstHopeDate]").val("");
        fn_extIstHopeDate()
    },
    setFnBuyLimitExcptAddrInfo: function(obj, mbrDlvraNo, event) {
        if (_fnBuyLimitExcptAddrListData == null) return;
        var multiMemberAddress = "";
        var arrMultiMemberAddr = "";
        var multiMemberAddressMbrDlvraNo = "";
        var multiMemberAddressPostNoNew = "";
        var multiMemberAddressRoadAddr = "";
        var multiMemberAddressPostNoOld = "";
        var multiMemberAddressPrclAddr = "";
        var multiMemberAddressAdrsNm = "";
        var multiMemberAddressMobile = "";
        $.each(_fnBuyLimitExcptAddrListData,
            function(index, item) {
                if (item.mbrDlvraNo == mbrDlvraNo) {
                    var postNo, addr, dtlAddr;
                    if (item.postNoNew != null && item.postNoNew != "") {
                        postNo = item.postNoNew;
                        addr = item.roadAddr;
                        dtlAddr = item.roadDtlAddr
                    } else {
                        postNo = item.postNoOld;
                        addr = item.prclAddr;
                        dtlAddr = item.prclDtlAddr
                    }
                    multiMemberAddress = item.adrsNm + " / " + item.mobile + " / (" + postNo + ")" + addr + " " + dtlAddr;
                    arrMultiMemberAddr = item.adrsNm + ";" + item.mobile + ";" + item.tel + ";" + item.postNoNew + ";" + item.roadAddr + ";" + item.roadDtlAddr + ";" + item.postNoOld + ";" + item.prclAddr + ";" +
                        item.prclDtlAddr;
                    multiMemberAddressMbrDlvraNo = item.mbrDlvraNo;
                    multiMemberAddressPostNoNew = item.postNoNew;
                    multiMemberAddressRoadAddr = item.roadAddr;
                    multiMemberAddressPostNoOld = item.postNoOld;
                    multiMemberAddressPrclAddr = item.prclAddr;
                    multiMemberAddressAdrsNm = item.adrsNm;
                    multiMemberAddressMobile = item.mobile
                }
            });
        $(obj).parent().parent().parent().parent().find("input[name=multiMemberAddressMbrDlvraNo]").val(multiMemberAddressMbrDlvraNo);
        $(obj).parent().parent().parent().parent().find("input[name=multiMemberAddressPostNoNew]").val(multiMemberAddressPostNoNew);
        $(obj).parent().parent().parent().parent().find("input[name=multiMemberAddressRoadAddr]").val(multiMemberAddressRoadAddr);
        $(obj).parent().parent().parent().parent().find("input[name=multiMemberAddressPostNoOld]").val(multiMemberAddressPostNoOld);
        $(obj).parent().parent().parent().parent().find("input[name=multiMemberAddressPrclAddr]").val(multiMemberAddressPrclAddr);
        $(obj).parent().parent().parent().parent().find("input[name=multiMemberAddressAdrsNm]").val(multiMemberAddressAdrsNm);
        $(obj).parent().parent().parent().parent().find("input[name=multiMemberAddressMobile]").val(multiMemberAddressMobile);
        $(obj).parent().parent().parent().parent().find("input[name=multiMemberAddress]").val(multiMemberAddress);
        $(obj).parent().parent().parent().parent().find("input[name=arrMultiMemberAddr]").val(arrMultiMemberAddr);
        $(obj).parent().parent().parent().parent().find("input[name=extIstHopeDate]").val("");
        fn_extIstHopeDate()
    },
    setRglrDlvrCycl: function(dlvrCycl) {
        $("#rglrDlvrCycl").val(dlvrCycl + "0")
    },
    clear: function(parent) {
        parent.find("input[name=localPostYn]").val("N");
        parent.find("input[name=dlvraNo]").val("0");
        parent.find("input[name=adrsMobile]").val("");
        parent.find("input[name=adrsTel]").val("");
        parent.find(".order_dlvra").val("");
        if (orderCommon.mbrNo != orderCommon.CONST_NO_MEMBER_NO) {
            parent.find(".dlvra_add_check").show();
            parent.find(".dlvra_copy_check").show()
        }
    },
    reset: function(parent) {
        parent.find("input:radio[name^=dlvraAddrSel][value=default]").prop("checked", false);
        parent.find("input:radio[name^=dlvraAddrSel][value=new]").prop("checked", true);
        this.clear(parent)
    },
    select: function(parent) {
        var type = parent.find("input:radio[name^=dlvraAddrSel]:checked").val();
        if (type == "new") {
            this.clear(parent);
            if (orderCommon.mbrNo != orderCommon.CONST_NO_MEMBER_NO) parent.find(".dlvra_copy_check").show()
        } else if (type == "default") {
            this.setAddr(parent, _defaultAddr, type);
            if (orderCommon.mbrNo != orderCommon.CONST_NO_MEMBER_NO) {
                parent.find("input[name=dlvraNo]").val(_defaultAddr.mbrDlvraNo);
                parent.find(".dlvra_add_check").hide();
                parent.find(".dlvra_copy_check").hide()
            }
        }
    },
    setAddr: function(parent, data, type) {
        if (data == null) return;
        parent.find("input[name=adrsNm]").val(data.adrsNm);
        parent.find("input[name=adrsMobile]").val(format.mobile(data.mobile));
        parent.find("input[name=adrsTel]").val(format.tel(data.tel));
        parent.find("input[name=postNoNew]").val(data.postNoNew);
        parent.find("input[name=postNoOld]").val(format.post(data.postNoOld));
        parent.find("input[name=prclAddr]").val(data.prclAddr);
        parent.find("input[name=prclDtlAddr]").val(data.prclDtlAddr);
        parent.find("input[name=roadAddr]").val(data.roadAddr);
        parent.find("input[name=roadDtlAddr]").val(data.roadDtlAddr);
        parent.find(".dlvra_prcl_addr_info").text(data.prclAddr + " " + data.prclDtlAddr);
        if (type !=
            "default") parent.find("input[name=roadDtlAddr]").focus();
        if (data.postNoNew != null && data.postNoNew != "") this.checkLocalPost(parent)
    },
    checkLocalPost: function(parent) {
        var options = {
            url: orderCommon.stContextPath + "xhr/order/checkLocalPost",
            data: {
                postNoNew: parent.find("input[name=postNoNew]").val(),
                postNoOld: parent.find("input[name=postNoOld]").val()
            },
            done: function(data) {
                var localPostYn = data.localPostYn;
                console.log(localPostYn);
                if (orderCommon.dlvrCpYn == "Y") {
                    orderCommon.dlvrCpYn = "N";
                    $("#order_payment_dc_goods_amt").val(0);
                    $("input[name=cpInfos]").remove();
                    orderDc.calCpAmt(0)
                }
                if (parent.find("input[name=localPostYn]").val() != localPostYn) {
                    goodsSelect.reloadGoodsList(parent);
                    parent.find("input[name=localPostYn]").val(localPostYn)
                }
            }
        };
        ajax.call(options)
    },
    copy: function(parent, yn) {
        if (yn == "Y") {
            parent.find("input[name=adrsMobile]").val($("#order_payment_ordr_mobile").val());
            parent.find("input[name=adrsNm]").val($("#order_payment_ordr_nm").val())
        } else {
            parent.find("input[name=adrsMobile]").val("");
            parent.find("input[name=adrsNm]").val("")
        }
    },
    openAddress: function(obj) {
        if (obj != undefined) _multiDvlObj = obj;
        var options = {
            url: orderCommon.stContextPath + "xhr/order/popupAddressList",
            data: {},
            type: "POST",
            dataType: "html",
            async: false,
            done: function(data) {
                $("#popupShipList").html(data);
                if (!$("#popupShipList").hasClass("active")) openLayer("popupShipList")
            }
        };
        ajax.call(options)
    },
    openOrderAddress: function(ordNo, ordDtlSeq, soNo, oldOrdDlvraNo, dlvrMemo, weddingOrdYn, istHopeDt) {
        ajax.call({
            url: orderCommon.stContextPath + "xhr/mypage/order/isCanChangeAddressIn130State",
            data: {
                ordNo: ordNo,
                oldOrdDlvraNo: oldOrdDlvraNo
            },
            done: function(data) {
                console.log(data);
                if (!data) {
                    commonAlert({
                        content: "해당 주문 건은 이미 상품 준비가 시작되어, 변경이 불가합니다.",
                        callback: function() {
                            window.location.reload()
                        }
                    });
                    openLayer("commonAlert");
                    return
                }
                var options = {
                    url: orderCommon.stContextPath + "xhr/order/popupOrderAddressList",
                    data: {
                        ordNo: ordNo,
                        ordDtlSeq: ordDtlSeq,
                        soNo: soNo,
                        oldOrdDlvraNo: oldOrdDlvraNo,
                        dlvrMemo: dlvrMemo,
                        weddingOrdYn: weddingOrdYn,
                        istHopeDt: istHopeDt
                    },
                    type: "POST",
                    dataType: "html",
                    async: false,
                    done: function(data) {
                        $("#popupShipList").html(data);
                        if (!$("#popupShipList").hasClass("active")) openLayer("popupShipList")
                    }
                };
                ajax.call(options)
            }
        })
    },
    cbAddress: function(data) {
        var parent = $(".order-m-area");
        this.setAddr(parent, data, "");
        if (data.dftYn == "Y") parent.find("input:radio[name^=dlvraAddrSel][value='default']").prop("checked", true);
        else parent.find("input:radio[name^=dlvraAddrSel]").prop("checked", false);
        parent.find(".dlvra_copy_check").hide();
        parent.find(".dlvra_add_check").hide();
        parent.find("input[name=dlvraNo]").val(data.mbrDlvraNo)
    },
    openPost: function(obj) {
        var parent =
            $(obj).closest(".order-m-area");
        this.index = parent.data("index");
        pop.post({
            callBackFnc: "orderDlvra.cbPost",
            closeFnc: "orderDlvra.closePostPop"
        })
    },
    cbPost: function(data) {
        var parent = $(".order-m-area");
        this.data = data;
        this.data.adrsNm = parent.find("input[name=adrsNm]").val();
        this.data.tel = parent.find("input[name=adrsTel]").val();
        this.data.mobile = parent.find("input[name=adrsMobile]").val();
        this.data.prclDtlAddr = "";
        this.data.roadDtlAddr = "";
        this.setAddr(parent, this.data, "");
        parent.find("input:radio[name^=dlvraAddrSel]").prop("checked",
            false)
    },
    closePostPop: function() {
        var parent = $(".order-m-area");
        parent.find("input[name=roadDtlAddr]").focus()
    },
    setMessage: function(obj) {
        var parent = $(obj).closest(".order-m-area");
        var deliveryMsg = $(obj).html();
        parent.find("input[name=dlvrMemo]").val(deliveryMsg);
        dlvrMsgToggle(parent.find("input[name=dlvrMemo]"))
    },
    valid: function() {
        var check = true;
        var frmObj = $("#order_payment_form");
        var validItems = ["adrsNm", "adrsMobile", "gbNm", "roadAddr", "roadDtlAddr"];
        $(".error-msg").hide();
        $.each(validItems, function(i,
                                    item) {
            $(frmObj).find("input[name=" + item + "]").each(function() {
                if ($(this).val() == "") {
                    $(this).next().show();
                    $(this).focus();
                    check = false;
                    return check
                }
                if (item == "adrsMobile")
                    if (!valid.mobile.test($(this).val().replace(/-/gi, ""))) {
                        $(this).next().show();
                        $(this).focus();
                        check = false;
                        return check
                    } return true
            });
            return check
        });
        return check
    },
    setFnBuyLimitExcptAddr: function(fnBuyLimitExcptAddrData) {
        var excptAddr = fnBuyLimitExcptAddrData.split("|");
        $("#spanFnBuyLimitMbrNm").html(excptAddr[1]);
        $("#spanFnBuyLimitMobile").html(excptAddr[5]);
        $("#spanFnBuyLimitGbNm").html(excptAddr[0]);
        $("#spanFnBuyLimitAddr").html("(" + excptAddr[6] + ")" + excptAddr[7] + " " + excptAddr[8]);
        if ($(".info-delivery-single").length > 0) {
            $(".info-delivery-single").find("input[name=adrsNm]").val(excptAddr[1]);
            $(".info-delivery-single").find("input[name=prclAddr]").val(excptAddr[3]);
            $(".info-delivery-single").find("input[name=prclDtlAddr]").val(excptAddr[4]);
            $(".info-delivery-single").find("input[name=adrsMobile]").val(excptAddr[5]);
            $(".info-delivery-single").find("input[name=postNoNew]").val(excptAddr[6]);
            $(".info-delivery-single").find("input[name=postNoOld]").val(excptAddr[6]);
            $(".info-delivery-single").find("input[name=roadAddr]").val(excptAddr[7]);
            $(".info-delivery-single").find("input[name=roadDtlAddr]").val(excptAddr[8])
        }
    },
    loadAddrInfo: function(data) {
        if (data === undefined) return;
        else {
            var postNo = 0;
            var prclAppendHtml = "";
            var roadAddr = "";
            var prclAddr = "";
            var dtl = "";
            postNo = data.zonecode === undefined || data.zonecode === "" ? data.postNoNew : data.zonecode;
            if (postNo === "") postNo = data.postNoOld;
            $("[name='postNo']").val(postNo);
            $("[name='postNoNew']").val(postNo);
            roadAddr = data.roadAddr === undefined || data.roadAddr === "" ? data.roadAddress : data.roadAddr;
            roadAddr = roadAddr === undefined || roadAddr === "" ? data.autoRoadAddress : roadAddr;
            $(".roadAddr_txt").text(roadAddr);
            $("[name='roadAddr']").val(roadAddr);
            if (roadAddr != "" && $("#popupShipManage").is(".active")) $("#dlvrSaveForm").find(".roadAddrDiv").show();
            prclAddr = data.prclAddr === undefined || data.prclAddr === "" ? data.jibunAddress : data.prclAddr;
            if (prclAddr == undefined || prclAddr == "") prclAddr =
                "미기입";
            console.log("prclAddr:" + prclAddr);
            $("[name='prclAddr']").val(prclAddr);
            dtl = data.roadDtlAddr === undefined ? data.prclDtlAddr : data.roadDtlAddr;
            if (dtl === undefined || dtl === "") {
                $("[name='dtlAddr']").focus();
                $("[name='dtlAddr']").val("")
            } else $("[name='dtlAddr']").val(dtl);
            if ($("#carePlusYn").val() === "Y" && !($("#carePlusTp").val() === "I" && !$("[name='careplusPrevPostNoNew']").val())) fn_careplusHopeDate()
        }
    },
    careplusPrevLoadAddrInfo: function(data) {
        if (data === undefined) return;
        else {
            var postNo = 0;
            var prclAppendHtml =
                "";
            var roadAddr = "";
            var dtl = "";
            postNo = data.zonecode === undefined || data.zonecode === "" ? data.postNoNew : data.zonecode;
            if (postNo === "") postNo = data.postNoOld;
            $("[name='careplusPrevPostNoNew']").val(postNo);
            roadAddr = data.roadAddr === undefined || data.roadAddr === "" ? data.roadAddress : data.roadAddr;
            roadAddr = roadAddr === undefined || roadAddr === "" ? data.autoRoadAddress : roadAddr;
            $("[name='careplusPrevRoadAddr']").val(roadAddr);
            if (!!$('input[name="postNoNew"]').val() && !($("#carePlusTp").val() === "I" && !$("[name='careplusPrevPostNoNew']").val())) fn_careplusHopeDate()
        }
    }
};

function fnOnLoadDlvrInfo() {
    var dlvrNo = $("#targetDlvr").val();
    var li = $("#" + dlvrNo);
    var dlvr = fnGetDlvrObj(li);
    var keys = Object.keys(dlvr);
    keys.forEach(function(key) {
        key === "dftYn" ? $("#dlvrSaveForm").find("#" + key).prop("checked", dlvr[key]) : $("#dlvrSaveForm").find("#" + key).val(dlvr[key]);
        if (key === "dftYn") $("#dlvrSaveForm").find("#" + key).prop("disabled", dlvr[key]);
        if (key === "mobile") $("#dlvrSaveForm").find("#" + key).val(dlvr[key].replace(/[-]/gi, ""))
    });
    fnInitAddr(dlvr);
    if ($(".list-shipping ul li").length ===
        0) $("#dlvrSaveForm").find("#dftYn").prop("checked", true)
}

function fnGetDlvrObj(li) {
    var obj = {
        adrsNm: li.find("[name='adrsNm']").text(),
        mobile: li.find("[name='mobile']").text(),
        gbNm: li.find("[name='gbNm']").text(),
        postNoNew: li.find("[name='postNoNew']").text(),
        roadAddr: li.find("[name='roadAddr']").text(),
        roadDtlAddr: li.find("[name='roadDtlAddr']").text(),
        postNoOld: li.find("[name='postNoOld']").text(),
        prclAddr: li.find("[name='prclAddr']").text(),
        prclDtlAddr: li.find("[name='prclDtlAddr']").text(),
        dftYn: li.children("[name='defaultDlvr']").length > 0 ? true : false
    };
    return obj
}

function fnOnClickSaveBtn(btn, parent, type) {
    var self = $(btn);
    var data = {};
    $(".error-msg").hide();
    if (self.data("type") == "I" && $(".list-shipping ul li").length >= 20) {
        $("input[name='popupShipLimitBtn']").trigger("click");
        return
    }
    document.getElementById("dlvrSaveForm").reset();
    $("#dftYn").prop("checked", true);
    $("#popupShipManageBtn").attr("data-parent", parent);
    if (parent != undefined) {
        var dlvraCnt = $("#dlvraMgmtPopUl").find("[data-dftYn=Y]").length;
        if (dlvraCnt > 0) $("#popupShipManage #dftYn").prop("checked", false);
        else $("#popupShipManage #dftYn").prop("checked", true);
        $("#popupShipManage #dftYn").prop("disabled", false)
    }
    if (self.data("type") == "U") {
		parseInt($("input[name='targetDlvr']").val(self.parents("li").attr("id")));
        var id = self.parents("li").attr("id");
        var li = $("#" + id);
        var adrsNm = li.find("[name='adrsNm']").text();
        var mobile = li.find("[name='mobile']").text();
        var gbNm = li.find("[name='gbNm']").text();
        var postNoNew = li.find("[name='postNoNew']").text();
        var roadAddr = li.find("[name='roadAddr']").text();
        var roadDtlAddr = li.find("[name='roadDtlAddr']").text();
        var prclAddr = li.find("[name='prclAddr']").text();
        var dftYn = li.children("[name='defaultDlvr']").length > 0 ? true : false;
        $("#dlvrSaveForm").find("[name=gbNm]").val(gbNm);
        $("#dlvrSaveForm").find("[name=adrsNm]").val(adrsNm);
        $("#dlvrSaveForm").find("[name=mobile]").val(mobile);
        $("#dlvrSaveForm").find("[name=postNo]").val(postNoNew);
        $("#dlvrSaveForm").find("[name=roadAddr]").val(roadAddr);
        $("#dlvrSaveForm").find("[name=prclAddr]").val(prclAddr);
        $("#dlvrSaveForm").find("[name=dtlAddr]").val(roadDtlAddr);
        $("#dlvrSaveForm").find("[name=dftYn]").prop("checked",
            dftYn);
        $("#dlvrSaveForm").find(".roadAddr_txt").text(roadAddr);
        $("#dlvrSaveForm").find(".roadAddrDiv").show()
    }
    openLayer("popupShipManage");
    $(".layer-content").scrollTop(0)
}

function fnSaveDelivery(type) {
    var data = $("#dlvrSaveForm").serializeJson();
    data.dftYn = $("#dlvrSaveForm").find("#dftYn").prop("checked");
    if (fnDlvrValidate(data)) {
        _dvlSaveType = type;
        var dlvrNo = parseInt($("input[name='targetDlvr']").val());
        if (dlvrNo == 0 || isNaN(dlvrNo)) {
            var confirmData = {
                content: "배송지를 등록 하시겠습니까?",
                dataPopupName: "rgstDlvr",
                callback: function() {
                    fnSaveDeliveryProc(_dvlSaveType)
                }
            };
            commonConfirm(confirmData);
            openLayer("commonConfirm")
        } else fnSaveDeliveryProc(type)
    }
}
var getDlvrList = function() {
    var options = {
        url: orderCommon.stContextPath + "xhr/order/orderMemberAddressList",
        type: "POST",
        data: {},
        done: function(data) {
            if (data.memberAddressList != null && data.memberAddressList != undefined) _orderMemberAddrListData = data.memberAddressList
        }
    };
    ajax.call(options)
};

function fnSaveDeliveryProc(type) {
    type = type == undefined || type == "" ? "" : type;
    var data = $("#dlvrSaveForm").serializeJson();
    data.dftYn = $("#dlvrSaveForm").find("#dftYn").prop("checked");
    data = fnCreateDlvra(data);
    $("#dlvrSaveForm").find(".roadAddrDiv").hide();
    var options = {
        url: orderCommon.stContextPath + "xhr/mypage/info/saveDelivery",
        data: data,
        done: function(result) {
            getDlvrList();
            $("#memberNoDeliveryAddress").hide();
            closeLayer("popupShipManage");
            if (type == "order")
                if ($("#popupShipManageBtn").attr("data-parent") ==
                    "dlvra_mgmt") orderDlvra.openAddress();
                else {
                    $(".info-delivery-single").find("input[name=postNoOld]").val(data.postNoOld);
                    $(".info-delivery-single").find("input[name=prclAddr]").val(data.prclAddr);
                    $(".info-delivery-single").find("input[name=prclDtlAddr]").val(data.prclDtlAddr);
                    $(".info-delivery-single").find("input[name=adrsNm]").val(data.adrsNm);
                    $(".info-delivery-single").find("input[name=adrsMobile]").val(data.mobile);
                    $(".info-delivery-single").find("input[name=postNoNew]").val(data.postNoNew);
                    $(".info-delivery-single").find("input[name=roadAddr]").val(data.roadAddr);
                    $(".info-delivery-single").find("input[name=roadDtlAddr]").val(data.roadDtlAddr);
                    $(".info-delivery-single").find("input[name=gbNm]").val(data.gbNm)
                }
            else if ($("#popupShipManageBtn").attr("data-parent") == "dlvra_mgmt") orderDlvra.openAddress();
            else orderDlvra.getCartDefaultAddr()
        }
    };
    ajax.call(options)
}

function fnCreateDlvra(data) {
    data.postNoNew = data.postNo;
    data.postNoOld = data.postNo;
    data.tel = data.mobile;
    data.mbrDlvraNo = $("input[name='targetDlvr']").length > 0 ? parseInt($("input[name='targetDlvr']").val()) : 0;
    data.mobile = format.mobile(data.mobile);
    data.oldMbrDlvraNo = 0;
    data.gbNm = fnOrderXssReplaceEscape(data.gbNm);
    data.roadDtlAddr = data.dtlAddr;
    data.prclDtlAddr = data.dtlAddr;
    $("#dlvrSaveForm").find(".addr").children().each(function() {
        if ($(this).find("span").length > 0) {
            var addr = $(this).text().split("(" + data.postNo +
                ")")[1];
            var key = $(this).prop("class");
            data[key] = addr
        }
    });
    data.dftYn = data.dftYn ? "Y" : "N";
    return data
}

function fnDlvrValidate(data) {
    $(".error-msg").hide();
    var flag = true;
    var keys = Object.keys(data);
    keys.forEach(function(key) {
        if (key.indexOf("dtlAddr") > -1) {
            if (data[key].trim() === "") {
                $("#dlvrSaveForm").find("." + key + "Err").show();
                $("#dlvrSaveForm").find("#" + key).focus();
                flag = false
            }
        } else if (data[key] === "")
            if (key != "postNoOld") {
                $("#dlvrSaveForm").find("." + key + "Err").show();
                $("#dlvrSaveForm").find("#" + key).focus();
                flag = false
            } var frontNumList = new Array("010", "011", "017", "018", "019");
        var frontNum = data["mobile"].substring(0,
            3);
        var reg = new RegExp(/^[0-9]*$/);
        if (key.indexOf("mobile") > -1 && (!(data[key].length == 11 || data[key].length == 10) || frontNumList.indexOf(frontNum) === -1 || !reg.test(data[key]))) {
            $("#dlvrSaveForm").find("#" + key).next().show();
            $("#dlvrSaveForm").find("#" + key).focus();
            flag = false;
            if (!flag) {
                $("#dlvrSaveForm").find(".mobileError").find(data[key] === "" ? "[name='error_empty_msg_mobile']" : "[name='error_msg_mobile']").show();
                $("#dlvrSaveForm").find(".mobileError").find(data[key] === "" ? "[name='error_msg_mobile']" : "[name='error_empty_msg_mobile']").hide();
                $("#dlvrSaveForm").find("[name='mobile']").parents(".inp-box").addClass("error")
            }
        }
        if (key.indexOf("adrsNm") > -1 && data[key].length <= 1) {
            $("#dlvrSaveForm").find("#" + key).next().show();
            $("#dlvrSaveForm").find("#" + key).focus();
            flag = false
        }
        if (key.indexOf("gbNm") > -1 && data[key].length < 1) {
            $("#dlvrSaveForm").find("#" + key).next().show();
            $("#dlvrSaveForm").find("#" + key).focus();
            flag = false
        }
        if (key.indexOf("roadAddr") > -1 && data[key].length < 1) {
            $("#dlvrSaveForm").find("#" + key).next().show();
            $("#dlvrSaveForm").find("#" +
                key).focus();
            flag = false
        } else if (key.indexOf("dtlAddr") > -1 && data[key].trim().length < 1) {
            $("#dlvrSaveForm").find("#" + key).next().show();
            $("#dlvrSaveForm").find("#" + key).focus();
            if ($(".postNoErr").is(":visible")) $(".dtlAddrErr").hide();
            flag = false
        }
    });
    return flag
}

function fnInitAddr(data) {
    if (data === undefined) $("#dlvrSaveForm").find(".roadAddrDiv").hide();
    else {
        var postNo = 0;
        var prclAppendHtml = "";
        var roadAddr = "",
            prclAddr;
        var dtl = "";
        postNo = data.zonecode === undefined || data.zonecode === "" ? data.postNoNew : data.zonecode;
        if (postNo === "") postNo = data.postNoOld;
        $("#dlvrSaveForm").find("#postNo").val(postNo);
        roadAddr = data.roadAddr === undefined || data.roadAddr === "" ? data.roadAddress : data.roadAddr;
        $("#dlvrSaveForm").find(".roadAddr").text(roadAddr);
        $("#dlvrSaveForm").find("#roadAddr").val(roadAddr);
        if (roadAddr != "") $("#dlvrSaveForm").find(".roadAddrDiv").show();
        prclAddr = data.prclAddr === undefined || data.prclAddr === "" ? data.jibunAddress : data.prclAddr;
        if (prclAddr === undefined || prclAddr === "") prclAddr = "미기입";
        $("#dlvrSaveForm").find("#prclAddr").val(prclAddr);
        dtl = data.roadDtlAddr === undefined ? data.prclDtlAddr : data.roadDtlAddr;
        if (dtl === undefined || dtl === "") {
            $("[name='dtlAddr']").focus();
            $("[name='dtlAddr']").val("")
        } else $("[name='dtlAddr']").val(dtl)
    }
}

function fnPostCodeSearch() {
    var options = {
        oncomplete: function(data) {
            var extraAddr = "";
            if (data.userSelectedType === "R") {
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) extraAddr += data.bname;
                if (data.buildingName !== "" && data.apartment === "Y") extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
                if (extraAddr !== "") extraAddr = " (" + extraAddr + ")"
            }
            data.jibunAddress += extraAddr;
            data.roadAddress += extraAddr;
            data.postNoNew = data.zonecode;
            data.postNoOld = data.zonecode;
            fnInitAddr(data)
        },
        width: "100%",
        height: "100%",
        maxSuggestItems: 5
    };
    layerPost.layerEmbed(options)
}

function closeDaumPostcode() {
    element_layer.style.display = "none"
}

function initLayerPosition() {
    var width = 500;
    var height = 350;
    if (fnCheckMobile()) {
        width = 250;
        height = 150
    }
    var borderWidth = 1;
    var left = 10;
    var bottom = 10;
    element_layer.style.width = width + "px";
    element_layer.style.height = height + "px";
    element_layer.style.border = borderWidth + "px solid";
    element_layer.style.left = fnCheckMobile() ? "auto" : left + "%";
    element_layer.style.bottom = bottom + "%"
}

function fnAllShowSwitch(selector) {
    var switchFlag = $(selector).data("flag");
    var text = "";
    if (switchFlag) {
        text = "모두 닫기";
        $(".del_li").show()
    } else {
        text = "모두 보기";
        $(".del_li").hide();
        $("html").scrollTop(0)
    }
    $(selector).text(text);
    $(selector).data("flag", !switchFlag)
}
var changeTargetMbrDlvraNo;

function fnSelectDefaultDelivery(selector) {
    changeTargetMbrDlvraNo = $(selector).parents("li").attr("id");
    var confirmData = {
        content: "선택하신 배송지를 기본 배송지로<br>설정하시겠습니까?",
        dataPopupName: "dftDlvr",
        callback: fnSelectDefaultDeliveryProc
    };
    commonConfirm(confirmData);
    openLayer("commonConfirm")
}

function fnSelectDefaultDeliveryProc() {
    var data = {
        newMbrDlvraNo: parseInt(changeTargetMbrDlvraNo),
        oldMbrDlvraNo: parseInt($("span[name='defaultDlvr']").parents("li").attr("id"))
    };
    if ($("span[name='defaultDlvr']").parents("li").attr("id") === undefined) data.oldMbrDlvraNo = 0;
    var options = {
        url: orderCommon.stContextPath + "xhr/mypage/info/switchDefaultDelivery",
        data: data,
        done: function(result) {
            if (parseInt(result) > 0) {
                orderDlvra.openAddress();
                setDeliveryAddress(changeTargetMbrDlvraNo)
            }
        }
    };
    ajax.call(options)
}

function setDeliveryAddress(mbrDlvraNo) {
    $("#mbrDlvraNo").val(mbrDlvraNo);
    var li = $("#" + mbrDlvraNo);
    var adrsNm = li.find("[name='adrsNm']").text();
    var mobile = li.find("[name='mobile']").text();
    var gbNm = li.find("[name='gbNm']").text();
    var postNoNew = li.find("[name='postNoNew']").text();
    var roadAddr = li.find("[name='roadAddr']").text();
    var roadDtlAddr = li.find("[name='roadDtlAddr']").text();
    var postNoOld = li.find("[name='postNoOld']").text();
    var prclAddr = li.find("[name='prclAddr']").text();
    var prclDtlAddr = li.find("[name='prclDtlAddr']").text();
    var dftYn = li.children("[name='defaultDlvr']").length > 0 ? true : false;
    if (dftYn) $("#spanAdrsNm").text("기본 배송지 : " + gbNm);
    else $("#spanAdrsNm").text("선택 배송지 : " + gbNm);
    $("#spanRoadAddr").text("(" + postNoNew + ") " + roadAddr);
    $("#spanRoadDtlAddr").text(roadDtlAddr);
    $("#spanOrdAdrsNm").text(adrsNm);
    $("#spanOrdAdrsMobile").text(mobile);
    $("#spanOrdGbNm").text(gbNm);
    $("#spanOrdRoadAddr").text("(" + postNoNew + ") " + roadAddr + " " + roadDtlAddr);
    if ($("#deliveryTab2").hasClass("on")) {
        if (_multiDvlObj != null) {
            orderDlvra.setMemberAddressInfo(_multiDvlObj,
                mbrDlvraNo);
            $(_multiDvlObj).parent().prev().text(gbNm)
        }
    } else if ($(".info-delivery-single").length > 0) {
        $(".info-delivery-single").find("input[name=adrsTel]").val(mobile);
        $(".info-delivery-single").find("input[name=postNoOld]").val(postNoOld);
        $(".info-delivery-single").find("input[name=prclAddr]").val(prclAddr);
        $(".info-delivery-single").find("input[name=prclDtlAddr]").val(prclDtlAddr);
        $(".info-delivery-single").find("input[name=adrsNm]").val(adrsNm);
        $(".info-delivery-single").find("input[name=adrsMobile]").val(mobile);
        $(".info-delivery-single").find("input[name=postNoNew]").val(postNoNew);
        $(".info-delivery-single").find("input[name=roadAddr]").val(roadAddr);
        $(".info-delivery-single").find("input[name=roadDtlAddr]").val(roadDtlAddr)
    }
    if ($("#carePlusYn").val() === "Y") fn_careplusHopeDate();
    else //fn_extIstHopeDate();
    closeLayer("popupShipList")
}

function setOrderDeliveryAddress(liObj) {
    var ordNo = $("[name='ordNo']").val();
    var ordDtlSeq = $("[name='dlvrOrdDtlSeq']").val();
    var soNo = $("[name='soNo']").val();
    var ordDlvraNo = $("#oldOrdDlvraNo").val();
    var dlvrMemo = $("#dlvrMemo").val();
    var li = $("#" + $(liObj).parents("li").attr("id"));
    var adrsNm = li.find("[name='adrsNm']").text();
    var mobile = li.find("[name='mobile']").text();
    var gbNm = li.find("[name='gbNm']").text();
    var postNoNew = li.find("[name='postNoNew']").text();
    var roadAddr = li.find("[name='roadAddr']").text();
    var roadDtlAddr = li.find("[name='roadDtlAddr']").text();
    var postNoOld = li.find("[name='postNoOld']").text();
    var prclAddr = li.find("[name='prclAddr']").text();
    var prclDtlAddr = li.find("[name='prclDtlAddr']").text();
    var istHopeDt = $("[name='dlvrIstHopeDt']").val();
    var data = {
        ordNo: ordNo,
        ordDtlSeq: ordDtlSeq,
        soNo: soNo,
        ordDlvraNo: ordDlvraNo,
        dlvrMemo: dlvrMemo,
        adrsNm: adrsNm,
        mobile: mobile,
        gbNm: gbNm,
        postNoNew: postNoNew,
        roadAddr: roadAddr,
        roadDtlAddr: roadDtlAddr,
        postNoOld: postNoOld,
        prclAddr: prclAddr,
        prclDtlAddr: prclDtlAddr,
        ordrMobile: ordrMobile,
        istHopeDt: istHopeDt
    };
    var options = {
        url: orderCommon.stContextPath + "xhr/mypage/order/updateDeliveryAddress",
        data: data,
        done: function(result) {
            closeLayer("popupShipList");
            location.reload()
        }
    };
    ajax.call(options)
}

function setB2bOrderDeliveryAddress(liObj) {
    var ordNo = $("[name='ordNo']").val();
    var ordDtlSeq = $("[name='dlvrOrdDtlSeq']").val();
    var soNo = $("[name='soNo']").val();
    var ordDlvraNo = $("#oldOrdDlvraNo").val();
    var dlvrMemo = $("#dlvrMemo").val();
    var li = $("#" + $(liObj).parents("li").attr("id"));
    var adrsNm = li.find("[name='adrsNm']").text();
    var mobile = li.find("[name='mobile']").text();
    var gbNm = li.find("[name='gbNm']").text();
    var postNoNew = li.find("[name='postNoNew']").text();
    var roadAddr = li.find("[name='roadAddr']").text();
    var roadDtlAddr = li.find("[name='roadDtlAddr']").text();
    var postNoOld = li.find("[name='postNoOld']").text();
    var prclAddr = li.find("[name='prclAddr']").text();
    var prclDtlAddr = li.find("[name='prclDtlAddr']").text();
    var data = {
        ordNo: ordNo,
        ordDtlSeq: ordDtlSeq,
        soNo: soNo,
        ordDlvraNo: ordDlvraNo,
        dlvrMemo: dlvrMemo,
        adrsNm: adrsNm,
        mobile: mobile,
        gbNm: gbNm,
        postNoNew: postNoNew,
        roadAddr: roadAddr,
        roadDtlAddr: roadDtlAddr,
        postNoOld: postNoOld,
        prclAddr: prclAddr,
        prclDtlAddr: prclDtlAddr
    };
    var options = {
        url: orderCommon.stContextPath +
            "xhr/mypage/order/updateB2bDeliveryAddress",
        data: data,
        done: function(result) {
            closeLayer("popupShipList");
            location.reload()
        }
    };
    ajax.call(options)
}

function fnDeleteDelivery() {
    if ($("input[name='targetDlvr']").val() === $("span[name='defaultDlvr']").parents("li").attr("id")) {
        closeLayer("popupShipDelete");
        $("input[name='popupDisableShipDelBtn']").trigger("click");
        $("html").prop("scrollTop", $("html").scrollTop())
    } else {
        var options = {
            url: orderCommon.stContextPath + "xhr/mypage/info/deleteDelivery",
            data: {
                mbrDlvraNo: $("input[name='targetDlvr']").val()
            },
            done: function(result) {
                if (result == 0) {
                    commonAlert({
                        title: "alert",
                        content: "삭제 할 수 없습니다."
                    });
                    openLayer("commonAlert")
                } else closeLayer("popupShipDelete")
            }
        };
        ajax.call(options)
    }
}

function fnCheckMobile() {
    var flag = false;
    var filter = "win16|win32|win64|mac";
    if (navigator.platform) flag = filter.indexOf(navigator.platform.toLowerCase()) < 0;
    return flag
}

function getDifDays(start, end) {
    var dateStart = new Date(start.substring(0, 4), start.substring(4, 6) - 1, start.substring(6, 8));
    var dateEnd = new Date(end.substring(0, 4), end.substring(4, 6) - 1, end.substring(6, 8));
    var difDays = (dateEnd.getTime() - dateStart.getTime()) / (24 * 60 * 60 * 1E3);
    return Math.ceil(difDays)
}

function fnPostLayerPop() {
    var options = {
        oncomplete: function(data) {
            var extraAddr = "";
            if (data.userSelectedType === "R") {
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) extraAddr += data.bname;
                if (data.buildingName !== "" && data.apartment === "Y") extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
                if (extraAddr !== "") extraAddr = " (" + extraAddr + ")"
            }
            data.jibunAddress += extraAddr;
            data.roadAddress += extraAddr;
            data.postNoNew = data.zonecode;
            data.postNoOld = data.zonecode;
            orderDlvra.loadAddrInfo(data)
        },
        width: "100%",
        height: "100%",
        maxSuggestItems: 5
    };
    layerPost.layerEmbed(options)
}

function fnCareplusPrevPostLayerPop() {
    var options = {
        oncomplete: function(data) {
            var extraAddr = "";
            if (data.userSelectedType === "R") {
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) extraAddr += data.bname;
                if (data.buildingName !== "" && data.apartment === "Y") extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
                if (extraAddr !== "") extraAddr = " (" + extraAddr + ")"
            }
            data.jibunAddress += extraAddr;
            data.roadAddress += extraAddr;
            data.postNoNew = data.zonecode;
            data.postNoOld = data.zonecode;
            orderDlvra.careplusPrevLoadAddrInfo(data)
        },
        width: "100%",
        height: "100%",
        maxSuggestItems: 5
    };
    layerPost.layerEmbed(options)
}
$(function() {
    $(document).on("click", ".listview", function() {
        $(this).toggleClass("on");
        var parent = $(this).closest(".order-m-area");
        parent.find(".dlvra_list").toggle()
    });
    $(document).on("click", "input[name^=dlvraAddrSel]", function() {
        var parent = $(this).closest(".order-m-area");
        orderDlvra.select(parent)
    });
    $(document).on("click", "input[name=dlvraCopy]", function() {
        var parent = $(this).closest(".order-m-area");
        if ($(this).prop("checked")) orderDlvra.copy(parent, "Y");
        else orderDlvra.copy(parent, "N")
    });
    $(document).on("click",
        ".dlvra_msg_list > li > a",
        function() {
            orderDlvra.setMessage(this);
            return false
        });
    $(document).on("focusout", "input[name=dlvrMemo]", function() {
        var parent = $(this).closest(".order-m-area");
        var selMsg = parent.find(".dlvra_msg_select");
        if ($(this).val() != "") setTimeout(function() {
            $(selMsg).removeClass("on").hide()
        }, 500)
    });
    $('.order-content input[type="text"]').keydown(function() {
        if (event.keyCode === 13) event.preventDefault()
    })
});