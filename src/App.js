import { Console } from "@woowacourse/mission-utils";
import {
  createCars,
  parseCarNameByComma,
  parseTryCount,
} from "./utils/utils.js";
import Cars from "./domain/Cars.js";
import { InputView } from "./view/InputView.js";

class App {
  async run() {
    // ===== 1. 자동차들 이름, 시도 횟수 입력
    const carNames = await InputView.getCarNames();
    const tryCount = await InputView.getTryCount();

    // Car 객체 배열 생성
    const cars = createCars(carNames);

    // 모든 Car를 담은 객체 생성
    const allCars = new Cars(cars);

    // 경주 실행 결과 출력
    await this.printRaceResult(allCars, tryCount);

    // 최종 우승자 출력
    await this.printWinners(allCars);
  }

  // 실행 결과 출력
  async printRaceResult(allCars, tryCount) {
    Console.print("\n실행 결과");

    // 시도 횟수만큼 반복
    for (let r = 0; r < tryCount; r++) {
      allCars.moveAll();
      allCars.printAllResult().forEach((e) => {
        Console.print(e);
      });
      Console.print("");
    }
  }

  // 최종 우승자 출력
  async printWinners(allCars) {
    const winnners = allCars.getWinners();
    Console.print(`최종 우승자 : ${winnners.join(", ")}`);
  }
}

export default App;
