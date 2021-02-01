// Definido la estructura del STORE

import IAppChatState from '../states/IAppChatState';
import IAppTodoState from '../states/IAppTodoState';

export interface IAppStore {
  chatState: IAppChatState;
  todoState: IAppTodoState;
}
