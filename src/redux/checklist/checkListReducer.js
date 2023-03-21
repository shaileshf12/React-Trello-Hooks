import { FETCH_CHECK_LIST, CREATE_CHECK_LIST, DELETE_CHECK_LIST, GET_CARD_ID } from "./checkListType"

const initialState = {
    checkLists : [],
    cardId : ''
}

const checkListReducer = (state=initialState, action) =>{
    switch(action.type)
    {
      
        case FETCH_CHECK_LIST : return  {
            ...state,
            checkLists : action.payload
        }

        case CREATE_CHECK_LIST : return {
            ...state,
            checkLists : [...state.checkLists, action.payload]
        }

        case DELETE_CHECK_LIST :
             return {
            ...state,
            checkLists : state.checkLists.filter((list)=>{
                return list.id!==action.payload
            })
        }

        case GET_CARD_ID : return {
            ...state,
            cardId : action.payload
        }

        default : return state
    }
}

export default checkListReducer