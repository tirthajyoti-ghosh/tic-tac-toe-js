function game_play() {
  let board = document.getElementById('board');
  let cells = board.children;

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', function () {
      if (cell.innerText === 'X') {
        cell.innerText = 'O';
        board.classList.toggle("player-2");
        board.classList.toggle("player-1");
      } else {
        cell.innerText = 'X';
        board.classList.toggle("player-2");
        board.classList.toggle("player-1");
      }
    });    
  }
}