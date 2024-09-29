const s = "Zbcdefg";

function solution(s) {
    // condition
    if (s.length < 1) return;

    // turn string into array
    const stringArray = s.split("");

    // organize array in descending order
    stringArray.sort((a,b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    });

    // turn array into string
    return stringArray.join("");
}

solution(s);