const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const unheard = new Set(input.slice(1, N + 1));
const unsaw = input.slice(N + 1, N + M + 1);
const unknown = unsaw.filter((name) => unheard.has(name));

console.log(unknown.length);
console.log(unknown.sort().join('\n'));
