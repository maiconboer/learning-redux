import React from 'react';

/* Atualizar os componentes da aplicação quando houver 
 * alteração no estado
 * */
import { Provider } from 'react-redux';

import store from './store/store';

import Home from './pages/Home';

import './global.styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

