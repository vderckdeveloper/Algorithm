const unorganizedArray = [5, 6, 1, 2, 4, 3];
let i = 1;
let j;
let temp;

// 두번째 칸부터 시작                   
for (i; i < unorganizedArray.length; i++) {
    // 숫자 선택
    temp = unorganizedArray[i]; //  선택 숫자 => 2  i =3  
    
    // 선택한 숫자가 정렬된 숫자보다 작으면 뒤로 한칸씩 밀어냄  
    for (j = i - 1; j >= 0 && temp < unorganizedArray[j]; j--) {  
        unorganizedArray[j + 1] = unorganizedArray[j];
    }

    // j 값이 감소한다면, 감소된 만큼의 숫자를 반영하여 선택된 숫자를 정해진 위치에 넣음
    unorganizedArray[j+1] = temp; 
}