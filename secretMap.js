const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    // condition
    if (n < 1 || n > 16) return;

    // Convert each number in arr1 and arr2 to binary strings, pad them, and split into arrays
    const arrOneMap = arr1.map(item => item.toString(2).padStart(n, '0').split(""));
    const arrTwoMap = arr2.map(item => item.toString(2).padStart(n, '0').split(""));

    // Combine the two maps
    const overwrappedMap = arrOneMap.map((oneLocationLine, index) => {
        const twoLocationLine = arrTwoMap[index];
        const location = oneLocationLine.map((oneLocationElement, idx) => {
            const twoLocationElement = twoLocationLine[idx];
            if (oneLocationElement === '1' || twoLocationElement === '1') return '#';
            else return ' ';
        });
        return location.join('');
    });

    return overwrappedMap;
}

solution(n, arr1, arr2);