const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const N = Number(input[0]);
  const M = Number(input[1]);
  const computers = Array.from({ length: N + 1 }, () =>
    Array(N + 1).fill(false)
  );

  for (let i = 2; i <= 1 + M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    computers[a][b] = true;
    computers[b][a] = true;
  }

  let cnt = 0;
  const visited = new Set();

  const dfs = (from) => {
    visited.add(from);
    computers[from].forEach((isConnected, to) => {
      if (!isConnected || visited.has(to)) return;
      cnt++;
      computers[from][to] = false;
      computers[to][from] = false;
      dfs(to);
    });
  };

  dfs(1);
  return cnt;
}
