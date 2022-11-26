import { Avatar, Button, Grid } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import { signOut } from "firebase/auth"
import { useContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../main"

export default function Navbar() {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={2}>
        <Toolbar>
          {user ? (
            <>
              <Grid container justifyContent={"flex-end"}>
                <Avatar
                  alt={user.displayName ? user.displayName : ""}
                  src={user.photoURL ? user.photoURL : ""}
                />
                <Button onClick={() => signOut(auth)}>Exit</Button>
              </Grid>
            </>
          ) : (
            <>
              <Grid container justifyContent={"flex-end"}>
                <Button>Login</Button>
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
