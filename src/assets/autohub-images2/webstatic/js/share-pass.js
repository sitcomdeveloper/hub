$(document).ready(function() 
{ 
	// Navigation Menu
    var w_width = $(window).width();
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

    // login Tab

    $('.default-sub-content').slideDown(1);
    $('.default-sub-content2').slideDown(1);
    /* app list*/
    $('.app-list .tab-list .tab').click(function(event) {
        event.preventDefault();
        if($(this).is('.tab-active'))
        {
            $(this).find('.tab_sub_content').slideToggle();
        }
        else
        {
            $('.tab_sub_content').slideUp();
            $('.tab-active').removeClass('tab-active');
            $(this).addClass('tab-active');

            var accord = $(this).find('.tab_sub_content');
            $(accord).slideDown("fast");

            var tab_id = $(this).attr('data-tab');
            $('.content-active').removeClass('content-active');
            var active_tab = "#"+tab_id;
            $(active_tab).addClass('content-active');
            var video_elem = $(active_tab).find('video');
            if(video_elem.length!==0)
            {
                $(video_elem).get(0).currentTime=0;
                $(video_elem).get(0).play();
            }
        }
    });

    $('.web-list .tab-list .tab').click(function(event) {
        event.preventDefault();
        if($(this).is('.tab-web-active'))
        {
            $(this).find('.tab_web_sub_content').slideToggle(200);
        }
        else
        {
            $('.tab_web_sub_content').slideUp(200);
            $('.tab-web-active').removeClass('tab-web-active');
            $(this).addClass('tab-web-active');

            var accord = $(this).find('.tab_web_sub_content');
            $(accord).slideDown(200);

            var tab_id = $(this).attr('data-tab');
            $('.web-content-active').removeClass('web-content-active');
            $("#"+tab_id).addClass('web-content-active');
        }
    });

    //Share tab

    $('.share-pass-tab .share-tab').click(function(event) {
        event.preventDefault();
        $('.share-tab-active').removeClass('share-tab-active');
        $(this).addClass('share-tab-active');

        var tab_id = $(this).attr('data-tab');
        var list_id = $(this).attr('data-list');
        
        $('.share-content-active').removeClass('share-content-active');
        $("#"+tab_id).addClass('share-content-active');

        $('.share-list-active').removeClass('share-list-active');
        $("#"+list_id).addClass('share-list-active');
    });

	$('.link').click(function(event) {
		event.stopPropagation();
		console.log('clicked');
	});

    //Scroll 

    $('.secondary-links>a[href^="#"]').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	        $target = $(target);
            
	    $('html, body').stop().animate( {
	      'scrollTop': $target.offset().top - 95
	    }, 500, 'swing', function () {
	      // window.location.hash = target;
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
	      // window.location.hash = target;
	    } );

        $('.sidebar_navigation').css({
        	left: '-100%'
        });
        $('body').css({
        	overflow: 'auto'
        });
       	$('.body-overlay').addClass('overlay-hide');
	});

   	/* Modal */

	//Open
	$('[data-popup-open]').on('click', function(e)  {
		e.preventDefault();
        var targeted_popup_class = $(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
       	$('body').addClass('popup-open');
        $('body').css({
            overflow: 'hidden'
        });
    });
 
    // Close
    $('[data-popup-close]').on('click', function(e)  {
    	e.preventDefault();
        var targeted_popup_class = $(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        $("body").removeClass('popup-open');
        // {$(this).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"'+'stopVideo'+'","args":""}','*');}
        $('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $('body').css({
            overflow: 'auto'
        });
     }); 

	$(document).keyup(function(event) {
		if (event.which == 27) {
			$('.modal_cotainer').fadeOut(300);
			$("body").removeClass('popup-open');
            $('body').css({
                overflow: 'auto'
            });
		}
	});

    /* kms Tab */
    $('.km-options>a').click(function(e) {
        e.preventDefault();
        $('.ds-active').removeClass('ds-active');
        $(this).addClass('ds-active');

        var tab_id = $(this).attr('data-tab');
        $('.content-pass-active').removeClass('content-pass-active');
        $("#"+tab_id).addClass('content-pass-active');
    });

    var share_pass_prev = $('.share-pass-prev');
    var share_pass_next = $('.share-pass-next');

    $('.share-pass-card-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.share-pass-card-list .indiv-pass').click(function(event) {
       $('.active-pass').removeClass('active-pass');
       $(this).find('.share-card').addClass('active-pass');
    });

    $('.see-more-btn').click(function(event) {
        event.preventDefault();
        $('.faq-list>.faq-row').toggleClass('faq-max-height');
        if(w_width>768)
        {
            $('html, body').animate({
            'scrollTop' : $(".faq-list").offset().top - 50
            });
        }
        else
        {
            $('html, body').animate({
            'scrollTop' : $(".faq-list").offset().top
            });
        }
        $(this).children("span").toggleClass('hide');
    });
    //Footer country select
    $('.country-select').click(function(e){
        $('.country-options').removeClass('hide');
    });
});