const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const N = Number(input[0]);
  const res = [];

  for (let i = 0, j = 1; i < N; i++) {
    const M = Number(input[j++]);
    const attributes = {};

    for (let k = 0; k < M; k++) {
      const key = input[j + k].split(' ')[1];
      attributes[key] = (attributes[key] ?? 0) + 1;
    }
    res.push(
      Object.values(attributes).reduce((acc, cur) => acc * (cur + 1), 1) - 1
    );
    j += M;
  }
  return res.join('\n');
}