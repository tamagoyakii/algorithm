function solution(msg) {
  const ret = [];
  const dic = {};

  Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65)).forEach(
    (cur, i) => (dic[cur] = i + 1)
  );

  msg.split('').reduce((acc, cur, i) => {
    const newAcc = dic[acc + cur] && acc + cur;
    if (!newAcc) {
      dic[acc + cur] = Object.keys(dic).length + 1;
      ret.push(dic[acc]);
    }
    if (i === msg.length - 1) ret.push(dic[newAcc || cur]);
    return newAcc || cur;
  }, '');
  return ret;
}