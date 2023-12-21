const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const stairs = input.slice(1, N + 1).map(Number);

console.log(solution(N, stairs));

function solution(N, stairs) {
  const dp = Array.from({ length: N + 1 }, () => Array(2).fill(0));

  stairs.unshift(0);
  dp[1].fill(stairs[1]);
  for (let i = 2; i < stairs.length; i++) {
    dp[i][0] = stairs[i] + dp[i - 1][1];
    dp[i][1] = stairs[i] + Math.max(dp[i - 2][0], dp[i - 2][1]);
  }
  return Math.max(...dp[N]);
}
