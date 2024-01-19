function solution(input) {
  const N = Number(input[0]);
  const maps = {
    A: input.slice(1),
    B: input.slice(1).map((row) => row.replace(/G/g, 'R')),
  };
  const visits = {
    A: Array.from({ length: N }, () => Array(N).fill(false)),
    B: Array.from({ length: N }, () => Array(N).fill(false)),
  };
  let A = 0;
  let B = 0;

  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const dfs = (type, x, y) => {
    visits[type][y][x] = true;
    dir.forEach(([dx, dy]) => {
      const [nx, ny] = [x + dx, y + dy];
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) return;
      if (!visits[type][ny][nx] && maps[type][y][x] === maps[type][ny][nx]) {
        dfs(type, nx, ny);
      }
    });
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visits.A[i][j]) {
        A++;
        dfs('A', j, i);
      }
      if (!visits.B[i][j]) {
        B++;
        dfs('B', j, i);
      }
    }
  }
  return `${A} ${B}`;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));