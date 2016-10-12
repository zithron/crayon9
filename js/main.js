$(document).ready(function () {
    $('.collapsible-header').click(function () {
        $('.zmdi').toggle(function () {
            $(this).parent().find('.zmdi-plus').addClass('.zmdi-hide');
            $(this).parent().find('.zmdi-minus').addClass('.zmdi-show')
        });
    });
    
    $('.fixed-action-btn').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.fixed-action-btn').fadeIn();
        } else {
            $('.fixed-action-btn').fadeOut();
        }
    });

    $('.fixed-action-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});


