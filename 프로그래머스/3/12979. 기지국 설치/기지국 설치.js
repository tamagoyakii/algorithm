function solution(n, stations, w) {
  const reach = w * 2 + 1;
  let newStations = 0;

  stations.push(n + w + 1);
  stations.forEach((station, i) => {
    const before = stations[i - 1] || -w;
    newStations += Math.ceil((station - w * 2 - before - 1) / reach);
  });
  return newStations;
}
