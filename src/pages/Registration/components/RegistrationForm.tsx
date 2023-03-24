import { Controller, useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { schema } from './RegistrationSchema'

// components
import { Input } from 'components/EXPORT'

interface IFormInput {
  email: string
  login: string
  name: string
  phoneNumber: string
  password: string
  secondPassword: string
}

const RegistrationForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      login: '',
      name: '',
      phoneNumber: '',
      password: '',
      secondPassword: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
      <Controller
        name="login"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            value={value}
            onChange={onChange}
            error={!!error}
            errorMessage={error?.message}
            containerClassName="mb-3"
            label="Логин"
            placeholder="ivanivanov"
          />
        )}
      />
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            value={value}
            onChange={onChange}
            error={!!error}
            errorMessage={error?.message}
            containerClassName="mb-3"
            label="Имя"
            placeholder="Иван"
          />
        )}
      />
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
      <Controller
        name="secondPassword"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            value={value}
            onChange={onChange}
            error={!!error}
            errorMessage={error?.message}
            isPassword
            label="Пароль (ещё раз)"
          />
        )}
      />
      <button className="mb-4 h-12 mt-16 bg-blue-600 text-white rounded-lg font-medium">Зарегистрироваться</button>
      <Link to="/login" className="w-fit mx-auto">
        <button className=" text-blue-600">Войти</button>
      </Link>
    </form>
  )
}

export default RegistrationForm
