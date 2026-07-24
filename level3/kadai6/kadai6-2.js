jQuery(document).ready(function($){

    $('#alert-button').on('click', function(){

        alert('ボタンがクリックされました！');

    });

    $('.box').on('mouseenter', function(){

        $(this).css('background-color','lightcoral');

    }).on('mouseleave', function(){

        $(this).css('background-color','lightblue');

    });

});