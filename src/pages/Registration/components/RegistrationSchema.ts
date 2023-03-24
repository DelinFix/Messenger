import { MIN_LENGTH, REQUIRED_MSG, EMAIL_ERROR_MSG, PASS_REGEX, PASS_ERROR_MSG } from 'utils/EXPORT'
import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup.string().required(REQUIRED_MSG).email(EMAIL_ERROR_MSG),
    login: yup.string().required(REQUIRED_MSG),
    name: yup.string().required(REQUIRED_MSG),
    phoneNumber: yup
      .string()
      .required(REQUIRED_MSG)
      .min(...MIN_LENGTH(18)),
    password: yup.string().required(REQUIRED_MSG).matches(PASS_REGEX, PASS_ERROR_MSG),
    secondPassword: yup
      .string()
      .required(REQUIRED_MSG)
      .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
  })
  .required()
