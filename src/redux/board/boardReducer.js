import { FETCH_BOARDS, FETCH_BOARDS_SUCCESS, CREATE_BOARD, DELETE_BOARD } from "./boardTypes"


const initialState = {
    loading : false,
    boards : []
}

const boardReducer = (state=initialState, action) =>{

    switch(action.type)
    {
        case FETCH_BOARDS : return {
            ...state,
            loading : true
        }

        case FETCH_BOARDS_SUCCESS : return {
            ...state,
            boards : action.payload,
            loading : false
        }

        case CREATE_BOARD : return {
            ...state,
            boards : [...state.boards, action.payload]
        }

        case DELETE_BOARD : return {
            ...state,
            boards : state.boards.filter((board)=>{
                return board.id!==action.payload.id
            })
        }
        default : return state
    }
}

export default boardReducer