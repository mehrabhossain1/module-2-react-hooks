import { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'increment':
      return { count: currentState + 1 }

    case 'decrement':
      return { count: currentState - 1 }
    default:
      return currentState
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>{state.count}</h1>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
}

export default UseReducerExample
