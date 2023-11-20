import { writable } from 'svelte/store';

export const firstSelection = writable(null);
export const secondSelection = writable(null);

export let gridCards = [
	{ src: 'img/Tex_bone_12_b.PNG', matched: false },
	{ src: 'img/Tex_tools_10_b.PNG', matched: false },
	{ src: 'img/Tex_container_02_b.PNG', matched: false },
	{ src: 'img/Tex_mushrooms_11_b.PNG', matched: false },
	{ src: 'img/Tex_reagent_06_b.PNG', matched: false },
	{ src: 'img/Tex_container_08_b.PNG', matched: false },
	{ src: 'img/Tex_gemstone_02_b.PNG', matched: false },
	{ src: 'img/Tex_herbs_04_b.PNG', matched: false }
];

export let cards = writable(
	[...gridCards, ...gridCards]
		//Shuffle
		.sort(() => Math.random() - 0.5)
		//Random id
		.map((card) => ({ ...card, id: Math.random() }))
);

export function resetTurn() {
	secondSelection.set(null);
	firstSelection.set(null);
}
