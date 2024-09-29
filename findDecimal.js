const n = 10;

function solution(n) {
    // condition
    if (n < 2 || n > 1000000) return;

    const decimalList = [];
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    // Sieve of Eratosthenes
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Collect prime numbers
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) decimalList.push(i);
    }

    const answer = decimalList.length;
    return answer;
}

solution(n);