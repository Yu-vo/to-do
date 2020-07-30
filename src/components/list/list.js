import React from 'react'
import { ItemList } from './item-list'

export const List = ({
  list,
  activeMode,
  setList,
  setDoneList,
  setTodayList,
}) => {
  const handleDelete = e => {
    e.persist()
    setList(list => list.filter(item => item.id != e.target.id))
  }

  const handleDone = e => {
    e.persist()
    setList(list =>
      list.map(item =>
        e.target.id == item.id
          ? {
              id: item.id,
              title: item.title,
              today: item.today,
              done: !item.done,
            }
          : item
      )
    )
  }
  const handleAddDeleteToday = e => {
    e.persist()
    setList(currentList =>
      currentList.map(item =>
        item.id == e.target.id
          ? {
              id: e.target.id,
              title: e.target.title,
              today: !JSON.parse(e.target.value),
            }
          : item
      )
    )
  }
  const listItem = list ? (
    list.map(item => {
      return (
        <ItemList
          activeMode={activeMode}
          key={item.id + 'itemlist'}
          item={item}
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleAddDeleteToday={handleAddDeleteToday}
        />
      )
    })
  ) : (
    <div></div>
  )
  return <ul>{listItem}</ul>
}
