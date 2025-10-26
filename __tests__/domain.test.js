import Car from "../src/domain/Car.js";
import Cars from "../src/domain/Cars.js";
import { getRandomNumber } from "../src/utils/randomUtils.js";

jest.mock("../src/utils/randomUtils.js");

describe("핵심 도메인 로직 테스트", () => {
  describe("Car.move: 이동 규칙 테스트", () => {
    let car;
    beforeEach(() => {
      car = new Car("suki");
    });

    test("랜덤 값이 4 이상이면 전진한다", () => {
      getRandomNumber.mockReturnValue(4);
      car.move();
      expect(car.position).toBe(1);
    });

    test("랜덤 값이 3 이하이면 전진하지 않는다", () => {
      getRandomNumber.mockReturnValue(3);
      car.move();
      expect(car.position).toBe(0);
    });
  });

  describe("Cars.getWinners: 우승자 판별 규칙 테스트", () => {
    test("한명의 우승자를 반환한다", () => {
      const carList = [new Car("suki"), new Car("poki")];
      carList[0].position = 5;
      carList[1].position = 3;
      const cars = new Cars(carList);

      const winners = cars.getWinners();

      expect(winners).toEqual(["suki"]);
    });

    test("공동 우승자를 모두 반환한다", () => {
      const carList = [new Car("suki"), new Car("poki"), new Car("cuki")];
      carList[0].position = 5;
      carList[1].position = 2;
      carList[2].position = 5;
      const cars = new Cars(carList);

      const winners = cars.getWinners();

      expect(winners).toEqual(expect.arrayContaining(["suki", "cuki"]));
      expect(winners).toHaveLength(2);
    });
  });
});
