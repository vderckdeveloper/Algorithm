const arr1 = [[1, 2], [2, 3]];
const arr2 = [[3, 4], [5, 6]];

function solution(arr1, arr2) {
    // answer
    const answer = [];

    // calculate procession number
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = [];
        const firstProcessionLength = arr1[0].length;
        for (let j = 0; j < firstProcessionLength; j++) {
            const sum = arr1[i][j] + arr2[i][j];
            answer[i].push(sum);
        }
    }

    return answer;
}

solution(arr1, arr2);