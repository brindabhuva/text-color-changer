<?php
/**
 * Plugin Name: text-color-changer
 * Plugin URI: http://localhost/wordpress-5.8.1/
 * Description: This plugin is only for testing perpose
 * Author: Brinda Bhuva
 * Version: 1.0.0
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
