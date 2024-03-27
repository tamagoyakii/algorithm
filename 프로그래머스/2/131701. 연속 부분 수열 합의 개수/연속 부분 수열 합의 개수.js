function solution(elements) {
  const sum = new Set();
  const circ = elements.concat(elements);

  for (let i = 0; i < elements.length; i++) {
    let s = 0;
    for (let j = 0; j < elements.length; j++) {
      s += circ[i + j];
      sum.add(s);
    }
  }
  return sum.size;
}
