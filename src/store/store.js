import { initState } from './iniState'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/rootReducer'

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware())
)