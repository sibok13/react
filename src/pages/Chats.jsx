import { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuid } from 'uuid';
import Messages from './../components/Messages';
import Chats from './../components/Chats';
import { useParams } from "react-router";

function ChatsPage() {

  const inputRef = useRef(null);
  const params = useParams();

  const [formMessage, setMessage] = useState([]);

  const sendMessge = (event) => {
      event.preventDefault();
      setMessage(formMessage => [...formMessage, {
          chatId: 0,
          messeges: {
            id: uuid().slice(0,8),
            author: event.target.athor.value,
            text: event.target.text.value,
            chatId: 0,
        },
      }]);
      const form = event.target;
      form.reset();
      focus();
  }

  const [chatsList, setChatsList] = useState([
    {
      id: 0,
      name: 'Общий чат',
    },
    {
      id: 1,
      name: 'Закрытый чат',
    }
  ]);

  let chatId = params.chatId;
  let index = chatsList.findIndex(el => el.id == chatId);
  if(index < 0){
    chatId = 0;
  }

  let lastName = formMessage.length > 0 ? formMessage.slice(-1).pop().author : null;

  useEffect(() => {
    if(!!lastName & lastName !== "ROBOT") {
      setTimeout(() => {
        setMessage(formMessage => [...formMessage, {
          id: uuid().slice(0,8),
          author: "ROBOT",
          text: "Привет!",
      }]);
      }, 3000);
    };
    }, [lastName]);

    function focus() {
      inputRef.current.focus();
    }

    useEffect(() => {
      focus();
      }, []);

  return (<>
    <div className="App">
        <div className="main-window">
          <div className="chats-list">
            <h3>Список чатов</h3>
            <Chats chatsList={chatsList} />
          </div>
          <div className="messages">
            {chatsList[chatId].name}
            <Messages formMessage={formMessage} />
          </div>
        </div>
        <div className="form-box">
            <form onSubmit={sendMessge} className="my-form">
                <TextField  inputRef={inputRef} id="outlined-basic" label="Имя" variant="filled" name='athor' type='text' />
                <TextField id="outlined-basic" label="Сообщение" variant="filled" name='text' type='text' />
                <Button type="submit" variant="contained">Отправить</Button>
            </form>
        </div>
    </div>
    </>
  );
}

export default ChatsPage;
