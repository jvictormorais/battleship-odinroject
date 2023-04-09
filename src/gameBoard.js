export default function Gameboard() {
  const grid = new Array(10).fill(null).map(() => new Array(10).fill(null));
  const missedAttacks = [];

  const board = document.querySelector(".player-side");

  grid.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    row.forEach((num) => {
      const square = document.createElement("div");
      square.classList.add("square");
      square.innerText = num;
      square.dataset.arr = num;
      rowDiv.append(square);
    });

    board.append(rowDiv);
  });

  function placeShip(ship, row, col, isVertical) {
    // TODO: Implement ship placement logic
    if (isVertical) {
      for (let i = row; i < row + ship.length; i++) {
        grid[i][col] = ship;
      }
    } else {
      for (let i = col; i < col + ship.length; i++) {
        grid[row][i] = ship;
      }
    }
  }

  function receiveAttack(row, col) {
    // TODO: Implement attack logic
    if (grid[row][col] !== null) {
      grid[row][col].hit();
    } else {
      let missed = [row, col];
      missedAttacks.push(missed);
    }
  }

  function allShipsSunk() {
    // TODO: Implement logic to check if all ships have been sunk
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const cell = grid[i][j];
        if (cell !== null && !cell.isSunk()) {
          return false;
        }
      }
    }
    return true;
  }

  return {
    grid,
    missedAttacks,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
}
