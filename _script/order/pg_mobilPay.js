var mobilPay = {
    open: function() {
        $("#order_payment_form").attr("target", "pgPopup");
        $("#order_payment_form").attr("method", "post");
        $("#order_payment_form").attr("action", orderCommon.stContextPath + "pay/mobilPay/includeMobilPay/");
        $("#order_payment_form").submit()
    },
    cbResult: function(data, type) {
        if (data.status == "S") {
            $("#order_payment_mobilPay_result").val(data.result);
            console.log($("#order_payment_mobilPay_result").val());
            if ($("#isHomefitnessGoodsYn").val() == "Y") orderPay.complete();
            else {
                var openerOrdNo = $("#order_payment_ord_no").val();
                var paramOrdNo = data.ordNo;
                if (undefined != openerOrdNo && openerOrdNo != "" && undefined != paramOrdNo && paramOrdNo != "")
                    if (paramOrdNo.indexOf(openerOrdNo) > -1) orderPay.complete();
                    else {
                        localStorage.setItem("ing", "N");
                        var message = "주문번호가 일치하지 않습니다. 잠시 후 다시 시도해주세요.";
                        $("#popupPgError .layer-content p").text(message);
                        openLayer("popupPgError")
                    }
                else orderPay.complete()
            }
        } else {
            localStorage.setItem("ing", "N");
            $("#popupPgError .layer-content p").text(data.message);
            openLayer("popupPgError")
        }
        if (type != "B");
    },
    close: function(type) {
        var data = {
            status: "F",
            message: "결제가 취소되었습니다."
        };
        mobilPay.cbResult(data, type)
    },
    call: function() {}
};