                ;(function(win,doc,callback){'use strict';callback=callback||function(){};function detach(){if(doc.addEventListener){doc.removeEventListener('DOMContentLoaded',completed);}else{doc.detachEvent('onreadystatechange',completed);}}function completed(){if(doc.addEventListener||event.type==='load'||doc.readyState==='complete'){detach();callback(window,window.jQuery);}}function init(){if (doc.addEventListener){doc.addEventListener('DOMContentLoaded',completed);}else{doc.attachEvent('onreadystatechange',completed);}}init();})(window,document,function(win,$){
                    // storeCd
// 키엔호 파라미터 있을 경우 해당 위치로 이동
// 200713- 셰프 팝업
// 패키지 코드 전송
// 200714 - 오토필 정수기
// 200714 - 프레임 컬러
// 200814-특정커뮤니티 사용자는 신규추가 URL
// 200814-모델코드
// 2021 김치 플러스 4도어 추가
// 'year': '2020' 2021 김치 4도어 추가

                    !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r||r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter((function(e,t){return t>0})),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},filter:function(e){for(var t=[],s=0;s<this.length;s+=1)e.call(this[s],s,this[s])&&t.push(this[s]);return new i(t)},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a,r=this;for(i=0;i<e.length;i+=1){var n=s(e[i]);for(a=0;a<n.length;a+=1)r[r.length]=n[a],r.length+=1}return r},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach((function(e){s.fn[e]=s.fn[e]||r[e]}));var n={deleteProps:function(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter((function(e){return""!==e}))).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var r=Object.keys(Object(a)),o=0,l=r.length;o<l;o+=1){var d=r[o],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(n.isObject(i[d])&&n.isObject(a[d])?n.extend(i[d],a[d]):!n.isObject(i[d])&&n.isObject(a[d])?(i[d]={},n.extend(i[d],a[d])):i[d]=a[d])}}return i}},o={touch:t.Modernizr&&!0===t.Modernizr.touch||!!(t.navigator.maxTouchPoints>0||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!!t.PointerEvent&&"maxTouchPoints"in t.navigator&&t.navigator.maxTouchPoints>0,observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t},l=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach((function(e){t.on(e,t.params.on[e])}))},d={components:{configurable:!0}};l.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},l.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];s.off(e,a),a.f7proxy&&delete a.f7proxy,t.apply(s,i)}return a.f7proxy=t,s.on(e,a,i)},l.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},l.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;if(!r.eventsListeners)return r;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r);var n=Array.isArray(i)?i:i.split(" ");return n.forEach((function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach((function(e){t.push(e)})),t.forEach((function(e){e.apply(a,s)}))}})),r},l.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&n.extend(e,s.params)}))},l.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach((function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i})),s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))},d.components.set=function(e){this.use&&this.use(e)},l.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+n.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach((function(t){s.prototype[t]=e.proto[t]})),e.static&&Object.keys(e.static).forEach((function(t){s[t]=e.static[t]})),e.install&&e.install.apply(s,t),s},l.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach((function(e){return s.installModule(e)})),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(l,d);var h={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),n.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,o=this.virtual&&e.virtual.enabled,l=o?this.virtual.slides.length:this.slides.length,d=i.children("."+this.params.slideClass),h=o?this.virtual.slides.length:d.length,p=[],c=[],u=[];function v(t){return!e.cssMode||t!==d.length-1}var f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,T=0;if(void 0!==s){var E,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(E=Math.floor(h/e.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(E=Math.max(E,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,P=E/M,z=Math.floor(h/e.slidesPerColumn),k=0;k<h;k+=1){S=0;var $=d.eq(k);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;if("row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){var O=Math.floor(k/(e.slidesPerGroup*e.slidesPerColumn)),A=k-e.slidesPerColumn*e.slidesPerGroup*O,G=0===O?e.slidesPerGroup:Math.min(Math.ceil((h-O*M*e.slidesPerGroup)/M),e.slidesPerGroup);L=(I=A-(D=Math.floor(A/G))*G+O*e.slidesPerGroup)+D*E/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})}else"column"===e.slidesPerColumnFill?(D=k-(I=Math.floor(k/M))*M,(I>z||I===z&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1)):I=k-(D=Math.floor(k/P))*P;$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px")}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var H=t.getComputedStyle($[0],null),B=$[0].style.transform,N=$[0].style.webkitTransform;if(B&&($[0].style.transform="none"),N&&($[0].style.webkitTransform="none"),e.roundLengths)S=this.isHorizontal()?$.outerWidth(!0):$.outerHeight(!0);else if(this.isHorizontal()){var X=parseFloat(H.getPropertyValue("width")),V=parseFloat(H.getPropertyValue("padding-left")),Y=parseFloat(H.getPropertyValue("padding-right")),F=parseFloat(H.getPropertyValue("margin-left")),W=parseFloat(H.getPropertyValue("margin-right")),R=H.getPropertyValue("box-sizing");S=R&&"border-box"===R?X+F+W:X+V+Y+F+W}else{var q=parseFloat(H.getPropertyValue("height")),j=parseFloat(H.getPropertyValue("padding-top")),K=parseFloat(H.getPropertyValue("padding-bottom")),U=parseFloat(H.getPropertyValue("margin-top")),_=parseFloat(H.getPropertyValue("margin-bottom")),Z=H.getPropertyValue("box-sizing");S=Z&&"border-box"===Z?q+U+_:q+j+K+U+_}B&&($[0].style.transform=B),N&&($[0].style.webkitTransform=N),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),d[k]&&(this.isHorizontal()?d[k].style.width=S+"px":d[k].style.height=S+"px");d[k]&&(d[k].swiperSlideSize=S),u.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==k&&(y=y-s/2-w),0===k&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),T%e.slidesPerGroup==0&&p.push(y),c.push(y)):(e.roundLengths&&(y=Math.floor(y)),(T-Math.min(this.params.slidesPerGroupSkip,T))%this.params.slidesPerGroup==0&&p.push(y),c.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,T+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),e.setWrapperSize&&(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*E,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var Q=0;Q<p.length;Q+=1){var J=p[Q];e.roundLengths&&(J=Math.floor(J)),p[Q]<this.virtualSize+p[0]&&C.push(J)}p=C}if(!e.centeredSlides){C=[];for(var ee=0;ee<p.length;ee+=1){var te=p[ee];e.roundLengths&&(te=Math.floor(te)),p[ee]<=this.virtualSize-s&&C.push(te)}p=C,Math.floor(this.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-s)}if(0===p.length&&(p=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?d.filter(v).css({marginLeft:w+"px"}):d.filter(v).css({marginRight:w+"px"}):d.filter(v).css({marginBottom:w+"px"})),e.centeredSlides&&e.centeredSlidesBounds){var ie=0;u.forEach((function(t){ie+=t+(e.spaceBetween?e.spaceBetween:0)}));var se=(ie-=e.spaceBetween)-s;p=p.map((function(e){return e<0?-f:e>se?se+m:e}))}if(e.centerInsufficientSlides){var ae=0;if(u.forEach((function(t){ae+=t+(e.spaceBetween?e.spaceBetween:0)})),(ae-=e.spaceBetween)<s){var re=(s-ae)/2;p.forEach((function(e,t){p[t]=e-re})),c.forEach((function(e,t){c[t]=e+re}))}}n.extend(this,{slides:d,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),h!==l&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),c.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)this.visibleSlides.each((function(e,t){i.push(t)}));else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,a=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var r=-e;a&&(r=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(t.centeredSlides?this.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var d=-(r-o.swiperSlideOffset),h=d+this.slidesSizesGrid[n];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(n),i.eq(n).addClass(t.slideVisibleClass))}o.progress=a?-l:l}this.visibleSlides=s(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,o=this.isEnd,l=r,d=o;0===s?(a=0,r=!0,o=!0):(r=(a=(e-this.minTranslate())/s)<=0,o=a>=1),n.extend(this,{progress:a,isBeginning:r,isEnd:o}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!l&&this.emit("reachBeginning toEdge"),o&&!d&&this.emit("reachEnd toEdge"),(l&&!r||d&&!o)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,o=this.activeIndex,l=this.realIndex,d=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var c=Math.min(r.slidesPerGroupSkip,h);t=c+Math.floor((h-c)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),h!==o){var u=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);n.extend(this,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),l!==u&&this.emit("realIndexChange"),(this.initialized||this.params.runCallbacksOnInit)&&this.emit("slideChange")}else t!==d&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=n.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,o=0,l=0;this.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-o:-l:s.virtualTranslate||a.transform("translate3d("+o+"px, "+l+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?o:l;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){var r;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var n=this,o=n.params,l=n.wrapperEl;if(n.animating&&o.preventInteractionOnTransition)return!1;var d,h=n.minTranslate(),p=n.maxTranslate();if(d=s&&e>h?h:s&&e<p?p:e,n.updateProgress(d),o.cssMode){var c=n.isHorizontal();return 0===t?l[c?"scrollLeft":"scrollTop"]=-d:l.scrollTo?l.scrollTo(((r={})[c?"left":"top"]=-d,r.behavior="smooth",r)):l[c?"scrollLeft":"scrollTop"]=-d,!0}return 0===t?(n.setTransition(0),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,i&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}};var c={setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}};var u={slideTo:function(e,t,i,s){var a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var r=this,n=e;n<0&&(n=0);var o=r.params,l=r.snapGrid,d=r.slidesGrid,h=r.previousIndex,p=r.activeIndex,c=r.rtlTranslate,u=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1),(p||o.initialSlide||0)===(h||0)&&i&&r.emit("beforeSlideChangeStart");var m,g=-l[f];if(r.updateProgress(g),o.normalizeSlideIndex)for(var b=0;b<d.length;b+=1)-Math.floor(100*g)>=Math.floor(100*d[b])&&(n=b);if(r.initialized&&n!==p){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(p||0)!==n)return!1}if(m=n>p?"next":n<p?"prev":"reset",c&&-g===r.translate||!c&&g===r.translate)return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(i,m),r.transitionEnd(i,m)),!1;if(o.cssMode){var w=r.isHorizontal(),y=-g;return c&&(y=u.scrollWidth-u.offsetWidth-y),0===t?u[w?"scrollLeft":"scrollTop"]=y:u.scrollTo?u.scrollTo(((a={})[w?"left":"top"]=y,a.behavior="smooth",a)):u[w?"scrollLeft":"scrollTop"]=y,!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.transitionEnd(i,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map((function(e){return l(e)})),c=(n.map((function(e){return l(e)})),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===c&&s.cssMode&&r.forEach((function(e){!c&&h>=e&&(c=e)})),void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[n]){var l=this.snapGrid[n];o-l>(this.snapGrid[n+1]-l)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];o-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,o=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?o<t.loopedSlides-r/2||o>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-r?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}};var v={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each((function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)}));for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,o=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var l=-n[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l)}this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};var f={setGrabCursor:function(e){if(!(o.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){o.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}};var m,g,b,w,y,x,T,E,S,C,M,P,z,k,$,L={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&o.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,l=[],d=r-1;d>=e;d-=1){var h=this.slides.eq(d);h.remove(),l.unshift(h)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<l.length;c+=1)i.append(l[c]);s.loop&&this.loopCreate(),s.observer&&o.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},I=(m=t.navigator.platform,g=t.navigator.userAgent,b={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!t.cordova&&!t.phonegap),phonegap:!(!t.cordova&&!t.phonegap),electron:!1},w=t.screen.width,y=t.screen.height,x=g.match(/(Android);?[\s\/]+([\d.]+)?/),T=g.match(/(iPad).*OS\s([\d_]+)/),E=g.match(/(iPod)(.*OS\s([\d_]+))?/),S=!T&&g.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=g.indexOf("MSIE ")>=0||g.indexOf("Trident/")>=0,M=g.indexOf("Edge/")>=0,P=g.indexOf("Gecko/")>=0&&g.indexOf("Firefox/")>=0,z="Win32"===m,k=g.toLowerCase().indexOf("electron")>=0,$="MacIntel"===m,!T&&$&&o.touch&&(1024===w&&1366===y||834===w&&1194===y||834===w&&1112===y||768===w&&1024===y)&&(T=g.match(/(Version)\/([\d.]+)/),$=!1),b.ie=C,b.edge=M,b.firefox=P,x&&!z&&(b.os="android",b.osVersion=x[2],b.android=!0,b.androidChrome=g.toLowerCase().indexOf("chrome")>=0),(T||S||E)&&(b.os="ios",b.ios=!0),S&&!E&&(b.osVersion=S[2].replace(/_/g,"."),b.iphone=!0),T&&(b.osVersion=T[2].replace(/_/g,"."),b.ipad=!0),E&&(b.osVersion=E[3]?E[3].replace(/_/g,"."):null,b.ipod=!0),b.ios&&b.osVersion&&g.indexOf("Version/")>=0&&"10"===b.osVersion.split(".")[0]&&(b.osVersion=g.toLowerCase().split("version/")[1].split(" ")[0]),b.webView=!(!(S||T||E)||!g.match(/.*AppleWebKit(?!.*Safari)/i)&&!t.navigator.standalone)||t.matchMedia&&t.matchMedia("(display-mode: standalone)").matches,b.webview=b.webView,b.standalone=b.webView,b.desktop=!(b.ios||b.android)||k,b.desktop&&(b.electron=k,b.macos=$,b.windows=z,b.macos&&(b.os="macos"),b.windows&&(b.os="windows")),b.pixelRatio=t.devicePixelRatio||1,b);function D(i){var a=this.touchEventsData,r=this.params,o=this.touches;if(!this.animating||!r.preventInteractionOnTransition){var l=i;l.originalEvent&&(l=l.originalEvent);var d=s(l.target);if(("wrapper"!==r.touchEventsTarget||d.closest(this.wrapperEl).length)&&(a.isTouchEvent="touchstart"===l.type,(a.isTouchEvent||!("which"in l)||3!==l.which)&&!(!a.isTouchEvent&&"button"in l&&l.button>0||a.isTouched&&a.isMoved)))if(r.noSwiping&&d.closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||d.closest(r.swipeHandler)[0]){o.currentX="touchstart"===l.type?l.targetTouches[0].pageX:l.pageX,o.currentY="touchstart"===l.type?l.targetTouches[0].pageY:l.pageY;var h=o.currentX,p=o.currentY,c=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,u=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(!c||!(h<=u||h>=t.screen.width-u)){if(n.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=p,a.touchStartTime=n.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==l.type){var v=!0;d.is(a.formElements)&&(v=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==d[0]&&e.activeElement.blur();var f=v&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||f)&&l.preventDefault()}this.emit("touchStart",l)}}}}function O(t){var i=this.touchEventsData,a=this.params,r=this.touches,o=this.rtlTranslate,l=t;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==l.type){var d="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),h="touchmove"===l.type?d.pageX:l.pageX,p="touchmove"===l.type?d.pageY:l.pageY;if(l.preventedByNestedSwiper)return r.startX=h,void(r.startY=p);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(n.extend(r,{startX:h,startY:p,currentX:h,currentY:p}),i.touchStartTime=n.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(p<r.startY&&this.translate<=this.maxTranslate()||p>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<r.startX&&this.translate<=this.maxTranslate()||h>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&l.target===e.activeElement&&s(l.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){r.currentX=h,r.currentY=p;var c=r.currentX-r.startX,u=r.currentY-r.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(u,2))<this.params.threshold)){var v;if(void 0===i.isScrolling)this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(v=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?v>a.touchAngle:90-v>a.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,a.cssMode||l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),i.isMoved=!0;var f=this.isHorizontal()?c:u;r.diff=f,f*=a.touchRatio,o&&(f=-f),this.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=a.resistanceRatio;if(a.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>this.minTranslate()?(m=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<this.maxTranslate()&&(m=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-f,g))),m&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(f)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&!a.cssMode&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:n.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",l)}function A(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,o=t.$wrapperEl,l=t.slidesGrid,d=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=n.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap click",h),u<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",h)),i.lastClickTime=n.now(),n.nextTick((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||n.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T,E=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var C,M=0;M<d.length;M+=1)if(d[M]>-y){C=M;break}y=-(y=Math.abs(d[C]-y)<Math.abs(d[C-1]-y)||"next"===t.swipeDirection?d[C]:d[C-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),z=t.slidesSizesGrid[t.activeIndex];b=P<z?s.speed:P<2*z?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&E?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),setTimeout((function(){t.setTranslate(x),o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var k=0,$=t.slidesSizesGrid[0],L=0;L<l.length;L+=L<s.slidesPerGroupSkip?1:s.slidesPerGroup){var I=L<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[L+I]?p>=l[L]&&p<l[L+I]&&(k=L,$=l[L+I]-l[L]):p>=l[L]&&(k=L,$=l[l.length-1]-l[l.length-2])}var D=(p-l[k])/$,O=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(D>=s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k)),"prev"===t.swipeDirection&&(D>1-s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(h.target===t.navigation.nextEl||h.target===t.navigation.prevEl)?h.target===t.navigation.nextEl?t.slideTo(k+O):t.slideTo(k):("next"===t.swipeDirection&&t.slideTo(k+O),"prev"===t.swipeDirection&&t.slideTo(k))}}}function G(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function H(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this.wrapperEl,t=this.rtlTranslate;this.previousTranslate=this.translate,this.isHorizontal()?this.translate=t?e.scrollWidth-e.offsetWidth-e.scrollLeft:-e.scrollLeft:this.translate=-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var i=this.maxTranslate()-this.minTranslate();(0===i?0:(this.translate-this.minTranslate())/i)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}var N=!1;function X(){}var V={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},Y={update:h,translate:p,transition:c,slide:u,loop:v,grabCursor:f,manipulation:L,events:{attachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl;this.onTouchStart=D.bind(this),this.onTouchMove=O.bind(this),this.onTouchEnd=A.bind(this),t.cssMode&&(this.onScroll=B.bind(this)),this.onClick=H.bind(this);var r=!!t.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,r),e.addEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("touchstart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,this.onTouchStart,n),s.addEventListener(i.move,this.onTouchMove,o.passiveListener?{passive:!1,capture:r}:r),s.addEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.addEventListener(i.cancel,this.onTouchEnd,n),N||(e.addEventListener("touchstart",X),N=!0)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,r),e.addEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),t.cssMode&&a.addEventListener("scroll",this.onScroll),t.updateOnWindowResize?this.on(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):this.on("observerUpdate",G,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r=!!t.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,r),e.removeEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("onTouchStart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,this.onTouchStart,n),s.removeEventListener(i.move,this.onTouchMove,r),s.removeEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.removeEventListener(i.cancel,this.onTouchEnd,n)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,r),e.removeEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),t.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=this.$el,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var o=this.getBreakpoint(r);if(o&&this.currentBreakpoint!==o){var l=o in r?r[o]:void 0;l&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=l[e];void 0!==t&&(l[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=l||this.originalParams,h=s.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"):!h&&p&&(a.addClass(s.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"));var c=d.direction&&d.direction!==s.direction,u=s.loop&&(d.slidesPerView!==s.slidesPerView||c);c&&t&&this.changeDirection(),n.extend(this.params,d),n.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=o,u&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){if(e){var i=!1,s=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var i=parseFloat(e.substr(1));return{value:t.innerHeight*i,point:e}}return{value:e,point:e}}));s.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var a=0;a<s.length;a+=1){var r=s[a],n=r.point;r.value<=t.innerWidth&&(i=n)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&(a.push("multirow"),"column"===t.slidesPerColumnFill&&a.push("multirow-column")),I.android&&a.push("android"),I.ios&&a.push("ios"),t.cssMode&&a.push("css-mode"),a.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},F={},W=function(e){function t(){for(var i,a,r,l=[],d=arguments.length;d--;)l[d]=arguments[d];1===l.length&&l[0].constructor&&l[0].constructor===Object?r=l[0]:(a=(i=l)[0],r=i[1]),r||(r={}),r=n.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(Y).forEach((function(e){Object.keys(Y[e]).forEach((function(i){t.prototype[i]||(t.prototype[i]=Y[e][i])}))}));var h=this;void 0===h.modules&&(h.modules={}),Object.keys(h.modules).forEach((function(e){var t=h.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in r)||!("enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}}));var p=n.extend({},V);h.useModulesParams(p),h.params=n.extend({},p,F,r),h.originalParams=n.extend({},h.params),h.passedParams=n.extend({},r),h.$=s;var c=s(h.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each((function(e,i){var s=n.extend({},r,{el:i});u.push(new t(s))})),u}var v,f,m;return a.swiper=h,c.data("swiper",h),a&&a.shadowRoot&&a.shadowRoot.querySelector?(v=s(a.shadowRoot.querySelector("."+h.params.wrapperClass))).children=function(e){return c.children(e)}:v=c.children("."+h.params.wrapperClass),n.extend(h,{$el:c,el:a,$wrapperEl:v,wrapperEl:v[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===h.params.direction},isVertical:function(){return"vertical"===h.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===h.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===v.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEvents:(f=["touchstart","touchmove","touchend","touchcancel"],m=["mousedown","mousemove","mouseup"],o.pointerEvents&&(m=["pointerdown","pointermove","pointerup"]),h.touchEventsTouch={start:f[0],move:f[1],end:f[2],cancel:f[3]},h.touchEventsDesktop={start:m[0],move:m[1],end:m[2]},o.touch||!h.params.simulateTouch?h.touchEventsTouch:h.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:n.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.useModules(),h.params.init&&h.init(),h}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.params.direction=e,this.slides.each((function(t,i){"vertical"===e?i.style.width="":i.style.height=""})),this.emit("changeDirection"),t&&this.update()),this},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,o=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),o&&o.length&&o.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),n.deleteProps(i)),i.destroyed=!0),null},t.extendDefaults=function(e){n.extend(F,e)},i.extendedDefaults.get=function(){return F},i.defaults.get=function(){return V},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(l),R={name:"device",proto:{device:I},static:{device:I}},q={name:"support",proto:{support:o},static:{support:o}},j={isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:function(){var e=t.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)},K={name:"browser",proto:{browser:j},static:{browser:j}},U={name:"resize",create:function(){var e=this;n.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},_={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,i){void 0===i&&(i={});var s=this,a=new(0,_.func)((function(e){if(1!==e.length){var i=function(){s.emit("observerUpdate",e[0])};t.requestAnimationFrame?t.requestAnimationFrame(i):t.setTimeout(i,0)}else s.emit("observerUpdate",e[0])}));a.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),s.observer.observers.push(a)},init:function(){if(o.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},Z={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){n.extend(this,{observer:{init:_.init.bind(this),attach:_.attach.bind(this),destroy:_.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},Q={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,o=t.params.virtual,l=o.addSlidesBefore,d=o.addSlidesAfter,h=t.virtual,p=h.from,c=h.to,u=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,b,w,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(b=Math.floor(s/2)+a+l,w=Math.floor(s/2)+a+d):(b=s+(a-1)+l,w=a+d);var x=Math.max((y||0)-w,0),T=Math.min((y||0)+b,u.length-1),E=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(n.extend(t.virtual,{from:x,to:T,offset:E,slidesGrid:t.slidesGrid}),p===x&&c===T&&!e)return t.slidesGrid!==v&&E!==m&&t.slides.css(g,E+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:E,from:x,to:T,slides:function(){for(var e=[],t=x;t<=T;t+=1)e.push(u[t]);return e}()}),void S();var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=c;P+=1)(P<x||P>T)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var z=0;z<u.length;z+=1)z>=x&&z<=T&&(void 0===c||e?M.push(z):(z>c&&M.push(z),z<p&&C.push(z)));M.forEach((function(e){t.$wrapperEl.append(f(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(g,E+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},J={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){n.extend(this,{virtual:{update:Q.update.bind(this),appendSlide:Q.appendSlide.bind(this),prependSlide:Q.prependSlide.bind(this),removeSlide:Q.removeSlide.bind(this),removeAllSlides:Q.removeAllSlides.bind(this),renderSlide:Q.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};n.extend(this.params,e),n.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},ee={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r||34===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r||33===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(33===r||34===r||37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(33!==r&&34!==r&&37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(34!==r&&39!==r||s)&&(33!==r&&37!==r||!s)||this.slideNext(),(33!==r&&37!==r||s)&&(34!==r&&39!==r||!s)||this.slidePrev()):(33!==r&&34!==r&&38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),34!==r&&40!==r||this.slideNext(),33!==r&&38!==r||this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},te={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){n.extend(this,{keyboard:{enabled:!1,enable:ee.enable.bind(this),disable:ee.disable.bind(this),handle:ee.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var ie={lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,a=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var r=i.$el;if("container"!==i.params.mousewheel.eventsTarged&&(r=s(i.params.mousewheel.eventsTarged)),!i.mouseEntered&&!r[0].contains(t.target)&&!a.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var o=0,l=i.rtlTranslate?-1:1,d=ie.normalize(t);if(a.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(d.pixelX)>Math.abs(d.pixelY)))return!0;o=d.pixelX*l}else{if(!(Math.abs(d.pixelY)>Math.abs(d.pixelX)))return!0;o=d.pixelY}else o=Math.abs(d.pixelX)>Math.abs(d.pixelY)?-d.pixelX*l:-d.pixelY;if(0===o)return!0;if(a.invert&&(o=-o),i.params.freeMode){var h={time:n.now(),delta:Math.abs(o),direction:Math.sign(o)},p=i.mousewheel.lastEventBeforeSnap,c=p&&h.time<p.time+500&&h.delta<=p.delta&&h.direction===p.direction;if(!c){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var u=i.getTranslate()+o*a.sensitivity,v=i.isBeginning,f=i.isEnd;if(u>=i.minTranslate()&&(u=i.minTranslate()),u<=i.maxTranslate()&&(u=i.maxTranslate()),i.setTransition(0),i.setTranslate(u),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!v&&i.isBeginning||!f&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var m=i.mousewheel.recentWheelEvents;m.length>=15&&m.shift();var g=m.length?m[m.length-1]:void 0,b=m[0];if(m.push(h),g&&(h.delta>g.delta||h.direction!==g.direction))m.splice(0);else if(m.length>=15&&h.time-b.time<500&&b.delta-h.delta>=1&&h.delta<=6){var w=o>0?.8:.2;i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.mousewheel.timeout=n.nextTick((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=n.nextTick((function(){i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(c||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),u===i.minTranslate()||u===i.maxTranslate())return!0}}else{var y={time:n.now(),delta:Math.abs(o),direction:Math.sign(o),raw:e},x=i.mousewheel.recentWheelEvents;x.length>=2&&x.shift();var T=x.length?x[x.length-1]:void 0;if(x.push(y),T?(y.direction!==T.direction||y.delta>T.delta)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){return e.delta>=6&&n.now()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},se={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=s(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=s(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),n.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},ae={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each((function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=h.eq(i),c=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=h.eq(o),v=h.eq(l),f=o;f<=l;f+=1)h.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(c>=h.length-t.dynamicMainBullets){for(var m=t.dynamicMainBullets;m>=0;m-=1)h.eq(h.length-m).addClass(t.bulletActiveClass+"-main");h.eq(h.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(h.length,t.dynamicMainBullets+4),b=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,w=e?"right":"left";h.css(this.isHorizontal()?w:"top",b+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var y;y=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,E=1;"horizontal"===y?T=x:E=x,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+E+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),n.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},re={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=l+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,o=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),n.extend(e,{trackSize:a,divider:r,moveDivider:o,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(l),this.setTranslate(l),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=n.nextTick((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,l))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,l))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),n.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},ne={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(null==d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,a)})),i.each((function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,n)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)}))}},oe={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!o.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=oe.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest("."+this.params.slideClass),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl&&a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=oe.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=o.gestures?e.scale*i.currentScale:s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!I.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(I.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=n.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=n.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,o=s.height*t.scale;if(!(r<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl&&t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl&&t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,o,l,d,h,p,c,u,v,f,m,g=this.zoom,b=this.params.zoom,w=g.gesture,y=g.image;(w.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?w.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):w.$slideEl=this.slides.eq(this.activeIndex),w.$imageEl=w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),w.$imageWrapEl=w.$imageEl.parent("."+b.containerClass)),w.$imageEl&&0!==w.$imageEl.length)&&(w.$slideEl.addClass(""+b.zoomedSlideClass),void 0===y.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=y.touchesStart.x,i=y.touchesStart.y),g.scale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,g.currentScale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,e?(f=w.$slideEl[0].offsetWidth,m=w.$slideEl[0].offsetHeight,s=w.$slideEl.offset().left+f/2-t,a=w.$slideEl.offset().top+m/2-i,o=w.$imageEl[0].offsetWidth,l=w.$imageEl[0].offsetHeight,d=o*g.scale,h=l*g.scale,u=-(p=Math.min(f/2-d/2,0)),v=-(c=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>u&&(r=u),(n=a*g.scale)<c&&(n=c),n>v&&(n=v)):(r=0,n=0),w.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),w.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?i.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.on("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.on("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.on("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.on(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.off("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.off("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.off("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.off(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}}},le={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each((function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",r[0],o[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},de={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new de.LinearSpline(this.slidesGrid,e.slidesGrid):new de.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof W&&n(r[o]);else r instanceof W&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&n.nextTick((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof W&&r(a[i]);else a instanceof W&&t!==a&&r(a)}},he={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/\{\{index\}\}/,r.index()+1))}))},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},pe={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=pe.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=pe.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter((function(e){return""!==e})),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=pe.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(pe.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},ce={onHashCange:function(){var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},ue={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=n.nextTick((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},ve={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},fe={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var T="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(T),d.slideShadows){var E=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(c)-90*Math.floor(Math.abs(c)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,z=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+P+", 1, "+z+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/z+"px) rotateX(-90deg)")}var $=j.isSafari||j.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},me={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},ge={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,l=this.isHorizontal(),d=this.translate,h=l?e/2-d:t/2-d,p=l?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(h-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=l?p*g:0,w=l?0:p*g,y=-c*Math.abs(g),x=n.stretch;"string"==typeof x&&-1!==x.indexOf("%")&&(x=parseFloat(n.stretch)/100*m);var T=l?0:x*g,E=l?x*g:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var S="translate3d("+E+"px,"+T+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=s('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=g>0?g:0),M.length&&(M[0].style.opacity=-g>0?-g:0)}}(o.pointerEvents||o.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=h+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,n.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),n.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):n.isObject(e.swiper)&&(this.thumbs.swiper=new t(n.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&s(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var r=this.activeIndex;this.slides.eq(r).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,r=this.activeIndex);var n=this.slides.eq(r).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),o=this.slides.eq(r).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===n?o:void 0===o?n:o-r<r-n?o:n}this.slideTo(a)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView,s=this.params.thumbs.autoScrollOffset,a=s&&!t.params.loop;if(this.realIndex!==t.realIndex||a){var r,n,o=t.activeIndex;if(t.params.loop){t.slides.eq(o).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,o=t.activeIndex);var l=t.slides.eq(o).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),d=t.slides.eq(o).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();r=void 0===l?d:void 0===d?l:d-o==o-l?o:d-o<o-l?d:l,n=this.activeIndex>this.previousIndex?"next":"prev"}else n=(r=this.realIndex)>this.previousIndex?"next":"prev";a&&(r+="next"===n?s:-1*s),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(r)<0&&(t.params.centeredSlides?r=r>o?r-Math.floor(i/2)+1:r+Math.floor(i/2)-1:r>o&&(r=r-i+1),t.slideTo(r,e?0:void 0))}var h=1,p=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(h=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),t.slides.removeClass(p),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var c=0;c<h;c+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+c)+'"]').addClass(p);else for(var u=0;u<h;u+=1)t.slides.eq(this.realIndex+u).addClass(p)}}},we=[R,q,K,U,Z,J,te,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){n.extend(this,{mousewheel:{enabled:!1,enable:ie.enable.bind(this),disable:ie.disable.bind(this),handle:ie.handle.bind(this),handleMouseEnter:ie.handleMouseEnter.bind(this),handleMouseLeave:ie.handleMouseLeave.bind(this),animateSlider:ie.animateSlider.bind(this),releaseScroll:ie.releaseScroll.bind(this),lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[]}})},on:{init:function(){!this.params.mousewheel.enabled&&this.params.cssMode&&this.mousewheel.disable(),this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.params.cssMode&&this.mousewheel.enable(),this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){n.extend(this,{navigation:{init:se.init.bind(this),update:se.update.bind(this),destroy:se.destroy.bind(this),onNextClick:se.onNextClick.bind(this),onPrevClick:se.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,a=i.$nextEl,r=i.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(r)||s(e.target).is(a)||(a?t=a.hasClass(this.params.navigation.hiddenClass):r&&(t=r.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),a&&a.toggleClass(this.params.navigation.hiddenClass),r&&r.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){n.extend(this,{pagination:{init:ae.init.bind(this),render:ae.render.bind(this),update:ae.update.bind(this),destroy:ae.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){(this.params.loop||void 0===this.snapIndex)&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){n.extend(this,{scrollbar:{init:re.init.bind(this),destroy:re.destroy.bind(this),updateSize:re.updateSize.bind(this),setTranslate:re.setTranslate.bind(this),setTransition:re.setTransition.bind(this),enableDraggable:re.enableDraggable.bind(this),disableDraggable:re.disableDraggable.bind(this),setDragPosition:re.setDragPosition.bind(this),getPointerPosition:re.getPointerPosition.bind(this),onDragStart:re.onDragStart.bind(this),onDragMove:re.onDragMove.bind(this),onDragEnd:re.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){n.extend(this,{parallax:{setTransform:ne.setTransform.bind(this),setTranslate:ne.setTranslate.bind(this),setTransition:ne.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i){t[i]=oe[i].bind(e)})),n.extend(e,{zoom:t});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()},slideChange:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.params.cssMode&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){n.extend(this,{lazy:{initialImageLoaded:!1,load:le.load.bind(this),loadInSlide:le.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){this.params.lazy.enabled&&this.params.cssMode&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){n.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:de.getInterpolateFunction.bind(this),setTranslate:de.setTranslate.bind(this),setTransition:de.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;n.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(he).forEach((function(t){e.a11y[t]=he[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){n.extend(this,{history:{init:pe.init.bind(this),setHistory:pe.setHistory.bind(this),setHistoryPopState:pe.setHistoryPopState.bind(this),scrollToSlide:pe.scrollToSlide.bind(this),destroy:pe.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)},slideChange:function(){this.history.initialized&&this.params.cssMode&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){n.extend(this,{hashNavigation:{initialized:!1,init:ce.init.bind(this),destroy:ce.destroy.bind(this),setHash:ce.setHash.bind(this),onHashCange:ce.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()},slideChange:function(){this.hashNavigation.initialized&&this.params.cssMode&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;n.extend(e,{autoplay:{running:!1,paused:!1,run:ue.run.bind(e),start:ue.start.bind(e),stop:ue.stop.bind(e),pause:ue.pause.bind(e),onVisibilityChange:function(){"hidden"===document.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===document.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&(this.autoplay.start(),document.addEventListener("visibilitychange",this.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},touchEnd:function(){this.params.cssMode&&this.autoplay.paused&&!this.params.autoplay.disableOnInteraction&&this.autoplay.run()},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){n.extend(this,{fadeEffect:{setTranslate:ve.setTranslate.bind(this),setTransition:ve.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){n.extend(this,{cubeEffect:{setTranslate:fe.setTranslate.bind(this),setTransition:fe.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){n.extend(this,{flipEffect:{setTranslate:me.setTranslate.bind(this),setTransition:me.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){n.extend(this,{coverflowEffect:{setTranslate:ge.setTranslate.bind(this),setTransition:ge.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){n.extend(this,{thumbs:{swiper:null,init:be.init.bind(this),update:be.update.bind(this),onThumbClick:be.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===W.use&&(W.use=W.Class.use,W.installModule=W.Class.installModule),W.use(we),W}));


                    (function (factory) {
                        if (typeof define === 'function' && define.amd) {
                            define(['jquery'], factory);
                        } else if (typeof exports === 'object') {
                            factory(require('jquery'));
                        } else {
                            factory(jQuery);
                        }
                    }(function ($) {
                        var pluses = /\+/g;
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
                            } catch (e) { }
                        }
                        function read(s, converter) {
                            var value = config.raw ? s : parseCookieValue(s);
                            return $.isFunction(converter) ? converter(value) : value;
                        }
                        var config = $.cookie = function (key, value, options) {
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
                        config.defaults = {};
                        $.removeCookie = function (key, options) {
                            if ($.cookie(key) === undefined) {
                                return false;
                            }

                            $.cookie(key, '', $.extend({}, options, { expires: -1 }));
                            return !$.cookie(key);
                        };
                    }));


                    var customizingRef = (function (d, w, $) {
                        var customizingRef = customizingRef || {};
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
                            //aDOORLENG4 = ['6door', '5door', '4door'],
                            aDOORLENG4 = ['4door_kf'], //2021.03.02
                            aDOORLENG4BAV = ['6door', '5door', '4door'] //2021.03.09 
                            aKIMCHI = ['4door_kimchi_486', '4door_kimchi_584', '3door_kimchi'],
                            aFAMILY = ['4door_family'],              // type5
                            aCHEFCL = ['4door_chef', '4door_chef2', '5door_chef'],  // type7 셰프컬렉션 (4door_chef, 5door_chef )
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
                        var sImgPath = '//images.samsung.com/kdp/bespoke/images/';
                        var locTypeList = [];
						var colorList = [];
						var colorNameList = [];
						var imgUrlList = [];

                        var controlNumber = {
                            //3자리 단위 콤마
                            numberWithCommas: function (str) {
                            	str = String(str);
                            	return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            },
                            //숫자만
                            onlyNumber: function (str) {
                                var res;
                                res = str.replace(/[^0-9]/g, "");
                                return parseInt(res);
                            },
                            //가격 합산
                            getSumPrice: function (array) {
                                var sum = array.reduce(function (previousValue, currentValue, currentIndex, array1) {
                                    return previousValue + currentValue;
                                });
                                return sum;
                            }
                        }
                        var resizeFunc = function (fnPc, fnMo) {
                            var rtime;
                            var timeout = false;
                            var delta = 200;
                            $(window).resize(function () {
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
                        var FixedTop = 'secFixedTop',
                            FixedBtm = 'secFixedBtm';
                        var selectionFixedFunc = {
                            selectionFixedPc: function () {
                                $(window).on('scroll resize', function () {
                                    var isMobile = window.innerWidth <= 768 ? true : false;
                                	var department =  $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                    
                                    if (!isMobile) {
                                        var curScroll = $(this).scrollTop(),
                                            makeSection = $(sMYEDITION + '-making-section'),
                                            makeSectionTop = $(sSTEP01).offset().top,
                                            makeSectionHeight = makeSection.outerHeight(),
                                            makeSectionBtm = makeSection.offset().top + makeSectionHeight - $(window).height(),
                                            makeSectionEnd = $('.my-edition-btn-area').offset().top,
											wrapTop = Math.ceil($('.my-edition-making-wrap').offset().top);                                            
                                            imgH = $(sMODEL).height();
											
                                        if (curScroll >= wrapTop) {
                                        	if (curScroll + imgH >= makeSectionEnd + $('.my-edition_btn').outerHeight()) {
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
                            selectionFixedMo: function () {
                                $(sMODEL).removeClass(FixedTop).removeClass(FixedBtm);
                            }
                        }
                        //주요 토글 기능 모음
                        var toggleView = {
                            trBg: {
                                selector: {
                                    sHoverClass: 'hoverBg'
                                },
                                hover: {
                                    show: function ($this) {
                                        $this.addClass(toggleView.trBg.selector.sHoverClass);
                                    },
                                    hide: function ($this) {
                                        $this.removeClass(toggleView.trBg.selector.sHoverClass);
                                    }
                                },
                                click: {
                                    show: function ($this) {
                                        $this.parents('tr').addClass(sACTIVE).siblings().removeClass(sACTIVE);

                                    },
                                    hide: function ($this) {
                                        $this.parents('tr').removeClass(sACTIVE);

                                    }
                                }
                            },
                            showModel: {
                                show: function () {
                                    $(sMYEDITION + '-making-default').hide();
                                    $(sMYEDITION + '-making-ref-wrap').show();
                                    if($(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep') !='F/P'){
                                    	$(sMYEDITION + '-making-info').show();
                                    }else{
                                    	$(sMYEDITION + '-making-info2').show();
                                    	$('.bespoke-color-set').hide();
                                    }
                                },
                                hide: function () {
                                    $(sMYEDITION + '-making-default').show();
                                    $(sMYEDITION + '-making-ref-wrap').hide();
                                    $(sMYEDITION + '-making-info').hide();
                                    $(sMYEDITION + '-making-info2').hide();
                                    $('.bespoke-color-set').hide();
                                }
                            }
                        }
                        var prodList = [];
                        var cookieName = 'bespoke_make200703v1';
                        if (isLogin == "Y") {
                            cookieName = 'bespoke_make200703v2';
                        }
                        var savedLength;
                        var pushProdList = function () {
                            if ($.cookie(cookieName) !== undefined) {
                                prodList = JSON.parse($.cookie(cookieName));
                            }
                        };
                        var prod3List = [];
                        var init = function (data) {
                            var getParameter = function (param) {
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


                            //  2021 김치 플러스 4도어 추가 - 1개의 모델에 대해 상세정보
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
                                                    $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').css('background-color', '').find('.color').text(''); // 20190620
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
                                                    $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').css('background-color', '').find('.color').text(''); // 20190620
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
                                
                                settingPrice.changePrice();
                            });

                            var reset = {
                                model: function () {
                                    toggleView.showModel.hide();
                                },
                                myEditionDoorSelection: function () {
                                    $(sMODEL + ' li[data-type] .door_btn').find(sBTN).each(function () {
                                        $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').css('background-color', '').find('.color').text(''); // 20190620
                                        $(this).find('strong').show();
                                        $(this).removeClass(sACTIVE).removeClass('light');
                                    });
                                },
                                saveBtn: function () {
                                    $(sSAVEBTN).removeClass(sACTIVE).removeClass('light');
                                },
                                stepList: {
                                    step1: function () {
                                        $(sSTEP01 + ' ' + '.type-select_btn').removeClass(sACTIVE).removeClass(sINACTIVE);
                                    },
                                    step2: function () {
                                        choiceDep.act();
                                    },
                                    step3: function () {
                                        $(sTABVIEW).find(sBTN + '.' + sACTIVE).removeClass(sACTIVE);
                                        settingPrice.resetPrice();
                                    },
                                    act: function () {
                                        this.step1();
                                        this.step2();
                                        this.step3();
                                    }
                                },
                                act: function (caseType) {
                                    $('.my-edition_tab-desc').removeClass('is_show').hide();
                                    reset.myEditionDoorSelection();
                                    reset.saveBtn();
                                    sYear = '2020';

                                    switch (caseType) {
                                        case 'tab':
                                            reset.stepList.step3();
                                            break;
                                        case 'remake':
                                            moveNextStep($(sSTEP03).find('.my-edition-step_cont'));
                                            $('.my-edition-making-step-box.step-box_year').hide();
                                            $('.years-tabs-option li').removeClass('on').removeClass('active');
                                        default:
                                            reset.model();
                                            reset.stepList.act();

                                            break;
                                    }
                                }
                            }
                            var stepAlert = function (step, $el, caseType, yesCallback, noCallback, coCallback) {
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
                                        	//$('#panelTypeCd').val("AS");                                       
//                                         	$('#dataYear').val("");            
                                            if (coCallback !== undefined) {//값이 무조껀 있음
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
                            var moveNextStep = function ($el) {
                                var idx = $el.parents('.my-edition-making-step-box').index(),
                                    isMobile = window.innerWidth <= 768 ? true : false;
                                var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                
                                switch (idx) {
                                    case 0:
                                    	if(department == "F/P"){
                                    		var step = '.step-box_year';
                                    		$('.years-tabs-option li').removeClass('on').removeClass('active');
                                    	}else{
                                    		var step = '.step-box_module';
                                    	}
                                        break;
                                    case 1:
                                        var step = '.step-box_module';
                                        break;
                                    case 2:
                                    	if(department == "F/P"){
                                    		var step = '.step-box_color';
                                    	}else{
                                    		var step = '.step-box_function';
                                    	}
                                        break;
                                    case 3:
                                        if (isMobile) {
                                            var step = '.step-box_color .my-edition-step_tit';
                                        } else if (!isMobile) {
                                            var step = '.step-box_color';
                                        }
                                        break;
                                    case 4:
                                        var step = '.step-box_type';
                                        break;
                                }
								
								var offset = $(step).offset().top + $('.my-edition-making-step-wrap').scrollTop(),
                                    moving = offset;

                                if (idx == 3 && !isMobile) {
                                    moving = moving - 1500;
                                } else if (idx == 3 && isMobile) {
                                    moving = moving - 1100;
                                }
                                
                                $('html,body').animate({ scrollTop: moving }, 300);
                            };
                            var initCookieHTML = function () {
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
								var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
								
                                var makeHTML = function () {
                                    var doorName;
                                    var setDoorFrame = function (doorType) {
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
                                        frame: function (type, list) {
                                            var aButtonDom = [];
                                            setDoorFrame(type);
// 											console.log(list);
// 											console.log(doorClass);
// 											console.log(doorName);
// 											console.log(panelCode);
                                            $.each(list.panel, function (k, panel) {
                                                //original 과 360 분리
                                            	var rgbColor = ""; //360 색상 코드 정의
                                            	if(panel.padacolor != undefined){
                                            		rgbColor = panel.padacolor;
                                            	}else if(panel.rgbCode != undefined){
                                            		rgbColor = panel.rgbCode;
                                            	}
                                            	
                                            	if(rgbColor.indexOf("#") > -1){	//비로그인
                                                	if (aFAMILY.indexOf(type) > -1) {
                                                        if (k == 1) {
                                                            aButtonDom.push('<div class="my_door ' + doorClass[k] + '" style=""><span class="position">' + doorName[k] + ' </span><span class="color">' + panel.color + '</span></div>');
                                                        } else {
                                                            aButtonDom.push('<div class="my_door ' + doorClass[k] + '" style="background-color:'+ rgbColor +'"><span class="position">' + doorName[k] + ' </span><span class="color">' + panel.color + '</span></div>')
                                                        }
                                                    } else {
                                                        aButtonDom.push('<div class="my_door ' + doorClass[k] + '" style="background-color:'+ rgbColor +'"><span class="position">' + doorName[k] + ' </span><span class="color">' + panel.color + '</span></div>')
                                                    }
                                               	}else{
                                                	if (aFAMILY.indexOf(type) > -1) {
                                                        if (k == 1) {
                                                            aButtonDom.push('<div class="my_door ' + doorClass[k] + '" style=""><span class="position">' + doorName[k] + ' </span><span class="color">' + panel.color + '</span></div>');
                                                        } else {
                                                            aButtonDom.push('<div class="my_door ' + doorClass[k] + '" style="background-image:url(' + sImgPath + 'v3/door/' + panelCode[k].toLowerCase() + '.png?$ORIGIN_PNG$)"><span class="position">' + doorName[k] + ' </span><span class="color">' + panel.color + '</span></div>') // 로컬 작업 경로 수정 : v3/door/ > door/
                                                        }
                                                    } else {
                                                        aButtonDom.push('<div class="my_door ' + doorClass[k] + '" style="background-image:url(' + sImgPath + 'v3/door/' + panelCode[k].toLowerCase() + '.png?$ORIGIN_PNG$)"><span class="position">' + doorName[k] + ' </span><span class="color">' + panel.color + '</span></div>') // 로컬 작업 경로 수정 : v3/door/ > door/
                                                    }
                                                }
                                            });
                                            return aButtonDom;
                                        },
                                        panelDom: function (type, list) {
                                            var aPanelDom = [];
                                            var makeDoorFrame = function (arr) {
                                                $('.pd-pop-content__table .door').each(function (i) {
                                                    $(this).find('th').text('디자인 패널 ' + arr[i]);
                                                })

                                                $.each(list.panel, function (k, panel) {
                                                    if (aFAMILY.indexOf(type) > -1) {
                                                        if (!(k==1)) { aPanelDom.push('<tr class="door"><th scope="row">디자인 패널 ' + arr[k] + '</th><td style="text-align: center;">' + panel.color + '</td><td style="text-align: center;">' + controlNumber.numberWithCommas(panel.panelprice) + '원' + '</td></tr>'); }
                                                    } else {
                                                        aPanelDom.push('<tr class="door"><th scope="row">디자인 패널 ' + arr[k] + '</th><td style="text-align: center;">' + panel.color + '</td><td style="text-align: center;">' + controlNumber.numberWithCommas(panel.panelprice) + '원' + '</td></tr>');
                                                    }
                                                });
                                                if(list.pkgnm !==""){
                                                    aPanelDom.push('<tr class="door"><th scope="row">옵션제품</th><td style="text-align: center;">' + list.pkgnm + '</td><td style="text-align: center;">' + controlNumber.numberWithCommas(list.pkg2) + '원' + '</td></tr>');
                                                }
                                            };
                                            setDoorFrame(type);
                                            makeDoorFrame(doorName);
                                            return aPanelDom;
                                        }
                                    }
                                    $.each(prod, function (i, item) {
                                        panelCode = [];

                                        var aPanel = [],filprice= 0;
                                        var filteredType = data.filter(function (type) { return type.dataType === item.type; })[0];
                                        var filteredModelPrice = "";
                                        var filtered2Name = filteredType.product.filter(function (model) { return model.modelName === item.name; })[0];
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
                                            filteredModelPrice = parseInt(filtered2Name.price)+parseInt(filprice);
                                            s_disabled = "";
                                        } else {
                                            filteredModelPrice = parseInt(item.price)+parseInt(filprice);
                                            s_disabled = "disabled";
                                        }

                                        var getIdx = function (i) {
                                            var idx = i + 1;
                                            if (idx < 10) {
                                                idx = '0' + idx;
                                            } else {
                                                idx = idx
                                            }
                                            return 'chk' + idx;
                                        };

                                        $.each(item.panel, function (j, panel) {
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
										//여기에 분기점
                                        var selcolorCd = "808080";
                                        if (item.selcc != undefined) {
                                            if (item.selcc.length > 1) {
                                                selcolorCd = item.selcc.replace('#', '');
                                            }
                                        }
                                        //내가 만든 BESPOKE, 모바일 AR내 공간에서 체험하기 공통
                                        var commonHTML = '<div class="my-pick_img" data-type="' + item.type + '">' +
                                            '<span class="pick_img"><img src="' + sImgPath + 'v3/frame/' + (function () {
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
                                            '<span class="pick_img_mo"><img src="' + sImgPath + 'v3/frame/mo_' + (function () {
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
                                            '<div class="pick_doors">' + making.frame(item.type, item).join('') +'</div>' +
                                            '</div>' +
                                            '<ul class="my-pick_info">' +
                                            '<li class="pick_name"><span>' + item.name + '</span></li>' +
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
                                        var typeKr = data.filter(function (dataItem) {
                                            return dataItem.dataType === item.type;
                                        })[0].type;
                                        choicedOpt = making.panelDom(item.type, item).join('') + '<tr class="total">' +
                                            '<td>총 구매가격 (회원가)</td>' +
                                            '<td colspan="2" class="right">' + controlNumber.numberWithCommas(item.price) + '원' + '</td>'
                                        '</tr>';
                                        choicedOpt2 = '<tr>' +
                                            '<th>' + item.name + '</th>' +
                                            '<th>' + typeKr + '</th>' +
                                            '<th>' + controlNumber.numberWithCommas(filteredModelPrice) + '원' + '</th>'
                                        '</tr>';

                                        aSelectedOpt[i] = choicedOpt;
                                        aSelectedOpt2[i] = choicedOpt2;
                                    });
                                    $modelList.html('').append(aProdHtml);
                                    $ARPOPUP.find('.my-edition-pick-list').html('');
                                    $.each(aProdHtmlPop, function (i, item) {
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
                                var deleteChoicedLi = function () {
                                    var $btnDelete = $('.' + sDELETEBTN);
                                    $btnDelete.off('click').on('click', function () {
                                        if (isLogin == "Y") {
                                            settingCookie.deleteDB($(this).parents('.my-edition-pick-item'));
                                        } else {
                                            settingCookie.deleteProd($(this).parents('.my-edition-pick-item'));
                                        }
                                    })
                                };

                                var exposureList = function () {
                                    var $moreBtn = $('.more_btn'),
                                        nMaxLength = 6,
                                        sItem = '.my-edition-pick-section .my-edition-pick-item';

                                    var fnPc = function () {
                                        $(sItem).show();
                                        if ($moreBtn.css('display') === 'none') {
                                            $moreBtn.show();
                                        }
                                    };

                                    var fnMo = function () {
                                        $(sItem).hide();
                                        if ($(sItem).length > nMaxLength) {
                                            $(sItem + ':nth-child(-n+' + nMaxLength + ')').show();
                                        } else {
                                            $(sItem).show();
                                            $moreBtn.hide();
                                        }
                                    };

                                    $moreBtn.click(function () {
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

                            var afterDBDelete = function ($this) {

                                var userSeq = $this.attr('id').substr(6);
                                var allData = { 'userSeq': userSeq };

                                jQuery.ajaxSettings.traditional = true;
                                var option = {
                                    url: '/sec/xhr/bespoke/myModelDelAjax', //[2020-09-07 리뉴얼]
                                    dataType: "json",
                                    data: allData,
                                    jsonpCallback: "jsonpcallback_bespoke",
                                    type: "POST",
                                    success: function (data) {
                                        if (data.resultCode == "-1") {
                                            //$('.loginBtn').click();
                                            window.location.href =  "/sec/member/indexLogin/?returnUrl=" + window.location.pathname + "?id=bespoke-make";	//[2020-09-07 리뉴얼]
                                        } else if (data.resultCode == '1') {
                                            pushProd2List();
                                        } else {
                                            alert(data.resultCode + "데이타 삭제 오류 입니다.");
                                        }
                                    },
                                    error: function (response, status, error) {
                                        alert('error1:myModelDelAjax 오류!');
                                    },
                                    beforeSend: function (xhr) {
                                        xhr.setRequestHeader("ajax", true);
                                    },
                                    complete: function () { }
                                };
                                $.ajax(option);
                            };

                            var afterDelete = function ($this) {
                                var resetId = function ($this) {
                                    var thisId = $this.attr('id');
                                    $this.remove();
                                    cleanProdList = prodList.filter(function (item) {
                                        return item.id !== controlNumber.onlyNumber(thisId);
                                    })
                                    prodList = cleanProdList;
                                    $.each(prodList, function (i, item) {
                                        item.id = (i + 1);
                                    })
                                };
                                resetId($this);
                                settingCookie.saveCookie(prodList);
                                initCookieHTML();
                            };
                            var settingCookie = { //쿠키 설정
                                saveCookie: function (arr) {
                                    $.cookie(cookieName, JSON.stringify(arr), { expires: 7, path: '/' });
                                    savedLength = prodList.length;
                                },
                                loadProd: function () {
                                    if ($.cookie(cookieName) !== undefined) {
                                        var choiceList = JSON.parse($.cookie(cookieName));
                                        return choiceList;
                                    }
                                },
                                makeProd: function (gubun, val1, val2, fal1, fal2, pkgnm, type, model, panelData, totalPrice, url, opt1, opt2) {   // 2020-06-24 패키지  옵션
                                	if (gubun == "2") {
                                        var newId = prodList.length + 1;
                                        var listObj = {
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
                                            pkg1: val1, pkg2: val2, fil1: fal1, fil2: fal2,
                                            pkgnm: pkgnm,
                                            opt1: opt1,
                                            opt2: opt2
                                        }
                                        prodList.push(listObj);
                                        this.saveCookie(prodList);
                                        savedLength = prodList;
                                    } else {
                                        var save2List = [];
                                        var listObj = {
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
                                            pkg1: val1, pkg2: val2, fil1: fal1, fil2: fal2,
                                            pkgnm: pkgnm,
                                            opt1: opt1,
                                            opt2: opt2
                                        }
                                        save2List.push(listObj);
                                        this.saveCookie(save2List);
                                    }
                                },
                                deleteDB: function ($this, caseType) {
                                    popup.confirm_(1, '선택한 제품을 내가 만든 BESPOKE 목록에서<br/>삭제 하시겠습니까?', function () { afterDBDelete($this); })
                                },
                                deleteProd: function ($this, caseType) {
                                    var cleanProdList;
                                    if (caseType === 'last') {
                                        afterDelete($this);
                                    } else {
                                        popup.confirm_(1, '선택한 제품을 내가 만든 BESPOKE 목록에서<br/>삭제 하시겠습니까?', function () { afterDelete($this); })
                                    }
                                }
                            }
                            var pushProd2List = function () {
                                var that = this;

                                var params = {
                                    'storeCd': 'sec'
                                };

                                var option = {
                                    // 200605 - data 제품( stg , 운영)
                                    url: '/sec/xhr/bespoke/myModelInfoAjax',
                                    dataType: 'json',
                                    jsonpCallback: "jsonpcallback_bespoke",
                                    type: 'POST',
                                    data: params,
                                    success: function (rtnjson) {
                                        rtnjson.result =  rtnjson.myModelInfo; // [2020-09-07]
                                        if (rtnjson.result.length > 0) {
                                            var prod2List = [];
                                            $.each(rtnjson.result, function (cnt, item) {
                                                var prod1 = item.panelMdlInfo.split('|');
                                                var prod2 = item.panelClrInfo.split('|');
												if(item.panelPriceInfo){
													var prod3 = item.panelPriceInfo.split('|');
												}else{
                                                	var prod3 = [];
                                                }
												if(item.panelRgbCode){
													var prod4 = item.panelRgbCode.split('|');
												}else{
													var prod4 = [];
                                                }
												 
                                                var panel2List = [],pkg1="",pkg2="",
                                                    fil1="",
                                                    fil2="",
                                                    opt1="",
                                                    opt2="",
                                                    pnallprice = 0,pkgNm="";
                                                for (i = 0; i < prod1.length; i++) {
                                                    var panel2Data = {
                                                        'code'      : prod1[i],
                                                        'color'     : prod2[i],
                                                        'panelprice': prod3[i] || 0,
                                                        'rgbCode'   : prod4[i]
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

                                                if(item.pkgList !=undefined){
                                                    var cnt = 0;
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
                                                    'id'   : item.userSeq,
                                                    'name' : item.prdMdl,
                                                    'type' : item.dataType,
                                                    'panel': panel2List,
                                                    'price': totalprice,
                                                    'url'  : item.url,
                                                    'selcc': item.colorCd,
                                                    'pkg1' : pkg1,
                                                    'pkg2' : pkg2,
                                                    'fil1' : fil1,
                                                    'fil2' : fil2,
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
                                    error: function (response, status, error) {
                                        alert('myModelInfoAjax.오류');
                                    },
                                    beforeSend: function (xhr) {
                                        xhr.setRequestHeader('ajax', true);
                                    },
                                    complete: function () { }
                                };
                                $.ajax(option);
                            };
                            var checkCookie = function () {
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
                            var check1Door = function (type) {
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
                                    case '6door':           // 200602 - small img
                                        return '6door';
                                        break;
                                    case '5door':           // 200602 - small img
                                        return '5door';
                                        break;
                                    case '4door':
                                    case '4door_kf':
                                        return '4door';
                                        break;
                                    case '4door_chef':       // 4door_gold_pc
                                    case '4door_chef2':
                                    case '5door_chef':
                                    default:
                                        return type;
                                }
                            };
                            var letterModify = function(product){
                            	product = product.toString();
                            	var str = product.charAt(product.toString().length-1);
                    			if(str.indexOf("/") > -1){
                    				return product.substr(0, product.length-1);
                    			}else{
                    				return product;
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
                                    makeHTML: function () {
                                        $.each(data, function (i, item) {
                                            aType.push([]);
                                            var str1 = "inactive coming_soon";
                                            var str2 = '<div class="product-item_badge"><img src="//images.samsung.com/kdp/bespoke/images/v1/ico_presale.png"></div>';
                                            str1 = "";
                                            str2 = "";
                                            if (item.product.length !== 0) {
                                                var typeHTML = '<div class="module_type slider-item ' + str1 + '"><span class="dim_area"></span>' +
                                                    '<a href="javascript:;" data-type=' + item.dataType + ' data-dep="' + item.option.department + '" data-omni-type="microsite" data-omni="sec:bespoke:buy:step2:select doortype_' + item.dataType + '">' +
                                                    str2 + '<div class="product-item_img"><img src="' + sImgPath + 'v3/frame/thumb_' + check1Door(item.dataType) + '.png?$ORIGIN_PNG$"></div>' +
                                                    '<div class="product-item_txt">' +
                                                    '<strong>' + item.type + '</strong>' +
                                                    '<p>' + letterModify(item.subject) + '</p>' +
                                                    '</div>' +
                                                    '</a>' +
                                                    '</div>';
                                            }
                                            aType[i].push($(typeHTML).get(0));
                                        });
                                    },
                                    appendHTML: function () {
                                        $.each(aType, function (i, item) {
                                            $('.ref-module-list').append(aType[i]);
                                        })
                                    },
                                    act: function () {
                                        this.makeHTML();
                                        this.appendHTML();
                                    }
                                },
                                //step2 선택시 변경될 내용 모음
                                afterChoice: {
                                    saveModelData: function (self_) {
                                        var $this = this;
                                        modelData.type = self_.attr('data-type');
                                        modelData.dataType = data.filter(function (item) {
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
                                        makeHTML: function () {
                                        	
                                        	console.log(1);
                                            var self_ = this.selector,
                                                filterColor = data.filter(function (i, item) { return i.dataType === modelData.type })[0];
                                            //var hasColorList = filterColor.option.list[sYear].filter(function (item) { return item.color.length > 0; });
                                            /* 전체 데이터 중 자기와 맞는 휴형 정보 축소*/
                                            
                                            // 200713- 셰프 팝업
                                            var $colorchipToolBtn = $('.colorchip_tit .tooltip_btn');
											var $colorchipOption = $('.colorchip_tit2');
                                            if (aCHEFCL.indexOf(modelData.type) > -1) {
                                                $('.colorchip_tit span.cp_type').text('셰프컬렉션 전용');
                                                $colorchipToolBtn.find('span').text('셰프컬렉션 전용');
                                                $colorchipToolBtn.attr('data-href', '/sec/bespoke/buy/layer.html?tab=0');
                                                $colorchipToolBtn.attr('data-tab', '0');
                                                $colorchipToolBtn.attr('removeAttr');
                                                
												$colorchipOption.hide();
                                            }else{
                                            	console.log(2);
                                                $('.colorchip_tit span.cp_type').text('글램 글래스');
                                                $colorchipToolBtn.find('span').text('글램 글래스');
                                                $colorchipToolBtn.attr('data-href', '/sec/bespoke/buy/layer.html');
                                                $colorchipToolBtn.attr('data-tab', '1');
                                                $colorchipToolBtn.attr('data-slide', '2');

												$colorchipOption.show();
                                            }
                                            
                                            //컬러칩 색상 보이기 시작 S        
                                            //유형 F/P 일떄  hasColorList 변경
											var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                            if(department == 'F/P'){
                                            	console.log(3);
                                            	var searchParams = {
                                            			storeCd: 'sec',
                                              			panelTypeCd : $('#panelTypeCd').val(),
                                            			dataType :  modelData.type
                                            	};
                                            	
                                                $(sTABVIEW).find('.color_btn').attr('disabled', true);
                                                $(sTABVIEW).find('.my-edition-color_list li').hide();
                                            	
                                            	$.ajax({
                                                    url: "/sec/xhr/bespoke/getSingleSalePanelInfo",
                                                    dataType: 'json',
                                                    type: 'POST',
                                                    async: false,
                                                    data: searchParams,
                                                    jsonpCallback: "jsonpcallback_bespoke",
                                                    success: function (data) {
                                                    	
                                                    	//console.log(data);
                                                    	if(data.orgResult !=null){
                                                            $.each(data.orgResult, function (i, item) {
                                                                var colorEnName = item.clrEngNm;
                                                                var colorBtn = $('.color_btn[data-color=' + item.clrEngNm + ']');
                                                                colorBtn.removeAttr('disabled');
                                                                colorBtn.parent().show();
                                                                colorBtn.parent().css('display','list-item');

                                                                colorBtn.find('img').attr('src', item.clrChipUrl);
                                                                colorBtn.find('.color_txt').text(item.clrNm);
                                                            });
                        	          	  		    	}
                                                    },
                                                    error: function (xhr) {
                                                    }
                                                });
                                            }else{                     
                                            	console.log(4);
    											var hasColorList = filterColor.option.list["allYearColor"].filter(function(item) { console.log(5);return item.color.length > 0; });
    											console.log(hasColorList);
                                                var cleanArr = function () {
                                                    self_.aMaterialBtn = [];
                                                    self_.aFilteredMaterial = [];
                                                    self_.aFilteredColor.length = [];
                                                };

                                                cleanArr();
                                                colorBtnMix = [];
                                                $(sTABVIEW).find('.color_btn').attr('disabled', true);
                                                $(sTABVIEW).find('.my-edition-color_list li').hide();
                                                $.each(hasColorList, function (i, item) {
                                                    self_.aFilteredColor.push([]);
                                                    $.each(item.color, function (j, prod) {
                                                        var colorEnName = prod.name.en;
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
                                            }
											//컬러칩 색상 보이기 시작 E 
											
                                            jQuery('.colorchip_group, .colorchip_list.mo_only.tab').each(function (i, item) {
                                            	/* 컬러칩 개수 */
                                                var cnt     = jQuery(item).find('.my-edition-color_list').find("li[style*=list-item]").length;
                                                var dataGrp = jQuery(item).attr("data-group");
                                                
                                                if(dataGrp == "group1"){
                                                	jQuery('.' +dataGrp+' .my-edition-color_list').each(function (i){
                                                		i = i+1;
                                                		var k = jQuery(this).find("li[style*=list-item]").length;
                                                		if(k==0){
                                                			jQuery('[data-pcgroup="' + i + '"]').hide();
                                                		}else{
                                                			jQuery('[data-pcgroup="' + i + '"]').show();
                                                		}
                                                	});
                                                }else if(dataGrp == undefined || dataGrp ==''){
                                                	jQuery(' .my-edition-color_list.mo_only').each(function (i){
                                                		i = i+1;
                                                		var k = jQuery(this).find("li[style*=list-item]").length;
                                                		if(k==0){
                                                			jQuery('[data-pcgroup="' + i + '"]').hide();
                                                		}else{
                                                			jQuery('[data-pcgroup="' + i + '"]').show();
                                                		}
                                                	});
                                                }

                                                if (cnt > 0) {
                                                	jQuery('[data-group="' + dataGrp + '"]').css('display', 'inline-block');
                                                } else {
                                                	jQuery('[data-group="' + dataGrp + '"]').hide();
                                                }
                                            });
//                                             $('.colorchip_list.mo_only.tab > a:visible:eq(0)').trigger('click');
                                        },
                                        appendHtml: function () {
                                            var self_ = this.selector,
                                                sColorList = sMYEDITION + '-color_list';

                                            var tabBtn = function () {
                                                self_.$TABBTN.html('');
                                                $.each(self_.aMaterialBtn, function (i, item) {
                                                    self_.$TABBTN.append(item);
                                                })
                                            };
                                            var tabView = function () {
                                                $.each(self_.aFilteredColor, function (i, item) {
                                                    self_.$TABVIEW.contents().remove();
                                                    self_.$TABVIEW.append(self_.aFilteredMaterial)
                                                        .find('>li')
                                                        .eq(i)
                                                        .find(sColorList)
                                                        .html('')
                                                        .append(item);
                                                });
                                            };
                                        },
                                        reStyle: function () {
                                            var $el = this.selector.$TABBTN.find('li');
                                            $el.css('width', 'calc(100% / ' + $el.length + ')')
                                        },
                                        act: function () {
                                            this.makeHTML();
                                        }
                                    },

                                    gridModel: {
                                        selector: {
                                            choicedType: '',
                                            aModel: []
                                        },
                                        tableCase: function () {
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
                                                $table.find('.type8').removeClass('is_active');

                                            } else if (aKIMCHI.indexOf(modelData.type) > -1) {
                                                $table.find('.type3').addClass('is_active');
                                                $table.find('.type1').removeClass('is_active');
                                                $table.find('.type2').removeClass('is_active');
                                                $table.find('.type4').removeClass('is_active');
                                                $table.find('.type5').removeClass('is_active');
                                                $table.find('.type6').removeClass('is_active');
                                                $table.find('.type7').removeClass('is_active');
                                                $table.find('.type8').removeClass('is_active');
                                                
                                            } else if (aFAMILY.indexOf(modelData.type) > -1) {
                                                $table.find('.type5').addClass('is_active');
                                                $table.find('.type1').removeClass('is_active');
                                                $table.find('.type2').removeClass('is_active');
                                                $table.find('.type3').removeClass('is_active');
                                                $table.find('.type4').removeClass('is_active');
                                                $table.find('.type6').removeClass('is_active');
                                                $table.find('.type7').removeClass('is_active');
                                                $table.find('.type8').removeClass('is_active');

                                            } else if (aCHEFCL.indexOf(modelData.type) > -1) {
                                                $table.find('.type7').addClass('is_active');
                                                $table.find('.type1').removeClass('is_active');
                                                $table.find('.type2').removeClass('is_active');
                                                $table.find('.type3').removeClass('is_active');
                                                $table.find('.type4').removeClass('is_active');
                                                $table.find('.type5').removeClass('is_active');
                                                $table.find('.type6').removeClass('is_active');
                                                $table.find('.type8').removeClass('is_active');
                                                
                                            } else if (aDOORLENG4BAV.indexOf(modelData.type) > -1) {
                                                $table.find('.type8').addClass('is_active');
                                                $table.find('.type1').removeClass('is_active');
                                                $table.find('.type2').removeClass('is_active');
                                                $table.find('.type3').removeClass('is_active');
                                                $table.find('.type4').removeClass('is_active');
                                                $table.find('.type5').removeClass('is_active');
                                                $table.find('.type6').removeClass('is_active');
                                                $table.find('.type7').removeClass('is_active');

                                            }else {
                                                $table.find('.type6').addClass('is_active');
                                                $table.find('.type1').removeClass('is_active');
                                                $table.find('.type3').removeClass('is_active');
                                                $table.find('.type4').removeClass('is_active');
                                                $table.find('.type5').removeClass('is_active');
                                                $table.find('.type2').removeClass('is_active');
                                                $table.find('.type7').removeClass('is_active');
                                                $table.find('.type8').removeClass('is_active');
                                            }

                                            $('.my-edition-model-tbl.is_active').addClass('is_show');
                                            $('.my-edition-model-tbl.is_active tbody tr:first-child').css('background', "red");
                                        },
                                        makeHTML: function () {
                                            var self_ = this;
                                            this.selector.choicedType = data.filter(function (item) {
                                                return item.dataType === modelData.type;
                                            })[0];
                                            self_.selector.aModel = [];
                                            var door4FamilyFunc = function (item) {
                                                if (item !== undefined) {
                                                    var rtnHtml = "";
                                                    if (item.colorCd !== undefined) {
                                                    	var cc = item.colorCd;
                                                    	if(cc=="#000000"){
                                                    		cc="#ffffff";
                                                    	}
                                                        rtnHtml = '<td scope="col"><div class="tbl_color" style="background-color:' + cc + '"></div><span class="color_txt">' + item.etc + '</span></td>';
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
                                            var energyFunc = function (energy) {
                                                if (energy == "-등급") {
                                                    return '<td scope="col" class="empty_line"></td>';
                                                } else if (energy !== undefined) {
                                                    return '<td scope="col">' + energy + '</td>';
                                                } else {
                                                    return '<td scope="col" class="empty_line"></td>';
                                                }
                                            };
                                            var haveFunc = function (convenience) {
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
                                            this.selector.choicedType.product.sort(function (a, b) { return b.price - a.price; });

                                            var prdCnt = 0, prd2Cnt = 0, gubun = "", pakageObj = "", choicedPakage = "";
                                            aPakageArry = [];
                                            gubun = this.selector.choicedType.pkgType;
                                            if (gubun == "T") {
                                                choicedPakage = this.selector.choicedType.pakage;
                                            }
                                            $.each(this.selector.choicedType.product, function (i, item) {
                                                var type1, type3, type4, type5, type6, type7;

                                                if (mobileFlag) {
                                                    type1 = haveFunc(item.convenienceMo['빅아이스메이커']) + haveFunc(item.convenienceMo['이온살균청정기']) + haveFunc(item.convenienceMo['UV청정탈취']);
                                                    type3 = haveFunc(item.convenienceMo['메탈쿨링시스템']) + haveFunc(item.convenienceMo['김치통(상칸)']); //김치냉장고
                                                    type4 = haveFunc(item.convenienceMo['4단계맞춤보관실']) + haveFunc(item.convenienceMo['칸별3종수납세트']); //3도어
                                                    type5 = door4FamilyFunc(item) + haveFunc(item.convenienceMo['이온살균청정기']) + haveFunc(item.convenienceMo['UV청정탈취']); //패밀리허브
                                                    type6 = haveFunc(item.convenienceMo['메탈쿨링시스템']) + haveFunc(item.convenienceMo['UV청정탈취']);  //메탈쿨링/ UV 청정탈취
                                                    type7 = door4ChefFunc(item) + haveFunc(item.convenienceMo['오토필정수기']);   // 200714 - 프레임 컬러
                                                    /* 2021.03.05 */
                                                    var type8 = haveFunc(item.convenience['베버리지센터']) + haveFunc(item.convenience['이온살균청정기']) + haveFunc(item.convenience['UV청정탈취']);
                                                } else {
                                                    type1 = haveFunc(item.convenience['빅아이스메이커']) + haveFunc(item.convenience['이온살균청정기']) + haveFunc(item.convenience['UV청정탈취']);
                                                    type3 = haveFunc(item.convenience['메탈쿨링시스템']) + haveFunc(item.convenience['김치통(상칸)']); //김치냉장고
                                                    type4 = haveFunc(item.convenience['4단계맞춤보관실']) + haveFunc(item.convenience['칸별3종수납세트']); //3도어
                                                    type5 = door4FamilyFunc(item) + haveFunc(item.convenience['이온살균청정기']) + haveFunc(item.convenience['UV청정탈취']); //패밀리허브
                                                    type6 = haveFunc(item.convenience['메탈쿨링시스템']) + haveFunc(item.convenience['UV청정탈취']);  //메탈쿨링/ UV 청정탈취
                                                    type7 = door4ChefFunc(item) + haveFunc(item.convenience['오토필정수기']);   // 200714 - 프레임 컬러
                                                    /* 2021.03.05 */
                                                    var type8 = haveFunc(item.convenience['베버리지센터']) + haveFunc(item.convenience['이온살균청정기']) + haveFunc(item.convenience['UV청정탈취']);
                                                }
                                                var colcnt = "5";
                                                if (aDOORLENG4.indexOf(modelData.type) > -1) {
                                                    colcnt = "6";
                                                } else if (aDOORLENG4BAV.indexOf(modelData.type) > -1) {
                                                    colcnt = "6";
                                                } else if (aKIMCHI.indexOf(modelData.type) > -1) {
                                                    colcnt = "5";
                                                } else if (aFAMILY.indexOf(modelData.type) > -1) {
                                                    colcnt = "5";
                                                } else if (aCHEFCL.indexOf(modelData.type) > -1) {      // 200714 - 프레임 컬러
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
                                                var autoSumprice = [], packagePrice = "0";
                                                var sumPrice = 0;
                                                if (pakageObj != undefined) {
                                                    var kk = 0, vpkgDesc = "", show_act = "", autoSumYncnt = 0, autoSumCnt = 0, paclen = 0, chk_act = "";
                                                    if (prdCnt == 0) { show_act = "show"; }
                                                    $.each(pakageObj, function (i, itemGrpList) {
                                                        $.each(itemGrpList, function (k, itemGrp) {
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

                                                    var pacHTMLArry = [], pboxHTMLArry = [], pkgDescArry = [];
                                                    var packageHTML = "", pacboxHTML = "", gb_act = "", pkgDescHTML = "";
                                                    kk = 0;
                                                    $.each(pakageObj, function (i, itemGrpList) {
                                                        if (!(autoSumYncnt > 0 && kk == autoSumCnt)) {
                                                            //if(kk==0) {
                                                            var prd3Cnt = 0;
                                                            packageHTML = "";
                                                            pacboxHTML = "";
                                                            $.each(itemGrpList, function (k, itemGrp) {
                                                                if (prd3Cnt == 0) { chk_act = ""; }
                                                                // 2020-06-24 패키지 오류 수정
                                                                if (k == 0 && kk == 0) {
                                                                    packagePrice = itemGrp.price;
                                                                    //p1pkgMdl = itemGrp.pkgMdl;
                                                                    aPakageArry.push(prd2Cnt);
                                                                }
                                                                pkgDescArry.push(itemGrp.pkgDesc);  // 200624 - 패키지 오류 수정
                                                                p1pkgMdl = itemGrp.pkgMdl;

                                                                sumPrice = 0;
                                                                $.each(autoSumprice, function(i, v) {
                                                                    sumPrice += v;
                                                                });

                                                                // 2020-06-24 패키지 오류 수정
                                                                // 2020-06-24 패키지  오토필 캐틀 구분
                                                                if (p1pkgMdl =="RA-A00AUUAA") {

                                                                    packageHTML = packageHTML + '<li><input type="radio" name="package' + prdCnt + '1" id="package' + prd2Cnt + '" ' +
                                                                        'value="' + prd3Cnt + ';' + prdCnt + ';' + kk + ';' + p1pkgMdl + ';' + itemGrp.price + ';' + itemGrp.pkgNm + '" class="model_rdobox" ' + chk_act + '>' +
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

                                                            $.each(itemGrpList[0].pkgOptList, function (i, itemList) {
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
                                                        model2HTML = model2HTML + '<div class="package_box type7_slick">' + pboxHTMLArry[z] + '</div>';  // 200624 - 패키지 슬라이드


                                                        model2HTML = model2HTML + '</div>';  // package_area

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
                                                        model2HTML = model2HTML + '</div>';  //  package_content

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

                                                    model2HTML = model2HTML + '<div class=package_content>';    // 2020-06-24 패키지  옵션
                                                    model2HTML = model2HTML + '<div class=package_area>';
                                                    model2HTML = model2HTML + '<div class=package_box></div>';
                                                    model2HTML = model2HTML + '<ul class=package_noti></ul>';
                                                    model2HTML = model2HTML + '</div></div></div></td></tr>';
                                                }

                                                var model1HTML =
                                                    '<tr class="model_list">' +
                                                    '<td scope="col">' +
                                                    '<input type="radio" name="model" id="model' + prdCnt + '" value="' + prdCnt + '" class="model_rdobox" data-url="' + item.url + '" data-type="' + item.dataType + '" data-year="' + item.relYear + '" data-omni-type="microsite" data-omni="sec:bespoke:buy:step3:select model_' + item.modelName + '">' +
                                                    '<label for="model' + prdCnt + '">' + item.modelName + '</label></td>' +
                                                    energyFunc(item.energy) +
                                                    (function () {
                                                        if (aDOORLENG4.indexOf(modelData.type) > -1) {
                                                            return type1;
                                                        } else if (aDOORLENG4BAV.indexOf(modelData.type) > -1) {
                                                            return type8;
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
                                                    '<td scope="col">' + controlNumber.numberWithCommas(parseInt(item.price)+ parseInt(sumPrice)) + '원</td>' +
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
                                                //20210427 프리 패널 선택시 가격 정보 0으로 표시
                                                var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                                if(department == 'F/P'){	//프리 패널 선택시
                                                	oTotalPrice[i] = parseInt(0); //본체+필터+패키지
                                                    aTotalPrice[i] = parseInt(0); //본체+필터+패키지
                                                }else{
                                                	oTotalPrice[i] = parseInt(item.price) + parseInt(sumPrice) + parseInt(packagePrice); //본체+필터+패키지
                                                    aTotalPrice[i] = parseInt(item.price) + parseInt(sumPrice) + parseInt(packagePrice); //본체+필터+패키지	
                                                }
                                                
                                                aD4FamColor[i] = item.colorCd;
                                                aDmodelName[i] = item.modelName;
                                                aGoodsPath[i] = item.goodsPath;
                                                prdCnt++;
                                            });//모델,수납공간..end
                                        },
                                        appendHtml: function () {
                                            $('.my-edition_tab-desc').addClass('is_show').show();
                                            $('.my-edition-model-tbl.is_active').siblings().removeClass('is_show');
                                            $(sTABLE).find('tbody').html('');
                                            $(sSTEP03 + ' .my-edition-model-tbl.is_active table').eq(0).find('tbody').append(this.selector.aModel);


                                            //내부 수납공간 클릭
                                            $.each(aPakageArry, function (k, page) {
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
                                            for (i = 0; i < mcnt; i++) {
                                                if (i != 0) { $(".my-edition-model-tbl .model_list").eq(i).removeClass('hide'); }
                                            }

                                            /*본체 선택시 나오는 가격표 */
                                            var totalPrice = "" + aTotalPrice[0];
                                            
                                            $('.total_price').html('');
                                            $('.total_price').html('<em>' + controlNumber.numberWithCommas(totalPrice) + '</em>원');
                                            $('.my-edition-making_model').text(aDmodelName[0]);
                                            $('.my-edition-making_link').attr("href", '/sec/' + aGoodsPath[0] );  // 2020-06-01   해당제품 상세페이지로 이동


                                            if (aFAMILY.indexOf(modelData.type) > -1) {
                                                door4_fam_col = aD4FamColor[0];
                                            }

                                            if (aCHEFCL.indexOf(modelData.type) > -1) {
                                                door4_fam_col = aD4FamColor[0];
                                            }

                                            setTimeout(packageOption, 1000);  // 200722 - 과부하 현상

                                            // $( "input[value*='오토필 케틀']").prop('checked', true).attr('checked', true);   // 200624 - 옵션 : 오토필 케틀
                                            $( "input[value*='오토필 케틀']").parent().parent().next().addClass('data_hidden');  // 200624 - 옵션 : 오토필 케틀
                                            $( "input[value*='오토필 케틀']").parent().parent().addClass('data_hidden');// 200624 - 옵션 : 오토필 케틀
                                            $(" input[value*='오토필 케틀']").trigger('click');
                                        },
                                        act: function () {
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
                                        changeModel: function () {
                                            $('.my-edition-making-ref').removeClass('door_selecting');
                                            var el = $('.my-edition-making-ref[data-type=' + check1Door(modelData.type) + ']');
                                            el.addClass(sACTIVE).siblings().removeClass(sACTIVE);
                                            if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
                                                if (door4_fam_col != undefined) { //door4_fam_col.length>0
                                                    el.find('img').attr('src', '//images.samsung.com/kdp/bespoke/images/v3/frame/4door_family_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
                                                }
                                                el.find('.door_btn').eq(1).find('strong').hide();
                                            }

                                            if (aCHEFCL.indexOf(modelData.type) > -1) { //aCHEFCL       //  셰프 frame-200605
                                                if (door4_fam_col != undefined) {
                                                    if(modelData.type =="5door_chef"){
                                                        el.find('img').attr('src', '//images.samsung.com/kdp/bespoke/images/v3/frame/5door_chef_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
                                                    }
                                                    if(modelData.type =="4door_chef"){
                                                        el.find('img').attr('src', '//images.samsung.com/kdp/bespoke/images/v3/frame/4door_chef_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
                                                    }
                                                }
                                            }

                                            window.setTimeout(function () { el.find('button').eq(0).addClass(sACTIVE); }, 500);
                                        },
                                        setDoorFamily: function () {
                                        },
                                        act: function () {
                                            this.changeModel();
                                        }
                                    },
                                    act: function (e, $el, time) {
                                        e.preventDefault();
                                        var $el = $el || $(this)
                                        choiceModel.afterChoice.saveModelData($el);

                                        choiceModel.afterChoice.gridModel.act();
                                        choiceModel.afterChoice.gridColor.act();
                                        choiceModel.afterChoice.gridRef.act();
                                    }
                                }
                            }
                            // Step 1 선택시
                            var choiceDep = {
                                selector: {
                                    aDepartmentedModel: []
                                },
                                cleanArr: function () {
                                    this.selector.aDepartmentedModel = [];
                                },
                                checkDep: function ($el) {
                                    var self_ = this;

                                    this.cleanArr();

                                    aType = [];
                                    choiceModel.init.act();

                                    if ($el === undefined) {
                                        self_.selector.aDepartmentedModel = aType;
                                    } else {
                                        var department = $el.attr('data-dep');

                                        //20210503 추가 
                                        var stepLength = $('.my-edition-step_tit');
                                        //$('.my-edition_btn.save_btn').hide();	
                                        if(department == 'F/P'){
                                        	$('.my-edition-making-step-box.step-box_year').show();
                                        	$('.my-edition-making-step-box.step-box_function').hide();
                                        	$('.my-edition_btn.save_btn').hide();	
                                        	jQuery('.my-edition-btn-area').addClass('type2');
                                        	
                                			stepLength.eq(2).find('img.pc_only').attr('src', '//images.samsung.com/kdp/bespoke/images/v1/pc_txt_step03.png');
                                			stepLength.eq(2).find('img.mo_only').attr('src', '//images.samsung.com/kdp/bespoke/images/v1/mo_txt_step03.png');
                                			$('#changeTitle').html('우리집 냉장고 유형 고르기');
                                        	
                                        }else{
                                        	$('.my-edition-making-step-box.step-box_year').hide();
                                        	$('.my-edition-making-step-box.step-box_function').show();
                                        	$('.my-edition_btn.save_btn').show();
                                        	jQuery('.my-edition-btn-area').removeClass('type2');
                                        	
                                            $('.years-tabs-option li').removeClass('on').removeClass('active');
                                        	
                                			stepLength.eq(2).find('img.pc_only').attr('src', '//images.samsung.com/kdp/bespoke/images/v1/pc_txt_step02.png');
                                			stepLength.eq(2).find('img.mo_only').attr('src', '//images.samsung.com/kdp/bespoke/images/v1/mo_txt_step02.png');
                                			$('#changeTitle').html('원하는 제품 고르기');
                                        }
                                        
                                        $.each(aType, function(i, item) {
                                        	if ($(aType[i]).find('a').attr('data-dep') === department) {
                                                self_.selector.aDepartmentedModel.push($(this));
                                            }
                                        })
                                    }
                                },
                                changeList: function () {
                                    var self_ = this;

                                    $('.ref-module-list .slider-item').remove();
                                    $.each(this.selector.aDepartmentedModel, function (i, item) {
                                        $('.ref-module-list').append(item);
                                    })
                                },
                                resetChoice: function () {
                                    $('.my-edition-model-tbl').removeClass('is_show');
                                    $('.years-tabs-area').removeClass('is_show');
                                    $('.my-edition-step_cont').removeClass('is_show');
                                    $('.step-box_total').removeClass('is_show');//200211 추가
                                    
                                    //20210430 색상 Orginal 로 변경 및 hide()
                                    $('.bespoke-color-chip').hide();
                                    $('.bespoke-color-tab > li').removeClass('on');
                                    $('.bespoke-color-tab > li').eq(0).addClass('on');
                            		// 내용
                            		$('.bespoke-color').removeClass('on');
                            		$('.bespoke-color').eq(0).addClass('on');

                                    
                                    $(sTABLE).find('tbody').html('');
                                },
                                act: function ($el) {
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
                            //20210511 냉장고 상세정보 F/P일때 분기
                            var changeContent = function ($this) {
                                var dataType = $($this).attr('data-type');
                                var filteredType = data.filter(function (type) {
                                    return type.dataType === dataType;
                                })[0];
                                $(sVOLUME).show().find('span').each(function (i) {
                                    $(this).text(controlNumber.numberWithCommas(filteredType.volume[i]));
                                });
                                $('.my-edition-making_name').text(filteredType.type);
                                $("#vliter").text("용량 : " + filteredType.liter + "L");
                                $('.my-edition-making_subject').text(filteredType.subject);
                            };
                            //스탭별 클릭시 실행할 내용

                            var gridStep = function () {
                                choiceModel.init.act();
                                slickAct.act('init');

                                $(sSTEP01).find('.my-edition-step_cont .type-select_btn').click(function (e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    var $self = $(this);
                                    datadep = $self.attr('data-dep');
                                    var common = function () {
                                        moveNextStep($self);
                                        reset.act();
                                        choiceDep.act($self);
                                        $self.addClass(sACTIVE).removeClass(sINACTIVE).parents('.my-edition-cont-inner').siblings().find('.type-select_btn').removeClass(sACTIVE).addClass(sINACTIVE); // 20190624 수정, 20190620 추가
                                        // 200605 - 4door 리셋
                                        var $frameInit4door = $('.my-edition-making-ref[data-type="4door"]');
                                        $frameInit4door.find('img').attr('src', '//images.samsung.com/kdp/bespoke/images/v3/frame/4door.png?$ORIGIN_PNG$');

                                    }
                                    
                                	$('#panelTypeCd').val("AS");
                                	if($('.years-tabs-option li').hasClass('on')){
                                		stepAlert('prev', $('.step-box_year'), 'li', function () { }, function () { }, common);	
                                	}else{
                                		stepAlert('prev', $('.step-box_module'), 'a', function () { }, function () { }, common);	
                                	}	
                                });

                                $('.step-box_year .years-tabs-option li').on('click', function(){
                                	$('.ref-module-list.default').empty();
                                	$('.module_type.slider-item').removeClass('active').removeClass('inactive');
                                    var $self = $(this);
                                    var dataYear = $self.attr('data-year');
                                    $('#dataYear').val(dataYear);
                                    $('.years-tabs-option li').removeClass('on').removeClass('active');
                                    $self.addClass('on').addClass('active');
                                    
                                    if($('.my-edition-cont-inner').find('.active').attr("data-dep") == 'F/P'){
                                        if(dataYear == '2019'){
                                        	$('#panelTypeCd').val('SI19');
                                        }else if(dataYear == '2020'){
                                        	$('#panelTypeCd').val('SI20');
                                        }
                                    	
                                        for(var l=0; l<aType.length; l++){
                                        	$(aType[l]).removeClass('active').removeClass('inactive');
                                        	if($(aType[l]).find('a').attr('data-dep') != 'C/C'){
                                           		var product = data[l].product;
    											var cnt = 0;
    											var item = new Array();
                                           		for(var k=0; k<product.length; k++){
													if(dataYear == '2019'){
														if(product[k].dataType != '3door'){
                                       	 					item.push($(aType[l]));
															cnt++;
														}
													}else if(dataYear == '2020'){
// 														if(product[k].dataType >= dataYear){
// 															item.push($(aType[l]));
// 															cnt++;                                              			
// 														}
														item.push($(aType[l]));
														cnt++;
													}
                                           		}
                                           		//유형 표시
                                           		if(cnt>0){
                                           			$('.ref-module-list').append(item);
                                           		}
                                        	}                                    		
                                    	}
                                        moveNextStep($self);
									}
                                });
                                
                                $(document).on('click', '.ref-module-list .slider-item a', function (e) {
                                    e.preventDefault();
                                    var $self = $(this);
                                    var dataType = $self.attr('data-type');
                                    var filteredType = data.filter(function (type) { return type.dataType == dataType; })[0];
                                    var common = function () {
                                        moveNextStep($self);
                                        //20210511 분기 F/P 는 냉장고 상세정보대신 컬러칩 관련 정보를 띄운다.
                                        toggleView.showModel.show();
                                        changeContent($self);	
                                        changeClass($self, '.module_type', '.module_type');
                                        reset.act('tab');
                                        choiceModel.afterChoice.act(e, $self);
                                        
                                      //20210430 냉장고 유형선택시 칩보여주기
                                       $('.bespoke-color-chip').show();
                                      
                                       var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                       
                                      if(department =="F/P"){
	                                       $('#panelTypeCd').val($('.years-tabs-option').find('li.active').data("seltype"));
                                      }
                                      //추후 오리지날도 단품선택가능하면 지울것 S
//                                     if(department == 'F/P'){		
//                                        $('.bespoke-color-tab > li').removeClass('on');
//                                        $('.bespoke-color-tab > li').eq(1).addClass('on');
//                                         
//                                   	  	$('.bespoke-color').removeClass('on');
//                             			$('.bespoke-color').eq(1).addClass('on');
//                                     }
                                   //추후 오리지날도 단품선택가능하면 지울것 E
                                      
                                    }
                                    if (stepAlert('next', $(sSTEP01), '.type-select_btn')) return false;
                                    if ($('.color_btn.' + sACTIVE).length > 0) {
                                        stepAlert('prev', $('.step-box_color'), 'button', function () { flag = false }, function () { }, common)
                                    } else {
                                        common();
                                        flag = true;
                                    }
                                    if (flag) {
                                        stepAlert('prev', $('.step-box_color'), 'button', function () { flag = false; }, function () { }, common)
                                    }
                                });
                                //년도별 탭선택
                                $('.my-edition-model-tabs a').on('click', function (e) {
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
                                $('.my-edition-making-step-box').off('click').on('click', '.package_ch input[type=radio]', function (e) {
                                    if( $('.type7_slick').hasClass('slick-initialized') ){  // 200624 - 패키지 슬라이드
                                        $('.type7_slick').slick('unslick');  // 200624 - 패키지 슬라이드

                                        var choicedType = data.filter(function (item) { return item.dataType == modelData.type; })[0];

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
                                            var kk = 0, vpkgDesc = "", pgprice = 0, frprice = 0;
                                            var grpidx = chk2Cnt;
                                            $.each(pakageObj, function (i, itemGrpList) {
                                                $.each(itemGrpList, function (k, itemGrp) {
                                                    if (k == 0 && kk == 0) { frprice = itemGrp.price; }
                                                });

                                                if (kk == grpidx) {
                                                    $.each(itemGrpList, function (k, itemGrp) {
                                                        if (k == 0 && kk == 0) { frprice = itemGrp.price; }
                                                        if (chk0Cnt == k) {
                                                            vpkgDesc = itemGrp.pkgDesc;
                                                            pgprice  = itemGrp.price;
                                                            p1pkgMdl = itemGrp.pkgMdl;
                                                        }
                                                    });
                                                }
                                                kk++;
                                            });
                                            if(curprice=="0"){
                                                oTotalPrice[selidx] = oTotalPrice[selidx] - parseInt(frprice);
                                            }else{
                                                oTotalPrice[selidx] = oTotalPrice[selidx] - parseInt(curprice);
                                            }
                                            var gb_act = "", pboxidx = 0;
                                            kk = 0;
                                            pboxidx = parseInt(selidx) + parseInt(grpidx);

                                            var __show_el = $(this).closest('.show');
                                            $(sSTEP03 + ' .package_box').eq(pboxidx).html('');
                                            $(sSTEP03 + ' .package_noti').eq(pboxidx).html('');
                                            $(sSTEP03 + ' .package_noti').eq(pboxidx).append('<li><span>' + vpkgDesc + '</span></li>');   // 200624

                                            $.each(pakageObj, function (i, itemGrpList) {

                                                if (kk == grpidx) {
                                                    $.each(itemGrpList[chk0Cnt].pkgOptList, function (i, itemList) {
                                                        __show_el.find('.package_box').html('').append('<div ' + gb_act + '><img src="' + itemList.imgUrl + '"></div>');
                                                        __show_el.find('.package_noti').html('').append('<li><span>' + vpkgDesc + '</span></li>');
                                                    });
                                                }
                                                kk++;
                                            });
                                            curprice=pgprice;
                                            oTotalPrice[selidx] = oTotalPrice[selidx] + parseInt(pgprice);
                                            var totalPrice = "" + aTotalPrice[selidx]; //본체+필터+패키지
                                            if (totalPrice == "undefined") totalPrice = "0";
                                            /* 내부 전문 수납공간 선택시 가격 작성*/
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

                                        var selidx = $(sTABLE).find('input[name=model]:checked').val();
                                        $(sTABLE).find('tbody tr.show').find('.package_ch').each(function(i) {
                                            var pacChk = $(sTABLE).find('input[name=package' + (selidx + i) +']').eq(0).trigger('click');
                                            // var pacChk2 = $(sTABLE).find('input[name=package' + selidx +']').eq(3).trigger('click');
                                            if (!pacChk.prop('checked')) {
                                                pacChk.prop('checked', true).attr('checked', true);
                                                // 2020-06-24 세프 패키지 선택 수정
                                                // pacChk2.prop('checked', true).attr('checked', true);
                                                // 2020-06-24 세프 패키지 선택 수정
                                            }
                                            $('.my-edition-making_model').text(aDmodelName[selidx]);
                                            $('.my-edition-making_link').attr("href", '/sec/' + aGoodsPath[selidx]); // 2020-06-01   자세히 보기
                                        });

                                        var totalPrice = "" + aTotalPrice[selidx];
                                        if (totalPrice == "undefined") totalPrice = "0";

                                        selectPrice = totalPrice; //선택한 제품조합 회원가
                                        selectidx = selidx;
										
                                        
                                        $('.total_price').html('');
                                        $('.total_price').html('<em>' + controlNumber.numberWithCommas(totalPrice) + '</em>원');

                                        if (aCHEFCL.indexOf(modelData.type) > -1) { //aCHEFCL
                                            door4_fam_col = aD4FamColor[selidx];
                                            var el = $('.my-edition-making-ref[data-type=' + check1Door(modelData.type) + ']');
                                            if (door4_fam_col != undefined) {
                                                if (modelData.type == "5door_chef") {
                                                    el.find('img').attr('src', '//images.samsung.com/kdp/bespoke/images/v3/frame/5door_chef_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
                                                }

                                                if (modelData.type == "4door_chef") {
                                                    el.find('img').attr('src', '//images.samsung.com/kdp/bespoke/images/v3/frame/4door_chef_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
                                                }
                                            }
                                        }
                                        packageOption(); // 200624 - 패키지 슬라이드
                                    }else{
                                        var selidx = $(sTABLE).find('input[name=model]:checked').val();   // 200814-모델코드
                                        $(sTABLE).find('tbody tr.show').find('.package_ch').each(function(i) {
                                            var pacChk = $(sTABLE).find('input[name=package' + (selidx + i) +']').eq(0).trigger('click');
                                            if (!pacChk.prop('checked')) {
                                                pacChk.prop('checked', true).attr('checked', true);
                                            }
                                            $('.my-edition-making_model').text(aDmodelName[selidx]);
                                            $('.my-edition-making_link').attr("href", '/sec/' + aGoodsPath[selidx]); // 2020-06-01   자세히 보기
                                        });
                                        
                                        if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
                                            door4_fam_col = aD4FamColor[selidx];
                                            var el = $('.my-edition-making-ref[data-type=' + check1Door(modelData.type) + ']');
                                            if (door4_fam_col != undefined) {
                                                el.find('img').attr('src', '//images.samsung.com/kdp/bespoke/images/v3/frame/4door_family_' + door4_fam_col.replace('#', '') + '.png?$ORIGIN_PNG$');
                                            }
                                        }
                                    }
                                });
                            };

                            //가격정보 컨트롤
                            var settingPrice = {
                                selector: {
                                    filteredType: function () {
                                        var type = data.filter(function (type) {
                                            return type.dataType === modelData.type;
                                        })[0];
                                        return type;
                                    }
                                },
                                changePrice: function () {
                                    var filteredType = this.selector.filteredType();
                                    /*선택된 모델명 순서 값*/
                                    var selidx = $(sTABLE).find('input[name=model]:checked').val();

                                    $(sTABLE).find(' tbody .model_list').each(function (i) {
                                        var modelName = $(this).find('td:first-child label').text();
                                        var filteredModel = filteredType.product.filter(function (model) {
                                        	return model.modelName === modelName; 
                                        })[0];
                                       
                                        //조건추가 판넬 가격 없을 때
                                        if(aPanelPrice.length == 0){
                                        	aTotalPrice[i] = parseInt(oTotalPrice[i]);
                                        }else{
                                        	aTotalPrice[i] = parseInt(oTotalPrice[i]) + controlNumber.getSumPrice(aPanelPrice);
                                        }
                                        
                                        //$(this).find('td:last-child').text(controlNumber.numberWithCommas(totalPrice) + '원'); //회원가 패널값 더하기 삭제
                                    })

                                    var totalPrice = "" + aTotalPrice[selidx];
                                    if(totalPrice =="undefined") totalPrice ="0";

                                    selectPrice = totalPrice; //선택한 제품조합 회원가
                                    /*컬러 선택시 제품 가격표시 */

                                    $('.total_price').html('');
                                    $('.total_price').html('<em>' + controlNumber.numberWithCommas(totalPrice) + '</em>원');
                                },
                                resetPrice: function () {
                                    var filteredType = this.selector.filteredType();
                                    aPanelPrice = [];
                                    aTotalPrice = [];
                                    totalPrice = 0;
                                    locTypeList = [];
									colorList = [];
									colorNameList = [];
									imgUrlList = [];

                                    $(sTABLE).find(' tbody .model_list').each(function () {
                                        var modelName = $(this).find('td:first-child label').text();
                                        var filteredModel = filteredType.product.filter(function (model) { return model.modelName === modelName; })[0];
                                        var modelPrice = controlNumber.numberWithCommas(parseInt(filteredModel.price));
                                        $(this).find('td:last-child').text(modelPrice + '원');
                                    })
                                },
                                freePanelPrice: function () {
                                    var department = jQuery(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                	//20210511 교체용 판넬일 경우 해당 부분에 맞게 판넬 상세정보 표시 (현재는 360만 이지만 나중에 original까지 포함)
                                	
                                	function priceToString(price) {
    									return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
									}
                                	
                                    if(department == 'F/P'){
                                    	jQuery('.bespoke-color-set').hide();
                                    	var loc = locTypeList.filter(function(item) {
                                        	  return item !== null && item !== undefined && item !== '';
                                        });
                                    	var app = aPanelPrice.filter(function(item) {
                                        	  return item !== null && item !== undefined && item !== '';
                                        });
                                    	var cnl = colorNameList.filter(function(item) {
                                        	  return item !== null && item !== undefined && item !== '';
                                        });
                                    	var cl = colorList.filter(function(item) {
                                        	  return item !== null && item !== undefined && item !== '';
                                        });
                                    	var iul = imgUrlList.filter(function(item) {
                                      	  return item !== null && item !== undefined && item !== '';
                                      }); 

                                    	$.each(loc, function(i){
                                    		jQuery('.bespoke-color-set').eq(i).show();
                                    		var lt = '';	//위치 이름
                                    		if(loc[i] == 'UL'){
                                    			lt = '상칸좌';
                                    		}else if(loc[i] == 'UR'){
                                    			lt = '상칸우';
                                    		}else if(loc[i] == 'BL'){
                                    			lt = '하칸좌';
                                    		}else if(loc[i] == 'BR'){
                                    			lt = '하칸우';
                                    		}else if(loc[i] == 'UU'){
                                    			if(jQuery('.ref-module-list .slider-item.active').find('a').attr('data-type').indexOf('1door') > -1){
                                    				lt = '한칸';
                                    			}else{
                                    				lt = '상칸';	
                                    			}
                                    		}else if(loc[i] == 'MM'){
                                    			lt = '중칸';
                                    		}else if(loc[i] == 'BB'){
                                    			lt = '하칸';
                                    		}

                                    		jQuery('.bespoke-color-set').find('.bc-info').eq(i).html(lt);									//위치 이름
                                    		jQuery('.bespoke-color-set').find('.bc-name').eq(i).html(cnl[i]);						//상품 이름
                                    		jQuery('.bespoke-color-set').find('.bc-cost').eq(i).html('<em>'+ priceToString(app[i]) +'</em> 원' );	//가격

											if(cl[i].indexOf('#') > -1) {		//색상 표시 - 컬러 ID(360 : 컬러코드 Ori : 모델명)
												//360컬러 백그라운드 컬러  
												jQuery('.bespoke-color-set').find('.bc-color').eq(i).css('background-image', '').css('background-size','').css('background-color', cl[i]);
											}else{
												//original 백그라운드 이미지
												jQuery('.bespoke-color-set').find('.bc-color').eq(i).css('background-color', '').css('background-size','100%').css('background-image', 'url(' +iul[i] + ')');
											}
                                    	});
                                    }
                                },
                            }

                            //냉장고 버튼(.door_btn) 누를시
                            var choiceColorBtn = function () {
                                var addActive = function () {
                                    $(document).on('click', sREF + ' ' + sBTN, function () {

                                        if ($(this).hasClass(sACTIVE)) {
                                            $(this).removeClass(sACTIVE)
                                        } else {
                                            changeClass($(this), sBTN);
                                        }
                                    });

                                    $('html').click(function (e) {
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

                                var changeColor = function () {
                                    var $COLORBTN = $(sSTEP04).find('.my-edition-color_list ' + sBTN); //200207 step03<->step04
                                    var filteredPanel;
                                    var isColorChipPrice=true; // 컬러칩가격계산여부 - 20201113
                                    var setDoorData = function ($active, colorData) {
                                        var i = $active.parent().index();
                                        var doorIdx = $active.parent().index() + 1;
                                        var filteredYearPanel = data.filter(function (panel) { return modelData.type === panel.dataType; })[0].panel;
                                        var doorDivYn         = data.filter(function (panel) { return modelData.type === panel.dataType; })[0].doorDivYn;
                                        
                                        //filteredPanel = filteredYearPanel[sYear];
										filteredPanel = filteredYearPanel["allYearColor"]
										
                                        if (aimgDOORLENG4.indexOf(modelData.type) > -1) {
                                            if (i < 2) {
                                                i = 0;
                                            } else {
                                                i = 1;
                                            }
                                        }
                                        else if (aimgKIMCHI.indexOf(modelData.type) > -1) {
                                            if (i < 2) {
                                                i = 0;
                                            } else {
                                                i = 1;
                                            }
                                        } else if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
                                            if (i < 2) {
                                                i = 0;
                                            } else {  //패밀리허브 i=3 ???
                                                i = 1;
                                            }
                                        } else {
                                            if (isLogin == "Y" && i == -1) {
                                                i = 0;  // 로그인후 $active.parent().index() -1 인경우 0으로 세팅.
                                            }
                                        }

                                        // 2021 김치 플러스 4도어 추가
                                        if (aimgKIMCHI.indexOf(modelData.type) > -1 && aimgKIMCHI_S.indexOf(cheakedModel) > -1) {
                                            if (doorIdx < 3) {
                                                sYear = "2020";
                                            } else {
                                                sYear = "2021";
                                            }
											filteredPanel = filteredYearPanel["allYearColor"]
                                        }

                                        if (doorDivYn=="Y") { i = $active.parent().index(); }

                                        motype = modelData.type;

                                        // 판넬 위치정보 S
                                        var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                        var doorLocation = $active.parent().index();
                                        
                                    	var rowCd = "U";
                                    	var colCd = "L";
                                    	
                                    	if(aimgDOORLENG4.indexOf(modelData.type) > -1){		//0,1,2,3
                                            if(doorLocation >1){
                                            	rowCd = 'B'; 
                                            	if((doorLocation % 2) ==1 ){
                                                 	colCd = 'R';
                                                 }
                                            }else{
                                            	if((doorLocation % 2) ==1 ){
                                                 	colCd = 'R';
                                                 }
                                            }
                                        }else if (aFAMILY.indexOf(modelData.type) > -1){ //0,1,2,3 단 1일 경우 무시
											colCd ="U";
                                       		if(doorLocation >1){
                                       			rowCd = 'B'; 
                                       			colCd = 'L';
                                       			if((doorLocation % 2) ==1 ){
                                                 	colCd = 'R';
                                                 }
                                            }else{
                                            	if((doorLocation % 2) ==1 ){
                                            		popup.confirm_(2, '냉장고의 도어를 선택해 주세요.');
                                                    return false;
                                                 }
                                            }
                                        }else if (aimgKIMCHI.indexOf(modelData.type) > -1){ //0,1,2,3
                                            if (doorLocation == 1) {
                                            	colCd = 'R';
                                            } else if (doorLocation == 2) {
                                            	rowCd = 'M'; 
                                            	colCd = 'M';
                                            } else if (doorLocation == 3) {
                                            	rowCd = 'B'; 
                                            	colCd = 'B';
                                            }
                                        	if(department == "F/P"){
                                        		if(doorLocation <= 1){
                                        			$('#panelTypeCd').val('SI19');
                                        		}else{
                                        			$('#panelTypeCd').val('SI20');
                                        		}
                                        	}
                                        }else if(modelData.type.indexOf('3door') > -1){// 0,1,2
                                            if (doorLocation == 0) {
                                            	rowCd = 'U';
                                            	colCd = 'U';
                                            } else if (doorLocation == 1) {
                                            	rowCd = 'M'; 
                                            	colCd = 'M';
                                            } else if (doorLocation == 2) {
                                            	rowCd = 'B'; 
                                            	colCd = 'B';
                                            }
                                        }else if(modelData.type.indexOf('2door') > -1){
                            				if(doorLocation === 0){
                            					colCd = "U";
                            				}else{
                            					rowCd = "B";
                            					colCd = "B";
                            				}
                            			}else if(modelData.type.indexOf('1door') > -1){
                            				colCd = "U"
                            			}//판넬 위치정보 E

                            			// 런던 분기 S
                        				// 2021.05.26 CHO, 런던 L,R은 좌 우측만 하단테이블에 보이도록 수정
                        				if((colorData=="london-L" && doorLocation % 2 == 1)||(colorData=="london-R" && doorLocation % 2 == 0)){
                        					popup.confirm_(2, '런던-L은 좌측 상칸, 런던-R은 우측 상칸에만 적용됩니다.');
                        					return false;
                        				}
                            			// 런던 분기 E
                            			
                                      	//20210511 추가 개발되면서 화면,데이터 전달에 필요값들 추가
										locTypeList[doorLocation] = rowCd+colCd;
                                        colorList[doorLocation] = colorData;
										
										//20210428 360, Orignal 분기 S
                                    	var searchParams = {
				                                rowCd : rowCd,
				                                colCd : colCd,
				                                label : $('.ref-module-list .slider-item.active').find('a').attr('data-dep'),
				                                dataType :  modelData.type,
				                                rgbColor: colorData,
 				                                panelTypeCd : $('#panelTypeCd').val(),
				                                orgYn : colorData.indexOf('#') > -1 ? "N" :"Y" 
				                        };
                                    	
                                        if(colorData.indexOf('#') > -1) { //여기다 ajax 작성 해서 360과 Original 과 분리                                        	
                                        	$.ajax({
                                                url: "/sec/xhr/bespoke/getPanelInfo",
                                                dataType: 'json',
                                                type: 'POST',
                                                async: false,
                                                data: searchParams,
                                                jsonpCallback: "jsonpcallback_bespoke",
                                                success: function (data) {
                                                	if(data.result !=null){
                                                		var rgbName = data.result.rgbName;
                    	          	  		    		var panelMdl = data.result.panelMdl;
                    	          	  		    		var price;
                    	          	  		    		if(data.result.price != null || data.result.price != undefined){
                        	          	  		    		price = data.result.price;
                    	          	  		    		}else{
                    	          	  		    			price = parseInt(0); 
                    	          	  		    		}

                    	          	  		    		// 냉장고 360컬러 색상 변경
                                                        $active.attr({'data-img': panelMdl, 'data-price': price }).css('background-color', colorData).css('background-image','').addClass('light');
                                                    	aPanelPrice[doorLocation] = parseInt(price);
                                                    	$active.find('strong').hide();
                    	          	  		    	}else{
                    	          	  		    		console.log("제품없음");
                    	          	  		    		
                    	          	  		    		var price = parseInt(parseInt(0));
                    	          	  		    		$active.attr({'data-price': price }).css('background-color', colorData).css('background-image','').addClass('light');
                                                    	aPanelPrice[doorLocation] = price;
                                                    	$active.find('strong').hide();
                                                    	
                                                        // F/P 일때 해당칸 패널 정보 없애기 S
                                            			locTypeList[doorLocation] = '';
                										colorList[doorLocation] = '';
                										colorNameList[doorLocation] = '';
                										imgUrlList[doorLocation] = '';
                                                        // F/P 일때 해당칸 패널 정보 없애기 E
                    	          	  		    	}
                                                	settingPrice.changePrice();
                                                	settingPrice.freePanelPrice();
                                                },
                                                error: function (xhr) {
                                                }
                                            });
                                        }else{
											if(department == 'F/P'){
												//Original 로직 개편형(단품구입) 색상 입히기 S
												searchParams.storeCd = 'sec';
												
												$.ajax({
	                                                url: "/sec/xhr/bespoke/getPanelInfo",
	                                                dataType: 'json',
	                                                type: 'POST',
	                                                async: false,
	                                                data: searchParams,
	                                                jsonpCallback: "jsonpcallback_bespoke",
	                                                success: function (data) {
	                                                	if(data.result !=null){
	                    	          	  		    		var idx = $active.parent().index();
	                    	          	  		    		
	                                                		$active.attr({ 'data-img': data.result.panelMdl, 'data-price': data.result.price }).removeClass('light')
															.css('background-color', '').css('background-image', 'url(' + sImgPath + 'v3/door/' + (function () {
																if(data.result.price==""){
																	aPanelPrice[idx] = parseInt(0);
																}else{
																	aPanelPrice[idx] = parseInt(data.result.price);
																}

																$active.find('strong').hide();
																var rtnpanelCode = "";

																if (aimgDOORLENG4.indexOf(modelData.type) > -1) {
																	if (doorIdx % 2 === 0) {
																		rtnpanelCode = data.result.panelMdl + '_right';
																	} else {
																		rtnpanelCode = data.result.panelMdl + '_left';
																	}
																} else if (aFAMILY.indexOf(modelData.type) > -1) {
																	if (doorIdx % 2 === 0) {
																		rtnpanelCode = data.result.panelMdl + '_right';
																	} else {
																		rtnpanelCode = data.result.panelMdl + '_left';
																	}
																} else if (aimgKIMCHI.indexOf(modelData.type) > -1) {
																	if (doorIdx === 1) {
																		rtnpanelCode = data.result.panelMdl + '_left';

																	} else if (doorIdx === 2) {
																		rtnpanelCode = data.result.panelMdl + '_right';
																	} else if (doorIdx === 3) {
																		rtnpanelCode = data.result.panelMdl + '_middle';
																	} else if (doorIdx === 4) {
																		rtnpanelCode = data.result.panelMdl + '_bottom';
																	} else {
																		rtnpanelCode = data.result.panelMdl;
																	}
																} else {
																	rtnpanelCode = data.result.panelMdl;
																}// 190822 jasonpark 수정(0827) E

																rtnpanelCode = rtnpanelCode.toLowerCase();
																return rtnpanelCode;
															})() + '.png)');
	                    	          	  		    	}else{
															//단품이 없을시 어떻게 할껀지 생각
		                    	          	  		    	var alertData ={
		                                                            title : ""
		                                                            , content : "상품을 준비중입니다."
		                                                            , callBack : ""
		                                                            , btnText : "확인"
	                                                        };
	                                                        commonAlert(alertData);
	                                                        openLayer('commonAlert');
	                                                        
	                                                        // F/P 일때 해당칸 패널 정보 없애기 S
	                                                        locTypeList[doorLocation] = '';
	                										colorList[doorLocation] = '';
	                										colorNameList[doorLocation] = '';
	                										imgUrlList[doorLocation] = '';
	                                                        // F/P 일때 해당칸 패널 정보 없애기 E
	                                                        return false;
														}
	                                                	settingPrice.changePrice();
	                                                	settingPrice.freePanelPrice();
	                                                },
	                                                error: function (xhr) {
	                                                }
	                                            });
												//Original 로직 개편형(단품구입) 색상 입히기 E
											}else{
												//Original 로직
												var cnt = filteredPanel[i].length; // 20201113 추가
												var n = 0; // 20201113 추가

												$.each(filteredPanel[i], function (k, panelCode) {
													if (panelCode[colorData] !== undefined) {
														var idx = $active.parent().index();
														if (isLogin == "Y" && idx == -1) {
															idx = 0;  // 로그인후 $active.parent().index() -1 인경우 0으로 세팅.
														}

														$active.attr({ 'data-img': panelCode[colorData].panelCode, 'data-price': panelCode[colorData].price }).removeClass('light')
															.css('background-color', '').css('background-image', 'url(' + sImgPath + 'v3/door/' + (function () { // 로컬작업경로 수정 : v3/door/ > door/
																if(panelCode[colorData].price==""){
																	aPanelPrice[idx] = parseInt(0);
																}else{
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
																}// 190822 jasonpark 수정(0827) E

																rtnpanelCode = rtnpanelCode.toLowerCase();
																return rtnpanelCode;
															})() + '.png?$ORIGIN_PNG$)');

														return false;
													}
													n = n+1; // 20201113 추가
												});
												
												// 20201113 추가 S
												if(cnt == n) {
													isColorChipPrice=false; // 컬러칩가격계산여부
													var colorText = '';
													var locText = '';
													var idx = 0;
													for(j=0; j<filteredPanel.length; j++) {
														$.each(filteredPanel[j], function (k, panelCode) {
															if (panelCode[colorData] !== undefined) {
																if(locText != '') {
																	locText = locText + ", ";
																}
																locText = locText + getPositionText(panelCode[colorData].rowCode);
																colorText = panelCode[colorData].clrNm;
															}
														});
													}
													var alertData ={
														title : "info"
														, content : colorText+" "+locText+" 전용 컬러입니다.<br/>다른 컬러를 골라 보세요!"
														, callBack : ""
														, btnText : "확인"
													};
													commonAlert(alertData);
													openLayer('commonAlert');
													return false;
												}  else {
													isColorChipPrice=true; // 컬러칩가격계산여부
												}// 20201113 추가 E
                                            	settingPrice.changePrice();
											}
                                        }//20210428 360, Orignal 분기 E
                                    };

                                	//20210504 컬러탭 선택 
                                	$('.bespoke-color-tab > li > a').off('click').on('click', function(e){
                                		//todo 조건 냉장고에 값이 있을경우 알럿창을 띄우고 냉장고 초기화
                                		e.preventDefault();
                                		var selTapBtn = $(this);
                                		var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                		
                                		if(department == 'C/C'){
                                			popup.confirm_(2, '셰프컬렉션에서는 Prism 360 컬러를 선택 할 수 없습니다.')
                                		}else{
                                			if($('#panelTypeCd').val() == "AS"){
                                    			if($(sREF).find(sBTN + '[data-img]').length > 0 || $(sREF).find(sBTN + '[data-color]').length > 0){
                                    				//todo 색상 변경 관련해서 팝업
                                    				tab.reset_color(selTapBtn);
                                    			}else{
                                        			var index = $(this).parent('li').index();
                                        			// 나
                                        			$('.bespoke-color-tab > li').removeClass('on');
                                        			$(this).parent('li').addClass('on');

                                        			// 내용
                                        			$('.bespoke-color').removeClass('on');
                                        			$('.bespoke-color').eq(index).addClass('on');
                                    			}
                                    		}else{
                                    			var index = $(this).parent('li').index();
                                    			// 나
                                    			$('.bespoke-color-tab > li').removeClass('on');
                                    			$(this).parent('li').addClass('on');

                                    			// 내용
                                    			$('.bespoke-color').removeClass('on');
                                    			$('.bespoke-color').eq(index).addClass('on');
                                    		}
                                		}
                                	});
                                    
                                    // 20190826 드래그앤 드롭 추가 s
                                    var __dragTarget = null,
                                        __this = null,
                                        __afterTouchTime = 0;

                                    $('.my-edition-color_list .color_btn, .palettes .color-img.sel').draggable_local({
                                        revert: true,
                                        placeholder: true,
                                        droptarget: '.door_btn',
                                        drop: function (event, droptarget) {
                                            __dragTarget = $(droptarget);
                                            __this = $(this);
                                            var eventSetInterval = setInterval(function () {
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

                                    $('.my-edition-color_list ' + sBTN + ', .palettes .color-img.sel').on("touchstart", function (e) {
                                        __afterTouchTime = e.timeStamp;
                                    });

                                    $('.my-edition-color_list ' + sBTN + ', .palettes .color-img.sel').on("touchend", function (e) {
                                        var __beforeTouchTime = e.timeStamp,
                                            __resultTime = parseInt(__beforeTouchTime - __afterTouchTime);

                                        if (__resultTime < 300) {
                                            $(e.currentTarget).trigger("click");
                                        }
                                    });
                                   
                                    //컬러탭의 컬러 선택시
                                    $(document).on('click', '.my-edition-color_list ' + sBTN, function () {
                                    	if (__dragTarget !== null) {
                                            __dragTarget.find("button").addClass("active").parent().siblings().find("button").removeClass("active");
                                        }

                                        var $activeBtn = $(sREF).find(sBTN + '.' + sACTIVE);
                                        var selectGroup = $(this).data('group'); //20190627 추가
                                        if($(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep') == "F/P"){
                                        	colorActiveGroup = false;	
                                        }else if ($(sREF).find(sBTN + ':visible').length == 1) {
                                            colorActiveGroup = false;
                                        }
                                        
                                        
                                        if (colorActiveGroup === false || colorActiveGroup === selectGroup) {
                                            //20190627 추가 E
                                            if (stepAlert('next', $('.step-box_module'), 'a')) return false;
                                            var pushColorName = function ($active, colorData, colorName) {
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

                                                imgUrlList[$activeBtn.parent().index()] = $(this).find('img').attr('src');
												colorNameList[$activeBtn.parent().index()] = colorText;

                                                if (vmixYn == "N") { //패널자동설정전 이미지삭제
                                                    $(sMODEL + ' li[data-type] .door_btn').find(sBTN).each(function (i) {
                                                        if (aFAMILY.indexOf(modelData.type) > -1) {
                                                            if (!(aFAMILYcnt.indexOf(i) > -1)) {
                                                                $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').css('background-color','').find('.color').text('');
                                                                $(this).find('strong').show();
                                                                $(this).removeClass(sACTIVE).removeClass('light');
                                                            }
                                                        } else {
                                                            $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').css('background-color','').find('.color').text('');
                                                            $(this).find('strong').show();
                                                            $(this).removeClass(sACTIVE).removeClass('light');
                                                        }
                                                    });
                                                }

                                                vmixYn = "Y";
                                                $.each(colorBtnMix, function (k, mixYn) {
                                                    if (colorAttr == mixYn.substr(1)) { vmixYn = mixYn.substr(0, 1); }
                                                });

                                                if (vmixYn == "N") { //패널 자동설정 //N -> 돌고
                                                    $(sREF).find(sBTN).each(function (i) {
                                                        if (aFAMILY.indexOf(modelData.type) > -1) {
                                                            if (i != 1) {
                                                                var pDoorBtn = $('.my-edition-making-ref[data-type="' + check1Door(modelData.type) + '"]').find('.door_btn').eq(i).find('.button');
                                                                pushColorName(pDoorBtn, colorAttr, colorText);
                                                                setDoorData(pDoorBtn, colorAttr);
                                                            }
                                                        } else {
                                                            var pDoorBtn = $('.my-edition-making-ref[data-type="' + check1Door(modelData.type) + '"]').find('.door_btn').eq(i).find('.button');
                                                            pushColorName(pDoorBtn, colorAttr, colorText);
                                                            setDoorData(pDoorBtn, colorAttr);
                                                        }
                                                    });
                                                } else {  //Y -> 단색
                                                }
                                                pushColorName($activeBtn, colorAttr, colorText);
                                                setDoorData($activeBtn, colorAttr);
//                                                 if(isColorChipPrice) {
//                                                     settingPrice.changePrice();
//                                                     settingPrice.freePanelPrice();
//                                                 }
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
                                            if ($(sREF).find(sBTN + ':visible').length == $(sREF).find(sBTN + '[data-img]').length) {
                                            }

                                        }else{
                                        	tab.reset($('.my-edition-color_list').eq(1).find('button'));	
                                        } 
                                    });
                                    
									//360 컬러 선택시
                                     $('#bezColorList .palettes .color-img.sel').off('click').on('click', function () {                                    	 
                                    	 
                                    	 if (__dragTarget !== null) {
                                            __dragTarget.find("button").addClass("active").parent().siblings().find("button").removeClass("active");
                                        }

                                        var $activeBtn = $(sREF).find(sBTN + '.' + sACTIVE);
                                        var selectGroup = $(this).data('group'); //20190627 추가
                                       
                                        
                                        if($(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep') == "F/P"){
                                        	colorActiveGroup = false;	
                                        }else if ($(sREF).find(sBTN + ':visible').length == 1) {
                                            colorActiveGroup = false;
                                        }
										
                                        if (colorActiveGroup === false || colorActiveGroup === selectGroup) {
                                            //20190627 추가 E
                                            if (stepAlert('next', $('.step-box_module'), 'a')) return false;
                                            var pushColorName = function ($active, colorData, colorName) {
                                                if ($active.find('.color').length === 0) 
                                                	$active.append('<span class="color"></span>')
                                                $active.attr(sDATACOLOR, colorData, colorName).find('.color').text(colorName);
                                            };
                                            
                                            //true
                                            if ($(sREF).find(sBTN).hasClass(sACTIVE)) {
                                                if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
                                                    if (2 == $activeBtn.parent().index() + 1) { //2번째 도어일경우 popup.confirm_(2, '냉장고의 도어를 선택해 주세요.');
                                                        return false;
                                                    }
                                                }

                                                var	rgbColor = $(this).css("background-color");
                                            	rgbColor = rgb2hex(rgbColor);
                                                
                                                var colorAttr = rgbColor,
                                                    colorText = $(this).parent().parent().find('p').text();

                                                imgUrlList[$activeBtn.parent().index()] = rgbColor;
												colorNameList[$activeBtn.parent().index()] = colorText;

                                                if (vmixYn == "N") { //패널자동설정전 이미지삭제
                                                    $(sMODEL + ' li[data-type] .door_btn').find(sBTN).each(function (i) {
                                                        if (aFAMILY.indexOf(modelData.type) > -1) {
                                                            if (!(aFAMILYcnt.indexOf(i) > -1)) {
                                                                $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').css('background-color', '').find('.color').text('');
                                                                $(this).find('strong').show();
                                                                $(this).removeClass(sACTIVE).removeClass('light');
                                                            }
                                                        } else {
                                                            $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').css('background-color', '').find('.color').text('');
                                                            $(this).find('strong').show();
                                                            $(this).removeClass(sACTIVE).removeClass('light');
                                                        }
                                                    });
                                                }

                                                vmixYn = "Y";
                                                $.each(colorBtnMix, function (k, mixYn) {
                                                    if (colorAttr == mixYn.substr(1)) { vmixYn = mixYn.substr(0, 1); }
                                                });

                                                if (vmixYn == "N") { //패널 자동설정 //N -> 돌고
                                                    $(sREF).find(sBTN).each(function (i) {
                                                        if (aFAMILY.indexOf(modelData.type) > -1) {
                                                            if (i != 1) {
                                                                var pDoorBtn = $('.my-edition-making-ref[data-type="' + check1Door(modelData.type) + '"]').find('.door_btn').eq(i).find('.button');
                                                                pushColorName(pDoorBtn, colorAttr, colorText);
                                                                setDoorData(pDoorBtn, colorAttr);
                                                            }
                                                        } else {
                                                            var pDoorBtn = $('.my-edition-making-ref[data-type="' + check1Door(modelData.type) + '"]').find('.door_btn').eq(i).find('.button');
                                                            pushColorName(pDoorBtn, colorAttr, colorText);
                                                            setDoorData(pDoorBtn, colorAttr);
                                                        }
                                                    });
                                                } else {  //Y -> 단색
                                                }
                                                
                                                pushColorName($activeBtn, colorAttr, colorText);
                                                setDoorData($activeBtn, colorAttr);
//                                                 if(isColorChipPrice) {
//                                                     settingPrice.changePrice();
//                                                     settingPrice.freePanelPrice();
//                                                 }
                                                if ($(sREF).find(sBTN + '[data-color]').length == 1) {
                                                    colorActiveGroup = selectGroup;
                                                }
                                            } else {
                                                popup.confirm_(2, '냉장고의 도어를 선택해 주세요.')
                                                return false;
                                            }

                                            // 20190620 step04로 자동 이동
                                            if ($(sREF).find(sBTN + ':visible').length == $(sREF).find(sBTN + '[data-img]').length) {
                                            }

                                        } else {
                                            if($(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep') != "F/P"){
                                            	tab.reset($('.my-edition-color_list').eq(1).find('button'));	
                                            }
                                        }
                                    });
                                    
                                	function rgb2hex(rgb) {
                                	    if (rgb.search("rgb") == -1 ) {
                                	         return rgb;
                                	    } else {
                                	         rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
                                	         function hex(x) {
                                	              return ("0" + parseInt(x).toString(16)).slice(-2);
                                	         }
                                	         return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
                                	    }
                                	}
                                    
                                    //색상 초기화 및 색상 모두보기 이벤트
                                	// 색상 모두 보기 팝업
									var thisTopPo;
									$('.new-color-pop-open').on('click', function(){
										if($(this).is('.reset')){
								            $(sMODEL + ' li[data-type] .door_btn').find(sBTN).each(function () {
								                $(this).removeAttr(sDATACOLOR).removeAttr(sDATAPRICE).removeAttr('data-img').css('background-image', '').css('background-color', '').find('.color').text(''); // 20190620
								                $(this).find('strong').show();
								                $(this).removeClass(sACTIVE).removeClass('light');
								            });
			                                $('.bespoke-color-set').hide();
			                                settingPrice.resetPrice();
			                                settingPrice.changePrice();
										}else if($(this).is('.all_color')){
											$('.new-color-pop-wrap').addClass('js-new-pop-show');
										}else{
											$('.new-color-pop-wrap').removeClass('js-new-pop-show');
										}
										
										thisTopPo = $(window).scrollTop();
// 										$(window).scrollTop(0);
										return false;
									});
								
									$('.new-color-pop-close').on('click', function(){
										$('.new-color-pop-wrap').removeClass('js-new-pop-show');
										$(window).scrollTop(thisTopPo);
										return false;
									});
                                    
                                    //validation 체크 후 저장
                                    var saveBtn = {
                                        getModelName: function () {
                                            return $(sTABLE).find(' input[name=model]:checked + label').text();
                                        },
                                        flag: function () {
                                            var visibleLength = $(sREF).find(sBTN + ':visible').length;
                                            var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                            if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
                                                visibleLength = 3;
                                            }
                                            
                                            //조건에 프리 패널 추가
                                            if (visibleLength !== $(sREF).find(sBTN + '[data-img]').length && department !='F/P') {
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
                                        valid: function ($this_) {
                                            //저장하기 그리기
											if (this.flag()) {
                                                var panelMdlData='',panelData=[],p1pkgMdlck='',p1pkgMdlpr='',f2pkgMdlck='',f2pkgMdlpr='',p1pkgName='',
                                                    p1pkgMdlck2 = '', // 2020-06-23 셰프 컬렉션 패키지 전달
                                                    p1pkgMdlpr2 = ''; // 2020-06-23 셰프 컬렉션 패키지 전달
                                                var selidx = $(sTABLE).find('input[name=model]:checked').val(); //$(@sTABLE).find('tbody tr.active').index()
                                                var totalPrice = aTotalPrice[selidx];
                                                var sREF_len = $(sREF).find(sBTN).length;
                                                var chkval = $(sTABLE).find('input[name=package'+ selidx+'0]:checked').val();
                                                var chkval2 = $(sTABLE).find('input[name=package' + selidx + '1]:checked').val();   // 2020-06-24 셰프 컬렉션 패키지 전달
                                                if( chkval && chkval.length > 0 ){
                                                    p1pkgMdlck = chkval.split(';')[3]; //p1pkgMdl
                                                    p1pkgMdlpr = chkval.split(';')[4]; //price
                                                    f2pkgMdlck = chkval.split(';')[5]; //f2pkgMdl
                                                    f2pkgMdlpr = chkval.split(';')[6]; //autoSumprice
                                                    p1pkgName  = chkval.split(';')[7]; //패키지명
                                                }

                                                // 2020-06-24 셰프 컬렉션 패키지 전달
                                                if (chkval2 && chkval2.length > 0) {
                                                    p1pkgMdlck2 = chkval2.split(';')[3]; //p1pkgMdl
                                                    p1pkgMdlpr2 = chkval2.split(';')[4]; //p1pkgMdl
                                                }
                                                // 2020-06-24 셰프 컬렉션 패키지 전달

                                                $(sREF).find(sBTN).each(function (i) {
                                                    panelData.push({});
                                                    var dataImg   = $(this).attr('data-img'),
                                                        padacolor = $(this).attr('data-color'),
                                                        dataprice = $(this).attr('data-price'),
                                                        dataColor = $(this).find('.color').text();

                                                    if (i == 1 && (aFAMILY.indexOf(modelData.type) > -1)) { //패밀리허브 4door_family
                                                        panelData[i].code       = panelData[0].code;
                                                        panelData[i].color      = panelData[0].color;
                                                        panelData[i].panelprice = panelData[0].panelprice;

                                                        panelMdlData += panelData[0].code; // 패밀리허브 2번째 패널 undefined --> N/A 넣어서 저장하기
                                                    } else {
                                                        panelData[i].code       = dataImg;
                                                        panelData[i].color      = dataColor;
                                                        panelData[i].panelprice = dataprice;
                                                        panelData[i].padacolor  = padacolor;

                                                        panelMdlData += dataImg;
                                                    }

                                                    if (i != sREF_len - 1) {
                                                        panelMdlData += '|';
                                                    }
                                                });

                                                if(isLogin == "Y" && chkval && chkval.length>0){
                                                    panelMdlData = panelMdlData+"|"+chkval.split(';')[3];
                                                    if(chkval.split(';')[5]!=""){
                                                        panelMdlData = panelMdlData+"|"+chkval.split(';')[5];
                                                    }
                                                }

                                                // 2020-06-24 셰프 컬렉션 패키지 전달
                                                if (isLogin == "Y" && chkval2 && chkval2.length > 0) {
                                                    panelMdlData = panelMdlData + "|" + chkval2.split(';')[3];
                                                }
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


                                                    jQuery.ajaxSettings.traditional = true;
                                                    var option = {
                                                        url: '/sec/xhr/bespoke/myModelAddAjax',
                                                        dataType: "json",
                                                        data: allData,
                                                        jsonpCallback: "jsonpcallback_bespoke",
                                                        type: "POST",
                                                        success: function (data) {
                                                            if (data.resultCode == "-1") {
                                                                //$('.loginBtn').click(); // 로그인페이지로 이동
                                                                window.location.href =  "/sec/member/indexLogin/?returnUrl=" + window.location.pathname + "?id=bespoke-make"; // [2020-09-07]
                                                            } else if (data.resultCode == '1') {
                                                                pushProd2List(); //myModelInfoAjax 읽어서 prod3List 배열세팅
                                                            } else {
                                                                alert(data.resultCode); // resultMessage 화면에 노출
                                                            }
                                                        },
                                                        error: function (response, status, error) {
                                                            alert('error1:myModelAddAjax 오류!');
                                                        },
                                                        beforeSend: function (xhr) {
                                                            xhr.setRequestHeader("ajax", true);
                                                        },
                                                        complete: function () { }
                                                    };

                                                    $.ajax(option);

                                                } else {
                                                    //로그인여부(N) 확인후 나만의 조합 페이지
                                                    // 2020-06-24 셰프 컬렉션 패키지 전달
                                                    settingCookie.makeProd("2",p1pkgMdlck,p1pkgMdlpr,f2pkgMdlck,f2pkgMdlpr,p1pkgName,modelData.type, modelData.model, panelData, totalPrice, modelData.url,p1pkgMdlck2, p1pkgMdlpr2);
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
                                            }
                                        },
                                        ckLoginMakeProd: function ($this_) {
                                            if (this.flag()) {
                                                //로그인화면이동(쿠키저장) 로그인여부(N) 확인후 나만의 조합 페이지
                                                var panelMdlData='',panelData=[],p1pkgMdlck='',p1pkgMdlpr='',f2pkgMdlck='',f2pkgMdlpr='',p1pkgName='',
                                                    p1pkgMdlck2 = '', // 2020-06-24 셰프 컬렉션 패키지 전달
                                                    p1pkgMdlpr2 = ''; // 2020-06-24 셰프 컬렉션 패키지 전달
                                                var selidx = $(sTABLE).find('input[name=model]:checked').val();
                                                var totalPrice = aTotalPrice[selidx];
                                                var sREF_len = $(sREF).find(sBTN).length;

                                                var chkval = $(sTABLE).find('input[name=package'+ selidx+'0]:checked').val();
                                                var chkval2 = $(sTABLE).find('input[name=package'+ selidx+'1]:checked').val(); // 2020-06-30 구매 하기  수정

                                                if( chkval && chkval.length > 0 ){
                                                    p1pkgMdlck = chkval.split(';')[3]; //p1pkgMdl
                                                    p1pkgMdlpr = chkval.split(';')[4]; //price
                                                    f2pkgMdlck = chkval.split(';')[5]; //f2pkgMdl
                                                    f2pkgMdlpr = chkval.split(';')[6]; //autoSumprice
                                                    p1pkgName  = chkval.split(';')[7]; //패키지명
                                                }
                                                // 2020-06-24 셰프 컬렉션 패키지 전달
                                                if (chkval2 && chkval2.length > 0) {
                                                    p1pkgMdlck2 = chkval2.split(';')[3]; //p1pkgMdl
                                                    p1pkgMdlpr2 = chkval2.split(';')[4]; //p1pkgMdl
                                                }
                                                // 2020-06-24 셰프 컬렉션 패키지 전달

                                                $(sREF).find(sBTN).each(function (i) {
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
                                                cookieName = 'bespoke_make200703';
                                                
                                                // 2020-06-24 셰프 컬렉션 패키지 전달
                                                settingCookie.makeProd("1", p1pkgMdlck, p1pkgMdlpr, f2pkgMdlck, f2pkgMdlpr, p1pkgName, modelData.type, modelData.model, panelData, totalPrice, modelData.url,p1pkgMdlck2, p1pkgMdlpr2);
                                                // 2020-06-24 셰프 컬렉션 패키지 전달

                                                pushProdList();
                                                initCookieHTML();

                                                //$('.loginBtn').click(); // 로그인페이지로 이동
                                                window.location.href =  "/sec/member/indexLogin/?returnUrl=" + window.location.pathname + "?id=bespoke-make";
                                            }
                                        },
                                        chkIsPopup: function ($this_) {

                                            isPopup = "N";
                                        },
                                        init: function () {
                                            var self_ = this;
											
											//저장하기 클릭시
                                            $(sSAVEBTN).click(function () {
                                                if (self_.flag()) {
                                                    if (isLogin == "N" && isPopup == "") {
                                                        popup.confirm_(1, '로그인 하지 않고 저장 시 브라우저 환경설정에 따라 저장 내역이 삭제될 수 있습니다.<br/>로그인 하시겠습니까?', function () {
                                                            self_.ckLoginMakeProd($(this));
                                                            $('#panelTypeCd').val("");
                                                        }, function () {
                                                            self_.valid($(this));
                                                            isPopup = "N";
                                                            $('#panelTypeCd').val("");
                                                        });
                                                    } else {
                                                        self_.valid($(this));
                                                        $('#panelTypeCd').val("");
                                                    }
                                                }
                                            })
                                        }
                                    };

                                    //AR
                                    var arBtn = {
                                        arr_checkdIndex: [],
                                        getModelName: function () {
                                            return $(sTABLE).find(' input[name=model]:checked + label').text();
                                        },
                                        flag: function (boolean) {
                                            if (boolean) {
                                                return true;
                                            }

                                            var visibleLength = $(sREF).find(sBTN + ':visible').length;
                                            var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                            if (aFAMILY.indexOf(modelData.type) > -1) { //패밀리허브 4door_family
                                                visibleLength = 3;
                                            }

                                            //조건에 프리 패널 추가
                                            if (visibleLength !== $(sREF).find(sBTN + '[data-img]').length && department !='F/P') {
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
                                        checkbox_changedIndex: function () {
                                            var _ns = this;
                                            /* 체크박스 순서를 기록 */
                                            $('body').on('change', '.ar-check', function () {
                                                var id = $(this).attr('id');
                                                var idx = _ns.arr_checkdIndex.indexOf(id);
                                                var get2Idx = function (i) {
                                                    var idx = i + 1;
                                                    if (idx < 10) {
                                                        idx = '0' + idx;
                                                    } else {
                                                        idx = idx
                                                    }
                                                    return 'chk' + idx;
                                                };

                                                var prod = settingCookie.loadProd();
                                                if (prod3List.length > 0) { prod = prod3List; }

                                                if ($(this).is(':checked')) { //체크-1
                                                    $.each(prod, function (i, item) {
                                                        if (get2Idx(i) == id) {
                                                            //스킵
                                                        } else {
                                                            $('#' + get2Idx(i)).prop('checked', false);
                                                            $('#' + get2Idx(i)).attr('checked', false);
                                                        }
                                                    });
                                                    if (idx == -1) {
                                                        _ns.arr_checkdIndex.splice(0, 1); // 배열 삭제
                                                        _ns.arr_checkdIndex.push(id);     // 배열 추가
                                                    }
                                                } else {
                                                    if (idx !== -1) { _ns.arr_checkdIndex.splice(idx, 1); } // 배열 삭제
                                                }
                                            });
                                        },

                                        valid: function ($this_, boolean) {

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
                                        init: function () {
                                            var self_ = this;
                                            self_.checkbox_changedIndex();
                                            $('.ar_banner_wrap').click(function () {
                                                var txt = "";
                                                var arurl = 'Intent://secappandroid?sku=' + txt + '&familyName=bespoke#Intent;scheme=secapp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.samsung.sec.android;end'
                                                if (navigator.userAgent.toUpperCase().indexOf('SECAPP') !== -1) {
                                                    window.secapp.goToARService(txt, 'bespoke');
                                                } else {
                                                    var isMobile = function () { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); };
                                                    if (isMobile()) {
                                                        location.href = arurl;
                                                    } else {
                                                        alert("모바일에서 실행가능합니다.");
                                                        return false;
                                                    }
                                                }
                                            });
                                            $('.my-edition-making-step-wrap .ar_btn').click(function () {
                                                self_.valid($(this));
                                            });
                                            //AR내 공간에서 체험하기 팝업
                                            $ARPOPUP.find('.btn').click(function () {
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
                                                var pushColorName = function ($active, colorData, colorName) {
                                                    if ($active.find('.color').length === 0) $active.append('<span class="color"></span>')
                                                    $active.attr(sDATACOLOR, colorData, colorName).find('.color').text(colorName);
                                                };
                                                var $activeBtn = $(sREF).find(sBTN + '.' + sACTIVE);
                                                $.each(prod[icnt].panel, function (i, item) {
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
                                var resetProduct = function () {
                                    $('.remake_btn').click(function () {
                                        popup.confirm_(1, '선택된 내용을 다시 시작하시겠습니까?', function () {
                                            reset.act('remake');
                                        });
                                    });
                                };
                                addActive();
                                changeColor();
                                resetProduct();
                            };
                            //` 탭
                            var tab = {
                                init: function ($this_) {
                                    colorActiveGroup = false;
                                    $('.my-edition-making-ref').removeClass('door_selecting');//20190627_2차
                                },
                                reset: function ($this_) {
                                    var self_ = this;
                                    if ($(sTABVIEW).find('button.' + sACTIVE).length) {
                                        popup.confirm_(1, '같은 재질끼리만 조합이 가능합니다.<br />다른 재질과 컬러로 변경하시겠습니까?', function () {
                                            reset.act('tab');
                                            self_.init($this_);
                                            $(sREF).find(sBTN).removeClass(sACTIVE).eq(0).addClass(sACTIVE); //20190627 추가
                                        });
                                    }else{
                                        self_.init($this_);
                                    }
                                },
                                reset_color: function ($this_) {
                                    var self_ = this;
                                    popup.confirm_(1, 'Prism 360 컬러와 Original 컬러는<br> 한 제품 내 선택이 불가합니다.<br>변경 시 기본 선택한 컬러는 초기화 됩니다.', function () {
                                        reset.act('tab');
                                        self_.init($this_);
                            			
                        				var index = $this_.parent('li').index();
                            			// 나
                            			$('.bespoke-color-tab > li').removeClass('on');
                            			$this_.parent('li').addClass('on');

                            			// 내용
                            			$('.bespoke-color').removeClass('on');
                            			$('.bespoke-color').eq(index).addClass('on');
                                        
                                        
                                        $(sREF).find(sBTN).removeClass(sACTIVE).eq(0).addClass(sACTIVE); //20190627 추가
                                    });
                                },
                                act: function () {
                                    var self_ = this;
                                    if ($(sTABBTN).length) {
                                        $(document).on('click', sTABBTN + ' >li a', function (e) {
                                            e.preventDefault();
                                            self_.reset($(this));
                                        });
                                    }
                                }
                            }

                            //Step 4 테이블 bg
                            var bgHover = function () {
                                $(document).on('mouseenter', sTABLE + ' tbody tr', function () {
                                    toggleView.trBg.hover.show($(this));
                                }).on('mouseleave', sTABLE + ' tbody tr', function () {
                                    toggleView.trBg.hover.hide($(this));
                                });
                            };

                            //Step 4 의 input 선택시 변경될 바로 구매하기 버튼 태깅 변경 : 20190808 추가 s
                            var changeTrekking = function () {
                                var selector = '.step-box_function .model_rdobox',
                                    buyBtn = $('.my-edition-btn-area .buy_btn');
                                	cartBtn = $('.my-edition-btn-area .cart_btn');
                                $(document).on('click', selector, function () {
                                    var model = $(this).next('label').text(),
                                        code = 'sec:bespoke:buy:buynow_' + model;
                                    buyBtn.attr('data-omni', code);
                                	cartCode =  'sec:bespoke:buy:cart-model_' + model;
                                	cartBtn.attr('data-omni', cartCode);
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
                                act: function (check) {
                                    if ($('.module_type').length <= 4) {
                                        $('.ref-module-list').addClass('default')
                                    }

                                    function createNewEvent(eventName) {
                                        var event;
                                        if (typeof (Event) === 'function') {
                                            event = new Event(eventName);
                                        } else {
                                            event = document.createEvent('Event');
                                            event.initEvent(eventName, true, true);
                                        }
                                        return event;
                                    }
                                    $(sTABVIEW).find('.color_btn').removeAttr('disabled'); //20190627 추가

                                },
                                destroy: function () {
                                    $(this.sEl).slick('unslick');
                                }
                            }
                            // 키엔호 파라미터 있을 경우 해당 위치로 이동
                            var kienhoMove = function () {
                                var getParamVal = function (name) {
                                    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                                    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                                        results = regex.exec(location.search);
                                    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                                };


                                var paramId = getParamVal('id');
                                if (paramId === 'kienho-more') {
                                    var scmove = $('#' + paramId).offset().top;
                                    $('html, body').animate({
                                        scrollTop: scmove
                                    }, 400);
                                } else if (paramId === 'bespoke-make') {
                                    $('.jq_navercafe').hide();
                                    var scmove = $('#' + paramId).offset().top;
                                    var model = getParameter('selModel');
                                    if (model == '') {
                                        $('html, body').animate({
                                            scrollTop: scmove
                                        }, 800);
                                    }
                                } else {

                                }
                            }
                            var getParameter = function (param) {
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
                            var selectModel = function () {
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
                                cookieName = 'bespoke_make200703';
                                if ($.cookie(cookieName) !== undefined) {
                                    if (settingCookie.loadProd().length > 0) {
                                        selectModel(); //jjhan 추가
                                    }
                                }
                            }

                            var selModel = function (model) {
                                var model = getParameter('selModel');
                                if (model == '') return;

                                var selMdl = '';
                                var dataType = '';
                                var department = '';
                                var relYear = '';

                                $.each(data, function (i, type) {
                                    $.each(type.product, function (i, item) {

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

                                $('.type-select_btn[data-dep="' + department + '"]').click();           //Step 01
                                $('.ref-module-list a[data-type="' + dataType + '"]').trigger('click'); //Step 02

                                $('.my-edition-model-tbl input[name="model"]').each(function (i, item) {
                                    var mdl = $(item).parent().find('label').text();
                                    if (selMdl == mdl) {
                                        $(item).trigger('click');
                                        if (!$(item).prop('checked')) {
                                            $(item).prop('checked', true).attr('checked', true);
                                        }
                                        $(item).parent().parent().next().removeClass('hide').addClass('show');
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


                            var selType = function () {
                                var vselType = getParameter('selType');
                                if (vselType == '') return;

                                var selMdl = '';
                                var dataType = '';
                                var department = '';
                                var relYear = '';

                                $.each(data, function (i, type) {
                                    $.each(type.product, function (i, item) {

                                        if (vselType == item.dataType) {
                                            selMdl = item.modelName;
                                            dataType = item.dataType;
                                            department = item.department;
                                            relYear = item.relYear;
                                            return;
                                        }
                                    });
                                    if (selMdl != '') return;
                                });

                                $('.type-select_btn[data-dep="' + department + '"]').click();           //Step 01
                                $('.ref-module-list a[data-type="' + dataType + '"]').trigger('click'); //Step 02

                                $('.my-edition-model-tbl input[name="model"]').each(function (i, item) {
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

                            var vselType = getParameter('selType');
                            if (vselType != '') {
                                selType();
                            }

                            var selected2Model = function () {
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

                                $.each(data, function (i, type) {
                                    $.each(type.product, function (i, item) {

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
                                $('.type-select_btn[data-dep="' + department + '"]').click();           //Step 01
                                $('.ref-module-list a[data-type="' + dataType + '"]').trigger('click'); //Step 02

                                $('.my-edition-model-tbl input[name="model"]').each(function (i, item) {
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
                        var changeClass = function ($el, btn, parents) {
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
                                open: function ($el) {
                                    $el.addClass(sACTIVE);
                                    $('.my-edition-ly-dim').show();
                                },
                                close: function () {
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
                            besPoke: function () {
                                var self_ = this;
                                var popupAction = {
                                    selector: {
                                        popup: $('#layer01')
                                    },
                                    open: function (e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        var modelIdx = $(this).parents('li').index();

                                        self_.commonAct.open(popupAction.selector.popup);
                                        popupAction.selector.popup.find('table tbody').html(aSelectedOpt[modelIdx]);
                                        popupAction.selector.popup.find('table thead').html(aSelectedOpt2[modelIdx]); //20190620 추가
                                    },
                                    close: function (e) {
                                        e.preventDefault();
                                        popupAction.selector.popup.find('table tbody').html('');

                                    },
                                }

                                $(document).on('click', '.js-popup', popupAction.open)
                                    .on('click', '.my-edition-ly-popup .btn-close', popupAction.close);
                            },
                            colorTooltip: function () {
                                var self_ = this;
                                var color = [
                                    {
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
                                    open: function (e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        var popW = 860,
                                            popH = 880,
                                            popL = Math.ceil((window.screen.width - popW) / 2),
                                            popT = Math.ceil((window.screen.height - popH) / 2),
                                            popSet = 'top=' + popT + ',left=' + popL + ',width=' + popW + ',height=' + popH + ',toolbar=no,resizable=yes,scrollbars=yes';

                                        var tab = $(this).attr('data-tab');
										var slide = $(this).attr('data-slide');
                                        
                                        self_.commonAct.open(popupAction.selector.popup);
                                        popupAction.selector.popup.find('.edition_info_tab li').eq(tab).click();
                                        if(tab == 1){
                                        	popupAction.selector.popup.find('.edition_info_tab_cont .edition_tab_color a').eq(slide).click();	
                                        }
                                        popupAction.selector.popup.css("opacity", 1);
                                    }
                                }
                                $(document).on('click', '.step-box_color .tooltip_btn', popupAction.open);
                                $('.step-box_module .tooltip_btn').on('click', popupAction.open); //20190627 추가

                            },
                            //step4 특장점 상세보기, 190822 팝업 내용 추가 s
                            featurestTooltip: function () {
                                var self_ = this;
                                var feature = [
                                    {
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
                                var featureType03 = [
                                    {
                                        slideItems: [
                                            {
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
                                var featureType06 = [
                                    {
                                        slideItems: [
                                            {
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
                                var featureType04 = [
                                    {
                                        slideItems: [
                                            {
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
                                        slideItems: [
                                            {
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
                                // 200624 - popup(부가기능)오토필 정수기
                                
                                 //2021.03.05
					            var featureType08 = [{
					                    slideItems: [{
					                            title: "<span class='tit'>오토필 정수기(좌)</span>",
					                            contents: "센서로 물의 양을 측정하여 자동으로 채워주기 때문에<br>물을 받기 위해 냉장고 앞에 서서 기다릴 필요가 없습니다.<br>한꺼번에 많은 양의 음식을 만들 때도,<br>가족 모두가 동시에 물을 찾을 때도 걱정 없습니다.",
					                            img: 'featureType08_01'
					                        },
					                        {
					                        	title: "<span class='tit'>히든 디스펜서(우)</span>",
					                            contents: "외관은 비스포크 패널 그대로, 정수기는 패널 안쪽에 쏙 들어가 있어<br>더욱 위생적입니다.<br>외부에 노출된 정수기에 비해 오염의 위험이 적고,<br>낮은 온도 환경으로 박테리아 성장을 억제합니다.<br>도어부 정수 디스펜서 뒷면의 수납도 충분합니다.",
					                            caution: ["해당 모델에 한함"]
					                        }
					                    ]
					                },
					                {
					                    title: "<span class='tit'>이온 살균 청정기</span>",
					                    contents: "냉장고 내부에 떠다니는 균은 물론, 벽면에 <br>붙어있는 부착균까지 99 %이상 살균되므로 식재료를 안심하고 보관 할 <br>수 있습니다. 필터의 교체나 세척 없이 반영구적으로 쓸 수있어 <br>더욱 편리합니다.",
					                    caution: ["살균력 99% KTR 인증 (시험대상균 대장균, 황색포도상구균 도포 24시간 후 잔여 제균 검증 조건)", "해당 모델에 한함"],
					                    img: 'featureType08_04'
					                },
					                {
					                    title: "<span class='tit'>UV 청정 탈취기</span>",
					                    contents: "90 % 이상 탈취가 가능하므로 냉장고 안의 김치 냄새, <br>생선 냄새 등을 효율적으로 제거하여 줍니다. <br>필터 성능이 약 10년간 유지되므로 번거롭게 필터를 교체할 <br>필요가 없습니다.",
					                    caution: ["UV 청정탈취기 단품 살균 성능 99% 이상 (인터넥 성적서 확보, 대상균 대장균, 황색포도상구균)", "탈취력 90 % 이상, 인터텍 인증 (냉장고 상실에 시험 표준 gas를 주입 20시간 후 내부 가스 농도 측정 시험 결과)", "해당 모델에 한함 / 실사용 환경에 따라 달라질 수 있음."],
					                    img: 'featureType08_05'
					                }
					            ]

                                var popupAction = {
                                    selector: {
                                        popup: $('#layer03'),
                                        slidePOP: $('#layer-slide'),
                                    },
                                    open: function (e) {
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
                                        if ($parents.hasClass('type7')) {    // 200714 - 오토필 정수기
                                            idx = 0;
                                            popupAction.makeHTML(idx, featureType07);

                                        }
                                      //2021.03.05
                                        if ($parents.hasClass('type8')) {
                                            if (featureType08[idx].slideItems == undefined) {
                                                popupAction.makeHTML(idx, featureType08);
                                            } else {
                                                popupAction.slideHTML(idx, featureType08);
                                            }
                                        }
                                    },
                                    makeHTML: function (idx, type) {
                                        var _type = type,
                                            _idx = idx;
                                        self_.commonAct.open(popupAction.selector.popup);
                                        popupAction.selector.popup.find('.feature_desc').html('');
                                        popupAction.selector.popup.find('.feature_tit').html('<span class="tit">' + _type[_idx].title + '</span>');

                                        if (_type[_idx].subTitle != undefined) {
                                            popupAction.selector.popup.find('.feature_tit').append('<span class="subtitle">' + _type[_idx].subTitle + '</span');
                                        }
                                        popupAction.selector.popup.find('.feature_img img').attr({ 'src': '//images.samsung.com/kdp/bespoke/images/v1/' + _type[_idx].img + '.jpg?$ORIGIN_JPG$', 'alt': _type[_idx].title }); //190822 이미지 경로 변경 필요
                                        popupAction.selector.popup.find('.feature_txt').html(_type[_idx].contents);
                                        $.each(_type[_idx].caution, function (i, item) {
                                            popupAction.selector.popup.find('.feature_desc').append('<p>' + item + '</p>');
                                        });
                                    },
                                    slideHTML: function (idx, type) {
                                        var _type = type,
                                            _idx = idx;

                                        popupAction.selector.slidePOP.find('.slide-item').remove();

                                        var a = '';
                                        for (var i in _type[_idx].slideItems) {
                                            a += '<div class="slide-item">';
                                            if (_type[_idx].slideItems[i].img != undefined) {
                                            	a +='<div class="hd-popup">';
                                                a +='<div class="feature_img">';
                                                a +='<div class="img"><img src="//images.samsung.com/kdp/bespoke/images/v1/' + _type[_idx].slideItems[i].img + '.jpg?$ORIGIN_JPG$" alt="' + _type[_idx].slideItems[i].title + '"></div>';
                                                a +='</div>';
                                                a +='</div>';
                                            }
                                            a +='<div class="bd-popup">';
                                            a +='<h2 class="feature_tit"><span class="tit">' + _type[_idx].slideItems[i].title + '</span></h2>';
                                            a +='<div class="feature_txt">' + _type[_idx].slideItems[i].contents + '</div>';
                                            if (_type[_idx].slideItems[i].caution != undefined) {
                                            	a +='<div class="feature_desc"><p>' + _type[_idx].slideItems[i].caution + '</p></div>';
                                            }
                                            a +='</div>';
                                            a +='</div>';
                                        }

                                        popupAction.selector.slidePOP.find('.slide-wrap').html(a);

                                        if (_type[_idx].slideItems[i].subTitle != undefined) {
                                            popupAction.selector.slidePOP.find('.feature_tit').append('<span class="subtitle">' + _type[_idx].slideItems[i].subTitle + '</span');
                                        }

                                        self_.commonAct.open(popupAction.selector.slidePOP);
                                        popupAction.selector.slidePOP.find('img').load(function () { popupAction.selector.slidePOP.find('.slide-wrap').slick(); })
                                    }
                                }

                                $('.step-box_function .tooltip_btn').click(popupAction.open);


                            },
                            //유의사항
                            benefitLink: function () {
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
                                    open: function (e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        var idx, caution;
                                        if ($(this).parents('div').hasClass('my-edition-content')) {
                                            caution = benefit;
                                            idx = $(this).parents('li').index();
                                        } else if ($(this).parents('div').hasClass('my-edition-collabo-section')) {
                                            caution = collabo;
                                            idx = 0;
                                        }
                                        self_.commonAct.open(popupAction.selector.popup)
                                        popupAction.selector.popup.addClass(sACTIVE);
                                        popupAction.selector.popup.find('.hd-popup_tit').text(caution[idx].title);
                                        popupAction.selector.popup.find('.notice-list').html('');
                                        $.each(caution[idx].content, function (i, item) {
                                            popupAction.selector.popup.find('.notice-list').append('<li>' + item + '</li>');
                                        });
                                    }
                                }
                                $('.data_popup').click(popupAction.open);
                            },
                            // 타입선택 팝업 - step 01
                            typeChoice: function () {
                                var self_ = this;
                                var typeChoice = [
                                    {
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
                                    },
									{
                                        title: "비스포크 교체용 패널",
                                        content: [
                                            "2019년 이후 출시된 BESPOKE 제품에 한해 적용 됩니다.",
                                            "교체를 원하는 칸 수 만큼 패널 구매 가능합니다. ",
                                            "패널 구매 시 교체 설치까지 해드립니다."
                                        ]
                                    }
                                ]
                                var popupAction = {
                                    selector: {
                                        popup: $('#layer07')
                                    },
                                    open: function (e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        var idx, caution;
                                        if ($(this).parents('div').hasClass('my-edition-content')) {
                                            caution = typeChoice;
                                            idx = $(this).closest('.my-edition-cont-inner').index();
                                        } else if ($(this).parents('div').hasClass('my-edition-collabo-section')) {
                                            caution = collabo;
                                            idx = 0;
                                        }
                                        self_.commonAct.open(popupAction.selector.popup)
                                        popupAction.selector.popup.addClass(sACTIVE);
                                        popupAction.selector.popup.find('.hd-popup_tit').text(caution[idx].title);
                                        popupAction.selector.popup.find('.notice-list').html('');
                                        $.each(caution[idx].content, function (i, item) {
                                            popupAction.selector.popup.find('.notice-list').append('<li>' + item + '</li>');
                                        });
                                    }
                                }
                                $('.type_popup').click(popupAction.open);
								
								var popupAction2 = {
                                    selector: {
                                        popup: $('#layer09')
                                    },
                                    open: function (e) {
                                        self_.commonAct.open(popupAction2.selector.popup);
                                    }
                                }
								$('.type_popup2').click(popupAction2.open);
                            },
                            //AR내 공간에서 체험하기
                            arExperience: function () {
                                var self_ = this;
                                var aList = [];
                                var popupAction = {
                                    selector: {
                                        popup: $ARPOPUP
                                    },
                                    open: function (e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        self_.commonAct.open(popupAction.selector.popup)
                                    }
                                }
                                $('.my-edition-pick-section .ar_btn').click(popupAction.open);
                            },
                            confirm_: function (type, txt, yesFn, noFn, coFn) {
                                var self_ = this;
                                var value;
                                var popupAction = {
                                    selector: {
                                        popup: $('#layer02')
                                    },
                                    open: function () {
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
                                    clickBtn: function () {
                                        popupAction.selector.popup.find('.btn').off('click').click(function (e) {
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
                            confirm8: function (type, txt, price1, price2, yesFn, noFn, coFn) {
                                var self_ = this;
                                var value;
                                var popupAction = {
                                    selector: {
                                        popup: $('#layer08')
                                    },
                                    open: function () {
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
                                    clickBtn: function () {
                                        popupAction.selector.popup.find('.btn').off('click').click(function (e) {
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
                                console.lo('팝업옵션');
                                popupAction.open();
                                popupAction.clickBtn();
                            },
                            act: function () {
                                var self_ = this;
                                $(document).on('click', '.my-edition-ly-popup .btn-close', function () {
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
                        var buyNow = function () {
                            $(document).on('click', '.my-pick_btn_buy', function () {
                                // 2020-06-11 패밀리 허브  로그인시 패널 구매 오류 수정
                                var parent_wrap = $(this).parents('.my-edition-pick-item');
                                var door_type = parent_wrap.find('.my-pick_img').data('type');
                                var idx =parent_wrap.index();
                                var choicedProd = null;

                                if (isLogin == "Y") {
                                    choicedProd = prod3List[idx];
                                } else {
                                    choicedProd = prodList[idx];
                                }

                                var dataParam = choicedProd.name + ':::1';

                                $.each(choicedProd.panel, function(i, item) {
                                    var panel = "";
                                    if( door_type == '4door_family' && i == 1 ){ return; }
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
                            })
                        };

                        var buyfixedMatchAjax = function (dataParam, fixedParam, type) { // [2020-09-07]
                        	var self_ = this;
                            var fixedmodel = "";
                            var yesCallback = function () {
                                buyAjax(fixedmodel + ':::1'); // 매칭제품 있으면 'Y' : fixedMdl구매
                            }
                            var noCallback = function () {
                                buyAjax(dataParam);
                            }
                            var coCallback = function () {
                            }

                            var params = {
                                'storeCd': 'sec',
                                'productCode': + fixedParam
                            };

                            var option = {
                                url: '/sec/xhr/bespoke/fixedMatchAjax',
                                dataType: "json",
                                type: "POST",
                                data: params,
                                jsonpCallback: "jsonpcallback_bespoke",
                                success: function (rtnjson) {
                                    var price1 = "0";
                                    var price2 = "0";

                                    if (rtnjson.fixedMatchResult.code == 'Y') { // [2020-09-07 리뉴얼]
                                        fixedmodel = rtnjson.fixedMatchResult.data.fixedMdl;
                                        price1 = controlNumber.numberWithCommas(selectPrice);
                                        price2 = controlNumber.numberWithCommas(rtnjson.fixedMatchResult.data.bPrice);

                                        popup.confirm8(1, '가격비교 안내 및 fixed 제품 구매', price1, price2, yesCallback, noCallback, coCallback)
                                        return false;
                                    } else {
                                        //todo 여기서 부터 order 값 넣기
                                    	if(type == 'cart'){
                                            cartAjax(dataParam);
                                        } else {
                                            buyAjax(dataParam);
                                        }
                                    }
                                },
                                error: function (response, status, error) {
                                    var alertData ={
                                            title : ""
                                            , content : "상품을 준비중입니다."
                                            , callBack : ""
                                            , btnText : "확인"
                                        };
                                    commonAlert(alertData);
                                    openLayer('commonAlert');
                                    return false;
                                },
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader("ajax", true);
                                },
                                complete: function () { }
                            };

                            $.ajax(option);
                        };

                        // TODO : jkjang Buy Ajax 연동
                        var buyAjax = function (data) {
                            var data = data.replace(/productCode=/g, '');
                            var data = data.replace(/:::1/g, '');
                            var data = data.replace(/&/g, '^');

                            var ids = '';
                            
                            var mbrNo = 0;
                            var sessionId = '';
                            var stGbCd = '';
                            var stId = 0;

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
                                            , content : "상품을 준비중입니다."
                                            , callBack : ""
                                            , btnText : "확인"
                                        };
                                        commonAlert(alertData);
                                        openLayer('commonAlert');
                                        return false;
                                    } else {
                                        ids =  result.goodsIdList.toString();
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
                            	
                            	//20210507 todo 판넬여부 및 위치 array 만들기
                            	var p_params = {
                        				nowBuyYn : 'Y',
                        				bspkGrpKeys : data,
                                        goodsIds : ids
                        		};
                            	var bspkPnlYn = "N";
                            	var locType = locTypeList.filter(function(item) {
                              	  return item !== null && item !== undefined && item !== '';
                                });
                                if($('#panelTypeCd').val() != "AS" && $('#panelTypeCd').val() != ""){
                                	bspkPnlYn = "Y";
                                	p_params.bspkPnlYn = bspkPnlYn;
                                	if($('.ref-module-list .slider-item.active').find('a').attr('data-type').indexOf('1door') !=0){
                                		p_params.locType =locType.toString();
                                	}
                                }else{
                                	p_params.bspkPnlYn =bspkPnlYn;
                                }
                                console.log(p_params);
                            	var option = {
                            		url: "/sec/xhr/watchtest/addToCart/",
                            		dataType: "json",
                                    type: "POST",
                                    data: p_params,
                                    success: function (result) {
                                    	
                                        if(result.returnData.resultCode != '200') {
                                            var alertData ={
                                                title : ""
                                                , content : result.returnData.errorMessage
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
                        	console.log(vOption);
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
                        var cartAjax = function (data) {
                            var cartParam = "";
                            var data = data.replace(/productCode=/g, '');
                            var data = data.replace(/:::1/g, '');
                            var data = data.replace(/&/g, '^');
                            //console.log(data);
                            
                            //20210507 todo 판넬여부 및 위치 array 만들기
                        	var p_params = {
                    				nowBuyYn : 'N',
                    				watchGrpKeys : data
                    		};
                        	var bspkPnlYn = "N";
                        	var locType = locTypeList.filter(function(item) {
                          	  return item !== null && item !== undefined && item !== '';
                            });
                        	if($('#panelTypeCd').val() != "AS"){
                            	bspkPnlYn = "Y";
                            	p_params.bspkPnlYn = bspkPnlYn;
                            	if($('.ref-module-list .slider-item.active').find('a').attr('data-type').indexOf('1door') !=0){
                            		p_params.locType =locType.toString();
                            	}
                            }else{
                            	p_params.bspkPnlYn =bspkPnlYn;
                            }
                        	console.log(p_params);
                        	var option = {
                                url: "/sec/xhr/cartApi/addToCart/",
                                dataType: "json",
                                type: "POST",
                                data: p_params,
                                success: function (result) {
                                	
                                	console.log(result);
                                	
                                	if(typeof(result.exCode) !== 'undefined') {
                                		
                                        var alertData ={
                                            title : ""
                                            , content : "상품을 준비중입니다."
                                            , callBack : ""
                                            , btnText : "확인"
                                        };
                                        commonAlert(alertData);
                                        openLayer('commonAlert');
                                        return false;
                                    } else if(result.resultCode != '200') {
                                    	
                                        var alertData ={
                                            title : ""
                                            , content : result.errorMessage
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
                        };

                        var dirbuyNow = function () {
                        	//바로 구매하기
                            $(document).on('click', '.buy_btn', function () {
                                var visibleLength = $(sREF).find(sBTN + ':visible').length;
                                var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                if (aFAMILY.indexOf(motype) > -1) { //패밀리허브 4door_family
                                    visibleLength = 3;
                                }
                                
                              //조건에 프리 패널 추가
                                if (visibleLength !== $(sREF).find(sBTN + '[data-img]').length && department !='F/P') {
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
                                        p1pkgMdlb1="",
                                        p1pkgMdlb2="", // 2020-06-30 구매 하기  수정
                                        f2pkgMdlb1="";
                                    var dirbuyName = $(sTABLE).find(' input[name=model]:checked + label').text();
                                    data = dirbuyName + ':::1';
                                    $('.my-edition-making-ref.active button').each(function () {
                                        var panel = "";
                                        if (aFAMILY.indexOf(motype) > -1) { //패밀리허브 4door_family
                                            if (idx != 1) {
                                            	if($(this).is('[data-img]')){
                                                    panel = $(this).attr('data-img').toUpperCase();
                                                    data += '&productCode=' + panel + ':::1';
                                            	}
                                            }
                                        } else {
                                        	if($(this).is('[data-img]')){
                                                panel = $(this).attr('data-img').toUpperCase();
                                                data += '&productCode=' + panel + ':::1';
                                        	}
                                        }
                                        idx++;
                                    });
                                    var selidx = $(sTABLE).find('input[name=model]:checked').val();
                                    var chkval = $(sTABLE).find('input[name=package'+ selidx+'0]:checked').val();

                                    var chkval2 = $(sTABLE).find('input[name=package'+ selidx+'1]:checked').val(); // 2020-06-30 구매 하기  수정
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
                            console.log("insertCart()!");
                            $(document).on('click', '.cart_btn', function () {
                                console.log("insert click!!");
                                
                                var visibleLength = $(sREF).find(sBTN + ':visible').length;
                                var department = $(sSTEP01).find('.my-edition-step_cont .type-select_btn.active').attr('data-dep');
                                if (aFAMILY.indexOf(motype) > -1) { //패밀리허브 4door_family
                                    visibleLength = 3;
                                }
                              //20210427 조건에 교체용 패널 추가
                                if (visibleLength !== $(sREF).find(sBTN + '[data-img]').length && department !='F/P') {
                                    popup.confirm_(2, '모든 컬러가 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.');
                                    return false;
                                } else if ($(sTABLE).find('input[name=model]:checked').length === 0) {
                                    popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.');
                                    return false;
                                } else if ($(sREF).find(sBTN + ':visible').length <= 0) {
                                    popup.confirm_(2, '모델이 선택되지 않았습니다.<br/>선택 완료 후 구매해 주시기 바랍니다.');
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
                                            	if($(this).is('[data-img]')){
                                                    panel = $(this).attr('data-img').toUpperCase();
                                                    data += '&productCode=' + panel + ':::1';
                                            	}
                                            }
                                        } else {
                                        	if($(this).is('[data-img]')){
                                                panel = $(this).attr('data-img').toUpperCase();
                                                data += '&productCode=' + panel + ':::1';
                                        	}
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
                                    
                                    buyfixedMatchAjax(data, fixedParam, 'cart');
                                }
                            })
                        };

                        var showArPopup = function () { //AR내 공간에서 체험하기 팝업 pc 숨김
                            var pc = function () {
                                if ($ARPOPUP.is(':visible')) {
                                    $ARPOPUP.remove(sACTIVE);
                                    popup.commonAct.close();
                                }
                            };
                            resizeFunc(pc);
                        };

                        var collaboSlick = function () {
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

                        var selectionOrderChange = function (mobileFlag) { // 20190619 : 최상단 냉장고 이미지 영역 순서 바꾸기
                            var $sMODEL = $(sMODEL);

                        	//냉장고 이미지 순서 변경
                            if (mobileFlag) {
                                $(sSTEP04).find('.my-edition-step_cont2').prepend($sMODEL);
                            } else {
                                $('.my-edition-making-wrap').prepend($sMODEL);
                            }
                        };

                        var getParam = function (param) {
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

                        var colorTab = function () {
//                             $('.colorchip_tit').on('click', function (e) {
//                                 e.preventDefault();
//                                 $('.colorchip_list.mo_only.tab > a').removeClass('active');
//                                 $('.colorchip_list.mo_only.tab > ul').removeClass('active');
//                                 $(this).addClass('active');
//                                 $(this).parent().find('#'+$(this).attr('data-id')).addClass('active');
//                             })
                        }

                        var json_host = location.host.split(".")[0];
                        customizingRef.init = function () {
                            mobileFlag = window.innerWidth <= 768 ? true : false;
                            prevSize = mobileFlag == true ? "mobile" : "pc";
                            currentSize = mobileFlag == true ? "mobile" : "pc";
                            selectionOrderChange(mobileFlag);
                            isLogin = 'N';
                            var searchParams = {
                                'storeCd': 'sec',
                                'colorChip' : 'N'
                                // 'year': '2020' 2021 김치 4도어 추가
                            };
                            $.ajax({
                                url: "/sec/xhr/bespoke/productInfo",
                                dataType: 'json',
                                type: 'POST',
                                data: searchParams,
                                jsonpCallback: "jsonpcallback_bespoke",
                                success: function (result) {
                                    var data = new Array();
                                    data.push(result.data);
                                    console.log(result.data);
                                    data.push(result.sessionMap);

                                    //로그인 사용자 정보 설정.
                                    isLogin = data[1].isLogin;
                                    // s - 2020-06-01  - 검증화면
                                    if(data[1].isBespokeLogin !== 'undefined'  && data[1].isBespokeLogin == 'N'){
                                        if($('#bespokeLogin')){
                                            $('#bespokeLogin').trigger("click");
                                        }
                                    }
                                    //  e - 2020-06-01
                                    init(data[0]);
                                },
                                error: function (xhr) {
                                }
                            });
                            popup.act();
                            buyNow();
                            dirbuyNow();
                            insertCart();
                            collaboSlick();
                            showArPopup();
                            colorTab();
                            if (!mobileFlag) { selectionFixedFunc.selectionFixedPc();}
                        };

                        return customizingRef;
                    })(document, window, jQuery);

                    $(document).ready(function () {
                        customizingRef.init();
                    });


//  Sortable
                    (function ($) {
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

                        Sortable.prototype.invoke = function (command) {
                            var self = this;
                            if (command === 'destroy') {
                                return self.destroy();
                            } else if (command === 'serialize') {
                                return self.serialize(self.$sortable);
                            }
                        };

                        Sortable.prototype.init = function () {
                            var self = this,
                                $clone,
                                $placeholder,
                                origin;
                            if (self.options.make_unselectable) {
                                $('html').unselectable();
                            }
                            self.$sortable
                                .addClass('sortable')
                                .on('destroy.sortable', function () {
                                    self.destroy();
                                });

                            function find_insert_point($node, offset) {
                                var containers,best,depth;
                                if (!offset) { return;}
                                containers = self.$sortable
                                    .add(self.$sortable.find(self.options.container))
                                    .not($node.find(self.options.container))
                                    .not($clone.find(self.options.container))
                                    .not(self.find_nodes());
                                if (self.options.same_depth) {
                                    depth = $node.parent().nestingDepth('ul');
                                    containers = containers.filter(function () {
                                        return $(this).nestingDepth('ul') == depth;
                                    });
                                }
                                $placeholder.hide();
                                containers.each(function (ix, container) {
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
                                dragstart: function (evt) {
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
                                        self.find_nodes().filter(function (ix, el) {
                                            return $(el).find(self.options.container).length == 0;
                                        }).append('<' + self.options.container_type + ' class="' + self.options.auto_container_class + '"/>');
                                    }
                                },
                                drag: function (evt, pos) {
                                    var $node = $(this),
                                        offset = origin.absolutize(pos),
                                        best = find_insert_point($node, offset);

                                    $clone.offset(offset);
                                    insert($placeholder, best);
                                },
                                dragstop: function (evt, pos) {
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

                        Sortable.prototype.destroy = function () {
                            var self = this;
                            if (self.options.make_unselectable) {
                                $('html').unselectable('destroy');
                            }
                            self.$sortable
                                .removeClass('sortable')
                                .off('.sortable')
                                .dragaware('destroy');
                        };

                        Sortable.prototype.serialize = function (container) {
                            var self = this;
                            return container.children(self.options.nodes).not(self.options.container).map(function (ix, el) {
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

                        Sortable.prototype.find_nodes = function () {
                            var self = this;
                            return self.$sortable.find(self.options.nodes).not(self.options.container);
                        };

                        Sortable.prototype.create_placeholder = function () {
                            var self = this;
                            return $('<' + self.options.nodes_type + '/>')
                                .addClass('sortable_placeholder')
                                .addClass(self.options.placeholder_class);
                        };

                        Sortable.prototype.square_dist = function (pos1, pos2) {
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

                        Draggable_local.prototype.init = function () {
                            var self = this,
                                $clone,
                                origin;
                            self.$draggable
                                .addClass('draggable')
                                .on('destroy.draggable', function () {
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
                                dragstart: function (evt) {
                                    var $this = $(this);
                                    if (self.options.placeholder || self.options.revert) {
                                        $clone = $this.clone()
                                            .removeAttr('id')
                                            .addClass('draggable_clone')
                                            .css({ position: 'absolute',display:'none'})
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
                                drag: function (evt, pos) {
                                    var $droptarget = check_droptarget(pos);
                                    $clone.offset(origin.absolutize(pos));
                                },
                                dragstop: function (evt, pos) {
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

                        Draggable_local.prototype.destroy = function () {
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

                        Droppable.prototype.init = function () {
                            var self = this;

                            self.$droppable
                                .addClass('droppable')
                                .on('drop', function (evt, $draggable) {
                                    if (self.options.accept && !$draggable.is(self.options.accept)) {
                                        return;
                                    }
                                    if (self.options.drop) {
                                        self.options.drop.call(self.$droppable, evt, $draggable);
                                    }
                                })
                                .on('destroy.droppable', function () {
                                    self.destroy();
                                });
                        };

                        Droppable.prototype.destroy = function () {
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
                                scrolltimeout = window.setTimeout(function () { autoscroll(pos); }, options.scrolltimeout);
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

                            $dragaware.on('destroy.dragaware', function () {
                                $dragaware
                                    .removeClass('dragaware')
                                    .off('.dragaware');
                            });
                        }

                        function PositionHelper(origin) {
                            this.origin = origin;
                        }

                        PositionHelper.prototype.absolutize = function (pos) {
                            if (!pos) {
                                return this.origin;
                            }
                            return { top: this.origin.top + pos.dY, left: this.origin.left + pos.dX };

                        };

                        $.fn.sortable = function (options) {
                            var filtered = this.not(function () {
                                return $(this).is('.sortable') || $(this).closest('.sortable').length;
                            });
                            if (this.data('sortable') && typeof options === 'string') {
                                return this.data('sortable').invoke(options);
                            }
                            if (filtered.length && options && options.group) {
                                new Sortable(filtered, options);
                            } else {
                                filtered.each(function (ix, el) {
                                    new Sortable(el, options);
                                });
                            }
                            return this;
                        };

                        $.fn.draggable_local = function (options) {
                            if (options === 'destroy') {
                                this.trigger('destroy.draggable');
                            } else {
                                this.not('.draggable').each(function (ix, el) {
                                    new Draggable_local(el, options);
                                });
                            }
                            return this;
                        };

                        $.fn.droppable = function (options) {
                            if (options === 'destroy') {
                                this.trigger('destroy.droppable');
                            } else {
                                this.not('.droppable').each(function (ix, el) {
                                    new Droppable(el, options);
                                });
                            }
                            return this;
                        };

                        $.fn.dragaware = function (options) {
                            if (options === 'destroy') {
                                this.trigger('destroy.dragaware');
                            } else {
                                this.not('.dragaware').each(function (ix, el) {
                                    new Dragaware(el, options);
                                });
                            }
                            return this;
                        };

                        $.fn.unselectable = function (command) {
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

                        $.fn.invisible = function () {
                            return this.css({ visibility: 'hidden' });
                        };

                        $.fn.visible = function () {
                            return this.css({ visibility: 'visible' });
                        };

                        $.fn.scrollParent = function () {
                            return this.parents().addBack().filter(function () {
                                var p = $(this);
                                return (/(scroll|auto)/).test(p.css("overflow-x") + p.css("overflow-y") + p.css("overflow"));
                            });
                        };

                        $.fn.nestingDepth = function (selector) {
                            var parent = this.parent().closest(selector || '*');
                            if (parent.length) {
                                return parent.nestingDepth(selector) + 1;
                            } else {
                                return 0;
                            }
                        };

                    }(jQuery));

                    function packageOption(){
                        $('.type7_slick').not('.slick-initialized').slick({
                            infinite: false
                        });   //200624 - 패키지 슬라이드
                    };

                    var prevWidth = window.innerWidth;

                    $(window).resize(function(){
                        var winWidth = this.innerWidth;
                        if( prevWidth < 769 && winWidth > 768 ) {
                            console.log('pc');
                        } else if ( prevWidth > 768 && winWidth < 769){
                            console.log('mo');
                        }
                        prevWidth = winWidth;
                    });
					
                });
                

                function isEmpty(val){

                    if(typeof val == "undefined" || val == null || val == "" || val == undefined || val == "undefined"){

                        return "";
                    }else{
                        return val ;
                    }
                }

                function getPositionText(code){
                    var txt = '';
                    var cd = isEmpty(code);
                    if(cd == 'U'){
                        txt = '상칸';
                    }else if(cd == 'M'){
                        txt = '중칸';
                    }else if(cd == 'B'){
                        txt = '하칸';
                    }else{
                        txt = '';
                    }
                    return txt;
                }
                
                

                ;(function(win,doc,callback){'use strict';callback=callback||function(){};function detach(){if(doc.addEventListener){doc.removeEventListener('DOMContentLoaded',completed);}else{doc.detachEvent('onreadystatechange',completed);}}function completed(){if(doc.addEventListener||event.type==='load'||doc.readyState==='complete'){detach();callback(window,window.jQuery);}}function init(){if (doc.addEventListener){doc.addEventListener('DOMContentLoaded',completed);}else{doc.attachEvent('onreadystatechange',completed);}}init();})(window,document,function(win,$){
                    // if( !window.DEBUG_MODE ) {
                    //     window.console = {
                    //         log: function() {},
                    //         dir: function() {},
                    //         warn: function() {},
                    //         error: function() {}
                    //     }
                    // }

                    let DownloadImgHeight = 0,
                        FreesetType = false;

                    function browserIs() {
                        var agent = navigator.userAgent.toLowerCase();
                        function has(param) {
                            return agent.indexOf(param) != -1;
                        }
                        if( has("msie") || has("trident") || has(" edge") )		return "IE";

                        if( has("mobile") )			return "MOBILE";
                        else						return "ELSE";
                    }
                    function isSafari() {
                        var	ua = navigator.userAgent.toLowerCase();
                        return ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1 && ua.indexOf('crios') == -1;
                    }

                    var _deviceCanvas = document.createElement("canvas");
                    function detectmobilebrowser() {
                        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|android|playbook|silk|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) ||
                                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4)))
                            return true;
    // Lying iOS13 iPad
                        if (userAgent.match(/Macintosh/i) !== null) {
                            // need to distinguish between Macbook and iPad
                            var canvas = _deviceCanvas;
                            if (canvas !== null) {
                                var context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                                if (context) {
                                    var info = context.getExtension("WEBGL_debug_renderer_info");
                                    if (info) {
                                        var renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
                                        if (renderer.indexOf("Apple") !== -1)
                                            return true;
                                    }
                                }
                            }
                        }
                        return false;
                    }

                    ;(function($){

    					//0227 json 분리 (json.js)

                        /*! Sortable 1.10.2 - MIT | git://github.com/SortableJS/Sortable.git */
                        !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function I(i){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,o;e=i,o=r[n=t],n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o})}return i}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],0<=e.indexOf(n)||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function e(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var w=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),E=t(/Edge/i),c=t(/firefox/i),s=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),i=t(/chrome/i)&&t(/android/i),r={capture:!1,passive:!1};function u(t,e,n){t.addEventListener(e,n,!w&&r)}function d(t,e,n){t.removeEventListener(e,n,!w&&r)}function h(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function P(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&h(t,e):h(t,e))||o&&t===n)return t;if(t===n)break}while(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode)}var i;return null}var f,p=/\s+/g;function k(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(p," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(p," ")}}function R(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=R(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function g(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function N(){var t=document.scrollingElement;return t||document.documentElement}function X(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d;if(d=t!==window&&t!==N()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!w))do{if(i&&i.getBoundingClientRect&&("none"!==R(i,"transform")||n&&"static"!==R(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(R(i,"border-top-width")),l-=h.left+parseInt(R(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);if(o&&t!==window){var f=v(i||t),p=f&&f.a,g=f&&f.d;f&&(s=(a/=g)+(u/=g),c=(l/=p)+(d/=p))}return{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function Y(t,e,n){for(var o=H(t,!0),i=X(t)[e];o;){var r=X(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===N())break;o=H(o,!1)}return!1}function m(t,e,n){for(var o=0,i=0,r=t.children;i<r.length;){if("none"!==r[i].style.display&&r[i]!==Rt.ghost&&r[i]!==Rt.dragged&&P(r[i],n.draggable,t,!1)){if(o===e)return r[i];o++}i++}return null}function B(t,e){for(var n=t.lastElementChild;n&&(n===Rt.ghost||"none"===R(n,"display")||e&&!h(n,e));)n=n.previousElementSibling;return n||null}function F(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Rt.clone||e&&!h(t,e)||n++;return n}function b(t){var e=0,n=0,o=N();if(t)do{var i=v(t),r=i.a,a=i.d;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function H(t,e){if(!t||!t.getBoundingClientRect)return N();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=R(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return N();if(o||e)return n;o=!0}}}while(n=n.parentNode);return N()}function y(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function D(e,n){return function(){if(!f){var t=arguments;1===t.length?e.call(this,t[0]):e.apply(this,t),f=setTimeout(function(){f=void 0},n)}}}function L(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function S(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function _(t,e){R(t,"position","absolute"),R(t,"top",e.top),R(t,"left",e.left),R(t,"width",e.width),R(t,"height",e.height)}function C(t){R(t,"position",""),R(t,"top",""),R(t,"left",""),R(t,"width",""),R(t,"height","")}var j="Sortable"+(new Date).getTime();function T(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){if("none"!==R(t,"display")&&t!==Rt.ghost){o.push({target:t,rect:X(t)});var e=I({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=v(t,!0);n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=X(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&y(r,i)&&!y(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(e=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(l,r,a,c.options)),y(i,o)||(n.prevFromRect=o,n.prevToRect=i,e||(e=c.options.animation),c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){if(o){R(t,"transition",""),R(t,"transform","");var i=v(this.el),r=i&&i.a,a=i&&i.d,l=(e.left-n.left)/(r||1),s=(e.top-n.top)/(a||1);t.animatingX=!!l,t.animatingY=!!s,R(t,"transform","translate3d("+l+"px,"+s+"px,0)"),function(t){t.offsetWidth}(t),R(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),R(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){R(t,"transition",""),R(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}}var x=[],M={initializeByDefault:!0},O={mount:function(t){for(var e in M)!M.hasOwnProperty(e)||e in t||(t[e]=M[e]);x.push(t)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";x.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](I({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](I({sortable:n},o)))})},initializePlugins:function(o,i,r,t){for(var e in x.forEach(function(t){var e=t.pluginName;if(o.options[e]||t.initializeByDefault){var n=new t(o,i,o.options);n.sortable=o,n.options=o.options,o[e]=n,a(r,n.defaults)}}),o.options)if(o.options.hasOwnProperty(e)){var n=this.modifyOption(o,e,o.options[e]);void 0!==n&&(o.options[e]=n)}},getEventProperties:function(e,n){var o={};return x.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return x.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function A(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,v=e.options,m="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||w||E?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var b=I({},p,O.getEventProperties(o,e));for(var y in b)g[y]=b[y];n&&n.dispatchEvent(g),v[m]&&v[m].call(e,g)}}function K(t,e,n){var o=2<arguments.length&&void 0!==n?n:{},i=o.evt,r=l(o,["evt"]);O.pluginEvent.bind(Rt)(t,e,I({dragEl:z,parentEl:G,ghostEl:U,rootEl:q,nextEl:V,lastDownEl:Z,cloneEl:Q,cloneHidden:$,dragStarted:dt,putSortable:it,activeSortable:Rt.active,originalEvent:i,oldIndex:J,oldDraggableIndex:et,newIndex:tt,newDraggableIndex:nt,hideGhostForTarget:Nt,unhideGhostForTarget:It,cloneNowHidden:function(){$=!0},cloneNowShown:function(){$=!1},dispatchSortableEvent:function(t){W({sortable:e,name:t,originalEvent:i})}},r))}function W(t){A(I({putSortable:it,cloneEl:Q,targetEl:z,rootEl:q,oldIndex:J,oldDraggableIndex:et,newIndex:tt,newDraggableIndex:nt},t))}var z,G,U,q,V,Z,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,vt=!1,mt=!1,bt=[],yt=!1,wt=!1,Et=[],Dt=!1,St=[],_t="undefined"!=typeof document,Ct=n,Tt=E||w?"cssFloat":"float",xt=_t&&!i&&!n&&"draggable"in document.createElement("div"),Mt=function(){if(_t){if(w)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ot=function(t,e){var n=R(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=m(t,0,e),r=m(t,1,e),a=i&&R(i),l=r&&R(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+X(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+X(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==u?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Tt]||r&&"none"===n[Tt]&&o<s+c)?"vertical":"horizontal"},At=function(t){function s(a,l){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==a&&(l||i))return!0;if(null==a||!1===a)return!1;if(l&&"clone"===a)return a;if("function"==typeof a)return s(a(t,e,n,o),l)(t,e,n,o);var r=(l?t:e).options.group.name;return!0===a||"string"==typeof a&&a===r||a.join&&-1<a.indexOf(r)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=s(n.pull,!0),e.checkPut=s(n.put),e.revertClone=n.revertClone,t.group=e},Nt=function(){!Mt&&U&&R(U,"display","none")},It=function(){!Mt&&U&&R(U,"display","")};_t&&document.addEventListener("click",function(t){if(mt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),mt=!1},!0);function Pt(t){if(z){var e=function(r,a){var l;return bt.some(function(t){if(!B(t)){var e=X(t),n=t[j].options.emptyInsertThreshold,o=r>=e.left-n&&r<=e.right+n,i=a>=e.top-n&&a<=e.bottom+n;return n&&o&&i?l=t:void 0}}),l}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[j]._onDragOver(n)}}}function kt(t){z&&z.parentNode[j]._isOutsideThisEl(t.target)}function Rt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ot(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Rt.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var o in O.initializePlugins(this,t,n),n)o in e||(e[o]=n[o]);for(var i in At(e),this)"_"===i.charAt(0)&&"function"==typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&xt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?u(t,"pointerdown",this._onTapStart):(u(t,"mousedown",this._onTapStart),u(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(u(t,"dragover",this),u(t,"dragenter",this)),bt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,T())}function Xt(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return!window.CustomEvent||w||E?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||X(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),d&&(c=d.call(u,s,a)),c}function Yt(t){t.draggable=!1}function Bt(){Dt=!1}function Ft(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Ht(t){return setTimeout(t,0)}function Lt(t){return clearTimeout(t)}Rt.prototype={constructor:Rt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(ht=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,z):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(function(t){St.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&St.push(o)}}(o),!z&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled||s.isContentEditable||(l=P(l,t.draggable,o,!1))&&l.animated||Z===l)){if(J=F(l),et=F(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return W({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),K("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c&&(c=c.split(",").some(function(t){if(t=P(s,t.trim(),o,!1))return W({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),K("filter",n,{evt:e}),!0})))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!P(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;if(n&&!z&&n.parentNode===r){var s=X(n);if(q=r,G=(z=n).parentNode,V=z.nextSibling,Z=n,ot=a.group,rt={target:Rt.dragged=z,clientX:(e||t).clientX,clientY:(e||t).clientY},ct=rt.clientX-s.left,ut=rt.clientY-s.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,z.style["will-change"]="all",o=function(){K("delayEnded",i,{evt:t}),Rt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!c&&i.nativeDraggable&&(z.draggable=!0),i._triggerDragStart(t,e),W({sortable:i,name:"choose",originalEvent:t}),k(z,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){g(z,t.trim(),Yt)}),u(l,"dragover",Pt),u(l,"mousemove",Pt),u(l,"touchmove",Pt),u(l,"mouseup",i._onDrop),u(l,"touchend",i._onDrop),u(l,"touchcancel",i._onDrop),c&&this.nativeDraggable&&(this.options.touchStartThreshold=4,z.draggable=!0),K("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(E||w))o();else{if(Rt.eventCanceled)return void this._onDrop();u(l,"mouseup",i._disableDelayedDrag),u(l,"touchend",i._disableDelayedDrag),u(l,"touchcancel",i._disableDelayedDrag),u(l,"mousemove",i._delayedDragTouchMoveHandler),u(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&u(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){z&&Yt(z),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;d(t,"mouseup",this._disableDelayedDrag),d(t,"touchend",this._disableDelayedDrag),d(t,"touchcancel",this._disableDelayedDrag),d(t,"mousemove",this._delayedDragTouchMoveHandler),d(t,"touchmove",this._delayedDragTouchMoveHandler),d(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?u(document,"pointermove",this._onTouchMove):u(document,e?"touchmove":"mousemove",this._onTouchMove):(u(z,"dragend",this),u(q,"dragstart",this._onDragStart));try{document.selection?Ht(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(vt=!1,q&&z){K("dragStarted",this,{evt:e}),this.nativeDraggable&&u(document,"dragover",kt);var n=this.options;t||k(z,n.dragClass,!1),k(z,n.ghostClass,!0),Rt.active=this,t&&this._appendGhost(),W({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,Nt();for(var t=document.elementFromPoint(at.clientX,at.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY))!==e;)e=t;if(z.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j]){if(e[j]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);It()}},_onTouchMove:function(t){if(rt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=U&&v(U,!0),a=U&&r&&r.a,l=U&&r&&r.d,s=Ct&&gt&&b(gt),c=(i.clientX-rt.clientX+o.x)/(a||1)+(s?s[0]-Et[0]:0)/(a||1),u=(i.clientY-rt.clientY+o.y)/(l||1)+(s?s[1]-Et[1]:0)/(l||1);if(!Rt.active&&!vt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(U){r?(r.e+=c-(lt||0),r.f+=u-(st||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");R(U,"webkitTransform",d),R(U,"mozTransform",d),R(U,"msTransform",d),R(U,"transform",d),lt=c,st=u,at=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!U){var t=this.options.fallbackOnBody?document.body:q,e=X(z,!0,Ct,!0,t),n=this.options;if(Ct){for(gt=t;"static"===R(gt,"position")&&"none"===R(gt,"transform")&&gt!==document;)gt=gt.parentNode;gt!==document.body&&gt!==document.documentElement?(gt===document&&(gt=N()),e.top+=gt.scrollTop,e.left+=gt.scrollLeft):gt=N(),Et=b(gt)}k(U=z.cloneNode(!0),n.ghostClass,!1),k(U,n.fallbackClass,!0),k(U,n.dragClass,!0),R(U,"transition",""),R(U,"transform",""),R(U,"box-sizing","border-box"),R(U,"margin",0),R(U,"top",e.top),R(U,"left",e.left),R(U,"width",e.width),R(U,"height",e.height),R(U,"opacity","0.8"),R(U,"position",Ct?"absolute":"fixed"),R(U,"zIndex","100000"),R(U,"pointerEvents","none"),Rt.ghost=U,t.appendChild(U),R(U,"transform-origin",ct/parseInt(U.style.width)*100+"% "+ut/parseInt(U.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;K("dragStart",this,{evt:t}),Rt.eventCanceled?this._onDrop():(K("setupClone",this),Rt.eventCanceled||((Q=S(z)).draggable=!1,Q.style["will-change"]="",this._hideClone(),k(Q,this.options.chosenClass,!1),Rt.clone=Q),n.cloneId=Ht(function(){K("clone",n),Rt.eventCanceled||(n.options.removeCloneOnHide||q.insertBefore(Q,z),n._hideClone(),W({sortable:n,name:"clone"}))}),e||k(z,i.dragClass,!0),e?(mt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(d(document,"mouseup",n._onDrop),d(document,"touchend",n._onDrop),d(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,z)),u(document,"drop",n),R(z,"transform","translateZ(0)")),vt=!0,n._dragStartId=Ht(n._dragStarted.bind(n,e,t)),u(document,"selectstart",n),dt=!0,s&&R(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,a,l=this.el,s=n.target,e=this.options,t=e.group,c=Rt.active,u=ot===t,d=e.sort,h=it||c,f=this,p=!1;if(!Dt){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),s=P(s,e.draggable,l,!0),M("dragOver"),Rt.eventCanceled)return p;if(z.contains(n.target)||s.animated&&s.animatingX&&s.animatingY||f._ignoreWhileAnimating===s)return A(!1);if(mt=!1,c&&!e.disabled&&(u?d||(r=!q.contains(z)):it===this||(this.lastPutMode=ot.checkPull(this,c,z,n))&&t.checkPut(this,c,z,n))){if(a="vertical"===this._getDirection(n,s),o=X(z),M("dragOverValid"),Rt.eventCanceled)return p;if(r)return G=q,O(),this._hideClone(),M("revert"),Rt.eventCanceled||(V?q.insertBefore(z,V):q.appendChild(z)),A(!0);var g=B(l,e.draggable);if(!g||function(t,e,n){var o=X(B(n.el,n.options.draggable));return e?t.clientX>o.right+10||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+10}(n,a,this)&&!g.animated){if(g===z)return A(!1);if(g&&l===n.target&&(s=g),s&&(i=X(s)),!1!==Xt(q,l,z,o,s,i,n,!!s))return O(),l.appendChild(z),G=l,N(),A(!0)}else if(s.parentNode===l){i=X(s);var v,m,b,y=z.parentNode!==l,w=!function(t,e,n){var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,l=n?e.right:e.bottom,s=n?e.width:e.height;return o===a||i===l||o+r/2===a+s/2}(z.animated&&z.toRect||o,s.animated&&s.toRect||i,a),E=a?"top":"left",D=Y(s,"top","top")||Y(z,"top","top"),S=D?D.scrollTop:void 0;if(ht!==s&&(m=i[E],yt=!1,wt=!w&&e.invertSwap||y),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&pt<c*i){if(!yt&&(1===ft?u+c*r/2<s:s<d-c*r/2)&&(yt=!0),yt)h=!0;else if(1===ft?s<u+pt:d-pt<s)return-ft}else if(u+c*(1-i)/2<s&&s<d-c*(1-i)/2)return function(t){return F(z)<F(t)?1:-1}(e);if((h=h||a)&&(s<u+c*r/2||d-c*r/2<s))return u+c/2<s?1:-1;return 0}(n,s,i,a,w?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,wt,ht===s)))for(var _=F(z);_-=v,(b=G.children[_])&&("none"===R(b,"display")||b===U););if(0===v||b===s)return A(!1);ft=v;var C=(ht=s).nextElementSibling,T=!1,x=Xt(q,l,z,o,s,i,n,T=1===v);if(!1!==x)return 1!==x&&-1!==x||(T=1===x),Dt=!0,setTimeout(Bt,30),O(),T&&!C?l.appendChild(z):s.parentNode.insertBefore(z,T?C:s),D&&L(D,0,S-D.scrollTop),G=z.parentNode,void 0===m||wt||(pt=Math.abs(m-X(s)[E])),N(),A(!0)}if(l.contains(z))return A(!1)}return!1}function M(t,e){K(t,f,I({evt:n,isOwner:u,axis:a?"vertical":"horizontal",revert:r,dragRect:o,targetRect:i,canSort:d,fromSortable:h,target:s,completed:A,onMove:function(t,e){return Xt(q,l,z,o,t,X(t),n,e)},changed:N},e))}function O(){M("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState()}function A(t){return M("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(k(z,it?it.options.ghostClass:c.options.ghostClass,!1),k(z,e.ghostClass,!0)),it!==f&&f!==Rt.active?it=f:f===Rt.active&&it&&(it=null),h===f&&(f._ignoreWhileAnimating=s),f.animateAll(function(){M("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(s===z&&!z.animated||s===l&&!s.animated)&&(ht=null),e.dragoverBubble||n.rootEl||s===document||(z.parentNode[j]._isOutsideThisEl(n.target),t||Pt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=!0}function N(){tt=F(z),nt=F(z,e.draggable),W({sortable:f,name:"change",toEl:l,newIndex:tt,newDraggableIndex:nt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){d(document,"mousemove",this._onTouchMove),d(document,"touchmove",this._onTouchMove),d(document,"pointermove",this._onTouchMove),d(document,"dragover",Pt),d(document,"mousemove",Pt),d(document,"touchmove",Pt)},_offUpEvents:function(){var t=this.el.ownerDocument;d(t,"mouseup",this._onDrop),d(t,"touchend",this._onDrop),d(t,"pointerup",this._onDrop),d(t,"touchcancel",this._onDrop),d(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;tt=F(z),nt=F(z,n.draggable),K("drop",this,{evt:t}),G=z&&z.parentNode,tt=F(z),nt=F(z,n.draggable),Rt.eventCanceled||(yt=wt=vt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Lt(this.cloneId),Lt(this._dragStartId),this.nativeDraggable&&(d(document,"drop",this),d(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),s&&R(document.body,"user-select",""),R(z,"transform",""),t&&(dt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),U&&U.parentNode&&U.parentNode.removeChild(U),(q===G||it&&"clone"!==it.lastPutMode)&&Q&&Q.parentNode&&Q.parentNode.removeChild(Q),z&&(this.nativeDraggable&&d(z,"dragend",this),Yt(z),z.style["will-change"]="",dt&&!vt&&k(z,it?it.options.ghostClass:this.options.ghostClass,!1),k(z,this.options.chosenClass,!1),W({sortable:this,name:"unchoose",toEl:G,newIndex:null,newDraggableIndex:null,originalEvent:t}),q!==G?(0<=tt&&(W({rootEl:G,name:"add",toEl:G,fromEl:q,originalEvent:t}),W({sortable:this,name:"remove",toEl:G,originalEvent:t}),W({rootEl:G,name:"sort",toEl:G,fromEl:q,originalEvent:t}),W({sortable:this,name:"sort",toEl:G,originalEvent:t})),it&&it.save()):tt!==J&&0<=tt&&(W({sortable:this,name:"update",toEl:G,originalEvent:t}),W({sortable:this,name:"sort",toEl:G,originalEvent:t})),Rt.active&&(null!=tt&&-1!==tt||(tt=J,nt=et),W({sortable:this,name:"end",toEl:G,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){K("nulling",this),q=z=G=U=V=Q=Z=$=rt=at=dt=tt=nt=J=et=ht=ft=it=ot=Rt.dragged=Rt.ghost=Rt.clone=Rt.active=null,St.forEach(function(t){t.checked=!0}),St.length=lt=st=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":z&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)P(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Ft(t));return e},sort:function(t){var o={},i=this.el;this.toArray().forEach(function(t,e){var n=i.children[e];P(n,this.options.draggable,i,!1)&&(o[t]=n)},this),t.forEach(function(t){o[t]&&(i.removeChild(o[t]),i.appendChild(o[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return P(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=O.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&At(n)},destroy:function(){K("destroy",this);var t=this.el;t[j]=null,d(t,"mousedown",this._onTapStart),d(t,"touchstart",this._onTapStart),d(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(d(t,"dragover",this),d(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),bt.splice(bt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!$){if(K("hideClone",this),Rt.eventCanceled)return;R(Q,"display","none"),this.options.removeCloneOnHide&&Q.parentNode&&Q.parentNode.removeChild(Q),$=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if($){if(K("showClone",this),Rt.eventCanceled)return;q.contains(z)&&!this.options.group.revertClone?q.insertBefore(Q,z):V?q.insertBefore(Q,V):q.appendChild(Q),this.options.group.revertClone&&this.animate(z,Q),R(Q,"display",""),$=!1}}else this._hideClone()}},_t&&u(document,"touchmove",function(t){(Rt.active||vt)&&t.cancelable&&t.preventDefault()}),Rt.utils={on:u,off:d,css:R,find:g,is:function(t,e){return!!P(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:D,closest:P,toggleClass:k,clone:S,index:F,nextTick:Ht,cancelNextTick:Lt,detectDirection:Ot,getChild:m},Rt.get=function(t){return t[j]},Rt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Rt.utils=I({},Rt.utils,t.utils)),O.mount(t)})},Rt.create=function(t,e){return new Rt(t,e)};var jt,Kt,Wt,zt,Gt,Ut,qt=[],Vt=!(Rt.version="1.10.2");function Zt(){qt.forEach(function(t){clearInterval(t.pid)}),qt=[]}function Qt(){clearInterval(Ut)}function $t(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var s=n||i;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(c.clientX,c.clientY);l(),s&&!s.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}}var Jt,te=D(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=N(),u=!1;Kt!==e&&(Kt=e,Zt(),jt=t.scroll,i=t.scrollFn,!0===jt&&(jt=H(e,!0)));var d=0,h=jt;do{var f=h,p=X(f),g=p.top,v=p.bottom,m=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,_=f.scrollHeight,C=R(f),T=f.scrollLeft,x=f.scrollTop;D=f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY));var M=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(m-r)<=l&&!!T),O=D&&(Math.abs(v-a)<=l&&x+w<_)-(Math.abs(g-a)<=l&&!!x);if(!qt[d])for(var A=0;A<=d;A++)qt[A]||(qt[A]={});qt[d].vx==M&&qt[d].vy==O&&qt[d].el===f||(qt[d].el=f,qt[d].vx=M,qt[d].vy=O,clearInterval(qt[d].pid),0==M&&0==O||(u=!0,qt[d].pid=setInterval(function(){o&&0===this.layer&&Rt.active._onTouchMove(Gt);var t=qt[this.layer].vy?qt[this.layer].vy*s:0,e=qt[this.layer].vx?qt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Rt.dragged.parentNode[j],e,t,n,Gt,qt[this.layer].el)||L(qt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=H(h,!1)));Vt=u}},30);function ee(){}function ne(){}ee.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=m(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:$t},a(ee,{pluginName:"revertOnSpill"}),ne.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:$t},a(ne,{pluginName:"removeOnSpill"});var oe,ie,re,ae,le,se=[],ce=[],ue=!1,de=!1,he=!1;function fe(o,i){ce.forEach(function(t,e){var n=i.children[t.sortableIndex+(o?Number(e):0)];n?i.insertBefore(t,n):i.appendChild(t)})}function pe(){se.forEach(function(t){t!==re&&t.parentNode&&t.parentNode.removeChild(t)})}return Rt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?u(document,"dragover",this._handleAutoScroll):this.options.supportPointer?u(document,"pointermove",this._handleFallbackAutoScroll):e.touches?u(document,"touchmove",this._handleFallbackAutoScroll):u(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?d(document,"dragover",this._handleAutoScroll):(d(document,"pointermove",this._handleFallbackAutoScroll),d(document,"touchmove",this._handleFallbackAutoScroll),d(document,"mousemove",this._handleFallbackAutoScroll)),Qt(),Zt(),clearTimeout(f),f=void 0},nulling:function(){Gt=Kt=jt=Vt=Ut=Wt=zt=null,qt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o=this,i=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(i,r);if(Gt=e,n||E||w||s){te(e,this.options,t,n);var a=H(t,!0);!Vt||Ut&&i===Wt&&r===zt||(Ut&&Qt(),Ut=setInterval(function(){var t=H(document.elementFromPoint(i,r),!0);t!==a&&(a=t,Zt()),te(e,o.options,t,n)},10),Wt=i,zt=r)}else{if(!this.options.bubbleScroll||H(t,!0)===N())return void Zt();te(e,this.options,H(t,!1),!1)}}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Rt.mount(ne,ee),Rt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){var e=t.dragEl;Jt=e},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;if(i.options.swap){var l=this.sortable.el,s=this.options;if(n&&n!==l){var c=Jt;Jt=!1!==o(n)?(k(n,s.swapClass,!0),n):null,c&&c!==Jt&&k(c,s.swapClass,!1)}r(),e(!0),a()}},drop:function(t){var e=t.activeSortable,n=t.putSortable,o=t.dragEl,i=n||this.sortable,r=this.options;Jt&&k(Jt,r.swapClass,!1),Jt&&(r.swap||n&&n.options.swap)&&o!==Jt&&(i.captureAnimationState(),i!==e&&e.captureAnimationState(),function(t,e){var n,o,i=t.parentNode,r=e.parentNode;if(!i||!r||i.isEqualNode(e)||r.isEqualNode(t))return;n=F(t),o=F(e),i.isEqualNode(r)&&n<o&&o++;i.insertBefore(e,i.children[n]),r.insertBefore(t,r.children[o])}(o,Jt),i.animateAll(),i!==e&&e.animateAll())},nulling:function(){Jt=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Jt}}})}),Rt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.supportPointer?u(document,"pointerup",this._deselectMultiDrag):(u(document,"mouseup",this._deselectMultiDrag),u(document,"touchend",this._deselectMultiDrag)),u(document,"keydown",this._checkKeyDown),u(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,e){var n="";se.length&&ie===o?se.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){var e=t.dragEl;re=e},delayEnded:function(){this.isMultiDrag=~se.indexOf(re)},setupClone:function(t){var e=t.sortable,n=t.cancel;if(this.isMultiDrag){for(var o=0;o<se.length;o++)ce.push(S(se[o])),ce[o].sortableIndex=se[o].sortableIndex,ce[o].draggable=!1,ce[o].style["will-change"]="",k(ce[o],this.options.selectedClass,!1),se[o]===re&&k(ce[o],this.options.chosenClass,!1);e._hideClone(),n()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,i=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||se.length&&ie===e&&(fe(!0,n),o("clone"),i()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,o=t.cancel;this.isMultiDrag&&(fe(!1,n),ce.forEach(function(t){R(t,"display","")}),e(),le=!1,o())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),o=t.cancel;this.isMultiDrag&&(ce.forEach(function(t){R(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),le=!0,o())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&ie&&ie.multiDrag._deselectMultiDrag(),se.forEach(function(t){t.sortableIndex=F(t)}),se=se.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),he=!0},dragStarted:function(t){var e=this,n=t.sortable;if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){se.forEach(function(t){t!==re&&R(t,"position","absolute")});var o=X(re,!1,!0,!0);se.forEach(function(t){t!==re&&_(t,o)}),ue=de=!0}n.animateAll(function(){ue=de=!1,e.options.animation&&se.forEach(function(t){C(t)}),e.options.sort&&pe()})}},dragOver:function(t){var e=t.target,n=t.completed,o=t.cancel;de&&~se.indexOf(e)&&(n(!1),o())},revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect;1<se.length&&(se.forEach(function(t){o.addAnimationState({target:t,rect:de?X(t):i}),C(t),t.fromRect=i,e.removeAnimationState(t)}),de=!1,function(o,i){se.forEach(function(t,e){var n=i.children[t.sortableIndex+(o?Number(e):0)];n?i.insertBefore(t,n):i.appendChild(t)})}(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(t){var e=t.sortable,n=t.isOwner,o=t.insertion,i=t.activeSortable,r=t.parentEl,a=t.putSortable,l=this.options;if(o){if(n&&i._hideClone(),ue=!1,l.animation&&1<se.length&&(de||!n&&!i.options.sort&&!a)){var s=X(re,!1,!0,!0);se.forEach(function(t){t!==re&&(_(t,s),r.appendChild(t))}),de=!0}if(!n)if(de||pe(),1<se.length){var c=le;i._showClone(e),i.options.animation&&!le&&c&&ce.forEach(function(t){i.addAnimationState({target:t,rect:ae}),t.fromRect=ae,t.thisAnimationDuration=null})}else i._showClone(e)}},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(se.forEach(function(t){t.thisAnimationDuration=null}),o.options.animation&&!n&&o.multiDrag.isMultiDrag){ae=a({},e);var i=v(re,!0);ae.top-=i.f,ae.left-=i.e}},dragOverAnimationComplete:function(){de&&(de=!1,pe())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c=this.options,u=o.children;if(!he)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),k(re,c.selectedClass,!~se.indexOf(re)),~se.indexOf(re))se.splice(se.indexOf(re),1),oe=null,A({sortable:i,rootEl:n,name:"deselect",targetEl:re,originalEvt:e});else{if(se.push(re),A({sortable:i,rootEl:n,name:"select",targetEl:re,originalEvt:e}),e.shiftKey&&oe&&i.el.contains(oe)){var d,h,f=F(oe),p=F(re);if(~f&&~p&&f!==p)for(d=f<p?(h=f,p):(h=p,f+1);h<d;h++)~se.indexOf(u[h])||(k(u[h],c.selectedClass,!0),se.push(u[h]),A({sortable:i,rootEl:n,name:"select",targetEl:u[h],originalEvt:e}))}else oe=re;ie=s}if(he&&this.isMultiDrag){if((o[j].options.sort||o!==n)&&1<se.length){var g=X(re),v=F(re,":not(."+this.options.selectedClass+")");if(!ue&&c.animation&&(re.thisAnimationDuration=null),s.captureAnimationState(),!ue&&(c.animation&&(re.fromRect=g,se.forEach(function(t){if(t.thisAnimationDuration=null,t!==re){var e=de?X(t):g;t.fromRect=e,s.addAnimationState({target:t,rect:e})}})),pe(),se.forEach(function(t){u[v]?o.insertBefore(t,u[v]):o.appendChild(t),v++}),a===F(re))){var m=!1;se.forEach(function(t){t.sortableIndex===F(t)||(m=!0)}),m&&r("update")}se.forEach(function(t){C(t)}),s.animateAll()}ie=s}(n===o||l&&"clone"!==l.lastPutMode)&&ce.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=he=!1,ce.length=0},destroyGlobal:function(){this._deselectMultiDrag(),d(document,"pointerup",this._deselectMultiDrag),d(document,"mouseup",this._deselectMultiDrag),d(document,"touchend",this._deselectMultiDrag),d(document,"keydown",this._checkKeyDown),d(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==he&&he||ie!==this.sortable||t&&P(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;se.length;){var e=se[0];k(e,this.options.selectedClass,!1),se.shift(),A({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~se.indexOf(t)&&(ie&&ie!==e&&(ie.multiDrag._deselectMultiDrag(),ie=e),k(t,e.options.selectedClass,!0),se.push(t))},deselect:function(t){var e=t.parentNode[j],n=se.indexOf(t);e&&e.options.multiDrag&&~n&&(k(t,e.options.selectedClass,!1),se.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return se.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=de&&t!==re?-1:de?F(t,":not(."+n.options.selectedClass+")"):F(t),i.push({multiDragElement:t,index:e})}),{items:e(se),clones:[].concat(ce),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Rt});
                        /**
                         * Swiper 5.3.6
                         * Most modern mobile touch slider and framework with hardware accelerated transitions
                         * http://swiperjs.com
                         *
                         * Copyright 2014-2020 Vladimir Kharlampidi
                         *
                         * Released under the MIT License
                         *
                         * Released on: February 29, 2020
                         */
                        /*!
                         * GSAP 3.2.6
                         * https://greensock.com
                         *
                         * @license Copyright 2020, GreenSock. All rights reserved.
                         * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
                         * @author: Jack Doyle, jack@greensock.com
                         */

                        !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function K(t){return(l=pt(t,at))&&ie}function L(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function M(t,e){return!e&&console.warn(t)}function N(t,e){return t&&(at[t]=e)&&l&&(l[t]=e)||at}function O(){return 0}function Y(t){var e,i,n=t[0];if(r(n)||o(n)||(t=[t]),!(e=(n._gsap||{}).harness)){for(i=dt.length;i--&&!dt[i].targetTest(n););e=dt[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ft(t[i],e)))||t.splice(i,1);return t}function Z(t){return t._gsap||Y(yt(t))[0]._gsap}function $(t,e){var r=t[e];return o(r)?t[e]():q(r)&&t.getAttribute(e)||r}function _(t,e){return(t=t.split(",")).forEach(e)||t}function aa(t){return Math.round(1e5*t)/1e5||0}function ba(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ca(t,e,r){var i,n=p(t[1]),a=(n?2:1)+(e<2?0:1),o=t[a];if(n&&(o.duration=t[1]),o.parent=r,e){for(i=o;r&&!("immediateRender"in i);)i=r.vars.defaults||{},r=s(r.vars.inherit)&&r.parent;o.immediateRender=s(i.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return o}function da(){var t,e,r=ot.length,i=ot.slice(0);for(ut={},t=ot.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ea(t,e,r,i){ot.length&&da(),t.render(e,r,i),ot.length&&da()}function fa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(nt).length<2?e:t}function ga(t){return t}function ha(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ia(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ka(t,e){for(var i in e)t[i]=r(e[i])?ka(t[i]||(t[i]={}),e[i]):e[i];return t}function la(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function ma(t){var e=t.parent||F,r=t.keyframes?ia:ha;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent;return t}function pa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function qa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ra(t){for(var e=t;e;)e._dirty=1,e=e.parent;return t}function ua(t){return t._repeat?_t(t._tTime,t=t.duration()+t._rDelay)*t:0}function wa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function xa(t){return t._end=aa(t._start+(t._tDur/Math.abs(t._ts||t._rts||B)||0))}function ya(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=wa(t.rawTime(),e),(!e._dur||gt(0,e.totalDuration(),r)-e._tTime>B)&&e.render(r,!0)),ra(t)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-B}}function za(t,e,r,i){return e.parent&&qa(e),e._start=aa(r+e._delay),e._end=aa(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||ya(t,e),t}function Aa(t,e,r,i){return qt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==Ot.frame?(ot.push(t),t._lazy=[e,i],1):void 0:1}function Da(t,e,r){var i=t._repeat,n=aa(e)||0;return t._dur=n,t._tDur=i?i<0?1e12:aa(n*(i+1)+t._rDelay*i):n,t._time>n&&(t._time=n,t._tTime=Math.min(t._tTime,t._tDur)),r||ra(t.parent),t.parent&&xa(t),t}function Ea(t){return t instanceof Bt?ra(t):Da(t,t._dur)}function Ga(t,e){var r,i,a=t.labels,s=t._recent||mt,o=t.duration()>=R?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ga(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Ha(t,e){return t||0===t?e(t):e}function Ja(t){return(t+"").substr((parseFloat(t)+"").length)}function Ma(t,e){return t&&r(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&r(t[0]))&&!t.nodeType&&t!==i}function Pa(t){return t.sort(function(){return.5-Math.random()})}function Qa(t){if(o(t))return t;var p=r(t)?t:{each:t},_=Dt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,T=p.axis,b=m,w=m;return n(m)?b=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(b=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=v[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,R])[1])){for(h=-R;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=v[d]=[],i=y?Math.min(f,d)*b-.5:m%f,n=y?d*w/f-.5:m/f|0,l=R,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):j(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Pa(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ja(p.amount||p.each)||0,_=_&&d<0?zt(_):_}return d=(c[t]-c.min)/c.max||0,aa(c.b+(_?_(d):d)*c.v)+c.u}}function Ra(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return~~(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:Ja(t))}}function Sa(u,t){var h,l,e=H(u);return!e&&r(u)&&(h=e=u.radius||R,u.values?(u=yt(u.values),(l=!p(u[0]))&&(h*=h)):u=Ra(u.increment)),Ha(t,e?o(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=R,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+Ja(t)}:Ra(u))}function Ta(t,e,r,i){return Ha(H(t)?!e:!0===r?!!(r=0):!i,function(){return H(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&~~(Math.round((t+Math.random()*(e-t))/r)*r*i)/i})}function Xa(e,r,t){return Ha(t,function(t){return e[~~r(t)]})}function $a(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?nt:Q),s+=t.substr(a,e-a)+Ta(n?r:+r[0],+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function bb(t,e,r){var i,n,a,s=t.labels,o=R;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function db(t){return qa(t),t.progress()<1&&bt(t,"onInterrupt"),t}function ib(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*wt+.5|0}function jb(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?p(t)?[t>>16,t>>8&wt,t&wt]:0:xt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),xt[t])c=xt[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a),c=[(t=parseInt(t.substr(1),16))>>16,t>>8&wt,t&wt];else if("hsl"===t.substr(0,3))if(c=d=t.match(Q),e){if(~t.indexOf("="))return c=t.match(W),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=ib(s+1/3,i,n),c[1]=ib(s,i,n),c[2]=ib(s-1/3,i,n);else c=t.match(Q)||xt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/wt,n=c[1]/wt,a=c[2]/wt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function kb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(tt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function lb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=jb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=kb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(tt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function ob(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Mt.test(r),t[1]=lb(t[1],e),t[0]=lb(t[0],e,kb(t[1])),!0}function wb(t){var e=(t+"").split("("),r=Pt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(St,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:rt.exec(t)[1].split(",").map(fa)):Pt._CE&&At.test(t)?Pt._CE("",t):r}function zb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return _(t,function(t){for(var e in Pt[t]=at[t]=a,Pt[n=t.toLowerCase()]=r,a)Pt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Pt[t+"."+e]=a[e]}),a}function Ab(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Bb(r,t,e){function Yk(t){return 1===t?1:i*Math.pow(2,-10*t)*J((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/I*(Math.asin(1/i)||0),s="out"===r?Yk:"in"===r?function(t){return 1-Yk(1-t)}:Ab(Yk);return n=I/n,s.config=function(t,e){return Bb(r,t,e)},s}function Cb(e,r){function el(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?el:"in"===e?function(t){return 1-el(1-t)}:Ab(el);return t.config=function(t){return Cb(e,t)},t}var F,i,a,h,l,f,d,c,m,g,v,y,T,b,w,x,k,C,P,A,S,z,D,G={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},E={duration:.5,overwrite:!1,delay:0},R=1e8,B=1/R,I=2*Math.PI,U=I/4,X=0,j=Math.sqrt,V=Math.cos,J=Math.sin,H=Array.isArray,Q=/(?:-?\.?\d|\.)+/gi,W=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,tt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,et=/[-+=.]*\d+(?:\.|e-|e)*\d*/gi,rt=/\(([^()]+)\)/i,it=/[+-]=-?[\.\d]+/,nt=/[#\-+.]*\b[a-z\d-=+%.]+/gi,at={},st={},ot=[],ut={},ht={},lt={},ft=30,dt=[],ct="",pt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},_t=function _animationCycle(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},mt={_start:0,endTime:O},gt=function _clamp(t,e,r){return r<t?t:e<r?e:r},vt=[].slice,yt=function toArray(t,e){return!n(t)||e||!a&&Ct()?H(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return n(t)&&!e||Ma(t,1)?r.push.apply(r,yt(t)):r.push(t)})||r}(t,e):Ma(t)?vt.call(t,0):t?[t]:[]:vt.call(h.querySelectorAll(t),0)},Tt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ha(n,function(t){return r+(t-e)/a*s})},bt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ot.length&&da(),i?s.apply(n,i):s.call(n)},wt=255,xt={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in xt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Mt=/hsl[a]?\(/,Ot=(b=Date.now,w=500,x=33,k=b(),C=k,A=P=1/240,T={time:0,frame:0,tick:function tick(){ck(!0)},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},at.gsap=ie,(i.gsapVersions||(i.gsapVersions=[])).push(ie.version),K(l||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),g&&T.sleep(),v=y||function(t){return setTimeout(t,1e3*(A-T.time)+1|0)},m=1,ck(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(g),m=0,v=O},lagSmoothing:function lagSmoothing(t,e){w=t||1e8,x=Math.min(e,w,0)},fps:function fps(t){P=1/(t||240),A=T.time+P},add:function add(t){S.indexOf(t)<0&&S.push(t),Ct()},remove:function remove(t){var e;~(e=S.indexOf(t))&&S.splice(e,1)},_listeners:S=[]}),Ct=function _wake(){return!m&&Ot.wake()},Pt={},At=/^[\d.\-M][\d.\-,\s]/,St=/["']/g,zt=function _invertEase(e){return function(t){return 1-e(1-t)}},Dt=function _parseEase(t,e){return t&&(o(t)?t:Pt[t]||wb(t))||e};function ck(e){var t,r,i=b()-C,n=!0===e;w<i&&(k+=i-x),C+=i,T.time=(C-k)/1e3,(0<(t=T.time-A)||n)&&(T.frame++,A+=t+(P<=t?.004:P-t),r=1),n||(g=v(ck)),r&&S.forEach(function(t){return t(T.time,i,T.frame,e)})}function vl(t){return t<D?z*t*t:t<.7272727272727273?z*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?z*(t-=2.25/2.75)*t+.9375:z*Math.pow(t-2.625/2.75,2)+.984375}_("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;zb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Pt.Linear.easeNone=Pt.none=Pt.Linear.easeIn,zb("Elastic",Bb("in"),Bb("out"),Bb()),z=7.5625,D=1/2.75,zb("Bounce",function(t){return 1-vl(1-t)},vl),zb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),zb("Circ",function(t){return-(j(1-t*t)-1)}),zb("Sine",function(t){return 1-V(t*U)}),zb("Back",Cb("in"),Cb("out"),Cb()),Pt.SteppedEase=Pt.steps=at.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*gt(0,.99999999,t)|0)+n)*r}}},E.ease=Pt["quad.out"],_("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ct+=t+","+t+"Params,"});var Rt,Ft=function GSCache(t,e){this.id=X++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:$,this.set=e?e.getSetter:Zt},Et=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Da(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(Ct(),!arguments.length)return this._tTime;var r=this.parent||this._dp;if(r&&r.smoothChildTiming&&this._ts){for(this._start=aa(r._time-(0<this._ts?t/this._ts:((this._dirty?this.totalDuration():this._tDur)-t)/-this._ts)),xa(this),r._dirty||ra(r);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&za(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===B)&&(this._ts||(this._pTime=t),ea(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+ua(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?_t(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-B?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-B?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(gt(0,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ct(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=B)&&Math.abs(this._zTime)!==B))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||za(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(e.rawTime(t),this):this._tTime:this._tTime},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t,Ea(this)):this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ea(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(t,e){return this.totalTime(Ga(this,t),s(e))},Rt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-B:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=0,this._zTime=-B,this},Rt.isActive=function isActive(t){var e,r=this.parent||this._dp,i=this._start;return!(r&&!(this._ts&&(this._initted||!t)&&r.isActive(t)&&(e=r.rawTime(!0))>=i&&e<this.endTime(!0)-B))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function Km(){var t=i.then;i.then=null,o(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=o(t)?t:ga;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Km():i._prom=Km})},Rt.kill=function kill(){db(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Da(this,+t.duration,1),this.data=t.data,m||Ot.wake(),r&&za(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ha(Et.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0,_ps:!1,_rts:1});var Bt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r.parent&&ya(r.parent,_assertThisInitialized(r)),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,i){return new Ut(t,ca(arguments,0,this),Ga(this,p(e)?i:r)),this},t.from=function from(t,e,r,i){return new Ut(t,ca(arguments,1,this),Ga(this,p(e)?i:r)),this},t.fromTo=function fromTo(t,e,r,i,n){return new Ut(t,ca(arguments,2,this),Ga(this,p(e)?n:i)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,ma(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Ut(t,e,Ga(this,r),1),this},t.call=function call(t,e,r){return za(this,Ut.delayedCall(0,t,e),Ga(this,r))},t.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Ut(t,r,Ga(this,n)),this},t.staggerFrom=function staggerFrom(t,e,r,i,n,a,o){return r.runBackwards=1,ma(r).immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,i,n,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,o,u){return i.startAt=r,ma(i).immediateRender=s(i.immediateRender),this.staggerTo(t,e,i,n,a,o,u)},t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-B<t&&0<=t?m:t<B?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat&&(c=this._yoyo,o=g+this._rDelay,(g<(i=aa(v%o))||m===v)&&(i=g),(s=~~(v/o))&&s===v/o&&(i=g,s--),c&&1&s&&(i=g-i,p=1),s!==(d=_t(this._tTime,o))&&!this._lock)){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:g,this._lock=1,this.render(_,e,!g)._lock=0,!e&&this.parent&&bt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_!==this._time||u!=!this._ts)return this;if(b&&(this._lock=2,_=T?g+1e-4:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,aa(_),aa(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t),_||!i||e||bt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-B);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-B:B);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-B)._zTime=_<=i?1:-1,this._ts))return this._start=f,xa(this),this.render(t,e,r);this._onUpdate&&!e&&bt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&this._ts<0)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(t&&0<this._ts||!v&&this._ts<0)||qa(this,1),e||t<0&&!_||(bt(this,v===m?"onComplete":"onReverseComplete",!0),this._prom&&this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Ga(this,e)),!(t instanceof Et)){if(H(t))return t.forEach(function(t){return r.add(t,e)}),ra(this);if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Ut.delayedCall(0,t)}return this!==t?za(this,t,e):this},t.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-R);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Ut?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(pa(this,t),t===this._recent&&(this._recent=this._last),ra(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=aa(Ot.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Ga(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var i=Ut.delayedCall(0,e||O,r);return i.data="isPause",this._hasPause=1,za(this,i,Ga(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Ga(this,t);e;)e._start===t&&"isPause"===e.data&&qa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Lt!==i[n]&&i[n].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=yt(t),a=this._first;a;)a instanceof Ut?!ba(a._targets,n)||e&&!a.isActive("started"===e)||i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},t.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=Ga(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=Ut.to(r,ha(e,{ease:"none",lazy:!1,time:i,duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||B,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());o._dur!==t&&Da(o,t).render(o._time,!0,!0),a&&a.apply(o,s||[])}}));return o},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ha({startAt:{time:Ga(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),bb(this,Ga(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),bb(this,Ga(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+B)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ra(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=0,t&&(this.labels={}),ra(this)},t.totalDuration=function totalDuration(t){var e,r,i,n,a=0,s=this,o=s._last,u=R;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-t:t));if(s._dirty){for(n=s.parent;o;)e=o._prev,o._dirty&&o.totalDuration(),u<(i=o._start)&&s._sort&&o._ts&&!s._lock?(s._lock=1,za(s,o,i-o._delay,1)._lock=0):u=i,i<0&&o._ts&&(a-=i,(!n&&!s._dp||n&&n.smoothChildTiming)&&(s._start+=i/s._ts,s._time-=i,s._tTime-=i),s.shiftChildren(-i,!1,-1e20),u=0),a<(r=xa(o))&&o._ts&&(a=r),o=e;Da(s,s===F&&s._time>a?s._time:Math.min(R,a),1),s._dirty=0}return s._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ea(F,wa(t,F)),d=Ot.frame),Ot.frame>=ft){ft+=G.autoSleep||120;var e=F._first;if((!e||!e._ts)&&G.autoSleep&&Ot._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Ot.sleep()}}},Timeline}(Et);ha(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Jb(t,e,i,a,s,u){var h,l,f,d;if(ht[t]&&!1!==(h=new ht[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=Yt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||H(t))return n(t)?Yt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=Yt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new ee(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==c))for(f=i._ptLookup[i._targets.indexOf(s)],d=h._props.length;d--;)f[h._props[d]]=l;return h}var Lt,It=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,d=t[e],c="get"!==r?r:o(d)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,p=o(d)?l?Vt:jt:Xt;if(n(i)&&(~i.indexOf("random(")&&(i=$a(i)),"="===i.charAt(1)&&(i=parseFloat(c)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Ja(c)||0))),c!==i)return isNaN(c+i)?(d||e in t||L(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ee(this._pt,t,e,0,1,Qt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=$a(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(et)||[];o=et.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=et.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(it.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,c,i,p,h||G.stringFilter,l)):(f=new ee(this._pt,t,e,+c||0,i-(c||0),"boolean"==typeof d?Ht:Jt,0,p),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},qt=function _initTween(t,e){var r,i,n,a,o,u,h,l,f,d,c,p,_=t.vars,m=_.ease,g=_.startAt,v=_.immediateRender,y=_.lazy,T=_.onUpdate,b=_.onUpdateParams,w=_.callbackScope,x=_.runBackwards,k=_.yoyoEase,M=_.keyframes,O=_.autoRevert,C=t._dur,P=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.parent._targets:A,D="auto"===t._overwrite,R=t.timeline;if(!R||M&&m||(m="none"),t._ease=Dt(m,E.ease),t._yEase=k?zt(Dt(!0===k?m:k,E.ease)):0,k&&t._yoyo&&!t._repeat&&(k=t._yEase,t._yEase=t._ease,t._ease=k),!R){if(P&&P.render(-1,!0).kill(),g){if(qa(t._startAt=Ut.set(A,ha({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:s(y),startAt:null,delay:0,onUpdate:T,onUpdateParams:b,callbackScope:w,stagger:0},g))),v)if(0<e)O||(t._startAt=0);else if(C)return}else if(x&&C)if(P)O||(t._startAt=0);else if(e&&(v=!1),qa(t._startAt=Ut.set(A,pt(la(_,st),{overwrite:!1,data:"isFromStart",lazy:v&&s(y),immediateRender:v,stagger:0,parent:S}))),v){if(!e)return}else _initTween(t._startAt,B);for(r=la(_,st),p=(l=A[t._pt=0]?Z(A[0]).harness:0)&&_[l.prop],y=C&&s(y)||y&&!C,i=0;i<A.length;i++){if(h=(o=A[i])._gsap||Y(A)[i]._gsap,t._ptLookup[i]=d={},ut[h.id]&&da(),c=z===A?i:z.indexOf(o),l&&!1!==(f=new l).init(o,p||r,t,c,z)&&(t._pt=a=new ee(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=a}),f.priority&&(u=1)),!l||p)for(n in r)ht[n]&&(f=Jb(n,r,t,c,o,z))?f.priority&&(u=1):d[n]=a=It.call(t,o,n,"get",r[n],c,z,0,_.stringFilter);t._op&&t._op[i]&&t.kill(o,t._op[i]),D&&t._pt&&(Lt=t,F.killTweensOf(o,d,"started"),Lt=0),t._pt&&y&&(ut[h.id]=1)}u&&te(t),t._onInit&&t._onInit(t)}t._from=!R&&!!_.runBackwards,t._onUpdate=T,t._initted=1},Yt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?$a(t):t},Nt=ct+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Gt=(Nt+",id,stagger,delay,duration,paused").split(","),Ut=function(A){function Tween(t,e,i,n){var a;"number"==typeof e&&(i.duration=e,e=i,i=null);var o,h,l,f,d,c,_,m,g=(a=A.call(this,n?e:ma(e),i)||this).vars,v=g.duration,y=g.delay,T=g.immediateRender,b=g.stagger,w=g.overwrite,x=g.keyframes,k=g.defaults,C=a.parent,P=(H(t)?p(t[0]):"length"in e)?[t]:yt(t);if(a._targets=P.length?Y(P):M("GSAP target "+t+" not found. https://greensock.com",!G.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=w,x||b||u(v)||u(y)){if(e=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:k||{}})).kill(),o.parent=_assertThisInitialized(a),x)ha(o.vars.defaults,{ease:"none"}),x.forEach(function(t){return o.to(P,t,">")});else{if(f=P.length,_=b?Qa(b):O,r(b))for(d in b)~Nt.indexOf(d)&&((m=m||{})[d]=b[d]);for(h=0;h<f;h++){for(d in l={},e)Gt.indexOf(d)<0&&(l[d]=e[d]);l.stagger=0,m&&pt(l,m),e.yoyoEase&&!e.repeat&&(l.yoyoEase=e.yoyoEase),c=P[h],l.duration=+Yt(v,_assertThisInitialized(a),h,c,P),l.delay=(+Yt(y,_assertThisInitialized(a),h,c,P)||0)-a._delay,!b&&1===f&&l.delay&&(a._delay=y=l.delay,a._start+=y,l.delay=0),o.to(c,l,_(h,c,P))}v=y=0}v||a.duration(v=o.duration())}else a.timeline=0;return!0===w&&(Lt=_assertThisInitialized(a),F.killTweensOf(P),Lt=0),C&&ya(C,_assertThisInitialized(a)),(T||!v&&!x&&a._start===C._time&&s(T)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-B,a.render(Math.max(0,-y))),a}_inheritsLoose(Tween,A);var t=Tween.prototype;return t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-B<t&&0<=t?c:t<B?0:t;if(p){if(_!==this._tTime||!t||r||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,(p<(i=aa(_%s))||c===_)&&(i=p),(a=~~(_/s))&&a===_/s&&(i=p,a--),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=_t(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(s*a,!0).invalidate()._lock=0))}if(!this._initted){if(Aa(this,i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}for(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),d||!i||e||bt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-B:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),bt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&bt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,r),!t&&p||!(t&&0<this._ts||!_&&this._ts<0)||qa(this,1),e||t<0&&!d||_<c&&0<this.timeScale()||(bt(this,_===c?"onComplete":"onReverseComplete",!0),this._prom&&this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a=t._zTime<0?0:1,s=e<0?0:1,o=t._rDelay,u=0;if(o&&t._repeat&&(u=gt(0,t._tDur,e),_t(u,o)!==_t(t._tTime,o)&&(a=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),(t._initted||!Aa(t,e,i,r))&&(s!==a||i||t._zTime===B||!e&&t._zTime)){for(t._zTime=e||(r?B:0),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=u,r||bt(t,"onStart"),n=t._pt;n;)n.r(s,n.d),n=n._next;!s&&t._startAt&&!t._onUpdate&&t._start&&t._startAt.render(e,!0,i),t._onUpdate&&(r||bt(t,"onUpdate")),u&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(t.ratio&&qa(t,1),r||(bt(t,t.ratio?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),A.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return db(this);if(this.timeline)return this.timeline.killTweensOf(t,e,Lt&&!0!==Lt.vars.overwrite),this;var r,i,a,s,o,u,h,l=this._targets,f=t?yt(t):l,d=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(l,f))return db(this);for(r=this._op=this._op||[],"all"!==e&&(n(e)&&(o={},_(e,function(t){return o[t]=1}),e=o),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?Z(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=pt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in i=d[h],"all"===e?(r[h]=e,s=i,a={}):(a=r[h]=r[h]||{},s=e),s)(u=i&&i[o])&&("kill"in u.d&&!0!==u.d.kill(o)||pa(this,u,"_pt"),delete i[o]),"all"!==a&&(a[o]=1);return this._initted&&!this._pt&&c&&db(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ca(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ca(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return F.killTweensOf(t,e,r)},Tween}(Et);ha(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),_("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var t=new Bt,e=vt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Ub(t,e,r){return t.setAttribute(e,r)}function ac(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Xt=function _setterPlain(t,e,r){return t[e]=r},jt=function _setterFunc(t,e,r){return t[e](r)},Vt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Zt=function _getSetter(t,e){return o(t[e])?jt:q(t[e])&&t.setAttribute?Ub:Xt},Jt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},Ht=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Qt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},$t=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Wt=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},Kt=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?pa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},te=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ee=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=ac,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Jt,this.d=s||this,this.set=o||Xt,this.pr=u||0,(this._next=t)&&(t._prev=this)}_(ct+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",function(t){return st[t]=1}),at.TweenMax=at.TweenLite=Ut,at.TimelineLite=at.TimelineMax=Bt,F=new Bt({sortChildren:!1,defaults:E,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),G.stringFilter=ob;var re={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:O,render:$t,add:It,kill:Kt,modifier:Wt,rawVars:0},a={targetTest:0,get:0,getSetter:Zt,aliases:{},register:0};if(Ct(),t!==i){if(ht[e])return;ha(i,ha(la(t,n),a)),pt(i.prototype,pt(n,la(t,a))),ht[i.prop=e]=i,t.targetTest&&(dt.push(i),st[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}N(e,i),t.register&&t.register(ie,i,ee)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return F.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=yt(i)[0]);var a=Z(i||{}).get,s=e?ga:fa;return"native"===e&&(e=""),i?t?s((ht[t]&&ht[t].get||a)(i,t,e,r)):function(t,e,r){return s((ht[t]&&ht[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=yt(r)).length){var n=r.map(function(t){return ie.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ht[e],o=Z(r),u=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&$t(1,c)}:o.set(r,e);return s?u:function(t){return u(r,e,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<F.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Dt(t.ease,E.ease)),ka(E,t||{})},config:function config(t){return ka(G,t||{})},registerEffect:function registerEffect(t){var n=t.name,i=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ht[t]&&!at[t]&&M(n+" effect requires "+t+" plugin.")}),lt[n]=function(t,e,r){return i(yt(t),ha(e||{},a),r)},s&&(Bt.prototype[n]=function(t,e,i){return this.add(lt[n](t,r(e)?e:(i=e)&&{},this),i)})},registerEase:function registerEase(t,e){Pt[t]=Dt(e)},parseEase:function parseEase(t,e){return arguments.length?Dt(t,e):Pt},getById:function getById(t){return F.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Bt(t);for(n.smoothChildTiming=s(t.smoothChildTiming),F.remove(n),n._dp=0,n._time=n._tTime=F._time,r=F._first;r;)i=r._next,!e&&!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]||za(n,r,r._start-r._delay),r=i;return za(F,n,0),n},utils:{wrap:function wrap(e,t,r){var i=t-e;return H(e)?Xa(e,wrap(0,e.length),t):Ha(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return H(e)?Xa(e,wrapYoyo(0,e.length-1),t):Ha(r,function(t){return e+(i<(t=(n+(t-e)%n)%n)?n-t:t)})},distribute:Qa,random:Ta,snap:Sa,normalize:function normalize(t,e,r){return Tt(t,e,0,1,r)},getUnit:Ja,clamp:function clamp(e,r,t){return Ha(t,function(t){return gt(e,r,t)})},splitColor:jb,toArray:yt,mapRange:Tt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ja(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(H(e)&&!H(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=pt(H(e)?[]:{},e));if(!u){for(s in r)It.call(d,e,s,"get",r[s]);a=function func(t){return $t(t,d)||(f?e.p:e)}}}return Ha(t,a)},shuffle:Pa},install:K,effects:lt,ticker:Ot,updateRoot:Bt.updateRoot,plugins:ht,globalTimeline:F,core:{PropTween:ee,globals:N,Tween:Ut,Timeline:Bt,Animation:Et,getCache:Z,_removeLinkedListItem:pa}};_("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return re[t]=Ut[t]}),Ot.add(Bt.updateRoot),c=re.to({},{duration:0});function ec(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function gc(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},_(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=ec(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ie=re.registerPlugin({name:"attr",init:function init(t,e,r,i,n){for(var a in e)this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},gc("roundProps",Ra),gc("modifiers"),gc("snap",Sa))||re;Ut.version=Bt.version=ie.version="3.2.6",f=1,t()&&Ct();function Rc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Sc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Tc(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function Uc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Vc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Wc(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Xc(t,e,r){return t.style[e]=r}function Yc(t,e,r){return t.style.setProperty(e,r)}function Zc(t,e,r){return t._gsap[e]=r}function $c(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function _c(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function ad(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function ed(t,e){var r=ae.createElementNS?ae.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ae.createElement(t);return r.style?r:ae.createElement(t)}function fd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Fe,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&fd(t,Ne(e)||e,1)||""}function id(){!function _windowExists(){return"undefined"!=typeof window}()||(ne=window,ae=ne.document,se=ae.documentElement,ue=ed("div")||{style:{}},he=ed("div"),Ie=Ne(Ie),qe=Ne(qe),ue.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fe=!!Ne("perspective"),oe=1)}function jd(t){var e,r=ed("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(se.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=jd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),se.removeChild(r),this.style.cssText=a,e}function kd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function ld(e){var r;try{r=e.getBBox()}catch(t){r=jd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===jd||(r=jd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+kd(e,["x","cx","x1"])||0,y:+kd(e,["y","cy","y1"])||0,width:0,height:0}}function md(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!ld(t))}function nd(t,e){if(e){var r=t.style;e in Se&&(e=Ie),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Fe,"-$1").toLowerCase())):r.removeAttribute(e)}}function od(t,e,r,i,n,a){var s=new ee(t._pt,e,r,0,1,a?Wc:Vc);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function qd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=ue.style,f=Ee.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||Ge[i]||Ge[h]?u:("px"===h||p||(u=qd(t,e,r,"px")),o=t.getCTM&&md(t),_&&(Se[e]||~e.indexOf("adius"))?aa(u/(o?t.getBBox()[f?"width":"height"]:t[c])*100):(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ae&&a.appendChild||(a=ae.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Ot.time?aa(u/s.width*100):(!_&&"%"!==h||(l.position=fd(t,"position")),a===t&&(l.position="static"),a.appendChild(ue),n=ue[c],a.removeChild(ue),l.position="absolute",f&&_&&((s=Z(a)).time=Ot.time,s.width=a[c]),aa(p?n*u/100:n&&u?100/n*u:0))))}function rd(t,e,r,i){var n;return oe||id(),e in Le&&"transform"!==e&&~(e=Le[e]).indexOf(",")&&(e=e.split(",")[0]),Se[e]&&"transform"!==e?(n=Ze(t,i),n="transformOrigin"!==e?n[e]:Je(fd(t,qe))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Xe[e]&&Xe[e](t,e,r)||fd(t,e)||$(t,e)||("opacity"===e?1:0)),r&&!~(n+"").indexOf(" ")?qd(t,e,n,r)+r:n}function sd(t,e,r,i){if(!r||"none"===r){var n=Ne(e,t,1),a=n&&fd(t,n,1);a&&a!==r&&(e=n,r=a)}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ee(this._pt,t.style,e,0,1,Qt),y=0,T=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=fd(t,e)||i,t.style[e]=r),ob(s=[r,i]),i=s[1],u=(r=s[0]).match(tt)||[],(i.match(tt)||[]).length){for(;o=tt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[T++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=tt.lastIndex-_.length,_||(_=_||G.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=qd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===T?p:",",s:h,c:g?g*c:c-h,m:l&&l<4?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?Wc:Vc;return it.test(i)&&(v.e=0),this._pt=v}function ud(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ue[r]||r,e[1]=Ue[i]||i,e.join(" ")}function vd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Se[r]&&(i=1,r="transformOrigin"===r?qe:Ie),nd(a,r);i&&(nd(a,Ie),u&&(u.svg&&a.removeAttribute("transform"),Ze(a,1),u.uncache=1))}}function zd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Ad(t){var e=fd(t,Ie);return zd(e)?je:e.substr(7).match(W).map(aa)}function Bd(t,e){var r,i,n,a,s=t._gsap||Z(t),o=t.style,u=Ad(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?je:u:(u!==je||t.offsetParent||t===se||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,se.appendChild(t)),u=Ad(t),n?o.display=n:nd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):se.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Cd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Bd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==je&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=ld(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[qe]="0px 0px",a&&(od(a,h,"xOrigin",f,w),od(a,h,"yOrigin",d,x),od(a,h,"xOffset",c,h.xOffset),od(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Fd(t,e,r){var i=Ja(e);return aa(parseFloat(e)+parseFloat(qd(t,"x",r+"px",i)))+i}function Md(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?ze:1),d=s?f*s:f-i,c=i+d+"deg";return l&&("short"===(o=a.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===o&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===o&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ee(t._pt,e,r,i,d,Sc),u.e=c,u.u="deg",t._props.push(r),u}function Nd(t,e,r){var i,n,a,s,o,u,h,l=he.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ie]=e,ae.body.appendChild(he),i=Ze(he,1),Se)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ja(a)!==(h=Ja(s))?qd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ee(t._pt,f,n,o,u-o,Rc),t._pt.u=h||0,t._props.push(n));ae.body.removeChild(he)}var ne,ae,se,oe,ue,he,le,fe,de=Pt.Power0,ce=Pt.Power1,pe=Pt.Power2,_e=Pt.Power3,me=Pt.Power4,ge=Pt.Linear,ve=Pt.Quad,ye=Pt.Cubic,Te=Pt.Quart,be=Pt.Quint,we=Pt.Strong,xe=Pt.Elastic,ke=Pt.Back,Me=Pt.SteppedEase,Oe=Pt.Bounce,Ce=Pt.Sine,Pe=Pt.Expo,Ae=Pt.Circ,Se={},ze=180/Math.PI,De=Math.PI/180,Re=Math.atan2,Fe=/([A-Z])/g,Ee=/(?:left|right|width|margin|padding|x)/i,Be=/[\s,\(]\S/,Le={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ie="transform",qe=Ie+"Origin",Ye="O,Moz,ms,Ms,Webkit".split(","),Ne=function _checkPropPrefix(t,e,r){var i=(e||ue).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ye[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ye[n]:"")+t},Ge={deg:1,rad:1,turn:1},Ue={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xe={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ee(t._pt,e,r,0,0,vd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},je=[1,0,0,1,0,0],Ve={},Ze=function _parseTransform(t,e){var r=t._gsap||new Ft(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,k,M,O,C,P,A,S,z,D,R,F,E=t.style,B=r.scaleX<0,L="deg",I=fd(t,qe)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!md(t)),m=Bd(t,r.svg),r.svg&&(O=!r.uncache&&t.getAttribute("data-svg-origin"),Cd(t,O||I,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==je&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?Re(b,T)*ze:0,(f=w||x?Re(w,x)*ze+u:0)&&(o*=Math.cos(f*De)),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(F=m[6],D=m[7],A=m[8],S=m[9],z=m[10],R=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(F,z))*ze,g&&(O=k*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+S*y,P=F*v+z*y,A=k*-y+A*v,S=M*-y+S*v,z=F*-y+z*v,R=D*-y+R*v,k=O,M=C,F=P),l=(g=Re(-w,z))*ze,g&&(v=Math.cos(-g),R=x*(y=Math.sin(-g))+R*v,T=O=T*v-A*y,b=C=b*v-S*y,w=P=w*v-z*y),u=(g=Re(b,T))*ze,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),C=k*v+M*y,b=b*v-T*y,M=M*v-k*y,T=O,k=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=aa(Math.sqrt(T*T+b*b+w*w)),o=aa(Math.sqrt(M*M+F*F)),g=Re(k,M),f=2e-4<Math.abs(g)?g*ze:0,c=R?1/(R<0?-R:R):0),r.svg&&(m=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!zd(fd(t,Ie)),m&&t.setAttribute("transform",m))),90<Math.abs(f)&&Math.abs(f)<270&&(B?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=i&&Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)?0:i)+"px",r.y=((r.yPercent=n&&Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)?0:n)+"px",r.z=a+"px",r.scaleX=aa(s),r.scaleY=aa(o),r.rotation=aa(u)+L,r.rotationX=aa(h)+L,r.rotationY=aa(l)+L,r.skewX=f+L,r.skewY=d+L,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(I.split(" ")[2])||0)&&(E[qe]=Je(I)),r.xOffset=r.yOffset=0,r.force3D=G.force3D,r.renderTransform=r.svg?tr:fe?Ke:He,r.uncache=0,r},Je=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},He=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ke(t,e)},Qe="0deg",$e="0px",We=") ",Ke=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Qe||h!==Qe)){var b,w=parseFloat(h)*De,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*De,b=Math.cos(w),a=Fd(g,a,x*b*-v),s=Fd(g,s,-Math.sin(w)*-v),o=Fd(g,o,k*b*-v+v)}_!==$e&&(y+="perspective("+_+We),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===$e&&s===$e&&o===$e||(y+=o!==$e||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+We),u!==Qe&&(y+="rotate("+u+We),h!==Qe&&(y+="rotateY("+h+We),l!==Qe&&(y+="rotateX("+l+We),f===Qe&&d===Qe||(y+="skew("+f+", "+d+We),1===c&&1===p||(y+="scale("+c+", "+p+We),g.style[Ie]=y||"translate(0, 0)"},tr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=De,c*=De,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=De,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=aa(r),i=aa(i),n=aa(n),a=aa(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=qd(g,"x",l,"px"),k=qd(g,"y",f,"px")),(v||y||T||b)&&(x=aa(x+v-(v*r+y*n)+T),k=aa(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=aa(x+u/100*s.width),k=aa(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[Ie]=s)};_("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Xe[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return rd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var er,rr,ir,nr={name:"css",register:id,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T=this._props,b=t.style;for(f in oe||id(),e)if("autoRound"!==f&&(s=e[f],!ht[f]||!Jb(f,e,r,i,t,n)))if(h=typeof s,l=Xe[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=$a(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(b,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",i,n,0,0,f);else{if(a=rd(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Le&&("autoAlpha"===f&&(1===u&&"hidden"===rd(t,"visibility")&&o&&(u=0),od(this,b,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=Le[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in Se)if(m||((g=t._gsap).renderTransform||Ze(t),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ee(this._pt,b,Ie,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ee(this._pt,g,"scaleY",g.scaleY,p?p*o:o-g.scaleY),T.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=ud(s),g.svg?Cd(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&od(this,g,"zOrigin",g.zOrigin,c),od(this,b,f,Je(a),Je(s)));continue}if("svgOrigin"===f){Cd(t,s,1,v,0,this);continue}if(f in Ve){Md(this,g,f,u,s,p);continue}if("smoothOrigin"===f){od(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Nd(this,s,t);continue}}else f in b||(f=Ne(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in b)(d=(a+"").substr((u+"").length))!==(c=(s+"").substr(((o=o||0)+"").length)||(f in G.units?G.units[f]:d))&&(u=qd(t,f,a,c)),this._pt=new ee(this._pt,_?g:b,f,u,p?p*o:o-u,"px"!==c||!1===e.autoRound||_?Rc:Uc),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=Tc);else if(f in b)sd.call(this,t,f,a,s);else{if(!(f in t)){L(f,s);continue}this.add(t,f,t[f],s,i,n)}T.push(f)}y&&te(this)},get:rd,aliases:Le,getSetter:function getSetter(t,e,r){var i=Le[e];return i&&i.indexOf(",")<0&&(e=i),e in Se&&e!==qe&&(t._gsap.x||rd(t,"x"))?r&&le===r?"scale"===e?$c:Zc:(le=r||{})&&("scale"===e?_c:ad):t.style&&!q(t.style[e])?Xc:~e.indexOf("-")?Yc:Zt(t,e)},core:{_removeProperty:nd,_getMatrix:Bd}};ie.utils.checkPrefix=Ne,ir=_((er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(rr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Se[t]=1}),_(rr,function(t){G.units[t]="deg",Ve[t]=1}),Le[ir[13]]=er+","+rr,_("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Le[e[1]]=ir[e[0]]}),_("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){G.units[t]="px"}),ie.registerPlugin(nr);var ar=ie.registerPlugin(nr)||ie,sr=ar.core.Tween;e.Back=ke,e.Bounce=Oe,e.CSSPlugin=nr,e.Circ=Ae,e.Cubic=ye,e.Elastic=xe,e.Expo=Pe,e.Linear=ge,e.Power0=de,e.Power1=ce,e.Power2=pe,e.Power3=_e,e.Power4=me,e.Quad=ve,e.Quart=Te,e.Quint=be,e.Sine=Ce,e.SteppedEase=Me,e.Strong=we,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Ut,e.TweenMax=sr,e.default=ar,e.gsap=ar;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

                        var saveAs=saveAs||"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(w){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var v=w.document,y=function(){return w.URL||w.webkitURL||w},b=v.createElementNS("http://www.w3.org/1999/xhtml","a"),h="download"in b,m=w.webkitRequestFileSystem,g=w.requestFileSystem||m||w.mozRequestFileSystem,r=function(e){(w.setImmediate||w.setTimeout)(function(){throw e},0)},R="application/octet-stream",O=0,E=function(e){function t(){"string"==typeof e?y().revokeObjectURL(e):e.remove()}w.chrome?t():setTimeout(t,10)},D=function(e,t,n){for(var o=(t=[].concat(t)).length;o--;){var i=e["on"+t[o]];if("function"==typeof i)try{i.call(e,n||e)}catch(e){r(e)}}},n=function(o,n){function e(){D(l,"writestart progress write writeend".split(" "))}function i(){!d&&t||(t=y().createObjectURL(o)),a?a.location.href=t:null==w.open(t,"_blank")&&"undefined"!=typeof safari&&(w.location.href=t),l.readyState=l.DONE,e(),E(t)}function r(e){return function(){if(l.readyState!==l.DONE)return e.apply(this,arguments)}}var t,a,s,c,f,l=this,u=o.type,d=!1,p={create:!0,exclusive:!1};if(l.readyState=l.INIT,n=n||"download",h)return t=y().createObjectURL(o),b.href=t,b.download=n,c=b,(f=v.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,w,0,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(f),l.readyState=l.DONE,e(),void E(t);w.chrome&&u&&u!==R&&(s=o.slice||o.webkitSlice,o=s.call(o,0,o.size,R),d=!0),m&&"download"!==n&&(n+=".download"),u!==R&&!m||(a=w),g?(O+=o.size,g(w.TEMPORARY,O,r(function(e){e.root.getDirectory("saved",p,r(function(e){function t(){e.getFile(n,p,r(function(n){n.createWriter(r(function(t){t.onwriteend=function(e){a.location.href=n.toURL(),l.readyState=l.DONE,D(l,"writeend",e),E(n)},t.onerror=function(){var e=t.error;e.code!==e.ABORT_ERR&&i()},"writestart progress write abort".split(" ").forEach(function(e){t["on"+e]=l["on"+e]}),t.write(o),l.abort=function(){t.abort(),l.readyState=l.DONE},l.readyState=l.WRITING}),i)}),i)}e.getFile(n,{create:!1},r(function(e){e.remove(),t()}),r(function(e){(e.code===e.NOT_FOUND_ERR?t:i)()}))}),i)}),i)):i()},e=n.prototype;return e.abort=function(){this.readyState=this.DONE,D(this,"abort")},e.readyState=e.INIT=0,e.WRITING=1,e.DONE=2,e.error=e.onwritestart=e.onprogress=e.onwrite=e.onabort=e.onerror=e.onwriteend=null,function(e,t){return new n(e,t)}}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&null!==module?module.exports=saveAs:"undefined"!=typeof define&&null!==define&&null!=define.amd&&define([],function(){return saveAs}),function(e){"use strict";var l,u=e.Uint8Array,t=e.HTMLCanvasElement,n=t&&t.prototype,c=/\s*;\s*base64\s*(?:;|$)/i,f="toDataURL";u&&(l=new u([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])),t&&!n.toBlob&&(n.toBlob=function(e,t){if(t=t||"image/png",this.mozGetAsFile)e(this.mozGetAsFile("canvas",t));else if(this.msToBlob&&/^\s*image\/png\s*(?:$|;)/i.test(t))e(this.msToBlob());else{var n,o=Array.prototype.slice.call(arguments,1),i=this[f].apply(this,o),r=i.indexOf(","),a=i.substring(r+1),s=c.test(i.substring(0,r));Blob.fake?((n=new Blob).encoding=s?"base64":"URI",n.data=a,n.size=a.length):u&&(n=s?new Blob([function(e){for(var t,n,o=e.length,i=new u(o/4*3|0),r=0,a=0,s=[0,0],c=0,f=0;o--;)n=e.charCodeAt(r++),255!==(t=l[n-43])&&void 0!==t&&(s[1]=s[0],s[0]=n,f=f<<6|t,4===++c&&(i[a++]=f>>>16,61!==s[1]&&(i[a++]=f>>>8),61!==s[0]&&(i[a++]=f),c=0));return i}(a)],{type:t}):new Blob([decodeURIComponent(a)],{type:t})),e(n)}},n.toDataURLHD?n.toBlobHD=function(){f="toDataURLHD";var e=this.toBlob();return f="toDataURL",e}:n.toBlobHD=n.toBlob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);


                        function getSurveyResult( type, ans ) {
                            var models = new Array();
                            if ( type == 'KF' ) { models = KF_SURVEY[ans]['bespoke']; }
                            else if ( type == 'FS' ) { models = FS_SURVEY[ans]['bespoke']; }
                            return models;
                        }

                        function getModelCode( myBe ) {
                            myBe.forEach( function( model ) {
                                for ( var id in model ) {
                                    for ( var door in model[id] ) {
                                        var color = model[id][door];
                                    }
                                }
                            });
                        }

                        function putHistory() {
                            if ( (typeof myBespoke) != 'object' ) return;
                            let expDate = new Date();
                            let cookieStr = "";
                            if ( JSON.stringify(myBespoke) == JSON.stringify(bespokeHistory[0])) return;
                            let newHistory = bespokeHistory.unshift(myBespoke);
                            if (newHistory == 7) bespokeHistory.pop();
                            let strBespoke = JSON.stringify(bespokeHistory);
                            expDate.setDate(expDate.getDate() + 90);
                            cookieStr += "BESPOKE_HISTORY="+strBespoke;
                            cookieStr += ";expires="+expDate.toUTCString()+";";
                            document.cookie = cookieStr;
                        }

                        function getHistory() {
                            let cookies = document.cookie.split(";");
                            for (let i in cookies) {
                                if ( cookies[i].search("BESPOKE_HISTORY") != -1 ) {
                                    let cookieVal = cookies[i].replace("BESPOKE_HISTORY=", "");
                                    return JSON.parse( cookieVal );
                                }
                            }
                            return new Array();
                        }

                        function removeHistory( idx ) {
                            let history = getHistory();
                            if ( idx > 0 ) bespokeHistory = (history.slice(0, idx)).concat( history.slice(idx+1) );
                            else if ( idx == 0 ) bespokeHistory.shift();

                            let expDate = new Date();
                            let cookieStr = "";
                            let strBespoke = JSON.stringify(bespokeHistory);
                            expDate.setDate(expDate.getDate() + 90);
                            cookieStr += "BESPOKE_HISTORY="+strBespoke;
                            cookieStr += ";expires="+expDate.toUTCString()+";";
                            document.cookie = cookieStr;

                            return bespokeHistory;
                        }

                        function getEventCode() {
                            if ( (typeof myBespoke) != 'object' ) return;
                            var colorCode = new Array();
                            var doorCode = new Array();
                            var eventCode = new Array();
                            for(var i=0; i<myBespoke.length; i++){
                                for(var _id in myBespoke[i]) {
                                    for (var _door in myBespoke[i][_id]) {
                                        if (colorCode.length == 3) break;
                                        if (colorCode.length == 0) {
                                            colorCode.push(myBespoke[i][_id][_door]);
                                        } else {
                                            if ( colorCode.indexOf(myBespoke[i][_id][_door]) == -1) {
                                                var cnt = colorCode.push(myBespoke[i][_id][_door]);
                                                if ( cnt == 3 ) break;
                                            }
                                        }
                                    }
                                }
                            }
                            var cLength = colorCode.length;
                            if (cLength < 3) {
                                for(var i=0; i< 3-cLength; i++) {
                                    colorCode.unshift("code0");
                                }
                            }
                            if (myBespoke.length < 3) {
                                for (let i=0; i < 3-myBespoke.length; i++) {
                                    doorCode.push("code0");
                                }
                                for(var i=0; i<myBespoke.length; i++){
                                    for(var _id in myBespoke[i]) {
                                        doorCode.push( "code"+_id.substring(2,3) );
                                    }
                                }
                            } else {
                                for(var i=0; i<3; i++){
                                    for(var _id in myBespoke[i]) {
                                        doorCode.push( "code"+_id.substring(2,3) );
                                    }
                                }
                            }
                            eventCode = colorCode.concat(doorCode);
                            return eventCode;
                        }

                        function getEventCodeText() {
                            let ct = "";
                            let codeText = "";
                            let eventCode = getEventCode();
                            for (let i=0; i<eventCode.length; i++){
                                ct = eventCode[i];
                                if (ct=='code0') codeText += "0";
                                else if (ct=='code1') codeText += "1";
                                else if (ct=='code2') codeText += "2";
                                else if (ct=='code3') codeText += "3";
                                else if (ct=='code4') codeText += "4";
                                else if (ct=='glWhite') codeText += "W";
                                else if (ct=='glPink') codeText += "P";
                                else if (ct=='glLavender') codeText += "L";
                                else if (ct=='glOlive') codeText += "O";
                                else if (ct=='glDeepGreen') codeText += "G";
                                else if (ct=='glBurgundy') codeText += "B";
                                else if (ct=='glNavy') codeText += "N";
                                else if (ct=='glDeepCharcoal') codeText += "H";
                                else if (ct=='stBeige') codeText += "E";
                                else if (ct=='stSkyBlue') codeText += "S";
                                else if (ct=='stGray') codeText += "G";
                                else if (ct=='ctWhite') codeText += "W";
                                else if (ct=='ctCharcoal') codeText += "H";
                                else if (ct=='stFernGreen') codeText += "F";
                                else if (ct=='stWood') codeText += "D";
                                else if (ct=='stOrange') codeText += "R";
                            }
                            return codeText;
                        }

                        function getParameterByName(name, url) {
                            if (!url) url = window.location.href;
                            name = name.replace(/[\[\]]/g, '\\$&');
                            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                                    results = regex.exec(url);
                            if (!results) return null;
                            if (!results[2]) return '';
                            return decodeURIComponent(results[2].replace(/\+/g, ' '));
                        }

                        let myBespoke = new Array();
                        let bespokeHistory = new Array();
                        bespokeHistory = getHistory();
                        let bespokeSwiper;

                        // const imgPath = "http://dev.does.kr/ateam/eso/bespoke_s/assets/img/last/";
                        var imgPath = "//images.samsung.com/is/image/samsung/p5/sec/2020bespoke/experience/last/";
                        //	const imgSuffix = "?$ORIGIN_PNG$&fmt=png-alpha";
                        var imgSuffix = "";

                        let GLOBAL_INTERIOR_TYPE='';
                        let _eventHandlers = {};
                        let _eventCurrentCount = 0;
                        let loadingTimer;
                        let _dynamicCanvas = [];
                        for(var i = 0 ; i < 20 ; i++) {
                            _dynamicCanvas[i] = document.createElement("canvas");
                        }

    //이미지 로드 listner 등록
                        function addListener(node, event, handler, capture, currentInteriorType) {
                            var e = 'load';
                            function _listener() {
                                _eventCurrentCount++;
                                if(GLOBAL_INTERIOR_TYPE === currentInteriorType){
                                    handler();
                                }
                                if( _eventHandlers[e].length != 0 && _eventHandlers[e].length <= _eventCurrentCount){
                                    hideLoading();
                                }
                            }

                            node.addEventListener(event, _listener, capture);

                            _eventHandlers = _eventHandlers || {};
                            _eventHandlers[event] = _eventHandlers[event] || [];
                            _eventHandlers[event].push({
                                node	: node,
                                event	: event,
                                handler	: handler,
                                capture	: capture,
                                type	: currentInteriorType,
                                listener: _listener
                            });
                        }

                        //기존 이미지 로드 listner 삭제, node같이 삭제
                        function removeAllLoadListeners() {
                            var e = 'load';
                            for(var i in _eventHandlers[e]) {
                                var info = _eventHandlers[e][i];
                                info.node.removeEventListener(e, info.listener, info.capture);
                                delete info.node;
                            }
                            _eventHandlers[e] = [];
                            _eventCurrentCount = 0;
                        }

                        function setDrawBack(targetCanvasId, interiorType, currentInteriorType){
                            var mainBack= document.getElementById(targetCanvasId);
                            if ( mainBack.getContext ) {
                                mainBack.width = 1440;
                                mainBack.height = 1440;
                                var mainBackCtx = mainBack.getContext('2d');
                                var bgImg = new Image();
                                bgImg.crossOrigin = "Anonymous";
                                bgImg.src = imgPath + interiorType + imgSuffix;

                                addListener(bgImg, 'load', function() {
                                    mainBackCtx.clearRect(0, 0, mainBack.width, mainBack.height);
                                    mainBackCtx.drawImage(bgImg,0,0);
                                }, false, currentInteriorType)
                            }
                        }

                        function setDrawCabinet(targetCanvasId, x0, totalWidth, between_cabinet, interiorType, currentInteriorType){
                            var mainCabinet = document.getElementById(targetCanvasId);
                            if ( mainCabinet.getContext ) {
                                mainCabinet.width = 1440;
                                mainCabinet.height = 1440;
                                var mainCabinetCtx = mainCabinet.getContext('2d');
                                var cabinetImg = new Image();
                                cabinetImg.crossOrigin = "Anonymous";
                                cabinetImg.src = imgPath + interiorType + imgSuffix;

                                addListener(cabinetImg, 'load', function() {
                                    mainCabinetCtx.clearRect(0, 0, mainCabinet.width, mainCabinet.height);
                                    mainCabinetCtx.beginPath();
                                    mainCabinetCtx.rect(0,0,x0-between_cabinet,1440);
                                    mainCabinetCtx.rect(x0+totalWidth+between_cabinet,0,1440,1440);
                                    mainCabinetCtx.clip();
                                    mainCabinetCtx.drawImage(cabinetImg,0,0);
                                }, false, currentInteriorType)
                            }
                        }


                        function setFramePosition(myBespoke ,mainInterior, x0, between_bespoke ){
                            const preWidth = new Array( myBespoke.length );
                            for (let i=0; i< myBespoke.length; i++) {
                                var _arr = Object.entries( myBespoke[i] );
                                for ( var _i in _arr ) {
                                    var id = _arr[_i][0], value = _arr[_i][1];
                                    const modelInfo = mainInterior[id];
                                    if ( i == 0 ) preWidth[i] = x0 + parseInt( modelInfo['frame']['x3'] - modelInfo['frame']['x1'] + between_bespoke);
                                    else preWidth[i] = preWidth[i-1] + parseInt( modelInfo['frame']['x3'] - modelInfo['frame']['x1'] ) + between_bespoke;
                                }
                            }
                            return preWidth;
                        }

                        function setDrawMainColor(mainInterior, id, position, x0, y0, preWidth, i, color, mainColorCtx ,currentInteriorType){
                            const modelInfo = mainInterior[id];
                            const sx=modelInfo[position]['x1'];
                            const sy=modelInfo[position]['y1'];
                            const sWidth=modelInfo[position]['x3']-modelInfo[position]['x1'];
                            const sHeight=modelInfo[position]['y3']-modelInfo[position]['y1'];
                            const dx = x0 + parseInt( sx - modelInfo['frame']['x1'] );
                            const dy = y0 + parseInt( sy - modelInfo['frame']['y1'] );
                            const dWidth=sWidth;
                            const dHeight=sHeight;
                            const colorImg = new Image();
                            colorImg.crossOrigin = "Anonymous";
                            // colorImg.src = imgPath + mainInterior[color] + imgSuffix;
                            colorImg.src = imgPath + mainInterior["tmp"] + imgSuffix;

                            if ( i > 0 ) {
                                const z = preWidth[i-1];
                                //addListener(colorImg, 'load', function() {
                                    // 0225 del : mainColorCtx.drawImage( colorImg, dx + z, dy, dWidth, dHeight, dx + z, dy, dWidth, dHeight );

                                    // 0225 add2 :
                                    mainColorCtx.fillStyle=COLOR[color].rgb;
                                    mainColorCtx.fillRect(dx + z, dy, dWidth, dHeight);

                                //}, false, currentInteriorType);
                            } else {
                                //addListener(colorImg, 'load', function() {
                                    // 0225 del : mainColorCtx.drawImage( colorImg, dx, dy, dWidth, dHeight, dx, dy, dWidth, dHeight );

                                    // 0225 add2 :
                                    mainColorCtx.fillStyle=COLOR[color].rgb;
                                    mainColorCtx.fillRect(dx, dy, dWidth, dHeight);
                                //}, false, currentInteriorType);
                            }
                        }

                        function setDrawFrame(preWidth, mainInterior, id, x0, i, mainFrameCtx , currentInteriorType){
                            const frameX = preWidth ;
                            const modelInfo = mainInterior[id];
                            const sx = modelInfo['frame']['x1'];
                            const sy = parseInt(modelInfo['frame']['y1']);
                            const sWidth = modelInfo['frame']['x3']-modelInfo['frame']['x1'];
                            const sHeight = modelInfo['frame']['y3']-modelInfo['frame']['y1'];
                            const frameImg = new Image();
                            frameImg.crossOrigin = "Anonymous";
                            frameImg.src = imgPath + modelInfo['src'] + imgSuffix;
                            if ( i == 0 ) {
                                addListener(frameImg, 'load', function() {
                                    mainFrameCtx.drawImage( frameImg, sx, sy, sWidth, sHeight, x0, sy, sWidth, sHeight );
                                }, false, currentInteriorType);
                            } else {
                                const dx = frameX[i-1];
                                addListener(frameImg, 'load', function() {
                                    mainFrameCtx.drawImage( frameImg, sx, sy, sWidth, sHeight, dx, sy, sWidth, sHeight );
                                }, false, currentInteriorType);
                            }
                        }

                        function setDrawMoodColor(canvasId, id, moodInterior, fsBGtype, po, currentInteriorType){
                            if ( id.substring(id.length-2) == 'FH' ) {
                                const fhUI = document.getElementById(canvasId);
                                // const fhUI = document.getElementById('bezResultWideFrame');
                                if ( fhUI.getContext ) {
                                    fhUI.width = 1440;
                                    fhUI.height = 1440;
                                    const fhUICtx = fhUI.getContext('2d');
                                    const uiImg = new Image();
                                    uiImg.crossOrigin = "Anonymous";
                                    uiImg.src = imgPath + moodInterior[fsBGtype]['FH'] + imgSuffix;

                                    if ( fsBGtype == 'SBBB' ) {
                                        addListener(uiImg, 'load', function() {
                                            fhUICtx.drawImage(uiImg,0,0);
                                        }, false, currentInteriorType)
                                    } else {
                                        const point = moodInterior[fsBGtype][po]['FH'];
                                        const x = parseInt(point['x']);
                                        addListener(uiImg, 'load', function() {
                                            if ( po == 'BB1' ) fhUICtx.drawImage(uiImg,0,0, x, 1440,0,0, x, 1440);
                                            else if ( po == 'BB2' ) fhUICtx.drawImage(uiImg,x,0,1440-x, 1440,x,0,1440-x, 1440);
                                        }, false, currentInteriorType)
                                    }
                                }
                            }
                        }

                        function getPanelPosition(modelInfo, i, x1w, x2w, x3w, x4w, y1w, y2w, y3w, y4w, xLeft, xRight){
                            const sx=modelInfo['frame']['x1'];
                            const sy=modelInfo['frame']['y2'];
                            const sWidth=modelInfo['frame']['x2']-modelInfo['frame']['x1'];
                            const sHeight=modelInfo['frame']['y3']-modelInfo['frame']['y2'];
                            const leftHeight = modelInfo['frame']['y4']-modelInfo['frame']['y1'];
                            const xHeight = ((y4w-y3w)/(x4w - x3w) * (xLeft[i] - x3w) + y3w) - ( (y2w-y1w)/(x2w - x1w) * (xLeft[i] - x1w) + y1w);
                            const dWidth=sWidth*xHeight/leftHeight;

                            if ( i == 0) xRight[i] = xLeft[i] + dWidth;
                            else if ( i > 0) xRight[i] = xRight[i-1] + dWidth;

                            const dHeight = sHeight * dWidth / sWidth;
                            const dHeight2 = ((y4w-y3w)/(x4w - x3w) * (xRight[i]- x3w) + y3w) - ((y2w-y1w)/(x2w - x1w) * (xRight[i] - x1w) + y1w);
                            const dy = ((y2w-y1w)/(x2w - x1w) * (xRight[i] - x1w) + y1w);// y0w;

                            return {"sx":sx, "sy":sy, "sWidth":sWidth, "sHeight":sHeight,  "dy":dy, "dWidth":dWidth, "dHeight":dHeight};
                        }

                        function drawBespoke( interior ) {
                            interior = interior ? interior : "beige_wood";
                            if ( (typeof myBespoke) != 'object' ) return;

                            showLoading();
                            getEventCode();
                            const type = (Object.keys(myBespoke[0])[0]).substring(0, 2);

                            // Reset All canvas
                            removeAllLoadListeners();

                            var _canvasPoolIndex = 0;

                            //const allCanvas = ['bezResultMainBack','bezResultMainCabinet','bezResultMainColor','bezResultMainFrame','bezResultWideBack','bezResultWideCabinet', 'bezResultWideColor','bezResultWideFrame','bezResultMoodBack','bezResultMoodCabinet','bezResultMoodColor','bezResultMoodFrame','bezResultMoodTop','bezCodeEventBack','bezCodeEventCabinet','bezCodeEventColor','bezCodeEventFrame','bezCodeEventCode'];
                            //const allCanvas = ['bezResultMainBack','bezResultMainCabinet','bezResultMainColor','bezResultMainFrame','bezResultWideBack','bezResultWideCabinet', 'bezResultWideColor','bezResultWideFrame','bezResultMoodBack','bezResultMoodCabinet','bezResultMoodColor','bezResultMoodFrame','bezResultMoodTop','bezCodeEventCode'];
                            const allCanvas = ['bezResultMainBack','bezResultMainCabinet','bezResultMainColor','bezResultMainFrame'];
                            for ( let i=0; i<allCanvas.length; i++ ) {
                                const canvasEraser= document.getElementById(allCanvas[i]);
                                if ( canvasEraser.getContext ) {
                                    const eraserCtx = canvasEraser.getContext('2d');
                                    eraserCtx.clearRect(0, 0, canvasEraser.width, canvasEraser.height);
                                }
                            }
                            $(".bez-btns.preview").removeClass("select");
                            $("#"+interior).addClass("select");
                            // bespokeSwiper.slideTo(0, 0, false);

                            /**********************************
                             * KITCHENFIT
                             **********************************/
                            if (type == 'kf') {
                                const mainInterior = INTERIOR[interior][type]['main'];
                                setDrawBack('bezResultMainBack', mainInterior['BG'], interior);
                                //setDrawBack('bezCodeEventBack', mainInterior['BG'], interior);

                                const x1 = parseInt(mainInterior['x1']);
                                const x3 = parseInt(mainInterior['x3']);
                                const y1 = parseInt(mainInterior['y1']);
                                const y3 = parseInt(mainInterior['y3']);
                                const between_bespoke = 1;
                                const between_cabinet = 2;

                                let totalWidth = 0;
                                myBespoke.forEach( function( model ) {
                                    for ( var id in model ) {
                                        const model = mainInterior[id];
                                        totalWidth += model['frame']['x3'] - model['frame']['x1'] + between_bespoke;
                                    }
                                });
                                totalWidth = totalWidth - between_bespoke;
                                // 냉장고가 들어갈 x좌표 기준점
                                const x0 = x1 + (x3-x1-totalWidth)/2;
                                const y0 = y1;

                                setDrawCabinet('bezResultMainCabinet', x0,totalWidth, between_cabinet, mainInterior['CB'], interior);
                                //setDrawCabinet('bezCodeEventCabinet', x0,totalWidth, between_cabinet, mainInterior['CB'] , interior);

                                const mainColor = document.getElementById('bezResultMainColor');
                                if ( mainColor.getContext ) {

                                    mainColor.width = 1440;
                                    mainColor.height = 1440;
                                    const preWidth = setFramePosition(myBespoke ,mainInterior, 0, between_bespoke )
                                    const mainColorCtx = mainColor.getContext('2d');
                                    for (let i=0; i< myBespoke.length; i++) {
                                        var _arr = Object.entries( myBespoke[i] );
                                        for ( var _i in _arr ) {
                                            var id = _arr[_i][0], value = _arr[_i][1];
                                            var _arr2 = Object.entries( value );
                                            for ( var _i2 in _arr2 ) {
                                                var position = _arr2[_i2][0], color = _arr2[_i2][1];
                                                if ( position == 'scr' || position == 'frame' ) continue;
                                                setDrawMainColor(mainInterior, id, position, x0, y0, preWidth, i, color, mainColorCtx , interior);
                                            }
                                        }
                                    }
                                }

                                const mainFrame = document.getElementById('bezResultMainFrame');
                                if ( mainFrame.getContext ) {
                                    mainFrame.width = 1440;
                                    mainFrame.height = 1440;
                                    const preWidth = setFramePosition(myBespoke ,mainInterior, x0, between_bespoke );
                                    const mainFrameCtx = mainFrame.getContext('2d');
                                    for (let i=0; i< myBespoke.length; i++) {
                                        const id = Object.keys( myBespoke[i] )[0];

                                        setDrawFrame(preWidth, mainInterior, id, x0, i, mainFrameCtx, interior);
                                    }
                                }


                                /********************************************
                                 * Freestanding
                                 ********************************************/
                            } else if (type=='fs') {
                                let fsBGtype = "";
                                for (let i=0; i<myBespoke.length; i++) {
                                    let type = "";
                                    const id = Object.keys( myBespoke[i] )[0];
                                    if ( id == 'fs4dr' || id == 'fs4drFH' ) {
                                        fsBGtype += "BB";
                                    } else if ( id == 'fs4dr584' || id == 'fs4dr486' ) {
                                        fsBGtype += "SB";
                                    }
                                }
                                const mainInterior = INTERIOR[interior][type]['main'];
                                const Color = document.getElementById('bezResultMainBack');
                                if ( Color.getContext ) {
                                    Color.width = 1440;
                                    Color.height = 1440;
                                    const colorCtx = Color.getContext('2d');
                                    for (let i=0; i< myBespoke.length; i++) {
                                        const po = fsBGtype.substring(i*2,i*2+2)+ (i+1).toString();
                                        var _arr = Object.entries( myBespoke[i] );
                                        for ( var _i in _arr ) {
                                            var id = _arr[_i][0], value = _arr[_i][1];
                                            var _arr2 = Object.entries( value );
                                            for ( var _i2 in _arr2 ) {
                                                var position = _arr2[_i2][0], color = _arr2[_i2][1];
                                                const point = mainInterior[fsBGtype][po][position];
                                                const x1 = point['x1'];
                                                const y1 = point['y1'];
                                                const x3 = point['x3'];
                                                const y3 = point['y3'];
                                                const colorImg = new Image();

                                                colorImg.crossOrigin = "Anonymous";
                                                // colorImg.src = imgPath + mainInterior[color] + imgSuffix;
                                                colorImg.src = imgPath + mainInterior["tmp"] + imgSuffix;

                                                // 0225 add2 :
                                                colorCtx.fillStyle=COLOR[color].rgb;
                                                colorCtx.fillRect(x1,y1,x3-x1,y3-y1);

                                                addListener(colorImg, 'load', function() {
                                                    // 0225 del : colorCtx.drawImage(colorImg,x1,y1,x3-x1,y3-y1,x1,y1,x3-x1,y3-y1);

                                                }, false, interior)
                                                setDrawMoodColor('bezResultMainColor', id, mainInterior, fsBGtype, po, interior);
                                            }
                                        }
                                    }
                                }

                                setDrawBack('bezResultMainFrame',  mainInterior[fsBGtype]['BG'], interior)

                            }
                            GLOBAL_INTERIOR_TYPE = interior
                        }

                        function putProp75(prop75) {
                            digitalData.page.prop75 = prop75;
                            digitalData.page.pathIndicator.prop75 = prop75;
                        }

                        function showResult( interior ) {
                            drawBespoke( interior );
                        }


                        const __downCanvas1 = document.createElement("canvas");
                        function _getCanvas() {
                            let canvasId = "";

                            canvasId = "bezResultMain";

                            const Back = document.getElementById(canvasId+"Back");
                            const Cabinet = document.getElementById(canvasId+"Cabinet");
                            const Color = document.getElementById(canvasId+"Color");
                            const Frame = document.getElementById(canvasId+"Frame");
                            const Info = document.getElementById("bezResultInfoCanvas");


                            var canvas = __downCanvas1;
                            canvas.id = "canva";
                            //canvas.width = 1440;
                            // canvas.height = 1440;
                            canvas.width = 445;
                            canvas.height = 515 + Number(DownloadImgHeight);
                            var ctx = canvas.getContext("2d");
                            //ctx.clearRect(0,0,canvas.width, canvas.height);
                            ctx.fillStyle="#fff";
                            ctx.fillRect(0,0,canvas.width, canvas.height);
                            ctx.fill();

                            ctx.drawImage(Back,0,67,445,445);
                            ctx.drawImage(Cabinet,0,67,445,445);
                            ctx.drawImage(Color,0,67,445,445);
                            ctx.drawImage(Frame,0,67,445,445);
                            ctx.drawImage(Info,0,515);

                            // header title
                            var header_title = '나만의 BESPOKE 조합';
                            ctx.font = "bold 18px SamsungOneKorean";
                            //ctx.textAlign = "center";
                            ctx.fillStyle = "#000";
                            ctx.fillText(header_title,10,40);


                            if (canvasId == "bezResultMood") {
                                const Top = document.getElementById(canvasId+"Top");
                                ctx.drawImage(Top,0,0);
                            }
                            return canvas;
                        }
                        $('#saveResultImage').on('click',(function(){

                            var canvas = _getCanvas();
                            //showPopup("resultDownload");
                            var img = document.getElementById('bezDownloadImageCanvas');
                            img.src = canvas.toDataURL();

                            var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                            console.log("ios = ", iOS);
                            if( !iOS ) {
                                var ct = getEventCodeText();
                                canvas.toBlob(function(blob) {
                                // $("#bezDownloadImageA").off('click').on('click', function(e) {
                                //     e.preventDefault();
                                        console.log("toBlob");
                                        saveAs(blob,"BESPOKE_"+ct+".png");
                                // });
                                });


                            }
                            
                        }));

    // ================================================================================================================================
    // inits(clicks event, etc) handlers
    // ================================================================================================================================

                        !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=o(n(1)),c=o(n(3)),u=o(n(4));function o(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function o(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n.resolveOptions(e),n.listenClick(t),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,c.default),i(o,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===r(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return s("action",t)}},{key:"defaultTarget",value:function(t){var e=s("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return s("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),o}();function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l},function(t,e,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=n(2),c=(o=a)&&o.__esModule?o:{default:o};var u=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),e}();t.exports=u},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var d=n(5),h=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(l=t).addEventListener(s,f),{destroy:function(){l.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,u=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,u)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,u)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,u,l,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(7);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])});
    // ================================================================================================================================
    // APP_DATA ( FRONT )
    // ================================================================================================================================

    //appData
                        var APP_DATA = {
                            //IMG_PATH : "///images.samsung.com/is/image/samsung/p5/sec/2020bespoke/experience/img/",
                            //VIDEO_PATH : "/assets/videos/"
                            IMG_PATH 		: "//images.samsung.com/is/image/samsung/p5/sec/2020bespoke/experience/img/",
                            VIDEO_PATH 		: "//images.samsung.com/is/content/samsung/p5/sec/2020bespoke/experience/video/",
                            SURVEY_PATH 	: "//images.samsung.com/is/image/samsung/p5/sec/2020bespoke/experience/survey/",

                            VIDEO_MO : "//images.samsung.com/kdp/ext_img_dir/DS001/20201221_bespoke/bespoke_int_m_final.mp4",
                            VIDEO_PC : "//images.samsung.com/kdp/ext_img_dir/DS001/20201221_bespoke/bespoke_int_w_final.mp4",
                            POSTER_MO : "//images.samsung.com/kdp/ext_img_dir/DS001/20201221_bespoke/bespoke_int_m_poster.jpg",
                            POSTER_PC : "//images.samsung.com/kdp/ext_img_dir/DS001/20201221_bespoke/bespoke_int_w_poster.jpg",
                        }

                        var SECTIONS = {
                            // sections id name.
                            INTRO 	: "bezIntro",
                            GATE 	: "introVideo",
                            MAKE 	: "bezMake",
                            SURVEY 	: "bezSurvey",
                            COLOR 	: "bezColor",
                            RESULT 	: "bezResult",
                            RESULT_NO_COOKIE : "bezResult1"
                        }

                        var PC_SIZE = 1020;
                        var DEVICE_PC_FILTER = "win16|win32|win64|mac|macintel";

    //userData
                        var userData = {
                            device : null,
                            selectBespork : null,
                            cookie : null,
                            size : null
                        }

                        var selectData = {
                            maxWidth : 0,
                            sub : ""
                        }

                        var DEFALUT_INFO_TEXT = {title:"냉장고를 추가해 보세요", desc: "<a class='minus-icon'></a>를 눌러 삭제하고 드래그로 위치를 바꿀 수도 있어요", sub:"제작소에서 냉장고 추가는 최대 가로 2150 mm까지 가능합니다" }

    // ================================================================================================================================
    // global(click, init) handlers
    // ================================================================================================================================
                        var isAnim = false;
                        var prevPage, currentPage;
                        var resizeDelay;
                        var globalDimd = $('#bezSideMenu>.dimd');
                        var popupDimd = $('.bez-dimd');

                        var enableFlag = 0;

                        globalDimd.on('click', function(){
                            $('#bezSideMenu').removeClass('active');
                        });

                        popupDimd.on("click", function(){
                            subHidePopup();
                            bezHidePopup();
                        });

    //window.addEventListener("popstate", (e) => {


    // history.pushState({ page: SECTIONS.INTRO, data: {}}, _tarId);

                        function resultPagePropData(){
                            var __props = (surveyData == "") ? "" : "survey_";
                            if(surveyData != "") surveyData = "";
                            for(var i=0; i<myBespoke.length; i++){
                                __key = Object.keys(myBespoke[i])[0];
                                __props = __props +String(Object.keys(myBespoke[i])[0]) + "_";
                                for(var j =0; j<Object.keys(myBespoke[i][__key]).length; j++){
                                    var __key2 = Object.keys(myBespoke[i][__key])[j];
                                    __props = __props + myBespoke[i][__key][__key2] + "_";
                                }
                            }
                            return __props;
                        }

                        function btnsClickHandler(e){

                            if(isAnim) return;
                            var _tid = this.id;
                            btnsHandler(_tid,this);
                        }

                        function btnsHandler($tid,obj){
                            var _tid = $tid;
                            $('.bez-mobile').removeClass('onColor');
                            $('.bez-color-interface').removeClass('bottomHide');

                            switch (_tid) {
                                // case "bezLogo" : sectionChangeHandler(SECTIONS.GATE); break; // 0308 삭제
                                case "bezLogo" : sectionChangeHandler(SECTIONS.INTRO); break; // 수정
                                // global navigation,,,
                                case "bezBtnOpenMenu" :  menuOpen(); break;
                                case "bezBtnCloseMenu" : $('#bezSideMenu').removeClass('active'); break;

                                case 'menuSnsFb':
                                case 'menuSnsTw':
                                case 'menuSnsKt' :	snsLinkHandler(_tid); break;
                                case "menuSnsLink" : copyClipboardHandler('#currentUrl'); break;

                                case "menuKfMake" 		:
                                case "menuKfRecommend"	:
                                case "menuFsMake" 		:
                                case "menuFsRecommend" 	:
                                case "menuEvt" 			:
                                case "menuOs" 			: menuNaviClickHandler(_tid); break;

                                // intro/gatePage,,,
                                // case "bezBtnStart" 			: sectionChangeHandler(SECTIONS.GATE); break;
                                case "bezBtnKitchenfit" 	: makeInits("kf"); sectionChangeHandler(SECTIONS.MAKE); break;
                                case "bezBtnFreestanding" 	: makeInits("fs"); sectionChangeHandler(SECTIONS.MAKE); break;

                                // make Page,,
                                case "bezBtnGate"		: sectionChangeHandler(SECTIONS.GATE); break;
                                case "bezBtnColor" 		:
                                    // 0302 삭제 $('.bez-mobile').addClass('onColor');
                                    if(checkEnableItem() == 1){
                                        $('.bez-mobile').addClass('onColor'); // 0302 추가
                                        sectionChangeHandler(SECTIONS.COLOR);
                                        makeItemToColor();
                                        freeSetHandler();
                                        sliderBtnInit("selectColor");
                                        $('.bespoke-color-tab > li > a').eq(0).trigger("click");
                                    } else {
                                        showPopup("makeCheckEmpty");
                                    }
                                    break;

                                case "kfa-left"			: makeKfArrowHandler(true); break;
                                case "kfa-right" 		: makeKfArrowHandler(false); break;

                                // color Page,, (footer btns)
                                case "bezBtnColorBack" 	: sectionChangeHandler(SECTIONS.MAKE); showFreeSetColor(); break;
                                case "glamInfo" 		: $('.bez-mobile').addClass('onColor'); materialInfoPopupControll(1);showPopup("materialInfo");break;
                                case "satinInfo" 		: $('.bez-mobile').addClass('onColor'); materialInfoPopupControll(2); showPopup("materialInfo"); break;
                                case "cotaInfo" 		: $('.bez-mobile').addClass('onColor'); materialInfoPopupControll(3); showPopup("materialInfo"); break;
                                case "bezBtnResult"		:
                                    if(checkEnableColor()){
                                        showLoading();
                                        setTimeout(function(e){ sectionChangeHandler(SECTIONS.RESULT); }, 1000);
                                    } else {
                                        showPopup("colorCheckFail"); //bezBtnResult
                                        $('.bez-mobile').addClass('onColor'); // 0302 추가
                                    }
                                    break;

                                // survey Page
                                case "goSurveyResultAgree" : showLoading(); setTimeout(function(e){ sectionChangeHandler(SECTIONS.RESULT); $(".result-preview"+surveyTrigger).trigger("click"); }, 1000); hideLoading(); break;
                                case "surveyBackBtn" : answerBackClick(); break;

                                case "goSurveyResultBack" : surveyInit(); break;

                                // result page
                                case "beige_wood" 	:
                                case "white_pastel" :
                                case "natural_mid" 	:
                                case "dark_wood" 	: resultPreviewHandler(_tid); break;

                                case "resultCode" : subShowPopup("eventDownload"); break;
                                case "resultBuy" : productBuyPopupMakeHandler(); break;

                                // popups
                                case "materialPopArrowL" : $('.bez-mobile').addClass('onColor'); materialInfoPopupArrow(true); break;
                                case "materialPopArrowR" : $('.bez-mobile').addClass('onColor'); materialInfoPopupArrow(false); break;

                                case "eventJoin" : subShowPopup("eventDownload"); break;

                                case "hashCopy" :  break;
                                case "hashCopy1" : break;
                                case "bezGetCodeCopy" :  break;

                                case "bezGetCodePrev" : bezHidePopup(); showPopup("buyProduct"); break;

                                case "openHistory" :
                                    /*if( $("#bezResult").hasClass("history-mode") ) {
                                     $(".bez-mobile").attr("style","");
                                     $("#bezResult").removeClass("history-mode");
                                     } else{
                                     historyAppendHeight();
                                     $("#bezResult").addClass("history-mode")
                                     }*/
                                    break;

                                case "eventTerms" :
                                    if( $("#event .wrapper").hasClass("terms") ) {
                                        $("#event .wrapper").removeClass("terms");
                                    } else{
                                        $("#event .wrapper").addClass("terms");
                                    }
                                    break;

                                //case "saveEventImage" : subHidePopup(); break;
                                case "eventDetailBtn" : window.open("/sec/bespoke/event/mybespokecode/", '_blank'); break;
                                case "eventDetailBtn1" :  window.open("/sec/bespoke/event/mybespokecode/", '_blank'); break;

                                case "bezBtnFreeSet1" :
                                case "bezBtnFreeSet2" :
                                case "bezBtnFreeSet3" :
                                case "bezBtnFreeSet4" :
                                case "bezBtnFreeSet5" :
                                case "bezBtnFreeSet6" : mainFreeSet(obj); break;

                                default : console.log("empty click "+$tid+" function error"); break;
                            }

                        }

                        function mainFreeSet(obj) {

                            showLoading();

                            var _this = $(obj),
                                 _rf = _this.data("rfSet"),
                                 _color = _this.data("colorSet");

                            
                            var rf_arr = _rf.split("|"),
                                color_arr = _color.split("|");
                                

                            // intro
                            sectionChangeHandler(SECTIONS.GATE);

                            // gate
                            $("#bezBtnKitchenfit").trigger("click");


                            // door
                            for (var i=0; i<rf_arr.length; i++) {
                                $("#kfMakeBoxPC .bez-model[item="+rf_arr[i]+"] .handle").trigger("click");

                                if(i<(rf_arr.length-1)) {
                                    $("#bezMakePreview #bezModelAdd").trigger("click");
                                }
                            }

                            // color
                            $("#bezBtnColor").trigger("click");
                            
                            
                            var j = 0;
                            $("#bezColorPreviewContainer").find(".bez-model").each(function(i,e){

                                    var rf = $(e);

                                    rf.find(".color-door").each(function(i,e){

                                        var idx = i+1,
                                            door = $(e).parent().find(".color-door[data-door-idx="+idx+"]");


                                        // door select
                                        doorColorHandler(door);

                                        // color select
                                        //$(".bespoke-color-content .colors[cname='"+color_arr[j]+"']").trigger("click");

                                        j++;
                                    });

                            });


                            setTimeout(function() {
                                hideLoading(true);
                            },1000);
                        }

                        function menuNaviClickHandler($tid){
                            $('#bezSideMenu').removeClass('active');

                            switch ($tid) {
                                case "menuKfMake" : makeInits("kf"); sectionChangeHandler(SECTIONS.MAKE); break;
                                case "menuKfRecommend" : userData.choiceStyle = "kf"; makeInits("kf"); sectionChangeHandler(SECTIONS.SURVEY); surveyInit(); break;
                                case "menuFsMake" : makeInits("fs"); sectionChangeHandler(SECTIONS.MAKE); break;
                                case "menuFsRecommend" : userData.choiceStyle = "fs"; makeInits("fs"); sectionChangeHandler(SECTIONS.SURVEY); surveyInit(); break;
                                case "menuEvt" :
                                    if( userData.cookie.length != 0 && userData.cookie != undefined){
                                        showHistoryResult(0);
                                        sectionChangeHandler(SECTIONS.RESULT_NO_COOKIE);

                                    }else{
                                        showPopup("failEvent");
                                    }
                                    break;
                                case "menuOs" : window.open("/sec/plaza/centerMain/", '_blank'); break;
                            }
                        }

                        function menuOpen(){
                            isAnim = true;
                            $(".bez-mobile").attr("style","");
                            $("#bezResult").removeClass("history-mode");

                            var _origin = ( window.innerWidth > PC_SIZE ) ? "margin-left" : "margin-right";
                            $('#bezSideMenu').addClass('active');
                            $(".bez-side-menu").css({_origin:"-60%", opacity:0});
                            TweenMax.to($(".bez-side-close > img"), 0.01, {rotation:-45,onComplete:function(){
                                TweenMax.to($(".bez-side-close > img"), 0.4, {rotation:0})
                            }});
                            TweenMax.to($(".bez-side-menu"), 0.5, {_origin:"0",opacity:1, onComplete:function(){
                                isAnim = false;
                            }});
                        }

                        function menuClose(){}
                        function makeInits($tar){
                            $("#bezMakePreviewContainer > div").remove();
                            userData.choiceStyle = $tar;
                            var _defaultInfoObj;
                            $("#bezMakePreviewArea").addClass("guide");
                            $("#bezMakeModelList .bez-model").removeClass("selected");
                            if($tar == "kf"){
                                $(".bez-wrapper").removeClass("fs"); $(".bez-wrapper").addClass("kf");
                                $(".bez-mobile").removeClass("fs"); $(".bez-mobile").addClass("kf");
                                selectData = {
                                    id : "kf",
                                    maxWidth : 2150,
                                    sub : "제작소에서 냉장고 추가는 가로 최대 2150 mm까지 가능합니다"
                                }
                                $(".palettes").addClass("kf");
                                _defaultInfoObj = {title:"BESPOKE 키친핏", desc:"표준장/싱크대와 깊이가 같아 <br class='pc'/>냉장고가 앞으로 튀어나오지 않고 딱 맞아요 <br/>냉장고를 여러 개 설치했을 때 사이에 틈이 거의 남지 않아요", sub:"표준장 깊이 700 mm 기준, 좌우 설치폭 12 mm" };
                                TAG_CODE_PAGE("kf_model");
                            } else {
                                $(".bez-wrapper").removeClass("kf"); $(".bez-wrapper").addClass("fs");
                                $(".bez-mobile").removeClass("kf"); $(".bez-mobile").addClass("fs");
                                selectData = {
                                    id : "fs",
                                    maxWidth : 1900,
                                    sub : "제작소에서 냉장고 추가는 최대 2대까지 가능합니다"
                                }
                                $(".palettes").removeClass("kf");
                                _defaultInfoObj = {title:"BESPOKE 프리스탠딩", desc: "용량이 넉넉해 보다 자유롭게 쓸수있어요 <br/>표준장/싱크대보다 깊이가 깊어 냉장고가 앞으로 조금 튀어나와요", sub:"냉장고의 깊이는 제품마다 상이함, 좌우 설치폭 50 mm" };
                               
                            }
                            $(".selected").removeClass("selected");
                            $(".bez-model").removeClass("disable")
                            $("#bezModelAdd").addClass("selected");
                            $(".bez-title-area").html("<h2>"+_defaultInfoObj.title+"</h2><p>"+_defaultInfoObj.desc+"</p><a>"+_defaultInfoObj.sub+"</a>");

                            modelInfoTextMake(DEFALUT_INFO_TEXT);
                            checkEnableItem();
                            $("#bezMakePreviewContainer > div").remove();
                            $(".bez-description-area").removeClass("m-active"); $(".bez-title-area").addClass("m-active");
                        }


    // ================================================================================================================================
    // global(popup controller)
    // ================================================================================================================================
                        var loadingTimeOut;
                        function hideLoading(now){
                            if( now )	$("#bezLoading").hide();
                            else		setTimeout(function(){$("#bezLoading").hide();}, 500);

                            if(loadingTimeOut) clearTimeout(loadingTimeOut);
                        }
                        function showLoading(){ 
                            $("#bezLoading").show();
                            // $('.bez-color-interface').addClass('bottomHide');
                            loadingTimeOut = setTimeout(function(){
                                hideLoading(); console.log(" ====== loadingTimeOut =====")
                            }, 5000)}

                        const __downCanvas2 = document.createElement("canvas");
                        function _getCanvas2() {
                            const Back = document.getElementById("bezResultMainBack");
                            const Cabinet = document.getElementById("bezResultMainCabinet");
                            const Color = document.getElementById("bezResultMainColor");
                            const Frame = document.getElementById("bezResultMainFrame");
                            const Code = document.getElementById("bezCodeEventCode");

                            var canvas = __downCanvas2;
                            canvas.id = "canva";
                            canvas.width = 1440;
                            canvas.height = 1440;
                            var ctx = canvas.getContext("2d");
                            ctx.clearRect(0,0,canvas.width, canvas.height);
                            ctx.drawImage(Back,0,0);
                            ctx.drawImage(Cabinet,0,0);
                            ctx.drawImage(Color,0,0);
                            ctx.drawImage(Frame,0,0);
                            ctx.drawImage(Code,0,0);
                            return canvas;
                        }
                        function subShowPopup($tar){
                            $("#bezPopup").hide();
                            $("#subPopup").show();
                            $(".sub-popups").hide();
                            $("#"+$tar).show();

                            if ($tar == 'eventDownload') {
                                var canvas = _getCanvas2();
                                var img = document.getElementById('bezCodeEventImg');
                                img.src = canvas.toDataURL();

                                var ct = getEventCodeText();
                                var filename = ((new Date()).getTime()).toString()+".png";
                                var agent = navigator.userAgent.toLowerCase();

                              

                            }

                            $(".sub-popups").css({opacity:0})
                            TweenMax.to( $(".sub-popups") , 0.6, {opacity:1});
                        }
                        $("#saveEventImage").on('click',function() {
                            var filename = ((new Date()).getTime()).toString()+".png";
                            var canvas = _getCanvas2();
                            //if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) return;
                            //if (/inapp|KAKAOTALK|Line\/|FB_IAB\/FB4A|FBAN\/FBIOS|Instagram|DaumDevice\/mobile|SamsungBrowser/i.test(navigator.userAgent)) return;
                            //canvas.toBlob(function(blob){ saveAs(blob,"MYBESPOKECODE_"+ct+".png"); });
                            if (!(/SamsungBrowser/i.test(navigator.userAgent))) canvas.toBlob(function(blob){ saveAs(blob,filename); });
                            subHidePopup();
                        });


                        function showPopup($tar){
                            $("#bezPopup").show();
                            $(".popups").hide();
                            $("#"+$tar).show();
                            $("#bezResult").removeClass("history-mode");

                            $(".popups").css({opacity:0});
                            TweenMax.to( $(".popups") , 0.6, {opacity:1});
                            $(window).scrollTop($(".bez-header").offset().top);
                        }

                        function bezHidePopup(){ $("#bezPopup, .popups").hide(); $('#bezGetCode').removeClass('kitf frees');}
                        function subHidePopup() { $("#subPopup, .sub-popups").hide(); }


                        var isCopyClick = false;
                        function copyClipboardHandler($tar) {
                            if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                                TweenLite.delayedCall(1, function(){
                                    if($tar == "#menuSnsLink") alert('이벤트 URL주소가 복사되었습니다');
                                    else if($tar == "#bezGetCodeCopy") alert('모델명이 복사되었습니다');
                                    //else alert('필수 해시태그가 복사되었습니다');

                                    isCopyClick = false;
                                });
                                iosCopyToClipboard($($tar));
                                isCopyClick = true;
                            }
                        }

                        function iosCopyToClipboard(el) {
                            var oldContentEditable = el.contentEditable,
                                    oldReadOnly = el.readOnly,
                                    range = document.createRange();

                            el.contentEditable = true;
                            el.readOnly = false;
                            range.selectNodeContents(el);

                            var s = window.getSelection();
                            s.removeAllRanges();
                            s.addRange(range);

                            el.setSelectionRange(0, 999999);

                            el.contentEditable = oldContentEditable;
                            el.readOnly = oldReadOnly;

                            document.execCommand('copy');
                        }

    // ================================================================================================================================
    // step1(model make) handlers
    // ================================================================================================================================
                        var prevSelectItem, currentSelectItem;
                        function selectItem($this) {

                            $("#bezMakePreview .bez-model").removeClass('selected');
                            $($this).addClass('selected');

                            var _name = $($this).attr("name");


                            //alert(_name, '_name');
                            $("#bezMakeModelList .bez-model").removeClass("selected");
                            $("#bezMakeModelList ."+_name).addClass("selected");

                        }

                        function makeDoorUnselectHandler($isEmpty){
                            $isEmpty = $isEmpty ? $isEmpty : false;
                            $("#bezMakePreview *").removeClass("selected");
                            if($isEmpty) $("#bezModelAdd").addClass("selected");
                        }

                        function addSelectItem() {

                            $("#bezMakePreview .bez-model").removeClass('selected');
                            $("#bezModelAdd").addClass('selected');
                            $("#bezMakeModelList .bez-model").removeClass("selected");
                            checkEnableItem("addItem");
                        }

                        function selectItemAdd($item) {

                            var $this;
                            var _tarIdx;

                            $('#bezMakePreviewArea').removeClass('guide');
                            $('#bezMakePreview').removeClass('empty-item');

                            $("#bezMakePreview .bez-model").each(function(idx, item){

                                if($(item).hasClass("selected")){
                                    $this = $(item);
                                    _tarIdx = idx;
                                }
                            });

                            if (!$this) return;

                            var _name = $this.attr("name");

                            if(_name == "add"){

                                var $tar = $($item).clone().appendTo("#bezMakePreviewContainer");
                                selectItem($tar);

                            } else {
                                var $new = $($item).clone().insertBefore($($this));
                                $($this).remove();
                                selectItem($new);
                            }
                        }

                        function deleteItems($this){
                            $($this).remove();
                            $(".bez-description-area").removeClass("m-active"); $(".bez-title-area").addClass("m-active");
                            $("#bezMakeModelList .bez-model").removeClass("selected");
                            addSelectItem();
                        }

                        function modelInfoTextMake($obj){
                            var _desc = $obj.desc.replace(/(?:\r\n|\r|\n)/g, '<br />');
                            var _checkVal = _desc.replace(/[(]/g, '<span>(');
                            var _checkVal2 = _checkVal.replace(/[)]/g, ')</span>');

                            $(".bez-description-area").addClass("m-active");
                            $(".bez-title-area").removeClass("m-active");
                            $("#bezMake .bez-description-area").html("<h2>"+$obj.title+"</h2><p>"+_checkVal2+"</p><a>"+selectData.sub+"</a>");
                        }

                        function makeItemDropEnd(evt){
                            try {
                                var __x = evt.originalEvent.changedTouches[0].clientX + $(window).scrollLeft();
                                var __y = evt.originalEvent.changedTouches[0].clientY + $(window).scrollTop();
                            } catch (err) {
                                return null;
                            }

                            var isTrans = false;
                            
                            checkEnableItem();

                            if (!isTrans) {

                                selectItemAdd(evt.item);
                            }
                        }

                        function makeItemPcClickHandler($this){
                            selectItemAdd($($this).parent());
                            return checkEnableItem();
                        }

                        function checkEnableItem( $tar ){

                            if($('#bezMakePreviewContainer > div').length === 0){
                                $('.bez-description-area').addClass('disable');
                                if(enableFlag > 0){
                                    $('.bez-description-area').removeClass('disable');
                                }
                                enableFlag += 1;
                            }else{
                                $('.bez-description-area').removeClass('disable');
                            }

                            $tar = $tar ? $tar : null;
                            var _makeWidth = 0;
                            $("#bezMakeModelList .bez-model, #bezMakePreview, #bezModelAdd").removeClass("disable");

                            if($("#bezMakePreviewContainer > div").length == 0) {
                                $("#bezMakePreview").addClass("empty-item");
                                $("#bezMakePreviewArea").addClass("guide");
                                $("#bezModelAdd").addClass("selected");
                                return 0;
                            }else{
                                $("#bezMakePreviewArea").removeClass("guide");
                            }
                            $("#bezMakePreview").removeClass("empty-item");
                            $("#bezMakePreviewContainer > div").each(function(index, item){
                                _makeWidth = _makeWidth + Number($(item).attr("itemWidth")) + 7;
                            });
                            var _selectedWidth = $("#bezMakePreviewContainer .selected").attr("itemWidth") || 0;
                            if( _selectedWidth == 0 ) modelInfoTextMake(DEFALUT_INFO_TEXT);

                            var _emptys = selectData.maxWidth - (_makeWidth - _selectedWidth);
                            var _addEmptys = selectData.maxWidth - _makeWidth;

                            if ( _makeWidth < selectData.maxWidth ) {
                                // comped
                                if (_emptys < 915) {
                                    $("#bezMakeModelList .fdr, #bezMakeModelList .fdrF, #bezMakeModelList .fdrS").addClass("disable");
                                }
                                if (_emptys < 702) {
                                    $("#bezMakeModelList .tdrKP").addClass("disable");
                                }
                                if (_emptys < 602) {
                                    $("#bezMakeModelList .odrC, #bezMakeModelList .odrK, #bezMakeModelList .odr, #bezMakeModelList .tdr,#bezMakeModelList .sdr").addClass("disable");
                                }
                                if (_emptys < 462) {
                                    $("#bezMakeModelList .odrV").addClass("disable");
                                    $("#bezModelAdd").addClass('disable');
                                }

                                if (_addEmptys < 462) {
                                    $("#bezModelAdd").addClass("disable");
                                    if ($("#bezMakePreviewContainer > div").hasClass('fs')) {
                                        $("#bezModelAdd").addClass('disable');
                                    }
                                }
                                if (_addEmptys < 602 && $tar == "addItem") {
                                    makeKfArrowHandler(false);
                                }

                                return 1;
                            } else {
                                var selectFlag = false;

                                if($("#bezMakePreviewContainer > div").hasClass('fs')){
                                    $("#bezModelAdd").addClass('disable');
                                    showPopup("makeNotAppend2");
                                }else{
                                    if(_emptys >= 455){
                                        showPopup("makeNotAppend3");
                                        selectFlag = true;
                                    }else{
                                        showPopup("makeNotAppend");
                                    }
                                }
                                $("#bezMakePreview .selected").remove();

                                if(selectFlag){
                                    selectItem($('#bezModelAdd')[0]);
                                    selectFlag = false;
                                }else{
                                    $("#bezModelAdd").addClass('disable');
                                    selectItem(prevSelectItem);
                                }

                                return false;
                            }
                        }

                        function makeItemToColor() {
                            var _div ="";
                            var _selectDomStr = '<div class="select-cover"><div class="sc-top"></div><div class="sc-bottom"></div><div class="sc-left"></div><div class="sc-right"></div></div>';
                            $(".color-door").off("click, touchstart");
                            $("#bezMakePreviewContainer > div").each(function(index, item){
                                var __name = $(item).attr("name");
                                var __item = $(item).attr("item");
                                var __door = $(item).attr("door");
                                var __handle = $(item).children(".handle").html();
                                var __className = item.className;
                                _div += "<div class='"+__className+"' name='"+__name+"' item='"+__item+"'>";
                                var __firClick = (index == 0) ? " selected" : "";
                                switch (__door) {
                                    case "4" : _div += '<div class="door4 color-door" data-door-idx="4">'+_selectDomStr+'<div class="effect-cover"></div></div>';
                                    case "3" : _div += '<div class="door3 color-door" data-door-idx="3">'+_selectDomStr+'<div class="effect-cover"></div></div>';
                                    case "2" : _div += '<div class="door2 color-door" data-door-idx="2">'+_selectDomStr+'<div class="effect-cover"></div></div>';
                                    case "1" : _div += '<div class="door1 color-door'+__firClick+'" data-door-idx="1">'+_selectDomStr+'<div class="effect-cover"></div></div>'; break;
                                }
                                if(__name == "fdrF") _div += "<div class='bez-model-screen'></div>";
                                _div += "<div class='item-cover'></div>"+__handle+"</div>";
                            });

                            makeKfArrowHandler(true);
                            $("#bezColorPreviewContainer").html("<span class='shadow'></span>"+_div);
                            var _eventMode = (userData.device == "pc") ?  "click" : "touchstart";
                            $(".color-door").on(_eventMode, function(){ doorColorHandler(this); });
                            $(".colors").removeClass("disable");

                            doorColorHandler( $(".color-door.selected") );
                            //doorColorHandler( $(".colors.select") );
                            
                        }

                        function makeKfArrowHandler($isLeft, $this) {
                            if( $($this).hasClass("disable") ) return;
                            var _l = ($isLeft) ? [1,2] : [2,1];

                            $(".kf-arrow").removeClass("disable");

                            TweenMax.to( $(".kg"+_l[0]), 0.5, {left:0});
                            if($isLeft) {
                                TweenMax.to( $(".kg"+_l[1]), 0.5, {left:"100%"});
                                $("#kfa-left").addClass("disable");
                            } else {
                                TweenMax.to( $(".kg"+_l[1]), 0.5, {left:"-100%"});
                                $("#kfa-right").addClass("disable");
                            }
                        }

    // ================================================================================================================================
    // step2(model color) handlers
    // ================================================================================================================================
                        var mipIdx = 1;
                        var videosObj = ['glam2','satin2','cotta2'];
                        // 0227 수정 : 컬러 눌렀을때 왼쪽 냉장고 이미지 색상값
                        //var PANNEL_COLORS = ["#E2DEDB", "#EAD3D6", "#DECDE7", "#7e785a", "#2E3D30", "#5E2A2C", "#13294b", "#CCC6BB", "#a6c0cd", "#818080", "#E1DDDB", "#514D4C", "#C9C8B4", "#8c8784", "#42413e", "#f86a38"];

                        function doorUnselectHandler(){
                            $("#bezColor *").removeClass("selected");
                        }
                        function doorColorHandler($this){
                            var _select_pc;
                            var _door = 4-$($this).index();
                            var _model = $($this).parent().attr("item");

                            if(_model == "fs4drFH") {
                                disableFhSelect(true,_door);
                            }else{
                                disableFhSelect(false);
                            }

                            if($($this).parent().hasClass('kf')){
                                $(".colors").removeClass("disable");
                                if(_model !== 'kf1drNJ' && _model !== 'kf1drND' && _model !== 'kf1drKC'){
                                    if(_model === 'kf3drKP' && _door === 2){
                                        $(".colors.cmf3").removeClass("disable");
                                    }else {
                                        $(".colors.cmf3").addClass("disable");
                                    }
                                    $(".colors.cmf2").addClass("disable");
                                }else{
                                    $(".colors.cmf2").removeClass("disable");
                                    $(".colors.cmf3").addClass("disable");
                                }
                            }

                            $("#bezColor *").removeClass("selected");
                            $($this).addClass("selected");
                            
                            //_select_pc = $("#bezColorPreviewContainer .selected").attr("pcolor");
                            _select_pc = $("#bezColorPreviewContainer .selected").attr("cname");

                            if(_select_pc != undefined || _select_pc != "undefined") {
                                // $("#bezColor .pc"+_select_pc).addClass("selected");
                                //$("#bezColorList .pc"+_select_pc).addClass("selected");
                                $(".bespoke-color-content").find(".colors[cname="+_select_pc+"]").addClass("selected");
                            }
                        }

                        function colorPickHandler($this) {
                            var _pcolor = Number( $($this).attr("color") );
                            var _cname = $($this).attr("cname");
                            var $pannelSelectDom = $("#bezColorPreviewContainer .selected");
                            $("#bezColorList *").removeClass("selected");
                            $(".bespoke-color *").removeClass("selected");
                            $("#bezColorListMatchBox *").removeClass("selected");
                            $($this).addClass("selected");

                            // effect selector change
                            $pannelSelectDom.removeClass("gram");
                            $pannelSelectDom.removeClass("satin");
                            $pannelSelectDom.removeClass("cota");
                            if(_pcolor<7){
                                $pannelSelectDom.addClass("gram");
                            } else if(_pcolor<10 || _pcolor === 12 || _pcolor === 13 || _pcolor === 14){
                                $pannelSelectDom.addClass("satin");
                            } else{
                                $pannelSelectDom.addClass("cota");
                            }
                            $pannelSelectDom.attr("cname", _cname);
                            // $pannelSelectDom.css("background-color", PANNEL_COLORS[_pcolor]);
                            $pannelSelectDom.css("background-color", COLOR[_cname].rgb);
                            $pannelSelectDom.attr("pcolor", _pcolor);
                            if(!$pannelSelectDom.hasClass("choiced")) $pannelSelectDom.addClass("choiced"); $pannelSelectDom.parent().addClass("colored");

                            var __select1Door = $('.bez-model.odr .door1.selected .effect-cover, .bez-model.odrC .door1.selected .effect-cover, .bez-model.odrK .door1.selected .effect-cover');
                            var __selectItemName = $("#bezColorPreviewArea .selected").parent().attr("name");
                            if(!(_cname === "stFernGreen" || _cname === "stWood")){
                                __select1Door.css({
                                    'background-image':'url(//images.samsung.com/is/image/samsung/p5/sec/2020bespoke/experience/img/color_cover_odr_effect.png?$ORIGIN_PNG$&fmt=png-alpha)'
                                });
                            }
                            if(_cname === "stFernGreen" || _cname === "stWood"){
                                if((__selectItemName === "odrC") || (__selectItemName === "odr") || (__selectItemName === "odrK")){
                                    if(_cname === "stFernGreen"){
                                        __select1Door.css({
                                            'background-image':'url(//images.samsung.com/is/image/samsung/p5/sec/2020bespoke/experience/img/color_cover_odr_effect_ferngreen_v1.png)',
                                            'opacity':0.2
                                        });
                                    }
                                    if(_cname === "stWood"){
                                        __select1Door.css({
                                            'background-image':'url(//images.samsung.com/is/image/samsung/p5/sec/2020bespoke/experience/img/color_cover_odr_effect_wood_v3.png)'
                                        });
                                    }
                                }
                            }
                        }

                        function matchColorHandler(obj) {

                            var _cname = $(obj).attr("cname"),
                                _match = MATCH_COLOR[_cname],
                                _match_length = _match.length,
                                _wrap = $("#bezColorListMatchBox"),
                                _color_arr = '',
                                _html = '',
                                color_tmp = '';

                            // $('#bezColorListMatchBox').slick("unslick"); // 0303 삭제
                            _wrap.html(_html);
                            // matchSlick(); // 0303 삭제

                            if($(obj).parents("#bezColorList").length < 1) {
                                sliderBtnInit();
                            }else{
                                sliderBtnInit("prism-color");                            
                            }

                            return true;
                        }

                        function checkEnableColor(){
                            var _count = 0;
                            var _resultVal = true;
                            var _bespoke = [];

                            $("#bezColorPreviewContainer .bez-model").each(function(idx,item){
                                var __itemName = $(item).attr("item");
                                _bespoke.push(JSON.parse('{"'+__itemName+'":{}}'));

                                $($(item).children(".color-door").get().reverse()).each(function(idxs,$item){
                                    var __itemCName = $($item).attr("cname");
                                    if(!__itemCName) _resultVal = false;

                                    var __doorName = BESPOKE[__itemName].door[idxs];
                                    _bespoke[idx][__itemName][__doorName] = __itemCName;

                                    _count++;
                                });
                            });

                            if(!_resultVal) return false;

                            resultPageHandler(_bespoke);

                            return _resultVal;
                        }

                        function colorSelectCheckHandler(){}

                        function materialInfoPopupControll($tar){
                            $(".material-info-contents").css({"left":"-100%"});
                            $(".mic"+$tar).css({"left":"0%"});
                            mipIdx = $tar;

                            materialVideoLoad(mipIdx-1);
                        }

                        function materialInfoPopupArrow($isLeft){
                            if(isAnim) return;
                            isAnim = true;

                            var _next = ($isLeft)? -1 : 1;
                            var _nextIdx = mipIdx+_next;
                            if(_nextIdx < 1) _nextIdx =3;
                            else if(_nextIdx > 3) _nextIdx =1;
                            $(".mic"+_nextIdx).css("left",(100*_next)+"%");
                            TweenMax.to( $(".mic"+mipIdx) , 0.5, {left:(0-100*_next)+"%"});
                            TweenMax.to( $(".mic"+_nextIdx) , 0.5, {left:"0%", onComplete:function(){
                                mipIdx = _nextIdx;
                                isAnim = false;
                            }});
                            materialVideoLoad(_nextIdx-1);
                        }

                        function materialVideoLoad($idx){
                            var $video = $("#materialVideo")[0];
                            $video.src = APP_DATA.VIDEO_PATH+videosObj[$idx]+".mp4";
                            $video.load();
                            $video.play();
                        }

                        function disableFhSelect(type,door) {
                            var _select = type,
                                _door = door;


                            setTimeout(function(){

                                if(_select) {

                                    // 글램딥차콜
                                    $("#bezColorListOrigin2Box .color2_8").addClass("show-gldc");
                                    if(_door == "2") {
                                        // prism 360
                                        $("#bezColorList .colors").addClass("disable");
                                        $(".new-match-box .colors").addClass("disable");

                                        // // original
                                        $("#originColorArea").addClass("disable");
                                        $("#originColorArea .colors").addClass("disable");
                                        $(".original-special .colors").removeClass("disable");
                                        
                                        $(FH_ENABLE).each(function(i,e){
                                            $(".colors[cname='"+e+"']").removeClass("disable");
                                        });                                    

                                        // arrow
                                        $(".new-palette-prev, .new-palette-next, .new-match-prev, .new-match-next").addClass("disable");

                                        // free set click check
                                        console.log('좌우 동작');
//                                         if(!FreesetType && $(".bespoke-color-tab>li").eq(0).hasClass("on")) {
//                                             showPopup("privateColorInfo");
//                                             $(".bespoke-color-tab>li>a").eq(1).trigger("click");
//                                             FreesetType = false;
//                                         }

                                    }else{

                                        // prism 360
                                        $("#bezColorList .colors").removeClass("disable");
                                        $(".new-match-box .colors").removeClass("disable");

                                        $("#originColorArea").removeClass("disable");
                                        $("#bezColorListOrigin1 .colors").removeClass("disable");
                                        $("#bezColorListOrigin2 .colors").removeClass("disable");
                                        $("#bezColorListOrigin3 .colors").removeClass("disable");

                                        $(".new-palette-prev, .new-palette-next, .new-match-prev, .new-match-next").removeClass("disable");
                                    }


                                    return;
                                
                                }else{
                                    // prism 360
                                    $("#bezColorList .colors").removeClass("disable");
                                    $(".new-match-box .colors").removeClass("disable");

                                    // original
                                    $("#bezColorListOrigin2Box .color2_8").removeClass("show-gldc");                            
                                    $("#originColorArea").removeClass("disable");
                                    $("#bezColorListOrigin1 .colors").removeClass("disable");
                                    $("#bezColorListOrigin2 .colors").removeClass("disable");
                                    $("#bezColorListOrigin3 .colors").removeClass("disable");
                                    
                                    // btn
                                    // $(".new-palette-prev, .new-palette-next, .new-set-prev, .new-set-next, .new-match-prev, .new-match-next").removeClass("disable");
                                    $(".new-palette-prev, .new-palette-next, .new-match-prev, .new-match-next").removeClass("disable");

                                }
                            
                            },10);
                            
                        }

    // ================================================================================================================================
    // step1-1(survey) handlers
    // ================================================================================================================================
                        var surveyData = ""; // str arr.
                        var surveyIdx = 1;
                        var prevSurveyIdx = "";
                        var kfq3 = null;

                        function surveyInit(){
                            surveyData = "";
                            surveyIdx = 1;
                            kfq3 = null;
                            surveyPageAnimHandler(1);
                            $(".question-back, .title-wrapper").fadeIn();

                        }

                        function surveyPageAnimHandler($next){
                            isAnim = true;

                            if($next == 1){
                                $("#surveyBackBtn").attr("data-omni","sec:bespoke_studio:backto_"+userData.choiceStyle+"_model");
                                $("#surveyBackBtn").attr("ga-la","bespoke_studio:backto_"+userData.choiceStyle+"_model");

                                $("#bezQA11, #bezQA11PC").attr("data-omni","sec:bespoke_studio:survey_Q1A1_"+userData.choiceStyle);
                                $("#bezQA11, #bezQA11PC").attr("ga-la","bespoke_studio:survey_Q1A1_"+userData.choiceStyle);
                                $("#bezQA12, #bezQA12PC").attr("data-omni","sec:bespoke_studio:survey_Q1A2_"+userData.choiceStyle);
                                $("#bezQA12, #bezQA12PC").attr("ga-la","bespoke_studio:survey_Q1A2_"+userData.choiceStyle);
                                $("#bezQA13, #bezQA13PC").attr("data-omni","sec:bespoke_studio:survey_Q1A3_"+userData.choiceStyle);
                                $("#bezQA13, #bezQA13PC").attr("ga-la","bespoke_studio:survey_Q1A3_"+userData.choiceStyle);

                            } else {
                                $("#surveyBackBtn").attr("data-omni","sec:bespoke_studio:backto_"+userData.choiceStyle+"_Q"+(surveyIdx-1));
                                $("#surveyBackBtn").attr("ga-la","bespoke_studio:backto_"+userData.choiceStyle+"_Q"+(surveyIdx-1));

                                if($next == 4) {
                                    $("#bezQA41, #bezQA41PC").attr("data-omni","sec:bespoke_studio:survey_Q3A1_"+userData.choiceStyle);
                                    $("#bezQA41, #bezQA41PC").attr("ga-la","bespoke_studio:survey_Q3A1_"+userData.choiceStyle);
                                    $("#bezQA42, #bezQA42PC").attr("data-omni","sec:bespoke_studio:survey_Q3A2_"+userData.choiceStyle);
                                    $("#bezQA42, #bezQA42PC").attr("ga-la","bespoke_studio:survey_Q3A2_"+userData.choiceStyle);
                                    $("#bezQA43, #bezQA43PC").attr("data-omni","sec:bespoke_studio:survey_Q3A3_"+userData.choiceStyle);
                                    $("#bezQA43, #bezQA43PC").attr("ga-la","bespoke_studio:survey_Q3A3_"+userData.choiceStyle);
                                    $("#bezQA44, #bezQA44PC").attr("data-omni","sec:bespoke_studio:survey_Q3A4_"+userData.choiceStyle);
                                    $("#bezQA44, #bezQA44PC").attr("ga-la","bespoke_studio:survey_Q3A4_"+userData.choiceStyle);
                                }
                            }

                            $(".survey-result").removeClass("active");
                            $(".question").removeClass("active");
                            $(".q"+$next).addClass("active");

                            $(".q"+$next+" > *").css("opacity",0);
                            $(".q"+$next+" > .answerBtns").css("margin-top", 10);

                            $(".title-wrapper > .number").attr("src", APP_DATA.IMG_PATH+"survey_q"+surveyIdx+".jpg?$ORIGIN_JPG$");
                            $(".title-wrapper > .title").attr("src", APP_DATA.IMG_PATH+"survey_q"+$next+"_text.jpg?$ORIGIN_JPG$");

                            TweenMax.to( $(".q"+$next+" > .title"), .2, {opacity: 1});

                            TweenMax.to( $(".q"+$next+" > .a1"), 0.2, {opacity: 1, marginTop: 0, delay:0.1});
                            TweenMax.to( $(".q"+$next+" > .a2"), 0.2, {opacity: 1, marginTop: 0, delay:.2});
                            TweenMax.to( $(".q"+$next+" > .a3"), 0.2, {opacity: 1, marginTop: 0, delay:.3});
                            TweenMax.to( $(".q"+$next+" > .a4"), 0.2, {opacity: 1, marginTop: 0, delay:.4, onComplete:function(){
                                isAnim = false;
                            }});
                        }

                        var prevAnwser;
                        function answerClick($idx,$tar) {
                            if(isAnim) return;
                            var _data;
                            var _model = userData.choiceStyle.toUpperCase();
                            ++surveyIdx;
                            $(".survey-result-img").attr("src", "");
                            $(".survey-result-text").html("");
                            prevAnwser = $idx;
                            if($idx == 4){
                                surveyData = surveyData+String($tar);
                                _data = ( userData.choiceStyle == "kf" )? KF_SURVEY[surveyData] : FS_SURVEY[surveyData];

                                userData.selectBespork = _data.bespoke;
                                var returnImg = APP_DATA.SURVEY_PATH + _data.image+"?$ORIGIN_PNG$&fmt=png-alpha" || APP_DATA.SURVEY_PATH + "survey_dummy_result.jpg?$ORIGIN_JPG$";
                                var returnTxt = _data.hashtag;
                                surveyTrigger = $tar;

                                var resultTagData;
                                if(userData.choiceStyle != "kf") {
                                    resultTagData = surveyData[0]+"_"+surveyData[1]+"_"+surveyData[2];
                                } else {
                                    resultTagData = (kfq3)? surveyData[0]+"_"+surveyData[1]+"_"+kfq3+"_"+surveyData[2] : surveyData[0]+"_"+surveyData[1]+"_"+surveyData[2];
                                }

                                
                                $("#goSurveyResultBack").attr("data-omni","sec:bespoke_studio:backto_survey_"+userData.choiceStyle+"_"+resultTagData);
                                $("#goSurveyResultBack").attr("ga-la","bespoke_studio:backto_survey_"+userData.choiceStyle+"_"+resultTagData);
                                $("#goSurveyResultAgree").attr("data-omni","sec:bespoke_studio:goto_survey_result_"+userData.choiceStyle+"_"+resultTagData);
                                $("#goSurveyResultAgree").attr("ga-la","bespoke_studio:goto_survey_result_"+userData.choiceStyle+"_"+resultTagData);

                                //resultPageHandler()

                                surveyResultHandler(returnImg, returnTxt, getSurveyResult( _model, surveyData ));
                            } else if($idx == 3) {
                                // 저장하지 않는 정보
                                kfq3 = $tar;
                                surveyPageAnimHandler(4);
                            } else if($idx == 1) {
                                surveyData = surveyData+String($tar);
                                (userData.choiceStyle == "kf") ? surveyPageAnimHandler(2) : surveyPageAnimHandler(21);
                            } else if($idx == 21) {
                                surveyData = surveyData+String($tar);
                                surveyPageAnimHandler(4);
                            } else if($idx == 2 && $tar == 3){
                                surveyData = surveyData+String($tar);
                                surveyPageAnimHandler(3);
                            } else {
                                surveyData = surveyData+String($tar);
                                surveyPageAnimHandler(4);
                            }
                        }

                        function answerBackClick() {
                            if(isAnim) return;
                            var _prev
                            if(surveyData.length <= 0){
                                history.back();
                            }
                            --surveyIdx;
                            if(prevAnwser == 3) {
                                _prev = 3;
                                prevAnwser = null;
                            } else {
                                surveyData = surveyData.substring(0, surveyData.length-1);
                                _prev = (surveyData.length == 1 && userData.choiceStyle == "fs")? surveyIdx = 21 : surveyData.length+1;
                            }

                            surveyPageAnimHandler( _prev );
                        }

                        function surveyResultHandler($imgSrc, $txtSrc, $myBesObj) {
                            showLoading();
                            var tmpImg = new Image() ;
                            tmpImg.src = $imgSrc;
                            tmpImg.onload = function() {
                                $(".question-back, .title-wrapper").hide();
                                $(".question").removeClass("active");
                                $(".survey-result-img").attr("src", $imgSrc);
                                $(".survey-result-text").html($txtSrc);
                                $(".survey-result").addClass("active");
                                hideLoading();

                                resultPageHandler($myBesObj);
                            } ;

                        }

    // ================================================================================================================================
    // result section
    // ================================================================================================================================
                       

                        function drawResultInfo() {

                            var canvas = document.getElementById("bezResultInfoCanvas");
                            var ctx = canvas.getContext("2d");
                            var _x, _y, canvas_height = 0;
                            var paddingTop = Number(45),
                                paddingBottom = Number(35),
                                H2paddingTop = Number(30);

                            var Font = " SamsungOneKorean",
                                    FontSizeP = "18px",
                                    FontSizeH2 = "24px",
                                    FontSizeLi = "16px",
                                    HeightP = Number(45),
                                    HeightH2 = Number(35),
                                    HeightLi = Number(22);

                            var posY = 0;

                            var info = $(".bez-result-pdf-info"),
                                    h2_length = info.find(">h2").length,
                                    li_length = info.find("li").length,
                                    h2_padding_top = h2_length > 1 ? H2paddingTop : 0;
                                    canvas_height = (paddingTop + paddingBottom + h2_padding_top ) + HeightP + (HeightH2 * h2_length) + (HeightLi * li_length);

                            // global
                            DownloadImgHeight = canvas_height;

                            // canvas init
                            canvas.width = 445;
                            canvas.height = canvas_height;
                            
                            _x = canvas.width / 2;
                            _y = canvas.height / 2;

                            // draw
                            ctx.fillStyle="#fff";
                            ctx.fillRect(0,0,456,canvas_height);
                            ctx.fill();



                            // p
                            var p_value = info.find("p").text();
                            ctx.font = FontSizeP+" "+Font;
                            ctx.textAlign = "center";
                            ctx.fillStyle = "#000";
                            ctx.fillText(p_value,_x,paddingTop);

                            posY += (paddingTop + HeightP);

                            // h2, li
                            info.find("h2").each(function(i,e){

                                if(i > 0) {
                                  posY += H2paddingTop;
                                }

                                var h2_value = info.find("h2").eq(i).text();
                                ctx.font = "bold "+FontSizeH2+" "+Font;
                                ctx.textAlign = "center";
                                ctx.fillStyle = "#000";
                                ctx.fillText(h2_value,_x,posY);

                                posY += HeightH2;

                                info.find("ul").eq(i).each(function(i,e){

                                    $(e).find("li").each(function(i,e) {

                                        var li_value = $(e).text();
                                            ctx.font = FontSizeLi+" "+Font;
                                            ctx.textAlign = "center";
                                            ctx.fillStyle = "#000";
                                            ctx.fillText(li_value,_x,posY);

                                            posY += HeightLi;

                                    });
                                });
                            });
                        }

                        function resultPageHandler2($myBespoke){
                            if ( (typeof $myBespoke) != 'object' ) return;
                            var _liter = 0;
                            myBespoke = $myBespoke;
                            var _cutLength = 0;
                            showLoading();
                            showResult();

                            userData.choiceStyle = Object.keys(myBespoke[0])[0].indexOf('fs') != -1 ? "fs" : "kf";
                            (userData.choiceStyle == "kf")? $(".result-item-info h2").html("BESPOKE 키친핏") : $(".result-item-info h2").html("BESPOKE 프리스탠딩");
                            $(".result-item-info p").html("");
                            for(var i=0; i<myBespoke.length; i++){
                                var __items = Object.keys(myBespoke[i])[0];
                                var __name = BESPOKE[__items].name;
                                _liter = _liter + Number(BESPOKE[__items].capacity);
                                if( myBespoke.length-1 !== i ) __name = __name+"+";
                                _cutLength = _cutLength + __name.length;
                                setTimeout( function(){
                                    var __code = getEventCodeText() || "";
                                    __code = (__code != "") ? "#"+__code : "";
                                    $(".code").html(__code);
                                    $(".copy-txt-area").html("#MYBESPOKECODE #나만의비스포크 #모두에겐자신만의비스포크가있다 #메탈쿨링 #초정온맞춤보관 #삼성비스포크 #삼성김치플러스비스포크 #키친테리어 #가전을나답게 #삼성전자이벤트 "+__code);
                                }, 2000 );
                                $(".result-item-info p").append(__name);
                                if(_cutLength > 12) {
                                    $(".result-item-info p").append("<br class='pc'/>");
                                    _cutLength = 0;
                                }
                            }
                            $(".result-item-info h2").append("<a>총 용량 "+_liter+"ℓ</a>");

                            // <div class="result-item-info"><h2>BESPOKE 키친핏<a>총 용량 918ℓ</a></h2><p>4도어+<br class="pc"/>김치플러스 3도어</p></div>
                        }

    // Select Interoir
                        function resultPreviewHandler($tid){
                            $(".preview").removeClass("select");
                            $("#"+$tid).addClass("select");

                            drawBespoke( $tid );
                            putHistory();
                        }

                        var isCallApi = false;
                        function buyNow(data) {
                            if(isCallApi){alert("처리중입니다."); return;}

                            isCallApi = true;

                            var data = data.replace(/productCode=/g, '');
                            var data = data.replace(/:::1/g, '');
                            //console.log(data);
                            var data = data.replace(/&/g, '^');

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
                                            , content : "상품을 준비중입니다."
                                            , callBack : ""
                                            , btnText : "확인"
                                        };
                                        commonAlert(alertData);
                                        openLayer('commonAlert');
                                        return false;
                                    } else {
                                        ids =  result.goodsIdList.toString();
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
                                var bspkPnlYn = "N";
                                var locType = [];
                                if($('#panelTypeCd').val() != "AS"){
                                	bspkPnlYn = "Y";
                                	locType =  locTypeList.filter(function(item) {
                                     	  return item !== null && item !== undefined && item !== '';
                                       }); 
                                }
                                
                            	$.ajax({
                                    url: "/sec/xhr/order/insertCart",
                                    dataType: "json",
                                    type: "POST",
                                    data: {
                                        nowBuyYn : 'N', /*20201125 Y를 N으로 수정*/
                                        bspkGrpKeys : data,
                                        goodsIds : ids,
                                        bspkPnlYn : bspkPnlYn,
                                        locType : locType.toString()
                                    },
                                    success : function(res) {
                                        var w;

                                        if(typeof(res.exCode) !== 'undefined') {
                                            var alertData ={
                                                title : ""
                                                , content : res.exMsg
                                                , callBack : ""
                                                , btnText : "확인"
                                            };
                                            commonAlert(alertData);
                                            openLayer('commonAlert');
                                            return false;
                                        } else {
                                            isCallApi = false;

                                            /** 20201125 주석처리
                                             var form = document.createElement('form');
                                             form.setAttribute('action', "/sec/order/");
                                             form.setAttribute('target', "_self");
                                             form.setAttribute('method', 'post');
                                             document.body.appendChild(form);
                                             form.submit();
                                             **/

                                            NetFunnel_Action({action_id :'b2c_cart_view'},function(ev, ret){location.href='/sec/cart/';}); /*20201125 장바구니로 이동하도록 수정*/
                                        }
                                    },
                                    error: function( req, stat, err ) {
                                        alert("구매하기 요청에 대한 결과값이 올바르지 않아 구매하기 페이지로 넘어가지 못했습니다.");
                                    }
                                });
                            }

                        }

                        function productBuyPopupMakeHandler() {
                            var _dom ="";
                            var _curTarget = "";
                            var _curTargetW = "";
                            var _tag_code = 'data-omni-type="microsite" data-omni="sec:bespoke_studio:2021CTAclick_productcode" ga-ca="microsite" ga-ac="feature" ga-la="bespoke_studio:2021CTAclick_productcode"';

                            $(".product-info, .product-buy-btn").off("click");
                            for(var i=0; i<myBespoke.length; i++){
                                var __itemId = Object.keys(myBespoke[i])[0];
                                var __itemName = BESPOKE[__itemId].name;
                                _curTarget = ( __itemId.indexOf("kf") != -1 ) ? "키친핏" : "프리스탠딩";
                                _curTargetW = ( __itemId.indexOf("kf") != -1 ) ? "kf" : "fs";

                                var _data_omni = "";
                                var _product_code = "";
                                for(var _id in myBespoke[i]) {
                                    _data_omni = "<;" + BESPOKE[_id]['name'] + "><;1000000>|<" + BESPOKE[_id]['code'];
                                    _product_code += "productCode=" + BESPOKE[_id]['code'] + ":::1";
                                    for (var _door in myBespoke[i][_id]) {
                                        _data_omni += "_" + COLOR[(myBespoke[i][_id][_door])][_id][_door];
                                        _product_code += "&productCode=" +  COLOR[(myBespoke[i][_id][_door])][_id][_door] + ":::1";
                                    }
                                    _data_omni += ">";
                                    _product_code += "&";
                                }
                                _product_code = _product_code.substring(0, _product_code.length-1);

                                var _showInfoTagging = 'data-omni-type="microsite" data-omni="sec:bespoke_studio:CTAclick_procutinfo" ga-ca="microsite" ga-ac="feature" ga-la="bespoke_studio:CTAclick_procutinfo"';
                                var _buyTagging = 'data-omni-type="microsite_cartandshop" data-omni="'+_data_omni+'"';
                                var __buyBtn = '<a class="product-buy-btn" pcode="'+_product_code+'" '+_buyTagging+' >구매하기</a>';

                                // if( __itemId == 'kf3dr' ){
                                // 	__buyBtn = '<a class="product-more-btn"'+_showInfoTagging+' href="//www.samsung.com/sec/refrigerators/bottom-mount-freezer-rb30r3503ap/" target="_blank">제품 정보 보기</a>';
                                // }

                                _dom += '<div class="products"><div class="product-img"><div class="preview-product">'+previewMake(BESPOKE[__itemId],myBespoke[i][__itemId])+'</div></div><div class="product-info" '+_tag_code+' item-idx="'+i+'"><h2>'+__itemName+'</h2><p>모델명 보기 ></p></div>'+__buyBtn+'</div>';
                            }
                            _dom += '<p class="buy-title">바로 구매하실 BESPOKE '+_curTarget+' 냉장고를 선택해 주세요!</p>';

                            $("#buyProduct .wrapper").html(_dom);
                            showPopup("buyProduct");
                            $("#buyProduct").removeClass("kfp");
                            $("#buyProduct").removeClass("fsp");
                            $("#buyProduct").addClass(_curTargetW+"p");
                            $(".product-info").on("click", function(){
                                bezGetCodeHandelr( Number( $(this).attr("item-idx") ) );
                            });
                            $(".product-buy-btn").on("click", function(){
                                _pdata = $(this).attr("pcode");
                                buyNow(_pdata);
                            });
                        }

                        function bezGetCodeHandelr($idx){
                            var _style = (userData.choiceStyle == "kf") ? "BESPOKE 키친핏" : "BESPOKE 프리스탠딩";
                            var _itemId = Object.keys(myBespoke[$idx])[0];
                            var _itemName = BESPOKE[_itemId].name;
                            var _itemCode = BESPOKE[_itemId].code;
                            var _productCopy = _style+" "+_itemName+" ("+_itemCode+")";

                            if((userData.choiceStyle === "kf")){
                                $('#bezGetCode').addClass('kitf');
                            }else if((userData.choiceStyle === "fs")){
                                $('#bezGetCode').addClass('frees');
                            }

                            $("#bezGetCodeContainer > p").html(_style);
                            $("#bezGetCodeContainer > h2").html(_itemName);
                            $("#bezGetCodeContainer > h3").html("("+_itemCode+")");
                            var _liDom = "";

                            for(var i =0; i < Object.keys(myBespoke[$idx][_itemId]).length; i++){
                                var __key2 = Object.keys(myBespoke[$idx][_itemId])[i];
                                var __cname = myBespoke[$idx][_itemId][__key2];
                                var __doorName;
                                switch (__key2) {
                                    case "TL" : __doorName = "좌상칸"; break;
                                    case "TR" : __doorName = "우상칸"; break;
                                    case "BL" : __doorName = "좌하칸"; break;
                                    case "BR" : __doorName = "우하칸"; break;
                                    case "T" : __doorName = "상칸"; break;
                                    case "M" : __doorName = "중칸"; break;
                                    case "B" : __doorName = "하칸"; break;
                                    case "ONE" : __doorName = ""; break;
                                }
                                _liDom = _liDom + "<li>- "+__doorName+" "+COLOR[__cname].name.replace("<br />", " ")+" ("+COLOR[__cname][_itemId][__key2]+")</li>";
                                _productCopy += " -"+COLOR[__cname].name.replace("<br />", " ")+" ("+COLOR[__cname][_itemId][__key2]+")"
                            }
                            $("#codeCopy").val(_productCopy);
                            $("#bezGetCodeContainer > ul").html(_liDom);

                            showPopup("bezGetCode");
                        }

                        function showHistoryResult($idx){
                            myBespoke = userData.cookie[$idx];
                            resultPageHandler(myBespoke);
                        }

                        function deleteHistoryClickHandler($idx){
                            userData.cookie = removeHistory(Number($idx));
                            // putHistory();
                            hideLoading(true);	// 2020.04.21 added by DOES-JIHUN to remove
                        }

                        function previewMake(obj,obj2){

                            var _cname;
                            switch (obj.code) {
                                case "RF61T91R2AP" : _cname = "fdr"; break;
                                case "RQ33T7451AP" : _cname = "tdrKP"; break;
                                case "RB30R3503AP" : _cname = "tdr"; break;
                                case "RB33T3662AP" : _cname = "sdr"; break;
                                case "RR39T7685AP" : _cname = "odr"; break;
                                case "RZ32T7655AP" : _cname = "odrC"; break;
                                case "RQ32T7635AP" : _cname = "odrK"; break;
                                case "RZ24T5640AP" : _cname = "odrV"; break;

                                case "RF85T98A2AP" : _cname = "fdr"; break;
                                case "RF85T97E2APN" : _cname = "fdrF"; break;
                                case "RQ58T9491AP" : _cname = "fdrS"; break;
                                case "RQ48T9421AP" : _cname = "fdrS"; break;

                                default :  _cname = "fdr"; console.log("모델 코드 없음. 내용 확인."+obj.code); break;
                            }

                            var _dom = "<div class='bez-model "+_cname+"'>";

                            for(var i =1; i <= obj.door.length; i++){
                                var __color = COLOR[obj2[obj.door[i-1]]].rgb;

                                _dom += "<div class='door"+i+" color-door' style='background-color:"+__color+"'><div class='effect-cover'></div></div>";
                            }
                            if(_cname == "fdrF") _dom += "<div class='bez-model-screen'></div>"
                            _dom += "<div class='item-cover'></div></div>";

                            return _dom;


                        }

    // ================================================================================================================================
    // Sortable init
    // ================================================================================================================================
                        userData.cookie = getHistory();

                        if ( DEVICE_PC_FILTER.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
                            userData.device = "mo";
                        } else {
                            userData.device = "pc";
                        }

                        //jyj
                        //if( userData.device == "pc") {

                        // pc event.
                        $("#bezMakeModelList .handle, #kfMakeBoxPC .handle").on("click", function(e) {
                            makeItemPcClickHandler(this);
                        });

                        function chipColorEvent(obj, type) {
                            $(obj).find(".colors").off().on("click", function() {
                                var __selectColor = $(this).attr("cname");
                                var __selectItemName = $("#bezColorPreviewArea .selected").parent().attr("name");
                                var __isSecDoor = $("#bezColorPreviewArea .selected").hasClass("door2");

                                if(!__selectItemName) return;

                                colorPickHandler(this);

                                if(type) {
                                    // matchcolor 있으면 다음 도어 선택
                                    clickMatchHandler(this)
                                }
                            });
                        }
                        chipColorEvent("[id^='bezColorPalette']", true);
                        chipColorEvent("[id^='bezColorListOrigin']",true);
                        //}

                        function clickMatchHandler(obj) {

                            var _next = $("#bezColorPreviewContainer .color-door.selected"),
                            _next_door = _next.prev();
                            _next_length = _next_door.length;     
                            
                            
                            if(_next_length > 0) {
                                doorColorHandler(_next_door);
                            }else{
                                if(_next.parent().next().length >0) {
                                    doorColorHandler(_next.parent().next().find(".door1"));
                                };
                            }                        

                            try{
                                if(matchColorHandler(obj)) {
                                    if($("#bezColorPreviewContainer").find(".color-door").length>1) {
                                        if(!$(".bespoke-color-content").hasClass("checked")) {
                                            showMatchColor();
                                        }
                                    }
                                }   
                            }catch(e){}
                        }

                        function freeSetEventHandler(obj,freeset_type){

                            var $this = $(obj);

                            $this.off().on("click",".colors",function() {

                                var $this = $(this),
                                    $color_set = $this.data("colorSet"),
                                    $color_set_s = '',
                                    $color_set_arr = [];

                                // freeset Click check
                                FreesetType = freeset_type ? true : false;

                                console.log(FreesetType);
                                // 선택해제/표시
                                $("#bezColor").find(".is-choice").removeClass("is-choice");
                                $this.addClass("is-choice");

                                // 칼라셋 door 갯수보다 많은 배열 생성
                                for(var i=0; i<3; i++) {
                                    $color_set_s += $color_set+'|';
                                };
                                $color_set_arr = $color_set_s.split('|');

                               var j = 0;
                               $("#bezColorPreviewContainer").find(".bez-model").each(function(i,e){

                                    var rf = $(e),
                                        rf_fh = rf.attr("item") == 'fs4drFH' ? true : false, // family hub
                                        door4 = rf.find(".color-door").length == 4 && (rf.attr("item") != 'fs4dr584' && rf.attr("item") != 'fs4dr486') ? true : false;

                                    rf.find(".color-door").each(function(i,e){

                                        var idx = 0,
                                            door = null;

                                        if(!door4) {
                                            idx = i+1;
                                        }else{
                                            switch(i) {
                                                case 0 : idx = 1; break;
                                                case 1 : idx = 3; break;
                                                case 2 : idx = 2; break;
                                                case 3 : idx = 4; break;
                                            }

                                        }
                                        door = $(e).parent().find(".color-door[data-door-idx="+idx+"]");                                    

                                        // door select
                                        doorColorHandler(door);

                                        // color select
                                        if(rf_fh && idx == 2) {
                                            // jeju freeset - family hub 2 door - 글램화이트
                                            $(".bespoke-color-content .colors[cname='n011']").trigger("click");
                                        }else{
                                            $(".bespoke-color-content .colors[cname='"+$color_set_arr[j]+"']").trigger("click");
                                        }

                                        j++;
                                    });

                               });

                               setTimeout(function() {
                                FreesetType = false;
                               },100);

                            });
                        }

                        var safariX, safariY;

                        function historyAppendHeight() {
//    		hideLoading();
                            if(userData.device == "mo") $(".bez-mobile").css("height",(166.666667+( $("#bezResult .history").height()-$("#openHistory").outerHeight() ) / $("#bezResult .history").width()*100)+"vw");
                        }
    // ================================================================================================================================
    // libs
    // ================================================================================================================================


    // ================================================================================================================================
    // inits(clicks event, etc) handlers
    // ================================================================================================================================
                        $(".bez-popup-close").on("click", bezHidePopup);
                        $(".bez-subpopup-close").on("click", subHidePopup);

                        $(".answerBtns").on("click", function(e){
                            var _answer = $(this).attr("answer").split("");
                            var _q = (_answer[0] == 5) ? 21 : Number(_answer[0]);
                            var _a = Number(_answer[1]);
                            answerClick(_q,_a);
                        });

                        $('#bezModelAdd').on('click touchend', addSelectItem);
                        $(".bez-touch").on('click touchend', bezTouchEnd);
                        $('.bez-btns').on('click', btnsClickHandler);
                        // setTimeout(function(){ $(window).scrollTop($(".bez-header").offset().top); }, 1000); // 0307 del



                        function bezTouchEnd(e) {

                            if(isAnim) return ;
                            isAnim = true;
                            btnsHandler(this.id);
                            setTimeout(function(){ isAnim = false; }, 500);
                            return false;
                        }

                        function showMatchColor() {
                            $('.new-match-wrap').removeClass('js-this-show');
                            $('.new-match-box').addClass('js-this-show');
                        }

                        function showFreeSetColor() {
                            $('.new-match-wrap').removeClass('js-this-show');
                            $('.new-set-box').addClass('js-this-show');
                        }

                    })(window.jQuery)
                });
                                    
    //$(function(){
    	//컬러 탭메뉴 클릭 및 색상그리기
    	$('.new-color-tab a').on('click', function(){
    		var wrap = $(this).parent('li'),
    			target = wrap.attr('data-target');
    		
    		$('.bez-color-area > .palettes').removeClass('new-js-tab-show');
    		$('#' + target).addClass('new-js-tab-show');
    		
    		$('.new-color-icon').removeClass('new-js-tab-selected');
    		$(this).find('.new-color-icon').addClass('new-js-tab-selected');

    		sliderBtnInit("prism-tab-color");
    		
    		return false;
    	});
    	
    	// button
    	function bespokeBtn(options) {
    		var settings;
    		var wrap,container,slide,nextBtn,prevBtn,moveEnd;
    		var color_move_block,color_last,color_move_per_block,containerWidth,slideWidth,move,move_check;
    		var color_obj,color_obj_width,color_obj_length,color_obj_total_width;

    	
    		if(typeof options === "string") {
    			init();
    		}else{
    			settings= $.extend({
    				wrap : null,
    				nextBtn: null,
    				prevBtn: null,
    				moveEnd : false
    			}, options );

    			
    			init();	

    			// next btn
    			wrap.off(".btn-next").on("click.btn-next",nextBtn,function(){

    				var $this = $(this);

    				if($this.hasClass("disable")) {
    					return false;
    				}

    				if(moveEnd) {
    					// prev
    					if(move_check % 2 == 1) {
    						slideMove(0);
    						btnRotate.call($this,false);

    					// next
    					}else{

    						move = containerWidth - slideWidth;

    						slideMove(move);
    						btnRotate.call($this,true);
    					}
    					move_check++;

    				}else{
    			
    					color_move_per_block++;
    					move = -1 * (containerWidth * color_move_per_block);
    					slideMove(move);

    					if(color_move_per_block > 0) {
    						btnPrevShow();
    						btnRotate.call($this,false);

    						if(color_move_per_block == color_last) {
    							btnPrevHide();
    							btnRotate.call($this,true);
    							color_move_per_block = -1;
    							//color_move_per_block = color_move_per_block - 2;
    						}
    					}else if(color_move_per_block == 0) {
    						btnRotate.call($this,false);
    					}
    				

    				}
    			});

    			wrap.off(".btn-prev").on("click.btn-prev",prevBtn,function(){
    				var $this = $(this);
    				if($this.hasClass("disable")) {
    					return false;
    				}				
    				containerWidth = container.width();
    				if(!moveEnd) {
    					color_move_per_block--;
    					move = -1 * (containerWidth * color_move_per_block);
    					slideMove(move);
    					if(color_move_per_block <= 0) {
    						btnPrevHide();
    					}

    				}
    			});
    		}		

    		function init() {
    			wrap = settings.wrap;
    			container = wrap.find(".bez-color-area");
    			slide = wrap.find(".palettes");
    			nextBtn = settings.nextBtn;
    			prevBtn = settings.prevBtn;
    			moveEnd = settings.moveEnd;
    			
    			color_move_block = 1;
    			color_last = 0;
    			color_move_per_block = 0;
    			containerWidth = container.width();
    			slideWidth = 0;
    			move = 0;
    			move_check = 0;

    			if(moveEnd) {
    				slideWidth = slide.eq(0).outerWidth();
    			}else{
    				color_obj = slide.eq(0).find(".colors");
    				color_obj_width = color_obj.eq(0).outerWidth(true);
    				color_obj_length = color_obj.length;
    				color_obj_total_width = color_obj_width * color_obj_length;
    	
    				color_move_block = Math.ceil(color_obj_total_width / containerWidth);
    				color_last = color_move_block-1;
    				
    				if(containerWidth >= color_obj_total_width) {
    					btnNextHide();
    				}else{
    					btnNextShow();
    				}				
    			}

    			slide.css({
    				'transition' : 'none',
    				'transform' : 'translateX(0)'
    			});
    			btnPrevHide();

    			$(nextBtn).removeClass('modi-arr');
    		}
    		
    		function slideMove(move){
    			slide.filter(":visible").css({
    				'transition' : 'transform 0.5s',
    				'transform' : 'translateX(' + move + 'px)'
    			});
    		}

    		function btnRotate(type){
    			if(type) {
    				// 0311 arr
//    				this.css({
//    					'transition' : 'transform 0.3s',
//    					'transform' : 'rotate(180deg)'
//    				});
    				this.addClass('modi-arr');
    			}else{
    				// 0311 arr
//    				this.css({
//    					'transition' : 'transform 0.3s',
//    					'transform' : 'rotate(0deg)'
//    				});				
    				this.removeClass('modi-arr');
    			}
    		}
    		
    		function btnPrevShow() {
    			$(prevBtn).show();
    		}

    		function btnPrevHide() {
    			$(prevBtn).hide();
    		}

    		function btnNextShow() {
    			$(nextBtn).show();
    		}

    		function btnNextHide() {
    			$(nextBtn).hide();
    		}

    		return {
    			init : init
    		}
    	};

    	var colorChipBtn = bespokeBtn({
    		wrap : $(".new-palette-wrap"),
    		nextBtn : ".new-palette-next",
    		prevBtn : ".new-palette-prev",
    		moveEnd : true
    	});

    	var freesetBtn = bespokeBtn({
    		wrap : $(".new-set-box .freeset-all .new-set-inner"),
    		nextBtn : ".new-set-next",
    		prevBtn : ".new-set-prev"
    	});

    	var matchBtn = bespokeBtn({
    		wrap : $(".new-match-box .new-match-inner .color-border-box").eq(1),
    		nextBtn : ".new-match-next",
    		prevBtn : ".new-match-prev"
    	});	


    	function sliderBtnInit(type) {
    		if(!type || type == "selectColor" || typeof type == "object" ) {		
    			colorChipBtn.init();
    			freesetBtn.init();
    			matchBtn.init();

    			// prism 360
    			if(type == "selectColor") {
    				$(".new-color-tab>li:nth-child(1)>a").focus();
    				$(".new-color-tab>li:nth-child(1)>a").trigger("click");
    				$("#bezColorList .palettes").removeClass("new-js-tab-show");
    				$("#bezColorList #bezColorPalette1").addClass("new-js-tab-show");		
    			}		

    		}else if(type == "prism-color") {		
    			matchBtn.init();
    		}else if(type == "prism-tab-color") {
    			colorChipBtn.init();
    			matchBtn.init();
    		}
    	}

    	 $(window).resize(sliderBtnInit);