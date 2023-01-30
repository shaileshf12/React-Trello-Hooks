
import React, {useState, useEffect} from 'react'
import { getCheckItem } from '../api'
import CheckItemsDisaplay from './CheckItemsDisaplay'
import CheckItemCreate from './CheckItemCreate'
import Progressbar from './Progressbar'

function CheckItem(props) {
  const [checkItems, setCheckItems] = useState([])
  const [newCheckItem, setNewCheckItem] = useState('')
  const [deletedCheckItem, setDeletedCheckItem] = useState('')
  const [updatedItem, setUpdatedItem] = useState('')

  useEffect(()=>{
    getCheckItem(props.checkListId).then((checkItems)=>{
      setCheckItems(checkItems)
      // console.log("Hello")
    })
  }, [newCheckItem, deletedCheckItem, updatedItem])

  return (
    <div className='checkItem'>
      <div>
      <Progressbar checkItems={checkItems} updatedItem={updatedItem}/>
      </div>
      {checkItems.map((checkItem)=>{
        return <CheckItemsDisaplay
         key={checkItem.id} checkListId={props.checkListId} checkItem={checkItem} setUpdatedItem={setUpdatedItem} setDeletedCheckItem={setDeletedCheckItem}
         />
      })}
      <CheckItemCreate checkListId={props.checkListId} setNewCheckItem={setNewCheckItem}/>
    </div>
  )
}

export default CheckItem