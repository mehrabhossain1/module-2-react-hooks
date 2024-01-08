import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ name, email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        type='text'
        name='name'
        id='name'
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type='text'
        name='email'
        id='email'
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
