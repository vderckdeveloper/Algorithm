const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

/***
 * hand to use for pressing center key pad. accepts key, lefthand, righthand, hand.
 * @param {number} key key to press
 * @param {number} leftHandPosition left hand position
 * @param {number} rightHandPosition right hand position
 * @param {number} hand hand
 * @returns returns hand being used to press the key
 */
function handToUseForCenterKeypad(key, leftHandPosition, rightHandPosition, hand) {
    // key pad
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    // hand distance
    const leftHandDistance = Math.abs(keypad[leftHandPosition][0] - keypad[key][0]) + Math.abs(keypad[leftHandPosition][1] - keypad[key][1]);
    const rightHandDistance = Math.abs(keypad[rightHandPosition][0] - keypad[key][0]) + Math.abs(keypad[rightHandPosition][1] - keypad[key][1]);

    // if left hand distance and the right hand distance is same, return main hand
    if (leftHandDistance === rightHandDistance) {
        return hand === 'left' ? 'L' : 'R';
    } else if (leftHandDistance > rightHandDistance) {
        return 'R';
    } else {
        return 'L';
    }
}

function solution(numbers, hand) {
    // condition
    if (numbers.length < 1 || numbers.length > 1000) return;

    // key pad
    const leftKeyPad = [1, 4, 7];
    const rightKeyPad = [3, 6, 9];

    // position of hand
    let leftHandPosition = '*';
    let rightHandPosition = '#';

    // construct hands array
    const handsArray = numbers.map(key => {
        if (leftKeyPad.includes(key)) {
            leftHandPosition = key;
            return 'L';
        } else if (rightKeyPad.includes(key)) {
            rightHandPosition = key;
            return 'R';
        } else {
            const handUsed = handToUseForCenterKeypad(key, leftHandPosition, rightHandPosition, hand);
            handUsed === 'L' ? leftHandPosition = key : rightHandPosition = key;
            return handUsed;
        }
    });

    return handsArray.join("");
}

solution(numbers, hand);
