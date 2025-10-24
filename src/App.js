import { Console } from "@woowacourse/mission-utils";
import { createCars, parseCarNameByComma } from "./utils/utils.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    // 이름들을 구분자(,) 기준으로 분리, 리스트로 반환
    const names = parseCarNameByComma(input);

    // Car 객체 배열 생성
    const cars = createCars(names);

    Console.print(names);
    Console.print(cars);
  }
}

export default App;
