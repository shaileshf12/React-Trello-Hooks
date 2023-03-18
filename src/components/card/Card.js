
import React, {useState, useEffect} from 'react'
import { getCards } from '../api'
import CardsDisplay from './CardsDisplay'
import CardCreate from './CardCreate'
import { connect } from 'react-redux'
import { fetchCardsdata } from '../../redux/store'


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
            <CardCreate list={props.list} listId={props.listId} setNewCard={setNewCard}/>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        cards : state.card.cards
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getCardsData : (id) => dispatch(fetchCardsdata(id))
    };
  };

  

export default connect(mapStateToProps, mapDispatchToProps) (Card)