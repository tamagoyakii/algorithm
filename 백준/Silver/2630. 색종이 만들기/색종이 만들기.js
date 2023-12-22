const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const N = Number(input[0]);
  const paper = input.slice(1).map((row) => row.split(' ').map(Number));

  const solidColor = (pos, len) => {
    const color = paper[pos[1]][pos[0]];

    for (let i = pos[1]; i < pos[1] + len; i++) {
      for (let j = pos[0]; j < pos[0] + len; j++) {
        if (paper[i][j] !== color) return -1;
      }
    }
    return color;
  };

  const cutPaper = (pos, len) => {
    const color = solidColor(pos, len);
    const colorCnt = [0, 0];

    if (color !== -1) {
      colorCnt[color] = 1;
      return colorCnt;
    }

    const halfLen = len / 2;
    const splits = [
      [0, 0],
      [0, halfLen],
      [halfLen, 0],
      [halfLen, halfLen],
    ];

    return splits.reduce(
      (acc, [x, y]) => {
        const [white, blue] = cutPaper([pos[0] + x, pos[1] + y], halfLen);
        return [acc[0] + white, acc[1] + blue];
      },
      [0, 0]
    );
  };

  return cutPaper([0, 0], N).join('\n');
}