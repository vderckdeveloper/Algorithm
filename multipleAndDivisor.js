const n = 3;
const m = 12;

function solution(n, m) {
    // condition
    if (n < 1 || n > 1000000) return;
    if (m < 1 || m > 1000000) return;

    const maxNum = Math.max(n, m);
    const minNum = Math.min(n, m);

    const maxNumDivisor = [];
    const minNumDivisor = [];

    // max num divisor 
    for (let i = 1; i <= maxNum; i++) {
        if (maxNum % i === 0) maxNumDivisor.push(i);
    }

    // min num divisor
    for (let j = 1; j <= minNum; j++) {
        if (minNum % j === 0) minNumDivisor.push(j);
    }

    // find greatest divisor
    let greatestDivisor = 1;
    for (let k = 0; k < maxNumDivisor.length; k++) {
        const divisorFromMax = maxNumDivisor[k];

        for (let l = 0; l < minNumDivisor.length; l++) {
            const divisorFromMin = minNumDivisor[l];

            if(divisorFromMax === divisorFromMin && divisorFromMax > greatestDivisor) {
                greatestDivisor = divisorFromMax;
            } 
        }
    }

    // find least common multiple
    const leastCommonMultiple = n*m / greatestDivisor;

    return [greatestDivisor, leastCommonMultiple];
}

solution(n, m);