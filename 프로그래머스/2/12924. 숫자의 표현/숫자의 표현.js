// function solution(n) {
//     let cnt = 0;

//     for (let i = 1; i <= n; i++) {
//         let sum = 0;
//         for (let j = i; sum < n; j++) sum += j;
//         if (sum === n) cnt++;
//     }
//     return cnt;
// }

function solution(n) {
    if (n === 1) return 1;
    
    let cnt = 0;
    let start = 1;
    let end = 2;
    let sum = 3;

    while (end <= n) {
        if (sum === n) {
            cnt++;
            sum -= start++;
        } else if (sum > n) {
            sum -= start++;
        } else if (sum < n) {
            sum += ++end;
        }
    }
    return cnt;
}