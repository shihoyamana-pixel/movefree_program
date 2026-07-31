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

    $('.custom-animation-box').on('click', function() {
        $(this).animate({
            width: '200px',
            height: '80px',
            opacity: 0.7,
            marginLeft: '50px'
        }, 600, 'swing', function() {
            console.log('カスタムアニメーション完了！');
        });
    });

});