(function(win,doc,callback){callback=callback||function(){};function detach(){if(doc.addEventListener)doc.removeEventListener("DOMContentLoaded",completed);else doc.detachEvent("onreadystatechange",completed)}function completed(){if(doc.addEventListener||event.type==="load"||doc.readyState==="complete"){detach();callback(window,window.jQuery)}}function init(){if(doc.addEventListener)doc.addEventListener("DOMContentLoaded",completed);else doc.attachEvent("onreadystatechange",completed)}init()})(window,
document,function(win,$){!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){function e(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=arguments[2],r=void 0,o=void 0,u=void 0,l=void 0,f=void 0,d=function(){u=this;for(var d=arguments.length,a=Array(d),s=0;s<d;s++)a[s]=arguments[s];o=a,l=Date.now();var c=t&&!r;return r||(r=setTimeout(n,i)),c&&(f=e.apply(u,o),u=null,o=null),f};function n(){var d=
Date.now()-l;d<i&&d>=0?r=setTimeout(n,i-d):(r=null,t||(f=e.apply(u,o),u=null,o=null))}return d.clear=function(){r&&(clearTimeout(r),r=null)},d.flush=function(){r&&(f=e.apply(u,o),u=null,o=null,clearTimeout(r),r=null)},d}var n=window.jQuery;if(!n)throw new Error("resizeend require jQuery");n.event.special.resizeend={setup:function(){var i=n(this);i.on("resize.resizeend",e.call(null,function(e){e.type="resizeend",i.trigger("resizeend",e)},250))},teardown:function(){n(this).off("resize.resizeend")}}});
var bluecare_slick=function(){$(".this__list--bluecare-ty1").slick({infinite:false,speed:300,arrows:true,slidesToShow:4,slidesToScroll:1,autoplay:false,accessibility:true,initialSlide:0,responsive:[{breakpoint:769,settings:{centerMode:true,slidesToShow:1,slidesToScroll:1}}]})};var mbs_bluecare__tabToggle=function(){$(".tab_content").hide();$(".mbs-layout-tab--bluecare li:first").addClass("on").show();$(".tab_content:first").show();$(".mbs-layout-tab--bluecare li a").click(function(){$(".mbs-layout-tab--bluecare li").removeClass("on");
$(this).parent().addClass("on");$(".tab_content").hide();var activeTab=$(this).parent().find("a").attr("href");$(activeTab).fadeIn();return false})};var mbs_grade__moveButton=function(){var btnNomal=$(".this__list--level .btn01");var btnPrestige=$(".this__list--level .btn02");var btnRoyalblue=$(".this__list--level .btn03");btnNomal.click(function(){var scrollPosMake=$("#normal").offset().top;var body=$("html, body");body.stop().animate({scrollTop:scrollPosMake-$(".g-nav").outerHeight()-50},500,"swing",
function(){$("#normal").trigger("focus")})});btnPrestige.click(function(){var scrollPosMake=$("#prestige").offset().top;var body=$("html, body");body.stop().animate({scrollTop:scrollPosMake-$(".g-nav").outerHeight()-50},500,"swing",function(){$("#prestige").trigger("focus")})});btnRoyalblue.click(function(){var scrollPosMake=$("#royalblue").offset().top;var body=$("html, body");body.stop().animate({scrollTop:scrollPosMake-$(".g-nav").outerHeight()-50},500,"swing",function(){$("#royalblue").trigger("focus")})})};
$(document).ready(function(){mbs_tabNav__fixed();nav_slick();bluecare_slick();mbs_bluecare__tabToggle();mbs_grade__moveButton()});$(".this__list--bluecare-ty1 li a").click(function(){var scrollPosMake=$(".mbs-layout__header.this__header--bluecare").offset().top;var body=$("html, body");body.stop().animate({scrollTop:scrollPosMake-50},500,"swing",function(){$(".mbs-layout__header.this__header--bluecare").trigger("focus")})})});
