<script>
	import { FeedbackStore } from '../stores/feedbackStore.js';

	export let total = 0;
	export let avarage = 0;

	$: total = $FeedbackStore.length;

	$: avarage = parseFloat(
		($FeedbackStore.reduce((prevVal, item) => prevVal + item.rating, 0) / total)
			.toFixed(1)
			.replace(/[.,]0$/, ''),
	);
</script>

<div class="feedback-stats">
	<h4>{total} Reviews</h4>
	<h4>Avarage Rating: {isNaN(avarage) ? 0 : avarage}</h4>
</div>

<style>
	.feedback-stats {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 2rem 0;
	}
</style>
