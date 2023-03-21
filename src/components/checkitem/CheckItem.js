
import React, {useEffect} from 'react'
import CheckItemsDisaplay from './CheckItemsDisaplay'
import CheckItemCreate from './CheckItemCreate'
import Progressbar from './Progressbar'
import { fetchCheckitems } from '../../redux/checkitem/itemAction'
import { useDispatch, useSelector } from 'react-redux'

function CheckItem(props) {
  const dispatch = useDispatch()
  const checkItems = useSelector((state)=>state.checkItem.checkItems[props.checkListId])
  useEffect(()=>{
    dispatch(fetchCheckitems(props.checkListId))
    
  }, [])

  return (
    <>
    {checkItems!==undefined &&
    <div className='checkItem'>
      <div>
      <Progressbar checkItems={checkItems}/>
      </div>
      {checkItems!==undefined && checkItems.map((checkItem)=>{
        return <CheckItemsDisaplay
         key={checkItem.id} checkListId={props.checkListId} checkItem={checkItem}
         />
      })}
      <CheckItemCreate checkListId={props.checkListId}/>
    </div>
    }
    </>
  )
}

export default CheckItem