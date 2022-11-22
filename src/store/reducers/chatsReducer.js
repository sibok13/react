const initState = {
    chats:
        [
            {
                id: 1,
                name: 'Общий',
                messages: [],
            },
            {
                id: 2,
                name: 'Закрытый',
                messages: [],
            }
        ]
}

function lastId(array) {
    let lastId = array.length > 0 ? array[array.length - 1].id : 1;
    return ++lastId;
}

export const chatsReducer = (state = initState, action) => {
    switch (action.type) {

        case 'addChat':
            const obj = {
                id: lastId(state.chats),
                name: action.payload,
                messages: [],
            };
            return {
                ...state,
                chats: [...state.chats, obj],
            }

        case 'addMessage': {

            const newId = lastId(state.chats[action.index].messages);

            const messageObj = { id: newId, text: action.messageText, author: action.messageAuthor };

            const newChats = [...state.chats];
            newChats[action.index].messages.push(messageObj);

            return {
                ...state,
                chats: newChats
            }
        }

        default:
            return state
    }
};