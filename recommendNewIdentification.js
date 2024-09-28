const new_id = 	"...!@BaT#*..y.abcdefghijklm";

function solution(new_id) {
    // condition
    if (new_id.length < 1 || new_id.length > 1000) return;

    // step 1
    const upperCaseId = new_id.toLowerCase();

    // step 2
    const allowedLetter = 'abcdefghijklmnopqrstuvwxyz0123456789-_.';
    let passedLetter = '';

    // step 2 detail - remove unnnecessary letter
    for (let i = 0; i < upperCaseId.length; i++) {
        const letter = upperCaseId.charAt(i);
        if (allowedLetter.includes(letter)) passedLetter += letter;
    }

    // step 3
    for (let j = 0; j < passedLetter.length; j++) {
        if (passedLetter[j] === '.' && passedLetter[j] === passedLetter[j + 1]) {
            passedLetter = passedLetter.slice(0, j) + passedLetter.slice(j + 1, passedLetter.length);
            j--;
        }
    }

    // step 4
    if (passedLetter[0] === '.') passedLetter = passedLetter.slice(1);
    if (passedLetter[passedLetter.length - 1] === '.') passedLetter = passedLetter.slice(0, -1);

    // step 5
    if (passedLetter === '') passedLetter = 'a';

    // step 6
    if (passedLetter.length >= 16) passedLetter = passedLetter.slice(0, 15);
    if (passedLetter[passedLetter.length - 1] === '.') passedLetter = passedLetter.slice(0, -1);

    // step 7
    let newLetter = passedLetter;
    for (let k = 0; k < 3 - passedLetter.length; k++) {
        const endLetter = passedLetter[passedLetter.length - 1];
        newLetter += endLetter;
    }

    return newLetter;
}

solution(new_id);