import { createGlobalStyle } from "styled-components";
// GlobalStyles.ts 파일
// : 전역적 스타일 적용

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
    background-color: #f5f5f5;
  }

  h1 {
    color: #333;
  }

  .globalBox {
    background-color: lightgreen;
    padding: 20px;
    border-radius: 5px;
  }
`;

export default GlobalStyles;