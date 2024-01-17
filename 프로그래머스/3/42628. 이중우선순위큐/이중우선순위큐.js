function solution(operations) {
    const queue = [];
    operations.forEach((el) => {
        if (el === 'D 1') queue.pop();
        else if (el === 'D -1') queue.shift();
        else queue.push(parseInt(el.split('I ')[1]));
        queue.sort((a, b) => a - b);
    });
    return queue.length ? [queue.at(-1), queue[0]] : [0, 0];
}