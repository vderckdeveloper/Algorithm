const seoul = ["Jane", "Kim"];

function solution(seoul) {
    // condition
    if (seoul.length < 1 || seoul.length > 1000) return;

    const index = seoul.findIndex(item => item === 'Kim');
    return `김서방은 ${index}에 있다`;
}

solution(seoul);