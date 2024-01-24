function solution(input) {
  const [N, M] = input.shift().split(' ').map(Number);
  const numbers = input.shift().split(' ').map(Number);
  const sum = Array(N + 1).fill(0);

  numbers.forEach((num, i) => (sum[i + 1] = sum[i] + num));
  return input
    .map((el) => {
      const [start, end] = el.split(' ').map(Number);
      return sum[end] - sum[start - 1];
    })
    .join('\n');
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
