import React, { createContext } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { initializeApp } from "firebase/app"
import Navbar from "./components/Navbar"
import MainRouter from "./MainRouter"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import "./App.css"

const app = initializeApp({
  apiKey: "AIzaSyAqAons3jfkXkBxOQK1RNuoS2Ehxi1TPXo",
  authDomain: "chat-dde85.firebaseapp.com",
  projectId: "chat-dde85",
  storageBucket: "chat-dde85.appspot.com",
  messagingSenderId: "898254287619",
  appId: "1:898254287619:web:12f20c913a4e6c1bf12f36",
  measurementId: "G-Z8LWHYKTKH",
})

const auth = getAuth(app)
const db = getFirestore(app)

export const Context = createContext({ auth, db })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Context.Provider value={{ auth, db }}>
      <BrowserRouter>
        <Navbar />
        <MainRouter />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
)
