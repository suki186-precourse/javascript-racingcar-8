import { Random } from "@woowacourse/mission-utils";
import { RANDOM_LOGIC } from "../constants.js";

// 랜덤 값 추출
export function getRandomNumber() {
  return Random.pickNumberInRange(RANDOM_LOGIC.MIN, RANDOM_LOGIC.MAX);
}
