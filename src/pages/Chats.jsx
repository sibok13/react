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

  const [chatsList, setChatsList] = useState([
    {
      id: 0,
      name: 'Общий чат',
      messeges: [],
    },
    {
      id: 1,
      name: 'Закрытый чат',
      messeges: [],
    }
  ]);

  const sendMessges = (event) => {
    event.preventDefault();
    chatId = event.target.id;
    setChatsList(
      chatsList => {
        const chatsListNew = [...chatsList];
        chatsListNew[chatId].messeges = 
          [...chatsListNew[chatId].messeges, {
              id: uuid().slice(0,8),
              author: event.target.athor.value,
              text: event.target.text.value,
        }]
        return chatsListNew;
      }
    );
    const form = event.target;
    form.reset();
    focus();
  }

  // определение id чата, для дальнейшей работы с ним
  let chatId = params.chatId;
  let index = chatsList.findIndex(el => el.id == chatId);
  if(index < 0){
    chatId = 0;
  }
 
  let lastName = chatsList[chatId].messeges.length > 0 ? chatsList[chatId].messeges.slice(-1).pop().author : null;
  useEffect(() => {
    if(!!lastName & lastName !== "ROBOT") {
      setTimeout(() => {
        setChatsList(
          chatsList => {
            const chatsListNew = [...chatsList];
            chatsListNew[chatId].messeges = 
              [...chatsListNew[chatId].messeges, {
                  id: uuid().slice(0,8),
                  author: "ROBOT",
                  text: "Привет, как дела?",
            }]
            return chatsListNew;
          }
        );
      }, 3000);
    };
    }, [lastName, chatId]);

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
            <h3>{chatsList[chatId].name}</h3>
            <Messages MessagesList={chatsList} ChatId={chatId} />
          </div>
        </div>
        <div className="form-box">
            <form onSubmit={sendMessges} className="my-form" id={chatId}>
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
