function solution(gems) {
  const gemCount = new Map();
  const types = [...new Set(gems)];
  let [min, max] = [0, gems.length - 1];
  let length = max - min;

  for (let i = 0, j = 0; j < gems.length; j++) {
    gemCount.set(gems[j], (gemCount.get(gems[j]) || 0) + 1);

    while (gemCount.size === types.length) {
      if (j - i < length) {
        [min, max] = [i, j];
        length = max - min;
      }

      gemCount.set(gems[i], gemCount.get(gems[i]) - 1);
      if (gemCount.get(gems[i]) === 0) {
        gemCount.delete(gems[i]);
      }
      i++;
    }
  }

  return [min + 1, max + 1];
}

