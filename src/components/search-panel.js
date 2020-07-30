import React, { useState } from 'react'

export const SearchPanel = ({ list, setSearchList }) => {
  const [text, setText] = useState('')

  const handleChange = e => setText(e.target.value)
  const handleSearch = e => {
    e.preventDefault()
    setSearchList(list.filter(item => item.title.includes(text)))
    // { id: '12', title: 'first', today: false, done: false },
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter query..."
          onChange={handleChange}
          values={text}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
