import { CREATE_LIST, FETCH_LIST, DELETE_LIST, FETCH_LIST_SUCCESS } from "./listType"
import { getLists, createList, deleteList } from "../../components/api";

export const fetchListData = (id) => {
    return (dispatch) => {
      dispatch({
        type : FETCH_LIST
    })

      getLists(id).then((data) => {
        dispatch({
            type : FETCH_LIST_SUCCESS,
            payload : data
        });
      });
    };
  };


export const addList = (listName, boardId) => {
    return (dispatch) => {
        createList(listName, boardId).then((data)=>{
            dispatch({
                type : CREATE_LIST,
                payload : data
            })
        })
    }
}


export const removeList = (listId) => {

    return (dispatch)=>{
        deleteList(listId).then((data)=>{
            dispatch({
                type : DELETE_LIST,
                payload : data
            })
        })
    }
}
 