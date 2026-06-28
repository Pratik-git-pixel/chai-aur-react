import { useState } from "react"

function App() {
const [color, setColor] = useState('olive')
  return (
    
      <div className="w-full h-screen duration-400" style={{backgroundColor:color}} >

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">  
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
            <button className="outline-none px-4 rounded-full" style={{backgroundColor:'red'}} onClick={()=>setColor("red")}>Red</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor:'Green'}}  onClick={()=>setColor("green")}>Green</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor:'Yellow'}}  onClick={()=>setColor("yellow")}>Yellow</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor:'Blue',color:'white'}}  onClick={()=>setColor("blue")}>Blue</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor:'Pink'}}  onClick={()=>setColor("pink")}>Pink</button>
          </div>
        </div>
      </div>
  )
}

export default App
