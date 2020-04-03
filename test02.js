function solution01(participant, completion) {
  let answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

function solution02(participant, completion) {
  let answer = "";

  for (let p of participant) {
    const idx = completion.indexOf(p);
    if (idx === -1) {
      answer = p;
      break;
    } else {
      completion.splice(idx, 1);
      continue;
    }
  }
  return answer;
}

// 1번과 2번 모두 정상 작동은 하나, 1번이 훨씬 효율성이 좋다.
// 첫번째 루프문을 도는 것은 같으나, 두번째 루프문에서 1번은 O(n^2)*2번 (정렬 부분)
// 2번은 O(n)번(indexOf) * O(n)번(splice에서 idx) * O(n)번(삭제 후 재정렬) 소요된다.
