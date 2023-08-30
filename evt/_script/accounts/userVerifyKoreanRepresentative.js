/*
 * Date   : 2017.6.13
 * Author : ws617.jeong
 * Desc   : gateCheck
 */
!function () {
	wip.init();
	
	wip.app().controller('mainController', function (co, $scope) {
		var log = co.get('logger').getLogger('main');
		var http = co.get('http');
		var location = co.get('location');
		var sessionStorage = co.get('wipsessionstorage');
		//var loading = co.get('loading');
		//var $timeout = co.get('$timeout');
		
		
		
		$scope.goCheckName = function(event) {
			var currentTargetId = event.target.id;
			//log.out(currentTargetId);
			var userVerifyKoreanRepresentativeVO = {
				nameCheckRepresentativeYN : "N"
			};
			
			if(currentTargetId == "gateCheckName14Over") {
				userVerifyKoreanRepresentativeVO.nameCheckRepresentativeYN = "N";
			} else if(currentTargetId == "gateCheckName14Under") {
				userVerifyKoreanRepresentativeVO.nameCheckRepresentativeYN = "Y";
			}
			
			http.post(wipLogicalPath+'/'+ APPNAME +'/userVerifyKoreanRepresentativeProc', userVerifyKoreanRepresentativeVO).then(function(result){
				if(result.rtnCd == "SUCCESS"){
					window.location.href = result.nextURL;
				}else{
					$scope.err.message = result.rtnMsg;
				}
			});
			
		};
		
		
		
	});
	
} ();
