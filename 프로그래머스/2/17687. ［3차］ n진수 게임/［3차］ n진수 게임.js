function solution(n, t, m, p) {
  let res = '';
  for (let i = 0; res.length < t * m; i++) res += i.toString(n);

  return res
    .split('')
    .filter((_, i) => (i % m) + 1 === p && i / m < t)
    .join('')
    .toUpperCase();
}
