const unorganizedArray = [5, 1, 4, 7, 2, 6, 8, 3];

var minIndex, temp, i, j;
for (i = 0; i < unorganizedArray.length - 1; i++) {  
    minIndex = i;      
    for (j = i + 1; j < unorganizedArray.length; j++) { // 최솟값의 위치를 찾음
        if (unorganizedArray[j] < unorganizedArray[minIndex]) {
            minIndex = j;
        }
    }

    temp = unorganizedArray[minIndex];
    unorganizedArray[minIndex] = unorganizedArray[i];
    unorganizedArray[i] = temp;
}
