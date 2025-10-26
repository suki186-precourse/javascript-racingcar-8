import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
  // 실행 결과 멘트 출력
  printResultHeader() {
    Console.print("\n실행 결과");
  },

  // 한 라운드의 실행 결과 출력
  printRaceRoundResult(carInfo) {
    carInfo.forEach((car) => {
      const distance = "-".repeat(car.position);
      Console.print(`${car.name} : ${distance}`);
    });
    Console.print("");
  },

  // 최종 우승자 출력
  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  },

  // 에러 메세지 출력
  printError(message) {
    Console.print(message);
  },
};
