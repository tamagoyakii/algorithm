const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

console.log(solution());

function solution() {
  const [N, ...stairs] = input;
  const dp = Array(N + 1).fill(0);

  stairs.unshift(0);
  dp[1] = stairs[1];
  dp[2] = stairs[1] + stairs[2];
  for (let i = 3; i <= N; i++) {
    dp[i] = stairs[i] + Math.max(stairs[i - 1] + dp[i - 3], dp[i - 2]);
  }
  return dp[N];
}
