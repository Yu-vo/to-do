import React, { useEffect } from 'react'

export const ItemList = ({
  item,
  id,
  handleDelete,
  handleDone,
  handleAddDeleteToday,
  activeMode,
}) => {
  return (
    <li>
      <span onClick={handleDone} id={item.id}>
        {item.title}
      </span>
      {activeMode != 'Done' && (
        <button
          id={item.id}
          title={item.title}
          value={item.today}
          type="button"
          onClick={handleAddDeleteToday}
          style={item.today ? { color: 'yellow' } : { color: 'black' }}
        >
          ★
        </button>
      )}
      <button type="button" onClick={handleDelete} id={item.id}>
        ×
      </button>
    </li>
  )
}
