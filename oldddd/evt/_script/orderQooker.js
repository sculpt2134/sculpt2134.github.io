/* 큐커식품관 : 지난주 구매수량 TOP 100품목 리스트 */
function getQookerBestGoodsList(){
	var stContextPath = $("#viewStContextPath").val();
	var goodsList = "";
		var options = {
				url : stContextPath+"xhr/order/getQookerBestGoodsList"
				, dataType : "json"
				, type : "POST"
				, async : false
				, complete : function(result) {
					goodsList = result.responseText;
				}
		};
		$.ajax(options);
		return goodsList;
}