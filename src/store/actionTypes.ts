import { INote } from "../components/MainContainer";
import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./actionNames";

interface IAddNoteAction {
  type: typeof ADD_NOTE,
  payload: INote
}

interface IDeleteNoteAction {
  type: typeof DELETE_NOTE,
  payload: number
}
interface IUpdateNoteAction {
  type: typeof UPDATE_NOTE,
  payload: INote
}
// interface ILoadNotesAction {
//   type: typeof LOAD_NOTES
// }

export type NoteActionTypes = IAddNoteAction | IDeleteNoteAction | IUpdateNoteAction
