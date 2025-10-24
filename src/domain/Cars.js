// 모든 자동차 클래스
export default class Cars {
  constructor(carList) {
    this.cars = carList;
  }

  // 모든 자동차 한 번 이동
  moveAll() {
    this.cars.forEach((c) => {
      c.move();
    });
  }

  // 모든 자동차 상태 문자열 배열
  printAllResult() {
    return this.cars.map((c) => c.printDistance());
  }
}
