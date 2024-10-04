const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

function solution(n, lost, reserve) {
    if (n < 2 || n > 30) return;
    if (lost.length < 1 || lost.length > n) return;
    if (reserve.length < 1 || reserve.length > n) return;

    // Sort the lost and reserve arrays to avoid conflicts during lending
    let actualLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b); // True lost students
    let actualReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b); // True reserve students

    // Try to lend clothes from reserve to lost students
    actualLost = actualLost.filter(l => {
        // Prioritize lending from the closest number first (lower first)
        const lendToLeft = actualReserve.indexOf(l - 1);
        const lendToRight = actualReserve.indexOf(l + 1);

        if (lendToLeft !== -1) {
            actualReserve.splice(lendToLeft, 1); // Remove the lender
            return false; // This student has received clothes
        } else if (lendToRight !== -1) {
            actualReserve.splice(lendToRight, 1); // Remove the lender
            return false; // This student has received clothes
        }

        return true; // This student still needs clothes
    });

    // Return the number of students who have clothes
    return n - actualLost.length;
}

solution(n,lost, reserve);