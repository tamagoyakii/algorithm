function solution(dirs) {
  let col = 5;
  let raw = 5;
  let set = new Set();

  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === 'D') {
      if (raw > 0) {
        set.add('r' + (raw - 1) + raw + col);
        raw--;
      }
    } else if (dirs[i] === 'U') {
      if (raw < 10) {
        set.add('r' + raw + (raw + 1) + col);
        raw++;
      }
    } else if (dirs[i] === 'R') {
      if (col < 10) {
        set.add('c' + col + (col + 1) + raw);
        col++;
      }
    } else if (dirs[i] === 'L') {
      if (col > 0) {
        set.add('c' + (col - 1) + col + raw);
        col--;
      }
    }
  }
  return set.size;
}
