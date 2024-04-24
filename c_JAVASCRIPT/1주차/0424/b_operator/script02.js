//! 5. 논리 연산자
// : boolean 값을 연산하는데 사용
// : 논리식을 판단하여, boolean 타입으로 반환

// - && 연산자와 || 연산자
//   : 두 개의 피연산자를 가지는 이항 연산자이며, 피연산자들의 결합 방향은 '왼쪽에서 오른쪽'

// - ! 연산자
//   : 피연산자가 단 하나뿐인 단항 연산자이며, 피연산자의 결합 방향은 '오른쪽에서 왼쪽'

//* 논리 연산자의 종류
// 1. and(논리곱): &&
// : false값이 하나라도 있으면 무조건 false

// true && true는 true
// true && false는 false

// 2. or(논리합): ||
// : true값이 하나라도 있으면 무조건 true

// true || false는 true
// false || false는 false

// 3. not(부정논리): !

let bool1 = true;
let bool2 = false;

console.log('===논리 연산자===');
console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

console.log(!bool1); // false
console.log(!bool2); // true

//& 단락 평가
// : &&와 || 논리 연산자에서 일어나는 특별한 연산 처리 방식
// >> 논리 연산의 결과를 결정하기 위해 필요한 '최소한의 피연산자만을 평가'하는 방식

console.log('단락평가');
// 1) AND 연산자(&&)
// : 앞선 피연산자가 false로 평가될 경우, 그 뒤의 피연산자는 평가 없이 바로 false를 반환

true && false && console.log('and 연산자의 단락평가');
true && console.log('해당 내용은 출력됩니다.');

// 2) OR 연산자(||)
// : 앞선 피연산자에 true가 하나라도 존재하는 경우, 그 뒤의 피연산자는 평가 없이 바로 true를 반환

true || console.log('or 연산자의 단락평가');
false || console.log('해당 내용은 출력됩니다.');

//! 6. 삼항(조건) 연산자
// : 유일하게 피연산자를 세 개나 가지는 조건 연산자

//* 삼항 연산자의 문법(기본 구조)
// 표현식 ? 반환값1 : 반환값2

// 표현식: true 또는 false를 반환하는 표현식.
// 반환값1: 표현식 조건이 참(true)일 때 반환될 값.
// 반환값2: 표현식 조건이 거짓(false)일 때 반환될 값.

// >> 물음표(?) 앞의 표현식에 따라 결괏값이 참이면 반환값1을 반환하고, 결괏값이 거짓이면 반환값2를 반환

console.log('===삼항 연산자===');

let age = 26;

// 비교 연산자가 대입 연산자 보다 연산의 우선순위를 가짐
let beverage = age >= 20 ? 'Beer' : 'Juice';
console.log(beverage);

let isMember = false; // boolean 타입의 변수(회원의 여부를 저장)

let discount = isMember ? '10%' : '5%';
console.log(discount);