const solution = (n, costs) => {
  let cost = 0;
  const parents = Array.from({ length: n }, (_, i) => i);

  const getParents = (v) => {
    if (parents[v] === v) return v;
    return getParents(parents[v]);
  };

  const unionParents = (v1, v2) => {
    const p1 = getParents(v1);
    const p2 = getParents(v2);
    return p1 > p2 ? (parents[p1] = p2) : (parents[p2] = p1);
  };

  costs.sort(([, , a], [, , b]) => a - b);
  costs.forEach(([a, b, c]) => {
    if (getParents(a) !== getParents(b)) {
      cost += c;
      unionParents(a, b);
    }
  });
  return cost;
};
