$(document).ready(function() 
{ 
	// Navigation Menu
    var w_width = $(window).width();
    console.log(w_width);
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

    //Scroll 
    $('.secondary-links>a[href^="#"], .express-route').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate( {
          'scrollTop': $target.offset().top - 95
        }, 500, 'swing', function () {

        } );
    });

    //Scroll for mobile
    $('.sidebar_navigation>ul>li>a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate( {
          'scrollTop': $target.offset().top - 40
        }, 800, 'swing', function () {

        } );

        $('.sidebar_navigation').css({
            left: '-100%'
        });
        $('body').css({
            overflow: 'auto'
        });
        $('.body-overlay').addClass('overlay-hide');
    });
    
    // Faq see-more
    $('.see-more-btn').click(function(event) {
        event.preventDefault();
        $('.faq-list>.faq-row').toggleClass('faq-max-height');
        $('html, body').animate({
        'scrollTop' : $(".faq-list").offset().top - 50
        });
        $(this).children("span").toggleClass('hide');
    });

    //Footer country select
    $('.country-select').click(function(e){
        $('.country-options').removeClass('hide');
    });
});