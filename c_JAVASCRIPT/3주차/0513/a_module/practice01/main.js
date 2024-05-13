// mathUtils 모듈에서 여러 함수를 사용

// 이름 붙여 가져오기
import { add } from './mathUtils.js'

// 기본 가져오기
import subtraction from './mathUtils.js'

// 별칭으로 가져오기(모듈)
import { multiply as mp } from './mathUtils.js'

// 별칭으로 가져오기(파일)
import * as math from './mathUtils.js'

console.log(add(10, 0));
console.log(subtraction(10, 0));
console.log(mp(10, 0));
console.log(math.divide(10, 5));