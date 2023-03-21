import { FETCH_CHECK_LIST, CREATE_CHECK_LIST, DELETE_CHECK_LIST, GET_CARD_ID } from "./checkListType";
import { getChecklists, createChecklist, deleteChecklist } from "../../components/api";

export const fetchCheckLists = (id) => {
    return (dispatch) => {
        getChecklists(id).then((data) => {
        dispatch({
            type : FETCH_CHECK_LIST,
            payload : data
        });
      });
    };
  };


export const addCheckList = (cardId, checkListName) => {
    return (dispatch) => {
        createChecklist(cardId, checkListName).then((data)=>{
            dispatch({
                type : CREATE_CHECK_LIST,
                payload : data
            })
        })
    }
}


export const removeCheckList = (cardId, cheklistId) => {

    return (dispatch)=>{
        deleteChecklist(cardId, cheklistId).then((data)=>{
            dispatch({
                type : DELETE_CHECK_LIST,
                payload : cheklistId
            })
        })
    }
}

export const getCardId = (cardId) =>{
    return {
        type : GET_CARD_ID,
        payload : cardId
    }
}