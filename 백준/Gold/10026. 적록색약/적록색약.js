function solution(input) {
  const N = Number(input[0]);
  const original = input.slice(1).map((r) => r.split(''));
  const colorblind = input.slice(1).map((r) => r.replace(/G/g, 'R').split(''));
  const ans = [0, 0];

  const dfs = (painting, color, x, y) => {
    if (x < 0 || y < 0 || x >= N || y >= N || painting[y][x] !== color) return;
    painting[y][x] = -1;
    dfs(painting, color, x + 1, y);
    dfs(painting, color, x - 1, y);
    dfs(painting, color, x, y + 1);
    dfs(painting, color, x, y - 1);
    return true;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (original[i][j] !== -1 && dfs(original, original[i][j], j, i))
        ans[0]++;
      if (colorblind[i][j] !== -1 && dfs(colorblind, colorblind[i][j], j, i))
        ans[1]++;
    }
  }

  return ans.join(' ');
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
