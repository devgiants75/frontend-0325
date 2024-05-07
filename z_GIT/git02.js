//! Git 설치

//& 1. Windows
// 1) Git 공식 웹사이트 방문
// : Git 공식 홈페이지에 접속하여 Windows 용 Git 설치 프로그램을 다운로드

// 2) 설치 프로그램 실행
// : 다운로드한 설치 파일을 실행하고, 설치 마법사의 지시에 따라 설치를 완료

// 3) Git Bash 실행
// : 설치가 완료되면, Git Bash를 실행하여 Git 명령어를 사용

//& 2. macOS
// 1) Homebrew 사용
// : 터미널을 열고, macOS 패키지 관리자인 Homebrew를 통해 Git을 설치

//* - Homebrew 설치 명령어
// /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

//* - git 설치 명령어
// brew install git

//& 3. Git 버전 확인(맥, 윈도우 동일 명령어 사용)
// : git --version

//! 기본 설정: 사용자 이름과 이메일 설정

// : Git을 사용하기 전에 사용자 이름과 이메일 주소를 설정
// : Git을 통해 수행되는 모든 커밋에 포함되며, 코드에 기여한 사람을 식별하는 데 사용

//* 개행문자 설정
// 1) MacOS
// git config --global core.autocrlf input

// 2) Windows
// git config --global core.autocrlf true

//* 사용자 이름 설정
// git config --global user.name "Your Name"
// git config --global user.name "seungalee314"

//* 이메일 주소 설정
// git config --global user.email "your.email@example.com"
// git config --global user.email "seungalee314@naver.com"

//* 설정 확인(설정한 정보 확인)
// git config --global --list

// >> 터미널로 돌아가기 : q

//! 리포지토리 초기화 및 복제

//& 1. git init
// : 새로운 Git 리포지토리를 초기화하는 데 사용
// : 현재 디렉토리에 .git 폴더가 생성되어 버전 관리가 시작

// >> MacOS의 경우 해당 프로젝트(최상위 루트)의 Finder에서 Command + Shift + .(점)

//* git init

// >> "Initialized empty Git repository in [디렉토리 경로]" 메시지가 표시
// >> : 리포지토리가 초기화

//& 2. git clone
// : 기존의 원격 리포지토리를 로컬로 복제하는 데 사용
// : 원격 서버에 있는 프로젝트 전체를 복사하여 로컬에서 작업

//* git clone [URL]
// : 명령어 실행 후, 해당 디렉토리가 로컬 시스템에 생성되며 파일들이 내려받아짐

//! git add, git commit으로 변경사항 추적 & 커밋
//& 1. git add
// : 작업 디렉토리의 변경 사항을 스테이징 영역에 추가하는 데 사용
// : 변경사항을 다음 커밋에 포함시키는 기능

//* git add [파일명]
//* git add . (모든 변경된 파일 추가)

//& 2. git commit
// : 스테이징 영역의 변경사항을 리포지토리에 기록
// : 프로젝트의 버전 히스토리에 포인트를 생성하며, 메시지를 통해 변경사항을 설명

//* git commit -m "여기에 커밋 메시지를 입력하세요"

//! git status, git log로 상태와 이력 확인
//& 1. git status
// : 현재 작업 디렉토리의 상태 확인
// : 어떤 파일이 수정되었거나 스테이징 영역에 추가되었는지
//   , 커밋되지 않은 변경사항이 있는지 등의 정보를 제공

//* git status

//& 2. git log
// : 커밋된 이력을 확인
// : 언제 누가 어떤 변경사항을 커밋했는지 확인 가능

//* git log

//! GitHub에서 리포지토리 생성
// 1. GitHub 로그인

// 2. 리포지토리 생성
// 오른쪽 상단의 프로필 사진 또는 아이콘을 클릭하고 'Your repositories'를 선택
// 'New' 버튼을 클릭하여 새 리포지토리 생성 페이지로 이동
// 리포지토리 이름, 설명(선택 사항), 공개/비공개 설정을 입력
// 'Create repository' 버튼을 클릭하여 리포지토리를 생성

//! 원격 리포지토리와의 동기화
//& 1. git push
// : 로컬 리포지토리의 커밋을 원격 리포지토리로 업로드하여 다른 사람들과 공유할 때 사용
// : 협업하는 팀원들이 최신 변경사항 확인 가능

//* git push origin main
// : origin은 원격 리포지토리의 단축 이름
// : main은 푸시하려는 브랜치의 이름

//& 2. git pull
// : 원격 리포지토리에서 최신 변경사항을 로컬 리포지토리로 가져오고, 자동으로 현재 브랜치와 병합
// : 팀원들의 작업을 로컬에 동기화할 때 사용

//* git pull origin main

//! 브랜치 관리
//& 1. git branch

// : 브랜치는 기능 개발, 버그 수정 등을 독립적으로 진행하기 위한 Git의 핵심 기능

// : git branch 명령어를 사용하여 브랜치를 생성, 확인, 삭제 가능

//* git branch
// : 모든 브랜치 목록 확인
//* git branch [new-branch-name]
// : 새 브랜치를 생성

//& 2. git checkout
// : 다른 브랜치로 전환하거나 파일의 특정 버전을 작업 디렉토리로 가져올 때 사용

//* git checkout [branch-name]
// : 다른 브랜치로 전환

//! Pull Request 개념 및 실습
// : Pull Request는 개발자가 작업을 마친 브랜치의 변경사항을 
//   , 다른 브랜치(보통 메인 브랜치)에 병합하도록 요청하는 메커니즘
// : 코드 리뷰와 토론 기능 활용, 코드의 품질을 유지

// - GitHub에서 리포지토리로 이동
// - 'Pull requests' 탭을 클릭한 후, 'New pull request' 버튼을 클릭
// - 비교하고 싶은 브랜치를 선택하고, 변경 사항을 검토한 후 'Create pull request'를 클릭

//! git merge
// : 두 개의 브랜치를 합치는 작업을 수행
// : 기능 개발이나 버그 수정이 완료된 브랜치를 메인 브랜치(예: main 또는 master)에 병합

//* git checkout main
// : 메인 브랜치로 전환
//* git merge [branch-name]
// : 병합하려는 브랜치를 메인 브랜치에 병합

//? 충돌 해결 방법
// : 두 브랜치를 병합할 때 같은 파일의 같은 부분이 다르게 수정되어 충돌이 발생
// : Git은 자동으로 이러한 충돌을 해결하지 X, 사용자가 수동으로 충돌을 해결

// - 충돌 해결 절차

// 충돌이 발생하면 Git은 충돌을 알려주며, 충돌이 발생한 파일을 표시
// 충돌이 발생한 파일을 열고, Git이 표시한 충돌 부분(<<<<<<<, =======, >>>>>>>)을 찾기
// 각 섹션의 변경사항을 검토하고, 어떤 변경사항을 유지할지 결정
// 충돌 표시를 제거하고, 파일을 원하는 최종 상태로 편집

//* git add [file-name]
// : 충돌을 해결한 파일을 다시 스테이지에 추가

//* git commit
// : 병합을 계속 진행