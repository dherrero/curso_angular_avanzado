import { ActionReducerMap } from '@ngrx/store';
import { IAppStore } from '../config/IAppStore';
import { chatReducer } from './chatReducer';
import { todoReducer } from './todoReducer';

export const RootReducer: ActionReducerMap<IAppStore> = {
  chatState: chatReducer,
  // se incluirian más states reducers
  todoState: todoReducer,
};
