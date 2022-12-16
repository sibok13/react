import { combineReducers } from 'redux'
import { mainReducer } from './profileReducer'
import { chatsReducer } from './chatsReducer';  
import { messagesReducer } from './chatsReducer';
import { fireBaseReducer } from './fireBaseReducer'

export const rootReducer = combineReducers({
  showNameParam: mainReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  fireBase: fireBaseReducer,
})