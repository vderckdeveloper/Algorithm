const s = 'z';
const n = 1;

function isCharSpace(char) {
    if (char === ' ') return true;
}

function isCharUpperCase(char) {
    if (char === char.toUpperCase()) return true;
}

function isCharLowerCase(char) {
    if (char === char.toLowerCase()) return true;
}

function solution(s, n) {
    // condition
    if (s.length > 8000) return;
    if (n < 1 || n > 25) return;

    // alphabet - upper case, lower case
    const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    let answer = '';

    // push back each letter
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // if char is empty space
        if (isCharSpace(char)) {
            answer += ' ';
            // if char is upper case
        } else if (isCharUpperCase(char)) {
            const originalIndex = uppercaseAlphabet.indexOf(char);
            const selectedLetter = originalIndex + n < 26 ? uppercaseAlphabet[originalIndex + n] : uppercaseAlphabet[originalIndex + n - 26];
            answer += selectedLetter;
            // if char is lower case
        } else {
            const originalIndex = lowercaseAlphabet.indexOf(char);
            const selectedLetter = originalIndex + n < 26 ? lowercaseAlphabet[originalIndex + n] : lowercaseAlphabet[originalIndex + n - 26];
            answer += selectedLetter;
        }
    }

    return answer;
}

solution(s, n);