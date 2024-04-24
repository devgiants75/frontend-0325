//! 논리 연산자
// : boolean 값을 연산하는데 사용

// and(논리곱): &&
// : false값이 하나라도 있으면 무조건 false

// or(논리합): ||
// : true값이 하나라도 있으면 무조건 true

// not(부정논리): !

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

console.log(!bool1); // false
console.log(!bool2); // true

//! 삼항(조건) 연산자