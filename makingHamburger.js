const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
    let answer = 0;

    const target = [1, 2, 3, 1];
    let stack = [];

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        // When the last 4 elements match '1231', remove them
        if (stack.length >= 4 &&
            stack[stack.length - 4] === target[0] &&
            stack[stack.length - 3] === target[1] &&
            stack[stack.length - 2] === target[2] &&
            stack[stack.length - 1] === target[3]) {

            // Remove the last 4 elements
            stack.splice(-4);
            answer++;
        }
    }

    return answer;
}

solution(ingredient);