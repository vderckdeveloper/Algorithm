const a = 3
const b = 5;

function solution(a, b) {
    let aValue = a;
    let bValue = b;

    // if two numbers are same return a
    if (a === b) return a;
    // if a is bigger than b, switch a and b
    if (a > b) {
        let temp = aValue
        aValue = bValue;
        bValue = temp;
    }

    // calculate the sum between
    let sum = 0;
    for (let i = aValue; i <= bValue; i++) {
        sum += i;
    }

    return sum;
}