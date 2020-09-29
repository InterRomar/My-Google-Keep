import * as React from 'react';
import { CardColors } from './MainContainer';

export interface Props {
  color: CardColors
  setColor: (color: CardColors) => void
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