/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

function gamePlay() {
  // turns
  let a = 0;
  const turns = ['X', 'O'];
  let turn = turns[a];

  const board = document.getElementById('board');
  const cells = board.children;
  for (let i = 0; i < cells.length; i += 1) {
    const cell = cells[i];
    //  console.log(cells[i])
    cell.addEventListener('click', () => {
      if (cell.innerText !== '') {
        return;
      }
      cell.innerText = turn;
      board.classList.toggle('player-2');
      board.classList.toggle('player-1');
      a += 1;
      turn = turns[a % 2];
      const num = result(cells);
      if (num === 3) {
        console.log('yessssss');
        // alert('asjka')
      }
      if (num === 2){
        console.log('draw')
      }
    });
  }
}