import React, { useEffect } from "react";
import { getLists } from "../api";
import { useParams } from "react-router-dom";
import ListsDisplay from "./ListsDisplay";
import ListCreate from "./ListCreate";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchListData } from '../../redux/store'
import { connect } from 'react-redux'

function List({getAllLists, lists, newList, deletedList}) {
  const params = useParams();
  const { boardId } = params;

  useEffect(() => {
    getAllLists(boardId)
  },[]);

  const navigate = useNavigate()

  return (
    <div className="list-outer">
      {/* <button>Back</button> */}
      <Button variant="secondary" onClick={()=>navigate(-1)}>Back</Button>
      <div className="list-main">
        <div className="lists">
          <ListsDisplay/>
        </div>

        <div className="input-list">
          <ListCreate boardId={boardId} />
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lists : state.list.lists,
    newList : state.list.createdList,
    deletedList : state.list.deletedList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllLists : (boardId)=> dispatch(fetchListData(boardId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (List);
