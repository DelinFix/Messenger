import React, { createContext, useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import MainRouter from "./MainRouter"
import "./css/App.css"

const app = initializeApp({
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
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
        <MainRouter />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
)
