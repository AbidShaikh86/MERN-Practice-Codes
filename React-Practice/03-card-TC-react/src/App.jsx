import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  let age = parseInt(Math.random() * 10 + 10);
  let age1 = parseInt(Math.random() * 10 + 10);
  return (
    <>
      <Card username='Abid_Shaikh_86' age={age}/>
      <br></br>
      <Card username='Alone_Forever_86' age={age1}/>
    </>
  )
}

export default App
