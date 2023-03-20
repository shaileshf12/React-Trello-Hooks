import { FETCH_CARD, CREATE_CARD, DELETE_CARD } from "./cardType"
import { getCards, createCard, deleteCard } from "../../components/api";

export const fetchCardsdata = (listId) => {
    const id = listId
    return (dispatch) => {
      getCards(listId).then((data) => {
        dispatch({
            type : FETCH_CARD,
            payload : {[id] : data}
        });
      });
    };
  };


export const addCard = (listId, cardName) => {

    return (dispatch) => {
        createCard(listId, cardName).then((data)=>{
            dispatch({
                type : CREATE_CARD,
                payload : {listId, data}
            })
        })
    }
}

export const removeCard = (listId, card) => {
    return (dispatch) => {
        deleteCard(card.id).then((data)=>{
            console.log(data)
            dispatch({
                type : DELETE_CARD,
                payload : {listId, card}
            })
        })
    }
}
