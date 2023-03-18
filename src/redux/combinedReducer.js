
import {combineReducers} from 'redux'

import boardReducer from "./board/boardReducer";
import listReducer from './list/listReducer';
import cardReducer from './card/cardReducer';

export const rootReducer = combineReducers({
    board : boardReducer,
    list : listReducer,
    card : cardReducer
})