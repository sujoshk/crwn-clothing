

// The middleware is used to receive the actions before the store gets it. In our case we are going to use redux logger as our middleware to log the actions whenever they are fired off. The function required to enable that is called applyMiddleware and is imported from redux library

// Logger helps us debug

import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import rootReducer from './root-reducer';

// we use an array for this in order to make this app scalable. In case we want to use some other middlewares apart from logger
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

