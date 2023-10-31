import { writable } from 'svelte/store';

export const firstSelection = writable(null);
export const secondSelection = writable(null);

export let gridCards = [
	{ src: 'cat', matched: false },
	{ src: 'dog', matched: false },
	{ src: 'car', matched: false },
	{ src: 'house', matched: false },
	{ src: 'tv', matched: false },
	{ src: 'sofa', matched: false },
	{ src: 'window', matched: false },
	{ src: 'chair', matched: false }
];

export let cards = writable(
	[...gridCards, ...gridCards]
		.sort(() => Math.random() - 0.5)
		.map((card) => ({ ...card, id: Math.random() }))
);

export function resetTurn() {
	secondSelection.set(null);
	firstSelection.set(null);
}
