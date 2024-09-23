const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

function solution(k, m, score) {
    if (k < 3 || k > 9) return;
    if (m < 3 || m > 10) return;
    if (score.length < 7 || score.length > 1000000) return;

    // Sort the array in descending order
    score.sort((a, b) => b - a);

     // Sum for the score
     let answer = 0;

     // Iterate over the score array in steps of 'm'
     for (let i = 0; i + m <= score.length; i += m) {
         // Cache the minimum number in this batch and add it to the result
         answer += score[i + m - 1] * m;
     }

    return answer;
}

solution(k, m, score);