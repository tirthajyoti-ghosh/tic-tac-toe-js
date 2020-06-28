/* eslint-disable no-unused-vars */

const game = (() => {
  const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 4, 8], [2, 4, 6], [0, 3, 6],
    [1, 4, 7], [2, 5, 8]];

  const isWinner = (moves) => {
    for (let i = 0; i < winCombinations.length; i += 1) {
      const comb = winCombinations[i];

      const intersection = moves.filter(value => comb.includes(value)).sort();

      if (JSON.stringify(intersection) === JSON.stringify(comb)) {
        return true;
      }
    }

    return false;
  };

  const isDraw = (cells) => {
    for (let i = 0; i < cells.length; i += 1) {
      const cell = cells[i];

      if (cell.innerText === '') {
        return false;
      }
    }

    return true;
  };

  return {
    isWinner,
    isDraw,
  };
})();
