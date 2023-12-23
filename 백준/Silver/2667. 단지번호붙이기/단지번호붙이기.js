const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const N = Number(input[0]);
  const map = input.slice(1).map((row) => row.split('').map(Number));
  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const findComplex = (x, y) => {
    let cnt = 1;

    map[y][x] = 0;
    dir.forEach(([dx, dy]) => {
      const [nx, ny] = [x + dx, y + dy];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) return;
      if (map[ny][nx]) cnt += findComplex(nx, ny);
    });
    return cnt;
  };

  const complexes = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      map[i][j] && complexes.push(findComplex(j, i));
    }
  }

  complexes.sort((a, b) => a - b);
  return `${complexes.length}\n${complexes.join('\n')}`;
}