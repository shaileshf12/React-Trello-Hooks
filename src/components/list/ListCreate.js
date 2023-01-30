import React, { useState } from "react";
import { createList } from "../api";
import CloseButton from "react-bootstrap/CloseButton";

function ListCreate(props) {
  const [listName, setListName] = useState("");
  const [inputDisplay, setInputDisplay] = useState(false);

  function changeHandler(event) {
    setListName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    createList(listName, props.boardId).then((list) => {
      props.setNewList(list.id);
    });
  }

  function inputHandler() {
    setInputDisplay((prevState) => !prevState);
  }

  return (
    <div>
      {/* <form onSubmit={submitHandler}>
            <input onChange={changeHandler} value={listName}></input>
            <button type='submit'>Add List</button>
        </form> */}

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

export default ListCreate;
