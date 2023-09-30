function solution(triangle) {
  return Math.max(
    ...triangle.reduce((acc, cur) => {
      return cur.map((el, i) => {
        if (i === 0) return el + acc[i];
        if (i === cur.length - 1) return el + acc[i - 1];
        return el + Math.max(acc[i - 1], acc[i]);
      });
    })
  );
}
