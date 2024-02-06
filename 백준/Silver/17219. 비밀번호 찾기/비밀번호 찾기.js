function solution(input) {
  let [N, _] = input.shift().split(' ').map(Number);
  const memo = input.slice(0, N);
  const url = input.slice(N);
  const password = new Map();

  memo.forEach((el) => {
    const [url, pw] = el.split(' ');
    password.set(url, pw);
  });
  return url.map((el) => password.get(el)).join('\n');
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
