import * as React from 'react';
import ColorButton from './ColorButton';
import { CardColors } from './MainContainer';

export interface Props {
  setColor: (color: CardColors) => void
  color: CardColors
}

const ColorSelect = (props: Props) => {
  
  return (
    <>
    {Object.values(CardColors).map(color => (
      <ColorButton
        key={color}
        color={color}
        setColor={props.setColor}
      />
    ))}
    </>
  )

}
export default ColorSelect;