import React, { useState } from "react";
import { createCard } from "../api";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/card/cardAction";


function CardCreate(props) {
  const [cardName, setCardName] = useState("");
  const dispatch = useDispatch()

  function changeHandler(event) {
    setCardName(event.target.value);
  }

  function cardSubmitHandler(event) {
    event.preventDefault();
    // createCard(props.list.id, cardName).then((addedCard) => {
    //   props.setNewCard(addedCard.id);
    // });
    dispatch(addCard(props.list.id, cardName))
  }

  const [inputDisplay, setInputDisplay] = useState(false)

  function inputHandler() {
    setInputDisplay((prevState => !prevState))
  }

  return (
    <div>

      {
      !inputDisplay ? <button className="add-button" onClick={inputHandler}>+ Add a card</button>
       : 
       <div className="card-input">
        <form onSubmit={cardSubmitHandler}>
          <input onChange={changeHandler} className="add-input" placeholder="Enter a title of this card" value={cardName}></input>
        </form>
        <div>
          <button onClick={cardSubmitHandler}>Add</button>
          <CloseButton onClick={inputHandler}></CloseButton>
        </div>
      </div>
    }
      
    </div>
  );
}


export default CardCreate;
