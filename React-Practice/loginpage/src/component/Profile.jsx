import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  if(!user && user.UserName === '') return <h2>Please Login!</h2>

  return <div>Welcome {user.UserName} {user.Password}</div>
}

export default Profile