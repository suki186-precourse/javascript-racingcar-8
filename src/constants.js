// === 랜덤 값 범위
export const RANDOM_MIN = 0; // 최소
export const RANDOM_MAX = 9; // 최대

// === 자동차
export const MOVE_STANDARD = 4; // 전진하는 기준 값
export const MOVE_STEP = 1; // 한번에 전진하는 거리
export const NAME_DELIMITER = ","; // 이름 구분자
export const NAME_MAX_LENGTH = 5; // 이름 최대 길이
// 한글, 영문, 숫자, 쉼표 외 입력 불가 정규식
export const VALID_CAR_NAME_REGEX = /^[a-zA-Z0-9가-힣,\s]*$/;

// === 시도 횟수
export const VALID_TRY_COUNT_REGEX = /^[1-9]\d*$/; // 1이상의 정수 정규식

// === 에러 메세지
export const ERROR = "[ERROR]";

export const ERROR_MESSAGE = {
  NAME_LENGTH: `${ERROR} 자동차 이름은 ${NAME_MAX_LENGTH}자 이하만 가능합니다.`,
  NAME_EMPTY: `${ERROR} 자동차 이름은 공백일 수 없습니다.`,
  NAME_DUPLICATE: `${ERROR} 중복된 자동차 이름이 있습니다.`,
  INVALID_DELIMITER: `${ERROR} 자동차 이름은 쉼표(,)로 구분해야 합니다.`,
  INVALID_TRY_COUNT: `${ERROR} 시도 횟수는 1 이상의 정수여야 합니다.`,
};
