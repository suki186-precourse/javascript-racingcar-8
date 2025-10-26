// === 랜덤 값 범위
export const RANDOM_MIN = 0; // 최소
export const RANDOM_MAX = 9; // 최대

// === 자동차
export const MOVE_STANDARD = 4; // 전진하는 기준 값
export const MOVE_STEP = 1; // 한번에 전진하는 거리
export const NAME_DELIMITER = ","; // 이름 구분자
export const NAME_MAX_LENGTH = 5; // 이름 최대 길이

// === 에러 메세지
export const ERROR = "\n[ERROR]";

export const ERROR_MESSAGE = {
  NAME_LENGTH: `${ERROR} 자동차 이름은 ${NAME_MAX_LENGTH}자 이하만 가능합니다.`,
  NAME_EMPTY: `${ERROR} 자동차 이름은 공백일 수 없습니다.`,
  NAME_DUPLICATE: `${ERROR} 중복된 자동차 이름이 있습니다.`,
};
