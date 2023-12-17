const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M, V] = input[0].split(' ').map(Number);
const routes = Array.from({ length: N + 1 }, () => Array());

input.slice(1, M + 1).forEach((v) => {
  const [s, d] = v.split(' ').map(Number);

  routes[s].push(d);
  routes[d].push(s);
});
routes.forEach((r, i) => (routes[i] = r.sort((a, b) => a - b)));

const dfsVisited = [];

const dfs = (v) => {
  dfsVisited.push(v);
  if (dfsVisited.length === routes.size) return;
  routes[v].forEach((des) => !dfsVisited.includes(des) && dfs(des));
};

dfs(V);

const bfsVisited = [];
const queue = [V];

while (queue.length) {
  const v = queue.shift();

  bfsVisited.push(v);
  routes[v].forEach(
    (des) =>
      !bfsVisited.includes(des) && !queue.includes(des) && queue.push(des)
  );
}

console.log(dfsVisited.join(' '));
console.log(bfsVisited.join(' '));
