import { useState, MouseEvent } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'

function App() {
	const [counter, setCounter] = useState("click")
	const addCounter = (e: MouseEvent) => {
		setCounter("clack")
		console.log(e)
	}
  return (
		<>
			<Button children={counter} onClick={(e)=>{addCounter(e)}} appearance='big'/>
			<Button children={counter} onClick={(e)=>{addCounter(e)}} appearance='small'/>
			<Input placeholder='Email'/>
    </>
  )
}

export default App 
