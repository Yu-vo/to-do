import React, { useState } from 'react'

export const AddPanel = ({ setList }) => {
  const [text, setText] = useState('')
  const handleChange = e => setText(e.target.value)
  const handleAdd = e => {
    e.preventDefault()
    setList(list =>
      list.concat({
        id: Date.now() + text + Math.floor(Math.random() * 100),
        title: text,
        today: false,
        done: false,
      })
    )
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="New case"
          onChange={handleChange}
          values={text}
        ></input>
        <button type="submit">Добавить</button>
      </form>
    </div>
  )
}
