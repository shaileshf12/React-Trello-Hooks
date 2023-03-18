import { FETCH_CARD, CREATE_CARD, DELETE_CARD } from "./cardType"

const initialState = {
    cards : [],
    createdCard : '',
    deletedCard : '',
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
            createdCard : action.payload
        }

        case DELETE_CARD : return {
            ...state,
            deletedCard : action.payload
        }

        default : return state
    }
}

export default cardReducer