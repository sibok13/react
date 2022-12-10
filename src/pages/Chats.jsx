import { useEffect, useState, useRef } from 'react';
import { useParams } from "react-router";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import MessagesList from '../components/MessagesList';
import ChatList from '../components/Chats';

import { initMessageTracking, initChatTracking, addMessageWithFirebase, addChatWithFirebase } from "../store/chat2Actions";
import { useDispatch, useSelector } from 'react-redux';


const ChatPage = () => {

    const { chatId } = useParams();

    const dispatch = useDispatch();
    const refMessageText = useRef(null);

    const chatsList = useSelector((state) => state.chats.chats);
    const messageList = useSelector((state) => state.chats.messages);
    const messages = messageList.messages[chatId];

    const [messageText, setMessageText] = useState('');
    const [messageAuthor, setMessageAuthor] = useState('User');
    const [nameNewChat, setNameNewChat] = useState('');

    const onAddMessage = () => {
        dispatch(
            addMessageWithFirebase(chatId, {
                id: `${chatId}-${messages?.length || 0}-${Date.now()}`,
                author: messageAuthor,
                text: messageText,
                date: Date.now(),
            })
        );
    };

    const onAddChat = () => {
        dispatch(
            addChatWithFirebase(Date.now(), {
                id: Date.now(),
                name: nameNewChat,
            })
        );
    };

    useEffect(() => {
        dispatch(initMessageTracking());
        dispatch(initChatTracking());

    }, []);

    const chatEnable = () => {
        const chats = chatsList.chats;
        if (chats.findIndex(chat => chat.id === +chatId) !== -1) {
            return true;
        }
        return false;
    };

  return (<>
    <div className="App">
        <div className="main-window">
          <div className="chats-list">
            <h3>Список чатов</h3>
            <ChatList chatsList={chatsList} />
            <div>
            <TextField id="outlined-basic" label="Название чата" variant="outlined" size="small"
                    value={nameNewChat} onChange={(event) => setNameNewChat(event.target.value)} />
            </div>
            <br />
            <div>
            <Button variant="contained" onClick={() => onAddChat()}>Новый чат</Button>
            </div>
          </div>
          <div className="messages">
            <div className={!chatEnable() ? 'disable' : undefined}>
              <h3>Сообщения</h3>
              <MessagesList messages={messages} chatId={chatId} />
            </div>
          </div>
        </div>
        <div className="form-box">
        <TextField label="Multiline" multiline maxRows={4} variant="filled" sx={{ width: 300 }}
                                    inputRef={refMessageText}
                                    value={messageText} onChange={(event) => setMessageText(event.target.value)} />
          <TextField id="outlined-basic" label="Автор" variant="outlined" size="small"
                                    value={messageAuthor} onChange={(event) => setMessageAuthor(event.target.value)} />
          <Button variant="contained" onClick={(e) => onAddMessage()}>Отправить</Button>
        </div>
    </div>
    </>
  );
}

export default ChatPage;
