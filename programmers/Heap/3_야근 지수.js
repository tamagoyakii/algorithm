function solution(n, works) {
  works.sort((a, b) => b - a);
  while (n) {
    if (works[0] < works[1]) works.sort((a, b) => b - a);
    if (!works[0]) break;
    works[0] -= 1;
    n--;
  }
  return works.reduce((acc, cur) => {
    return acc + Math.pow(cur, 2);
  }, 0);
}
// 효율성 검사 실패
