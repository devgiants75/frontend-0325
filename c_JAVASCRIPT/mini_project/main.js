//& 문서의 로딩이 완료되면 함수 실행
document.addEventListener('DOMContentLoaded', () => {

  //! HTML 요소 선택
  const cardContainer = document.getElementById('card-container');
  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  const completedButton = document.getElementById('completed-button');

  //! 색상 배열을 정의(6개)
  // 'red', 'black' 등과 같은 영단어 이름 사용 가능
  const colors = [
    '#cc3131',
    '#e3ddbb',
    '#23b923',
    '#34bcbc',
    '#3939db',
    '#e5b7e4'
  ];

  //! 12개의 요소가 담긴 생상 배열 생성
  let cardColors = [...colors, ...colors];

  //& 게임을 초기화하는 함수 정의
  function initializeGame() {
    shuffle(cardColors);

    cardContainer.innerHTML = '';

    for (let i = 0; i < 12; i++) {
      cardContainer.innerHTML += `
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="./images/front.jpg" alt="카드의 앞면">
          </div>
          <div class="card-back" style="background-color: ${cardColors[i]};"></div>
        </div>
      </div>
      `;
    }

    addCardEventListener();
  }

  //& 잠시동안 모든 카드를 공개하는 함수 정의
  function revealCardsTemporarily() {
    completedButton.disabled = true;

    setTimeout(() => {
      document.querySelectorAll('.card').forEach((card) => {
        card.classList.add('flipped');
      });
    }, 100);

    setTimeout(() => {
      document.querySelectorAll('.card').forEach((card) => {
        card.classList.remove('flipped');
      });
      completedButton.disabled = false;
    }, 2000);
  }

  //& 모든 카드 요소에 클릭 이벤트 리스너를 추가하는 함수
  function addCardEventListener() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('click', flipCard);
    });
  }

  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard = false;

  let isGameStarted = false;

  //& 카드를 뒤집는 함수 정의
  function flipCard() {
    if (!isGameStarted || lockBoard) return;

    this.classList.add('flipped');

    if(!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    } else {
      hasFlippedCard = false;
      secondCard = this;

      checkForMatch();
    }
  }

  // const flipCard = (event) => {
  //   if (!isGameStarted || lockBoard) return;
  //   event.target.classList.add('flipped');
  // }

  //& 두 카드가 일치하는지 확인하는 함수 정의
  function checkForMatch() {
    let isMatch = 
      firstCard.querySelector('.card-back').style.backgroundColor ===
      secondCard.querySelector('.card-back').style.backgroundColor;

    isMatch ? disableCards() : unflipCards();
  }

  //& 매치된 카드를 처리하는 함수 정의
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  //& 매치되지 않은 카드를 다시 뒤집는 함수 정의
  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');

      resetBoard();
    }, 1000);
  }

  //& 게임판을 초기화하는 함수 정의
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  //& 게임 시작 시간을 기록할 변수 선언
  let gameStartTime;

  //& '시작'버튼 클릭 시 이벤트 리스너 추가
  startButton.addEventListener('click', () => {
    initializeGame();

    gameStartTime = new Date();
    toggleButtonVisibiliy(true);

    revealCardsTemporarily();
    isGameStarted = true;
  });

  //& '재시작'버튼 클릭 시 이벤트 리스너 추가
  resetButton.addEventListener('click', () => {
    initializeGame();

    gameStartTime = new Date();

    toggleButtonVisibiliy(true);

    revealCardsTemporarily();

    isGameStarted = true;
  });

  //& '완료'버튼 클릭 시 이벤트 리스너 추가
  completedButton.addEventListener('click', () => {
    // - Array.from(): DOM NodeList를 배열로 반환
    // - every(): 모든 요소가 주어진 함수를 만족할 때 true를 반환
    const allFliped = Array.from(document.querySelectorAll('.card')).every(
      (card) => card.classList.contains('flipped')
    );

    if(allFliped) {
      const gameTime = new Date() - gameStartTime;
      alert(`게임 완료~! 소요시간: ${Math.floor(gameTime / 1000)}초`);
      isGameStarted = false;

      initializeGame();

      toggleButtonVisibiliy(false);
    } else {
      alert('완료되지 않았습니다.');
    }
  });

  //& 버튼의 가시성을 토글하는 함수 정의
  function toggleButtonVisibiliy(isGameStarted) {
    startButton.style.display = isGameStarted ? 'none' : 'block';

    resetButton.style.display = isGameStarted ? 'block' : 'none';
    completedButton.style.display = isGameStarted ? 'block' : 'none';
  }

  // 초기에는 시작 버튼만 표시
  toggleButtonVisibiliy(false);

  // 게임을 초기화
  initializeGame();

});

//& 배열의 요소를 무작위로 섞는 커스텀 함수
function shuffle(array) {
  
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // >> 0부터 i까지의 무작위 정수를 생성

    [array[i], array[j]] = [array[j], array[i]];
    // >> 배열의 i번째 요소와 j번째 요소를 서로 바꿈
  }
}