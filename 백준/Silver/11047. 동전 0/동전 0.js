function solution(input) {
  const [N, K] = input.shift().split(' ').map(Number);
  const coins = input.map(Number).reverse();
  let cnt = 0;

  for (let i = 0, val = K; i < N && val !== 0; i++) {
    cnt += Math.floor(val / coins[i]);
    val %= coins[i];
  }

  return cnt;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));