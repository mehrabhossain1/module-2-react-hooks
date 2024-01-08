import React, { useState } from 'react'

const Form = () => {
  //   const [name, setName] = useState('')
  //   const [email, setEmail] = useState('')

  const [user, setUser] = useState({ name: '', email: '' })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type='text'
        name='name'
        id='name'
      />
      <input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type='text'
        name='email'
        id='email'
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
