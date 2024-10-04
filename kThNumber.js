const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
    // condition
    if (array.length < 1 || array.length > 100) return;
    if (commands.length < 1 || commands.length > 50) return;

    let answer = commands.map(
        item => {
            const copiedArray = [...array];
            const splicedArray = copiedArray.slice(item[0] - 1, item[1]);
            splicedArray.sort((a,b) => a - b);
            const number = splicedArray[item[2]-1];
            return number;
        }
    );

    return answer;
}

solution(array, commands);