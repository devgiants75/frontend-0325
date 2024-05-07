//! 1. git init
// : 새로운 Git 리포지토리를 초기화하는 데 사용
// : 현재 디렉토리에 .git 폴더가 생성되어 버전 관리가 시작

//! 2. 버전 관리의 세팅 - 사용자 등록

//& MacOS
// git config --global core.autocrlf input

// git config --global user.name 'devgiants75'
// >> 일치할 필요는 없지만 되도록 일치 

// git config --global user.email 'devgiants75@naver.com'
// >> 일치할 필요는 없지만 되도록 일치 (사용자 매칭용)

//& Windows
// git config --global core.autocrlf true

// git config --global user.name 'devgiants75'
// >> 일치할 필요는 없지만 되도록 일치 

// git config --global user.email 'devgiants75@naver.com'
// >> 일치할 필요는 없지만 되도록 일치 (사용자 매칭용)

//& 등록 정보 확인
// git config --global --list
// : MacOS - input
// : Windows - true

// >> 빠져 나가기 Q 키 클릭

//!
//& 1. git status
// : 현재 작업 디렉토리의 상태 확인
// : 어떤 파일이 수정되었거나 스테이징 영역에 추가되었는지
//   , 커밋되지 않은 변경사항이 있는지 등의 정보를 제공

//* git status

//!
//& 1. git add
// : 작업 디렉토리의 변경 사항을 스테이징 영역에 추가하는 데 사용
// : 변경사항을 다음 커밋에 포함시키는 기능

//* git add [파일명]
//* git add . (모든 변경된 파일 추가)

//& 2. git commit
// : 스테이징 영역의 변경사항을 리포지토리에 기록
// : 프로젝트의 버전 히스토리에 포인트를 생성하며, 메시지를 통해 변경사항을 설명

//* git commit -m "여기에 커밋 메시지를 입력하세요"

//& 3. git log
// : 커밋된 이력을 확인
// : 언제 누가 어떤 변경사항을 커밋했는지 확인 가능

//* git log