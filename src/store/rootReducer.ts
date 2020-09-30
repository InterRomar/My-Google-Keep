import { INote } from "../components/MainContainer";

import notesStore from './reducers/notesReducer';
const { combineReducers } = require('redux');

export type RootState = {
  notesStore: {
    notes: INote[]
  }
}

const rootReducer = combineReducers({
  notesStore,
})

export default rootReducer