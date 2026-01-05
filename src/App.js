import { RacingGameController } from "./controller/RacingGameController.js";

class App {
  #controller;

  constructor() {
    this.#controller = new RacingGameController();
  }

  async run() {
    await this.#controller.run();
  }
}

export default App;
