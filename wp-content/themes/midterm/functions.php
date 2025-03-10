<?php
function custom_blocks_main_nav_block_init()
{
    register_block_type(__DIR__ . '/build/main-nav');
    register_block_type(__DIR__ . '/build/hero');
    register_block_type(__DIR__ . '/build/key-features');
    register_block_type(__DIR__ . '/build/error-msg');
    register_block_type(__DIR__ . '/build/blog');
    register_block_type(__DIR__ . '/build/hero-two');
}

add_action('init', 'custom_blocks_main_nav_block_init');


function my_block_enqueue_styles()
{
    wp_enqueue_style(
        'my-block-style', // Handle
        get_template_directory_uri() . '/style.css', // Path to the CSS file
        array(), // Dependencies
        filemtime(get_template_directory() . '/style.css') // Version
    );
}
add_action('enqueue_block_assets', 'my_block_enqueue_styles');
