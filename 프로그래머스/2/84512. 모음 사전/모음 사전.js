function solution(word) {
  const vow = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const cnt = (cur, i) => {
    let ret = 0;
    for (let p = 4 - i; p >= 0; p--) ret += Math.pow(5, p);
    return ret;
  };

  return word.split('').reduce((acc, cur, i) => {
    return acc + cnt(cur, i) * vow[cur] + 1;
  }, 0);
}
