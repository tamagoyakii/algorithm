function solution(brown, yellow) {
  for (let w = 1, h = yellow / w; w <= Math.sqrt(yellow); h = yellow / ++w) {
    if (h % 1 > 0) continue;
    if ((w + h) * 2 + 4 === brown) return [h + 2, w + 2];
  }
}
