import { FETCH_CARD, CREATE_CARD, DELETE_CARD } from "./cardType"

export const fetchCards = (cards) =>{
    return {
        type : FETCH_CARD,
        payload : cards
    }
}

export const addCards = (cardId) => {
    return {
        type : CREATE_CARD,
        payload : cardId
    }
}

export const removeCard = (cardId) => {
    return {
        type : DELETE_CARD,
        payload : cardId
    }
}
