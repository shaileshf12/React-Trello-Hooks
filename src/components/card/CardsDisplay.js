import React from "react";
import { deleteCard } from "../api";
import { useNavigate, Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { getCheckItemsOnCard } from "../api";
import Checklist from "../checklist/Checklist";
import { getChecklists, getCheckItem } from "../api";
import { useSelector} from "react-redux";
import { fetchCardsdata } from "../../redux/card/cardAction";
import { useDispatch } from "react-redux";
import { removeCard } from "../../redux/card/cardAction";

function CardsDisplay(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [modalShow, setModalShow] = React.useState(false);

  function deleteCardHandler() {
    // deleteCard(props.card.id).then((deletedCard) => {
    //   // console.log(deleteCard.id)
    //   props.setDeletedCard(props.card.id);
    // });
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
