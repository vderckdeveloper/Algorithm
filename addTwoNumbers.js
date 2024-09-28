const numbers = [2, 1, 3, 4, 1];

function solution(numbers) {
    // condition
    if (numbers.length < 2 || numbers > 100) return;

    const answer = [];

    // make new array with the cases of two different number sum
    for (let i = 0; i < numbers.length; i++) {
        const firstNum = numbers[i];

        for (let j = 0; j < numbers.length - (i + 1); j++) {
            const secondNum = numbers[i + j + 1];
            const sum = firstNum + secondNum;
            if (!answer.includes(sum)) answer.push(sum);
        }
    }

    // sort array in aescending order
    answer.sort((a, b) => a - b);

    return answer;
}

solution(numbers);