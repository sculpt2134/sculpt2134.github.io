/*
 * Date   : 2016.12.15
 * Author : contentstech
 * Desc   : loading
 */
!function () {

	// 로딩중 설정
	wip.app().config(function ($httpProvider, blockUIConfig) {
		blockUIConfig.templateUrl = wip.uri(wipLogicalPath+'/resources/js/v2/cmm/loading.html');
		blockUIConfig.autoBlock = false;
		blockUIConfig.delay = 0;
		$httpProvider.interceptors.push('loadingIntercepter');
	});

	// 로딩중 Service
	wip.app().factory('loading', function ($rootScope, $timeout, blockUI) {
		return {
			on: function () {
				$(".loadingWrap").show();
				if (!blockUI.isBlocking) {
					blockUI.start();
				}
			},
			off: function () {
				$(".loadingWrap").hide();
				blockUI.stop();
				if (wip.browser[0] == 'I' && blockUI.state().blockCount === 0) {
					$("body").css("cursor", "default").removeAttr("style");
				}
			}
		};
	});

	// 로딩중 Interceptor
	wip.app().factory('loadingIntercepter', function ($q, loading) {
		return {
			request: function (config) {
				loading.on();
				return config;
			},
			requestError: function (rejection) {
				loading.off();
				return $q.rejection;
			},
			response: function (response) {
				loading.off();
				return response || $q.when(response);
			},
			responseError: function (rejection) {
				loading.off();
				return $q.reject(rejection);
			}
		};
	});


} ();