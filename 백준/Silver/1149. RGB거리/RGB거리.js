function solution(input) {
  const N = Number(input.shift());
  input[0] = input[0].split(' ').map(Number);

  for (let i = 1; i < N; i++) {
    const [r, g, b] = input[i].split(' ').map(Number);

    input[i] = [
      r + Math.min(input[i - 1][1], input[i - 1][2]),
      g + Math.min(input[i - 1][0], input[i - 1][2]),
      b + Math.min(input[i - 1][0], input[i - 1][1]),
    ];
  }

  return Math.min(...input[N - 1]);
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
