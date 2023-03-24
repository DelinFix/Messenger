import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { schema } from './LoginSchema'

import cls from 'classnames'

// components
import { Input } from 'components/EXPORT'

interface ILoginForm {
  email: string
  phoneNumber: string
  password: string
}

const LoginForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      phoneNumber: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })
  const [tab, setTab] = useState('phone')

  const onSubmit: SubmitHandler<ILoginForm> = data => console.log(data)

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
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              containerClassName="mb-3"
              value={value}
              onChange={onChange}
              error={!!error}
              errorMessage={error?.message}
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
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              error={!!error}
              errorMessage={error?.message}
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
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            value={value}
            onChange={onChange}
            error={!!error}
            errorMessage={error?.message}
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
