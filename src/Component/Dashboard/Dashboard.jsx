import './Dashboard.scss'
import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Home } from './Home'
import { Login } from '../Login/Login'

export const Dashboard = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        console.log(user);
      } else {
        setUser(null)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{user ? <Home /> : <Login />}</div>
}
