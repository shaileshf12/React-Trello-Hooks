import { FETCH_CHECK_ITEM, CREATE_CHECK_ITEM, DELETE_CHECK_ITEM, UPDATE_CHECK_ITEM } from "./itemType";
import { getCheckItem, createCheckItem, deleteCheckItem, updateCheckItem} from "../../components/api";

export const fetchCheckitems = (checkItemId) => {
    return (dispatch) => {
        getCheckItem(checkItemId).then((data) => {
        dispatch({
            type : FETCH_CHECK_ITEM,
            payload : {checkItemId, data}
        });
      });
    };
  };


export const addCheckItem = (checkListId, itemName) => {
    return (dispatch) => {
        createCheckItem(checkListId, itemName).then((data)=>{
            console.log(data)
            dispatch({
                type : CREATE_CHECK_ITEM,
                payload : {checkListId, data}
            })
        })
    }
}


export const removeCheckItem = (checkListId, itemId) => {

    return (dispatch)=>{
        deleteCheckItem(checkListId, itemId).then((data)=>{
            dispatch({
                type : DELETE_CHECK_ITEM,
                payload : {checkListId, itemId}
            })
        })
    }
}

export const updateItem = (cardId, checkListId, checkItemId, newState) => {

    return (dispatch)=>{
        updateCheckItem(cardId, checkListId, checkItemId, newState).then((data)=>{
            dispatch({
                type : UPDATE_CHECK_ITEM,
                payload : {checkListId, checkItemId, data}
            })
        })
    }
}