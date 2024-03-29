function solution(arr1, arr2) {
  return arr1.reduce((acc, cur, i) => {
    let arr = [];
    for (let i = 0; i < arr2[0].length; i++) {
      let sum = 0;
      for (let j = 0; j < cur.length; j++) sum += cur[j] * arr2[j][i];
      arr.push(sum);
    }
    acc.push(arr);
    return acc;
  }, []);
}
