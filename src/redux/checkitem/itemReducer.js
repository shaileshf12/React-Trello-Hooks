import {
  FETCH_CHECK_ITEM,
  CREATE_CHECK_ITEM,
  DELETE_CHECK_ITEM,
  UPDATE_CHECK_ITEM,
} from "./itemType";
import produce from "immer";

const initialState = {
  checkItems: {},
};

const checkItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHECK_ITEM:
      return produce(state, (draftState) => {
        draftState.checkItems[action.payload.checkItemId] = action.payload.data;
      });

    case CREATE_CHECK_ITEM:
      let { checkListId, data } = action.payload;
      return produce(state, (draftState) => {
        draftState.checkItems[checkListId].push(data);
      });

    case DELETE_CHECK_ITEM :
       return produce(state, (draftState) => {
        const { checkListId, itemId } = action.payload;
        draftState.checkItems[checkListId] = draftState.checkItems[checkListId].filter((item)=>{
            return item.id!==itemId
        })
       })

    case UPDATE_CHECK_ITEM :
        return produce(state, (draftState) => {
          const {checkListId, checkItemId, data} = action.payload;
          draftState.checkItems[checkListId] = draftState.checkItems[checkListId].map((item)=>{
            if(item.id===checkItemId)
            {
              return data
            }
            return item
          })
        }) 

    default:
      return state;
  }
};

export default checkItemReducer;
