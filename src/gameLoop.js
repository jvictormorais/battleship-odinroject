export default function createGrid(element) {
  console.log("testtwo");
  // Get the HTML element where the grid will be created
  const container = document.querySelector(element);

  // Create a new grid container element
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  // Loop through each row and column to create the grid cells
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      // Create a new grid cell element
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.row = row;
      cell.dataset.col = col;

      // Add the cell to the grid container
      gridContainer.appendChild(cell);
    }
  }

  // Add the grid container to the specified HTML element
  container.appendChild(gridContainer);
}
