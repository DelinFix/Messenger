export const REQUIRED_MSG = 'Это поле обязательно'
export const EMAIL_ERROR_MSG = 'Некорректная почта'
export const PHONENUMBER_ERROR_MSG = 'Некорректный номер телефона'
export const PASS_ERROR_MSG =
  'Должен содержать минимум 8 символов, обязательной заглавной буквой, обязательной  цифрой или спецсимволом'

export const MIN_LENGTH = (minLength: number): [number, string] => {
  return [minLength, `Минимальная длина ${minLength}`]
}
export const MAX_LENGTH = (maxLength: number): [number, string] => {
  return [maxLength, `Максимальная длина ${maxLength}`]
}

//   (?=.*[0-9!@#$%^&*]) - строка содержит хотя бы один спецсимвол или число
//   (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре
//   (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре
//   [0-9a-zA-Z!@#$%^&*]{8,} - строка состоит не менее, чем из 8 вышеупомянутых символов
export const PASS_REGEX = /(?=.*[0-9!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
