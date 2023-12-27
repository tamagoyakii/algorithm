const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const N = Number(input[0]);
  const M = Number(input[1]);
  const S = input[2];
  let cnt = 0;

  for (let i = 0; i < M; i++) {
    if (S[i] === 'I') {
      let j = i + 1;
      let n = 0;

      for (; j <= M; j += 2, n++) {
        if (S[j] !== 'O' || S[j + 1] !== 'I') break;
      }
      if (n >= N) cnt += n - N + 1;
      i = j - 1;
    }
  }

  return cnt;
}