import React from 'react'
import LoginCSS from './Login.module.css'

function Login() {
  return (
    <div className={LoginCSS.formWrapper}>
    <div className={LoginCSS.formContainer}>
      <h1> Please Login</h1>
      <form>
        <div className={LoginCSS.formControl}>
          <input type="text" required />
          <label> Email/PTIN</label>
        </div>

        <div className={LoginCSS.formControl}>
          <input type="password" required />
          <label> Password</label>
        </div>
        <button className={LoginCSS.loginBtn}>
          Login</button>
        <p className={LoginCSS.text}>Don't have an account? <a href="register.html"> Register</a></p>
      </form>
    </div>
    </div>
  
  )
}

export default Login