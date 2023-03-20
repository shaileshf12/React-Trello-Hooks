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
    setBoardName(e.target.value);
  }

  function boardSubmitHandler(e) {
    e.preventDefault()
    props.addABoard(boardName)

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


const mapDispatchToProps = (dispatch) => {
  return {
    addABoard : (boardName)=> dispatch(addBoard(boardName))
  };
};

export default connect(null, mapDispatchToProps) (BoardCreate);
