// pages
import LoginForm from './components/LoginForm'

const Login = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto sm:w-[450px] border rounded-xl p-12 h-fit shadow-md">
        <div className="text-center font-medium text-3xl mb-10 mt-5">Вход</div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
