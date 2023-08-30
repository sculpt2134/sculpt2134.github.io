$.datepicker.setDefaults({
    dateFormat: 'yymmdd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
	yearSuffix: '년',
	dateFormat: "yy-mm-dd"
});
function calendar_picker(){//달력
    var currentDate = new Date();  
    $(".inp-calendar").datepicker({
        changeMonth: true,
        changeYear: true,
        //showOn: "button",
        //buttonText: "날짜조회"
    });
};

/* Skip */
function skip_navigator(){
    $("#skip-content").children("a").focus(function(e){
        e.preventDefault();
        $("#skip-content").children("a").removeClass("on");
        $(this).addClass("on");
    });
    $("#skip-content").focusout(function(e){
        e.preventDefault();
        $("#skip-content").children("a").removeClass("on");
    });
}

$(function(){
    $(window).resize(function(){
        // 로그인 박스 높이값에 따른 포지션 변경
        var $loginFront = $(".login-front");
        if($loginFront.length > 0 && !$loginFront.hasClass("subpage")){
            var contHeight = $loginFront.find(".wrap-login-content").outerHeight();
            var winHeight = $(window).innerHeight();
            if(contHeight >= winHeight){
                $loginFront.css("position", "relative");
            } else {
                $loginFront.css("position", "fixed");
            }
        } 
        var winw = $(window).width();
        if(winw > 800){
            $(".inp-calendar").attr("type", "text");
        } else {
            $(".inp-calendar").attr("type", "date");
        }
    }).resize();
});

// Toggle checkbox
// 0625 script 수정
function togglechange(e){
    var $e = $(e);
    if($e.length == 0){
        return false;
    }
    // 200728 수정
    $e.find('input[type="checkbox"]').on('change',function(){
        if ($(this).is(':checked')) {
            $(this).siblings(".labeltxt.off").removeAttr("aria-hidden");
            $(this).siblings(".labeltxt.on").attr("aria-hidden", "true");
        } else {
            $(this).siblings(".labeltxt.on").removeAttr("aria-hidden");
            $(this).siblings(".labeltxt.off").attr("aria-hidden", "true");
        }
    });
}

// input spinner
function spinnerchange(e){
    var $e = $(e),
        amountValue;
    if($e.length == 0){
        return false;
    }
    
    $e.each(function(){
        $(this).find(".count").click(function(e){
            e.preventDefault();
            var count  = $(this).siblings(".number").val();
            if($(this).hasClass("count-miner")){
                if(parseInt($(this).siblings(".number").val()) > 1) {
                    count--;
                    $(this).siblings(".number").val(count)
                    $(this).parent().attr("data-count", $(this).siblings(".number").val());
                }
            } else {
                if(parseInt($(this).siblings(".number").val()) < 99) {
                    count++;
                    $(this).siblings(".number").val(count)
                    $(this).parent().attr("data-count", $(this).siblings(".number").val());
                }
            }
        });
    });
}

// bookmark Btn
function bookmarkBtn(e){
    var $e = $(e);
    if($e.length == 0){
        return false;
    }
    
    $e.each(function(){
        $(this).click(function(e){
            e.preventDefault();
            if($(this).hasClass("on")){
                $(this).removeClass("on");
                $('.bookmarkOff').show();
                $('.bookmarkOn').hide();
                setTimeout((function(){
                    $('.bookmarkOff').fadeOut(300);
                }), 5000);
            } else {
                $(this).addClass("on");
                $('.bookmarkOn').show();
                $('.bookmarkOff').hide();
                setTimeout((function(){
                    $('.bookmarkOn').fadeOut(300);
                }), 5000);
            }
        });
    });

    $(document).click(function (e){
        if( $e.has(e.target).length === 0){
          $('.bookmarkOn').fadeOut(300);
          $('.bookmarkOff').fadeOut(300);
        }
    });
}
// Toggle checkbox - 간편로그인
// function togglechange_simplelogin(e){
//     var $e = $(e);
//     if($e.length == 0){
//         return false;
//     }
//     $e.find('input[type="checkbox"]').on('change',function(){
//         var chk = $(this).prop('checked');
//         if(chk==true){
//             $(this).parent().addClass('toggle-checked');
//             $(this).attr('checked' , true);
//             $(this).parent().find('.labeltxt').text('해제하기');
//         }else{
//             $(this).parent().removeClass('toggle-checked');
//             $(this).attr('checked' , false);
//             $(this).parent().find('.labeltxt').text('연결하기');
//         }
//     });
// }

// tooltip left top
function tooltipLeftTop(e){
    var $e = $(e);
    if($e.length == 0){
        return false;
    }

    $e.each(function(){
        $(this).click(function() {
            var top = $(this).position().top;
            var left = $(this).position().left;

            $(this).next().addClass('show').css({left: left - 40 , top: top + 30});
            $(this).next().attr('tabindex', '0').focus();
        });
        $(this).next().find('.tolltip-close').click(function() {
            $(this).parent('.tooltip-layer').removeClass('show');
            $(this).parent('.tooltip-layer').prev('.btn-tooltop02').focus();
        });
    });
}
// tooltip center top
function tooltipCenterTop(e,t,w,b){
    e = $(e);
    t = $("."+t);
    w = w;
    b = b;
    var widths = w;
    $(window).resize(function(){
        var winw = $(window).width();
        var winh = $(window).height();
        if(winw > 800){
            var left;
            var leftover = e.offset().left - widths/2 - e.innerWidth()/2;
            var rightover = e.offset().left + widths;            
            var top = e.offset().top + e.height();

            if(leftover < 24){ // 팝업이 왼쪽 최소 여백 24px를 이하로 넘어갈 때
                left = widths/2 + 24;
            } else if(rightover > winw){ // 팝업이 오른쪽 화면을 넘어갈 때
                left = winw - widths/2 - 24;
            } else {
                left = e.offset().left + e.innerWidth()/2;
            }
            t.css({
                maxWidth : widths+"px",
                left : left,
                right: "auto",
                top : top+17,
                transform : 'translateX(-50%)'
            });
        } else {
            var top = e.offset().top + e.height();
            var bottomOver = e.offset().bottom - winh;
            if(b == 'fixed'){
                t.addClass('fixed');
            } else {
                t.removeClass('fixed');
            }
            t.css({
                maxWidth : 100+"%",
                left : 12+"px",
                right : 12+"px",
                top : top+17,
                transform : 'none'
            });
        }
    }).resize();
    t.fadeIn(200);
    t.find(".btn-tooltip-close").focus();
    t.find(".btn-tooltip-close").on("click",function(){
        $(this).parent().fadeOut(200);
        e.focus();
    });
}

// slide Toggle
function slideToggle(e){
    var $e = $(e);
    if($e.length == 0){
        return false;
    }
    $e.click(function(){
        $(this).parents('.droptoggle').find(".dropList").slideUp('fast');
        $(this).parents('.droptoggle').find(".dropButton").removeClass('open');
        if(!$(this).next().is(":visible")){
            $(this).next().slideDown('fast');       
            $(this).addClass('open'); 
        }
    });//toggle
}


// 푸터 사이트맵 리스트
var footerDropApp = {
    mobileFunc : function(){  // mobile
        var $ftlist = $(".sitemap-links");
        var $ftlink = $ftlist.find(">ul>li>ul");

        $ftlist.find("li").removeClass("active");
        $ftlink.hide();

        $(document).on("click.footevent",".sitemap-links h3", function(e){
            e.stopImmediatePropagation();
            if($(this).parent().hasClass("active")){
                $(this).parent().removeClass("active");
                $(this).siblings("ul").hide();
            } else {
                $(this).parent().addClass("active");
                $(this).siblings("ul").show();
            }
        });
    },
    desktopFunc : function(){ // desktop
        var $ftlist = $(".sitemap-links");
        var $ftlink = $ftlist.find(">ul>li>ul");

        $(document).off("click.footevent");
        $ftlist.find("li").removeClass("active");
        $ftlink.show();
    },
    init : function(){
        var _this = this;
        if($(window).width() < 801){
            this.mobileFunc();
        } else {
            this.desktopFunc();
        }
    }
};
$(function(){
    // 푸터 사이트맵 리스트
    var windowWidthFooter = $(window).width();
    footerDropApp.init();

    $(window).resize(function(){
        var newWinw = $(window).width();
        if (newWinw !== windowWidthFooter){
            windowWidthFooter = newWinw;
            if(newWinw < 801){
                footerDropApp.mobileFunc();
            } else {
                footerDropApp.desktopFunc();
            }
        }
    }).resize();
});

// function screen_handle(){
//     window_height = $(window).height();
//     body_height = $("body").height();
//     header_height = $("#header").height();
//     footer_height = $("#footer").height();
//     document_height = window_height - (header_height + footer_height);
//     if(window_height < body_height){
//         $("#container").css("height","auto");
//     }else{
//         $("#container").css("height",document_height+"px");
//     }
// }

function tabContent(e){
    var $e = $(e);

    if($e.length == 0){
        return false;
    }
    $e.find("a").click(function(e){
        e.preventDefault();
        var id = $(this).attr("aria-controls");
        $(this).closest('.tab-style-btn').find("a").attr("aria-selected", "false");
        $(this).attr("aria-selected", "true");
        $(this).closest('.tab-style-btn').parent().find("> .tab-content").hide();
        $("#"+id).show();
    });
}

var scrollBarWidth; // 스크롤 값 전역변수
$(document).ready(function(){
    skip_navigator();
    calendar_picker();    
    //screen_handle();


    //정적->동적 이벤트 리스너 변경
    $(document).on("click",".droptoggle .dropOption .dropButton",function(){
        $(this).parents('.droptoggle').find(".dropList").slideUp('fast');
        $(this).parents('.droptoggle').find(".dropButton").removeClass('open');
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown('fast');
            $(this).addClass('open');
        }
        $(this).off();
    })

    togglechange('.toggleCheck');    
    //slideToggle('.droptoggle .dropOption .dropButton');       
    tooltipLeftTop('.btn-tooltop02');
    tabContent('.tab-style-btn');
    spinnerchange('.spinner-box');
    bookmarkBtn('.btn-good, .sns-heart');
});

// checkbox allcheck
var allCheckFunc = {
    check : function(name){
        $("[data-chkgrp-name="+name+"]:not(:disabled)").prop("checked", true );
    },
    uncheck : function(name){
        $("[data-chkgrp-name="+name+"]").prop("checked", false );
    }
};

$(function(){
    $("[data-allchk-name=allCheck]").click(function(){
        var children = $(this).attr("data-children-name");
        if($(this).prop("checked")){
            allCheckFunc.check(children);
        } else {
            allCheckFunc.uncheck(children);
        }
    });
    $(":checkbox:not([data-allchk-name=allCheck]):not(:disabled)").each(function(){
        $(this).click(function(){
            var name = $(this).attr("data-chkgrp-name");
            var allcount = 0;
            var checked = 0;
            $("[data-chkgrp-name="+name+"]").each(function(){
                {
                    allcount++;
                    if($(this).prop("checked")){
                        checked++;
                    }
                }
            });
            if(allcount != checked) {
                if($("[data-children-name="+name+"]").length != 0) {
                    $("[data-children-name="+name+"]").prop("checked", false);
                }
            } else {
                $("[data-children-name="+name+"]").prop("checked", true);
            }
        });
    });
});

// Accessible layer popup - 강제 포커싱 처리
function accessibilityFocus(){
    $(document).on("keydown", "[data-focus-prev]", "[data-focus-next]", function(e){
        var next = $(e.target).attr("data-focus-next"),
            prev = $(e.target).attr("data-focus-prev"),
            target = next || prev || false;
        if(!target || e.keyCode != 9) return;

        if((!e.shiftKey && !!next) || (!e.shiftKey && !!prev)){
            setTimeout(function(){
                $("[data-focus="+target+"]").focus();
            }, 1)
        }
    });
}
var LAYERZINDEX = 300; // 200729 레이어팝업 z-index 초기값
// Accessible layer popup
function layerPopFunc(){
    var openBtn = "[data-popup-target]",
        closeBtn = ".pop-close";
    
    function getTarget(t){
        if($(t).attr("data-popup-target")){
            // 클릭한 엘리먼트가 button일 경우
            return $(t).attr("data-popup-target");
        } else {
            // 클릭한 엘리먼트가 a일 경우
            return $(t).closest("a").attr("data-popup-target");
        }
    }

    function open(t){
        var showTarget = $("[data-popup-layer="+t+"]");
        if($(".layer-pop").is(":visible")) LAYERZINDEX++; // 200729 팝업 두 개 이상 띄울 경우 z-index ++
        showTarget.show().css("z-index", LAYERZINDEX).attr("aria-hidden", false).attr("data-zindex", LAYERZINDEX).focus(); // 200729 z-index 값 data attr에 저장
        showTarget.find(".pop-close").data("activeTarget", t);

        if(!showTarget.hasClass("embed")){ // 200724
            $("body *") // 200722 레이어 팝업를 제외한 영역은 hidden처리(스크린 리더기)
                .not($("#"+t))
                .not($("#"+t).parents())
                .not($("#"+t).find("*"))
                .not($("[data-popup-target="+t+"]").parents())
                .not($("[data-popup-target="+t+"]")).attr("aria-hidden", true);
        }

        // 딤드팝업 마스크 생성 및 활성화  // 200729
        if(!showTarget.hasClass("nomask")){
            var zidx = parseInt($("#"+t).attr("data-zindex")) - 1;
            $("body").append("<div id='mask' data-mask-target='"+t+"' style='z-index:"+zidx+"'></div>");

            $("#mask").fadeIn().data("activeTarget", t);
            $("body").css("overflow","hidden");
        };

        // 모아보기 slick reset 용
        if (showTarget.is("#gatherview, #layerSlick, #popupProdCode")){
            $('.mediaslide, .modelslide, .filter-slick, .visualslide').slick('setPosition');
            $('.mediaslide-navi, .modelslide-navi, .visualslide-navi').slick('setPosition');
        }
    }

    function close(t){
        var activeTarget = $("[data-popup-layer="+t+"]");
        activeTarget.removeAttr("style").removeAttr("data-zindex").attr("aria-hidden", true).hide();  // 200729
        if(!$(".layer-pop").is(":visible")) $("body").css("overflow",""); // 200729 팝업 모두 닫힌 후에 overflow hidden 해제
        $("#mask[data-mask-target='"+t+"']").fadeOut("fast").remove();  // 200729
        $("[data-popup-target="+t+"]").focus();
        if(!activeTarget.hasClass("embed")){ // 200724
            $("body *") // 200722 
                .not($("#"+t))
                .not($("#"+t).parents())
                .not($("#"+t).find("*"))
                .not($("[data-popup-target="+t+"]").parents())
                .not($("[data-popup-target="+t+"]")).removeAttr("aria-hidden");
        }
        LAYERZINDEX = 300;  // 200729 레이어팝업 z-index값 초기화
    }

    $(document)
    .on("click", openBtn, function(e){
        e.preventDefault();
        open(getTarget(e.target));
    })
    .on("click", closeBtn, function(e){
        e.preventDefault();
        close($(this).data("activeTarget"));
    })
    // .on("click", "#mask", function(){
    //     close($(this).data("activeTarget"));
    // });
}

$(function(){
    layerPopFunc();
    accessibilityFocus();

    // 레이어 팝업 커스텀스크롤 200709
    // $(window).resize(function() {
    //     var winw = $(window).width();
    //     if($(".layer-pop").length > 0){
    //         if(winw > 801) {
    //             $(".layer-pop .layer-content").mCustomScrollbar({
    //                 theme:"minimal-dark"
    //             });
    //         } else {
    //             $(".layer-pop .layer-content").mCustomScrollbar('destroy');
    //         }
    //     }
    // }).resize();

    // Accessible Dropdown Menu
    var DROPLIMIT = 5; // 200729 droplist 최대 길이값

    // Accessible Dropdown Menu - handle direct BUTTON click
    $(document).on("click", ".droplist-button", function(e) { // 200727 수정
        e.preventDefault();
        var $dropWrap = $(this).parent();
        var $dropList = $(this).next();
        var dropListBtm;
        var docHeight = $(document).innerHeight();
        if(!$dropWrap.hasClass("nodrop")){          // 클래스 nodrop이 없는 엘리먼트에만 이벤트 적용
            if (!$dropWrap.hasClass("active")) {
                $dropWrap.addClass("active");

                var listh = $dropList.find("li").height() * DROPLIMIT; // 200729
                $dropList.css("max-height", listh); // 200729

                $dropList.find(">li").each(function(){
                    $(this).attr("tabindex", -1);
                });
                dropListBtm = $dropList.outerHeight() + $dropList.offset().top;
                if(docHeight < dropListBtm){
                    $dropWrap.addClass("bottom");
                }
                $(this).attr("aria-expanded", "true");
                $dropList.focus();
                $dropList.find("[aria-selected='true']").focus(); // 200722
            } else {
                $dropWrap.removeClass("active").removeClass("bottom");
                $(this).removeAttr("aria-expanded").focus();
            }
        }
    });
    // Accessible Dropdown Menu - handle direct LABEL clicks
    $(document).on("click", ".droplist>li", function(e) {
        var $dropWrap = $(this).parents(".wrap-droplist");
        if($(this).attr("role") === "option"){
            if(!$(this).hasClass("focused")){
                $(this).parent().children().removeAttr("aria-selected").removeClass("focused");
                $(this).attr("aria-selected", "selected").addClass("focused").focus();
            }
            if($(this).children().length > 0 && $(this).parents(".wrap-droplist").hasClass("included")){
                var $clone = $(this).children().clone();
                $(this).parent().prev().html($clone);
            } else {
                var $text = $(this).text();
                $(this).parent().prev().html($text);
            }
            $(this).parent().attr("aria-activedescendant", $(this).attr("id"));
            $(this).parents(".wrap-droplist").removeClass("active").removeClass("bottom")
            $(this).parent().prev().removeAttr("aria-expanded").addClass("selected").focus();
        }
    });
    // Accessible Dropdown Menu - handle KEYPRESS events
    $(document).on("keydown", function(e) {
        var $target = $(e.target);
        var keyCode = (window.event) ? e.which : e.keyCode;
        switch(keyCode){
            case 9: // tab
                if($target.attr("role") === "option"){
                    e.preventDefault();
                    if($target.parents(".wrap-droplist").hasClass("active")){
                        var current = $target.parents(".wrap-droplist").attr("id");
                        var currentBtn = $target.parents(".wrap-droplist").find(".droplist-button").attr("id");
                        $("#"+current).removeClass("active");
                        setTimeout(function(){
                            $("#"+currentBtn).focus();
                        }, 1)
                    }
                }
                break;
            case 13:  // return
                if($target.attr("role") === "option"){
                    e.preventDefault();
                    if($target.attr("aria-disabled") != "true"){
                        setTimeout(function(){
                            $target.click();
                        }, 1)
                    }
                }
                break;
            case 38: // up
                if($target.attr("role") === "option"){
                    e.preventDefault();
                    if($target.index() > 0){
                        $target.prev().focus();
                    }
                }
                break;
            case 40: // down
                if($target.attr("role") === "option"){
                    e.preventDefault();
                    var len = $target.parent().children().length - 1;
                    if($target.index() < len){
                        $target.next().focus();
                    }
                }
                break;
        }
    });
    // Accessible Dropdown Menu - handle random body clicks off-$target
    $("body").on("click", function (e) {
        var $target = $(e.target);
        var isSelect = $target.parents(".wrap-droplist").length > 0;
        var count = 0;
        if($(".wrap-droplist").length > 0){
            $(".wrap-droplist").each(function(){
                if($(this).hasClass("active")) count++;
            });
        }
        if (!isSelect) {
            if($(".wrap-droplist").hasClass("active")){
                $(".wrap-droplist.active").find(".droplist-button").click();
            }
        } else {
            if(count > 1){
                $(".wrap-droplist.active").find(".droplist-button").click();
                $target.click();
            }
        }
    });
});


// 윈도우 resize 체크 script
/*
$(window).resize(function(){
    var winw = $(window).width();

    if(winw > 800){
        웹 사이즈에서 작동
    } else {
        테블릿 및 모바일 사이즈에서 작동
    }
}).resize();
*/

// Left LNB Menu 200706
function navLnbMyMemb(){
    var winw =  $(window).width();
    var $list = $(".nav-lnb-rounded .list-menu").find(".list");
    if($list.length > 0){
        $list.find(".menu > a").click(function(e){
            e.preventDefault();
            if(winw < 801 && !$(this).parent().hasClass("active")){
                var calcleft = $(this).parent().offset().left + $list.scrollLeft() + $(this).parent().width()/2 - $list.width()/2; // 200701
                $list.animate({scrollLeft : calcleft}, 300); // 200701
            }
            if(!$(this).parent().hasClass("active")){
                $list.find(".menu").removeClass("active");
                $list.find(".menu").find("ul").slideUp();
                $(this).parent().addClass("active");
                $(this).next().slideDown();
            }
        });
        $(window).resize(function(){
            var winw = $(window).width();
            if(winw > 800){
                var eleft = $(".nav-lnb-rounded").offset().left * -1;
                $(".nav-lnb-rounded").find(".bg").css("left", eleft);
            }
        }).resize();
    }
}

$(function(){
    var winw =  $(window).width();

    $(".gnbMenu > ul > li > a:not(.link-search)").on("click", function() {
        var thisId = $(this).attr("aria-controls");
        if(!$(this).is('.open')){
            $(this).next('div').focus();
            if(!$("body").children().is("#gnbmask")) $("body").append("<div id='gnbmask'></div>");            
            $("#gnbmask").fadeIn();
            $(this).closest('#header').find('a').removeClass('open');
            $(this).addClass('open');
            $(this).closest('ul').find("a").attr("aria-selected", "false");
            $(this).attr("aria-selected", "true");
            
            $(this).closest('#header').find('.s-gnbSubWrap').slideUp(200);
            $("#"+ thisId).show({
                effect : "slide",
                direction : "up",
                duration : 300
            });
            
            $('#header').addClass('active');
        }
        $(this).parent().find('.s-gnb-depth-2 li').removeClass("on").find('button').removeClass('selected');
        $(this).parent().find(".s-gnb-depth-2 li").eq(0).addClass('on').find('button').addClass('selected');
    });
    $(".lnb-close").on("click", function() {
        $(".gnb").removeClass('mo-Gnb');
        $("#gnbmask").fadeOut();
        $("body").removeClass("fixed-scroll");
        $('#header').find('a').removeClass('open');
    });
    $(".lnb-back").on("click", function() {
        // $(this).closest('ul').find("a").attr("aria-selected", "false");
        $('.s-gnbSubWrap').slideUp(200, "easeOutCubic");
        setTimeout((function(){
            $(".lnb-back").parent().parent().parent().find('a').removeClass('open');
        }), 600);
    });

    $(document).on("mouseenter","#gnbmask", ".lnb-close",function(){
        $(this).fadeOut(300, function(){
            $(this).remove()
        }); 
        $('.gnbMenu > ul > li').focus();
        $(".gnbMenu > ul > li > a").attr("aria-selected", "false");;
        $(".gnbMenu > ul > li > a").removeClass('open');
        $('.s-gnbSubWrap').slideUp(400, "easeOutCubic");
        $(".s-gnb-depth-2 li").removeClass('on').find('button').removeClass('selected');
        $('#header').removeClass('active');
        $(this).off()
    });
    $(".s-gnbSubWrap li").on("mouseenter focusin", function(e) {
        $(this).addClass("on").siblings().removeClass("on");
    });
    // gnb 캐스케이딩 구체화 - 0626
    $(".s-gnbSubWrap li > button").on("mouseenter focusin", function() {
        $(this).closest('.s-gnbSubWrap').find('button').removeClass("selected");
        $(this).addClass("selected");
    });

    $(window).resize(function(){
        var winw =  $(window).width();
        if(winw < 800){
            $(".gnb").removeClass('mo-Gnb');
            $("#gnbmask").fadeOut();
            $("#mobmask").fadeOut();
            $("body").removeClass("fixed-scroll");
            $(".link-m-nav").on("click", function() {
                $(".gnb").addClass('mo-Gnb');
                if(!$("#header").children().is("#mobmask")) $("#header").append("<div id='mobmask'></div>");
                $("#mobmask").fadeIn();
                $("body").addClass("fixed-scroll");
            });
            $(this).closest('#header').find('.s-gnbSubWrap').slideUp(200);

            $(document).on("mouseenter","#mobmask",function(){
                $(this).fadeOut(300, function(){
                    $(this).remove();                
                });
                $(".gnb").removeClass('mo-Gnb');
                $("body").removeClass("fixed-scroll");
                $(this).closest('#header').find('.s-gnbSubWrap').slideUp(200);
            }); 
            $(".lnb-close").on("click", function() {
                $(".gnb").removeClass('mo-Gnb');
                $("#mobmask").fadeOut();
                $("body").removeClass("fixed-scroll");
                $('#header').find('a').removeClass('open');
                $(this).closest('#header').find('.s-gnbSubWrap').slideUp(200);
            });
            $('.s-gnb-depth-2 li').removeClass("on").find('button').removeClass('selected');
            
            $('#header').find('.s-gnbSubWrap').hide();
            $('#header').find('a').removeClass('open');
        } else {
            $(".gnb").removeClass('moGnb');
            $("body").removeClass("fixed-scroll");
            $("#mobmask").fadeOut();
        }
    }).resize();

    navLnbMyMemb();
});

//tabstyle2 white line 
function tabstyle2Bar(e) {
    var $e = $(e);
    $('.tab-point-content.tabstyle02 li').first().addClass('on');
    $e.click(function () {
        if (!$(this).hasClass("on")) {
            $('.tab-point-content.tabstyle02 li').removeClass("on");
            $(this).addClass("on");
        }
    });
}
$(window).on('load', function() {
    tabstyle2Bar('.tab-point-content.tabstyle02 li');
});