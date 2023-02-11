import { Controller, useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form/dist/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"

import * as yup from "yup"

// components
import { Input } from "~components"

interface IFormInput {
  email: string
  login: string
  name: string
  surname: string
  phoneNumber: string
  password: string
  secondPassword: string
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    login: yup.string().required(),
    name: yup.string().required(),
    surname: yup.string().required(),
    phoneNumber: yup.string().min(18).required(),
    password: yup.string().min(6).required(),
    secondPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null]),
  })
  .required()

const RegistrationForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      login: "",
      name: "",
      surname: "",
      phoneNumber: "",
      password: "",
      secondPassword: "",
    },
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

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
            errorMessage={"Некорректно введен email"}
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
            errorMessage={"Это поле обязательное"}
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
            errorMessage={"Это поле обязательное"}
            containerClassName="mb-3"
            label="Имя"
            placeholder="Иван"
          />
        )}
      />
      <Controller
        name="surname"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            value={value}
            onChange={onChange}
            error={!!error}
            errorMessage={"Это поле обязательное"}
            containerClassName="mb-3"
            label="Фамилия"
            placeholder="Иванов"
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
            errorMessage={"Некорректно введен номер телефона"}
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
            errorMessage={"Минимальная длина пароля 6 символов"}
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
            errorMessage={"Пароли должны совпадать"}
            isPassword
            label="Пароль (ещё раз)"
          />
        )}
      />
      <button className="mb-4 h-12 mt-16 bg-blue-600 text-white rounded-lg font-medium">
        Зарегистрироваться
      </button>
      <Link to="/login" className="w-fit mx-auto">
        <button className=" text-blue-600">Войти</button>
      </Link>
    </form>
  )
}

export default RegistrationForm
