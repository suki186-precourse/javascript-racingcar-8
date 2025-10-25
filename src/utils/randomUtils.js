import { Random } from "@woowacourse/mission-utils";
import { RANDOM_MAX, RANDOM_MIN } from "../constants.js";

// ===== 난수(랜덤 값) 생성 관련 util 함수

// 랜덤 숫자 생성
export function getRandomNumber() {
  return Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
}
