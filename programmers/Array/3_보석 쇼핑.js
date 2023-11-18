function solution(gems) {
  const types = [...new Set(gems)];
  let [min, max] = [0, gems.indexOf(types.at(-1))];
  let length = max;

  for (let i = 1, j = max, prev = gems[0]; i < gems.length; i++) {
    if (gems[i + 1] === gems[i]) continue;

    const next = gems.indexOf(prev, i);
    if (next === -1) break;
    if (next > j) j = next;
    if (length > j - i) {
      [min, max] = [i, j];
      length = max - min;
      if (length < types.length) break;
    }
    prev = gems[i];
  }
  return [min + 1, max + 1];
}
// 효율성 테스트 15번 실패
