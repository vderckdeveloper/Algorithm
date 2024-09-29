const arr = [4,3,2,1, 8 ,7 ,5, 9];

function solution(arr) {
    // condition 
    if (arr.length < 1) return;
    if (arr.length === 1) return [-1];

    const copiedArray = [...arr];

    // sort in descending order and find number to filter
    const numberToFilter = copiedArray.sort((a,b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    }).pop();

    // filter array
    const filteredArray = arr.filter(item => item !== numberToFilter);
    return filteredArray;
}

solution(arr);