import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext.js'

function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handlesubmit =(e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (

    <div>
      <h2>Login</h2>

      <input type='text'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='UserName'/> 
      {" "}
      <input type='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password'/>

      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
