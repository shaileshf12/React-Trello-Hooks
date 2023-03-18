
import { DELETE_BOARD, FETCH_BOARDS } from "./boardTypes";
import { CREATE_BOARD } from "./boardTypes";

export const fetchBoards = (boards) =>{
    return {
        type : FETCH_BOARDS,
        payload : boards
    }
}

export const addBoard = (boardId) => {
    return {
        type : CREATE_BOARD,
        payload : boardId
    }
}

export const removeBoard = (boardId) => {
    return {
        type : DELETE_BOARD,
        payload : boardId
    }
}