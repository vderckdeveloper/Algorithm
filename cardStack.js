const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];


function solution(cards1, cards2, goal) {
    // condition
    if (cards1.length < 1 || cards1.length > 10) return;
    if (cards2.length < 1 || cards2.length > 10) return;
    if (goal.length < 2 || goal.length > (cards1.length + cards2.length)) return;

    const match = [];

    let answer = '';

    for (let i =0; i < goal.length; i ++) {
        const targetWord = goal[i];
        const lastIndex = goal.length - 1;
  
        if(targetWord === cards1[0]) {
            match.push(targetWord);
            cards1.shift();

            if (i === lastIndex) answer = 'Yes';

            continue;
        } 

        if(targetWord === cards2[0]) {
            match.push(targetWord);
            cards2.shift();

            if (i === lastIndex) answer = 'Yes';

            continue;
        }

        answer='No'
        break;
    }
  
    return answer;
}

solution(cards1, cards2, goal);