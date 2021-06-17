import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';
import loaderReducer from './loader'
import userReducer from './user'
import tokenReducer from './token'


/* COMBINA AS VARIAVEIS GLOBAIS DO SISTEMA */
const  rootReducer = combineReducers({
  loaderReducer, 
  userReducer,
  tokenReducer,
})
/* COMBINA AS VARIAVEIS GLOBAIS DO SISTEMA */

const composeMiddlewares = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeMiddlewares(applyMiddleware(thunk)),
);

export default store;