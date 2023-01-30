import React from 'react'
import Board from './board/Board'
import { Routes, Route } from 'react-router-dom'
import List from './list/List'
import Checklist from './checklist/Checklist'
import { useLocation } from 'react-router-dom'

function Home() {
  // const location = useLocation()

  // console.log(location.state)
  return (
    <div>
        <Routes>
            <Route path='/' element={<Board/>}/>
            <Route path=':boardId' element={<List/>}/>
            <Route path=':boardId/:cardId' element={<Checklist/>}/>
        </Routes>
    </div>
  )
}

export default Home