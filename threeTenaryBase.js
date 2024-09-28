const n = 45;

function solution(n) {
    if (n < 1 || n > 100000000) return;

    let numberStr = n.toString(3);

    // turn into 3 decimal
    let reversedTenary = '';
    for (let i = 0; i < numberStr.length; i++) {
        reversedTenary += numberStr[numberStr.length - (i + 1)];
    }

    // calculate number in 10 decimal
    let answer = 0;
    for (let j = 0; j < reversedTenary.length; j++) {
        const numberOfDigits = reversedTenary.length;
        calculation = reversedTenary[j] * Math.pow(3, numberOfDigits - (j + 1));
        answer += calculation;
    }

    return answer;
}

solution(n);