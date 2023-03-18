import { CREATE_LIST, FETCH_LIST, DELETE_LIST, FETCH_LIST_SUCCESS } from "./listType"

export const fetchLists = () =>{
    return {
        type : FETCH_LIST
    }
}

export const fetchListSuccess= (lists) =>{
    return {
        type : FETCH_LIST_SUCCESS,
        payload : lists
    }
}

export const addList = (listId) => {
    return {
        type : CREATE_LIST,
        payload : listId
    }
}

export const removeList = (listId) => {
    return {
        type : DELETE_LIST,
        payload : listId
    }
}
 