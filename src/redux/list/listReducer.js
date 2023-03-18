import { FETCH_LIST, CREATE_LIST, DELETE_LIST, GET_LIST_ID  } from "./listType"

const initialState = {
    lists : [],
    createdList : '',
    deletedList : '',
    listId : ''
}

const listReducer = (state=initialState, action) =>{
    switch(action.type)
    {
        case FETCH_LIST : return {
            ...state,
            lists : action.payload
        }

        case CREATE_LIST : return {
            ...state,
            createdList : action.payload
        }

        case DELETE_LIST : return {
            ...state,
            deletedList : action.payload
        }

        case GET_LIST_ID : return {
            ...state,
            listId : action.payload
        }

        default : return state
    }
}

export default listReducer