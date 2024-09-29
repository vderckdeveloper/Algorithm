const n = 12345;

function solution(n) {
    // condition
    if (n < 1 || n > 10000000000) return;

    const nStr = n.toString();
    return nStr.split("").reverse().map(item => parseInt(item));
}

solution(n);    