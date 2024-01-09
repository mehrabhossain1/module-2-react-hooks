import { ChangeEvent, useReducer } from 'react'

type TAction = {
  type: string
  payload: string
}

const initialState = { name: '', email: '' }

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case 'addName':
      return { ...currentState, name: action.payload }

    case 'addEmail':
      return { ...currentState, email: action.payload }

    default:
      break
  }
}

const UseReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: 'addName', payload: e.target.value })}
        type='text'
        name='name'
        id='name'
      />
      <input
        onChange={(e) =>
          dispatch({ type: 'addEmail', payload: e.target.value })
        }
        type='text'
        name='email'
        id='email'
      />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default UseReducerForm
