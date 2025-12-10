import React from 'react'

function Register() {
  return (
    <>
        
      <h1>Register</h1>

      <label>Name : </label>
      <input type="text" name="name"></input>

      <label>Email : </label>
      <input type="text" name="email"></input>

      <label>Password : </label>
      <input type="password" name="password"></input>

      <label>Confirm Password : </label>
      <input type="password" name="cpassword"></input>
    
    </>
  )
}

export default Register
