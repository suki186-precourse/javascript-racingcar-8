import { CAR_LOGIC } from "../constants.js";

class Car {
  #name;
  #position;

  constructor(name) {
    // 이름 유효성 검증 (예정)
    this.#name = name; // 이름
    this.#position = 0; // 현재 위치
  }

  // getter
  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  // 이동: 랜덤 값이 기준 값보다 크다면 전진
  move(number) {
    if (number >= CAR_LOGIC.MOVE_STANDARD) {
      this.#position += CAR_LOGIC.MOVE_STEP;
    }
  }
}
export default Car;
