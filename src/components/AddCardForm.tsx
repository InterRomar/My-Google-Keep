import * as React from 'react';
import { Field, Form } from 'react-final-form';
import ColorSelect from './ColorSelect';
import { NoteColors } from './MainContainer';

export interface Props {
  isCreateFocus: boolean
  formFocus: (value: boolean) => void
  addCard: (title: string, text: string, color?: NoteColors) => void
}

const  AddCardForm = (props: Props) => {

  const [color, setColor] = React.useState<NoteColors>(
    NoteColors.black
  );
  const ref = React.useRef(null)
  const inputTextRef = React.useRef(null)
  const inputTitleRef = React.useRef(null)


  React.useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    document.addEventListener('keyup', tabListener);
    (inputTextRef.current! as any).focus();
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [])
  
  const escapeListener = React.useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      props.formFocus(false);
    }
  }, [])
  
  const tabListener = React.useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Tab') {
      (inputTitleRef.current! as any).focus();
      document.removeEventListener('keyup', tabListener)
    }
  }, [])

  const clickListener = React.useCallback((e: MouseEvent): void => {
    if (
      !(ref.current! as any).contains(e.target)
    ) {
      props.formFocus?.(false)
    }
  }, [ref.current])
  
  const onSubmit = (values: any): void => {
    const { title, text } = values;
    props.addCard(title, text, color as any)
  }

  return (
    <div
      className="new-card__form-wrapper"
      ref={ref}
    >
      {props.isCreateFocus && (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form 
              onSubmit={handleSubmit}
              className={`new-card__form ${color}`}
            >
              <div>
                <Field
                  name="title"
                  className="new-card__input-title"
                  autoComplete='off'
                  component="input"
                  type="text"
                  placeholder="Title"
                  ref={inputTitleRef}
                />
              </div>

              <div>
                <Field
                  name="text"
                  className="new-card__input-text"
                  autoComplete='off'
                  component="textarea"
                  placeholder="New note.."
                  ref={inputTextRef}
                  />
              </div>

              <ColorSelect 
                setColor={setColor}
                color={color}
              />
            </form>
          )}
        />
      )}
    </div>
    )
}
export default AddCardForm;