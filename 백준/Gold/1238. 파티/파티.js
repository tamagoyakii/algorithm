function solution(input) {
  const it = input[Symbol.iterator]();
  const [N, M, X] = it.next().value.split(' ').map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < M; i++) {
    const [start, end, time] = it.next().value.split(' ').map(Number);
    graph[start].push([end, time]);
  }

  const dijkstra = (start) => {
    const times = Array(N + 1).fill(Infinity);
    const queue = [start];
    times[start] = 0;

    while (queue.length) {
      const current = queue.shift();

      graph[current].forEach(([next, time]) => {
        if (times[next] > times[current] + time) {
          times[next] = times[current] + time;
          queue.push(next);
        }
      });
    }
    return times;
  };

  const dijkstraX = dijkstra(X);
  let max = 0;

  for (let i = 1; i <= N; i++) {
    const dijkstraI = dijkstra(i);
    const min = dijkstraI[X] + dijkstraX[i];

    if (min > max) max = min;
  }
  return max;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
