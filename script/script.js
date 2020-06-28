/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

function gamePlay() {
  const player1 = Player('X')
  const player2 = Player('O')
  
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
        turn = 'O'
      } else {
        player2.moves.push(i);        
        turn = 'X'
      }

      if (game.isWinner(player1.moves)) {
        setTimeout(() => {
          document.getElementById('alert').innerText = 'Player 1 has won!';
        }, 150);
      }
      
      if (game.isWinner(player2.moves)) {
        setTimeout(() => {
          document.getElementById('alert').innerText = 'Player 2 has won!';
        }, 150);
      }
      
      if (game.isDraw(cells)) {
        setTimeout(() => {
          document.getElementById('alert').innerText = 'The game is draw';
        }, 150);
      }

      /* Known bug:
      Currently isDraw returns true if none of the cells are empty. But it also returns true when a player has won by placing his token at the last box (after which all box are filled). */
    });
  }  
}
