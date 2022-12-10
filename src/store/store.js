// import { initState } from './reducers/profileReducer'
import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/rootReducer'
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)