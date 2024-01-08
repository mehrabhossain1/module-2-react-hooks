import { Dispatch } from 'react'

type TCounter = {
  counter: number
  setCounter: Dispatch<React.SetStateAction<number>>
}

const UseStateExample = ({ counter, setCounter }: TCounter) => {
  // console.log('Render')

  // const handleIncrement = () => {
  //   // setCounter((prevState) => prevState + 1)
  //   setCounter((prevState) => prevState + 1)
  //   // setCounter(counter + 1)
  // }

  // const handleAsyncIncrement = () => {
  //   setTimeout(() => {
  //     setCounter((prevState) => prevState + 1)
  //   }, 2000)
  // }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default UseStateExample
