import { title } from 'process';
import { TODO_ACTIONS } from '../actions/todoActions';
import IAppTodoState from '../states/IAppTodoState';

const defaultAppTodoState: IAppTodoState = {
  title: 'default todo list',
  list: [],
};

export const todoReducer = (
  state: IAppTodoState = defaultAppTodoState,
  action: any
): IAppTodoState => {
  console.log('hola todoReducer');
  switch (action.type) {
    case TODO_ACTIONS.ADD:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case TODO_ACTIONS.CLEAR:
      return {
        ...state,
        list: [],
      };
    case TODO_ACTIONS.NEW:
      return {
        title: action.payload,
        list: [],
      };
  }
  return state;
};
