import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [isNumberOn, setIsNumberOn] = useState(false);
  const [isCharOn, setIsCharOn] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJPLMNOPQRSTUVWXYZ";

    if (isNumberOn) str += "1234567890";
    if (isCharOn) str += "!@#$%&()_-";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass)
  }, [length, isNumberOn, isCharOn])

  const copyPassword = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumberOn, isCharOn, passwordGenerator])

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Password Generator</h1>
          <div className="input">
            <input type="text" value={password} placeholder='Password' readOnly />
            <button className='btn-copy' onClick={copyPassword}>copy</button>
          </div>
          <div className="range">
            <input type="range" className='range' min={10} max={25} value={length} onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor=".range">Length: {length}</label>
          </div>
          <div className='check-boxs'>
            <input type="checkbox" id="checkNumber" defaultChecked={isNumberOn} onChange={() => { setIsNumberOn((prev) => !prev) }} />
            <label htmlFor="checkNumber">Add Number</label>
            <input type="checkbox" id="checkChar" onChange={() => { setIsCharOn((prev) => !prev) }} />
            <label htmlFor="checkChar">Add Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
