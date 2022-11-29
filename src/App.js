import './App.css';
import ChatsPage from './pages/Chats';
import HomePage from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Cats from './pages/Cats';

import { Provider } from "react-redux";
import {store} from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/chats/:chatId' element={<ChatsPage />} />
        <Route path='/chats/' element={<ChatsPage />} />
        <Route path='/profile/' element={<Profile />} />
        <Route path='/cats/' element={<Cats />} />
      </Routes>
    </Provider>
  );
}

export default App;
