import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';

const middleWare = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, middleWare);
