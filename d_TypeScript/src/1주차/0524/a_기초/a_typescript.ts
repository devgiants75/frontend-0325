{
  // typescript
  // JS의 슈퍼셋 >> TS 파일을 JS 파일로 변환해야만 코드 실행 가능

  // 1. tsc로 TS 코드를 JS로 변환(컴파일)

  // 2. node로 변환시킨 JS 코드를 실행
  // >> TS 코드 수정 시 계속하여 JS 코드로 변환을 진행

  // >> ts-node 명령어를 통해 코드 컴파일과 실행을 동시 진행 가능
  //    : ts-node 명령어의 경우 JS 파일이 생성되지 X

  // npm install -g ts-node

  console.log('TS 파일 실행'); // TS 파일 실행
  const message = 'hello';
  // src/0524/a_기초/a_typescript.ts
  // src/0524/a_기초/a_typescript.js

  // message(); - Error
}
