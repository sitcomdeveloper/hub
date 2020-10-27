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
        $('.more-option-list').addClass('hide');
        $('.country-options').addClass('hide');
    });
    $('#more-option').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.more-option-list').removeClass('hide');
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





