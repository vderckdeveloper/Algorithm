const numbers = [1,2,3,4,6,7,8,0];

function solution(numbers) {
    let answer = 0;

    // all number
    const allNumbers = [0,1,2,3,4,5,6,7,8,9];

    for (let i = 0; i < 10; i++) {
        // check if numbers array includes all numbers element or not
        if(!numbers.includes(allNumbers[i])) {
            answer += allNumbers[i];
        } 
    }

    return answer;
}

solution(numbers);