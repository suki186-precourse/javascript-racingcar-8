import { createCars } from "./utils/utils.js";
import Cars from "./domain/Cars.js";
import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";

class App {
  async run() {
    try {
      // ===== 1. 자동차들 이름, 시도 횟수 입력
      const carNames = await InputView.getCarNames();
      const tryCount = await InputView.getTryCount();

      // ===== 2. 모든 Car를 담은 도메인 Cars 생성
      const allCars = new Cars(createCars(carNames));

      // ===== 3. 실행 및 결과 출력
      OutputView.printResultHeader(); // "실행 결과" 텍스트

      // 시도 횟수만큼 라운드 반복
      for (let r = 0; r < tryCount; r++) {
        allCars.moveAll();

        const carInfos = allCars.getCarInfos();
        OutputView.printRaceRoundResult(carInfos); // 라운드 결과 출력
      }

      // ===== 4. 최종 우승자 출력
      const winners = allCars.getWinners();
      OutputView.printWinners(winners);
    } catch (error) {
      OutputView.printError(error.message);
    }
  }
}

export default App;
