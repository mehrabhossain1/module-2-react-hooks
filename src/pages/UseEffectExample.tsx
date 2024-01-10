import { useEffect, useState } from 'react'

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    console.log('Render')

    return () => {
      console.log('Inside cleanup')
    }
  }, [hidden])

  return (
    <div>
      <button onClick={() => setHidden((prev) => !prev)}>
        {hidden ? 'Show' : 'Hide'}
      </button>
      {!hidden && <Counter />}
    </div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log('Render')
      setCount((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <h1>{count}</h1>
}

export default UseEffectExample
