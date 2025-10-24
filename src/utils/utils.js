import { Random } from "@woowacourse/mission-utils";
import { RANDOM_MAX, RANDOM_MIN } from "../constants.js";
import Car from "../domain/Car.js";

// 문자열을 쉼표(,) 기준으로 나누기, 공백 제거
export function parseCarNameByComma(input) {
  return input.split(",").map((name) => name.trim());
}

// Car 객체 배열 생성
export function createCars(names) {
  return names.map((name) => new Car(name));
}

// 시도 횟수 입력값을 정수로 변환
export function parseTryCount(count) {
  return Number(count);
}

// 랜덤 숫자 생성
export function getRandomNumber() {
  return Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
}
