const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const pokemons = input.slice(0, N + 1);
const problems = input.slice(N + 1, N + M + 1);
const pokedex = new Map();

pokemons.forEach((pokemon, i) => pokedex.set(pokemon, i));

const solution = problems
  .map((e) => {
    const index = Number(e);
    return isNaN(index) ? pokedex.get(e) : pokemons[index];
  })
  .join('\n');

console.log(solution);
