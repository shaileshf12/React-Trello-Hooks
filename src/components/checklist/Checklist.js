import React, { useState, useEffect } from "react";
import { getChecklists } from "../api";
import { useParams } from "react-router-dom";
import ChecklistsDisplay from "./ChecklistsDisplay";
import ChecklistCreate from "./ChecklistCreate";
import { useNavigate} from 'react-router-dom'
import { Button  } from 'react-bootstrap'


export const CardIdContext = React.createContext()

function Checklist(props) {
  const [checklists, setChecklists] = useState([]);
  const [newChecklist, setNewChecklist] = useState("");
  const [deleteChecklist, setDeletedChecklist] = useState("");
  

  const params = useParams();
  const cardId = params.cardId;


  // const {show, onHide} = location.state

  useEffect(() => {
    getChecklists(cardId).then((checklists) => {
      setChecklists(checklists);
    });
  }, [newChecklist, deleteChecklist]);

  const navigate = useNavigate()

  return (

    <div className="outer-checklist">
      <Button variant="secondary" onClick={()=>navigate(-1)}>Back</Button>
      <div className="main-checklist">
        <div className="all-checklists">
          <CardIdContext.Provider value={cardId}>
          {checklists.map((checklist) => {
            return (
              <ChecklistsDisplay
                key={checklist.id}
                cardId={cardId}
                checklist={checklist}
                setDeletedChecklist={setDeletedChecklist}
              />
            );
          })}
          </CardIdContext.Provider>
        </div>
        <div>
          <ChecklistCreate cardId={cardId} setNewChecklist={setNewChecklist} />
        </div>
      </div>
    </div>

  );
}

export default Checklist;
