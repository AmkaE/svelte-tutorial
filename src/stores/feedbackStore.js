import { writable } from 'svelte/store';

export const FeedbackStore = writable([
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
]);
