function solution(input) {
  const res = [];
  const it = input[Symbol.iterator]();
  let N = Number(it.next().value);

  while (N--) {
    const att = {};
    let M = Number(it.next().value);

    while (M--) {
      const key = it.next().value.split(' ')[1];
      att[key] = (att[key] ?? 0) + 1;
    }
    res.push(Object.values(att).reduce((acc, cur) => acc * (cur + 1), 1) - 1);
  }
  return res.join('\n');
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));