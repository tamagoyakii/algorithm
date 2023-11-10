function solution(A, B) {
  const a = A.sort((a, b) => b - a);
  const b = B.sort((a, b) => b - a);
  let bIdx = 0;

  return a.reduce((acc, cur) => {
    if (cur >= b[bIdx]) return acc;
    bIdx++;
    return acc + 1;
  }, 0);
}
