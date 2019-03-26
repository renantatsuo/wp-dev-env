<?php
get_header();
?>
<section id="main-content" class="content">
	<?php
	if ( have_posts() ) {
		while ( have_posts() ) {
			the_post();
			?>
			<article>
				<?php if ( has_post_thumbnail() ) { ?>
					<div>
						<img src="<?php echo get_post_thumbnail_url(); ?>" />
					</div>
				<?php }; ?>
				<div>
					<a href="<?php the_permalink(); ?>"><h1><?php the_title(); ?></h1></a>
				</div>
				<div>
					<a href="<?php echo get_author_posts_url( get_the_author_id() ); ?>"><?php the_author(); ?></a>
					<span><?php the_date(); ?></span>
				</div>
				<div>
					<?php the_content(); ?>
				</div>
			</article>
			<?php
		}
	}
	?>
</section>
<?php
get_footer();
