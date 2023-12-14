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
    const repaintBlack = (y, x, line) => {
      if (line === 8) return 0;
      let cnt = 0;
      for (let i = x; i < x + 8; i++) {
        if (i % 2 === 0 && input[y + line][i] === 'B') continue;
        if (i % 2 === 1 && input[y + line][i] === 'W') continue;
        cnt++;
      }
      return cnt + repaintWhite(y, x, ++line);
    };

    const repaintWhite = (y, x, line) => {
      if (line === 8) return 0;
      let cnt = 0;
      for (let i = x; i < x + 8; i++) {
        if (i % 2 === 0 && input[y + line][i] === 'W') continue;
        if (i % 2 === 1 && input[y + line][i] === 'B') continue;
        cnt++;
      }
      return cnt + repaintBlack(y, x, ++line);
    };

    for (let i = 1; i + 6 < N; i++) {
      for (let j = 0; j + 7 < M; j++) {
        const black = repaintBlack(i, j, 0);
        const white = repaintWhite(i, j, 0);
        min = Math.min(min, black, white);
      }
    }

    console.log(min);
    process.exit();
  });
