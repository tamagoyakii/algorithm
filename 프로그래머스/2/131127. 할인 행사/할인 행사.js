function solution(want, number, discount) {
    const obj = {};
    
    want.forEach((el, i) => obj[el] = number[i]);
    return discount.reduce((acc, cur, i) => {
        const tmp = {...obj};
        for (let j = i; j < i + 10; j++) {
            if (!tmp[discount[j]]) continue;
            if (tmp[discount[j]] === 1) delete tmp[discount[j]];
            else tmp[discount[j]] -= 1;
        }
        return Object.keys(tmp).length ? acc : acc + 1;
    }, 0);
}