function solution(input) {
  const [N, M] = input.shift().split(' ').map(Number);
  let [x, y] = [0, 0];

  for (let i = 0; i < N; i++) {
    const j = input[i].indexOf('I');
    if (j !== -1) {
      [x, y] = [j, i];
      break;
    }
  }

  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let queue = [[x, y]];
  let friend = 0;

  visited[y][x] = true;
  while (queue.length) {
    const newQueue = [];

    queue.forEach(([x, y]) => {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
        if (visited[ny][nx] || input[ny][nx] === 'X') continue;
        if (input[ny][nx] === 'P') friend++;
        visited[ny][nx] = true;
        newQueue.push([nx, ny]);
      }
    });
    queue = newQueue;
  }
  return friend || 'TT';
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));