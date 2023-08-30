var bespokeBase = {
	mdlRight : [],	// 우개폐 모델 코드 배열
    mdlLeft : [],	// 좌개폐 모델 코드 배열
    stContextPath : '',
    // 1도어 손잡이 냉장고 코드 저장
    handleInit : function(){
    	var option = {
    			url: bespokeBase.stContextPath+"xhr/bespoke/handleFridgeGrp",
				dataType: 'json',
				type: 'POST',
				async: false,
				success: function (result) {
					bespokeBase.mdlRight = result.mdlRight;
					bespokeBase.mdlLeft = result.mdlLeft;
					console.log("handleInit_mdlRight [ " + result.mdlRight + " ]");
					console.log("handleInit_mdlLeft [ " + result.mdlLeft + " ]");
					console.log("handleInit_ERR_CNT [ " + result.errCnt + " ]");
				}
		};
		$.ajax(option);
    },
    // 1도어 손잡이 냉장고 코드 확인
    getHandle : function(mdlCode){
    	var result = '';
		if(mdlCode !== null && mdlCode !== undefined) {
    		if(0 < bespokeBase.mdlRight.length && 0 <= bespokeBase.mdlRight.indexOf(mdlCode)) {	// 우개폐
    			result = 'handle_right_active';
    		} else if(0 < bespokeBase.mdlLeft.length && 0 <= bespokeBase.mdlLeft.indexOf(mdlCode)) {	// 좌개폐
    			result = 'handle_left_active';
    		}
    	}
    	
    	return result;    
    }
}

$(document).ready(function () {	
	bespokeBase.stContextPath = $("#viewStContextPath").val();
	// 페이지 로드 시 1도어 손잡이 냉장고 코드 저장
	bespokeBase.handleInit();
});