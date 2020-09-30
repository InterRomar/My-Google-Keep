import * as React from 'react';
import { NoteColors } from './MainContainer';

export interface Props {
  color: NoteColors
  setColor: (color: NoteColors) => void
}

const  ColorButton = (props: Props) => {
  const handleClick = () => {
    props.setColor(props.color);
  }
  
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`color-select__btn ${props.color}`}
    >
    </button>
  )
}
export default ColorButton;