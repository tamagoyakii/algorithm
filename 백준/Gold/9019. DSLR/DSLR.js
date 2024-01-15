const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution());

function solution() {
  const func = {
    D: (n) => (2 * n) % 10000,
    S: (n) => (n === 0 ? 9999 : n - 1),
    L: (n) => ((n * 10) % 10000) + parseInt(n / 1000),
    R: (n) => 1000 * (n % 10) + parseInt(n / 10),
  };

  const bfs = (A, B) => {
    const visited = Array(10000).fill('');
    const queue = [A];
    let head = 0;

    visited[A] = '.';
    while (queue.length > head) {
      const cur = queue[head++];

      if (cur === B) return visited[B].slice(1);
      Object.keys(func).forEach((cmd) => {
        const reg = func[cmd](cur);

        if (visited[reg]) return;
        visited[reg] = visited[cur] + cmd;
        queue.push(reg);
      });
    }
  };

  const N = Number(input[0]);
  const seq = [];

  for (let i = 1; i <= N; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    seq.push(bfs(A, B));
  }
  return seq.join('\n');
}