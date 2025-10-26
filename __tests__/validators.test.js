import {
  validateCarName,
  validateTryCount,
  validateCarNameLengthAndEmpty,
  validateDuplicationCarName,
} from "../src/utils/validators.js";
import { ERROR_MESSAGE } from "../src/constants.js";
import Car from "../src/domain/Car.js";

describe("유효성 검사 단위 테스트", () => {
  describe("validateCarName (구분자)", () => {
    test("쉼표 외 다른 구분자를 사용한 경우", () => {
      expect(() => validateCarName("suki;poki")).toThrow(
        ERROR_MESSAGE.INVALID_DELIMITER
      );
    });

    test("정상적인 입력은 통과", () => {
      expect(() => validateCarName("suki,poki,cuki")).not.toThrow();
    });
  });

  describe("validateTryCount (시도 횟수 형식)", () => {
    test.each([
      ["abc"], // 숫자 아님
      ["1.5"], // 정수 아님
      ["0"], // 1 미만: 0
      ["-1"], // 1 미만
      [" "], // 공백
      [null], // null
    ])("시도 횟수가 유효하지 않은 경우", (input) => {
      expect(() => validateTryCount(input)).toThrow(
        ERROR_MESSAGE.INVALID_TRY_COUNT
      );
    });

    test("1 이상의 정수는 통과", () => {
      expect(() => validateTryCount("5")).not.toThrow();
    });
  });

  describe("validateCarNameLengthAndEmpty (자동차 이름 길이/공백)", () => {
    test("자동차 이름이 5자를 초과한 경우", () => {
      expect(() => validateCarNameLengthAndEmpty("woowaaa")).toThrow(
        ERROR_MESSAGE.NAME_LENGTH
      );
    });

    test("자동차 이름이 공백인 경우", () => {
      expect(() => validateCarNameLengthAndEmpty("")).toThrow(
        ERROR_MESSAGE.NAME_EMPTY
      );
    });

    test("정상 이름은 통과", () => {
      expect(() => validateCarNameLengthAndEmpty("woo")).not.toThrow();
    });
  });

  describe("validateDuplicationName (이름 중복)", () => {
    test("중복된 이름이 있는 경우", () => {
      const carList = [new Car("suki"), new Car("poki"), new Car("suki")];
      expect(() => validateDuplicationCarName(carList)).toThrow(
        ERROR_MESSAGE.NAME_DUPLICATE
      );
    });

    test("중복된 이름이 없으면 통과", () => {
      const carList = [new Car("suki"), new Car("poki"), new Car("cuki")];
      expect(() => validateDuplicationCarName(carList)).not.toThrow();
    });
  });
});
