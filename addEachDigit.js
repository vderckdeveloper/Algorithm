const N = 123;

function solution(N) {
    // condition
    if (N < 1 || N > 100000000) return;

    // stringify N
    const Nstr = N.toString();

    // sum
    let answer = 0;

    let count = 0;
    // calculate sum of each digit
    while (count < Nstr.length) {
        const digit = Nstr[count];
        const number = parseInt(digit);
        answer += number;
        count++;
    }
    return answer;
}

solution(N);