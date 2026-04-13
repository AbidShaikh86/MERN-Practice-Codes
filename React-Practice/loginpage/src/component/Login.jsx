import { useContext, useState } from "react"
import UserContext from "../context/UserContext"


function Login() {
    const [UserName, setUserName] = useState('')
    const [Password, setPassword] = useState('')
    const {setUser} = useContext(UserContext) 

    const handleSubmit = (e) =>{
      e.preventDefault();
      setUser({UserName, Password})
    }

  return (
    <div>
        <h1>Login Page</h1>
        <br />
        <input type="text" placeholder='Enter Username' onChange={(e) => setUserName(e.target.value)} />
        <br />
        <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login