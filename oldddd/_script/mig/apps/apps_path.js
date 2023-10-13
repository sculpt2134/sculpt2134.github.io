var xmlLandingData;
var commonObj;

(function () {
	/* getElementsByClassName 을 IE8 이하에서 동작하게 하는 코드 */
	if (!document.getElementsByClassName) {
		document.getElementsByClassName = function (cn) {
			var rx = new RegExp("(?:^|\\s)" + cn + "(?:$|\\s)");
			var allT = document.getElementsByTagName("*"), allCN = [], ac = "", i = 0, a;

			while (a = allT[i = i + 1]) {
				ac = a.className;
				if (ac && ac.indexOf(cn) !== -1) {
					if (ac === cn) { allCN[allCN.length] = a; continue; }
					rx.test(ac) ? (allCN[allCN.length] = a) : 0;
				}
			}
			return allCN;
		};
	}

	/* xml request start */
	var xLandingHttp = new XMLHttpRequest(),
		commonJsonHttp = new XMLHttpRequest(),
		countryCode = typeof APPS_SITE_CODE !== "undefined" ? APPS_SITE_CODE : document.querySelector("meta[name='sitecode']").getAttribute("content"),
		sitePath = countryCode + "",
		landingXmlPath = "";

	xLandingHttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			xmlLandingData = this.responseXML;
		}
	};

	commonJsonHttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			commonObj = JSON.parse(this.responseText);
		}
	}

	if (typeof APPS_SERVICE_NAME !== "undefined" && APPS_SERVICE_NAME === "landing") {
		xLandingHttp.open("GET", "//images.samsung.com/is/content/samsung/p5/common/apps/xml/apps_landing" + landingXmlPath + ".xml", true);
		xLandingHttp.send();
	} else {
		commonJsonHttp.open("GET", "//images.samsung.com/is/content/samsung/p5/common/apps/json/common/common_" + sitePath + ".json", true);
		commonJsonHttp.send();
	}
	/* xml request end */
	
	var param = document.getElementsByClassName("apps-js")[0] ? document.getElementsByClassName("apps-js")[0].src.split("?")[1] : false || false;
	var paramVal = (param ? "?" + param : "");
	var myApp = angular.module('myApp', ["ngSanitize"]);

	myApp.factory("keyMapping", function () {

		$("[data-ng-app='myApp']").find("*").each(function () {

			var _this = $(this);
			var keyArray = [];
			var keyArrayExc = {};
			var checked = false;
			var checkedExc = false;

			$.each(this.attributes, function (i, v) {
				if (this.specified) {
					if (v.value.indexOf("{{") > -1 || v.name == "data-ng-bind-html") {
						// {{ }} 형식일 경우
						if (v.value.indexOf("{{") > -1) {
							if (v.name.indexOf("data-") < 0) {
								keyArray.push((v.value.replace(/\{|\}/g, '') + "-" + v.name).replace(/^\s+|\s+$/g, '')); // { , } ,공백 제거
								checked = true;
							} else {
								if (v.value.indexOf("/") > -1) {
									var eachValue = v.value.split("/");
									keyArrayExc[v.name] = (eachValue.toString().replace(/\{|\}/g, '')).replace(/^\s+|\s+$/g, '');
								} else {
									keyArrayExc[v.name] = (v.value.replace(/\{|\}/g, '')).replace(/^\s+|\s+$/g, '');
								}
								checkedExc = true;
							}
						}

						// data-ng-bind-html 형식일 경우
						if (v.name == "data-ng-bind-html") {
							keyArray.push(v.value.replace(/^\s+|\s+$/g, '')); // 공백 제거
							checked = true;
						}
					}
				}
			});

			if (checked) {
				keyArray = keyArray.toString();
				_this.attr("data-key", keyArray);
			}

			if (checkedExc) {
				keyArrayExc = JSON.stringify(keyArrayExc);
				_this.attr("data-key-exc", keyArrayExc);
			}

		});

		$("[data-role='tab-media']").find("figure figcaption").removeAttr("data-key");
	});

	myApp.controller('appsController', function ($scope, $http, keyMapping) {
		if (APPS_JSON_DATA) {
			$scope.apps = APPS_JSON_DATA.service;
			$scope.common = APPS_JSON_DATA.common;

			var P5_mixType = $(document).find("#content").data("type") === "mix" ? true : $('.apps.landing').length > 0 ? "landing" : false;
			var P5_jsName = {
				"plugins": {
					"test": "apps_plugins_qa",
					"live": "apps_plugins"
				},
				"common": {
					"test": P5_mixType === true ? "apps_mix_qa" : P5_mixType === "landing" ? "apps_landing_qa" : "apps_common_qa",
					"live": P5_mixType === true ? "apps_mix" : P5_mixType === "landing" ? "apps_landing" : "apps_common"
				}
			};

			var testFlag = false;

			function appendScript(name){
				var _js = P5_jsName[name].live;
				var scriptElem = document.createElement("script");
				scriptElem.src = "/sec/static/evt/_script/mig/apps/" + _js + ".js" + paramVal;
				document.body.appendChild(scriptElem);
			}

			/*
			function changeCss() {
				$("link.apps-css").each(function () {
					var thisSrc = $(this).attr("href");
					var cssPath = thisSrc.split("/").pop();
					var fileName_css = cssPath.split(".")[0];

					if (fileName_css.indexOf("_qa") < 0) {
						$(this).attr({ "href": "//images.samsung.com/is/content/samsung/p5/common/apps/css/" + fileName_css + "_qa.css" + paramVal });
					}
				});
			}
			if (testFlag) {changeCss();}
			*/

			appendScript("plugins");
			var jsLoadCheck = setInterval(function () {
				if (typeof (APPS_PLUGIN) != 'undefined') {
					if (APPS_PLUGIN == true) {
						appendScript("common");
						clearInterval(jsLoadCheck);
					}
				}
			}, 100);
		}
	});
})();