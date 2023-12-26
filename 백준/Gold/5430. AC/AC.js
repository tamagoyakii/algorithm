const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const ans = [];

  for (let i = 1; i < input.length; i += 3) {
    const lan = input[i];
    let n = Number(input[i + 1]);
    let arr = JSON.parse(input[i + 2]);
    let isForward = true;
    let isError = false;
    let startIndex = 0;
    let endIndex = n;

    for (let i = 0; i < lan.length; i++) {
      if (lan[i] === 'R') isForward = !isForward;
      else {
        if (startIndex < endIndex) isForward ? startIndex++ : endIndex--;
        else {
          isError = true;
          break;
        }
      }
    }

    const result = arr.slice(startIndex, endIndex);
    ans.push(
      isError ? 'error' : JSON.stringify(isForward ? result : result.reverse())
    );
  }
  return ans.join('\n');
}
