import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15,[])

  const addValue = ()=>{
  setCounter((prev)=>prev+1)
  setCounter((prev)=>prev+1)
  console.log(counter)
 }

 const removeValue = ()=>{
  setCounter(counter-1)
 }


  return (
    <>
      <h1>Chai aur React - {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
