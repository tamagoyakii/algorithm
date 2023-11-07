function solution(n, s) {
  const average = Math.floor(s / n);
  const lack = s - average * n;

  if (average === 0) return [-1];
  return new Array(n - lack)
    .fill(average)
    .concat(new Array(lack).fill(average + 1));
}
