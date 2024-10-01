const d = [2,2,3,3];
const budget = 10;

function solution(d, budget) {
    // condition
    if (d.length < 1 || d.length > 100) return;

    // copy budget
    let copiedBudget = budget;

    // sort d in ascending order
    d.sort((a, b) => a -b);

    // count the maxium number of departments to buy items for
    let count = 0;
    while (count < d.length) {
        if (copiedBudget >= d[count]) copiedBudget -= d[count];
        else break;
        count++;
    }

    return count;
}

solution(d, budget);