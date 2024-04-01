import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // let counter = 5

  const addValue = () => {
    // counter = counter + 1;
    if(counter >= 0 && counter < 10){
      setCounter(counter + 1)
    }else {
      alert("counter maxed")
    }
    // console.log("clicked", counter);
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  const resetValue = () => {
    setCounter(5);
  } 

  return (
    <>
    <h1>hello world</h1>
    <h2>counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value: {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value: {counter} </button>
    <br/>
    <button
    onClick={resetValue}>Reset</button>
    </>
  )
}

export default App
