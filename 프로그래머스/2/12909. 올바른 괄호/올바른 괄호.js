function solution(s){
    if (s.at(0) === ")" || s.at(-1) === "(") return false;
    
    const count = {"(" : 1, ")" : -1 };
    let sum = 0;
    
    for (let i = 0; i < s.length && sum >= 0; i++) {
        sum += count[s[i]];
    }
    return sum === 0;
}