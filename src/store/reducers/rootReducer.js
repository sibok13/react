import { combineReducers } from 'redux'
import { mainReducer } from './reducer'

export const rootReducer = combineReducers({
  showNameParam: mainReducer,
})