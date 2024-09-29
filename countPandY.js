const s = "pPoooyY";

function solution(s) {
    // condition
    if (s.length > 50) return;

    let pNum = 0;
    let yNum = 0;

    // compare p and y. switch every p and y to lower case
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() === 'p') pNum++;
        if (s[i].toLowerCase() === 'y') yNum++;
    }

    if (pNum === yNum) return true;
    else return false;
}

solution(s);