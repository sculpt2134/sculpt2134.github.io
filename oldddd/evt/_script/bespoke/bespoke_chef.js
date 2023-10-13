//;(function(win,doc,callback){'use strict';callback=callback||function(){};function detach(){if(doc.addEventListener){doc.removeEventListener('DOMContentLoaded',completed);}else{doc.detachEvent('onreadystatechange',completed);}}function completed(){if(doc.addEventListener||event.type==='load'||doc.readyState==='complete'){detach();callback(window,window.jQuery);}}function init(){if (doc.addEventListener){doc.addEventListener('DOMContentLoaded',completed);}else{doc.attachEvent('onreadystatechange',completed);}}init();})(window,document,function(win,$){
	// chef - 구매하기 페이지  //////
// storeCd , fixedMatchAjax.do, myModelInfoAjax.do
// 키엔호 파라미터 있을 경우 해당 위치로 이동
// 2020-07-01 cookieName 수정
// 200814-모델코드
// 2021 김치 플러스 4도어 추가
// 'year': '2020' 2021 김치 4도어 추가
	function checkQa2(){
	    var returnVal = false;
	    if(window.location.href.indexOf("aem.samsung.com/editor.html") ==  -1
	        && window.location.href.indexOf("aem.samsung.com/content") ==  -1){
	       returnVal =  true;
	    }
	    return returnVal;
	}
	if(checkQa2()){
	    $('#js_text').hide();
	}


	var $ly_tab_color02 = $('.edition_tab_color_chef>a');
	$ly_tab_color02.on('click',function(){
	    $ly_tab_color02.removeClass('active');
	    $(this).addClass('active');
	    $('.color_info_wrap_chef').hide();
	    $("#"+$(this).data('id')).show();
	});
	$('#layer04 .btn-close').on('click',function(){
	    $ly_tab_color02.removeClass('active');
	    $('.edition_tab_color_chef>a:first-child').addClass('active');
	    $('.color_info_wrap_chef').hide();
	    $("#colorChef01").show();
	});

	/**
	 * Swiper 5.3.8
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * http://swiperjs.com
	 *
	 * Copyright 2014-2020 Vladimir Kharlampidi
	 *
	 * Released under the MIT License
	 * Released on: April 24, 2020
	 */
	//!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r||r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter((function(e,t){return t>0})),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},filter:function(e){for(var t=[],s=0;s<this.length;s+=1)e.call(this[s],s,this[s])&&t.push(this[s]);return new i(t)},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a,r=this;for(i=0;i<e.length;i+=1){var n=s(e[i]);for(a=0;a<n.length;a+=1)r[r.length]=n[a],r.length+=1}return r},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach((function(e){s.fn[e]=s.fn[e]||r[e]}));var n={deleteProps:function(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter((function(e){return""!==e}))).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var r=Object.keys(Object(a)),o=0,l=r.length;o<l;o+=1){var d=r[o],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(n.isObject(i[d])&&n.isObject(a[d])?n.extend(i[d],a[d]):!n.isObject(i[d])&&n.isObject(a[d])?(i[d]={},n.extend(i[d],a[d])):i[d]=a[d])}}return i}},o={touch:t.Modernizr&&!0===t.Modernizr.touch||!!(t.navigator.maxTouchPoints>0||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!!t.PointerEvent&&"maxTouchPoints"in t.navigator&&t.navigator.maxTouchPoints>0,observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t},l=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach((function(e){t.on(e,t.params.on[e])}))},d={components:{configurable:!0}};l.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},l.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];s.off(e,a),a.f7proxy&&delete a.f7proxy,t.apply(s,i)}return a.f7proxy=t,s.on(e,a,i)},l.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},l.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;if(!r.eventsListeners)return r;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r);var n=Array.isArray(i)?i:i.split(" ");return n.forEach((function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach((function(e){t.push(e)})),t.forEach((function(e){e.apply(a,s)}))}})),r},l.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&n.extend(e,s.params)}))},l.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach((function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i})),s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))},d.components.set=function(e){this.use&&this.use(e)},l.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+n.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach((function(t){s.prototype[t]=e.proto[t]})),e.static&&Object.keys(e.static).forEach((function(t){s[t]=e.static[t]})),e.install&&e.install.apply(s,t),s},l.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach((function(e){return s.installModule(e)})),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(l,d);var h={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),n.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,o=this.virtual&&e.virtual.enabled,l=o?this.virtual.slides.length:this.slides.length,d=i.children("."+this.params.slideClass),h=o?this.virtual.slides.length:d.length,p=[],c=[],u=[];function v(t){return!e.cssMode||t!==d.length-1}var f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,T=0;if(void 0!==s){var E,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(E=Math.floor(h/e.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(E=Math.max(E,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,P=E/M,z=Math.floor(h/e.slidesPerColumn),k=0;k<h;k+=1){S=0;var $=d.eq(k);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;if("row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){var O=Math.floor(k/(e.slidesPerGroup*e.slidesPerColumn)),A=k-e.slidesPerColumn*e.slidesPerGroup*O,G=0===O?e.slidesPerGroup:Math.min(Math.ceil((h-O*M*e.slidesPerGroup)/M),e.slidesPerGroup);L=(I=A-(D=Math.floor(A/G))*G+O*e.slidesPerGroup)+D*E/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})}else"column"===e.slidesPerColumnFill?(D=k-(I=Math.floor(k/M))*M,(I>z||I===z&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1)):I=k-(D=Math.floor(k/P))*P;$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px")}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var H=t.getComputedStyle($[0],null),B=$[0].style.transform,N=$[0].style.webkitTransform;if(B&&($[0].style.transform="none"),N&&($[0].style.webkitTransform="none"),e.roundLengths)S=this.isHorizontal()?$.outerWidth(!0):$.outerHeight(!0);else if(this.isHorizontal()){var X=parseFloat(H.getPropertyValue("width")),V=parseFloat(H.getPropertyValue("padding-left")),Y=parseFloat(H.getPropertyValue("padding-right")),F=parseFloat(H.getPropertyValue("margin-left")),W=parseFloat(H.getPropertyValue("margin-right")),R=H.getPropertyValue("box-sizing");S=R&&"border-box"===R?X+F+W:X+V+Y+F+W}else{var q=parseFloat(H.getPropertyValue("height")),j=parseFloat(H.getPropertyValue("padding-top")),K=parseFloat(H.getPropertyValue("padding-bottom")),U=parseFloat(H.getPropertyValue("margin-top")),_=parseFloat(H.getPropertyValue("margin-bottom")),Z=H.getPropertyValue("box-sizing");S=Z&&"border-box"===Z?q+U+_:q+j+K+U+_}B&&($[0].style.transform=B),N&&($[0].style.webkitTransform=N),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),d[k]&&(this.isHorizontal()?d[k].style.width=S+"px":d[k].style.height=S+"px");d[k]&&(d[k].swiperSlideSize=S),u.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==k&&(y=y-s/2-w),0===k&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),T%e.slidesPerGroup==0&&p.push(y),c.push(y)):(e.roundLengths&&(y=Math.floor(y)),(T-Math.min(this.params.slidesPerGroupSkip,T))%this.params.slidesPerGroup==0&&p.push(y),c.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,T+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),e.setWrapperSize&&(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*E,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var Q=0;Q<p.length;Q+=1){var J=p[Q];e.roundLengths&&(J=Math.floor(J)),p[Q]<this.virtualSize+p[0]&&C.push(J)}p=C}if(!e.centeredSlides){C=[];for(var ee=0;ee<p.length;ee+=1){var te=p[ee];e.roundLengths&&(te=Math.floor(te)),p[ee]<=this.virtualSize-s&&C.push(te)}p=C,Math.floor(this.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-s)}if(0===p.length&&(p=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?d.filter(v).css({marginLeft:w+"px"}):d.filter(v).css({marginRight:w+"px"}):d.filter(v).css({marginBottom:w+"px"})),e.centeredSlides&&e.centeredSlidesBounds){var ie=0;u.forEach((function(t){ie+=t+(e.spaceBetween?e.spaceBetween:0)}));var se=(ie-=e.spaceBetween)-s;p=p.map((function(e){return e<0?-f:e>se?se+m:e}))}if(e.centerInsufficientSlides){var ae=0;if(u.forEach((function(t){ae+=t+(e.spaceBetween?e.spaceBetween:0)})),(ae-=e.spaceBetween)<s){var re=(s-ae)/2;p.forEach((function(e,t){p[t]=e-re})),c.forEach((function(e,t){c[t]=e+re}))}}n.extend(this,{slides:d,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),h!==l&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),c.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)this.visibleSlides.each((function(e,t){i.push(t)}));else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,a=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var r=-e;a&&(r=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(t.centeredSlides?this.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var d=-(r-o.swiperSlideOffset),h=d+this.slidesSizesGrid[n];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(n),i.eq(n).addClass(t.slideVisibleClass))}o.progress=a?-l:l}this.visibleSlides=s(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,o=this.isEnd,l=r,d=o;0===s?(a=0,r=!0,o=!0):(r=(a=(e-this.minTranslate())/s)<=0,o=a>=1),n.extend(this,{progress:a,isBeginning:r,isEnd:o}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!l&&this.emit("reachBeginning toEdge"),o&&!d&&this.emit("reachEnd toEdge"),(l&&!r||d&&!o)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,o=this.activeIndex,l=this.realIndex,d=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var c=Math.min(r.slidesPerGroupSkip,h);t=c+Math.floor((h-c)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),h!==o){var u=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);n.extend(this,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),l!==u&&this.emit("realIndexChange"),(this.initialized||this.params.runCallbacksOnInit)&&this.emit("slideChange")}else t!==d&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=n.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,o=0,l=0;this.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-o:-l:s.virtualTranslate||a.transform("translate3d("+o+"px, "+l+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?o:l;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){var r;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var n=this,o=n.params,l=n.wrapperEl;if(n.animating&&o.preventInteractionOnTransition)return!1;var d,h=n.minTranslate(),p=n.maxTranslate();if(d=s&&e>h?h:s&&e<p?p:e,n.updateProgress(d),o.cssMode){var c=n.isHorizontal();return 0===t?l[c?"scrollLeft":"scrollTop"]=-d:l.scrollTo?l.scrollTo(((r={})[c?"left":"top"]=-d,r.behavior="smooth",r)):l[c?"scrollLeft":"scrollTop"]=-d,!0}return 0===t?(n.setTransition(0),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,i&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}};var c={setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}};var u={slideTo:function(e,t,i,s){var a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var r=this,n=e;n<0&&(n=0);var o=r.params,l=r.snapGrid,d=r.slidesGrid,h=r.previousIndex,p=r.activeIndex,c=r.rtlTranslate,u=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1),(p||o.initialSlide||0)===(h||0)&&i&&r.emit("beforeSlideChangeStart");var m,g=-l[f];if(r.updateProgress(g),o.normalizeSlideIndex)for(var b=0;b<d.length;b+=1)-Math.floor(100*g)>=Math.floor(100*d[b])&&(n=b);if(r.initialized&&n!==p){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(p||0)!==n)return!1}if(m=n>p?"next":n<p?"prev":"reset",c&&-g===r.translate||!c&&g===r.translate)return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(i,m),r.transitionEnd(i,m)),!1;if(o.cssMode){var w=r.isHorizontal(),y=-g;return c&&(y=u.scrollWidth-u.offsetWidth-y),0===t?u[w?"scrollLeft":"scrollTop"]=y:u.scrollTo?u.scrollTo(((a={})[w?"left":"top"]=y,a.behavior="smooth",a)):u[w?"scrollLeft":"scrollTop"]=y,!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.transitionEnd(i,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map((function(e){return l(e)})),c=(n.map((function(e){return l(e)})),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===c&&s.cssMode&&r.forEach((function(e){!c&&h>=e&&(c=e)})),void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[n]){var l=this.snapGrid[n];o-l>(this.snapGrid[n+1]-l)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];o-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,o=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?o<t.loopedSlides-r/2||o>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-r?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}};var v={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each((function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)}));for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,o=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var l=-n[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l)}this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};var f={setGrabCursor:function(e){if(!(o.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){o.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}};var m,g,b,w,y,x,T,E,S,C,M,P,z,k,$,L={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&o.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,l=[],d=r-1;d>=e;d-=1){var h=this.slides.eq(d);h.remove(),l.unshift(h)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<l.length;c+=1)i.append(l[c]);s.loop&&this.loopCreate(),s.observer&&o.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},I=(m=t.navigator.platform,g=t.navigator.userAgent,b={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!t.cordova&&!t.phonegap),phonegap:!(!t.cordova&&!t.phonegap),electron:!1},w=t.screen.width,y=t.screen.height,x=g.match(/(Android);?[\s\/]+([\d.]+)?/),T=g.match(/(iPad).*OS\s([\d_]+)/),E=g.match(/(iPod)(.*OS\s([\d_]+))?/),S=!T&&g.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=g.indexOf("MSIE ")>=0||g.indexOf("Trident/")>=0,M=g.indexOf("Edge/")>=0,P=g.indexOf("Gecko/")>=0&&g.indexOf("Firefox/")>=0,z="Win32"===m,k=g.toLowerCase().indexOf("electron")>=0,$="MacIntel"===m,!T&&$&&o.touch&&(1024===w&&1366===y||834===w&&1194===y||834===w&&1112===y||768===w&&1024===y)&&(T=g.match(/(Version)\/([\d.]+)/),$=!1),b.ie=C,b.edge=M,b.firefox=P,x&&!z&&(b.os="android",b.osVersion=x[2],b.android=!0,b.androidChrome=g.toLowerCase().indexOf("chrome")>=0),(T||S||E)&&(b.os="ios",b.ios=!0),S&&!E&&(b.osVersion=S[2].replace(/_/g,"."),b.iphone=!0),T&&(b.osVersion=T[2].replace(/_/g,"."),b.ipad=!0),E&&(b.osVersion=E[3]?E[3].replace(/_/g,"."):null,b.ipod=!0),b.ios&&b.osVersion&&g.indexOf("Version/")>=0&&"10"===b.osVersion.split(".")[0]&&(b.osVersion=g.toLowerCase().split("version/")[1].split(" ")[0]),b.webView=!(!(S||T||E)||!g.match(/.*AppleWebKit(?!.*Safari)/i)&&!t.navigator.standalone)||t.matchMedia&&t.matchMedia("(display-mode: standalone)").matches,b.webview=b.webView,b.standalone=b.webView,b.desktop=!(b.ios||b.android)||k,b.desktop&&(b.electron=k,b.macos=$,b.windows=z,b.macos&&(b.os="macos"),b.windows&&(b.os="windows")),b.pixelRatio=t.devicePixelRatio||1,b);function D(i){var a=this.touchEventsData,r=this.params,o=this.touches;if(!this.animating||!r.preventInteractionOnTransition){var l=i;l.originalEvent&&(l=l.originalEvent);var d=s(l.target);if(("wrapper"!==r.touchEventsTarget||d.closest(this.wrapperEl).length)&&(a.isTouchEvent="touchstart"===l.type,(a.isTouchEvent||!("which"in l)||3!==l.which)&&!(!a.isTouchEvent&&"button"in l&&l.button>0||a.isTouched&&a.isMoved)))if(r.noSwiping&&d.closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||d.closest(r.swipeHandler)[0]){o.currentX="touchstart"===l.type?l.targetTouches[0].pageX:l.pageX,o.currentY="touchstart"===l.type?l.targetTouches[0].pageY:l.pageY;var h=o.currentX,p=o.currentY,c=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,u=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(!c||!(h<=u||h>=t.screen.width-u)){if(n.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=p,a.touchStartTime=n.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==l.type){var v=!0;d.is(a.formElements)&&(v=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==d[0]&&e.activeElement.blur();var f=v&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||f)&&l.preventDefault()}this.emit("touchStart",l)}}}}function O(t){var i=this.touchEventsData,a=this.params,r=this.touches,o=this.rtlTranslate,l=t;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==l.type){var d="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),h="touchmove"===l.type?d.pageX:l.pageX,p="touchmove"===l.type?d.pageY:l.pageY;if(l.preventedByNestedSwiper)return r.startX=h,void(r.startY=p);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(n.extend(r,{startX:h,startY:p,currentX:h,currentY:p}),i.touchStartTime=n.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(p<r.startY&&this.translate<=this.maxTranslate()||p>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<r.startX&&this.translate<=this.maxTranslate()||h>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&l.target===e.activeElement&&s(l.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){r.currentX=h,r.currentY=p;var c=r.currentX-r.startX,u=r.currentY-r.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(u,2))<this.params.threshold)){var v;if(void 0===i.isScrolling)this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(v=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?v>a.touchAngle:90-v>a.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,a.cssMode||l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),i.isMoved=!0;var f=this.isHorizontal()?c:u;r.diff=f,f*=a.touchRatio,o&&(f=-f),this.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=a.resistanceRatio;if(a.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>this.minTranslate()?(m=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<this.maxTranslate()&&(m=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-f,g))),m&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(f)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&!a.cssMode&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:n.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",l)}function A(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,o=t.$wrapperEl,l=t.slidesGrid,d=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=n.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap click",h),u<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",h)),i.lastClickTime=n.now(),n.nextTick((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||n.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T,E=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var C,M=0;M<d.length;M+=1)if(d[M]>-y){C=M;break}y=-(y=Math.abs(d[C]-y)<Math.abs(d[C-1]-y)||"next"===t.swipeDirection?d[C]:d[C-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),z=t.slidesSizesGrid[t.activeIndex];b=P<z?s.speed:P<2*z?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&E?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),setTimeout((function(){t.setTranslate(x),o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var k=0,$=t.slidesSizesGrid[0],L=0;L<l.length;L+=L<s.slidesPerGroupSkip?1:s.slidesPerGroup){var I=L<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[L+I]?p>=l[L]&&p<l[L+I]&&(k=L,$=l[L+I]-l[L]):p>=l[L]&&(k=L,$=l[l.length-1]-l[l.length-2])}var D=(p-l[k])/$,O=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(D>=s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k)),"prev"===t.swipeDirection&&(D>1-s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(h.target===t.navigation.nextEl||h.target===t.navigation.prevEl)?h.target===t.navigation.nextEl?t.slideTo(k+O):t.slideTo(k):("next"===t.swipeDirection&&t.slideTo(k+O),"prev"===t.swipeDirection&&t.slideTo(k))}}}function G(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function H(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this.wrapperEl,t=this.rtlTranslate;this.previousTranslate=this.translate,this.isHorizontal()?this.translate=t?e.scrollWidth-e.offsetWidth-e.scrollLeft:-e.scrollLeft:this.translate=-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var i=this.maxTranslate()-this.minTranslate();(0===i?0:(this.translate-this.minTranslate())/i)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}var N=!1;function X(){}var V={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},Y={update:h,translate:p,transition:c,slide:u,loop:v,grabCursor:f,manipulation:L,events:{attachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl;this.onTouchStart=D.bind(this),this.onTouchMove=O.bind(this),this.onTouchEnd=A.bind(this),t.cssMode&&(this.onScroll=B.bind(this)),this.onClick=H.bind(this);var r=!!t.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,r),e.addEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("touchstart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,this.onTouchStart,n),s.addEventListener(i.move,this.onTouchMove,o.passiveListener?{passive:!1,capture:r}:r),s.addEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.addEventListener(i.cancel,this.onTouchEnd,n),N||(e.addEventListener("touchstart",X),N=!0)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,r),e.addEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),t.cssMode&&a.addEventListener("scroll",this.onScroll),t.updateOnWindowResize?this.on(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):this.on("observerUpdate",G,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r=!!t.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,r),e.removeEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("onTouchStart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,this.onTouchStart,n),s.removeEventListener(i.move,this.onTouchMove,r),s.removeEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.removeEventListener(i.cancel,this.onTouchEnd,n)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,r),e.removeEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),t.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=this.$el,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var o=this.getBreakpoint(r);if(o&&this.currentBreakpoint!==o){var l=o in r?r[o]:void 0;l&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=l[e];void 0!==t&&(l[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=l||this.originalParams,h=s.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"):!h&&p&&(a.addClass(s.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"));var c=d.direction&&d.direction!==s.direction,u=s.loop&&(d.slidesPerView!==s.slidesPerView||c);c&&t&&this.changeDirection(),n.extend(this.params,d),n.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=o,u&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){if(e){var i=!1,s=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var i=parseFloat(e.substr(1));return{value:t.innerHeight*i,point:e}}return{value:e,point:e}}));s.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var a=0;a<s.length;a+=1){var r=s[a],n=r.point;r.value<=t.innerWidth&&(i=n)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&(a.push("multirow"),"column"===t.slidesPerColumnFill&&a.push("multirow-column")),I.android&&a.push("android"),I.ios&&a.push("ios"),t.cssMode&&a.push("css-mode"),a.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},F={},W=function(e){function t(){for(var i,a,r,l=[],d=arguments.length;d--;)l[d]=arguments[d];1===l.length&&l[0].constructor&&l[0].constructor===Object?r=l[0]:(a=(i=l)[0],r=i[1]),r||(r={}),r=n.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(Y).forEach((function(e){Object.keys(Y[e]).forEach((function(i){t.prototype[i]||(t.prototype[i]=Y[e][i])}))}));var h=this;void 0===h.modules&&(h.modules={}),Object.keys(h.modules).forEach((function(e){var t=h.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in r)||!("enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}}));var p=n.extend({},V);h.useModulesParams(p),h.params=n.extend({},p,F,r),h.originalParams=n.extend({},h.params),h.passedParams=n.extend({},r),h.$=s;var c=s(h.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each((function(e,i){var s=n.extend({},r,{el:i});u.push(new t(s))})),u}var v,f,m;return a.swiper=h,c.data("swiper",h),a&&a.shadowRoot&&a.shadowRoot.querySelector?(v=s(a.shadowRoot.querySelector("."+h.params.wrapperClass))).children=function(e){return c.children(e)}:v=c.children("."+h.params.wrapperClass),n.extend(h,{$el:c,el:a,$wrapperEl:v,wrapperEl:v[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===h.params.direction},isVertical:function(){return"vertical"===h.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===h.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===v.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEvents:(f=["touchstart","touchmove","touchend","touchcancel"],m=["mousedown","mousemove","mouseup"],o.pointerEvents&&(m=["pointerdown","pointermove","pointerup"]),h.touchEventsTouch={start:f[0],move:f[1],end:f[2],cancel:f[3]},h.touchEventsDesktop={start:m[0],move:m[1],end:m[2]},o.touch||!h.params.simulateTouch?h.touchEventsTouch:h.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:n.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.useModules(),h.params.init&&h.init(),h}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.params.direction=e,this.slides.each((function(t,i){"vertical"===e?i.style.width="":i.style.height=""})),this.emit("changeDirection"),t&&this.update()),this},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,o=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),o&&o.length&&o.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),n.deleteProps(i)),i.destroyed=!0),null},t.extendDefaults=function(e){n.extend(F,e)},i.extendedDefaults.get=function(){return F},i.defaults.get=function(){return V},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(l),R={name:"device",proto:{device:I},static:{device:I}},q={name:"support",proto:{support:o},static:{support:o}},j={isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:function(){var e=t.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)},K={name:"browser",proto:{browser:j},static:{browser:j}},U={name:"resize",create:function(){var e=this;n.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},_={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,i){void 0===i&&(i={});var s=this,a=new(0,_.func)((function(e){if(1!==e.length){var i=function(){s.emit("observerUpdate",e[0])};t.requestAnimationFrame?t.requestAnimationFrame(i):t.setTimeout(i,0)}else s.emit("observerUpdate",e[0])}));a.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),s.observer.observers.push(a)},init:function(){if(o.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},Z={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){n.extend(this,{observer:{init:_.init.bind(this),attach:_.attach.bind(this),destroy:_.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},Q={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,o=t.params.virtual,l=o.addSlidesBefore,d=o.addSlidesAfter,h=t.virtual,p=h.from,c=h.to,u=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,b,w,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(b=Math.floor(s/2)+a+l,w=Math.floor(s/2)+a+d):(b=s+(a-1)+l,w=a+d);var x=Math.max((y||0)-w,0),T=Math.min((y||0)+b,u.length-1),E=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(n.extend(t.virtual,{from:x,to:T,offset:E,slidesGrid:t.slidesGrid}),p===x&&c===T&&!e)return t.slidesGrid!==v&&E!==m&&t.slides.css(g,E+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:E,from:x,to:T,slides:function(){for(var e=[],t=x;t<=T;t+=1)e.push(u[t]);return e}()}),void S();var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=c;P+=1)(P<x||P>T)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var z=0;z<u.length;z+=1)z>=x&&z<=T&&(void 0===c||e?M.push(z):(z>c&&M.push(z),z<p&&C.push(z)));M.forEach((function(e){t.$wrapperEl.append(f(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(g,E+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},J={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){n.extend(this,{virtual:{update:Q.update.bind(this),appendSlide:Q.appendSlide.bind(this),prependSlide:Q.prependSlide.bind(this),removeSlide:Q.removeSlide.bind(this),removeAllSlides:Q.removeAllSlides.bind(this),renderSlide:Q.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};n.extend(this.params,e),n.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},ee={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r||34===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r||33===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(33===r||34===r||37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(33!==r&&34!==r&&37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(34!==r&&39!==r||s)&&(33!==r&&37!==r||!s)||this.slideNext(),(33!==r&&37!==r||s)&&(34!==r&&39!==r||!s)||this.slidePrev()):(33!==r&&34!==r&&38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),34!==r&&40!==r||this.slideNext(),33!==r&&38!==r||this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},te={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){n.extend(this,{keyboard:{enabled:!1,enable:ee.enable.bind(this),disable:ee.disable.bind(this),handle:ee.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var ie={lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,a=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var r=i.$el;if("container"!==i.params.mousewheel.eventsTarged&&(r=s(i.params.mousewheel.eventsTarged)),!i.mouseEntered&&!r[0].contains(t.target)&&!a.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var o=0,l=i.rtlTranslate?-1:1,d=ie.normalize(t);if(a.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(d.pixelX)>Math.abs(d.pixelY)))return!0;o=d.pixelX*l}else{if(!(Math.abs(d.pixelY)>Math.abs(d.pixelX)))return!0;o=d.pixelY}else o=Math.abs(d.pixelX)>Math.abs(d.pixelY)?-d.pixelX*l:-d.pixelY;if(0===o)return!0;if(a.invert&&(o=-o),i.params.freeMode){var h={time:n.now(),delta:Math.abs(o),direction:Math.sign(o)},p=i.mousewheel.lastEventBeforeSnap,c=p&&h.time<p.time+500&&h.delta<=p.delta&&h.direction===p.direction;if(!c){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var u=i.getTranslate()+o*a.sensitivity,v=i.isBeginning,f=i.isEnd;if(u>=i.minTranslate()&&(u=i.minTranslate()),u<=i.maxTranslate()&&(u=i.maxTranslate()),i.setTransition(0),i.setTranslate(u),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!v&&i.isBeginning||!f&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var m=i.mousewheel.recentWheelEvents;m.length>=15&&m.shift();var g=m.length?m[m.length-1]:void 0,b=m[0];if(m.push(h),g&&(h.delta>g.delta||h.direction!==g.direction))m.splice(0);else if(m.length>=15&&h.time-b.time<500&&b.delta-h.delta>=1&&h.delta<=6){var w=o>0?.8:.2;i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.mousewheel.timeout=n.nextTick((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=n.nextTick((function(){i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(c||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),u===i.minTranslate()||u===i.maxTranslate())return!0}}else{var y={time:n.now(),delta:Math.abs(o),direction:Math.sign(o),raw:e},x=i.mousewheel.recentWheelEvents;x.length>=2&&x.shift();var T=x.length?x[x.length-1]:void 0;if(x.push(y),T?(y.direction!==T.direction||y.delta>T.delta)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){return e.delta>=6&&n.now()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},se={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=s(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=s(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),n.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},ae={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each((function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=h.eq(i),c=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=h.eq(o),v=h.eq(l),f=o;f<=l;f+=1)h.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(c>=h.length-t.dynamicMainBullets){for(var m=t.dynamicMainBullets;m>=0;m-=1)h.eq(h.length-m).addClass(t.bulletActiveClass+"-main");h.eq(h.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(h.length,t.dynamicMainBullets+4),b=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,w=e?"right":"left";h.css(this.isHorizontal()?w:"top",b+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var y;y=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,E=1;"horizontal"===y?T=x:E=x,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+E+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),n.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},re={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=l+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,o=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),n.extend(e,{trackSize:a,divider:r,moveDivider:o,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(l),this.setTranslate(l),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=n.nextTick((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,l))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,l))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),n.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},ne={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(null==d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,a)})),i.each((function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,n)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)}))}},oe={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!o.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=oe.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest("."+this.params.slideClass),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl&&a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=oe.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=o.gestures?e.scale*i.currentScale:s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!I.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(I.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=n.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=n.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,o=s.height*t.scale;if(!(r<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl&&t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl&&t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,o,l,d,h,p,c,u,v,f,m,g=this.zoom,b=this.params.zoom,w=g.gesture,y=g.image;(w.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?w.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):w.$slideEl=this.slides.eq(this.activeIndex),w.$imageEl=w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),w.$imageWrapEl=w.$imageEl.parent("."+b.containerClass)),w.$imageEl&&0!==w.$imageEl.length)&&(w.$slideEl.addClass(""+b.zoomedSlideClass),void 0===y.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=y.touchesStart.x,i=y.touchesStart.y),g.scale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,g.currentScale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,e?(f=w.$slideEl[0].offsetWidth,m=w.$slideEl[0].offsetHeight,s=w.$slideEl.offset().left+f/2-t,a=w.$slideEl.offset().top+m/2-i,o=w.$imageEl[0].offsetWidth,l=w.$imageEl[0].offsetHeight,d=o*g.scale,h=l*g.scale,u=-(p=Math.min(f/2-d/2,0)),v=-(c=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>u&&(r=u),(n=a*g.scale)<c&&(n=c),n>v&&(n=v)):(r=0,n=0),w.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),w.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?i.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.on("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.on("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.on("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.on(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.off("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.off("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.off("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.off(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}}},le={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each((function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",r[0],o[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},de={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new de.LinearSpline(this.slidesGrid,e.slidesGrid):new de.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof W&&n(r[o]);else r instanceof W&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&n.nextTick((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof W&&r(a[i]);else a instanceof W&&t!==a&&r(a)}},he={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/\{\{index\}\}/,r.index()+1))}))},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},pe={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=pe.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=pe.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter((function(e){return""!==e})),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=pe.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(pe.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},ce={onHashCange:function(){var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},ue={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=n.nextTick((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},ve={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},fe={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var T="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(T),d.slideShadows){var E=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(c)-90*Math.floor(Math.abs(c)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,z=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+P+", 1, "+z+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/z+"px) rotateX(-90deg)")}var $=j.isSafari||j.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},me={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},ge={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,l=this.isHorizontal(),d=this.translate,h=l?e/2-d:t/2-d,p=l?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(h-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=l?p*g:0,w=l?0:p*g,y=-c*Math.abs(g),x=n.stretch;"string"==typeof x&&-1!==x.indexOf("%")&&(x=parseFloat(n.stretch)/100*m);var T=l?0:x*g,E=l?x*g:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var S="translate3d("+E+"px,"+T+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=s('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=g>0?g:0),M.length&&(M[0].style.opacity=-g>0?-g:0)}}(o.pointerEvents||o.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=h+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,n.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),n.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):n.isObject(e.swiper)&&(this.thumbs.swiper=new t(n.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&s(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var r=this.activeIndex;this.slides.eq(r).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,r=this.activeIndex);var n=this.slides.eq(r).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),o=this.slides.eq(r).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===n?o:void 0===o?n:o-r<r-n?o:n}this.slideTo(a)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView,s=this.params.thumbs.autoScrollOffset,a=s&&!t.params.loop;if(this.realIndex!==t.realIndex||a){var r,n,o=t.activeIndex;if(t.params.loop){t.slides.eq(o).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,o=t.activeIndex);var l=t.slides.eq(o).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),d=t.slides.eq(o).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();r=void 0===l?d:void 0===d?l:d-o==o-l?o:d-o<o-l?d:l,n=this.activeIndex>this.previousIndex?"next":"prev"}else n=(r=this.realIndex)>this.previousIndex?"next":"prev";a&&(r+="next"===n?s:-1*s),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(r)<0&&(t.params.centeredSlides?r=r>o?r-Math.floor(i/2)+1:r+Math.floor(i/2)-1:r>o&&(r=r-i+1),t.slideTo(r,e?0:void 0))}var h=1,p=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(h=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),t.slides.removeClass(p),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var c=0;c<h;c+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+c)+'"]').addClass(p);else for(var u=0;u<h;u+=1)t.slides.eq(this.realIndex+u).addClass(p)}}},we=[R,q,K,U,Z,J,te,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){n.extend(this,{mousewheel:{enabled:!1,enable:ie.enable.bind(this),disable:ie.disable.bind(this),handle:ie.handle.bind(this),handleMouseEnter:ie.handleMouseEnter.bind(this),handleMouseLeave:ie.handleMouseLeave.bind(this),animateSlider:ie.animateSlider.bind(this),releaseScroll:ie.releaseScroll.bind(this),lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[]}})},on:{init:function(){!this.params.mousewheel.enabled&&this.params.cssMode&&this.mousewheel.disable(),this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.params.cssMode&&this.mousewheel.enable(),this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){n.extend(this,{navigation:{init:se.init.bind(this),update:se.update.bind(this),destroy:se.destroy.bind(this),onNextClick:se.onNextClick.bind(this),onPrevClick:se.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,a=i.$nextEl,r=i.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(r)||s(e.target).is(a)||(a?t=a.hasClass(this.params.navigation.hiddenClass):r&&(t=r.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),a&&a.toggleClass(this.params.navigation.hiddenClass),r&&r.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){n.extend(this,{pagination:{init:ae.init.bind(this),render:ae.render.bind(this),update:ae.update.bind(this),destroy:ae.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){(this.params.loop||void 0===this.snapIndex)&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){n.extend(this,{scrollbar:{init:re.init.bind(this),destroy:re.destroy.bind(this),updateSize:re.updateSize.bind(this),setTranslate:re.setTranslate.bind(this),setTransition:re.setTransition.bind(this),enableDraggable:re.enableDraggable.bind(this),disableDraggable:re.disableDraggable.bind(this),setDragPosition:re.setDragPosition.bind(this),getPointerPosition:re.getPointerPosition.bind(this),onDragStart:re.onDragStart.bind(this),onDragMove:re.onDragMove.bind(this),onDragEnd:re.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){n.extend(this,{parallax:{setTransform:ne.setTransform.bind(this),setTranslate:ne.setTranslate.bind(this),setTransition:ne.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i){t[i]=oe[i].bind(e)})),n.extend(e,{zoom:t});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()},slideChange:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.params.cssMode&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){n.extend(this,{lazy:{initialImageLoaded:!1,load:le.load.bind(this),loadInSlide:le.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){this.params.lazy.enabled&&this.params.cssMode&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){n.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:de.getInterpolateFunction.bind(this),setTranslate:de.setTranslate.bind(this),setTransition:de.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;n.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(he).forEach((function(t){e.a11y[t]=he[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){n.extend(this,{history:{init:pe.init.bind(this),setHistory:pe.setHistory.bind(this),setHistoryPopState:pe.setHistoryPopState.bind(this),scrollToSlide:pe.scrollToSlide.bind(this),destroy:pe.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)},slideChange:function(){this.history.initialized&&this.params.cssMode&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){n.extend(this,{hashNavigation:{initialized:!1,init:ce.init.bind(this),destroy:ce.destroy.bind(this),setHash:ce.setHash.bind(this),onHashCange:ce.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()},slideChange:function(){this.hashNavigation.initialized&&this.params.cssMode&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;n.extend(e,{autoplay:{running:!1,paused:!1,run:ue.run.bind(e),start:ue.start.bind(e),stop:ue.stop.bind(e),pause:ue.pause.bind(e),onVisibilityChange:function(){"hidden"===document.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===document.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&(this.autoplay.start(),document.addEventListener("visibilitychange",this.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},touchEnd:function(){this.params.cssMode&&this.autoplay.paused&&!this.params.autoplay.disableOnInteraction&&this.autoplay.run()},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){n.extend(this,{fadeEffect:{setTranslate:ve.setTranslate.bind(this),setTransition:ve.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){n.extend(this,{cubeEffect:{setTranslate:fe.setTranslate.bind(this),setTransition:fe.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){n.extend(this,{flipEffect:{setTranslate:me.setTranslate.bind(this),setTransition:me.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){n.extend(this,{coverflowEffect:{setTranslate:ge.setTranslate.bind(this),setTransition:ge.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){n.extend(this,{thumbs:{swiper:null,init:be.init.bind(this),update:be.update.bind(this),onThumbClick:be.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===W.use&&(W.use=W.Class.use,W.installModule=W.Class.installModule),W.use(we),W}));

	//200902 수정사항 start
	//clipboard
	!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=o(n(1)),c=o(n(3)),u=o(n(4));function o(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function o(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n.resolveOptions(e),n.listenClick(t),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,c.default),i(o,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===r(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return s("action",t)}},{key:"defaultTarget",value:function(t){var e=s("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return s("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),o}();function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l},function(t,e,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=n(2),c=(o=a)&&o.__esModule?o:{default:o};var u=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),e}();t.exports=u},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var d=n(5),h=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(l=t).addEventListener(s,f),{destroy:function(){l.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,u=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,u)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,u)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,u,l,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(7);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])});
	//200902 수정사항 end


	(function(factory) {
	    if (typeof define === 'function' && define.amd) {
	        define(['jquery'], factory);
	    } else if (typeof exports === 'object') {
	        factory(require('jquery'));
	    } else {
	        factory(jQuery);
	    }
	}(function($) {
	    var pluses = /\+/g;

	    //s:[통합수정 2020-09-14 함수정의 순서 변경]
	    var config = $.cookie = function(key, value, options) {
	        if (value !== undefined && !$.isFunction(value)) {
	            options = $.extend({}, config.defaults, options);

	            if (typeof options.expires === 'number') {
	                var days = options.expires,
	                    t = options.expires = new Date();
	                t.setTime(+t + days * 864e+5);
	            }
	            return (document.cookie = [
	                encode(key), '=', stringifyCookieValue(value),
	                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
	                options.path ? '; path=' + options.path : '',
	                options.domain ? '; domain=' + options.domain : '',
	                options.secure ? '; secure' : ''
	            ].join(''));
	        }
	        var result = key ? undefined : {};
	        var cookies = document.cookie ? document.cookie.split('; ') : [];
	        for (var i = 0, l = cookies.length; i < l; i++) {
	            var parts = cookies[i].split('=');
	            var name = decode(parts.shift());
	            var cookie = parts.join('=');

	            if (key && key === name) {
	                result = read(cookie, value);
	                break;
	            }

	            if (!key && (cookie = read(cookie)) !== undefined) {
	                result[name] = cookie;
	            }
	        }
	        return result;
	    };
	    //e:[통합수정 2020-09-14 함수정의 순서 변경]

	    function encode(s) {
	        return config.raw ? s : encodeURIComponent(s);
	    }

	    function decode(s) {
	        return config.raw ? s : decodeURIComponent(s);
	    }

	    function stringifyCookieValue(value) {
	        return encode(config.json ? JSON.stringify(value) : String(value));
	    }

	    function parseCookieValue(s) {
	        if (s.indexOf('"') === 0) {
	            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
	        }

	        try {
	            s = decodeURIComponent(s.replace(pluses, ' '));
	            return config.json ? JSON.parse(s) : s;
	        } catch (e) {}
	    }

	    function read(s, converter) {
	        var value = config.raw ? s : parseCookieValue(s);
	        return $.isFunction(converter) ? converter(value) : value;
	    }
	    
	    config.defaults = {};
	    $.removeCookie = function(key, options) {
	        if ($.cookie(key) === undefined) {
	            return false;
	        }

	        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
	        return !$.cookie(key);
	    };
	}));

	var customizingRef = (function(d, w, $) {
	    //var customizingRef = customizingRef || {}; //[통합수정 2020-09-14 항상 false인 선언 수정]
		var customizingRef = {};
	    var isLogin = 'N';
	    var isPopup = '';
	    var selectPrice = '0';
	    var motype = '';
	    var datadep = '';
	    var sYear = '2020';
	    var selectidx = '0';
	    var data19 = '';
	    var door4_fam_col = "";
	    var selcolorCd = "";
	    var vmixYn = "Y";
	    var p1pkgMdl = "";
	    var f2pkgMdl = "";
	    var curprice = "0";
	    var sMYEDITION = '.my-edition',
	        sMODEL = sMYEDITION + '-making-selection',
	        sSTEP01 = '.step-box_type',
	        sSTEP02 = '.step-box_module',
	        sSTEP03 = '.step-box_function',
	        sSTEP04 = '.step-box_color',
	        sVOLUME = sMYEDITION + '-making_volume',
	        sTABLE = sSTEP03 + ' .my-edition-model-tbl table'
	    sACTIVE = 'active',
	        sINACTIVE = 'inactive',
	        sTABBTN = sMYEDITION + '_tab',
	        sTABVIEW = '.colorchip_list',
	        sREF = sMODEL + ' li[data-type] .making_doors_btns:visible',
	        sDATACOLOR = 'data-color',
	        sDATAPRICE = 'data-price',
	        sBTN = 'button',
	        aFAMILYcnt = [1, 5, 9, 13, 17, 21],
	        aDOORLENG4 = ['6door', '5door', '4door'],
	        aKIMCHI = ['4door_kimchi_486', '4door_kimchi_584', '3door_kimchi'],
	        aFAMILY = ['4door_family'], // type5
	        aCHEFCL = ['4door_chef', '4door_chef2', '5door_chef'], // type7 셰프컬렉션 (4door_chef, 5door_chef )
	        sSAVEBTN = '.save_btn',
	        sDELETEBTN = 'my-pick_btn_del',
	        aSelectedOpt = [],
	        aSelectedOpt2 = [],
	        $ARPOPUP = $('#layer05'),
	        mobileFlag = null,
	        prevSize = 0,
	        currentSize = 0,
	        colorActiveGroup = false,
	        aimgDOORLENG4 = ['6door', '5door', '4door', '4door_kimch', '4door_kf', '4door_chef', '4door_chef2', '5door_chef'],
	        //aimgDOORLENG4 = ['6door', '5door', '4door', '4door_kimch', '4door_kf'],
	        //aimgCHEFCL = ['4door_chef', '4door_chef2', '5door_chef'],    // type7 셰프컬렉션
	        // 2021 김치 플러스 4도어 추가
	        aimgKIMCHI_S = ['RQ58T94H1AP', 'RQ58T9491AP', 'RQ58T9481AP', 'RQ58T9471AP', 'RQ58T9461AP', 'RQ58T9451AP', 'RQ58T9441AP', 'RQ48T9401AP', 'RQ48T94Y1AP', 'RQ48T94C1AP', 'RQ48T94B2AP', 'RQ48T94B1AP', 'RQ48T94A1AP', 'RQ48T9421AP', 'RQ48T9411AP'],
	        cheakedModel = '',
	        // 2021 김치 플러스 4도어 추가
	        aimgKIMCHI = ['4door_kimchi_486', '4door_kimchi_584'],
	        aimgKIMCHI_P = ['3door', '3door_kimchi', '1door_kimchi'];
	    var sImgPath = imgDomain_chef + '/bespoke/images/';

	    var controlNumber = {
	        //3자리 단위 콤마
	        numberWithCommas: function(str) {
	            return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	        },
	        //숫자만
	        onlyNumber: function(str) {
	            var res;
	            res = str.replace(/[^0-9]/g, "");
	            return parseInt(res);
	        },
	        //가격 합산
	        getSumPrice: function(array) {
	            var sum = array.reduce(function(previousValue, currentValue, currentIndex, array1) {
	                return previousValue + currentValue;
	            });
	            return sum;
	        }
	    }
	    //s:[통합수정 2020-09-14 선언 위치변경]
	    var selectionOrderChange = function(mobileFlag) { // 20190619 : 최상단 냉장고 이미지 영역 순서 바꾸기	
	        var $sMODEL = $(sMODEL);

	        if (mobileFlag) {
	            $(sSTEP04).find('.my-edition-step_cont').prepend($sMODEL);
	        } else {
	            $('.my-edition-making-wrap').prepend($sMODEL);
	        }
	    };
	    //e:[통합수정 2020-09-14 선언 위치변경]
	    //s:[통합수정 2020-09-14 선언 위치변경]
	    var FixedTop = 'secFixedTop',
	    	FixedBtm = 'secFixedBtm';
		var selectionFixedFunc = {
		    selectionFixedPc: function() {
		        $(window).on('scroll resize', function() {
		            var isMobile = window.innerWidth <= 768 ? true : false;
		            if (!isMobile) {
		                var FixMenuH = $(".promo-nav-outer").outerHeight();
		                var curScroll = $(this).scrollTop(),
		                    makeSection = $(sMYEDITION + '-making-section'),
		                    makeSectionTop = $(sSTEP01).offset().top,
		                    makeSectionHeight = makeSection.outerHeight(),
		                    makeSectionBtm = makeSection.offset().top + makeSectionHeight - $(window).height(),
		                    makeSectionEnd = $('.my-edition-btn-area').offset().top,
		                    imgH = $(sMODEL).height();
		
		                if (curScroll >= $('.my-edition-making-wrap')[0].offsetTop - 40) {
		                    if (curScroll + imgH >= makeSectionEnd + $('.my-edition_btn').outerHeight() + 140) {
		                        $(sMODEL).removeClass(FixedTop).addClass(FixedBtm);
		                    } else {
		                        $(sMODEL).removeClass(FixedBtm).addClass(FixedTop);
		                    }
		                } else {
		                    $(sMODEL).removeClass(FixedBtm).removeClass(FixedTop);
		                }
		            }
		        });
		    },
		    selectionFixedMo: function() {
		        $(sMODEL).removeClass(FixedTop).removeClass(FixedBtm);
		    }
		}
		//e:[통합수정 2020-09-14 선언 위치변경]

	    var resizeFunc = function(fnPc, fnMo) {
	        var rtime;
	        var timeout = false;
	        var delta = 200;
	        $(window).resize(function() {
	            rtime = new Date();
	            if (timeout === false) {
	                timeout = true;
	                setTimeout(resizeend, delta);
	            }
	            mobileFlag = window.innerWidth <= 768 ? true : false;
	            currentSize = mobileFlag == true ? "mobile" : "pc";
	            if (prevSize != currentSize) {
	                prevSize = currentSize;
	                selectionOrderChange(mobileFlag);
	            }
	            if (mobileFlag) {
	                selectionFixedFunc.selectionFixedMo();
	            } else {
	                selectionFixedFunc.selectionFixedPc();
	            }
	        });

	        function resizeend() {
	            if (new Date() - rtime < delta) {
	                setTimeout(resizeend, delta);
	            } else {
	                timeout = false;
	                var isMobile = window.innerWidth <= 768 ? true : false;
	                if (isMobile) {
	                    if (fnMo !== undefined) {
	                        fnMo();
	                    }
	                } else {
	                    fnPc();
	                }
	            }
	        }
	    };
	    /*
	    var FixedTop = 'secFixedTop',
	        FixedBtm = 'secFixedBtm';
	    var selectionFixedFunc = {
	        selectionFixedPc: function() {
	            $(window).on('scroll resize', function() {
	                var isMobile = window.innerWidth <= 768 ? true : false;
	                if (!isMobile) {
	                    var FixMenuH = $(".promo-nav-outer").outerHeight();
	                    var curScroll = $(this).scrollTop(),
	                        makeSection = $(sMYEDITION + '-making-section'),
	                        makeSectionTop = $(sSTEP01).offset().top,
	                        makeSectionHeight = makeSection.outerHeight(),
	                        makeSectionBtm = makeSection.offset().top + makeSectionHeight - $(window).height(),
	                        makeSectionEnd = $('.my-edition-btn-area').offset().top,
	                        imgH = $(sMODEL).height();

	                    if (curScroll >= $('.my-edition-making-wrap')[0].offsetTop - 40) {
	                        if (curScroll + imgH >= makeSectionEnd + $('.my-edition_btn').outerHeight() + 140) {
	                            $(sMODEL).removeClass(FixedTop).addClass(FixedBtm);
	                        } else {
	                            $(sMODEL).removeClass(FixedBtm).addClass(FixedTop);
	                        }
	                    } else {
	                        $(sMODEL).removeClass(FixedBtm).removeClass(FixedTop);
	                    }
	                }
	            });
	        },
	        selectionFixedMo: function() {
	            $(sMODEL).removeClass(FixedTop).removeClass(FixedBtm);
	        }
	    }
	    */
	    //주요 토글 기능 모음
	    var toggleView = {
	        trBg: {
	            selector: {
	                sHoverClass: 'hoverBg'
	            },
	            hover: {
	                show: function($this) {
	                    $this.addClass(toggleView.trBg.selector.sHoverClass);
	                },
	                hide: function($this) {
	                    $this.removeClass(toggleView.trBg.selector.sHoverClass);
	                }
	            },
	            click: {
	                show: function($this) {
	                    $this.parents('tr').addClass(sACTIVE).siblings().removeClass(sACTIVE);

	                },
	                hide: function($this) {
	                    $this.parents('tr').removeClass(sACTIVE);

	                }
	            }
	        },
	        showModel: {
	            show: function() {
	                $(sMYEDITION + '-making-default').hide();
	                $(sMYEDITION + '-making-ref-wrap').show();
	                $(sMYEDITION + '-making-info').show();
	            },
	            hide: function() {
	                $(sMYEDITION + '-making-default').show();
	                $(sMYEDITION + '-making-ref-wrap').hide();
	                $(sMYEDITION + '-making-info').hide();
	            }
	        }
	    }
	    var prodList = [];
	    var cookieName = 'bespoke_make200703chef';
	    if (isLogin == "Y") {
	        cookieName = 'bespoke_make200703chef2';
	    }
	    var savedLength;
	    var pushProdList = function() {
	    	if ($.cookie(cookieName) !== undefined && typeof($.cookie(cookieName)) === 'string') {
	            prodList = JSON.parse($.cookie(cookieName));
	        }
	    };
	    var prod3List = [];
	    var init = function(data) {
	        var getParameter = function(param) {
	            var rtnval = '';
	            var nowAddress = unescape(location.href);
	            var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1,
	                nowAddress.length)).split('&');
	            for (var i = 0; i < parameters.length; i++) {
	                var varName = parameters[i].split('=')[0];
	                if (varName.toUpperCase() == param.toUpperCase()) {
	                    rtnval = parameters[i].split('=')[1];
	                    break;
	                }
	            }
	            return rtnval;
	        }

	        //  2021 김치 플러스 4도어 추가
	       $(document).on('click', sTABLE + ' tbody input[name="model"]', function(e) {
	             var cheakType = $(this).attr('data-type');
	             var cheakYear = $(this).attr('data-year');

	             cheakedModel = $(this).parent().find('label').text();
	             if (cheakType.indexOf("4door_kimchi") > -1) {
	                 if (aimgKIMCHI_S.indexOf(cheakedModel) > -1) {
	                     if (sYear !== "2021") {
	                         $(sMODEL + ' li[data-type] .door_btn').find(sBTN).each(function() {
	                             var dtaImg = $(this).attr("data-img");
	                             if (typeof dtaImg !== typeof undefined && dtaImg !== false) {
	                                 popup.confirm_(2, '타입이 변경 되었습니다.<br/>컬러를 다시 선택해 주세요.');
	                                 $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').find('.color').text(''); // 20190620
	                                 $(this).find('strong').show();
	                                 $(this).removeClass(sACTIVE);
	                             }
	                         });
	                         sYear = "2021";
	                     }
	                 } else {
	                     if (sYear !== "2020") {
	                         $(sMODEL + ' li[data-type] .door_btn').find(sBTN).each(function() {
	                             var dtaImg = $(this).attr("data-img");
	                             if (typeof dtaImg !== typeof undefined && dtaImg !== false) {
	                                 popup.confirm_(2, '타입이 변경 되었습니다.<br/>컬러를 다시 선택해 주세요.');
	                                 $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').find('.color').text(''); // 20190620
	                                 $(this).find('strong').show();
	                                 $(this).removeClass(sACTIVE);
	                             }
	                         });
	                     }
	                     sYear = "2020";
	                 }
	             } else {
	                 if (cheakYear == "2021") {
	                     sYear = "2021";
	                 } else if (cheakYear == "2020") {
	                     sYear = "2020";
	                 } else {
	                     sYear = "2019";
	                 }

	             }
	             console.log("sYear", sYear)
	         });

	        var reset = {
	            model: function() {
	                toggleView.showModel.hide();
	            },
	            myEditionDoorSelection: function() {
	                $(sMODEL + ' li[data-type] .door_btn').find(sBTN).each(function() {
	                    $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').find('.color').text(''); // 20190620
	                    $(this).find('strong').show();
	                    $(this).removeClass(sACTIVE);
	                });
	            },
	            saveBtn: function() {
	                $(sSAVEBTN).removeClass(sACTIVE);
	            },
	            stepList: {
	                step1: function() {
	                    $(sSTEP01 + ' ' + '.type-select_btn').removeClass(sACTIVE).removeClass(sINACTIVE);
	                },
	                step2: function() {
	                    choiceDep.act();
	                },
	                step3: function() {
	                    $(sTABVIEW).find(sBTN + '.' + sACTIVE).removeClass(sACTIVE);
	                    settingPrice.resetPrice();
	                },
	                act: function() {
	                    this.step1();
	                    this.step2();
	                    this.step3();
	                }
	            },
	            act: function(caseType) {
	                $('.my-edition_tab-desc').removeClass('is_show');
	                reset.myEditionDoorSelection();
	                reset.saveBtn();
	                sYear = '2020';

	                switch (caseType) {
	                    case 'tab':
	                        reset.stepList.step3();
	                        break;
	                    case 'remake':
	                        moveNextStep($(sSTEP03).find('.my-edition-step_cont'));
	                    default:
	                        reset.model();
	                        reset.stepList.act();

	                        break;
	                }
	            }
	        }
	        var stepAlert = function(step, $el, caseType, yesCallback, noCallback, coCallback) {
	            var bool, txt, isChecked;
	            switch (caseType) {
	                case sBTN:
	                    txt = sBTN;
	                    break;
	                case '.type-select_btn':
	                    txt = '.type-select_btn'
	                    break;
	                case 'a':
	                    txt = '.slider-item';
	                    break;
	                case 'tr':
	                    txt = 'tbody tr';
	                    break;
	            }

	            switch (step) {
	                case 'prev':
	                    if ($el.find(txt + '.' + sACTIVE).length !== 0) {
	                        popup.confirm_(1, '지금 선택중인 단계보다 이전 단계를 선택하면<br/>기존에 선택한 내용이 모두 초기화 됩니다.<br/>선택 내용을 변경 하시겠습니까?', yesCallback, noCallback, coCallback)
	                    } else {
	                        if (coCallback !== undefined) {
	                            coCallback();
	                        }
	                    }
	                    break;
	                case 'next':
	                    if ($el.find(txt + '.' + sACTIVE).length === 0) {
	                        popup.confirm_(2, '이전 단계를 선택하지 않았습니다.<br/>이전 단계를 먼저 선택해 주세요.')
	                        isChecked = false;
	                    }
	                    break;
	            }

	            if (isChecked === false) {
	                return true;
	            }
	        };
	        //[통합수정 2020-09-14]
	        var moveNextStep = function($el) {
	            var idx = $el.parents('.my-edition-making-step-box').index(),
	                isMobile = window.innerWidth <= 768 ? true : false;
	            
	            //console.log($el.parents('.my-edition-making-step-box').index());
	            var step = '';
	            switch (idx) {
	                case 0:
	                    step = '.step-box_module';
	                    break;
	                case 1:
	                    step = '.step-box_function';
	                    break;
	                case 2:
	                    if (isMobile) {
	                        step = '.step-box_color .my-edition-step_tit';
	                    } else if (!isMobile) {
	                        step = '.step-box_color';
	                    }
	                    break;
	                case 3:
	                    step = '.step-box_type';
	                    break;
	            }

	            var offset = $(step).offset().top + $('.my-edition-making-step-wrap').scrollTop() - $('.nav_wrap').outerHeight(),
	                moving = offset;

	            if (idx == 2 && !isMobile) {
	                moving = moving - 1500;

	            } else if (idx == 2 && isMobile) {
	                moving = moving - 1100;
	            }
	            $('html,body').animate({ scrollTop: moving }, 300);
	        };
	        var initCookieHTML = function() {
	            var aProdHtml = [],
	                aProdHtmlPop = [],
	                panelCode = [];

	            if (prod3List.length > 0) {
	                $('.my-edition-pick-section').show();
	                $('.cookie_length').text(prod3List.length);
	            } else {
	                prodList.length !== 0 ? $('.my-edition-pick-section').show() : $('.my-edition-pick-section').hide()
	                $('.cookie_length').text(prodList.length);
	            }
	            var prod = settingCookie.loadProd();
	            if (prod3List.length > 0) {
	                prod = prod3List;
	            }
	            var $modelList = $('.my-edition-pick-section .my-edition-pick-list');
	            var makeHTML = function() {
	                var doorName;
	                var setDoorFrame = function(doorType) {
	                    switch (doorType) {
	                        case '3door':
	                        case '3door_kimchi':
	                            doorName = ['상칸', '중칸', '하칸'];
	                            doorClass = ['door_t', 'door_m', 'door_b'];
	                            doorIdx = 3;
	                            break;
	                        case '2door':
	                            doorName = ['상칸', '하칸'];
	                            doorClass = ['door_t', 'door_b'];
	                            doorIdx = 2;
	                            break;
	                        case '1door_refrigerator':
	                        case '1door_freezer':
	                        case '1door_kimchi':
	                        case '1door_slim':
	                            doorName = ['도어'];
	                            doorClass = ['door_f'];
	                            doorIdx = 1;
	                            break;
	                        case '4door_kimchi_486':
	                        case '4door_kimchi_584':
	                            doorName = ['상칸좌', '상칸우', '중칸', '하칸'];
	                            doorClass = ['door_t_l', 'door_t_r', 'door_m', 'door_b'];
	                            doorIdx = 4;
	                            break;
	                        default:
	                            doorName = ['상칸좌', '상칸우', '하칸좌', '하칸우'];
	                            doorClass = ['door_t_l', 'door_t_r', 'door_b_l', 'door_b_r'];
	                            doorIdx = 4;
	                    }
	                };
	                //내가 만든 BESPOKE 태그 만들기
	                var making = {
	                    frame: function(type, list) {
	                        var aButtonDom = [];
	                        setDoorFrame(type);

	                        $.each(list.panel, function(k, panel) {
	                            if (aFAMILY.indexOf(type) > -1) {
	                                if (k == 1) {
	                                    aButtonDom.push('<div class="my_door ' + doorClass[k] + '" style=""><span class="position">' + doorName[k] + ' </span><span class="color">' + panel.color + '</span></div>');
	                                } else {
	                                    aButtonDom.push('<div class="my_door ' + doorClass[k] + '" style="background-image:url(' + sImgPath + 'v3/door/' + panelCode[k].toLowerCase() + '.png?$ORIGIN_PNG$)"><span class="position">' + doorName[k] + ' </span><span class="color">' + panel.color + '</span></div>') // 로컬 작업 경로 수정 : v3/door/ > door/
	                                }
	                            } else {
	                                aButtonDom.push('<div class="my_door ' + doorClass[k] + '" style="background-image:url(' + sImgPath + 'v3/door/' + panelCode[k].toLowerCase() + '.png?$ORIGIN_PNG$)"><span class="position">' + doorName[k] + ' </span><span class="color">' + panel.color + '</span></div>') // 로컬 작업 경로 수정 : v3/door/ > door/
	                            }
	                        });
	                        return aButtonDom;
	                    },
	                    panelDom: function(type, list) {
	                        var aPanelDom = [];
	                        var makeDoorFrame = function(arr) {
	                            $('.pd-pop-content__table .door').each(function(i) {
	                                $(this).find('th').text('디자인 패널 ' + arr[i]);
	                            })

	                            $.each(list.panel, function(k, panel) {
	                                if (aFAMILY.indexOf(type) > -1) {
	                                    if (!(k == 1)) { aPanelDom.push('<tr class="door"><th scope="row">디자인 패널 ' + arr[k] + '</th><td>' + panel.color + '</td><td>' + controlNumber.numberWithCommas(panel.panelprice) + '원' + '</td></tr>'); }
	                                } else {
	                                    aPanelDom.push('<tr class="door"><th scope="row">디자인 패널 ' + arr[k] + '</th><td>' + panel.color + '</td><td>' + controlNumber.numberWithCommas(panel.panelprice) + '원' + '</td></tr>');
	                                }
	                            });
	                            if (list.pkgnm !== "") {
	                                aPanelDom.push('<tr class="door"><th scope="row">옵션제품</th><td>' + list.pkgnm + '</td><td>' + controlNumber.numberWithCommas(list.pkg2) + '원' + '</td></tr>');
	                            }
	                        };
	                        setDoorFrame(type);
	                        makeDoorFrame(doorName);
	                        return aPanelDom;
	                    }
	                }
	                $.each(prod, function(i, item) {
	                    panelCode = [];

	                    var aPanel = [],
	                        filprice = "0";
	                    var filteredType = data.filter(function(type) { return type.dataType === item.type; })[0];
	                    var filteredModelPrice = "";
	                    var filtered2Name = filteredType.product.filter(function(model) { return model.modelName === item.name; })[0];
	                    var s_disabled = "";

	                     if(isLogin == "Y"){
	                      if(item.fil2 !== undefined){ filprice = parseInt(item.fil2);}
	                      if(item.opt2 !== undefined){ filprice += parseInt(item.opt2); }
	                           if( isNaN(filprice) == true){
	                              filprice = 0;
	                           }
	                    }else{
	                     if(item.fil2 !== undefined){ filprice = parseInt(item.fil2);}
	                      if( isNaN(filprice) == true){
	                         filprice = 0;
	                      }
	                    }


	                    if (filtered2Name !== undefined) {
	                        filteredModelPrice = parseInt(filtered2Name.price) + parseInt(filprice);
	                        //s_disabled = "";
	                    } else {
	                        filteredModelPrice = parseInt(item.price) + parseInt(filprice);
	                        s_disabled = "disabled";
	                    }

	                    var getIdx = function(i) {
	                        var idx = i + 1;
	                        if (idx < 10) {
	                            idx = '0' + idx;
	                        } //[통합수정 2020-09-14]
	                        return 'chk' + idx;
	                    };

	                    $.each(item.panel, function(j, panel) {
	                        if (aimgDOORLENG4.indexOf(item.type) > -1) {
	                            if (j % 2 === 0) {
	                                panelCode.push(panel.code + '_left')
	                            } else {
	                                panelCode.push(panel.code + '_right')
	                            }
	                        } else if (aFAMILY.indexOf(item.type) > -1) {
	                            if (j % 2 === 0) {
	                                panelCode.push(panel.code + '_left')
	                            } else {
	                                panelCode.push(panel.code + '_right')
	                            }
	                        } else if (aimgKIMCHI.indexOf(item.type) > -1) {
	                            if (j === 0) {
	                                panelCode.push(panel.code + '_left');
	                            } else if (j === 1) {
	                                panelCode.push(panel.code + '_right');
	                            } else if (j === 2) {
	                                panelCode.push(panel.code + '_middle');
	                            } else if (j === 3) {
	                                panelCode.push(panel.code + '_bottom');
	                            } else {
	                                panelCode.push(panel.code);
	                            }
	                        } else {
	                            panelCode.push(panel.code)
	                        }
	                    });
	                    var selcolorCd = "808080";
	                    if (item.selcc != undefined) {
	                        if (item.selcc.length > 1) {
	                            selcolorCd = item.selcc.replace('#', '');
	                        }
	                    }
	                    //내가 만든 BESPOKE, 모바일 AR내 공간에서 체험하기 공통
	                    var commonHTML = '<div class="my-pick_img" data-type="' + item.type + '">' +
	                        '<span class="pick_img"><img src="' + sImgPath + 'v3/frame/' + (function() {
	                            if (item.type.indexOf('1door') > -1 && item.type !== '1door_slim') {
	                                return '1door';
	                            } else if (item.type == '4door_family') {
	                                return '4door_family_' + selcolorCd;
	                            } else if (item.type == '5door_chef') {
	                                return '5door_chef_' + selcolorCd;
	                            } else if (item.type == '4door_chef') {
	                                return '4door_chef_' + selcolorCd;
	                            } else {
	                                return item.type;
	                            }
	                        })() + '.png?$ORIGIN_PNG$" alt="' + item.type + '"></span>' +
	                        '<span class="pick_img_mo"><img src="' + sImgPath + 'v3/frame/mo_' + (function() {
	                            if (item.type.indexOf('1door') > -1 && item.type !== '1door_slim') {
	                                return '1door';
	                            } else if (item.type == '4door_family') {
	                                return '4door_family_' + selcolorCd;
	                            } else if (item.type == '5door_chef') {
	                                return '5door_chef_' + selcolorCd;
	                            } else if (item.type == '4door_chef') {
	                                return '4door_chef_' + selcolorCd;
	                            } else {
	                                return item.type;
	                            }
	                        })() + '.png?$ORIGIN_PNG$" alt="' + item.type + '"></span>' +
	                        '<div class="pick_doors">' + making.frame(item.type, item).join('') + '</div>' +
	                        '</div>' +
	                        '<ul class="my-pick_info">' +
	                        '<li class="pick_name"><a href="' + item.url + '" title="새창 열림" target="_blank">' + item.name + '</a></li>' +
	                        '<li class="pick_price">' + controlNumber.numberWithCommas(item.price) + '원' + '</li>' +
	                        '</ul>';

	                    var newHTML = '<li class="my-edition-pick-item" id=model_' + item.id + '>' +
	                        commonHTML +
	                        '<button type="button" class="pick_btn_detail js-popup">선택 사항 보기</button>' +
	                        '<div class="my-pick-btns">' +
	                        '<a href="javascript:;" class="my-pick_btn_buy ' + s_disabled + '" data-omni-type="microsite" data-omni="sec:bespoke:buy:buynow_' + item.name + '">바로 구매하기</a>' +
	                        '<button type="button" class="' + sDELETEBTN + '" data-omni-type="microsite" data-omni="sec:bespoke:buy:delete_' + item.name + '"><span class="delete">삭제하기</span></button>' +
	                        '</div>' +
	                        '</li>';
	                    //모바일 AR내 공간에서 체험하기
	                    var popHtml = '<li class="my-edition-pick-item">' +
	                        '<label for="' + getIdx(i) + '">' +
	                        commonHTML +
	                        '<div class="chkbox-wrap">' +
	                        '<input type="checkbox" id="' + getIdx(i) + '" name="chkAr" class="ar-check" title="체크">' +
	                        '<i class="ar-check-mark"></i>' +
	                        '</div>' +
	                        '</label>' +
	                        '</li>';
	                    aProdHtml.push($(newHTML).get(0));
	                    aProdHtmlPop.push($(popHtml).get(0));
	                    var typeKr = data.filter(function(dataItem) {
	                        return dataItem.dataType === item.type;
	                    })[0].type;
	                    choicedOpt = making.panelDom(item.type, item).join('') + '<tr class="total">' +
	                        '<td>총 구매가격 (회원가)</td>' +
	                        '<td colspan="2" class="right">' + controlNumber.numberWithCommas(item.price) + '원' + '</td>' + // +추가 [통합수정 2020-09-14]
	                    '</tr>';
	                    choicedOpt2 = '<tr>' +
	                        '<th>' + item.name + '</th>' +
	                        '<th>' + typeKr + '</th>' +
	                        '<th>' + controlNumber.numberWithCommas(filteredModelPrice) + '원' + '</th>' + // +추가 [통합수정 2020-09-14]
	                     '</tr>';

	                    aSelectedOpt[i] = choicedOpt;
	                    aSelectedOpt2[i] = choicedOpt2;
	                });
	                $modelList.html('').append(aProdHtml);
	                $ARPOPUP.find('.my-edition-pick-list').html('');
	                $.each(aProdHtmlPop, function(i, item) {
	                    $ARPOPUP.find('.my-edition-pick-list').append(item);
	                });
	                if (prod3List.length > 0) {
	                    $(sSTEP04).find('.cookie_length').text(prod3List.length);
	                } else {
	                    $(sSTEP04).find('.cookie_length').text(settingCookie.loadProd().length);
	                }
	                pushProdList();
	            };

	            //내가 만든 BESPOKE 제거
	            var deleteChoicedLi = function() {
	                var $btnDelete = $('.' + sDELETEBTN);
	                $btnDelete.off('click').on('click', function() {
	                    if (isLogin == "Y") {
	                        settingCookie.deleteDB($(this).parents('.my-edition-pick-item'));
	                    } else {
	                        settingCookie.deleteProd($(this).parents('.my-edition-pick-item'));
	                    }
	                })
	            };

	            var exposureList = function() {
	                var $moreBtn = $('.more_btn'),
	                    nMaxLength = 6,
	                    sItem = '.my-edition-pick-section .my-edition-pick-item';

	                var fnPc = function() {
	                    $(sItem).show();
	                    if ($moreBtn.css('display') === 'none') {
	                        $moreBtn.show();
	                    }
	                };

	                var fnMo = function() {
	                    $(sItem).hide();
	                    if ($(sItem).length > nMaxLength) {
	                        $(sItem + ':nth-child(-n+' + nMaxLength + ')').show();
	                    } else {
	                        $(sItem).show();
	                        $moreBtn.hide();
	                    }
	                };

	                $moreBtn.click(function() {
	                    var nVisibleLength = $(sItem + ':visible').length + 1,
	                        nAddLeng = 2;
	                    $(sItem + ':nth-child(n+' + nVisibleLength + '):nth-child(-n+' + (nVisibleLength + nAddLeng) + ')').show();

	                    if ($(sItem + ':visible').length === prodList.length) {
	                        $moreBtn.hide();
	                    }
	                });
	                fnPc();
	                var isMobile = window.innerWidth <= 720 ? true : false;
	                if (isMobile) { fnMo() }
	                resizeFunc(fnPc, fnMo)
	            };
	            makeHTML();
	            deleteChoicedLi();
	            exposureList();
	        };

	       var afterDBDelete = function($this) {

	            var userSeq = $this.attr('id').substr(6);
	            var allData = { 'userSeq': userSeq };
	            
	            var id = getParameter('id');

	            jQuery.ajaxSettings.traditional = true;
	            var option = {
	                //url: 'https://local.sec.samsung.com/comLocal/bespoke/myModelDelAjax.do',
	            	url: '/sec/xhr/bespoke/myModelDelAjax', //[2020-09-07 리뉴얼]
	            	dataType: "json",
	                data: allData,
	                jsonpCallback: "jsonpcallback_bespoke",
	                type: "POST",
	                success: function(data) {
	                    if (data.resultCode == "-1") {
	                        //$('.loginBtn').click();
	                    	window.location.href =  "/sec/member/indexLogin/?returnUrl=" + window.location.pathname + "?id="+id;	//[2020-09-07 리뉴얼]
	                    } else if (data.resultCode == '1') {
	                        pushProd2List();
	                    } else {
	                        alert(data.resultCode + "데이타 삭제 오류 입니다.");
	                    }
	                },
	                error: function(response, status, error) {
	                    alert('error1:myModelDelAjax 오류!');
	                },
	                beforeSend: function(xhr) {
	                    xhr.setRequestHeader("ajax", true);
	                },
	                complete: function() {}
	            };
	            $.ajax(option);
	        };

	        var afterDelete = function($this) {
	            var resetId = function($this) {
	                var thisId = $this.attr('id');
	                $this.remove();
	                cleanProdList = prodList.filter(function(item) {
	                    return item.id !== controlNumber.onlyNumber(thisId);
	                })
	                prodList = cleanProdList;
	                $.each(prodList, function(i, item) {
	                    item.id = (i + 1);
	                })
	            };
	            resetId($this);
	            settingCookie.saveCookie(prodList);
	            initCookieHTML();
	        };
	        var settingCookie = { //쿠키 설정
	            saveCookie: function(arr) {
	                $.cookie(cookieName, JSON.stringify(arr), { expires: 7, path: '/' });
	                savedLength = prodList.length;
	            },
	            loadProd: function() {
	                if ($.cookie(cookieName) !== undefined && typeof($.cookie(cookieName)) === 'string') {
	                    var choiceList = JSON.parse($.cookie(cookieName));
	                    return choiceList;
	                }
	            },
	            makeProd: function(gubun, val1, val2, fal1, fal2, pkgnm, type, model, panelData, totalPrice, url, opt1, opt2) { // 2020-06-24 패키지  옵션
	            	
	            	var listObj = {};
	                if (gubun == "2") {
	                    var newId = prodList.length + 1;
	                    listObj = {
	                        id: newId,
	                        name: model,
	                        type: type,
	                        panel: panelData,
	                        price: totalPrice,
	                        url: url,
	                        dep: datadep,
	                        year: sYear,
	                        idx: selectidx,
	                        selcc: door4_fam_col,
	                        pkg1: val1,
	                        pkg2: val2,
	                        fil1: fal1,
	                        fil2: fal2,
	                        pkgnm: pkgnm,
	                        opt1: opt1,
	                        opt2: opt2
	                    }
	                    prodList.push(listObj);
	                    this.saveCookie(prodList);
	                    savedLength = prodList;
	                } else {
	                    var save2List = [];
	                    listObj = {
	                        id: 1,
	                        name: model,
	                        type: type,
	                        panel: panelData,
	                        price: totalPrice,
	                        url: url,
	                        dep: datadep,
	                        year: sYear,
	                        idx: selectidx,
	                        selcc: door4_fam_col,
	                        pkg1: val1,
	                        pkg2: val2,
	                        fil1: fal1,
	                        fil2: fal2,
	                        pkgnm: pkgnm,
	                        opt1: opt1,
	                        opt2: opt2
	                    }
	                    save2List.push(listObj);
	                    this.saveCookie(save2List);
	                }
	            },
	            deleteDB: function($this, caseType) {
	                popup.confirm_(1, '선택한 제품을 내가 만든 BESPOKE 목록에서<br/>삭제 하시겠습니까?', function() { afterDBDelete($this); })
	            },
	            deleteProd: function($this, caseType) {
	                var cleanProdList;
	                if (caseType === 'last') {
	                    afterDelete($this);
	                } else {
	                    popup.confirm_(1, '선택한 제품을 내가 만든 BESPOKE 목록에서<br/>삭제 하시겠습니까?', function() { afterDelete($this); })
	                }
	            }
	        }
	        var pushProd2List = function() {

	        	var params = {
					'storeCd': 'sec'
				};
	        	
	            var option = {
	                // 200605 - data 제품( stg , 운영)
	            	url: '/sec/xhr/bespoke/myModelInfoAjax',
	                //url: 'https://local.sec.samsung.com/comLocal/bespoke/myModelInfoAjax.do?storeCd=sec',
	                dataType: 'json',
	                jsonpCallback: "jsonpcallback_bespoke",
	                type: 'POST',
	                data: params,
	                success: function(rtnjson) {
	                	rtnjson.result =  rtnjson.myModelInfo; // [2020-09-07]
	                    if (rtnjson.result.length > 0) {
	                        var prod2List = [];
	                        $.each(rtnjson.result, function(cnt, item) {
	                            var prod1 = item.panelMdlInfo.split('|');
	                            var prod2 = item.panelClrInfo.split('|');
	                            var prod3 = item.panelPriceInfo.split('|');
	                            var panel2List = [],
	                                pkg1 = "",
	                                pkg2 = "",
	                                fil1 = "",
	                                fil2 = "",
	                                opt1 = "",
	                                opt2 = "",
	                                pnallprice = 0,
	                                pkgNm = "";
	                            for (var i = 0; i < prod1.length; i++) {
	                                var panel2Data = {
	                                    'code': prod1[i],
	                                    'color': prod2[i],
	                                    'panelprice': prod3[i] || 0,
	                                };

	                                if (i == 1 && (aFAMILY.indexOf(item.dataType) > -1)) {
	                                    pnallprice = pnallprice + 0;
	                                } else {
	                                    pnallprice = pnallprice + parseInt(prod3[i] || 0);
	                                }
	                                panel2List.push(panel2Data);
	                            }
	                            var totalprice = 0;
	                            totalprice = parseInt(item.prdPrice) + pnallprice;

	                            if (item.pkgList != undefined) {
	                                $.each(item.pkgList, function (i, pkg) {
	                                    if(pkg.autoSumYn=="Y"){
	                                      if(cnt == 0){
	                                         fil1 = pkg.pkgMdl;
	                                         fil2 = pkg.price;

	                                      }else{

	                                        opt1 = pkg.pkgMdl;
	                                        opt2 = pkg.price;

	                                      }
	                                      cnt++;

	                                    }else{
	                                        pkg1 =pkg.pkgMdl;
	                                        pkg2 =pkg.price;
	                                        pkgNm=pkg.pkgNm;
	                                    }
	                                    totalprice = totalprice + parseInt(pkg.price);
	                                });
	                            }
	                            var prod2Data = {
	                                'id': item.userSeq,
	                                'name': item.prdMdl,
	                                'type': item.dataType,
	                                'panel': panel2List,
	                                'price': totalprice,
	                                'url': item.url,
	                                'selcc': item.colorCd,
	                                'pkg1': pkg1,
	                                'pkg2': pkg2,
	                                'fil1': fil1,
	                                'fil2': fil2,
	                                'opt1' : opt1,
	                                'opt2' : opt2,
	                                'pkgnm': pkgNm
	                            };
	                            prod2List.push(prod2Data);
	                        })
	                        prod3List = prod2List;
	                        initCookieHTML();
	                    } else {
	                        $('.my-edition-pick-section').hide();
	                    }
	                },
	                error: function(response, status, error) {
	                    alert('fixedMatchAjax.오류');
	                },
	                beforeSend: function(xhr) {
	                    xhr.setRequestHeader('ajax', true);
	                },
	                complete: function() {}
	            };
	            $.ajax(option);
	        };
	        var checkCookie = function() {
	            if (isLogin == "Y") {
	                pushProd2List();
	            } else {
	            	if ($.cookie(cookieName) !== undefined && typeof($.cookie(cookieName)) === 'string') {
	                    pushProdList();
	                    initCookieHTML();
	                } else {
	                    $('.my-edition-pick-section').hide();
	                };
	            }
	        };
	        var modelData = {};
	        var aType = [];
	        var check1Door = function(type) {
	            switch (type) {
	                case '1door_refrigerator':
	                case '1door_freezer':
	                case '1door_kimchi':
	                    return '1door';
	                    break;
	                case '4door_kimchi_584':
	                case '4door_kimchi_486':
	                    return '4door_kimchi_486';
	                    break;
	                case '6door': // 200602 - small img
	                    return '6door';
	                    break;
	                case '5door': // 200602 - small img
	                    return '5door';
	                    break;
	                case '4door':
	                case '4door_kf':
	                    return '4door';
	                    break;
	                case '4door_chef': // 4door_gold_pc
	                case '4door_chef2':
	                case '5door_chef':
	                default:
	                    return type;
	            }
	        };
	        var colorBtnMix = [];
	        var aPanelPrice = [];
	        var aTotalPrice = [];
	        var oTotalPrice = [];
	        var aD4FamColor = [];
	        var aDmodelName = [];
	        var aPakageArry = [];
	        var aGoodsPath = [];
	        //Step 1 선택시 변경될 step2 내용
	        var choiceModel = {
	            init: {
	                makeHTML: function() {

	                    $.each(data, function(i, item) {
	                        aType.push([]);
	                        //var str1 = "inactive coming_soon";
	                        //var str2 = '<div class="product-item_badge"><img src="//local.sec.samsung.com/comLocal/bespoke/images/v1/ico_presale.png"></div>';
	                        var str1 = "";
	                        var str2 = "";
	                        if (item.product.length !== 0) {
	                            var typeHTML = '<div class="module_type slider-item ' + str1 + '"><span class="dim_area"></span>' +
	                                '<a href="javascript:;" data-type=' + item.dataType + ' data-dep="' + item.option.department + '" data-omni-type="microsite" data-omni="sec:bespoke:buy:step2:select doortype_' + item.dataType + '">' +
	                                str2 + '<div class="product-item_img"><img src="' + sImgPath + 'v3/frame/thumb_' + check1Door(item.dataType) + '.png?$ORIGIN_PNG$"></div>' +
	                                '<div class="product-item_txt">' +
	                                '<strong>' + item.type + '</strong>' +
	                                '<p>' + item.subject + '</p>' +
	                                '</div>' +
	                                '</a>' +
	                                '</div>';
	                        }
	                        aType[i].push($(typeHTML).get(0));
	                    });
	                },
	                appendHTML: function() {
	                    $.each(aType, function(i, item) {
	                        $('.ref-module-list').append(aType[i]);
	                    })
	                },
	                act: function() {
	                    this.makeHTML();
	                    this.appendHTML();
	                }
	            },
	            //step2 선택시 변경될 내용 모음
	            afterChoice: {
	                saveModelData: function(self_) {
	                    //var $this = this;	//[통합수정 2020-09-14 불필요 변수]
	                    modelData.type = self_.attr('data-type');
	                    modelData.dataType = data.filter(function(item) {
	                        return item.dataType === modelData.type;
	                    })[0].type;
	                    modelData.department = self_.attr('data-dep');
	                },
	                //step2 선택시 변경될 step4 내용
	                gridColor: {
	                    selector: {
	                        $TABBTN: $(sSTEP04).find(sTABBTN),
	                        $TABVIEW: $(sSTEP04).find(sTABVIEW),
	                        aMaterialBtn: [],
	                        aFilteredMaterial: [],
	                        aFilteredColor: []
	                    },
	                    makeHTML: function() {
	                        var self_ = this.selector,
	                            filterColor = data.filter(function(i, item) { return i.dataType === modelData.type })[0];
	                        var hasColorList = filterColor.option.list[sYear].filter(function(item) { return item.color.length > 0; });
	                        var cleanArr = function() {
	                            self_.aMaterialBtn = [];
	                            self_.aFilteredMaterial = [];
	                            self_.aFilteredColor.length = [];
	                        };


	                        // 200713- 셰프 팝업
	                        var $colorchipToolBtn = $('.colorchip_tit .tooltip_btn');
	                        if (aCHEFCL.indexOf(modelData.type) > -1) {
	                            $('.colorchip_tit span.cp_type').text('셰프컬렉션 전용');
	                            $colorchipToolBtn.find('span').text('셰프컬렉션 전용');
	                            $colorchipToolBtn.attr('data-href', '/sec/bespoke/buy/layer.html?tab=0');
	                            $colorchipToolBtn.attr('data-tab', '0');
	                            $colorchipToolBtn.attr('removeAttr');

	                        }else{
	                            $('.colorchip_tit span.cp_type').text('글래스 / 메탈');
	                            $colorchipToolBtn.find('span').text('글래스 / 메탈');
	                            $colorchipToolBtn.attr('data-href', '/sec/bespoke/buy/layer.html?tab=1&amp;slide=0');
	                            $colorchipToolBtn.attr('data-tab', '1');
	                            $colorchipToolBtn.attr('data-slide', '0');

	                        }

	                        cleanArr();
	                        colorBtnMix = [];
	                        $(sTABVIEW).find('.color_btn').attr('disabled', true);
	                        $(sTABVIEW).find('.my-edition-color_list li').hide();
	                        $.each(hasColorList, function(i, item) {
	                            self_.aFilteredColor.push([]);
	                            $.each(item.color, function(j, prod) {
	                                //var colorEnName = prod.name.en;
	                                var colorBtn = $('.color_btn[data-color=' + prod.name.en + ']');
	                                colorBtn.removeAttr('disabled');
	                                colorBtn.parent().show();
	                                //[2020-09-07]jkjang리뉴얼ver list-item style 적용 jkjang리뉴얼
									colorBtn.parent().css('display','list-item');
									
	                                colorBtn.find('img').attr('src', prod.clrChipUrl);
	                                colorBtn.find('.color_txt').text(prod.name.kr);

	                                colorBtnMix.push(prod.mixYn + prod.name.en);
	                            });
	                        });
	                        $('.colorchip_group').each(function(i, item) {
	                            var cnt = $(item).find('.my-edition-color_list').find("li[style*=list-item]").length;
	                            var dataGrp = $(item).attr("data-group");

	                            if (cnt > 0) {
	                                $('[data-group="' + dataGrp + '"]').css('display', 'inline-block');
	                            } else {
	                                $('[data-group="' + dataGrp + '"]').hide();
	                            }
	                        });
	                        $('.colorchip_list.mo_only.tab > a:visible:eq(0)').trigger('click');
	                    },
	                    appendHtml: function() {
	                    	/*
	                        var self_ = this.selector,
	                            sColorList = sMYEDITION + '-color_list';

	                        var tabBtn = function() {
	                            self_.$TABBTN.html('');
	                            $.each(self_.aMaterialBtn, function(i, item) {
	                                self_.$TABBTN.append(item);
	                            })
	                        };
	                        var tabView = function() {
	                            $.each(self_.aFilteredColor, function(i, item) {
	                                self_.$TABVIEW.contents().remove();
	                                self_.$TABVIEW.append(self_.aFilteredMaterial)
	                                    .find('>li')
	                                    .eq(i)
	                                    .find(sColorList)
	                                    .html('')
	                                    .append(item);
	                            });
	                        };
	                        */
	                    },
	                    reStyle: function() {
	                        var $el = this.selector.$TABBTN.find('li');
	                        $el.css('width', 'calc(100% / ' + $el.length + ')')
	                    },
	                    act: function() {
	                        this.makeHTML();
	                    }
	                },

	                gridModel: {
	                    selector: {
	                        choicedType: '',
	                        aModel: []
	                    },
	                    tableCase: function() {
	                        var $table = $('.step-box_function');
	                        $('.my-edition-step_cont').addClass('is_show');
	                        $('.step-box_total').addClass('is_show');

	                        if (aDOORLENG4.indexOf(modelData.type) > -1) {
	                            $table.find('.type1').addClass('is_active');
	                            $table.find('.type2').removeClass('is_active');
	                            $table.find('.type3').removeClass('is_active');
	                            $table.find('.type4').removeClass('is_active');
	                            $table.find('.type5').removeClass('is_active');
	                            $table.find('.type6').removeClass('is_active');
	                            $table.find('.type7').removeClass('is_active');

	                        } else if (aKIMCHI.indexOf(modelData.type) > -1) {
	                            $table.find('.type3').addClass('is_active');
	                            $table.find('.type1').removeClass('is_active');
	                            $table.find('.type2').removeClass('is_active');
	                            $table.find('.type4').removeClass('is_active');
	                            $table.find('.type5').removeClass('is_active');
	                            $table.find('.type6').removeClass('is_active');
	                            $table.find('.type7').removeClass('is_active');
	                        } else if (aFAMILY.indexOf(modelData.type) > -1) {
	                            $table.find('.type5').addClass('is_active');
	                            $table.find('.type1').removeClass('is_active');
	                            $table.find('.type2').removeClass('is_active');
	                            $table.find('.type3').removeClass('is_active');
	                            $table.find('.type4').removeClass('is_active');
	                            $table.find('.type6').removeClass('is_active');
	                            $table.find('.type7').removeClass('is_active');

	                        } else if (aCHEFCL.indexOf(modelData.type) > -1) {
	                            $table.find('.type7').addClass('is_active');
	                            $table.find('.type1').removeClass('is_active');
	                            $table.find('.type2').removeClass('is_active');
	                            $table.find('.type3').removeClass('is_active');
	                            $table.find('.type4').removeClass('is_active');
	                            $table.find('.type5').removeClass('is_active');
	                            $table.find('.type6').removeClass('is_active');
	                        } else {
	                            $table.find('.type6').addClass('is_active');
	                            $table.find('.type1').removeClass('is_active');
	                            $table.find('.type3').removeClass('is_active');
	                            $table.find('.type4').removeClass('is_active');
	                            $table.find('.type5').removeClass('is_active');
	                            $table.find('.type2').removeClass('is_active');
	                            $table.find('.type7').removeClass('is_active');
	                        }

	                        $('.my-edition-model-tbl.is_active').addClass('is_show');
	                        $('.my-edition-model-tbl.is_active tbody tr:first-child').css('background', "red");
	                    },
	                    makeHTML: function() {
	                        var self_ = this;
	                        this.selector.choicedType = data.filter(function(item) {
	                            return item.dataType === modelData.type;
	                        })[0];
	                        self_.selector.aModel = [];
	                        var door4FamilyFunc = function(item) {
	                            if (item !== undefined) {
	                                var rtnHtml = "";
	                                if (item.colorCd !== undefined) {
	                                    rtnHtml = '<td scope="col"><div class="tbl_color" style="background-color:' + item.colorCd + '"></div><span class="color_txt">' + item.etc + '</span></td>';
	                                } else {
	                                    rtnHtml = '<td scope="col" class="empty_line"></td>'
	                                }
	                                return rtnHtml;
	                            } else {
	                                return '<td scope="col" class="empty_line"></td>';
	                            }
	                        };
	                        var door4ChefFunc = function (item) { // 200714 - 프레임 컬러
	                            if (item !== undefined) {
	                                var rtnHtml = "";
	                                if (item.colorCd !== undefined) {
	                                    rtnHtml = '<td scope="col"><div class="tbl_color" style="background-color:' + item.colorCd + '"></div><span class="color_txt">' + item.etc + '</span></td>';
	                                } else {
	                                    rtnHtml = '<td scope="col" class="empty_line"></td>'
	                                }
	                                return rtnHtml;
	                            } else {
	                                return '<td scope="col" class="empty_line"></td>';
	                            }
	                        };
	                        var energyFunc = function(energy) {
	                            if (energy == "-등급") {
	                                return '<td scope="col" class="empty_line"></td>';
	                            } else if (energy !== undefined) {
	                                return '<td scope="col">' + energy + '</td>';
	                            } else {
	                                return '<td scope="col" class="empty_line"></td>';
	                            }
	                        };
	                        var haveFunc = function(convenience) {
	                            if (convenience == 'O') {
	                                return '<td scope="col" class="have_function"></td>';
	                            } else if (convenience == '-') {
	                                return '<td scope="col" class="empty_line"></td>';
	                            } else {
	                                if (convenience == undefined) {
	                                    return '<td scope="col" class="empty_line"></td>';
	                                } else {
	                                    if (convenience.trim() == "") {
	                                        return '<td scope="col" class="empty_line"></td>';
	                                    } else {
	                                        return '<td scope="col">' + convenience + '</td>';
	                                    }
	                                }
	                            }
	                        };
	                        this.selector.choicedType.product.sort(function(a, b) { return b.price - a.price; });

	                        var prdCnt = 0,
	                            prd2Cnt = 0,
	                            gubun = "",
	                            pakageObj = "",
	                            choicedPakage = "";
	                        aPakageArry = [];
	                        gubun = this.selector.choicedType.pkgType;
	                        if (gubun == "T") {
	                            choicedPakage = this.selector.choicedType.pakage;
	                        }
	                        $.each(this.selector.choicedType.product, function(i, item) {
	                            var type1, type3, type4, type5, type6, type7;
	                            if (mobileFlag) {
	                                type1 = haveFunc(item.convenienceMo['빅아이스메이커']) + haveFunc(item.convenienceMo['이온살균청정기']) + haveFunc(item.convenienceMo['UV청정탈취']);


	                                type3 = haveFunc(item.convenienceMo['메탈쿨링시스템']) + haveFunc(item.convenienceMo['김치통(상칸)']); //김치냉장고
	                                type4 = haveFunc(item.convenienceMo['4단계맞춤보관실']) + haveFunc(item.convenienceMo['칸별3종수납세트']); //3도어
	                                type5 = door4FamilyFunc(item) + haveFunc(item.convenienceMo['이온살균청정기']) + haveFunc(item.convenienceMo['UV청정탈취']); //패밀리허브
	                                type6 = haveFunc(item.convenienceMo['메탈쿨링시스템']) + haveFunc(item.convenienceMo['UV청정탈취']); //메탈쿨링/ UV 청정탈취
	                                type7 = door4ChefFunc(item) + haveFunc(item.convenienceMo['오토필정수기']);
	                            } else {
	                                type1 = haveFunc(item.convenience['빅아이스메이커']) + haveFunc(item.convenience['이온살균청정기']) + haveFunc(item.convenience['UV청정탈취']);
	                                type3 = haveFunc(item.convenience['메탈쿨링시스템']) + haveFunc(item.convenience['김치통(상칸)']); //김치냉장고
	                                type4 = haveFunc(item.convenience['4단계맞춤보관실']) + haveFunc(item.convenience['칸별3종수납세트']); //3도어
	                                type5 = door4FamilyFunc(item) + haveFunc(item.convenience['이온살균청정기']) + haveFunc(item.convenience['UV청정탈취']); //패밀리허브
	                                type6 = haveFunc(item.convenience['메탈쿨링시스템']) + haveFunc(item.convenience['UV청정탈취']); //메탈쿨링/ UV 청정탈취
	                                type7 = door4ChefFunc(item) + haveFunc(item.convenience['오토필정수기']);
	                            }
	                            var colcnt = "5";
	                            if (aDOORLENG4.indexOf(modelData.type) > -1) {
	                                colcnt = "6";
	                            } else if (aKIMCHI.indexOf(modelData.type) > -1) {
	                                colcnt = "5";
	                            } else if (aFAMILY.indexOf(modelData.type) > -1) {
	                                colcnt = "5";
	                            } else if (aCHEFCL.indexOf(modelData.type) > -1) {
	                                colcnt = "5";
	                            } else {
	                                colcnt = "5";
	                            }
	                            if (gubun == "T") {
	                                pakageObj = choicedPakage;
	                            } else {
	                                pakageObj = item.pakage;
	                            }
	                            var model2HTML = "";
	                            var autoSumprice = [],
	                                packagePrice = "0";
	                            var sumPrice = 0;
	                            if (pakageObj != undefined) {
	                                var kk = 0,
	                                    vpkgDesc = "",
	                                    show_act = "",
	                                    autoSumYncnt = 0,
	                                    autoSumCnt = 0,
	                                    paclen = 0,
	                                    chk_act = "";
	                                if (prdCnt == 0) { show_act = "show"; }
	                                $.each(pakageObj, function(i, itemGrpList) {
	                                    $.each(itemGrpList, function(k, itemGrp) {
	                                        if (itemGrp.autoSumYn == "Y") {
	                                            f2pkgMdl = itemGrp.pkgMdl;
	                                            autoSumprice.push(itemGrp.price); // 2020-07-01 패키지 옵션 가격 합산
	                                            autoSumCnt = kk;
	                                            autoSumYncnt++;
	                                        }else{

	                                             f2pkgMdl ="";
	                                        }
	                                    });
	                                    kk++;
	                                    paclen = kk;
	                                });

	                                var pacHTMLArry = [],
	                                    pboxHTMLArry = [],
	                                    pkgDescArry = [];
	                                var packageHTML = "",
	                                    pacboxHTML = "",
	                                    gb_act = "",
	                                    pkgDescHTML = "";
	                                kk = 0;
	                                $.each(pakageObj, function(i, itemGrpList) {
	                                    if (!(autoSumYncnt > 0 && kk == autoSumCnt)) {
	                                        //if(kk==0) {
	                                        var prd3Cnt = 0;
	                                        packageHTML = "";
	                                        pacboxHTML = "";
	                                        $.each(itemGrpList, function(k, itemGrp) {
	                                            if (prd3Cnt == 0) { chk_act = ""; }
	                                            // 2020-06-24 패키지 오류 수정
	                                            if (k == 0 && kk == 0) {
	                                                packagePrice = itemGrp.price;
	                                                //p1pkgMdl = itemGrp.pkgMdl;
	                                                aPakageArry.push(prd2Cnt);
	                                            }
	                                            pkgDescArry.push(itemGrp.pkgDesc); // 200624 - 패키지 오류 수정
	                                            p1pkgMdl = itemGrp.pkgMdl;

	                                            // 2020-07-01 패키지 옵션 가격 합산

	                                            sumPrice = 0;
	                                            $.each(autoSumprice, function(i, v) {
	                                                sumPrice += v;
	                                            });

	                                            // 2020-07-01 패키지 옵션 가격 합산



	                                            // 2020-06-24 패키지 오류 수정

	                                            // 2020-06-24 패키지  오토필 캐틀 구분
	                                            if (p1pkgMdl =="RA-A00AUUAA") {

	                                                packageHTML = packageHTML + '<li><input type="radio" name="package' + prdCnt + '1" id="package' + prd2Cnt + '" ' +
	                                                    'value="' + prd3Cnt + ';' + prdCnt + ';' + kk + ';' + p1pkgMdl + ';' + itemGrp.price + ';' +  itemGrp.pkgNm + '" class="model_rdobox" ' + chk_act + '>' +
	                                                    '<label for="package' + prd2Cnt + '">' + itemGrp.pkgNm + ' (+' + controlNumber.numberWithCommas(itemGrp.price) + '원)</label></li>';
	                                                prd2Cnt++;
	                                                prd3Cnt++;

	                                            } else {
	                                                packageHTML = packageHTML + '<li><input type="radio" name="package' + prdCnt + '0" id="package' + prd2Cnt + '" ' +
	                                                    'value="' + prd3Cnt + ';' + prdCnt + ';' + kk + ';' + p1pkgMdl + ';' + itemGrp.price + ';' + f2pkgMdl + ';' + sumPrice + ';' + itemGrp.pkgNm + '" class="model_rdobox" ' + chk_act + '>' +
	                                                    '<label for="package' + prd2Cnt + '">' + itemGrp.pkgNm + ' (+' + controlNumber.numberWithCommas(itemGrp.price) + '원)</label></li>';
	                                                prd2Cnt++;
	                                                prd3Cnt++;
	                                            }
	                                            // 2020-06-24 패키지  오토필 캐틀 구분

	                                        });
	                                        pacHTMLArry.push(packageHTML);

	                                        $.each(itemGrpList[0].pkgOptList, function(i, itemList) {
	                                            /*
	                                            if (itemList.useYn != "Y") {
	                                                gb_act = "class='inactive'";
	                                            } else {
	                                                gb_act = "";
	                                            }
	                                           pacboxHTML = pacboxHTML + '<li ' + gb_act + '><img src="' + itemList.imgUrl + '"><span>[' + itemList.optNm + ']</span></li>';
	                                           */
	                                            pacboxHTML = pacboxHTML + '<div ' + gb_act + '><img src="' + itemList.imgUrl + '"></div>'; // 200624 - 패키지 슬라이드

	                                        });
	                                        pboxHTMLArry.push(pacboxHTML);

	                                    }
	                                    kk++;
	                                });


	                                model2HTML = '<tr class="model_pack ' + show_act + '">';
	                                model2HTML = model2HTML + '<td colspan=' + colcnt + '>';
	                                model2HTML = model2HTML + '<div class="tbl_inner_ch">';
	                                if (!(paclen == 1 && autoSumYncnt > 0)) {
	                                    model2HTML = model2HTML + '<p class="tbl_inner_tit">내부 전문수납공간 선택</p>';
	                                }
	                                for (z = 0; z < pacHTMLArry.length; z++) {
	                                    model2HTML = model2HTML + '<ul class="package_ch">' + pacHTMLArry[z] + '</ul>';

	                                    model2HTML = model2HTML + '<div class="package_content">';
	                                    model2HTML = model2HTML + '<div class="package_area">';
	                                    model2HTML = model2HTML + '<div class="package_box type7_slick">' + pboxHTMLArry[z] + '</div>'; // 200624 - 패키지 슬라이드


	                                    model2HTML = model2HTML + '</div>'; // package_area

	                                    // 200624 -s 옵션 좌우 슬라이드 -> 고정이미지
	                                    model2HTML = model2HTML + '<div class="package_target">';
	                                    model2HTML = model2HTML + '<span class="package_target-img"><img src="//images.samsung.com/is/image/samsung/p5/sec/bespoke/buy/test_target_view_02.png?$ORIGIN_PNG$" alt=""></span>';
	                                    model2HTML = model2HTML + '<span class="package_target-arrow"><img src="//images.samsung.com/is/image/samsung/p5/sec/bespoke/buy/test_target_arrow_02.png?$ORIGIN_PNG$" alt=""></span>';
	                                    model2HTML = model2HTML + '</div>';

	                                    model2HTML = model2HTML + '<ul class="package_noti">';
	                                    if (!(paclen == 1 && autoSumYncnt > 0)) {
	                                        model2HTML = model2HTML + '<li id="package_noti' + prdCnt + '">' + pkgDescArry[z] + '</li>';
	                                    }
	                                    model2HTML = model2HTML + '</ul>';

	                                    // 200624 -e 옵션 좌우 슬라이드 -> 고정이미지
	                                    model2HTML = model2HTML + '</div>'; //  package_content

	                                }
	                                if (autoSumYncnt > 0) {
	                                    model2HTML = model2HTML + '<p class="my-edition_tab-desc">* 해당 제품에는 정수기용 필터가 함께 제공됩니다.</p>';
	                                }
	                                model2HTML = model2HTML + '</div></td></tr>';
	                            } else if (pakageObj == undefined) {
	                                model2HTML = '<tr class="model_pack" style="display:none;">';
	                                model2HTML = model2HTML + '<td colspan=' + colcnt + '>';
	                                model2HTML = model2HTML + '<div class=tbl_inner_ch>';
	                                model2HTML = model2HTML + '<ul class=package_ch></ul>';

	                                model2HTML = model2HTML + '<div class=package_content>'; // 2020-06-24 패키지  옵션
	                                model2HTML = model2HTML + '<div class=package_area>';
	                                model2HTML = model2HTML + '<div class=package_box></div>';
	                                model2HTML = model2HTML + '<ul class=package_noti></ul>';
	                                model2HTML = model2HTML + '</div></div></div></td></tr>';
	                            }

	                            var model1HTML =
	                                '<tr class="model_list">' +
	                                '<td scope="col">' +
	                                '<input type="radio" name="model" id="model' + prdCnt + '" value="' + prdCnt + '" class="model_rdobox" data-url="' + item.url + '"  data-type="' + item.dataType + '" data-year="' + item.relYear + '" data-omni-type="microsite" data-omni="sec:bespoke:buy:step3:select model_' + item.modelName + '">' +
	                                '<label for="model' + prdCnt + '">' + item.modelName + '</label></td>' +
	                                energyFunc(item.energy) +
	                                (function() {
	                                    if (aDOORLENG4.indexOf(modelData.type) > -1) {
	                                        return type1;
	                                    } else if (aKIMCHI.indexOf(modelData.type) > -1) {
	                                        return type3;
	                                    } else if (aFAMILY.indexOf(modelData.type) > -1) {
	                                        return type5;
	                                    } else if (aCHEFCL.indexOf(modelData.type) > -1) {
	                                        return type7;
	                                    } else {
	                                        return type6;
	                                    }
	                                })() +
	                                '<td scope="col">' + controlNumber.numberWithCommas(parseInt(item.price) + parseInt(sumPrice)) + '원</td>' +
	                                '</tr>';

	                                var modelHTML = model1HTML + model2HTML;
	                                // 2021 김치 플러스 4도어 추가
	                                /*

	                                if(sYear == item.relYear){
	                                    self_.selector.aModel.push($(modelHTML).get(0));
	                                    self_.selector.aModel.push($(modelHTML).get(1));
	                                }

	                                */
	                                self_.selector.aModel.push($(modelHTML).get(0));
	                                self_.selector.aModel.push($(modelHTML).get(1));

	                                // 2021 김치 플러스 4도어 추가

	                            oTotalPrice[i] = parseInt(item.price) + parseInt(sumPrice) + parseInt(packagePrice); //본체+필터+패키지
	                            aTotalPrice[i] = parseInt(item.price) + parseInt(sumPrice) + parseInt(packagePrice); //본체+필터+패키지
	                            aD4FamColor[i] = item.colorCd;
	                            aDmodelName[i] = item.modelName;
	                            aGoodsPath[i] = item.goodsPath;
	                            prdCnt++;
	                        }); //모델,수납공간..end
	                    },
	                    appendHtml: function() {
	                        $('.my-edition_tab-desc').addClass('is_show');
	                        $('.my-edition-model-tbl.is_active').siblings().removeClass('is_show');
	                        $(sTABLE).find('tbody').html('');
	                        $(sSTEP03 + ' .my-edition-model-tbl.is_active table').eq(0).find('tbody').append(this.selector.aModel);


	                        //내부 수납공간 클릭
	                        $.each(aPakageArry, function(k, page) {
	                            var model2Chk = $('#package' + page).trigger('click');
	                            if (!model2Chk.prop('checked')) {
	                                model2Chk.prop('checked', true).attr('checked', true);
	                            }
	                        });
	                        var modelChk = $('.my-edition-model-tbl.is_active tbody tr').eq(0).find('.model_rdobox').trigger('click');
	                        if (!modelChk.prop('checked')) {
	                            modelChk.prop('checked', true).attr('checked', true);
	                        }
	                        $(".my-edition-model-tbl .model_pack").addClass('hide');

	                        $(".my-edition-model-tbl .model_pack").eq(0).removeClass('hide').addClass('show');
	                        var mcnt = $(".my-edition-model-tbl .model_list").length;
	                        for (var i = 0; i < mcnt; i++) {
	                            if (i != 0) { $(".my-edition-model-tbl .model_list").eq(i).removeClass('hide'); }
	                        }

	                        var totalPrice = "" + aTotalPrice[0];

	                        //$('.total_price').html('');
	                        $('.total_price').html('<em>' + controlNumber.numberWithCommas(totalPrice) + '</em>원');
	                        $('.my-edition-making_model').text(aDmodelName[0]);
	                        $('.my-edition-making_link').attr("href", '/sec/' + aGoodsPath[0]); // 2020-06-01   해당제품 상세페이지로 이동


	                        if (aFAMILY.indexOf(modelData.type) > -1) {
	                            door4_fam_col = aD4FamColor[0];
	                        }

	                        if (aCHEFCL.indexOf(modelData.type) > -1) {
	                            door4_fam_col = aD4FamColor[0];
	                        }

	                        setTimeout(packageOption, 1000);  // 200722 - 과부하 현상

	                        // $( "input[value*='오토필 케틀']").prop('checked', true).attr('checked', true);   // 200624 - 옵션 : 오토필 케틀
	                        $("input[value*='오토필 케틀']").parent().parent().next().addClass('data_hidden'); // 200624 - 옵션 : 오토필 케틀
	                        $("input[value*='오토필 케틀']").parent().parent().addClass('data_hidden'); // 200624 - 옵션 : 오토필 케틀
	                        $("input[value*='오토필 케틀']").trigger('click');





	                    },
	                    act: function() {
	                        this.tableCase();
	                        this.makeHTML();
	                        this.appendHtml();

	                    }
	                },
	                //step2 선택시 변경될 .my-edition-making-selection 내용
	                gridRef: {
	                    selector: {
	                        stypeImg: sMODEL + ' ' + '.type-door_img'
	                    },
	                    changeModel: function() {
	                        $('.my-edition-making-ref').removeClass('door_selecting');
	                        var el = $('.my-edition-making-ref[data-type=' + check1Door(modelData.type) + ']');
	                        el.addClass(sACTIVE).siblings().removeClass(sACTIVE);
	                        if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
	                            if (door4_fam_col != undefined) { //door4_fam_col.length>0
	                                el.find('img').attr('src', imgDomain_chef + '/bespoke/images/v3/frame/4door_family_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
	                            }
	                            el.find('.door_btn').eq(1).find('strong').hide();
	                        }

	                        if (aCHEFCL.indexOf(modelData.type) > -1) { //aCHEFCL       //  셰프 frame-200605
	                            if (door4_fam_col != undefined) {
	                                if (modelData.type == "5door_chef") {
	                                    el.find('img').attr('src', imgDomain_chef + '/bespoke/images/v3/frame/5door_chef_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
	                                }
	                                if (modelData.type == "4door_chef") {
	                                    el.find('img').attr('src', imgDomain_chef + '/bespoke/images/v3/frame/4door_chef_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
	                                }
	                            }
	                        }

	                        window.setTimeout(function() { el.find('button').eq(0).addClass(sACTIVE); }, 500);
	                    },
	                    setDoorFamily: function() {},
	                    act: function() {
	                        this.changeModel();
	                    }
	                },
	                act: function(e, $el, time) {
	                    e.preventDefault();
	                    $el = $el || $(this)
	                    choiceModel.afterChoice.saveModelData($el);
	                    choiceModel.afterChoice.gridColor.act();
	                    choiceModel.afterChoice.gridModel.act();
	                    choiceModel.afterChoice.gridRef.act();
	                }
	            }
	        }
	        // Step 1 선택시
	        //[통합수정 2020-09-14]
	        var choiceDep = {
	            selector: {
	                aDepartmentedModel: []
	            },
	            cleanArr: function() {
	                this.selector.aDepartmentedModel = [];
	            },
	            checkDep: function($el) {
	                var self_ = this;

	                this.cleanArr();

	                aType = [];
	                choiceModel.init.act();

	                if ($el === undefined) {
	                    self_.selector.aDepartmentedModel = aType;
	                } else {
	                    var department = $el.attr('data-dep');
	                    $.each(aType, function(i, item) {
	                        if ($(aType[i]).find('a').attr('data-dep') === department) {
	                            self_.selector.aDepartmentedModel.push($(this));
	                        }
	                    })
	                }

	            },
	            changeList: function() {
	                var self_ = this;

	                $('.ref-module-list .slider-item').remove();
	                $.each(this.selector.aDepartmentedModel, function(i, item) {
	                    $('.ref-module-list').append(item);
	                })
	            },
	            resetChoice: function() {
	                $('.my-edition-model-tbl').removeClass('is_show');
	                $('.years-tabs-area').removeClass('is_show');
	                $('.my-edition-step_cont').removeClass('is_show');
	                $('.step-box_total').removeClass('is_show'); //200211 추가
	                $(sTABLE).find('tbody').html('');
	            },
	            act: function($el) {
	                this.checkDep($el);
	                this.changeList();
	                this.resetChoice();
	                aTablePrice = [];
	                if ($el === undefined) {
	                    slickAct.act('init');
	                } else {
	                    slickAct.act();
	                }
	            }
	        }
	        //.my-edition-making-selection의 냉장고 타입과 용량
	        var changeContent = function($this) {
	            var dataType = $($this).attr('data-type');
	            var filteredType = data.filter(function(type) {
	                return type.dataType === dataType;
	            })[0];
	            $(sVOLUME).show().find('span').each(function(i) {
	                $(this).text(controlNumber.numberWithCommas(filteredType.volume[i]));
	            });
	            $('.my-edition-making_name').text(filteredType.type);
	            $("#vliter").text("용량 : " + filteredType.liter + "L");
	            $('.my-edition-making_subject').text(filteredType.subject);
	        };
	        //스탭별 클릭시 실행할 내용

	        var gridStep = function() {
	            choiceModel.init.act();
	            slickAct.act('init');

	            $(sSTEP01).find('.my-edition-step_cont .type-select_btn').click(function(e) {
	                e.preventDefault();
	                e.stopPropagation();
	                var $self = $(this);
	                datadep = $self.attr('data-dep');
	                var common = function() {
	                    moveNextStep($self);
	                    reset.act();
	                    choiceDep.act($self);
	                    $self.addClass(sACTIVE).removeClass(sINACTIVE).parents('.my-edition-cont-inner').siblings().find('.type-select_btn').removeClass(sACTIVE).addClass(sINACTIVE); // 20190624 수정, 20190620 추가
	                    // 200605 - 4door 리셋
	                    var $frameInit4door = $('.my-edition-making-ref[data-type="4door"]');
	                    $frameInit4door.find('img').attr('src', imgDomain_chef + '/bespoke/images/v3/frame/4door.png?$ORIGIN_PNG$');

	                }
	                stepAlert('prev', $('.step-box_module'), 'a', function() {}, function() {}, common)


	            });

	            $(document).on('click', '.ref-module-list .slider-item a', function(e) {
	                e.preventDefault();
	                var $self = $(this);
	                var dataType = $self.attr('data-type');
	                var filteredType = data.filter(function(type) { return type.dataType == dataType; })[0];
	                var common = function() {
	                    moveNextStep($self);
	                    toggleView.showModel.show();
	                    changeContent($self);
	                    changeClass($self, '.module_type', '.module_type');
	                    reset.act('tab');
	                    choiceModel.afterChoice.act(e, $self);
	                }
	                if (stepAlert('next', $(sSTEP01), '.type-select_btn')) return false;
	                if ($('.color_btn.' + sACTIVE).length > 0) {
	                    stepAlert('prev', $('.step-box_color'), 'button', function() { flag = false }, function() {}, common)
	                } else {
	                    common();
	                    flag = true;
	                }
	                if (flag) {
	                    stepAlert('prev', $('.step-box_color'), 'button', function() { flag = false; }, function() {}, common)
	                }
	            });
	            //년도별 탭선택
	            $('.my-edition-model-tabs a').on('click', function(e) {
	                e.preventDefault();
	                var activeC = 'active',
	                    activeT = $(this).attr('href'),
	                    tabGroup = $(this).closest('.my-edition-model-tabs').attr('data-tab-group');
	                if (!$(this).hasClass(activeC)) {
	                    $('[data-tab-group="' + tabGroup + '"]').find('.active').removeClass(activeC);
	                    $('[data-tab-cont="' + tabGroup + '"]').removeClass(activeC);
	                    $(this).closest('.my-edition-model-tabs').removeClass(activeC);
	                    $(this).addClass(activeC);
	                    $(activeT).addClass(activeC);
	                } else {
	                    return false
	                }
	                var tab2chk = $("#tab2").is(".active");
	                var tab2id = $(".tab-cont.active .model_rdobox").val();
	            });

	            //패키지 선택
	            $(document).on('click', '.package_ch input[type=radio]', function(e) {

	                if ($('.type7_slick').hasClass('slick-initialized')) { // 200624 - 패키지 슬라이드
	                    $('.type7_slick').slick('unslick'); // 200624 - 패키지 슬라이드

	                    var choicedType = data.filter(function(item) { return item.dataType == modelData.type; })[0];
	                    var selidx = $(sTABLE).find('input[name=model]:checked').val();
	                    if (selidx == undefined) selidx = "0";
	                    var pakageObj = "";
	                    var gubun = choicedType.pkgType;
	                    if (gubun == "T") {
	                        pakageObj = choicedType.pakage;
	                    } else {
	                        pakageObj = choicedType.product[selidx].pakage;
	                    }

	                    var selnme = $(this).attr("name");
	                    var chkidx = $(sTABLE).find('input[name=' + selnme + ']:checked').val();
	                    if (chkidx != null) {
	                        var chk0Cnt = chkidx.split(';')[0];
	                        var chk1Cnt = chkidx.split(';')[1];
	                        var chk2Cnt = chkidx.split(';')[2];
	                        var kk = 0,
	                            vpkgDesc = "",
	                            pgprice = 0,
	                            frprice = 0;
	                        var grpidx = chk2Cnt;
	                        $.each(pakageObj, function(i, itemGrpList) {
	                            $.each(itemGrpList, function(k, itemGrp) {
	                                if (k == 0 && kk == 0) { frprice = itemGrp.price; }
	                            });

	                            if (kk == grpidx) {
	                                $.each(itemGrpList, function(k, itemGrp) {
	                                    if (k == 0 && kk == 0) { frprice = itemGrp.price; }
	                                    if (chk0Cnt == k) {
	                                        vpkgDesc = itemGrp.pkgDesc;
	                                        pgprice = itemGrp.price;
	                                        p1pkgMdl = itemGrp.pkgMdl;
	                                    }
	                                });
	                            }
	                            kk++;
	                        });
	                        if (curprice == "0") {
	                            oTotalPrice[selidx] = oTotalPrice[selidx] - parseInt(frprice);
	                        } else {
	                            oTotalPrice[selidx] = oTotalPrice[selidx] - parseInt(curprice);
	                        }
	                        var gb_act = "",
	                            pboxidx = 0;
	                        kk = 0;
	                         var __show_el = $(this).closest('.show');
	                        pboxidx = parseInt(selidx) + parseInt(grpidx);
	                        $(sSTEP03 + ' .package_box').eq(pboxidx).html('');
	                        $(sSTEP03 + ' .package_noti').eq(pboxidx).html('');
	                        $(sSTEP03 + ' .package_noti').eq(pboxidx).append('<li><span>' + vpkgDesc + '</span></li>'); // 200624

	                        $.each(pakageObj, function (i, itemGrpList) {

	                            if (kk == grpidx) {
	                                $.each(itemGrpList[chk0Cnt].pkgOptList, function (i, itemList) {
	                                     __show_el.find('.package_box').html('').append('<div ' + gb_act + '><img src="' + itemList.imgUrl + '"></div>');
	                                     __show_el.find('.package_noti').html('').append('<li><span>' + vpkgDesc + '</span></li>');
	                                });
	                            }
	                            kk++;
	                        });
	                        curprice = pgprice;
	                        oTotalPrice[selidx] = oTotalPrice[selidx] + parseInt(pgprice);
	                        var totalPrice = "" + aTotalPrice[selidx]; //본체+필터+패키지
	                        if (totalPrice == "undefined") totalPrice = "0";
	                        selectPrice = parseInt(totalPrice) - parseInt(frprice) + parseInt(pgprice);
	                        selectidx = selidx;
	                        $('.total_price').html('');
	                        $('.total_price').html('<em>' + controlNumber.numberWithCommas(selectPrice) + '</em>원');
	                    }

	                    packageOption(); // 200624 - 패키지 슬라이드
	                }

	            });

	            //년도별 탭선택후 모델선택
	            $(document).on('click', sTABLE + ' tbody input[name="model"]', function(e) {

	            	var selidx;
	                if ($('.type7_slick').hasClass('slick-initialized')) { // 200624 - 패키지 슬라이드
	                    $('.type7_slick').slick('unslick'); // 200624 - 패키지 슬라이드

	                    if (stepAlert('next', $('.step-box_module'), 'a')) return false;

	                    if ($(this).parents('tr').hasClass('clickBg')) {} else {}

	                    var myArticle = $(this).parents().parents().next("tr");
	                    if ($(myArticle).hasClass('hide')) {
	                        $(".my-edition-model-tbl .show").removeClass('show').addClass('hide');
	                        $(myArticle).removeClass('hide').addClass('show');
	                    } else {
	                        $(myArticle).addClass('hide').removeClass('show');
	                    }

	                    selidx = $(sTABLE).find('input[name=model]:checked').val();
	                    $(sTABLE).find('tbody tr.show').find('.package_ch').each(function(i) {
	                        var pacChk = $(sTABLE).find('input[name=package' + selidx + ']').eq(0).trigger('click');
	                        // var pacChk2 = $(sTABLE).find('input[name=package' + selidx +']').eq(3).trigger('click');
	                        if (!pacChk.prop('checked')) {
	                            pacChk.prop('checked', true).attr('checked', true);
	                            // 2020-06-24 세프 패키지 선택 수정
	                            // pacChk2.prop('checked', true).attr('checked', true);
	                            // 2020-06-24 세프 패키지 선택 수정
	                        }
	                    });

	                    var totalPrice = "" + aTotalPrice[selidx];
	                    if (totalPrice == "undefined") totalPrice = "0";

	                    selectPrice = totalPrice; //선택한 제품조합 회원가
	                    selectidx = selidx;

	                    $('.total_price').html('');
	                    $('.total_price').html('<em>' + controlNumber.numberWithCommas(totalPrice) + '</em>원');

	                    $('.my-edition-making_model').text(aDmodelName[selidx]);
	                    $('.my-edition-making_link').attr("href", '/sec/' + aGoodsPath[selidx]); // 2020-06-01   자세히 보기

	                    var el;
	                    if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
	                        door4_fam_col = aD4FamColor[selidx];
	                        el = $('.my-edition-making-ref[data-type=' + check1Door(modelData.type) + ']');
	                        if (door4_fam_col != undefined) {
	                            el.find('img').attr('src', imgDomain_chef + '/bespoke/images/v3/frame/4door_family_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
	                        }
	                    }

	                    if (aCHEFCL.indexOf(modelData.type) > -1) { //aCHEFCL
	                        door4_fam_col = aD4FamColor[selidx];
	                        el = $('.my-edition-making-ref[data-type=' + check1Door(modelData.type) + ']');
	                        if (door4_fam_col != undefined) {
	                            if (modelData.type == "5door_chef") {
	                                el.find('img').attr('src', imgDomain_chef + '/bespoke/images/v3/frame/5door_chef_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
	                            }

	                            if (modelData.type == "4door_chef") {
	                                el.find('img').attr('src', imgDomain_chef + '/bespoke/images/v3/frame/4door_chef_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
	                            }
	                        }
	                    }
	                    packageOption(); // 200624 - 패키지 슬라이드
	                }else{
	                    selidx = $(sTABLE).find('input[name=model]:checked').val();   // 200814-모델코드
	                    $(sTABLE).find('tbody tr.show').find('.package_ch').each(function(i) {
	                        var pacChk = $(sTABLE).find('input[name=package' + (selidx + i) +']').eq(0).trigger('click');
	                        if (!pacChk.prop('checked')) {
	                            pacChk.prop('checked', true).attr('checked', true);
	                        }
	                        $('.my-edition-making_model').text(aDmodelName[selidx]);
	                        $('.my-edition-making_link').attr("href", '/sec/' + aGoodsPath[selidx]); // 2020-06-01   자세히 보기
	                    });
	                }

	            });
	        };

	        //[통합수정 2020-09-14]
	        //가격정보 컨트롤
	        var settingPrice = {
	            selector: {
	                filteredType: function() {
	                    var type = data.filter(function(type) {
	                        return type.dataType === modelData.type;
	                    })[0];
	                    return type;
	                }
	            },
	            changePrice: function() {
	                var filteredType = this.selector.filteredType();
	                var selidx = $(sTABLE).find('input[name=model]:checked').val();

	                $(sTABLE).find(' tbody .model_list').each(function(i) {
	                    var modelName = $(this).find('td:first-child label').text();
	                    var filteredModel = filteredType.product.filter(function(model) { return model.modelName === modelName; })[0];
	                    aTotalPrice[i] = parseInt(oTotalPrice[i]) + controlNumber.getSumPrice(aPanelPrice);
	                    //$(this).find('td:last-child').text(controlNumber.numberWithCommas(totalPrice) + '원'); //회원가 패널값 더하기 삭제
	                })

	                var totalPrice = "" + aTotalPrice[selidx];
	                if (totalPrice == "undefined") totalPrice = "0";

	                selectPrice = totalPrice; //선택한 제품조합 회원가
	                $('.total_price').html('');
	                $('.total_price').html('<em>' + controlNumber.numberWithCommas(totalPrice) + '</em>원');
	            },
	            resetPrice: function() {
	                var filteredType = this.selector.filteredType();
	                aPanelPrice = [];
	                aTotalPrice = [];
	                totalPrice = 0;

	                $(sTABLE).find(' tbody .model_list').each(function() {
	                    var modelName = $(this).find('td:first-child label').text();
	                    var filteredModel = filteredType.product.filter(function(model) { return model.modelName === modelName; })[0];
	                    var modelPrice = controlNumber.numberWithCommas(parseInt(filteredModel.price));
	                    $(this).find('td:last-child').text(modelPrice + '원');
	                })
	            }
	        }

	        //냉장고 버튼(.door_btn) 누를시
	        var choiceColorBtn = function() {
	            var addActive = function() {
	                $(document).on('click', sREF + ' ' + sBTN, function() {

	                    if ($(this).hasClass(sACTIVE)) {
	                        $(this).removeClass(sACTIVE)
	                    } else {
	                        changeClass($(this), sBTN);
	                    }
	                });

	                $('html').click(function(e) {

	                    if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
	                    }

	                    if (e.target.tagName === 'DIV') {
	                        $(sREF + ' ' + sBTN).removeClass(sACTIVE);
	                        /* 20190627_2차 S */
	                        if ($(sREF).find(sBTN + ':visible').data('img')) {
	                            $('.my-edition-making-ref.active').addClass('door_selecting')
	                        }
	                        /* 20190627_2차 E */
	                    }
	                });
	            };

	            var changeColor = function() {
	                var $COLORBTN = $(sSTEP04).find('.my-edition-color_list ' + sBTN); //200207 step03<->step04
	                var filteredPanel;
	                var setDoorData = function($active, colorData) {
	                    var i = $active.parent().index();
	                    var doorIdx = $active.parent().index() + 1;
	                    var filteredYearPanel = data.filter(function(panel) { return modelData.type === panel.dataType; })[0].panel;
	                    var doorDivYn = data.filter(function(panel) { return modelData.type === panel.dataType; })[0].doorDivYn;

	                    filteredPanel = filteredYearPanel[sYear];
	                    if (aimgDOORLENG4.indexOf(modelData.type) > -1) {
	                        if (i < 2) {
	                            i = 0;
	                        } else {
	                            i = 1;
	                        }
	                    } else if (aimgKIMCHI.indexOf(modelData.type) > -1) {
	                        if (i < 2) {
	                            i = 0;
	                        } else {
	                            i = 1;
	                        }
	                    } else if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
	                        if (i < 2) {
	                            i = 0;
	                        } else { //패밀리허브 i=3 ???
	                            i = 1;
	                        }
	                    } else {
	                        if (isLogin == "Y" && i == -1) {
	                            i = 0; // 로그인후 $active.parent().index() -1 인경우 0으로 세팅.
	                        }
	                    }
	                    // 2021 김치 플러스 4도어 추가
	                    if (aimgKIMCHI.indexOf(modelData.type) > -1 && aimgKIMCHI_S.indexOf(cheakedModel) > -1) {
	                        if (doorIdx < 3) {
	                            sYear = "2020";
	                        } else {
	                            sYear = "2021";
	                        }
	                        filteredPanel = filteredYearPanel[sYear];
	                        console.log("sYear real Panel : ", sYear);

	                    }

	                    if (doorDivYn == "Y") { i = $active.parent().index(); }

	                    motype = modelData.type;

	                    $.each(filteredPanel[i], function(k, panelCode) {
	                        if (panelCode[colorData] !== undefined) {
	                            var idx = $active.parent().index();
	                            if (isLogin == "Y" && idx == -1) {
	                                idx = 0; // 로그인후 $active.parent().index() -1 인경우 0으로 세팅.
	                            }

	                            $active.attr({ 'data-img': panelCode[colorData].panelCode, 'data-price': panelCode[colorData].price })
	                                .css('background-image', 'url(' + sImgPath + 'v3/door/' + (function() { // 로컬작업경로 수정 : v3/door/ > door/
	                                    if (panelCode[colorData].price == "") {
	                                        aPanelPrice[idx] = parseInt("0");
	                                    } else {
	                                        aPanelPrice[idx] = parseInt(panelCode[colorData].price);
	                                    }

	                                    $active.find('strong').hide();
	                                    var rtnpanelCode = "";

	                                    // 190822 jasonpark 수정(0827) S
	                                    if (aimgDOORLENG4.indexOf(modelData.type) > -1) {
	                                        if (doorIdx % 2 === 0) {
	                                            rtnpanelCode = panelCode[colorData].panelCode + '_right';
	                                        } else {
	                                            rtnpanelCode = panelCode[colorData].panelCode + '_left';
	                                        }
	                                    } else if (aFAMILY.indexOf(modelData.type) > -1) {
	                                        if (doorIdx % 2 === 0) {
	                                            rtnpanelCode = panelCode[colorData].panelCode + '_right';
	                                        } else {
	                                            rtnpanelCode = panelCode[colorData].panelCode + '_left';
	                                        }
	                                    } else if (aimgKIMCHI.indexOf(modelData.type) > -1) {
	                                        if (doorIdx === 1) {
	                                            rtnpanelCode = panelCode[colorData].panelCode + '_left';

	                                        } else if (doorIdx === 2) {
	                                            rtnpanelCode = panelCode[colorData].panelCode + '_right';
	                                        } else if (doorIdx === 3) {
	                                            rtnpanelCode = panelCode[colorData].panelCode + '_middle';
	                                        } else if (doorIdx === 4) {
	                                            rtnpanelCode = panelCode[colorData].panelCode + '_bottom';
	                                        } else {
	                                            rtnpanelCode = panelCode[colorData].panelCode;
	                                        }
	                                    } else {
	                                        rtnpanelCode = panelCode[colorData].panelCode;
	                                    } // 190822 jasonpark 수정(0827) E
	                                    
	                                    rtnpanelCode = rtnpanelCode.toLowerCase();

	                                    return rtnpanelCode;
	                                })() + '.png?$ORIGIN_PNG$)');

	                            return false;
	                        }
	                    });

	                };

	                // 20190826 드래그앤 드롭 추가 s
	                var __dragTarget = null,
	                    __this = null,
	                    __afterTouchTime = 0;

	                $('.my-edition-color_list .color_btn').draggable_local({
	                    revert: true,
	                    placeholder: true,
	                    droptarget: '.door_btn',
	                    drop: function(event, droptarget) {
	                        __dragTarget = $(droptarget);
	                        __this = $(this);
	                        var eventSetInterval = setInterval(function() {
	                            if (__this !== null) {
	                                clearInterval(eventSetInterval);
	                                if (event.type === "mouseup" || event.type === "touchend") {
	                                    __this.trigger("click");
	                                    __this = null;
	                                    __dragTarget = null;
	                                }
	                            }
	                        });
	                    }
	                });

	                $('.my-edition-color_list ' + sBTN).on("touchstart", function(e) {
	                    __afterTouchTime = e.timeStamp;
	                });

	                $('.my-edition-color_list ' + sBTN).on("touchend", function(e) {
	                    var __beforeTouchTime = e.timeStamp,
	                        __resultTime = parseInt(__beforeTouchTime - __afterTouchTime);

	                    if (__resultTime < 300) {
	                        $(e.currentTarget).trigger("click");
	                    }
	                });
	                //컬러탭의 컬러 선택시
	                $(document).on('click', '.my-edition-color_list ' + sBTN, function() {

	                    if (__dragTarget !== null) {
	                        __dragTarget.find("button").addClass("active").parent().siblings().find("button").removeClass("active");
	                    }

	                    var $activeBtn = $(sREF).find(sBTN + '.' + sACTIVE);
	                    var selectGroup = $(this).data('group'); //20190627 추가
	                    if ($(sREF).find(sBTN + ':visible').length == 1) {
	                        colorActiveGroup = false;
	                    }

	                    if (colorActiveGroup === false || colorActiveGroup === selectGroup) {
	                        //20190627 추가 E
	                        if (stepAlert('next', $('.step-box_module'), 'a')) return false;
	                        var pushColorName = function($active, colorData, colorName) {
	                            if ($active.find('.color').length === 0) $active.append('<span class="color"></span>')
	                            $active.attr(sDATACOLOR, colorData, colorName).find('.color').text(colorName);
	                        };

	                        if ($(sREF).find(sBTN).hasClass(sACTIVE)) {

	                            if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
	                                if (2 == $activeBtn.parent().index() + 1) { //2번째 도어일경우 popup.confirm_(2, '냉장고의 도어를 선택해 주세요.');
	                                    return false;
	                                }
	                            }

	                            var colorAttr = $(this).attr(sDATACOLOR),
	                                colorText = $(this).text();

	                            if (vmixYn == "N") { //패널자동설정전 이미지삭제
	                                $(sMODEL + ' li[data-type] .door_btn').find(sBTN).each(function(i) {
	                                    if (aFAMILY.indexOf(modelData.type) > -1) {
	                                        if (!(aFAMILYcnt.indexOf(i) > -1)) {
	                                            $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').find('.color').text('');
	                                            $(this).find('strong').show();
	                                            $(this).removeClass(sACTIVE);
	                                        }
	                                    } else {
	                                        $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').find('.color').text('');
	                                        $(this).find('strong').show();
	                                        $(this).removeClass(sACTIVE);
	                                    }
	                                });
	                            }

	                            vmixYn = "Y";
	                            $.each(colorBtnMix, function(k, mixYn) {
	                                if (colorAttr == mixYn.substr(1)) { vmixYn = mixYn.substr(0, 1); }
	                            });

	                            if (vmixYn == "N") { //패널 자동설정 //N -> 돌고
	                                $(sREF).find(sBTN).each(function(i) {
	                                	var pDoorBtn;
	                                    if (aFAMILY.indexOf(modelData.type) > -1) {
	                                        if (i != 1) {
	                                            pDoorBtn = $('.my-edition-making-ref[data-type="' + check1Door(modelData.type) + '"]').find('.door_btn').eq(i).find('.button');
	                                            pushColorName(pDoorBtn, colorAttr, colorText);
	                                            setDoorData(pDoorBtn, colorAttr);
	                                        }
	                                    } else {
	                                        pDoorBtn = $('.my-edition-making-ref[data-type="' + check1Door(modelData.type) + '"]').find('.door_btn').eq(i).find('.button');
	                                        pushColorName(pDoorBtn, colorAttr, colorText);
	                                        setDoorData(pDoorBtn, colorAttr);
	                                    }
	                                });
	                            } else { //Y -> 단색
	                            }
	                            pushColorName($activeBtn, colorAttr, colorText);
	                            setDoorData($activeBtn, colorAttr);
	                            settingPrice.changePrice();
	                            if ($(sREF).find(sBTN + '[data-color]').length == 1) {
	                                colorActiveGroup = selectGroup;
	                            }
	                        } else {
	                            popup.confirm_(2, '냉장고의 도어를 선택해 주세요.')
	                            return false;
	                        }

	                        $(sTABVIEW).find(sBTN).removeClass(sACTIVE); //20190627 추가
	                        $(this).addClass(sACTIVE); //20190627 추가
	                        // 20190620 step04로 자동 이동
	                        if ($(sREF).find(sBTN + ':visible').length == $(sREF).find(sBTN + '[data-img]').length) {}

	                    } else {
	                        tab.reset($('.my-edition-color_list').eq(1).find('button'));
	                    }
	                });
	                //validation 체크 후 저장
	                var saveBtn = {
	                    getModelName: function() {
	                        return $(sTABLE).find(' input[name=model]:checked + label').text();
	                    },
	                    flag: function() {
	                        var visibleLength = $(sREF).find(sBTN + ':visible').length;
	                        if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
	                            visibleLength = 3;
	                        }

	                        if (visibleLength !== $(sREF).find(sBTN + '[data-img]').length) {
	                            popup.confirm_(2, '모든 컬러가 선택되지 않았습니다.<br/>선택 완료 후 저장해 주시기 바랍니다.')
	                            return false;
	                        } else if ($(sTABLE).find('input[name=model]:checked').length === 0) {
	                            popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 저장해 주시기 바랍니다.')
	                            return false;
	                        } else if ($(sREF).find(sBTN + ':visible').length <= 0) {
	                            popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 저장해 주시기 바랍니다.')
	                            return false;
	                        } else {
	                            return true;
	                        }
	                    },
	                    valid: function($this_) {
	                        if (this.flag()) {
	                            var panelMdlData = '',
	                                panelData = [],
	                                p1pkgMdlck = '',
	                                p1pkgMdlpr = '',
	                                f2pkgMdlck = '',
	                                f2pkgMdlpr = '',
	                                p1pkgName = '',
	                                p1pkgMdlck2 = '', // 2020-06-23 셰프 컬렉션 패키지 전달
	                                p1pkgMdlpr2 = ''; // 2020-06-23 셰프 컬렉션 패키지 전달
	                            var selidx = $(sTABLE).find('input[name=model]:checked').val(); //$(@sTABLE).find('tbody tr.active').index()
	                            var totalPrice = aTotalPrice[selidx];
	                            var sREF_len = $(sREF).find(sBTN).length;
	                            var chkval = $(sTABLE).find('input[name=package' + selidx + '0]:checked').val();
	                            var chkval2 = $(sTABLE).find('input[name=package' + selidx + '1]:checked').val(); // 2020-06-24 셰프 컬렉션 패키지 전달
	                            if (chkval && chkval.length > 0) {
	                                p1pkgMdlck = chkval.split(';')[3]; //p1pkgMdl
	                                p1pkgMdlpr = chkval.split(';')[4]; //price
	                                f2pkgMdlck = chkval.split(';')[5]; //f2pkgMdl
	                                f2pkgMdlpr = chkval.split(';')[6]; //autoSumprice
	                                p1pkgName = chkval.split(';')[7]; //패키지명
	                            }

	                            // 2020-06-24 셰프 컬렉션 패키지 전달
	                            if (chkval2 && chkval2.length > 0) {
	                                p1pkgMdlck2 = chkval2.split(';')[3]; //p1pkgMdl
	                                p1pkgMdlpr2 = chkval2.split(';')[4]; //p1pkgMdl
	                            }
	                            // 2020-06-24 셰프 컬렉션 패키지 전달

	                            $(sREF).find(sBTN).each(function(i) {
	                                panelData.push({});
	                                var dataImg = $(this).attr('data-img'),
	                                    padacolor = $(this).attr('data-color'),
	                                    dataprice = $(this).attr('data-price'),
	                                    dataColor = $(this).find('.color').text();

	                                if (i == 1 && (aFAMILY.indexOf(modelData.type) > -1)) { //패밀리허브 4door_family
	                                    panelData[i].code = panelData[0].code;
	                                    panelData[i].color = panelData[0].color;
	                                    panelData[i].panelprice = panelData[0].panelprice;

	                                    panelMdlData += panelData[0].code; // 패밀리허브 2번째 패널 undefined --> N/A 넣어서 저장하기
	                                } else {
	                                    panelData[i].code = dataImg;
	                                    panelData[i].color = dataColor;
	                                    panelData[i].panelprice = dataprice;
	                                    panelData[i].padacolor = padacolor;

	                                    panelMdlData += dataImg;
	                                }

	                                if (i != sREF_len - 1) {
	                                    panelMdlData += '|';
	                                }
	                            });

	                            if (isLogin == "Y" && chkval && chkval.length > 0) {
	                                panelMdlData = panelMdlData + "|" + chkval.split(';')[3];
	                                if (chkval.split(';')[5] != "") {
	                                    panelMdlData = panelMdlData + "|" + chkval.split(';')[5];
	                                }
	                            }

	                            // 2020-06-24 셰프 컬렉션 패키지 전달
	                            if (isLogin == "Y" && chkval2 && chkval2.length > 0) {
	                                panelMdlData = panelMdlData + "|" + chkval2.split(';')[3];
	                            }
	                            console.log(panelMdlData);
	                            // 2020-06-24 셰프 컬렉션 패키지 전달

	                            modelData.model = this.getModelName();
	                            modelData.url = $("input:radio[name=model]:checked").attr('data-url');
	                            if (isLogin == "Y") {
	                                var dataParamArray = [];
	                                dataParamArray.push(modelData.model + '|' + panelMdlData);
	                                var allData = {
	                                    'mArray': dataParamArray,
	                                    'storeCd': 'sec'
	                                };

	                                var id = getParameter('id');

	                                jQuery.ajaxSettings.traditional = true;
	                                var option = {
	                                    //url: 'https://local.sec.samsung.com/comLocal/bespoke/myModelAddAjax.do',
	                                	url: '/sec/xhr/bespoke/myModelAddAjax',
	                                	dataType: "json",
	                                    data: allData,
	                                    jsonpCallback: "jsonpcallback_bespoke",
	                                    type: "POST",
	                                    success: function(data) {
	                                        if (data.resultCode == "-1") {
	                                            //$('.loginBtn').click(); // 로그인페이지로 이동
	                                            window.location.href =  "/sec/member/indexLogin/?returnUrl=" + window.location.pathname + "?id="+id; // [2020-09-07]
	                                        } else if (data.resultCode == '1') {
	                                            pushProd2List(); //myModelInfoAjax 읽어서 prod3List 배열세팅
	                                        } else {
	                                            alert(data.resultCode); // resultMessage 화면에 노출
	                                        }
	                                    },
	                                    error: function(response, status, error) {
	                                        alert('error1:myModelAddAjax 오류!');
	                                    },
	                                    beforeSend: function(xhr) {
	                                        xhr.setRequestHeader("ajax", true);
	                                    },
	                                    complete: function() {}
	                                };

	                                $.ajax(option);

	                            } else {
	                                //로그인여부(N) 확인후 나만의 조합 페이지
	                                // 2020-06-24 셰프 컬렉션 패키지 전달
	                                settingCookie.makeProd("2", p1pkgMdlck, p1pkgMdlpr, f2pkgMdlck, f2pkgMdlpr, p1pkgName, modelData.type, modelData.model, panelData, totalPrice, modelData.url, p1pkgMdlck2, p1pkgMdlpr2);
	                                // 2020-06-24 셰프 컬렉션 패키지 전달
	                                initCookieHTML();
	                                if ($('.my-edition-pick-section .my-edition-pick-item').length > 10) {
	                                    popup.confirm_(2, '10개까지 담을 수 있습니다.<br/>삭제하고 담아주세요.')
	                                    settingCookie.deleteProd($('.my-edition-pick-item:last-child'), 'last')
	                                    return false;
	                                }

	                                if (savedLength.length !== $('.my-edition-pick-section .my-edition-pick-item').length) {
	                                    popup.confirm_(2, '쿠키에 공간이 부족하여 더 담을 수 없습니다.<br/>삭제하고 담아주세요.');
	                                    $('.cookie_length').text(prodList.length);
	                                    return false;
	                                }
	                            }

	                            reset.act();
	                            var scrollPosMy = $('.my-edition-pick-section').offset().top - $('.promo-nav-inner').outerHeight();
	                            $('html,body').animate({ scrollTop: scrollPosMy }, 300);
	                        }
	                    },
	                    ckLoginMakeProd: function($this_) {
	                        if (this.flag()) {
	                            //로그인화면이동(쿠키저장) 로그인여부(N) 확인후 나만의 조합 페이지
	                            var panelMdlData = '',
	                                panelData = [],
	                                p1pkgMdlck = '',
	                                p1pkgMdlpr = '',
	                                f2pkgMdlck = '',
	                                f2pkgMdlpr = '',
	                                p1pkgName = '',
	                                p1pkgMdlck2 = '', // 2020-06-24 셰프 컬렉션 패키지 전달
	                                p1pkgMdlpr2 = ''; // 2020-06-24 셰프 컬렉션 패키지 전달
	                            var selidx = $(sTABLE).find('input[name=model]:checked').val();
	                            var totalPrice = aTotalPrice[selidx];
	                            var sREF_len = $(sREF).find(sBTN).length;

	                            var chkval = $(sTABLE).find('input[name=package' + selidx + '0]:checked').val();
	                            var chkval2 = $(sTABLE).find('input[name=package' + selidx + '1]:checked').val(); // 2020-06-30 구매 하기  수정

	                            if (chkval && chkval.length > 0) {
	                                p1pkgMdlck = chkval.split(';')[3]; //p1pkgMdl
	                                p1pkgMdlpr = chkval.split(';')[4]; //price
	                                f2pkgMdlck = chkval.split(';')[5]; //f2pkgMdl
	                                f2pkgMdlpr = chkval.split(';')[6]; //autoSumprice
	                                p1pkgName = chkval.split(';')[7]; //패키지명
	                            }
	                            // 2020-06-24 셰프 컬렉션 패키지 전달
	                            if (chkval2 && chkval2.length > 0) {
	                                p1pkgMdlck2 = chkval2.split(';')[3]; //p1pkgMdl
	                                p1pkgMdlpr2 = chkval2.split(';')[4]; //p1pkgMdl
	                            }
	                            // 2020-06-24 셰프 컬렉션 패키지 전달

	                            $(sREF).find(sBTN).each(function(i) {
	                                panelData.push({});
	                                var dataImg = $(this).attr('data-img'),
	                                    padacolor = $(this).attr('data-color'),
	                                    dataprice = $(this).attr('data-price'),
	                                    dataColor = $(this).find('.color').text();

	                                if (i == 1 && (aFAMILY.indexOf(modelData.type) > -1)) { //패밀리허브 4door_family
	                                    panelData[i].code = panelData[0].code;
	                                    panelData[i].color = panelData[0].color;
	                                    panelData[i].panelprice = panelData[0].panelprice;
	                                    panelMdlData += panelData[0].code; // 패밀리허브 2번째 패널 undefined --> N/A 넣어서 저장하기
	                                } else {
	                                    panelData[i].code = dataImg;
	                                    panelData[i].color = dataColor;
	                                    panelData[i].panelprice = dataprice;
	                                    panelData[i].padacolor = padacolor;
	                                    panelMdlData += dataImg;
	                                }
	                                if (i != sREF_len - 1) { panelMdlData += '|'; }
	                            })

	                            modelData.model = this.getModelName();
	                            modelData.url = $("input:radio[name=model]:checked").attr('data-url');
	                            cookieName = 'bespoke_make200703_chef';

	                            // 2020-06-24 셰프 컬렉션 패키지 전달
	                            settingCookie.makeProd("1", p1pkgMdlck, p1pkgMdlpr, f2pkgMdlck, f2pkgMdlpr, p1pkgName, modelData.type, modelData.model, panelData, totalPrice, modelData.url, p1pkgMdlck2, p1pkgMdlpr2);
	                            // 2020-06-24 셰프 컬렉션 패키지 전달

	                            pushProdList();
	                            pushProdList();
	                            initCookieHTML();

	                            var id = getParameter('id');
	                            //$('.loginBtn').click(); // 로그인페이지로 이동
	                            window.location.href =  "/sec/member/indexLogin/?returnUrl=" + window.location.pathname + "?id="+id;
	                        }
	                    },
	                    chkIsPopup: function($this_) {

	                        isPopup = "N";
	                    },
	                    init: function() {
	                        var self_ = this;

	                        $(sSAVEBTN).click(function() {
	                            if (self_.flag()) {
	                                if (isLogin == "N" && isPopup == "") {
	                                    popup.confirm_(1, '로그인 하지 않고 저장 시 브라우저 환경설정에 따라 저장 내역이 삭제될 수 있습니다.<br/>로그인 하시겠습니까?', function() {
	                                        self_.ckLoginMakeProd($(this));
	                                    }, function() {
	                                        self_.valid($(this));
	                                        isPopup = "N";
	                                    });
	                                } else {
	                                    self_.valid($(this));
	                                }
	                            }
	                        })
	                    }
	                };

	                //AR
	                var arBtn = {
	                    arr_checkdIndex: [],
	                    getModelName: function() {
	                        return $(sTABLE).find(' input[name=model]:checked + label').text();
	                    },
	                    flag: function(boolean) {
	                        if (boolean) {
	                            return true;
	                        }

	                        var visibleLength = $(sREF).find(sBTN + ':visible').length;
	                        if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
	                            visibleLength = 3;
	                        }

	                        if (visibleLength !== $(sREF).find(sBTN + '[data-img]').length) {
	                            popup.confirm_(2, '모든 컬러가 선택되지 않았습니다.<br/>선택 완료 후 저장해 주시기 바랍니다.')
	                            return false;
	                        } else if ($(sTABLE).find('input[name=model]:checked').length === 0) {
	                            popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 저장해 주시기 바랍니다.')
	                            return false;
	                        } else if ($(sREF).find(sBTN + ':visible').length <= 0) {
	                            popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 저장해 주시기 바랍니다.')
	                            return false;
	                        } else {
	                            return true;
	                        }
	                    },
	                    checkbox_changedIndex: function() {
	                        var _ns = this;
	                        /* 체크박스 순서를 기록 */
	                        $('body').on('change', '.ar-check', function() {
	                            var id = $(this).attr('id');
	                            var idx = _ns.arr_checkdIndex.indexOf(id);
	                            var get2Idx = function(i) {
	                                var idx = i + 1;
	                                if (idx < 10) {
	                                    idx = '0' + idx;
	                                } //[통합수정 2020-09-14]
	                                return 'chk' + idx;
	                            };

	                            var prod = settingCookie.loadProd();
	                            if (prod3List.length > 0) { prod = prod3List; }

	                            if ($(this).is(':checked')) { //체크-1
	                                $.each(prod, function(i, item) {
	                                    if (get2Idx(i) == id) {
	                                        //스킵
	                                    } else {
	                                        $('#' + get2Idx(i)).prop('checked', false);
	                                        $('#' + get2Idx(i)).attr('checked', false);
	                                    }
	                                });
	                                if (idx == -1) {
	                                    _ns.arr_checkdIndex.splice(0, 1); // 배열 삭제
	                                    _ns.arr_checkdIndex.push(id); // 배열 추가
	                                }
	                            } else {
	                                if (idx !== -1) { _ns.arr_checkdIndex.splice(idx, 1); } // 배열 삭제
	                            }
	                        });
	                    },

	                    valid: function($this_, boolean) {

	                        if (this.flag(boolean)) {

	                            var panelData = [];
	                            var selectedModelIdx = $(sTABLE).find('input[name=model]:checked').val(); //$(@sTABLE).find('tbody tr.active').index()
	                            var selidx = $(sTABLE).find('input[name=model]:checked').val();  // 패키지 코드 전송
	                            var chk_pkg = $(sTABLE).find('input[name=package' + selidx + '0]:checked').val();  // 패키지 코드 전송
	                            var totalPrice = aTotalPrice[selectedModelIdx];
	                            var txt = '';
	                            //AR내 공간에서 체험하기 팝업
	                            if (boolean) {
	                                var modelData = [];
	                                var els = [];
	                                for (var j in this.arr_checkdIndex) {
	                                    els.push($('#' + this.arr_checkdIndex[j]).closest('.my-edition-pick-item'));
	                                }

	                                var arProdList = [];
	                                if (isLogin == "Y") {
	                                    arProdList = prod3List;
	                                } else {
	                                    arProdList = prodList;
	                                }


	                                $.each(els, function(i) {
	                                    var idx = $(this).index();
	                                    var modelName = arProdList[idx].name;
	                                    var pkgName = arProdList[idx].pkg1;  // 패키지 코드 전송
	                                    modelData.push([]);
	                                    modelData[i].push(modelName);
	                                    // 2020-06-11 패밀리 허브 ar 수정
	                                    $.each(arProdList[idx].panel, function(j, item) {
	                                        if (arProdList[idx].type === '4door_family' && j === 1) { return; }
	                                        modelData[i].push(item.code.toUpperCase());
	                                    });

	                                    // end
	                                    /*
	                                        $.each(arProdList[idx].panel, function (j, item) {
	                                         modelData[i].push(item.code.toUpperCase());
	                                        });
	                                     */

	                                    // 패키지 코드 전송
	                                    if (pkgName && pkgName.length > 0) {
	                                        modelData[i] = modelData[i].join('|') + '#' + pkgName;
	                                    } else {
	                                        modelData[i] = modelData[i].join('|');
	                                    }
	                                     // 패키지 코드 전송
	                                    txt = modelData.join('.');
	                                });

	                                if ($('.ar-check:checked').length > 3) {
	                                    alert('제품 한개만 선택 가능합니다.'); //alert('한번에 3개까지 선택 가능합니다.');
	                                    return false;
	                                }

	                                if ($('.ar-check:checked').length == 0) {
	                                    alert('제품을 선택해 주세요.');
	                                    return false;
	                                }
	                            } else {
	                                var modelName = arBtn.getModelName();
	                                panelData = [];
	                                $(sREF).find(sBTN).each(function(i) {
	                                    if ($(this).attr('data-img')) {
	                                        var dataImg = $(this).attr('data-img').toUpperCase();
	                                        //panelData[i] = dataImg;  // 이슈전 { 값, N/A, 값, 값 }  2020-06-01 - 패밀리허브 4door_family
	                                        panelData.push(dataImg); // 현재버전 { 값, 값, 값 }
	                                    }
	                                    /* else{
	                                                                           panelData.push('panelNo');
	                                                                       } */
	                                });

	                                // 패키지 코드 전송
	                                var pkgMd = "";
	                                if (chk_pkg && chk_pkg.length > 0) {
	                                    pkgMd = chk_pkg.split(';')[3];
	                                    txt = modelName + '|' + panelData.join('|') + '#' + pkgMd;
	                                } else {
	                                    txt = modelName + '|' + panelData.join('|');
	                                }
	                               // 패키지 코드 전송

	                            }

	                            //console.log(txt);

	                            var arurl = 'Intent://secappandroid?sku=' + txt + '&familyName=bespoke#Intent;scheme=secapp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.samsung.sec.android;end'
	                            if (navigator.userAgent.toUpperCase().indexOf('SECAPP') !== -1) {
	                                window.secapp.goToARService(txt, 'bespoke');
	                            } else {
	                                var isMobile = function() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); };
	                                if (isMobile()) {
	                                    location.href = arurl;
	                                } else {
	                                    alert("모바일에서만 실행가능합니다.");
	                                    return false;
	                                }
	                            }


	                        }
	                    },
	                    init: function() {
	                        var self_ = this;
	                        self_.checkbox_changedIndex();
	                        $('.ar_banner_wrap').click(function() {
	                            var txt = "";
	                            var arurl = 'Intent://secappandroid?sku=' + txt + '&familyName=bespoke#Intent;scheme=secapp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.samsung.sec.android;end'
	                            if (navigator.userAgent.toUpperCase().indexOf('SECAPP') !== -1) {
	                                window.secapp.goToARService(txt, 'bespoke');
	                            } else {
	                                var isMobile = function() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); };
	                                if (isMobile()) {
	                                    location.href = arurl;
	                                } else {
	                                    alert("모바일에서 실행가능합니다.");
	                                    return false;
	                                }
	                            }
	                        });
	                        $('.my-edition-making-step-wrap .ar_btn').click(function() {
	                            self_.valid($(this));
	                        });
	                        //AR내 공간에서 체험하기 팝업
	                        $ARPOPUP.find('.btn').click(function() {
	                            self_.valid($(this), true);
	                        })
	                    }
	                };
	                saveBtn.init();
	                arBtn.init();
	                if (isLogin == "Y") {
	                    if ($.cookie(cookieName) !== undefined) {
	                        if (settingCookie.loadProd().length > 0) {
	                            var prod = settingCookie.loadProd();
	                            var icnt = settingCookie.loadProd().length - 1;
	                            var pushColorName = function($active, colorData, colorName) {
	                                if ($active.find('.color').length === 0) $active.append('<span class="color"></span>')
	                                $active.attr(sDATACOLOR, colorData, colorName).find('.color').text(colorName);
	                            };
	                            var $activeBtn = $(sREF).find(sBTN + '.' + sACTIVE);
	                            $.each(prod[icnt].panel, function(i, item) {
	                                var panel_door_btn = $('.my-edition-making-ref[data-type="' + prod[icnt].type + '"]').find('.door_btn').eq(i).find('.button'); //패널순차적으로

	                                if (panel_door_btn.parent().index() == -1) {

	                                    panel_door_btn = $(sREF).find(sBTN);
	                                }
	                                pushColorName(panel_door_btn, item.padacolor, item.color);
	                                setDoorData(panel_door_btn, item.padacolor);
	                            });

	                            $('.total_price').html('');
	                            $('.total_price').html('<em>' + controlNumber.numberWithCommas(prod[icnt].price) + '</em>원');
	                        }
	                    }
	                }
	            };
	            var resetProduct = function() {
	                $('.remake_btn').click(function() {
	                    popup.confirm_(1, '선택된 내용을 다시 시작하시겠습니까?', function() {
	                        reset.act('remake');
	                    });
	                });
	            };
	            addActive();
	            changeColor();
	            resetProduct();
	        };
	        //step3 탭
	        var tab = {
	            init: function($this_) {
	                colorActiveGroup = false;
	                $('.my-edition-making-ref').removeClass('door_selecting'); //20190627_2차
	            },
	            reset: function($this_) {
	                var self_ = this;
	                if ($(sTABVIEW).find('button.' + sACTIVE).length) {
	                    popup.confirm_(1, '같은 재질끼리만 조합이 가능합니다.<br />다른 재질과 컬러로 변경하시겠습니까?', function() {
	                        reset.act('tab');
	                        self_.init($this_);
	                        $(sREF).find(sBTN).removeClass(sACTIVE).eq(0).addClass(sACTIVE); //20190627 추가
	                    });
	                } else {
	                    self_.init($this_);
	                }

	            },
	            act: function() {
	                var self_ = this;
	                if ($(sTABBTN).length) {
	                    $(document).on('click', sTABBTN + ' >li a', function(e) {
	                        e.preventDefault();
	                        self_.reset($(this));
	                    });
	                }
	            }
	        }

	        //Step 4 테이블 bg
	        var bgHover = function() {
	            $(document).on('mouseenter', sTABLE + ' tbody tr', function() {
	                toggleView.trBg.hover.show($(this));
	            }).on('mouseleave', sTABLE + ' tbody tr', function() {
	                toggleView.trBg.hover.hide($(this));
	            });
	        };

	        //Step 4 의 input 선택시 변경될 바로 구매하기 버튼 태깅 변경 : 20190808 추가 s
	        var changeTrekking = function() {
	            var selector = '.step-box_function .model_rdobox',
	                buyBtn = $('.my-edition-btn-area .buy_btn');
	            $(document).on('click', selector, function() {
	                var model = $(this).next('label').text(),
	                    code = 'sec:bespoke:buy:buynow_' + model;
	                buyBtn.attr('data-omni', code);
	            })
	        }
	        var slickAct = {
	            sEl: '.ref-module-list',
	            option: {
	                arrows: true,
	                pauseOnHover: false,
	                pauseOnDotsHover: false,
	                pauseOnFocus: false,
	                infinite: false,
	                slidesToShow: 4,
	                slidesToScroll: 1,
	                prevArrow: '<button type="button" class="slick-prev"><span>이전</span></button>',
	                nextArrow: '<button type="button" class="slick-next"><span>다음</span></button>',
	                responsive: [{
	                    breakpoint: 768,
	                    settings: {
	                        slidesToShow: 3
	                    }
	                }]
	            },
	            act: function(check) {
	                if ($('.module_type').length <= 4) {
	                    $('.ref-module-list').addClass('default')
	                }

	                function createNewEvent(eventName) {
	                    var event;
	                    if (typeof(Event) === 'function') {
	                        event = new Event(eventName);
	                    } else {
	                        event = document.createEvent('Event');
	                        event.initEvent(eventName, true, true);
	                    }
	                    return event;
	                }
	                $(sTABVIEW).find('.color_btn').removeAttr('disabled'); //20190627 추가

	            },
	            destroy: function() {
	                $(this.sEl).slick('unslick');
	            }
	        }
	        //키엔호 파라미터 있을 경우 해당 위치로 이동
	        var kienhoMove = function() {
	            var getParamVal = function(name) {
	                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	                    results = regex.exec(location.search);
	                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	            };
	            
	            var h = $(".promo-nav-outer").outerHeight();
	            
	            if(h === null || h === undefined) {
	            	h = 0;
	            }

	            var paramId = getParamVal('id');
	            if (paramId === 'kienho-more') {
	                var scmove = $('#' + paramId).offset().top;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else if (paramId === 'bespoke-make') {
	                var scmove = $('#' + paramId).offset().top;

	                var model = getParameter('selModel');
	                if (model == '') {
	                    $('html, body').animate({
	                        scrollTop: scmove
	                    }, 800);
	                }
	            } else if (paramId === 'bespoke-benefit') {
	                var scmove = $('#' + paramId).offset().top - h - 50;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else if (paramId === 'bespoke-recommend') {
	                var scmove = $('#' + paramId).offset().top - h - 50;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else if (paramId === 'bespoke-new-benefit') {
	                var scmove = $('#' + paramId).offset().top - h;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else if (paramId === 'bespoke_recommend') {
	                var scmove = $('#' + paramId).offset().top - h;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else if (paramId === 'bespoke_color3') {
	                var scmove = $('#' + paramId).offset().top - h;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else if (paramId === 'bespoke-fixed') {
	                var scmove = $('#' + paramId).offset().top - h;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else if (paramId === 'sec01_chef_benefit') {
	                var scmove = $('#' + paramId).offset().top - h;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else if (paramId === 'sec02_chef_set') {
	                var scmove = $('#' + paramId).offset().top - h;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else if (paramId === 'maserati') {       // 200814-특정커뮤니티 사용자는 신규추가 URL // 마세라티 구매자
	            	$('.no_maserati').hide();
	                $('.target_maserati').show();
	                var scmove = $('#' + paramId).offset().top - h;
	                $('html, body').animate({
	                    scrollTop: scmove
	                }, 400);
	            } else {

	            }
	        }
	        var getParameter = function(param) {
	            var rtnval = '';
	            var nowAddress = unescape(location.href);
	            var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1,
	                nowAddress.length)).split('&');
	            for (var i = 0; i < parameters.length; i++) {
	                var varName = parameters[i].split('=')[0];
	                if (varName.toUpperCase() == param.toUpperCase()) {
	                    rtnval = parameters[i].split('=')[1];
	                    break;
	                }
	            }
	            return rtnval;
	        }
	        var selectModel = function() {
	            var prod = settingCookie.loadProd();
	            var icnt = settingCookie.loadProd().length - 1;

	            var department = prod[icnt].dep;
	            var selMdl = prod[icnt].name;

	            var dataType = prod[icnt].type;
	            var relYear = prod[icnt].year;
	            var idx = prod[icnt].idx;
	            //Step 01
	            $('.type-select_btn[data-dep="' + department + '"]').click();
	            //Step 02
	            $('.ref-module-list a[data-type="' + dataType + '"]').trigger('click');
	            //Step 03
	            var modelChk = $('.my-edition-model-tbl.is_active tbody tr').eq(idx).find('.model_rdobox').trigger('click'); // idx
	            modelChk.prop('checked', true).attr('checked', true);
	            var selectedModelIdx = $(sTABLE).find('input[name=model]:checked').val();
	            var totalPrice = "" + aTotalPrice[selectedModelIdx];
	            $('.total_price').html('');
	            $('.total_price').html('<em>' + controlNumber.numberWithCommas(totalPrice) + '</em>원');
	        };

	        gridStep();
	        checkCookie();
	        tab.act();
	        bgHover();
	        changeTrekking(); // 20190808 추가
	        setTimeout(kienhoMove, 1000);
	        if (isLogin == "Y") {
	            cookieName = 'bespoke_make200703_chef';
	            if ($.cookie(cookieName) !== undefined) {
	                if (settingCookie.loadProd().length > 0) {
	                    selectModel(); //jjhan 추가
	                }
	            }
	        }

	        var selModel = function(model) {
	            var model = getParameter('selModel');
	            if (model == '') return;

	            var selMdl = '';
	            var dataType = '';
	            var department = '';
	            var relYear = '';

	            $.each(data, function(i, type) {
	                $.each(type.product, function(i, item) {

	                    if (model == item.modelName) {
	                        selMdl = model;
	                        dataType = item.dataType;
	                        department = item.department;
	                        relYear = item.relYear;
	                        return;
	                    }
	                });
	                if (selMdl != '') return;
	            });

	            $('.type-select_btn[data-dep="' + department + '"]').click(); //Step 01
	            $('.ref-module-list a[data-type="' + dataType + '"]').trigger('click'); //Step 02

	            $('.my-edition-model-tbl input[name="model"]').each(function(i, item) {
	                var mdl = $(item).parent().find('label').text();
	                if (selMdl == mdl) {
	                    $(item).trigger('click');
	                    if (!$(item).prop('checked')) {
	                        $(item).prop('checked', true).attr('checked', true);

	                    }
	                    $(item).parent().parent().next().removeClass('hide').addClass('show');  // 200707 - 해당제품활성화
	                    return;
	                } else {
	                	if($(item).parent().parent().next().hasClass('show')) {
	                		$(item).parent().parent().next().removeClass('show').addClass('hide');
	                	}
	                }

	            });
	        };

	        var model = getParameter('selModel');
	        if (model != '') {
	            selModel();
	        }



	       var selType = function() {

	            var vselType = getParameter('selType');
	            if (vselType == '') return;
	            var department = '';
	            if (vselType = "chef") {
	                 $('.type-select_btn[data-dep="C/C"]').click();           //Step 01
	                    var scmove = $(".my-edition-making-step-box.step-box_module").offset().top;
	                    $('html, body').animate({
	                        scrollTop: scmove
	                    }, 400);
	            }
	            return;
	        };

	        var vselType = getParameter('selType');
	        if (vselType != '') {
	            selType();
	        }

	        var selected2Model = function() {
	            var selValue, selMdl, dataType, department, relYear;
	            var vmodel = getParameter('selModel');
	            var vselType = getParameter('selType');

	            if (vmodel != '') {
	                selValue = vmodel;
	            } else if (vselType != '') {
	                selValue = vselType;
	            } else {
	                return;
	            }

	            $.each(data, function(i, type) {
	                $.each(type.product, function(i, item) {

	                    if (selValue == item.modelName || selValue == item.dataType) {
	                        selMdl = item.modelName;
	                        dataType = item.dataType;
	                        department = item.department;
	                        relYear = item.relYear;
	                        return;
	                    }
	                });
	                if (selMdl != '') return;
	            });
	            $('.type-select_btn[data-dep="' + department + '"]').click(); //Step 01
	            $('.ref-module-list a[data-type="' + dataType + '"]').trigger('click'); //Step 02

	            $('.my-edition-model-tbl input[name="model"]').each(function(i, item) {
	                var mdl = $(item).parent().find('label').text();
	                if (selMdl == mdl) {
	                    $(item).trigger('click');
	                    if (!$(item).prop('checked')) {
	                        $(item).prop('checked', true).attr('checked', true);
	                    }
	                    return;
	                }
	            });
	        };
	        choiceColorBtn();

	        if (isLogin == "Y") {
	            if ($.cookie(cookieName) !== undefined) {
	                if (settingCookie.loadProd().length > 0) {
	                    //로그인페이지 이동후 마지막 쿠키삭제
	                    settingCookie.deleteProd($('.my-edition-pick-item:last-child'), 'last');
	                }
	            }
	        }
	    }
	    var changeClass = function($el, btn, parents) {
	            if (parents === undefined) {
	                $el.addClass(sACTIVE).parent().eq(0).siblings().find(btn).removeClass(sACTIVE); //20190624 수정
	            } else if (btn == '.module_type') { //190624 추가
	                $el.parents(parents).addClass(sACTIVE).removeClass(sINACTIVE);
	                $el.parents(parents).siblings().removeClass(sACTIVE).addClass(sINACTIVE);
	            } else {
	                $el.parents(parents).addClass(sACTIVE).siblings().removeClass(sACTIVE) //20190624 수정
	            }
	        };
	    var popup = {
	        //팝업 공통 동작
	        commonAct: {
	            open: function($el) {
	                $el.addClass(sACTIVE);
	                $('.my-edition-ly-dim').show();
	            },
	            close: function() {
	                $('.my-edition-ly-popup').removeClass(sACTIVE);
	                $('.my-edition-ly-dim').hide();
	                /* 20190703 추가 start */
	                if ($('.my-edition-ly-popup').find("iframe").length > 0) {
	                    $('.my-edition-ly-popup').removeAttr("style");
	                    $('.my-edition-ly-popup').find("iframe").removeAttr("style");
	                }
	                /* 20190703 추가 end */
	                if ($('.my-edition-ly-popup').find('.slide-wrap') != undefined) {
	                    $('.my-edition-ly-popup').find('.slide-wrap').slick('unslick');
	                }
	            },
	        },
	        //선택사항보기
	        besPoke: function() {
	            var self_ = this;
	            var popupAction = {
	                selector: {
	                    popup: $('#layer01')
	                },
	                open: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    var modelIdx = $(this).parents('li').index();

	                    self_.commonAct.open(popupAction.selector.popup);
	                    popupAction.selector.popup.find('table tbody').html(aSelectedOpt[modelIdx]);
	                    popupAction.selector.popup.find('table thead').html(aSelectedOpt2[modelIdx]); //20190620 추가
	                },
	                close: function(e) {
	                    e.preventDefault();
	                    popupAction.selector.popup.find('table tbody').html('');

	                },
	            }

	            $(document).on('click', '.js-popup', popupAction.open)
	                .on('click', '.my-edition-ly-popup .btn-close', popupAction.close);
	        },
	        colorTooltip: function() {
	            var self_ = this;
	            var color = [{
	                    title: '코타 메탈 (Cotta Metal)',
	                    content: '에폭시 분말을 원료로 사용하여 철, 알루미늄 등에 정전기를 이용해 분체 도장을 한 소재로 메탈에 컬러를 입혀 구워낸 듯한 질감이 특징입니다. 매트한 표면이 차분한 공간을 연출하며 생활 스크래치에 강하고 지문이 잘 묻지 않습니다.',
	                    list: ['deepEspresso', 'pocelainW_M', 'pistachio'],
	                    text: ['Cotta<br>Charcoal', 'Cotta<br>White', 'Cotta<br>Mint'],
	                    src: ['img_cotta01', 'img_cotta02', 'img_cotta03', 'img_cotta04']
	                },
	                {
	                    title: '글램 글래스 (Glam Glass)',
	                    title02: '새틴 글래스 (Satin Glass)',
	                    content: '진공증착법으로 유리에 고굴절 금속산화물을 코팅한 소재로 거울처럼 반사되는 고광택의 영롱한 느낌이 특징입니다. 스크래치에 강하며 유성 볼펜도 물로 쉽게 제거됩니다.',
	                    content02: '유리를 매끈하게 연마하여 나노 단위의 초박막 내지문 코팅으로 부드러운 광택을 내며 시크하면서도 벨벳 같은 느낌이 특징입니다. 스크래치에 강하며 유성 볼펜도 물로 쉽게 제거됩니다.',
	                    list: ['mysticPink', 'pocelainW_G'],
	                    list02: ['stoneGray', 'silkyNavy', 'coral', 'yellow'],
	                    text: ['Glam<br>Pink', 'Glam<br>White'],
	                    text02: ['Satin<br>Gray', 'Satin<br>Navy', 'Satin<br>Coral', 'Satin<br>Yellow'],
	                    src: ['img_glam01', 'img_glam02', 'img_glam03', 'img_glam04', 'img_satin01', 'img_satin02', 'img_satin03', 'img_satin04']
	                }
	            ]

	            var popupAction = {
	                selector: {
	                    popup: $('#layer04')
	                },
	                open: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    var popW = 860,
	                        popH = 880,
	                        popL = Math.ceil((window.screen.width - popW) / 2),
	                        popT = Math.ceil((window.screen.height - popH) / 2),
	                        popSet = 'top=' + popT + ',left=' + popL + ',width=' + popW + ',height=' + popH + ',toolbar=no,resizable=yes,scrollbars=yes';

	                    var tab = $(this).attr('data-tab');

	                    self_.commonAct.open(popupAction.selector.popup);
	                    popupAction.selector.popup.find('.edition_info_tab li').eq(tab).click();
	                    popupAction.selector.popup.css("opacity", 1);
	                }
	            }
	            $(document).on('click', '.step-box_color .tooltip_btn', popupAction.open);
	            $('.step-box_module .tooltip_btn').on('click', popupAction.open); //20190627 추가
	        },
	        //step4 특장점 상세보기, 190822 팝업 내용 추가 s
	        featurestTooltip: function() {
	            var self_ = this;
	            var feature = [{
	                    title: "<span class='tit'>빅 아이스메이커</span>",
	                    contents: "무더운 여름에 온 가족이 수시로 얼음을 꺼내먹으면 금방 얼음이 동나서 얼음 채우는 것도 번거로운 일이 되는데요. <br>빅 아이스메이커는 이런 수고로움을 줄여줍니다. 한번에 2 L의 <br>물을 넣으면 자동으로 얼음을 얼려 얼음 박스에 채워줍니다.",
	                    caution: ["해당 모델에 한함"],
	                    img: 'img_feature01'
	                },
	                {
	                    title: "<span class='tit'>이온 살균 청정기</span>",
	                    contents: "냉장고 내부에 떠다니는 균은 물론, 벽면에 <br>붙어있는 부착균까지 99 %이상 살균되므로 식재료를 안심하고 보관 할 <br>수 있습니다. 필터의 교체나 세척 없이 반영구적으로 쓸 수있어 <br>더욱 편리합니다.",
	                    caution: ["살균력 99% KTR 인증 (시험대상균 대장균, 황색포도상구균 도포 24시간 후 잔여 제균 검증 조건)", "해당 모델에 한함"],
	                    img: 'img_feature02'
	                },
	                {
	                    title: "<span class='tit'>UV 청정 탈취기</span>",
	                    contents: "90 % 이상 탈취가 가능하므로 냉장고 안의 김치 냄새, <br>생선 냄새 등을 효율적으로 제거하여 줍니다. <br>필터 성능이 약 10년간 유지되므로 번거롭게 필터를 교체할 <br>필요가 없습니다.",
	                    caution: ["UV 청정탈취기 단품 살균 성능 99% 이상 (인터넥 성적서 확보, 대상균 대장균, 황색포도상구균)", "탈취력 90 % 이상, 인터텍 인증 (냉장고 상실에 시험 표준 gas를 주입 20시간 후 내부 가스 농도 측정 시험 결과)", "해당 모델에 한함 / 실사용 환경에 따라 달라질 수 있음."],
	                    img: 'img_feature03'
	                }
	            ];
	            var featureType03 = [{
	                    slideItems: [{
	                            title: "메탈쿨링",
	                            subTitle: '내부에 메탈을 적용해 미세 정온을 유지',
	                            contents: "냉기보존에 탁월한 메탈 소재를 천장, 커버, 선반, 서랍, 메탈쿨링 커튼까지 적용해 미세하게 정온을 유지합니다. 그래서 한 겨울 땅 속 같은 아삭한 김치맛을 오래 즐길 수 있습니다.",
	                            caution: ["상기 이미지는 연출한 이미지며, 모델별로 제품 내상 이미지 및 메탈 적용부위는 다를 수 있습니다"],
	                            img: 'pop_metal_4door_584'
	                        },
	                        {
	                            title: "메탈쿨링",
	                            subTitle: '내부에 메탈을 적용해 미세 정온을 유지',
	                            contents: "냉기보존에 탁월한 메탈 소재를 천장, 커버, 선반, 서랍, 메탈쿨링 커튼까지 적용해 미세하게 정온을 유지합니다. 그래서 한 겨울 땅 속 같은 아삭한 김치맛을 오래 즐길 수 있습니다.",
	                            caution: ["상기 이미지는 연출한 이미지며, 모델별로 제품 내상 이미지 및 메탈 적용부위는 다를 수 있습니다"],
	                            img: 'pop_metal_4door_486'
	                        },
	                        {
	                            title: "메탈쿨링",
	                            subTitle: '내부에 메탈을 적용해 미세 정온을 유지',
	                            contents: "냉기보존에 탁월한 메탈 소재를 도어, 커버, 선반, 메탈쿨링 서랍까지 적용해 미세하게 정온을 유지합니다. 그래서 한 겨울 땅 속 같은 아삭한 김치맛을 오래 즐길 수 있습니다.",
	                            caution: ["상기 이미지는 연출한 이미지며, 모델별로 제품 내상 이미지 및 메탈 적용부위는 다를 수 있습니다"],
	                            img: 'pop_metal_3door_313'
	                        }
	                    ]
	                },
	                {
	                    title: "메탈쿨링 김치통",
	                    subTitle: '메탈 소재로 김치를 오래 맛있게 보관하고, 냄새와 탈색 걱정이 적어 위생적인 프리미엄 김치통',
	                    contents: "메탈쿨링 김치통은 산소 투과도가 낮아 밀폐력이 뛰어나고, 효모 발생이 적어 일반 플라스틱 용기 대비 효모 수가 약 35% 적고, 냉각속도가 빠른 것으로 나타났습니다. <br>또한 냄새와 탈색 염려가 적어 위생적이고, 세척이 편리합니다.",
	                    caution: ["<span class='txt_indent type01'><span class='txt'>모수 비교 : </span>메탈쿨링김치통(RA-KSCRQ57), 자사 플라스틱 김치통에 저장 6주후 비교</span>", "<span class='txt_indent type02'><span class='txt'>냉각속도 비교 : </span>메탈쿨링김치통(RA-KSCRQ57), 자사 플라스틱 김치통에 상온 평형(22˚C)상태의 용기 내 물 부하 온도가 온도(2˚C)까지 도달되는 냉각시간 비교</span>", "자사 실험치 기준으로 실 사용시 차이가 있을 수 있음."],
	                    img: 'img_feature05'
	                }
	            ]
	            var featureType06 = [{
	                    slideItems: [{
	                            title: "메탈쿨링",
	                            subTitle: '내부에 메탈을 적용해 미세 정온을 유지',
	                            contents: "냉기보존에 탁월한 메탈 소재를 천장, 커버, 선반, 서랍, 메탈쿨링 커튼까지 적용해 미세하게 정온을 유지합니다. 그래서 한 겨울 땅 속 같은 아삭한 김치맛을 오래 즐길 수 있습니다.",
	                            caution: ["상기 이미지는 연출한 이미지며, 모델별로 제품 내상 이미지 및 메탈 적용부위는 다를 수 있습니다"],
	                            img: 'pop_metal_4door_584'
	                        },
	                        {
	                            title: "메탈쿨링",
	                            subTitle: '내부에 메탈을 적용해 미세 정온을 유지',
	                            contents: "냉기보존에 탁월한 메탈 소재를 천장, 커버, 선반, 서랍, 메탈쿨링 커튼까지 적용해 미세하게 정온을 유지합니다. 그래서 한 겨울 땅 속 같은 아삭한 김치맛을 오래 즐길 수 있습니다.",
	                            caution: ["상기 이미지는 연출한 이미지며, 모델별로 제품 내상 이미지 및 메탈 적용부위는 다를 수 있습니다"],
	                            img: 'pop_metal_4door_486'
	                        },
	                        {
	                            title: "메탈쿨링",
	                            subTitle: '내부에 메탈을 적용해 미세 정온을 유지',
	                            contents: "냉기보존에 탁월한 메탈 소재를 도어, 커버, 선반, 메탈쿨링 서랍까지 적용해 미세하게 정온을 유지합니다. 그래서 한 겨울 땅 속 같은 아삭한 김치맛을 오래 즐길 수 있습니다.",
	                            caution: ["상기 이미지는 연출한 이미지며, 모델별로 제품 내상 이미지 및 메탈 적용부위는 다를 수 있습니다"],
	                            img: 'pop_metal_3door_313'
	                        }
	                    ]
	                },
	                {
	                    title: "<span class='tit'>UV 청정 탈취기</span>",
	                    contents: "90 % 이상 탈취가 가능하므로 냉장고 안의 김치 냄새, <br>생선 냄새 등을 효율적으로 제거하여 줍니다. <br>필터 성능이 약 10년간 유지되므로 번거롭게 필터를 교체할 <br>필요가 없습니다.",
	                    caution: ["UV 청정탈취기 단품 살균 성능 99% 이상 (인터넥 성적서 확보, 대상균 대장균, 황색포도상구균)", "탈취력 90 % 이상, 인터텍 인증 (냉장고 상실에 시험 표준 gas를 주입 20시간 후 내부 가스 농도 측정 시험 결과)", "해당 모델에 한함 / 실사용 환경에 따라 달라질 수 있음."],
	                    img: 'img_feature03'
	                }
	            ]
	            var featureType04 = [{
	                    slideItems: [{
	                            title: "4단계 맞춤보관실",
	                            contents: "4단계 맞춤보관실인 중같은 필요에 따라 냉동, 살얼음, 김치보관, 냉장까지 온도를 바꿔서 사용할 수 있습니다.<br>별도의 김치 전용칸이 필요하거나, 냉동실이 부족한 경우에도 상황에 맞게 변온하여 사용할 수 있어 편리합니다.",
	                            caution: ["해당 모델에 한함"],
	                            img: 'pop_3door_01'
	                        },
	                        {
	                            title: "4단계 맞춤보관실",
	                            contents: "4단계 맞춤보관실인 중같은 필요에 따라 냉동, 살얼음, 김치보관, 냉장까지 온도를 바꿔서 사용할 수 있습니다.<br>별도의 김치 전용칸이 필요하거나, 냉동실이 부족한 경우에도 상황에 맞게 변온하여 사용할 수 있어 편리합니다.",
	                            caution: ["해당 모델에 한함"],
	                            img: 'pop_3door_02'
	                        },
	                        {
	                            title: "4단계 맞춤보관실",
	                            contents: "4단계 맞춤보관실인 중같은 필요에 따라 냉동, 살얼음, 김치보관, 냉장까지 온도를 바꿔서 사용할 수 있습니다.<br>별도의 김치 전용칸이 필요하거나, 냉동실이 부족한 경우에도 상황에 맞게 변온하여 사용할 수 있어 편리합니다.",
	                            caution: ["해당 모델에 한함"],
	                            img: 'pop_3door_03'
	                        },
	                        {
	                            title: "4단계 맞춤보관실",
	                            contents: "4단계 맞춤보관실인 중같은 필요에 따라 냉동, 살얼음, 김치보관, 냉장까지 온도를 바꿔서 사용할 수 있습니다.<br>별도의 김치 전용칸이 필요하거나, 냉동실이 부족한 경우에도 상황에 맞게 변온하여 사용할 수 있어 편리합니다.",
	                            caution: ["해당 모델에 한함"],
	                            img: 'pop_3door_04'
	                        }
	                    ]
	                },
	                {
	                    slideItems: [{
	                            title: "칸별 3종 수납세트",
	                            contents: "상칸, 중칸, 하칸 칸별 공간과 용도에 맞는 수납 솔루션으로 식재료 보관이 더 편리해집니다.<br>상칸 냉장실은 음료 전용 수납 트레이가 있고,<br>중칸 맞춤보관실에는 전용 디바이더가 있고,<br>하칸 냉동실에는 HMR 전용 보관 박스가 있어<br>쉽고 깔끔하게 냉장고 속을 정리할 수 있습니다.",
	                            caution: ["해당 모델에 한함"],
	                            img: 'pop_3door_05'
	                        },
	                        {
	                            title: "칸별 3종 수납세트",
	                            contents: "상칸, 중칸, 하칸 칸별 공간과 용도에 맞는 수납 솔루션으로 식재료 보관이 더 편리해집니다.<br>상칸 냉장실은 음료 전용 수납 트레이가 있고,<br>중칸 맞춤보관실에는 전용 디바이더가 있고,<br>하칸 냉동실에는 HMR 전용 보관 박스가 있어<br>쉽고 깔끔하게 냉장고 속을 정리할 수 있습니다.",
	                            caution: ["해당 모델에 한함"],
	                            img: 'pop_3door_04'
	                        },
	                        {
	                            title: "칸별 3종 수납세트",
	                            contents: "상칸, 중칸, 하칸 칸별 공간과 용도에 맞는 수납 솔루션으로 식재료 보관이 더 편리해집니다.<br>상칸 냉장실은 음료 전용 수납 트레이가 있고,<br>중칸 맞춤보관실에는 전용 디바이더가 있고,<br>하칸 냉동실에는 HMR 전용 보관 박스가 있어<br>쉽고 깔끔하게 냉장고 속을 정리할 수 있습니다.",
	                            caution: ["해당 모델에 한함"],
	                            img: 'pop_3door_07'
	                        }
	                    ]
	                }
	            ]
	            var featureType07 = [
	                {
	                    title: "오토필 정수기",
	                    contents: "이제 한 잔씩 따르지 말고 1.4 L 물통을 그대로 꺼내 마셔보세요.<br>물통에 자동으로 물이 채워지고 시원하게 보관돼 온 가족이 마셔도 넉넉합니다.<br>냉장실 내부에 위치해 외부 박테리아 오염에도 안전하죠.<br>맛이나 향을 첨가할 수 있는 인퓨저도 있어 활용도가 뛰어납니다.",
	                    caution: ["해당 모델에 한함"],
	                    img: 'img_chef_feature01'
	                }
	            ]
	            // 200714

	            var popupAction = {
	                selector: {
	                    popup: $('#layer03'),
	                    slidePOP: $('#layer-slide'),
	                },
	                open: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();

	                    var $parents = $(this).parents('.my-edition-model-tbl'),
	                        idx = $(this).parents('th').index() - 2;

	                    if ($parents.hasClass('type1') || $parents.hasClass('type2') || $parents.hasClass('type5')) {
	                        popupAction.makeHTML(idx, feature);
	                    }

	                    if ($parents.hasClass('type3')) {
	                        if (featureType03[idx].slideItems == undefined) {
	                            popupAction.makeHTML(idx, featureType03);
	                        } else {
	                            popupAction.slideHTML(idx, featureType03);
	                        }
	                    }
	                    if ($parents.hasClass('type4')) {
	                        if (featureType04[idx].slideItems == undefined) {
	                            popupAction.makeHTML(idx, featureType04);
	                        } else {
	                            popupAction.slideHTML(idx, featureType04);
	                        }
	                    }
	                    if ($parents.hasClass('type6')) {
	                        if (featureType06[idx].slideItems == undefined) {
	                            popupAction.makeHTML(idx, featureType06);
	                        } else {
	                            popupAction.slideHTML(idx, featureType06);
	                        }
	                    }
	                    if ($parents.hasClass('type7')) {
	                        idx = 0;
	                        popupAction.makeHTML(idx, featureType07);
	                    } // 200624 - popup(부가기능)오토필 정수기
	                },
	                makeHTML: function(idx, type) {
	                    var _type = type,
	                        _idx = idx;
	                    self_.commonAct.open(popupAction.selector.popup);
	                    popupAction.selector.popup.find('.feature_desc').html('');
	                    popupAction.selector.popup.find('.feature_tit').html('<span class="tit">' + _type[_idx].title + '</span>');

	                    if (_type[_idx].subTitle != undefined) {
	                        popupAction.selector.popup.find('.feature_tit').append('<span class="subtitle">' + _type[_idx].subTitle + '</span');
	                    }
	                    popupAction.selector.popup.find('.feature_img img').attr({ 'src': imgDomain_chef + '/bespoke/images/v1/' + _type[_idx].img + '.jpg?$ORIGIN_JPG$', 'alt': _type[_idx].title }); //190822 이미지 경로 변경 필요
	                    popupAction.selector.popup.find('.feature_txt').html(_type[_idx].contents);
	                    $.each(_type[_idx].caution, function(i, item) {
	                        popupAction.selector.popup.find('.feature_desc').append('<p>' + item + '</p>');
	                    });
	                },
	                slideHTML: function(idx, type) {
	                    var _type = type,
	                        _idx = idx;

	                    popupAction.selector.slidePOP.find('.slide-item').remove();

	                    var a = '';
	                    for (var i in _type[_idx].slideItems) {
	                        a += '<div class="slide-item">' +
	                            '<div class="hd-popup">' +
	                            '<div class="feature_img">' +
	                            '<div class="img"><img src="'+ imgDomain_chef +'/bespoke/images/v1/' + _type[_idx].slideItems[i].img + '.jpg?$ORIGIN_JPG$" alt="' + _type[_idx].slideItems[i].title + '"></div>' +
	                            '</div>' +
	                            '</div>' +
	                            '<div class="bd-popup">' +
	                            '<h2 class="feature_tit"><span class="tit">' + _type[_idx].slideItems[i].title + '</span></h2>' +
	                            '<div class="feature_txt">' + _type[_idx].slideItems[i].contents + '</div>' +
	                            '<div class="feature_desc"><p>' + _type[_idx].slideItems[i].caution + '</p></div>' +
	                            '</div>' +
	                            '</div>';
	                    }

	                    popupAction.selector.slidePOP.find('.slide-wrap').html(a);

	                    if (_type[_idx].slideItems[i].subTitle != undefined) {
	                        popupAction.selector.slidePOP.find('.feature_tit').append('<span class="subtitle">' + _type[_idx].slideItems[i].subTitle + '</span');
	                    }

	                    self_.commonAct.open(popupAction.selector.slidePOP);
	                    popupAction.selector.slidePOP.find('img').load(function() { popupAction.selector.slidePOP.find('.slide-wrap').slick(); })
	                }
	            }

	            $('.step-box_function .tooltip_btn').click(popupAction.open);
	        },
	        //유의사항
	        benefitLink: function() {
	            var self_ = this;
	            var benefit = [{
	                    title: "삼성전자 포인트 유의 사항",
	                    content: [
	                        "각종 할인 및 쿠폰이 반영된 최종 결제금액 기준",
	                        "멤버십포인트는 최종 결제금액 기준으로 적립되며,<br />기본 0.2%포인트는 연간적립 한도인 60,000P 내에서 적립",
	                        "기본 0.2%, 각 모델 별 포인트, 500만원 이상 결제 시<br />결제금액의 4%(멤버십 회원대상) 모두 중복 적용되어 적립"
	                    ]
	                },
	                {
	                    title: "삼성 카드 결제시 유의 사항",
	                    content: [
	                        "삼성카드 : 통합 월 할인한도 / 월20만원 1인 기준",
	                        "할인혜택의 경우 카카오페이,PAYCO를 통한 간편결제 건은 제외"
	                    ]
	                }
	            ]

	            var collabo = [{
	                title: "배송 및 사은품 신청",
	                content: [
	                    "배송 기간 : 구매 결제 확정 후 1개월 이내 순차 발송 예정",
	                    "사은품 신청 방법 : 주문 결제 시, 사은품 3종 중 1종 선택",
	                    "신청 대상 : 삼성닷컴에서 BESPOKE 냉장고 구매 고객 전원",
	                    "사은품 선택 후 변경은 상품이 배송되기 이전까지만 가능합니다"
	                ]
	            }]

	            var popupAction = {
	                selector: {
	                    popup: $('#layer06')
	                },
	                open: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    var idx, caution;
	                    if ($(this).parents('div').hasClass('my-edition-content')) {
	                        caution = benefit;
	                        idx = $(this).parents('li').index();
	                    } else if ($(this).parents('div').hasClass('my-edition-collabo-section')) {
	                        caution = collabo;
	                        idx = 0;
	                    } else {
	                    	return; // else return 추가 [통합수정 2020-09-14]
	                    }
	                    
	                    self_.commonAct.open(popupAction.selector.popup)
	                    popupAction.selector.popup.addClass(sACTIVE);
	                    popupAction.selector.popup.find('.hd-popup_tit').text(caution[idx].title);
	                    popupAction.selector.popup.find('.notice-list').html('');
	                    $.each(caution[idx].content, function(i, item) {
	                        popupAction.selector.popup.find('.notice-list').append('<li>' + item + '</li>');
	                    });
	                }
	            }
	            $('.data_popup').click(popupAction.open);
	        },
	        // 타입선택 팝업 - step 01
	        typeChoice: function() {
	            var self_ = this;
	            var typeChoice = [{
	                    title: "셰프컬렉션 프리스탠딩",
	                    content: [
	                        "주방에 설치된 표준장/싱크대 기준으로 냉장고 전면부가 돌출된 형태로 설치됩니다.",
	                        "크기<br>제품 크기(가로*세로*깊이) :  912×1,856×930 mm",
	                        "좌우후면 설치폭 각 50mm"
	                    ]
	                },
	                {
	                    title: "비스포크 프리스탠딩",
	                    content: [
	                        "주방에 설치된 표준장/싱크대 기준으로 냉장고 전면부가 돌출된 형태로 설치됩니다.",
	                        "깊이<br>4도어 일반 냉장고 기준 : 약 930mm<br>4도어 김치냉장고(584L) 기준 : 약 892mm<br>4도어 김치냉장고(486L) 기준 : 약 794mm",
	                        "좌우 설치폭 각 50mm"
	                    ]
	                },
	                {
	                    title: "비스포크 키친핏",
	                    content: [
	                        "주방의 냉장고 표준장/싱크대 기준으로 전면부가 돌출되지 않고 딱 맞게 설치됩니다.",
	                        "좌우 설치폭 각 12mm",
	                        "키친핏 냉장고 2대 이상 구매 시 냉장고간 연결을 위한 설치용 자재 (RA-C07KAAAA) 별도 구매 필요합니다.",
	                        "싱크대 깊이 700mm 기준"
	                    ]
	                }
	            ]
	            var popupAction = {
	                selector: {
	                    popup: $('#layer07')
	                },
	                open: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    var idx, caution;
	                    if ($(this).parents('div').hasClass('my-edition-content')) {
	                        caution = typeChoice;
	                        idx = $(this).closest('.my-edition-cont-inner').index();
	                    } else if ($(this).parents('div').hasClass('my-edition-collabo-section')) {
	                        caution = collabo;
	                        idx = 0;
	                    } else {
	                    	return; // else return 추가 [통합수정 2020-09-14]
	                    }
	                    self_.commonAct.open(popupAction.selector.popup)
	                    popupAction.selector.popup.addClass(sACTIVE);
	                    popupAction.selector.popup.find('.hd-popup_tit').text(caution[idx].title);
	                    popupAction.selector.popup.find('.notice-list').html('');
	                    $.each(caution[idx].content, function(i, item) {
	                        popupAction.selector.popup.find('.notice-list').append('<li>' + item + '</li>');
	                    });
	                }
	            }
	            $('.type_popup').click(popupAction.open);
	        },
	        //AR내 공간에서 체험하기
	        arExperience: function() {
	            var self_ = this;
	            var aList = [];
	            var popupAction = {
	                selector: {
	                    popup: $ARPOPUP
	                },
	                open: function(e) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                    self_.commonAct.open(popupAction.selector.popup)
	                }
	            }
	            $('.my-edition-pick-section .ar_btn').click(popupAction.open);
	        },
	        confirm_: function(type, txt, yesFn, noFn, coFn) {
	            var self_ = this;
	            var value;
	            var popupAction = {
	                selector: {
	                    popup: $('#layer02')
	                },
	                open: function() {
	                    popupAction.selector.popup.find('.popup_txts').html('<p>' + txt + '</p>');
	                    self_.commonAct.open(popupAction.selector.popup);
	                    $('.btn-deny').remove();

	                    switch (type) {
	                        case 1:
	                            popupAction.selector.popup.find('.btn_wrap').prepend('<button type="button" class="btn btn-deny">아니오</button>')
	                            break;
	                        case 3:
	                            $('.btn').remove();
	                            popupAction.selector.popup.find('.btn_wrap').prepend('<button type="button" class="btn">나만의조합 제품구매</button>')
	                            popupAction.selector.popup.find('.btn_wrap').prepend('<button type="button" class="btn btn-deny">완제품구매</button>')
	                            break;
	                    }
	                },
	                clickBtn: function() {
	                    popupAction.selector.popup.find('.btn').off('click').click(function(e) {
	                        $('.my-edition-ly-popup').removeClass(sACTIVE);
	                        $('.my-edition-ly-dim').hide();

	                        if ($(this).hasClass('btn-deny')) {
	                            e.preventDefault();
	                            e.stopPropagation();
	                            if (noFn !== undefined) {
	                                noFn();
	                                return false;
	                            }
	                        } else {
	                            if (yesFn !== undefined) {
	                                yesFn();
	                            }
	                        }

	                        if (coFn !== undefined) {
	                            coFn();
	                        }
	                    })
	                }
	            }
	            popupAction.open()
	            popupAction.clickBtn();
	        },
	        confirm8: function(type, txt, price1, price2, yesFn, noFn, coFn) {
	            var self_ = this;
	            var value;
	            var popupAction = {
	                selector: {
	                    popup: $('#layer08')
	                },
	                open: function() {
	                    self_.commonAct.open(popupAction.selector.popup);
	                    $('.btn-deny').remove();

	                    switch (type) {
	                        case 1:
	                            popupAction.selector.popup.find('.btn_wrap').prepend('<button type="button" class="btn btn-deny">아니오</button>');
	                            popupAction.selector.popup.find('.choice_product').html('');
	                            popupAction.selector.popup.find('.choice_product').html('<span>선택한 제품조합</span><span>회원가 <em>' + price1 + '</em>원</span>');

	                            popupAction.selector.popup.find('.same_product').html('');
	                            popupAction.selector.popup.find('.same_product').html('<span>동일한 완제품</span><span>혜택가 <em>' + price2 + '</em>원</span>');

	                            break;
	                        case 3:
	                            $('.btn').remove();
	                            popupAction.selector.popup.find('.btn_wrap').prepend('<button type="button" class="btn">나만의조합 제품구매</button>')
	                            popupAction.selector.popup.find('.btn_wrap').prepend('<button type="button" class="btn btn-deny">완제품구매</button>')
	                            break;
	                    }
	                },
	                clickBtn: function() {
	                    popupAction.selector.popup.find('.btn').off('click').click(function(e) {
	                        $('.my-edition-ly-popup').removeClass(sACTIVE);
	                        $('.my-edition-ly-dim').hide();

	                        if ($(this).hasClass('btn-deny')) {
	                            e.preventDefault();
	                            e.stopPropagation();
	                            if (noFn !== undefined) {
	                                noFn();
	                                return false;
	                            }
	                        } else {
	                            if (yesFn !== undefined) {
	                                yesFn();
	                            }
	                        }

	                        if (coFn !== undefined) {
	                            coFn();
	                        }
	                    })
	                }
	            }
	            popupAction.open();
	            popupAction.clickBtn();
	        },
	        act: function() {
	            var self_ = this;
	            $(document).on('click', '.my-edition-ly-popup .btn-close', function() {
	                self_.commonAct.close();
	            });
	            this.besPoke();
	            this.colorTooltip();
	            this.featurestTooltip();
	            this.benefitLink();
	            this.arExperience();
	            this.typeChoice();
	        }
	    }
	    //바로 구매하기 버튼 클릭
	    var buyNow = function() {
	        $(document).on('click', '.my-pick_btn_buy', function() {
	            /*
	             prod3List
	             var idx = $(this).parents('.my-edition-pick-item').index();
	             var choicedProd = null;

	             if (isLogin == "Y") {
	                 choicedProd = prod3List[idx];
	             } else {
	                 choicedProd = prodList[idx];
	             }

	             var dataParam = choicedProd.name + ':::1';
	             $.each(choicedProd.panel, function (i, item) {
	                 var panel = "";
	                 if (aFAMILY.indexOf(motype) > -1) { //패밀리허브 4door_family
	                     if (i != 1) {
	                         panel = item.code.toUpperCase();
	                         dataParam += '&productCode=' + panel + ':::1';
	                     }
	                 } else {
	                     panel = item.code.toUpperCase();
	                     dataParam += '&productCode=' + panel + ':::1';
	                 }
	             });
	             */

	            // 2020-06-11 패밀리 허브  로그인시 패널 구매 오류 수정
	            var parent_wrap = $(this).parents('.my-edition-pick-item');
	            var door_type = parent_wrap.find('.my-pick_img').data('type');
	            var idx = parent_wrap.index();
	            var choicedProd = null;

	            if (isLogin == "Y") {
	                choicedProd = prod3List[idx];
	            } else {
	                choicedProd = prodList[idx];
	            }
	            //console.log(choicedProd);

	            var dataParam = choicedProd.name + ':::1';

	            $.each(choicedProd.panel, function(i, item) {
	                var panel = "";
	                if (door_type == '4door_family' && i == 1) { return; }
	                panel = item.code.toUpperCase();
	                dataParam += '&productCode=' + panel + ':::1';
	            });

	            // end

	            var fixedParam = dataParam;
	            if (choicedProd.pkg1 != "") { dataParam += '&productCode=' + choicedProd.pkg1 + ':::1'; }
	            if (choicedProd.fil1 != "") { dataParam += '&productCode=' + choicedProd.fil1 + ':::1'; }
	            if (choicedProd.opt1 != "") { dataParam += '&productCode=' + choicedProd.opt1 + ':::1'; } // 2020-06-30 구매 하기  수정

	            selectPrice = choicedProd.price; //선택한 제품조합 회원가
	            buyfixedMatchAjax(dataParam, fixedParam); // 매칭제품 여부 확인하기
	            //console.log(dataParam);
	        })
	    };

	    var buyfixedMatchAjax = function(dataParam, fixedParam, type) {
	        var self_ = this;
	        var fixedmodel = "";
	        var yesCallback = function() {
	            buyAjax(fixedmodel + ':::1'); // 매칭제품 있으면 'Y' : fixedMdl구매
	        }
	        var noCallback = function() {
	            buyAjax(dataParam);
	        }
	        var coCallback = function() {}
	        
	        var params = {
				'storeCd': 'sec',
				'productCode': + fixedParam
			};
	        
	        var option = {
	            url: '/sec/xhr/bespoke/fixedMatchAjax',
	        	dataType: "json",
	            type: "POST",
	            jsonpCallback: "jsonpcallback_bespoke",
	            data: params,
	            success: function(rtnjson) {
	                var price1 = "0";
	                var price2 = "0";

	                if (rtnjson.fixedMatchResult.code == 'Y') {
	                    fixedmodel = rtnjson.fixedMatchResult.data.fixedMdl;
	                    price1 = controlNumber.numberWithCommas(selectPrice);
	                    price2 = controlNumber.numberWithCommas(rtnjson.fixedMatchResult.data.bPrice);

	                    popup.confirm8(1, '가격비교 안내 및 fixed 제품 구매', price1, price2, yesCallback, noCallback, coCallback)
	                    return false;
	                } else {
	                	if(type == 'cart'){
							cartAjax(dataParam);
						} else {
	                    buyAjax(dataParam);
	                	}
	                }
	            },
	            error: function(response, status, error) {
	                alert('fixedMatchAjax.오류');
	            },
	            beforeSend: function(xhr) {
	                xhr.setRequestHeader("ajax", true);
	            },
	            complete: function() {}
	        };

	        $.ajax(option);
	    };
	/*
	    var buyAjax = function(data) {
	        var option = {
	            url: 'https://store.samsung.com/sec/ng/p4v1/buyNowTogether?productCode=' + data,
	            dataType: "jsonp",
	            type: "GET",
	            success: function(result) {
	                if (result.resultCode == '0000') {
	                    location.href = 'https://store.samsung.com/sec/cart/buynow'; // 장바구니 페이지로 이동
	                } else {
	                    alert(result.resultMessage); // resultMessage 화면에 노출
	                }
	            },
	            error: function(response, status, error) {
	                alert('오류');
	            },
	            beforeSend: function(xhr) {
	                xhr.setRequestHeader("ajax", true);
	            },
	            complete: function() {}
	        };
	        $.ajax(option);
	    };
	*/
		var buyAjax = function (data) {
			//console.log("buyAjax()");
			var data = data.replace(/productCode=/g, '');
			var data = data.replace(/:::1/g, '');
			//console.log(data);
			var data = data.replace(/&/g, '^');
			//console.log("data : " + data);
			
			var ids = '';
			
			var option1 = {
					url: "/sec/xhr/bespoke/goodsIdsAjax",
					dataType: "json",
					type: "POST",
					async: false,
					data: {bspkGrpKeys : data},
					success: function (result) {
						
						if(typeof(result.exCode) !== 'undefined') {
		            		var alertData ={
		           					title : ""
		           					, content : result.exMsg
		           					, callBack : ""
		           					, btnText : "확인"
		           			};
		           			commonAlert(alertData);
		        			openLayer('commonAlert');
		        			return false;
		            	} else {
		            		ids =  JSON.stringify(result.goodsIdList);
		            	}
						
					},
					error: function (response, status, error) {
						alert('오류');
						return false;
					},
					beforeSend: function (xhr) {
						xhr.setRequestHeader("ajax", true);
					},
					complete: function () { }
				};
			$.ajax(option1);
			
			if(ids != '') {
				var option = {
						url: "/sec/xhr/order/insertCart",
						dataType: "json",
						type: "POST",
						data: {
							nowBuyYn : 'Y',
							bspkGrpKeys : data, 
							goodsIds : ids
						},
						success: function (result) {
							//console.log("result : ");
							//console.log(result);
							/*
							if (result.resultCode == '0000') {
								location.href = 'https://store.samsung.com/sec/cart/buynow'; // 장바구니 페이지로 이동
							} else {
								alert(result.resultMessage); // resultMessage 화면에 노출
							}
							*/
							if(typeof(result.exCode) !== 'undefined') {
			            		var alertData ={
			           					title : ""
			           					, content : result.exMsg
			           					, callBack : ""
			           					, btnText : "확인"
			           			};
			           			commonAlert(alertData);
			        			openLayer('commonAlert');
			        			return false;
			            	} else {
			            		var form = document.createElement('form');
			    				
			    				form.setAttribute('action', "/sec/order/");
			    				form.setAttribute('target', "_self");
			    				form.setAttribute('method', 'post');
			    				
			    				document.body.appendChild(form);
			    				form.submit();
			            	}
							
						},
						error: function (response, status, error) {
							alert('오류');
						},
						beforeSend: function (xhr) {
							xhr.setRequestHeader("ajax", true);
						},
						complete: function () { }
					};
					$.ajax(option);
			}
			
		};
		
		//[2020-09-08]
		
		var fnOpenLayer = function($objLayer, data){
			var t = $objLayer.attr('id');
			$objLayer.html(data);
			if($(".layer-pop").is(":visible")) {
				LAYERZINDEX++; // 200729 팝업 두 개 이상 띄울 경우 z-index ++
			} else {
				LAYERZINDEX = 300; // 200729 팝업 두 개 이상 띄울 경우 z-index ++
			}
			$objLayer.show().css("z-index", LAYERZINDEX).attr("aria-hidden", false).attr("data-zindex", LAYERZINDEX).focus(); // 200729 z-index 값 data attr에 저장
			$objLayer.find(".pop-close").data("activeTarget", t);
			if(!$objLayer.hasClass("embed")){ // 200724
				$("body *") // 200722 레이어 팝업를 제외한 영역은 hidden처리(스크린 리더기)
					.not($("#"+t))
					.not($("#"+t).parents())
					.not($("#"+t).find("*"))
					.not($objLayer.parents())
					.not($objLayer).attr("aria-hidden", true);
			}
			// 딤드팝업 마스크 생성 및 활성화  // 200729
			if(!$objLayer.hasClass("nomask")){
				var zidx = parseInt($("#"+t).attr("data-zindex")) - 1;
				$("body").append("<div id='mask' data-mask-target='"+t+"' style='z-index:"+zidx+"'></div>");

				$("#mask").fadeIn().data("activeTarget", t);
				$("body").css("overflow","hidden");
			}
			
	        if(!$("body").children().is("#mask")) $("body").append("<div id='mask'></div>");
	        $("#mask").fadeIn().data("activeTarget", $objLayer.data("popup-layer"));
	        $("body").css("overflow","hidden");
	        
	        
	        $objLayer.find('.pop-close').off().on('click', function (){
	        	$objLayer.removeAttr("style").removeAttr("data-zindex").attr("aria-hidden", true).hide();  // 200729
	        	$objLayer.empty();
	        	
	        	if ($objLayer.hasClass("layer-storepickup")) $objLayer.removeClass("layer-storepickup");
				if ($objLayer.hasClass("layer-gatherview")) $objLayer.removeClass("layer-gatherview");
				if ($objLayer.hasClass("popup-comm-video")) $objLayer.removeClass("popup-comm-video");
				if ($objLayer.hasClass("popup-comm-img360")) $objLayer.removeClass("popup-comm-img360");
				if ($objLayer.hasClass("popup-comm-gallery")) $objLayer.removeClass("popup-comm-gallery");
				
	        	if(!$(".layer-pop").not("#latestItemLayer").is(":visible")) $("body").css("overflow",""); // 200729 팝업 모두 닫힌 후에 overflow hidden 해제
	        	$("#mask[data-mask-target='"+t+"']").fadeOut("fast").remove();  // 200729
	        	$objLayer.focus();
	        	if(!$objLayer.hasClass("embed")){ // 200724
	        		$("body *") // 200722 
	        		.not($("#"+t))
	    			.not($("#"+t).parents())
	    			.not($("#"+t).find("*"))
	    			.not($objLayer.parents())
	    			.not($objLayer).removeAttr("aria-hidden");
	        	}
	        	LAYERZINDEX--;  // 200729 레이어팝업 z-index값 초기화
	        	
				$(this).off();
		    });
	        return $objLayer;
		}
		
		var fnMsgPop = function(vOption){
			var msgOptions = {};
			if(typeof vOption === "string"){
				$.extend(msgOptions, { content : vOption, yes : "확인", close : "닫기" });
			}else if(typeof vOption === "object"){
				$.extend(msgOptions, vOption);
			}
			fnOpenLayer($("#popupMsg"), $("#popupMsgTempl").render(msgOptions)).find('a').off().on('click', function (){
				if($(this).hasClass('login-view')){
					var returnUrl = $("input[name=returnUrl]").val();
					// 로그인 화면 이동
					location.href = $(goodsDetail.vWrapId).data("ctpath") + "member/indexLogin/?returnUrl="+returnUrl;
				}else if($(this).hasClass('contact-view')){
					// 견적문의
					console.log("견적문의 이동");
					location.href =$(goodsDetail.vWrapId).data("ctpath") + "support/contactus/sales-enquiries/?goodsId="+$("[name=goodsId]").val();
				}else if($(this).hasClass('cart-view')){
					// 장바구니 가기
					//location.href = $(goodsDetail.vWrapId).data("ctpath") + "cart/";
					location.href='/sec/cart/';
				}else if($(this).hasClass('btn-type1') || $(this).hasClass('btn-type2')){
					// 팝업닫기
					$(this).closest('.layer-pop').find('.pop-close').trigger('click');
				}
			});
		};
		
		
		// TODO : jkjang 장바구니 연동 ajax
		var cartAjax = function (data, param) {
			//console.log("cartAjax();");
			var cartParam = "";
			var data = data.replace(/productCode=/g, '');
			var data = data.replace(/:::1/g, '');
			//console.log(data);
			var data = data.replace(/&/g, '^');
			
			//console.log("data : " + data);
			/*
			var splitData = data.split('&');
			for(var i = 0 ; i < splitData.length ; i++){
				
				var prefix = "";
				if(i > 0) {
					prefix = "^";
				}
				var prd = prefix + splitData[i];
				cartParam += prd;
			}
			*/
			
			var ids = '';
			
			var option1 = {
					url: "/sec/xhr/bespoke/goodsIdsAjax",
					dataType: "json",
					type: "POST",
					async: false,
					data: {bspkGrpKeys : data},
					success: function (result) {
						
						if(typeof(result.exCode) !== 'undefined') {
		            		var alertData ={
		           					title : ""
		           					, content : result.exMsg
		           					, callBack : ""
		           					, btnText : "확인"
		           			};
		           			commonAlert(alertData);
		        			openLayer('commonAlert');
		        			return false;
		            	} else {
		            		ids =  JSON.stringify(result.goodsIdList);
		            	}
						
					},
					error: function (response, status, error) {
						alert('오류');
						return false;
					},
					beforeSend: function (xhr) {
						xhr.setRequestHeader("ajax", true);
					},
					complete: function () { }
				};
			$.ajax(option1);
			
			if(ids != '') {
				var option = {
						url: "/sec/xhr/order/insertCart",
						dataType: "json",
						type: "POST",
						data: {
							nowBuyYn : 'N',
							bspkGrpKeys : data, 
							goodsIds : ids
						},
					success: function (result) {
						
						if(typeof(result.exCode) !== 'undefined') {
		            		var alertData ={
		           					title : ""
		           					, content : result.exMsg
		           					, callBack : ""
		           					, btnText : "확인"
		           			};
		           			commonAlert(alertData);
		        			openLayer('commonAlert');
		        			return false;
		            	} else {
		            		var $msgData = {};
		    				$.extend($msgData, $("#btnCart").data());
		    				$msgData.content = $msgData.content.replace("$cnt$", result.cartCnt);
		    				fnMsgPop($msgData);
		            	}
					},
					error: function (response, status, error) {
						alert('오류');
					},
					beforeSend: function (xhr) {
						xhr.setRequestHeader("ajax", true);
					},
					complete: function () { }
				};
				$.ajax(option);
			}
		};


		
	    var dirbuyNow = function() {
	        $(document).on('click', '.buy_btn', function() {
	            var visibleLength = $(sREF).find(sBTN + ':visible').length;
	            if (aFAMILY.indexOf(motype) > -1) { //패밀리허브 4door_family
	                visibleLength = 3;
	            }
	            if (visibleLength !== $(sREF).find(sBTN + '[data-img]').length) {
	                popup.confirm_(2, '모든 컬러가 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.')
	                return false;
	            } else if ($(sTABLE).find('input[name=model]:checked').length === 0) {
	                popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.');
	                return false;
	            } else if ($(sREF).find(sBTN + ':visible').length <= 0) {
	                popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.')
	                return false;
	            } else {
	                var idx = 0,
	                    p1pkgMdlb1 = "",
	                    p1pkgMdlb2 = "", // 2020-06-30 구매 하기  수정
	                    f2pkgMdlb1 = "";
	                var dirbuyName = $(sTABLE).find(' input[name=model]:checked + label').text();
	                data = dirbuyName + ':::1';
	                $('.my-edition-making-ref.active button').each(function() {
	                    var panel = "";
	                    if (aFAMILY.indexOf(motype) > -1) { //패밀리허브 4door_family
	                        if (idx != 1) {
	                            panel = $(this).attr('data-img').toUpperCase();
	                            data += '&productCode=' + panel + ':::1';
	                        }
	                    } else {
	                        panel = $(this).attr('data-img').toUpperCase();
	                        data += '&productCode=' + panel + ':::1';
	                    }
	                    idx++;
	                });
	                var selidx = $(sTABLE).find('input[name=model]:checked').val();
	                var chkval = $(sTABLE).find('input[name=package' + selidx + '0]:checked').val();


	                var chkval2 = $(sTABLE).find('input[name=package' + selidx + '1]:checked').val(); // 2020-06-30 구매 하기  수정
	                if (chkval && chkval.length > 0) {
	                    p1pkgMdlb1 = chkval.split(';')[3];
	                    f2pkgMdlb1 = chkval.split(';')[5];
	                }

	                // 2020-06-30 구매 하기  수정
	                if (chkval2 && chkval2.length > 0) {
	                    p1pkgMdlb2 = chkval2.split(';')[3];
	                }
	                // 2020-06-30 구매 하기  수정

	                var fixedParam = data;
	                if (p1pkgMdlb1 != "") { data += '&productCode=' + p1pkgMdlb1 + ':::1'; }
	                if (f2pkgMdlb1 != "") { data += '&productCode=' + f2pkgMdlb1 + ':::1' + '&productCode=' + p1pkgMdlb2 + ':::1'; } // 2020-06-30 구매 하기  수정
	                buyfixedMatchAjax(data, fixedParam); // 매칭제품 여부확인

	            }

	        })
	    };
	    
	    
	    //TODO : s: jkjang 장바구니 버튼 이벤트 바인딩 
	  	var insertCart = function () {
	  		//console.log("insertCart()!");
	  		$(document).on('click', '.cart_btn', function () {
	  			//console.log("insert click!!");
	  			var visibleLength = $(sREF).find(sBTN + ':visible').length;
	  			if (aFAMILY.indexOf(motype) > -1) { //패밀리허브 4door_family
	  				visibleLength = 3;
	  			}
	  			if (visibleLength !== $(sREF).find(sBTN + '[data-img]').length) {
	  				popup.confirm_(2, '모든 컬러가 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.')
	  				return false;
	  			} else if ($(sTABLE).find('input[name=model]:checked').length === 0) {
	  				popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.');
	  				return false;
	  			} else if ($(sREF).find(sBTN + ':visible').length <= 0) {
	  				popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.')
	  				return false;
	  			} else {
	  				var idx = 0,
	  					p1pkgMdlb1 = "",
	  					p1pkgMdlb2 = "", // 2020-06-30 구매 하기  수정
	  					f2pkgMdlb1 = "";
	  				var dirbuyName = $(sTABLE).find(' input[name=model]:checked + label').text();
	  				data = dirbuyName + ':::1';
	  				$('.my-edition-making-ref.active button').each(function () {
	  					var panel = "";
	  					if (aFAMILY.indexOf(motype) > -1) { //패밀리허브 4door_family
	  						if (idx != 1) {
	  							panel = $(this).attr('data-img').toUpperCase();
	  							data += '&productCode=' + panel + ':::1';
	  						}
	  					} else {
	  						panel = $(this).attr('data-img').toUpperCase();
	  						data += '&productCode=' + panel + ':::1';
	  					}
	  					idx++;
	  				});
	  				var selidx = $(sTABLE).find('input[name=model]:checked').val();
	  				var chkval = $(sTABLE).find('input[name=package' + selidx + '0]:checked').val();


	  				var chkval2 = $(sTABLE).find('input[name=package' + selidx + '1]:checked').val(); // 2020-06-30 구매 하기  수정
	  				if (chkval && chkval.length > 0) {
	  					p1pkgMdlb1 = chkval.split(';')[3];
	  					f2pkgMdlb1 = chkval.split(';')[5];
	  				}

	  				// 2020-06-30 구매 하기  수정
	  				if (chkval2 && chkval2.length > 0) {
	  					p1pkgMdlb2 = chkval2.split(';')[3];
	  				}
	  				// 2020-06-30 구매 하기  수정

	  				var fixedParam = data;
	  				if (p1pkgMdlb1 != "") { data += '&productCode=' + p1pkgMdlb1 + ':::1'; }
	  				if (f2pkgMdlb1 != "") { data += '&productCode=' + f2pkgMdlb1 + ':::1' + '&productCode=' + p1pkgMdlb2 + ':::1'; } // 2020-06-30 구매 하기  수정
	  				//buyfixedMatchAjax(data, fixedParam); // 매칭제품 여부확인
	  				//cartAjax(data, fixedParam);
	  				buyfixedMatchAjax(data, fixedParam, 'cart');
	  			}
	  		})
	  	};
	    
	    var showArPopup = function() { //AR내 공간에서 체험하기 팝업 pc 숨김
	        var pc = function() {
	            if ($ARPOPUP.is(':visible')) {
	                $ARPOPUP.remove(sACTIVE);
	                popup.commonAct.close();
	            }
	        };
	        resizeFunc(pc);
	    };

	    var collaboSlick = function() {
	        var option = {
	            autoplay: true,
	            arrows: false,
	            pauseOnHover: false,
	            pauseOnDotsHover: false,
	            pauseOnFocus: false,
	            infinite: true,
	            dots: true,
	            prevArrow: '<button type="button" class="slick-prev"><span>이전</span></button>',
	            nextArrow: '<button type="button" class="slick-next"><span>다음</span></button>',
	        }
	        $('.my-edition-collabo-kienho').slick(option);
	    };
	    /*
	    var selectionOrderChange = function(mobileFlag) { // 20190619 : 최상단 냉장고 이미지 영역 순서 바꾸기
	        var $sMODEL = $(sMODEL);

	        if (mobileFlag) {
	            $(sSTEP04).find('.my-edition-step_cont').prepend($sMODEL);
	        } else {
	            $('.my-edition-making-wrap').prepend($sMODEL);
	        }
	    };
	    */
	    $('.promo-tab-2dep li.on a').click(function() {
	        var scrollPosMake = $(".my-edition-making-wrap").offset().top;
	        var body = $("html, body");
	        body.stop().animate({ scrollTop: scrollPosMake - 50 }, 500, 'swing', function() {
	            $('.my-edition-making-wrap').trigger('focus');
	        });
	    });

	    var getParam = function(param) {
	        var rtnval = '';
	        var nowAddress = unescape(location.href);
	        var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1,
	            nowAddress.length)).split('&');
	        for (var i = 0; i < parameters.length; i++) {
	            var varName = parameters[i].split('=')[0];
	            if (varName.toUpperCase() == param.toUpperCase()) {
	                rtnval = parameters[i].split('=')[1];
	                break;
	            }
	        }
	        return rtnval;
	    };

	    var colorTab = function() {
	        $('.colorchip_tit').on('click', function(e) {
	            e.preventDefault();
	            $('.colorchip_list.mo_only.tab > a').removeClass('active');
	            $('.colorchip_list.mo_only.tab > ul').removeClass('active');
	            $(this).addClass('active');
	            $(this).parent().find('#' + $(this).attr('data-id')).addClass('active');
	        })

	    }

	    var json_host = location.host.split(".")[0];
	    customizingRef.init = function() {
	        mobileFlag = window.innerWidth <= 768 ? true : false;
	        prevSize = mobileFlag == true ? "mobile" : "pc";
	        currentSize = mobileFlag == true ? "mobile" : "pc";
	        selectionOrderChange(mobileFlag);
	        isLogin = 'N';
	        var searchParams = {
	            'storeCd': 'sec'
	             // 'year': '2020' 2021 김치 4도어 추가
	        };
	        $.ajax({
	            //url: "https://local.sec.samsung.com/comLocal/bespoke/productInfo.do",
	        	url: "/sec/xhr/bespoke/productInfo",
	            // url: 'https://local.sec.samsung.com/comLocal/bespoke/myModelInfoAjax.do?storeCd=sec',
	            //  0601  data
	            dataType: 'json',
	            type: 'POST',
	            data: searchParams,
	            jsonpCallback: "jsonpcallback_bespoke",
	            success: function(result) {
	            	var data = new Array();
					data.push(result.data);
					data.push(result.sessionMap);
					
	                //로그인 사용자 정보 설정.
	                isLogin = data[1].isLogin;
	                // s - 2020-06-01  - 검증화면
	                if (data[1].isBespokeLogin !== 'undefined' && data[1].isBespokeLogin == 'N') {
	                    if ($('#bespokeLogin').length) {
	                        $('#bespokeLogin').trigger("click");
	                    }
	                }
	                //  e - 2020-06-01
	                init(data[0]);
	            },
	            error: function(xhr) {}
	        });
	        popup.act();
	        buyNow();
	        dirbuyNow();
	        insertCart();
	        collaboSlick();
	        showArPopup();
	        colorTab();
	        if (!mobileFlag) { selectionFixedFunc.selectionFixedPc(); }
	    };

	    return customizingRef;
	})(document, window, jQuery);

	$(document).ready(function() {
	    customizingRef.init();
	});

	(function($) {
	    "use strict";

	    function Sortable(el, options) {
	        var self = this,
	            $sortable = $(el),
	            container_type = $sortable[0].nodeName,
	            node_type = (container_type == 'OL' || container_type == 'UL') ? 'LI' : 'DIV',
	            defaults = {
	                //options
	                handle: false,
	                container: container_type,
	                container_type: container_type,
	                same_depth: false,
	                make_unselectable: false,
	                nodes: node_type,
	                nodes_type: node_type,
	                placeholder_class: null,
	                auto_container_class: 'sortable_container',
	                autocreate: false,
	                group: false,
	                scroll: false,
	                update: null
	            };
	        self.$sortable = $sortable.data('sortable', self);
	        self.options = $.extend({}, defaults, options);
	        self.init();
	    }

	    Sortable.prototype.invoke = function(command) {
	        var self = this;
	        if (command === 'destroy') {
	            return self.destroy();
	        } else if (command === 'serialize') {
	            return self.serialize(self.$sortable);
	        }
	    };

	    Sortable.prototype.init = function() {
	        var self = this,
	            $clone,
	            $placeholder,
	            origin;
	        if (self.options.make_unselectable) {
	            $('html').unselectable();
	        }
	        self.$sortable
	            .addClass('sortable')
	            .on('destroy.sortable', function() {
	                self.destroy();
	            });

	        function find_insert_point($node, offset) {
	            var containers, best, depth;
	            if (!offset) { return; }
	            containers = self.$sortable
	                .add(self.$sortable.find(self.options.container))
	                .not($node.find(self.options.container))
	                .not($clone.find(self.options.container))
	                .not(self.find_nodes());
	            if (self.options.same_depth) {
	                depth = $node.parent().nestingDepth('ul');
	                containers = containers.filter(function() {
	                    return $(this).nestingDepth('ul') == depth;
	                });
	            }
	            $placeholder.hide();
	            containers.each(function(ix, container) {
	                var $trailing = $(self.create_placeholder()).appendTo(container),
	                    $children = $(container).children(self.options.nodes).not('.sortable_clone'),
	                    $candidate,
	                    n,
	                    dist;

	                for (n = 0; n < $children.length; n++) {
	                    $candidate = $children.eq(n);
	                    dist = self.square_dist($candidate.offset(), offset);
	                    if (!best || best.dist > dist) {
	                        best = { container: container, before: $candidate[0], dist: dist };
	                    }
	                }
	                $trailing.remove();
	            });
	            $placeholder.show();
	            return best;
	        }

	        function insert($element, best) {
	            var $container = $(best.container);
	            if (best.before && best.before.closest('html')) {
	                $element.insertBefore(best.before);
	            } else {
	                $element.appendTo($container);
	            }
	        };
	        self.$sortable.dragaware($.extend({}, self.options, {
	            delegate: self.options.nodes,
	            dragstart: function(evt) {
	                var $node = $(this);
	                $clone = $node.clone()
	                    .removeAttr('id')
	                    .addClass('sortable_clone')
	                    .css({
	                        position: 'absolute'
	                    })
	                    .insertAfter($node)
	                    .offset($node.offset());
	                $placeholder = self.create_placeholder()
	                    .css({
	                        height: $node.outerHeight(),
	                        width: $node.outerWidth()
	                    })
	                    .insertAfter($node);
	                $node.hide();
	                origin = new PositionHelper($clone.offset());
	                if (self.options.autocreate) {
	                    self.find_nodes().filter(function(ix, el) {
	                        return $(el).find(self.options.container).length == 0;
	                    }).append('<' + self.options.container_type + ' class="' + self.options.auto_container_class + '"/>');
	                }
	            },
	            drag: function(evt, pos) {
	                var $node = $(this),
	                    offset = origin.absolutize(pos),
	                    best = find_insert_point($node, offset);

	                $clone.offset(offset);
	                insert($placeholder, best);
	            },
	            dragstop: function(evt, pos) {
	                var $node = $(this),
	                    offset = origin.absolutize(pos),
	                    best = find_insert_point($node, offset);
	                if (best) {
	                    insert($node, best);
	                }
	                $node.show();
	                if ($clone) {
	                    $clone.remove();
	                }
	                if ($placeholder) {
	                    $placeholder.remove();
	                }
	                $clone = null;
	                $placeholder = null;
	                if (best && self.options.update) {
	                    self.options.update.call(self.$sortable, evt, self);
	                }
	                self.$sortable.trigger('update');
	            }
	        }));
	    };

	    Sortable.prototype.destroy = function() {
	        var self = this;
	        if (self.options.make_unselectable) {
	            $('html').unselectable('destroy');
	        }
	        self.$sortable
	            .removeClass('sortable')
	            .off('.sortable')
	            .dragaware('destroy');
	    };

	    Sortable.prototype.serialize = function(container) {
	        var self = this;
	        return container.children(self.options.nodes).not(self.options.container).map(function(ix, el) {
	            var $el = $(el),
	                text = $el.clone().children().remove().end().text().trim(), //text only without children
	                id = $el.attr('id'),
	                node = {
	                    id: id || text
	                };
	            if ($el.find(self.options.nodes).length) {
	                node.children = self.serialize($el.children(self.options.container));
	            }
	            return node;
	        }).get();
	    };

	    Sortable.prototype.find_nodes = function() {
	        var self = this;
	        return self.$sortable.find(self.options.nodes).not(self.options.container);
	    };

	    Sortable.prototype.create_placeholder = function() {
	        var self = this;
	        return $('<' + self.options.nodes_type + '/>')
	            .addClass('sortable_placeholder')
	            .addClass(self.options.placeholder_class);
	    };

	    Sortable.prototype.square_dist = function(pos1, pos2) {
	        return Math.pow(pos2.left - pos1.left, 2) + Math.pow(pos2.top - pos1.top, 2);
	    };

	    function Draggable_local(el, options) {
	        var self = this,
	            defaults = {
	                handle: false,
	                delegate: false,
	                revert: false,
	                placeholder: false,
	                droptarget: false,
	                container: false,
	                scroll: false,
	                update: null,
	                drop: null
	            };

	        self.$draggable = $(el).data('draggable', self);
	        self.options = $.extend({}, defaults, options);

	        self.init();
	    }

	    Draggable_local.prototype.init = function() {
	        var self = this,
	            $clone,
	            origin;
	        self.$draggable
	            .addClass('draggable')
	            .on('destroy.draggable', function() {
	                self.destroy();
	            });

	        function check_droptarget(pos) {
	            var $over;

	            $clone.hide();
	            $over = $(document.elementFromPoint(pos.clientX, pos.clientY)).parents(self.options.droptarget);
	            $clone.show();

	            if ($over.length) {
	                $over.find("button").addClass('active').parent().siblings().find("button").removeClass("active");;
	                return $over;
	            }
	        }

	        self.$draggable.dragaware($.extend({}, self.options, {
	            dragstart: function(evt) {
	                var $this = $(this);
	                if (self.options.placeholder || self.options.revert) {
	                    $clone = $this.clone()
	                        .removeAttr('id')
	                        .addClass('draggable_clone')
	                        .css({ position: 'absolute' })
	                        .appendTo(self.options.container || $this.parent())
	                        .offset($this.offset());
	                    if (!self.options.placeholder) {
	                        $(this).invisible();
	                    }
	                } else {
	                    $clone = $this;
	                }
	                origin = new PositionHelper($clone.offset());
	            },
	            drag: function(evt, pos) {
	                var $droptarget = check_droptarget(pos);
	                $clone.offset(origin.absolutize(pos));
	            },
	            dragstop: function(evt, pos) {
	                var $this = $(this),
	                    $droptarget = check_droptarget(pos);
	                if (self.options.revert || self.options.placeholder) {
	                    $this.visible();
	                    if (!self.options.revert) {
	                        $this.offset(origin.absolutize(pos));
	                    }
	                    $clone.remove();
	                }
	                $clone = null;
	                if (self.options.update) {
	                    self.options.update.call($this, evt, self);
	                }
	                $this.trigger('update');
	                if ($droptarget) {
	                    if (self.options.drop) {
	                        self.options.drop.call($this, evt, $droptarget[0]);
	                    }
	                    $droptarget.trigger('drop', [$this]);
	                    $droptarget.removeClass('active');
	                }
	            }
	        }));
	    };

	    Draggable_local.prototype.destroy = function() {
	        var self = this;
	        self.$draggable
	            .dragaware('destroy')
	            .removeClass('draggable')
	            .off('.draggable');
	    };

	    function Droppable(el, options) {
	        var self = this,
	            defaults = {
	                accept: false,
	                drop: null
	            };
	        self.$droppable = $(el).data('droppable', self);
	        self.options = $.extend({}, defaults, options);
	        self.init();
	    }

	    Droppable.prototype.init = function() {
	        var self = this;

	        self.$droppable
	            .addClass('droppable')
	            .on('drop', function(evt, $draggable) {
	                if (self.options.accept && !$draggable.is(self.options.accept)) {
	                    return;
	                }
	                if (self.options.drop) {
	                    self.options.drop.call(self.$droppable, evt, $draggable);
	                }
	            })
	            .on('destroy.droppable', function() {
	                self.destroy();
	            });
	    };

	    Droppable.prototype.destroy = function() {
	        var self = this;
	        self.$droppable
	            .removeClass('droppable')
	            .off('.droppable');
	    };

	    function Dragaware(el, options) {
	        var $dragaware = $(el),
	            $reference = null,
	            origin = null,
	            lastpos = null,
	            defaults = {
	                handle: null,
	                delegate: null,
	                scroll: false,
	                scrollspeed: 15,
	                scrolltimeout: 50,
	                dragstart: null,
	                drag: null,
	                dragstop: null
	            },
	            scrolltimeout;
	        options = $.extend({}, defaults, options);

	        function evtpos(evt) {
	            evt = window.hasOwnProperty('event') ? window.event : evt;
	            if (evt.type.substr(0, 5) === 'touch') {
	                evt = evt.hasOwnProperty('originalEvent') ? evt.originalEvent : evt;
	                evt = evt.touches[0];
	            }

	            return {
	                pageX: evt.pageX,
	                pageY: evt.pageY,
	                clientX: evt.clientX,
	                clientY: evt.clientY,
	                dX: origin ? evt.pageX - origin.pageX : 0,
	                dY: origin ? evt.pageY - origin.pageY : 0
	            };
	        }

	        function autoscroll(pos) {
	            var sp = $dragaware.scrollParent(),
	                mouse = { x: pos.pageX, y: pos.pageY },
	                offset = sp.offset(),
	                scrollLeft = sp.scrollLeft(),
	                scrollTop = sp.scrollTop(),
	                width = sp.width(),
	                height = sp.height();
	            window.clearTimeout(scrolltimeout);

	            if (scrollLeft > 0 && mouse.x < offset.left) {
	                sp.scrollLeft(scrollLeft - options.scrollspeed);
	            } else if (scrollLeft < sp.prop('scrollWidth') - width && mouse.x > offset.left + width) {
	                sp.scrollLeft(scrollLeft + options.scrollspeed);
	            } else if (scrollTop > 0 && mouse.y < offset.top) {
	                sp.scrollTop(scrollTop - options.scrollspeed);
	            } else if (scrollTop < sp.prop('scrollHeight') - height && mouse.y > offset.top + height) {
	                sp.scrollTop(scrollTop + options.scrollspeed);
	            } else {
	                return; //so we don't set the next timeout
	            }
	            scrolltimeout = window.setTimeout(function() { autoscroll(pos); }, options.scrolltimeout);
	        }

	        function start(evt) {
	            var $target = $(evt.target);
	            $reference = options.delegate ? $target.closest(options.delegate) : $dragaware;
	            if ($target.closest(options.handle || '*').length && (evt.type == 'touchstart' || evt.button == 0)) {
	                origin = lastpos = evtpos(evt);
	                if (options.dragstart) {
	                    options.dragstart.call($reference, evt, lastpos);
	                }
	                $reference.addClass('dragging');
	                $('body').addClass('dragcursor');
	                $reference.trigger('dragstart');
	                $(document)
	                    .on('touchend.dragaware mouseup.dragaware click.dragaware', end)
	                    .on('touchmove.dragaware mousemove.dragaware', move);
	                return false
	            }
	        }

	        function move(evt) {
	            lastpos = evtpos(evt);
	            if (options.scroll) {
	                autoscroll(lastpos);
	            }
	            $reference.trigger('dragging');
	            if (options.drag) {
	                options.drag.call($reference, evt, lastpos);
	                return false;
	            }
	        }

	        function end(evt) {
	            window.clearTimeout(scrolltimeout);
	            if (options.dragstop) {
	                options.dragstop.call($reference, evt, lastpos);
	            }
	            $('body').removeClass('dragcursor');
	            $reference.removeClass('dragging');
	            $reference.trigger('dragstop');
	            origin = false;
	            lastpos = false;
	            $reference = false;
	            $(document)
	                .off('.dragaware');

	            return false;
	        }
	        $dragaware
	            .addClass('dragaware')
	            .on('touchstart.dragaware mousedown.dragaware', options.delegate, start);

	        $dragaware.on('destroy.dragaware', function() {
	            $dragaware
	                .removeClass('dragaware')
	                .off('.dragaware');
	        });
	    }

	    function PositionHelper(origin) {
	        this.origin = origin;
	    }

	    PositionHelper.prototype.absolutize = function(pos) {
	        if (!pos) {
	            return this.origin;
	        }
	        return { top: this.origin.top + pos.dY, left: this.origin.left + pos.dX };

	    };

	    $.fn.sortable = function(options) {
	        var filtered = this.not(function() {
	            return $(this).is('.sortable') || $(this).closest('.sortable').length;
	        });
	        if (this.data('sortable') && typeof options === 'string') {
	            return this.data('sortable').invoke(options);
	        }
	        if (filtered.length && options && options.group) {
	            new Sortable(filtered, options);
	        } else {
	            filtered.each(function(ix, el) {
	                new Sortable(el, options);
	            });
	        }
	        return this;
	    };

	    $.fn.draggable_local = function(options) {
	        if (options === 'destroy') {
	            this.trigger('destroy.draggable');
	        } else {
	            this.not('.draggable').each(function(ix, el) {
	                new Draggable_local(el, options);
	            });
	        }
	        return this;
	    };

	    $.fn.droppable = function(options) {
	        if (options === 'destroy') {
	            this.trigger('destroy.droppable');
	        } else {
	            this.not('.droppable').each(function(ix, el) {
	                new Droppable(el, options);
	            });
	        }
	        return this;
	    };

	    $.fn.dragaware = function(options) {
	        if (options === 'destroy') {
	            this.trigger('destroy.dragaware');
	        } else {
	            this.not('.dragaware').each(function(ix, el) {
	                new Dragaware(el, options);
	            });
	        }
	        return this;
	    };

	    $.fn.unselectable = function(command) {
	        function disable() {
	            return false;
	        }
	        if (command == 'destroy') {
	            return this
	                .removeClass('unselectable')
	                .removeAttr('unselectable')
	                .off('selectstart.unselectable');
	        } else {
	            return this
	                .addClass('unselectable')
	                .attr('unselectable', 'on')
	                .on('selectstart.unselectable', disable);
	        }
	    };

	    $.fn.invisible = function() {
	        return this.css({ visibility: 'hidden' });
	    };

	    $.fn.visible = function() {
	        return this.css({ visibility: 'visible' });
	    };

	    $.fn.scrollParent = function() {
	        return this.parents().addBack().filter(function() {
	            var p = $(this);
	            return (/(scroll|auto)/).test(p.css("overflow-x") + p.css("overflow-y") + p.css("overflow"));
	        });
	    };

	    $.fn.nestingDepth = function(selector) {
	        var parent = this.parent().closest(selector || '*');
	        if (parent.length) {
	            return parent.nestingDepth(selector) + 1;
	        } else {
	            return 0;
	        }
	    };
	    var video_kv = $(".video-kv");
	    video_kv.each(function() {
	        var $wrap = $(this),
	            $thumb_video_wrap = $wrap.find(".thumb_video"),
	            $thumb_video = $thumb_video_wrap.find("video"),
	            $main_video_wrap = $wrap.find(".bespoke-dim-layer"),
	            $main_video = $main_video_wrap.find("video"),
	            $btn_play = $wrap.find(".btn-video-play"),
	            $btn_close = $wrap.find(".btn-close"),
	            $kv_summary = $wrap.find(".kv-summary"),
	            $kv_title = $wrap.find(".kv-title");
	        var $video_play = false;
	        var $mouseenter = false;
	        var $video_ready = false;

	        $wrap.on("mouseenter", function() {
	            $mouseenter = true;
	        }).on("mouseleave", function() {
	            $mouseenter = false;
	        });
	        $btn_play.on("click", function() {
	            $main_video_wrap.addClass("on");
	            $kv_summary.addClass("off");
	            $kv_title.addClass("off");
	            if ($("#video_cont").attr("src") == "") {
	                $("#video_cont").attr("src", "https://www.youtube.com/embed/PhHa8blMBrU?enablejsapi=1&origin=" + window.location.origin);
	            }
	        });

	        $btn_close.on("click", function() {
	            $btn_close.removeClass("on");
	            $main_video_wrap.removeClass("on");
	            $kv_summary.removeClass("off");
	            $kv_title.removeClass("off");
	            $('#video_cont')[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
	        });
	    });
	    // 재질보기영상추가
	    $('.bespoke_key_slider .btn-video-play, .btn-video-play_mobile').on('click', function() {
	        $(".video-kv .btn-video-play").click();
	    });
	    // 맨상단 슬라이드 배너 (새로운 컬러, 업그레이드된 스펙)
	    $('.bespoke_key_slider .single-item-key').slick({
	        // infinite: false,
	        prevArrow: "<button type='button' class='slick-prev-one'>Previous</button>",
	        nextArrow: "<button type='button' class='slick-next-one'>Next</button>"
	    });


	}(jQuery));

	// 200702 - chef 초기
	// var selType = function () {
//	     var vselType = getParameter('selType');
//	     if (vselType == '') return;

//	     if(vselType = "chef" ){
//	         $('.type-select_btn[data-dep="C/C"]').click();           //Step 01
//	         var scmove = $("#chefcollection-buy").offset().top - $(".promo-nav-outer").outerHeight();
//	         $('html, body').animate({
//	             scrollTop: scmove
//	         }, 400);

//	     }

	// };
	// //200702 - chef 초기

	function packageOption() {
		$('.type7_slick').not('.slick-initialized').slick({
	        infinite: false
	    }); // 200624 - 패키지 슬라이드
	};

	// 0508 삼성닷컴 단독 혜택 배너 - 2번째 컨텐츠
	var benefit = new Swiper(".benefit_list", {
	    slidesPerView: 'auto',
	    spaceBetween: 20,
	    loop: false,
	    navigation: {
	        nextEl: '.btn_bene_next',
	        prevEl: '.btn_bene_prev',
	    },
	    breakpoints: {
	        768: {
	            slidesPerView: 4,
	        }
	    }
	});


	//  하단 js !!!! - aem 반영시 주의

	(function ($) {
	    /*
	    Filename.html?tab=InitNumber&slide=InitNumber
	    InitNumber : 0 ~
	    */
	    var infoPopup = function () {
	        var sImgPath = imgDomain_chef + '/bespoke/images/v1/'; //작업용

	        var getParamVal = function (name) {
	            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	                results = regex.exec(location.search);
	            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	        };
	        var paramTab = getParamVal('tab'),
	            paramSlide = getParamVal('slide');

	        var sACTIVE = 'active';

	        var popup = {
	            colorTooltip: function () {
	                var self_ = this;
	                var color = [{
	                    title: '코타 메탈 (Cotta Metal)',
	                    content: '메탈 컬러를 입혀 구워낸 듯한 느낌의 재질입니다.',
	                    feature1: '생활 스크래치에 강하고 지문이 잘 묻지 않습니다.',
	                    feature2: '폭시 분말을 원료로 사용하여 철, 알루미늄 등에 정전기를 이용하여 분체 도장을 하였습니다.',
	                    list: ['deepEspresso', 'pocelainW_M', 'pistachio'],
	                    text: ['Cotta<br>Charcoal', 'Cotta<br>White', 'Cotta<br>Mint'],
	                    src: ['img_cotta01', 'img_cotta02', 'img_cotta03', 'img_cotta04']
	                },
	                {
	                    // 20190731_v3 탭순서 변경 수정 s
	                    title: '새틴 글래스 (Satin Glass)',
	                    content: '부드러운 광택을 내며 시크하면서도 벨벳 같은 느낌의 재질',
	                    feature1: '스크래치에 강하며 유성 볼펜도 물로 쉽게 제거됩니다.',
	                    feature2: '유리를 매끈하게 연마하여 나노 단위의 초박막 내지문 코팅을 하였습니다.',
	                    list: ['stoneGray', 'silkyNavy', 'coral', 'yellow'],
	                    text: ['Satin<br>Gray', 'Satin<br>Navy', 'Satin<br>Coral', 'Satin<br>Yellow'],
	                    src: ['img_satin01', 'img_satin02', 'img_satin03', 'img_satin04']
	                },
	                {
	                    title: '글램 글래스 (Glam Glass)',
	                    content: '거울처럼 반사되는 고광택의 영롱한 느낌의 재질입니다.',
	                    feature1: '스크래치에 강하며 유성 볼펜도 물로 쉽게 제거됩니다.',
	                    feature2: '진공증착법으로 유리에 고굴절 금속산화물을 코팅하였습니다.',
	                    list: ['mysticPink', 'pocelainW_G'],
	                    text: ['Glam<br>Pink', 'Glam<br>White'],
	                    src: ['img_glam01', 'img_glam02_v1', 'img_glam03', 'img_glam04']

	                    // 20190731_v3 탭순서 변경 수정 e
	                },
	                { // 20190729 슈퍼픽션 내용 수정 s
	                    title: '슈퍼픽션 (Super Fiction)',
	                    content: '크리에이티브 디자인 스튜디오「슈퍼픽션」과 컬래버레이션으로 완성한 환상적인 「BESPOKE」 작품을 만나보세요.',
	                    content2: '리미티드 에디션으로 나만의 유니크한 인테리어를 완성하세요.',
	                    feature1: '',
	                    feature2: '',
	                    list: [],
	                    text: [],
	                    src: ['img_super00', 'img_super01', 'img_super02']
	                    // 20190729 슈퍼픽션 내용 수정 e
	                }
	                ]

	                var popupAction = {
	                    videoSrc: [ imgDomain_chef + '/bespoke/kv/cotta_metal.mp4', imgDomain_chef + '/bespoke/kv/satin_glass.mp4', imgDomain_chef + '/bespoke/kv/glam_glass.mp4', ''],
	                    selector: {
	                        popup: $('#layer04'),
	                        tabItem: '.edition_info_tab li',
	                        tabItemColor: '.edition_tab_color a',
	                        tabCont: '.edition_info_tab_cont'
	                    },
	                    open: function (e) {
	                        if (paramTab !== undefined) {
	                            popupAction.init(paramTab, paramSlide);
	                        } else {
	                            popupAction.init(0, paramSlide);
	                        }
	                        popupAction.clickBtn();
	                    },
	                    sliderHtml: function (idx) {
	                        popupAction.selector.popup.find('.feature_tit').text(color[idx].title);
	                        popupAction.selector.popup.find('.feature_txt').text(color[idx].content);
	                        popupAction.selector.popup.find('.feature_list li').eq(0).find('span').text(color[idx].feature1);
	                        popupAction.selector.popup.find('.feature_list li').eq(1).find('span').text(color[idx].feature2);
	                        popupAction.selector.popup.find('.slick-slider').removeClass("slick-initialized").empty();

	                        /* 20190729 슈퍼픽션 내용 수정 s  */
	                        if (idx == 3) {
	                            $('.my-edition-ly-popup .slick-slider').css('display', 'block');
	                            $('.feature_list').css('display', 'none');
	                            popupAction.selector.popup.find('.feature_txt').append('<br/>');
	                            popupAction.selector.popup.find('.feature_txt').append(color[idx].content2);
	                        } else {
	                            $('.my-edition-ly-popup .slick-slider').css('display', 'none');
	                        }
	                        /* 20190729 슈퍼픽션 내용 수정 e */

	                        $.each(color[idx].src, function (i, item) {
	                            var innerHtml = '<div>'
	                            innerHtml += '<div class="img">'
	                            innerHtml += '   <img src="' + sImgPath + item + '.jpg?$ORIGIN_JPG$" >'; // 작업용 임시 소스
	                            innerHtml += '</div>'
	                            innerHtml += '</div>'
	                            popupAction.selector.popup.find('.slick-slider').append(innerHtml);
	                        });

	                        var slickOption = {
	                            arrows: true,
	                            autoplay: true, //20190627_2차
	                            autoplaySpeed: 3000,
	                            pauseOnHover: false,
	                            pauseOnDotsHover: false,
	                            pauseOnFocus: false,
	                            infinite: true,
	                            dots: true,
	                            slidesToShow: 1,
	                            slidesToScroll: 1,
	                            prevArrow: '<button type="button" class="slick-prev"><span>이전</span></button>',
	                            nextArrow: '<button type="button" class="slick-next"><span>다음</span></button>',
	                        }

	                        popupAction.selector.popup.find('.slick-slider').slick(slickOption);
	                    },
	                    close: function (e) {
	                        //window.close();
	                    },
	                    init: function (tabNum, slideNum) {
	                        popupAction.activeTab(tabNum, slideNum);
	                    },
	                    video: {
	                        videoSrc: [ imgDomain_chef + '/bespoke/kv/cotta_metal.mp4', imgDomain_chef + '/bespoke/kv/satin_glass.mp4', imgDomain_chef + '/bespoke/kv/glam_glass.mp4', ''],
	                        play: function (num) {
	                            $('.color_info_wrap > video > source').attr('src', popupAction.video.videoSrc[num]);
	                            try{
	                            	if($('.color_info_wrap > video')[0]){
	                            		$('.color_info_wrap > video')[0].load();
	                            	}
	                            } catch(e){console.log(e);}
	                            $('.color_info_wrap > video').show();
	                        },
	                        stop: function () {
	                            $('.color_info_wrap > video').hide();
	                            $('.color_info_wrap > video > source').attr('src', '');
	                            try{
	                            	if($('.color_info_wrap > video')[0]){
	                            		$('.color_info_wrap > video')[0].load();
	                            	}
	                            } catch(e){console.log(e);}
	                        }
	                    },
	                    clickBtn: function () {
	                        $(document).on('click', popupAction.selector.tabItemColor, function (e) {
	                            e.stopImmediatePropagation();
	                            var slideNum = $(this).index();

	                            /*동영상 재생*/
	                            popupAction.video.play(slideNum);
	                            popupAction.initSubTab(slideNum);
	                            e.preventDefault();
	                        })
	                            .on('click', popupAction.selector.tabItem, function (e) {
	                                var tabNum = $(this).closest('li').index();
	                                popupAction.activeTab(tabNum);
	                                e.preventDefault();
	                            })
	                    },
	                    initSubTab: function (slideNum) {
	                        if ($(popupAction.selector.tabItemColor).is(':visible')) {
	                            $(popupAction.selector.tabItemColor).eq(slideNum).addClass(sACTIVE).siblings().removeClass(sACTIVE);
	                            popupAction.sliderHtml(slideNum);
	                            popupAction.video.play(slideNum);
	                        } else {
	                            popupAction.video.stop();
	                        }
	                    },
	                    activeTab: function (tabNum, slideNum) {
	                        $(popupAction.selector.tabItem).removeClass(sACTIVE).eq(tabNum).addClass(sACTIVE);
	                        $(popupAction.selector.tabCont).removeClass(sACTIVE).eq(tabNum).addClass(sACTIVE);
	                        if (slideNum === undefined) {
	                            slideNum = 0;
	                        }
	                        popupAction.initSubTab(slideNum);
	                    }
	                }
	                popupAction.open();
	            }
	        }

	        popup.colorTooltip()


	    }();

	    $('a[data-scroll-btn*=template]').click(function (e) {
	        e.preventDefault();

	        $(this).parents('ul').find('li').removeClass('on');
	        $(this).parent('li').addClass('on');

	        var dataId = $(this).attr('data-scroll-btn');
	        var scmove = $('div[data-scroll-bx="' + dataId + '"]').offset().top - 130;
	        $('html, body').animate({
	            scrollTop: scmove
	        }, 800);
	    });

	     /*
	        네비
	     */
	    function JdSticky(selector, options) {
	        this.$elem = document.querySelector(selector);
	        this._options = null;
	        this.isStickyIn = false;
	        this.isStickyOut = false;
	        this.isStickyMoving = false;
	        this.initOptions(options || {});
	        this._polyfill();
	        this.event();
	    }

	    JdSticky.prototype._polyfill = function () {
	        if (window.NodeList && !NodeList.prototype.forEach) {
	            NodeList.prototype.forEach = function (callback, thisArg) {
	                var i = 0;
	                thisArg = thisArg || window;
	                for (; i < this.length; i++) {
	                    callback.call(thisArg, this[i], i, this);
	                }
	            };
	        }
	    };
	    JdSticky.prototype.initOptions = function (options) {
	        this._options = {
	            $delegate: options.$delegate ? document.querySelector(options.$delegate) : document.querySelector('.layout'),
	            $parent: options.$parent ? document.querySelector(options.$parent) : this.$elem.parentNode,
	            $child: options.$child ? document.querySelector(options.$child) : this.$elem.firstElementChild,
	            $list: options.$list || '.nav-list',
	            top: typeof options.top === 'function' ? options.top : function () {
	                return (options.top || 0);
	            },
	            secUse: options.secUse || false,
	            setClass: options.setClass || 'on',
	            btnClass: options.btnClass || 'btn-move-sec',
	            duration: options.duration || 500,
	            easing: options.easing || 'ease',
	            callback: options.callback || function (isSticky) { }
	        };
	    };
	    JdSticky.prototype.init = function () {
	        this.$elem.style.position = '';
	        this.$elem.style.top = '';
	        this._options.$parent.style.position = '';
	        this._options.$child.style.position = '';
	        this._options.$child.style.top = '';
	        this._options.$child.style.width = '';
	        this.$elem = null;
	        this._options = null;
	        this.isStickyIn = null;
	        this.isStickyOut = null;
	        this.isStickyMoving = null;
	        this.remove(document.querySelector(this._options.$list + ' > li.' + this._options.setClass));
	    };
	    JdSticky.prototype.cssExtract = function (elem) {
	        var computed = window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.style,
	            duration = computed.transitionDuration || computed.webkitTransitionDuration;
	        return typeof duration === 'string' && duration.length ? parseFloat(duration) : duration;
	    };
	    JdSticky.prototype.add = function (selector) {
	        var check = new RegExp('(\\s|^)' + this._options.setClass + '(\\s|$)');
	        if (!selector.className.match(check)) {
	            selector.className += ' ' + this._options.setClass;
	        }
	    };
	    JdSticky.prototype.remove = function (selector) {
	        if (selector.className && selector.className.indexOf(this._options.setClass) !== -1) {
	            var check = new RegExp('(\\s|^)' + this._options.setClass + '(\\s|$)');
	            selector.className = selector.className.replace(check, ' ').trim();
	        }
	    };
	    JdSticky.prototype.update = function (isResize) {
	        if (isResize) {
	            this.resizeSet();
	        }
	        this.move();
	        if (this._options.secUse && !this.isStickyMoving) {
	            this.on();
	        }
	    };
	    JdSticky.prototype.resizeSet = function () {
	        var _top = this._options.top();
	        if (this.isStickyIn && !this.isStickyOut && _top) {
	            this._options.$child.style.top = _top + 'px';
	        } else if (this.isStickyOut && _top) {
	            this._options.$child.style.top = this._options.$parent.clientHeight - this.$elem.clientHeight - _top + 'px';
	        }
	    };
	    JdSticky.prototype.move = function () {
	        var st = window.pageYOffset,
	            topSt = window.pageYOffset + (this.$elem.getBoundingClientRect().top || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0) - this._options.top(),
	            bottomSt = topSt + this._options.$parent.clientHeight - this.$elem.clientHeight - this._options.top(),
	            childStyleSet = function (positionVal, topVal, widthVal) {
	                this._options.$child.style.position = positionVal;
	                this._options.$child.style.top = topVal;
	                this._options.$child.style.width = widthVal;
	            };

	        // 상단 진입/이탈
	        if (st >= topSt && !this.isStickyIn) {
	            this.isStickyIn = true;
	            childStyleSet.call(this, 'fixed', this._options.top() + 'px', '100%');
	            this._options.callback(this.isStickyIn);
	        } else if (st < topSt && this.isStickyIn) {
	            this.isStickyIn = false;
	            childStyleSet.call(this, '', '', '');
	            this._options.callback(this.isStickyIn);
	        }

	        // 하단 이탈/진입
	        if (st >= bottomSt && !this.isStickyOut) {
	            this.isStickyOut = true;
	            this._options.$parent.style.position = 'relative';
	            childStyleSet.call(this, 'absolute', (this._options.$parent.clientHeight - this.$elem.clientHeight - this._options.top()) + 'px', '100%');
	            this._options.callback(!this.isStickyOut);
	        } else if (st < bottomSt && this.isStickyOut) {
	            this.isStickyOut = false;
	            this._options.$parent.style.position = '';
	            childStyleSet.call(this, 'fixed', this._options.top() + 'px', '100%');
	            this._options.callback(!this.isStickyOut);
	        }
	    };
	    JdSticky.prototype.on = function () {
	        var self = this,
	            $li = document.querySelectorAll(this._options.$list + ' > li'),
	            len = $li.length,
	            st = window.pageYOffset,
	            tops = [],
	            i = 0,
	            j = 0;

	        for (; i < len; i++) {
	            var id = document.getElementsByClassName(this._options.btnClass)[i].hash.substr(1);
	            tops[i] = document.getElementById(id).offsetTop;
	        }
	        if (len > 0 && st >= tops[len - 1]) {
	            $li.forEach(function (a) {
	                self.remove(a);
	            });
	            this.add($li[tops.length - 1]);
	        } else {
	            while (j < len) {
	                if (st < tops[j]) {
	                    $li.forEach(function (a) {
	                        self.remove(a);
	                    });
	                    this.add($li[Math.max(0, j - 1)]);
	                    j = len;
	                } else {
	                    j++;
	                }
	            }
	        }
	    };
	    JdSticky.prototype.click = function () {
	        var self = this,
	            smoothScroll = function (value) {
	                var st = window.pageYOffset,
	                    delegateEl = self._options.$delegate,
	                    transitionendFn = function () {
	                        if (self.cssExtract(delegateEl)) {
	                            ['transitionend', 'webkitTransitionend'].forEach(function (elem) {
	                                delegateEl.removeEventListener(elem, transitionendFn);
	                            });
	                        }
	                        document.body.style.height = '';
	                        delegateEl.style.position = '';
	                        delegateEl.style.top = '';
	                        delegateEl.style.width = '';
	                        delegateEl.style.webkitTransition = '';
	                        delegateEl.style.transition = '';
	                        window.scrollTo(0, value);
	                        self.isStickyMoving = false;
	                    };

	                if (window.requestAnimationFrame && self.cssExtract(delegateEl) !== undefined) {
	                    document.body.style.height = delegateEl.offsetHeight + 'px';
	                    delegateEl.style.position = 'fixed';
	                    delegateEl.style.top = '-' + st + 'px';
	                    delegateEl.style.width = '100%';

	                    setTimeout(function () {
	                        delegateEl.style.webkitTransition = 'top ' + self._options.duration + 'ms ' + self._options.easing;
	                        delegateEl.style.transition = 'top ' + self._options.duration + 'ms ' + self._options.easing;
	                        delegateEl.style.top = '-' + value + 'px';
	                        (function loop() {
	                            var start = 0,
	                                last = 0,
	                                timeDifference = 0,
	                                setLoop = null;

	                            function step(stamp) {
	                                if (!start) start = stamp;
	                                if (!last) last = stamp;
	                                timeDifference = stamp - last;
	                                if (!self.isStickyMoving) {
	                                    window.cancelAnimationFrame(setLoop);
	                                    return false;
	                                }
	                                if (timeDifference > 16) {
	                                    self.update.call(self);
	                                    window.scrollTo(0, -delegateEl.getBoundingClientRect().top);
	                                    last = stamp;
	                                }
	                                setLoop = window.requestAnimationFrame(step);
	                            }
	                            setLoop = window.requestAnimationFrame(step);
	                        })();
	                        ['transitionend', 'webkitTransitionend'].forEach(function (elem) {
	                            delegateEl.addEventListener(elem, transitionendFn);
	                        });
	                    });
	                } else {
	                    transitionendFn();
	                }
	            };

	        this.$elem.addEventListener('click', function (e) {
	            if (e.target.className && e.target.className.indexOf(self._options.btnClass) !== -1) {
	                var $thisLi = e.target.parentNode,
	                    setTop = Math.ceil(window.pageYOffset + document.getElementById(e.target.hash.substr(1)).getBoundingClientRect().top - (document.documentElement.clientTop || 0));

	                if (setTop !== window.pageYOffset) {
	                    self.isStickyMoving = true;
	                    $thisLi.parentNode.childNodes.forEach(function (a) {
	                        self.remove(a);
	                    });
	                    self.add($thisLi);
	                    smoothScroll(setTop);
	                }
	                e.preventDefault();
	                e.stopPropagation();
	            }
	        });
	    };
	    JdSticky.prototype.event = function () {
	        if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
	            this.update();
	        } else if (window.addEventListener) {
	            document.addEventListener('DOMContentLoaded', this.update.bind(this));
	        }
	        window.addEventListener('resize', this.update.bind(this, true));
	        window.addEventListener('scroll', this.update.bind(this));
	        if (this._options.secUse) {
	            this.click();
	        }
	    };

	    var _is = function () {
	        var isMobile = /LG|SAMSUNG|Samsung|iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i.test(navigator.userAgent);
	        var isAndroid = /Android/i.test(navigator.userAgent);
	        var isFF = window.navigator.userAgent.toLocaleLowerCase().match('firefox');
	        var isMac = window.navigator.platform.toLocaleLowerCase().match('mac');
	        var isIOS = !/Android/i.test(navigator.userAgent) && /iPhone|iPad|iPod/i.test(navigator.userAgent);
	        var isIE = window.navigator.appName === 'Netscape' && window.navigator.userAgent.toLowerCase().indexOf('trident') !== -1 || window.navigator.userAgent.toLowerCase().indexOf("msie") !== -1;

	        var isIEVer = function () {
	            var word;
	            var version = "N/A";
	            var agent = navigator.userAgent.toLowerCase();
	            var name = navigator.appName; // IE old version ( IE 10 or Lower )

	            if (name == 'Microsoft Internet Explorer') {
	                word = "msie ";
	            } else {
	                if (agent.search("trident") > -1) {
	                    word = "trident/.*rv:";
	                } else if (agent.search("edge/") > -1) {
	                    word = "edge/";
	                }
	            }

	            var reg = new RegExp(word + '([0-9]{1,})(\\.{0,}[0-9]{0,1})');

	            if (reg.exec(agent) != null) {
	                version = RegExp.$1 + RegExp.$2;
	            }

	            return version;
	        }();

	        return {
	            mobile: isMobile,
	            android: isAndroid,
	            ff: isFF,
	            mac: isMac,
	            ios: isIOS,
	            ie: isIE,
	            ieVer: isIEVer
	        };
	    }(); // 스크롤바 너비 추출

	    var _scrollBarWid = function () {
	        var inner = document.createElement('p');
	        var outer = document.createElement('div');
	        var w1;
	        var w2;
	        inner.style.cssText = 'width:100%;height:200px;';
	        outer.style.cssText = 'overflow:hidden;visibility:hidden;position:absolute;top:0;left:0;width:200px;height:150px;';
	        outer.appendChild(inner);
	        document.body.appendChild(outer);
	        w1 = inner.offsetWidth;
	        outer.style.overflow = 'scroll';
	        w2 = inner.offsetWidth;

	        if (w1 === w2) {
	            w2 = outer.clientWidth;
	        }

	        document.body.removeChild(outer);
	        return w1 - w2;
	    }(); // 윈도우 너비 & 높이

	    var innerWidthFn = function innerWidthFn() {
	        return window.innerWidth || document.documentElement.clientWidth + _scrollBarWid || document.body.clientWidth + _scrollBarWid;
	    }; // 리사이즈 이벤트 생성

	    var resizeFn = function resizeFn(func, param) {
	        var funcName = func.toString().split(' ')[1].split('(')[0];

	        var exec = function exec() {
	            clearTimeout(window[funcName + 'Loop']);
	            func(param);
	            window[funcName + 'Loop'] = setTimeout(func, 100, param);
	        };

	        window.addEventListener('resize', exec);
	    }; // 디바이스 체크

	    var isDeviceFn = function isDeviceFn(viewSize) {
	        var winW = null;

	        var init = function init() {
	            var currentW = innerWidthFn();

	            if (winW === null || winW !== currentW) {
	                if (winW === null || winW > viewSize ^ currentW > viewSize) {
	                    if (currentW > viewSize) {
	                        $('body').addClass('bespoke-pc').removeClass('bespoke-mo');
	                    } else {
	                        $('body').addClass('bespoke-mo').removeClass('bespoke-pc');
	                    }
	                }

	                winW = currentW;
	            }
	        };

	        init();
	        resizeFn(init);
	    };

	    var navSwipe = function navSwipe() {
	        var swiper = null;
	        var winW = innerWidthFn();
	        var $promoGnb = $('.promo-gnb');

	        var init = function () {
	            if ($('.promo-tab-2dep').eq(0).find('li.on').length) {
	                var idx = $('.promo-tab-2dep').eq(0).find('li.on').index();
	                $('.promo-tab-2dep-mobile').eq(0).find('li').eq(idx).addClass('on');
	            } else if ($('.promo-tab-2dep').eq(1).find('li.on').length) {
	                var _idx = $('.promo-tab-2dep').eq(1).find('li.on').index();

	                $('.promo-tab-2dep-mobile').eq(1).find('li').eq(_idx).addClass('on');
	            }
	        }();

	        var addSwiper = function addSwiper() {
	            var $nav = $('.promo-nav .promo-tab-slide');
	            var $active = $nav.find('.promo-tab-1dep-li.on');
	            var activeIndex = $active.index();
	            var hoverIndex = '';
	            swiper = new Swiper('.promo-tab-slide', {
	                wrapperClass: 'promo-tab-1dep',
	                slideClass: 'promo-tab-1dep-li',
	                slidesPerView: 'auto',
	                watchSlidesVisibility: true,
	                preventClicks: false,
	                preventClicksPropagation: false,
	                freeMode: true,
	                grabCursor: true,
	                navigation: {
	                    nextEl: '.promo-tab-common-nav-next',
	                    prevEl: '.promo-tab-common-nav-prev'
	                },
	                on: {
	                    // 20190925 추가 : 메뉴위치 수정 s
	                    init: function init() {
	                        this.slideTo(activeIndex, 300);
	                    },
	                    resize: function resize() {
	                        $(".promo-tab-2dep-mobile").is(":visible") ? this.slideTo(hoverIndex, 300) : this.slideTo(activeIndex, 300);
	                    },
	                    touchMove: function touchMove() {
	                        if ($('.promo-tab-1dep-li.hover').length) {
	                            $('.promo-tab-1dep-li.hover').removeClass('hover');
	                            $('.promo-tab-2dep-mobile').hide();
	                        }
	                    },
	                    click: function click() {
	                        var _$ = window.$;
	                        //console.log(this);

	                        if (_$(this.clickedSlide).find('.promo-tab-2dep').length) {
	                            var idx = _$(this.clickedSlide).find('.promo-tab-2dep').index('.promo-tab-1dep .promo-tab-2dep');

	                            //console.log(idx);
	                            var $target = $('.promo-tab-2dep-mobile').eq(idx);

	                            if ($target.is(':visible')) {
	                                $(this.clickedSlide).removeClass('hover');
	                                $target.slideUp();
	                            } else {
	                                if ($target.siblings('.promo-tab-2dep-mobile').is(':visible')) {
	                                    $target.siblings('.promo-tab-2dep-mobile').hide();
	                                }

	                                this.slideTo(this.clickedIndex, 300, false);
	                                $(this.clickedSlide).addClass('hover');
	                                setTimeout(function () {
	                                    return $target.slideDown();
	                                }, 230); // this.on('reachEnd', function() { $('.promo-tab-2dep').slideDown();});
	                            }
	                        }
	                    }
	                },
	                freeModeMomentumRatio: .65,
	                freeModeMomentumVelocityRatio: 1,
	                freeModeMomentumBounce: true
	            });
	            $(document).off('click.tabclose').on('click.tabclose', function (e) {
	                if ($(e.target).closest('.promo-tab-1dep').length == 0) {
	                    $('.promo-tab-1dep-click').parent().removeClass('hover');
	                    $('.promo-tab-2dep').slideUp();
	                }
	            });
	            $('.promo-tab-1dep-li').on('keydown', '> a', function (e) {
	                if (e.keyCode === 13) {
	                    if (!$('.bespoke-pc').length) {
	                        var $this = $(this);

	                        if ($(this).siblings('.promo-tab-2dep').length) {
	                            //console.log($(this).siblings('.promo-tab-2dep').length);
	                            var idx = $(this).siblings('.promo-tab-2dep').index('.promo-tab-1dep .promo-tab-2dep');
	                            var $target = $('.promo-tab-2dep-mobile').eq(idx);

	                            if ($target.is(':visible')) {
	                                $(this).closest('li').removeClass('hover');
	                                $target.slideUp();
	                            } else {
	                                if ($target.siblings('.promo-tab-2dep-mobile').is(':visible')) {
	                                    $target.siblings('.promo-tab-2dep-mobile').hide();
	                                }

	                                //console.log($this.closest('li').index());
	                                swiper.slideTo($this.closest('li').index(), 300, false);
	                                $(this).closest('li').addClass('hover');
	                                setTimeout(function () {
	                                    return $target.slideDown();
	                                }, 230);
	                            }
	                        }
	                    }
	                } else if (e.keyCode === 9 && !e.shiftKey) {
	                    if (!$('.bespoke-pc').length) {
	                        if ($(this).closest('li').hasClass('hover')) {
	                            $('.promo-tab-2dep-mobile').filter(':visible').find('a').eq(0).focus();
	                            return false;
	                        }
	                    }
	                } else if (e.keyCode === 9 && e.shiftKey) {
	                    if (!$('.bespoke-pc').length) {
	                        if ($(this).closest('li').hasClass('hover')) {
	                            $('.promo-tab-2dep-mobile').filter(':visible').find('a').eq(-1).focus();
	                            return false;
	                        }
	                    }
	                }
	            });
	            $('.promo-tab-1dep-li').on('keyup', '> a', function () {
	                if (!$('.bespoke-pc').length) {
	                    var idx = $(this).closest('li').index();
	                    swiper.slideTo(idx, 300, false);
	                }
	            });
	            $('.promo-tab-2dep-mobile').on('keydown', 'a', function (e) {
	                if (e.keyCode === 9 && e.shiftKey) {
	                    if ($(this).closest('li').index() === 0) {
	                        //console.log($(this).closest('li').index());
	                        $('.promo-tab-1dep-li.hover').find('a').focus();
	                        return false;
	                    }
	                } else if (e.keyCode === 9 && !e.shiftKey) {
	                    if ($(this).closest('li').index() === $(this).closest('.promo-tab-2dep-mobile').find('li').length - 1) {
	                        //console.log($(this).closest('li').index());
	                        $('.promo-tab-1dep-li.hover').find('a').focus();
	                        return false;
	                    }
	                }
	            });
	        };

	        if (!(_is.ie && _is.ieVer <= 9)) {
	            // IE9 이하를 제외한 모든 브라우저
	            if (winW > 768) {
	                if (swiper) {
	                    swiper.destroy(true);
	                }
	            } else {
	                addSwiper(); // moveToActive();
	            }

	            resizeFn(function () {
	                var currentW = innerWidthFn();

	                if (winW !== currentW) {
	                    if (winW > 768 ^ currentW > 768) {
	                        if (currentW > 768) {
	                            if (swiper) {
	                                //swiper.destroy(true);
	                            }
	                        } else {
	                            addSwiper();
	                        }

	                        $('.promo-tab-1dep-li').removeClass('hover');
	                        $('.promo-tab-2dep').hide();
	                    }

	                    if (currentW <= 768) { // moveToActive();
	                    }

	                    winW = currentW;
	                }
	            });
	        } else {
	            // IE9 이하 브라우저
	            var calcW = function calcW() {
	                var totalW = 0;
	                $promoGnb.find('.slide-area').find('li').each(function () {
	                    totalW += $(this).width();
	                });
	                return totalW;
	            };

	            if (winW <= 768) {
	                $promoGnb.find('.promo-slide').css('overflowX', 'scroll').scrollLeft($promoGnb.find('.slide-area li.on')[0].offsetLeft).find('.slide-area').css('width', calcW() + 'px');
	            }

	            resizeFn(function () {
	                var currentW = innerWidthFn();

	                if (winW !== currentW) {
	                    if (winW > 768 ^ currentW > 768) {
	                        if (currentW > 768) {
	                            $promoGnb.find('.promo-slide').css('overflowX', '').scrollLeft(0).find('.slide-area').css('width', '');
	                        }
	                    }

	                    if (currentW <= 768) {
	                        $promoGnb.find('.promo-slide').css('overflowX', 'scroll').scrollLeft($promoGnb.find('.slide-area li.on')[0].offsetLeft).find('.slide-area').css('width', calcW() + 'px');
	                    }

	                    winW = currentW;
	                }
	            });
	        }
	    };

	    var depth2Click = function depth2Click() {
	        var $promoTab1DepLi = $('.promo-tab-1dep-li');
	        $promoTab1DepLi.on('click', '> a', function () {
	            if ($(this).closest('li').hasClass('sec_disable') || $(this).siblings('.promo-tab-2dep').length) {
	                return false;
	            }
	        });
	        $promoTab1DepLi.on('keydown', '> a', function (e) {
	            if (e.keyCode === 9 && e.shiftKey) {
	                if ($('.bespoke-pc').length) {
	                    var idx = $(this).closest('.promo-tab-1dep-li').index();

	                    if (idx === 0) {
	                        if ($(this).siblings('.promo-tab-2dep').length) {
	                            $promoTab1DepLi.eq(0).find('.promo-tab-2dep').slideUp(0);
	                        }

	                        $promoTab1DepLi.eq(0).removeClass('hover');
	                    }
	                }
	            }
	        }).on('keyup', '>a', function (e) {
	            if (e.keyCode === 9) {
	                if ($('.bespoke-pc').length) {
	                    var idx = $(this).closest('.promo-tab-1dep-li').index();
	                    var target = $promoTab1DepLi.eq(idx);

	                    if ($(this).siblings('.promo-tab-2dep').length) {
	                        target.addClass('hover');
	                        target.find('.promo-tab-2dep').slideDown(150);
	                    } else {
	                        $promoTab1DepLi.filter('.hover').find('.promo-tab-2dep').slideUp(0);
	                        $promoTab1DepLi.filter('.hover').removeClass('hover');
	                    }
	                }
	            }
	        }).on('mouseenter', function () {
	            if ($('.bespoke-pc').length) {
	                if ($(this).find('.promo-tab-2dep').length) {
	                    $(this).find('.promo-tab-2dep').slideDown(150);
	                }

	                $(this).not('.sec_disable').addClass('hover');
	            }
	        }).on('mouseleave', function () {
	            if ($('.bespoke-pc').length) {
	                var idx = $(this).index();

	                if ($(this).find('.promo-tab-2dep').length) {
	                    $(this).find('.promo-tab-2dep').slideUp(0);
	                }

	                $(this).not('.sec_disable').removeClass('hover');
	            }
	        });
	    };

	    var sticky = function sticky() {
	        if ($('.promo-nav')[0]) {
	            var stickyDepth1 = new JdSticky('.promo-nav', {
	                $parent: '#content',
	                callback: function callback(isSticky) { }
	            });
	        }
	    };

	    isDeviceFn(768);
	    navSwipe();
	    sticky();
	    depth2Click();

	})(jQuery)


	// 리사이즈 이벤트 생성
	var resizeFn = function resizeFn(func, param) {
	    var ran = Math.ceil(Math.random() * 1000);

	    var exec = function exec() {
	        clearTimeout(window['Loop' + ran]);
	        func(param);
	        window['Loop' + ran] = setTimeout(func, 100, param);
	    };

	    window.addEventListener('resize', exec);
	};

	// 이미지 웹/모바일 치환
	var responsiveImgFn = function responsiveImgFn(viewSize, callback) {
	    if (viewSize === void 0) {
	        viewSize = 768;
	    }

	    var _selector = '.js-img-src';
	    var _viewSize = viewSize;
	    var winW = null;

	    var init = function init() {
	        var currentW = window.innerWidth;

	        if (winW === null || winW !== currentW) {
	            if (winW === null || winW > _viewSize ^ currentW > _viewSize) {
	                if (currentW > _viewSize) {
	                    translate('pc');
	                } else {
	                    translate('mobile');
	                }
	            }

	            winW = currentW;
	        }
	    };

	    var translate = function translate(device) {
	        var $selector = document.querySelectorAll ? document.querySelectorAll(_selector) : $(_selector);
	        var i = 0;

	        for (; i < $selector.length; i++) {
	            $selector[i].onload = function () {
	                this.className += " " + _selector.split('.')[1] + "-" + device + "__loaded";
	                //callback(this);
	            };

	            $selector[i].onerror = function () {
	                //console.log(this);
	                //console.log('number ' + (i + 1) + ' is error');
	                return this;
	            };

	            $selector[i].src = $selector[i].getAttribute('data-src-' + device);
	        }
	    };

	    init();
	    resizeFn(init);
	};

	// 윈도우 너비 & 높이
	var innerWidthFn = function innerWidthFn() {
	    return window.innerWidth || document.documentElement.clientWidth + _scrollBarWid || document.body.clientWidth + _scrollBarWid;
	};

	//버튼 아코디언
	var btnToggle = function(){
	    var _btn = $('[data-role="btnToggle"]'),
	        _cont = $('[data-role="toggleCont"]'),
	        _btn01 = $('[data-role="btnToggle01"]'),
	        _cont01 = $('[data-role="toggleCont01"]');

	    _btn.each(function(){
	        _cont.hide();
	        var _contArea = $(this).attr('href');
	        $(this).click(function(e){
	            $(this).toggleClass('on')

	            if($(this).hasClass('on')){
	                $(_contArea).stop().slideDown(300)
	            }else{
	                $(_contArea).stop().slideUp(300)
	            }
	            e.preventDefault();
	        })
	    })
	    _btn01.each(function(){
	        _cont01.hide();
	        var _contArea01 = $(this).attr('href');
	        $(this).click(function(e){
	            $(this).toggleClass('on')

	            if($(this).hasClass('on')){
	                $(_contArea01).stop().slideDown(300)
	            }else{
	                $(_contArea01).stop().slideUp(300)
	            }
	            e.preventDefault();
	        })
	    })
	}

	//유튜브 영상 재생
	function youtubeIFrameControl(selector, value) {
	    var funcType = {
	        "play": "playVideo",
	        "pause": "pauseVideo",
	        "stop": "stopVideo"
	    };
	    selector.contentWindow.postMessage('{"event":"command","func":"' + funcType[value] + '","args":""}', '*');
	}

	// 200828 수정사항 start
	var videoPlay = function(){
	    var id;
	    var _pop = $('[data-role="videoPopup"]');

	    $('.dimm').hide();
	    $(document).on('click', '[data-role="btn-play"]', function(e) {
	        id = $(this).data('youtube-video');
	        var _video1Top = $('.video_img1').offset().top;
	        if ($('.sec_video.on').length) {
	            $('.sec_video.on').each(function(){
	                var id = $(this).find('iframe')[0].id;
	                youtubeIFrameControl(document.getElementById(id), 'stop');
	                $(this).removeClass('on');

	            });
	        }
	        $('#'+ id).parent('.sec_video').addClass('on');

	        $('#'+ id).attr('src','https://www.youtube.com/embed/9qMisLZq514?rel=0&autoplay=1&showinfo=0&enablejsapi=1')

	        _pop.show();
	        setTimeout(function(){
	            youtubeIFrameControl(document.getElementById(id), 'play');
	        }, 100);
	        $('.dimm').show();

	        $('html,body').stop().animate({scrollTop:$(this).parents('section').find('.video_img1').offset().top - $('.btn_close').outerHeight() - 30},500);
	        $('.video_pop_wrap').css('top',_video1Top)

	        e.preventDefault();
	        return false;
	    }).on('click', '.video_pop_wrap .btn_close', function(e) {
	        youtubeIFrameControl(document.getElementById(id), 'stop');
	        $('#'+ id).parent('.sec_video').removeClass('on');
	        $('#'+ id).attr('src','')
	        $('.dimm').hide();
	        _pop.hide();
	        e.preventDefault()
	        return false;

	    })
	};
	// 200828 수정사항 end

	var youtube = function () {
	    $('.video-layer').hide();
	    $(document).on('click', '[data-role="btn-play"]', function () {
	        var id = $(this).data('youtube-video');
	        if ($('.video-layer.on').length) {
	            $('.video-layer.on').each(function () {
	                var id = $(this).find('iframe')[0].id;
	                youtubeIFrameControl(document.getElementById(id), 'stop');
	                $(this).removeClass('on');
	            });
	        }
	        $('#' + id).parent('.video-layer').addClass('on');
	        $('.video-layer').show();
	        setTimeout(function () {
	            youtubeIFrameControl(document.getElementById(id), 'play');
	        }, 100);
	        return false;
	    }).on('click', '.video-close', function () {
	        var id = $(this).siblings('iframe')[0].id;
	        youtubeIFrameControl(document.getElementById(id), 'stop');
	        $('#' + id).parent('.video-layer').removeClass('on');
	        return false;
	    });
	};

	//구매하기
	function buyCart() {
	    function cartCall(url) {
	        $.ajax({
	            url: url,
	            type: "GET",
	            dataType: "jsonp",
	            jsonp: "callback",
	            success: function (result) {
	                /*if (result.resultCode === "0000") {
	                    location.href = "https://store.samsung.com" + result.url;
	                } else {
	                    alert(result.resultMessage);
	                }*/
	            	location.href = "/sec/cart/";
	            },
	            error: function (jqXHR, textStatus, errorThrown) {
	                alert(errorThrown + "(" + textStatus + ")");
	            }
	        });
	    };

	    $('[data-role="btnBuy"]').click(function (e) {
	        e.preventDefault();
	        var url = $(this).data("sale-url");
	        if (url) {
	            cartCall(url);
	        }
	    });
	}

	//레이어팝업
	var layerPop = function () {
	    var _openBtn = $('[data-role="btnLyShow"]');
	    _openBtn.each(function () {
	        var _contArea = $(this).attr('href'),
	            _this = $(_contArea);
	        _this.hide();

	        $(this).click(function (e) {
	            _this.show();
	            layerPop('open', _this);
	            e.preventDefault();
	        })

	        _this.find('[data-role="btnLyClose"]').click(function (e) {
	            e.preventDefault();
	            _this.hide();
	            layerPop('close', _this);
	        });
	        function layerPop(n, target, type) {
	            if (n == "open") {
	                _this.show();
	            } else {
	                _this.hide();
	            }
	        }
	    })
	}

	//윈도우팝업  200706-혜택/홍보영역
	/* 20201015 작업*/
	var winPop = function(){
	    var _target = $('[data-role="btnWinPop"]');
	    _target.on("click", function(e){
	        var that = this;

	        ss.Auth.checkSignIn(function (isLogedIn) {
	            if (isLogedIn) {
	                window.open(that.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=800,height=800");
	            } else {
	                alert("로그인 후 참여 가능합니다.");
	                $(".loginBtn").trigger("click");
	            }
	        });
	        e.preventDefault();
	    });

	    if( !$('#tooltipArea_Event3791').length ) {
	        var $tooltipTiles = $('<tiles:putattribute name="tooltip" />');
	        var $tooltip = $('<div></div>');
	    
	        $tooltip.attr({"id" : "tooltipArea_Event3791"});
	        $tooltipTiles.append($tooltip);
	        $('body').append($tooltipTiles);
	    }
	    if( !$('#popupArea_Event3791').length ) {
	        var $popupTiles = $('<tiles:putattribute name="popup" />');
	        var $popup = $('<div></div>');
	        $popup.attr({"id" : "popupArea_Event3791"});
	        $popupTiles.append($popup);
	        $('body').append($popupTiles);
	    }
	    if( !$('#openPop').length ) {
	        var $input = $('<input type="hidden" />');
	        $input.attr({
	            'id' : 'openPop',
	            'data-st-path' : '/sec/'
	        });
	        $('body').append($input);
	    }
	    
	    $('[data-event-popup]').attr({
	        'data-popup-target' : 'popupExhibitionEnter',
	    }).on('click', function(e){
	        e.preventDefault();
	        if( typeof fnCallPop2 != "undefined" && typeof fnCallPop2 == "function") {
	            var popId = $(this).data('event-popup');
	            fnCallPop2(popId);
	        }
	    });
	}
	/* //20201015 작업*/

	/* 20200923 추가 */
	//윈도우팝업
	var winPop02 = function(){
	    var _target = $('[data-role="btnWinPop02"]');
	    _target.on("click", function(e){
	        var that = this;
	        window.open(that.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=700,height=800");
	        e.preventDefault();
	    });
	}
	/* 20200923 추가 */

	//섹션 포커스 이동
	var anchorMove = function () {
	    $('[data-role="moveBtn"]').click(function (e) {
	        //2020-04-23 수정 (s)
	        var id = $(this).attr('href');
	        var _navH = $('.promo-nav-outer').outerHeight();

	        $('html,body').stop().animate({ scrollTop: $(id).offset().top }, 500);
	        if (window.innerWidth < 768) {
	            $('html,body').stop().animate({ scrollTop: $(id).offset().top - _navH }, 500);
	        }
	        //2020-04-23 수정 (e)

	        e.preventDefault();
	    })
	}

	responsiveImgFn();
	youtube();
	buyCart();
	layerPop();
	anchorMove();


	//장바구니
	var bestSlideBuy = function bestSlideBuy(target) {
	    var t2 = target;
	    $(document).on("click", t2, function (e) {
	        e.preventDefault();
	        var t = $(this),
	            i = t.data("model-cate"),
	            s = "",
	            a = "",
	            n = "",
	            idx = 0,
	            buyParam = "",
	            buyUrl = "";
	        "fixed" == i ? function () {
	            var idx = t.closest('.slide_item').attr('data-slick-index') ? t.closest('.slide_item').data('slick-index') : t.closest('.slide_item').index(),
	                e = $('[data-role="ly-popup"]').eq(idx);
	            link(e);
	        }() : function () {
	            var e = t.parents('[data-role="ly-popup"]');
	            link(e);
	        }();

	        var ids = '';
	        function link(e) {
	            var i = e.data("pop-prod");

	            if (null == i) {
	                var r = t.parents(".btns_box").find('[data-role="open-layer"]').data("pop-prod");
	                i = r, e = $('[data-pop-prod="' + r + '"]');
	            }

	            s = i.split("_")[0], e.find(".pannel-code").each(function () {
	                a += "&productCode=" + $(this).text() + ":::1";
	            }), n = "https://store.samsung.com/sec/ng/p4v1/buyNowTogether?productCode=" + s + ":::1" + a;

	            buyParam = s + ":::1" + a;
	            buyParam = buyParam.replace(/productCode=/g, '');
	    		buyParam = buyParam.replace(/:::1/g, '');
	    		//console.log(data);
	    		buyParam = buyParam.replace(/&/g, '^');
	    		buyUrl = "/sec/xhr/order/insertCart?nowBuyYn=Y&bspkGrpKeys=" + buyParam;
	    		
	        }
	        
	        var option1 = {
					url: "/sec/xhr/bespoke/goodsIdsAja                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    