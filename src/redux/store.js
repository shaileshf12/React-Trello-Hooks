import {createStore} from 'redux'
import { rootReducer } from "./combinedReducer";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getBoards, getLists, getCards } from '../components/api';
import { fetchBoards } from './board/boardAction';
import { fetchLists } from './list/listAction';
import { fetchCards } from './card/cardAction';


export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

 export const fetchBoardData = () => {
    return (dispatch) => {
        getBoards().then((data)=>{
            dispatch(fetchBoards(data))
        })
    }
}


export const fetchListData = (id) => {
    return (dispatch) => {
        getLists(id).then((data)=>{
            dispatch(fetchLists(data))
        })
    }
}

export const fetchCardsdata = (listId) =>{
    return (dispatch) => {
        getCards(listId).then((data)=>{
            dispatch(fetchCards(data))
        })
    }
}


// store.dispatch()