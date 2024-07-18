import { createTheme } from "@mui/material";
// theme.ts
// : MUI 스타일 테마 설정

const theme = createTheme({
  palette: {
    // 주 색상 설정: 애플리케이션의 메인 컬러를 정의합니다.
    primary: {
      main: '#376140', // 메인 색상: 버튼, 아이콘 등 주요 요소에 사용
      light: '#629467', // 밝은 버전: 주 색상의 밝은 톤
      dark: '#2a4729',  // 어두운 버전: 주 색상의 어두운 톤
      contrastText: '#ffffff' // 대비되는 텍스트 색상: 주 색상 배경에 사용될 텍스트 색
    },
    // 보조 색상 설정: 알림, 강조 표시 등 부가적인 요소에 사용
    secondary: {
      main: '#dc004e', // 메인 색상
      light: '#ff3366', // 밝은 버전
      dark: '#a3001e',  // 어두운 버전
      contrastText: '#000000' // 대비되는 텍스트 색상
    },
    // 에러 색상: 오류 메시지나 경고 상황에 사용됩니다.
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff'
    },
    // 배경색 설정: 일반적인 배경과 페이퍼(카드, 대화 상자 등의 백그라운드) 요소에 사용
    background: {
      default: '#ffffff',  // 기본 배경색
      paper: '#f4f4f4'     // 카드나 다이얼로그 같은 요소의 배경색
    },
    // 텍스트 색상 설정: 텍스트의 주요 색상, 보조 색상, 비활성화 색상을 정의합니다.
    text: {
      primary: '#333333',   // 주 텍스트 색상
      secondary: '#555555', // 보조 텍스트 색상
      disabled: '#aaaaaa'   // 비활성화된 텍스트 색상
    }
  },
  typography: {
    // 전체 글꼴 설정: 애플리케이션의 기본 글꼴과 스타일을 설정합니다.
    fontFamily: 'Arial, sans-serif',
    fontSize: 14,            // 기본 글꼴 크기
    h1: {
      fontSize: '2.5rem',    // h1 태그의 글꼴 크기
      fontWeight: 500        // h1 태그의 글꼴 무게
    },
    h2: {
      fontSize: '2rem',      // h2 태그의 글꼴 크기
      fontWeight: 500        // h2 태그의 글꼴 무게
    },
    body1: {
      fontSize: '1rem',      // 본문 글꼴 크기
    },
    button: {
      textTransform: 'none'  // 버튼 텍스트의 대문자 자동 변환 비활성화
    }
  },
  breakpoints: {
    // 반응형 디자인을 위한 브레이크포인트 설정: 다양한 화면 크기에 따라 스타일을 조정합니다.
    values: {
      xs: 0,       // extra small: 모바일
      sm: 600,     // small: 작은 태블릿
      md: 960,     // medium: 큰 태블릿 또는 소형 데스크탑
      lg: 1280,    // large: 데스크탑
      xl: 1920,    // extra large: 큰 데스크탑
    }
  },
  transitions: {
    // 애니메이션 효과 시간 설정: 각종 UI 요소의 전환 효과 시간을 조정합니다.
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    // 애니메이션 효과 곡선 설정: 애니메이션의 가속도와 감속을 조정합니다.
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)', // 들어오고 나갈 때 부드럽게
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',   // 나갈 때 부드럽게
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',      // 들어올 때 강조
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',     // 빠르고 강한 시작
    }
  },
});

export default theme;
