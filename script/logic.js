/* eslint-disable no-unused-vars */

const game = (() => {
  const winCombinations = () => {
    return [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 5, 9], [3, 5, 7], [1, 4, 7],
    [2, 5, 8], [3, 6, 9]];
  };

  const isWinner = (moves) => {
    const winCombs = winCombinations();

    for (let i = 0; i < winCombs.length; i += 1) {
      const comb = winCombs[i];

      const intersection = moves.filter(value => comb.includes(value)).sort();

      if (JSON.stringify(intersection) === JSON.stringify(comb)) {
        return true;
      }
    }

    return false;
  };

  const isDraw = (cellTexts) => {
    for (let i = 0; i < cellTexts.length; i += 1) {
      const cell = cellTexts[i];

      if (cell === '') {
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

module.exports = game;
