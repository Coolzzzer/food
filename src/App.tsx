import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
function App() {
	const [counter, setCounter] = useState("click")
  return (
    <>
     <Button children={counter} onClick={()=>{setCounter("clack")}}/>
    </>
  )
}

export default App
