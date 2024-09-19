const n = 10;

function solution(n) {
    if (n < 3 || n > 1000000) return;

    let answer;

    // find where the rest becomes 1
    for (let i = 2; i < n; i++) {
        const rest = n % i;
        if (rest === 1) {
            answer = i;
            break;
        }
    }

    return answer;
}

solution(n);