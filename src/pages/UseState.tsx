import { useState } from 'react'

const UseStateExample = () => {
  const [counter, setCounter] = useState(0)
  console.log('Render')

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevStatus) => prevStatus + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevStatus) => prevStatus - 1)}>
        Decrement
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default UseStateExample
