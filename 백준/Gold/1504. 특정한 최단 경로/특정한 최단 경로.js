function solution(input) {
  const [N, E] = input[0].split(' ').map(Number);
  const [v1, v2] = input[E + 1].split(' ').map(Number);
  const route = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= E; i++) {
    const [start, end, cost] = input[i].split(' ').map(Number);
    route[start].push([end, cost]);
    route[end].push([start, cost]);
  }

  const dijkstra = (start) => {
    const dist = Array(N + 1).fill(Infinity);
    const queue = [[start, 0]];
    dist[start] = 0;

    while (queue.length) {
      const [cur, cost] = queue.shift();
      if (dist[cur] < cost) continue;

      route[cur].forEach(([des, desCost]) => {
        if (dist[des] > cost + desCost) {
          dist[des] = cost + desCost;
          queue.push([des, dist[des]]);
        }
      });
    }
    return dist;
  };

  const dijkstra1 = dijkstra(1);
  const dijkstraN = dijkstra(N);
  const dijkstraV = dijkstra(v1);
  const shortestDist =
    Math.min(dijkstra1[v1] + dijkstraN[v2], dijkstra1[v2] + dijkstraN[v1]) +
    dijkstraV[v2];

  return shortestDist === Infinity ? -1 : shortestDist;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
