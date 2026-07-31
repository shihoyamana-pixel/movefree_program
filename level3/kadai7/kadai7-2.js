jQuery(document).ready(function($) {

    $('.popup-trigger').on('click', function() {
        $('.popup-modal').fadeIn('normal');
    });

    $('.close-popup').on('click', function() {
        $('.popup-modal').fadeOut('normal');
    });

    $('.slide-section-title').on('click', function() {
    $(this).next('.slide-section-content').slideToggle('slow');
    });

});