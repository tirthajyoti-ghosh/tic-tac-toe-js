const Player = require('../script/player');

test('Player', () => {
  expect(Player('tahir').name).toBe('tahir');
});
