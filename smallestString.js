const t = "3141592";
const p = "271";

function solution(t, p) {
    if (p.length < 1 || p.length > 18) return;
    if (t.length < p.length || t.length > 10000) return;

    const numberList = [];

    // make number list
    for (let i = 0; i < t.length; i++) {

        let numberMade = '';
        for (let j = 0; j < p.length; j++) {
            let eachNumber = t.charAt(i+j);
            numberMade += eachNumber; 
        }

        if (numberMade.length === p.length) {
            const numberMadeInt = parseInt(numberMade); 
            numberList.push(numberMadeInt);
        }
    }

    const pInt = parseInt(p);

    let answer = 0;

    // compare number list
    numberList.map(item => {
        if(item <= pInt) {
            answer++;
        }
    })
    return answer;
}

solution(t, p);