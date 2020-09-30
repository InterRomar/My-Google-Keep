import { INote, NoteColors } from '../../components/MainContainer';
import { NoteActionTypes } from '../actionTypes';
import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actionNames';

type initialState = {
  notes: INote[]
}

const initialState = {
  notes: [
    {
      id: 8,
      title: 'React',
      text: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. ',
      color: NoteColors.blue
    },
    {
      id: 7,
      title: 'Angular',
      text: 'Angular — это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google',
      color: NoteColors.red
    },
    {
      id: 6,
      title: 'Node.js',
      text: 'Node или Node.js — программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.',
      color: NoteColors.green
    },
    {
      id: 5,
      title: 'Redux',
      text: 'Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. ',
      color: NoteColors.orange
    },
    {
      id: 4,
      title: 'Typescript',
      text: 'TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.',
      color: NoteColors.purple
    },
    {
      id: 3,
      title: 'Angular',
      text: 'Angular — это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google',
      color: NoteColors.red
    },
    {
      id: 2,
      title: 'React',
      text: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. ',
      color: NoteColors.blue
    },
    {
      id: 1,
      title: 'Typescript',
      text: 'TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.',
      color: NoteColors.purple
    },
  ]
}

const notesReducer = (state = initialState, action: NoteActionTypes) => {
  switch (action.type) {
    case ADD_NOTE:
      return (
        {
          ...state,
          notes: [
            action.payload,
            ...state.notes,
          ]
        }
      )
    case DELETE_NOTE:
      return (
        {
          ...state,
          notes: state.notes.filter((note: INote)=> note.id !== action.payload)
        }
      )
    case UPDATE_NOTE:
      return (
        {
          ...state,
          notes: state.notes.map((note: INote)=> {
            if (note.id !== action.payload.id) return note;
            
            return action.payload
          })
        }
      )
    default:
      return state;
  }
};

export default notesReducer;