import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <>
        <h1>Log in</h1>
        <form action="">
            <label htmlFor="user">User</label>
            <input type="email" name="" id="user" placeholder='Email'/>
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" placeholder='Password'/>
            <input type="submit" />
        </form>
    
    </>

    
  )
}

export default Login