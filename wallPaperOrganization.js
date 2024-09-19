const wallpaper = [".#...", "..#..", "...#."];

function solution(wallpaper) {
    if (wallpaper.length < 1 || wallpaper.length > 50) return; // condition

    const locationArray = [];

    // wall paper length
    for (let i = 0; i < wallpaper.length; i++) {
        const wallPaperItem = wallpaper[i];
        if (wallpaper[i] > 1 || wallpaper[i] < 50) return; // condition

        // wall paper location
        for (let j = 0; j < wallPaperItem.length; j++) {
            const matchedLetter = wallPaperItem.charAt(j);
            if (matchedLetter === '#') {
                locationArray.push({ i, j });
            }
        }
    }

    // find point for left-upper, right bottom.
    let minRow = Infinity;
    let maxRow = -Infinity;
    let minCol = Infinity;
    let maxCol = -Infinity;

    locationArray.forEach(item => {
        const { i, j } = item;
        if (i < minRow) minRow = i;
        if (i > maxRow) maxRow = i;
        if (j < minCol) minCol = j;
        if (j > maxCol) maxCol = j;
    });

    let answer = [minRow, minCol, maxRow + 1, maxCol + 1];

    return answer;
}

solution(wallpaper);