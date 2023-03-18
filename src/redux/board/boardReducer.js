import { FETCH_BOARDS } from "./boardTypes"
import { CREATE_BOARD } from "./boardTypes"
import { DELETE_BOARD } from "./boardTypes"

const initialState = {
    boards : [],
    createdBoard : '',
    deletedBoard : ''
}

const boardReducer = (state=initialState, action) =>{
    switch(action.type)
    {
        case FETCH_BOARDS : return {
            ...state,
            boards : action.payload
        }

        case CREATE_BOARD : return {
            ...state,
            createdBoard : action.payload
        }

        case DELETE_BOARD : return {
            ...state,
            deletedBoard : action.payload
        }
        default : return state
    }
}

export default boardReducer