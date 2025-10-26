import {
  ERROR_MESSAGE,
  VALID_CAR_NAME_REGEX,
  NAME_DELIMITER,
  VALID_TRY_COUNT_REGEX,
} from "../constants.js";
import Car from "../domain/Car.js";

// 문자열을 쉼표(,) 기준으로 나누기, 공백 제거
export function parseCarNameByComma(input) {
  return input.split(NAME_DELIMITER).map((name) => name.trim());
}

// Car 객체 배열 생성
export function createCars(names) {
  return names.map((name) => new Car(name));
}

// 시도 횟수 입력값을 정수로 변환
export function parseTryCount(count) {
  return Number(count);
}

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
