// index.ts
export const tmp = '';

//! json-server
// : js 프로젝트 내에서 mock 서버를 구축하는 외부 라이브러리
// >> 서버없는 프로젝트 사용 | 프론트엔드 개발 속도가 빠를 경우 사용

//? 1. json-server 설치
// npm install json-server

//? 2. db.json 파일 생성
// : mock 서버의 mock 데이터베이스 역할
// >> 프로젝트의 루트에 생성 (node_modules와 같은 위치)

// cf) json 파일 주의점 
// .json 파일 내부에서는 주석 사용 X
// 배열이나 객체 사용 시 제일 마지막 데이터에 ,(콤마) 사용 X

//? json-server 실행
// json-server --watch db.json --port 3001

// : npm 명령어로 등록(package.json 파일에서 수정)
// >> script 속성에서 명령어 추가
// "json-server": "json-server --watch db.json --port 3001"

// >> npm run json-server 명령어로 실행 가능

//? json-server API 호출 방법

// http://localhost:3001/items
// >> items 배열에 접근 가능