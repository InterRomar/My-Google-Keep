import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNoteAction } from '../store/actions/noteActions';
import { NoteActionTypes } from '../store/actionTypes';
import { RootState } from '../store/rootReducer';
import AddCardForm from './AddCardForm';
import { INote, NoteColors } from './MainContainer';

export interface Props {
  isCreateFocus: boolean
  formFocus: (value: boolean) => void
}

const  AddCard = (props: Props) => {
  const notes = useSelector<RootState, INote[]>(state => state.notesStore.notes)
  const noteDispatcher = useDispatch<React.Dispatch<NoteActionTypes>>()

  const openForm = () => {
    props.formFocus(true);
  }

  const addCard = (title: string, text: string, color?: NoteColors) => {
    const id = notes![0].id + 1;

    const newNote: INote = {
      title,
      text,
      color: color || NoteColors.black,
      id
    }

    noteDispatcher(addNoteAction(newNote)) 
  }

  return (
    <>
      {!props.isCreateFocus && (
        <div
          onClick={openForm}
          className="new-card__placeholder"
        >
          New note...
        </div>
      )}

      {props.isCreateFocus && (
        <AddCardForm 
          isCreateFocus={props.isCreateFocus}
          formFocus={props.formFocus}
          addCard={addCard}
        />
      )}
    </>
  )
}
export default AddCard;