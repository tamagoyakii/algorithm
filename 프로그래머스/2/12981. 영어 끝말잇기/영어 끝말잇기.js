function solution(n, words) {
  const said = new Set([words[0]]);

  for (let i = 1; i < words.length; i++) {
    if (said.has(words[i]) || words[i].at(0) !== words[i - 1].at(-1)) {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
    said.add(words[i]);
  }
  return [0, 0];
}
