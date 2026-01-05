import { Console } from "@woowacourse/mission-utils";
import { COMMON, ERROR_MESSAGES, INPUT_MESSAGES } from "../constants.js";
import { Validator } from "../utils/Validator.js";

export const InputView = {
  // ===== 자동차 이름 입력
  async readCarNames() {
    const carNames = await Console.readLineAsync(
      INPUT_MESSAGES.ENTER_CAR_NAMES
    );

    // 구분자 유효성 검사(, 포함 여부)
    Validator.validateDelimiter(carNames);

    // 리스트로 변환
    return carNames.split(COMMON.DELIMITERS).map((name) => name.trim());
  },

  // ===== 이동 횟수 입력
  async readMoveCount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.ENTER_MOVE_COUNT);

    // 유효성 검사(숫자, 정수, 1이상)
    const moveCount = Validator.validateMoveCount(input);

    return moveCount;
  },
};
