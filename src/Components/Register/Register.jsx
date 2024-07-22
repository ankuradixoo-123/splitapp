import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
const Register = () => {
  return (
    <div className="auth">
      <h1>Register!</h1>
      <form>
        <input placeholder='Name'></input>
        <input placeholder='Email'></input>
       <button>Signup</button>
       <span>Already have an account ? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register