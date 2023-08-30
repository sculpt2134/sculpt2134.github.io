/*
 * Date   : 2016.12.15
 * Author : contentstech
 * Desc   : config
 */
! function () {

    //wip.app().constant('WIPCMD_SRPTWINCLOSE', 'wipcmd://srptwinclose');
    wip.app().constant('WIPCMD_BTNHIDE', 'wipcmd://btnhide');

    wip.app().config(function ($logProvider, $locationProvider, routeProvider, $httpProvider) {
        $logProvider.debugEnabled(true);
        //		$locationProvider.html5Mode(false).hashPrefix('');
        $locationProvider.html5Mode({ // 약관내 name 앵커 이동안됨 수정.
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });

        $httpProvider.defaults.withCredentials = true;
        // 	routeProvider.resolve({
        // 		clear: function ($timeout, layerPop, $window) {
        // 			// $timeout(function () {
        // 			// 	//layer_popup_container clear...
        // 			// 	$('#layer_popup_container').html('').css('display', '');
        // 			// 	if ($window.tk && $window.tk.now) {
        // 			// 		$window.tk.close();
        // 			// 	}
        // 			// 	layerPop.clear();
        // 			// });
        // 			// return true;
        // 			return true;
        // 		},
        // 		session: function (session) {
        // 			// return session.test();
        // 			return true;
        // 		},
        // 		paramInit: function (location) {
        // 			// return location.init();
        // 			return true;
        // 		}
        // 	});

    });

    wip.app().config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);

}();