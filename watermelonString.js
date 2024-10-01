const n = 3;

function solution(n) {
    if (n > 10000) return;

    let answer = '';

    // structure word
    for(let i = 1 ; i < n + 1; i++) {
        if (i % 2 === 0) answer += '박';
        else answer += '수';
    }

    return answer;
}

solution(3);


