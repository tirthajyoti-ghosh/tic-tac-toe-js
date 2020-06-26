
function game_play() {
  // turns
  let a = 0;
  const turns = ['x', 'o'];
  let turn = turns[a];
  // players turns

  const board = document.getElementById('board');
  const cells = board.children;
  for (let i = 0; i < cells.length; i++) {
    
    cell.addEventListener('click', () => {
      console.log(i)
      if (cell.innerText !== '') {
        return;
      }
      cell.innerText = turn;
      board.classList.toggle('player-2');
      board.classList.toggle('player-1');
      a += 1;
      turn = turns[a % 2];

    });
  }
}