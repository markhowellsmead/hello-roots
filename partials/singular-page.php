<article <?php post_class('c-content c-article c-article--'.get_post_type()); ?>>

	<div class="c-content__content">
		<?php
		if (!(bool) get_field('hide_title', get_the_ID())) {
			?>
			<header class="c-article__header">
				<h1 class="c-article__title"><?php the_title(); ?></h1>
			</header>
			<?php
		}?>
		<?php the_content(); ?>
	</div>

	<?php
		get_template_part('partials/navigation/pagelinks');
		get_template_part('partials/comments/template');
	?>

</article>
