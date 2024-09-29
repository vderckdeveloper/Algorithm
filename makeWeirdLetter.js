const s = "try hello world";

function solution(s) {
    const wordList = s.split(" ");

    const wordArray = wordList.map(word => {
        const wordLength = word.length;

        let newWord = '';
        for (let i = 0; i < wordLength; i++) {
            if (i === 0 || i % 2 === 0) newWord += word[i].toUpperCase();
            else newWord += word[i].toLowerCase();
        }

        return newWord;
    });

    let answer = wordArray.join(" ");
    return answer;
}

solution(s);