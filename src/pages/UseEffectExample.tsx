import { useEffect, useState } from 'react'

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false)

  const [count, setCount] = useState(0)

  //   useEffect(() => {
  //     console.log('Render')

  //     return () => {
  //       console.log('Inside cleanup')
  //     }
  //   }, [hidden])

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1)
      console.log('setInterval')
    }, 1000)
  }, [])

  return (
    <div>
      {/* <button onClick={() => setHidden((prev) => !prev)}>Click</button> */}
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffectExample
