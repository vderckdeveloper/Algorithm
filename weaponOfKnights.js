const number = 5;
const limit = 3;
const power = 2;
const result = 10;

// add all the power 
function addPower(greatestCommonDivisorListWithLimit) {
    const sum = greatestCommonDivisorListWithLimit.reduce((accumulator, currentNumber) => accumulator + currentNumber);
    return sum;
}

// calculate greatest common divisor and make new array
function greatestCommonDivisor(numberListOfKnights, limit, power) {
    const greatestCommonDivisorListWithLimit = [];

    numberListOfKnights.forEach(item => {
        let count = 0;
        const sqrtItem = Math.sqrt(item);
        for (let i = 1; i <= sqrtItem; i++) {
            if (item % i === 0) {
                count++; // count the divisor i
                if (i !== item / i) {
                    count++; // count the corresponding divisor
                }
            }
        }

        if (count > limit) count = power;
        greatestCommonDivisorListWithLimit.push(count);
    });

    return greatestCommonDivisorListWithLimit;
}

// assign each number to a new array
function assignEachNumber(number) {
    const numberListOfKnights = [];
    for (let i = 0; i < number; i++) {
        numberListOfKnights.push(i + 1);
    }
    return numberListOfKnights;
}

function solution(number, limit, power) {
    // condition
    if (number < 1 || number > 100000) return;
    if (limit < 2 || limit > 100) return;
    if (power < 1 || power > limit) return;

    const numberListOfKnights = assignEachNumber(number);
    const greatestCommonDivisorList = greatestCommonDivisor(numberListOfKnights, limit, power);
    const answer = addPower(greatestCommonDivisorList);
    return answer;
}

solution(number, limit, power);