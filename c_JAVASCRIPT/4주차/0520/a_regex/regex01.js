//& 정규표현식 개요

//! 1. 정규표현식의 정의

// 정규표현식은 문자열을 처리할 때 사용하는 문법
// : 복잡한 문자열 패턴을 정의하고 검색, 대체, 추출 작업을 수행하는 역할

// +) 역사
// 정규표현식은 1950년대 후반 수학자 스티븐 클레이니에 의해 처음 소개
// >> 이후 UNIX 운영 체제의 텍스트 처리 도구들에서 사용
//    , JavaScript에서는 1990년대 후반부터 정규표현식 지원 시작

//! 2. 기본 용도 & 응용 분야
// - 검색(Search): 특정 패턴이나 조건에 맞는 문자열을 찾기
// - 검증(Validation): 이메일 주소, 전화번호 등 입력된 데이터의 형식이 올바른지 확인
// - 분리(Splitting): 문자열을 특정 패턴을 기준으로 여러 부분으로 나누기
// - 대체(Replacement): 문자열 내의 특정 패턴을 찾아 다른 문자열로 대체

// +) 응용 분야
// 웹 개발: 폼 데이터 검증, URL 파싱 등
// 데이터 분석: 로그 파일에서 정보 추출, 데이터 정제 등
// 소프트웨어 개발: 소스 코드에서 패턴 검색 및 수정
// 네트워킹: 프로토콜 메시지 분석 및 검증

// +) JavaScript에서 정규표현식을 사용하는 이유
// 유연성: JavaScript는 웹 브라우저와 서버(Node.js) 양쪽 모두에서 실행
//         , 정규표현식을 이용해 다양한 문자열 처리 작업을 유연하게 수행 가능
// 효율성: 복잡한 문자열 검사를 코드 몇 줄로 간단하게 처리
//        , 개발 시간과 비용 절감
// 표준화: ECMAScript 표준의 일부로 정규표현식이 포함
//        , JavaScript 환경에서의 호환성과 예측 가능성 보장

//! 3. 단점
// : 주석이나 공백 허용 X
// : 여러가지 기호를 혼합 사용
// >> 가독성이 좋지 않음

//& 정규표현식 기본 문법 및 패턴
//! 정규식 구성
// : 슬래쉬 문자 두개 사이로 정규식 기호가 들어가는 형태

//! 1. 메타 문자와 리터럴 문자
//? 1) 메타 문자
// : 정규표현식 내에서 특별한 의미를 가지는 문자

// .: 어떤 하나의 문자와 일치(줄바꿈 문자 제외)
// \d: 숫자와 일치 [0-9]와 동일
// \D: 숫자가 아닌 모든 문자와 일치 [^0-9]와 동일
// \w: 단어 문자(알파벳, 숫자, 밑줄)와 일치 [a-zA-Z0-9_]와 동일
// \W: 단어 문자가 아닌 모든 문자와 일치 [^a-zA-Z0-9_]와 동일
// \s: 모든 공백 문자(스페이스, 탭, 줄바꿈 등)와 일치
// \S: 공백이 아닌 모든 문자와 일치

// \특수기호: 특수기호 \* \^ \& \! \? ...등

//? 2) 리터럴 문자
// : 메타문자로 활용되는 알파벳을 실제의 문자로 활용하고 싶은 경우 \(백슬래시)를 사ㅛㅇ
// \.: .(마침표) 문자 그 자체를 의미

//! 2. 문자 클래스
// : 문자 클래스는 특정 문자 중 하나를 매치

// 문자 클래스는 특정 문자 집합 중 하나와 일치시키고 싶을 때 사용합니다:

// [] 대괄호: 괄호 안의 문자들 중 하나 / -하이픈을 사용하여 범위 지정 가능

// [abc]: 'a', 'b', 또는 'c'와 일치
// [^abc]: 'a', 'b', 'c'를 제외한 모든 문자와 일치
// [a-z]: 모든 소문자와 일치
// [A-Z]: 모든 대문자와 일치
// [0-9]: 모든 숫자와 일치
// [a-zA-Z]: 모든 알파벳 문자와 일치

// ^문자열
// : 특정 문자열로 시작 (시작점) - /^www/
// 문자열$
// : 특정 문자열로 끝남 (종착점) - /com$/

// +) 문자 클래스를 사용하면 특정 범위의 문자를 쉽게 지정 가능
// : [a-z]는 소문자 알파벳 중 하나와 일치

//! 3. 수량자
// 수량자는 바로 앞의 요소가 몇 번 나타나는지 지정

// {n}
// 바로 앞의 요소가 정확히 n번 작성
// 예: a{3}는 "aaa"와 일치

// {n,}
// 바로 앞의 요소가 n번 이상 작성
// 예: a{2,}는 "aa", "aaa", "aaaa", 등과 일치

// {n,m}
// 바로 앞의 요소가 최소 n번, 최대 m번 작성
// 예: a{2,4}는 "aa", "aaa", "aaaa"와 일치

// +
// 바로 앞의 요소가 1번 이상 작성 (최소 한개 또는 여러개)
// 예: a+는 "a", "aa", "aaa", 등과 일치

// *
// 바로 앞의 요소가 0번 이상 작성
// 예: a*는 "", "a", "aa", "aaa", 등과 일치

// ?
// 바로 앞의 요소가 0번 또는 1번 작성
// 예: a?는 "", "a"와 일치

//! 4. 위치를 지정하는 앵커
// 앵커는 문자열 내의 특정 위치를 지정

// \b
// 단어 경계와 일치 단어와 공백 또는 문자열의 시작/끝 사이의 위치
// 예: \ba\는 "a cat"에서 'a '와 일치

// \B
// 단어 경계가 아닌 위치와 일치
// 예: \Ba\는 "an apple"에서 'a'와 일치