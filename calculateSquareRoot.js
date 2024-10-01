const n = 121;

function solution(n) {
    // condition
    if (n < 1 || n > 50000000000000) return;

    // square root
    const squareRoot = Math.sqrt(n);

    if (squareRoot % 1 === 0) return Math.pow(squareRoot + 1, 2); // if square root is integer, return sqaure of (square root + 1)
    else return -1; // if squrae root is not an integer, return -1
}

solution(n);