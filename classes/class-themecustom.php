<?php

namespace HelloTheme;

class ThemeCustom {

	public function __construct() {

	}

	public function run() {
		add_action( 'after_setup_theme', [ $this, 'register_nav' ] );
		add_action( 'wp_head', [ $this, 'humans_txt' ] );
		add_filter( 'wp_nav_menu_args', [ $this, 'sht_walker' ] );

		// Third party plugin support
		add_filter( 'hellolog_types', [ $this, 'register_error_log' ] );
	}

	public function register_nav() {
		register_nav_menus( [
			'primary' => __( 'Primary Menu', 'sha' ),
			'footer'  => __( 'Footer Menu', 'sha' ),
		] );
	}

	public function humans_txt() {
		echo '<link type="text/plain" rel="author" href="' . trailingslashit( get_template_directory_uri() ) . 'humans.txt" />';
	}

	public function sht_walker( $args ) {

		if ( empty( $args['walker'] ) ) {
			$args['walker'] = new \HelloTheme\ShtWalker();
		}

		return $args;
	}

	public function register_error_log( $types ) {

		$types['error'] = __( 'Error', 'sha' );

		return $types;
	}
}
