const a = 2;
const b = 1;
const n = 20;

function solution(a, b, n) {
    // empty bottle
    let emptyBottle = n;
    // totla bottle received
    let totalBottleReceived = 0;

    while (emptyBottle >= a) {
        // calculate how many changed bottle can be received for each occurence
        const changedBottle = Math.floor(emptyBottle / a) * b;

        // bottle left after exchange
        const leftBottle = emptyBottle % a;

        // update total bottle received
        totalBottleReceived += changedBottle;

        // make empty bottle after drinking 
        const emptyBottleAfterDrinking = changedBottle;

        // add left bottle from exchange and empty bottle after drinking
        const totalEmptyBottle = leftBottle + emptyBottleAfterDrinking;

        // update empty bottle
        emptyBottle = totalEmptyBottle;
    }
    return totalBottleReceived;
}

solution(a, b, n);