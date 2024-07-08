import React, { useReducer } from 'react'

// 카운터 예제는 useReducer 대신 useState를 사용해도 충분히 구현 가능

// 오히려 useState를 사용하는 것이 reducer 함수를 따로 작성하지 않아도 되고, 전체적인 코드 길이가 더 줄어듦

//! 1. state의 형태가 복잡할 때

//? 게임 캐릭터의 상태를 나타내는 복잡한 객체
type GameState = {
  player: {
    name: string;
    level: number;
    items: {
      potions: number;
      coins: number;
      equipment: {
        armor: string;
        weapon: string;
      };
    };
  };
  enemies: number;
  gameStatus: string;
};

const initialState: GameState = {
  player: {
    name: 'Hero',
    level: 1,
    items: {
      potions: 5,
      coins: 100,
      equipment: {
        armor: 'Leather',
        weapon: 'Sword'
      }
    }
  },
  enemies: 5,
  gameStatus: 'Active'
};

//? 게임 상태 업데이트 로직
// 게임 내에서 플레이어의 '레벨이 오르거나' '아이템을 사용하는 경우'

//? useReducer를 사용한 상태 관리
// 리듀서 함수와 함께 사용하는 액션을 정의하고, 이를 통해 상태를 업데이트하는 방법

// Action 타입 정의: 'LEVEL_UP'과 'USE_POTION' 두 가지 액션
type Action = { type: 'LEVEL_UP' } | { type: 'USE_POTION'};

function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'LEVEL_UP':
      return {
        // 스프레드 연산자를 사용한 전체 상태 객체 값 복사
        ...state,
        player: {
          ...state.player,
          level: state.player.level + 1
        }
      };
    case 'USE_POTION':
      if (state.player.items.potions > 0) {
        return {
          ...state,
          player: {
            ...state.player,
            items: {
              ...state.player.items,
              potions: state.player.items.potions - 1
            }
          }
        }
      }
      return state;
    default:
      throw new Error('[ERROR] Unknown action type');
  }
};

export default function Reducer02() {
  // useReducer를 사용하여 게임의 상태와 dispatch 함수를 초기화
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <div>
      <h3>
        {state.player.name} / Level: {state.player.level}
      </h3>
      <button onClick={() => dispatch({ type: "LEVEL_UP" })}>Level Up</button>
      <button onClick={() => dispatch({ type: "USE_POTION" })}>
        Use Potion ({state.player.items.potions})
      </button>
    </div>
  );
}
