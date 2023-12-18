const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const problems = input.slice(N + 1, N + M + 1);
const pokedex = new Map();

for (let i = 1; i <= N; i++) pokedex.set(input[i], i);

const solution = problems
  .map((p) => {
    const i = Number(p);
    return isNaN(i) ? pokedex.get(p) : input[i];
  })
  .join('\n');

console.log(solution);