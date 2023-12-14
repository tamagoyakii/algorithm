const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let regex = /^[a-z]*$/;
let input = [];

readline
  .on('line', function (line) {
    if (regex.test(line)) input.push(line);
  })
  .on('close', function () {
    [...new Set(input)]
      .sort((a, b) => {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        return a.localeCompare(b);
      })
      .forEach((word) => console.log(word));
    process.exit();
  });
