import React, { useState, useEffect } from "react";
import { getBoards } from "../api";
import BoardsDisplay from "./BoardsDisplay";
import BoardCreate from "./BoardCreate";
import "../style.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchBoards } from "../../redux/board/boardAction";
import { connect } from "react-redux";
import { fetchBoardData } from "../../redux/store";

function Board({getAllBoards}) {


  useEffect(() => {
    getAllBoards()
  }, []);


  return (
    <div className="main">
      <div className="workspace-heading">Your Workspaces</div>

      <div className="all-boards">
        <BoardsDisplay/>
      </div>

      <div>
        <BoardCreate />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    boards : state.board.boards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBoards : ()=> dispatch(fetchBoardData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
