const left = 13;
const right = 17;

function solution(left, right) {
    if (left < 1 || left > right) return;
    if (right < 1 || right > 1000) return;

    let answer = 0;

    for (let i = left; i <= right; i++) {
        let count = 0;

        // divisor count logic
        for (let j = 1; j <= i; j++) {
            // count divisor
            if (i % j === 0) {
                count++;
            }

            // check whether count is even or odd
            if (i === j && count % 2 === 0) {
                answer += i;
            } else if (i === j && count % 2 !== 0) {
                answer -= i;
            }
        }
    }

    return answer;
}

solution(left, right);