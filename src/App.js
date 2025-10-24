import { Console } from "@woowacourse/mission-utils";
import {
  createCars,
  parseCarNameByComma,
  parseTryCount,
} from "./utils/utils.js";
import Cars from "./domain/Cars.js";

class App {
  async run() {
    // 자동차 이름 배열
    const carNames = await this.getCarNames();

    // Car 객체 배열 생성
    const cars = createCars(carNames);

    // 모든 Car를 담은 객체 생성
    const allCars = new Cars(cars);

    // 시도 횟수
    const tryCount = await this.getTryCount();

    // 경주 실행 결과 출력
    await this.printRaceResult(allCars, tryCount);

    // 최종 우승자 출력
    await this.printWinners(allCars);
  }

  // ===== 자동차 이름 입력 및 구분자 기준으로 분리
  async getCarNames() {
    // 자동차 이름 입력
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    // 이름들을 구분자(,) 기준으로 분리, 리스트로 반환
    return parseCarNameByComma(carNamesInput);
  }

  // ===== 시도 횟수 입력 및 정수로 변환
  async getTryCount() {
    // 시도 횟수 입력
    const tryCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    // 정수로 변환
    return parseTryCount(tryCountInput);
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
