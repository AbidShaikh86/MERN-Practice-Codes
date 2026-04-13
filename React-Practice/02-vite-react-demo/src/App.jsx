import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setValue] = useState(10)

  const increaseValue = () => {
    if (counter == 20) {
      setValue(counter)
    }else{
      setValue(counter + 1)
    }
  }

  const decreaseValue = () => {
    if (counter == 0) {
      setValue(counter)
    }else{
      setValue(counter - 1)
    }
  }

  return (
    <>
      <h1>Hello This Click Counter</h1>
      <p>Counter: {counter}</p>
      <button onClick={increaseValue}>Decrement by 1</button>
      <button onClick={decreaseValue}>Increment by 1</button>
    </>
  )
}

export default App
