import { CREATE_LIST, FETCH_LIST, DELETE_LIST, GET_LIST_ID } from "./listType"

export const fetchLists = (lists) =>{
    return {
        type : FETCH_LIST,
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

export const getListIdForCards = (listId) => {
    return {
        type : GET_LIST_ID,
        payload : listId
    }
} 