function calcDiff(A, B) {
  let diff = 0;
  for (let i = 0; i < 4; i++) {
    if (A[i] !== B[i]) {
      diff++;
    }
  }
  return diff;
}

function solution(input) {
  let T = Number(input.shift());
  const it = input[Symbol.iterator]();
  const res = [];

  while (T--) {
    const N = Number(it.next().value);
    const arr = it.next().value.split(' ');

    if (N > 32) {
      res.push(0);
      continue;
    }

    let min = Infinity;

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
          const distance =
            calcDiff(arr[i], arr[j]) +
            calcDiff(arr[j], arr[k]) +
            calcDiff(arr[k], arr[i]);
          if (distance < min) min = distance;
        }
      }
      if (min === 0) break;
    }
    res.push(min);
  }
  return res.join('\n');
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
