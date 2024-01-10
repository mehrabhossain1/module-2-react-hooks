import { useEffect, useState } from 'react'

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false)
  const [user, setUser] = useState({ name: '', email: '' })

  console.log(user)

  useEffect(() => {
    console.log('Render')
  }, [user.name, user.email])

  return (
    <div>
      <input
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        type='text'
        name='name'
        id='name'
      />
      <input
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        type='text'
        name='email'
        id='email'
      />
    </div>
  )

  // useEffect(() => {
  //   console.log('Render')

  //   return () => {
  //     console.log('Inside cleanup')
  //   }
  // }, [hidden])

  // return (
  //   <div>
  //     <button onClick={() => setHidden((prev) => !prev)}>
  //       {hidden ? 'Show' : 'Hide'}
  //     </button>
  //     {!hidden && <Todo />}
  //   </div>
  // )
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

const Todo = () => {
  const controller = new AbortController()
  const signal = controller.signal

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title))

    return () => {
      controller.abort()
    }
  }, [])
  return <div>Todo</div>
}

export default UseEffectExample
