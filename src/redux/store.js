import { createStore } from "redux";
import { rootReducer } from "./combinedReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { getBoards, getLists, getCards } from "../components/api";
import {
  fetchBoards,
  fetchBoardSuccess,
} from "./board/boardAction";
import { fetchLists, fetchListSuccess } from "./list/listAction";
import { fetchCards } from "./card/cardAction";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export const fetchBoardData = () => {
  return (dispatch) => {
    dispatch(fetchBoards());
    getBoards()
      .then((data) => {
        console.log("hello")
        dispatch(fetchBoardSuccess(data));
      })
  };
};

export const fetchListData = (id) => {
  return (dispatch) => {
    dispatch(fetchLists())
    getLists(id).then((data) => {
      dispatch(fetchListSuccess(data));
    });
  };
};

export const fetchCardsdata = (listId) => {
  return (dispatch) => {
    getCards(listId).then((data) => {
      dispatch(fetchCards(data));
    });
  };
};

// store.dispatch()
