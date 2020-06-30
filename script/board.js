/* eslint-disable no-unused-vars */

const gameBoard = (() => {
  const board = document.getElementById('board');
  const cells = board.children;

  const setTurn = (cell, turn) => { cell.innerText = turn; };

  return {
    board,
    cells,
    setTurn,
  };
})();
