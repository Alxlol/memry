const gridSize = 4;
const grid = [];

for (let row = 0; row < gridSize; row++) {
	const rowArray = [];
	for (let col = 0; col < gridSize; col++) {
		// You can initialize each cell with some default value
		rowArray.push(0); // In this example, we initialize each cell with 0
	}
	grid.push(rowArray);
}
