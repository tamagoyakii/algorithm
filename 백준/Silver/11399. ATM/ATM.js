function solution(input) {
  const N = Number(input.shift());
  return input[0]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
    .reduce((acc, cur, i) => acc + cur * (N - i), 0);
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));