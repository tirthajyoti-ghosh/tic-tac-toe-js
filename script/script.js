/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

function gamePlay() {
  const player1 = Player('X');
  const player2 = Player('O');

  let turn = 'X';

  const board = document.getElementById('board');
  const cells = board.children;

  for (let i = 0; i < cells.length; i += 1) {
    const cell = cells[i];
    cell.addEventListener('click', () => {
      if (cell.innerText !== '') {
        return;
      }
      
      cell.innerText = turn;
      board.classList.toggle('player-2');
      board.classList.toggle('player-1');

      if (turn === 'X') {
        player1.moves.push(i);
        turn = 'O';
      } else {
        player2.moves.push(i);
        turn = 'X';
      }

      let hasWon = 0;

      if (game.isWinner(player1.moves)) {
        document.getElementById('alert').innerText = 'Player 1 has won!';
        hasWon = 1;
      }
      
      if (game.isWinner(player2.moves)) {
        document.getElementById('alert').innerText = 'Player 2 has won!';
        hasWon = 1;
      }
      
      if ((hasWon === 0) && (game.isDraw(cells))) {
        document.getElementById('alert').innerText = 'The game is draw';
      }
    });
  }
}
