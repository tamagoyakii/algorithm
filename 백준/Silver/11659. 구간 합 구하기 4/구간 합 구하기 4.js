function solution(input) {
  const [N, M] = input.shift().split(' ').map(Number);
  const numbers = input.shift().split(' ').map(Number);
  const sum = Array(N + 1).fill(0);
  const res = [];

  numbers.forEach((num, i) => (sum[i + 1] = sum[i] + num));
  for (let i = 0; i < M; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    res.push(sum[end] - sum[start - 1]);
  }
  return res.join('\n');
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));