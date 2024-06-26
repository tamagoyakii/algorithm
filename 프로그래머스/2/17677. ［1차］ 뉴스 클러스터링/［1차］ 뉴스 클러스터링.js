function makeElement(str) {
  const regex = /^[a-z]+$/;

  return str
    .toLowerCase()
    .split('')
    .map((cur, i, arr) => cur + arr[i + 1])
    .slice(0, -1)
    .filter((el) => regex.test(el));
}

function getJaccard(el1, el2) {
  let inter = 0;
  let union = 0;

  el1.forEach((el) => {
    const idx = el2.indexOf(el);
    union += 1;
    if (idx >= 0) {
      inter += 1;
      el2.splice(idx, 1);
    }
  });
  union += el2.length;
  return union ? inter / union : 1;
}

function solution(str1, str2) {
  const el1 = makeElement(str1);
  const el2 = makeElement(str2);

  return Math.floor(getJaccard(el1, el2) * 65536);
}
