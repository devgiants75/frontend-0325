//& 정규표현식 고급 패턴 매칭

//! 1. 캡처 그룹 (abc)
// 캡처 그룹은 괄호로 묶인 부분 패턴을 매치, 해당 결과를 저장하여 나중에 참조 할 수 있도록 함 
// : >> 매칭된 데이터를 추출하거나 후방 참조와 함께 사용될 때 유용

// 예제: 이름 분리하기

const fullName = "Lee Seungah";

//! 2. 비캡처 그룹 (?:abc)
// 비캡처 그룹은 괄호로 묶인 부분 패턴을 매치
// , 매치 결과를 저장하지 않아 후방 참조에 사용 불가
// >>그룹화는 필요하지만, 데이터 저장은 필요 없을 때 사용

// 예제: 선택적 표현 매칭
// http:// 또는 https://를 선택적으로 매치하지만 저장하지 않는 경우

const url = "https://www.example.com";

//& 긍정 및 부정의 전방탐색(lookahead)
// : 패턴의 일부를 확인하지만 그 부분을 결과에 포함하지 X
// >> 전방탐색을 활용하면 특정 조건을 만족하는 위치에서만 매칭을 수행 가능

//! 1. 긍정 전방탐색 (?=...)
// 긍정 전방탐색은 특정 패턴 뒤에 지정한 패턴이 존재해야 매치되는 구조
// >> 특정 문자 뒤에 원하는 문자가 오는 경우에만 매치를 진행

// 예제: 비밀번호 유효성 검사
// 비밀번호에서 최소 하나의 숫자를 포함하는 경우를 검사하는 예

const password = "Password123";

//! 2. 부정 전방탐색 (?!...)
// 부정 전방탐색은 특정 패턴 뒤에 지정한 패턴이 존재하지 않아야 매치되는 구조
// >> 특정 문자 뒤에 원하지 않는 문자가 오지 않는 경우에만 매치를 진행

// 예제: 금지된 단어 제외
// 문자열 내에서 특정 금지된 단어를 제외한 다른 단어와 매치하는 예

const text = "apple pie";
