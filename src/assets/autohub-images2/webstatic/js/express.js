$(document).ready(function()
{
	// Navigation Menu
    var w_width = $(window).width();
    // console.log(w_width);
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

    // Share Express steps
    $('.default-sub-content').slideDown(1);
    $('.tab-list .tab').click(function(event) {
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

    // Faq see-more
    var curHeight = $('.faq-list').height();
    $('.see-more-btn').click(function(event) {
        event.preventDefault();
        $('.faq-list>.faq-row').toggleClass("faq-max-height");
        $('html, body').animate({
        'scrollTop' : $(".faq-list").offset().top - 50
        });
        $(this).children("span").toggleClass('hide');
    });

    // Search Auto complete
    // $('.pickup_address, .drop_address').keyup(function(event) {
    //     console.log('typning');
    //     var inputfield = $(this);
    //     if($(inputfield).val() === '')
    //     {
    //         $(inputfield).siblings('.auto-complete').hide(0);
    //         $(inputfield).siblings('.comm-caption').hide();
    //         $(inputfield).removeClass('input-padd active-opacity');
    //     }
    //     else
    //     {
    //         $(inputfield).siblings('.auto-complete').show(300);
    //         $(inputfield).siblings('.comm-caption').hide();
    //         $(inputfield).removeClass('input-padd active-opacity');
    //     }
    // });

    // $('.auto-complete > ul > li').click(function(event) {
    //     var selected_address = $(this).text();
    //     var parent = $(this).parents('.auto-complete');
    //     $(parent).siblings('.pickup_address, .drop_address').val(selected_address);
    //     $(parent).hide(0);
    //     $(parent).siblings('.pickup_address, .drop_address').addClass('input-padd active-opacity');
    //     $(parent).siblings('.comm-caption').show();
    // });

    // search Form
    $('.city-select').change(function(event) {
        var ss = $(this).val();
        if(ss > 0)
        {
            $(this).parents('.indiv-field').addClass('input-complete');
            $("#pickup").parents('.indiv-field').removeClass('input-disabled');
            $('.search-btn').removeClass('input-disabled');
        }
    });
    $('#pickup').on("autocompleteclose",function (event, ui){
        $(this).parents('.indiv-field').addClass('input-complete');
        $("#drop").parents('.indiv-field').removeClass('input-disabled');
    });
    $( "#drop" ).on( "autocompleteclose", function( event, ui ) {
        $(this).parents('.indiv-field').addClass('input-complete');
        var drop_val = $('#drop').val();
        if(drop_val == '' || drop_val == null)
        {

        }
        else
        {
            $('.bidirectional').removeClass('hide');
        }
    } );

    $('.bidirectional').click(function(event) {
        event.preventDefault();
        var source = $('#pickup').val();
        var desti = $('#drop').val();
        $('#pickup').val(desti);
        $('#drop').val(source);
    });
    // Search btn
    $('.search-btn').click(function(event) {
        event.preventDefault();
        $('.express-form-wrapper').addClass('hide');
        $('.express-route-wrapper, .expand-close-btn').removeClass('hide');
        $('.express-route-container').addClass('expanded-full-screen');
        $('.express-route-container').addClass('only-route');
        $('body').addClass('body-overflow');
        $('#map').animate({
            width: 100 + '%',
            height: 100 + '%',
            },
            300, function() {
            /* stuff to do after animation is complete */
            google.maps.event.trigger(map,'resize');
        });
    });

    // $('.only-route .express-back-btn').click(function(event) {
    //     event.preventDefault();
    //     $('.express-route-container').removeClass('only-route');
    //     $('.express-route-container').removeClass('expanded-full-screen');
    //     $('body').removeClass('body-overflow');
    //     $('.express-form-wrapper').removeClass('hide');

    //     $('html, body').animate({
    //     'scrollTop' : $(".express-route-container").offset().top - 150
    //     });
    // });

    $('.expand-close-btn').click(function(event) {
        event.preventDefault();
        $(this).addClass('hide');
        $('.express-route-container').removeClass('expanded-full-screen');
        $('body').removeClass('body-overflow');
    });

    // Express Route Tab
    $('.route-tab-list > ul > li > .route-tab').click(function(event) {
        event.preventDefault();
        $('.route-tab-active').removeClass('route-tab-active');
        $(this).addClass('route-tab-active');

        var tab_id = $(this).attr('data-tab');
        $('.route-content-active').removeClass('route-content-active');
        $("#"+tab_id).addClass('route-content-active');
    });

    // find route back btn
    $('#express-route-back-btn').click(function(event) {
        event.preventDefault();
        $('.express-route-wrapper, .expand-close-btn').addClass('hide');
        $('.route-info-wrapper').addClass('hide');
        $('.active-opacity').removeClass('active-opacity');
        $('.express-route-container').removeClass('expanded-full-screen');
        $('body').removeClass('body-overflow');
        $('.express-form-wrapper').removeClass('hide');

        $('html, body').animate({
        'scrollTop' : $(".express-route-container").offset().top - 150
        });

    });

    $('.route-tab-content > .indiv-route').click(function(event) {
        event.preventDefault();
        if(w_width<768)
        {
            $('.express-route-wrapper').addClass('hide');
            $('.route-map-wraaper').removeClass('hide');
            $('.route-info-wrapper').removeClass('hide');
            $('.google-map').removeClass('map-hidden-xs');
            $('.google-map').addClass('google-map-xs');
            $('#map').animate({
                width: 100 + '%',
                height: 70 + 'vh',
                },
                300, function() {
                /* stuff to do after animation is complete */
                google.maps.event.trigger(map,'resize');
            });
        }
        else
        {
            $(this).siblings().addClass('active-opacity');
            $('.route-info-wrapper').removeClass('hide');
        }
    });

    $('#indiv-route-back-btn').click(function(event) {
        event.preventDefault();
        $('.route-map-wraaper').addClass('hide');
        $('.route-info-wrapper').addClass('hide');
        $('.google-map').removeClass('google-map-xs');
        $('.google-map').addClass('map-hidden-xs');
        $('.express-route-wrapper').removeClass('hide');
    });

    //Footer country select
    $('.country-select').click(function(e){
        $('.country-options').removeClass('hide');
    });
});
