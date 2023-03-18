import { FETCH_CARD, CREATE_CARD, DELETE_CARD } from "./cardType"

const initialState = {
    cards : [],
    
}

const cardReducer = (state=initialState, action) =>{
    switch(action.type)
    {
        case FETCH_CARD : return {
            ...state,
            cards : action.payload
        }

        case CREATE_CARD : return {
            ...state,
            card : [...state.cards, action.payload]
        }

        case DELETE_CARD : return {
            ...state,
            cards : state.cards.filter((card)=>{
                return card.id!==action.payload.id
            })
        }

        default : return state
    }
}

export default cardReducer