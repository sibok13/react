import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
// import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const robotAnswer = store => next => (action) => {
    if (action?.messageAuthor === "ROBOT")
    {
      setTimeout(() => store.dispatch({ 
        type: 'addMessage', 
        index: 0, 
        messageText: "Привет, как дела?", 
        messageAuthor: "ROBOT"
      }), 2000);
    }
  return next(action)
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(robotAnswer))
);