const nums = [1, 2, 3, 4];

function solution(nums) {
    if (nums.length < 3 || nums.length > 50) return;

    // sum of number list
    const sumOfNumerList = [];

    // calculate all the combinations of 3 different numbers;
    for (let i = 0; i < nums.length; i++) {
        // first num
        const firstNum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            // second num
            const secondNum = nums[j];
            for (let k = j + 1; k < nums.length; k++) {
                // third num
                const thirdNum = nums[k];
                // sum
                const sum = firstNum + secondNum + thirdNum;
                // sum of number list
                sumOfNumerList.push(sum);
            }
        }
    }

    let answer = 0;

     // find decimal
     for (let l = 0; l < sumOfNumerList.length; l++) {
        const eachNum = sumOfNumerList[l];
        let isPrime = true;
        if (eachNum < 2) {
            isPrime = false;
        } else {
            for (let m = 2; m <= Math.sqrt(eachNum); m++) {
                if (eachNum % m === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            answer++;
        }
    }

    return answer;
}

solution(nums);