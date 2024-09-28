const arr = [5, 9, 7, 10];
const divisor = 5;

function solution(arr, divisor) {
    const answer = [];
    // if remainder is zero, insert each element
    arr.forEach(item => item % divisor === 0 && answer.push(item));
    // sort array in aescending order
    answer.sort((a, b) => a - b);
    // if array is empty, insert -1
    if (answer.length === 0) answer.push(-1);
    return answer;
}

solution(arr, divisor);