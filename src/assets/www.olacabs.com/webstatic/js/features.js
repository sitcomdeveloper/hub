$(document).ready(function() {   
	// Navigation Menu
    $('.menu-icon').click(function(e) {
        e.preventDefault();
        $('.body-overlay').removeClass('overlay-hide');
        $('.sidebar_navigation').css({
            left: '0',
        });
        $('body').css({
        	overflow: 'hidden'
        });
    });
    $('.close_btn').click(function(e) {
    	$('.body-overlay').addClass('overlay-hide');
        $('.sidebar_navigation').css({
        	left: '-100%'
        });
        $('body').css({
        	overflow: 'auto'
        });
    });
    $(document).mouseup(function(e) {
        var nav_menu = $('.sidebar_navigation');
        if (!nav_menu.is(event.target) && nav_menu.has(event.target).length === 0) {
        	$('.body-overlay').addClass('overlay-hide');
            nav_menu.css({
            	left: '-100%'
            });
            $('body').css({
	        	overflow: 'auto'
	        });
        }
        $('.country-options').addClass('hide');
    });
    /* Features Page */

    // /* Tab */
    // $('.features-tab>a').click(function(e) {
    //     e.preventDefault();
    //     $('.tab-active').removeClass('tab-active');
    //     $(this).addClass('tab-active');

    //     var tab_id = $(this).attr('data-tab');
    //     $('.content-active').removeClass('content-active');
    //     $("#"+tab_id).addClass('content-active');
    // });

    /*Features city slick */
    var features_city_prev_for = $('.features-city-prev-for-btn');
    var features_city_next_for = $('.features-city-next-for-btn');
    var features_city_prev_nav = $('.features-city-prev-nav-btn');
    var features_city_next_nav = $('.features-city-next-nav-btn');

    $('.features-city-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: features_city_prev_for,
        nextArrow: features_city_next_for,
        fade: true,
        infinite: false,
        asNavFor: '.features-city-slider-nav'
    });
    $('.features-city-slider-nav').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.features-city-slider-for',
        focusOnSelect: true,
        infinite: false,
        arrows: true,
        prevArrow: features_city_prev_nav,
        nextArrow: features_city_next_nav,
        responsive: [
            {
                breakpoint: 1442,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    swipe: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    swipe: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    swipe: false,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    swipe: false,
                }
            },

        ]
    });

    /*Features outstation slick */ 
    var features_outstation_prev_for = $('.features-outstation-prev-for-btn');
    var features_outstation_next_for = $('.features-outstation-next-for-btn');
    var features_outstation_prev_nav = $('.features-outstation-prev-nav-btn');
    var features_outstation_next_nav = $('.features-outstation-next-nav-btn');

    $('.features-outstation-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: features_outstation_prev_for,
        nextArrow: features_outstation_next_for,
        fade: true,
        infinite: false,
        asNavFor: '.features-outstation-slider-nav'
    });
    $('.features-outstation-slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.features-outstation-slider-for',
        focusOnSelect: true,
        infinite: false,
        arrows: true,
        prevArrow: features_outstation_prev_nav,
        nextArrow: features_outstation_next_nav,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    swipe: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    swipe: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    swipe: false,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    swipe: false,
                }
            },

        ]
    });

    /*Features rental slick*/
    var features_rental_prev_for = $('.features-rental-prev-for-btn');
    var features_rental_next_for = $('.features-rental-next-for-btn');
    var features_rental_prev_nav = $('.features-rental-prev-nav-btn');
    var features_rental_next_nav = $('.features-rental-next-nav-btn');

    $('.features-rental-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: features_rental_prev_for,
        nextArrow: features_rental_next_for,
        fade: true,
        infinite: false,
        asNavFor: '.features-rental-slider-nav'
    });
    $('.features-rental-slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.features-rental-slider-for',
        focusOnSelect: true,
        infinite: false,
        arrows: true,
        prevArrow: features_rental_prev_nav,
        nextArrow: features_rental_next_nav,
        responsive: [
            {
                breakpoint: 1442,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    swipe: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    swipe: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    swipe: false,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    swipe: false,
                }
            },

        ]
    });

    $('.indiv-fleet').click(function(event) {
        $('html, body').animate({
        'scrollTop' : $(".features-tab-container").offset().top - 100
        });
    });
    //Footer country select
    $('.country-select').click(function(e){
        $('.country-options').removeClass('hide');
    });
    // $('.country-options>li').click(function(e){
    //     e.stopPropagation();
    //     $('.default-hide').removeClass('default-hide');
    //     $('.selected-hide').removeClass('selected-hide');
    //     var append_content = $(this).html();
    //     $('.country-select .selected').html(append_content);
    //     $('.country-options').addClass('hide');
    //     $(this).addClass('selected-hide');
    // });
});