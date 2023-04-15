import React from "react";
import { useNavigate} from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeCard } from "../../redux/card/cardAction";

function CardsDisplay(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function deleteCardHandler() {
    dispatch(removeCard(props.list.id, props.card))
  } 


  function cardHandler(card) {
    navigate(`${card.id}`);
    
  }


  return (
    <div className="card-main">
      <div onClick={()=>cardHandler(props.card)} className="card-name">
        {props.card.name}
      </div>
      
      <AiTwotoneDelete className="delete-card" onClick={deleteCardHandler} />
    </div>
  );
}

export default CardsDisplay;
