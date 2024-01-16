const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const T = Number(input[0]);
  const res = [];

  const dfs = (n, target) => {
    if (n === target) return 1;
    if (n > target) return 0;
    return dfs(n + 1, target) + dfs(n + 2, target) + dfs(n + 3, target);
  };

  for (let i = 1; i <= T; i++) {
    res.push(dfs(0, Number(input[i])));
  }
  return res.join('\n');
}