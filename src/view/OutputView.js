import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants.js";

export const OutputView = {
  // "실행 결과" 멘트 출력
  printResultInfo() {
    Console.print(OUTPUT_MESSAGES.RESULT_INFO);
  },

  // 각 차수별 결과 출력
  printRoundResult(cars) {
    const result = cars
      .map((car) => OUTPUT_MESSAGES.ROUND_RESULT(car.name, car.position))
      .join("\n");

    Console.print(result + "\n");
  },

  // 최종 우승자 출력
  printFinalWinners(winners) {
    Console.print(OUTPUT_MESSAGES.FINAL_WINNERS(winners.join(", ")));
  },

  // 에러메세지 출력
  printError(error) {
    Console.print(error.message);
  },
};
