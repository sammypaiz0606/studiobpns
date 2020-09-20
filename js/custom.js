/*
 Template Name: OneWind
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */



$(document).ready(function () {

    $('#navbarSupportedContent').hoverline({'speed': '500'});

    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
//                        location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
    $(".navbar-nav li a").on("click", function (event) {

        $(".navbar-collapse").removeClass('show');
    });


//Sliders owlCarousel - START CODE
    $(".tv-slider-one").owlCarousel({
        loop: false,
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        singleItem: true,
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"]
    });

    $(window).resize(function () {
        SetResizeHeight();
    });

    function SetResizeHeight() {
        var minheight = $(window).height();
        $(".tv-full-screen").css('min-height', minheight);
    }
    SetResizeHeight();

    var $imagePopup = $('[data-image-popup]');
    /*Image*/
    $imagePopup.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $('#popup-youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/embed/2CnPQzzA9Hc'
        },
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    src: 'https://www.youtube.com/embed/2CnPQzzA9Hc?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });
});