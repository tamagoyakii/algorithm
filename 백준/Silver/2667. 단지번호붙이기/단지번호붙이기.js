const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const N = Number(input[0]);
  const map = input.slice(1).map((row) => row.split('').map(Number));
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const findComplex = (x, y) => {
    let cnt = 1;

    visited[y][x] = true;
    dir.forEach(([dx, dy]) => {
      const [nx, ny] = [x + dx, y + dy];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) return;
      if (map[ny][nx] === 0 || visited[ny][nx]) return;
      cnt += findComplex(nx, ny);
    });
    return cnt;
  };

  const complexes = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      map[i][j] === 1 && !visited[i][j] && complexes.push(findComplex(j, i));
    }
  }

  complexes.sort((a, b) => a - b).unshift(complexes.length);
  return complexes.join('\n');
}