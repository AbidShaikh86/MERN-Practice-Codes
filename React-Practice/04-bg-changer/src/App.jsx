import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("black");

  return (
    <>
      <div className="container" style={{backgroundColor: color}}>
        <div className="box">
          <button className='red btn' style={{backgroundColor: "Red"}} onClick={() => setColor("red")}>Red</button>
          <button className='green btn' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
          <button className='yellow btn' style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
          <button className='blue btn' style={{backgroundColor: "blue", color: "white"}} onClick={() => setColor("blue")}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
