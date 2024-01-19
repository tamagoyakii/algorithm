function solution(routes) {
  let cameras = 0;

  routes
    .sort(([, a], [, b]) => a - b)
    .reduce((acc, cur) => {
      if (cur[0] <= acc) return acc;
      cameras++;
      return cur[1];
    }, -30001);

  return cameras;
}
