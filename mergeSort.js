const unorganizedArray = [5, 2, 4, 7, 6, 1, 3, 8];

function mergeSort(array) {
    // 원소가 하나일때는 그대로 리턴한다.
    if (array.length < 2) return array;

    // 배열을 반으로 나눈다.
    const pivot = Math.floor(array.length / 2); 
    const left = array.slice(0, pivot); 
    const right = array.slice(pivot, array.length);
    
    // 재귀적으로 나누고 합친다.
    return merge(mergeSort(left), mergeSort(right)); 
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) { // 두 배열의 첫 원소를 비교하여
        result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
      } else {
        result.push(right.shift()); // 오른쪽도 마찬가지
      }
    }

    while (left.length) result.push(left.shift()); // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
    while (right.length) result.push(right.shift()); // 오른쪽도 마찬가지

    return result;
};


const sortedArray = mergeSort(unorganizedArray);

