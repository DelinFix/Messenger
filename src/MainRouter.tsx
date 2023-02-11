import { useContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Route, Routes } from "react-router-dom"
import { Context } from "./main"

// components
import { Loader } from "~components"

// pages
import { Chat, Profile, Login, Registration } from "~pages"

export const privateRouter = [
    {
        path: "/",
        element: <Chat />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]

export const publicRouter = [
    {
        path: "/",
        element: <Registration />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]

const MainRouter = () => {
    const { auth } = useContext(Context)
    const [user, loading] = useAuthState(auth)

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
