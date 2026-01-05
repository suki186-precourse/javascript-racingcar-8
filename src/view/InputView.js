import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants.js";

export const InputView = {
  // ===== 자동차 이름 입력
  async readCarNames() {
    const carNames = await Console.readLineAsync(
      INPUT_MESSAGES.ENTER_CAR_NAMES
    );

    // 유효성 검사 (예정)
    // 리스트로 변환 (예정)
    return carNames;
  },

  // ===== 이동 횟수 입력
  async readMoveCount() {
    const moveCount = await Console.readLineAsync(
      INPUT_MESSAGES.ENTER_MOVE_COUNT
    );

    // 유효성 검사 (예정)
    // 정수 변환 (예정)
    return moveCount;
  },
};
