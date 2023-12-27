const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const N = Number(input[0]);
  const S = input[2];
  const P = 'IO'.repeat(N) + 'I';
  let cnt = 0;

  for (let i = S.indexOf(P); i !== -1; cnt++) {
    i = S.indexOf(P, i + 1);
  }
  return cnt;
}
