import { Button, Grid } from "@mui/material"
import { Box, Container } from "@mui/system"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useContext } from "react"
import { Context } from "../main"

const Login = () => {
  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(auth, provider)
  }

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: window.innerHeight - 66 }}
      >
        <Grid
          style={{ width: 400, background: "lightgray" }}
          container
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button variant="outlined" onClick={login}>
              Sign up with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
