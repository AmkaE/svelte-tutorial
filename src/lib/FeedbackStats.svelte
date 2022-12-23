<script>
	export let total = 0;
	export let avarage = 0;
</script>

<div class="feedback-stats">
	<h4>{total} Reviews</h4>
	<h4>Avarage Rating: {avarage}</h4>
</div>

<style>
	.feedback-stats {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 2rem 0;
	}
</style>
