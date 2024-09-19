const s = "banana";

function solution(s) {
    if (s.length < 1 || s.length > 10000) return;

    let answer = [];

    for (let i = 0; i < s.length; i++) {
        // first letter
        if (i === 0) {
            answer.push(-1);
            continue;
        }

        let letterList = '';

        // after second letter
        for (let j = 0; j < i; j++) {
            const prevLetter = s.charAt(j);
            letterList += prevLetter;
        }

        // search last index 
        const currentLetter = s.charAt(i);

        // matched letter index
        const matchedLetterIndex = letterList.lastIndexOf(currentLetter);

        // if there is no match, insert -1
        if(matchedLetterIndex === -1) {
            answer.push(-1);
            // if there is match, insert the distance between
        } else {
            const distance = i - matchedLetterIndex;
            answer.push(distance);
        }
    }
    return answer;
}

solution(s);