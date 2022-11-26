import { useContext, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Chat from "./components/Chat"
import Login from "./components/Login"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "./main"
import Loader from "./components/Loader"

export const privateRouter = [
  {
    path: "chat",
    element: <Chat />,
  },
]

export const publicRouter = [
  {
    path: "login",
    element: <Login />,
  },
]

const MainRouter = () => {
  const navigate = useNavigate()
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    navigate(user ? "/chat" : "/login")
  }, [navigate, user])

  if (loading) {
    return <Loader />
  }

  return (
    <Routes>
      {(user ? privateRouter : publicRouter).map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  )
}

export default MainRouter
