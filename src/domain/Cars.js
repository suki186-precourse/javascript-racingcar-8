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

  // 최종 우승자 판별
  getWinners() {
    // 자동차별 position 중 최댓값
    const maxPosition = Math.max(...this.cars.map((c) => c.position));

    // maxPosition을 가진 자동차 이름들
    return this.cars
      .filter((c) => c.position === maxPosition)
      .map((c) => c.name);
  }
}
