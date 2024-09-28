const X = '100';
const Y = '2345';

function solution(X, Y) {
    // Condition checks
    if (X.length < 3 || X.length > 3000000) return;
    if (Y.length < 3 || Y.length > 3000000) return;
    if (X[0] === '0') return;
    if (Y[0] === '0') return;

    let copiedX = X;
    let copiedY = Y;

    // Initialize arrays to store the count of each digit
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);

    // Count the occurrences of each digit in X
    for (let i = 0; i < copiedX.length; i++) {
        const digit = parseInt(copiedX[i]);
        countX[digit]++;
    }

    // Count the occurrences of each digit in Y
    for (let i = 0; i < copiedY.length; i++) {
        const digit = parseInt(copiedY[i]);
        countY[digit]++;
    }

    // Array to store the common digits
    const coupleNumber = [];

    // Find common digits from 9 to 0
    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(countX[i], countY[i]);

        for (let j = 0; j < commonCount; j++) {
            coupleNumber.push(i);
        }
    }

    let answer = '';

    // Generate the result
    if (coupleNumber.length === 0) {
        // No common digits found
        answer = "-1";
    } else if (coupleNumber[0] === 0 && coupleNumber.every(item => item === 0)) {
        // All digits are zero
        answer = "0";
    } else {
        // Concatenate the digits to form the answer
        for (let i = 0; i < coupleNumber.length; i++) {
            answer += coupleNumber[i];
        }
    }

    return answer;
}

solution(X, Y);