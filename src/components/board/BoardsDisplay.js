
import React from 'react'
import '../style.css'
import { deleteBoard } from '../api'
import { useNavigate } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function BoardsDisplay(props) {

  function deleteBoardHandler(board) {
    deleteBoard(board.id).then((data)=>{
      console.log(data)
      props.setDeletedBoard(board.name)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const navigate = useNavigate()

  return (
    <div className='board-outer'>
      <button onClick={()=>{navigate(`${props.board.id}`)}} className='board'>
        <h3>{props.board.name}</h3>
      </button>
      <button onClick={()=>deleteBoardHandler(props.board)}>Delete</button>
    </div>
  )
}

export default BoardsDisplay