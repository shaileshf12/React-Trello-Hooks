import { FETCH_CARD, CREATE_CARD, DELETE_CARD } from "./cardType";
import { DELETE_LIST } from "../list/listType";

const initialState = {
  cards: {},
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARD:
      return {
        ...state,
        cards: { ...state.cards, ...action.payload },
      };

    case CREATE_CARD:
      let obj = { ...state.cards }
      obj[action.payload.listId] = [
        ...obj[action.payload.listId],
        action.payload.data,
      ];
      return {
        ...state,
        cards: obj,
      };

    case DELETE_CARD:
      let newCards = { ...state.cards };
      newCards[action.payload.listId] = newCards[action.payload.listId].filter(
        (card) => {
          console.log(card.id, action.payload.card.id);
          return card.id !== action.payload.card.id;
        }
      );
      console.log(newCards);

      return {
        ...state,
        cards: newCards,
      };

    case DELETE_LIST:
      let newObj = { ...state.cards };
      delete newObj[action.payload.id];
      return {
        ...state,
        cards: newObj,
      };

    default:
      return state;
  }
};

export default cardReducer;
