// 이 간선들을 2진 깊이우선 탐색하며 작은 값만을 선택해서, 또는 큰 값만을 선택해서 내려와야 합니다.
// 여기서 의미를 찾아내라.

const graph = {
  100: new Set([67, 66]),
  67: new Set([100, 82, 63]),
  66: new Set([100, 73, 69]),
  82: new Set([67, 61, 79]),
  63: new Set([67]),
  73: new Set([66]),
  69: new Set([66, 65, 81]),
  61: new Set([82]),
  79: new Set([82, 87, 77]),
  65: new Set([69, 84, 99]),
  81: new Set([69]),
  87: new Set([79, 31, 78]),
  77: new Set([79]),
  84: new Set([65]),
  99: new Set([65]),
  31: new Set([87]),
  78: new Set([87]),
};

const search = (graph, start) => {
  let visit = [];
  let stack = [start];

  while (stack.length > 0) {
    let node = stack.pop();
    visit.push(node);

    // visit에 있는 것을 빼줘야 함
    let diff = new Set(graph[node]);
    for (let elem of visit) {
      diff.delete(elem);
    }
    if (diff.size !== 0) {
      let min = Math.min(...diff);
      stack.push(min);
    }
    console.log(visit, stack);
  }

  const char = String.fromCharCode(...visit);

  return char;
};

console.log(search(graph, 100));
