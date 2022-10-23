import { useState, useEffect } from 'react';
import './App.css';
// import {Form} from './components/Form/Form'

function App() {

  const [formMessage, setMessage] = useState([]);

  const sendMessge = (event) => {
      event.preventDefault();
      setMessage(old => [...old, {
          author: event.target.athor.value,
          text: event.target.text.value,
      }]);
      console.log(formMessage);
  }

  let lastName = formMessage.length > 0 ? formMessage.slice(-1).pop().author : null;

  useEffect(() => {
    if(!!lastName) {
      setTimeout(() => {
        alert('ROBOT: Привет, ' + lastName + '!');
      }, 3000);
    };
    }, [lastName]);

  return (<>
    <div className="App">
        <div class="messages">
          {formMessage.map((elm, key) => 
              <div key={key}>
                  <div>Имя: {elm.author}</div>
                  <div>Сообщение: {elm.text}</div>
                  <hr />
              </div>
          )}
        </div>
        <div>
            <form onSubmit={sendMessge} class="myForm">
                <input name='athor' type='text' placeholder='Имя' />
                <input name='text' type='text' placeholder='Сообщение' />
                <button>Отправить</button>
            </form>
        </div>
    </div>
    {/* {Form} */}
    </>
  );
}

export default App;
