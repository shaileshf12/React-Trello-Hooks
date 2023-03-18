import React from "react";
import "../style.css";
import { deleteBoard } from "../api";
import { useNavigate } from "react-router-dom";
import { removeBoard } from "../../redux/board/boardAction";
import { connect } from "react-redux";

function BoardsDisplay(props) {
  function deleteBoardHandler(board) {
    deleteBoard(board.id)
      .then((data) => {
        // props.setDeletedBoard(board.name)
        props.deleteABoard(board.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const navigate = useNavigate();

  return (
    <>
      {props.boards.map((board) => {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteABoard: (id) => dispatch(removeBoard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardsDisplay);
