function solution(n) {
  const countOne = (num) => num.toString(2).split('1').length;
  const givenOne = countOne(n);

  while (countOne(++n) !== givenOne) {}
  return n;
}
