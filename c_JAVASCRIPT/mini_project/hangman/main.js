/*
  # 행맨을 그리는 함수들의 배열입니다.
    const drawFuncs = [
      rightLeg,
      leftLeg,
      rightArm,
      leftArm,
      torso,
      head,
      frame4,
      frame3,
      frame2,
      frame1,
    ];


  # 행맨을 그리는 함수
  function frame1() {
    drawLine(0, 150, 150, 150);
  } // 게임 프레임의 하단 부분
  function frame2() {
    drawLine(10, 0, 10, 600);
  } // 게임 프레임의 좌측 세로 부분
  function frame3() {
    drawLine(0, 5, 70, 5);
  } // 게임 프레임의 상단 가로 부분
  function frame4() {
    drawLine(60, 5, 60, 15);
  } // 게임 프레임의 짧은 수직 부분
  function head() {
    // 머리 부분
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }
  function torso() {
    drawLine(60, 36, 60, 70);
  } // 몸통
  function rightArm() {
    drawLine(60, 46, 100, 50);
  } // 오른쪽 팔
  function leftArm() {
    drawLine(60, 46, 20, 50);
  } // 왼쪽 팔
  function rightLeg() {
    drawLine(60, 70, 100, 100);
  } // 오른쪽 다리
  function leftLeg() {
    drawLine(60, 70, 20, 100);
  } // 왼쪽 다리

  # // 사용 가능한 카테고리 배열
  const categoryNames = ["Premier League Football Teams", "Films", "Cities"];

  # // 가능한 카테고리와 각 카테고리에 해당하는 단어들의 배열
  categories = [
    [
      "everton",
      "liverpool",
      "swansea",
      "chelsea",
      "hull",
      "manchester-city",
      "newcastle-united",
    ],
    ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
    ["manchester", "milan", "madrid", "amsterdam", "prague"],
  ];

  # // 힌트 배열을 정의
  : 각 카테고리 별로 힌트가 저장
  const hints = [
  [
    "Based in Mersyside",
    "Based in Mersyside",
    "First Welsh team to reach the Premier Leauge",
    "Owned by A russian Billionaire",
    "Once managed by Phil Brown",
    "2013 FA Cup runners up",
    "Gazza's first club",
  ],
  [
    "Science-Fiction horror film",
    "1971 American action film",
    "Historical drama",
    "Animated Fish",
    "Giant great white shark",
  ],
  [
    "Northern city in the UK",
    "Home of AC and Inter",
    "Spanish capital",
    "Netherlands capital",
    "Czech Republic capital",
  ],
];
*/

document.addEventListener('DOMContentLoaded', function() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let categories, chosenCategory, word, lives, counter, space;
  const guesses = [];

  const hintButton = document.getElementById('hint');
  const resetButton = document.getElementById('reset');

  const showLives = document.getElementById('mylives');
  const showCategory = document.getElementById('categoryName');
  const showClue = document.getElementById('clue');
  const myStickman = document.getElementById('stickman');

  const context = myStickman.getContext('2d');

  function setupButtons() {
    const myButtons = document.getElementById('buttons');

    const letters = document.createElement('ul');
    letters.id = 'alphabet';

    alphabet.forEach((letter) => {
      const list = document.createElement('li');
      list.id = 'letter';
      list.textContent = letter;

      list.addEventListener('click', handleGuess);

      letters.appendChild(list);
    });

    myButtons.appendChild(letters);
  }

  function handleGuess(event) {
    const guess = event.target.textContent;

    event.target.classList.add('active');
    event.target.removeEventListener('click', handleGuess);

    const correct = word.includes(guess);
    if(!correct) {
      lives--;
      updateGameState();
      animate();
    } else {
      revealLetters(guess);
    }
  }

  function revealLetters(guess) {
    guesses.forEach((guessElement, index) => {
      if (word[index] === guess) {
        guessElement.textContent = guess;
        counter++;
      }
    });

    updateGameState();
  }

  function updateGameState() {
    showLives.textContent = `You have ${lives} lives`;

    if (lives < 1) {
      showLives.textContent = 'Game Over';
    } 

    if (counter + space === guesses.length) {
      showLives.textContent = 'You Win!';
    }
  }

  function animate() {
    const drawFuncs = [
      rightLeg,
      leftLeg,
      rightArm,
      leftArm,
      torso,
      head,
      frame4,
      frame3,
      frame2,
      frame1,
    ];

    drawFuncs[lives]();
  }

  function drawLine(fromX, fromY, toX, toY) {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  }

  function frame1() {
    drawLine(0, 150, 150, 150);
  } // 게임 프레임의 하단 부분
  function frame2() {
    drawLine(10, 0, 10, 600);
  } // 게임 프레임의 좌측 세로 부분
  function frame3() {
    drawLine(0, 5, 70, 5);
  } // 게임 프레임의 상단 가로 부분
  function frame4() {
    drawLine(60, 5, 60, 15);
  } // 게임 프레임의 짧은 수직 부분
  function head() {
    // 머리 부분
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }
  function torso() {
    drawLine(60, 36, 60, 70);
  } // 몸통
  function rightArm() {
    drawLine(60, 46, 100, 50);
  } // 오른쪽 팔
  function leftArm() {
    drawLine(60, 46, 20, 50);
  } // 왼쪽 팔
  function rightLeg() {
    drawLine(60, 70, 100, 100);
  } // 오른쪽 다리
  function leftLeg() {
    drawLine(60, 70, 20, 100);
  } // 왼쪽 다리

  function selectCategory() {
    // 사용 가능한 카테고리 배열
    const categoryNames = ["Premier League Football Teams", "Films", "Cities"];

    showCategory.textContent = `The Chosen Category Is ${categoryNames[categories.indexOf(chosenCategory)]}`;
  }

  function setupGame() {
    // 가능한 카테고리와 각 카테고리에 해당하는 단어들의 배열
    categories = [
      [
        "everton",
        "liverpool",
        "swansea",
        "chelsea",
        "hull",
        "manchester-city",
        "newcastle-united",
      ],
      ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
      ["manchester", "milan", "madrid", "amsterdam", "prague"],
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];

    // 단어 중 공백을 '-'으로 치환
    word = word.replace(/\s/g, "-");

    setupButtons();

    guesses.length = 0;
    lives = 10;
    counter = 0;
    space = 0;

    setupWordHolder();
    updateGameState();
    selectCategory();
  }

  function setupWordHolder() {
    const wordHolder = document.getElementById('hold');
    wordHolder.innerHTML = '';

    const correct = document.createElement('ul');
    correct.setAttribute('id', 'my-word');

    word.split('').forEach((char) => {
      const guess = document.createElement('li');
      guess.className = 'guess';

      guess.textContent = char === '-' ? '-' : '_';
      correct.appendChild(guess);
      guesses.push(guess);
      if (char === '-') space++;
    });

    wordHolder.appendChild(correct);
  }

  hintButton.addEventListener('click', function() {
    const hints = [
      [
        "Based in Mersyside",
        "Based in Mersyside",
        "First Welsh team to reach the Premier Leauge",
        "Owned by A russian Billionaire",
        "Once managed by Phil Brown",
        "2013 FA Cup runners up",
        "Gazza's first club",
      ],
      [
        "Science-Fiction horror film",
        "1971 American action film",
        "Historical drama",
        "Animated Fish",
        "Giant great white shark",
      ],
      [
        "Northern city in the UK",
        "Home of AC and Inter",
        "Spanish capital",
        "Netherlands capital",
        "Czech Republic capital",
      ],
    ];

    const categoryIndex = categories.indexOf(chosenCategory);
    const hintIndex = chosenCategory.indexOf(word);

    showClue.textContent = `Clue: - ${hints[categoryIndex][hintIndex]}`;
  });

  resetButton.addEventListener('click', function() {
    context.clearRect(0, 0, 400, 400);
    clearPreviousGame();
    setupGame();
  })

  function clearPreviousGame() {
    const existingLetters = document.getElementById('alphabet');

    if (existingLetters) {
      existingLetters.remove();
    }

    const wordHolder = document.getElementById('hold');
    if (wordHolder) {
      wordHolder.innerHTML = '';
    }

    showClue.textContent = 'Clue: -';
    showLives.textContent = '';
  }

  setupGame();

});

/*
# 1. 프리미어 리그 축구 팀들
: 잉글랜드 프리미어 리그에서 경기하는 축구 팀들의 이름이 포함

에버턴
리버풀
스완지
첼시
헐
맨체스터 시티
뉴캐슬 유나이티드

# 2. 영화
: 다양한 유명 영화의 이름을 포함

에일리언
더티 해리
글래디에이터
니모를 찾아서
조스

# 3. 도시
: 세계 각국의 유명 도시 이름을 포함

맨체스터
밀라노
마드리드
암스테르담
프라하

& === 힌트 번역 ===

# 1. 프리미어 리그 축구 팀

"멀시사이드에 위치해 있음" (리버풀과 에버턴이 위치한 지역)
"멀시사이드에 위치해 있음" (중복된 힌트)
"프리미어 리그에 진출한 최초의 웨일즈 팀" (스완지)
"러시아 억만장자가 소유함" (첼시)
"필 브라운이 한때 감독을 맡았음" (헐 시티)
"2013 FA컵 준우승팀" (맨체스터 시티)
"게자의 첫 클럽" (뉴캐슬 유나이티드)

# 2. 영화에 대한 힌트

"과학-공상 호러 영화" (에일리언)
"1971년 미국 액션 영화" (더티 해리)
"역사 드라마" (글래디에이터)
"애니메이션 물고기" (니모를 찾아서)
"거대한 백상아리" (조스)

# 3. 도시에 대한 힌트

"영국 북부의 도시" (맨체스터)
"AC 및 인터의 본거지" (밀라노)
"스페인의 수도" (마드리드)
"네덜란드의 수도" (암스테르담)
"체코의 수도" (프라하)
*/
