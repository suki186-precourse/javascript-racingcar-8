// ===== 입력 메세지
export const INPUT_MESSAGES = Object.freeze({
  ENTER_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  ENTER_MOVE_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

// ===== 출력 메세지
export const OUTPUT_MESSAGES = Object.freeze({
  RESULT_INFO: "\n실행 결과\n",
  ROUND_RESULT: (name, distance) => `${name} : ${"-".repeat(distance)}`,
  FINAL_WINNERS: (winners) => `\n최종 우승자 : ${winners}`,
});

export const COMMON = Object.freeze({
  DELIMITERS: ",",
});

// ===== 자동차
export const CAR_LOGIC = Object.freeze({
  MOVE_STANDARD: 4,
  MOVE_STEP: 1,
});

// ===== 에러 메세지
export const ERROR = "[ERROR]";

export const ERROR_MESSAGES = Object.freeze({
  // 1. 자동차 이름
  INVALID_CAR_NAME: `${ERROR} 자동차 이름은 5자 이하만 가능합니다.`,

  // 2. 구분자

  // 3. 이동 횟수
});
