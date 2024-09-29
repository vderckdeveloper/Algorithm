const s = '1234';

function solution(s) {    
    // condition
    if (s.length < 1 || s.length > 8) return;
    if (s.length !== 4 && s.length !== 6) return false;
    // check if element is number type
    const number = '0123456789';
    let count = 0;
    while(count < s.length) {
        if (!number.includes(s[count])) return false; 
        count ++;
    }
    return true;
}

solution(s);