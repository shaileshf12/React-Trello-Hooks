import React from "react";
import { deleteCard } from "../api";
import { useNavigate, Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { getCheckItemsOnCard } from "../api";
import Checklist from "../checklist/Checklist";
import { getChecklists, getCheckItem } from "../api";

function CardsDisplay(props) {
  const navigate = useNavigate();

  const [modalShow, setModalShow] = React.useState(false);

  function deleteCardHandler() {
    deleteCard(props.card.id).then((deletedCard) => {
      // console.log(deleteCard.id)
      props.setDeletedCard(props.card.id);
    });
  } 


  function cardHandler(card) {
    navigate(`${card.id}`);
    
  }


  return (
    <div className="card-main">
      <div onClick={()=>cardHandler(props.card)} className="card-name">
        {props.card.name}
      </div>

      {/* <Checklist show={modalShow} cardId = {props.card.id} onHide={() => setModalShow(false)} /> */}
      
      <AiTwotoneDelete className="delete-card" onClick={deleteCardHandler} />
    </div>
  );
}

export default CardsDisplay;
