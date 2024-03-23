// function solution(n) {
//     const fib = Array(n + 1).fill(0);
    
//     fib[1] = 1;
//     for (let i = 2; i <= n; i++) fib[i] = fib[i - 2] + fib[i - 1];
//     return fib.at(-1) % 1234567;
// }

function solution(n) {
    const fib = [0n, 1n]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1]
    }
    return fib[n] % 1234567n
}