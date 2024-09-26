const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

function comparePersonalityScore(scoreList) {
    let result = '';

    const R = scoreList['R'];
    const T = scoreList['T'];
    const C = scoreList['C'];
    const F = scoreList['F'];
    const J = scoreList['J'];
    const M = scoreList['M'];
    const A = scoreList['A'];
    const N = scoreList['N'];

    if (R >= T) result += 'R'; else result += 'T';
    if (C >= F) result += 'C'; else result += 'F';
    if (J >= M) result += 'J'; else result += 'M';
    if (A >= N) result += 'A'; else result += 'N';

    return result;
}

function calculatePoint(eachSurvey, eachChoice, scoreList) {
    // character 
    const firstCharacter = eachSurvey[0];
    const secondCharactor = eachSurvey[1];

    switch (eachChoice) {
        case 1:
            scoreList[firstCharacter] = scoreList[firstCharacter] + 3;
            break;
        case 2:
            scoreList[firstCharacter] = scoreList[firstCharacter] + 2;
            break;
        case 3:
            scoreList[firstCharacter] = scoreList[firstCharacter] + 1;
            break;
        case 5:
            scoreList[secondCharactor] = scoreList[secondCharactor] + 1;
            break;
        case 6:
            scoreList[secondCharactor] = scoreList[secondCharactor] + 2;
            break;
        case 7:
            scoreList[secondCharactor] = scoreList[secondCharactor] + 3;
            break;
    }
}

function solution(survey, choices) {
    if (survey.length < 1 || survey.length > 1000) return;
    if (survey.length !== choices.length) return;

    // score list for each character
    const scoreList = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0, };

    // calculate each score
    for (let i = 0; i < choices.length; i++) {
        const eachSurvey = survey[i];
        const eachChoice = choices[i];

        calculatePoint(eachSurvey, eachChoice, scoreList);
    }

    // compare personality score
    const answer = comparePersonalityScore(scoreList);

    return answer;
}

solution(survey, choices);