import { combineReducers } from 'redux'
import { mainReducer } from './profileReducer'
import { chatsReducer } from './chatsReducer'

export const rootReducer = combineReducers({
  showNameParam: mainReducer,
  chats: chatsReducer,
})