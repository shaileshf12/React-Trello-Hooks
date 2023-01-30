
import React, {useState} from 'react'
import { createChecklist } from '../api'

function ChecklistCreate(props) {

    const [checklistName, setChecklistName] = useState('')

    function changeHandler(event) {
        setChecklistName(event.target.value)
    }

    function checklistSubmitHandler(event) {
        event.preventDefault()
        createChecklist(props.cardId, checklistName).then((addedChecklist)=>{
            // console.log(addedCheckList.id)
            props.setNewChecklist(addedChecklist.id)
        })
    }
  return (
    <div>
        <form onSubmit={checklistSubmitHandler}>
            <input onChange={changeHandler} value={checklistName} placeholder="Enter check list name"></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default ChecklistCreate