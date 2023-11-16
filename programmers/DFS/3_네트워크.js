function solution(n, computers) {
  const visited = Array(n).fill(0);
  const findConnectedNetwork = (cur) => {
    visited[cur] = 1;
    computers[cur].forEach(
      (c, i) => c === 1 && visited[i] === 0 && findConnectedNetwork(i)
    );
  };

  let networks = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    findConnectedNetwork(i);
    networks++;
  }
  return networks;
}
