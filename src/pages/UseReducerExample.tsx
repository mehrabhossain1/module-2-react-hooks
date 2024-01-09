import { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'increment':
      return { count: currentState.count + 1 }

    case 'incrementBySetAmount':
      return { count: currentState.count + action.payload }

    case 'decrement':
      return { count: currentState.count - 1 }

    case 'decrementBySetAmount':
      return { count: currentState.count - action.payload }

    default:
      return currentState
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button
        onClick={() => dispatch({ type: 'incrementBySetAmount', payload: 3 })}
      >
        Increment By 3
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button
        onClick={() => dispatch({ type: 'decrementBySetAmount', payload: 9 })}
      >
        Decrement By 9
      </button>
    </div>
  )
}

export default UseReducerExample
