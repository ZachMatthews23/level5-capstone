import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'   //provides state to the store
import store from  './redux/store'   //store is passed as a prop to the provider

ReactDOM.render(
  <Provider
    store={store}>  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,

  
  document.getElementById('root')

  
);


reportWebVitals();
