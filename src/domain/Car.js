import { MOVE_STANDARD } from "../constants.js";
import { getRandomNumber } from "../utils/utils.js";

// 자동차 하나 클래스
export default class Car {
  constructor(name) {
    this.name = name; // 이름
    this.position = 0; // 이동 거리
  }

  // 랜덤 숫자를 기준으로 전진 여부 판별
  move() {
    const randomNumber = getRandomNumber(); // 난수 생성

    // 랜덤 값이 기준 값보다 크다면 전진
    if (randomNumber >= MOVE_STANDARD) {
      this.position += 1;
    }
  }

  // 현재 위치만큼 문자열로(-) 표시
  printDistance() {
    const distance = "-".repeat(this.position);
    return `${this.name} : ${distance}`;
  }
}
