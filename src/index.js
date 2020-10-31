import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Is a component that we get form redux. Wrapping everything in provider would give it access to the store object that we create with redux.
import  {Provider} from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';


ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
  <App/>
</BrowserRouter>
</Provider>

, document.getElementById('root'));

