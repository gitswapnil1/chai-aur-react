import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1);
  let [msg, setMsg] = useState('');
  // let counter = 5;

  const addValue = ()=>{
  if(counter == 20){
      console.log("not allowed");
      setMsg("Cannot add more than 20")
    }else{
      setCounter(counter + 1);
    console.log("value added",counter);
    }
    
  }

  const removeValue = ()=>{
    if(counter == 0){
      console.log("not allowed");
            setMsg("Number cannot be less than 0")

    }else{
      setCounter(counter - 1);
      console.log("value removed",counter);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
          <p>{msg}</p>
      <button
      onClick={addValue}
      >Add Value</button> &nbsp;

      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
