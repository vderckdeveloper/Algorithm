const x = 10;

function solution(x) {
    const xStr = x.toString();  // stringify x
    const sumOfDigits = xStr.split("").reduce((cum, cur) => parseInt(cum) + parseInt(cur)); // calculate sum of digits
    return x % sumOfDigits === 0 ? true : false; 
}

solution(x);