import React from "react";
import Card from "../card/Card";
import { removeList } from "../../redux/list/listAction";
import { connect } from "react-redux";

function ListsDisplay(props) {

  function deleteListHandler(list) {
    props.deleteAList(list.id);
  }

  return (
    <>
      {props.loading ? <h1>Loading ...</h1> : 
       props.lists.map((list) => {
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
    loading : state.list.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAList: (id) => dispatch(removeList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListsDisplay);
