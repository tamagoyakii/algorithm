const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, r, c] = input[0].split(' ').map(Number);

const visit = (halfLen, r, c) => {
  let cnt = 0;
  let fullCnt = 0;

  if (halfLen < 1) return 1;
  if (r >= halfLen) fullCnt += 2;
  if (c >= halfLen) fullCnt++;
  cnt += fullCnt * visit(halfLen / 2, halfLen - 1, halfLen - 1);
  cnt += visit(halfLen / 2, r % halfLen, c % halfLen);
  return cnt;
};

console.log(visit(2 ** (N - 1), r, c) - 1);