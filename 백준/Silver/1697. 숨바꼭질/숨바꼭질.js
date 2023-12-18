const input = require('fs').readFileSync('/dev/stdin').toString();
const [N, K] = input.split(/\s/).map(Number);
const trace = new Map();
let queue = [N];

const setTrace = (cur, des) => {
  if (trace.has(des) || des < 0 || des > 100_000) return false;
  trace.set(des, trace.get(cur) + 1);
  return true;
};

trace.set(N, 0);

while (queue.length && !trace.get(K)) {
  const newQueue = [];

  queue.forEach((X) =>
    [X * 2, X + 1, X - 1].forEach(
      (des) => setTrace(X, des) && newQueue.push(des)
    )
  );

  queue = newQueue;
}

console.log(trace.get(K));