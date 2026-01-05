import { COMMON } from "../constants.js";
import { ERROR_MESSAGES } from "../constants.js";

export const Validator = {
  // ,로 이름을 구분했는지
  validateDelimiter(carNames) {
    if (!carNames.includes(COMMON.DELIMITERS)) {
      throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);
    }
  },

  // 이동 횟수 유효성 검증
  validateMoveCount(input) {
    if (!input || input.trim() === "") {
      throw new Error(ERROR_MESSAGES.INVALID_MOVE_COUNT);
    }

    const count = Number(input);
    if (isNaN(count) || !Number.isInteger(count) || count < 1) {
      throw new Error(ERROR_MESSAGES.INVALID_MOVE_COUNT);
    }
    return count;
  },
};
