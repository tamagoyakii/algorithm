function solution(input) {
  const N = Number(input[0]);
  const dp = [0, 1, 2];

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10_007;
  }
  return dp[N];
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));