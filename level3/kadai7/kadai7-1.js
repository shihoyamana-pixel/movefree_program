jQuery(document).ready(function($) {

    $('.popup-trigger').on('click', function() {
        $('.popup-modal').fadeIn('normal');
    });

    $('.close-popup').on('click', function() {
        $('.popup-modal').fadeOut('normal');
    });

});