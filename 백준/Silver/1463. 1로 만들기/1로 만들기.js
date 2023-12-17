const input = require('fs').readFileSync('/dev/stdin').toString();
const N = Number(input);
const cache = Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  const prev = [];

  prev.push(cache[i - 1]);
  i % 2 === 0 && prev.push(cache[i / 2]);
  i % 3 === 0 && prev.push(cache[i / 3]);
  cache[i] = Math.min(...prev) + 1;
}

console.log(cache[N]);
