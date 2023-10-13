function solution(n, computers) {
  const visited = Array(n).fill(0);
  let networks = 0;

  const dfs = (cur) => {
    visited[cur] = 1;
    computers[cur].forEach((c, i) => {
      if (c === 1 && visited[i] === 0) dfs(i);
    });
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i);
    networks++;
  }
  return networks;
}
