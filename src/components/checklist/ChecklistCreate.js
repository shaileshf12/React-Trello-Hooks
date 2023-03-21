
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addCheckList } from '../../redux/checklist/checkListAction'
import { useSelector } from 'react-redux'

function ChecklistCreate(props) {

    const [checklistName, setChecklistName] = useState('')
    const dispatch = useDispatch()
    const cardId = useSelector((state)=>state.checkList.cardId)

    function changeHandler(event) {
        setChecklistName(event.target.value)
    }

    function checklistSubmitHandler(event) {
        event.preventDefault()
        // createChecklist(props.cardId, checklistName).then((addedChecklist)=>{
        //     // console.log(addedCheckList.id)
        //     props.setNewChecklist(addedChecklist.id)
        // })
        dispatch(addCheckList(cardId, checklistName))
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