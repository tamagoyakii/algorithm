function solution(input) {
  const [N, _] = input.shift().split(' ').map(Number);
  const trunks = Array.from({ length: N + 1 }, () => Array());
  const visited = Array(N + 1).fill(false);
  const dfs = (node) => {
    visited[node] = true;
    trunks[node].forEach((next) => !visited[next] && dfs(next));
  };

  input.forEach((trunk) => {
    const [A, B] = trunk.split(' ').map(Number);
    trunks[A].push(B);
    trunks[B].push(A);
  });

  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    dfs(i);
    count++;
  }
  return count;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
