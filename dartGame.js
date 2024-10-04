const dartResult = '1S2D*10T';

function bonusAndOptionCalculator(score, bonus, option) {
    let originalScore = score;
    let calculatedScore;

    // calculate bonus
    switch (bonus) {
        case 'S':
            calculatedScore = Math.pow(originalScore, 1);
            break;
        case 'D':
            calculatedScore = Math.pow(originalScore, 2);
            break;
        case 'T':
            calculatedScore = Math.pow(originalScore, 3);
            break;
        default:
            calculatedScore = originalScore;
            break;
    }

    // calculate option
    if (option === '*') {
        calculatedScore *= 2;
    } else if (option === '#') {
        calculatedScore *= -1;
    }

    return calculatedScore;
}

function solution(dartResult) {
    // use regex to divide score, bonus, option
    const regex = /(\d{1,2})([SDT])([*#]?)/g;
    const matches = [];

    let match;
    while ((match = regex.exec(dartResult)) !== null) {
        matches.push(match);
    }

    const scores = [0, 0, 0];

    // calculate for each opportunity
    for (let i = 0; i < matches.length; i++) {
        const score = parseInt(matches[i][1], 10);
        const bonus = matches[i][2];
        const option = matches[i][3];

        scores[i] = bonusAndOptionCalculator(score, bonus, option);

        // double the score if there's a start point
        if (option === '*' && i > 0) {
            scores[i - 1] *= 2;
        }
    }

    // 총합 계산
    return scores.reduce((acc, curr) => acc + curr, 0);
}

solution(dartResult);