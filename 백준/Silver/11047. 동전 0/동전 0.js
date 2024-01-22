function solution(input) {
  const [_, K] = input[0].split(' ').map(Number);
  const coins = input.slice(1).map(Number).reverse();

  return coins.reduce(
    ([cnt, value], cur) => {
      const quotient = Math.floor(value / cur);
      const remainder = value % cur;
      return [cnt + quotient, remainder];
    },
    [0, K]
  )[0];
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));