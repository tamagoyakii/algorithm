const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1, f = 0; i < input.length && f < input[0]; f++) {
  const [M, N, K] = input[i].split(' ').map(Number);
  const cabbages = input.slice(i + 1, i + 1 + K);
  const field = Array(N)
    .fill()
    .map((_) => Array(M).fill(0));
  let cnt = 0;

  const checkConnection = (x, y) => {
    const move = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    move.forEach(([mx, my]) => {
      const [dx, dy] = [x + mx, y + my];
      if (dx < 0 || dx >= M || dy < 0 || dy >= N) return;
      if (field[dy][dx] === 0) return;
      field[dy][dx] = 0;
      checkConnection(dx, dy);
    });
  };

  cabbages.forEach((c) => {
    const [x, y] = c.split(' ').map(Number);
    field[y][x] = 1;
  });
  field.forEach((row, i) => {
    row.forEach((el, j) => {
      if (el == 0) return;
      if (el == 1) {
        cnt++;
        field[i][j] = 0;
        checkConnection(j, i);
      }
    });
  });
  console.log(cnt);
  i += K + 1;
}

