function solution(board, moves) {
  let answer = 0;
  let basket = [];

  moves.forEach(move => {
    const idx = move - 1;
    console.log(move);

    for (let i = 0; i < board.length; i++) {
      const doll = board[i][idx];
      if (doll !== 0) {
        console.log(basket);
        board[i][idx] = 0;

        //while을 쓰면 틀림. 데이터셋 조건이 다른 듯.
        if (basket.length > 0 && basket[basket.length - 1] === doll) {
          answer += 2;
          basket.pop();

          //위에서 basket.push(doll);을 하고,
          //if문에서 basket.pop();을 두 번 쓰면 틀림.
          //pop() 두 번 쓰는 게 문제는 아닌 것 같음.
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  });
  console.log(answer);
  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);
