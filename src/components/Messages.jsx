function Messages(props) {
    return (
        <>
          {props.formMessage.map((elm) => 
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