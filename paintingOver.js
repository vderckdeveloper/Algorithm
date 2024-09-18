const n = 8;
const m = 4;
const section = [2, 3, 6];
const result = 2;

function solution(n, m, section) {
    if (n < 0 || n > 100000) return;
    if (m < 0 || m > 100000) return;
    if (section.length < 1 || section.length > n) return;

    let count = 0; // This will track the number of paint applications
    let lastPainted = 0; // The last section that was fully painted

    for (let i = 0; i < section.length; i++) {
        if (section[i] > lastPainted) { 
            count++; // Apply paint
            lastPainted = section[i] + m - 1; // Update the last section painted by the roller

            // Ensure the roller doesn't go out of bounds
            if (lastPainted > n) {
                lastPainted = n;
            }
        }
    }

    let answer = count;

    return answer;
}

solution(n, m, section);