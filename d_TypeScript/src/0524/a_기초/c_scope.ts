//! 1. export 키워드가 없는 경우

// : export 키워드가 없으면, a_typeScript.ts 파일은 여전히 모듈로 간주되지만, 명시적으로 내보내는 변수가 없으므로 message 변수가 전역 스코프와 충돌 가능성 발생


// : TypeScript 파일과 JavaScript 파일 모두 전역 스코프에 message 변수를 선언
// >> message 변수가 전역 스코프에서 중복 선언되어 충돌이 발생

//! 2. export가 있는 경우

// : typeScript 파일에서 export 키워드를 사용하면, 해당 파일은 모듈로 인식
// : tmp와 message 변수는 a_typeScript.ts 모듈의 스코프 내에 존재
// >> 각 파일이 독립적인 스코프를 가짐

// >> message 변수가 export되지 않았기 때문에
//    , 해당 변수는 a_typeScript.ts 파일 내에서만 유효
//    , 다른 파일의 message 변수와 충돌하지 않음

