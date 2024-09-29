const n = 6;

function solution(n) {
    // condition
    if (n < 1 || n > 8000000) return;

    // return 0 if given number is 1
    if (n === 1) return 0;

    let number = n;

    let count = 0;
    // calculate count
    for (let i = 1; i <= Infinity; i++) {
        if (count === 500) return -1; // if count is 500, return -1
        if (number === 1) return count; // if number is 1, return count
        // if number is even, multiply it with 2
        if (number % 2 === 0) {
            number = number / 2
            // if number is odd, multiple it with 3 and add 1
        } else {
            number = number * 3 + 1;
        }
        count++;
    }
}

solution(n);