let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

input.forEach((num) => {
  if (num === '0' || !num) return;
  num = '_' + num;

  for (let j = 1; j < num.length / 2; j++) {
    if (num.at(j) !== num.at(-j)) {
      console.log('no');
      num = null;
      break;
    }
  }
  if (num) console.log('yes');
});
