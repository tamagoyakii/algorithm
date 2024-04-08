function solution(n, k) {
  function isPrime(n) {
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false;
    return true;
  }

  return n
    .toString(k)
    .split('0')
    .filter((el) => el !== '1' && el && isPrime(+el)).length;
}
