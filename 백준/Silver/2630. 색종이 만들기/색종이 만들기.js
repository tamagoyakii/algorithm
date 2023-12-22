const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const N = Number(input[0]);
  const paper = input.slice(1).map((row) => row.split(' ').map(Number));
  const colorCnt = [0, 0];

  const solidColor = (x, y, n) => {
    const color = paper[y][x];

    for (let i = y; i < y + n; i++) {
      for (let j = x; j < x + n; j++) {
        if (paper[i][j] !== color) return -1;
      }
    }
    return color;
  };

  const cutPaper = (x, y, n) => {
    const color = solidColor(x, y, n);

    if (color !== -1) {
      colorCnt[color]++;
      return;
    }

    n /= 2;
    [
      [0, 0],
      [0, n],
      [n, 0],
      [n, n],
    ].forEach(([sx, sy]) => cutPaper(x + sx, y + sy, n));
  };

  cutPaper(0, 0, N);
  return colorCnt.join('\n');
}
