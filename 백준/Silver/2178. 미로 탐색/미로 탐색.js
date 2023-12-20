const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const miro = input.slice(1, N + 1).map((str) => str.split('').map(Number));

console.log(solution(N - 1, M - 1, miro));

function solution(N, M, miro) {
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let cnt = 1;
  let queue = [[0, 0]];

  while (queue.length && miro[N][M]) {
    const newQueue = [];

    queue.forEach(([n, m]) => {
      dir.forEach(([y, x]) => {
        const [dn, dm] = [n + y, m + x];

        if (dn < 0 || dn > N || dm < 0 || dm > M || miro[dn][dm] === 0) return;
        newQueue.push([dn, dm]);
        miro[dn][dm] = 0;
      });
    });

    queue = newQueue;
    cnt++;
  }
  return cnt;
}
