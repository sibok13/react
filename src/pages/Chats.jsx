import { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Messages from './../components/Messages';
import Chats from './../components/Chats';
import { useParams } from "react-router";

import { useDispatch, useSelector } from 'react-redux';

const ChatsPage = () => {
  const refMessageText = useRef(null);
  const chats = useSelector(state => state.chats.chats);
  const dispatch = useDispatch();

  const [messageText, setMessageText] = useState('');
  const [messageAuthor, setMessageAuthor] = useState('');
  const [nameNewChat, setNameNewChat] = useState('');

  let { chatId } = useParams();
  let index = chats.findIndex(el => el.id === +chatId);
  if (!chats[index]) {
      index = 0;
  }

  function sendMessage() {
      dispatch({ type: 'addMessage', index: index, messageText: messageText, messageAuthor: messageAuthor })
      setMessageText('');
      setMessageAuthor('');
      focusFieldMessage();
  }

  useEffect(() => {
      focusFieldMessage();
  }, []);

  let lastName = chats[index].messages.length > 0 ? chats[index].messages.slice(-1).pop().author : null;
  useEffect(() => {
    if(!!lastName & lastName !== "ROBOT") {
      setTimeout(() => {
        dispatch({ type: 'addMessage', index: index, messageText: "Привет, " + lastName + ", как дела?", messageAuthor: "ROBOT"})
      }, 3000);
    };
    }, [lastName, index]);

  function focusFieldMessage() {
      refMessageText.current.focus();
  }

  return (<>
    <div className="App">
        <div className="main-window">
          <div className="chats-list">
            <h3>Список чатов</h3>
            <Chats chatList={chats} />
            <div>
            <TextField id="outlined-basic" label="Название чата" variant="outlined" size="small"
                    value={nameNewChat} onChange={(event) => setNameNewChat(event.target.value)} />
            </div>
            <br />
            <div>
                <Button variant="contained" onClick={() => dispatch({ type: 'addChat', payload: nameNewChat })}>Новый чат</Button>
            </div>
          </div>
          <div className="messages">
            <h3>{chats[index].name} чат</h3>
            <Messages messList={chats[index].messages} index={index} />
          </div>
        </div>
        <div className="form-box">
          <TextField id="outlined-basic" label="Автор" variant="outlined" size="small"
                              value={messageAuthor} onChange={(event) => setMessageAuthor(event.target.value)} />
          <TextField inputRef={refMessageText}
                              value={messageText} onChange={(event) => setMessageText(event.target.value)} />
          <Button type="submit" variant="contained" onClick={(e) => sendMessage()}>Отправить</Button>
        </div>
    </div>
    </>
  );
}

export default ChatsPage;
