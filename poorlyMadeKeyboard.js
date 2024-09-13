const keymap = ["ABACD", "BCEFD"];
const targets = ["ABCD", "AABB"];

function solution(keymap, targets) {
    // condition
    if (keymap.length < 1 || keymap.length > 100) return;
    if (targets.length < 1 || targets.length > 100) return;

    let answer = [];

    // key map index
    const keymapIndexWithOptimizedPath = new Map();

    // key map
    keymap.forEach(keymapItem => {
        // condition
        if (keymapItem.length < 1 || keymapItem.length > 100) return;

        // key map item
        for (let i = 0; i < keymapItem.length; i++) {
            // each letter
            const eachLetter = keymapItem.charAt(i);
            // prev letter typing count
            const prevLetterTypingCount = keymapIndexWithOptimizedPath.get(eachLetter);
            // current letter typing count
            const currentLetterTypingcount = i + 1;
            // prev letter typing count
            if (!prevLetterTypingCount || currentLetterTypingcount < prevLetterTypingCount) {
                keymapIndexWithOptimizedPath.set(eachLetter, currentLetterTypingcount);
            }
        }
    });

    targets.forEach((targetsItem, targetsItemIndex) => {
        // condition
        if (targetsItem.length < 1 || targetsItem.length > 100) return;

        // initial value
        let initialValue = 0;

        // targets item
        for (let i = 0; i < targetsItem.length; i++) {
            // each letter
            const eachLetter = targetsItem.charAt(i);
            // find letter from the key map index with optimized path
            const keymapIndex = keymapIndexWithOptimizedPath.get(eachLetter);

            // if key map index exist, add value to an answer
            if (keymapIndex) {
                initialValue = keymapIndex + initialValue;
                answer[targetsItemIndex] = initialValue;
                // if not break
            } else {
                answer[targetsItemIndex] = -1;
                break;
            }
        }
    });

    return answer;
}


solution(keymap, targets);