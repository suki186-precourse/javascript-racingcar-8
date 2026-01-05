import { CAR_LOGIC, ERROR_MESSAGES } from "../constants.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#validateName(name);
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

  #validateName(name) {
    // 이름이 없거나 공백인 경우
    if (!name || name.trim().length === 0) {
      throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
    // 이름이 5자를 초과하는 경우
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME);
    }
  }

  // 이동: 랜덤 값이 기준 값보다 크다면 전진
  move(number) {
    if (number >= CAR_LOGIC.MOVE_STANDARD) {
      this.#position += CAR_LOGIC.MOVE_STEP;
    }
  }
}
export default Car;
