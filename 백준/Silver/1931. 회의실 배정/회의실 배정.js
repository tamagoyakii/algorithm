const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const meetings = input
  .slice(1, N + 1)
  .map((el) => el.split(' ').map(Number))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let cnt = 0;

meetings.reduce((acc, cur) => {
  if (cur[0] < acc) return acc;
  cnt++;
  return cur[1];
}, 0);

console.log(cnt);
