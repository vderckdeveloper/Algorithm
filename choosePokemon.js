const nums = [3,1,2,3];

function solution(nums) {
    // condition
    if (nums.length < 1 || nums.length > 10000) return;    

    // the number of pokemon to pick
    const pickNum = nums.length/2;

    // make non over-wrapped pokemon list
    const set = new Set([...nums]);
    const array = [...set];

    // calculate the maximum number of pokemon combination
    let answer = array.length > pickNum ? pickNum : array.length;
    return answer;
}

solution(nums);