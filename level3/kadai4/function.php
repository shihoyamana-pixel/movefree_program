<?php

function mytheme_enqueue_styles() {

    wp_enqueue_style(
        'parent-style',
        get_template_directory_uri() . '/style.css'
    );

    wp_enqueue_style(
        'child-style',
        get_stylesheet_uri(),
        array('parent-style')
    );

    wp_enqueue_style(
        'custom-style',
        get_stylesheet_directory_uri() . '/kadai4-2.css',
        array('child-style')
    );
}

add_action('wp_enqueue_scripts', 'mytheme_enqueue_styles');


function my_child_theme_enqueue_scripts() {

    wp_enqueue_script('jquery');

    wp_enqueue_script(
        'my-custom-script',
        get_stylesheet_directory_uri() . '/js/kadai4-3.js',
        array('jquery'),
        microtime(),
        true
    );
}

add_action('wp_enqueue_scripts', 'my_child_theme_enqueue_scripts');