const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const unavailableButtons = new RegExp(input[2].split(' ').join('|') || 'n');
const targetChannel = Number(input[0]);
let min = Math.abs(targetChannel - 100);

for (let n = 0; n < 1000000; n++) {
  const str = n.toString();
  if (unavailableButtons.test(str)) continue;
  min = Math.min(min, str.length + Math.abs(targetChannel - n));
}

console.log(min);
