import * as React from 'react';
import AddCard from './AddCard';

export interface Props {

}

export enum CardColors {
  red = "red",
  blue = "blue",
  orange = "orange",
  purple = "purple",
  green = "green",
  black = "black",
}

interface ICard {
  id: number
  title: string
  text: string
  color?: CardColors
}

const cardsFromApi: ICard[] = [
  {
    id: 1,
    title: 'React',
    text: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. ',
    color: CardColors.blue
  },
  {
    id: 2,
    title: 'Angular',
    text: 'Angular — это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google',
    color: CardColors.red
  },
  {
    id: 3,
    title: 'Node.js',
    text: 'Node или Node.js — программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.',
    color: CardColors.green
  },
  {
    id: 4,
    title: 'Redux',
    text: 'Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. ',
    color: CardColors.orange
  },
  {
    id: 5,
    title: 'Typescript',
    text: 'TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.',
    color: CardColors.purple
  },
  {
    id: 6,
    title: 'Angular',
    text: 'Angular — это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google',
    color: CardColors.red
  },
  {
    id: 7,
    title: 'React',
    text: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. ',
    color: CardColors.blue
  },
  {
    id: 8,
    title: 'Typescript',
    text: 'TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.',
    color: CardColors.purple
  },
]

const  MainContainer = (props: Props) => {
  const [isCreateFocus, setIsCreateFocus] = React.useState(false);
  const [cards, setCards] = React.useState<ICard[] | null>(null)

  React.useEffect(() => {
    setCards(cardsFromApi.reverse())
  }, []);

  const formFocus = (value: boolean) => {
    setIsCreateFocus(value);
  }

  const addCard = (title: string, text: string, color?: CardColors) => {
    const id = cards![0].id + 1;

    const newCard: ICard = {
      title,
      text,
      color: color || CardColors.black,
      id
    }
    console.log(newCard)
    const newCards: ICard[] = [...cards!];
    newCards.unshift(newCard);
    setCards(newCards);

  }

  return (
    <div className="main-box">
      <div className="box-header">
        <AddCard 
          isCreateFocus={isCreateFocus}
          formFocus={formFocus}
          addCard={addCard}
        />  
      </div>
      
      <ul className="card__list">
        {cards && cards!.map(card => (
          <li
            key={card.id} 
            className={`card ${card.color}`}
          >
            <h5 className="card__title">
              {card.title}
            </h5>

            <p className="card__text">
              {card.text}
            </p>
          </li>
        ))}
      </ul>

    </div>
  )
}
export default MainContainer;