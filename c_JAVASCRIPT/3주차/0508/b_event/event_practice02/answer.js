/*
  thumb-bar의 이미지를 클릭
  : 해당 이미지로 full-img 변경

  ! button 태그에 클릭 이벤트가 발생한 경우
  1. Darken 버튼 클릭 시
    (버튼의 class 속성이 dark로 지정)
  : 버튼의 textContent가 'Lighten'으로 변경
  : overlay의 배경 색이 'rgba(0, 0, 0, 0.5);로 지정

  2. Lighten 버튼 클릭 시
    (dark이 아닐 경우)
*/
// 전체 이미지 요소와 버튼, 오버레이를 선택
const displayedImage = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');

// 썸네일 바에 이벤트 리스너 추가
const thumbBar = document.querySelector('.thumb-bar');
thumbBar.addEventListener('click', function(e) {
  // 클릭된 요소가 이미지일 경우
  if (e.target.tagName === 'IMG') {
    // displayedImage의 src와 alt를 업데이트
    const imgSrc = e.target.src;
    displayedImage.src = imgSrc;
    displayedImage.alt = alts[imgSrc.split('/').pop()]; // 이미지 파일 이름 추출 및 대체 텍스트 설정
  }
});

// 다크/라이트 버튼의 기능 구현
btn.addEventListener('click', function() {
  // 클래스로 현재 상태 확인 (dark 클래스가 있는지)
  if (btn.classList.contains('dark')) {
    // Dark 모드에서 Light 모드로 전환
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    btn.classList.remove('dark');
  } else {
    // Light 모드에서 Dark 모드로 전환
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    btn.classList.add('dark');
  }
});

// 요소 선택

// 이미지 파일 이름 배열 선언
const images = [
  'cat01.jpg', 
  'cat02.jpg', 
  'dog01.jpg', 
  'dog02.jpg', 
  'dog03.jpg'
];

// 이미지에 대한 대체 텍스트를 저장하는 객체 선언
const alts = {
  'cat01.jpg' : 'cat01.jpg',
  'cat02.jpg' : 'cat02.jpg',
  'dog01.jpg' : 'dog01.jpg', 
  'dog02.jpg' : 'dog02.jpg',
  'dog03.jpg' : 'dog03.jpg'
}