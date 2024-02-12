function solution(user_id, banned_id) {
  const lists = new Set();

  const findBannedId = (banList, i) => {
    if (i === banned_id.length) {
      banList.sort((a, b) => a - b);
      lists.add(banList + []);
      return;
    }
    const pattern = new RegExp('^' + banned_id[i].replace(/\*/g, '.') + '$');

    user_id.forEach((id, j) => {
      if (banList.includes(j)) return;
      if (pattern.test(id)) findBannedId(banList.concat(j), i + 1);
    });
  };
  findBannedId([], 0);
  return lists.size;
}
