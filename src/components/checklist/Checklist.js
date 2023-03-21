import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ChecklistsDisplay from "./ChecklistsDisplay";
import ChecklistCreate from "./ChecklistCreate";
import { useNavigate} from 'react-router-dom'
import { Button  } from 'react-bootstrap'
import { fetchCheckLists, getCardId } from "../../redux/checklist/checkListAction";
import { useSelector, useDispatch } from "react-redux";

function Checklist(props) {

  const params = useParams();
  const cardId = params.cardId;

  const {checkLists} = useSelector((state)=>state.checkList)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCheckLists(cardId))
    dispatch(getCardId(cardId))
  }, []);

  const navigate = useNavigate()

  return (

    <div className="outer-checklist">
      <Button variant="secondary" onClick={()=>navigate(-1)}>Back</Button>
      <div className="main-checklist">
        <div className="all-checklists">
          {checkLists.map((checklist) => {
            return (
              <ChecklistsDisplay
                key={checklist.id}
                checklist={checklist}
              />
            );
          })}
        </div>
        <div className="input-checklist">
          <ChecklistCreate/>
        </div>
      </div>
    </div>

  );
}

export default Checklist;
