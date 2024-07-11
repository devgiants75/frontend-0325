
// useLocalStorage라는 이름의 제네릭 훅을 정의
// T는 사용자가 지정할 데이터 타입을 의미

// : props로 key값(string), initialValue값(T 제네릭 타입)을 전달 받음
// : 반환값은 배열 [T, (value: T) => void]
function useLocalStorage() {
  //# useState를 사용하여 storedValue라는 상태를 초기화
  // 초기값은 함수로 전달되며, 로컬 스토리지에서 값을 읽거나, 실패하면 초기값을 사용

  // 초기값 함수 로직
  // : try-catch 블럭 사용
  // 1) try 블럭
  //   - 로컬 스토리지에서 주어진 key로 값을 조회
  //   - JSON.parse를 통해 문자열을 객체로 변환 값이 없다면 initialValue를 사용
  
  // 2) error 블럭 (매개변수로 error 값 전달 받음)
  //   - 오류가 발생하면 콘솔에 오류 메시지를 출력
  //   - 오류 시 초기값을 반환

  //# setValue 함수는 주어진 값을 로컬 스토리지에 저장하고 상태를 업데이트하는 함수
  // - 매개변수로 value값 (T타입) 전달받음
  // - 함수 내 try-catch 블럭 사용

  // 1) try 블럭
  //   - value가 함수인 경우, 현재 상태값을 인자로 해당 함수를 실행
  //   - 그렇지 않은 경우, 바로 value를 사용


  // 상태를 업데이트
  // JSON.stringify를 사용하여 객체를 문자열로 변환하고, 로컬 스토리지에 저장
  
  // 2) error 블럭 (매개변수로 error 값 전달 받음)
  //   - 저장 중 오류 발생 시 콘솔에 오류 메시지를 출력
  //   - 오류 시 초기값을 반환

  //# useEffect 훅은 컴포넌트가 마운트될 때와 주요 종속성이 변경될 때 실행
    // handleStorageChange 함수는 로컬 스토리지의 변경을 감지하고 상태를 업데이트
    // : 함수 내 try-catch 블럭 사용
    
    // 1) try
    // - 로컬 스토리지에서 주어진 key로 값을 조회
    // - 로컬 스토리지의 데이터로 상태를 업데이트

    // 2) catch
    // 오류 발생 시 콘솔에 오류 메시지를 출력

    //#
    // window 객체에 'storage' 이벤트 리스너를 추가
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거

    
    //# key와 initialValue가 변경될 때마다 이 훅이 다시 실행

  // 최종적으로 저장된 값과 값을 설정하는 함수를 배열로 반환
}

// useLocalStorage 훅 내보내기
