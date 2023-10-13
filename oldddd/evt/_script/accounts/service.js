/*
 * Date   : 2016.12.15
 * Author : Contentstech
 * Desc   : service
 */
!function () {

	/** injecter */
	wip.app().factory('co', function ($injector) {
		return {
			get: function (name) {
				return $injector.get(name);
			}
		};
	});

	// ajax
	wip.app().factory('ajax', function ($q, $http) {
		return {
 			get: function (url, headers) {
				var defered = $q.defer();
				if (url) {
					$http.defaults.headers.post[wipCsrf.headerName] = wipCsrf.token;
					$http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
					if(headers) 
						for(var e in headers)
							$http.defaults.headers.common[e] = headers[e];
					$http.get(url).then(defered.resolve, defered.resolve);
				} else {
					defered.resolve(null);
				}
				return defered.promise;
			},

			post: function (url, param) {
				var defered = $q.defer();
				if (url && param) {
					$http.defaults.headers.post[wipCsrf.headerName] = wipCsrf.token;
					$http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
					$http.post(url + "?v=" + wip.v(), param).then(defered.resolve, defered.resolve);
				} else {
					defered.resolve(null);
				}
				return defered.promise;
			},
			tpl: function (url) {
				var defered = $q.defer();
				if (url) {
					$http.post(url, {}).then(defered.resolve, defered.resolve);
				} else {
					defered.resolve(null);
				}
				return defered.promise;
			},
			form: function (url, param) {
				var defered = $q.defer();
				if (url && param) {
					$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
					$http.post(url, serialize(param)).then(defered.resolve, defered.resolve);
				} else {
					defered.resolve(null);
				}
				return defered.promise;
			}
		};

		function serialize(param) {
			return _.map(param, function (v, k) {
				return k + '=' + v;
			}).join('&');
		}
	});
	
	wip.app().factory('http',function (co){
		var log = co.get('logger').getLogger('http');
		var ajax = co.get('ajax');
		var $window = co.get('$window');

		var o = {};

		o.post = function(url, param) {
			if (!url || !param) {
				return;
			}

			return ajax.post(url, param).then(function(result){
				if (!result) {
					// 네트워크장애 에러
					moveErrorPage("result-"+encodeURIComponent(result+"|"+url+"|"+window.location.pathname));
					return;
				}
				var rsltTrx = (result.headers)? result.headers('reqTrxId'): null;
				if (result.status<200 || result.status>=300) {
					if ( result.status>0 ) {
						// 404, 500 에러
						moveErrorPage("status-"+result.status, encodeURIComponent(rsltTrx+"|"+url+"|"+window.location.pathname));
					}
					return;
				}
				
				result.data.error = result.data.error * 1;
				return result.data;
			});
		};

		
		o.get = function(url) {
			if (!url) {
				return;
			}
			
			var headers = null;
			
			return ajax.get(url, headers).then(function(result){
				if (!result) {
					// 네트워크장애 에러
					moveErrorPage("result-"+encodeURIComponent(result+"|"+url+"|"+window.location.pathname));
					return;
				}
				var rsltTrx = (result.headers)? result.headers('reqTrxId'): null;
				if (result.status<200 || result.status>=300) {
					if ( result.status>0 ) {
						// 404, 500 에러
						moveErrorPage("status-"+result.status, encodeURIComponent(rsltTrx+"|"+url+"|"+window.location.pathname));
					}
					return;
				}
				
				result.data.error = result.data.error * 1;
				return result.data;
			});
		};
		
		return o;

		function moveErrorPage(rslt, rsltTrx) {
			var sUrl = wipLogicalPath+"/error?rslt="+rslt;
			if ( rsltTrx ) {
				sUrl += "&rsltTrx="+rsltTrx;
			}
			$window.location.href = sUrl;
		}
	});

	/** logger */
	wip.app().factory('logger', function ($log) {
		return {
			getLogger: function (logNm) {
				return {
					logNm: logNm,
					out: function () {
						$log.debug.apply($log, _.flatten(['%c [' + logNm + '] ', 'background: #e00; color: #fff', _.toArray(arguments)]));
					},
					info: function () {
						$log.warn.apply($log, _.flatten(['%c [' + logNm + '] ', 'background: #00e; color: #fff', _.toArray(arguments)]));
					}
				};
			}
		};
	});

	// path
	wip.app().factory('path', function () {
		return {
			page: function () {
				return location.pathname.split('#')[0];
			},
			view: function () {
				return location.hash.split('#')[1];
			},
			targetUrl: function (page, view) {
				return wip.path('/' + page + '#' + (view || '/'));
			}
		};
	});

	// location
	wip.app().factory('location', function (co, path, $routeParams, $window, $location, $route) {
		var o = {};

		o.getRouteParam = function () {
			return $routeParams;
		};

		o.makeUrl = function (page, view) {
			return path.targetUrl(page, view);
		};

		o.go = function (page, view) {
			page = page || '';
			view = view || '';

			if (page != path.page()) {
				$window.location.href = o.makeUrl(page, view);
				return;
			}

			if (view != path.view()) {
				$('html, body').stop().animate({ scrollTop: 0 }, 0);
				$location.path(view);
				return;
			}

			$route.reload();
		};

		o.uri = function () {
			return $location.host();
		};

		return o;
	});
	
	// localstorage
	wip.app().factory('wiplocalstorage', function ($window) {
		

		var encryptionKey = $window.location.host;
		var iv = CryptoJS.lib.WordArray.random(128 / 8);
		
		return {
			
			set: function (key, value) {
				$window.localStorage[key] = CryptoJS.AES.encrypt(value, encryptionKey, {iv:iv});;
			},
			get: function (key, defaultValue) {
				if($window.localStorage[key] != null) {
					return CryptoJS.AES.decrypt($window.localStorage[key], encryptionKey, {iv:iv}).toString(CryptoJS.enc.Utf8) || defaultValue;
				} else {
					return null;
				}
			},
			setObject: function (key, value) {
				$window.localStorage[key] = CryptoJS.AES.encrypt(JSON.stringify(value, null, 4), encryptionKey, {iv:iv});;
			},
			getObject: function (key) {
				if($window.localStorage[key] != null) {
					return JSON.parse(CryptoJS.AES.decrypt($window.localStorage[key], encryptionKey, {iv:iv}).toString(CryptoJS.enc.Utf8)) || null;
				} else {
					return null;
				}
			},
			clear: function (key) {
				$window.localStorage.removeItem(key);
			},
			clearAll: function () {
				$window.localStorage.clear();
			}
		};
	});
	
	// sessionstorage
	wip.app().factory('wipsessionstorage', function ($window) {

		try {
			if ( typeof($window.sessionStorage) == 'undefined' ) {
				return null;
			}
		} catch(e) {
			return null;
		}
		var encryptionKey = sJSESSIONID;
		var iv = CryptoJS.lib.WordArray.random(128 / 8);

		return {
			
			set: function (key, value) {
				$window.sessionStorage[key] = CryptoJS.AES.encrypt(value, encryptionKey, {iv:iv});
			},
			get: function (key, defaultValue) {
				if($window.sessionStorage[key] != null) {
					return CryptoJS.AES.decrypt($window.sessionStorage[key], encryptionKey, {iv:iv}).toString(CryptoJS.enc.Utf8) || defaultValue;
				} else {
					return null;
				}
				
			},
			setObject: function (key, value) {
				$window.sessionStorage[key] = CryptoJS.AES.encrypt(JSON.stringify(value, null, 4), encryptionKey, {iv:iv});
			},
			getObject: function (key) {
				if($window.sessionStorage[key] != null) {
					return JSON.parse(CryptoJS.AES.decrypt($window.sessionStorage[key], encryptionKey, {iv:iv}).toString(CryptoJS.enc.Utf8)) || null;
				} else {
					return null;
				}
			},
			clear: function (key) {
				$window.sessionStorage.removeItem(key);
			},
			clearAll: function () {
				$window.sessionStorage.clear();
			}
		};
	});

	wip.app().service('CommonService', function (co, path, $routeParams, $window, $location, $route) {
		var CommonService = this;
		
		CommonService.addLeadingZeros = function(n, length){
			// 출생년도 목록(올해 ~ 120년)
			var str = (n > 0 ? n : -n) + "";
		    var zeros = "";
		    for (var i = length - str.length; i > 0; i--)
		        zeros += "0";
		    zeros += str;
		    return n >= 0 ? zeros : "-" + zeros;
		}
	});

} ();