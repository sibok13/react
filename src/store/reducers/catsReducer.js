const initState = {
    cats: []
}

export const catsReducer = (state = initState, action) => {
    switch (action.type) {
        case "get_cats":
            return {
                ...state,
                cats: action.payload
            }
        default:
            return state
    }
};

export const getData = () => {
    return async (dispatch) => {
        const response = await fetch('https://nekos.best/api/v2/neko');
        const data = await response.json();
        console.log(data);
        dispatch({
            type: "get_cats",
            payload: data,
        })
    }
}

console.log(getData());