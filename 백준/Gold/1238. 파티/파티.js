function solution(input) {
  const it = input[Symbol.iterator]();
  const [N, M, X] = it.next().value.split(' ').map(Number);
  const forwardGraph = Array.from({ length: N + 1 }, () => []);
  const backwardGraph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < M; i++) {
    const [start, end, time] = it.next().value.split(' ').map(Number);
    forwardGraph[start].push([end, time]);
    backwardGraph[end].push([start, time]);
  }

  const dijkstra = (graph) => {
    const times = Array(N + 1).fill(Infinity);
    const queue = [[X, 0]];
    times[X] = 0;

    while (queue.length) {
      const [start, time] = queue.shift();

      graph[start].forEach(([d, t]) => {
        if (times[d] > time + t) {
          times[d] = time + t;
          queue.push([d, times[d]]);
        }
      });
    }
    return times;
  };

  const dijkstraForward = dijkstra(forwardGraph);
  const dijkstraBackward = dijkstra(backwardGraph);

  let max = 0;

  for (let i = 1; i <= N; i++) {
    const sum = dijkstraForward[i] + dijkstraBackward[i];
    if (sum > max) max = sum;
  }
  return max;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));