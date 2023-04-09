function Player() {
  function play(gameboard) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    gameboard.receiveAttack(row, col);
  }

  return {
    play,
  };
}
