import { createStore, applyMiddleware, /*compose*/ } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
//import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const robotAnswer = store => next => (action) => {
    if (action?.messageAuthor !== "ROBOT")
    {
      setTimeout(() => store.dispatch({ 
        type: 'addMessage', 
        index: action?.index, 
        messageText: "Привет, " + action?.messageAuthor + ", как дела?", 
        messageAuthor: "ROBOT"
      }), 2000);
    }
  return next(action)
}

const config = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(config, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(robotAnswer))
);

export const persist = persistStore(store);