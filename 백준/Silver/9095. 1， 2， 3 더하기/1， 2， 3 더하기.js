const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const numbers = input.slice(1).map(Number);
  const dp = [0, 1, 2, 4];
  const max = Math.max(...numbers);

  for (let i = 4; i <= max; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return numbers.map((N) => dp[N]).join('\n');
}
