const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const friends = Array.from({ length: N + 1 }, () => Array());

input.slice(1, M + 1).forEach((el) => {
  const [a, b] = el.split(' ').map(Number);

  friends[a].push(b);
  friends[b].push(a);
});

const getKevinBaconNumber = (m) => {
  const kevinBaconGame = Array(N + 1).fill(-1);
  let queue = [m];

  kevinBaconGame[m] = 0;
  while (queue.length) {
    const newQueue = [];
    queue.forEach((user) => {
      friends[user].forEach((f) => {
        if (kevinBaconGame[f] === -1) {
          kevinBaconGame[f] = kevinBaconGame[user] + 1;
          newQueue.push(f);
        }
      });
    });
    queue = newQueue;
  }
  return kevinBaconGame.reduce((acc, cur) => acc + cur) + 1;
};

let winner = 1;

for (let i = 1, min = N ** N; i <= N; i++) {
  const kevinBaconNumber = getKevinBaconNumber(i);

  if (kevinBaconNumber >= min) continue;
  winner = i;
  min = kevinBaconNumber;
}

console.log(winner);
