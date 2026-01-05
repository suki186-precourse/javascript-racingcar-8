import { ERROR_MESSAGES } from "../constants.js";
import { getRandomNumber } from "../utils/randomUtils.js";
import Car from "./Car.js";

class RacingGame {
  #carList; // Car 배열

  constructor(names) {
    this.#validateNames(names);
    this.#carList = names.map((name) => new Car(name));
  }

  // 모든 car에 랜덤 값 부여
  playRound() {
    this.#carList.forEach((car) => {
      const randomNumber = getRandomNumber();
      car.move(randomNumber);
    });
  }

  // 모든 자동차 정보 반환 (View 전달용)
  getCarsInfo() {
    return [...this.#carList];
  }

  // 최종 우승자 판별
  getWinners() {
    // 현재 위치 중 가장 큰 값
    const maxPosition = Math.max(...this.#carList.map((car) => car.position));

    // 해당 값을 가진 자동차들의 이름 반환
    const winners = this.#carList
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    return winners;
  }

  #validateNames(names) {
    // 자동차가 2개 미만인 경우
    if (names.length < 2) {
      throw new Error(ERROR_MESSAGES.MIN_CAR_COUNT);
    }

    // 중복된 이름이 존재하는 경우
    const uniqueNames = new Set(names);
    if (uniqueNames.size != names.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
    }
  }
}
export default RacingGame;
