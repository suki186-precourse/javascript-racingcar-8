import {
  ERROR_MESSAGE,
  MOVE_STANDARD,
  MOVE_STEP,
  NAME_MAX_LENGTH,
} from "../constants.js";
import { getRandomNumber } from "../utils/randomUtils.js";

// 자동차 하나 클래스
export default class Car {
  constructor(name) {
    this.#validateName(name); // 이름 유효성 검증
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

  // 이름 유효성 검증
  #validateName(name) {
    // 이름 길이가 제한을 초과한 경우
    if (name.length > NAME_MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    }

    // 이름이 비어있는 경우
    if (name.length === 0) {
      throw new Error(ERROR_MESSAGE.NAME_EMPTY);
    }
  }
}
