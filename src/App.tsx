import { useState } from 'react'
import './App.css'

export default function App() {
  const [count0, setCount0] = useState(0);
  const [count1, setCount1] = useState(0);
  function handleClick0() {
    setCount0(count0 + 1);
  }
  function handleClick1() {
    setCount1(count1 + 1);
  }
  return (
    <>
      <h1>xwz's world</h1>
      <div>
        <button onClick = {handleClick0}>click me {count0} times!</button>
      </div>
      <div>cl{count0 + count1}</div>
      <div>  
        <button onClick = {handleClick1}>click me {count1} times!</button>
      </div>
    </>
  )
}