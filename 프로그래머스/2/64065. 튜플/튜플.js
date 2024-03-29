function solution(s) {
  const set = s
    .slice(2, -2)
    .split('},{')
    .map((str) => str.split(',').map(Number))
    .sort((a, b) => a.length - b.length);
  const tuple = [];

  for (let i = 0; i < set.length; i++) {
    const t = set[i].filter((n) => !tuple.includes(n));
    tuple.push(t[0]);
  }
  return tuple;
}
