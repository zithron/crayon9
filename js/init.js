(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:1,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    dots:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true
	});
  }); // end of document ready
})(jQuery); // end of jQuery name space