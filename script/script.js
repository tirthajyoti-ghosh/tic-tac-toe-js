/* eslint-disable no-undef */
const turn1 = ['X', 'O'];
let clicks = 0;
const gameController = (() => {
  const reset = (msg) => {
    document.getElementById('reset').style.display = 'block';
    document.getElementById('player').innerText = msg;
    document.getElementById('reset-btn').addEventListener('click', () => {
      window.location.reload();
    });
  };
  const listner = (cells, player1, player2, i) => {
    const { board } = gameBoard;
    let turn;
    const cell = cells[i];
    if (cell.innerText !== '') {
      return;
    }
    turn = turn1[clicks % 2];
    clicks += 1;

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
      reset(`${player1.name} has won!`);
      hasWon = 1;
    }

    if (game.isWinner(player2.moves)) {
      reset(`${player2.name} has won!`);
      hasWon = 1;
    }

    const cellTexts = [];

    for (let i = 1; i < cells.length; i += 1) {
      cellTexts.push(cells[i].innerText);
    }

    if ((hasWon === 0) && (game.isDraw(cellTexts))) {
      reset('The game is draw!');
    }
  };

  const run = (player1, player2) => {
    const { cells } = gameBoard;

    for (let i = 0; i < cells.length; i += 1) {
      const cell = cells[i];
      cell.addEventListener('click', () => listner(cells, player1, player2, i));
    }
  };

  return {
    run,
  };
})();


// eslint-disable-next-line no-unused-vars
const initPlayers = (form) => {
  const player1Obj = Player(form.player1.value);
  const player2Obj = Player(form.player2.value);

  const info = document.getElementById('info');
  const name1 = document.createElement('h2');
  const name2 = document.createElement('h2');

  name1.innerText = `${form.player1.value} -> "X", color -> brown`;
  name2.innerText = `${form.player2.value} -> "O", color -> blue`;

  info.appendChild(name1);
  info.appendChild(name2);

  document.getElementById('board').classList.remove('disabled');

  gameController.run(player1Obj, player2Obj);
};
