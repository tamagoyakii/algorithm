function solution(maps) {
    const gy = maps.length - 1;
    const gx = maps[0].length - 1;
    const move = [[1, 0], [-1, 0], [0, 1], [0,-1]];
    const len = {'0, 0' : 1};
    const que = [[0, 0]];

    while (que.length) {
        const pos = que.shift();
        const [y, x] = pos;
        move.forEach((el) => {
            const my = y + el[0];
            const mx = x + el[1];
            if (!(mx > gx || mx < 0 || my > gy || my < 0)
               && maps[my][mx] === 1) {
                que.push([my, mx]);
                maps[my][mx] = 0;
                len[`${my}, ${mx}`] = len[`${y}, ${x}`] + 1;
            }
        })
    }
    return len.hasOwnProperty(`${gy}, ${gx}`) ? len[`${gy}, ${gx}`] : -1;
}