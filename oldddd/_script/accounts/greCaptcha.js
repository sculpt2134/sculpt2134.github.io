/*
 * Date   : 2017.04.19
 * Author : contentstech
 * Desc   : google recaptcha controller
 */
!function () {
	wip.app().controller('recaptchaController', function (co, $scope, $window) {
		$window.gRecaptchaCallback = function(response){
			$scope.vm.responseCapthcha = response;
			$scope.$apply(); 
		};
		
		$window.gRecaptchaExpiredCallback = function(){
			$scope.vm.responseCapthcha = '';
			$scope.$apply(); 
		};
	});
} ();