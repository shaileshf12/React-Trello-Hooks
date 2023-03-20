
import { DELETE_BOARD, FETCH_BOARDS, FETCH_BOARDS_SUCCESS, CREATE_BOARD } from "./boardTypes";
import { getBoards, createBoard, deleteBoard } from "../../components/api";

export const fetchBoardData = () => {
    return (dispatch) => {

      dispatch({
        type : FETCH_BOARDS,
    });

      getBoards()
        .then((data) => {
            // console.log(data)
          dispatch({
            type : FETCH_BOARDS_SUCCESS,
            payload : data
        });
        })
    };
  };


export const addBoard = (boardName) => {

    return (dispatch)=>{
        createBoard(boardName).then((data)=>{
            dispatch({
                type : CREATE_BOARD,
                payload : data
            })
        })
    }
}

export const removeBoard = (board, boardId) => {

    return (dispatch) => {
        deleteBoard(boardId).then((data)=>{
            dispatch({
                type : DELETE_BOARD,
                payload : board
            })
        })
    }
}