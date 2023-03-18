
import { DELETE_BOARD, FETCH_BOARDS, FETCH_BOARDS_SUCCESS } from "./boardTypes";
import { CREATE_BOARD } from "./boardTypes";

export const fetchBoards = () =>{
    return {
        type : FETCH_BOARDS,
    }
}

export const fetchBoardSuccess = (boards) => {
    return {
        type : FETCH_BOARDS_SUCCESS,
        payload : boards

    }
}

export const addBoard = (board) => {
    return {
        type : CREATE_BOARD,
        payload : board
    }
}

export const removeBoard = (board) => {
    return {
        type : DELETE_BOARD,
        payload : board
    }
}