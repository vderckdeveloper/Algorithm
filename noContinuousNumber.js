const arr = [4, 4, 4, 3, 3];

function solution(arr) {
    // condition
    if (arr.length > 1000000) return;

    let answer = [];

    // make new array if it is not continuous
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] !== arr[i + 1]) answer.push(arr[i]);
    }

    return answer;
}

solution(arr);