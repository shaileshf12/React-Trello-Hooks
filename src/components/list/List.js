import React, { useEffect, useState } from "react";
import { getLists } from "../api";
import { useParams } from "react-router-dom";
import ListsDisplay from "./ListsDisplay";
import ListCreate from "./ListCreate";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function List() {
  const params = useParams();
  const { boardId } = params;

  const [lists, setLists] = useState([]);
  const [newList, setNewList] = useState();
  const [deletedList, setDeletedList] = useState()

  useEffect(() => {
    getLists(boardId).then((lists) => {
      setLists(lists);
    });
  },[newList, deletedList]);

  const navigate = useNavigate()

  return (
    <div className="list-outer">
      {/* <button>Back</button> */}
      <Button variant="secondary" onClick={()=>navigate(-1)}>Back</Button>
      <div className="list-main">
        <div className="lists">
          {lists.map((list) => (
            <ListsDisplay key={list.id} list={list} setDeletedList={setDeletedList}/>
          ))}
        </div>

        <div className="input-list">
          <ListCreate setNewList={setNewList} boardId={boardId} />
        </div>
      </div>

    </div>
  );
}

export default List;
