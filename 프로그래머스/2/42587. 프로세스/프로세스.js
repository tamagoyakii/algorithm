function solution(pri, loc) {
  let ret = 0;

  while (pri.length) {
    if (pri[0] !== Math.max(...pri)) {
      pri.push(pri[0]);
    } else if (!loc) {
      break;
    } else {
      ret++;
    }
    pri.shift();
    loc = (loc || pri.length) - 1;
  }
  return ret + 1;
}
