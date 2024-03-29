import React, { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { addList } from "../../redux/list/listAction";
import { connect } from "react-redux";

function ListCreate(props) {
  const [listName, setListName] = useState("");
  const [inputDisplay, setInputDisplay] = useState(false);

  function changeHandler(event) {
    setListName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    props.addNewList(listName, props.boardId);
  }

  function inputHandler() {
    setInputDisplay((prevState) => !prevState);
  }

  return (
    <div>
      {!inputDisplay ? (
        <button className="add-button" onClick={inputHandler}>
          + Add a List
        </button>
      ) : (
        <div className="card-input">
          <form onSubmit={submitHandler}>
            <input
              onChange={changeHandler}
              className="add-input"
              placeholder="Enter a title of this list"
              value={listName}
            ></input>
          </form>
          <div>
            <button onClick={submitHandler}>Add</button>
            <CloseButton onClick={inputHandler}></CloseButton>
          </div>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewList: (listName, boardId) => dispatch(addList(listName, boardId)),
  };
};

export default connect(null, mapDispatchToProps) (ListCreate);
