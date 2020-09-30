import * as React from 'react';
import ColorButton from './ColorButton';
import { NoteColors } from './MainContainer';

export interface Props {
  setColor: (color: NoteColors) => void
  color: NoteColors
}

const ColorSelect = (props: Props) => {
  
  return (
    <>
    {Object.values(NoteColors).map(color => (
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