function solution(k, tangerine) {
  let answer = 1;
  const T = {};

  tangerine.forEach((t) => (T[t] = (T[t] || 0) + 1));

  const count = Object.values(T).sort((a, b) => b - a);

  for (let i = 0; i < count.length; i++, answer++) {
    if (k > count[i]) k -= count[i];
    else break;
  }
  return answer;
}
