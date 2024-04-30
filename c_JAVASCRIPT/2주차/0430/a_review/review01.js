//! 문제: 게임 캐릭터 스킬 시뮬레이터
// 목적: 함수의 정의, 매개변수와 인자의 이해, 반환값의 활용을 복습
// 기본 데이터 타입만을 사용하여 게임 캐릭터의 스킬을 시뮬레이션하는 간단한 프로그램

//? 게임 설명
// RPG 게임의 캐릭터를 제어하는 코드를 작성
// 캐릭터는 여러 스킬 사용 가능, 각 스킬은 다양한 효과를 보유
// 스킬을 사용할 때마다 캐릭터의 상태 변화
// => 함수를 통해 구현

//? 캐릭터 상태(데이터)

// 체력 (HP)
// 마력 (MP)
// 스킬

//? 스킬(기술)

// 힐(Heal): 체력을 일정량 회복 / 사용할 때 마력을 소모
// 파이어볼(Fireball): 적에게 피해를 주고 마력을 소모
// 메디테이션(Meditation): 마력을 소량 회복 / 추가 체력 소모 X

//? 문제 상황
// 캐릭터의 초기 체력(HP)은 100, 마력(MP)은 50으로 시작
// 각 스킬의 기능을 수행하는 함수를 작성
// - 각 함수는 현재 HP 또는 MP를 인자로 받고, 각 스킬의 결과로 변경된 HP 또는 MP를 반환

//? 각 스킬(함수)의 작동 
// 힐(Heal): 체력을 30 회복하고, 10의 마력 소모
//           단, 마력이 부족하면 스킬 사용 X
// 파이어볼(Fireball): 적에게 25의 피해를 주고, 15의 마력을 소모
//                   마력이 부족하면 스킬 사용 X
// 메디테이션(Meditation): 20의 마력을 회복

// - 스킬 사용 시마다 현재의 체력과 마력을 출력하는 코드를 추가
// - 사용자가 선택한 스킬에 따라 적절한 함수를 호출하고 결과를 처리하는 메인 로직을 작성
//   : 사용자 입력으로 스킬을 선택할 수 있도록 하되, 입력은 스킬 이름의 첫 글자 ('H', 'F', 'M')로 제한

//? 연습 상황(구현 테스트)
// 현재 상태: HP = 100, MP = 50
// 사용할 스킬을 선택하세요 (H, F, M): H
// 힐 사용: HP = 130, MP = 40
// 현재 상태: HP = 130, MP = 40
// 사용할 스킬을 선택하세요 (H, F, M): F
// 파이어볼 사용: 적에게 25의 피해를 주었습니다. MP = 25
// 현재 상태: HP = 130, MP = 25
// 사용할 스킬을 선택하세요 (H, F, M): M
// 메디테이션 사용: MP = 45
// 현재 상태: HP = 130, MP = 45

//! 소스코드 작성

//! 힐(Heal) 기술을 사용하는 함수 정의
// 매개변수 hp와 mp는 각각 사용자의 현재 체력과 마력
function heal(hp, mp) {
  if (mp >= 10) {
    // 마력에 10 이상인 경우에만 힐 사용 가능
    hp += 30; // 체력 30 회복
    mp -= 10; // 마력 10 소모
    console.log(`힐 사용: HP = ${hp}, MP = ${mp}`); // 사용 결과 로그 출력
  } else {
    console.log('마력 부족으로 힐 사용 불가');
  }

  // 해당 스킬 사용 후 변경된 hp와 mp를 반환
  return [hp, mp];
}

//! 파이어볼(Fireball) 기술을 사용하는 함수 정의
// mp는 사용자의 현재 마력
function fireball(mp) {
  if (mp >= 15) {
    const damage = 25;
    mp -= 15;
    console.log(`파이어볼 사용: 적에게 ${damage}의 공격을 하였습니다. MP = ${mp}`);
  } else {
    console.log('마력 부족으로 파이어볼 사용 불가');
  }

  return mp;
}

//! 메디테이션(Meditation) 기술을 사용하는 함수 정의
function meditation(mp) {
  mp += 20;
  console.log(`메디테이션 사용: MP = ${mp}`);
  return mp;
}

//! 실행 함수 구현 - 게임의 실행 로직을 담당
function main() {
  // 초기 캐릭터 설정
  let hp = 100;
  let mp = 50;

  //* readline 모듈을 사용하여 콘솔에서 사용자 입력 받기.
  // : Node.js에 내장된 입출력 관리 기능 사용을 요청
  // : 해당 모듈이 저장된 readline에 입출력에 관한 다양한 메서드(기능)와 속성(데이터)에 접근 가능
  const readline = require('readline');

  //* readline.createInterface() 메서드
  // : input, output의 입력과 출력에 대한 공간이 생성

  // rl.question(): 사용자에게 질문, 응답을 받아 처리 가능
  // rl.close(): 입력을 닫고 프로그램을 종료
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // 실제 호출 프로그램
  const prompt = () => {
    // 현재 상태 출력
    console.log(`현재 상태: HP = ${hp}, MP = ${mp}`);

    // 사용자에게 입력 받기
    rl.question(
      '---사용할 스킬을 선택하세요 (H, F, M, Q to quit) :---',
      function (input) {
        const choice = input.toUpperCase(); // 입력을 대문자로 변환

        switch (choice) {
          case 'H':
            // heal 함수 사용 후 반환 값을 저장
            [hp, mp] = heal(hp, mp);
            prompt(); // 다시 명령 입력 대기
            break;
          case 'F':
            mp = fireball(mp);
            prompt();
            break;
          case 'M':
            mp = meditation(mp);
            prompt();
            break;
          case 'Q':
            console.log('게임을 종료합니다.');
            rl.close(); // readline 인터페이스 종료
            break;
          default:
            console.log('잘못된 입력입니다. 다시 선택하세요.');
            prompt();
        }
      }
    );
  };

  prompt(); // 사용자 입력을 처음으로 받는 함수 호출
}

main(); // main 함수 호출하여 프로그램 시작