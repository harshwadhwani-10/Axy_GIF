import React, { useState } from 'react'

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handlesubmit=()=>{
  setEmail(email);
  setPassword(password);
}
function Login() {
  return (
    <>
      <h1>Login</h1>
<form onSubmit={handlesubmit}>
      <label>Email : </label>
      <input type="text" name="email"></input>

      <label>Password : </label>
      <input type="password" name="password"></input>
</form>
    </>
  )
}

export default Login
