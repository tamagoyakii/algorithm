let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .filter((word) => /^[a-z]+$/.test(word));

console.log(
  [...new Set(input)]
    .sort((a, b) => {
      if (a.length < b.length) return -1;
      if (a.length > b.length) return 1;
      return a.localeCompare(b);
    })
    .join('\n')
);
