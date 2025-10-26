import {
  ERROR_MESSAGE,
  NAME_MAX_LENGTH,
  VALID_CAR_NAME_REGEX,
  VALID_TRY_COUNT_REGEX,
} from "../constants.js";

// ===== InputView 유효성 검사

// 자동차 이름 입력값에 한글, 영문, 숫자, 쉼표 외 다른 문자가 있는 경우
export function validateCarName(input) {
  if (!VALID_CAR_NAME_REGEX.test(input)) {
    throw new Error(ERROR_MESSAGE.INVALID_DELIMITER);
  }
}

// 시도 횟수가 1 이상의 정수가 아닌 경우
export function validateTryCount(count) {
  if (count == null || !VALID_TRY_COUNT_REGEX.test(count.trim())) {
    throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  }
}

// ===== Car.js 유효성 검사

// 자동차 이름 길이 및 공백 검증
export function validateCarNameLengthAndEmpty(name) {
  // 이름 길이가 제한을 초과한 경우
  if (name.length > NAME_MAX_LENGTH) {
    throw new Error(ERROR_MESSAGE.NAME_LENGTH);
  }

  // 이름이 비어있는 경우
  if (name.length === 0) {
    throw new Error(ERROR_MESSAGE.NAME_EMPTY);
  }
}

// ===== Cars.js 유효성 검사

// 중복 이름 검증
export function validateDuplicationCarName(carList) {
  const names = carList.map((c) => c.name);
  const uniqueNames = new Set(names); // 중복 제거

  if (names.length != uniqueNames.size) {
    throw new Error(ERROR_MESSAGE.NAME_DUPLICATE);
  }
}
