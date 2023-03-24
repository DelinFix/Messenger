import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

// svg
import { ArrowIcon } from 'assets/icons/EXPORT'

// components
import { Input } from 'components/EXPORT'

const user = {
  email: 'denis.basenko@yandex.ru',
  login: 'ivanivanov',
  name: 'Ivan',
  surname: 'Ivanov',
  phoneNumber: '+7 (111) 111-11-11'
}

const schema = yup
  .object({
    email: yup.string().email('Некорректно введен email').required(),
    login: yup.string().required(),
    name: yup.string().required(),
    surname: yup.string().required(),
    phoneNumber: yup.string().min(18, 'Некорректно введен номер телефона').required()
  })
  .required('Все поля обязательны')

const Profile = () => {
  const [isChanging, setIsChanging] = useState(false)
  const { handleSubmit, control } = useForm({
    defaultValues: user,
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <div className="flex flex-row h-screen">
      <Link to="/" className="flex items-center h-screen border-r px-5 bg-gray-100 cursor-pointer hover:bg-gray-200">
        <ArrowIcon width="35px" className="rotate-180 fill-blue-600" />
      </Link>
      <div className="flex justify-center w-full items-center">
        <div className="w-[550px]">
          <div className="w-[100px] h-[100px] rounded-full bg-gray-300 mx-auto mb-4" />
          <div className="font-semibold text-3xl text-center mb-4">Ivan</div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row w-full pb-3 mt-3 border-b justify-between">
              <div className="font-semibold">Почта</div>
              {isChanging ? (
                <Controller
                  name="email"
                  control={control}
                  defaultValue={user.email}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      placeholder="email@email.com"
                      className="border-none px-0"
                    />
                  )}
                />
              ) : (
                <div className="text-gray-400">{user.email}</div>
              )}
            </div>
            <div className="flex flex-row w-full pb-3 mt-3 border-b justify-between">
              <div className="font-semibold">Логин</div>
              {isChanging ? (
                <Controller
                  name="login"
                  control={control}
                  defaultValue={user.login}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      placeholder="ivanivanov"
                      className="border-none px-0"
                    />
                  )}
                />
              ) : (
                <div className="text-gray-400">{user.login}</div>
              )}
            </div>
            <div className="flex flex-row w-full pb-3 mt-3 border-b justify-between">
              <div className="font-semibold">Имя</div>
              {isChanging ? (
                <Controller
                  name="name"
                  control={control}
                  defaultValue={user.name}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      className="border-none px-0"
                      placeholder="Иван"
                    />
                  )}
                />
              ) : (
                <div className="text-gray-400">{user.name}</div>
              )}
            </div>
            <div className="flex flex-row w-full pb-3 mt-3 border-b justify-between">
              <div className="font-semibold">Фамилия</div>
              {isChanging ? (
                <Controller
                  name="surname"
                  control={control}
                  defaultValue={user.surname}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      className="border-none px-0"
                      placeholder="Иванов"
                    />
                  )}
                />
              ) : (
                <div className="text-gray-400">{user.surname}</div>
              )}
            </div>
            <div className="flex flex-row w-full pb-3 mt-3 justify-between">
              <div className="font-semibold">Телефон</div>
              {isChanging ? (
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <Input
                      className="border-none px-0"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      placeholder="+7 111-111-11-11"
                      isNumber
                    />
                  )}
                />
              ) : (
                <div className="text-gray-400">{user.phoneNumber}</div>
              )}
            </div>
            <div className="w-full pb-2 border-b text-blue-600 font-medium mt-20 flex-row flex">
              <div onClick={() => setIsChanging(!isChanging)} className="cursor-pointer">
                {isChanging ? 'Сохранить' : 'Изменить данные'}
              </div>
              {isChanging && (
                <div onClick={() => setIsChanging(!isChanging)} className="text-red-500 ml-5 cursor-pointer">
                  Отменить
                </div>
              )}
            </div>
          </form>
          <div className="w-full py-2 border-b text-blue-600 font-medium cursor-pointer">Изменить пароль</div>
          <div className="pt-2 font-medium text-red-500 cursor-pointer">Выйти</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
