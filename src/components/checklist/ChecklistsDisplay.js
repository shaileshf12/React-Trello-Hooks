
import React from 'react'
import { deleteChecklist } from '../api'
import CheckItem from '../checkitem/CheckItem'
import { Button } from 'react-bootstrap'

function ChecklistsDisplay(props) {

    function deleteChecklistHandler() {
        deleteChecklist(props.cardId, props.checklist.id).then((deletedChecklist)=>{
            console.log(deletedChecklist)
            props.setDeletedChecklist(deleteChecklist.id)
        })
    }

  return (
    <div className='checklist'>
        <div className='checklist-name'>
            <h2>{props.checklist.name}</h2>
            <div>
                <CheckItem checkListId={props.checklist.id}/>
            </div>
        </div>
        <Button className='checklist-delete-button' onClick={deleteChecklistHandler}>Delete</Button>
    </div>
  )
}

export default ChecklistsDisplay