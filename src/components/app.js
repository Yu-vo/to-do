import React, { useState, useEffect } from 'react'

import { List } from './list/list'
import { AddPanel } from './add-panel'
import { Switch } from './switch'
import { SearchPanel } from './search-panel'

export const App = () => {
  const [list, setList] = useState([
    { id: '12', title: 'first', today: false, done: false },
    { id: '2', title: '123', today: false, done: true },
  ])
  const [activeList, setActiveList] = useState([])
  const [doneList, setDoneList] = useState([])
  const [todayList, setTodayList] = useState([])
  const [searchList, setSearchList] = useState([])

  const [activeMode, setActiveMode] = useState('Active')
  useEffect(() => {
    setTodayList(list.filter(item => item.today))
    setDoneList(list.filter(item => item.done))
    setActiveList(list.filter(item => !item.done))
  }, [list])
  return (
    <div>
      <Switch setActiveMode={setActiveMode} />
      <SearchPanel
        list={
          activeMode === 'Active'
            ? activeList
            : activeMode === 'Done'
            ? doneList
            : todayList
        }
        setSearchList={setSearchList}
      />
      <List
        list={
          searchList.length > 0
            ? searchList
            : activeMode === 'Active'
            ? activeList
            : activeMode === 'Done'
            ? doneList
            : todayList
        }
        activeMode={activeMode}
        setList={setList}
        setDoneList={setDoneList}
        setList={setList}
        setTodayList={setTodayList}
      />
      <AddPanel setList={setList} />
    </div>
  )
}
