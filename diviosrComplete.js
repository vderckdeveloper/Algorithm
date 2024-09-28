const arr = [5, 9, 7, 10];
const divisor = 5;

function solution(arr, divisor) {
    const answer = [];
    arr.forEach(item => item % divisor === 0 && answer.push(item));
    return answer;
}

solution(arr, divisor);