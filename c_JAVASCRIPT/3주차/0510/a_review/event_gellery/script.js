/*
  thumb-bar의 이미지를 클릭
  : 해당 이미지로 full-img 변경

  ! button 태그에 클릭 이벤트가 발생한 경우
  1. 다크 모드 버튼 클릭 시
    (버튼의 class 속성이 dark로 지정)
  : 버튼의 textContent가 '라이트모드'으로 변경
  : overlay의 배경 색이 'rgba(0, 0, 0, 0.5);로 지정

  2. 라이트모드 버튼 클릭 시
    (dark이 아닐 경우)
*/

//& 1) HTML 요소 선택

const thumbBar = document.querySelector(".thumb-bar");
const displayedImage = document.querySelector(".displayed-img");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

//& 이미지 파일 이름 배열 선언
const images = [
  "cat01.jpg",
  "cat02.jpg",
  "dog01.jpg",
  "dog02.jpg",
  "dog03.jpg",
];

//& 각각의 이미지에 대한 대체 텍스트를 저장하는 객체 선언
const alts = {
  "cat01.jpg": "고양이1",
  "cat02.jpg": "고양이2",
  "dog01.jpg": "강아지1",
  "dog02.jpg": "강아지2",
  "dog03.jpg": "강아지3",
};

//& 2) 썸네일 바에 이벤트 리스너 추가
thumbBar.addEventListener("click", function (e) {
  // 클릭된 요소가 이미지일 경우
  // target VS currentTarget
  if (e.target.tagName === "IMG") {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // displayedImage의 src와 alt를 업데이트
    // : 썸네일의 사진을 변경

    const imgSrc = e.target.src;
    displayedImage.src = imgSrc;
    // imgSrc = 'images/cat01.jpg'
    displayedImage.alt = alts[imgSrc.split('/').pop()];
    // >> 이미지 파일 이름 추출 및 대체 텍스트 설정
  }
});

//& 3) 다크/라이트 버튼의 기능 구현
btn.addEventListener('click', function() {
  // 현재 버튼의 클래스에 dark가 포함되어 있는지 확인
  // : HTML 객체에 클래스요소는 classList 속성으로 가져옴
  if (btn.classList.contains('dark')) {
    // 다크 모드에서 라이크 모드로 전환
    btn.textContent = '라이트 모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    btn.classList.remove('dark');
  } else {
    // 라이트 모드에서 다크 모드로 전환
    btn.textContent = '다크 모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    btn.classList.add('dark');
  }
})