import { MIN_LENGTH, REQUIRED_MSG, EMAIL_ERROR_MSG, PASS_REGEX, PASS_ERROR_MSG } from 'utils/EXPORT'
import * as yup from 'yup'

export const schema = yup.object().shape(
  {
    email: yup
      .string()
      .email(EMAIL_ERROR_MSG)
      .when('phoneNumber', {
        is: (phoneNumber: string) => !phoneNumber || phoneNumber.length === 0,
        then: yup.string().required(REQUIRED_MSG).email(EMAIL_ERROR_MSG),
        otherwise: yup.string()
      }),
    phoneNumber: yup
      .string()
      .min(...MIN_LENGTH(18))
      .when('email', {
        is: (email: string) => !email || email.length === 0,
        then: yup.string().required(REQUIRED_MSG),
        otherwise: yup.string()
      }),
    password: yup.string().required(REQUIRED_MSG).matches(PASS_REGEX, PASS_ERROR_MSG)
  },
  [['email', 'phoneNumber']]
)
