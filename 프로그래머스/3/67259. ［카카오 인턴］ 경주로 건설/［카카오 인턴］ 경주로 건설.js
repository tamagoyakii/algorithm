function solution(board) {
  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const len = board.length;
  const trace = Array.from({ length: len }, () =>
    Array.from({ length: len }, () => Array(4).fill(0))
  );

  const isValid = (x, y, dir, cost) => {
    if (x < 0 || y < 0 || x >= len || y >= len) return false;
    if (board[y][x] === 1) return false;
    if (trace[y][x][dir] !== 0 && trace[y][x][dir] <= cost) return false;
    return true;
  };

  const queue = [
    { dir: 0, pos: [0, 0] },
    { dir: 1, pos: [0, 0] },
  ];

  while (queue.length) {
    const { dir, pos } = queue.shift();
    const [y, x] = pos;

    move.forEach((m, i) => {
      const [newY, newX] = [y + m[0], x + m[1]];
      const cost = trace[y][x][dir] + (dir === i ? 100 : 600);

      if (isValid(newX, newY, i, cost)) {
        trace[newY][newX][i] = cost;
        queue.push({ dir: i, pos: [newY, newX] });
      }
    });
  }
  return Math.min(
    ...trace
      .at(-1)
      .at(-1)
      .filter((el) => el)
  );
}
