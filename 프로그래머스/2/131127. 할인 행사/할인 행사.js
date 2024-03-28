function solution(want, number, discount) {
  const wantMap = new Map(want.map((item, index) => [item, number[index]]));
  let ans = 0;

  for (let start = 0; start <= discount.length - 10; start++) {
    const tmp = new Map(wantMap);
    for (let i = start; i < start + 10; i++) {
      const item = discount[i];
      if (tmp.has(item)) {
        const remaining = tmp.get(item) - 1;
        if (remaining === 0) tmp.delete(item);
        else tmp.set(item, remaining);
      }
    }
    if (tmp.size === 0) ans++;
  }

  return ans;
}
