const n = 711554;

function solution(n) {
    // condition
    if (n < 1 || n >  8000000000) return;

    // stringify n
    const nStr = n.toString();
    // organize string in reverse order and switch it to number
    return parseInt(nStr.split("").sort().reverse().join(""));
}

solution(n);    