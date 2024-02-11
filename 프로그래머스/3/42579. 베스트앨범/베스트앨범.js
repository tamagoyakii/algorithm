function solution(genres, plays) {
  const totalPlays = {};
  const songs = genres.map((g, i) => {
    totalPlays[g] ? (totalPlays[g] += plays[i]) : (totalPlays[g] = plays[i]);
    return { index: i, genre: g, plays: plays[i] };
  });

  return songs
    .sort((a, b) =>
      totalPlays[a.genre] > totalPlays[b.genre]
        ? -1
        : totalPlays[a.genre] < totalPlays[b.genre]
        ? 1
        : a.plays > b.plays
        ? -1
        : a.plays < b.plays
        ? 1
        : a.index > b.index
        ? 1
        : -1
    )
    .filter((el, i, arr) => i < 2 || el.genre !== arr[i - 2].genre)
    .map((el) => el.index);
}
