$(document).ready(function(){    
    // slick
    // PD - 제품이미지 slick
     $('.prod-image-view').slick({
        accessibility:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite:false,
        asNavFor: '.prod-image-navi',
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade:false
                }
            },
            
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade:false,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade:false,
                    arrows: false
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade:false,
                    arrows: false
                }
            }
        ]
    });
    $('.prod-image-navi').slick({
        infinite:false,
        accessibility:true,
        touchMove:false,
        waitForAnimate:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.prod-image-view',
        dots: false,
        centerMode: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow:6,
                    slidesToScroll:1,
                    dots: false
                }
            },
            
            {
                breakpoint: 810,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    arrows: false,
                    dots: true,
                    vertical: false,
                    verticalSwiping: false
                }
            }
            ,{
                breakpoint: 640,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    arrows: false,
                    dots: true,
                    vertical: false,
                    verticalSwiping: false
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    arrows: false,
                    dots: true,
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });

    $('.connection-itm').slick({
        accessibility:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        fade:false,
        infinite:false,
        dots: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    fade:false
                }
            },
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    fade:false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    fade:false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade:false,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '90px'
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade:false,
                    arrows: false,
                    centerMode: true
                }
            }
        ]
    });

    $('.dp-store-visual').slick({
        accessibility:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite:false,
        dots: false,
        lazyLoad: 'ondemand'
    });

    // 모아보기
    var $status = $('.pagingInfo');
    var $slickElement = $('.mediaslide');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.find('strong').text(i);
        $status.find('em').text('/' + slick.slideCount);
    });

    $('.mediaslide').slick({
        accessibility:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite:false,
        asNavFor: '.mediaslide-navi',
        lazyLoad: 'ondemand',
        fade: true
    });
    $('.mediaslide-navi').slick({
        infinite:false,
        accessibility:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.mediaslide',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
        
    });
    $('.daySlick').slick({
        infinite:true,
        accessibility:true,
        slidesToShow: 7,
        slidesToScroll: 7,
        dots: false,
        arrows: true,
        centerMode: false,
        touchMove:false,
        accessibility:true,
        focusOnSelect: false,
        responsive: [

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    arrows: false,
                    touchMove:true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    arrows: false,
                    touchMove:true
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    arrows: false,
                    touchMove:true
                }
            }
        ]
    });
    $('.modelslide').slick({
        accessibility: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        lazyLoad: 'ondemand',
        fade: true,
        autoplay: false
    });
    // gnb slick
    $('.s-gnb-productWrap.subType3').slick({
        accessibility:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite:false,
        lazyLoad: 'ondemand',
        touchMove:false,
        vertical: true,
        verticalSwiping: true,
        responsive: [

            {
                breakpoint: 800,
                settings: "unslick"
            },
            {
                breakpoint: 640,
                settings: "unslick"
            },
            {
                breakpoint: 360,
                settings: "unslick"
            },
            {
                breakpoint: 320,
                settings: "unslick"
            }
        ]
    });


    // visual slick
    $('.visualslide').slick({
        accessibility: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false,
        asNavFor: '.visualslide-navi',
        lazyLoad: 'ondemand',
        autoplay:true,
        fade: true
    });
    $('.visualslide-navi').slick({
        infinite: false,
        accessibility: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.visualslide',
        arrows: true,
        centerMode: false,
        focusOnSelect: true

    });

    // view page slick
    $('.viewItemslide').slick({
        accessibility: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        fade: false,
        infinite: false,
        dots: false,
        centerMode: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    fade: false
                }
            },
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    fade: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    fade: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: false,
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '90px'
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: false,
                    arrows: false,
                    dots: true,
                    centerMode: true
                }
            }
        ]
    });


});
