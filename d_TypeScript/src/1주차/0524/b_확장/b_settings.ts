//& ESLint & Prettier 환경 설정
// : 타입스크립트 설치된 프로젝트 기준

// npm init -y
// npm install typescript --save-dev
// npx tsc --init

//! 1. 프로젝트의 루트 디렉터리에서 필요한 패키지를 설치
// npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier

//! 2. ESLint 설정 파일 생성 및 설정
// 프로젝트 루트 디렉터리에 .eslintrc.js 파일 생성
// : 아래 내용 추가

// module.exports = {
//   parser: '@typescript-eslint/parser',
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'prettier',
//     'plugin:prettier/recommended',
//   ],
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//   },
// env: {
//   browser: true, // 브라우저 환경 설정
//   node: true, // Node.js 환경 설정
//   es2021: true, // ES2021 전역 변수 사용 가능
// },
//   rules: {
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/no-explicit-any': 'warn',
//     'prettier/prettier': ['error', { endOfLine: 'auto' }],
//   },
// };

//! 3. Prettier 설정 파일 생성 및 설정
// 프로젝트 루트 디렉터리에 .prettierrc 파일 생성
// : 아래 내용 추가

// {
//   "singleQuote": true,
//   "semi": true,
//   "useTabs": false,
//   "tabWidth": 2,
//   "trailingComma": "all",
//   "printWidth": 200,
//   "endOfLine": "auto"
// }

//! 4. ESLint와 Prettier를 통합하기 위한 설정
//? : .eslintignore 파일 생성
// >> ESLint가 무시할 파일과 디렉토리를 지정

// node_modules
// dist

//? : Prettier 통합
//   .prettierignore 파일 생성, 무시할 파일과 디렉토리를 지정

// node_modules
// dist

//! 5. VSCode 설정 (선택 사항)
// : Visual Studio Code 사용 시
//   , ESLint와 Prettier를 자동으로 실행하도록 설정

// ? VSCode의 설정 파일(.vscode/settings.json)에 다음 설정 추가

// {
//   "editor.formatOnSave": true,
//   "editor.defaultFormatter": "esbenp.prettier-vscode",
//   "eslint.validate": [
//     "javascript",
//     "javascriptreact",
//     "typescript",
//     "typescriptreact"
//   ],
//   "editor.codeActionsOnSave": {
//     "source.fixAll.eslint": "explicit"
//   }
// }

//! 6. package.json에 스크립트 추가
// : package.json 파일에 ESLint와 Prettier 실행 스크립트를 추가

// {
//   "scripts": {
//     "lint": "eslint src/**/*.{ts,tsx}",
//     "format": "prettier --write 'src/**/*.{ts,tsx,js,json}'"
//   }
// }

//! 7. 7. 프로젝트 구조에 따른 실행
// : src 디렉토리에 있는 TypeScript 파일을 검사하고 포맷팅하는 명령어

//? ESLint 실행
// npm run lint

//? Prettier 실행
// npm run format

//# prettier 만 설정 //
// 1. Prettier를 개발 의존성으로 설치
//? npm install --save-dev prettier

// 2. Prettier 설정 파일 생성
// : 프로젝트 루트 디렉터리에 .prettierrc 파일을 생성하고 원하는 설정을 추가

// 3. Prettier 무시 파일 생성
// : 프로젝트 루트 디렉터리에 .prettierignore 파일을 생성

//?
// node_modules
// dist

// 4. 스크립트 추가
// : package.json 파일에 Prettier를 실행할 수 있는 스크립트를 추가

//?
// {
//   "scripts": {
//     "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""
//   }
// }

// 5. rettier 실행
// 터미널 또는 명령 프롬프트에서 아래 명령어를 실행하여 코드를 포맷

//? npm run format

// 5. VSCode와 연동
// : VSCode 확장 프로그램 설치
// : VSCode의 설정 파일(settings.json)에 다음 내용을 추가

// {
//   "editor.formatOnSave": true,
//   "editor.defaultFormatter": "esbenp.prettier-vscode"
// }
