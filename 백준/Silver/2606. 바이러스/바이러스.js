const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const N = Number(input[0]);
  const M = Number(input[1]);
  const computers = Array.from({ length: N + 1 }, () => []);

  for (let i = 2; i <= 1 + M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    computers[a].push(b);
    computers[b].push(a);
  }

  const visited = Array(N + 1).fill(false);
  let cnt = 0;

  const infectComputers = (from) => {
    cnt++;
    visited[from] = true;
    computers[from].forEach((to) => !visited[to] && infectComputers(to));
  };

  infectComputers(1);
  return cnt - 1;
}
