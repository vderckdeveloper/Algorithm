const strings = ["abce", "abcd", "cdx"];
const n = 2;

function solution(strings, n) {
    // sort strings by the standard
    return strings.sort((a, b) => {
        // compare Nth Char
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        // if a === b, then compare the unicode
        if (a.toString() > b.toString()) return 1;
        if (a.toString() < b.toString()) return -1;
    });
}

solution(strings, n);