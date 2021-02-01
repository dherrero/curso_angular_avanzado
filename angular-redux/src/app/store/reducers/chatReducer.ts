// Reducer que se va a encargar de gestionar el Estado ChatState

// Acciones que se van a tratar en este reducer
import {
  ACTION_CAMBIO_MENSAJE,
  ACTION_CAMBIO_VALOR,
} from '../actions/appActions';

// Ingerface del estado que va a devolver en cada caso
import IAppChatState from '../states/IAppChatState';

// Estado inicial reducer
const defaultAppState: IAppChatState = {
  mensaje: 'Hola',
  valor: true,
};

export function chatReducer(
  state = defaultAppState,
  action: any
): IAppChatState {
  console.log('hola chatReducer');

  switch (action.type) {
    case ACTION_CAMBIO_MENSAJE:
      return {
        ...state,
        mensaje: action.payload,
      };
    case ACTION_CAMBIO_VALOR:
      return {
        ...state,
        valor: action.payload,
      };
  }
  return state;
}
