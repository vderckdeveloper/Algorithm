const unorganizedArray = [3,4,0,1,2,4,2,4];
const k =  4;

let count = []; 
let result = [];
for (let i = 0; i <= k; i++) { // 모든 숫자의 개수를 일단 0으로 초기화합니다.
  count[i] = 0;
}

for (let j = 0; j < unorganizedArray.length; j++) { // 숫자의 개수를 세어 저장합니다.
  count[unorganizedArray[j]] += 1;
}

for (i = 0; i < k ; i++) { // 누적합을 구합니다.
  count[i + 1] += count[i];
}

for (j = 0; j < unorganizedArray.length; j++) { // 누적합이 가리키는 인덱스를 바탕으로 결과에 숫자를 집어넣습니다.wW
  result[count[unorganizedArray[j]] - 1] = unorganizedArray[j];
  count[unorganizedArray[j]] -= 1;
}
