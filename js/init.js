(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
        $('.materialboxed').materialbox();
        $('.fixed-action-btn').openFAB();
        $('select').material_select();
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });

        //carousel
        var owl = $("#carousel-header .owl-carousel");
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            dots: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space