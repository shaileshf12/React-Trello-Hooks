
import {combineReducers} from 'redux'

import boardReducer from "./board/boardReducer";
import listReducer from './list/listReducer';
import cardReducer from './card/cardReducer';
import checkListReducer from './checklist/checkListReducer';
import checkItemReducer from './checkitem/itemReducer'

export const rootReducer = combineReducers({
    board : boardReducer,
    list : listReducer,
    card : cardReducer,
    checkList : checkListReducer,
    checkItem : checkItemReducer
})