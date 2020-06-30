/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const gameController = (() => {
  const reset = (msg) => {
    document.getElementById('reset').style.display = 'block';
    document.getElementById('player').innerText = msg;
    document.getElementById('reset-btn').addEventListener('click', () => {
      window.location.reload();
    });
  };

  const run = () => {
    const player1 = Player('X');
    const player2 = Player('O');

    const { board } = gameBoard;
    const { cells } = gameBoard;

    let turn = 'X';

    for (let i = 0; i < cells.length; i += 1) {
      const cell = cells[i];

      cell.addEventListener('click', () => {
        if (cell.innerText !== '') {
          return;
        }

        gameBoard.setTurn(cell, turn);

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
          reset('Player 1 has won!');
          hasWon = 1;
        }

        if (game.isWinner(player2.moves)) {
          reset('Player 2 has won!');
          hasWon = 1;
        }

        if ((hasWon === 0) && (game.isDraw(cells))) {
          reset('The game is draw!');
        }
      });
    }
  };

  return {
    run,
  };
})();

function gamePlay() {
  gameController.run();
}
