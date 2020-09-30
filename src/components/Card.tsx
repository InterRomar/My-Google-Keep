import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updateNoteAction } from '../store/actions/noteActions';
import { NoteActionTypes } from '../store/actionTypes';
import EditNoteForm from './EditNoteForm';
import { INote } from './MainContainer';

export interface Props {
  note: INote,
  deleteNote: (id: number) => void
}

const  Card = (props: Props) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const overlayRef = React.useRef(null)
  
  const escapeCloseModalListner = (event: KeyboardEvent) => {
    if (event.key=== 'Escape') {
      setIsEdit(false)
    }
    document.removeEventListener('keydown', escapeCloseModalListner);
  }
  const clickCloseModalListner = (event: MouseEvent) => {
    if (event.target !== overlayRef.current) return;

    console.log(event.target)
    setIsEdit(false);
    document.removeEventListener('click', clickCloseModalListner);
  }

  React.useEffect(() => {
    if (isEdit) {
      document.addEventListener('keydown', escapeCloseModalListner)
      document.addEventListener('click', clickCloseModalListner)
    }
  }, [isEdit])

  const noteDispatcher = useDispatch<React.Dispatch<NoteActionTypes>>()

  const handleDeleteClick = () => {
    props.deleteNote(props.note.id);
  }

  const editTodo = () => {
    setIsEdit(!isEdit)
  }

  const updateNote = (note: INote) => {
    noteDispatcher(updateNoteAction(note));
    setIsEdit(false)
  }

  return (
    <li
      className={`card ${props.note.color}`}
    >
      <h5 className="card__title">
        {props.note.title}
      </h5>
      <p className="card__text">
        {props.note.text}
      </p>
      <button 
        className="card__delete-button"
        onClick={handleDeleteClick}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
      <button
        onClick={editTodo}
      >
        click
      </button>

      {isEdit && (
        <div className="overlay" ref={overlayRef}>
          <div className="card__edit-modal red">
            <EditNoteForm 
              note={props.note}
              onSubmit={updateNote}
            />
          </div>
        </div>
      )}
    </li>
  )
}

export default Card;