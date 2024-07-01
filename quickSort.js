const unorganizedArray = [4, 1, 7, 6, 3, 8, 2, 5];

// 정렬하는 함수
function partition(array, left, right, pivotIndex) {
    let temp;
    let pivot = array[pivotIndex];
    while (left <= right) { // 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어갑니다.
        while (array[left] < pivot)
            left++;
        while (array[right] > pivot)
            right--;
        if (left <= right) { // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면 서로 바꿔줍니다
            temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    // 마지막으로 기준과 만난 수를 바꿔줍니다. 기준의 위치는 이제 i입니다.
    temp = array[left];
    array[left] = array[pivotIndex];
    array[pivotIndex] = temp;
    return left;
}

// 퀵 정렬 함수
function quickSort(array, left, right) { // 재귀하는 부분
    if (!left) left = 0;
    if (!right) right = array.length - 1;
    let pivotIndex = right; // 배열 가장 오른쪽의 수를 기준으로 뽑습니다.
    pivotIndex = partition(array, left, right - 1, pivotIndex); // right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.
    if (left < pivotIndex - 1)
        quickSort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
    if (pivotIndex + 1 < right)
        quickSort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
    return array;
};

quickSort(unorganizedArray);
