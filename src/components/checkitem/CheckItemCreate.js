
import React, {useState} from 'react'
import { createCheckItem } from '../api'

function CheckItemCreate(props) {
    const [checkItemName, setCheckItemName] = useState('')

    function changeHandler(event) {
        setCheckItemName(event.target.value)
    }

    function checkItemSubmitHandler(event) {
        event.preventDefault()
        createCheckItem(props.checkListId, checkItemName).then((addedCheckItem)=>{
            // console.log(addedCard.id)
            props.setNewCheckItem(addedCheckItem.id)
        })
    }
  return (
    <div>
        <form onSubmit={checkItemSubmitHandler}>
            <input onChange={changeHandler} value={checkItemName} placeholder="Enter checkitem name"></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default CheckItemCreate