import './App.css';
import ChatsPage from './pages/Chats';
import HomePage from './pages/Home';
import { Route, Routes, Redirect } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {

  return (<>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/chats/:chatId' element={<ChatsPage />} />
            <Route path='/chats/' element={<ChatsPage />} />
            <Route path='/profile/' element={<Profile />} />
          </Routes>
    </>
  );
}

export default App;
