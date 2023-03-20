import { createStore } from "redux";
import { rootReducer } from "./combinedReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {getCards } from "../components/api";
import { fetchCards } from "./card/cardAction";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
) );



// store.dispatch()
