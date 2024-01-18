function solution(input) {
  const [_, ...arr] = input.map(Number);
  const max = Math.max(...arr);
  const dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

  for (let i = dp.length; i <= max; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }
  return arr.map((N) => dp[N]).join('\n');
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
