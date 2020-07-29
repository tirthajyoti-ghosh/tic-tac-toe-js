const game = require('../script/logic');

describe('tests for isWinner', () => {
  it('returns true for right combination', () => {
    expect(game.isWinner([3, 6, 9])).toBe(true);
  });

  it('returns true for right combination in wrong order', () => {
    expect(game.isWinner([5, 8, 2])).toBe(true);
  });

  it('returns false for any wrong combination', () => {
    expect(game.isWinner([6, 1, 7])).toBe(false);
  });
});

describe('tests for isDraw', () => {
  it('returns true when all cells are filled', () => {
    expect(game.isDraw(['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'])).toBe(true);
  });

  it('returns false when any cell is empty', () => {
    expect(game.isDraw(['X', 'O', 'X', 'O', 'X', 'X', '', 'X', 'O'])).toBe(false);
  });
});
