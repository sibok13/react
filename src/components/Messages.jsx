function Messages(props) {
    return (
        <>
          {props.formMessage.map((elm) => 
              <div key={elm.messeges.id}>
                  <div>Имя: {elm.messeges.author}</div>
                  <div>Сообщение: {elm.messeges.text}</div>
                  <hr />
              </div>
          )}
        </>
    );
}

export default Messages;