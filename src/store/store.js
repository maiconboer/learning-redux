/* responsável por inicializar o redux */
import { createStore } from 'redux';

import reducersTodos from './modules/Todos/reducers';

/* aqui passamos a lista de reducers */
const store = createStore(reducersTodos);

export default store;