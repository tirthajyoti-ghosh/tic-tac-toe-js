/* eslint-disable no-unused-vars */

const game = (() => {
  const winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 5, 9], [3, 5, 7], [1, 4, 7],
    [2, 5, 8], [3, 6, 9]];

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
