$(document).ready(function () {
    $('.collapsible-header').click(function () {
        $('.zmdi').toggle(function () {
            $('.zmdi-plus').addClass('.zmdi-hide');
            $('.zmdi - minus').addClass('.zmdi-show')
        });
    });
    
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


