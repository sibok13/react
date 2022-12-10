import './App.css';
import ChatsPage from './pages/Chats';
import HomePage from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';

import { Provider } from "react-redux";
import {store} from './store/store'

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path='/home/' element={<HomePage />} />
        <Route path='/chats/:chatId' element={<ChatsPage />} />
        <Route path='/chats/' element={<ChatsPage />} />
        <Route path='/profile/' element={<Profile />} />
        <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/'} element={<LoginPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
