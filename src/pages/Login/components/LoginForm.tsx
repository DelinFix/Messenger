import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

import cls from 'classnames'

import * as yup from 'yup'

// components
import { Input } from 'components/EXPORT'

interface IFormInput {
  email: string
  phoneNumber: string
  password: string
}

var formModelSchema = yup.object().shape(
  {
    email: yup
      .string()
      .email()
      .when('phoneNumber', {
        is: phoneNumber => !phoneNumber || phoneNumber.length === 0,
        then: yup.string().email().required(),
        otherwise: yup.string()
      }),
    phoneNumber: yup
      .string()
      .min(18)
      .when('email', {
        is: email => !email || email.length === 0,
        then: yup.string().required(),
        otherwise: yup.string()
      }),
    password: yup.string().min(6).required()
  },
  [['email', 'phoneNumber']]
)

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      phoneNumber: '',
      password: ''
    },
    resolver: yupResolver(formModelSchema)
  })
  const [tab, setTab] = useState('phone')

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row my-3 border rounded-lg">
        <div
          className={cls(
            'w-full justify-center flex py-2 rounded-l-lg cursor-pointer',
            tab === 'phone' && 'bg-blue-600 text-white'
          )}
          onClick={() => setTab('phone')}
        >
          Телефон
        </div>
        <div
          className={cls(
            'w-full justify-center flex py-2 rounded-r-lg cursor-pointer',
            tab !== 'phone' && 'bg-blue-600 text-white'
          )}
          onClick={() => setTab('email')}
        >
          Почта
        </div>
      </div>
      {tab === 'phone' && (
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              containerClassName="mb-3"
              value={value}
              onChange={onChange}
              error={!!errors.phoneNumber}
              placeholder="+7 111-111-11-11"
              isNumber
              label="Телефон"
            />
          )}
        />
      )}
      {tab === 'email' && (
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              error={!!errors.email}
              containerClassName="mb-3"
              label="Почта"
              placeholder="email@email.com"
            />
          )}
        />
      )}
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            error={!!errors.password}
            containerClassName="mb-3"
            isPassword
            label="Пароль"
          />
        )}
      />
      <button className="mb-4 h-12 mt-16 bg-blue-600 text-white rounded-lg font-medium">Войти</button>
      <Link to="/" className="w-fit mx-auto">
        <button className=" text-blue-600">Зарегистрироваться</button>
      </Link>
    </form>
  )
}

export default LoginForm
