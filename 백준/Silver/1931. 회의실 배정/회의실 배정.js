const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const meetings = input
  .slice(1, N + 1)
  .map((el) => el.split(' ').map(Number))
  .sort(([s1, e1], [s2, e2]) =>
    e1 < e2 ? -1 : e1 > e2 ? 1 : s1 < s2 ? -1 : 1
  );

let cnt = 0;

meetings.reduce(
  (acc, cur) => {
    if (cur[0] < acc[1]) return acc;
    cnt++;
    return cur;
  },
  [0, 0]
);

console.log(cnt);
