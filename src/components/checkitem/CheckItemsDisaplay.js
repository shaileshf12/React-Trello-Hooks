import React, {useState} from 'react'
import { removeCheckItem } from '../../redux/checkitem/itemAction'
import { useDispatch, useSelector} from 'react-redux'
import { updateItem } from '../../redux/checkitem/itemAction'

function CheckItemsDisaplay(props) {

    const cardId = useSelector((state)=>state.checkList.cardId)
    const dispatch = useDispatch()

    function deleteCheckItemHandler(params) {
        dispatch(removeCheckItem(props.checkListId, props.checkItem.id))
    }

    const initialState = props.checkItem.state==='complete' ? true : false
    const [isChecked, setIsChecked] = useState(initialState)

    function itemChangeHandler(event) {
        setIsChecked(!isChecked)
        const newState = event.target.checked ? 'complete' : 'incomplete'
        dispatch(updateItem(cardId, props.checkListId, props.checkItem.id, newState))
    }

  return (
    <div>
        <span>
            <input id={props.checkItem.id} type="checkbox" onChange={itemChangeHandler} checked={isChecked}/>
            <label htmlFor={props.checkItem.id} className="checkItem-name">{props.checkItem.name}</label>
            <button onClick={deleteCheckItemHandler}>Delete</button>
        </span>
    </div>
  )
}

export default CheckItemsDisaplay