/* eslint-disable no-unused-vars */
const combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8],
  [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

function result(cells) {
  for (combination of combinations) {
    if (cells[combination[0]].innerText === '' || cells[combination[1]].innerText === '' || cells[combination[2]].innerText === '') {
      continue;
    }
    if ((cells[combination[0]].innerText === cells[combination[1]].innerText) && (cells[combination[1]].innerText === cells[combination[2]].innerText)) {
      console.log('win');
      return 3;
    }
  }
  let i = 0;
  for (cell of cells) {
    if (cell.innerText !== '') {
      i += 1;
    }
    else{
        break;
    }
  }

  if (i === 9) return 2;
}
