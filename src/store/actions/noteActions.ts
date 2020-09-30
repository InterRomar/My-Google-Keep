import { INote } from "../../components/MainContainer";
import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../actionNames";
import { NoteActionTypes } from "../actionTypes";

export const addNoteAction = (note: INote): NoteActionTypes => ({
  type: ADD_NOTE,
  payload: note
})

export const deleteNoteAction = (id: number): NoteActionTypes => ({
  type: DELETE_NOTE,
  payload: id
})

export const updateNoteAction = (newNote: INote): NoteActionTypes => ({
  type: UPDATE_NOTE,
  payload: newNote
})

// export const loadNotesAction = (): NoteActionTypes => ({
//   type: LOAD_NOTES
// })