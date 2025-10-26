import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  // 예외 케이스 데이터
  const exceptionTestCases = [
    {
      name: "자동차 이름이 5자를 초과한 경우",
      inputs: ["suki,woowaaa", "1"],
    },
    {
      name: "자동차 이름이 공백인 경우 (연속 쉼표)",
      inputs: ["suki,,poki", "1"],
    },
    {
      name: "중복된 이름이 있는 경우",
      inputs: ["suki,poki,suki", "1"],
    },
    {
      name: "시도 횟수가 숫자가 아닌 경우",
      inputs: ["suki,poki", "abc"],
    },
    {
      name: "시도 횟수가 1 미만인 경우 (0)",
      inputs: ["suki,poki", "0"],
    },
    {
      name: "쉼표 외 다른 구분자를 사용한 경우",
      inputs: ["suki;poki", "1"],
    },
  ];

  test.each(exceptionTestCases)("예외 테스트: $name", async ({ inputs }) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
