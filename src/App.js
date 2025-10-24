import { Console } from "@woowacourse/mission-utils";
import {
  createCars,
  parseCarNameByComma,
  parseTryCount,
} from "./utils/utils.js";

class App {
  async run() {
    // 자동차 이름 입력
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    // 이름들을 구분자(,) 기준으로 분리, 리스트로 반환
    const names = parseCarNameByComma(carNamesInput);

    // Car 객체 배열 생성
    const cars = createCars(names);

    // 시도 횟수 입력
    const tryCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const tryCount = parseTryCount(tryCountInput);

    Console.print(names);
    Console.print(tryCount);
  }
}

export default App;
