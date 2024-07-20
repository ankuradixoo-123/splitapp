import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div className="auth">
      <h1>Login!</h1>
      <form>
        <input placeholder='Name'></input>
        <input placeholder='Email'></input>
       <button >Login</button>
       <span>Don't have an accouont? <Link to='/register'>Register</Link></span> 
       </form>
    </div>
  )
}

export default Login