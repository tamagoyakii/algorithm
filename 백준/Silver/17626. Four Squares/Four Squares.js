function solution(input) {
  const num = Number(input[0]);
  const dp = new Array(num + 1).fill(0);

  dp[1] = 1;
  for (let i = 2, min = 4; i <= num; i++) {
    min = 4;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j]);
    }
    dp[i] = min + 1;
  }
  return dp[num];
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));