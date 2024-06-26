function solution(topping) {
  const cs = new Set();
  const ds = new Set();
  let numCs = Array(topping.length - 1).fill();
  let numDs = Array(topping.length - 1).fill();

  for (let i = 0, len = topping.length - 1; i < len; i++) {
    cs.add(topping[i]);
    ds.add(topping[len - i]);
    numCs[i] = cs.size;
    numDs[len - i - 1] = ds.size;
  }
  return numCs.filter((el, i) => numDs[i] === el).length;
  // return numCs.reduce((acc, cur, i) => acc + (cur === numDs[i] ? 1 : 0), 0);
}
