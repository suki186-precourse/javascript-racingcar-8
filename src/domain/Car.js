import { MOVE_STANDARD, MOVE_STEP } from "../constants.js";
import { getRandomNumber } from "../utils/randomUtils.js";
import { validateCarNameLengthAndEmpty } from "../utils/validators.js";

// 자동차 하나 클래스
export default class Car {
  constructor(name) {
    validateCarNameLengthAndEmpty(name); // 이름 유효성 검증
    this.name = name; // 이름
    this.position = 0; // 이동 거리
  }

  // 랜덤 숫자를 기준으로 전진 여부 판별
  move() {
    const randomNumber = getRandomNumber(); // 난수 생성

    // 랜덤 값이 기준 값보다 크다면 전진
    if (randomNumber >= MOVE_STANDARD) {
      this.position += MOVE_STEP;
    }
  }
}
