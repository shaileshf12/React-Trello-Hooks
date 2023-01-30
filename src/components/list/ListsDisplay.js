
import React from 'react'
import { deleteList } from '../api'
import Card from '../card/Card'

function ListsDisplay(props) {

    // console.log(props)

    function deleteListHandler(list) {
        console.log(list.id)
        deleteList(list.id).then((list)=>{
            props.setDeletedList(list.id)
        })
       
    }

  return (
    <div className='each-list'>
        <div> 
            <h3 className='list-name'>{props.list.name}</h3>
            <div>
                <Card list={props.list}/>
            </div>
        </div>
        <button className='list-delete-button' onClick={()=>deleteListHandler(props.list)}>Delete List</button>
    </div>
  )
}

export default ListsDisplay