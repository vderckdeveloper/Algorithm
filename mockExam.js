const answers = [1, 2, 3, 4, 5];

function solution(answers) {
    const studentOne = [1, 2, 3, 4, 5];
    const studentTwo = [2, 1, 2, 3, 2, 4, 2, 5];
    const studentThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let studentOneAnswerCount = 0;
    let studentTwoAnswerCount = 0;
    let studentThreeAnswerCount = 0;

    // answer
    const answer = [];

    // answer count for student one
    for (let i = 0; i < answers.length; i++) {
        const designatedAnswer = answers[i];
        const studentAnswer = studentOne[i % studentOne.length]; // 패턴이 반복되도록 설정
        if (designatedAnswer === studentAnswer) studentOneAnswerCount++;
    }

    // answer count for student two
    for (let j = 0; j < answers.length; j++) {
        const designatedAnswer = answers[j];
        const studentAnswer = studentTwo[j % studentTwo.length]; // 패턴이 반복되도록 설정
        if (designatedAnswer === studentAnswer) studentTwoAnswerCount++;
    }


    // answer count for student three
    for (let k = 0; k < answers.length; k++) {
        const designatedAnswer = answers[k];
        const studentAnswer = studentThree[k % studentThree.length]; // 패턴이 반복되도록 설정
        if (designatedAnswer === studentAnswer) studentThreeAnswerCount++;
    }

    // max score
    const maxScore = Math.max(studentOneAnswerCount, studentTwoAnswerCount, studentThreeAnswerCount);

    // insert student answer count into array
    if(studentOneAnswerCount === maxScore) answer.push(1);
    if(studentTwoAnswerCount === maxScore) answer.push(2);
    if(studentThreeAnswerCount === maxScore) answer.push(3);

    return answer;
}

solution(answers);