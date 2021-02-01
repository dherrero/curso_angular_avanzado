// Definido la estructura del STORE

import IAppChatState from '../states/IAppChatState';

export interface IAppStore {
  chatState: IAppChatState;
}
