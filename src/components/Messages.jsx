function Messages(props) {
    const messList = props.messList;

    return (
        <>
          {Object.keys(messList).map((id) =>
              <div key={id}>
                  <div>Имя: {messList[id].author}</div>
                  <div>Сообщение: {messList[id].text}</div>
                  <hr />
              </div>
          )}
        </>
    );
}

export default Messages;