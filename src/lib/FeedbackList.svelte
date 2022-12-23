<script>
	// import { onDestroy } from 'svelte';
	import { scale, fade } from 'svelte/transition';
	import { FeedbackStore } from '../stores/feedbackStore.js';
	import FeedbackItem from './FeedbackItem.svelte';

	/** // Option 1: Subscribe to the store and unsubscribe on destroy
	let feedback = [];

	const unsubscribe = FeedbackStore.subscribe(value => (feedback = value));

	onDestroy(() => {
		unsubscribe();
	});
	*/

	/** // Option 2: Using the $ prefix
	$: feedback = $FeedbackStore;
	*/
</script>

<!-- Option 3: using the directly with the $ prefix -->
{#each $FeedbackStore as item (item.id)}
	<div in:scale out:fade={{ duration: 500 }}>
		<FeedbackItem {item} />
	</div>
{/each}
