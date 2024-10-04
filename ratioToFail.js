const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
const result = [3, 4, 2, 1, 5];

function solution(N, stages) {
    if (N < 1 || N > 500) return;
    if (stages.length < 1 || stages.length > 200000) return;

    const stageFailRatio = {};
    let usersRemaining = stages.length;

    // Calculate each stage fail ratio
    for (let i = 1; i <= N; i++) {
        const stageFailureFilter = stages.filter(item => item === i);
        const eachStageFailNumber = stageFailureFilter.length;
        const eachStageFailRatio = usersRemaining === 0 ? 0 : eachStageFailNumber / usersRemaining;
        stageFailRatio[i] = eachStageFailRatio;
        usersRemaining -= eachStageFailNumber;
    }

    // Sort stages by fail ratio in descending order, and by stage number in ascending order if equal
    const sortedStages = Object.keys(stageFailRatio)
        .sort((a, b) => stageFailRatio[b] - stageFailRatio[a] || a - b)
        .map(Number);

    return sortedStages;
}

solution(N, stages);