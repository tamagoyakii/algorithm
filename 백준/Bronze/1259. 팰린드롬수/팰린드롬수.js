let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

input.splice(input.length - 2);
input.forEach((num) => {
  num = '_' + num;
  for (let j = 1; j < num.length / 2; j++) {
    if (num.at(j) !== num.at(-j)) {
      console.log('no');
      return;
    }
  }
  console.log('yes');
});
