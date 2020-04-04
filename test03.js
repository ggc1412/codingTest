function solution(n) {
  let answer = [];
  let order = [];

  order.push(0);

  //순서 만들기
  if (n === 1) {
    return answer;
  } else {
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < 2 ** i; j++) {
        order.push(0);
        order.push(1);
      }
    }
  }

  //순서 집어 넣기
  for (let x = 1; x <= n; x++) {
    for (let y = 0; y < x; y++) {
      answer.push(order[2 ** (n - x + y) + y - 1]);
    }
  }

  return answer;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
