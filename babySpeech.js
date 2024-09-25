const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]

function solution(babbling) {
    const babyWords = ["aya", "ye", "woo", "ma"];

    let answer = 0;

    babbling.forEach(item => {
        // validity
        let isValid = true;
        
        // check if words are repeated
        babyWords.forEach(babyWord => {
            if (item.includes(babyWord.repeat(2))) {
                isValid = false;
            }
        });

        if (isValid) {
            let modifiedItem = item;
            // remove valid pronuncation one by one
            babyWords.forEach(babyWord => {
                modifiedItem = modifiedItem.split(babyWord).join(" ");
            });

            // if no string is left, then counts as an answer
            if (modifiedItem.trim() === "") {
                answer++;
            }
        }
    });

    return answer;
}

solution(babbling);