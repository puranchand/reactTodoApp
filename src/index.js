import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

import {createStore,applyMiddleware} from 'redux'
import allReducers from './reducers';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
) 



ReactDOM.render(

	<Provider store = {store}>
  		<App />
    </Provider>
	, document.getElementById('root'));
registerServiceWorker();
