import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './ProfileSchema'

// svg
import { ArrowIcon } from 'assets/icons/EXPORT'

// components
import { Input } from 'components/EXPORT'

// mocks
import { mockCurrentUser, mockUsers } from 'mocks/EXPORT'

const Profile = () => {
  const [isChanging, setIsChanging] = useState(false)
  const [user, setUser] = useState(mockCurrentUser)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (Object.entries(params).length !== 0) {
      setUser(mockUsers.filter(user => user.id === params.id)[0])
    }
  }, [params])

  const { handleSubmit, control } = useForm({
    defaultValues: user,
    resolver: yupResolver(schema)
  })

  const switchIsChanging = () => setIsChanging(!isChanging)

  const goBack = () => navigate(-1)

  const onSubmit = (data: any) => console.log(data)

  return (
    <div className="flex flex-row h-screen">
      <div
        onClick={goBack}
        className="hidden items-center h-[100vh] border-r sm:flex px-5 bg-gray-100 cursor-pointer hover:bg-gray-200"
      >
        <ArrowIcon width="36px" className="rotate-180 fill-blue-600" />
      </div>
      <div className="flex justify-center w-full sm:items-center my-3">
        <div onClick={goBack} className="sm:hidden block -mr-9">
          <ArrowIcon width="36px" className="rotate-180 fill-blue-600" />
        </div>
        <div className="sm:w-[550px] w-72">
          <div className="w-[100px] h-[100px] rounded-full bg-gray-300 mx-auto mb-4 cursor-pointer" />
          <div className="font-semibold text-3xl text-center mb-4">{user.name}</div>
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
            {Object.entries(params).length === 0 && (
              <div>
                <div className="w-full pb-2 border-b text-blue-600 font-medium mt-20 flex-row flex">
                  <div onClick={switchIsChanging} className="cursor-pointer">
                    {isChanging ? 'Сохранить' : 'Изменить данные'}
                  </div>
                  {isChanging && (
                    <div onClick={switchIsChanging} className="text-red-500 ml-5 cursor-pointer">
                      Отменить
                    </div>
                  )}
                </div>
                <div className="w-full py-2 border-b text-blue-600 font-medium cursor-pointer">Изменить пароль</div>
                <div className="pt-2 font-medium text-red-500 cursor-pointer">Выйти</div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
