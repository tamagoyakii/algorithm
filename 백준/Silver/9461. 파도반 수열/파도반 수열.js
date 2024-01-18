function solution(input) {
  const res = [];
  const it = input[Symbol.iterator]();
  const dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
  let T = Number(it.next().value);

  while (T--) {
    const N = Number(it.next().value);
    if (N < dp.length) {
      res.push(dp[N]);
      continue;
    }
    for (let i = dp.length; i <= N; i++) {
      dp[i] = dp[i - 1] + dp[i - 5];
    }
    res.push(dp[N]);
  }
  return res.join('\n');
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));