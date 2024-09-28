const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution(absolutes, signs) {
    // condition
    if (absolutes.length < 1 || absolutes.length > 1000) return;
    if (signs.length !== absolutes.length) return;

    // calculate
    for (let i = 0; i < absolutes.length; i++) {
        // absolute num, sign value
        let absoluteNum = absolutes[i];
        const signValue = signs[i];

        // switch sign value
        if (!signValue) absoluteNum = -absoluteNum;

        // insert absolute num into absolute array
        absolutes[i] = absoluteNum;
    }

    // calculate sum
    const answer = absolutes.reduce((sum, cur) => sum + cur, 0);

    return answer;
}

solution(absolutes, signs);