import RacingGame from "./domain/RacingGame.js";
import { InputView } from "./view/InputView.js";
import { OutputView } from "./view/OutputView.js";

class App {
  async run() {
    try {
      const names = await InputView.readCarNames();
      const count = await InputView.readMoveCount();

      const racingGame = new RacingGame(names);

      OutputView.printResultInfo();
      for (var i = 0; i < count; i++) {
        racingGame.playRound();

        const cars = racingGame.getCarsInfo();
        OutputView.printRoundResult(cars);
      }
      const winners = racingGame.getWinners();
      OutputView.printFinalWinners(winners);
    } catch (error) {
      //console.print(error.message);
      throw error;
    }
  }
}

export default App;
