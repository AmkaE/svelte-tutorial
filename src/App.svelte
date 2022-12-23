<script>
	import FeedbackForm from './lib/FeedbackForm.svelte';
	import FeedbackList from './lib/FeedbackList.svelte';
	import FeedbackStats from './lib/FeedbackStats.svelte';

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
		{
			id: 2,
			rating: 9,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
		{
			id: 3,
			rating: 8,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
	];

	$: total = feedback.length;
	$: avarage =
		feedback.reduce((prevVal, item) => prevVal + item.rating, 0) / total;

	const deleteFeedback = e => {
		const itemId = e.detail;

		feedback = feedback.filter(item => item.id !== itemId);
	};

	const addFeedback = e => {
		const newFeedback = e.detail;

		feedback = [newFeedback, ...feedback];
	};
</script>

<main>
	<main class="container">
		<FeedbackForm on:add-feedback={addFeedback} />
		<FeedbackStats {total} {avarage} />
		<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
	</main>
</main>
