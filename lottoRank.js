const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

// return ranking for the number of match
function rankingForMatch(number) {
    switch (number) {
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
}

function solution(lottos, win_nums) {
    // condition
    if (lottos.length !== 6) return;
    if (win_nums.length !== 6) return;

    let matchedNumberCount = 0;
    let zeroNumberCount = 0;

    // calculate matched number occurence
    win_nums.map(winNum => {
        // count matched number
        const matchedNumber = lottos.find(myNum => myNum === winNum);

        // increment min rank count
        if (matchedNumber) matchedNumberCount++;
    });

    // calculate zero number occurence
    lottos.forEach(myNum => {
        if (myNum === 0) zeroNumberCount++;
    });

    // max rank, min rank
    const maxRank = rankingForMatch(matchedNumberCount + zeroNumberCount);
    const minRank = rankingForMatch(matchedNumberCount);

    let answer = [maxRank, minRank];

    return answer;
}

solution(lottos, win_nums);