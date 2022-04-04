
import React, { FC, useState, useEffect } from 'react'
//import {useHistory} from 'react-router'

import Auth from '../../util/auth'

import { button } from '../../../src/styles'

const Login: FC = () => {
  //const history= useHistory()
  const [username] = useState('mswanson')
  const [password, setPassword] = useState('')


  const check = (form:any) => {
    form.preventDefault()
    if (password === 'identity') {
      // Used only for NDA, not secure
      Auth.login()
      //history.push({pathname: '/'})
    }
  }

  // If user has already entered the password, route to agent desktop
  useEffect(() => {
    if (Auth.isAuthenticated()) {
      alert('is authentcated!')
      //history.push({pathname: '/'})
    }
  }, [])

  return (
    <main id='login' className={`bg-cover`} style={{fontFamily: 'Montserrat', backgroundImage: 'public/assets/img/login-background.jpg'}} >
      <div className={`flex flex-col center text-center w-full h-full bg-violet opacity-60 px-12 py-10`}>
        <img alt="K2Bank Logo" src={'assets/img/k2-logo-white.svg'} className={`mb-10`} width="225" />
        <div className={`bg-white rounded-lg pt-8 pb-10 px-12 shadow-light-300`}>
          <h2 className="font-lg m-0  text-center">K2 Bank Agent Dashboard</h2>
          <form onSubmit={check}>
            <input type="text" value={username} placeholder="Username" />
            <input
              type="password"
              value={password}
              onChange={(input) => setPassword(input.target.value)}
              placeholder="Password"
            />
            <button id="check-status-btn" className={`${button}`} type="submit">
              Sign In
            </button>
            <span>Forgot username or password?</span>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login
