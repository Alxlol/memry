const gridSize = 4;
const totalPairs = (gridSize * gridSize) / 2;
let tiles = [];

//Create paired tiles
// [{0: 0}, {1: 0}, {2: 1}, {3: 1}]
for (let i = 0; i < totalPairs; i++) {
	tiles.push(i, i);
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

shuffleArray(tiles);

export function generateGrid() {
	return tiles;
}

// for (let i = array.length - 1; i > 0; i--): This for loop iterates through the array in reverse order, starting from the last element and going down to the first element (element at index 0). The reason for starting from the end is that it simplifies the algorithm and ensures that each element has an equal chance of ending up in any position in the shuffled array.

// const j = Math.floor(Math.random() * (i + 1));: Inside the loop, a random index j is generated. Math.random() returns a random floating-point number between 0 (inclusive) and 1 (exclusive). Multiplying it by (i + 1) ensures that j can be any integer between 0 and i, inclusive. This means j will be a random index within the range of elements that have not been shuffled yet.

// [array[i], array[j]] = [array[j], array[i]];: This line swaps the elements at indices i and j. It uses array destructuring to accomplish the swap without needing a temporary variable. This step effectively shuffles the elements by swapping them randomly.

// Here's how the algorithm works:

// In the first iteration of the loop (when i is the length of the array - 1), it randomly selects an index j within the entire array.
// It swaps the element at index i with the element at index j.
// In the next iteration, the range of possible indices for j is reduced by 1 because the last element (at index i) is now fixed in its correct shuffled position.
// This process continues until i reaches 1, at which point the entire array is shuffled.
// The result is that the array's elements are rearranged randomly, providing a fair and unbiased shuffle of the original array. This is useful for various applications, including card games, randomizing lists, and creating randomized orderings of elements.
