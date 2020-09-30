import * as React from 'react';
import { Field, Form } from 'react-final-form';
import ColorSelect from './ColorSelect';
import { INote, NoteColors } from './MainContainer';

export interface Props {
  note: INote
  onSubmit: (note: INote) => void
}

const  EditNoteForm = (props: Props) => {
  const [color, setColor] = React.useState<NoteColors>(NoteColors.black);

  React.useEffect(() => {
    setColor(props.note.color!)
  }, [])

  const onSubmit = (values: any) => {
    props.onSubmit({
      id: props.note.id,
      title: values.title,
      text: values.text,
      color
    });
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{title: props.note.title, text: props.note.text}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form 
          onSubmit={handleSubmit}
          className={`card-edit__form ${color}`}
        >
          <div>
            <Field
              name="title"
              className="card-edit__input-title"
              autoComplete='off'
              component="input"
              type="text"
            />
          </div>

          <div className="input-text__row">
            <Field
              name="text"
              className="card-edit__input-text"
              autoComplete='off'
              component="textarea"
              />
          </div>

          <div className="">
            <ColorSelect
              setColor={setColor}
              color={color}
            />
          </div>

          <button
            type="submit" 
            className="card-edit__submit"
          >
            {/* <i className="fas fa-plus-circle"></i> */}
            Update
          </button>
        </form>
      )}
    />
  )
}

export default EditNoteForm;