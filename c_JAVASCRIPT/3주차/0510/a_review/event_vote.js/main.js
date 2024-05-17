// 선택지 배열
const options = ['옵션 A', '옵션 B', '옵션 C', '옵션 D'];

// 피드백에 대한 메시지 객체
const feedbacks = {
  '옵션 A': 'A를 선택하셨군요! 좋은 선택입니다.',
  '옵션 B': 'B는 매우 인기 있는 선택지입니다.',
  '옵션 C': 'C를 선택한 당신, 독특한 시각을 가지고 있군요!',
  '옵션 D': 'D, 대담한 선택! 멋집니다.'
};

//! HTML 요소 가져오기
const optionsContainer = document.getElementById('options-container');
const feedbackDiv = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');

//! 선택지 동적 생성
options.forEach((option, index) => {
  const label = document.createElement('label');
  const radioButton = document.createElement('input');

  radioButton.setAttribute('type', 'radio');
  radioButton.setAttribute('name', 'option');
  radioButton.setAttribute('value', option);
  radioButton.id = `option${index}`;

  label.appendChild(radioButton);
  
  // 생성한 라벨 요소에 텍스트 노드를 추가
  // : 현재 옵션의 텍스트를 지정
  label.appendChild(document.createTextNode(option));

  optionsContainer.appendChild(label);
})

//! 제출 버튼에 클릭 이벤트 리스너 추가
submitBtn.addEventListener('click', () => {
  // 문서에서 이름이 option인 라디오 버튼 중에서 >> 현재 선택된 라디오 버튼을 찾아오기
  // : input의 radio / checkbox의 경우 checked 속성
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (selectedOption) {
    const feedbackMessage = feedbacks[selectedOption.value];
    feedbackDiv.textContent = feedbackMessage;

  } else {
    feedbackDiv.textContent = '옵션을 선택해주세요';
  }
})