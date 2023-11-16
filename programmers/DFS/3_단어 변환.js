function solution(begin, target, words) {
  if (words.includes(target) === false) return 0;

  const changeWord = (from, trace) => {
    const to = words.filter((t) => {
      let diff = 0;
      for (let i = 0; i < t.length; i++) {
        if (t[i] !== from[i]) diff++;
      }
      return diff === 1 && trace.indexOf(t) === -1;
    });

    if (to.length === 0) return 0;
    if (to.includes(target)) return 1;

    return (
      Math.min(
        ...to.map((t) => changeWord(t, trace.concat(t))).filter((t) => t)
      ) + 1
    );
  };

  return changeWord(begin, [begin]);
}
