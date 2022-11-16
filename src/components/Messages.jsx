function Messages(props) {
    return (
        <>
          {props.MessagesList[props.ChatId].messeges.map((elm) => 
              <div key={elm.id}>
                  <div>Имя: {elm.author}</div>
                  <div>Сообщение: {elm.text}</div>
                  <hr />
              </div>
          )}
        </>
    );
}

export default Messages;