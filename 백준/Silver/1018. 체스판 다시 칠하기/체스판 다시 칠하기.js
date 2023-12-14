const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input.push(line);
  })
  .on('close', function () {
    const [N, M] = input[0].split(' ');
    let min = N * M;
    const repaint = (y, x, line, color) => {
      if (line === 8) return 0;
      let cnt = 0;
      for (let i = x; i < x + 8; i++) {
        if (i % 2 === 0 && input[y + line][i] === color) continue;
        if (i % 2 === 1 && input[y + line][i] !== color) continue;
        cnt++;
      }
      return cnt + repaint(y, x, ++line, color === 'B' ? 'W' : 'B');
    };

    for (let i = 1; i + 6 < N; i++) {
      for (let j = 0; j + 7 < M; j++) {
        const black = repaint(i, j, 0, 'B');
        const white = repaint(i, j, 0, 'W');
        min = Math.min(min, black, white);
      }
    }

    console.log(min);
    process.exit();
  });
