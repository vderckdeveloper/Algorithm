const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    // condition
    if (n < 1 || n > 16) return;
    const arrOneMap = arr1.map(item => item.toString(2).padStart(n, '0'));
    const arrTwoMap = arr2.map(item => item.toString(2).padStart(n, '0'));

    // overwrapped map
    const overwrappedMap = arrOneMap.map(oneLocation => {
        const location = arrTwoMap.map(twoLocation => {
             if (oneLocation === '1' || twoLocation === '1') return '#';
             else return ' '; 
        }); 
        return location;
    });

}

solution(n, arr1, arr2);