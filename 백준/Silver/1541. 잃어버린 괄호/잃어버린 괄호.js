const input = require('fs').readFileSync('/dev/stdin').toString().slice(0, -1);
const sum = input
  .split('-')
  .map((exp) => exp.split('+').reduce((a, c) => Number(a) + Number(c)))
  .reduce((a, c) => Number(a) - Number(c));

console.log(sum);
