
import React from 'react'
import CheckItem from '../checkitem/CheckItem'
import { Button } from 'react-bootstrap'
import { removeCheckList } from '../../redux/checklist/checkListAction'
import { useDispatch, useSelector } from 'react-redux'

function ChecklistsDisplay(props) {

    const dispatch = useDispatch()
    const cardId = useSelector((state)=>state.checkList.cardId)

    function deleteChecklistHandler() {
        // deleteChecklist(props.cardId, props.checklist.id).then((deletedChecklist)=>{
        //     console.log(deletedChecklist)
        //     props.setDeletedChecklist(deleteChecklist.id)
        // })
        dispatch(removeCheckList(cardId, props.checklist.id))
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