import React from "react"
import { signInWithGoogle } from "../../firebase"

export const Login = () => {
  return (
    <div className="dashboard">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}