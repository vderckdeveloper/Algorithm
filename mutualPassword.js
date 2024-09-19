const s = "aukks";
const skip = "wbqd";
const index = 5;

function solution(s, skip, index) {
    if (s.length < 5 || s.length > 50) return;
    if (skip.length < 1 || skip.length > 10) return;
    if (index < 1 || index > 20) return;

    // alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // skipped index list
    const skippedIndexList = [];

    let answer = '';

    // create skipped index list
    for (let i = 0; i < skip.length; i++) {
        const eachLetter = skip.charAt(i);
        const eachLetterIndex = alphabet.indexOf(eachLetter);
        skippedIndexList.push(eachLetterIndex);
    }

    // process each letter
    for (let j = 0; j < s.length; j++) {
        const eachLetter = s.charAt(j);
        let currentLetterIndex = alphabet.indexOf(eachLetter);

        let steps = 0;

        // skip alphabets by moving each index distance 
        while (steps < index) {
            currentLetterIndex = (currentLetterIndex + 1) % 26; // alphabet circulation
            
            if (!skippedIndexList.includes(currentLetterIndex)) {
                steps++;
            }
        }

        // change letter
        const goalLetter = alphabet[currentLetterIndex];
        answer += goalLetter;
    }
    return answer;
}

solution(s, skip, index);