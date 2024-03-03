function solution(n, edge) {
  const node = new Map();

  edge.forEach(([a, b]) => {
    node.has(a) ? node.get(a).push(b) : node.set(a, [b]);
    node.has(b) ? node.get(b).push(a) : node.set(b, [a]);
  });

  let ans = 0;
  let queue = [1];

  while (queue.length) {
    const newQueue = [];

    queue.forEach((currentNode) => {
      if (!node.has(currentNode)) return;
      node.get(currentNode).forEach((nextNode) => newQueue.push(nextNode));
      node.delete(currentNode);
    });
    queue = newQueue;
    if (node.size) ans = node.size;
  }
  return ans;
}
