const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const [N, M] = input[0].split(' ').map(Number);
  const trees = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  let max = 0;
  let start = 0;
  let end = trees[0];

  while (start <= end) {
    let sum = 0;
    let mid = parseInt((start + end) / 2);

    for (let i = 0; i < N; i++) {
      if (trees[i] <= mid) break;
      sum += trees[i] - mid;
    }
    if (sum >= M) {
      if (mid > max) max = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return max;
}