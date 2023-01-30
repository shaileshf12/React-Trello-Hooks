import React, {useState, useContext, useEffect} from 'react'
import { deleteCheckItem } from '../api'
import { updateCheckItem } from '../api'
import { CardIdContext } from '../checklist/Checklist'

function CheckItemsDisaplay(props) {

    const cardId = useContext(CardIdContext)

    function deleteCheckItemHandler(params) {
        deleteCheckItem(props.checkListId, props.checkItem.id).then((deltedItem)=>{
            props.setDeletedCheckItem(deltedItem.id)
        })
    }

    const initialState = props.checkItem.state==='complete' ? true : false
    const [isChecked, setIsChecked] = useState(initialState)

    function itemChangeHandler(event) {
        setIsChecked(!isChecked)

    }

    useEffect(()=>{
        const newState = isChecked ? 'complete' : 'incomplete'
        updateCheckItem(cardId, props.checkListId, props.checkItem.id, newState).then((item)=>{
            props.setUpdatedItem(item.id+""+item.state)
        })

    }, [isChecked])

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