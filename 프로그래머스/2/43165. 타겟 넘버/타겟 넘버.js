function solution(numbers, target) {
    const len = numbers.length;
    function calc(i, sum) {
        let ret = 0;
        if (i === len) ret += (sum === target);
        else {
            ret += calc(i + 1, sum + numbers[i]);
            ret += calc(i + 1, sum - numbers[i]);
        }
        return ret;
    }
    return calc(0, 0);
}