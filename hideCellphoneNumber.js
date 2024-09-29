const phone_number = '01033334444';

function solution(phone_number) {
    const phoneNumLength = phone_number.length;
    return phone_number.split("").map((item, index) => index < phoneNumLength - 4 ? '*' : item).join(""); // str => array => masking => str
}

solution(phone_number);