function solution(queue1, queue2) {
    const queue = queue1.concat(queue2);
    const goal = queue.reduce((a, b) => a + b) / 2;
    
    let [start, end] = [0, queue1.length];
    let sum = queue1.reduce((a, b) => a + b);
    
    for (let move = 0; move < queue1.length * 3; move++) {
        if (sum === goal) return move;
        if (sum > goal) {
            sum -= queue[start];
            start++;
        }
        else {
            sum += queue[end];
            end++;
            if (end >= queue.length) end = 0;
        }
    }
    return -1;
}