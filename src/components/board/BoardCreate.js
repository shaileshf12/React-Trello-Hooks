import React, { useState } from "react";
import { createBoard } from "../api";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { addBoard } from "../../redux/board/boardAction";

function BoardCreate(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [boardName, setBoardName] = useState("");

  function boardInputHandler(e) {
    console.log(e.target.value)
    setBoardName(e.target.value);
  }

  function boardSubmitHandler(e) {
    e.preventDefault()
    createBoard(boardName)
      .then((data) => {
        console.log(data)
        // props.setNewBoard(data.name);
        props.addABoard(data)
        // props.boards = [... props.boards, data]
      })
      .catch((e) => {
        console.log(e);
      });
    // props.addBoard(boardName)

    handleClose();
  }

  return (
    <div>
        <Button variant="primary" onClick={handleShow} className='board'>
          Create Board
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Board</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Board Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Board name"
                autoFocus
                onChange={boardInputHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={boardSubmitHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    boards : state.board.boards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addABoard : (board)=> dispatch(addBoard(board))
  };
};

export default connect(null, mapDispatchToProps) (BoardCreate);
