/*
 * Date   : 2016.12.15
 * Author : Contentstech
 * Desc   : provider
 */
!function () {
	// route
	wip.app().provider('route', function () {
		var _resolve = {};
		this.$get = function () { return {}; };
		this.route = function (data) {
			return {
				controller: data.name,
				controllerAs: data.as || 'vm',
				templateUrl: wip.uri(wip.path(wipLogicalPath+'/resources/js/v1/views/' + data.tpl)),
				resolve: _resolve
			};
		};
		this.resolve = function (v) { _resolve = v || _resolve; };
	});
} ();