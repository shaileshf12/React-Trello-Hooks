import React from "react";
import { deleteList } from "../api";
import Card from "../card/Card";
import { removeList, getListIdForCards } from "../../redux/list/listAction";
import { connect } from "react-redux";

function ListsDisplay(props) {
  function deleteListHandler(list) {
    console.log(list.id);
    deleteList(list.id).then((list) => {
      // props.setDeletedList(list.id)
      props.deleteAList(list.id);
    });
  }

  return (
    <>
      {props.lists.map((list) => {
        return (<div key={list.id} className="each-list">
          <div>
            <h3 className="list-name">{list.name}</h3>
            <div>
              <Card list={list} />
            </div>
          </div>
          <button
            className="list-delete-button"
            onClick={() => deleteListHandler(list)}
          >
            Delete List
          </button>
        </div>)
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    lists: state.list.lists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAList: (id) => dispatch(removeList(id)),
    getListId: (id) => dispatch(getListIdForCards(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListsDisplay);
