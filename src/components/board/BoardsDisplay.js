import React from "react";
import "../style.css";
import { deleteBoard } from "../api";
import { useNavigate } from "react-router-dom";
import { removeBoard } from "../../redux/board/boardAction";
import { connect } from "react-redux";

function BoardsDisplay(props) {
  function deleteBoardHandler(board) {
    
    props.deleteABoard(board, board.id)
  }


  const navigate = useNavigate();


  return (
    <>
      { props.loading ? <h1>Loading ...</h1> : 
      props.boards.map((board) => {
        return (<div key={board.id} className="board-outer">
          <button
            onClick={() => {
              navigate(`${board.id}`);
            }}
            className="board"
          >
            <h3>{board.name}</h3>
          </button>
          <button onClick={() => deleteBoardHandler(board)}>
            Delete
          </button>
        </div>)
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    boards: state.board.boards,
    loading: state.board.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteABoard: (board, boardId) => dispatch(removeBoard(board, boardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardsDisplay);
