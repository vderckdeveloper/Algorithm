const unorganizedArray = [5, 1, 7, 4, 6, 3, 2, 8];

// i 값만큼 j를 실행. 총 49번 값을 비교 하여 결과를 구한다 i => 7번 실행, j 7번 실행 7 x 7 = 49
for (let i = 0; i < unorganizedArray.length - 1; i++) {
    for (let j = 0; j < unorganizedArray.length - 1; j++) {
        const temp = unorganizedArray[j];
        if(unorganizedArray[j] > unorganizedArray[j+1]) {
            unorganizedArray[j] = unorganizedArray[j+1];
            unorganizedArray[j+1] = temp;
        }
    }
}
