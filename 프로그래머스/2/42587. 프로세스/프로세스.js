function solution(pri, loc) {
  let max = Math.max(...pri);
  let ret = 1;

  while (pri.length) {
    const process = pri.shift();

    if (process !== max) {
      // 프로세스를 실행하지 못하는 경우
      pri.push(process);
    } else if (loc === 0) {
      // 프로세스를 실행했고, 원하는 프로세스인 경우
      break;
    } else {
      // 프로세스를 실행했지만, 원하는 프로세스가 아닌 경우
      max = Math.max(...pri);
      ret++;
    }
    loc = (loc || pri.length) - 1;
  }
  return ret;
}
