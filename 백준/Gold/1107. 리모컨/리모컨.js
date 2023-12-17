const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const unavailableButtons = new Set(input[2].split(' '));
const targetChannel = Number(input[0]);
let min = Math.abs(targetChannel - 100);

for (let n = 0; n < 1000000; n++) {
  const str = n.toString();
  let i;

  for (i = 0; i < str.length; i++) {
    if (unavailableButtons.has(str[i])) break;
  }
  if (i === str.length) {
    min = Math.min(min, str.length + Math.abs(targetChannel - n));
  }
}

console.log(min);
