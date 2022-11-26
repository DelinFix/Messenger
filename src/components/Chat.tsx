import { Avatar, Button, Container, Grid, TextField } from "@mui/material"
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../main"
import { IMessage } from "../types/message"

const Chat = () => {
  const { auth, db } = useContext(Context)
  const messageCol = collection(db, "messages")
  const [user] = useAuthState(auth)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<IMessage[]>([])

  const getMessages = async () => {
    const data = await getDocs(messageCol)
    setMessages(data.docs.map((doc) => ({ ...doc.data() })))
  }

  useEffect(() => {
    getMessages()
  }, [])

  const sendMessage = async () => {
    if (message.trim()) {
      await addDoc(messageCol, {
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        text: message,
        createdAt: serverTimestamp(),
      })
      setMessage("")
      getMessages()
    }
  }

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        style={{ height: window.innerHeight - 64, marginTop: 10 }}
      >
        <div
          style={{
            width: "100%",
            height: "70vh",
            border: "1px solid grey",
            overflowY: "auto",
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.createdAt.toString()}
              style={{
                margin: 10,
                border:
                  user?.uid === msg.uid ? "2px solid green" : "2px dashed red",
                marginLeft: user?.uid === msg.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
              }}
            >
              <Grid>
                <Avatar src={msg.photoURL} />
                <div>{msg.displayName}</div>
              </Grid>
              <div>{msg.text}</div>
            </div>
          ))}
        </div>
        <Grid container direction="column" alignItems="flex-end">
          <TextField
            variant="outlined"
            multiline
            fullWidth
            maxRows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={sendMessage} variant="outlined">
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
