import { ActionReducerMap } from '@ngrx/store';
import { IAppStore } from '../config/IAppStore';
import { chatReducer } from './chatReducer';

export const RootReducer: ActionReducerMap<IAppStore> = {
  chatState: chatReducer,
  // se incluirian más states reducers
};
