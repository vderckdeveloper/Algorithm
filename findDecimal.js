const n = 10;

function solution(n) {
    // condition
    if (n < 2 || n > 1000000) return;

    const decimalList = [];

    // number to divide
    for (let i = 2; i < n + 1; i++) {

        let dividerCount = 0;
        // number to become a divider
        for (let j = 2; j < n + 1; j++) {
            if (i !== j && i % j === 0) {
                dividerCount++;
            }
        }

        if (dividerCount === 0) decimalList.push(i); 
    }
    
    const answer = decimalList.length;
    return answer;
}

solution(n);