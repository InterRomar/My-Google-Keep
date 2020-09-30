import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteAction } from '../store/actions/noteActions';
import { NoteActionTypes } from '../store/actionTypes';
import { RootState } from '../store/rootReducer';
import Card from './Card';
import { INote } from './MainContainer';

const  CardsList = () => {
  const notes = useSelector<RootState, INote[]>(state => state.notesStore.notes)
  const noteDispatcher = useDispatch<React.Dispatch<NoteActionTypes>>();

  const deleteNote = (id: number) => {
    noteDispatcher(deleteNoteAction(id));
  }
  return (
    <ul className="card__list">
      {notes!.map(note => (
        <Card 
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </ul>
  )
}

export default CardsList;