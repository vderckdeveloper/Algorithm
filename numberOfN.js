const x = 2;
const n = 5;

function solution(x, n) {
    // condition
    if (x < -10000000 || x > 10000000) return;
    if (n < 1 || n > 1000) return;

    // answer
    const answer = [];

    let number = x;
    let count = 0;
    // answer list, add x for each occurence
    while (count < n) {
        answer.push(number);
        number += x;
        count++;
    }

    return answer;
}

solution(x, n);