const number = [-2, 3, 0, 2, -5];

function solution(number) {
    let answer = 0;

     // Check if the sum of any three numbers is zero
     for(let i = 0; i < number.length - 2; i++) {
        const firstNum = number[i];
        
        for (let j = i + 1; j < number.length - 1; j++) {
            const secondNum = number[j];
    
            for (let k = j + 1; k < number.length; k++) {
                const thirdNum = number[k];

                if (firstNum + secondNum + thirdNum === 0) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

solution(number);