const s = "one4seveneight";

function solution(s) {
    // condition
    if (s.length < 1 || s.length > 50) return;

    let sentence = s;

    // number, string array
    const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const stringArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    let i = 0;
    // convert string with number
    while(i < numberArray.length) {
        const word = stringArray[i];
        const number = numberArray[i];
        const regex = new RegExp(word, "g"); 
        sentence = sentence.replace(regex, number);
        i++;
    }

    // change string into number
    let answer = parseInt(sentence);

    // condition
    if(answer < 1 || answer > 2000000000) return;
    
    return answer;
}


solution(s);