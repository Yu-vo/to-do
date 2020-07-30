import React from 'react'

export const Switch = ({ setActiveMode }) => {
  const btn = [
    { id: 'Active', title: 'Active' },
    { id: 'Done', title: 'Done' },
    { id: 'Today', title: 'Today' },
  ]
  const handleClick = e => {
    setActiveMode(e.target.id)
  }
  const switchBtn = btn.map(item => (
    <button key={item.id} type="button" id={item.id} onClick={handleClick}>
      {item.title}
    </button>
  ))
  return <div>{switchBtn}</div>
}
