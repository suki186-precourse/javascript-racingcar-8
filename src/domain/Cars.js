import { ERROR_MESSAGE } from "../constants.js";

// 모든 자동차 클래스
export default class Cars {
  constructor(carList) {
    this.#validateDuplicationName(carList); // 중복 유효성 검증
    this.cars = carList;
  }

  // 모든 자동차 한 번 이동
  moveAll() {
    this.cars.forEach((c) => {
      c.move();
    });
  }

  // 모든 자동차 정보 반환
  getCarInfos() {
    return this.cars.map((c) => ({
      name: c.name,
      position: c.position,
    }));
  }

  // 최종 우승자 판별
  getWinners() {
    // 자동차별 position 중 최댓값
    const maxPosition = Math.max(...this.cars.map((c) => c.position));

    // maxPosition을 가진 자동차 이름들
    return this.cars
      .filter((c) => c.position === maxPosition)
      .map((c) => c.name);
  }

  // 중복 이름 검증
  #validateDuplicationName(carList) {
    const names = carList.map((c) => c.name);
    const uniqueNames = new Set(names); // 중복 제거

    if (names.length != uniqueNames.size) {
      throw new Error(ERROR_MESSAGE.NAME_DUPLICATE);
    }
  }
}
