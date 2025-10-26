import { Console } from "@woowacourse/mission-utils";
import { parseCarNameByComma, parseTryCount } from "../utils/utils.js";
import { validateCarName, validateTryCount } from "../utils/validators.js";

export const InputView = {
  // ===== 자동차 이름 입력 및 구분자 기준으로 분리
  async getCarNames() {
    // 자동차 이름 입력
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    // 문자열 유효성 검사
    validateCarName(carNamesInput);

    // 이름들을 구분자(,) 기준으로 분리, 리스트로 반환
    return parseCarNameByComma(carNamesInput);
  },

  // ===== 시도 횟수 입력 및 정수로 변환
  async getTryCount() {
    // 시도 횟수 입력
    const tryCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    // 시도 횟수 유효성 검사
    validateTryCount(tryCountInput);

    // 정수로 변환
    return parseTryCount(tryCountInput);
  },
};
