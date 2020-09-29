import * as React from 'react';
import AddCardForm from './AddCardForm';
import { CardColors } from './MainContainer';

export interface Props {
  isCreateFocus: boolean
  formFocus: (value: boolean) => void
  addCard: (title: string, text: string, color?: CardColors) => void
}

const  AddCard = (props: Props) => {

  const openForm = () => {
    props.formFocus(true);
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
          addCard={props.addCard}
        />
      )}

      
    </>

  )
}
export default AddCard;