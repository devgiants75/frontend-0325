const button = document.querySelector('button');

button.addEventListener('click', printText);

function printText() {
  console.log('버튼이 클릭되었습니다.');
  console.log('콘솔에 출력됩니다.');
}