const s = 'abcde';

// return middle string
function solution(s) {
    const lengthOfS = s.length;
    if (lengthOfS < 1 || lengthOfS > 100) return;

    // divider, remainder
    const divider = lengthOfS / 2;
    const remainder = lengthOfS % 2;

    // in case the length of s is even
    if (remainder === 0) {  
        return s[divider - 1] + s[divider];
        // in case the length of s is odd
    } else {
        const flooeredDivider = Math.floor(divider);
        return (s[flooeredDivider]);
    }
}

solution(s);