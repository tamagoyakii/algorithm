const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const [M, N, H] = input[0].split(' ').map(Number);
  const dir = [
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
    [1, 0, 0],
    [-1, 0, 0],
  ];
  let queue = [];

  const boxes = Array.from({ length: H }, (_, i) =>
    Array.from({ length: N }, (__, j) =>
      input[i * N + j + 1].split(' ').map((el, k) => {
        const n = Number(el);
        if (n === 1) queue.push([k, j, i]);
        return n;
      })
    )
  );

  const inBox = (x, y, z) => {
    if (x < 0 || y < 0 || z < 0 || x >= M || y >= N || z >= H) return false;
    return true;
  };

  if (queue.length === M * N * H) return 0;

  let day = 0;

  while (queue.length) {
    const newQueue = [];

    queue.forEach(([x, y, z]) => {
      dir.forEach((d) => {
        const [dx, dy, dz] = [x + d[0], y + d[1], z + d[2]];

        if (inBox(dx, dy, dz) && boxes[dz][dy][dx] === 0) {
          newQueue.push([dx, dy, dz]);
          boxes[dz][dy][dx] = 1;
        }
      });
    });
    day++;
    queue = newQueue;
  }

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (boxes[i][j][k] === 0) return -1;
      }
    }
  }
  return day - 1;
}