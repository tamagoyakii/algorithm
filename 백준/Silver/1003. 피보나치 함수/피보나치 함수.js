const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const cache = new Map();
cache.set(0, [1, 0]);
cache.set(1, [0, 1]);

for (let i = 2; i <= 40; i++) {
  cache.set(i, [
    cache.get(i - 1)[0] + cache.get(i - 2)[0],
    cache.get(i - 1)[1] + cache.get(i - 2)[1],
  ]);
}

for (let i = 1; i <= input[0]; i++) {
  console.log(cache.get(parseInt(input[i])).join(' '));
}