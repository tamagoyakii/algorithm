function solution(input) {
  const it = input[Symbol.iterator]();
  const [N, M] = it.next().value.split(' ').map(Number);
  const thuthOrLie = Array(N + 1).fill(0);
  const parties = Array.from({ length: M }, () => Array(N + 1).fill(0));

  const checkParty = (partyNum) => {
    for (let i = 1; i <= N; i++) {
      if (parties[partyNum][i] === 1 && thuthOrLie[i] === 0) {
        thuthOrLie[i] = 1;
        checkAttendant(i);
      }
    }
  };

  const checkAttendant = (attendantNum) => {
    for (let i = 0; i < M; i++) {
      if (parties[i][attendantNum] === 1) {
        checkParty(i);
      }
    }
  };

  it.next()
    .value.split(' ')
    .slice(1)
    .forEach((n) => (thuthOrLie[Number(n)] = 1));

  for (let i = 0; i < M; i++) {
    it.next()
      .value.split(' ')
      .slice(1)
      .forEach((n) => (parties[i][Number(n)] = 1));
  }

  for (let i = 0; i < M; i++) {
    for (let j = 1; j <= N; j++) {
      if (parties[i][j] === 1 && thuthOrLie[j] === 1) {
        checkParty(i);
      }
    }
  }

  return parties.filter((attendants) => {
    return attendants.every((present, i) => !present || thuthOrLie[i] === 0);
  }).length;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
