const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const [M, N] = input[0].split(' ').map(Number);
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let queue = [];
  let day = 0;

  const box = Array.from({ length: N }, (_, i) =>
    input[i + 1].split(' ').map((e, j) => {
      if (e === '1') queue.push([j, i]);
      return Number(e);
    })
  );

  if (queue.length === M * N) return 0;

  while (queue.length) {
    const newQueue = [];

    queue.forEach(([x, y]) => {
      dir.forEach((d) => {
        const [dx, dy] = [x + d[0], y + d[1]];

        if (dx >= 0 && dy >= 0 && dx < M && dy < N && box[dy][dx] === 0) {
          newQueue.push([dx, dy]);
          box[dy][dx] = 1;
        }
      });
    });

    day++;
    queue = newQueue;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 0) return -1;
    }
  }
  return day - 1;
}