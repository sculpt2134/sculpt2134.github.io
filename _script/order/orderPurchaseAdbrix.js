var orderPurchaseAdbrix = {
	purchaseEventProc : function(stId){
		let adbrixEventParam = {};
		let adbrixProductList = [];
		let attrModel = {};
		
		if($('div.order-product-list').length > 0){
			$('div.order-product-list').each(function(){
				adbrixProductList.push(orderPurchaseAdbrix.purchaseGoodsInfo($(this)));
			});
		}
		
		let orderSale = adbrixProductList.reduce(function(orderSaleAmt, adbrixProduct){
			let adbrixProductAmt = adbrixProduct.price;
			orderSaleAmt += parseInt(adbrixProductAmt);
			return orderSaleAmt;
		}, 0);
		
		let orderDiscount = adbrixProductList.reduce(function(orderDiscount, adbrixProduct){
			let adbrixProductDiscount = adbrixProduct.discount;
			orderDiscount += parseInt(adbrixProductDiscount);
			return orderDiscount;
		}, 0);
		
		let ordNo = $('input[name=ordNo]').val();
		let ordDeliveryCharge = $('input[name=ordDlvrChargeAmt]').val() == undefined?"0":$('input[name=ordDlvrChargeAmt]').val();
		
        if(stId === '1'){
        	attrModel['service_id'] = "SDC";
        } else if(stId === '122'){
        	attrModel['service_id'] = "GCS";
        }
		
		adbrixEventParam.productList = adbrixProductList;
		adbrixEventParam.orderId = ordNo;
		adbrixEventParam.orderSale = orderSale;
		adbrixEventParam.discount = orderDiscount;
		adbrixEventParam.deliver_charge = ordDeliveryCharge;
		adbrixEventParam.attrModel = attrModel;
		
		let adbrixEventParamJsonStr = JSON.stringify(adbrixEventParam);
		
		//Adbirx Native call
    	window.secapp.purchase(adbrixEventParamJsonStr);
    	
	},
	purchaseGoodsInfo : function(purchaseGoodsObj){
		let purchaseGoodsInfoObj = {};
		let productId = '';
		let productName = '';
		let price = '';
		let prmtDcAmt = '';
		let cpDcAmt = '';
		let discount = '';
		let quantity = '';
		
		productId = $(purchaseGoodsObj).find('input[name=mdlCode]').val();
		productName = $(purchaseGoodsObj).find('input[name=mdlNm]').val();
		price = $(purchaseGoodsObj).find('input[name=saleAmt]').val();
		prmtDcAmt = $(purchaseGoodsObj).find('input[name=prmtDcAmt]').val();
		cpDcAmt = $(purchaseGoodsObj).find('input[name=cpDcAmt]').val();
		discount = String(parseInt(prmtDcAmt) + parseInt(cpDcAmt));
		quantity = $(purchaseGoodsObj).find('input[name=ordQty]').val();
		
		purchaseGoodsInfoObj.productId = productId;
		purchaseGoodsInfoObj.productName = productName;
		purchaseGoodsInfoObj.price = parseInt(price);
		purchaseGoodsInfoObj.discount = parseInt(discount);
		purchaseGoodsInfoObj.quantity = parseInt(quantity);
		
		return purchaseGoodsInfoObj;
		
	},
	purchaseGoodsCategories : function(purchaseGoods){
		let categoryEnNmPathStr = $(purchaseGoods).find('input[name=categoryEnNmPath]').val();
		let categoryEnNmPathArr = [];
		let categoryEnNmPart_1 = "";
		let categoryEnNmPart_2 = "";
		let categoryEnNmPart_3 = "";
		
		if(categoryEnNmPathStr != ''){
			let categoryEnNmPathArr = categoryEnNmPathStr.split(';');
			
			categoryEnNmPart_1 = categoryEnNmPathArr[0] == undefined?"":categoryEnNmPathArr[0];
			categoryEnNmPart_2 = categoryEnNmPathArr[1] == undefined?"":categoryEnNmPathArr[1];
			categoryEnNmPart_3 = categoryEnNmPathArr[2] == undefined?"":categoryEnNmPathArr[2];
			
			return adbrix.onInitialized()
			
		}
		
		return categoryEnNmPathArr;
	}
}