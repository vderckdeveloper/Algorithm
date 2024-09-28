const a = [1,2,3,4];
const b = [-3,-1,0,2];

function solution(a, b) {
    if (a < 1 || a > 1000) return;
    if (b < 1 || b > 1000) return;
    // calculate inner product
    const answer =a.reduce((sum, _, i) => sum += a[i] * b[i], 0);
    return answer;
}

solution(a,b);