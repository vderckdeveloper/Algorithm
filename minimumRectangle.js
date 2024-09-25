const sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];

function solution(sizes) {
    if (sizes.length < 1 || sizes.length > 10000) return;

    // width, height array
    const widthArray = [];
    const heightArray = [];

    // measure size 
    sizes.map(item => {
        let width = item[0];
        let height = item[1];

        // rotate if height is bigger than width
        if (height > width) {
            const temp = width;
            const rotatedWidth = height;
            const rotatedHeight = temp;

            // push elements into width array
            widthArray.push(rotatedWidth);
            // push elements into height array
            heightArray.push(rotatedHeight);
        } else {
            // push elements into width array
            widthArray.push(width);
            // push elements into height array
            heightArray.push(height);
        }
    });

    // sort width by descending order
    widthArray.sort((a, b) => b - a);
    // sort height by descending order
    heightArray.sort((a, b) => b - a);

    // max width, max height
    const maxWidth = widthArray[0];
    const maxHeight = heightArray[0];

    // calculate answer
    var answer = maxWidth * maxHeight;

    return answer;
}

solution(sizes);