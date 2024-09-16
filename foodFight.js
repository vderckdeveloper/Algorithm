const food = [1, 3, 4, 6];
const result = "1223330333221";

function solution(food) {
    if (food.length < 2 || food.length > 10) return;

    let answer = '0';

    const foodIndexMap = new Map();
    food.forEach((item, index) => {
        const preparedNum = item % 2 > 0 ? item - 1 : item;
        foodIndexMap.set(index, preparedNum);
    });

    const numberOfFood = foodIndexMap.size - 1;

    for (let i = 0; i < numberOfFood; i++) {
        const foodRetrival = foodIndexMap.get(numberOfFood-i);
        for (let j = 0; j < foodRetrival / 2; j++) {
            answer = (numberOfFood-i) + answer + (numberOfFood-i);
        }
    }

    return answer;
}

solution(food);