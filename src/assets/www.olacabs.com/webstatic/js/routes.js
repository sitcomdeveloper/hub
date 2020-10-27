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

    var blog_post_dots = $('.blog-tab-wrapper');
    $('.blog-tab-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
  		autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        asNavFor: '.blog-tab-wrapper',
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });
    $('.blog-tab-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.blog-tab-content',
        dots: false,
        focusOnSelect: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.indiv-fleet').click(function(event) {
        $('html, body').animate({
        'scrollTop' : $(".ola-fleet").offset().top - 90
        });
        // $(window).scrollTop($('.ola-fleet').offset().top);
    });
    /*slick */
    var perv_for = $('.prev-btn');
    var next_for = $('.next-btn');
    var prev_nav = $('.prev-btn-nav');
    var next_nav = $('.next-btn-nav');
    var dot_indicator = $('.dot-indicator');

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: perv_for,
        nextArrow: next_for,
        fade: true,
        infinite: false,
        asNavFor: '.slider-nav'
   });
    $('.slider-nav').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        infinite: false,
        arrows: true,
        prevArrow: prev_nav,
        nextArrow: next_nav,
        responsive: [
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
    var showChar = 670;
    var ellipsestext = "...";
    var moretext = "Show more";
    var lesstext = "Show less";
    $('.indiv-blog-tab .info').each(function() {
        var content = $(this).text();
        console.log(content);
        console.log(content.length);
        // console.log("cha" ,$(this).text().length);
        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            console.log(c);
            var h = content.substr(showChar-1, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

    //Offer swipe
	var offer_prev_btn = $('.offer-prev-btn');
	var offer_next_btn = $('.offer-next-btn');
	$(".offers-slick").slick({
		slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
  		autoplaySpeed: 3000,
		prevArrow: offer_prev_btn,
		nextArrow: offer_next_btn,
		responsive: [
			{
				breakpoint: 768,
				settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			    }
			},
		]
    });
    var click_counter = 0;
    var nele_footerexpand_link = $('.footer-expand-link').parent().next();
    if(nele_footerexpand_link.length==0)
    {
        $('.footer-expand-link').addClass('hide');
    }
    console.log('nele_footerexpand_link', nele_footerexpand_link);
	$('.footer-expand-link').click(function(e){
		e.preventDefault();
		click_counter++;
		console.log('click counter',click_counter);
		// $(this).find('.footer-link-msg').toggleClass('hide');
		$('.footer-hide-link').removeClass('hide');
		$('.footer-expanded-view-1').removeClass('hide');
		if(click_counter>=1)
		{
            $('.footer-expanded-view-'+click_counter).removeClass('hide');
            var nextelementexist=click_counter+1;
            var nextelement = $('.footer-expanded-view-'+nextelementexist);
			if(nextelement.length==0)
			{
				$(this).addClass('hide');
			}
		}
	});
	$('.footer-hide-link').click(function(e){
		e.preventDefault();
		$('.expand-view').addClass('hide');
        $(this).addClass('hide');
        $('.footer-expand-link').removeClass('hide');
        click_counter = 0;
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
