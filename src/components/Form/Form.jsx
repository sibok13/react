import { useState } from 'react';
import style from './Form.module.css';

export const Form = () => {
    const [formMessage, setMessage] = useState([]);

    const sendMessge = (event) => {
        event.preventDefault();
        setMessage(old => [...old, {
            author: event.target.athor.value,
            text: event.target.text.value,
        }]);
        console.log(formMessage);
    }
    
    return <>
        {formMessage.map((elm, key) => 
            <div key={key}>
                <div>Имя: {elm.author}</div>
                <div>Сообщение: {elm.text}</div>
            </div>
        )}
        <div className={style.myForm}>
            <form onSubmit={sendMessge}>
                <input name='athor' type='text' placeholder='Имя' />
                <input name='text' type='text' placeholder='Сообщение' />
                <button>Отправить</button>
            </form>
        </div>
    </>
};