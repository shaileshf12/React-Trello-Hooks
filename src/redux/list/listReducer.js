import { FETCH_LIST, CREATE_LIST, DELETE_LIST, FETCH_LIST_SUCCESS  } from "./listType"


const initialState = {
    loading : false,
    lists : []
}

const listReducer = (state=initialState, action) =>{
    switch(action.type)
    {
        case FETCH_LIST : return {
            ...state,
            loading : true
        }

        case FETCH_LIST_SUCCESS : return  {
            ...state,
            lists : action.payload,
            loading : false
        }

        case CREATE_LIST : return {
            ...state,
            lists : [...state.lists, action.payload]
        }

        case DELETE_LIST : return {
            ...state,
            lists : state.lists.filter((list)=>{
                return list.id!==action.payload.id
            })
        }

        default : return state
    }
}

export default listReducer