const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
    // condition
    if (price < 1 || price > 2500) return;
    if (money < 1 || money > 1000000000) return;
    if (count < 1 || count > 2500) return;

    // total price
    let totalPrice = 0;

    // calculate total price to pay
    for (let i = 0; i < count; i++) {
        totalPrice += price * (i + 1);
    }

    // money left
    const moneyLeft = totalPrice - money > 0 ? totalPrice - money : 0;

    return moneyLeft;
}

solution(price, money, count);