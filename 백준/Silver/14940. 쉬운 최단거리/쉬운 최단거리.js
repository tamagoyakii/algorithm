function solution(input) {
  const [n, m] = input.shift().split(' ').map(Number);
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const distance = Array.from({ length: n }, () => Array(m).fill(0));
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let [sx, sy] = [0, 0];

  const map = input.map((row, y) =>
    row.split(' ').map((el, x) => {
      if (el === '2') [sx, sy] = [x, y];
      return Number(el);
    })
  );

  const queue = [];

  visited[sy][sx] = true;
  queue.push([sy, sx]);
  while (queue.length) {
    const [y, x] = queue.shift();

    dir.forEach(([dy, dx]) => {
      const [ny, nx] = [y + dy, x + dx];
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) return;
      if (map[ny][nx] === 0 || visited[ny][nx]) return;
      visited[ny][nx] = true;
      distance[ny][nx] = distance[y][x] + 1;
      queue.push([ny, nx]);
    });
  }
  visited.forEach((row, y) =>
    row.forEach((el, x) => {
      if (!el && map[y][x] === 1) distance[y][x] = -1;
    })
  );
  return distance.map((row) => row.join(' ')).join('\n');
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
