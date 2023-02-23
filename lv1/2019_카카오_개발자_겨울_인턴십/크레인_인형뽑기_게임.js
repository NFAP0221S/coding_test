function solution(board, moves) {
  const box = [];
  const temp = [];
  let counter = 0;
  transpose(board);
  const x = board.map((elm) => elm.filter((x) => x > 0));
  moves.forEach((elm, idx) => {
    if (x[elm - 1].length !== 0) {
      box.push(x[elm - 1][0]);
      x[elm - 1].shift();
    }
  });
  temp.push(box[0]);
  box.map((elm, idx) => {
    if (idx > 0) {
      if (+temp.slice(-1).join("") === elm) {
        counter += 2;
        temp.pop();
      } else {
        temp.push(elm);
      }
    }
  });
  return counter;
}
function transpose(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

// function solution(board, moves) {
//     let basket = [];
//     let boards = board;
//     let answer = 0;

//     moves.map((v) => {
//         for (let i = 0; i < boards.length; i++) {
//             if (boards[i][v - 1] === 0) {
//                 continue;
//             }
//             let pushItem = boards[i][v - 1];
//             pushItem;
//             if (basket.length === 0) {
//                 basket.push(pushItem);
//             } else if (
//                 basket.length >= 1 &&
//                 basket[basket.length - 1] !== pushItem
//             ) {
//                 basket.push(pushItem);
//             } else {
//                 basket.pop();
//                 answer += 2;
//             }
//             boards[i][v - 1] = 0;
//             break;
//         }
//     });

//     return answer;
// }
