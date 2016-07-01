<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package zillah
 */

global $wp_customize;
$zillah_sidebar_show = get_theme_mod( 'zillah_sidebar_show', false );

get_header(); ?>

	<div class="content-wrap">

		<div id="primary" class="content-area content-area-arch<?php echo $zillah_sidebar_show !== false ? " content-area-with-sidebar" : ""; ?>">
			<main id="main" class="site-main" role="main">

			<?php
			if ( have_posts() ) :

				if ( is_home() && ! is_front_page() ) : ?>
					<header>
						<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
						<span><?php $post->ID?></span>
					</header>

				<?php
				endif;

				/* Start the Loop */
				while ( have_posts() ) : the_post();

					/*
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', get_post_format() );

				endwhile;

				the_posts_navigation();

			else :

				get_template_part( 'template-parts/content', 'none' );

			endif; ?>

			</main><!-- #main -->
		</div><!-- #primary -->

		<?php
			if ( $zillah_sidebar_show !== false || ( $zillah_sidebar_show === false && is_customize_preview() ) ) {
				get_sidebar();
			}
		?>

	</div><!-- .content-wrap -->
	<div class="demo-wrapper">
		<div id="jquery_jplayer_audio_1" class="jplayer"></div>
		<div id="demo" class="audio" role="application" aria-label="media player">
			<div class="play-control control">
				<button class="play button jp-play" role="button" aria-label="play" tabindex="0"></button>
			</div>
			<div class="bar">
				<div class="seek-bar seek-bar-display"></div>
				<div class="seek-bar">
					<div class="play-bar"></div>
					<div class="details">
						<span class="title" aria-label="title"></span>
					</div>
					<div class="timing">
						<span class="duration" role="timer" aria-label="duration"></span>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript">
		
		</script>

<?php
get_footer();
