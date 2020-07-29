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
