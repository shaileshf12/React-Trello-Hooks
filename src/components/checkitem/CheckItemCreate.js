
import React, {useState} from 'react'
import { createCheckItem } from '../api'
import { addCheckItem } from '../../redux/checkitem/itemAction'
import { useDispatch } from 'react-redux'

function CheckItemCreate(props) {
    const [checkItemName, setCheckItemName] = useState('')
    const dispatch = useDispatch()

    function changeHandler(event) {
        setCheckItemName(event.target.value)
    }

    function checkItemSubmitHandler(event) {
        event.preventDefault()
        // createCheckItem(props.checkListId, checkItemName).then((addedCheckItem)=>{
        //     // console.log(addedCard.id)
        //     props.setNewCheckItem(addedCheckItem.id)
        // })
        dispatch(addCheckItem(props.checkListId, checkItemName))
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