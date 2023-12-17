const input = require('fs').readFileSync('/dev/stdin').toString();
const N = Number(input);
const cache = Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  cache[i] = cache[i - 1] + 1;
  if (i % 2 === 0) cache[i] = Math.min(cache[i / 2] + 1, cache[i]);
  if (i % 3 === 0) cache[i] = Math.min(cache[i / 3] + 1, cache[i]);
}

console.log(cache[N]);
