import * as React from 'react';
import AddCard from './AddCard';
import CardsList from './CardsList';

export interface Props {

}

export enum NoteColors {
  red = "red",
  blue = "blue",
  orange = "orange",
  purple = "purple",
  green = "green",
  black = "black",
}

export interface INote {
  id: number
  title: string
  text: string
  color?: NoteColors
}

const  MainContainer = (props: Props) => {
  const [isCreateFocus, setIsCreateFocus] = React.useState(false);

  const formFocus = (value: boolean) => {
    setIsCreateFocus(value);
  }

  return (
    <div className="main-box">
      <div className="box-header">
        <AddCard 
          isCreateFocus={isCreateFocus}
          formFocus={formFocus}
        />  
      </div>
      
      <CardsList />

    </div>
  )
}
export default MainContainer;