function solution(input) {
  const portals = new Map();

  for (let i = 1; i < input.length; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    portals.set(start, end);
  }

  const visited = Array(101).fill(false);
  let queue = [1];
  let count = 0;

  visited[1] = true;
  while (visited[100] === false) {
    const newQueue = [];

    queue.forEach((cur) => {
      [1, 2, 3, 4, 5, 6].forEach((dice) => {
        const next = cur + dice;
        if (next > 100 || visited[next]) return;
        if (portals.has(next)) {
          visited[portals.get(next)] = true;
          newQueue.push(portals.get(next));
        } else {
          visited[next] = true;
          newQueue.push(next);
        }
      });
    });
    count++;
    queue = newQueue;
  }
  return count;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));