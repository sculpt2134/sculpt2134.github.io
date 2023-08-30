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
//                                     if(!FreesetType && $(".bespoke-color-tab>li").eq(0).hasClass("on")) {
//                                         showPopup("privateColorInfo");
//                                         $(".bespoke-color-tab>li>a").eq(1).trigger("click");
//                                         FreesetType = false;
//                                     }

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

                    var isCallApi = false;
                    function buyNow(data) {
                        if(isCallApi){alert("처리중입니다."); return;}

                        isCallApi = true;

                        var data = data.replace(/productCode=/g, '');
                        var data = data.replace(/:::1/g, '');
                        //console.log(data);
                        var data = data.replace(/&/g, '^');

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
//		hideLoading();
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
//				this.css({
//					'transition' : 'transform 0.3s',
//					'transform' : 'rotate(180deg)'
//				});
				this.addClass('modi-arr');
			}else{
				// 0311 arr
//				this.css({
//					'transition' : 'transform 0.3s',
//					'transform' : 'rotate(0deg)'
//				});				
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
//});
