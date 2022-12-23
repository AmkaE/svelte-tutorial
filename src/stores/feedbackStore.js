import { writable } from 'svelte/store';

const initialFeedbacks = [
	{
		id: crypto.randomUUID(),
		rating: 10,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
	},
	{
		id: crypto.randomUUID(),
		rating: 9,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
	},
	{
		id: crypto.randomUUID(),
		rating: 8,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
	},
];

const createFeedbackStore = () => {
	const { subscribe, update } = writable(initialFeedbacks);

	return {
		subscribe,
		addFeedback: newFeedback => {
			update(currFeedbacks => [newFeedback, ...currFeedbacks]);
		},
		deleteFeedback: itemId => {
			update(currFeedbacks =>
				currFeedbacks.filter(feedback => feedback.id !== itemId),
			);
		},
	};
};

export const FeedbackStore = createFeedbackStore();
