import RacingGame from "../domain/RacingGame.js";
import { InputView } from "../view/InputView.js";
import { OutputView } from "../view/OutputView.js";

export class RacingGameController {
  #racingGame;
  #moveCount;

  async run() {
    try {
      await this.#setup();
      this.#play();
      this.#finish();
    } catch (error) {
      throw error;
    }
  }

  // 사용자 입력 및 객체 생성
  async #setup() {
    const names = await InputView.readCarNames();
    const count = await InputView.readMoveCount();

    this.#racingGame = new RacingGame(names);
    this.#moveCount = count;
  }

  // 경주 진행 (반복)
  #play() {
    const racingGame = this.#racingGame;
    OutputView.printResultInfo();

    for (let i = 0; i < this.#moveCount; i++) {
      racingGame.playRound();

      const cars = racingGame.getCarsInfo();
      OutputView.printRoundResult(cars);
    }
  }

  // 최종 우승자 출력
  #finish() {
    const winners = this.#racingGame.getWinners();
    OutputView.printFinalWinners(winners);
  }
}
