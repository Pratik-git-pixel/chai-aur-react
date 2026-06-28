import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Card} from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username:"Hitesh"
  }

  let myarr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl text-black'> Tailwind Test</h1>
      <Card username='Chai aur code' />
      


    </>
  )
}

export default App
