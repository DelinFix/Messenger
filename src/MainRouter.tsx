import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Route, Routes } from 'react-router-dom'
import { Context } from './main'

// components
import { Loader } from 'components/EXPORT'

// pages
import { Chat, Profile, Login, Registration, Error } from 'pages/EXPORT'

export const privateRouter = [
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: '/chat/:id',
    element: <Chat />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/profile/:id',
    element: <Profile />
  },
  {
    path: '*',
    element: <Error />
  }
]

export const publicRouter = [
  {
    path: '/',
    element: <Registration />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Error />
  }
]

const MainRouter = () => {
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return (
    <Routes>
      {(!user ? privateRouter : publicRouter).map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  )
}

export default MainRouter
