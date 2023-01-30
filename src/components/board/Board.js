import React, { useState, useEffect } from "react";
import { getBoards } from "../api";
import BoardsDisplay from "./BoardsDisplay";
import BoardCreate from "./BoardCreate";
import "../style.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Board() {
  const [boards, setBoards] = useState([]);
  const [newBoard, setNewBoard] = useState("");
  const [deletedBaord, setDeletedBoard] = useState();

  useEffect(() => {
    getBoards().then((data) => {
      setBoards(data);
    });
  }, [newBoard, deletedBaord]);

  const allBoards = boards.map((board) => {
    return (
      <BoardsDisplay
        key={board.id}
        board={board}
        setDeletedBoard={setDeletedBoard}
      />
    );
  });

  return (
    <div className="main">
      <div className="workspace-heading">
        Your Workspaces
      </div>

      <div className="all-boards">
        {boards.map((board) => {
          return (
            <BoardsDisplay
              key={board.id}
              board={board}
              setDeletedBoard={setDeletedBoard}
            />
          );
        })}
      </div>

      <div>
      <BoardCreate setNewBoard={setNewBoard} />
      </div>
    </div>
  );
}
