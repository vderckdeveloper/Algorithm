function solution(arr) {
    if (arr.length < 1 || arr.length > 100) return;
    // sum
    const sum = arr.reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0);
    // arr length
    const arrLength = arr.length;

    let answer = sum / arrLength;
    return answer;
}