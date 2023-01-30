
import React, {useState, useEffect} from 'react'
import { getCards } from '../api'
import CardsDisplay from './CardsDisplay'
import CardCreate from './CardCreate'

function Card(props) {

    const [cards, setCards] = useState([])
    const [newCard, setNewCard] = useState('')
    const [deletedCard, setDeletedCard] = useState('')

    useEffect(()=>{
        getCards(props.list.id).then((cards)=>{
            setCards(cards)
        })
    },[newCard, deletedCard])




  return (
    <div className=''>
        {cards.map((card)=> {
            return <CardsDisplay key={card.id} card={card} list={props.list} setDeletedCard={setDeletedCard}/>
        })}
        <div>
            <CardCreate list={props.list} setNewCard={setNewCard}/>
        </div>
    </div>
  )
}

export default Card