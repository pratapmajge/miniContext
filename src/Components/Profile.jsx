import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext.js'
import UserContextProvider from '../Context/UserContextProvider.jsx'

function Profile() {
    const {user} =useContext(UserContext)
  
    if (!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
