const n = 12;

function solution(n) {
    if (n < 0 || n > 3000) return;

    let sum = 0;

    // add each divisor
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) sum += i;
    }

    return sum;
}

solution(n);