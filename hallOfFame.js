const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

function findSmallestNumber(k, score) {
    let scoreBoardArray = [];

    const answerListArray = [];

    score.forEach(item => {
        scoreBoardArray.push(item)

        let minNumber = Math.min(...scoreBoardArray);

        if (scoreBoardArray.length > k) {
            const index = scoreBoardArray.indexOf(minNumber);
            if (index !== -1) {
                scoreBoardArray.splice(index, 1);
            }
        }

        minNumber = Math.min(...scoreBoardArray);

        answerListArray.push(minNumber);
    });

    return answerListArray;
}

function solution(k, score) {
    if (k < 3 || k > 100) return;
    if (score.length < 7 > score.length > 1000) return;

    let answer = findSmallestNumber(k, score);

    return answer;
}

solution(k, score);