const unorganizedArray = [125, 383, 274, 96, 0, 9, 81, 72];
const biggestDigit = 3;
let counter = [[]];

let mod = 10;
for (let i = 0; i < biggestDigit; i++, mod *= 10) { // mod는 현재 정렬 중인 자리수를 나타내는 것으로 10부터 해서 100, 1000, ...으로 커집니다.
    for (let j = 0; j < unorganizedArray.length; j++) {
        let bucket = parseInt(unorganizedArray[j] % mod); // 같은 그룹으로 묶일 나머지를 나타내는 부분입니다.
        if (counter[bucket] == null) {
            counter[bucket] = [];
        }
        counter[bucket].push(unorganizedArray[j]); // 나머지 별로 묶어줍니다.
    }

    let pos = 0;
    for (let j = 0; j < counter.length; j++) { // counter에 저장한 묶음들(나머지 순서로 정렬됨)을 실제 배열에 반영해줍니다.
        let value = null;
        if (counter[j] != null) {
            while ((value = counter[j].shift()) != null) {
                unorganizedArray[pos++] = value;
            }
        }
    }
}
